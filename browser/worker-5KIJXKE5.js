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

// node_modules/date-fns/addMinutes.js
function addMinutes(date, amount, options) {
  const _date = toDate(date, options?.in);
  _date.setTime(_date.getTime() + amount * millisecondsInMinute);
  return _date;
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/differenceInMinutes.js
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/minutesToMilliseconds.js
function minutesToMilliseconds(minutes) {
  return Math.trunc(minutes * millisecondsInMinute);
}

// src/app/fuel/service/fuel.worker.ts
addEventListener("message", ({ data }) => {
  const lastRefuelPit = data.lastRefuelPit;
  const race = data.race;
  const raceConfig = data.raceConfig;
  const lapConfig = data.lapConfig;
  const referenceLapTimeMillisecond = lapConfig.referenceLapTimeMillisecond;
  const fuelDurationMinute = raceConfig.fuelDurationMinute;
  const lastRefuelTime = getLastRefuelDate(lastRefuelPit, race);
  const emptyFuelTime = calculateEmptyFuelTime(lastRefuelTime, fuelDurationMinute);
  const remainingFuelLap = calculateRemainingFuelLaps(emptyFuelTime, fuelDurationMinute, referenceLapTimeMillisecond);
  const remainingFuelPercentage = calculateRemainingFuelPercentage(emptyFuelTime, fuelDurationMinute);
  postMessage({
    lastRefuelTime,
    emptyFuelTime,
    remainingFuelLap,
    remainingFuelPercentage
  });
});
function getLastRefuelDate(lastRefuelPit, race) {
  if (lastRefuelPit?.exitAt) {
    return lastRefuelPit.exitAt;
  }
  if (race) {
    return race.startedAt;
  }
  return void 0;
}
function calculateEmptyFuelTime(lastRefuelDate, fuelDurationMinute) {
  if (lastRefuelDate) {
    return addMinutes(lastRefuelDate, fuelDurationMinute);
  }
  return void 0;
}
function calculateRemainingFuelPercentage(emptyFuelTime, fuelDurationMinute) {
  if (emptyFuelTime) {
    const remainingMinutes = differenceInMinutes(emptyFuelTime, /* @__PURE__ */ new Date());
    const percentage = remainingMinutes / fuelDurationMinute * 100;
    const clampedPercentage = Math.max(0, Math.min(percentage, 100));
    return parseFloat(clampedPercentage.toFixed(0));
  }
  return 100;
}
function calculateRemainingFuelLaps(emptyFuelTime, fuelDurationMinute, referenceLapTimeMillisecond) {
  if (emptyFuelTime) {
    const millisecondsUntilEmpty = differenceInMilliseconds(emptyFuelTime, /* @__PURE__ */ new Date());
    return Math.floor(millisecondsUntilEmpty / referenceLapTimeMillisecond);
  }
  if (!emptyFuelTime) {
    const fuelDurationMilliseconds = minutesToMilliseconds(fuelDurationMinute);
    return Math.floor(fuelDurationMilliseconds / referenceLapTimeMillisecond);
  }
  return 0;
}
//# sourceMappingURL=worker-5KIJXKE5.js.map
