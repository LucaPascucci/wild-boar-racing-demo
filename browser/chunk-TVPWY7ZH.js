import {
  LapSimulatorService
} from "./chunk-J5ALJMDB.js";
import {
  LapSimulatorConfigService
} from "./chunk-5N6ZE7MA.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-BFFHFKXW.js";
import {
  TooltipDirective,
  TooltipPosition
} from "./chunk-Q3SJZCYY.js";
import {
  Chart,
  defaults
} from "./chunk-JISOVYYC.js";
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
  millisecondsToMinuteSecondMillisecondsString
} from "./chunk-JLOFOMRS.js";
import {
  FirestoreService,
  LapDataService,
  LapService,
  RaceService,
  TeamDataService,
  TeamService
} from "./chunk-PQBZRJZN.js";
import {
  collection,
  collectionData,
  takeUntilDestroyed,
  toObservable
} from "./chunk-2V5B626X.js";
import {
  BehaviorSubject,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgZone,
  Optional,
  Output,
  ViewChild,
  combineLatest,
  computed,
  distinctUntilChanged,
  effect,
  environment,
  inject,
  map,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-AM7K5Y7Q.js";
import {
  __async
} from "./chunk-YFKO4TLY.js";

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol = root_default.Symbol;
var Symbol_default = Symbol;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default = createAssigner;

// node_modules/lodash-es/_isPrototype.js
var objectProto5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty7.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty8.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag2 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto11 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty9.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default = assignMergeValue;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default = safeGet;

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default = baseMergeDeep;

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default = baseMerge;

// node_modules/lodash-es/merge.js
var merge = createAssigner_default(function(object, source, srcIndex) {
  baseMerge_default(object, source, srcIndex);
});
var merge_default = merge;

// node_modules/ng2-charts/fesm2022/ng2-charts.mjs
var NG_CHARTS_CONFIGURATION = new InjectionToken("Configuration for ngCharts");
var ThemeService = class _ThemeService {
  constructor() {
    this.colorschemesOptions = new BehaviorSubject(void 0);
  }
  setColorschemesOptions(options) {
    this.pColorschemesOptions = options;
    this.colorschemesOptions.next(options);
  }
  getColorschemesOptions() {
    return this.pColorschemesOptions;
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ThemeService,
      factory: _ThemeService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BaseChartDirective = class _BaseChartDirective {
  constructor(element, zone, themeService, config) {
    this.zone = zone;
    this.themeService = themeService;
    this.type = "bar";
    this.plugins = [];
    this.chartClick = new EventEmitter();
    this.chartHover = new EventEmitter();
    this.subs = [];
    this.themeOverrides = {};
    if (config?.registerables) {
      Chart.register(...config.registerables);
    }
    if (config?.defaults) {
      defaults.set(config.defaults);
    }
    this.ctx = element.nativeElement.getContext("2d");
    this.subs.push(this.themeService.colorschemesOptions.pipe(distinctUntilChanged()).subscribe((r) => this.themeChanged(r)));
  }
  ngOnChanges(changes) {
    const requireRender = ["type"];
    const propertyNames = Object.getOwnPropertyNames(changes);
    if (propertyNames.some((key) => requireRender.includes(key)) || propertyNames.every((key) => changes[key].isFirstChange())) {
      this.render();
    } else {
      const config = this.getChartConfiguration();
      if (this.chart) {
        Object.assign(this.chart.config.data, config.data);
        if (this.chart.config.plugins) {
          Object.assign(this.chart.config.plugins, config.plugins);
        }
        if (this.chart.config.options) {
          Object.assign(this.chart.config.options, config.options);
        }
      }
      this.update();
    }
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
    this.subs.forEach((s) => s.unsubscribe());
  }
  render() {
    if (this.chart) {
      this.chart.destroy();
    }
    return this.zone.runOutsideAngular(() => this.chart = new Chart(this.ctx, this.getChartConfiguration()));
  }
  update(mode) {
    if (this.chart) {
      this.zone.runOutsideAngular(() => this.chart?.update(mode));
    }
  }
  hideDataset(index, hidden) {
    if (this.chart) {
      this.chart.getDatasetMeta(index).hidden = hidden;
      this.update();
    }
  }
  isDatasetHidden(index) {
    return this.chart?.getDatasetMeta(index)?.hidden;
  }
  toBase64Image() {
    return this.chart?.toBase64Image();
  }
  themeChanged(options) {
    this.themeOverrides = options;
    if (this.chart) {
      if (this.chart.config.options) {
        Object.assign(this.chart.config.options, this.getChartOptions());
      }
      this.update();
    }
  }
  getChartOptions() {
    return merge_default({
      onHover: (event, active) => {
        if (!this.chartHover.observed && !this.chartHover.observers?.length) {
          return;
        }
        this.zone.run(() => this.chartHover.emit({
          event,
          active
        }));
      },
      onClick: (event, active) => {
        if (!this.chartClick.observed && !this.chartClick.observers?.length) {
          return;
        }
        this.zone.run(() => this.chartClick.emit({
          event,
          active
        }));
      }
    }, this.themeOverrides, this.options, {
      plugins: {
        legend: {
          display: this.legend
        }
      }
    });
  }
  getChartConfiguration() {
    return {
      type: this.type,
      data: this.getChartData(),
      options: this.getChartOptions(),
      plugins: this.plugins
    };
  }
  getChartData() {
    return this.data ? this.data : {
      labels: this.labels || [],
      datasets: this.datasets || []
    };
  }
  static {
    this.\u0275fac = function BaseChartDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseChartDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(NG_CHARTS_CONFIGURATION, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseChartDirective,
      selectors: [["canvas", "baseChart", ""]],
      inputs: {
        type: "type",
        legend: "legend",
        data: "data",
        options: "options",
        plugins: "plugins",
        labels: "labels",
        datasets: "datasets"
      },
      outputs: {
        chartClick: "chartClick",
        chartHover: "chartHover"
      },
      exportAs: ["base-chart"],
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseChartDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "canvas[baseChart]",
      exportAs: "base-chart",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ThemeService
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_CHARTS_CONFIGURATION]
    }]
  }], {
    type: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    plugins: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    datasets: [{
      type: Input
    }],
    chartClick: [{
      type: Output
    }],
    chartHover: [{
      type: Output
    }]
  });
})();

