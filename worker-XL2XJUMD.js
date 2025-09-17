// src/app/driver/model/driver.ts
function deserializeDriverDTO(data) {
  return {
    id: data.id,
    name: data.name,
    surname: data.surname,
    raceName: data.raceName
  };
}
function deserializeDriversDTO(data) {
  return data.map((item) => deserializeDriverDTO(item));
}

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInMinute = 6e4;
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

// src/app/driver/service/driver.worker.ts
addEventListener("message", ({ data }) => {
  const drivers = deserializeDriversDTO(data.drivers);
  const stints = data.stints;
  const driverConfig = data.driverConfig;
  const validTeamPaceLaps = data.validTeamPaceLaps;
  const driversTimeOnTrackMap = createDriverTrackTimeMap(stints, drivers);
  const driversTimeOnTrackWarningMap = createDriversTimeOnTrackWarningMap(driversTimeOnTrackMap, driverConfig);
  const driversStintCountMap = createDriverStintCountMap(stints, drivers);
  const driverWithMoreTimeFromLastStint = getDriverWithMoreTimeFromLastStint(stints, drivers);
  const driversTimeFromLastStintMap = createDriversTimeFromLastStintMap(stints, drivers);
  const raceNameById = new Map(drivers.map((driver) => [driver.id, driver.raceName]));
  const driverPaceById = calculateDriverPaceById(validTeamPaceLaps);
  const driverBestLapById = getDriverBestLapById(validTeamPaceLaps);
  const driverIdBestPace = getDriverBestPace(driverPaceById);
  const driverBestPaceMillisecond = driverIdBestPace !== void 0 ? driverPaceById.get(driverIdBestPace) : void 0;
  const driversTimeOnTrackWarningCount = getDriversTimeOnTrackWarningCount(driversTimeOnTrackWarningMap);
  const driverLastStintIdByDriverId = getDriverLastStintIdByDriverId(stints, drivers);
  postMessage({
    driversTimeOnTrackMap,
    driversTimeOnTrackWarningMap,
    driversStintCountMap,
    driverWithMoreTimeFromLastStint,
    driversTimeFromLastStintMap,
    raceNameById,
    driverPaceById,
    driverBestLapById,
    driverIdBestPace,
    driverBestPaceMillisecond,
    driversTimeOnTrackWarningCount,
    driverLastStintIdByDriverId
  });
});
function createDriverTrackTimeMap(stints, drivers) {
  const result = /* @__PURE__ */ new Map();
  const currentTime = (/* @__PURE__ */ new Date()).getTime();
  for (const driver of drivers) {
    result.set(driver.id, 0);
  }
  for (const stint of stints) {
    const timeSpent = stint.endedAt ? stint.endedAt.getTime() - stint.startedAt.getTime() : currentTime - stint.startedAt.getTime();
    result.set(stint.driverId, result.get(stint.driverId) + timeSpent);
  }
  return result;
}
function createDriversTimeOnTrackWarningMap(driverTrackTimeMap, driverConfig) {
  const result = /* @__PURE__ */ new Map();
  const minDriverOnTrackMillis = minutesToMilliseconds(driverConfig.minDriverOnTrackMinute);
  const maxDriverOnTrackMillis = minutesToMilliseconds(driverConfig.maxDriverOnTrackMinute);
  const warningThresholdMillis = minutesToMilliseconds(driverConfig.warningDriverOnTrackThresholdMinute);
  driverTrackTimeMap.forEach((timeOnTrack, driverId) => {
    const isBelowMin = timeOnTrack < minDriverOnTrackMillis;
    const isNearMax = maxDriverOnTrackMillis - timeOnTrack <= warningThresholdMillis;
    result.set(driverId, isBelowMin || isNearMax);
  });
  return result;
}
function getDriversTimeOnTrackWarningCount(driversTimeOnTrackWarningMap) {
  let warningCount = 0;
  driversTimeOnTrackWarningMap.forEach((isWarning) => {
    if (isWarning) {
      warningCount++;
    }
  });
  return warningCount;
}
function createDriverStintCountMap(stints, drivers) {
  const result = /* @__PURE__ */ new Map();
  drivers.forEach((driver) => {
    result.set(driver.id, 0);
  });
  stints.forEach((stint) => {
    if (result.has(stint.driverId)) {
      result.set(stint.driverId, result.get(stint.driverId) + 1);
    } else {
      result.set(stint.driverId, 1);
    }
  });
  return result;
}
function getDriverWithMoreTimeFromLastStint(stints, drivers) {
  if (drivers.length === 0) {
    return void 0;
  }
  let result = void 0;
  const driversFromLastStintMap = createDriversTimeFromLastStintMap(stints, drivers);
  const currentDriverId = stints.find((stint) => stint.endedAt === null)?.driverId;
  const driverMap = new Map(drivers.map((driver) => [driver.id, driver]));
  let maxTime2 = -1;
  let hasZeroTimeDriver = false;
  driversFromLastStintMap.forEach((timeFromLastStint, driverId) => {
    if (driverId !== currentDriverId) {
      if (timeFromLastStint === 0) {
        if (!hasZeroTimeDriver || hasZeroTimeDriver && timeFromLastStint > maxTime2) {
          maxTime2 = timeFromLastStint;
          result = driverMap.get(driverId);
          hasZeroTimeDriver = true;
        }
      } else if (!hasZeroTimeDriver && timeFromLastStint > maxTime2) {
        maxTime2 = timeFromLastStint;
        result = driverMap.get(driverId);
      }
    }
  });
  return result;
}
function createDriversTimeFromLastStintMap(stints, drivers) {
  const result = /* @__PURE__ */ new Map();
  drivers.forEach((driver) => {
    const lastDriverStint = stints.filter((stint) => stint.driverId === driver.id).sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime()).at(0);
    if (lastDriverStint) {
      if (lastDriverStint.endedAt) {
        result.set(driver.id, (/* @__PURE__ */ new Date()).getTime() - lastDriverStint.endedAt.getTime());
      } else {
        result.set(driver.id, 0);
      }
    } else {
      result.set(driver.id, 0);
    }
  });
  return result;
}
function calculateDriverPaceById(validTeamPaceLaps) {
  const result = /* @__PURE__ */ new Map();
  const driverLapsMap = /* @__PURE__ */ new Map();
  validTeamPaceLaps.forEach((lap) => {
    if (!driverLapsMap.has(lap.driverId)) {
      driverLapsMap.set(lap.driverId, []);
    }
    driverLapsMap.get(lap.driverId).push(lap.lapMilliseconds);
  });
  driverLapsMap.forEach((lapTimes, driverId) => {
    if (lapTimes.length > 0) {
      const totalTime = lapTimes.reduce((sum, time) => sum + time, 0);
      const averagePace = Math.round(totalTime / lapTimes.length);
      result.set(driverId, averagePace);
    }
  });
  return result;
}
function getDriverBestLapById(validTeamPaceLaps) {
  const result = /* @__PURE__ */ new Map();
  validTeamPaceLaps.forEach((lap) => {
    const currentBest = result.get(lap.driverId);
    if (currentBest === void 0 || lap.lapMilliseconds < currentBest) {
      result.set(lap.driverId, lap.lapMilliseconds);
    }
  });
  return result;
}
function getDriverBestPace(driverPaceById) {
  if (driverPaceById.size === 0) {
    return void 0;
  }
  let bestDriverId = void 0;
  let bestPace = Number.MAX_SAFE_INTEGER;
  for (const [driverId, pace] of driverPaceById) {
    if (pace < bestPace) {
      bestPace = pace;
      bestDriverId = driverId;
    }
  }
  return bestDriverId;
}
function getDriverLastStintIdByDriverId(stints, drivers) {
  const result = /* @__PURE__ */ new Map();
  drivers.forEach((driver) => {
    const lastCompletedDriverStint = stints.filter((stint) => stint.driverId === driver.id && stint.endedAt !== null).sort((a, b) => b.startedAt.getTime() - a.startedAt.getTime()).at(0);
    if (lastCompletedDriverStint) {
      result.set(driver.id, lastCompletedDriverStint.id);
    }
  });
  return result;
}
//# sourceMappingURL=worker-XL2XJUMD.js.map
