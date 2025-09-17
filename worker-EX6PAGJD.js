// src/app/lap/service/lap.worker.ts
addEventListener("message", ({ data }) => {
  const lapConfig = data.lapConfig;
  const laps = data.laps;
  const activeTeam = data.activeTeam;
  const lapsArray = [...laps.values()];
  const pitLaps = lapsArray.filter((lap) => lap.pitStop);
  const paceLapThresholdMilliseconds = lapConfig.paceLapThresholdMilliseconds;
  const paceLapNumber = lapConfig.paceLapNumber;
  const lapsByRaceNumber = getLapsByRaceNumber(lapsArray);
  const pacesByRaceNumber = calculatePacesByRaceNumber(lapsArray, paceLapThresholdMilliseconds, paceLapNumber);
  const validTeamPaceLaps = getValidTeamPaceLaps(lapsArray, paceLapThresholdMilliseconds);
  const gapFirstLapMillisecondsByRaceNumber = calculateGapFirstLapMillisecondsByRaceNumber(lapsArray);
  const cumulatedTimeByRaceNumber = calculateCumulatedTimeByRaceNumber(
    lapsByRaceNumber,
    gapFirstLapMillisecondsByRaceNumber
  );
  const lastLapNumberByRaceNumber = getLastLapNumberByRaceNumber(lapsByRaceNumber);
  const teamBestLap = getTeamBestLap(validTeamPaceLaps);
  const lastTeamLap = getLastTeamLap(lapsArray, activeTeam);
  const lastTeamLapDeltaMilliseconds = getLastTeamLapDeltaMilliseconds(lapsArray, lastTeamLap, activeTeam);
  postMessage({
    pacesByRaceNumber,
    cumulatedTimeByRaceNumber,
    lastLapNumberByRaceNumber,
    validTeamPaceLaps,
    teamBestLap,
    lastTeamLap,
    lastTeamLapDeltaMilliseconds,
    pitLaps
  });
});
function getLastLapNumberByRaceNumber(lapsByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  lapsByRaceNumber.forEach((laps, raceNumber) => {
    if (laps.length > 0) {
      const sortedLaps = laps.sort((a, b) => b.lapNumber - a.lapNumber);
      result.set(raceNumber, sortedLaps[0].lapNumber);
    }
  });
  return result;
}
function calculateCumulatedTimeByRaceNumber(lapsByRaceNumber, gapFirstLapMillisecondsByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  lapsByRaceNumber.forEach((laps, raceNumber) => {
    const sortedLaps = laps.sort((a, b) => a.lapNumber - b.lapNumber);
    const gapFirstLapMilliseconds = gapFirstLapMillisecondsByRaceNumber.get(raceNumber) || 0;
    const cumulativeTimes = [];
    cumulativeTimes.push(gapFirstLapMilliseconds);
    let cumulativeTime = gapFirstLapMilliseconds;
    sortedLaps.forEach((lap) => {
      cumulativeTime += lap.lapMilliseconds;
      cumulativeTimes.push(cumulativeTime);
    });
    result.set(raceNumber, cumulativeTimes);
  });
  return result;
}
function getLapsByRaceNumber(laps) {
  const result = /* @__PURE__ */ new Map();
  laps.forEach((lap) => {
    if (!result.has(lap.raceNumber)) {
      result.set(lap.raceNumber, []);
    }
    result.get(lap.raceNumber)?.push(lap);
  });
  return result;
}
function calculatePacesByRaceNumber(laps, paceLapThresholdMilliseconds, paceLapNumber) {
  const result = /* @__PURE__ */ new Map();
  const lapsByRaceNumber = /* @__PURE__ */ new Map();
  laps.filter((lap) => !lap.pitStop).forEach((lap) => {
    if (!lapsByRaceNumber.has(lap.raceNumber)) {
      lapsByRaceNumber.set(lap.raceNumber, []);
    }
    lapsByRaceNumber.get(lap.raceNumber)?.push(lap);
  });
  lapsByRaceNumber.forEach((driverLaps, raceNumber) => {
    const sortedLaps = driverLaps.filter((lap) => !lap.pitStop && lap.lapMilliseconds < paceLapThresholdMilliseconds).sort((a, b) => b.lapNumber - a.lapNumber);
    const recentLaps = sortedLaps.slice(0, paceLapNumber);
    if (recentLaps.length > 0) {
      const totalTime = recentLaps.reduce((sum, lap) => sum + lap.lapMilliseconds, 0);
      const averageTime = Math.round(totalTime / recentLaps.length);
      result.set(raceNumber, averageTime);
    }
  });
  return result;
}
function getValidTeamPaceLaps(laps, paceLapThresholdMilliseconds) {
  return laps.filter(
    (lap) => !lap.pitStop && lap.driverId !== void 0 && lap.driverId !== null && lap.stintId !== void 0 && lap.stintId !== null && lap.lapMilliseconds <= paceLapThresholdMilliseconds
  );
}
function getTeamBestLap(validTeamPaceLaps) {
  if (validTeamPaceLaps.length === 0) {
    return void 0;
  }
  return validTeamPaceLaps.reduce((bestLap, currentLap) => {
    return currentLap.lapMilliseconds < bestLap.lapMilliseconds ? currentLap : bestLap;
  });
}
function getLastTeamLap(laps, activeTeam) {
  if (!activeTeam) {
    return void 0;
  }
  const teamLaps = laps.filter((lap) => lap.raceNumber === activeTeam.raceNumber);
  if (teamLaps.length === 0) {
    return void 0;
  }
  return teamLaps.reduce((lastLap, currentLap) => {
    return currentLap.lapNumber > lastLap.lapNumber ? currentLap : lastLap;
  });
}
function getLastTeamLapDeltaMilliseconds(laps, lastTeamLap, activeTeam) {
  if (!lastTeamLap) {
    return void 0;
  }
  if (!activeTeam) {
    return void 0;
  }
  if (lastTeamLap.lapNumber === 1) {
    return void 0;
  }
  const teamLaps = laps.filter((lap) => lap.raceNumber === activeTeam.raceNumber);
  const sortedTeamLaps = teamLaps.sort((a, b) => b.lapNumber - a.lapNumber);
  if (sortedTeamLaps.length < 2) {
    return void 0;
  }
  const previousLap = sortedTeamLaps[1];
  return lastTeamLap.lapMilliseconds - previousLap.lapMilliseconds;
}
function calculateGapFirstLapMillisecondsByRaceNumber(laps) {
  const result = /* @__PURE__ */ new Map();
  const firstLapsByRaceNumber = laps.filter((lap) => lap.lapNumber === 1).reduce((acc, lap) => {
    acc.set(lap.raceNumber, lap);
    return acc;
  }, /* @__PURE__ */ new Map());
  const leaderLap = Array.from(firstLapsByRaceNumber.values()).find((lap) => lap.position === 1);
  if (!leaderLap) {
    return result;
  }
  const sortedLaps = Array.from(firstLapsByRaceNumber.values()).filter((lap) => lap.position !== void 0).sort((a, b) => a.position - b.position);
  let cumulativeGapFromLeader = 0;
  sortedLaps.forEach((lap) => {
    if (lap.position === 1) {
      result.set(lap.raceNumber, 0);
      cumulativeGapFromLeader = 0;
    } else if (lap.gap) {
      const gapToPrevious = convertGapToMilliseconds(lap.gap);
      cumulativeGapFromLeader += gapToPrevious;
      result.set(lap.raceNumber, cumulativeGapFromLeader);
    } else {
      result.set(lap.raceNumber, cumulativeGapFromLeader);
    }
  });
  const deltaMillisecondsFromLeader = /* @__PURE__ */ new Map();
  sortedLaps.forEach((lap) => {
    if (lap.position === 1) {
      deltaMillisecondsFromLeader.set(lap.raceNumber, 0);
    } else {
      deltaMillisecondsFromLeader.set(lap.raceNumber, leaderLap.lapMilliseconds - lap.lapMilliseconds);
    }
  });
  result.forEach((gap, raceNumber) => {
    if (deltaMillisecondsFromLeader.has(raceNumber)) {
      result.set(raceNumber, gap + deltaMillisecondsFromLeader.get(raceNumber));
    }
  });
  return result;
}
function convertGapToMilliseconds(gapString) {
  if (!gapString || gapString.trim() === "") {
    return 0;
  }
  const cleanGap = gapString.trim();
  if (cleanGap.includes(":")) {
    const [minutesPart, secondsPart] = cleanGap.split(":");
    const minutes = parseInt(minutesPart, 10);
    if (secondsPart.includes(".")) {
      const [seconds, milliseconds] = secondsPart.split(".");
      const totalMilliseconds = minutes * 60 * 1e3 + parseInt(seconds, 10) * 1e3 + parseInt(milliseconds.padEnd(3, "0").substring(0, 3), 10);
      return totalMilliseconds;
    } else {
      const seconds = parseInt(secondsPart, 10);
      return minutes * 60 * 1e3 + seconds * 1e3;
    }
  }
  if (cleanGap.includes(".")) {
    const [seconds, milliseconds] = cleanGap.split(".");
    return parseInt(seconds, 10) * 1e3 + parseInt(milliseconds.padEnd(3, "0").substring(0, 3), 10);
  }
  return parseFloat(cleanGap) * 1e3;
}
//# sourceMappingURL=worker-EX6PAGJD.js.map
