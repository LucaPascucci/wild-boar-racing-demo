// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/addMilliseconds.js
function addMilliseconds(date, amount, options) {
  return constructFrom(options?.in || date, +toDate(date) + amount);
}

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// src/app/pit/service/pit.worker.ts
addEventListener("message", ({ data }) => {
  const pits = data.pits;
  const driverConfig = data.driverConfig;
  const pitConfig = data.pitConfig;
  const minPitSeconds = pitConfig.minPitSeconds;
  const minTotalPitMinute = pitConfig.minTotalPitMinute;
  const activePit = getActivePit(pits);
  const activePitRemainingMilliseconds = calculateActivePitRemainingMilliseconds(pits, minPitSeconds);
  const lastRefuelPit = getLastRefuelPit(pits);
  const lastInterphoneChangePit = getLastInterphoneChangePit(pits);
  const lastPit = getLastPit(pits);
  const completedDriverChanges = calculateCompletedDriverChanges(pits);
  const remainingDriverChanges = calculateRemainingDriverChanges(pits, driverConfig);
  const pitAVGMilliseconds = calculatePitAVGMilliseconds(pits);
  const remainingMinTotalPitMilliseconds = calculateRemainingMinTotalPitMilliseconds(pits, minTotalPitMinute);
  const lastKartChangePit = getLastKartChangePit(pits);
  const completedKartChanges = calculateCompletedKartChanges(pits);
  postMessage({
    activePit,
    lastRefuelPit,
    lastInterphoneChangePit,
    lastPit,
    completedDriverChanges,
    remainingDriverChanges,
    activePitRemainingMilliseconds,
    pitAVGMilliseconds,
    remainingMinTotalPitMilliseconds,
    lastKartChangePit,
    completedKartChanges
  });
});
function getActivePit(pits) {
  for (const pit of pits) {
    if (!pit.exitAt) {
      return pit;
    }
  }
  return void 0;
}
function calculateActivePitRemainingMilliseconds(pits, minPitSeconds) {
  const activePit = getActivePit(pits);
  if (activePit) {
    const now = (/* @__PURE__ */ new Date()).getTime();
    const endPitTime = addSeconds(activePit.entryAt, minPitSeconds).getTime();
    return endPitTime - now;
  }
  return 0;
}
function getLastRefuelPit(pits) {
  const filteredRefuelPits = pits.filter((pit) => pit.refuel && pit.exitAt).sort((a, b) => b.entryAt.getTime() - a.entryAt.getTime());
  return filteredRefuelPits.at(0);
}
function getLastKartChangePit(pits) {
  const filteredRefuelPits = pits.filter((pit) => pit.kartChange && pit.exitAt).sort((a, b) => b.entryAt.getTime() - a.entryAt.getTime());
  return filteredRefuelPits.at(0);
}
function getLastInterphoneChangePit(pits) {
  const filteredRefuelPits = pits.filter((pit) => pit.interphoneChange && pit.exitAt).sort((a, b) => b.entryAt.getTime() - a.entryAt.getTime());
  return filteredRefuelPits.at(0);
}
function getLastPit(pits) {
  if (pits.length === 0) {
    return void 0;
  }
  const sortedPits = pits.sort((a, b) => b.entryAt.getTime() - a.entryAt.getTime());
  return sortedPits.at(0);
}
function calculateCompletedDriverChanges(pits) {
  return pits.reduce((count, pit) => {
    return count + (pit.entryDriverId !== pit.exitDriverId ? 1 : 0);
  }, 0);
}
function calculateRemainingDriverChanges(pits, driverConfig) {
  return Math.max(0, driverConfig.minDriverChange - calculateCompletedDriverChanges(pits));
}
function calculatePitAVGMilliseconds(pits) {
  const completedPits = pits.filter((pit) => pit.exitAt);
  if (completedPits.length === 0) {
    return 0;
  }
  const totalMilliseconds = completedPits.reduce((sum, pit) => {
    return sum + (pit.exitAt.getTime() - pit.entryAt.getTime());
  }, 0);
  return Math.round(totalMilliseconds / completedPits.length);
}
function calculateRemainingMinTotalPitMilliseconds(pits, minTotalPitMinute) {
  const minTotalPitMilliseconds = minTotalPitMinute * 60 * 1e3;
  if (pits.length === 0) {
    return minTotalPitMilliseconds;
  }
  const totalPitMilliseconds = pits.reduce((sum, pit) => {
    let pitMilliseconds = 0;
    if (pit.exitAt) {
      pitMilliseconds = pit.exitAt.getTime() - pit.entryAt.getTime();
    } else {
      pitMilliseconds = (/* @__PURE__ */ new Date()).getTime() - pit.entryAt.getTime();
    }
    return sum + pitMilliseconds;
  }, 0);
  return Math.max(0, minTotalPitMilliseconds - totalPitMilliseconds);
}
function calculateCompletedKartChanges(pits) {
  return pits.filter((pit) => pit.kartChange && pit.exitAt).length;
}
//# sourceMappingURL=worker-3AYXJIZN.js.map
