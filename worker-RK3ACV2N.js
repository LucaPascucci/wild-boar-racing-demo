// src/app/gap-chart/service/gap-chart.worker.ts
addEventListener("message", ({ data }) => {
  const gapChartConfig = data.gapChartConfig;
  const lapSimulatorConfig = data.lapSimulatorConfig;
  const normalizedCumulatedTimeLaps = data.normalizedCumulatedTimeLaps;
  const shadowLaps = data.shadowLaps;
  const futureLaps = data.futureLaps;
  const futureLapsWithPitNow = data.futureLapsWithPitNow;
  const teamNamesByRaceNumber = data.teamNamesByRaceNumber;
  const colorByRaceNumber = data.colorByRaceNumber;
  const gapChartVisibleByRaceNumber = data.gapChartVisibleByRaceNumber;
  const shadowChartVisibleByRaceNumber = data.shadowChartVisibleByRaceNumber;
  const pitNowChartVisibleByRaceNumber = data.pitNowChartVisibleByRaceNumber;
  const referenceRaceNumber = lapSimulatorConfig.referenceRaceNumber;
  const lapWindow = gapChartConfig.lapWindow;
  const lapWindowResult = getCumulatedTimeLapsWindow(
    normalizedCumulatedTimeLaps,
    shadowLaps,
    lapWindow,
    referenceRaceNumber
  );
  const chartData = generateData(
    lapWindowResult,
    teamNamesByRaceNumber,
    futureLaps,
    futureLapsWithPitNow,
    colorByRaceNumber,
    gapChartVisibleByRaceNumber,
    shadowChartVisibleByRaceNumber,
    pitNowChartVisibleByRaceNumber
  );
  postMessage({
    chartData
  });
});
function getCumulatedTimeLapsWindow(normalizedCumulatedTimeLaps, shadowLaps, lapWindow, referenceRaceNumber) {
  const cumulatedTimeLapsWindow = /* @__PURE__ */ new Map();
  const shadowLapsWindow = [];
  let referenceCumulatedTimeLapsIndex = 0;
  if (referenceRaceNumber && normalizedCumulatedTimeLaps.has(referenceRaceNumber)) {
    const referenceCumulatedTimeLaps = normalizedCumulatedTimeLaps.get(referenceRaceNumber);
    referenceCumulatedTimeLapsIndex = referenceCumulatedTimeLaps !== void 0 ? referenceCumulatedTimeLaps.length - lapWindow : 0;
  } else {
    let minLaps = Number.MAX_VALUE;
    normalizedCumulatedTimeLaps.forEach((laps) => {
      minLaps = Math.min(minLaps, laps.length);
    });
    referenceCumulatedTimeLapsIndex = minLaps - lapWindow;
  }
  if (referenceCumulatedTimeLapsIndex <= 0) {
    return {
      cumulatedTimeLapsWindow: normalizedCumulatedTimeLaps,
      startLapNumber: 0,
      shadowTimeLapsWindow: shadowLaps
    };
  }
  normalizedCumulatedTimeLaps.forEach((laps, raceNumber) => {
    if (laps.length > referenceCumulatedTimeLapsIndex) {
      const windowLaps = laps.slice(referenceCumulatedTimeLapsIndex);
      cumulatedTimeLapsWindow.set(raceNumber, windowLaps);
    }
  });
  shadowLaps.forEach((shadowLap) => {
    if (shadowLap.startLapNumber >= referenceCumulatedTimeLapsIndex) {
      shadowLapsWindow.push({
        startLapNumber: shadowLap.startLapNumber,
        cumulatedTimeLaps: cumulatedTimeLapsWindow
      });
    } else {
      const newStartLapNumber = referenceCumulatedTimeLapsIndex;
      const shadowTimeLapsWindow = /* @__PURE__ */ new Map();
      shadowLap.cumulatedTimeLaps.forEach((laps, raceNumber) => {
        const windowLaps = laps.slice(referenceCumulatedTimeLapsIndex - shadowLap.startLapNumber);
        shadowTimeLapsWindow.set(raceNumber, windowLaps);
      });
      shadowLapsWindow.push({
        startLapNumber: newStartLapNumber,
        cumulatedTimeLaps: shadowTimeLapsWindow
      });
    }
  });
  return {
    cumulatedTimeLapsWindow,
    startLapNumber: referenceCumulatedTimeLapsIndex,
    shadowTimeLapsWindow: shadowLapsWindow
  };
}
function generateData(lapWindowResult, teamNamesByRaceNumber, futureLaps, futureLapsWithPitNow, colorByRaceNumber, gapChartVisibleByRaceNumber, shadowChartVisibleByRaceNumber, pitNowChartVisibleByRaceNumber) {
  const datasets = [];
  lapWindowResult.cumulatedTimeLapsWindow.forEach((laps, raceNumber) => {
    if (!gapChartVisibleByRaceNumber.get(raceNumber)) {
      return;
    }
    const color = colorByRaceNumber.get(raceNumber);
    const nameSuffix = teamNamesByRaceNumber.has(raceNumber) ? " - " + teamNamesByRaceNumber.get(raceNumber) : "";
    const name = raceNumber + nameSuffix;
    const chartDataset = {
      data: generateLapPoints(laps, lapWindowResult.startLapNumber),
      label: name,
      backgroundColor: color,
      borderColor: color,
      pointBackgroundColor: color,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: color,
      showLine: true,
      parsing: false,
      normalized: true
    };
    datasets.push(chartDataset);
  });
  lapWindowResult.shadowTimeLapsWindow.forEach((shadowLap) => {
    shadowLap.cumulatedTimeLaps.forEach((laps, raceNumber) => {
      if (!shadowChartVisibleByRaceNumber.get(raceNumber)) {
        return;
      }
      const color = colorByRaceNumber.get(raceNumber);
      const nameSuffix = teamNamesByRaceNumber.has(raceNumber) ? " - " + teamNamesByRaceNumber.get(raceNumber) : "";
      const name = "SHADOW - " + raceNumber + nameSuffix;
      const chartDataset = {
        data: generateLapPoints(laps, shadowLap.startLapNumber),
        label: name,
        backgroundColor: "gray",
        borderColor: "gray",
        pointBackgroundColor: color,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "gray",
        showLine: true,
        parsing: false,
        normalized: true
      };
      datasets.push(chartDataset);
    });
  });
  futureLaps.forEach((futureLap) => {
    futureLap.cumulatedTimeLaps.forEach((laps, raceNumber) => {
      if (!gapChartVisibleByRaceNumber.get(raceNumber)) {
        return;
      }
      const color = colorByRaceNumber.get(raceNumber);
      const nameSuffix = teamNamesByRaceNumber.has(raceNumber) ? " - " + teamNamesByRaceNumber.get(raceNumber) : "";
      const name = "FUTURE - " + raceNumber + nameSuffix;
      const chartDataset = {
        data: generateLapPoints(laps, futureLap.startLapNumber),
        label: name,
        backgroundColor: "gray",
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: "gray",
        borderDash: [5, 5],
        showLine: true,
        parsing: false,
        normalized: true
      };
      datasets.push(chartDataset);
    });
  });
  futureLapsWithPitNow.forEach((futureLapWithPitNow) => {
    futureLapWithPitNow.cumulatedTimeLaps.forEach((laps, raceNumber) => {
      if (!pitNowChartVisibleByRaceNumber.get(raceNumber)) {
        return;
      }
      const color = colorByRaceNumber.get(raceNumber);
      const nameSuffix = teamNamesByRaceNumber.has(raceNumber) ? " - " + teamNamesByRaceNumber.get(raceNumber) : "";
      const name = "PIT NOW - " + raceNumber + nameSuffix;
      const chartDataset = {
        data: generateLapPoints(laps, futureLapWithPitNow.startLapNumber),
        label: name,
        backgroundColor: "gray",
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: "gray",
        borderDash: [5, 5],
        showLine: true,
        parsing: false,
        normalized: true
      };
      datasets.push(chartDataset);
    });
  });
  return {
    datasets
  };
}
function generateLapPoints(laps, startLapNumber) {
  const result = [];
  laps.forEach((lap, index) => {
    result.push({
      x: index + startLapNumber,
      y: lap
    });
  });
  return result;
}
//# sourceMappingURL=worker-RK3ACV2N.js.map
