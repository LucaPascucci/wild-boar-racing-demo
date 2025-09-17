import {
  BoardConfigService,
  ChipComponent,
  DriverService,
  KartConfigService,
  LapMissingService,
  LiveTimingConfigService,
  PitDataService,
  PitLaneConfigService,
  StintDataService,
  TimelineConfigService,
  TyreConfigService
} from "./chunk-3KS63GZX.js";
import {
  DriverConfigService,
  PitConfigService
} from "./chunk-GDICOAUJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BFFHFKXW.js";
import {
  TooltipDirective,
  TooltipPosition
} from "./chunk-Q3SJZCYY.js";
import {
  CardComponent
} from "./chunk-ZQCYD6AC.js";
import {
  NavigatorComponent
} from "./chunk-LS565PEX.js";
import {
  Title
} from "./chunk-MCTF3ADD.js";
import {
  GapService,
  SteeringWheelMessageUpdateService,
  getButtonBackgroundColor
} from "./chunk-KJF6X5UP.js";
import {
  RacePositionService,
  differenceInCalendarDays,
  differenceInSeconds,
  getElapsedTime,
  getTimeUntilFutureDate,
  millisecondsToHourMinuteSecondMillisecondString,
  millisecondsToHourMinuteSecondString,
  millisecondsToMinuteSecondMillisecondsString,
  millisecondsToMinuteSecondString,
  millisecondsToSecondMillisecondsString,
  millisecondsToTimeString
} from "./chunk-JLOFOMRS.js";
import {
  LapConfigService,
  LapService,
  RaceConfigService,
  RaceService,
  TeamService,
  addHours,
  addMilliseconds,
  constructFrom,
  millisecondsInWeek,
  toDate
} from "./chunk-PQBZRJZN.js";
import {
  NotificationService,
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  ChangeDetectionStrategy,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  Observable,
  combineLatest,
  computed,
  effect,
  environment,
  inject,
  interval,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AM7K5Y7Q.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YFKO4TLY.js";

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, __spreadProps(__spreadValues({}, options), {
    weekStartsOn: 1
  }));
}

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      // A, B
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), {
        unit: "date"
      });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), {
        unit: "hour"
      });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return {
        isToken: false,
        value: "'"
      };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return {
        isToken: false,
        value: cleanEscapedString(substring)
      };
    }
    if (formatters[firstCharacter]) {
      return {
        isToken: true,
        value: substring
      };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return {
      isToken: false,
      value: substring
    };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/date-fns/isAfter.js
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}

// src/app/pit/service/pit.service.ts
var PitService = class _PitService {
  worker;
  pitDataService = inject(PitDataService);
  driverConfigService = inject(DriverConfigService);
  pitConfigService = inject(PitConfigService);
  activePit = signal(void 0);
  activePitRemainingMilliseconds = signal(0);
  lastRefuelPit = signal(void 0);
  lastInterphoneChangePit = signal(void 0);
  completedDriverChanges = signal(0);
  lastPit = signal(void 0);
  remainingDriverChanges = signal(0);
  pitAVGMilliseconds = signal(0);
  remainingMinTotalPitMilliseconds = signal(0);
  lastKartChangePit = signal(void 0);
  completedKartChanges = signal(0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-3AYXJIZN.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.activePit.set(data.activePit);
        this.activePitRemainingMilliseconds.set(data.activePitRemainingMilliseconds);
        this.lastRefuelPit.set(data.lastRefuelPit);
        this.lastInterphoneChangePit.set(data.lastInterphoneChangePit);
        this.lastPit.set(data.lastPit);
        this.completedDriverChanges.set(data.completedDriverChanges);
        this.remainingDriverChanges.set(data.remainingDriverChanges);
        this.pitAVGMilliseconds.set(data.pitAVGMilliseconds);
        this.remainingMinTotalPitMilliseconds.set(data.remainingMinTotalPitMilliseconds);
        this.lastKartChangePit.set(data.lastKartChangePit);
        this.completedKartChanges.set(data.completedKartChanges);
      };
    }
    combineLatest({
      pits: toObservable(this.pitDataService.pits),
      driverConfig: toObservable(this.driverConfigService.driverConfig),
      pitConfig: toObservable(this.pitConfigService.pitConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ pits, driverConfig, pitConfig }) => {
      if (this.worker && driverConfig && pitConfig) {
        this.worker.postMessage({
          pits,
          driverConfig,
          pitConfig
        });
      }
    });
  }
  static \u0275fac = function PitService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitService, factory: _PitService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/tyre/service/tyre.service.ts
var TyreService = class _TyreService {
  raceService = inject(RaceService);
  pitDataService = inject(PitDataService);
  tyreConfigService = inject(TyreConfigService);
  worker;
  openingTime = signal(void 0);
  closingTime = signal(void 0);
  tyreChangeWindowOpen = signal(false);
  remainingTyreChange = signal(0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-MEZGGAYL.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.openingTime.set(data.openingTime);
        this.closingTime.set(data.closingTime);
        this.tyreChangeWindowOpen.set(data.tyreChangeWindowOpen);
        this.remainingTyreChange.set(data.remainingTyreChange);
      };
    }
    combineLatest({
      pits: toObservable(this.pitDataService.pits),
      race: toObservable(this.raceService.activeRace),
      tyreConfig: toObservable(this.tyreConfigService.tyreConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ pits, race, tyreConfig }) => {
      if (this.worker && tyreConfig) {
        this.worker.postMessage({
          pits,
          race,
          tyreConfig
        });
      }
    });
  }
  static \u0275fac = function TyreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TyreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TyreService, factory: _TyreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TyreService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/stint/service/stint-optimizer.service.ts
var StintOptimizerService = class _StintOptimizerService {
  raceService = inject(RaceService);
  pitService = inject(PitService);
  raceConfigService = inject(RaceConfigService);
  lapConfigService = inject(LapConfigService);
  pitConfigService = inject(PitConfigService);
  tyreService = inject(TyreService);
  worker;
  optimizedStint = signal(void 0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-THMG2AF7.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.optimizedStint.set(data.optimizedStint);
      };
    }
    combineLatest({
      activeRace: toObservable(this.raceService.activeRace),
      willEndRaceDate: toObservable(this.raceService.willEndRaceDate),
      remainingDriverChanges: toObservable(this.pitService.remainingDriverChanges),
      remainingTyreChange: toObservable(this.tyreService.remainingTyreChange),
      lastPit: toObservable(this.pitService.lastPit),
      lapConfig: toObservable(this.lapConfigService.lapConfig),
      raceConfig: toObservable(this.raceConfigService.raceConfig),
      pitConfig: toObservable(this.pitConfigService.pitConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ activeRace, willEndRaceDate, remainingDriverChanges, remainingTyreChange, lastPit, lapConfig, raceConfig, pitConfig }) => {
      if (this.worker && raceConfig && lapConfig && pitConfig) {
        this.worker.postMessage({
          activeRace,
          willEndRaceDate,
          remainingDriverChanges,
          remainingTyreChange,
          lastPit,
          raceConfig,
          lapConfig,
          pitConfig
        });
      }
    });
  }
  static \u0275fac = function StintOptimizerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintOptimizerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StintOptimizerService, factory: _StintOptimizerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintOptimizerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/stint/service/stint.service.ts
var StintService = class _StintService {
  worker;
  stintDataService = inject(StintDataService);
  stintOptimizerService = inject(StintOptimizerService);
  lapConfigService = inject(LapConfigService);
  lapService = inject(LapService);
  activeStint = signal(void 0);
  activeStintTimeOnTrack = signal(0);
  activeStintLaps = signal(0);
  activeStintRemainingTimeOnTrack = signal(0);
  activeStintRemainingLaps = signal(0);
  activeStintGainedTimeOnTrack = signal(0);
  activeStintGainedLaps = signal(0);
  stintAVGMilliseconds = signal(0);
  stintPaceById = signal(/* @__PURE__ */ new Map());
  stintBestLapById = signal(/* @__PURE__ */ new Map());
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-XUDWCUPQ.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.activeStint.set(data.activeStint);
        this.activeStintTimeOnTrack.set(data.activeStintTimeOnTrack);
        this.activeStintLaps.set(data.activeStintLaps);
        this.activeStintRemainingTimeOnTrack.set(data.activeStintRemainingTimeOnTrack);
        this.activeStintRemainingLaps.set(data.activeStintRemainingLaps);
        this.activeStintGainedTimeOnTrack.set(data.activeStintGainedTimeOnTrack);
        this.activeStintGainedLaps.set(data.activeStintGainedLaps);
        this.stintAVGMilliseconds.set(data.stintAVGMilliseconds);
        this.stintPaceById.set(data.stintPaceById);
        this.stintBestLapById.set(data.stintBestLapById);
      };
    }
    combineLatest({
      stints: toObservable(this.stintDataService.stints),
      optimizedStint: toObservable(this.stintOptimizerService.optimizedStint),
      lapConfig: toObservable(this.lapConfigService.lapConfig),
      validTeamPaceLaps: toObservable(this.lapService.validTeamPaceLaps),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ stints, optimizedStint, lapConfig, validTeamPaceLaps }) => {
      if (this.worker && lapConfig) {
        this.worker.postMessage({
          stints,
          optimizedStint,
          lapConfig,
          validTeamPaceLaps
        });
      }
    });
  }
  static \u0275fac = function StintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StintService, factory: _StintService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/stint/component/active-stint/active-stint.component.ts
function ActiveStintComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 8)(1, "app-chip", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", "Remaining: " + ctx_r0.activeStintRemainingTimeOnTrackString())("backgroundColor", "bg-yellow-500");
    \u0275\u0275advance();
    \u0275\u0275property("text", "Laps: " + ctx_r0.activeStintRemainingLaps())("backgroundColor", "bg-yellow-500");
  }
}
function ActiveStintComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 8)(1, "app-chip", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", "Gained: " + ctx_r0.activeStintGainedTimeOnTrackString())("backgroundColor", "bg-green-500");
    \u0275\u0275advance();
    \u0275\u0275property("text", "Laps: " + ctx_r0.activeStintGainedLaps())("backgroundColor", "bg-green-500");
  }
}
function ActiveStintComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActiveStintComponent_Conditional_2_Conditional_0_Template, 2, 4)(1, ActiveStintComponent_Conditional_2_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.activeStintRemainingTimeOnTrack() > 0 ? 0 : 1);
  }
}
function ActiveStintComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeStintRemainingTimeOnTrackString(), " ");
  }
}
function ActiveStintComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
function ActiveStintComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeStintRemainingLaps(), " ");
  }
}
function ActiveStintComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 0 ");
  }
}
function ActiveStintComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeStintGainedLaps(), " ");
  }
}
function ActiveStintComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " 0 ");
  }
}
var ActiveStintComponent = class _ActiveStintComponent {
  stintService = inject(StintService);
  activeStint = this.stintService.activeStint;
  activeStintRemainingTimeOnTrack = this.stintService.activeStintRemainingTimeOnTrack;
  activeStintTimeOnTrackString = computed(() => {
    return millisecondsToTimeString(this.stintService.activeStintTimeOnTrack());
  });
  activeStintRemainingTimeOnTrackString = computed(() => {
    return millisecondsToTimeString(this.stintService.activeStintRemainingTimeOnTrack());
  });
  activeStintGainedTimeOnTrackString = computed(() => {
    return millisecondsToTimeString(this.stintService.activeStintGainedTimeOnTrack());
  });
  activeStintLaps = this.stintService.activeStintLaps;
  activeStintRemainingLaps = this.stintService.activeStintRemainingLaps;
  activeStintGainedLaps = this.stintService.activeStintGainedLaps;
  static \u0275fac = function ActiveStintComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActiveStintComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActiveStintComponent, selectors: [["app-active-stint"]], decls: 42, vars: 8, consts: [["title", "\u{1F3CE}\uFE0F \u{1F4A8} Active stint", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"], [3, "text", "backgroundColor"]], template: function ActiveStintComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, ActiveStintComponent_Conditional_2_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div")(6, "div", 4);
      \u0275\u0275text(7, "Time on track");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div")(11, "div", 6);
      \u0275\u0275text(12, "Laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(15, "hr");
      \u0275\u0275elementStart(16, "div", 3)(17, "div")(18, "div", 4);
      \u0275\u0275text(19, "Remaining time on track");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5);
      \u0275\u0275template(21, ActiveStintComponent_Conditional_21_Template, 1, 1)(22, ActiveStintComponent_Conditional_22_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div")(24, "div", 6);
      \u0275\u0275text(25, "Remaining laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 7);
      \u0275\u0275template(27, ActiveStintComponent_Conditional_27_Template, 1, 1)(28, ActiveStintComponent_Conditional_28_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(29, "hr");
      \u0275\u0275elementStart(30, "div", 3)(31, "div")(32, "div", 4);
      \u0275\u0275text(33, "Gained time on track");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 5);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div")(37, "div", 6);
      \u0275\u0275text(38, "Gained laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 7);
      \u0275\u0275template(40, ActiveStintComponent_Conditional_40_Template, 1, 1)(41, ActiveStintComponent_Conditional_41_Template, 1, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeStint() ? 2 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.activeStintTimeOnTrackString(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.activeStintLaps(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.activeStint() ? 21 : 22);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.activeStint() ? 27 : 28);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.activeStintGainedTimeOnTrackString(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.activeStint() ? 40 : 41);
    }
  }, dependencies: [
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveStintComponent, [{
    type: Component,
    args: [{ selector: "app-active-stint", imports: [
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F3CE}\uFE0F \u{1F4A8} Active stint"
  [initiallyOpen]="true">

  <div slot="header-right-content" class="flex items-center gap-1">
    @if (activeStint()) {
      @if (activeStintRemainingTimeOnTrack() > 0) {

        <app-chip
          [text]="'Remaining: ' + activeStintRemainingTimeOnTrackString()"
          [backgroundColor]="'bg-yellow-500'"
        />

        <app-chip
          [text]="'Laps: ' + activeStintRemainingLaps()"
          [backgroundColor]="'bg-yellow-500'"
        />
      } @else {
        <app-chip
          [text]="'Gained: ' + activeStintGainedTimeOnTrackString()"
          [backgroundColor]="'bg-green-500'"
        />

        <app-chip
          [text]="'Laps: ' + activeStintGainedLaps()"
          [backgroundColor]="'bg-green-500'"
        />
      }
    }
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Time on track</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ activeStintTimeOnTrackString() }}
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ activeStintLaps() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Remaining time on track</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (activeStint()) {
            {{ activeStintRemainingTimeOnTrackString() }}
          } @else {
            --:--:--
          }
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Remaining laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          @if (activeStint()) {
            {{ activeStintRemainingLaps() }}
          } @else {
            0
          }
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Gained time on track</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ activeStintGainedTimeOnTrackString() }}
        </div>
      </div>

      <div>
        <div class="text-neutral-500  dark:text-neutral-400 text-right">Gained laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          @if (activeStint()) {
            {{ activeStintGainedLaps() }}
          } @else {
            0
          }
        </div>
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActiveStintComponent, { className: "ActiveStintComponent", filePath: "src/app/stint/component/active-stint/active-stint.component.ts", lineNumber: 17 });
})();

// src/app/stint/service/delta-stint.service.ts
var DeltaStintService = class _DeltaStintService {
  stintDataService = inject(StintDataService);
  worker;
  deltaStints = signal([]);
  totalDeltaMilliseconds = signal(0);
  deltaMilliseconds = signal(0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-IFAFNGC7.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.deltaStints.set(data.deltaStints);
        this.totalDeltaMilliseconds.set(data.deltaMilliseconds);
        this.deltaMilliseconds.set(data.deltaMilliseconds);
      };
    }
    combineLatest({
      stints: toObservable(this.stintDataService.stints),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ stints }) => {
      if (this.worker) {
        this.worker.postMessage({
          stints
        });
      }
    });
  }
  static \u0275fac = function DeltaStintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeltaStintService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeltaStintService, factory: _DeltaStintService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeltaStintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/stint/component/delta-stint/delta-stint.component.ts