// src/app/gap-chart/service/gap-chart-config.service.ts
var GapChartConfigService = class _GapChartConfigService extends FirestoreService {
  collectionPath = "/gap-chart-configs";
  collectionRef = collection(this.firestore, this.collectionPath);
  gapChartConfig = signal(void 0);
  constructor() {
    super();
    this.getAll().pipe(takeUntilDestroyed()).subscribe((configs) => {
      if (configs.length > 0) {
        this.gapChartConfig.set(configs.at(0));
      }
    });
  }
  updateLapWindow(value) {
    const config = this.gapChartConfig();
    if (config) {
      config.lapWindow = value;
      this.updateDataWithMessage(config.id, config, "lap window");
    }
  }
  updateGapWindow(value) {
    const config = this.gapChartConfig();
    if (config) {
      config.gapWindowMilliseconds = value;
      this.updateDataWithMessage(config.id, config, "gap window");
    }
  }
  getAll() {
    return collectionData(this.collectionRef).pipe(takeUntil(this.destroyed), map((data) => data.map((doc) => doc).filter((config) => !config.deleted)));
  }
  static \u0275fac = function GapChartConfigService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GapChartConfigService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GapChartConfigService, factory: _GapChartConfigService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GapChartConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/chart/service/chart-color-update.service.ts
var ChartColorUpdateService = class _ChartColorUpdateService extends FirestoreService {
  collectionPath = "/chart-color-updates";
  collectionRef = collection(this.firestore, this.collectionPath);
  raceService = inject(RaceService);
  chartColorUpdate = signal(void 0);
  constructor() {
    super();
    combineLatest({
      chartColorUpdate: this.getChartColorUpdate()
    }).pipe(takeUntilDestroyed()).subscribe(({ chartColorUpdate }) => {
      if (chartColorUpdate) {
        const actualChartColorUpdate = this.chartColorUpdate();
        if (!actualChartColorUpdate || actualChartColorUpdate.updatedAt < chartColorUpdate.updatedAt) {
          this.chartColorUpdate.set(chartColorUpdate);
        }
      }
    });
  }
  getChartColorUpdate() {
    return combineLatest({
      chartColorUpdates: collectionData(this.collectionRef),
      activeRace: toObservable(this.raceService.activeRace)
    }).pipe(takeUntil(this.destroyed), map(({ chartColorUpdates, activeRace }) => {
      const result = chartColorUpdates;
      if (activeRace && result.length > 0) {
        return result.filter((chartColorUpdate) => !chartColorUpdate.deleted && chartColorUpdate.raceId === activeRace.id).at(0);
      }
      return void 0;
    }));
  }
  static \u0275fac = function ChartColorUpdateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartColorUpdateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChartColorUpdateService, factory: _ChartColorUpdateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartColorUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/chart/model/chart-color.ts
function deserializeChartColorDTO(data) {
  return {
    id: data.id,
    raceId: data.raceId,
    raceNumber: data.raceNumber,
    color: data.color
  };
}
function deserializeChartColorDTOs(data) {
  return data.map((item) => deserializeChartColorDTO(item));
}

// src/app/chart/service/chart-color-data.service.ts
var ChartColorDataService = class _ChartColorDataService {
  path = "/chart-color-management";
  httpClient = inject(HttpClient);
  chartColorUpdateService = inject(ChartColorUpdateService);
  raceService = inject(RaceService);
  chartColors = signal([]);
  chartColorsByRaceNumber = signal(/* @__PURE__ */ new Map());
  constructor() {
    toObservable(this.raceService.activeRace).pipe(switchMap((race) => race ? this.getChartColors(race.id, []) : []), takeUntilDestroyed()).subscribe((chartColors) => {
      this.chartColors.set(this.merge(this.chartColors(), chartColors));
      this.chartColorsByRaceNumber.set(new Map(this.chartColors().map((chartColor) => [chartColor.raceNumber, chartColor.color])));
    });
    toObservable(this.chartColorUpdateService.chartColorUpdate).pipe(switchMap((chartColorUpdate) => chartColorUpdate ? this.getChartColors(chartColorUpdate.raceId, chartColorUpdate.updatedIds) : []), takeUntilDestroyed()).subscribe((updatedChartColors) => {
      this.chartColors.set(this.merge(this.chartColors(), updatedChartColors));
      this.chartColorsByRaceNumber.set(new Map(this.chartColors().map((chartColor) => [chartColor.raceNumber, chartColor.color])));
    });
  }
  merge(currentChartColors, newChartColors) {
    const currentChartColorsMap = new Map(currentChartColors.map((chartColor) => [chartColor.id, chartColor]));
    newChartColors.forEach((newChartColor) => {
      currentChartColorsMap.set(newChartColor.id, newChartColor);
    });
    return Array.from(currentChartColorsMap.values()).sort((a, b) => a.id - b.id);
  }
  getChartColors(raceId, ids) {
    return this.httpClient.post(`${environment.baseUrl}${this.path}/chart-colors`, {
      raceId,
      ids
    }).pipe(map((result) => deserializeChartColorDTOs(result)));
  }
  static \u0275fac = function ChartColorDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartColorDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChartColorDataService, factory: _ChartColorDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartColorDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/gap-chart/service/gap-chart.service.ts
var GapChartService = class _GapChartService {
  lapSimulatorService = inject(LapSimulatorService);
  lapSimulatorConfigService = inject(LapSimulatorConfigService);
  gapChartConfigService = inject(GapChartConfigService);
  gapChartColorDataService = inject(ChartColorDataService);
  teamService = inject(TeamService);
  worker;
  chartData = signal(void 0);
  constructor() {
    if (typeof Worker !== "undefined") {
      this.worker = new Worker(new URL("worker-RK3ACV2N.js", import.meta.url), { type: "module" });
      this.worker.onmessage = ({ data }) => {
        this.chartData.set(data.chartData);
      };
    }
    combineLatest({
      normalizedCumulatedTimeLaps: toObservable(this.lapSimulatorService.normalizedCumulatedTimeLaps),
      shadowLaps: toObservable(this.lapSimulatorService.shadowLaps),
      futureLaps: toObservable(this.lapSimulatorService.futureLaps),
      futureLapsWithPitNow: toObservable(this.lapSimulatorService.futureLapsWithPitNow),
      teamNamesByRaceNumber: toObservable(this.teamService.teamNameByRaceNumber),
      gapChartVisibleByRaceNumber: toObservable(this.teamService.gapChartVisibleByRaceNumber),
      shadowChartVisibleByRaceNumber: toObservable(this.teamService.shadowChartVisibleByRaceNumber),
      pitNowChartVisibleByRaceNumber: toObservable(this.teamService.pitNowChartVisibleByRaceNumber),
      lapSimulatorConfig: toObservable(this.lapSimulatorConfigService.lapSimulatorConfig),
      gapChartConfig: toObservable(this.gapChartConfigService.gapChartConfig),
      gapChartColorsByRaceNumber: toObservable(this.gapChartColorDataService.chartColorsByRaceNumber)
    }).pipe(takeUntilDestroyed()).subscribe(({ normalizedCumulatedTimeLaps, shadowLaps, futureLaps, futureLapsWithPitNow, teamNamesByRaceNumber, gapChartVisibleByRaceNumber, shadowChartVisibleByRaceNumber, pitNowChartVisibleByRaceNumber, lapSimulatorConfig, gapChartConfig, gapChartColorsByRaceNumber }) => {
      if (this.worker && gapChartConfig && lapSimulatorConfig && normalizedCumulatedTimeLaps.size > 0) {
        this.worker.postMessage({
          normalizedCumulatedTimeLaps,
          teamNamesByRaceNumber,
          gapChartVisibleByRaceNumber,
          shadowChartVisibleByRaceNumber,
          pitNowChartVisibleByRaceNumber,
          shadowLaps,
          futureLaps,
          futureLapsWithPitNow,
          colorByRaceNumber: gapChartColorsByRaceNumber,
          gapChartConfig,
          lapSimulatorConfig
        });
      }
    });
  }
  static \u0275fac = function GapChartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GapChartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GapChartService, factory: _GapChartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GapChartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/service/chart-loader.service.ts
var ChartLoaderService = class _ChartLoaderService {
  chartsLoaded = false;
  loadCharts() {
    return __async(this, null, function* () {
      if (this.chartsLoaded) {
        return;
      }
      const { Chart: Chart2, registerables: registerables2 } = yield import("./chunk-7EI4HX3C.js");
      Chart2.register(...registerables2);
      this.chartsLoaded = true;
    });
  }
  isLoaded() {
    return this.chartsLoaded;
  }
  static \u0275fac = function ChartLoaderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartLoaderService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChartLoaderService, factory: _ChartLoaderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartLoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/gap-chart/component/gap-chart/gap-chart.component.ts
function GapChartComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "canvas", 4);
    \u0275\u0275listener("chartHover", function GapChartComponent_Conditional_2_Template_canvas_chartHover_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chartHovered($event));
    })("chartClick", function GapChartComponent_Conditional_2_Template_canvas_chartClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.chartClicked($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.chartData)("options", ctx_r1.chartOptions)("type", ctx_r1.chartType)("legend", !ctx_r1.hideLegend);
  }
}
function GapChartComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5);
    \u0275\u0275text(2, "Loading chart...");
    \u0275\u0275elementEnd()();
  }
}
var GapChartComponent = class _GapChartComponent {
  gapChartService = inject(GapChartService);
  chartLoaderService = inject(ChartLoaderService);
  teamService = inject(TeamService);
  lapService = inject(LapService);
  lapDataService = inject(LapDataService);
  chart;
  chartsReady = signal(false);
  constructor() {
    effect(() => {
      const chartData = this.gapChartService.chartData();
      if (chartData && this.chartsReady()) {
        this.chartData = chartData;
      }
    });
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.chartLoaderService.loadCharts();
      this.chartsReady.set(true);
    });
  }
  onResize() {
    this.hideLegend = window.innerWidth <= 700;
  }
  // Dati per chart che non supportano ancora i signal
  hideLegend = false;
  chartData = {
    datasets: []
  };
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        position: "left"
      }
    },
    plugins: {
      legend: { display: true },
      // NOTE: inserire informazioni utili sul tooltip
      tooltip: {
        callbacks: {
          label: (context) => {
            return this.createTooltipData(context);
          }
        }
      }
    },
    animation: false,
    animations: {
      colors: false,
      x: false
    },
    transitions: {
      active: {
        animation: {
          duration: 0
        }
      }
    }
  };
  chartType = "scatter";
  // events
  chartClicked({ event, active }) {
  }
  chartHovered({ event, active }) {
  }
  createTooltipData(context) {
    const result = [];
    const dataType = this.extractDataType(context.dataset.label || "");
    if (dataType !== "CURRENT") {
      result.push(`${dataType}`);
    }
    const raceNumber = this.extractRaceNumber(context.dataset.label || "");
    const teamName = this.getTeamName(raceNumber);
    if (raceNumber) {
      if (teamName) {
        result.push(`${teamName} (#${raceNumber})`);
      } else {
        result.push(`#${raceNumber}`);
      }
    }
    const dataPoint = context.dataset.data[context.dataIndex];
    const lapNumber = dataPoint.x;
    if (lapNumber) {
      result.push(`Lap: ${lapNumber}`);
    }
    const lapTime = this.getLapTime(raceNumber, lapNumber);
    if (lapTime && dataType === "CURRENT") {
      result.push(`Lap Time: ${lapTime}`);
    }
    const currentAVG = this.getCurrentPace(raceNumber);
    if (currentAVG && dataType === "CURRENT") {
      result.push(`Current AVG: ${currentAVG}`);
    }
    return result;
  }
  extractDataType(label) {
    const parts = label.split(" - ");
    if (parts.length >= 2 && !isNaN(Number(parts[0]))) {
      return "CURRENT";
    }
    if (parts.length >= 3) {
      const dataType = parts[0].trim();
      if (["FUTURE", "SHADOW", "PIT NOW"].includes(dataType)) {
        return dataType;
      }
    }
    return void 0;
  }
  extractRaceNumber(label) {
    const parts = label.split(" - ");
    if (parts.length >= 2 && !isNaN(Number(parts[0]))) {
      return Number(parts[0]);
    }
    if (parts.length >= 3 && !isNaN(Number(parts[1]))) {
      return Number(parts[1]);
    }
    const numberMatch = label.match(/\d+/);
    if (numberMatch) {
      return Number(numberMatch[0]);
    }
    return void 0;
  }
  getTeamName(raceNumber) {
    if (raceNumber === void 0) {
      return void 0;
    }
    return this.teamService.teamNameByRaceNumber().get(raceNumber);
  }
  getLapTime(raceNumber, lapNumber) {
    if (raceNumber === void 0 || lapNumber === void 0) {
      return void 0;
    }
    const lap = this.lapDataService.laps().find((lap2) => lap2.raceNumber === raceNumber && lap2.lapNumber === lapNumber);
    if (lap) {
      return millisecondsToMinuteSecondMillisecondsString(lap.lapMilliseconds);
    }
    return void 0;
  }
  getCurrentPace(raceNumber) {
    if (raceNumber === void 0) {
      return void 0;
    }
    const value = this.lapService.pacesByRaceNumber().get(raceNumber);
    if (value) {
      return millisecondsToMinuteSecondMillisecondsString(value);
    }
    return void 0;
  }
  static \u0275fac = function GapChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GapChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GapChartComponent, selectors: [["app-gap-chart"]], viewQuery: function GapChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 4, vars: 3, consts: [["title", "\u{1F4C8} Gap chart", 3, "initiallyOpen", "canOpen"], ["slot", "body-content", 1, "flex", "flex-col", "min-h-[700px]"], ["baseChart", "", 3, "data", "options", "type", "legend"], [1, "flex", "items-center", "justify-center", "h-64"], ["baseChart", "", 3, "chartHover", "chartClick", "data", "options", "type", "legend"], [1, "text-neutral-900", "dark:text-neutral-100"]], template: function GapChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1);
      \u0275\u0275template(2, GapChartComponent_Conditional_2_Template, 1, 4, "canvas", 2)(3, GapChartComponent_Conditional_3_Template, 3, 0, "div", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true)("canOpen", false);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chartsReady() ? 2 : 3);
    }
  }, dependencies: [
    BaseChartDirective,
    FormsModule,
    CardComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GapChartComponent, [{
    type: Component,
    args: [{ selector: "app-gap-chart", imports: [
      BaseChartDirective,
      FormsModule,
      CardComponent
    ], template: '<app-card\n  title="\u{1F4C8} Gap chart"\n  [initiallyOpen]="true"\n  [canOpen]="false">\n\n  <div slot="body-content" class="flex flex-col min-h-[700px]">\n    @if (chartsReady()) {\n      <canvas\n        baseChart\n        [data]="chartData"\n        [options]="chartOptions"\n        [type]="chartType"\n        [legend]="!hideLegend"\n        (chartHover)="chartHovered($event)"\n        (chartClick)="chartClicked($event)">\n      </canvas>\n    } @else {\n      <div class="flex items-center justify-center h-64">\n        <div class="text-neutral-900 dark:text-neutral-100">Loading chart...</div>\n      </div>\n    }\n  </div>\n\n</app-card>\n' }]
  }], () => [], { chart: [{
    type: ViewChild,
    args: [BaseChartDirective]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GapChartComponent, { className: "GapChartComponent", filePath: "src/app/gap-chart/component/gap-chart/gap-chart.component.ts", lineNumber: 31 });
})();

// src/app/team/component/team/team.component.ts
var _c0 = (a0, a1) => ({ "bg-green-100 dark:bg-green-900 font-semibold": a0, "hover:bg-neutral-100 dark:hover:bg-neutral-700": a1 });
function TeamComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " RN ");
  }
}
function TeamComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Race Number ");
  }
}
function TeamComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 12)(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 16)(8, "input", 17);
    \u0275\u0275listener("change", function TeamComponent_tr_24_Template_input_change_8_listener() {
      const team_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateGraphTeamByRaceNumber(team_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 16)(10, "input", 17);
    \u0275\u0275listener("change", function TeamComponent_tr_24_Template_input_change_10_listener() {
      const team_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatePitNowTeamByRaceNumber(team_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 16)(12, "input", 17);
    \u0275\u0275listener("change", function TeamComponent_tr_24_Template_input_change_12_listener() {
      const team_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateShadowTeamByRaceNumber(team_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const team_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c0, team_r2.id === ctx_r2.activeTeamId(), team_r2.id !== ctx_r2.activeTeamId()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r2.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", team_r2.raceNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "GapTeam_" + team_r2.id)("checked", team_r2.gapChartVisible);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "pitNowTeam_" + team_r2.id)("checked", team_r2.pitNowChartVisible);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "shadowTeam_" + team_r2.id)("checked", team_r2.shadowChartVisible);
  }
}
var TeamComponent = class _TeamComponent {
  teamDataService = inject(TeamDataService);
  teamService = inject(TeamService);
  teams = this.teamDataService.teams;
  activeTeamId = computed(() => {
    const activeTeam = this.teamService.activeTeam();
    return activeTeam?.id;
  });
  smallScreen = false;
  constructor() {
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }
  onResize() {
    this.smallScreen = 700 > window.innerWidth;
  }
  updateGraphTeamByRaceNumber(team) {
    this.teamDataService.updateGapChartVisibility(team.id, !team.gapChartVisible);
  }
  updatePitNowTeamByRaceNumber(team) {
    this.teamDataService.updatePitNowChartVisibility(team.id, !team.pitNowChartVisible);
  }
  updateShadowTeamByRaceNumber(team) {
    this.teamDataService.updateShadowChartVisibility(team.id, !team.shadowChartVisible);
  }
  resetVisibility() {
    this.teamDataService.resetChartVisibility();
  }
  static \u0275fac = function TeamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamComponent, selectors: [["app-team"]], decls: 25, vars: 4, consts: [["title", "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2} Team", 3, "initiallyOpen", "canOpen"], ["slot", "header-right-content"], [1, "bg-red-500", "hover:bg-red-700", "disabled:bg-red-200", "text-neutral-100", "font-bold", "py-2", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], ["slot", "body-content", 1, "max-h-[450px]", "flex", "flex-col", "overflow-clip"], [1, "w-full", "bg-neutral-50", "dark:bg-neutral-800", "table-fixed"], [1, "sticky", "top-0"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "font-medium", "text-neutral-700", "dark:text-neutral-400"], [1, "flex-1", "overflow-y-auto"], [1, "w-full", "table-fixed"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "py-2", "px-3", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], ["colspan", "2", 1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-left", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100", "font-mono"], [1, "py-2", "border-b", "border-neutral-200", "dark:border-neutral-400", "text-center", "text-xs", "md:text-base", "text-neutral-900", "dark:text-neutral-100"], ["type", "checkbox", 3, "change", "id", "checked"]], template: function TeamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function TeamComponent_Template_button_click_2_listener() {
        return ctx.resetVisibility();
      });
      \u0275\u0275text(3, " Reset ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "table", 4)(6, "thead", 5)(7, "tr")(8, "th", 6);
      \u0275\u0275text(9, " ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "th", 7);
      \u0275\u0275text(11, " Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th", 8);
      \u0275\u0275template(13, TeamComponent_Conditional_13_Template, 1, 0)(14, TeamComponent_Conditional_14_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 8);
      \u0275\u0275text(16, " Gap ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th", 8);
      \u0275\u0275text(18, " Pit now ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th", 8);
      \u0275\u0275text(20, " Shadow ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 9)(22, "table", 10)(23, "tbody");
      \u0275\u0275template(24, TeamComponent_tr_24_Template, 13, 13, "tr", 11);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true)("canOpen", true);
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.smallScreen ? 13 : 14);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.teams());
    }
  }, dependencies: [
    NgForOf,
    CardComponent,
    NgClass
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamComponent, [{
    type: Component,
    args: [{ selector: "app-team", imports: [
      NgForOf,
      CardComponent,
      NgClass
    ], template: `<app-card
  title="\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2} Team"
  [initiallyOpen]="true"
  [canOpen]="true">

  <div slot="header-right-content">
    <button
      (click)="resetVisibility()"
      class="bg-red-500 hover:bg-red-700 disabled:bg-red-200 text-neutral-100 font-bold py-2 px-4 rounded-sm hover:cursor-pointer">
      Reset
    </button>

  </div>

  <div slot="body-content"
       class="max-h-[450px] flex flex-col overflow-clip">

    <table class="w-full bg-neutral-50 dark:bg-neutral-800 table-fixed">
      <thead class="sticky top-0">
      <tr>
        <th class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          ID
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400"
        colspan="2">
          Name
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          @if(smallScreen) {
            RN
          } @else {
            Race Number
          }
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Gap
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Pit now
        </th>
        <th class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base font-medium text-neutral-700 dark:text-neutral-400">
          Shadow
        </th>
      </tr>
      </thead>
    </table>
    <div class="flex-1 overflow-y-auto">
      <table class="w-full table-fixed">
        <tbody>
        <tr *ngFor="let team of teams()"
            [ngClass]="{'bg-green-100 dark:bg-green-900 font-semibold': team.id === activeTeamId(), 'hover:bg-neutral-100 dark:hover:bg-neutral-700': team.id !== activeTeamId()}">
          <td class="py-2 px-3 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
            {{ team.id }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-left text-xs md:text-base text-neutral-900 dark:text-neutral-100"
              colspan="2">
            {{ team.name }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100 font-mono">
            {{ team.raceNumber }}
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100">
            <input
              [id]="'GapTeam_' + team.id"
              type="checkbox"
              [checked]="team.gapChartVisible"
              (change)="updateGraphTeamByRaceNumber(team)"/>
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100">
            <input
              [id]="'pitNowTeam_' + team.id"
              type="checkbox"
              [checked]="team.pitNowChartVisible"
              (change)="updatePitNowTeamByRaceNumber(team)"/>
          </td>
          <td class="py-2 border-b border-neutral-200 dark:border-neutral-400 text-center text-xs md:text-base text-neutral-900 dark:text-neutral-100">
            <input
              [id]="'shadowTeam_' + team.id"
              type="checkbox"
              [checked]="team.shadowChartVisible"
              (change)="updateShadowTeamByRaceNumber(team)"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</app-card>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src/app/team/component/team/team.component.ts", lineNumber: 18 });
})();

// src/app/gap-chart/component/gap-chart-config/gap-chart-config.component.ts
var GapChartConfigComponent = class _GapChartConfigComponent {
  lapSimulatorConfigService = inject(LapSimulatorConfigService);
  gapChartConfigService = inject(GapChartConfigService);
  referenceRaceNumber = 0;
  lapWindow = 0;
  simulatedLaps = 0;
  gapWindow = 0;
  nextPitMilliseconds = 0;
  timeLostThroughPitMilliseconds = 0;
  tooltipData = {
    footer: "",
    paragraphs: ["Actually not used for race logic"],
    title: ""
  };
  tooltipPosition = TooltipPosition.RIGHT;
  tooltipTLTPData = {
    footer: "",
    paragraphs: ["TTime Lost Through Pit"],
    title: ""
  };
  tooltipTLTPPosition = TooltipPosition.ABOVE;
  constructor() {
    effect(() => {
      const lapSimulatorConfig = this.lapSimulatorConfigService.lapSimulatorConfig();
      if (lapSimulatorConfig) {
        this.simulatedLaps = lapSimulatorConfig.simulatedLaps;
        this.referenceRaceNumber = lapSimulatorConfig.referenceRaceNumber;
        this.nextPitMilliseconds = lapSimulatorConfig.nextPitMilliseconds;
        this.timeLostThroughPitMilliseconds = lapSimulatorConfig.timeLostThroughPitMilliseconds;
      }
    });
    effect(() => {
      const config = this.gapChartConfigService.gapChartConfig();
      if (config) {
        this.lapWindow = config.lapWindow;
        this.gapWindow = config.gapWindowMilliseconds;
      }
    });
  }
  // REFERENCE RACE NUMBER
  onSubmitReferenceRaceNumber() {
    this.lapSimulatorConfigService.updateReferenceRaceNumber(this.referenceRaceNumber);
  }
  // NEXT PIT MILLISECOND RACE NUMBER
  onSubmitNextPitMilliseconds() {
    this.lapSimulatorConfigService.updateNextPitMilliseconds(this.nextPitMilliseconds);
  }
  // GAP WINDOWS
  onSubmitGapWindow() {
    this.gapChartConfigService.updateGapWindow(this.gapWindow);
  }
  // LAP WINDOW
  onSubmitLapWindow() {
    this.gapChartConfigService.updateLapWindow(this.lapWindow);
  }
  increaseLapWindow() {
    this.gapChartConfigService.updateLapWindow(this.lapWindow + 1);
  }
  decreaseLapWindow() {
    this.gapChartConfigService.updateLapWindow(this.lapWindow - 1);
  }
  // SIMULATED LAPS
  onSubmitSimulatedLaps() {
    this.lapSimulatorConfigService.updateSimulatedLaps(this.simulatedLaps);
  }
  increaseSimulatedLaps() {
    this.lapSimulatorConfigService.updateSimulatedLaps(this.simulatedLaps + 1);
  }
  decreaseSimulatedLaps() {
    this.lapSimulatorConfigService.updateSimulatedLaps(this.simulatedLaps - 1);
  }
  // TIME LOST THROUGH PIT
  onSubmitTimeLostThroughPitMilliseconds() {
    this.lapSimulatorConfigService.updateTimeLostThroughPitMilliseconds(this.timeLostThroughPitMilliseconds);
  }
  static \u0275fac = function GapChartConfigComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GapChartConfigComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GapChartConfigComponent, selectors: [["app-gap-chart-config"]], decls: 47, vars: 13, consts: [["title", "\u{1F4C8}\u2699\uFE0F Gap chart config", 3, "initiallyOpen"], ["slot", "body-content", 1, "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-end", "gap-2"], [1, "text-neutral-500", "dark:text-neutral-400", "text-left"], [1, "text-left", 3, "ngSubmit"], ["type", "number", "id", "referenceRaceNumber", "name", "referenceRaceNumber", "required", "", "min", "0", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-16", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "text-neutral-500", "dark:text-neutral-400", "text-right"], [1, "flex", "justify-end", "flex-row", "gap-1"], [1, "bg-neutral-200", "hover:bg-neutral-400", "active:bg-neutral-500", "text-black", "px-4", "rounded-sm", "hover:cursor-pointer", 3, "click"], [3, "ngSubmit"], ["type", "number", "id", "simulatedLaps", "name", "simulatedLaps", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-18", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-start", "flex-row", "gap-1"], ["type", "number", "id", "lapWindow", "name", "lapWindow", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-20", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["tooltip", "", 3, "tooltipEnabled", "tooltipData", "tooltipPosition"], [1, "text-right", 3, "ngSubmit"], ["type", "number", "id", "gapWindow", "name", "gapWindow", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-30", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "nextPitMilliseconds", "name", "nextPitMilliseconds", "required", "", "min", "1", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-30", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "timeLostThroughPitMilliseconds", "name", "timeLostThroughPitMilliseconds", "required", "", 1, "border", "rounded-lg", "px-2", "py-1", "max-w-24", "text-right", "text-neutral-900", "dark:text-neutral-100", 3, "ngModelChange", "ngModel"]], template: function GapChartConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-card", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3);
      \u0275\u0275text(5, "Reference race number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function GapChartConfigComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmitReferenceRaceNumber();
      });
      \u0275\u0275elementStart(7, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function GapChartConfigComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.referenceRaceNumber, $event) || (ctx.referenceRaceNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div")(9, "div", 6);
      \u0275\u0275text(10, "Lap simulated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
      \u0275\u0275listener("click", function GapChartConfigComponent_Template_button_click_12_listener() {
        return ctx.increaseSimulatedLaps();
      });
      \u0275\u0275text(13, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "form", 9);
      \u0275\u0275listener("ngSubmit", function GapChartConfigComponent_Template_form_ngSubmit_14_listener() {
        return ctx.onSubmitSimulatedLaps();
      });
      \u0275\u0275elementStart(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function GapChartConfigComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.simulatedLaps, $event) || (ctx.simulatedLaps = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 8);
      \u0275\u0275listener("click", function GapChartConfigComponent_Template_button_click_16_listener() {
        return ctx.decreaseSimulatedLaps();
      });
      \u0275\u0275text(17, " - ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(18, "hr");
      \u0275\u0275elementStart(19, "div", 2)(20, "div")(21, "div", 3);
      \u0275\u0275text(22, "Lap window");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "button", 8);
      \u0275\u0275listener("click", function GapChartConfigComponent_Template_button_click_24_listener() {
        return ctx.increaseLapWindow();
      });
      \u0275\u0275text(25, " + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "form", 9);
      \u0275\u0275listener("ngSubmit", function GapChartConfigComponent_Template_form_ngSubmit_26_listener() {
        return ctx.onSubmitLapWindow();
      });
      \u0275\u0275elementStart(27, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function GapChartConfigComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.lapWindow, $event) || (ctx.lapWindow = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 8);
      \u0275\u0275listener("click", function GapChartConfigComponent_Template_button_click_28_listener() {
        return ctx.decreaseLapWindow();
      });
      \u0275\u0275text(29, " - ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 13)(31, "div", 6);
      \u0275\u0275text(32, "Gap window (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "form", 14);
      \u0275\u0275listener("ngSubmit", function GapChartConfigComponent_Template_form_ngSubmit_33_listener() {
        return ctx.onSubmitGapWindow();
      });
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function GapChartConfigComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.gapWindow, $event) || (ctx.gapWindow = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(35, "hr");
      \u0275\u0275elementStart(36, "div", 2)(37, "div")(38, "div", 3);
      \u0275\u0275text(39, "Next pit (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "form", 9);
      \u0275\u0275listener("ngSubmit", function GapChartConfigComponent_Template_form_ngSubmit_40_listener() {
        return ctx.onSubmitNextPitMilliseconds();
      });
      \u0275\u0275elementStart(41, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function GapChartConfigComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.nextPitMilliseconds, $event) || (ctx.nextPitMilliseconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 6);
      \u0275\u0275text(44, "TLTP (mills)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "form", 14);
      \u0275\u0275listener("ngSubmit", function GapChartConfigComponent_Template_form_ngSubmit_45_listener() {
        return ctx.onSubmitTimeLostThroughPitMilliseconds();
      });
      \u0275\u0275elementStart(46, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function GapChartConfigComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.timeLostThroughPitMilliseconds, $event) || (ctx.timeLostThroughPitMilliseconds = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("initiallyOpen", true);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.referenceRaceNumber);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.simulatedLaps);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.lapWindow);
      \u0275\u0275advance(3);
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipData)("tooltipPosition", ctx.tooltipPosition);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.gapWindow);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.nextPitMilliseconds);
      \u0275\u0275advance();
      \u0275\u0275property("tooltipEnabled", true)("tooltipData", ctx.tooltipTLTPData)("tooltipPosition", ctx.tooltipTLTPPosition);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.timeLostThroughPitMilliseconds);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    CardComponent,
    TooltipDirective
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GapChartConfigComponent, [{
    type: Component,
    args: [{ selector: "app-gap-chart-config", imports: [
      FormsModule,
      CardComponent,
      TooltipDirective
    ], template: '<app-card\n  title="\u{1F4C8}\u2699\uFE0F Gap chart config"\n  [initiallyOpen]="true">\n\n  <div slot="body-content" class="flex flex-col gap-2">\n    <div class="flex justify-between items-end gap-2">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Reference race number</div>\n        <form (ngSubmit)="onSubmitReferenceRaceNumber()" class="text-left">\n          <input\n            type="number"\n            id="referenceRaceNumber"\n            [(ngModel)]="referenceRaceNumber"\n            name="referenceRaceNumber"\n            class="border rounded-lg px-2 py-1 max-w-16 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="0"\n          />\n        </form>\n      </div>\n\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">Lap simulated</div>\n        <div class="flex justify-end flex-row gap-1">\n          <button (click)="increaseSimulatedLaps()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitSimulatedLaps()">\n            <input\n              type="number"\n              id="simulatedLaps"\n              [(ngModel)]="simulatedLaps"\n              name="simulatedLaps"\n              class="border rounded-lg px-2 py-1 max-w-18 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              min="1"\n            />\n          </form>\n          <button (click)="decreaseSimulatedLaps()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n\n    </div>\n\n    <hr>\n\n    <div class="flex justify-between items-end gap-2">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Lap window</div>\n        <div class="flex justify-start flex-row gap-1">\n          <button (click)="increaseLapWindow()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            +\n          </button>\n          <form (ngSubmit)="onSubmitLapWindow()">\n            <input\n              type="number"\n              id="lapWindow"\n              [(ngModel)]="lapWindow"\n              name="lapWindow"\n              class="border rounded-lg px-2 py-1 max-w-20 text-right text-neutral-900 dark:text-neutral-100"\n              required\n              min="1"\n            />\n          </form>\n          <button (click)="decreaseLapWindow()"\n                  class="bg-neutral-200 hover:bg-neutral-400 active:bg-neutral-500 text-black px-4 rounded-sm hover:cursor-pointer">\n            -\n          </button>\n        </div>\n      </div>\n\n      <div tooltip [tooltipEnabled]="true" [tooltipData]="tooltipData" [tooltipPosition]="tooltipPosition">\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">Gap window (mills)</div>\n        <form (ngSubmit)="onSubmitGapWindow()" class="text-right">\n          <input\n            type="number"\n            id="gapWindow"\n            [(ngModel)]="gapWindow"\n            name="gapWindow"\n            class="border rounded-lg px-2 py-1 max-w-30 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n\n    </div>\n\n    <hr>\n\n    <div class="flex justify-between items-end gap-2">\n      <div>\n        <div class="text-neutral-500 dark:text-neutral-400 text-left">Next pit (mills)</div>\n        <form (ngSubmit)="onSubmitNextPitMilliseconds()">\n          <input\n            type="number"\n            id="nextPitMilliseconds"\n            [(ngModel)]="nextPitMilliseconds"\n            name="nextPitMilliseconds"\n            class="border rounded-lg px-2 py-1 max-w-30 text-right text-neutral-900 dark:text-neutral-100"\n            required\n            min="1"\n          />\n        </form>\n      </div>\n\n      <div tooltip [tooltipEnabled]="true" [tooltipData]="tooltipTLTPData" [tooltipPosition]="tooltipTLTPPosition">\n        <div class="text-neutral-500 dark:text-neutral-400 text-right">TLTP (mills)</div>\n        <form (ngSubmit)="onSubmitTimeLostThroughPitMilliseconds()" class="text-right">\n          <input\n            type="number"\n            id="timeLostThroughPitMilliseconds"\n            [(ngModel)]="timeLostThroughPitMilliseconds"\n            name="timeLostThroughPitMilliseconds"\n            class="border rounded-lg px-2 py-1 max-w-24 text-right text-neutral-900 dark:text-neutral-100"\n            required\n          />\n        </form>\n      </div>\n    </div>\n  </div>\n\n</app-card>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GapChartConfigComponent, { className: "GapChartConfigComponent", filePath: "src/app/gap-chart/component/gap-chart-config/gap-chart-config.component.ts", lineNumber: 22 });
})();

// src/app/chart/component/chart/chart.component.ts
var ChartComponent = class _ChartComponent {
  titleService = inject(Title);
  constructor() {
    this.titleService.setTitle("WBR - Chart");
  }
  static \u0275fac = function ChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartComponent, selectors: [["app-chart"]], decls: 10, vars: 0, consts: [[1, "p-4", "flex", "flex-row", "justify-between"], [1, "text-xl", "md:text-3xl", "dark:text-neutral-100", "text-neutral-900", "font-semibold"], [1, "mx-2", "grid", "grid-cols-1", "lg:grid-cols-7", "gap-2"], [1, "flex", "flex-col", "md:h-fit", "lg:col-span-2", "gap-2"], [1, "flex", "flex-col", "md:h-fit", "lg:col-span-5", "gap-2"]], template: function ChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "\u{1F4C8} WBR - Chart \u{1F417}");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-navigator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275element(6, "app-gap-chart-config")(7, "app-team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "app-gap-chart");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    GapChartComponent,
    NavigatorComponent,
    TeamComponent,
    GapChartConfigComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{ selector: "app-chart", imports: [
      GapChartComponent,
      NavigatorComponent,
      TeamComponent,
      GapChartConfigComponent
    ], template: '<div class="p-4 flex flex-row justify-between">\n  <div class="text-xl md:text-3xl dark:text-neutral-100 text-neutral-900 font-semibold">\u{1F4C8} WBR - Chart \u{1F417}</div>\n  <app-navigator></app-navigator>\n</div>\n\n\n<div class="mx-2 grid grid-cols-1 lg:grid-cols-7 gap-2">\n\n  <div class="flex flex-col md:h-fit lg:col-span-2 gap-2">\n\n    <app-gap-chart-config></app-gap-chart-config>\n\n    <app-team></app-team>\n\n  </div>\n\n  <div class="flex flex-col md:h-fit lg:col-span-5 gap-2">\n      <app-gap-chart></app-gap-chart>\n  </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartComponent, { className: "ChartComponent", filePath: "src/app/chart/component/chart/chart.component.ts", lineNumber: 21 });
})();
export {
  ChartComponent
};
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=chunk-TVPWY7ZH.js.map
