// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInHour = 36e5;
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

// node_modules/date-fns/addHours.js
function addHours(date, amount, options) {
  return addMilliseconds(date, amount * millisecondsInHour, options);
}

// src/app/tyre/service/tyre.worker.ts
addEventListener("message", ({ data }) => {
  const race = data.race;
  const tyreConfig = data.tyreConfig;
  const pits = data.pits;
  let openingTime = void 0;
  let closingTime = void 0;
  let tyreChangeWindowOpen = false;
  if (race) {
    openingTime = addHours(race.startedAt, tyreConfig.startTyreChangeWindowHour);
    closingTime = addHours(race.startedAt, tyreConfig.endTyreChangeWindowHour);
    tyreChangeWindowOpen = isTyreChangeWindowOpen(openingTime, closingTime);
  }
  const remainingTyreChange = calculateRemainingTyreChange(pits, tyreConfig.minTyreChange);
  postMessage({
    openingTime,
    closingTime,
    tyreChangeWindowOpen,
    remainingTyreChange
  });
});
function isTyreChangeWindowOpen(openingTime, closingTime) {
  if (openingTime && closingTime) {
    const now = /* @__PURE__ */ new Date();
    return now >= openingTime && now <= closingTime;
  }
  return false;
}
function calculateRemainingTyreChange(pits, minTyreChange) {
  const tyreChangesDone = pits.filter((pit) => pit.tyreChange && pit.exitAt).length;
  return minTyreChange - tyreChangesDone;
}
//# sourceMappingURL=worker-MEZGGAYL.js.map
