import {
  LapService,
  TeamService,
  constructFrom,
  millisecondsInDay,
  millisecondsInHour,
  millisecondsInMinute,
  toDate
} from "./chunk-PQBZRJZN.js";
import {
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  Injectable,
  combineLatest,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-AM7K5Y7Q.js";

// node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return _date;
  }
}

// node_modules/date-fns/add.js
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration;
  const _date = toDate(date, options?.in);
  const dateWithMonths = months || years ? addMonths(_date, months + years * 12) : _date;
  const dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1e3;
  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
  return dates.map(normalize);
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/differenceInCalendarMonths.js
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
  return yearsDiff * 12 + monthsDiff;
}

// node_modules/date-fns/differenceInCalendarYears.js
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}

// node_modules/date-fns/differenceInDays.js
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(differenceInCalendarDays(laterDate_, earlierDate_));
  laterDate_.setDate(laterDate_.getDate() - sign * difference);
  const isLastDayNotFull = Number(compareLocalAsc(laterDate_, earlierDate_) === -sign);
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    return result === 0 ? 0 : result;
  };
}

// node_modules/date-fns/differenceInHours.js
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
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

// node_modules/date-fns/endOfDay.js
function endOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/endOfMonth.js
function endOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(options?.in, laterDate, laterDate, earlierDate);
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(differenceInCalendarMonths(workingLaterDate, earlierDate_));
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/differenceInYears.js
function differenceInYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
  const sign = compareAsc(laterDate_, earlierDate_);
  const diff = Math.abs(differenceInCalendarYears(laterDate_, earlierDate_));
  laterDate_.setFullYear(1584);
  earlierDate_.setFullYear(1584);
  const partial = compareAsc(laterDate_, earlierDate_) === -sign;
  const result = sign * (diff - +partial);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return {
    start,
    end
  };
}

// node_modules/date-fns/intervalToDuration.js
function intervalToDuration(interval, options) {
  const {
    start,
    end
  } = normalizeInterval(options?.in, interval);
  const duration = {};
  const years = differenceInYears(end, start);
  if (years) duration.years = years;
  const remainingMonths = add(start, {
    years: duration.years
  });
  const months = differenceInMonths(end, remainingMonths);
  if (months) duration.months = months;
  const remainingDays = add(remainingMonths, {
    months: duration.months
  });
  const days = differenceInDays(end, remainingDays);
  if (days) duration.days = days;
  const remainingHours = add(remainingDays, {
    days: duration.days
  });
  const hours = differenceInHours(end, remainingHours);
  if (hours) duration.hours = hours;
  const remainingMinutes = add(remainingHours, {
    hours: duration.hours
  });
  const minutes = differenceInMinutes(end, remainingMinutes);
  if (minutes) duration.minutes = minutes;
  const remainingSeconds = add(remainingMinutes, {
    minutes: duration.minutes
  });
  const seconds = differenceInSeconds(end, remainingSeconds);
  if (seconds) duration.seconds = seconds;
  return duration;
}

