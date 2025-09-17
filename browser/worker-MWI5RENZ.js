// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInMinute = 6e4;
var millisecondsInSecond = 1e3;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/minutesToMilliseconds.js
function minutesToMilliseconds(minutes) {
  return Math.trunc(minutes * millisecondsInMinute);
}

// node_modules/date-fns/secondsToMilliseconds.js
function secondsToMilliseconds(seconds) {
  return seconds * millisecondsInSecond;
}

// src/app/pit-simulator/service/pit-simulator.worker.ts
addEventListener("message", ({ data }) => {
  const pitLaps = data.pitLaps;
  const pacesByRaceNumber = data.pacesByRaceNumber;
  const pitConfig = data.pitConfig;
  const driverConfig = data.driverConfig;
  const lapSimulatorConfig = data.lapSimulatorConfig;
  const timeLostThroughPitMilliseconds = lapSimulatorConfig.timeLostThroughPitMilliseconds;
  const pitOutLineBeforeStart = pitConfig.pitOutLineBeforeStart;
  const minTotalPitMinute = pitConfig.minTotalPitMinute;
  const minPitSeconds = pitConfig.minPitSeconds;
  const maxPitSeconds = pitConfig.maxPitSeconds;
  const minDriverChange = driverConfig.minDriverChange;
  const pitTimeMillisecondsByRaceNumber = calculatePitTimeMillisecondsByRaceNumber(
    pitLaps,
    pacesByRaceNumber,
    timeLostThroughPitMilliseconds,
    pitOutLineBeforeStart
  );
  const pitDoneByRaceNumber = calculatePitDoneByRaceNumber(pitLaps, pitOutLineBeforeStart);
  const result = calculateRemainingPitDataByRaceNumber(
    pitTimeMillisecondsByRaceNumber,
    pitDoneByRaceNumber,
    minTotalPitMinute,
    minDriverChange,
    minPitSeconds,
    maxPitSeconds,
    timeLostThroughPitMilliseconds
  );
  postMessage({
    pitDoneByRaceNumber,
    remainingPitByRaceNumber: result.remainingPitByRaceNumber,
    remainingPitTimeMillisecondsByRaceNumber: result.remainingPitTimeMillisecondsByRaceNumber
  });
});
function calculatePitTimeMillisecondsByRaceNumber(pitLaps, pacesByRaceNumber, timeLostThroughPitMilliseconds, pitOutLineBeforeStart) {
  const result = /* @__PURE__ */ new Map();
  const timeLostThroughPitMillisecondsByPitOutLineBeforeStart = pitOutLineBeforeStart ? timeLostThroughPitMilliseconds : Math.round(timeLostThroughPitMilliseconds / 2);
  pitLaps.forEach((lap) => {
    const paceRaceNumber = pacesByRaceNumber.get(lap.raceNumber);
    const pitTime = lap.lapMilliseconds - (paceRaceNumber || 0) - timeLostThroughPitMillisecondsByPitOutLineBeforeStart;
    if (!result.has(lap.raceNumber)) {
      result.set(lap.raceNumber, pitTime);
    }
    result.set(lap.raceNumber, result.get(lap.raceNumber) + pitTime);
  });
  return result;
}
function calculatePitDoneByRaceNumber(pitLaps, pitOutLineBeforeStart) {
  const result = /* @__PURE__ */ new Map();
  pitLaps.forEach((lap) => {
    if (!result.has(lap.raceNumber)) {
      result.set(lap.raceNumber, 0);
    }
    result.set(lap.raceNumber, result.get(lap.raceNumber) + 1);
  });
  result.forEach((value, key) => {
    if (pitOutLineBeforeStart) {
      result.set(key, value);
    } else {
      result.set(key, Math.round(value / 2));
    }
  });
  return result;
}
function calculateRemainingPitDataByRaceNumber(pitTimeMillisecondsByRaceNumber, pitDoneByRaceNumber, minTotalPitMinute, minDriverChange, minPitSeconds, maxPitSeconds, timeLostThroughPitMilliseconds) {
  const remainingPitTimeMillisecondsByRaceNumber = /* @__PURE__ */ new Map();
  const remainingPitByRaceNumber = /* @__PURE__ */ new Map();
  pitTimeMillisecondsByRaceNumber.forEach((pitTime, raceNumber) => {
    let remainingPitTimeMilliseconds = 0;
    if (minTotalPitMinute > 0) {
      remainingPitTimeMilliseconds = minutesToMilliseconds(minTotalPitMinute) - pitTime;
      if (remainingPitTimeMilliseconds <= 0) {
        remainingPitByRaceNumber.set(raceNumber, 0);
        remainingPitTimeMillisecondsByRaceNumber.set(raceNumber, 0);
      } else {
        let remainingPitNumber = 0;
        if (timeLostThroughPitMilliseconds === 0) {
          remainingPitTimeMillisecondsByRaceNumber.set(raceNumber, remainingPitTimeMilliseconds);
        } else if (timeLostThroughPitMilliseconds < 0) {
          remainingPitNumber = Math.round(remainingPitTimeMilliseconds / secondsToMilliseconds(minPitSeconds));
        } else if (timeLostThroughPitMilliseconds > 0) {
          remainingPitNumber = Math.round(remainingPitTimeMilliseconds / secondsToMilliseconds(maxPitSeconds));
        }
        remainingPitByRaceNumber.set(raceNumber, remainingPitNumber);
        remainingPitTimeMilliseconds += remainingPitNumber * timeLostThroughPitMilliseconds;
        remainingPitTimeMillisecondsByRaceNumber.set(raceNumber, remainingPitTimeMilliseconds);
      }
    } else {
      let remainingPit = 0;
      if (pitDoneByRaceNumber.get(raceNumber)) {
        remainingPit = minDriverChange - pitDoneByRaceNumber.get(raceNumber);
      }
      if (remainingPit <= 0) {
        remainingPitByRaceNumber.set(raceNumber, 0);
        remainingPitTimeMillisecondsByRaceNumber.set(raceNumber, 0);
      } else {
        remainingPitByRaceNumber.set(raceNumber, remainingPit);
        remainingPitTimeMilliseconds = remainingPit * (secondsToMilliseconds(minPitSeconds) + timeLostThroughPitMilliseconds);
        remainingPitTimeMillisecondsByRaceNumber.set(raceNumber, remainingPitTimeMilliseconds);
      }
    }
  });
  return {
    remainingPitTimeMillisecondsByRaceNumber,
    remainingPitByRaceNumber
  };
}
//# sourceMappingURL=worker-MWI5RENZ.js.map
