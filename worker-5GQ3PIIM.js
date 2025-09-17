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

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// node_modules/date-fns/isBefore.js
function isBefore(date, dateToCompare) {
  return +toDate(date) < +toDate(dateToCompare);
}

// node_modules/date-fns/subMinutes.js
function subMinutes(date, amount, options) {
  return addMinutes(date, -amount, options);
}

// src/app/pit-lane/service/pit-lane.worker.ts
addEventListener("message", ({ data }) => {
  const willEndRaceDate = data.willEndRaceDate;
  const activeStint = data.activeStint;
  const raceConfig = data.raceConfig;
  const pitLaneConfig = data.pitLaneConfig;
  const minStintMinute = raceConfig.minStintMinute;
  const pitLaneCloseBeforeEndRaceMinute = pitLaneConfig.closeBeforeEndRaceMinute;
  let open = false;
  let openInMilliseconds = 0;
  if (willEndRaceDate && activeStint) {
    open = calculatePitLaneOpen(willEndRaceDate, activeStint, minStintMinute, pitLaneCloseBeforeEndRaceMinute);
    openInMilliseconds = calculatePitLaneOpenInMilliseconds(activeStint, minStintMinute);
  }
  postMessage({
    open,
    openInMilliseconds
  });
});
function calculatePitLaneOpenInMilliseconds(activeStint, minStintMinute) {
  const now = (/* @__PURE__ */ new Date()).getTime();
  return addMinutes(activeStint.startedAt, minStintMinute).getTime() - now;
}
function calculatePitLaneOpen(endRaceDate, activeStint, minStintMinute, pitLaneCloseBeforeEndRaceMinute) {
  const now = /* @__PURE__ */ new Date();
  const pitLaneCloseTime = subMinutes(endRaceDate, pitLaneCloseBeforeEndRaceMinute);
  const isBeforePitLaneClose = isBefore(now, pitLaneCloseTime);
  const minStintTime = addMinutes(activeStint.startedAt, minStintMinute);
  const isAfterMinStintTime = isAfter(now, minStintTime);
  return isBeforePitLaneClose && isAfterMinStintTime;
}
//# sourceMappingURL=worker-5GQ3PIIM.js.map