// src/app/util/date.util.ts
function getElapsedTime(start, end) {
  if (!start || !end) {
    return "--:--:--";
  }
  const duration = intervalToDuration({
    end,
    start
  });
  return formatDurationToHourMinuteSecond(duration);
}
function getTimeUntilFutureDate(futureDate) {
  if (!futureDate) {
    return "--:--:--";
  }
  const duration = intervalToDuration({
    end: futureDate,
    start: /* @__PURE__ */ new Date()
  });
  return formatDurationToHourMinuteSecond(duration);
}
function millisecondsToTimeString(milliseconds) {
  if (!milliseconds || milliseconds < 0) {
    return "--:--:--";
  }
  const totalSeconds = Math.floor(milliseconds / 1e3);
  const duration = {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  return formatDurationToHourMinuteSecond(duration);
}
function millisecondsToHourMinuteSecondString(milliseconds) {
  if (!milliseconds || milliseconds < 0) {
    return "--:--:--";
  }
  const totalSeconds = Math.floor(milliseconds / 1e3);
  const duration = {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  return formatDurationToHourMinuteSecond(duration);
}
function millisecondsToHourMinuteSecondMillisecondString(milliseconds) {
  if (!milliseconds || milliseconds < 0) {
    return "--:--:--.---";
  }
  const totalSeconds = Math.floor(milliseconds / 1e3);
  const remainingMilliseconds = milliseconds % 1e3;
  const duration = {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  return formatDurationToHourMinuteSecondMillisecond(duration, remainingMilliseconds);
}
function millisecondsToMinuteSecondMillisecondsString(milliseconds) {
  if (!milliseconds || milliseconds < 0) {
    return "--:--.---";
  }
  const totalSeconds = Math.floor(milliseconds / 1e3);
  const remainingMilliseconds = milliseconds % 1e3;
  const duration = {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  return formatDurationToMinuteSecondMillisecond(duration, remainingMilliseconds);
}
function millisecondsToMinuteSecondString(milliseconds) {
  if (!milliseconds || milliseconds < 0) {
    return "--:--";
  }
  const totalSeconds = Math.floor(milliseconds / 1e3);
  const duration = {
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  return formatDurationToMinuteSecond(duration);
}
function millisecondsToSecondMillisecondsString(milliseconds) {
  if (!milliseconds || milliseconds < 0) {
    return "--.---";
  }
  const totalSeconds = Math.floor(milliseconds / 1e3);
  const remainingMilliseconds = milliseconds % 1e3;
  const duration = {
    minutes: Math.floor(totalSeconds % 3600 / 60),
    seconds: totalSeconds % 60
  };
  return formatDurationToSecondMillisecond(duration, remainingMilliseconds);
}
function formatDurationToMinuteSecond(duration) {
  if (duration.minutes && duration.minutes < 0) {
    return "--:--";
  }
  if (duration.seconds && duration.seconds < 0) {
    return "--:--";
  }
  return [padTwo(duration.minutes), padTwo(duration.seconds)].join(":");
}
function formatDurationToHourMinuteSecond(duration) {
  if (duration.hours && duration.hours < 0) {
    return "--:--:--";
  }
  if (duration.minutes && duration.minutes < 0) {
    return "--:--:--";
  }
  if (duration.seconds && duration.seconds < 0) {
    return "--:--:--";
  }
  return [padTwo(duration.hours), padTwo(duration.minutes), padTwo(duration.seconds)].join(":");
}
function formatDurationToHourMinuteSecondMillisecond(duration, milliseconds) {
  if (duration.hours && duration.hours < 0) {
    return "--:--:--";
  }
  if (duration.minutes && duration.minutes < 0) {
    return "--:--:--";
  }
  if (duration.seconds && duration.seconds < 0) {
    return "--:--:--";
  }
  return [[padTwo(duration.hours), padTwo(duration.minutes), padTwo(duration.seconds)].join(":"), padThree(milliseconds)].join(".");
}
function formatDurationToMinuteSecondMillisecond(duration, milliseconds) {
  if (duration.minutes && duration.minutes < 0) {
    return "--:--.---";
  }
  if (duration.seconds && duration.seconds < 0) {
    return "--:--.---";
  }
  return [[padTwo(duration.minutes), padTwo(duration.seconds)].join(":"), padThree(milliseconds)].join(".");
}
function formatDurationToSecondMillisecond(duration, milliseconds) {
  if (duration.seconds && duration.seconds < 0) {
    return "--.---";
  }
  return [padTwo(duration.seconds), padThree(milliseconds)].join(".");
}
function padTwo(num) {
  if (num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  return "00";
}
function padThree(num) {
  if (num < 10) {
    return `00${num}`;
  } else if (num < 100) {
    return `0${num}`;
  }
  return `${num}`;
}

// src/app/race/service/race-position.service.ts
var RacePositionService = class _RacePositionService {
  teamService = inject(TeamService);
  lapService = inject(LapService);
  worker;
  racePositionByRaceNumber = signal(/* @__PURE__ */ new Map());
  teamRacePosition = signal(void 0);
  firstTeamRaceNumber = signal(void 0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-WPIUQPBR.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.racePositionByRaceNumber.set(data.racePositionByRaceNumber);
        this.teamRacePosition.set(data.teamRacePosition);
        this.firstTeamRaceNumber.set(data.firstTeamRaceNumber);
      };
    }
    combineLatest({
      cumulatedTimeByRaceNumber: toObservable(this.lapService.cumulatedTimeByRaceNumber),
      lastLapNumberByRaceNumber: toObservable(this.lapService.lastLapNumberByRaceNumber),
      activeTeam: toObservable(this.teamService.activeTeam)
    }).pipe(takeUntilDestroyed()).subscribe(({ cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber, activeTeam }) => {
      if (this.worker) {
        this.worker.postMessage({
          cumulatedTimeByRaceNumber,
          lastLapNumberByRaceNumber,
          activeTeam
        });
      }
    });
  }
  static \u0275fac = function RacePositionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RacePositionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RacePositionService, factory: _RacePositionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RacePositionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  differenceInCalendarDays,
  differenceInSeconds,
  getElapsedTime,
  getTimeUntilFutureDate,
  millisecondsToTimeString,
  millisecondsToHourMinuteSecondString,
  millisecondsToHourMinuteSecondMillisecondString,
  millisecondsToMinuteSecondMillisecondsString,
  millisecondsToMinuteSecondString,
  millisecondsToSecondMillisecondsString,
  RacePositionService
};
//# sourceMappingURL=chunk-JLOFOMRS.js.map
