// src/app/lap-simulator/service/lap-simulator.worker.ts
addEventListener("message", ({ data }) => {
  const cumulatedTimeByRaceNumber = data.cumulatedTimeByRaceNumber;
  const pacesByRaceNumber = data.pacesByRaceNumber;
  const lastLapNumberByRaceNumber = data.lastLapNumberByRaceNumber;
  const lapSimulatorConfig = data.lapSimulatorConfig;
  const firstTeamRaceNumber = data.firstTeamRaceNumber;
  const referenceRaceNumber = lapSimulatorConfig.referenceRaceNumber;
  const nextPitMilliseconds = lapSimulatorConfig.nextPitMilliseconds;
  const timeLostThroughPitMilliseconds = lapSimulatorConfig.timeLostThroughPitMilliseconds;
  const referenceRaceNumberAverageTime = calculateReferenceRaceNumberAverageTime(cumulatedTimeByRaceNumber, referenceRaceNumber);
  const normalizedCumulatedTimeLaps = normalizeCumulatedTimeLaps(cumulatedTimeByRaceNumber, referenceRaceNumberAverageTime);
  const shadowLaps = createShadows(
    normalizedCumulatedTimeLaps,
    referenceRaceNumberAverageTime,
    referenceRaceNumber,
    lastLapNumberByRaceNumber
  );
  const futureLaps = simulateFutureLaps(
    cumulatedTimeByRaceNumber,
    pacesByRaceNumber,
    lastLapNumberByRaceNumber,
    referenceRaceNumberAverageTime,
    lapSimulatorConfig
  );
  const futureLapsWithPitNow = createFutureLapsWithPitNow(
    futureLaps,
    nextPitMilliseconds,
    timeLostThroughPitMilliseconds
  );
  const virtualLastCumulatedTimeByRaceNumber = calculateVirtualLastCumulatedTimeByRaceNumber(
    firstTeamRaceNumber,
    cumulatedTimeByRaceNumber,
    lastLapNumberByRaceNumber,
    pacesByRaceNumber
  );
  postMessage({
    normalizedCumulatedTimeLaps,
    shadowLaps,
    futureLaps,
    futureLapsWithPitNow,
    virtualLastCumulatedTimeByRaceNumber
  });
});
function simulateFutureLaps(cumulatedTimeByRaceNumber, pacesByRaceNumber, lastLapNumberByRaceNumber, referenceRaceNumberAverageTime, lapSimulatorConfig) {
  const result = [];
  const futureLaps = /* @__PURE__ */ new Map();
  const cumulated = cumulatedTimeByRaceNumber;
  for (let i = 0; i <= lapSimulatorConfig.simulatedLaps - 1; i++) {
    const raceNumbers = [...cumulatedTimeByRaceNumber.keys()];
    const lastCumulatedTimeLap = getLastCumulatedTimeLap(cumulated);
    const futureCumulatedTimeLap = generateFutureLastCumulatedTimeLap(lastCumulatedTimeLap, pacesByRaceNumber);
    const currentTrackPositions = generateTrackPositions(lastCumulatedTimeLap);
    const futureTrackPositions = generateTrackPositions(futureCumulatedTimeLap);
    raceNumbers.forEach((raceNumber) => {
      const futureCumulatedTimeLapRaceNumber = futureCumulatedTimeLap.get(raceNumber);
      if (futureCumulatedTimeLapRaceNumber) {
        cumulated.get(raceNumber)?.push(futureCumulatedTimeLapRaceNumber);
        if (!futureLaps.has(raceNumber)) {
          const firstFutureLaps = [];
          const lastCumulatedTimeLapByRaceNumber = lastCumulatedTimeLap.get(raceNumber);
          if (lastCumulatedTimeLapByRaceNumber) {
            firstFutureLaps.push(lastCumulatedTimeLapByRaceNumber);
          }
          firstFutureLaps.push(futureCumulatedTimeLapRaceNumber);
          futureLaps.set(raceNumber, firstFutureLaps);
        } else {
          futureLaps.get(raceNumber)?.push(futureCumulatedTimeLapRaceNumber);
        }
      }
    });
  }
  futureLaps.forEach((laps, raceNumber) => {
    const lastLapNumber = lastLapNumberByRaceNumber.get(raceNumber);
    if (lastLapNumber) {
      const startLapNumber = lastLapNumber;
      const normalizedTimeLaps = normalizeTimeLaps(laps, referenceRaceNumberAverageTime, startLapNumber);
      result.push({
        startLapNumber,
        cumulatedTimeLaps: /* @__PURE__ */ new Map([
          [raceNumber, normalizedTimeLaps]
        ])
      });
    }
  });
  return result;
}
function getLastCumulatedTimeLap(cumulatedTimeLaps) {
  const result = /* @__PURE__ */ new Map();
  cumulatedTimeLaps.forEach((cumulatedTimeLaps2, raceNumber) => {
    result.set(raceNumber, cumulatedTimeLaps2[cumulatedTimeLaps2.length - 1]);
  });
  return result;
}
function generateTrackPositions(lastCumulatedTimeLap) {
  const result = /* @__PURE__ */ new Map();
  const trackPositions = [];
  lastCumulatedTimeLap.forEach((timeLap, raceNumber) => {
    trackPositions.push({
      raceNumber,
      totalLapTimeMilliseconds: timeLap
    });
  });
  trackPositions.sort((a, b) => b.totalLapTimeMilliseconds - a.totalLapTimeMilliseconds);
  trackPositions.forEach((trackPosition, index) => {
    result.set(trackPosition.raceNumber, index + 1);
  });
  return result;
}
function generateFutureLastCumulatedTimeLap(lastCumulatedTimeLap, pacesByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  lastCumulatedTimeLap.forEach((lap, raceNumber) => {
    const pace = pacesByRaceNumber.get(raceNumber) || 0;
    result.set(raceNumber, lap + pace);
  });
  return result;
}
function calculateReferenceRaceNumberAverageTime(cumulatedTimeByRaceNumber, referenceRaceNumber) {
  if (cumulatedTimeByRaceNumber.has(referenceRaceNumber)) {
    const referenceRaceNumberCumulatedTimeLaps = cumulatedTimeByRaceNumber.get(referenceRaceNumber);
    if (referenceRaceNumberCumulatedTimeLaps && referenceRaceNumberCumulatedTimeLaps.length > 0) {
      return referenceRaceNumberCumulatedTimeLaps[referenceRaceNumberCumulatedTimeLaps.length - 1] / (referenceRaceNumberCumulatedTimeLaps.length - 1);
    }
    return 0;
  }
  return 0;
}
function normalizeTimeLaps(laps, referenceRaceNumberAverageTime, startLapNumber) {
  if (referenceRaceNumberAverageTime === 0) {
    return laps;
  }
  return laps.map((lap, index) => {
    const realLapNumber = startLapNumber + index;
    return realLapNumber * referenceRaceNumberAverageTime - lap;
  });
}
function normalizeCumulatedTimeLaps(cumulatedTimeByRaceNumber, referenceRaceNumberAverageTime) {
  if (referenceRaceNumberAverageTime === 0) {
    return cumulatedTimeByRaceNumber;
  }
  const result = /* @__PURE__ */ new Map();
  cumulatedTimeByRaceNumber.forEach((laps, raceNumber) => {
    const normalizedLaps = normalizeTimeLaps(laps, referenceRaceNumberAverageTime, 0);
    result.set(raceNumber, normalizedLaps);
  });
  return result;
}
function createShadows(normalizedCumulatedTimeLaps, referenceRaceNumberAverageTime, referenceRaceNumber, lastLapNumberByRaceNumber) {
  const result = [];
  const referenceLapNumber = lastLapNumberByRaceNumber.get(referenceRaceNumber);
  if (referenceLapNumber) {
    normalizedCumulatedTimeLaps.forEach((laps, raceNumber) => {
      if (referenceRaceNumber !== raceNumber) {
        const lastLapNumberRaceNumber = lastLapNumberByRaceNumber.get(raceNumber);
        if (lastLapNumberRaceNumber && lastLapNumberRaceNumber !== referenceLapNumber) {
          const shadowLapNumber = referenceLapNumber - lastLapNumberRaceNumber;
          const shadowLaps = createShadow(laps, referenceRaceNumberAverageTime, shadowLapNumber);
          result.push({
            cumulatedTimeLaps: /* @__PURE__ */ new Map([
              [raceNumber, shadowLaps]
            ]),
            startLapNumber: shadowLapNumber >= 0 ? shadowLapNumber : 0
          });
        }
      }
    });
  }
  return result;
}
function createShadow(laps, referenceRaceNumberAverageTime, shadowLapNumber) {
  let result = [];
  if (shadowLapNumber < 0) {
    laps = laps.slice(Math.abs(shadowLapNumber));
  }
  laps.forEach((lap) => {
    result.push(lap + referenceRaceNumberAverageTime * shadowLapNumber);
  });
  return result;
}
function createFutureLapsWithPitNow(futureLaps, nextPitMilliseconds, timeLostThroughPitMilliseconds) {
  const result = [];
  futureLaps.forEach((futureLap) => {
    const startLapNumber = futureLap.startLapNumber;
    const translatedCumulatedTimeLaps = /* @__PURE__ */ new Map();
    futureLap.cumulatedTimeLaps.forEach((laps, raceNumber) => {
      const translatedLaps = [];
      for (let i = 0; i < laps.length; i++) {
        if (i === 0) {
          translatedLaps.push(laps[i]);
        } else {
          translatedLaps.push(laps[i] - (nextPitMilliseconds + timeLostThroughPitMilliseconds));
        }
      }
      translatedCumulatedTimeLaps.set(raceNumber, translatedLaps);
    });
    result.push({
      startLapNumber,
      cumulatedTimeLaps: translatedCumulatedTimeLaps
    });
  });
  return result;
}
function calculateVirtualLastCumulatedTimeByRaceNumber(firstTeamRaceNumber, cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber, pacesByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  if (!firstTeamRaceNumber) {
    return result;
  }
  const firstTeamLastLapNumber = lastLapNumberByRaceNumber.get(firstTeamRaceNumber);
  for (const [raceNumber, cumulatedTimes] of cumulatedTimeByRaceNumber) {
    if (raceNumber === firstTeamRaceNumber) {
      if (cumulatedTimes.length > 0) {
        result.set(raceNumber, cumulatedTimes[cumulatedTimes.length - 1]);
      }
    } else {
      const lastLap = lastLapNumberByRaceNumber.get(raceNumber);
      if (lastLap === firstTeamLastLapNumber) {
        if (cumulatedTimes.length > 0) {
          result.set(raceNumber, cumulatedTimes[cumulatedTimes.length - 1]);
        }
      } else {
        const pace = pacesByRaceNumber.get(raceNumber);
        if (pace && firstTeamLastLapNumber && lastLap) {
          const missingLaps = firstTeamLastLapNumber - lastLap;
          if (missingLaps > 0 && cumulatedTimes.length > 0) {
            const virtualMisingTime = missingLaps * pace;
            const lastCumulatedTime = cumulatedTimes[cumulatedTimes.length - 1] || 0;
            const virtualLastCumulatedTime = lastCumulatedTime + virtualMisingTime;
            result.set(raceNumber, virtualLastCumulatedTime);
          }
        }
      }
    }
  }
  return result;
}
//# sourceMappingURL=worker-N6O37CAE.js.map