var _c0 = (a0, a1) => ({ "bg-yellow-500 text-neutral-100": a0, "bg-green-500 text-neutral-100": a1 });
var _c1 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
var _c2 = (a0, a1) => ({ "bg-yellow-500": a0, "bg-green-500": a1 });
function DeltaStintComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", (ctx_r0.deltaMilliseconds() < 0 ? "Losing:" : "Gaining:") + " " + ctx_r0.deltaString)("backgroundColor", ctx_r0.deltaMilliseconds() < 0 ? "bg-yellow-500" : "bg-green-500")("tooltipData", ctx_r0.tooltipInfo)("tooltipPosition", ctx_r0.tooltipPosition);
  }
}
function DeltaStintComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 17)(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 20)(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deltaStint_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c1, deltaStint_r2.id === ctx_r0.activeStintId(), deltaStint_r2.id !== ctx_r0.activeStintId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deltaStint_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getMillisecondsString(deltaStint_r2.timeOnTrack), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getMillisecondsString(deltaStint_r2.optimum), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c2, deltaStint_r2.delta < 0, deltaStint_r2.delta >= 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMillisecondsString(deltaStint_r2.delta), " ");
  }
}
var DeltaStintComponent = class _DeltaStintComponent {
  stintService = inject(StintService);
  deltaStintService = inject(DeltaStintService);
  deltaStints = this.deltaStintService.deltaStints;
  totalDeltaMilliseconds = this.deltaStintService.totalDeltaMilliseconds;
  deltaMilliseconds = computed(() => {
    const value = this.deltaStintService.deltaMilliseconds();
    this.deltaString = millisecondsToHourMinuteSecondString(Math.abs(value));
    return value;
  });
  activeStintId = computed(() => {
    const activeStint = this.stintService.activeStint();
    if (activeStint) {
      return activeStint.id;
    }
    return void 0;
  });
  deltaString = "";
  tooltipInfo = {
    footer: "",
    paragraphs: ["Only completed stint"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  getMillisecondsString(milliseconds) {
    return millisecondsToHourMinuteSecondString(Math.abs(milliseconds));
  }
  static \u0275fac = function DeltaStintComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeltaStintComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeltaStintComponent, selectors: [["app-delta-stint"]], decls: 28, vars: 8, consts: [["title", "\u03B4 Delta stint", 3, "initiallyOpen"], ["slot", "header-right-content"], ["tooltip", "", 3, "text", "backgroundColor", "tooltipData", "tooltipPosition"], ["slot", "body-content", 1, "max-h-72", "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "xl:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "xl:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "sticky", "bottom-0-0"], [1, "bg-neutral-100", "dark:bg-neutral-700", "font-bold"], ["colspan", "5", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-xs", "xl:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "pr-1", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "xl:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "p-1", "text-center", "rounded-sm", 3, "ngClass"], [3, "ngClass"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-xs", "xl:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "xl:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], ["colspan", "2", 1, "py-2", "pr-1", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "xl:text-base", "font-mono"], [1, "p-1", "text-center", "text-neutral-100", "rounded-sm", 3, "ngClass"]], template: function DeltaStintComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, DeltaStintComponent_Conditional_2_Template, 1, 4, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "table", 4)(5, "thead", 5)(6, "tr")(7, "th", 6);
      \u0275\u0275text(8, " ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "th", 7);
      \u0275\u0275text(10, "On track ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 7);
      \u0275\u0275text(12, "Optimum ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 7);
      \u0275\u0275text(14, "Delta ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "table", 9)(17, "tbody");
      \u0275\u0275template(18, DeltaStintComponent_tr_18_Template, 10, 12, "tr", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "table", 9)(21, "tfoot", 12)(22, "tr", 13)(23, "td", 14);
      \u0275\u0275text(24, "Totals ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "td", 15)(26, "div", 16);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.deltaMilliseconds() != 0 ? 2 : -1);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.deltaStints());
      \u0275\u0275advance(8);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, ctx.totalDeltaMilliseconds() < 0, ctx.totalDeltaMilliseconds() > 0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getMillisecondsString(ctx.totalDeltaMilliseconds()), " ");
    }
  }, dependencies: [
    NgForOf,
    NgClass,
    TooltipDirective,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeltaStintComponent, [{
    type: Component,
    args: [{ selector: "app-delta-stint", imports: [
      NgForOf,
      NgClass,
      TooltipDirective,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u03B4 Delta stint"
  [initiallyOpen]="false">

  <div slot="header-right-content">
    @if (deltaMilliseconds() != 0){
      <app-chip
        [text]="(deltaMilliseconds() < 0 ? 'Losing:':'Gaining:') + ' ' + deltaString"
        [backgroundColor]="deltaMilliseconds() < 0 ? 'bg-yellow-500' : 'bg-green-500'"
        tooltip [tooltipData]=tooltipInfo [tooltipPosition]=tooltipPosition
      />
    }
  </div>

  <div slot="body-content"
       class="max-h-72 flex flex-col overflow-clip">
    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs xl:text-base font-medium text-neutral-700 dark:text-neutral-400">
          ID
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">On track
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">Optimum
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">Delta
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let deltaStint of deltaStints()"
            [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': deltaStint.id === activeStintId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': deltaStint.id !== activeStintId()}">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-xs xl:text-base text-neutral-900 dark:text-neutral-100">{{ deltaStint.id }}</td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{ getMillisecondsString(deltaStint.timeOnTrack) }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{ getMillisecondsString(deltaStint.optimum) }}
          </td>
          <td class="py-2 pr-1 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base font-mono"
              colspan="2">
            <div
              [ngClass]="{'bg-yellow-500': deltaStint.delta < 0, 'bg-green-500': deltaStint.delta >= 0}"
              class="p-1 text-center text-neutral-100 rounded-sm">
              {{ getMillisecondsString(deltaStint.delta) }}
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex">
      <table class="w-full table-fixed">
        <tfoot class="sticky bottom-0-0">
        <tr class="bg-neutral-100 dark:bg-neutral-700 font-bold">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-xs xl:text-base text-neutral-900 dark:text-neutral-100" colspan="5">Totals
          </td>
          <td class="py-2 pr-1 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs xl:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">
            <div
              [ngClass]="{'bg-yellow-500 text-neutral-100': totalDeltaMilliseconds() < 0, 'bg-green-500 text-neutral-100': totalDeltaMilliseconds() > 0}"
              class="p-1 text-center rounded-sm">
              {{ getMillisecondsString(totalDeltaMilliseconds()) }}
            </div>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeltaStintComponent, { className: "DeltaStintComponent", filePath: "src/app/stint/component/delta-stint/delta-stint.component.ts", lineNumber: 25 });
})();

// src/app/driver/component/driver-change/driver-change.component.ts
var DriverChangeComponent = class _DriverChangeComponent {
  pitService = inject(PitService);
  remainingDriverChanges = this.pitService.remainingDriverChanges;
  completedDriverChanges = this.pitService.completedDriverChanges;
  static \u0275fac = function DriverChangeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverChangeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverChangeComponent, selectors: [["app-driver-change"]], decls: 14, vars: 5, consts: [["title", "\u{1F417} \u{1F504} Driver change", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-600", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function DriverChangeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "div", 6);
      \u0275\u0275text(11, "Remaining");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.remainingDriverChanges() > 0 ? "Warning: " + ctx.remainingDriverChanges() : "Completed")("backgroundColor", ctx.remainingDriverChanges() > 0 ? "bg-yellow-500" : "bg-green-500");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.completedDriverChanges(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.remainingDriverChanges(), " ");
    }
  }, dependencies: [
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverChangeComponent, [{
    type: Component,
    args: [{ selector: "app-driver-change", imports: [
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417} \u{1F504} Driver change"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="remainingDriverChanges() > 0 ? 'Warning: ' + remainingDriverChanges() : 'Completed'"
      [backgroundColor]="remainingDriverChanges() > 0 ? 'bg-yellow-500' : 'bg-green-500'"
    />

  </div>

  <div slot="body-content" class="flex justify-between">
    <div>
      <div class="text-neutral-500 dark:text-neutral-400">Completed</div>
      <div class="text-neutral-900 dark:text-neutral-100 font-mono">
        {{ completedDriverChanges() }}
      </div>
    </div>

    <div>
      <div class="text-neutral-600 dark:text-neutral-400">Remaining</div>
      <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
        {{ remainingDriverChanges() }}
      </div>
    </div>
  </div>
</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverChangeComponent, { className: "DriverChangeComponent", filePath: "src/app/driver/component/driver-change/driver-change.component.ts", lineNumber: 15 });
})();

// src/app/driver/component/driver/driver.component.ts
var _c02 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
var _c12 = (a0) => ({ "bg-yellow-500 text-white": a0 });
function DriverComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 14)(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 18)(8, "div", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const driver_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c02, driver_r1.id === ctx_r1.activeStintDriverId(), driver_r1.id !== ctx_r1.activeStintDriverId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r1.raceName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDriverStintCount(driver_r1.id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c12, ctx_r1.getDriverTimeOnTrackWarning(driver_r1.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDriverTimeOnTrack(driver_r1.id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getDriverTimeFromLastStint(driver_r1.id), " ");
  }
}
var DriverComponent = class _DriverComponent {
  driverService = inject(DriverService);
  stintService = inject(StintService);
  drivers = this.driverService.drivers;
  driversTimeOnTrackWarningCount = this.driverService.driversTimeOnTrackWarningCount;
  activeStintDriverId = computed(() => {
    const activeStint = this.stintService.activeStint();
    if (activeStint) {
      return activeStint.driverId;
    }
    return void 0;
  });
  getDriverTimeOnTrack(driverId) {
    return millisecondsToTimeString(this.driverService.driversTimeOnTrackMap().get(driverId));
  }
  getDriverTimeOnTrackWarning(driverId) {
    return this.driverService.driversTimeOnTrackWarningMap().get(driverId) || false;
  }
  getDriverStintCount(driverId) {
    return this.driverService.driversStintCountMap().get(driverId) ?? 0;
  }
  getDriverTimeFromLastStint(driverId) {
    return millisecondsToTimeString(this.driverService.driversTimeFromLastStintMap().get(driverId));
  }
  static \u0275fac = function DriverComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverComponent, selectors: [["app-driver"]], decls: 21, vars: 4, consts: [["title", "\u{1F417} Driver", "xmlns", "http://www.w3.org/1999/html", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "p-1", "text-center", "rounded-sm", 3, "ngClass"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"]], template: function DriverComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "table", 4)(5, "thead", 5)(6, "tr")(7, "th", 6);
      \u0275\u0275text(8, " ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "th", 7);
      \u0275\u0275text(10, " Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 8);
      \u0275\u0275text(12, " Stint ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 9);
      \u0275\u0275text(14, " On track ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 10);
      \u0275\u0275text(16, " From last stint ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 11)(18, "table", 12)(19, "tbody");
      \u0275\u0275template(20, DriverComponent_tr_20_Template, 12, 12, "tr", 13);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.driversTimeOnTrackWarningCount() ? "Warning: " + ctx.driversTimeOnTrackWarningCount() : "Completed")("backgroundColor", ctx.driversTimeOnTrackWarningCount() <= 0 ? "bg-green-500" : "bg-yellow-500");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.drivers());
    }
  }, dependencies: [
    NgClass,
    NgForOf,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverComponent, [{
    type: Component,
    args: [{ selector: "app-driver", imports: [
      NgClass,
      NgForOf,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417} Driver"
  [initiallyOpen]="false" xmlns="http://www.w3.org/1999/html">

  <div slot="header-right-content" class="flex items-center">
    <app-chip
      [text]="driversTimeOnTrackWarningCount() ? 'Warning: ' + driversTimeOnTrackWarningCount() : 'Completed'"
      [backgroundColor]="driversTimeOnTrackWarningCount() <= 0 ? 'bg-green-500' : 'bg-yellow-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col overflow-clip">
    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          ID
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Name
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Stint
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">
          On track
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">
          From last stint
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let driver of drivers()"
            [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': driver.id === activeStintDriverId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': driver.id !== activeStintDriverId()}">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ driver.id }}</td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ driver.raceName }}</td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"> {{
              getDriverStintCount(driver.id)
            }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">
            <div
              [ngClass]="{'bg-yellow-500 text-white': getDriverTimeOnTrackWarning(driver.id)}"
              class="p-1 text-center rounded-sm">
              {{ getDriverTimeOnTrack(driver.id) }}
            </div>
          </td>
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{
              getDriverTimeFromLastStint(driver.id)
            }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>


</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverComponent, { className: "DriverComponent", filePath: "src/app/driver/component/driver/driver.component.ts", lineNumber: 21 });
})();

// src/app/shared/component/battery/battery.component.ts
var BatteryComponent = class _BatteryComponent {
  charge = 100;
  batteryColor = "bg-green-500";
  batteryBorderColor = "border-gray-200";
  ngOnChanges(changes) {
    this.batteryColor = this.getBackgroundColor(this.charge);
    this.batteryBorderColor = this.getBorderColor(this.charge);
  }
  getBackgroundColor(charge) {
    if (charge <= 10) {
      return "bg-red-500";
    }
    if (charge <= 25) {
      return "bg-orange-500";
    }
    if (charge <= 50) {
      return "bg-yellow-500";
    }
    return "bg-green-500";
  }
  getBorderColor(charge) {
    if (charge <= 10) {
      return "border-red-500";
    }
    if (charge <= 25) {
      return "border-orange-500";
    }
    return "border-gray-200";
  }
  static \u0275fac = function BatteryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BatteryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BatteryComponent, selectors: [["app-battery"]], inputs: { charge: "charge" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 6, consts: [[1, "w-16", "lg:w-20", "h-8", "grid", "grid-cols-6", "items-center"], [1, "shadow-sm", "col-span-5", "rounded-sm", "border-2", "flex", "relative", "bg-neutral-100", "dark:bg-neutral-900", 3, "ngClass"], [1, "cursor-default", "leading-none", "rounded-xs", "flex", "items-center", "py-3", 3, "ngClass"], [1, "absolute", "right-2", "text-neutral-900", "dark:text-neutral-100", "font-semibold", "font-mono"], [1, "ml-0.5", "border-r-8", "w-1", "h-4", "rounded-r", 3, "ngClass"]], template: function BatteryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(5, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.batteryBorderColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.charge, "%");
      \u0275\u0275property("ngClass", ctx.batteryColor);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.charge);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.batteryBorderColor);
    }
  }, dependencies: [NgClass], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BatteryComponent, [{
    type: Component,
    args: [{ selector: "app-battery", standalone: true, imports: [
      NgClass
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="w-16 lg:w-20 h-8 grid grid-cols-6 items-center">\n  <div [ngClass]="batteryBorderColor" class="shadow-sm col-span-5 rounded-sm border-2 flex relative bg-neutral-100 dark:bg-neutral-900">\n    <div\n        [ngClass]="batteryColor"\n        [style.width.%]="charge"\n        class="cursor-default leading-none rounded-xs flex items-center py-3">\n      <div class="absolute right-2 text-neutral-900 dark:text-neutral-100 font-semibold font-mono">{{ charge }}</div>\n    </div>\n  </div>\n  <div [ngClass]="batteryBorderColor" class="ml-0.5 border-r-8 w-1 h-4 rounded-r"></div>\n</div>\n' }]
  }], null, { charge: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BatteryComponent, { className: "BatteryComponent", filePath: "src/app/shared/component/battery/battery.component.ts", lineNumber: 14 });
})();

// src/app/fuel/service/fuel.service.ts
var FuelService = class _FuelService {
  raceService = inject(RaceService);
  pitService = inject(PitService);
  raceConfigService = inject(RaceConfigService);
  lapConfigService = inject(LapConfigService);
  worker;
  lastRefuelTime = signal(void 0);
  emptyFuelTime = signal(void 0);
  remainingFuelPercentage = signal(100);
  remainingFuelLap = signal(0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-5KIJXKE5.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.lastRefuelTime.set(data.lastRefuelTime);
        this.emptyFuelTime.set(data.emptyFuelTime);
        this.remainingFuelLap.set(data.remainingFuelLap);
        this.remainingFuelPercentage.set(data.remainingFuelPercentage);
      };
    }
    combineLatest({
      lastRefuelPit: toObservable(this.pitService.lastRefuelPit),
      race: toObservable(this.raceService.activeRace),
      raceConfig: toObservable(this.raceConfigService.raceConfig),
      lapConfig: toObservable(this.lapConfigService.lapConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ lastRefuelPit, race, raceConfig, lapConfig }) => {
      if (this.worker && raceConfig && lapConfig) {
        this.worker.postMessage({
          lastRefuelPit,
          race,
          raceConfig,
          lapConfig
        });
      }
    });
  }
  static \u0275fac = function FuelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FuelService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuelService, factory: _FuelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuelService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/fuel/component/fuel/fuel.component.ts
var _c03 = (a0) => ({ "animate-bounce": a0 });
function FuelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.lastRefuelTime(), "HH:mm:ss"), " ");
  }
}
function FuelComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
function FuelComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.emptyFuelTime(), "HH:mm:ss"), " ");
  }
}
function FuelComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
var FuelComponent = class _FuelComponent {
  fuelService = inject(FuelService);
  remainingFuelPercentage = this.fuelService.remainingFuelPercentage;
  remainingFuelLap = this.fuelService.remainingFuelLap;
  emptyFuelTime = this.fuelService.emptyFuelTime;
  lastRefuelTime = this.fuelService.lastRefuelTime;
  emptyFuelCountdown = computed(() => {
    return getTimeUntilFutureDate(this.emptyFuelTime());
  });
  sinceLastRefuel = computed(() => {
    return getElapsedTime(this.lastRefuelTime(), /* @__PURE__ */ new Date());
  });
  warning = computed(() => {
    return this.remainingFuelPercentage() <= 20;
  });
  remainingColor = computed(() => {
    return this.getRemainingColor(this.remainingFuelPercentage());
  });
  getRemainingColor(fuelPercentage) {
    if (fuelPercentage <= 10) {
      return "bg-red-500";
    }
    if (fuelPercentage <= 25) {
      return "bg-orange-500";
    }
    if (fuelPercentage <= 50) {
      return "bg-yellow-500";
    }
    return "bg-green-500";
  }
  static \u0275fac = function FuelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FuelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuelComponent, selectors: [["app-fuel"]], decls: 38, vars: 16, consts: [["title", "\u26FD\uFE0F Fuel", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor", "bounceCondition"], [3, "charge", "ngClass"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function FuelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 2)(4, "app-battery", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div")(8, "div", 6);
      \u0275\u0275text(9, "Last refuel time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, FuelComponent_Conditional_11_Template, 2, 4)(12, FuelComponent_Conditional_12_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "div", 8);
      \u0275\u0275text(15, "Since last refuel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(18, "hr");
      \u0275\u0275elementStart(19, "div", 5)(20, "div")(21, "div", 6);
      \u0275\u0275text(22, "Empty time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 7);
      \u0275\u0275template(24, FuelComponent_Conditional_24_Template, 2, 4)(25, FuelComponent_Conditional_25_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "div", 8);
      \u0275\u0275text(28, "Empty in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(31, "hr");
      \u0275\u0275elementStart(32, "div", 5)(33, "div")(34, "div", 6);
      \u0275\u0275text(35, "Remaining laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 7);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Empty: " + ctx.emptyFuelCountdown())("backgroundColor", ctx.remainingColor())("bounceCondition", ctx.warning());
      \u0275\u0275advance();
      \u0275\u0275property("text", "Laps: " + ctx.remainingFuelLap())("backgroundColor", ctx.remainingColor())("bounceCondition", ctx.warning());
      \u0275\u0275advance();
      \u0275\u0275property("charge", ctx.remainingFuelPercentage())("ngClass", \u0275\u0275pureFunction1(14, _c03, ctx.warning()));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.lastRefuelTime() ? 11 : 12);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.sinceLastRefuel(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.emptyFuelTime() ? 24 : 25);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.emptyFuelCountdown(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.remainingFuelLap(), " ");
    }
  }, dependencies: [NgClass, DatePipe, BatteryComponent, FormsModule, CardComponent, ChipComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FuelComponent, [{
    type: Component,
    args: [{ selector: "app-fuel", imports: [NgClass, DatePipe, BatteryComponent, FormsModule, CardComponent, ChipComponent], template: `<app-card
  title="\u26FD\uFE0F Fuel"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="'Empty: ' + emptyFuelCountdown()"
      [backgroundColor]="remainingColor()"
      [bounceCondition]="warning()"
    />

    <app-chip
      [text]="'Laps: ' + remainingFuelLap()"
      [backgroundColor]="remainingColor()"
      [bounceCondition]="warning()"
    />

    <app-battery [charge]="remainingFuelPercentage()" [ngClass]="{'animate-bounce': warning() }"></app-battery>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Last refuel time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (lastRefuelTime()) {
            {{ lastRefuelTime() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Since last refuel</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ sinceLastRefuel() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Empty time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (emptyFuelTime()) {
            {{ emptyFuelTime() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Empty in</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ emptyFuelCountdown() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Remaining laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ remainingFuelLap() }}
        </div>
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuelComponent, { className: "FuelComponent", filePath: "src/app/fuel/component/fuel/fuel.component.ts", lineNumber: 16 });
})();

// src/app/interphone/service/interphone.service.ts
var InterphoneService = class _InterphoneService {
  raceService = inject(RaceService);
  pitService = inject(PitService);
  raceConfigService = inject(RaceConfigService);
  worker;
  lastChangeDate = signal(void 0);
  emptyBatteryDate = signal(void 0);
  remainingBatteryPercentage = signal(100);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-OYZUCXZ5.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.lastChangeDate.set(data.lastChangeDate);
        this.emptyBatteryDate.set(data.emptyBatteryDate);
        this.remainingBatteryPercentage.set(data.remainingBatteryPercentage);
      };
    }
    combineLatest({
      lastInterphoneChangePit: toObservable(this.pitService.lastInterphoneChangePit),
      race: toObservable(this.raceService.activeRace),
      raceConfig: toObservable(this.raceConfigService.raceConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ lastInterphoneChangePit, race, raceConfig }) => {
      if (this.worker && raceConfig) {
        this.worker.postMessage({
          lastInterphoneChangePit,
          race,
          raceConfig
        });
      }
    });
  }
  static \u0275fac = function InterphoneService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterphoneService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InterphoneService, factory: _InterphoneService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InterphoneService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/interphone/component/interphone/interphone.component.ts
var _c04 = (a0) => ({ "animate-bounce": a0 });
function InterphoneComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.lastChangeTime(), "HH:mm:ss"), " ");
  }
}
function InterphoneComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
function InterphoneComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.emptyBatteryDate(), "HH:mm:ss"), " ");
  }
}
function InterphoneComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
var InterphoneComponent = class _InterphoneComponent {
  interphoneService = inject(InterphoneService);
  remainingBatteryPercentage = this.interphoneService.remainingBatteryPercentage;
  emptyBatteryDate = this.interphoneService.emptyBatteryDate;
  lastChangeTime = this.interphoneService.lastChangeDate;
  emptyBatteryCountdown = computed(() => {
    return getTimeUntilFutureDate(this.emptyBatteryDate());
  });
  sinceLastChange = computed(() => {
    return getElapsedTime(this.lastChangeTime(), /* @__PURE__ */ new Date());
  });
  warning = computed(() => {
    return this.remainingBatteryPercentage() <= 20;
  });
  remainingColor = computed(() => {
    return this.getRemainingColor(this.remainingBatteryPercentage());
  });
  getRemainingColor(batteryPercentage) {
    if (batteryPercentage <= 10) {
      return "bg-red-500";
    }
    if (batteryPercentage <= 25) {
      return "bg-orange-500";
    }
    if (batteryPercentage <= 50) {
      return "bg-yellow-500";
    }
    return "bg-green-500";
  }
  static \u0275fac = function InterphoneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InterphoneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InterphoneComponent, selectors: [["app-interphone"]], decls: 30, vars: 12, consts: [["title", "\u{1F50A} Interphone", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor", "bounceCondition"], [3, "charge", "ngClass"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function InterphoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-battery", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6);
      \u0275\u0275text(8, "Last change time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275template(10, InterphoneComponent_Conditional_10_Template, 2, 4)(11, InterphoneComponent_Conditional_11_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div")(13, "div", 8);
      \u0275\u0275text(14, "Since last change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(17, "hr");
      \u0275\u0275elementStart(18, "div", 5)(19, "div")(20, "div", 6);
      \u0275\u0275text(21, "Empty time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7);
      \u0275\u0275template(23, InterphoneComponent_Conditional_23_Template, 2, 4)(24, InterphoneComponent_Conditional_24_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div")(26, "div", 8);
      \u0275\u0275text(27, "Empty in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Empty: " + ctx.emptyBatteryCountdown())("backgroundColor", ctx.remainingColor())("bounceCondition", ctx.warning());
      \u0275\u0275advance();
      \u0275\u0275property("charge", ctx.remainingBatteryPercentage())("ngClass", \u0275\u0275pureFunction1(10, _c04, ctx.warning()));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.lastChangeTime() ? 10 : 11);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.sinceLastChange(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.emptyBatteryDate() ? 23 : 24);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.emptyBatteryCountdown(), " ");
    }
  }, dependencies: [
    BatteryComponent,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InterphoneComponent, [{
    type: Component,
    args: [{ selector: "app-interphone", imports: [
      BatteryComponent,
      DatePipe,
      FormsModule,
      ReactiveFormsModule,
      NgClass,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F50A} Interphone"
  [initiallyOpen]="false">

  <div slot="header-right-content"
       class="flex items-center gap-1">

    <app-chip
      [text]="'Empty: ' + emptyBatteryCountdown()"
      [backgroundColor]="remainingColor()"
      [bounceCondition]="warning()"
    />
    <app-battery [charge]="remainingBatteryPercentage()" [ngClass]="{'animate-bounce': warning() }"></app-battery>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Last change time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (lastChangeTime()) {
            {{ lastChangeTime() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Since last change</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ sinceLastChange() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Empty time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (emptyBatteryDate()) {
            {{ emptyBatteryDate() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Empty in</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ emptyBatteryCountdown() }}
        </div>
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InterphoneComponent, { className: "InterphoneComponent", filePath: "src/app/interphone/component/interphone/interphone.component.ts", lineNumber: 24 });
})();

// src/app/kart/service/kart.service.ts
var KartService = class _KartService {
  worker;
  raceConfigService = inject(RaceConfigService);
  kartConfigService = inject(KartConfigService);
  lapConfigService = inject(LapConfigService);
  raceService = inject(RaceService);
  pitService = inject(PitService);
  remainingKartChanges = signal(0);
  remainingKartPercentage = signal(100);
  remainingKartLap = signal(0);
  expirationKartDate = signal(void 0);
  lastKartChangeDate = signal(void 0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-A7QZZZ4M.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.remainingKartChanges.set(data.remainingKartChanges);
        this.remainingKartPercentage.set(data.remainingKartPercentage);
        this.remainingKartLap.set(data.remainingKartLap);
        this.expirationKartDate.set(data.expirationKartDate);
        this.lastKartChangeDate.set(data.lastKartChangeDate);
      };
    }
    combineLatest({
      race: toObservable(this.raceService.activeRace),
      raceConfig: toObservable(this.raceConfigService.raceConfig),
      kartConfig: toObservable(this.kartConfigService.kartConfig),
      lapConfig: toObservable(this.lapConfigService.lapConfig),
      lastKartChangePit: toObservable(this.pitService.lastKartChangePit),
      completedKartChanges: toObservable(this.pitService.completedKartChanges),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ race, raceConfig, kartConfig, lapConfig, lastKartChangePit, completedKartChanges }) => {
      if (this.worker && raceConfig && kartConfig && lapConfig) {
        this.worker.postMessage({
          kartConfig,
          raceConfig,
          lapConfig,
          race,
          lastKartChangePit,
          completedKartChanges
        });
      }
    });
  }
  static \u0275fac = function KartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KartService, factory: _KartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/kart/component/kart-change/kart-change.component.ts
var KartChangeComponent = class _KartChangeComponent {
  kartService = inject(KartService);
  pitService = inject(PitService);
  remainingKartChanges = this.kartService.remainingKartChanges;
  completedKartChanges = this.pitService.completedKartChanges;
  static \u0275fac = function KartChangeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KartChangeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KartChangeComponent, selectors: [["app-kart-change"]], decls: 14, vars: 5, consts: [["title", "\u{1F3CE}\uFE0F \u{1F504} Kart change", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-600", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function KartChangeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div")(5, "div", 4);
      \u0275\u0275text(6, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "div", 6);
      \u0275\u0275text(11, "Remaining");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.remainingKartChanges() > 0 ? "Remaining: " + ctx.remainingKartChanges() : "Completed")("backgroundColor", ctx.remainingKartChanges() > 0 ? "bg-yellow-500" : "bg-green-500");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.completedKartChanges(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.remainingKartChanges(), " ");
    }
  }, dependencies: [
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KartChangeComponent, [{
    type: Component,
    args: [{ selector: "app-kart-change", imports: [
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F3CE}\uFE0F \u{1F504} Kart change"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="remainingKartChanges() > 0 ? 'Remaining: ' + remainingKartChanges() : 'Completed'"
      [backgroundColor]="remainingKartChanges() > 0 ? 'bg-yellow-500' : 'bg-green-500'"
    />
  </div>

  <div slot="body-content" class="flex justify-between">
    <div>
      <div class="text-neutral-500 dark:text-neutral-400">Completed</div>
      <div class="text-neutral-900 dark:text-neutral-100 font-mono">
        {{ completedKartChanges() }}
      </div>
    </div>

    <div>
      <div class="text-neutral-600 dark:text-neutral-400">Remaining</div>
      <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
        {{ remainingKartChanges() }}
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KartChangeComponent, { className: "KartChangeComponent", filePath: "src/app/kart/component/kart-change/kart-change.component.ts", lineNumber: 16 });
})();

// src/app/kart/component/kart/kart.component.ts
var _c05 = (a0) => ({ "animate-bounce": a0 });
function KartComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.lastKartChangeDate(), "HH:mm:ss"), " ");
  }
}
function KartComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
function KartComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.expirationKartDate(), "HH:mm:ss"), " ");
  }
}
function KartComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
var KartComponent = class _KartComponent {
  kartService = inject(KartService);
  remainingKartPercentage = this.kartService.remainingKartPercentage;
  remainingKartLap = this.kartService.remainingKartLap;
  expirationKartDate = this.kartService.expirationKartDate;
  lastKartChangeDate = this.kartService.lastKartChangeDate;
  expirationKartCountdown = computed(() => {
    return getTimeUntilFutureDate(this.expirationKartDate());
  });
  sinceLastKartChange = computed(() => {
    return getElapsedTime(this.lastKartChangeDate(), /* @__PURE__ */ new Date());
  });
  remainingColor = computed(() => {
    return this.getRemainingColor(this.remainingKartPercentage());
  });
  warning = computed(() => {
    return this.remainingKartPercentage() <= 20;
  });
  getRemainingColor(kartPercentage) {
    if (kartPercentage <= 10) {
      return "bg-red-500";
    }
    if (kartPercentage <= 25) {
      return "bg-orange-500";
    }
    if (kartPercentage <= 50) {
      return "bg-yellow-500";
    }
    return "bg-green-500";
  }
  static \u0275fac = function KartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KartComponent, selectors: [["app-kart"]], decls: 38, vars: 16, consts: [["title", "\u{1F3CE}\uFE0F Kart", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor", "bounceCondition"], [3, "charge", "ngClass"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function KartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 2)(4, "app-battery", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div")(8, "div", 6);
      \u0275\u0275text(9, "Last kart change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, KartComponent_Conditional_11_Template, 2, 4)(12, KartComponent_Conditional_12_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "div", 8);
      \u0275\u0275text(15, "Since last kart change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(18, "hr");
      \u0275\u0275elementStart(19, "div", 5)(20, "div")(21, "div", 6);
      \u0275\u0275text(22, "Expiration time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 7);
      \u0275\u0275template(24, KartComponent_Conditional_24_Template, 2, 4)(25, KartComponent_Conditional_25_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "div", 8);
      \u0275\u0275text(28, "Expiration in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 9);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(31, "hr");
      \u0275\u0275elementStart(32, "div", 5)(33, "div")(34, "div", 6);
      \u0275\u0275text(35, "Remaining laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 7);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Empty: " + ctx.expirationKartCountdown())("backgroundColor", ctx.remainingColor())("bounceCondition", ctx.warning());
      \u0275\u0275advance();
      \u0275\u0275property("text", "Laps: " + ctx.remainingKartLap())("backgroundColor", ctx.remainingColor())("bounceCondition", ctx.warning());
      \u0275\u0275advance();
      \u0275\u0275property("charge", ctx.remainingKartPercentage())("ngClass", \u0275\u0275pureFunction1(14, _c05, ctx.warning()));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.lastKartChangeDate() ? 11 : 12);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.sinceLastKartChange(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.expirationKartDate() ? 24 : 25);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.expirationKartCountdown(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.remainingKartLap(), " ");
    }
  }, dependencies: [
    BatteryComponent,
    DatePipe,
    FormsModule,
    NgClass,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KartComponent, [{
    type: Component,
    args: [{ selector: "app-kart", imports: [
      BatteryComponent,
      DatePipe,
      FormsModule,
      NgClass,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F3CE}\uFE0F Kart"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="'Empty: ' + expirationKartCountdown()"
      [backgroundColor]="remainingColor()"
      [bounceCondition]="warning()"
    />

    <app-chip
      [text]="'Laps: ' + remainingKartLap()"
      [backgroundColor]="remainingColor()"
      [bounceCondition]="warning()"
    />

    <app-battery [charge]="remainingKartPercentage()" [ngClass]="{'animate-bounce': warning() }"></app-battery>
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Last kart change</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (lastKartChangeDate()) {
            {{ lastKartChangeDate() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>
      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Since last kart change</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ sinceLastKartChange() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Expiration time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (expirationKartDate()) {
            {{ expirationKartDate() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Expiration in</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ expirationKartCountdown() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Remaining laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ remainingKartLap() }}
        </div>
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KartComponent, { className: "KartComponent", filePath: "src/app/kart/component/kart/kart.component.ts", lineNumber: 23 });
})();

// src/app/pit/component/pit/pit.component.ts
var _c06 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
function PitComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.remainingMinTotalPitMilliseconds() > 0 ? "Remaining: " + ctx_r0.remainingMinTotalPitString : "Completed")("backgroundColor", ctx_r0.remainingMinTotalPitMilliseconds() > 0 ? "bg-yellow-500" : "bg-green-500");
  }
}
function PitComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tooltipData", ctx_r0.tooltipAVGInfo)("tooltipPosition", ctx_r0.tooltipPosition)("text", "AVG: " + ctx_r0.pitAVGString);
  }
}
function PitComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275text(1, " \u26FD\uFE0F ");
    \u0275\u0275elementEnd();
  }
}
function PitComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275text(1, " \u{1F6DE} \u{1F504} ");
    \u0275\u0275elementEnd();
  }
}
function PitComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275text(1, " \u{1F50A} \u{1F504} ");
    \u0275\u0275elementEnd();
  }
}
function PitComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 9);
    \u0275\u0275text(1, " \u{1F3CE}\uFE0F \u{1F504} ");
    \u0275\u0275elementEnd();
  }
}
function PitComponent_tr_22_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function PitComponent_tr_22_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function PitComponent_tr_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275template(1, PitComponent_tr_22_Conditional_5_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(pit_r2.refuel ? 1 : -1);
  }
}
function PitComponent_tr_22_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function PitComponent_tr_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275template(1, PitComponent_tr_22_Conditional_6_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(pit_r2.tyreChange ? 1 : -1);
  }
}
function PitComponent_tr_22_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function PitComponent_tr_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275template(1, PitComponent_tr_22_Conditional_7_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(pit_r2.interphoneChange ? 1 : -1);
  }
}
function PitComponent_tr_22_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2705 ");
  }
}
function PitComponent_tr_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275template(1, PitComponent_tr_22_Conditional_8_Conditional_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pit_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(pit_r2.kartChange ? 1 : -1);
  }
}
function PitComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 20)(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 21);
    \u0275\u0275template(4, PitComponent_tr_22_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PitComponent_tr_22_Conditional_5_Template, 2, 1, "td", 22)(6, PitComponent_tr_22_Conditional_6_Template, 2, 1, "td", 22)(7, PitComponent_tr_22_Conditional_7_Template, 2, 1, "td", 22)(8, PitComponent_tr_22_Conditional_8_Template, 2, 1, "td", 22);
    \u0275\u0275elementStart(9, "td", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pit_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c06, pit_r2.id === ctx_r0.activePitId(), pit_r2.id !== ctx_r0.activePitId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pit_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(pit_r2.entryDriverId !== pit_r2.exitDriverId ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fuelVisible ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.tyreChangeVisible ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.interphoneVisible ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.kartChangeVisible ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.calculatePitTime(pit_r2), " ");
  }
}
function PitComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.calculateTotalRefueling());
  }
}
function PitComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.calculateTotalTyreChanges());
  }
}
function PitComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.calculateTotalInterphoneChanges());
  }
}
function PitComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.calculateTotalKartChanges());
  }
}
var PitComponent = class _PitComponent {
  pitService = inject(PitService);
  pitDataService = inject(PitDataService);
  boardConfigService = inject(BoardConfigService);
  pitConfigService = inject(PitConfigService);
  pits = this.pitDataService.pits;
  activePitId = computed(() => {
    const activePit = this.pitService.activePit();
    if (activePit) {
      return activePit.id;
    }
    return void 0;
  });
  completedDriverChanges = this.pitService.completedDriverChanges;
  pitAVGMilliseconds = computed(() => {
    const value = this.pitService.pitAVGMilliseconds();
    this.pitAVGString = millisecondsToMinuteSecondMillisecondsString(value);
    return value;
  });
  minTotalPitMillisecondsVisible = computed(() => {
    const config = this.pitConfigService.pitConfig();
    return config ? config.minTotalPitMinute > 0 : false;
  });
  remainingMinTotalPitMilliseconds = computed(() => {
    const value = this.pitService.remainingMinTotalPitMilliseconds();
    this.remainingMinTotalPitString = millisecondsToHourMinuteSecondMillisecondString(value);
    return value;
  });
  tyreChangeVisible = false;
  fuelVisible = false;
  interphoneVisible = false;
  kartChangeVisible = false;
  pitAVGString = "";
  remainingMinTotalPitString = "";
  tooltipAVGInfo = {
    footer: "",
    paragraphs: ["Only completed pit"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const boardConfig = this.boardConfigService.boardConfig();
      if (boardConfig) {
        this.fuelVisible = boardConfig.fuelVisible;
        this.tyreChangeVisible = boardConfig.tyreChangeVisible;
        this.kartChangeVisible = boardConfig.kartChangeVisible;
        this.interphoneVisible = boardConfig.interphoneVisible;
      }
    });
  }
  calculatePitTime(pit) {
    if (pit.exitAt) {
      return millisecondsToMinuteSecondMillisecondsString(pit.exitAt.getTime() - pit.entryAt.getTime());
    }
    return millisecondsToMinuteSecondMillisecondsString((/* @__PURE__ */ new Date()).getTime() - pit.entryAt.getTime());
  }
  calculateTotalPitTime() {
    const pits = this.pits();
    let timeSpent = 0;
    pits.forEach((pit) => {
      if (pit.exitAt) {
        timeSpent += pit.exitAt.getTime() - pit.entryAt.getTime();
      } else {
        timeSpent += (/* @__PURE__ */ new Date()).getTime() - pit.entryAt.getTime();
      }
    });
    return millisecondsToHourMinuteSecondMillisecondString(timeSpent);
  }
  calculateTotalRefueling() {
    return this.pits().filter((pit) => pit.refuel).length;
  }
  calculateTotalTyreChanges() {
    return this.pits().filter((pit) => pit.tyreChange).length;
  }
  calculateTotalInterphoneChanges() {
    return this.pits().filter((pit) => pit.interphoneChange).length;
  }
  calculateTotalKartChanges() {
    return this.pits().filter((pit) => pit.kartChange).length;
  }
  static \u0275fac = function PitComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PitComponent, selectors: [["app-pit"]], decls: 37, vars: 15, consts: [["title", "\u{1F468}\u{1F3FB}\u200D\u{1F527} Pit", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], [3, "text"], ["tooltip", "", 3, "tooltipData", "tooltipPosition", "text"], ["slot", "body-content", 1, "max-h-72", "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "sticky", "bottom-0-0"], [1, "bg-neutral-100", "dark:bg-neutral-700", "font-bold"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-right", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [3, "ngClass"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"]], template: function PitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, PitComponent_Conditional_2_Template, 1, 2, "app-chip", 2);
      \u0275\u0275element(3, "app-chip", 3);
      \u0275\u0275template(4, PitComponent_Conditional_4_Template, 1, 3, "app-chip", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "table", 6)(7, "thead", 7)(8, "tr")(9, "th", 8);
      \u0275\u0275text(10, " ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 9);
      \u0275\u0275text(12, " \u{1F417} \u{1F504} ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, PitComponent_Conditional_13_Template, 2, 0, "th", 9)(14, PitComponent_Conditional_14_Template, 2, 0, "th", 9)(15, PitComponent_Conditional_15_Template, 2, 0, "th", 9)(16, PitComponent_Conditional_16_Template, 2, 0, "th", 9);
      \u0275\u0275elementStart(17, "th", 10);
      \u0275\u0275text(18, "In pit ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "table", 12)(21, "tbody");
      \u0275\u0275template(22, PitComponent_tr_22_Template, 11, 11, "tr", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 14)(24, "table", 12)(25, "tfoot", 15)(26, "tr", 16)(27, "td", 17);
      \u0275\u0275text(28, "Totals ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "td", 18);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, PitComponent_Conditional_31_Template, 2, 1, "td", 18)(32, PitComponent_Conditional_32_Template, 2, 1, "td", 18)(33, PitComponent_Conditional_33_Template, 2, 1, "td", 18)(34, PitComponent_Conditional_34_Template, 2, 1, "td", 18);
      \u0275\u0275elementStart(35, "td", 19);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.minTotalPitMillisecondsVisible() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("text", "Total: " + ctx.pits().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pitAVGMilliseconds() != 0 ? 4 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.fuelVisible ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tyreChangeVisible ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.interphoneVisible ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.kartChangeVisible ? 16 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.pits());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.completedDriverChanges());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fuelVisible ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tyreChangeVisible ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.interphoneVisible ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.kartChangeVisible ? 34 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.calculateTotalPitTime(), " ");
    }
  }, dependencies: [
    NgClass,
    NgForOf,
    TooltipDirective,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitComponent, [{
    type: Component,
    args: [{ selector: "app-pit", imports: [
      NgClass,
      NgForOf,
      TooltipDirective,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F468}\u{1F3FB}\u200D\u{1F527} Pit"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    @if (minTotalPitMillisecondsVisible()) {
      <app-chip
        [text]="remainingMinTotalPitMilliseconds() > 0 ? 'Remaining: ' + remainingMinTotalPitString : 'Completed'"
        [backgroundColor]="remainingMinTotalPitMilliseconds() > 0 ? 'bg-yellow-500' : 'bg-green-500'"
      />
    }

    <app-chip
      [text]="'Total: ' + pits().length"
    />

    @if (pitAVGMilliseconds() != 0) {
      <app-chip
        tooltip [tooltipData]=tooltipAVGInfo [tooltipPosition]=tooltipPosition
        [text]="'AVG: ' + pitAVGString"
      />
    }
  </div>

  <div slot="body-content"
       class="max-h-72 flex flex-col overflow-clip">
    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          ID
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          \u{1F417} \u{1F504}
        </th>
        @if (fuelVisible) {
          <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
            \u26FD\uFE0F
          </th>
        }
        @if (tyreChangeVisible) {
          <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
            \u{1F6DE} \u{1F504}
          </th>
        }
        @if (interphoneVisible) {
          <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
            \u{1F50A} \u{1F504}
          </th>
        }
        @if (kartChangeVisible) {
          <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
            \u{1F3CE}\uFE0F \u{1F504}
          </th>
        }
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">In pit
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let pit of pits()"
            [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': pit.id === activePitId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': pit.id !== activePitId()}">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ pit.id }}</td>
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100">
            @if (pit.entryDriverId !== pit.exitDriverId) {
              \u2705
            }
          </td>
          @if (fuelVisible) {
            <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
              @if (pit.refuel) {
                \u2705
              }
            </td>
          }
          @if (tyreChangeVisible) {
            <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
              @if (pit.tyreChange) {
                \u2705
              }
            </td>
          }
          @if (interphoneVisible) {
            <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
              @if (pit.interphoneChange) {
                \u2705
              }
            </td>
          }
          @if (kartChangeVisible) {
            <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
              @if (pit.kartChange) {
                \u2705
              }
            </td>
          }
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2"> {{
              calculatePitTime(pit)
            }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex">
      <table class="w-full table-fixed">
        <tfoot class="sticky bottom-0-0">
        <tr class="bg-neutral-100 dark:bg-neutral-700 font-bold">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-xs md:text-base text-neutral-900 dark:text-neutral-100">Totals
          </td>
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">{{ completedDriverChanges() }}</td>
          @if (fuelVisible) {
            <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">{{ calculateTotalRefueling() }}</td>
          }
          @if (tyreChangeVisible) {
            <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">{{ calculateTotalTyreChanges() }}</td>
          }
          @if (interphoneVisible) {
            <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">{{ calculateTotalInterphoneChanges() }}</td>
          }
          @if (kartChangeVisible) {
            <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">{{ calculateTotalKartChanges() }}</td>
          }
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{ calculateTotalPitTime() }}
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PitComponent, { className: "PitComponent", filePath: "src/app/pit/component/pit/pit.component.ts", lineNumber: 30 });
})();

// src/app/pit-lane/service/pit-lane.service.ts
var PitLaneService = class _PitLaneService {
  raceService = inject(RaceService);
  stintService = inject(StintService);
  raceConfigService = inject(RaceConfigService);
  pitLaneConfigService = inject(PitLaneConfigService);
  worker;
  open = signal(false);
  openInMilliseconds = signal(0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-5GQ3PIIM.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.open.set(data.open);
        this.openInMilliseconds.set(data.openInMilliseconds);
      };
    }
    combineLatest({
      willEndRaceDate: toObservable(this.raceService.willEndRaceDate),
      activeStint: toObservable(this.stintService.activeStint),
      raceConfig: toObservable(this.raceConfigService.raceConfig),
      pitLaneConfig: toObservable(this.pitLaneConfigService.pitLaneConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ willEndRaceDate, activeStint, raceConfig, pitLaneConfig }) => {
      if (this.worker && raceConfig) {
        this.worker.postMessage({
          willEndRaceDate,
          activeStint,
          raceConfig,
          pitLaneConfig
        });
      }
    });
  }
  static \u0275fac = function PitLaneService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitLaneService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PitLaneService, factory: _PitLaneService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitLaneService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/race/service/race-manager.service.ts
var RaceManagerService = class _RaceManagerService {
  httpClient = inject(HttpClient);
  raceManagerPath = "/race-manager";
  raceService = inject(RaceService);
  notificationService = inject(NotificationService);
  liveTimingConfigService = inject(LiveTimingConfigService);
  stintOptimizerService = inject(StintOptimizerService);
  boardConfigService = inject(BoardConfigService);
  tyreConfigService = inject(TyreConfigService);
  activeRace = this.raceService.activeRace;
  optimizedStintMilliseconds = computed(() => {
    const optimizedStint = this.stintOptimizerService.optimizedStint();
    return optimizedStint ? optimizedStint.avgStintMillisecondsTime : 0;
  });
  liveTimingUrl = computed(() => {
    const config = this.liveTimingConfigService.liveTimingConfig();
    return config ? config.url : void 0;
  });
  liveTimingSource = computed(() => {
    const config = this.liveTimingConfigService.liveTimingConfig();
    return config ? config.source : void 0;
  });
  liveTimingEnabled = computed(() => {
    const config = this.boardConfigService.boardConfig();
    return config ? config.liveTimingVisible : false;
  });
  fuelEnabled = computed(() => {
    const config = this.boardConfigService.boardConfig();
    return config ? config.fuelVisible : false;
  });
  tyreChangeEnabled = computed(() => {
    const config = this.boardConfigService.boardConfig();
    return config ? config.tyreChangeVisible : false;
  });
  interphoneEnabled = computed(() => {
    const config = this.boardConfigService.boardConfig();
    return config ? config.interphoneVisible : false;
  });
  kartChangeEnabled = computed(() => {
    const config = this.boardConfigService.boardConfig();
    return config ? config.kartChangeVisible : false;
  });
  tyrePressureEnabled = computed(() => {
    const config = this.boardConfigService.boardConfig();
    return config ? config.tyrePressureVisible : false;
  });
  frontLeftTyrePressurePsi = computed(() => {
    const config = this.tyreConfigService.tyreConfig();
    return config ? config.frontLeftTyrePressurePsi : void 0;
  });
  frontRightTyrePressurePsi = computed(() => {
    const config = this.tyreConfigService.tyreConfig();
    return config ? config.frontRightTyrePressurePsi : void 0;
  });
  rearLeftTyrePressurePsi = computed(() => {
    const config = this.tyreConfigService.tyreConfig();
    return config ? config.rearLeftTyrePressurePsi : void 0;
  });
  rearRightTyrePressurePsi = computed(() => {
    const config = this.tyreConfigService.tyreConfig();
    return config ? config.rearRightTyrePressurePsi : void 0;
  });
  startRace(startedDriverId) {
    const liveTimingUrl = this.liveTimingEnabled() ? this.liveTimingUrl() || void 0 : void 0;
    const liveTimingSource = this.liveTimingEnabled() ? this.liveTimingSource() || void 0 : void 0;
    const frontLeftTyrePressurePsi = this.tyrePressureEnabled() ? this.frontLeftTyrePressurePsi() : void 0;
    const frontRightTyrePressurePsi = this.tyrePressureEnabled() ? this.frontRightTyrePressurePsi() : void 0;
    const rearLeftTyrePressurePsi = this.tyrePressureEnabled() ? this.rearLeftTyrePressurePsi() : void 0;
    const rearRightTyrePressurePsi = this.tyrePressureEnabled() ? this.rearRightTyrePressurePsi() : void 0;
    this.sendStartRace(startedDriverId, /* @__PURE__ */ new Date(), this.optimizedStintMilliseconds(), liveTimingUrl, liveTimingSource, frontLeftTyrePressurePsi, frontRightTyrePressurePsi, rearLeftTyrePressurePsi, rearRightTyrePressurePsi).subscribe(() => {
      this.notificationService.success("Race started");
    });
  }
  endRace() {
    const activeRace = this.activeRace();
    if (activeRace === void 0) {
      return;
    }
    this.sendEndRace(activeRace.id, /* @__PURE__ */ new Date()).subscribe(() => {
      this.notificationService.success("Race ended");
    });
  }
  pitIn(exitDriverId, refuel, tyreChange, interphoneChange, kartChange) {
    const activeRace = this.activeRace();
    if (activeRace === void 0) {
      return;
    }
    const refuelSent = this.fuelEnabled() ? refuel : false;
    const tyreChangeSent = this.tyreChangeEnabled() ? tyreChange : false;
    const interphoneChangeSent = this.interphoneEnabled() ? interphoneChange : false;
    const kartChangeSent = this.kartChangeEnabled() ? kartChange : false;
    this.sendPitIn(activeRace.id, exitDriverId, refuelSent, tyreChangeSent, interphoneChangeSent, kartChangeSent).subscribe(() => {
      this.notificationService.success("Pit in");
    });
  }
  pitOut() {
    const activeRace = this.activeRace();
    if (activeRace === void 0) {
      return new Observable((observer) => {
        observer.next(false);
        observer.complete();
      });
    }
    const frontLeftTyrePressurePsi = this.tyrePressureEnabled() ? this.frontLeftTyrePressurePsi() : void 0;
    const frontRightTyrePressurePsi = this.tyrePressureEnabled() ? this.frontRightTyrePressurePsi() : void 0;
    const rearLeftTyrePressurePsi = this.tyrePressureEnabled() ? this.rearLeftTyrePressurePsi() : void 0;
    const rearRightTyrePressurePsi = this.tyrePressureEnabled() ? this.rearRightTyrePressurePsi() : void 0;
    return new Observable((observer) => {
      this.sendPitOut(activeRace.id, this.optimizedStintMilliseconds(), /* @__PURE__ */ new Date(), frontLeftTyrePressurePsi, frontRightTyrePressurePsi, rearLeftTyrePressurePsi, rearRightTyrePressurePsi).subscribe({
        next: () => {
          this.notificationService.success("Pit out");
          observer.next(true);
          observer.complete();
        }
      });
    });
  }
  sendStartRace(startedDriverId, startedAt, optimizedStintMilliseconds, liveTimingUrl, liveTimingSource, frontLeftTyrePressurePsi, frontRightTyrePressurePsi, rearLeftTyrePressurePsi, rearRightTyrePressurePsi) {
    return this.httpClient.post(`${environment.baseUrl}${this.raceManagerPath}/start-race`, {
      startedDriverId,
      startedAt,
      optimizedStintMilliseconds,
      liveTimingUrl,
      liveTimingSource,
      frontLeftTyrePressurePsi,
      frontRightTyrePressurePsi,
      rearLeftTyrePressurePsi,
      rearRightTyrePressurePsi
    });
  }
  sendEndRace(raceId, endedAt) {
    return this.httpClient.post(`${environment.baseUrl}${this.raceManagerPath}/end-race`, {
      raceId,
      endedAt
    });
  }
  sendPitIn(raceId, exitDriverId, refuel, tyreChange, interphoneChange, kartChange) {
    return this.httpClient.post(`${environment.baseUrl}${this.raceManagerPath}/pit-in`, {
      raceId,
      exitDriverId,
      entryAt: /* @__PURE__ */ new Date(),
      refuel,
      tyreChange,
      interphoneChange,
      kartChange
    });
  }
  sendPitOut(raceId, optimizedStintMilliseconds, exitAt, frontLeftTyrePressurePsi, frontRightTyrePressurePsi, rearLeftTyrePressurePsi, rearRightTyrePressurePsi) {
    return this.httpClient.post(`${environment.baseUrl}${this.raceManagerPath}/pit-out`, {
      raceId,
      optimizedStintMilliseconds,
      exitAt,
      frontLeftTyrePressurePsi,
      frontRightTyrePressurePsi,
      rearLeftTyrePressurePsi,
      rearRightTyrePressurePsi
    });
  }
  static \u0275fac = function RaceManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceManagerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RaceManagerService, factory: _RaceManagerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceManagerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/service/audio.service.ts
var AudioService = class _AudioService {
  audio = new Audio();
  notificationService = inject(NotificationService);
  constructor() {
    this.audio.addEventListener("error", (e) => this.notificationService.error("Audio error:" + e.message));
  }
  play() {
    this.audio.play();
  }
  playFile(src) {
    this.audio = new Audio(src);
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  seek(time) {
    this.audio.currentTime = time;
  }
  setVolume(volume) {
    this.audio.volume = volume;
  }
  setLoop(loop) {
    this.audio.loop = loop;
  }
  on(event, handler) {
    this.audio.addEventListener(event, handler);
  }
  off(event, handler) {
    this.audio.removeEventListener(event, handler);
  }
  getCurrentTime() {
    return this.audio.currentTime;
  }
  getDuration() {
    return this.audio.duration;
  }
  static \u0275fac = function AudioService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AudioService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AudioService, factory: _AudioService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AudioService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pit-lane/component/pit-lane/pit-lane.component.ts
function PitLaneComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "Min pit: " + ctx_r0.minPitSecondsString());
  }
}
function PitLaneComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "Max pit: " + ctx_r0.maxPitSecondsString());
  }
}
function PitLaneComponent_Conditional_7_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const driver_r3 = ctx.$implicit;
    \u0275\u0275property("value", driver_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", driver_r3.raceName, " ");
  }
}
function PitLaneComponent_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 17);
    \u0275\u0275text(2, "\u26FD\uFE0F Refueling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 18);
    \u0275\u0275listener("change", function PitLaneComponent_Conditional_7_Conditional_8_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateRefueling());
    });
    \u0275\u0275twoWayListener("ngModelChange", function PitLaneComponent_Conditional_7_Conditional_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.refuel, $event) || (ctx_r0.refuel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.activePit() !== void 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.refuel);
  }
}
function PitLaneComponent_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 19);
    \u0275\u0275text(2, "\u{1F6DE} Tyre change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PitLaneComponent_Conditional_7_Conditional_9_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.tyreChange, $event) || (ctx_r0.tyreChange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PitLaneComponent_Conditional_7_Conditional_9_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateTyreChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.activePit() !== void 0 || !ctx_r0.tyreChangeWindowOpen() || ctx_r0.remainingTyreChange() <= 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tyreChange);
  }
}
function PitLaneComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 21);
    \u0275\u0275text(2, "\u{1F50A} Interphone change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PitLaneComponent_Conditional_7_Conditional_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.interphoneChange, $event) || (ctx_r0.interphoneChange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PitLaneComponent_Conditional_7_Conditional_10_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateInterphoneChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.activePit() !== void 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.interphoneChange);
  }
}
function PitLaneComponent_Conditional_7_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 23);
    \u0275\u0275text(2, "\u{1F3CE}\uFE0F Kart change");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PitLaneComponent_Conditional_7_Conditional_11_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.kartChange, $event) || (ctx_r0.kartChange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PitLaneComponent_Conditional_7_Conditional_11_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateKartChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.activePit() !== void 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.kartChange);
  }
}
function PitLaneComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "PIT SETTINGS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 11)(3, "div", 12)(4, "label", 13);
    \u0275\u0275text(5, "\u{1F417} Driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PitLaneComponent_Conditional_7_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedDriver, $event) || (ctx_r0.selectedDriver = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PitLaneComponent_Conditional_7_Template_select_change_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.updateDriverId());
    });
    \u0275\u0275template(7, PitLaneComponent_Conditional_7_option_7_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PitLaneComponent_Conditional_7_Conditional_8_Template, 4, 2, "div", 12)(9, PitLaneComponent_Conditional_7_Conditional_9_Template, 4, 2, "div", 12)(10, PitLaneComponent_Conditional_7_Conditional_10_Template, 4, 2, "div", 12)(11, PitLaneComponent_Conditional_7_Conditional_11_Template, 4, 2, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.activePit() !== void 0);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedDriver);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.drivers());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.fuelVisible ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.tyreChangeVisible ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.interphoneChangeVisible ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.kartChangeVisible ? 11 : -1);
  }
}
function PitLaneComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r0.activePitRemainingMilliseconds() > 0 ? "Pit out enabled in: " + ctx_r0.activePitRemainingMillisecondsString : "Pit out ready!")("backgroundColor", ctx_r0.activePitRemainingMilliseconds() > 0 ? "bg-yellow-500" : "bg-green-500")("bounceCondition", ctx_r0.activePitRemainingMilliseconds() < 1e4 && ctx_r0.activePitRemainingMilliseconds() > 0)("large", true);
  }
}
function PitLaneComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "Open in: " + ctx_r0.pitLaneOpenInMillisecondsString)("backgroundColor", "bg-green-500");
  }
}
var PitLaneComponent = class _PitLaneComponent {
  pitLaneService = inject(PitLaneService);
  pitService = inject(PitService);
  driverService = inject(DriverService);
  raceManagerService = inject(RaceManagerService);
  tyreService = inject(TyreService);
  boardConfigService = inject(BoardConfigService);
  audioService = inject(AudioService);
  pitLaneConfigService = inject(PitLaneConfigService);
  pitConfigService = inject(PitConfigService);
  pitLaneOpen = this.pitLaneService.open;
  pitLaneOpenInMilliseconds = computed(() => {
    const value = this.pitLaneService.openInMilliseconds();
    this.pitLaneOpenInMillisecondsString = millisecondsToHourMinuteSecondString(value);
    return value;
  });
  activePit = this.pitService.activePit;
  activePitRemainingMilliseconds = computed(() => {
    const value = this.pitService.activePitRemainingMilliseconds();
    this.activePitRemainingMillisecondsString = millisecondsToMinuteSecondString(value);
    return value;
  });
  drivers = this.driverService.drivers;
  remainingTyreChange = this.tyreService.remainingTyreChange;
  tyreChangeWindowOpen = this.tyreService.tyreChangeWindowOpen;
  minPitSeconds = computed(() => {
    const config = this.pitConfigService.pitConfig();
    if (config) {
      return config.minPitSeconds !== 0 ? config.minPitSeconds : void 0;
    }
    return void 0;
  });
  minPitSecondsString = computed(() => {
    const value = this.minPitSeconds();
    if (value) {
      return millisecondsToMinuteSecondString(value * 1e3);
    }
    return "";
  });
  maxPitSeconds = computed(() => {
    const config = this.pitConfigService.pitConfig();
    if (config) {
      if (config.maxPitSeconds === config.minPitSeconds) {
        return void 0;
      }
      return config.maxPitSeconds !== 0 ? config.maxPitSeconds : void 0;
    }
    return void 0;
  });
  maxPitSecondsString = computed(() => {
    const value = this.maxPitSeconds();
    if (value) {
      return millisecondsToMinuteSecondString(value * 1e3);
    }
    return "";
  });
  fuelVisible = false;
  tyreChangeVisible = false;
  interphoneChangeVisible = false;
  kartChangeVisible = false;
  refuel = false;
  tyreChange = false;
  interphoneChange = false;
  kartChange = false;
  selectedDriver = 1;
  pitLaneOpenInMillisecondsString = "";
  activePitRemainingMillisecondsString = "";
  constructor() {
    effect(() => {
      const pitLaneConfig = this.pitLaneConfigService.pitLaneConfig();
      if (pitLaneConfig) {
        this.refuel = pitLaneConfig.refuel;
        this.tyreChange = pitLaneConfig.tyreChange;
        this.interphoneChange = pitLaneConfig.interphoneChange;
        this.selectedDriver = pitLaneConfig.driverId;
        this.kartChange = pitLaneConfig.kartChange;
      }
    });
    effect(() => {
      const boardConfig = this.boardConfigService.boardConfig();
      if (boardConfig) {
        this.fuelVisible = boardConfig.fuelVisible;
        this.tyreChangeVisible = boardConfig.tyreChangeVisible;
        this.interphoneChangeVisible = boardConfig.interphoneVisible;
        this.kartChangeVisible = boardConfig.kartChangeVisible;
      }
    });
  }
  pitIn() {
    this.audioService.playFile("assets/box_box_box_box.mp3");
    this.raceManagerService.pitIn(this.selectedDriver, this.refuel, this.tyreChange, this.interphoneChange, this.kartChange);
  }
  pitOut() {
    this.raceManagerService.pitOut().subscribe((result) => {
      if (result) {
        this.resetPitLane();
      }
    });
  }
  updateDriverId() {
    this.pitLaneConfigService.updateDriverId(this.selectedDriver);
  }
  updateTyreChange() {
    this.pitLaneConfigService.updateTyreChange(this.tyreChange);
  }
  updateRefueling() {
    this.pitLaneConfigService.updateRefuel(this.refuel);
  }
  updateInterphoneChange() {
    this.pitLaneConfigService.updateInterphoneChange(this.interphoneChange);
  }
  updateKartChange() {
    this.pitLaneConfigService.updateKartChange(this.kartChange);
  }
  resetPitLane() {
    return __async(this, null, function* () {
      yield this.pitLaneConfigService.updateRefuel(false);
      yield this.pitLaneConfigService.updateTyreChange(false);
      yield this.pitLaneConfigService.updateInterphoneChange(false);
      yield this.pitLaneConfigService.updateKartChange(false);
      const driver = this.driverService.driverWithMoreTimeFromLastStint();
      if (driver) {
        yield this.pitLaneConfigService.updateDriverId(driver.id);
      }
    });
  }
  static \u0275fac = function PitLaneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PitLaneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PitLaneComponent, selectors: [["app-pit-lane"]], decls: 15, vars: 9, consts: [["title", "\u{1F17F}\uFE0F Pit Lane", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-col", "items-center", "gap-2"], [3, "text", "backgroundColor", "bounceCondition", "large"], [1, "flex", "justify-between", "items-center"], [1, "bg-green-500", "hover:bg-green-700", "disabled:bg-green-200", "text-white", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "disabled"], [1, "bg-red-500", "hover:bg-red-700", "disabled:bg-red-200", "text-white", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "disabled"], [1, "font-semibold", "text-neutral-900", "dark:text-neutral-100"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-row", "gap-2"], ["for", "driverSelect", 1, "text-neutral-900", "dark:text-neutral-100"], ["id", "driverSelect", "name", "driverSelect", 1, "border", "rounded-sm", "p-1", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "change", "disabled", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "refueling", 1, "text-neutral-900", "dark:text-neutral-100"], ["type", "checkbox", "id", "refueling", "name", "refueling", 3, "change", "ngModelChange", "disabled", "ngModel"], ["for", "tyreChange", 1, "text-neutral-900", "dark:text-neutral-100"], ["type", "checkbox", "id", "tyreChange", "name", "tyreChange", 3, "ngModelChange", "change", "disabled", "ngModel"], ["for", "interphoneChange", 1, "text-neutral-900", "dark:text-neutral-100"], ["type", "checkbox", "id", "interphoneChange", "name", "interphoneChange", 3, "ngModelChange", "change", "disabled", "ngModel"], ["for", "kartChange", 1, "text-neutral-900", "dark:text-neutral-100"], ["type", "checkbox", "id", "kartChange", "name", "kartChange", 3, "ngModelChange", "change", "disabled", "ngModel"]], template: function PitLaneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, PitLaneComponent_Conditional_2_Template, 1, 1, "app-chip", 2)(3, PitLaneComponent_Conditional_3_Template, 1, 1, "app-chip", 2);
      \u0275\u0275element(4, "app-chip", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275template(7, PitLaneComponent_Conditional_7_Template, 12, 7)(8, PitLaneComponent_Conditional_8_Template, 1, 4, "app-chip", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function PitLaneComponent_Template_button_click_10_listener() {
        return ctx.pitIn();
      });
      \u0275\u0275text(11, " Pit in ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, PitLaneComponent_Conditional_12_Template, 1, 2, "app-chip", 3);
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function PitLaneComponent_Template_button_click_13_listener() {
        return ctx.pitOut();
      });
      \u0275\u0275text(14, " Pit out ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.minPitSeconds() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.maxPitSeconds() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("text", ctx.pitLaneOpen() ? "Open" : "Close")("backgroundColor", ctx.pitLaneOpen() ? "bg-green-500" : "bg-red-500");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.activePit() ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.pitLaneOpen() || ctx.activePit());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.pitLaneOpenInMilliseconds() > 0 ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.activePit() || ctx.activePit() && ctx.activePitRemainingMilliseconds() > 0);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    NgForOf,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PitLaneComponent, [{
    type: Component,
    args: [{ selector: "app-pit-lane", imports: [
      FormsModule,
      NgForOf,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F17F}\uFE0F Pit Lane"
  [initiallyOpen]="true">

  <div slot="header-right-content" class="flex items-center gap-1">
    @if (minPitSeconds()) {
      <app-chip
        [text]="'Min pit: ' + minPitSecondsString()"
      />
    }
    @if (maxPitSeconds()) {
      <app-chip
        [text]="'Max pit: ' + maxPitSecondsString()"
      />
    }

    <app-chip
      [text]="pitLaneOpen() ? 'Open' : 'Close'"
      [backgroundColor]="pitLaneOpen() ? 'bg-green-500' : 'bg-red-500'"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex flex-col items-center gap-2">
      @if (!activePit()) {
        <div class="font-semibold text-neutral-900 dark:text-neutral-100">PIT SETTINGS</div>
        <form class="flex flex-col gap-2">
          <div class="flex flex-row gap-2">
            <label for="driverSelect" class="text-neutral-900 dark:text-neutral-100">\u{1F417} Driver</label>
            <select
              [disabled]="activePit() !== undefined"
              id="driverSelect"
              [(ngModel)]="selectedDriver"
              (change)="updateDriverId()"
              name="driverSelect"
              class="border rounded-sm p-1 text-neutral-900 dark:text-neutral-100">
              <option *ngFor="let driver of drivers()"
                      [value]=driver.id>
                {{ driver.raceName }}
              </option>
            </select>
          </div>

          @if (fuelVisible) {
            <div class="flex flex-row gap-2">
              <label for="refueling" class="text-neutral-900 dark:text-neutral-100">\u26FD\uFE0F Refueling</label>
              <input
                [disabled]="activePit() !== undefined"
                type="checkbox"
                id="refueling"
                (change)="updateRefueling()"
                [(ngModel)]="refuel"
                name="refueling">
            </div>
          }

          @if (tyreChangeVisible) {
            <div class="flex flex-row gap-2">
              <label for="tyreChange" class="text-neutral-900 dark:text-neutral-100">\u{1F6DE} Tyre change</label>
              <input
                [disabled]="activePit() !== undefined || !tyreChangeWindowOpen() || remainingTyreChange() <= 0"
                type="checkbox"
                id="tyreChange"
                [(ngModel)]="tyreChange"
                (change)="updateTyreChange()"
                name="tyreChange">
            </div>
          }

          @if (interphoneChangeVisible) {
            <div class="flex flex-row gap-2">
              <label for="interphoneChange" class="text-neutral-900 dark:text-neutral-100">\u{1F50A} Interphone change</label>
              <input
                [disabled]="activePit() !== undefined"
                type="checkbox"
                id="interphoneChange"
                [(ngModel)]="interphoneChange"
                (change)="updateInterphoneChange()"
                name="interphoneChange">
            </div>
          }

          @if (kartChangeVisible) {
            <div class="flex flex-row gap-2">
              <label for="kartChange" class="text-neutral-900 dark:text-neutral-100">\u{1F3CE}\uFE0F Kart change</label>
              <input
                [disabled]="activePit() !== undefined"
                type="checkbox"
                id="kartChange"
                [(ngModel)]="kartChange"
                (change)="updateKartChange()"
                name="kartChange">
            </div>
          }
        </form>


      } @else {
        <app-chip
          [text]="activePitRemainingMilliseconds() > 0 ? 'Pit out enabled in: ' + activePitRemainingMillisecondsString : 'Pit out ready!'"
          [backgroundColor]="activePitRemainingMilliseconds() > 0 ? 'bg-yellow-500':'bg-green-500'"
          [bounceCondition]="activePitRemainingMilliseconds() < 10000 && activePitRemainingMilliseconds() > 0"
          [large]="true"
        />
      }
    </div>

    <div class="flex justify-between items-center">
      <button
        (click)="pitIn()"
        [disabled]="!pitLaneOpen() || activePit()"
        class="bg-green-500 hover:bg-green-700 disabled:bg-green-200 text-white font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Pit in
      </button>

      @if (pitLaneOpenInMilliseconds() > 0) {
        <app-chip
          [text]="'Open in: ' + pitLaneOpenInMillisecondsString"
          [backgroundColor]="'bg-green-500'"
        />
      }

      <button
        (click)="pitOut()"
        [disabled]="!activePit() || (activePit() && activePitRemainingMilliseconds() > 0)"
        class="bg-red-500 hover:bg-red-700 disabled:bg-red-200 text-white font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
        Pit out
      </button>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PitLaneComponent, { className: "PitLaneComponent", filePath: "src/app/pit-lane/component/pit-lane/pit-lane.component.ts", lineNumber: 33 });
})();

// src/app/race/component/race-button/race-button.component.ts
function RaceButtonComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function RaceButtonComponent_Conditional_0_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startRace());
    });
    \u0275\u0275text(1, " Start race ");
    \u0275\u0275elementEnd();
  }
}
function RaceButtonComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function RaceButtonComponent_Conditional_0_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endRace());
    });
    \u0275\u0275text(1, " End race ");
    \u0275\u0275elementEnd();
  }
}
function RaceButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, RaceButtonComponent_Conditional_0_Conditional_1_Template, 2, 0, "button", 1)(2, RaceButtonComponent_Conditional_0_Conditional_2_Template, 2, 0, "button", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.willEndRaceDate() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hideEndRaceButton ? 2 : -1);
  }
}
var RaceButtonComponent = class _RaceButtonComponent {
  raceService = inject(RaceService);
  raceConfigService = inject(RaceConfigService);
  raceManagerService = inject(RaceManagerService);
  activeRace = this.raceService.activeRace;
  activeRaceConfig = this.raceConfigService.raceConfig;
  willEndRaceDate = this.raceService.willEndRaceDate;
  hideEndRaceButton = true;
  constructor() {
    combineLatest({
      activeRace: toObservable(this.activeRace),
      activeRaceConfig: toObservable(this.activeRaceConfig),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ activeRace, activeRaceConfig }) => {
      if (activeRace && activeRaceConfig) {
        this.hideEndRaceButton = this.calculateHide(activeRace, activeRaceConfig);
      } else {
        this.hideEndRaceButton = true;
      }
    });
  }
  endRace() {
    this.raceManagerService.endRace();
  }
  calculateHide(race, raceConfig) {
    if (race.endedAt !== null) {
      return true;
    }
    const willEnd = addHours(race.startedAt, raceConfig.durationHour);
    const difference = differenceInSeconds(willEnd, /* @__PURE__ */ new Date());
    return difference > raceConfig.endRaceButtonThresholdSeconds || race.endedAt !== null;
  }
  startRace() {
    const startDriverId = this.raceConfigService.raceConfig()?.startRaceDriverId;
    if (startDriverId) {
      this.raceManagerService.startRace(startDriverId);
    }
  }
  static \u0275fac = function RaceButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RaceButtonComponent, selectors: [["app-race-button"]], decls: 1, vars: 1, consts: [[1, "flex", "justify-center", "items-center"], [1, "bg-green-500", "hover:bg-green-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer"], [1, "bg-red-500", "hover:bg-red-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer"], [1, "bg-green-500", "hover:bg-green-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [1, "bg-red-500", "hover:bg-red-700", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"]], template: function RaceButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RaceButtonComponent_Conditional_0_Template, 3, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.hideEndRaceButton || !ctx.willEndRaceDate() ? 0 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceButtonComponent, [{
    type: Component,
    args: [{ selector: "app-race-button", imports: [], template: '@if (!hideEndRaceButton || !willEndRaceDate()) {\n  <div class="flex justify-center items-center">\n\n    @if (!willEndRaceDate()) {\n      <button\n          (click)="startRace()"\n          class="bg-green-500 hover:bg-green-700 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">\n        Start race\n      </button>\n    }\n\n    @if (!hideEndRaceButton) {\n      <button\n          (click)="endRace()"\n          class="bg-red-500 hover:bg-red-700 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">\n        End race\n      </button>\n    }\n  </div>\n}\n\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RaceButtonComponent, { className: "RaceButtonComponent", filePath: "src/app/race/component/race-button/race-button.component.ts", lineNumber: 17 });
})();

// src/app/race/component/race/race.component.ts
function RaceComponent_Conditional_0_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const driver_r3 = ctx.$implicit;
    \u0275\u0275property("value", driver_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", driver_r3.raceName, " ");
  }
}
function RaceComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "form")(3, "label", 3);
    \u0275\u0275text(4, "Start driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function RaceComponent_Conditional_0_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDriver, $event) || (ctx_r1.selectedDriver = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function RaceComponent_Conditional_0_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateDriverId());
    });
    \u0275\u0275template(6, RaceComponent_Conditional_0_option_6_Template, 2, 2, "option", 5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDriver);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.drivers());
  }
}
function RaceComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.endRaceCountdown, " ");
  }
}
var RaceComponent = class _RaceComponent {
  raceService = inject(RaceService);
  raceConfigService = inject(RaceConfigService);
  driverService = inject(DriverService);
  drivers = this.driverService.drivers;
  willEndRaceDate = this.raceService.willEndRaceDate;
  endRaceCountdown = "00:00:00";
  selectedDriver = 1;
  constructor() {
    combineLatest({
      willEndRaceDate: toObservable(this.willEndRaceDate),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe((result) => {
      const willEndRaceDate = result.willEndRaceDate;
      if (willEndRaceDate) {
        if (isAfter(/* @__PURE__ */ new Date(), willEndRaceDate)) {
          this.endRaceCountdown = "00:00:00";
        } else {
          this.endRaceCountdown = getTimeUntilFutureDate(willEndRaceDate);
        }
      }
    });
    effect(() => {
      const activeRaceConfig = this.raceConfigService.raceConfig();
      if (activeRaceConfig) {
        this.selectedDriver = activeRaceConfig.startRaceDriverId;
      }
    });
  }
  updateDriverId() {
    this.raceConfigService.updateStartRaceDriverId(this.selectedDriver);
  }
  static \u0275fac = function RaceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RaceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RaceComponent, selectors: [["app-race"]], decls: 2, vars: 1, consts: [[1, "flex", "items-center", "justify-center"], [1, "text-center", "text-2xl", "md:text-4xl", "text-neutral-900", "dark:text-neutral-100", "font-bold", "font-mono"], [1, "font-bold", "mr-2"], ["for", "driverSelect", 1, "mr-2", "text-neutral-900", "dark:text-neutral-100"], ["id", "driverSelect", "name", "driverSelect", 1, "border", "border-neutral-400", "dark:border-neutral-100", "rounded-sm", "p-1", "text-neutral-900", "dark:text-neutral-100", "bg-neutral-50", "dark:bg-neutral-800", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function RaceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RaceComponent_Conditional_0_Template, 7, 2, "div", 0)(1, RaceComponent_Conditional_1_Template, 2, 1, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.willEndRaceDate() ? 0 : 1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RaceComponent, [{
    type: Component,
    args: [{ selector: "app-race", imports: [
      FormsModule,
      NgForOf
    ], template: '@if (!willEndRaceDate()) {\n  <div class="flex items-center justify-center">\n    <div class="font-bold mr-2 ">\n      <form>\n        <label for="driverSelect" class="mr-2 text-neutral-900 dark:text-neutral-100">Start driver</label>\n        <select\n            id="driverSelect"\n            [(ngModel)]="selectedDriver"\n            (change)="updateDriverId()"\n            name="driverSelect"\n            class="border border-neutral-400 dark:border-neutral-100 rounded-sm p-1 text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-800">\n          <option *ngFor="let driver of drivers()"\n                  [value]=driver.id>\n            {{ driver.raceName }}\n          </option>\n        </select>\n      </form>\n    </div>\n  </div>\n} @else {\n  <div class="text-center text-2xl md:text-4xl text-neutral-900 dark:text-neutral-100 font-bold font-mono">\n    {{ endRaceCountdown }}\n  </div>\n}\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RaceComponent, { className: "RaceComponent", filePath: "src/app/race/component/race/race.component.ts", lineNumber: 22 });
})();

// src/app/stint/component/stint/stint.component.ts
var _c07 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
function StintComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "AVG: " + ctx_r0.stintAVGString)("tooltipData", ctx_r0.tooltipAVGInfo)("tooltipPosition", ctx_r0.tooltipPosition);
  }
}
function StintComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 17);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stint_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c07, stint_r2.id === ctx_r0.activeStintId(), stint_r2.id !== ctx_r0.activeStintId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stint_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getDriverRacingName(stint_r2.driverId), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getPace(stint_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 7, stint_r2.startedAt, "HH:mm:ss"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getEndDate(stint_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.calculateTimeOnTrack(stint_r2.startedAt, stint_r2.endedAt), " ");
  }
}
var StintComponent = class _StintComponent {
  stintService = inject(StintService);
  stintDataService = inject(StintDataService);
  driverService = inject(DriverService);
  stints = this.stintDataService.stints;
  activeStintId = computed(() => {
    const activeStint = this.stintService.activeStint();
    if (activeStint) {
      return activeStint.id;
    }
    return void 0;
  });
  stintAVGMilliseconds = computed(() => {
    const value = this.stintService.stintAVGMilliseconds();
    this.stintAVGString = millisecondsToHourMinuteSecondString(value);
    return value;
  });
  stintPaceStringById = computed(() => {
    const result = /* @__PURE__ */ new Map();
    const value = this.stintService.stintPaceById();
    value.forEach((pace, id) => {
      result.set(id, millisecondsToMinuteSecondMillisecondsString(pace));
    });
    return result;
  });
  stintAVGString = "";
  tooltipAVGInfo = {
    footer: "",
    paragraphs: ["Only completed stint"],
    title: ""
  };
  tooltipPosition = TooltipPosition.ABOVE;
  getDriverRacingName(driverId) {
    const raceName = this.driverService.raceNameById().get(driverId);
    return raceName ? raceName : "";
  }
  calculateTimeOnTrack(start, end) {
    if (end) {
      return getElapsedTime(start, end);
    }
    return getElapsedTime(start, /* @__PURE__ */ new Date());
  }
  calculateTotalTimeOnTrack(stints) {
    let timeSpent = 0;
    stints.forEach((stint) => {
      if (stint.endedAt) {
        timeSpent += stint.endedAt.getTime() - stint.startedAt.getTime();
      } else {
        timeSpent += (/* @__PURE__ */ new Date()).getTime() - stint.startedAt.getTime();
      }
    });
    return millisecondsToHourMinuteSecondString(timeSpent);
  }
  getEndDate(stint) {
    if (stint.endedAt) {
      return format(stint.endedAt, "HH:mm:ss");
    }
    const provisionedEnd = addMilliseconds(stint.startedAt, stint.optimizedMilliseconds);
    return "(" + format(provisionedEnd, "HH:mm:ss") + ")";
  }
  getPace(stint) {
    return this.stintPaceStringById().get(stint.id) ?? "--:--.---";
  }
  static \u0275fac = function StintComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StintComponent, selectors: [["app-stint"]], decls: 32, vars: 5, consts: [["title", "\u23F3 Stint", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text"], ["tooltip", "", 3, "text", "tooltipData", "tooltipPosition"], ["slot", "body-content", 1, "max-h-72", "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "sticky", "bottom-0-0"], [1, "bg-neutral-100", "dark:bg-neutral-700", "font-bold"], ["colspan", "8", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [3, "ngClass"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"]], template: function StintComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275template(3, StintComponent_Conditional_3_Template, 1, 3, "app-chip", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "table", 5)(6, "thead", 6)(7, "tr")(8, "th", 7);
      \u0275\u0275text(9, " ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 8);
      \u0275\u0275text(11, " Driver ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th", 9);
      \u0275\u0275text(13, "Lap AVG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th", 9);
      \u0275\u0275text(15, "Start ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th", 9);
      \u0275\u0275text(17, "End ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th", 9);
      \u0275\u0275text(19, "On track ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 10)(21, "table", 11)(22, "tbody");
      \u0275\u0275template(23, StintComponent_tr_23_Template, 14, 13, "tr", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 13)(25, "table", 11)(26, "tfoot", 14)(27, "tr", 15)(28, "td", 16);
      \u0275\u0275text(29, "Totals ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "td", 17);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Total: " + ctx.stints().length);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.stintAVGMilliseconds() != 0 ? 3 : -1);
      \u0275\u0275advance(20);
      \u0275\u0275property("ngForOf", ctx.stints());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.calculateTotalTimeOnTrack(ctx.stints()), " ");
    }
  }, dependencies: [
    NgClass,
    NgForOf,
    DatePipe,
    TooltipDirective,
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintComponent, [{
    type: Component,
    args: [{ selector: "app-stint", imports: [
      NgClass,
      NgForOf,
      DatePipe,
      TooltipDirective,
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u23F3 Stint"
  [initiallyOpen]="false">

  <div slot="header-right-content"
       class="flex items-center gap-1">
    <app-chip
      [text]="'Total: ' + stints().length"
    />

    @if (stintAVGMilliseconds() != 0) {
      <app-chip
        [text]="'AVG: ' + stintAVGString"
        tooltip [tooltipData]=tooltipAVGInfo [tooltipPosition]=tooltipPosition
      />
    }
  </div>

  <div slot="body-content"
       class="max-h-72 flex flex-col overflow-clip">
    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          ID
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Driver
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">Lap AVG
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">Start
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">End
        </th>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">On track
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let stint of stints()"
            [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': stint.id === activeStintId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': stint.id !== activeStintId()}">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ stint.id }}</td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{
              getDriverRacingName(stint.driverId)
            }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{ getPace(stint) }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{ stint.startedAt | date:'HH:mm:ss' }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">
            {{ getEndDate(stint) }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2"> {{
              calculateTimeOnTrack(stint.startedAt, stint.endedAt)
            }}
          </td>

        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex">
      <table class="w-full table-fixed">
        <tfoot class="sticky bottom-0-0">
        <tr class="bg-neutral-100 dark:bg-neutral-700 font-bold">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-xs md:text-base text-neutral-900 dark:text-neutral-100"
              colspan="8">Totals
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">{{ calculateTotalTimeOnTrack(stints()) }}
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StintComponent, { className: "StintComponent", filePath: "src/app/stint/component/stint/stint.component.ts", lineNumber: 32 });
})();

// src/app/stint/component/stint-optimizer/stint-optimizer.component.ts
var StintOptimizerComponent = class _StintOptimizerComponent {
  stintOptimizerService = inject(StintOptimizerService);
  AVGStintTime = computed(() => {
    const optimizedStint = this.stintOptimizerService.optimizedStint();
    if (optimizedStint) {
      return millisecondsToTimeString(optimizedStint.avgStintMillisecondsTime);
    }
    return "--:--:--";
  });
  laps = computed(() => {
    const optimizedStint = this.stintOptimizerService.optimizedStint();
    if (optimizedStint) {
      return optimizedStint.laps;
    }
    return 0;
  });
  AVGStintTimeIfDriverChangeNow = computed(() => {
    const optimizedStint = this.stintOptimizerService.optimizedStint();
    if (optimizedStint) {
      return millisecondsToTimeString(optimizedStint.avgStintMillisecondsIfDriverChangedNow);
    }
    return "--:--:--";
  });
  lapsIfDriverChangeNow = computed(() => {
    const optimizedStint = this.stintOptimizerService.optimizedStint();
    if (optimizedStint) {
      return optimizedStint.lapsIfDriverChangeNow;
    }
    return 0;
  });
  static \u0275fac = function StintOptimizerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StintOptimizerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StintOptimizerComponent, selectors: [["app-stint-optimizer"]], decls: 30, vars: 7, consts: [["title", "\u{1F9E0} Stint optimizer", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function StintOptimizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div")(7, "div", 5);
      \u0275\u0275text(8, "Optimized AVG time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div")(12, "div", 7);
      \u0275\u0275text(13, "Laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 8);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(16, "hr");
      \u0275\u0275elementStart(17, "div", 4)(18, "div")(19, "div", 5);
      \u0275\u0275text(20, " Optimized AVG time ");
      \u0275\u0275elementStart(21, "strong");
      \u0275\u0275text(22, "if driver change now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 6);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div")(26, "div", 7);
      \u0275\u0275text(27, "Laps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 8);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", "Optimum: " + ctx.AVGStintTime());
      \u0275\u0275advance();
      \u0275\u0275property("text", "Laps: " + ctx.laps());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.AVGStintTime(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.laps(), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.AVGStintTimeIfDriverChangeNow(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.lapsIfDriverChangeNow(), " ");
    }
  }, dependencies: [CardComponent, ChipComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StintOptimizerComponent, [{
    type: Component,
    args: [{ selector: "app-stint-optimizer", imports: [CardComponent, ChipComponent], template: `<app-card
  title="\u{1F9E0} Stint optimizer"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="'Optimum: ' + AVGStintTime()"
    />

    <app-chip
      [text]="'Laps: ' + laps()"
    />

  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Optimized AVG time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ AVGStintTime() }}
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ laps() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">
          Optimized AVG time
          <strong>if driver change now</strong>
        </div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          {{ AVGStintTimeIfDriverChangeNow() }}
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Laps</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ lapsIfDriverChangeNow() }}
        </div>
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StintOptimizerComponent, { className: "StintOptimizerComponent", filePath: "src/app/stint/component/stint-optimizer/stint-optimizer.component.ts", lineNumber: 13 });
})();

// src/app/timeline/service/timeline.service.ts
var TimelineService = class _TimelineService {
  stintDataService = inject(StintDataService);
  pitService = inject(PitService);
  pitDataService = inject(PitDataService);
  stintOptimizerService = inject(StintOptimizerService);
  pitConfigService = inject(PitConfigService);
  tyreService = inject(TyreService);
  worker;
  timelineSteps = signal([]);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-4RV2XBNZ.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.timelineSteps.set(data.timelineSteps);
      };
    }
    combineLatest({
      stints: toObservable(this.stintDataService.stints),
      pits: toObservable(this.pitDataService.pits),
      remainingDriverChanges: toObservable(this.pitService.remainingDriverChanges),
      pitConfig: toObservable(this.pitConfigService.pitConfig),
      optimizedStint: toObservable(this.stintOptimizerService.optimizedStint),
      remainingTyreChange: toObservable(this.tyreService.remainingTyreChange),
      ping: interval(1e3)
    }).pipe(takeUntilDestroyed()).subscribe(({ stints, pits, remainingDriverChanges, pitConfig, optimizedStint, remainingTyreChange }) => {
      if (this.worker && pitConfig) {
        this.worker.postMessage({
          stints,
          pits,
          remainingDriverChanges,
          pitConfig,
          optimizedStint,
          remainingTyreChange
        });
      }
    });
  }
  static \u0275fac = function TimelineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TimelineService, factory: _TimelineService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/timeline/component/timeline/timeline.component.ts
function TimelineComponent_Conditional_0_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const step_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.getStintColor(step_r2))("tooltipData", ctx_r3.getStintTooltipInfo(step_r2))("tooltipPosition", ctx_r3.getTooltipPosition(i_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStintIcon(step_r2), " ");
  }
}
function TimelineComponent_Conditional_0_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const step_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.getPitColor(step_r2))("tooltipData", ctx_r3.getPitTooltipInfo(step_r2))("tooltipPosition", ctx_r3.getTooltipPosition(i_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getPitIcon(step_r2), " ");
  }
}
function TimelineComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TimelineComponent_Conditional_0_ng_container_1_Conditional_1_Template, 2, 4, "div", 2)(2, TimelineComponent_Conditional_0_ng_container_1_Conditional_2_Template, 2, 4, "div", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r2.type === "STINT" ? 1 : 2);
  }
}
function TimelineComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, TimelineComponent_Conditional_0_ng_container_1_Template, 3, 1, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.timelineSteps());
  }
}
var TimelineComponent = class _TimelineComponent {
  timelineService = inject(TimelineService);
  timelineConfigService = inject(TimelineConfigService);
  driverService = inject(DriverService);
  timelineSteps = this.timelineService.timelineSteps;
  visibleAfterMinWidthPixel = computed(() => {
    const config = this.timelineConfigService.timelineConfig();
    return config ? config.visibleAfterMinWidthPixel : 1500;
  });
  hide = false;
  constructor() {
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }
  onResize() {
    this.hide = window.innerWidth <= this.visibleAfterMinWidthPixel();
  }
  getTooltipPosition(stepIndex) {
    const length = this.timelineSteps().length;
    if (length <= 9) {
      return TooltipPosition.BELOW;
    }
    const threshold = Math.floor(length / 10);
    if (stepIndex < threshold) {
      return TooltipPosition.RIGHT;
    } else if (stepIndex >= length - threshold) {
      return TooltipPosition.LEFT;
    }
    return TooltipPosition.BELOW;
  }
  ////// STINT
  getStintColor(step) {
    if (step.status === "DONE") {
      return "bg-blue-400";
    } else if (step.status === "FUTURE") {
      return "bg-blue-100";
    }
    return "bg-green-500";
  }
  getStintIcon(step) {
    if (step.status === "ACTIVE") {
      return "\u{1F3CE}\uFE0F";
    }
    return "\u23F3";
  }
  getStintTooltipInfo(step) {
    let paragraphs = [this.getStintTimeInfo(step), this.getDriverInfo(step), this.getStintTyrePressureInfo(step)].filter(Boolean);
    return {
      footer: "",
      paragraphs,
      title: this.getTooltipTitle(step)
    };
  }
  getStintTimeInfo(step) {
    let result = [];
    result.push("Start: " + format(step.start, "HH:mm:ss"));
    let optimumMilliseconds = step.stint ? step.stint.optimizedMilliseconds ?? 0 : 0;
    switch (step.status) {
      case "ACTIVE":
        result.push("On track: " + getElapsedTime(step.start, /* @__PURE__ */ new Date()));
        result.push("Optimum: " + millisecondsToTimeString(optimumMilliseconds));
        result.push("End: (" + format(addMilliseconds(step.start, optimumMilliseconds), "HH:mm:ss") + ")");
        break;
      case "DONE":
        result.push("On track: " + getElapsedTime(step.start, step.end));
        result.push("Optimum: " + millisecondsToTimeString(optimumMilliseconds));
        result.push("End: " + (step.end ? format(step.end, "HH:mm:ss") : ""));
        break;
      case "FUTURE":
        result.push("Optimum: " + millisecondsToTimeString(step.durationMills));
        result.push("End: " + (step.end ? format(step.end, "HH:mm:ss") : ""));
        break;
    }
    return result.filter(Boolean).join("\n");
  }
  getStintTyrePressureInfo(step) {
    let result = [];
    if (step.stint) {
      let front = [];
      if (step.stint.frontLeftTyrePressurePsi) {
        front.push("FL: " + step.stint.frontLeftTyrePressurePsi + " psi");
      }
      if (step.stint.frontRightTyrePressurePsi) {
        front.push("FR: " + step.stint.frontRightTyrePressurePsi + " psi");
      }
      if (front.length > 0) {
        result.push(front.join(" | "));
      }
      let rear = [];
      if (step.stint.rearLeftTyrePressurePsi) {
        rear.push("RL: " + step.stint.rearLeftTyrePressurePsi + " psi");
      }
      if (step.stint.rearRightTyrePressurePsi) {
        rear.push("RR: " + step.stint.rearRightTyrePressurePsi + " psi");
      }
      if (rear.length > 0) {
        result.push(rear.join(" | "));
      }
    }
    return result.filter(Boolean).join("\n");
  }
  ////// PIT
  getPitColor(step) {
    if (step.status === "DONE") {
      return "bg-amber-400";
    } else if (step.status === "FUTURE") {
      return "bg-amber-100";
    }
    return "bg-green-500";
  }
  getPitIcon(step) {
    if (step.status === "ACTIVE") {
      return "\u{1F17F}\uFE0F";
    }
    return "\u{1F468}\u{1F3FB}\u200D\u{1F527}";
  }
  getPitTooltipInfo(step) {
    let paragraphs = [this.getPitTimeInfo(step), this.getDriverInfo(step)].filter(Boolean);
    return {
      footer: this.getPitFooter(step),
      paragraphs,
      title: this.getTooltipTitle(step)
    };
  }
  getPitTimeInfo(step) {
    let result = [];
    result.push("Enter: " + format(step.start, "HH:mm:ss"));
    switch (step.status) {
      case "ACTIVE":
        result.push("Time: " + getElapsedTime(step.start, /* @__PURE__ */ new Date()));
        break;
      case "DONE":
        result.push("Time: " + millisecondsToTimeString(step.durationMills));
        result.push("Exit: " + (step.end ? format(step.end, "HH:mm:ss") : ""));
        break;
      case "FUTURE":
        result.push("Time: " + millisecondsToTimeString(step.durationMills));
        result.push("Exit: " + (step.end ? format(step.end, "HH:mm:ss") : ""));
        break;
    }
    return result.filter(Boolean).join("\n");
  }
  getPitFooter(step) {
    let result = [];
    if (step.pit) {
      if (step.pit.entryDriverId !== step.pit.exitDriverId) {
        result.push("\u{1F417}");
      }
      if (step.pit.refuel) {
        result.push("\u26FD\uFE0F");
      }
      if (step.pit.tyreChange) {
        result.push("\u{1F6DE}\uFE0F");
      }
      if (step.pit.interphoneChange) {
        result.push("\u{1F50A}");
      }
      if (step.pit.kartChange) {
        result.push("\u{1F3CE}\uFE0F");
      }
    }
    return result.join(" | ");
  }
  // GENERAL
  getTooltipTitle(step) {
    if (step.type === "STINT") {
      let id = step.stint ? "(" + step.stint.id + ")" : "";
      if (step.status === "ACTIVE") {
        return "Active stint " + id;
      } else if (step.status === "DONE") {
        return "Stint " + id;
      } else {
        return "Future stint";
      }
    }
    if (step.type === "PIT") {
      let id = step.pit ? "(" + step.pit.id + ")" : "";
      if (step.status === "ACTIVE") {
        return "Active pit " + id;
      } else if (step.status === "DONE") {
        return "Pit " + id;
      } else {
        return "Future pit";
      }
    }
    return "";
  }
  getDriverInfo(step) {
    if (step.type === "STINT" && step.stint) {
      return "Driver: " + this.getDriverRacingName(step.stint.driverId);
    }
    if (step.type === "PIT" && step.pit) {
      let driverIn = "Driver in: " + this.getDriverRacingName(step.pit.entryDriverId);
      let driverOut = "Driver out: " + this.getDriverRacingName(step.pit.exitDriverId);
      return driverIn + "\n" + driverOut;
    }
    return "";
  }
  getDriverRacingName(driverId) {
    const drivers = this.driverService.drivers();
    const driver = drivers.find((d) => d.id === driverId);
    return driver ? driver.raceName : "";
  }
  static \u0275fac = function TimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], decls: 1, vars: 1, consts: [[1, "mb-3", "flex", "justify-center", "items-center"], [4, "ngFor", "ngForOf"], ["tooltip", "", 1, "flex-1", "flex", "px-1", "py-3", "justify-center", "items-center", 3, "ngClass", "tooltipData", "tooltipPosition"], ["tooltip", "", 1, "flex-0", "flex", "px-1", "py-3", "justify-center", "items-center", 3, "ngClass", "tooltipData", "tooltipPosition"]], template: function TimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TimelineComponent_Conditional_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.hide ? 0 : -1);
    }
  }, dependencies: [
    NgForOf,
    NgClass,
    TooltipDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineComponent, [{
    type: Component,
    args: [{ selector: "app-timeline", imports: [
      NgForOf,
      NgClass,
      TooltipDirective
    ], template: `@if (!hide) {
  <div class="mb-3 flex justify-center items-center">
    <ng-container *ngFor="let step of timelineSteps(); let i = index">
      @if (step.type === 'STINT') {
        <div [ngClass]="getStintColor(step)"
             class="flex-1 flex px-1 py-3 justify-center items-center"
             tooltip [tooltipData]=getStintTooltipInfo(step)
             [tooltipPosition]=getTooltipPosition(i)>
          {{ getStintIcon(step) }}
        </div>
      } @else {
        <div [ngClass]="getPitColor(step)"
             class="flex-0 flex px-1 py-3 justify-center items-center"
             tooltip [tooltipData]=getPitTooltipInfo(step) [tooltipPosition]=getTooltipPosition(i)>
          {{ getPitIcon(step) }}
        </div>
      }
    </ng-container>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src/app/timeline/component/timeline/timeline.component.ts", lineNumber: 23 });
})();

// src/app/tyre/component/tyre-change/tyre-change.component.ts
function TyreChangeComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.openingTime(), "HH:mm:ss"), " ");
  }
}
function TyreChangeComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
function TyreChangeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.closingTime(), "HH:mm:ss"), " ");
  }
}
function TyreChangeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " --:--:-- ");
  }
}
var TyreChangeComponent = class _TyreChangeComponent {
  tyreService = inject(TyreService);
  openingTime = this.tyreService.openingTime;
  closingTime = this.tyreService.closingTime;
  remainingTyreChange = this.tyreService.remainingTyreChange;
  tyreChangeWindowOpen = this.tyreService.tyreChangeWindowOpen;
  countdownOpeningTime = computed(() => getTimeUntilFutureDate(this.tyreService.openingTime()));
  countdownClosingTime = computed(() => getTimeUntilFutureDate(this.tyreService.closingTime()));
  static \u0275fac = function TyreChangeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TyreChangeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TyreChangeComponent, selectors: [["app-tyre-change"]], decls: 30, vars: 10, consts: [["title", "\u{1F6DE} \u{1F504} Tyre change", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], [3, "text", "backgroundColor", "bounceCondition"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function TyreChangeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2)(3, "app-chip", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6);
      \u0275\u0275text(8, "Opening time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275template(10, TyreChangeComponent_Conditional_10_Template, 2, 4)(11, TyreChangeComponent_Conditional_11_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div")(13, "div", 8);
      \u0275\u0275text(14, "Opening in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(17, "hr");
      \u0275\u0275elementStart(18, "div", 5)(19, "div")(20, "div", 6);
      \u0275\u0275text(21, "Closing time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7);
      \u0275\u0275template(23, TyreChangeComponent_Conditional_23_Template, 2, 4)(24, TyreChangeComponent_Conditional_24_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div")(26, "div", 8);
      \u0275\u0275text(27, "Closing in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.remainingTyreChange() > 0 ? "Remaining: " + ctx.remainingTyreChange() : "Completed")("backgroundColor", ctx.remainingTyreChange() > 0 ? "bg-yellow-500" : "bg-green-500");
      \u0275\u0275advance();
      \u0275\u0275property("text", ctx.tyreChangeWindowOpen() ? "Window open" : "Window close")("backgroundColor", ctx.tyreChangeWindowOpen() ? "bg-green-500" : "bg-red-500")("bounceCondition", ctx.remainingTyreChange() > 0);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.openingTime() ? 10 : 11);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.countdownOpeningTime(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.closingTime() ? 23 : 24);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.countdownClosingTime(), " ");
    }
  }, dependencies: [DatePipe, CardComponent, ChipComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TyreChangeComponent, [{
    type: Component,
    args: [{ selector: "app-tyre-change", imports: [DatePipe, CardComponent, ChipComponent], template: `<app-card
  title="\u{1F6DE} \u{1F504} Tyre change"
  [initiallyOpen]="false">

  <div slot="header-right-content"
       class="flex items-center gap-1">

    <app-chip
      [text]="remainingTyreChange() > 0 ? 'Remaining: ' + remainingTyreChange() : 'Completed'"
      [backgroundColor]="remainingTyreChange() > 0 ? 'bg-yellow-500' : 'bg-green-500'"
    />

    <app-chip
      [text]="tyreChangeWindowOpen() ? 'Window open' : 'Window close'"
      [backgroundColor]="tyreChangeWindowOpen() ? 'bg-green-500' : 'bg-red-500'"
      [bounceCondition]="remainingTyreChange() > 0"
    />
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Opening time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (openingTime()) {
            {{ openingTime() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Opening in</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ countdownOpeningTime() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Closing time</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (closingTime()) {
            {{ closingTime() | date:'HH:mm:ss' }}
          } @else {
            --:--:--
          }
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Closing in</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          {{ countdownClosingTime() }}
        </div>
      </div>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TyreChangeComponent, { className: "TyreChangeComponent", filePath: "src/app/tyre/component/tyre-change/tyre-change.component.ts", lineNumber: 14 });
})();

// src/app/live-timing/component/live-timing/live-timing.component.ts
function LiveTimingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "P: " + ctx_r0.teamRacePosition());
  }
}
function LiveTimingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "Last: " + ctx_r0.lastTeamLapString());
  }
}
function LiveTimingComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", (ctx_r0.lastTeamLapDeltaMilliseconds() > 0 ? "+ " : "- ") + ctx_r0.lastTeamLapDeltaMillisecondsString())("backgroundColor", ctx_r0.lastTeamLapDeltaMilliseconds() > 0 ? "bg-red-500" : "bg-green-500");
  }
}
function LiveTimingComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.teamRacePosition(), " ");
  }
}
function LiveTimingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " -- ");
  }
}
function LiveTimingComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " + ");
  }
}
function LiveTimingComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function LiveTimingComponent_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " + ");
  }
}
function LiveTimingComponent_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function LiveTimingComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LiveTimingComponent_Conditional_37_Conditional_0_Template, 1, 0)(1, LiveTimingComponent_Conditional_37_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.lastTeamLapDeltaMilliseconds() > 0 ? 0 : ctx_r0.lastTeamLapDeltaMilliseconds() < 0 ? 1 : -1);
  }
}
var LiveTimingComponent = class _LiveTimingComponent {
  stintService = inject(StintService);
  lapService = inject(LapService);
  racePositionService = inject(RacePositionService);
  gapService = inject(GapService);
  currentStintAvgString = computed(() => {
    const stintPaceById = this.stintService.stintPaceById();
    const activeStint = this.stintService.activeStint();
    if (activeStint) {
      return millisecondsToMinuteSecondMillisecondsString(stintPaceById.get(activeStint.id) ?? 0);
    }
    return "--:--.---";
  });
  currentStintBestLapString = computed(() => {
    const stintBestLapById = this.stintService.stintBestLapById();
    const activeStint = this.stintService.activeStint();
    if (activeStint) {
      return millisecondsToMinuteSecondMillisecondsString(stintBestLapById.get(activeStint.id) ?? 0);
    }
    return "--:--.---";
  });
  lastTeamLap = this.lapService.lastTeamLap;
  lastTeamLapString = computed(() => {
    const value = this.lapService.lastTeamLap();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(value.lapMilliseconds);
    }
    return "--:--.---";
  });
  lastTeamLapDeltaMilliseconds = this.lapService.lastTeamLapDeltaMilliseconds;
  lastTeamLapDeltaMillisecondsString = computed(() => {
    const value = this.lapService.lastTeamLapDeltaMilliseconds();
    if (value) {
      if (value < 0) {
        return millisecondsToMinuteSecondMillisecondsString(Math.abs(value));
      }
      return millisecondsToSecondMillisecondsString(value);
    }
    return "--.---";
  });
  teamRacePosition = this.racePositionService.teamRacePosition;
  gapAheadMilliseconds = this.gapService.gapAheadMilliseconds;
  gapAheadMillisecondsString = computed(() => {
    const value = this.gapService.gapAheadMilliseconds();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(value);
    }
    return "--:--.---";
  });
  gapBehindMilliseconds = this.gapService.gapBehindMilliseconds;
  gapBehindMillisecondsString = computed(() => {
    const value = this.gapService.gapBehindMilliseconds();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(Math.abs(value));
    }
    return "--:--.---";
  });
  static \u0275fac = function LiveTimingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveTimingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveTimingComponent, selectors: [["app-live-timing"]], decls: 51, vars: 14, consts: [["title", "\u{1F417}\u{1F4A8} Live timing", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "text-neutral-900", "dark:text-neutral-100", "font-mono", "text-right"]], template: function LiveTimingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, LiveTimingComponent_Conditional_2_Template, 1, 1, "app-chip", 2)(3, LiveTimingComponent_Conditional_3_Template, 1, 1, "app-chip", 2)(4, LiveTimingComponent_Conditional_4_Template, 1, 2, "app-chip", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div")(8, "div", 6);
      \u0275\u0275text(9, "Position");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275template(11, LiveTimingComponent_Conditional_11_Template, 1, 1)(12, LiveTimingComponent_Conditional_12_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 5)(14, "div")(15, "div", 6);
      \u0275\u0275text(16, "Gap ahead");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 7);
      \u0275\u0275template(18, LiveTimingComponent_Conditional_18_Template, 1, 0);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div")(21, "div", 8);
      \u0275\u0275text(22, "Gap behind");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 9);
      \u0275\u0275template(24, LiveTimingComponent_Conditional_24_Template, 1, 0);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(26, "hr");
      \u0275\u0275elementStart(27, "div", 5)(28, "div")(29, "div", 6);
      \u0275\u0275text(30, "Last lap");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 7);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div")(34, "div", 8);
      \u0275\u0275text(35, "Delta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 9);
      \u0275\u0275template(37, LiveTimingComponent_Conditional_37_Template, 2, 1);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(39, "hr");
      \u0275\u0275elementStart(40, "div", 5)(41, "div")(42, "div", 6);
      \u0275\u0275text(43, "Current stint best lap");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 7);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div")(47, "div", 8);
      \u0275\u0275text(48, "Current stint AVG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 9);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.teamRacePosition() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lastTeamLap() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lastTeamLapDeltaMilliseconds() ? 4 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.teamRacePosition() !== void 0 ? 11 : 12);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.gapAheadMilliseconds() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.gapAheadMillisecondsString(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.gapBehindMilliseconds() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.gapBehindMillisecondsString(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.lastTeamLapString());
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.lastTeamLapDeltaMilliseconds() !== void 0 && ctx.lastTeamLapDeltaMilliseconds() !== null ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.lastTeamLapDeltaMillisecondsString(), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.currentStintBestLapString(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.currentStintAvgString());
    }
  }, dependencies: [
    CardComponent,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveTimingComponent, [{
    type: Component,
    args: [{ selector: "app-live-timing", imports: [
      CardComponent,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417}\u{1F4A8} Live timing"
  [initiallyOpen]="true">

  <div slot="header-right-content"
       class="flex items-center gap-1">

    @if (teamRacePosition()) {
      <app-chip
        [text]="'P: ' + teamRacePosition()"
      />
    }

    @if (lastTeamLap()) {
      <app-chip
        [text]="'Last: ' + lastTeamLapString()"
      />
    }

    @if (lastTeamLapDeltaMilliseconds()) {
      <app-chip
        [text]="(lastTeamLapDeltaMilliseconds()! > 0 ? '+ ' : '- ') + lastTeamLapDeltaMillisecondsString()"
        [backgroundColor]="lastTeamLapDeltaMilliseconds()! > 0 ? 'bg-red-500' : 'bg-green-500'"
      />
    }
  </div>

  <div slot="body-content" class="flex flex-col gap-2">
    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Position</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (teamRacePosition() !== undefined) {
            {{ teamRacePosition() }}
          } @else {
            --
          }
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Gap ahead</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">
          @if (gapAheadMilliseconds()) {
            +
          }
          {{ gapAheadMillisecondsString() }}
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Gap behind</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          @if (gapBehindMilliseconds()) {
            -
          }
          {{ gapBehindMillisecondsString() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Last lap</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">{{ lastTeamLapString() }}</div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Delta</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">
          @if (lastTeamLapDeltaMilliseconds() !== undefined && lastTeamLapDeltaMilliseconds() !== null) {
            @if (lastTeamLapDeltaMilliseconds()! > 0) {
              +
            } @else if (lastTeamLapDeltaMilliseconds()! < 0) {
              -
            }
          }
          {{ lastTeamLapDeltaMillisecondsString() }}
        </div>
      </div>
    </div>

    <hr>

    <div class="flex justify-between">
      <div>
        <div class="text-neutral-500 dark:text-neutral-400">Current stint best lap</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono">{{ currentStintBestLapString() }}
        </div>
      </div>

      <div>
        <div class="text-neutral-500 dark:text-neutral-400 text-right">Current stint AVG</div>
        <div class="text-neutral-900 dark:text-neutral-100 font-mono text-right">{{ currentStintAvgString() }}</div>
      </div>
    </div>

  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveTimingComponent, { className: "LiveTimingComponent", filePath: "src/app/live-timing/component/live-timing/live-timing.component.ts", lineNumber: 22 });
})();

// src/app/tyre/component/tyre-pressure/tyre-pressure.component.ts
var TyrePressureComponent = class _TyrePressureComponent {
  tyreConfigService = inject(TyreConfigService);
  notificationService = inject(NotificationService);
  frontLeftTyrePressurePsi = 0;
  frontRightTyrePressurePsi = 0;
  rearLeftTyrePressurePsi = 0;
  rearRightTyrePressurePsi = 0;
  minTyrePressurePsi = 0;
  maxTyrePressurePsi = 0;
  constructor() {
    effect(() => {
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.frontLeftTyrePressurePsi = config.frontLeftTyrePressurePsi;
        this.frontRightTyrePressurePsi = config.frontRightTyrePressurePsi;
        this.rearLeftTyrePressurePsi = config.rearLeftTyrePressurePsi;
        this.rearRightTyrePressurePsi = config.rearRightTyrePressurePsi;
        this.minTyrePressurePsi = config.minTyrePressurePsi;
        this.maxTyrePressurePsi = config.maxTyrePressurePsi;
      }
    });
  }
  // FRONT LEFT TYRE PRESSURE PSI
  onSubmitFrontLeftTyrePressurePsi() {
    if (this.frontLeftTyrePressurePsi >= this.minTyrePressurePsi && this.frontLeftTyrePressurePsi <= this.maxTyrePressurePsi) {
      this.tyreConfigService.updateFrontLeftTyrePressurePsi(this.frontLeftTyrePressurePsi);
    } else {
      this.notificationService.warning("Invalid tyre pressure. Please enter a value between " + this.minTyrePressurePsi + " and " + this.maxTyrePressurePsi + " psi.");
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.frontLeftTyrePressurePsi = config.frontLeftTyrePressurePsi;
      }
    }
  }
  increaseFrontLeftTyrePressurePsi() {
    this.tyreConfigService.updateFrontLeftTyrePressurePsi(this.frontLeftTyrePressurePsi + 1);
  }
  decreaseFrontLeftTyrePressurePsi() {
    this.tyreConfigService.updateFrontLeftTyrePressurePsi(this.frontLeftTyrePressurePsi - 1);
  }
  // FRONT RIGHT TYRE PRESSURE PSI
  onSubmitFrontRightTyrePressurePsi() {
    if (this.frontRightTyrePressurePsi >= this.minTyrePressurePsi && this.frontRightTyrePressurePsi <= this.maxTyrePressurePsi) {
      this.tyreConfigService.updateFrontRightTyrePressurePsi(this.frontRightTyrePressurePsi);
    } else {
      this.notificationService.warning("Invalid tyre pressure. Please enter a value between " + this.minTyrePressurePsi + " and " + this.maxTyrePressurePsi + " psi.");
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.frontRightTyrePressurePsi = config.frontRightTyrePressurePsi;
      }
    }
  }
  increaseFrontRightTyrePressurePsi() {
    this.tyreConfigService.updateFrontRightTyrePressurePsi(this.frontRightTyrePressurePsi + 1);
  }
  decreaseFrontRightTyrePressurePsi() {
    this.tyreConfigService.updateFrontRightTyrePressurePsi(this.frontRightTyrePressurePsi - 1);
  }
  // REAR LEFT TYRE PRESSURE PSI
  onSubmitRearLeftTyrePressurePsi() {
    if (this.rearLeftTyrePressurePsi >= this.minTyrePressurePsi && this.rearLeftTyrePressurePsi <= this.maxTyrePressurePsi) {
      this.tyreConfigService.updateRearLeftTyrePressurePsi(this.rearLeftTyrePressurePsi);
    } else {
      this.notificationService.warning("Invalid tyre pressure. Please enter a value between " + this.minTyrePressurePsi + " and " + this.maxTyrePressurePsi + " psi.");
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.rearLeftTyrePressurePsi = config.rearLeftTyrePressurePsi;
      }
    }
  }
  increaseRearLeftTyrePressurePsi() {
    this.tyreConfigService.updateRearLeftTyrePressurePsi(this.rearLeftTyrePressurePsi + 1);
  }
  decreaseRearLeftTyrePressurePsi() {
    this.tyreConfigService.updateRearLeftTyrePressurePsi(this.rearLeftTyrePressurePsi - 1);
  }
  // REAR RIGHT TYRE PRESSURE PSI
  onSubmitRearRightTyrePressurePsi() {
    if (this.rearRightTyrePressurePsi >= this.minTyrePressurePsi && this.rearRightTyrePressurePsi <= this.maxTyrePressurePsi) {
      this.tyreConfigService.updateRearRightTyrePressurePsi(this.rearRightTyrePressurePsi);
    } else {
      this.notificationService.warning("Invalid tyre pressure. Please enter a value between " + this.minTyrePressurePsi + " and " + this.maxTyrePressurePsi + " psi.");
      const config = this.tyreConfigService.tyreConfig();
      if (config) {
        this.rearRightTyrePressurePsi = config.rearRightTyrePressurePsi;
      }
    }
  }
  increaseRearRightTyrePressurePsi() {
    this.tyreConfigService.updateRearRightTyrePressurePsi(this.rearRightTyrePressurePsi + 1);
  }
  decreaseRearRightTyrePressurePsi() {
    this.tyreConfigService.updateRearRightTyrePressurePsi(this.rearRightTyrePressurePsi - 1);
  }
  static \u0275fac = function TyrePressureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TyrePressureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TyrePressureComponent, selectors: [["app-tyre-pressure"]], decls: 45, vars: 21, consts: [["title", "\u{1F6DE}\u{1F4A8} Tyre pressure", 3, "initiallyOpen"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "flex", "justify-start", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "disabled:bg-neutral-100", "text-neutral-900", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click", "disabled"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "frontLeftTyrePressurePsi", "name", "frontLeftTyrePressurePsi", "required", "", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel", "min", "max"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], ["type", "number", "id", "frontRightTyrePressurePsi", "name", "frontRightTyrePressurePsi", "required", "", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel", "min", "max"], ["type", "number", "id", "rearLeftTyrePressurePsi", "name", "rearLeftTyrePressurePsi", "required", "", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel", "min", "max"], ["type", "number", "id", "rearRightTyrePressurePsi", "name", "rearRightTyrePressurePsi", "required", "", 1, "border", "rounded-lg", "px-2", "py-1", "w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel", "min", "max"]], template: function TyrePressureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3);
      \u0275\u0275text(5, "Front left (PSI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_7_listener() {
        return ctx.increaseFrontLeftTyrePressurePsi();
      });
      \u0275\u0275text(8, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "form", 6);
      \u0275\u0275listener("ngSubmit", function TyrePressureComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmitFrontLeftTyrePressurePsi();
      });
      \u0275\u0275elementStart(10, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function TyrePressureComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.frontLeftTyrePressurePsi, $event) || (ctx.frontLeftTyrePressurePsi = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_11_listener() {
        return ctx.decreaseFrontLeftTyrePressurePsi();
      });
      \u0275\u0275text(12, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div")(14, "div", 8);
      \u0275\u0275text(15, "Front right (PSI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_17_listener() {
        return ctx.increaseFrontRightTyrePressurePsi();
      });
      \u0275\u0275text(18, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "form", 6);
      \u0275\u0275listener("ngSubmit", function TyrePressureComponent_Template_form_ngSubmit_19_listener() {
        return ctx.onSubmitFrontRightTyrePressurePsi();
      });
      \u0275\u0275elementStart(20, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function TyrePressureComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.frontRightTyrePressurePsi, $event) || (ctx.frontRightTyrePressurePsi = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_21_listener() {
        return ctx.decreaseFrontRightTyrePressurePsi();
      });
      \u0275\u0275text(22, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(23, "hr");
      \u0275\u0275elementStart(24, "div", 2)(25, "div")(26, "div", 3);
      \u0275\u0275text(27, "Rear left (PSI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 4)(29, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_29_listener() {
        return ctx.increaseRearLeftTyrePressurePsi();
      });
      \u0275\u0275text(30, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "form", 6);
      \u0275\u0275listener("ngSubmit", function TyrePressureComponent_Template_form_ngSubmit_31_listener() {
        return ctx.onSubmitRearLeftTyrePressurePsi();
      });
      \u0275\u0275elementStart(32, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function TyrePressureComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rearLeftTyrePressurePsi, $event) || (ctx.rearLeftTyrePressurePsi = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_33_listener() {
        return ctx.decreaseRearLeftTyrePressurePsi();
      });
      \u0275\u0275text(34, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div")(36, "div", 8);
      \u0275\u0275text(37, "Rear right (PSI)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 9)(39, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_39_listener() {
        return ctx.increaseRearRightTyrePressurePsi();
      });
      \u0275\u0275text(40, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "form", 6);
      \u0275\u0275listener("ngSubmit", function TyrePressureComponent_Template_form_ngSubmit_41_listener() {
        return ctx.onSubmitRearRightTyrePressurePsi();
      });
      \u0275\u0275elementStart(42, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function TyrePressureComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rearRightTyrePressurePsi, $event) || (ctx.rearRightTyrePressurePsi = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "button", 5);
      \u0275\u0275listener("click", function TyrePressureComponent_Template_button_click_43_listener() {
        return ctx.decreaseRearRightTyrePressurePsi();
      });
      \u0275\u0275text(44, " - ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.frontLeftTyrePressurePsi >= ctx.maxTyrePressurePsi);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.frontLeftTyrePressurePsi);
      \u0275\u0275property("min", ctx.minTyrePressurePsi)("max", ctx.maxTyrePressurePsi);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.frontLeftTyrePressurePsi <= ctx.minTyrePressurePsi);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.frontRightTyrePressurePsi >= ctx.maxTyrePressurePsi);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.frontRightTyrePressurePsi);
      \u0275\u0275property("min", ctx.minTyrePressurePsi)("max", ctx.maxTyrePressurePsi);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.frontRightTyrePressurePsi <= ctx.minTyrePressurePsi);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.rearLeftTyrePressurePsi >= ctx.maxTyrePressurePsi);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.rearLeftTyrePressurePsi);
      \u0275\u0275property("min", ctx.minTyrePressurePsi)("max", ctx.maxTyrePressurePsi);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.rearLeftTyrePressurePsi <= ctx.minTyrePressurePsi);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.rearRightTyrePressurePsi >= ctx.maxTyrePressurePsi);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.rearRightTyrePressurePsi);
      \u0275\u0275property("min", ctx.minTyrePressurePsi)("max", ctx.maxTyrePressurePsi);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.rearRightTyrePressurePsi <= ctx.minTyrePressurePsi);
    }
  }, dependencies: [
    CardComponent,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    MaxValidator,
    NgModel,
    NgForm
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TyrePressureComponent, [{
    type: Component,
    args: [{ selector: "app-tyre-pressure", imports: [
      CardComponent,
      FormsModule
    ], template: '<app-card\n  title="\u{1F6DE}\u{1F4A8} Tyre pressure"\n  [initiallyOpen]="true">\n\n  <div slot="body-content" class="flex flex-col gap-2">\n    <div class="flex justify-between">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Front left (PSI)</div>\n        <div class="flex justify-start flex-row gap-1">\n          <button (click)="increaseFrontLeftTyrePressurePsi()"\n                  [disabled]="frontLeftTyrePressurePsi >= maxTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100  text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitFrontLeftTyrePressurePsi()" class="text-right">\n            <input\n              type="number"\n              id="frontLeftTyrePressurePsi"\n              [(ngModel)]="frontLeftTyrePressurePsi"\n              name="frontLeftTyrePressurePsi"\n              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              [min]="minTyrePressurePsi"\n              [max]="maxTyrePressurePsi"\n            />\n          </form>\n          <button (click)="decreaseFrontLeftTyrePressurePsi()"\n                  [disabled]="frontLeftTyrePressurePsi <= minTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">Front right (PSI)</div>\n        <div class="flex justify-end flex-row gap-1">\n          <button (click)="increaseFrontRightTyrePressurePsi()"\n                  [disabled]="frontRightTyrePressurePsi >= maxTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitFrontRightTyrePressurePsi()" class="text-right">\n            <input\n              type="number"\n              id="frontRightTyrePressurePsi"\n              [(ngModel)]="frontRightTyrePressurePsi"\n              name="frontRightTyrePressurePsi"\n              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              [min]="minTyrePressurePsi"\n              [max]="maxTyrePressurePsi"\n            />\n          </form>\n          <button (click)="decreaseFrontRightTyrePressurePsi()"\n                  [disabled]="frontRightTyrePressurePsi <= minTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class="flex justify-between">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Rear left (PSI)</div>\n        <div class="flex justify-start flex-row gap-1">\n          <button (click)="increaseRearLeftTyrePressurePsi()"\n                  [disabled]="rearLeftTyrePressurePsi >= maxTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100  text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitRearLeftTyrePressurePsi()" class="text-right">\n            <input\n              type="number"\n              id="rearLeftTyrePressurePsi"\n              [(ngModel)]="rearLeftTyrePressurePsi"\n              name="rearLeftTyrePressurePsi"\n              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              [min]="minTyrePressurePsi"\n              [max]="maxTyrePressurePsi"\n            />\n          </form>\n          <button (click)="decreaseRearLeftTyrePressurePsi()"\n                  [disabled]="rearLeftTyrePressurePsi <= minTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">Rear right (PSI)</div>\n        <div class="flex justify-end flex-row gap-1">\n          <button (click)="increaseRearRightTyrePressurePsi()"\n                  [disabled]="rearRightTyrePressurePsi >= maxTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitRearRightTyrePressurePsi()" class="text-right">\n            <input\n              type="number"\n              id="rearRightTyrePressurePsi"\n              [(ngModel)]="rearRightTyrePressurePsi"\n              name="rearRightTyrePressurePsi"\n              class="border rounded-lg px-2 py-1 w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              [min]="minTyrePressurePsi"\n              [max]="maxTyrePressurePsi"\n            />\n          </form>\n          <button (click)="decreaseRearRightTyrePressurePsi()"\n                  [disabled]="rearRightTyrePressurePsi <= minTyrePressurePsi"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 disabled:bg-neutral-100 text-neutral-900 px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</app-card>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TyrePressureComponent, { className: "TyrePressureComponent", filePath: "src/app/tyre/component/tyre-pressure/tyre-pressure.component.ts", lineNumber: 16 });
})();

// src/app/driver/component/driver-performance/driver-performance.component.ts
var _c08 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
var _c13 = (a0) => ({ "bg-fuchsia-500 text-white": a0 });
function DriverPerformanceComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "Lap: " + ctx_r0.teamBestLapString())("backgroundColor", "bg-fuchsia-500");
  }
}
function DriverPerformanceComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-chip", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("text", "AVG: " + ctx_r0.bestPaceString())("backgroundColor", "bg-fuchsia-500");
  }
}
function DriverPerformanceComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15)(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 15)(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const driver_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c08, driver_r2.id === ctx_r0.activeStintDriverId(), driver_r2.id !== ctx_r0.activeStintDriverId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(driver_r2.raceName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c13, ctx_r0.isBestLap(driver_r2.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getBestLap(driver_r2.id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c13, ctx_r0.isBestPace(driver_r2.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getPace(driver_r2.id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLastStintPace(driver_r2.id), " ");
  }
}
var DriverPerformanceComponent = class _DriverPerformanceComponent {
  driverService = inject(DriverService);
  stintService = inject(StintService);
  lapService = inject(LapService);
  drivers = this.driverService.drivers;
  teamBestLap = this.lapService.teamBestLap;
  activeStintDriverId = computed(() => {
    const activeStint = this.stintService.activeStint();
    if (activeStint) {
      return activeStint.driverId;
    }
    return void 0;
  });
  driverBestLapStringById = computed(() => {
    const result = /* @__PURE__ */ new Map();
    const value = this.driverService.driverBestLapById();
    value.forEach((lap, id) => {
      result.set(id, millisecondsToMinuteSecondMillisecondsString(lap));
    });
    return result;
  });
  driverPaceStringById = computed(() => {
    const result = /* @__PURE__ */ new Map();
    const value = this.driverService.driverPaceById();
    value.forEach((pace, id) => {
      result.set(id, millisecondsToMinuteSecondMillisecondsString(pace));
    });
    return result;
  });
  teamBestLapString = computed(() => {
    const value = this.lapService.teamBestLap();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(value.lapMilliseconds);
    }
    return void 0;
  });
  bestPaceString = computed(() => {
    const value = this.driverService.driverBestPaceMillisecond();
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(value);
    }
    return void 0;
  });
  lastCompletedStintPaceStringByDriverId = computed(() => {
    const result = /* @__PURE__ */ new Map();
    const driverLastStintIdByDriverId = this.driverService.driverLastStintIdByDriverId();
    const stintPaceById = this.stintService.stintPaceById();
    driverLastStintIdByDriverId.forEach((stintId, driverId) => {
      const pace = stintPaceById.get(stintId);
      if (pace) {
        result.set(driverId, millisecondsToMinuteSecondMillisecondsString(pace));
      }
    });
    return result;
  });
  getBestLap(driverId) {
    return this.driverBestLapStringById().get(driverId) ?? "--:--.---";
  }
  getPace(driverId) {
    return this.driverPaceStringById().get(driverId) ?? "--:--.---";
  }
  isBestLap(driverId) {
    const value = this.lapService.teamBestLap();
    if (value) {
      return value.driverId === driverId;
    }
    return false;
  }
  isBestPace(driverId) {
    const value = this.driverService.driverIdBestPace();
    if (value) {
      return value === driverId;
    }
    return false;
  }
  getLastStintPace(driverId) {
    return this.lastCompletedStintPaceStringByDriverId().get(driverId) ?? "--:--.---";
  }
  static \u0275fac = function DriverPerformanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriverPerformanceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriverPerformanceComponent, selectors: [["app-driver-performance"]], decls: 22, vars: 4, consts: [["title", "\u{1F417}\u{1F4AA}\u{1F3FC} Driver performance", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor"], ["slot", "body-content", 1, "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "p-0.5", "text-center", "rounded-sm", 3, "ngClass"]], template: function DriverPerformanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, DriverPerformanceComponent_Conditional_2_Template, 1, 2, "app-chip", 2)(3, DriverPerformanceComponent_Conditional_3_Template, 1, 2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "table", 4)(6, "thead", 5)(7, "tr")(8, "th", 6);
      \u0275\u0275text(9, " ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 7);
      \u0275\u0275text(11, " Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th", 8);
      \u0275\u0275text(13, " Best ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "th", 8);
      \u0275\u0275text(15, " AVG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th", 8);
      \u0275\u0275text(17, " Last Sting AVG ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 9)(19, "table", 10)(20, "tbody");
      \u0275\u0275template(21, DriverPerformanceComponent_tr_21_Template, 13, 15, "tr", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.teamBestLapString() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.bestPaceString() ? 3 : -1);
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.drivers());
    }
  }, dependencies: [
    CardComponent,
    NgForOf,
    NgClass,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DriverPerformanceComponent, [{
    type: Component,
    args: [{ selector: "app-driver-performance", imports: [
      CardComponent,
      NgForOf,
      NgClass,
      ChipComponent
    ], template: `<app-card
  title="\u{1F417}\u{1F4AA}\u{1F3FC} Driver performance"
  [initiallyOpen]="false">

  <div slot="header-right-content"
    class="flex items-center gap-1">
    @if (teamBestLapString()) {
      <app-chip
        [text]="'Lap: ' + teamBestLapString()"
        [backgroundColor]="'bg-fuchsia-500'"
      />
    }
    @if (bestPaceString()) {
      <app-chip
        [text]="'AVG: ' + bestPaceString()"
        [backgroundColor]="'bg-fuchsia-500'"
      />
    }
  </div>

  <div slot="body-content"
       class="flex flex-col overflow-clip">
    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          ID
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Name
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">
          Best
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">
          AVG
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
            colspan="2">
          Last Sting AVG
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let driver of drivers()"
            [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': driver.id === activeStintDriverId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': driver.id !== activeStintDriverId()}">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ driver.id }}</td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ driver.raceName }}</td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">
            <div
              [ngClass]="{'bg-fuchsia-500 text-white': isBestLap(driver.id)}"
              class="p-0.5 text-center rounded-sm">
              {{ getBestLap(driver.id) }}
            </div>
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">
            <div
              [ngClass]="{'bg-fuchsia-500 text-white': isBestPace(driver.id)}"
              class="p-0.5 text-center rounded-sm"> {{ getPace(driver.id) }}
            </div>
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono"
              colspan="2">
            {{ getLastStintPace(driver.id) }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriverPerformanceComponent, { className: "DriverPerformanceComponent", filePath: "src/app/driver/component/driver-performance/driver-performance.component.ts", lineNumber: 23 });
})();

// src/app/lap-missing/component/lap-missing/lap-missing.component.ts
function LapMissingComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const raceNumber_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(raceNumber_r1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTeamName(raceNumber_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getLapMissingString(raceNumber_r1));
  }
}
var LapMissingComponent = class _LapMissingComponent {
  lapMissingService = inject(LapMissingService);
  teamService = inject(TeamService);
  lapMissingCount = this.lapMissingService.lapMissingCount;
  lapMissingRaceNumber = computed(() => {
    const value = this.lapMissingService.lapMissingByRaceNumber();
    return Array.from(value.keys());
  });
  getTeamName(raceNumber) {
    const teamNameByRaceNumber = this.teamService.teamNameByRaceNumber();
    if (teamNameByRaceNumber.has(raceNumber)) {
      return teamNameByRaceNumber.get(raceNumber);
    }
    return "";
  }
  getLapMissingString(raceNumber) {
    const lapMissingByRaceNumber = this.lapMissingService.lapMissingByRaceNumber();
    const lapMissing = lapMissingByRaceNumber.get(raceNumber);
    if (lapMissing) {
      return lapMissing.join(", ");
    }
    return "";
  }
  static \u0275fac = function LapMissingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LapMissingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LapMissingComponent, selectors: [["app-lap-missing"]], decls: 17, vars: 5, consts: [["title", "\u23F1\uFE0F\u274C Lap missing", 3, "initiallyOpen"], ["slot", "header-right-content", 1, "flex", "items-center", "gap-1"], [3, "text", "backgroundColor", "bounceCondition"], ["slot", "body-content", 1, "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], ["class", "hover:bg-neutral-100 dark:hover:bg-neutral-700", 4, "ngFor", "ngForOf"], [1, "hover:bg-neutral-100", "dark:hover:bg-neutral-700"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], ["colspan", "2", 1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-right", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"]], template: function LapMissingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-chip", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "table", 4)(5, "thead", 5)(6, "tr")(7, "th", 6);
      \u0275\u0275text(8, " Race number ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "th", 7);
      \u0275\u0275text(10, " Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 8);
      \u0275\u0275text(12, " Lap missing ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 9)(14, "table", 10)(15, "tbody");
      \u0275\u0275template(16, LapMissingComponent_tr_16_Template, 7, 3, "tr", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275property("text", ctx.lapMissingCount() > 0 ? "Lap Missing: " + ctx.lapMissingCount() : "No lap missing!")("backgroundColor", ctx.lapMissingCount() > 0 ? "bg-yellow-500" : "bg-green-500")("bounceCondition", ctx.lapMissingCount() > 0);
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.lapMissingRaceNumber());
    }
  }, dependencies: [
    CardComponent,
    NgForOf,
    ChipComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LapMissingComponent, [{
    type: Component,
    args: [{ selector: "app-lap-missing", imports: [
      CardComponent,
      NgForOf,
      ChipComponent
    ], template: `<app-card
  title="\u23F1\uFE0F\u274C Lap missing"
  [initiallyOpen]="false">

  <div slot="header-right-content" class="flex items-center gap-1">

    <app-chip
      [text]="lapMissingCount() > 0 ? 'Lap Missing: ' + lapMissingCount() : 'No lap missing!'"
      [backgroundColor]="lapMissingCount() > 0 ? 'bg-yellow-500' : 'bg-green-500'"
      [bounceCondition]="lapMissingCount() > 0"
    />
  </div>

  <div slot="body-content" class="flex flex-col overflow-clip">
    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Race number
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400" colspan="2">
          Name
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400" colspan="2">
          Lap missing
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let raceNumber of lapMissingRaceNumber()" class="hover:bg-neutral-100 dark:hover:bg-neutral-700">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100">{{ raceNumber }}</td>
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100" colspan="2">{{ getTeamName(raceNumber) }}</td>
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-right text-xs md:text-base text-neutral-900 dark:text-neutral-100" colspan="2">{{ getLapMissingString(raceNumber)}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</app-card>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LapMissingComponent, { className: "LapMissingComponent", filePath: "src/app/lap-missing/component/lap-missing/lap-missing.component.ts", lineNumber: 18 });
})();

// src/app/steering-wheel/component/steering-wheel-message-button/steering-wheel-message-button.component.ts
var SteeringWheelMessageButtonComponent = class _SteeringWheelMessageButtonComponent {
  steeringWheelMessageUpdateService = inject(SteeringWheelMessageUpdateService);
  boxMessage = {
    type: "box"
  };
  safetyCarMessage = {
    type: "safety-car"
  };
  fastDriverBehindMessage = {
    type: "fast-driver-behind"
  };
  sendBoxMessage() {
    this.steeringWheelMessageUpdateService.updateMessageType({
      type: "box"
    });
  }
  sendSafetyCarMessage() {
    this.steeringWheelMessageUpdateService.updateMessageType({
      type: "safety-car"
    });
  }
  sendFastDriverBehindMessage() {
    this.steeringWheelMessageUpdateService.updateMessageType({
      type: "fast-driver-behind"
    });
  }
  getBoxButtonBackgroundColor() {
    return getButtonBackgroundColor(this.boxMessage);
  }
  getSafetyCarButtonBackgroundColor() {
    return getButtonBackgroundColor(this.safetyCarMessage);
  }
  getFastDriverBehindButtonBackgroundColor() {
    return getButtonBackgroundColor(this.fastDriverBehindMessage);
  }
  static \u0275fac = function SteeringWheelMessageButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SteeringWheelMessageButtonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SteeringWheelMessageButtonComponent, selectors: [["app-steering-wheel-message-button"]], decls: 10, vars: 7, consts: [["title", "\u{1F94F}\u{1F4AC} Steering wheel message", 3, "initiallyOpen"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between"], [1, "text-white", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"]], template: function SteeringWheelMessageButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function SteeringWheelMessageButtonComponent_Template_button_click_3_listener() {
        return ctx.sendBoxMessage();
      });
      \u0275\u0275text(4, " BOX ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function SteeringWheelMessageButtonComponent_Template_button_click_5_listener() {
        return ctx.sendSafetyCarMessage();
      });
      \u0275\u0275text(6, " SAFETY CAR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 2)(8, "button", 3);
      \u0275\u0275listener("click", function SteeringWheelMessageButtonComponent_Template_button_click_8_listener() {
        return ctx.sendFastDriverBehindMessage();
      });
      \u0275\u0275text(9, " FAST DRIVER BEHIND ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true);
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.getBoxButtonBackgroundColor());
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getSafetyCarButtonBackgroundColor());
      \u0275\u0275advance(3);
      \u0275\u0275classMap(ctx.getFastDriverBehindButtonBackgroundColor());
    }
  }, dependencies: [CardComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SteeringWheelMessageButtonComponent, [{
    type: Component,
    args: [{ selector: "app-steering-wheel-message-button", imports: [
      CardComponent
    ], template: '<app-card\n  title="\u{1F94F}\u{1F4AC} Steering wheel message"\n  [initiallyOpen]="true">\n\n  <div slot="body-content" class="flex flex-col gap-2">\n    <div class="flex justify-between">\n      <button\n        (click)="sendBoxMessage()"\n        [class]= "getBoxButtonBackgroundColor()"\n        class="text-white font-bold py-2 px-4 rounded-sm hover:cursor-pointer">\n        BOX\n      </button>\n      <button\n        (click)="sendSafetyCarMessage()"\n        [class]= "getSafetyCarButtonBackgroundColor()"\n        class="text-white font-bold py-2 px-4 rounded-sm hover:cursor-pointer">\n        SAFETY CAR\n      </button>\n    </div>\n\n    <div class="flex justify-between">\n      <button\n        (click)="sendFastDriverBehindMessage()"\n        [class]= "getFastDriverBehindButtonBackgroundColor()"\n        class="text-white font-bold py-2 px-4 rounded-sm hover:cursor-pointer">\n        FAST DRIVER BEHIND\n      </button>\n    </div>\n  </div>\n\n</app-card>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SteeringWheelMessageButtonComponent, { className: "SteeringWheelMessageButtonComponent", filePath: "src/app/steering-wheel/component/steering-wheel-message-button/steering-wheel-message-button.component.ts", lineNumber: 16 });
})();

// src/app/board/component/board/board.component.ts
function BoardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-timeline");
  }
}
function BoardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-pit-lane");
  }
}
function BoardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tyre-pressure");
  }
}
function BoardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fuel");
  }
}
function BoardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-kart");
  }
}
function BoardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-interphone");
  }
}
function BoardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-steering-wheel-message-button");
  }
}
function BoardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-live-timing");
  }
}
function BoardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-active-stint");
  }
}
function BoardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stint-optimizer");
  }
}
function BoardComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-delta-stint");
  }
}
function BoardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-lap-missing");
  }
}
function BoardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-driver-change");
  }
}
function BoardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-kart-change");
  }
}
function BoardComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tyre-change");
  }
}
function BoardComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-driver");
  }
}
function BoardComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-driver-performance");
  }
}
function BoardComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-pit");
  }
}
function BoardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stint");
  }
}
var BoardComponent = class _BoardComponent {
  titleService = inject(Title);
  boardConfigService = inject(BoardConfigService);
  fuelVisible = true;
  pitLaneVisible = true;
  tyreChangeVisible = true;
  interphoneVisible = true;
  driverChangeVisible = true;
  pitVisible = true;
  timelineVisible = true;
  deltaStintVisible = true;
  driverVisible = true;
  stintVisible = true;
  activeStintVisible = true;
  stintOptimizerVisible = true;
  kartChangeVisible = true;
  kartVisible = true;
  lapMissingVisible = true;
  driverPerformanceVisible = true;
  liveTimingVisible = true;
  steeringWheelMessageButtonVisible = true;
  tyrePressureVisible = true;
  constructor() {
    this.titleService.setTitle("WBR");
    effect(() => {
      const config = this.boardConfigService.boardConfig();
      if (config) {
        this.fuelVisible = config.fuelVisible;
        this.pitLaneVisible = config.pitLaneVisible;
        this.tyreChangeVisible = config.tyreChangeVisible;
        this.interphoneVisible = config.interphoneVisible;
        this.driverChangeVisible = config.driverChangeVisible;
        this.pitVisible = config.pitVisible;
        this.timelineVisible = config.timelineVisible;
        this.deltaStintVisible = config.deltaStintVisible;
        this.driverVisible = config.driverVisible;
        this.stintVisible = config.stintVisible;
        this.activeStintVisible = config.activeStintVisible;
        this.stintOptimizerVisible = config.stintOptimizerVisible;
        this.kartChangeVisible = config.kartChangeVisible;
        this.kartVisible = config.kartVisible;
        this.lapMissingVisible = config.lapMissingVisible;
        this.driverPerformanceVisible = config.driverPerformanceVisible;
        this.liveTimingVisible = config.liveTimingVisible;
        this.steeringWheelMessageButtonVisible = config.steeringWheelMessageButtonVisible;
        this.tyrePressureVisible = config.tyrePressureVisible;
      }
    });
  }
  static \u0275fac = function BoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoardComponent, selectors: [["app-board"]], decls: 31, vars: 19, consts: [[1, "p-4", "flex", "flex-row", "justify-between"], [1, "text-xl", "md:text-3xl", "dark:text-neutral-100", "text-neutral-900", "font-semibold"], [1, "mb-2"], [1, "mx-2", "grid", "grid-cols-1", "lg:grid-cols-2", "xl:grid-cols-3", "gap-2"], [1, "flex", "flex-col", "md:h-fit", "gap-2"]], template: function BoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "\u{1F3CE}\uFE0F WBR \u{1F417}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-navigator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275element(5, "app-race");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275element(7, "app-race-button");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, BoardComponent_Conditional_8_Template, 1, 0, "app-timeline");
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 4);
      \u0275\u0275template(11, BoardComponent_Conditional_11_Template, 1, 0, "app-pit-lane")(12, BoardComponent_Conditional_12_Template, 1, 0, "app-tyre-pressure")(13, BoardComponent_Conditional_13_Template, 1, 0, "app-fuel")(14, BoardComponent_Conditional_14_Template, 1, 0, "app-kart")(15, BoardComponent_Conditional_15_Template, 1, 0, "app-interphone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 4);
      \u0275\u0275template(17, BoardComponent_Conditional_17_Template, 1, 0, "app-steering-wheel-message-button")(18, BoardComponent_Conditional_18_Template, 1, 0, "app-live-timing")(19, BoardComponent_Conditional_19_Template, 1, 0, "app-active-stint")(20, BoardComponent_Conditional_20_Template, 1, 0, "app-stint-optimizer")(21, BoardComponent_Conditional_21_Template, 1, 0, "app-delta-stint")(22, BoardComponent_Conditional_22_Template, 1, 0, "app-lap-missing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 4);
      \u0275\u0275template(24, BoardComponent_Conditional_24_Template, 1, 0, "app-driver-change")(25, BoardComponent_Conditional_25_Template, 1, 0, "app-kart-change")(26, BoardComponent_Conditional_26_Template, 1, 0, "app-tyre-change")(27, BoardComponent_Conditional_27_Template, 1, 0, "app-driver")(28, BoardComponent_Conditional_28_Template, 1, 0, "app-driver-performance")(29, BoardComponent_Conditional_29_Template, 1, 0, "app-pit")(30, BoardComponent_Conditional_30_Template, 1, 0, "app-stint");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.timelineVisible ? 8 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.pitLaneVisible ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tyrePressureVisible ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.fuelVisible ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.kartVisible ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.interphoneVisible ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.steeringWheelMessageButtonVisible ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.liveTimingVisible ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeStintVisible ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.stintOptimizerVisible ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.deltaStintVisible ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.lapMissingVisible ? 22 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.driverChangeVisible ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.kartChangeVisible ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tyreChangeVisible ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driverVisible ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.driverPerformanceVisible ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pitVisible ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.stintVisible ? 30 : -1);
    }
  }, dependencies: [
    ActiveStintComponent,
    DeltaStintComponent,
    DriverChangeComponent,
    DriverComponent,
    FuelComponent,
    InterphoneComponent,
    KartChangeComponent,
    KartComponent,
    PitComponent,
    PitLaneComponent,
    RaceButtonComponent,
    RaceComponent,
    StintComponent,
    StintOptimizerComponent,
    TimelineComponent,
    TyreChangeComponent,
    NavigatorComponent,
    LiveTimingComponent,
    TyrePressureComponent,
    DriverPerformanceComponent,
    LapMissingComponent,
    SteeringWheelMessageButtonComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoardComponent, [{
    type: Component,
    args: [{ selector: "app-board", imports: [
      ActiveStintComponent,
      DeltaStintComponent,
      DriverChangeComponent,
      DriverComponent,
      FuelComponent,
      InterphoneComponent,
      KartChangeComponent,
      KartComponent,
      PitComponent,
      PitLaneComponent,
      RaceButtonComponent,
      RaceComponent,
      StintComponent,
      StintOptimizerComponent,
      TimelineComponent,
      TyreChangeComponent,
      NavigatorComponent,
      LiveTimingComponent,
      TyrePressureComponent,
      DriverPerformanceComponent,
      LapMissingComponent,
      SteeringWheelMessageButtonComponent
    ], template: '<div class="p-4 flex flex-row justify-between">\n  <div class="text-xl md:text-3xl dark:text-neutral-100 text-neutral-900 font-semibold">\u{1F3CE}\uFE0F WBR \u{1F417}</div>\n  <app-navigator></app-navigator>\n</div>\n\n<div class="mb-2">\n  <app-race></app-race>\n</div>\n\n<div class="mb-2">\n  <app-race-button></app-race-button>\n</div>\n\n@if (timelineVisible) {\n  <app-timeline></app-timeline>\n}\n\n<div class="mx-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">\n  <div class="flex flex-col md:h-fit gap-2">\n    @if (pitLaneVisible) {\n      <app-pit-lane></app-pit-lane>\n    }\n\n    @if (tyrePressureVisible) {\n      <app-tyre-pressure></app-tyre-pressure>\n    }\n\n    @if (fuelVisible) {\n      <app-fuel></app-fuel>\n    }\n\n    @if (kartVisible) {\n      <app-kart></app-kart>\n    }\n\n    @if (interphoneVisible) {\n      <app-interphone></app-interphone>\n    }\n  </div>\n\n  <div class="flex flex-col md:h-fit gap-2">\n\n    @if (steeringWheelMessageButtonVisible) {\n      <app-steering-wheel-message-button></app-steering-wheel-message-button>\n    }\n\n    @if (liveTimingVisible) {\n      <app-live-timing></app-live-timing>\n    }\n\n    @if (activeStintVisible) {\n      <app-active-stint></app-active-stint>\n    }\n\n    @if (stintOptimizerVisible) {\n      <app-stint-optimizer></app-stint-optimizer>\n    }\n\n    @if (deltaStintVisible) {\n      <app-delta-stint></app-delta-stint>\n    }\n\n    @if (lapMissingVisible) {\n      <app-lap-missing></app-lap-missing>\n    }\n  </div>\n\n  <div class="flex flex-col md:h-fit gap-2">\n\n    @if (driverChangeVisible) {\n      <app-driver-change></app-driver-change>\n    }\n\n    @if (kartChangeVisible) {\n      <app-kart-change></app-kart-change>\n    }\n\n    @if (tyreChangeVisible) {\n      <app-tyre-change></app-tyre-change>\n    }\n\n    @if (driverVisible) {\n      <app-driver></app-driver>\n    }\n\n    @if (driverPerformanceVisible) {\n      <app-driver-performance></app-driver-performance>\n    }\n\n    @if (pitVisible) {\n      <app-pit></app-pit>\n    }\n\n    @if (stintVisible) {\n      <app-stint></app-stint>\n    }\n\n  </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoardComponent, { className: "BoardComponent", filePath: "src/app/board/component/board/board.component.ts", lineNumber: 70 });
})();
export {
  BoardComponent
};
//# sourceMappingURL=chunk-367LPGJE.js.map
