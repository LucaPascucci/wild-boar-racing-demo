// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
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

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// node_modules/date-fns/differenceInMilliseconds.js
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// node_modules/date-fns/secondsToMilliseconds.js
function secondsToMilliseconds(seconds) {
  return seconds * millisecondsInSecond;
}

// src/app/stint/service/stint-optimizer.worker.ts
addEventListener("message", ({ data }) => {
  const activeRace = data.activeRace;
  const willEndRaceDate = data.willEndRaceDate !== void 0 ? data.willEndRaceDate : void 0;
  const remainingDriverChanges = data.remainingDriverChanges;
  const remainingTyreChange = data.remainingTyreChange;
  const lastPit = data.lastPit;
  const raceConfig = data.raceConfig;
  const lapConfig = data.lapConfig;
  const pitConfig = data.pitConfig;
  const referenceLapTimeMillisecond = lapConfig.referenceLapTimeMillisecond;
  const raceDurationHour = raceConfig.durationHour;
  const optimizedStint = calculateOptimizedStint(
    activeRace,
    activeRace ? activeRace.startedAt : /* @__PURE__ */ new Date(),
    willEndRaceDate || addHours(/* @__PURE__ */ new Date(), raceDurationHour),
    remainingDriverChanges,
    remainingTyreChange,
    lastPit,
    pitConfig,
    referenceLapTimeMillisecond
  );
  postMessage({
    optimizedStint
  });
});
function calculateOptimizedStint(activeRace, startRaceDate, endRaceDate, remainingDriverChanges, remainingTyreChange, lastPit, pitConfig, referenceLapTimeMillisecond) {
  const currentDate = /* @__PURE__ */ new Date();
  if (currentDate >= endRaceDate) {
    return void 0;
  }
  const remainingPitTime = calculateRemainingPitTime(pitConfig, remainingDriverChanges, remainingTyreChange);
  const timeRemaining = differenceInMilliseconds(endRaceDate, currentDate) - remainingPitTime;
  let lastDriverChangeExitDate = void 0;
  if (lastPit) {
    if (lastPit.exitAt) {
      lastDriverChangeExitDate = lastPit.exitAt;
    } else {
      lastDriverChangeExitDate = addSeconds(lastPit.entryAt, pitConfig.minPitSeconds);
    }
  }
  const lastDriverChange = lastDriverChangeExitDate || startRaceDate;
  const timeRemainingFromLastDriverChange = differenceInMilliseconds(endRaceDate, lastDriverChange) - remainingPitTime;
  const avgStintTime = timeRemainingFromLastDriverChange / (remainingDriverChanges + 1);
  let avgIfChangedNow = 0;
  let lapsIfDriverChangeNow = 0;
  if (remainingDriverChanges > 0 && activeRace !== void 0) {
    avgIfChangedNow = timeRemaining / remainingDriverChanges;
    lapsIfDriverChangeNow = Math.floor(avgIfChangedNow / referenceLapTimeMillisecond);
  }
  return {
    avgStintMillisecondsTime: avgStintTime,
    laps: Math.floor(avgStintTime / referenceLapTimeMillisecond),
    avgStintMillisecondsIfDriverChangedNow: avgIfChangedNow,
    lapsIfDriverChangeNow
  };
}
function calculateRemainingPitTime(pitConfig, remainingDriverChanges, remainingTyreChange) {
  let normalDriverChanges = remainingDriverChanges - remainingTyreChange;
  let remainingNormalPitTime = secondsToMilliseconds(pitConfig.minPitSeconds * normalDriverChanges);
  let remainingTyreChangePitTime = secondsToMilliseconds(pitConfig.minPitWithTyreChangeSeconds * remainingTyreChange);
  return remainingNormalPitTime + remainingTyreChangePitTime;
}
//# sourceMappingURL=worker-THMG2AF7.js.map
