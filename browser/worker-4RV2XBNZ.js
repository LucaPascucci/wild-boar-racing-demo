// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
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

// node_modules/date-fns/addSeconds.js
function addSeconds(date, amount, options) {
  return addMilliseconds(date, amount * 1e3, options);
}

// node_modules/date-fns/secondsToMilliseconds.js
function secondsToMilliseconds(seconds) {
  return seconds * millisecondsInSecond;
}

// src/app/timeline/service/timeline.worker.ts
addEventListener("message", ({ data }) => {
  const stints = data.stints;
  const pits = data.pits;
  const remainingDriverChanges = data.remainingDriverChanges;
  const pitConfig = data.pitConfig;
  const optimizedStint = data.optimizedStint;
  const remainingTyreChange = data.remainingTyreChange;
  let timelineSteps = createRealSteps(stints, pits);
  timelineSteps = timelineSteps.sort((a, b) => a.start.getTime() - b.start.getTime());
  if (optimizedStint) {
    const futureSteps = createFutureSteps(
      timelineSteps.at(timelineSteps.length - 1),
      remainingDriverChanges,
      optimizedStint,
      pitConfig,
      remainingTyreChange
    );
    timelineSteps.push(...futureSteps);
  }
  timelineSteps = timelineSteps.sort((a, b) => a.start.getTime() - b.start.getTime());
  postMessage({
    timelineSteps
  });
});
function createRealSteps(stints, pits) {
  const result = [];
  stints.forEach((stint) => {
    result.push(createTimelineStepFromStint(stint));
  });
  pits.forEach((pit) => {
    result.push(createTimelineStepFromPit(pit));
  });
  return result;
}
function createTimelineStepFromPit(pit) {
  return {
    durationMills: pit.exitAt ? pit.exitAt.getTime() - pit.entryAt.getTime() : void 0,
    end: pit.exitAt,
    pit,
    start: pit.entryAt,
    status: pit.exitAt ? "DONE" : "ACTIVE",
    stint: void 0,
    type: "PIT"
  };
}
function createTimelineStepFromStint(stint) {
  return {
    durationMills: stint.endedAt ? stint.endedAt.getTime() - stint.startedAt.getTime() : void 0,
    end: stint.endedAt,
    pit: void 0,
    start: stint.startedAt,
    status: stint.endedAt ? "DONE" : "ACTIVE",
    stint,
    type: "STINT"
  };
}
function createFutureSteps(lastRealStep, remainingDriverChanges, optimizedStint, pitConfig, remainingTyreChange) {
  const result = [];
  let lastEndDate = calculateLastEndDateFromRealStep(lastRealStep, optimizedStint, pitConfig);
  if (lastRealStep === void 0 || lastRealStep.type === "PIT") {
    const stintEndDate = addMilliseconds(lastEndDate, optimizedStint.avgStintMillisecondsTime);
    result.push(createFutureStintStep(lastEndDate, stintEndDate, optimizedStint.avgStintMillisecondsTime));
    lastEndDate = stintEndDate;
  }
  const midPoint = Math.floor(remainingDriverChanges / 2);
  for (let i = 0; i < remainingDriverChanges; i++) {
    let pitDuration = secondsToMilliseconds(pitConfig.minPitSeconds);
    if (remainingTyreChange > 0 && i >= midPoint - Math.floor(remainingTyreChange / 2) && i < midPoint + Math.ceil(remainingTyreChange / 2)) {
      pitDuration = secondsToMilliseconds(pitConfig.minPitWithTyreChangeSeconds);
      remainingTyreChange--;
    }
    const pitEndDate = addMilliseconds(lastEndDate, pitDuration);
    result.push(createFuturePitStep(lastEndDate, pitEndDate, pitDuration));
    const stintEndDate = addMilliseconds(pitEndDate, optimizedStint.avgStintMillisecondsTime);
    result.push(createFutureStintStep(pitEndDate, stintEndDate, optimizedStint.avgStintMillisecondsTime));
    lastEndDate = stintEndDate;
  }
  return result;
}
function createFutureStintStep(start, end, durationMills) {
  return {
    durationMills,
    end,
    pit: void 0,
    start,
    status: "FUTURE",
    stint: void 0,
    type: "STINT"
  };
}
function createFuturePitStep(start, end, durationMills) {
  return {
    durationMills,
    end,
    pit: void 0,
    start,
    status: "FUTURE",
    stint: void 0,
    type: "PIT"
  };
}
function calculateLastEndDateFromRealStep(lastRealStep, optimizedStint, pitConfig) {
  if (lastRealStep === void 0) {
    return /* @__PURE__ */ new Date();
  }
  let supposedEndDate;
  if (lastRealStep.type === "PIT") {
    supposedEndDate = addSeconds(lastRealStep.start, pitConfig.minPitSeconds);
  } else {
    supposedEndDate = addMilliseconds(lastRealStep.start, optimizedStint.avgStintMillisecondsTime);
  }
  return supposedEndDate > /* @__PURE__ */ new Date() ? supposedEndDate : /* @__PURE__ */ new Date();
}
//# sourceMappingURL=worker-4RV2XBNZ.js.map
