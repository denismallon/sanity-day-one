import { createRequire } from "node:module";
import i, { Readable } from "stream";
import r from "url";
import s, { Agent } from "http";
import n, { Agent as Agent$1 } from "https";
import c from "assert";
import e from "tty";
import t from "util";
import d from "querystring";
import crypto from "crypto";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
//#endregion
//#region node_modules/.pnpm/@sanity+functions@1.4.0_@aw_7510397bbcd438f438e3fa6c16e3aa35/node_modules/@sanity/functions/dist/definers.js
/**
* Defines a "document event" function handler.
* Returns the handler function as-is, only providing the types and doing basic validation.
*
* @param handler - The event handler function to use.
* @returns The handler function, unmodified.
*/
function documentEventHandler(handler) {
	if (typeof handler !== "function") throw new TypeError("`handler` must be a function");
	return handler;
}
//#endregion
//#region node_modules/.pnpm/get-it@8.8.0/node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js
var e$1 = !(typeof navigator > "u") && "ReactNative" === navigator.product, t$2 = { timeout: e$1 ? 6e4 : 12e4 }, r$3 = function(r) {
	const a = {
		...t$2,
		..."string" == typeof r ? { url: r } : r
	};
	if (a.timeout = n$3(a.timeout), a.query) {
		const { url: t, searchParams: r } = function(t) {
			const r = t.indexOf("?");
			if (-1 === r) return {
				url: t,
				searchParams: new URLSearchParams()
			};
			const n = t.slice(0, r), a = t.slice(r + 1);
			if (!e$1) return {
				url: n,
				searchParams: new URLSearchParams(a)
			};
			if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
			const s = new URLSearchParams();
			for (const e of a.split("&")) {
				const [t, r] = e.split("=");
				t && s.append(o$2(t), o$2(r || ""));
			}
			return {
				url: n,
				searchParams: s
			};
		}(a.url);
		for (const [e, o] of Object.entries(a.query)) {
			if (void 0 !== o) if (Array.isArray(o)) for (const t of o) r.append(e, t);
			else r.append(e, o);
			const n = r.toString();
			n && (a.url = `${t}?${n}`);
		}
	}
	return a.method = a.body && !a.method ? "POST" : (a.method || "GET").toUpperCase(), a;
};
function o$2(e) {
	return decodeURIComponent(e.replace(/\+/g, " "));
}
function n$3(e) {
	if (!1 === e || 0 === e) return !1;
	if (e.connect || e.socket) return e;
	const r = Number(e);
	return isNaN(r) ? n$3(t$2.timeout) : {
		connect: r,
		socket: r
	};
}
var a$2 = /^https?:\/\//i, s$2 = function(e) {
	if (!a$2.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
};
function c$2(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
//#endregion
//#region node_modules/.pnpm/get-it@8.8.0/node_modules/get-it/dist/_chunks-es/createRequester.js
var o$1 = [
	"request",
	"response",
	"progress",
	"error",
	"abort"
], n$2 = [
	"processOptions",
	"validateOptions",
	"interceptRequest",
	"finalizeOptions",
	"onRequest",
	"onResponse",
	"onError",
	"onReturn",
	"onHeaders"
];
function r$2(s, i) {
	const c = [], a = n$2.reduce((e, t) => (e[t] = e[t] || [], e), {
		processOptions: [r$3],
		validateOptions: [s$2]
	});
	function u(e) {
		const t = "object" == typeof e && e.callSiteStack ? e.callSiteStack : void 0, n = t ? void 0 : /* @__PURE__ */ new Error(), r = o$1.reduce((e, t) => (e[t] = function() {
			const e = /* @__PURE__ */ Object.create(null);
			let t = 0;
			return {
				publish: function(t) {
					for (const o in e) e[o](t);
				},
				subscribe: function(o) {
					const n = t++;
					return e[n] = o, function() {
						delete e[n];
					};
				}
			};
		}(), e), {}), s = ((e) => function(t, o, ...n) {
			const r = "onError" === t;
			let s = o;
			for (let o = 0; o < e[t].length && (s = (0, e[t][o])(s, ...n), !r || s); o++);
			return s;
		})(a), c = s("processOptions", e);
		s("validateOptions", c);
		const u = {
			options: c,
			channels: r,
			applyMiddleware: s
		};
		let l;
		const p = r.request.subscribe((e) => {
			l = i(e, (o, i) => ((e, o, i) => {
				let c = e, a = o;
				if (!c) try {
					a = s("onResponse", o, i);
				} catch (e) {
					a = null, c = e;
				}
				if (c = c && s("onError", c, i), c) {
					if (c instanceof Error) {
						const e = t?.stack || n?.stack;
						if ("string" == typeof e) {
							const o = e.split("\n").slice(t ? 1 : 2);
							o.length > 0 && (c.stack += "\n" + o.join("\n"));
						}
					}
					r.error.publish(c);
				} else a && r.response.publish(a);
			})(o, i, e));
		});
		r.abort.subscribe(() => {
			p(), l && l.abort();
		});
		const d = s("onReturn", r, u);
		return d === r && r.request.publish(u), d;
	}
	return u.use = function(e) {
		if (!e) throw new Error("Tried to add middleware that resolved to falsey value");
		if ("function" == typeof e) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
		if (e.onReturn && a.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
		return n$2.forEach((t) => {
			e[t] && a[t].push(e[t]);
		}), c.push(e), u;
	}, u.clone = () => r$2(c, i), s.forEach(u.use), u;
}
//#endregion
//#region node_modules/.pnpm/mimic-response@3.1.0/node_modules/mimic-response/index.js
var require_mimic_response = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var knownProperties = [
		"aborted",
		"complete",
		"headers",
		"httpVersion",
		"httpVersionMinor",
		"httpVersionMajor",
		"method",
		"rawHeaders",
		"rawTrailers",
		"setTimeout",
		"socket",
		"statusCode",
		"statusMessage",
		"trailers",
		"url"
	];
	module.exports = (fromStream, toStream) => {
		if (toStream._readableState.autoDestroy) throw new Error("The second stream must have the `autoDestroy` option set to `false`");
		const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
		const properties = {};
		for (const property of fromProperties) {
			if (property in toStream) continue;
			properties[property] = {
				get() {
					const value = fromStream[property];
					return typeof value === "function" ? value.bind(fromStream) : value;
				},
				set(value) {
					fromStream[property] = value;
				},
				enumerable: true,
				configurable: false
			};
		}
		Object.defineProperties(toStream, properties);
		fromStream.once("aborted", () => {
			toStream.destroy();
			toStream.emit("aborted");
		});
		fromStream.once("close", () => {
			if (fromStream.complete) if (toStream.readable) toStream.once("end", () => {
				toStream.emit("close");
			});
			else toStream.emit("close");
			else toStream.emit("close");
		});
		return toStream;
	};
}));
//#endregion
//#region node_modules/.pnpm/decompress-response@7.0.0/node_modules/decompress-response/index.js
var require_decompress_response = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { Transform, PassThrough } = __require("stream");
	var zlib = __require("zlib");
	var mimicResponse = require_mimic_response();
	module.exports = (response) => {
		const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
		delete response.headers["content-encoding"];
		if (![
			"gzip",
			"deflate",
			"br"
		].includes(contentEncoding)) return response;
		const isBrotli = contentEncoding === "br";
		if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
			response.destroy(/* @__PURE__ */ new Error("Brotli is not supported on Node.js < 12"));
			return response;
		}
		let isEmpty = true;
		const checker = new Transform({
			transform(data, _encoding, callback) {
				isEmpty = false;
				callback(null, data);
			},
			flush(callback) {
				callback();
			}
		});
		const finalStream = new PassThrough({
			autoDestroy: false,
			destroy(error, callback) {
				response.destroy();
				callback(error);
			}
		});
		const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
		decompressStream.once("error", (error) => {
			if (isEmpty && !response.readable) {
				finalStream.end();
				return;
			}
			finalStream.destroy(error);
		});
		mimicResponse(response, finalStream);
		response.pipe(checker).pipe(decompressStream).pipe(finalStream);
		return finalStream;
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = __require("stream");
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			enumerableOnly && (symbols = symbols.filter(function(sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			})), keys.push.apply(keys, symbols);
		}
		return keys;
	}
	function _objectSpread(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = null != arguments[i] ? arguments[i] : {};
			i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
				_defineProperty(target, key, source[key]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
		return target;
	}
	function _defineProperty(obj, key, value) {
		key = _toPropertyKey(key);
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	}
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _toPropertyKey(arg) {
		var key = _toPrimitive(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== void 0) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	var Buffer$4 = __require("buffer").Buffer;
	var inspect = __require("util").inspect;
	var custom = inspect && inspect.custom || "inspect";
	function copyBuffer(src, target, offset) {
		Buffer$4.prototype.copy.call(src, target, offset);
	}
	module.exports = /*#__PURE__*/ function() {
		function BufferList() {
			_classCallCheck(this, BufferList);
			this.head = null;
			this.tail = null;
			this.length = 0;
		}
		_createClass(BufferList, [
			{
				key: "push",
				value: function push(v) {
					var entry = {
						data: v,
						next: null
					};
					if (this.length > 0) this.tail.next = entry;
					else this.head = entry;
					this.tail = entry;
					++this.length;
				}
			},
			{
				key: "unshift",
				value: function unshift(v) {
					var entry = {
						data: v,
						next: this.head
					};
					if (this.length === 0) this.tail = entry;
					this.head = entry;
					++this.length;
				}
			},
			{
				key: "shift",
				value: function shift() {
					if (this.length === 0) return;
					var ret = this.head.data;
					if (this.length === 1) this.head = this.tail = null;
					else this.head = this.head.next;
					--this.length;
					return ret;
				}
			},
			{
				key: "clear",
				value: function clear() {
					this.head = this.tail = null;
					this.length = 0;
				}
			},
			{
				key: "join",
				value: function join(s) {
					if (this.length === 0) return "";
					var p = this.head;
					var ret = "" + p.data;
					while (p = p.next) ret += s + p.data;
					return ret;
				}
			},
			{
				key: "concat",
				value: function concat(n) {
					if (this.length === 0) return Buffer$4.alloc(0);
					var ret = Buffer$4.allocUnsafe(n >>> 0);
					var p = this.head;
					var i = 0;
					while (p) {
						copyBuffer(p.data, ret, i);
						i += p.data.length;
						p = p.next;
					}
					return ret;
				}
			},
			{
				key: "consume",
				value: function consume(n, hasStrings) {
					var ret;
					if (n < this.head.data.length) {
						ret = this.head.data.slice(0, n);
						this.head.data = this.head.data.slice(n);
					} else if (n === this.head.data.length) ret = this.shift();
					else ret = hasStrings ? this._getString(n) : this._getBuffer(n);
					return ret;
				}
			},
			{
				key: "first",
				value: function first() {
					return this.head.data;
				}
			},
			{
				key: "_getString",
				value: function _getString(n) {
					var p = this.head;
					var c = 1;
					var ret = p.data;
					n -= ret.length;
					while (p = p.next) {
						var str = p.data;
						var nb = n > str.length ? str.length : n;
						if (nb === str.length) ret += str;
						else ret += str.slice(0, n);
						n -= nb;
						if (n === 0) {
							if (nb === str.length) {
								++c;
								if (p.next) this.head = p.next;
								else this.head = this.tail = null;
							} else {
								this.head = p;
								p.data = str.slice(nb);
							}
							break;
						}
						++c;
					}
					this.length -= c;
					return ret;
				}
			},
			{
				key: "_getBuffer",
				value: function _getBuffer(n) {
					var ret = Buffer$4.allocUnsafe(n);
					var p = this.head;
					var c = 1;
					p.data.copy(ret);
					n -= p.data.length;
					while (p = p.next) {
						var buf = p.data;
						var nb = n > buf.length ? buf.length : n;
						buf.copy(ret, ret.length - n, 0, nb);
						n -= nb;
						if (n === 0) {
							if (nb === buf.length) {
								++c;
								if (p.next) this.head = p.next;
								else this.head = this.tail = null;
							} else {
								this.head = p;
								p.data = buf.slice(nb);
							}
							break;
						}
						++c;
					}
					this.length -= c;
					return ret;
				}
			},
			{
				key: custom,
				value: function value(_, options) {
					return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
						depth: 0,
						customInspect: false
					}));
				}
			}
		]);
		return BufferList;
	}();
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function destroy(err, cb) {
		var _this = this;
		var readableDestroyed = this._readableState && this._readableState.destroyed;
		var writableDestroyed = this._writableState && this._writableState.destroyed;
		if (readableDestroyed || writableDestroyed) {
			if (cb) cb(err);
			else if (err) {
				if (!this._writableState) process.nextTick(emitErrorNT, this, err);
				else if (!this._writableState.errorEmitted) {
					this._writableState.errorEmitted = true;
					process.nextTick(emitErrorNT, this, err);
				}
			}
			return this;
		}
		if (this._readableState) this._readableState.destroyed = true;
		if (this._writableState) this._writableState.destroyed = true;
		this._destroy(err || null, function(err) {
			if (!cb && err) if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err);
			else if (!_this._writableState.errorEmitted) {
				_this._writableState.errorEmitted = true;
				process.nextTick(emitErrorAndCloseNT, _this, err);
			} else process.nextTick(emitCloseNT, _this);
			else if (cb) {
				process.nextTick(emitCloseNT, _this);
				cb(err);
			} else process.nextTick(emitCloseNT, _this);
		});
		return this;
	}
	function emitErrorAndCloseNT(self, err) {
		emitErrorNT(self, err);
		emitCloseNT(self);
	}
	function emitCloseNT(self) {
		if (self._writableState && !self._writableState.emitClose) return;
		if (self._readableState && !self._readableState.emitClose) return;
		self.emit("close");
	}
	function undestroy() {
		if (this._readableState) {
			this._readableState.destroyed = false;
			this._readableState.reading = false;
			this._readableState.ended = false;
			this._readableState.endEmitted = false;
		}
		if (this._writableState) {
			this._writableState.destroyed = false;
			this._writableState.ended = false;
			this._writableState.ending = false;
			this._writableState.finalCalled = false;
			this._writableState.prefinished = false;
			this._writableState.finished = false;
			this._writableState.errorEmitted = false;
		}
	}
	function emitErrorNT(self, err) {
		self.emit("error", err);
	}
	function errorOrDestroy(stream, err) {
		var rState = stream._readableState;
		var wState = stream._writableState;
		if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
		else stream.emit("error", err);
	}
	module.exports = {
		destroy,
		undestroy,
		errorOrDestroy
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/errors.js
var require_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var codes = {};
	function createErrorType(code, message, Base) {
		if (!Base) Base = Error;
		function getMessage(arg1, arg2, arg3) {
			if (typeof message === "string") return message;
			else return message(arg1, arg2, arg3);
		}
		class NodeError extends Base {
			constructor(arg1, arg2, arg3) {
				super(getMessage(arg1, arg2, arg3));
			}
		}
		NodeError.prototype.name = Base.name;
		NodeError.prototype.code = code;
		codes[code] = NodeError;
	}
	function oneOf(expected, thing) {
		if (Array.isArray(expected)) {
			const len = expected.length;
			expected = expected.map((i) => String(i));
			if (len > 2) return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
			else if (len === 2) return `one of ${thing} ${expected[0]} or ${expected[1]}`;
			else return `of ${thing} ${expected[0]}`;
		} else return `of ${thing} ${String(expected)}`;
	}
	function startsWith(str, search, pos) {
		return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	}
	function endsWith(str, search, this_len) {
		if (this_len === void 0 || this_len > str.length) this_len = str.length;
		return str.substring(this_len - search.length, this_len) === search;
	}
	function includes(str, search, start) {
		if (typeof start !== "number") start = 0;
		if (start + search.length > str.length) return false;
		else return str.indexOf(search, start) !== -1;
	}
	createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
		return "The value \"" + value + "\" is invalid for option \"" + name + "\"";
	}, TypeError);
	createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
		let determiner;
		if (typeof expected === "string" && startsWith(expected, "not ")) {
			determiner = "must not be";
			expected = expected.replace(/^not /, "");
		} else determiner = "must be";
		let msg;
		if (endsWith(name, " argument")) msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
		else msg = `The "${name}" ${includes(name, ".") ? "property" : "argument"} ${determiner} ${oneOf(expected, "type")}`;
		msg += `. Received type ${typeof actual}`;
		return msg;
	}, TypeError);
	createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
	createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
		return "The " + name + " method is not implemented";
	});
	createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
	createErrorType("ERR_STREAM_DESTROYED", function(name) {
		return "Cannot call " + name + " after a stream was destroyed";
	});
	createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
	createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
	createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
	createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
	createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
		return "Unknown encoding: " + arg;
	}, TypeError);
	createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
	module.exports.codes = codes;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/state.js
var require_state = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
	function highWaterMarkFrom(options, isDuplex, duplexKey) {
		return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
	}
	function getHighWaterMark(state, options, duplexKey, isDuplex) {
		var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
		if (hwm != null) {
			if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) throw new ERR_INVALID_OPT_VALUE(isDuplex ? duplexKey : "highWaterMark", hwm);
			return Math.floor(hwm);
		}
		return state.objectMode ? 16 : 16 * 1024;
	}
	module.exports = { getHighWaterMark };
}));
//#endregion
//#region node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (typeof Object.create === "function") module.exports = function inherits(ctor, superCtor) {
		if (superCtor) {
			ctor.super_ = superCtor;
			ctor.prototype = Object.create(superCtor.prototype, { constructor: {
				value: ctor,
				enumerable: false,
				writable: true,
				configurable: true
			} });
		}
	};
	else module.exports = function inherits(ctor, superCtor) {
		if (superCtor) {
			ctor.super_ = superCtor;
			var TempCtor = function() {};
			TempCtor.prototype = superCtor.prototype;
			ctor.prototype = new TempCtor();
			ctor.prototype.constructor = ctor;
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js
var require_inherits = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	try {
		var util$1 = __require("util");
		/* istanbul ignore next */
		if (typeof util$1.inherits !== "function") throw "";
		module.exports = util$1.inherits;
	} catch (e) {
		/* istanbul ignore next */
		module.exports = require_inherits_browser();
	}
}));
//#endregion
//#region node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/node.js
var require_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* For Node.js, simply re-export the core `util.deprecate` function.
	*/
	module.exports = __require("util").deprecate;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_writable.js
var require__stream_writable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Writable;
	function CorkedRequest(state) {
		var _this = this;
		this.next = null;
		this.entry = null;
		this.finish = function() {
			onCorkedFinish(_this, state);
		};
	}
	var Duplex;
	Writable.WritableState = WritableState;
	var internalUtil = { deprecate: require_node() };
	var Stream = require_stream();
	var Buffer$3 = __require("buffer").Buffer;
	var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
	function _uint8ArrayToBuffer(chunk) {
		return Buffer$3.from(chunk);
	}
	function _isUint8Array(obj) {
		return Buffer$3.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	var destroyImpl = require_destroy();
	var getHighWaterMark = require_state().getHighWaterMark;
	var _require$codes = require_errors().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	require_inherits()(Writable, Stream);
	function nop() {}
	function WritableState(options, stream, isDuplex) {
		Duplex = Duplex || require__stream_duplex();
		options = options || {};
		if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
		this.objectMode = !!options.objectMode;
		if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
		this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
		this.finalCalled = false;
		this.needDrain = false;
		this.ending = false;
		this.ended = false;
		this.finished = false;
		this.destroyed = false;
		var noDecode = options.decodeStrings === false;
		this.decodeStrings = !noDecode;
		this.defaultEncoding = options.defaultEncoding || "utf8";
		this.length = 0;
		this.writing = false;
		this.corked = 0;
		this.sync = true;
		this.bufferProcessing = false;
		this.onwrite = function(er) {
			onwrite(stream, er);
		};
		this.writecb = null;
		this.writelen = 0;
		this.bufferedRequest = null;
		this.lastBufferedRequest = null;
		this.pendingcb = 0;
		this.prefinished = false;
		this.errorEmitted = false;
		this.emitClose = options.emitClose !== false;
		this.autoDestroy = !!options.autoDestroy;
		this.bufferedRequestCount = 0;
		this.corkedRequestsFree = new CorkedRequest(this);
	}
	WritableState.prototype.getBuffer = function getBuffer() {
		var current = this.bufferedRequest;
		var out = [];
		while (current) {
			out.push(current);
			current = current.next;
		}
		return out;
	};
	(function() {
		try {
			Object.defineProperty(WritableState.prototype, "buffer", { get: internalUtil.deprecate(function writableStateBufferGetter() {
				return this.getBuffer();
			}, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
		} catch (_) {}
	})();
	var realHasInstance;
	if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
		realHasInstance = Function.prototype[Symbol.hasInstance];
		Object.defineProperty(Writable, Symbol.hasInstance, { value: function value(object) {
			if (realHasInstance.call(this, object)) return true;
			if (this !== Writable) return false;
			return object && object._writableState instanceof WritableState;
		} });
	} else realHasInstance = function realHasInstance(object) {
		return object instanceof this;
	};
	function Writable(options) {
		Duplex = Duplex || require__stream_duplex();
		var isDuplex = this instanceof Duplex;
		if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
		this._writableState = new WritableState(options, this, isDuplex);
		this.writable = true;
		if (options) {
			if (typeof options.write === "function") this._write = options.write;
			if (typeof options.writev === "function") this._writev = options.writev;
			if (typeof options.destroy === "function") this._destroy = options.destroy;
			if (typeof options.final === "function") this._final = options.final;
		}
		Stream.call(this);
	}
	Writable.prototype.pipe = function() {
		errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
	};
	function writeAfterEnd(stream, cb) {
		var er = new ERR_STREAM_WRITE_AFTER_END();
		errorOrDestroy(stream, er);
		process.nextTick(cb, er);
	}
	function validChunk(stream, state, chunk, cb) {
		var er;
		if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
		else if (typeof chunk !== "string" && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
		if (er) {
			errorOrDestroy(stream, er);
			process.nextTick(cb, er);
			return false;
		}
		return true;
	}
	Writable.prototype.write = function(chunk, encoding, cb) {
		var state = this._writableState;
		var ret = false;
		var isBuf = !state.objectMode && _isUint8Array(chunk);
		if (isBuf && !Buffer$3.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
		if (typeof encoding === "function") {
			cb = encoding;
			encoding = null;
		}
		if (isBuf) encoding = "buffer";
		else if (!encoding) encoding = state.defaultEncoding;
		if (typeof cb !== "function") cb = nop;
		if (state.ending) writeAfterEnd(this, cb);
		else if (isBuf || validChunk(this, state, chunk, cb)) {
			state.pendingcb++;
			ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
		}
		return ret;
	};
	Writable.prototype.cork = function() {
		this._writableState.corked++;
	};
	Writable.prototype.uncork = function() {
		var state = this._writableState;
		if (state.corked) {
			state.corked--;
			if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
		}
	};
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
		if (typeof encoding === "string") encoding = encoding.toLowerCase();
		if (!([
			"hex",
			"utf8",
			"utf-8",
			"ascii",
			"binary",
			"base64",
			"ucs2",
			"ucs-2",
			"utf16le",
			"utf-16le",
			"raw"
		].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
		this._writableState.defaultEncoding = encoding;
		return this;
	};
	Object.defineProperty(Writable.prototype, "writableBuffer", {
		enumerable: false,
		get: function get() {
			return this._writableState && this._writableState.getBuffer();
		}
	});
	function decodeChunk(state, chunk, encoding) {
		if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = Buffer$3.from(chunk, encoding);
		return chunk;
	}
	Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
		enumerable: false,
		get: function get() {
			return this._writableState.highWaterMark;
		}
	});
	function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
		if (!isBuf) {
			var newChunk = decodeChunk(state, chunk, encoding);
			if (chunk !== newChunk) {
				isBuf = true;
				encoding = "buffer";
				chunk = newChunk;
			}
		}
		var len = state.objectMode ? 1 : chunk.length;
		state.length += len;
		var ret = state.length < state.highWaterMark;
		if (!ret) state.needDrain = true;
		if (state.writing || state.corked) {
			var last = state.lastBufferedRequest;
			state.lastBufferedRequest = {
				chunk,
				encoding,
				isBuf,
				callback: cb,
				next: null
			};
			if (last) last.next = state.lastBufferedRequest;
			else state.bufferedRequest = state.lastBufferedRequest;
			state.bufferedRequestCount += 1;
		} else doWrite(stream, state, false, len, chunk, encoding, cb);
		return ret;
	}
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
		state.writelen = len;
		state.writecb = cb;
		state.writing = true;
		state.sync = true;
		if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
		else if (writev) stream._writev(chunk, state.onwrite);
		else stream._write(chunk, encoding, state.onwrite);
		state.sync = false;
	}
	function onwriteError(stream, state, sync, er, cb) {
		--state.pendingcb;
		if (sync) {
			process.nextTick(cb, er);
			process.nextTick(finishMaybe, stream, state);
			stream._writableState.errorEmitted = true;
			errorOrDestroy(stream, er);
		} else {
			cb(er);
			stream._writableState.errorEmitted = true;
			errorOrDestroy(stream, er);
			finishMaybe(stream, state);
		}
	}
	function onwriteStateUpdate(state) {
		state.writing = false;
		state.writecb = null;
		state.length -= state.writelen;
		state.writelen = 0;
	}
	function onwrite(stream, er) {
		var state = stream._writableState;
		var sync = state.sync;
		var cb = state.writecb;
		if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
		onwriteStateUpdate(state);
		if (er) onwriteError(stream, state, sync, er, cb);
		else {
			var finished = needFinish(state) || stream.destroyed;
			if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
			if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
			else afterWrite(stream, state, finished, cb);
		}
	}
	function afterWrite(stream, state, finished, cb) {
		if (!finished) onwriteDrain(stream, state);
		state.pendingcb--;
		cb();
		finishMaybe(stream, state);
	}
	function onwriteDrain(stream, state) {
		if (state.length === 0 && state.needDrain) {
			state.needDrain = false;
			stream.emit("drain");
		}
	}
	function clearBuffer(stream, state) {
		state.bufferProcessing = true;
		var entry = state.bufferedRequest;
		if (stream._writev && entry && entry.next) {
			var l = state.bufferedRequestCount;
			var buffer = new Array(l);
			var holder = state.corkedRequestsFree;
			holder.entry = entry;
			var count = 0;
			var allBuffers = true;
			while (entry) {
				buffer[count] = entry;
				if (!entry.isBuf) allBuffers = false;
				entry = entry.next;
				count += 1;
			}
			buffer.allBuffers = allBuffers;
			doWrite(stream, state, true, state.length, buffer, "", holder.finish);
			state.pendingcb++;
			state.lastBufferedRequest = null;
			if (holder.next) {
				state.corkedRequestsFree = holder.next;
				holder.next = null;
			} else state.corkedRequestsFree = new CorkedRequest(state);
			state.bufferedRequestCount = 0;
		} else {
			while (entry) {
				var chunk = entry.chunk;
				var encoding = entry.encoding;
				var cb = entry.callback;
				doWrite(stream, state, false, state.objectMode ? 1 : chunk.length, chunk, encoding, cb);
				entry = entry.next;
				state.bufferedRequestCount--;
				if (state.writing) break;
			}
			if (entry === null) state.lastBufferedRequest = null;
		}
		state.bufferedRequest = entry;
		state.bufferProcessing = false;
	}
	Writable.prototype._write = function(chunk, encoding, cb) {
		cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
	};
	Writable.prototype._writev = null;
	Writable.prototype.end = function(chunk, encoding, cb) {
		var state = this._writableState;
		if (typeof chunk === "function") {
			cb = chunk;
			chunk = null;
			encoding = null;
		} else if (typeof encoding === "function") {
			cb = encoding;
			encoding = null;
		}
		if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
		if (state.corked) {
			state.corked = 1;
			this.uncork();
		}
		if (!state.ending) endWritable(this, state, cb);
		return this;
	};
	Object.defineProperty(Writable.prototype, "writableLength", {
		enumerable: false,
		get: function get() {
			return this._writableState.length;
		}
	});
	function needFinish(state) {
		return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	function callFinal(stream, state) {
		stream._final(function(err) {
			state.pendingcb--;
			if (err) errorOrDestroy(stream, err);
			state.prefinished = true;
			stream.emit("prefinish");
			finishMaybe(stream, state);
		});
	}
	function prefinish(stream, state) {
		if (!state.prefinished && !state.finalCalled) if (typeof stream._final === "function" && !state.destroyed) {
			state.pendingcb++;
			state.finalCalled = true;
			process.nextTick(callFinal, stream, state);
		} else {
			state.prefinished = true;
			stream.emit("prefinish");
		}
	}
	function finishMaybe(stream, state) {
		var need = needFinish(state);
		if (need) {
			prefinish(stream, state);
			if (state.pendingcb === 0) {
				state.finished = true;
				stream.emit("finish");
				if (state.autoDestroy) {
					var rState = stream._readableState;
					if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
				}
			}
		}
		return need;
	}
	function endWritable(stream, state, cb) {
		state.ending = true;
		finishMaybe(stream, state);
		if (cb) if (state.finished) process.nextTick(cb);
		else stream.once("finish", cb);
		state.ended = true;
		stream.writable = false;
	}
	function onCorkedFinish(corkReq, state, err) {
		var entry = corkReq.entry;
		corkReq.entry = null;
		while (entry) {
			var cb = entry.callback;
			state.pendingcb--;
			cb(err);
			entry = entry.next;
		}
		state.corkedRequestsFree.next = corkReq;
	}
	Object.defineProperty(Writable.prototype, "destroyed", {
		enumerable: false,
		get: function get() {
			if (this._writableState === void 0) return false;
			return this._writableState.destroyed;
		},
		set: function set(value) {
			if (!this._writableState) return;
			this._writableState.destroyed = value;
		}
	});
	Writable.prototype.destroy = destroyImpl.destroy;
	Writable.prototype._undestroy = destroyImpl.undestroy;
	Writable.prototype._destroy = function(err, cb) {
		cb(err);
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_duplex.js
var require__stream_duplex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var objectKeys = Object.keys || function(obj) {
		var keys = [];
		for (var key in obj) keys.push(key);
		return keys;
	};
	module.exports = Duplex;
	var Readable = require__stream_readable();
	var Writable = require__stream_writable();
	require_inherits()(Duplex, Readable);
	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
		var method = keys[v];
		if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	function Duplex(options) {
		if (!(this instanceof Duplex)) return new Duplex(options);
		Readable.call(this, options);
		Writable.call(this, options);
		this.allowHalfOpen = true;
		if (options) {
			if (options.readable === false) this.readable = false;
			if (options.writable === false) this.writable = false;
			if (options.allowHalfOpen === false) {
				this.allowHalfOpen = false;
				this.once("end", onend);
			}
		}
	}
	Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
		enumerable: false,
		get: function get() {
			return this._writableState.highWaterMark;
		}
	});
	Object.defineProperty(Duplex.prototype, "writableBuffer", {
		enumerable: false,
		get: function get() {
			return this._writableState && this._writableState.getBuffer();
		}
	});
	Object.defineProperty(Duplex.prototype, "writableLength", {
		enumerable: false,
		get: function get() {
			return this._writableState.length;
		}
	});
	function onend() {
		if (this._writableState.ended) return;
		process.nextTick(onEndNT, this);
	}
	function onEndNT(self) {
		self.end();
	}
	Object.defineProperty(Duplex.prototype, "destroyed", {
		enumerable: false,
		get: function get() {
			if (this._readableState === void 0 || this._writableState === void 0) return false;
			return this._readableState.destroyed && this._writableState.destroyed;
		},
		set: function set(value) {
			if (this._readableState === void 0 || this._writableState === void 0) return;
			this._readableState.destroyed = value;
			this._writableState.destroyed = value;
		}
	});
}));
//#endregion
//#region node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js
var require_safe_buffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
	var buffer = __require("buffer");
	var Buffer = buffer.Buffer;
	function copyProps(src, dst) {
		for (var key in src) dst[key] = src[key];
	}
	if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
	else {
		copyProps(buffer, exports);
		exports.Buffer = SafeBuffer;
	}
	function SafeBuffer(arg, encodingOrOffset, length) {
		return Buffer(arg, encodingOrOffset, length);
	}
	SafeBuffer.prototype = Object.create(Buffer.prototype);
	copyProps(Buffer, SafeBuffer);
	SafeBuffer.from = function(arg, encodingOrOffset, length) {
		if (typeof arg === "number") throw new TypeError("Argument must not be a number");
		return Buffer(arg, encodingOrOffset, length);
	};
	SafeBuffer.alloc = function(size, fill, encoding) {
		if (typeof size !== "number") throw new TypeError("Argument must be a number");
		var buf = Buffer(size);
		if (fill !== void 0) if (typeof encoding === "string") buf.fill(fill, encoding);
		else buf.fill(fill);
		else buf.fill(0);
		return buf;
	};
	SafeBuffer.allocUnsafe = function(size) {
		if (typeof size !== "number") throw new TypeError("Argument must be a number");
		return Buffer(size);
	};
	SafeBuffer.allocUnsafeSlow = function(size) {
		if (typeof size !== "number") throw new TypeError("Argument must be a number");
		return buffer.SlowBuffer(size);
	};
}));
//#endregion
//#region node_modules/.pnpm/string_decoder@1.3.0/node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Buffer = require_safe_buffer().Buffer;
	var isEncoding = Buffer.isEncoding || function(encoding) {
		encoding = "" + encoding;
		switch (encoding && encoding.toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
			case "raw": return true;
			default: return false;
		}
	};
	function _normalizeEncoding(enc) {
		if (!enc) return "utf8";
		var retried;
		while (true) switch (enc) {
			case "utf8":
			case "utf-8": return "utf8";
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return "utf16le";
			case "latin1":
			case "binary": return "latin1";
			case "base64":
			case "ascii":
			case "hex": return enc;
			default:
				if (retried) return;
				enc = ("" + enc).toLowerCase();
				retried = true;
		}
	}
	function normalizeEncoding(enc) {
		var nenc = _normalizeEncoding(enc);
		if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
		return nenc || enc;
	}
	exports.StringDecoder = StringDecoder;
	function StringDecoder(encoding) {
		this.encoding = normalizeEncoding(encoding);
		var nb;
		switch (this.encoding) {
			case "utf16le":
				this.text = utf16Text;
				this.end = utf16End;
				nb = 4;
				break;
			case "utf8":
				this.fillLast = utf8FillLast;
				nb = 4;
				break;
			case "base64":
				this.text = base64Text;
				this.end = base64End;
				nb = 3;
				break;
			default:
				this.write = simpleWrite;
				this.end = simpleEnd;
				return;
		}
		this.lastNeed = 0;
		this.lastTotal = 0;
		this.lastChar = Buffer.allocUnsafe(nb);
	}
	StringDecoder.prototype.write = function(buf) {
		if (buf.length === 0) return "";
		var r;
		var i;
		if (this.lastNeed) {
			r = this.fillLast(buf);
			if (r === void 0) return "";
			i = this.lastNeed;
			this.lastNeed = 0;
		} else i = 0;
		if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
		return r || "";
	};
	StringDecoder.prototype.end = utf8End;
	StringDecoder.prototype.text = utf8Text;
	StringDecoder.prototype.fillLast = function(buf) {
		if (this.lastNeed <= buf.length) {
			buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
			return this.lastChar.toString(this.encoding, 0, this.lastTotal);
		}
		buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
		this.lastNeed -= buf.length;
	};
	function utf8CheckByte(byte) {
		if (byte <= 127) return 0;
		else if (byte >> 5 === 6) return 2;
		else if (byte >> 4 === 14) return 3;
		else if (byte >> 3 === 30) return 4;
		return byte >> 6 === 2 ? -1 : -2;
	}
	function utf8CheckIncomplete(self, buf, i) {
		var j = buf.length - 1;
		if (j < i) return 0;
		var nb = utf8CheckByte(buf[j]);
		if (nb >= 0) {
			if (nb > 0) self.lastNeed = nb - 1;
			return nb;
		}
		if (--j < i || nb === -2) return 0;
		nb = utf8CheckByte(buf[j]);
		if (nb >= 0) {
			if (nb > 0) self.lastNeed = nb - 2;
			return nb;
		}
		if (--j < i || nb === -2) return 0;
		nb = utf8CheckByte(buf[j]);
		if (nb >= 0) {
			if (nb > 0) if (nb === 2) nb = 0;
			else self.lastNeed = nb - 3;
			return nb;
		}
		return 0;
	}
	function utf8CheckExtraBytes(self, buf, p) {
		if ((buf[0] & 192) !== 128) {
			self.lastNeed = 0;
			return "�";
		}
		if (self.lastNeed > 1 && buf.length > 1) {
			if ((buf[1] & 192) !== 128) {
				self.lastNeed = 1;
				return "�";
			}
			if (self.lastNeed > 2 && buf.length > 2) {
				if ((buf[2] & 192) !== 128) {
					self.lastNeed = 2;
					return "�";
				}
			}
		}
	}
	function utf8FillLast(buf) {
		var p = this.lastTotal - this.lastNeed;
		var r = utf8CheckExtraBytes(this, buf, p);
		if (r !== void 0) return r;
		if (this.lastNeed <= buf.length) {
			buf.copy(this.lastChar, p, 0, this.lastNeed);
			return this.lastChar.toString(this.encoding, 0, this.lastTotal);
		}
		buf.copy(this.lastChar, p, 0, buf.length);
		this.lastNeed -= buf.length;
	}
	function utf8Text(buf, i) {
		var total = utf8CheckIncomplete(this, buf, i);
		if (!this.lastNeed) return buf.toString("utf8", i);
		this.lastTotal = total;
		var end = buf.length - (total - this.lastNeed);
		buf.copy(this.lastChar, 0, end);
		return buf.toString("utf8", i, end);
	}
	function utf8End(buf) {
		var r = buf && buf.length ? this.write(buf) : "";
		if (this.lastNeed) return r + "�";
		return r;
	}
	function utf16Text(buf, i) {
		if ((buf.length - i) % 2 === 0) {
			var r = buf.toString("utf16le", i);
			if (r) {
				var c = r.charCodeAt(r.length - 1);
				if (c >= 55296 && c <= 56319) {
					this.lastNeed = 2;
					this.lastTotal = 4;
					this.lastChar[0] = buf[buf.length - 2];
					this.lastChar[1] = buf[buf.length - 1];
					return r.slice(0, -1);
				}
			}
			return r;
		}
		this.lastNeed = 1;
		this.lastTotal = 2;
		this.lastChar[0] = buf[buf.length - 1];
		return buf.toString("utf16le", i, buf.length - 1);
	}
	function utf16End(buf) {
		var r = buf && buf.length ? this.write(buf) : "";
		if (this.lastNeed) {
			var end = this.lastTotal - this.lastNeed;
			return r + this.lastChar.toString("utf16le", 0, end);
		}
		return r;
	}
	function base64Text(buf, i) {
		var n = (buf.length - i) % 3;
		if (n === 0) return buf.toString("base64", i);
		this.lastNeed = 3 - n;
		this.lastTotal = 3;
		if (n === 1) this.lastChar[0] = buf[buf.length - 1];
		else {
			this.lastChar[0] = buf[buf.length - 2];
			this.lastChar[1] = buf[buf.length - 1];
		}
		return buf.toString("base64", i, buf.length - n);
	}
	function base64End(buf) {
		var r = buf && buf.length ? this.write(buf) : "";
		if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
		return r;
	}
	function simpleWrite(buf) {
		return buf.toString(this.encoding);
	}
	function simpleEnd(buf) {
		return buf && buf.length ? this.write(buf) : "";
	}
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
	function once(callback) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			callback.apply(this, args);
		};
	}
	function noop() {}
	function isRequest(stream) {
		return stream.setHeader && typeof stream.abort === "function";
	}
	function eos(stream, opts, callback) {
		if (typeof opts === "function") return eos(stream, null, opts);
		if (!opts) opts = {};
		callback = once(callback || noop);
		var readable = opts.readable || opts.readable !== false && stream.readable;
		var writable = opts.writable || opts.writable !== false && stream.writable;
		var onlegacyfinish = function onlegacyfinish() {
			if (!stream.writable) onfinish();
		};
		var writableEnded = stream._writableState && stream._writableState.finished;
		var onfinish = function onfinish() {
			writable = false;
			writableEnded = true;
			if (!readable) callback.call(stream);
		};
		var readableEnded = stream._readableState && stream._readableState.endEmitted;
		var onend = function onend() {
			readable = false;
			readableEnded = true;
			if (!writable) callback.call(stream);
		};
		var onerror = function onerror(err) {
			callback.call(stream, err);
		};
		var onclose = function onclose() {
			var err;
			if (readable && !readableEnded) {
				if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
				return callback.call(stream, err);
			}
			if (writable && !writableEnded) {
				if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
				return callback.call(stream, err);
			}
		};
		var onrequest = function onrequest() {
			stream.req.on("finish", onfinish);
		};
		if (isRequest(stream)) {
			stream.on("complete", onfinish);
			stream.on("abort", onclose);
			if (stream.req) onrequest();
			else stream.on("request", onrequest);
		} else if (writable && !stream._writableState) {
			stream.on("end", onlegacyfinish);
			stream.on("close", onlegacyfinish);
		}
		stream.on("end", onend);
		stream.on("finish", onfinish);
		if (opts.error !== false) stream.on("error", onerror);
		stream.on("close", onclose);
		return function() {
			stream.removeListener("complete", onfinish);
			stream.removeListener("abort", onclose);
			stream.removeListener("request", onrequest);
			if (stream.req) stream.req.removeListener("finish", onfinish);
			stream.removeListener("end", onlegacyfinish);
			stream.removeListener("close", onlegacyfinish);
			stream.removeListener("finish", onfinish);
			stream.removeListener("end", onend);
			stream.removeListener("error", onerror);
			stream.removeListener("close", onclose);
		};
	}
	module.exports = eos;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var _Object$setPrototypeO;
	function _defineProperty(obj, key, value) {
		key = _toPropertyKey(key);
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	}
	function _toPropertyKey(arg) {
		var key = _toPrimitive(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== void 0) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	var finished = require_end_of_stream();
	var kLastResolve = Symbol("lastResolve");
	var kLastReject = Symbol("lastReject");
	var kError = Symbol("error");
	var kEnded = Symbol("ended");
	var kLastPromise = Symbol("lastPromise");
	var kHandlePromise = Symbol("handlePromise");
	var kStream = Symbol("stream");
	function createIterResult(value, done) {
		return {
			value,
			done
		};
	}
	function readAndResolve(iter) {
		var resolve = iter[kLastResolve];
		if (resolve !== null) {
			var data = iter[kStream].read();
			if (data !== null) {
				iter[kLastPromise] = null;
				iter[kLastResolve] = null;
				iter[kLastReject] = null;
				resolve(createIterResult(data, false));
			}
		}
	}
	function onReadable(iter) {
		process.nextTick(readAndResolve, iter);
	}
	function wrapForNext(lastPromise, iter) {
		return function(resolve, reject) {
			lastPromise.then(function() {
				if (iter[kEnded]) {
					resolve(createIterResult(void 0, true));
					return;
				}
				iter[kHandlePromise](resolve, reject);
			}, reject);
		};
	}
	var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
	var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
		get stream() {
			return this[kStream];
		},
		next: function next() {
			var _this = this;
			var error = this[kError];
			if (error !== null) return Promise.reject(error);
			if (this[kEnded]) return Promise.resolve(createIterResult(void 0, true));
			if (this[kStream].destroyed) return new Promise(function(resolve, reject) {
				process.nextTick(function() {
					if (_this[kError]) reject(_this[kError]);
					else resolve(createIterResult(void 0, true));
				});
			});
			var lastPromise = this[kLastPromise];
			var promise;
			if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
			else {
				var data = this[kStream].read();
				if (data !== null) return Promise.resolve(createIterResult(data, false));
				promise = new Promise(this[kHandlePromise]);
			}
			this[kLastPromise] = promise;
			return promise;
		}
	}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
		return this;
	}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
		var _this2 = this;
		return new Promise(function(resolve, reject) {
			_this2[kStream].destroy(null, function(err) {
				if (err) {
					reject(err);
					return;
				}
				resolve(createIterResult(void 0, true));
			});
		});
	}), _Object$setPrototypeO), AsyncIteratorPrototype);
	module.exports = function createReadableStreamAsyncIterator(stream) {
		var _Object$create;
		var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
			value: stream,
			writable: true
		}), _defineProperty(_Object$create, kLastResolve, {
			value: null,
			writable: true
		}), _defineProperty(_Object$create, kLastReject, {
			value: null,
			writable: true
		}), _defineProperty(_Object$create, kError, {
			value: null,
			writable: true
		}), _defineProperty(_Object$create, kEnded, {
			value: stream._readableState.endEmitted,
			writable: true
		}), _defineProperty(_Object$create, kHandlePromise, {
			value: function value(resolve, reject) {
				var data = iterator[kStream].read();
				if (data) {
					iterator[kLastPromise] = null;
					iterator[kLastResolve] = null;
					iterator[kLastReject] = null;
					resolve(createIterResult(data, false));
				} else {
					iterator[kLastResolve] = resolve;
					iterator[kLastReject] = reject;
				}
			},
			writable: true
		}), _Object$create));
		iterator[kLastPromise] = null;
		finished(stream, function(err) {
			if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
				var reject = iterator[kLastReject];
				if (reject !== null) {
					iterator[kLastPromise] = null;
					iterator[kLastResolve] = null;
					iterator[kLastReject] = null;
					reject(err);
				}
				iterator[kError] = err;
				return;
			}
			var resolve = iterator[kLastResolve];
			if (resolve !== null) {
				iterator[kLastPromise] = null;
				iterator[kLastResolve] = null;
				iterator[kLastReject] = null;
				resolve(createIterResult(void 0, true));
			}
			iterator[kEnded] = true;
		});
		stream.on("readable", onReadable.bind(null, iterator));
		return iterator;
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/from.js
var require_from$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _asyncToGenerator(fn) {
		return function() {
			var self = this, args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			enumerableOnly && (symbols = symbols.filter(function(sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			})), keys.push.apply(keys, symbols);
		}
		return keys;
	}
	function _objectSpread(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = null != arguments[i] ? arguments[i] : {};
			i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
				_defineProperty(target, key, source[key]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
				Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
			});
		}
		return target;
	}
	function _defineProperty(obj, key, value) {
		key = _toPropertyKey(key);
		if (key in obj) Object.defineProperty(obj, key, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		else obj[key] = value;
		return obj;
	}
	function _toPropertyKey(arg) {
		var key = _toPrimitive(arg, "string");
		return typeof key === "symbol" ? key : String(key);
	}
	function _toPrimitive(input, hint) {
		if (typeof input !== "object" || input === null) return input;
		var prim = input[Symbol.toPrimitive];
		if (prim !== void 0) {
			var res = prim.call(input, hint || "default");
			if (typeof res !== "object") return res;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return (hint === "string" ? String : Number)(input);
	}
	var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
	function from(Readable, iterable, opts) {
		var iterator;
		if (iterable && typeof iterable.next === "function") iterator = iterable;
		else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();
		else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();
		else throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
		var readable = new Readable(_objectSpread({ objectMode: true }, opts));
		var reading = false;
		readable._read = function() {
			if (!reading) {
				reading = true;
				next();
			}
		};
		function next() {
			return _next2.apply(this, arguments);
		}
		function _next2() {
			_next2 = _asyncToGenerator(function* () {
				try {
					var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value;
					if (_yield$iterator$next.done) readable.push(null);
					else if (readable.push(yield value)) next();
					else reading = false;
				} catch (err) {
					readable.destroy(err);
				}
			});
			return _next2.apply(this, arguments);
		}
		return readable;
	}
	module.exports = from;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_readable.js
var require__stream_readable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Readable;
	var Duplex;
	Readable.ReadableState = ReadableState;
	__require("events").EventEmitter;
	var EElistenerCount = function EElistenerCount(emitter, type) {
		return emitter.listeners(type).length;
	};
	var Stream = require_stream();
	var Buffer$2 = __require("buffer").Buffer;
	var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
	function _uint8ArrayToBuffer(chunk) {
		return Buffer$2.from(chunk);
	}
	function _isUint8Array(obj) {
		return Buffer$2.isBuffer(obj) || obj instanceof OurUint8Array;
	}
	var debugUtil = __require("util");
	var debug;
	if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog("stream");
	else debug = function debug() {};
	var BufferList = require_buffer_list();
	var destroyImpl = require_destroy();
	var getHighWaterMark = require_state().getHighWaterMark;
	var _require$codes = require_errors().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
	var StringDecoder;
	var createReadableStreamAsyncIterator;
	var from;
	require_inherits()(Readable, Stream);
	var errorOrDestroy = destroyImpl.errorOrDestroy;
	var kProxyEvents = [
		"error",
		"close",
		"destroy",
		"pause",
		"resume"
	];
	function prependListener(emitter, event, fn) {
		if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
		if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
		else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
		else emitter._events[event] = [fn, emitter._events[event]];
	}
	function ReadableState(options, stream, isDuplex) {
		Duplex = Duplex || require__stream_duplex();
		options = options || {};
		if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
		this.objectMode = !!options.objectMode;
		if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
		this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
		this.buffer = new BufferList();
		this.length = 0;
		this.pipes = null;
		this.pipesCount = 0;
		this.flowing = null;
		this.ended = false;
		this.endEmitted = false;
		this.reading = false;
		this.sync = true;
		this.needReadable = false;
		this.emittedReadable = false;
		this.readableListening = false;
		this.resumeScheduled = false;
		this.paused = true;
		this.emitClose = options.emitClose !== false;
		this.autoDestroy = !!options.autoDestroy;
		this.destroyed = false;
		this.defaultEncoding = options.defaultEncoding || "utf8";
		this.awaitDrain = 0;
		this.readingMore = false;
		this.decoder = null;
		this.encoding = null;
		if (options.encoding) {
			if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
			this.decoder = new StringDecoder(options.encoding);
			this.encoding = options.encoding;
		}
	}
	function Readable(options) {
		Duplex = Duplex || require__stream_duplex();
		if (!(this instanceof Readable)) return new Readable(options);
		var isDuplex = this instanceof Duplex;
		this._readableState = new ReadableState(options, this, isDuplex);
		this.readable = true;
		if (options) {
			if (typeof options.read === "function") this._read = options.read;
			if (typeof options.destroy === "function") this._destroy = options.destroy;
		}
		Stream.call(this);
	}
	Object.defineProperty(Readable.prototype, "destroyed", {
		enumerable: false,
		get: function get() {
			if (this._readableState === void 0) return false;
			return this._readableState.destroyed;
		},
		set: function set(value) {
			if (!this._readableState) return;
			this._readableState.destroyed = value;
		}
	});
	Readable.prototype.destroy = destroyImpl.destroy;
	Readable.prototype._undestroy = destroyImpl.undestroy;
	Readable.prototype._destroy = function(err, cb) {
		cb(err);
	};
	Readable.prototype.push = function(chunk, encoding) {
		var state = this._readableState;
		var skipChunkCheck;
		if (!state.objectMode) {
			if (typeof chunk === "string") {
				encoding = encoding || state.defaultEncoding;
				if (encoding !== state.encoding) {
					chunk = Buffer$2.from(chunk, encoding);
					encoding = "";
				}
				skipChunkCheck = true;
			}
		} else skipChunkCheck = true;
		return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
	};
	Readable.prototype.unshift = function(chunk) {
		return readableAddChunk(this, chunk, null, true, false);
	};
	function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
		debug("readableAddChunk", chunk);
		var state = stream._readableState;
		if (chunk === null) {
			state.reading = false;
			onEofChunk(stream, state);
		} else {
			var er;
			if (!skipChunkCheck) er = chunkInvalid(state, chunk);
			if (er) errorOrDestroy(stream, er);
			else if (state.objectMode || chunk && chunk.length > 0) {
				if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$2.prototype) chunk = _uint8ArrayToBuffer(chunk);
				if (addToFront) if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
				else addChunk(stream, state, chunk, true);
				else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
				else if (state.destroyed) return false;
				else {
					state.reading = false;
					if (state.decoder && !encoding) {
						chunk = state.decoder.write(chunk);
						if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
						else maybeReadMore(stream, state);
					} else addChunk(stream, state, chunk, false);
				}
			} else if (!addToFront) {
				state.reading = false;
				maybeReadMore(stream, state);
			}
		}
		return !state.ended && (state.length < state.highWaterMark || state.length === 0);
	}
	function addChunk(stream, state, chunk, addToFront) {
		if (state.flowing && state.length === 0 && !state.sync) {
			state.awaitDrain = 0;
			stream.emit("data", chunk);
		} else {
			state.length += state.objectMode ? 1 : chunk.length;
			if (addToFront) state.buffer.unshift(chunk);
			else state.buffer.push(chunk);
			if (state.needReadable) emitReadable(stream);
		}
		maybeReadMore(stream, state);
	}
	function chunkInvalid(state, chunk) {
		var er;
		if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
			"string",
			"Buffer",
			"Uint8Array"
		], chunk);
		return er;
	}
	Readable.prototype.isPaused = function() {
		return this._readableState.flowing === false;
	};
	Readable.prototype.setEncoding = function(enc) {
		if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
		var decoder = new StringDecoder(enc);
		this._readableState.decoder = decoder;
		this._readableState.encoding = this._readableState.decoder.encoding;
		var p = this._readableState.buffer.head;
		var content = "";
		while (p !== null) {
			content += decoder.write(p.data);
			p = p.next;
		}
		this._readableState.buffer.clear();
		if (content !== "") this._readableState.buffer.push(content);
		this._readableState.length = content.length;
		return this;
	};
	var MAX_HWM = 1073741824;
	function computeNewHighWaterMark(n) {
		if (n >= MAX_HWM) n = MAX_HWM;
		else {
			n--;
			n |= n >>> 1;
			n |= n >>> 2;
			n |= n >>> 4;
			n |= n >>> 8;
			n |= n >>> 16;
			n++;
		}
		return n;
	}
	function howMuchToRead(n, state) {
		if (n <= 0 || state.length === 0 && state.ended) return 0;
		if (state.objectMode) return 1;
		if (n !== n) if (state.flowing && state.length) return state.buffer.head.data.length;
		else return state.length;
		if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
		if (n <= state.length) return n;
		if (!state.ended) {
			state.needReadable = true;
			return 0;
		}
		return state.length;
	}
	Readable.prototype.read = function(n) {
		debug("read", n);
		n = parseInt(n, 10);
		var state = this._readableState;
		var nOrig = n;
		if (n !== 0) state.emittedReadable = false;
		if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
			debug("read: emitReadable", state.length, state.ended);
			if (state.length === 0 && state.ended) endReadable(this);
			else emitReadable(this);
			return null;
		}
		n = howMuchToRead(n, state);
		if (n === 0 && state.ended) {
			if (state.length === 0) endReadable(this);
			return null;
		}
		var doRead = state.needReadable;
		debug("need readable", doRead);
		if (state.length === 0 || state.length - n < state.highWaterMark) {
			doRead = true;
			debug("length less than watermark", doRead);
		}
		if (state.ended || state.reading) {
			doRead = false;
			debug("reading or ended", doRead);
		} else if (doRead) {
			debug("do read");
			state.reading = true;
			state.sync = true;
			if (state.length === 0) state.needReadable = true;
			this._read(state.highWaterMark);
			state.sync = false;
			if (!state.reading) n = howMuchToRead(nOrig, state);
		}
		var ret;
		if (n > 0) ret = fromList(n, state);
		else ret = null;
		if (ret === null) {
			state.needReadable = state.length <= state.highWaterMark;
			n = 0;
		} else {
			state.length -= n;
			state.awaitDrain = 0;
		}
		if (state.length === 0) {
			if (!state.ended) state.needReadable = true;
			if (nOrig !== n && state.ended) endReadable(this);
		}
		if (ret !== null) this.emit("data", ret);
		return ret;
	};
	function onEofChunk(stream, state) {
		debug("onEofChunk");
		if (state.ended) return;
		if (state.decoder) {
			var chunk = state.decoder.end();
			if (chunk && chunk.length) {
				state.buffer.push(chunk);
				state.length += state.objectMode ? 1 : chunk.length;
			}
		}
		state.ended = true;
		if (state.sync) emitReadable(stream);
		else {
			state.needReadable = false;
			if (!state.emittedReadable) {
				state.emittedReadable = true;
				emitReadable_(stream);
			}
		}
	}
	function emitReadable(stream) {
		var state = stream._readableState;
		debug("emitReadable", state.needReadable, state.emittedReadable);
		state.needReadable = false;
		if (!state.emittedReadable) {
			debug("emitReadable", state.flowing);
			state.emittedReadable = true;
			process.nextTick(emitReadable_, stream);
		}
	}
	function emitReadable_(stream) {
		var state = stream._readableState;
		debug("emitReadable_", state.destroyed, state.length, state.ended);
		if (!state.destroyed && (state.length || state.ended)) {
			stream.emit("readable");
			state.emittedReadable = false;
		}
		state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
		flow(stream);
	}
	function maybeReadMore(stream, state) {
		if (!state.readingMore) {
			state.readingMore = true;
			process.nextTick(maybeReadMore_, stream, state);
		}
	}
	function maybeReadMore_(stream, state) {
		while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
			var len = state.length;
			debug("maybeReadMore read 0");
			stream.read(0);
			if (len === state.length) break;
		}
		state.readingMore = false;
	}
	Readable.prototype._read = function(n) {
		errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
	};
	Readable.prototype.pipe = function(dest, pipeOpts) {
		var src = this;
		var state = this._readableState;
		switch (state.pipesCount) {
			case 0:
				state.pipes = dest;
				break;
			case 1:
				state.pipes = [state.pipes, dest];
				break;
			default:
				state.pipes.push(dest);
				break;
		}
		state.pipesCount += 1;
		debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
		var endFn = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr ? onend : unpipe;
		if (state.endEmitted) process.nextTick(endFn);
		else src.once("end", endFn);
		dest.on("unpipe", onunpipe);
		function onunpipe(readable, unpipeInfo) {
			debug("onunpipe");
			if (readable === src) {
				if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
					unpipeInfo.hasUnpiped = true;
					cleanup();
				}
			}
		}
		function onend() {
			debug("onend");
			dest.end();
		}
		var ondrain = pipeOnDrain(src);
		dest.on("drain", ondrain);
		var cleanedUp = false;
		function cleanup() {
			debug("cleanup");
			dest.removeListener("close", onclose);
			dest.removeListener("finish", onfinish);
			dest.removeListener("drain", ondrain);
			dest.removeListener("error", onerror);
			dest.removeListener("unpipe", onunpipe);
			src.removeListener("end", onend);
			src.removeListener("end", unpipe);
			src.removeListener("data", ondata);
			cleanedUp = true;
			if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
		}
		src.on("data", ondata);
		function ondata(chunk) {
			debug("ondata");
			var ret = dest.write(chunk);
			debug("dest.write", ret);
			if (ret === false) {
				if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
					debug("false write response, pause", state.awaitDrain);
					state.awaitDrain++;
				}
				src.pause();
			}
		}
		function onerror(er) {
			debug("onerror", er);
			unpipe();
			dest.removeListener("error", onerror);
			if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
		}
		prependListener(dest, "error", onerror);
		function onclose() {
			dest.removeListener("finish", onfinish);
			unpipe();
		}
		dest.once("close", onclose);
		function onfinish() {
			debug("onfinish");
			dest.removeListener("close", onclose);
			unpipe();
		}
		dest.once("finish", onfinish);
		function unpipe() {
			debug("unpipe");
			src.unpipe(dest);
		}
		dest.emit("pipe", src);
		if (!state.flowing) {
			debug("pipe resume");
			src.resume();
		}
		return dest;
	};
	function pipeOnDrain(src) {
		return function pipeOnDrainFunctionResult() {
			var state = src._readableState;
			debug("pipeOnDrain", state.awaitDrain);
			if (state.awaitDrain) state.awaitDrain--;
			if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
				state.flowing = true;
				flow(src);
			}
		};
	}
	Readable.prototype.unpipe = function(dest) {
		var state = this._readableState;
		var unpipeInfo = { hasUnpiped: false };
		if (state.pipesCount === 0) return this;
		if (state.pipesCount === 1) {
			if (dest && dest !== state.pipes) return this;
			if (!dest) dest = state.pipes;
			state.pipes = null;
			state.pipesCount = 0;
			state.flowing = false;
			if (dest) dest.emit("unpipe", this, unpipeInfo);
			return this;
		}
		if (!dest) {
			var dests = state.pipes;
			var len = state.pipesCount;
			state.pipes = null;
			state.pipesCount = 0;
			state.flowing = false;
			for (var i = 0; i < len; i++) dests[i].emit("unpipe", this, { hasUnpiped: false });
			return this;
		}
		var index = indexOf(state.pipes, dest);
		if (index === -1) return this;
		state.pipes.splice(index, 1);
		state.pipesCount -= 1;
		if (state.pipesCount === 1) state.pipes = state.pipes[0];
		dest.emit("unpipe", this, unpipeInfo);
		return this;
	};
	Readable.prototype.on = function(ev, fn) {
		var res = Stream.prototype.on.call(this, ev, fn);
		var state = this._readableState;
		if (ev === "data") {
			state.readableListening = this.listenerCount("readable") > 0;
			if (state.flowing !== false) this.resume();
		} else if (ev === "readable") {
			if (!state.endEmitted && !state.readableListening) {
				state.readableListening = state.needReadable = true;
				state.flowing = false;
				state.emittedReadable = false;
				debug("on readable", state.length, state.reading);
				if (state.length) emitReadable(this);
				else if (!state.reading) process.nextTick(nReadingNextTick, this);
			}
		}
		return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	Readable.prototype.removeListener = function(ev, fn) {
		var res = Stream.prototype.removeListener.call(this, ev, fn);
		if (ev === "readable") process.nextTick(updateReadableListening, this);
		return res;
	};
	Readable.prototype.removeAllListeners = function(ev) {
		var res = Stream.prototype.removeAllListeners.apply(this, arguments);
		if (ev === "readable" || ev === void 0) process.nextTick(updateReadableListening, this);
		return res;
	};
	function updateReadableListening(self) {
		var state = self._readableState;
		state.readableListening = self.listenerCount("readable") > 0;
		if (state.resumeScheduled && !state.paused) state.flowing = true;
		else if (self.listenerCount("data") > 0) self.resume();
	}
	function nReadingNextTick(self) {
		debug("readable nexttick read 0");
		self.read(0);
	}
	Readable.prototype.resume = function() {
		var state = this._readableState;
		if (!state.flowing) {
			debug("resume");
			state.flowing = !state.readableListening;
			resume(this, state);
		}
		state.paused = false;
		return this;
	};
	function resume(stream, state) {
		if (!state.resumeScheduled) {
			state.resumeScheduled = true;
			process.nextTick(resume_, stream, state);
		}
	}
	function resume_(stream, state) {
		debug("resume", state.reading);
		if (!state.reading) stream.read(0);
		state.resumeScheduled = false;
		stream.emit("resume");
		flow(stream);
		if (state.flowing && !state.reading) stream.read(0);
	}
	Readable.prototype.pause = function() {
		debug("call pause flowing=%j", this._readableState.flowing);
		if (this._readableState.flowing !== false) {
			debug("pause");
			this._readableState.flowing = false;
			this.emit("pause");
		}
		this._readableState.paused = true;
		return this;
	};
	function flow(stream) {
		var state = stream._readableState;
		debug("flow", state.flowing);
		while (state.flowing && stream.read() !== null);
	}
	Readable.prototype.wrap = function(stream) {
		var _this = this;
		var state = this._readableState;
		var paused = false;
		stream.on("end", function() {
			debug("wrapped end");
			if (state.decoder && !state.ended) {
				var chunk = state.decoder.end();
				if (chunk && chunk.length) _this.push(chunk);
			}
			_this.push(null);
		});
		stream.on("data", function(chunk) {
			debug("wrapped data");
			if (state.decoder) chunk = state.decoder.write(chunk);
			if (state.objectMode && (chunk === null || chunk === void 0)) return;
			else if (!state.objectMode && (!chunk || !chunk.length)) return;
			if (!_this.push(chunk)) {
				paused = true;
				stream.pause();
			}
		});
		for (var i in stream) if (this[i] === void 0 && typeof stream[i] === "function") this[i] = function methodWrap(method) {
			return function methodWrapReturnFunction() {
				return stream[method].apply(stream, arguments);
			};
		}(i);
		for (var n = 0; n < kProxyEvents.length; n++) stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
		this._read = function(n) {
			debug("wrapped _read", n);
			if (paused) {
				paused = false;
				stream.resume();
			}
		};
		return this;
	};
	if (typeof Symbol === "function") Readable.prototype[Symbol.asyncIterator] = function() {
		if (createReadableStreamAsyncIterator === void 0) createReadableStreamAsyncIterator = require_async_iterator();
		return createReadableStreamAsyncIterator(this);
	};
	Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
		enumerable: false,
		get: function get() {
			return this._readableState.highWaterMark;
		}
	});
	Object.defineProperty(Readable.prototype, "readableBuffer", {
		enumerable: false,
		get: function get() {
			return this._readableState && this._readableState.buffer;
		}
	});
	Object.defineProperty(Readable.prototype, "readableFlowing", {
		enumerable: false,
		get: function get() {
			return this._readableState.flowing;
		},
		set: function set(state) {
			if (this._readableState) this._readableState.flowing = state;
		}
	});
	Readable._fromList = fromList;
	Object.defineProperty(Readable.prototype, "readableLength", {
		enumerable: false,
		get: function get() {
			return this._readableState.length;
		}
	});
	function fromList(n, state) {
		if (state.length === 0) return null;
		var ret;
		if (state.objectMode) ret = state.buffer.shift();
		else if (!n || n >= state.length) {
			if (state.decoder) ret = state.buffer.join("");
			else if (state.buffer.length === 1) ret = state.buffer.first();
			else ret = state.buffer.concat(state.length);
			state.buffer.clear();
		} else ret = state.buffer.consume(n, state.decoder);
		return ret;
	}
	function endReadable(stream) {
		var state = stream._readableState;
		debug("endReadable", state.endEmitted);
		if (!state.endEmitted) {
			state.ended = true;
			process.nextTick(endReadableNT, state, stream);
		}
	}
	function endReadableNT(state, stream) {
		debug("endReadableNT", state.endEmitted, state.length);
		if (!state.endEmitted && state.length === 0) {
			state.endEmitted = true;
			stream.readable = false;
			stream.emit("end");
			if (state.autoDestroy) {
				var wState = stream._writableState;
				if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
			}
		}
	}
	if (typeof Symbol === "function") Readable.from = function(iterable, opts) {
		if (from === void 0) from = require_from$1();
		return from(Readable, iterable, opts);
	};
	function indexOf(xs, x) {
		for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
		return -1;
	}
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_transform.js
var require__stream_transform = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Transform;
	var _require$codes = require_errors().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
	var Duplex = require__stream_duplex();
	require_inherits()(Transform, Duplex);
	function afterTransform(er, data) {
		var ts = this._transformState;
		ts.transforming = false;
		var cb = ts.writecb;
		if (cb === null) return this.emit("error", new ERR_MULTIPLE_CALLBACK());
		ts.writechunk = null;
		ts.writecb = null;
		if (data != null) this.push(data);
		cb(er);
		var rs = this._readableState;
		rs.reading = false;
		if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	}
	function Transform(options) {
		if (!(this instanceof Transform)) return new Transform(options);
		Duplex.call(this, options);
		this._transformState = {
			afterTransform: afterTransform.bind(this),
			needTransform: false,
			transforming: false,
			writecb: null,
			writechunk: null,
			writeencoding: null
		};
		this._readableState.needReadable = true;
		this._readableState.sync = false;
		if (options) {
			if (typeof options.transform === "function") this._transform = options.transform;
			if (typeof options.flush === "function") this._flush = options.flush;
		}
		this.on("prefinish", prefinish);
	}
	function prefinish() {
		var _this = this;
		if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
			done(_this, er, data);
		});
		else done(this, null, null);
	}
	Transform.prototype.push = function(chunk, encoding) {
		this._transformState.needTransform = false;
		return Duplex.prototype.push.call(this, chunk, encoding);
	};
	Transform.prototype._transform = function(chunk, encoding, cb) {
		cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
	};
	Transform.prototype._write = function(chunk, encoding, cb) {
		var ts = this._transformState;
		ts.writecb = cb;
		ts.writechunk = chunk;
		ts.writeencoding = encoding;
		if (!ts.transforming) {
			var rs = this._readableState;
			if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
		}
	};
	Transform.prototype._read = function(n) {
		var ts = this._transformState;
		if (ts.writechunk !== null && !ts.transforming) {
			ts.transforming = true;
			this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
		} else ts.needTransform = true;
	};
	Transform.prototype._destroy = function(err, cb) {
		Duplex.prototype._destroy.call(this, err, function(err2) {
			cb(err2);
		});
	};
	function done(stream, er, data) {
		if (er) return stream.emit("error", er);
		if (data != null) stream.push(data);
		if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
		if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
		return stream.push(null);
	}
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/_stream_passthrough.js
var require__stream_passthrough = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = PassThrough;
	var Transform = require__stream_transform();
	require_inherits()(PassThrough, Transform);
	function PassThrough(options) {
		if (!(this instanceof PassThrough)) return new PassThrough(options);
		Transform.call(this, options);
	}
	PassThrough.prototype._transform = function(chunk, encoding, cb) {
		cb(null, chunk);
	};
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eos;
	function once(callback) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			callback.apply(void 0, arguments);
		};
	}
	var _require$codes = require_errors().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
	function noop(err) {
		if (err) throw err;
	}
	function isRequest(stream) {
		return stream.setHeader && typeof stream.abort === "function";
	}
	function destroyer(stream, reading, writing, callback) {
		callback = once(callback);
		var closed = false;
		stream.on("close", function() {
			closed = true;
		});
		if (eos === void 0) eos = require_end_of_stream();
		eos(stream, {
			readable: reading,
			writable: writing
		}, function(err) {
			if (err) return callback(err);
			closed = true;
			callback();
		});
		var destroyed = false;
		return function(err) {
			if (closed) return;
			if (destroyed) return;
			destroyed = true;
			if (isRequest(stream)) return stream.abort();
			if (typeof stream.destroy === "function") return stream.destroy();
			callback(err || new ERR_STREAM_DESTROYED("pipe"));
		};
	}
	function call(fn) {
		fn();
	}
	function pipe(from, to) {
		return from.pipe(to);
	}
	function popCallback(streams) {
		if (!streams.length) return noop;
		if (typeof streams[streams.length - 1] !== "function") return noop;
		return streams.pop();
	}
	function pipeline() {
		for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) streams[_key] = arguments[_key];
		var callback = popCallback(streams);
		if (Array.isArray(streams[0])) streams = streams[0];
		if (streams.length < 2) throw new ERR_MISSING_ARGS("streams");
		var error;
		var destroys = streams.map(function(stream, i) {
			var reading = i < streams.length - 1;
			return destroyer(stream, reading, i > 0, function(err) {
				if (!error) error = err;
				if (err) destroys.forEach(call);
				if (reading) return;
				destroys.forEach(call);
				callback(error);
			});
		});
		return streams.reduce(pipe);
	}
	module.exports = pipeline;
}));
//#endregion
//#region node_modules/.pnpm/readable-stream@3.6.2/node_modules/readable-stream/readable.js
var require_readable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stream = __require("stream");
	if (process.env.READABLE_STREAM === "disable" && Stream) {
		module.exports = Stream.Readable;
		Object.assign(module.exports, Stream);
		module.exports.Stream = Stream;
	} else {
		exports = module.exports = require__stream_readable();
		exports.Stream = Stream || exports;
		exports.Readable = exports;
		exports.Writable = require__stream_writable();
		exports.Duplex = require__stream_duplex();
		exports.Transform = require__stream_transform();
		exports.PassThrough = require__stream_passthrough();
		exports.finished = require_end_of_stream();
		exports.pipeline = require_pipeline();
	}
}));
//#endregion
//#region node_modules/.pnpm/through2@4.0.2/node_modules/through2/through2.js
var require_through2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var { Transform } = require_readable();
	function inherits(fn, sup) {
		fn.super_ = sup;
		fn.prototype = Object.create(sup.prototype, { constructor: {
			value: fn,
			enumerable: false,
			writable: true,
			configurable: true
		} });
	}
	function through2(construct) {
		return (options, transform, flush) => {
			if (typeof options === "function") {
				flush = transform;
				transform = options;
				options = {};
			}
			if (typeof transform !== "function") transform = (chunk, enc, cb) => cb(null, chunk);
			if (typeof flush !== "function") flush = null;
			return construct(options, transform, flush);
		};
	}
	var make = through2((options, transform, flush) => {
		const t2 = new Transform(options);
		t2._transform = transform;
		if (flush) t2._flush = flush;
		return t2;
	});
	var ctor = through2((options, transform, flush) => {
		function Through2(override) {
			if (!(this instanceof Through2)) return new Through2(override);
			this.options = Object.assign({}, options, override);
			Transform.call(this, this.options);
			this._transform = transform;
			if (flush) this._flush = flush;
		}
		inherits(Through2, Transform);
		return Through2;
	});
	var obj = through2(function(options, transform, flush) {
		const t2 = new Transform(Object.assign({
			objectMode: true,
			highWaterMark: 16
		}, options));
		t2._transform = transform;
		if (flush) t2._flush = flush;
		return t2;
	});
	module.exports = make;
	module.exports.ctor = ctor;
	module.exports.obj = obj;
}));
//#endregion
//#region node_modules/.pnpm/get-it@8.8.0/node_modules/get-it/dist/_chunks-es/node-request-error.js
var import_decompress_response = /* @__PURE__ */ __toESM(require_decompress_response(), 1);
var import_through2 = /* @__PURE__ */ __toESM(require_through2(), 1);
var r$1, s$1, o, c$1, i$1, a$1 = { exports: {} }, u$2 = { exports: {} };
function l$1() {
	return c$1 ? o : (c$1 = 1, o = function(e) {
		function t(e) {
			let r, s, o, c = null;
			function i(...e) {
				if (!i.enabled) return;
				const n = i, s = Number(/* @__PURE__ */ new Date());
				n.diff = s - (r || s), n.prev = r, n.curr = s, r = s, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
				let c = 0;
				e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, s) => {
					if ("%%" === r) return "%";
					c++;
					const o = t.formatters[s];
					if ("function" == typeof o) {
						const t = e[c];
						r = o.call(n, t), e.splice(c, 1), c--;
					}
					return r;
				}), t.formatArgs.call(n, e), (n.log || t.log).apply(n, e);
			}
			return i.namespace = e, i.useColors = t.useColors(), i.color = t.selectColor(e), i.extend = n, i.destroy = t.destroy, Object.defineProperty(i, "enabled", {
				enumerable: !0,
				configurable: !1,
				get: () => null !== c ? c : (s !== t.namespaces && (s = t.namespaces, o = t.enabled(e)), o),
				set: (e) => {
					c = e;
				}
			}), "function" == typeof t.init && t.init(i), i;
		}
		function n(e, n) {
			const r = t(this.namespace + (typeof n > "u" ? ":" : n) + e);
			return r.log = this.log, r;
		}
		function o(e, t) {
			let n = 0, r = 0, s = -1, o = 0;
			for (; n < e.length;) if (r < t.length && (t[r] === e[n] || "*" === t[r])) "*" === t[r] ? (s = r, o = n, r++) : (n++, r++);
			else {
				if (-1 === s) return !1;
				r = s + 1, o++, n = o;
			}
			for (; r < t.length && "*" === t[r];) r++;
			return r === t.length;
		}
		return t.debug = t, t.default = t, t.coerce = function(e) {
			return e instanceof Error ? e.stack || e.message : e;
		}, t.disable = function() {
			const e = [...t.names, ...t.skips.map((e) => "-" + e)].join(",");
			return t.enable(""), e;
		}, t.enable = function(e) {
			t.save(e), t.namespaces = e, t.names = [], t.skips = [];
			const n = ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
			for (const e of n) "-" === e[0] ? t.skips.push(e.slice(1)) : t.names.push(e);
		}, t.enabled = function(e) {
			for (const n of t.skips) if (o(e, n)) return !1;
			for (const n of t.names) if (o(e, n)) return !0;
			return !1;
		}, t.humanize = function() {
			if (s$1) return r$1;
			s$1 = 1;
			var e = 1e3, t = 60 * e, n = 60 * t, o = 24 * n, c = 7 * o;
			function i(e, t, n, r) {
				var s = t >= 1.5 * n;
				return Math.round(e / n) + " " + r + (s ? "s" : "");
			}
			return r$1 = function(r, s) {
				s = s || {};
				var a, u, l = typeof r;
				if ("string" === l && r.length > 0) return function(r) {
					if (!((r = String(r)).length > 100)) {
						var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);
						if (s) {
							var i = parseFloat(s[1]);
							switch ((s[2] || "ms").toLowerCase()) {
								case "years":
								case "year":
								case "yrs":
								case "yr":
								case "y": return 315576e5 * i;
								case "weeks":
								case "week":
								case "w": return i * c;
								case "days":
								case "day":
								case "d": return i * o;
								case "hours":
								case "hour":
								case "hrs":
								case "hr":
								case "h": return i * n;
								case "minutes":
								case "minute":
								case "mins":
								case "min":
								case "m": return i * t;
								case "seconds":
								case "second":
								case "secs":
								case "sec":
								case "s": return i * e;
								case "milliseconds":
								case "millisecond":
								case "msecs":
								case "msec":
								case "ms": return i;
								default: return;
							}
						}
					}
				}(r);
				if ("number" === l && isFinite(r)) return s.long ? (a = r, (u = Math.abs(a)) >= o ? i(a, u, o, "day") : u >= n ? i(a, u, n, "hour") : u >= t ? i(a, u, t, "minute") : u >= e ? i(a, u, e, "second") : a + " ms") : function(r) {
					var s = Math.abs(r);
					return s >= o ? Math.round(r / o) + "d" : s >= n ? Math.round(r / n) + "h" : s >= t ? Math.round(r / t) + "m" : s >= e ? Math.round(r / e) + "s" : r + "ms";
				}(r);
				throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(r));
			};
		}(), t.destroy = function() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
		}, Object.keys(e).forEach((n) => {
			t[n] = e[n];
		}), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
			let n = 0;
			for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
			return t.colors[Math.abs(n) % t.colors.length];
		}, t.enable(t.load()), t;
	});
}
var p$2, f$1, d$2, C$1, g$2 = { exports: {} };
function h$2() {
	return C$1 || (C$1 = 1, typeof process > "u" || "renderer" === process.type || !0 === process.browser || process.__nwjs ? a$1.exports = (i$1 || (i$1 = 1, function(e, t) {
		t.formatArgs = function(t) {
			if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
			const n = "color: " + this.color;
			t.splice(1, 0, n, "color: inherit");
			let r = 0, s = 0;
			t[0].replace(/%[a-zA-Z%]/g, (e) => {
				"%%" !== e && (r++, "%c" === e && (s = r));
			}), t.splice(s, 0, n);
		}, t.save = function(e) {
			try {
				e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
			} catch {}
		}, t.load = function() {
			let e;
			try {
				e = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
			} catch {}
			return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
		}, t.useColors = function() {
			if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
			if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
			let e;
			return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
		}, t.storage = function() {
			try {
				return localStorage;
			} catch {}
		}(), t.destroy = /* @__PURE__ */ (() => {
			let e = !1;
			return () => {
				e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
			};
		})(), t.colors = [
			"#0000CC",
			"#0000FF",
			"#0033CC",
			"#0033FF",
			"#0066CC",
			"#0066FF",
			"#0099CC",
			"#0099FF",
			"#00CC00",
			"#00CC33",
			"#00CC66",
			"#00CC99",
			"#00CCCC",
			"#00CCFF",
			"#3300CC",
			"#3300FF",
			"#3333CC",
			"#3333FF",
			"#3366CC",
			"#3366FF",
			"#3399CC",
			"#3399FF",
			"#33CC00",
			"#33CC33",
			"#33CC66",
			"#33CC99",
			"#33CCCC",
			"#33CCFF",
			"#6600CC",
			"#6600FF",
			"#6633CC",
			"#6633FF",
			"#66CC00",
			"#66CC33",
			"#9900CC",
			"#9900FF",
			"#9933CC",
			"#9933FF",
			"#99CC00",
			"#99CC33",
			"#CC0000",
			"#CC0033",
			"#CC0066",
			"#CC0099",
			"#CC00CC",
			"#CC00FF",
			"#CC3300",
			"#CC3333",
			"#CC3366",
			"#CC3399",
			"#CC33CC",
			"#CC33FF",
			"#CC6600",
			"#CC6633",
			"#CC9900",
			"#CC9933",
			"#CCCC00",
			"#CCCC33",
			"#FF0000",
			"#FF0033",
			"#FF0066",
			"#FF0099",
			"#FF00CC",
			"#FF00FF",
			"#FF3300",
			"#FF3333",
			"#FF3366",
			"#FF3399",
			"#FF33CC",
			"#FF33FF",
			"#FF6600",
			"#FF6633",
			"#FF9900",
			"#FF9933",
			"#FFCC00",
			"#FFCC33"
		], t.log = console.debug || console.log || (() => {}), e.exports = l$1()(t);
		const { formatters: n } = e.exports;
		n.j = function(e) {
			try {
				return JSON.stringify(e);
			} catch (e) {
				return "[UnexpectedJSONParseError]: " + e.message;
			}
		};
	}(u$2, u$2.exports)), u$2.exports) : a$1.exports = (d$2 || (d$2 = 1, function(n, r) {
		const s = e, o = t;
		r.init = function(e) {
			e.inspectOpts = {};
			const t = Object.keys(r.inspectOpts);
			for (let n = 0; n < t.length; n++) e.inspectOpts[t[n]] = r.inspectOpts[t[n]];
		}, r.log = function(...e) {
			return process.stderr.write(o.formatWithOptions(r.inspectOpts, ...e) + "\n");
		}, r.formatArgs = function(e) {
			const { namespace: t, useColors: s } = this;
			if (s) {
				const r = this.color, s = "\x1B[3" + (r < 8 ? r : "8;5;" + r), o = `  ${s};1m${t} [0m`;
				e[0] = o + e[0].split("\n").join("\n" + o), e.push(s + "m+" + n.exports.humanize(this.diff) + "\x1B[0m");
			} else e[0] = (r.inspectOpts.hideDate ? "" : /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString() + " ") + t + " " + e[0];
		}, r.save = function(e) {
			e ? process.env.DEBUG = e : delete process.env.DEBUG;
		}, r.load = function() {
			return process.env.DEBUG;
		}, r.useColors = function() {
			return "colors" in r.inspectOpts ? !!r.inspectOpts.colors : s.isatty(process.stderr.fd);
		}, r.destroy = o.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), r.colors = [
			6,
			2,
			3,
			4,
			5,
			1
		];
		try {
			const e = function() {
				if (f$1) return p$2;
				f$1 = 1;
				const e = function() {
					const e = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);
					if (e) return Number.parseInt(e.groups.chromeVersion, 10);
				}() >= 69 && {
					level: 1,
					hasBasic: !0,
					has256: !1,
					has16m: !1
				};
				return p$2 = {
					stdout: e,
					stderr: e
				};
			}();
			e && (e.stderr || e).level >= 2 && (r.colors = [
				20,
				21,
				26,
				27,
				32,
				33,
				38,
				39,
				40,
				41,
				42,
				43,
				44,
				45,
				56,
				57,
				62,
				63,
				68,
				69,
				74,
				75,
				76,
				77,
				78,
				79,
				80,
				81,
				92,
				93,
				98,
				99,
				112,
				113,
				128,
				129,
				134,
				135,
				148,
				149,
				160,
				161,
				162,
				163,
				164,
				165,
				166,
				167,
				168,
				169,
				170,
				171,
				172,
				173,
				178,
				179,
				184,
				185,
				196,
				197,
				198,
				199,
				200,
				201,
				202,
				203,
				204,
				205,
				206,
				207,
				208,
				209,
				214,
				215,
				220,
				221
			]);
		} catch {}
		r.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
			const n = t.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t) => t.toUpperCase());
			let r = process.env[t];
			return r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)), e[n] = r, e;
		}, {}), n.exports = l$1()(r);
		const { formatters: c } = n.exports;
		c.o = function(e) {
			return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts).split("\n").map((e) => e.trim()).join(" ");
		}, c.O = function(e) {
			return this.inspectOpts.colors = this.useColors, o.inspect(e, this.inspectOpts);
		};
	}(g$2, g$2.exports)), g$2.exports)), a$1.exports;
}
var m$2 = 1;
var F$1 = 65535;
var y$3 = null;
var b$2 = function() {
	m$2 = m$2 + 1 & F$1;
};
function w$2(e) {
	let t = e.length || 0, r = 0, s = Date.now() + e.time, o = 0;
	const c = function() {
		y$3 || (y$3 = setInterval(b$2, 250), y$3.unref && y$3.unref());
		const e = [0];
		let t = 1, n = m$2 - 1 & F$1;
		return {
			getSpeed: function(r) {
				let s = m$2 - n & F$1;
				for (s > 20 && (s = 20), n = m$2; s--;) 20 === t && (t = 0), e[t] = e[0 === t ? 19 : t - 1], t++;
				r && (e[t - 1] += r);
				const o = e[t - 1], c = e.length < 20 ? 0 : e[20 === t ? 0 : t];
				return e.length < 4 ? o : 4 * (o - c) / e.length;
			},
			clear: function() {
				y$3 && (clearInterval(y$3), y$3 = null);
			}
		};
	}(), i = Date.now(), a = {
		percentage: 0,
		transferred: r,
		length: t,
		remaining: t,
		eta: 0,
		runtime: 0,
		speed: 0,
		delta: 0
	}, u = function(n) {
		a.delta = o, a.percentage = n ? 100 : t ? r / t * 100 : 0, a.speed = c.getSpeed(o), a.eta = Math.round(a.remaining / a.speed), a.runtime = Math.floor((Date.now() - i) / 1e3), s = Date.now() + e.time, o = 0, l.emit("progress", a);
	}, l = (0, import_through2.default)({}, function(e, n, c) {
		const i = e.length;
		r += i, o += i, a.transferred = r, a.remaining = t >= r ? t - r : 0, Date.now() >= s && u(!1), c(null, e);
	}, function(e) {
		u(!0), c.clear(), e();
	}), p = function(e) {
		t = e, a.length = t, a.remaining = t - a.transferred, l.emit("length", t);
	};
	return l.on("pipe", function(e) {
		if (!(t > 0)) {
			if (e.readable && !("writable" in e) && "headers" in e && "object" == typeof (n = e.headers) && null !== n && !Array.isArray(n)) {
				const t = "string" == typeof e.headers["content-length"] ? parseInt(e.headers["content-length"], 10) : 0;
				return p(t);
			}
			if ("length" in e && "number" == typeof e.length) return p(e.length);
			e.on("response", function(e) {
				if (e && e.headers && "gzip" !== e.headers["content-encoding"] && e.headers["content-length"]) return p(parseInt(e.headers["content-length"]));
			});
		}
		var n;
	}), l.progress = function() {
		return a.speed = c.getSpeed(0), a.eta = Math.round(a.remaining / a.speed), a;
	}, l;
}
var v$2 = class extends Error {
	request;
	code;
	constructor(e, t) {
		super(e.message), this.request = t, this.code = e.code;
	}
};
//#endregion
//#region node_modules/.pnpm/get-it@8.8.0/node_modules/get-it/dist/index.js
var import_tunnel_agent = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	__require("net");
	var tls = __require("tls"), http = __require("http"), https = __require("https"), events = __require("events"), assert = __require("assert"), util = __require("util"), Buffer$1 = require_safe_buffer().Buffer;
	exports.httpOverHttp = httpOverHttp;
	exports.httpsOverHttp = httpsOverHttp;
	exports.httpOverHttps = httpOverHttps;
	exports.httpsOverHttps = httpsOverHttps;
	function httpOverHttp(options) {
		var agent = new TunnelingAgent(options);
		agent.request = http.request;
		return agent;
	}
	function httpsOverHttp(options) {
		var agent = new TunnelingAgent(options);
		agent.request = http.request;
		agent.createSocket = createSecureSocket;
		agent.defaultPort = 443;
		return agent;
	}
	function httpOverHttps(options) {
		var agent = new TunnelingAgent(options);
		agent.request = https.request;
		return agent;
	}
	function httpsOverHttps(options) {
		var agent = new TunnelingAgent(options);
		agent.request = https.request;
		agent.createSocket = createSecureSocket;
		agent.defaultPort = 443;
		return agent;
	}
	function TunnelingAgent(options) {
		var self = this;
		self.options = options || {};
		self.proxyOptions = self.options.proxy || {};
		self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
		self.requests = [];
		self.sockets = [];
		self.on("free", function onFree(socket, host, port) {
			for (var i = 0, len = self.requests.length; i < len; ++i) {
				var pending = self.requests[i];
				if (pending.host === host && pending.port === port) {
					self.requests.splice(i, 1);
					pending.request.onSocket(socket);
					return;
				}
			}
			socket.destroy();
			self.removeSocket(socket);
		});
	}
	util.inherits(TunnelingAgent, events.EventEmitter);
	TunnelingAgent.prototype.addRequest = function addRequest(req, options) {
		var self = this;
		if (typeof options === "string") options = {
			host: options,
			port: arguments[2],
			path: arguments[3]
		};
		if (self.sockets.length >= this.maxSockets) {
			self.requests.push({
				host: options.host,
				port: options.port,
				request: req
			});
			return;
		}
		self.createConnection({
			host: options.host,
			port: options.port,
			request: req
		});
	};
	TunnelingAgent.prototype.createConnection = function createConnection(pending) {
		var self = this;
		self.createSocket(pending, function(socket) {
			socket.on("free", onFree);
			socket.on("close", onCloseOrRemove);
			socket.on("agentRemove", onCloseOrRemove);
			pending.request.onSocket(socket);
			function onFree() {
				self.emit("free", socket, pending.host, pending.port);
			}
			function onCloseOrRemove(err) {
				self.removeSocket(socket);
				socket.removeListener("free", onFree);
				socket.removeListener("close", onCloseOrRemove);
				socket.removeListener("agentRemove", onCloseOrRemove);
			}
		});
	};
	TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
		var self = this;
		var placeholder = {};
		self.sockets.push(placeholder);
		var connectOptions = mergeOptions({}, self.proxyOptions, {
			method: "CONNECT",
			path: options.host + ":" + options.port,
			agent: false
		});
		if (connectOptions.proxyAuth) {
			connectOptions.headers = connectOptions.headers || {};
			connectOptions.headers["Proxy-Authorization"] = "Basic " + Buffer$1.from(connectOptions.proxyAuth).toString("base64");
		}
		debug("making CONNECT request");
		var connectReq = self.request(connectOptions);
		connectReq.useChunkedEncodingByDefault = false;
		connectReq.once("response", onResponse);
		connectReq.once("upgrade", onUpgrade);
		connectReq.once("connect", onConnect);
		connectReq.once("error", onError);
		connectReq.end();
		function onResponse(res) {
			res.upgrade = true;
		}
		function onUpgrade(res, socket, head) {
			process.nextTick(function() {
				onConnect(res, socket, head);
			});
		}
		function onConnect(res, socket, head) {
			connectReq.removeAllListeners();
			socket.removeAllListeners();
			if (res.statusCode === 200) {
				assert.equal(head.length, 0);
				debug("tunneling connection has established");
				self.sockets[self.sockets.indexOf(placeholder)] = socket;
				cb(socket);
			} else {
				debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
				var error = /* @__PURE__ */ new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
				error.code = "ECONNRESET";
				options.request.emit("error", error);
				self.removeSocket(placeholder);
			}
		}
		function onError(cause) {
			connectReq.removeAllListeners();
			debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
			var error = /* @__PURE__ */ new Error("tunneling socket could not be established, cause=" + cause.message);
			error.code = "ECONNRESET";
			options.request.emit("error", error);
			self.removeSocket(placeholder);
		}
	};
	TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
		var pos = this.sockets.indexOf(socket);
		if (pos === -1) return;
		this.sockets.splice(pos, 1);
		var pending = this.requests.shift();
		if (pending) this.createConnection(pending);
	};
	function createSecureSocket(options, cb) {
		var self = this;
		TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
			var secureSocket = tls.connect(0, mergeOptions({}, self.options, {
				servername: options.host,
				socket
			}));
			self.sockets[self.sockets.indexOf(socket)] = secureSocket;
			cb(secureSocket);
		});
	}
	function mergeOptions(target) {
		for (var i = 1, len = arguments.length; i < len; ++i) {
			var overrides = arguments[i];
			if (typeof overrides === "object") {
				var keys = Object.keys(overrides);
				for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
					var k = keys[j];
					if (overrides[k] !== void 0) target[k] = overrides[k];
				}
			}
		}
		return target;
	}
	var debug;
	if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) debug = function() {
		var args = Array.prototype.slice.call(arguments);
		if (typeof args[0] === "string") args[0] = "TUNNEL: " + args[0];
		else args.unshift("TUNNEL:");
		console.error.apply(console, args);
	};
	else debug = function() {};
	exports.debug = debug;
})))(), 1);
var f, m$1, y$2, _$1 = { exports: {} }, g$1 = /* @__PURE__ */ c$2(function() {
	if (y$2) return _$1.exports;
	y$2 = 1;
	var e, t, o, a = r, h = a.URL, p = s, d = n, l = i.Writable, g = c, b = function() {
		return m$1 || (m$1 = 1, f = function() {
			if (!e) {
				try {
					e = h$2()("follow-redirects");
				} catch {}
				"function" != typeof e && (e = function() {});
			}
			e.apply(null, arguments);
		}), f;
		var e;
	}();
	e = typeof process < "u", t = typeof window < "u" && typeof document < "u", o = M(Error.captureStackTrace), !e && (t || !o) && console.warn("The follow-redirects package should be excluded from browser builds.");
	var R = !1;
	try {
		g(new h(""));
	} catch (e) {
		R = "ERR_INVALID_URL" === e.code;
	}
	var v = [
		"auth",
		"host",
		"hostname",
		"href",
		"path",
		"pathname",
		"port",
		"protocol",
		"query",
		"search",
		"hash"
	], w = [
		"abort",
		"aborted",
		"connect",
		"error",
		"socket",
		"timeout"
	], x = /* @__PURE__ */ Object.create(null);
	w.forEach(function(e) {
		x[e] = function(t, o, r) {
			this._redirectable.emit(e, t, o, r);
		};
	});
	var q = P("ERR_INVALID_URL", "Invalid URL", TypeError), E = P("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"), O = P("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", E), T = P("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"), L = P("ERR_STREAM_WRITE_AFTER_END", "write after end"), k = l.prototype.destroy || C;
	function j(e, t) {
		l.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], t && this.on("response", t);
		var o = this;
		this._onNativeResponse = function(e) {
			try {
				o._processResponse(e);
			} catch (e) {
				o.emit("error", e instanceof E ? e : new E({ cause: e }));
			}
		}, this._performRequest();
	}
	function B(e) {
		var t = {
			maxRedirects: 21,
			maxBodyLength: 10485760
		}, o = {};
		return Object.keys(e).forEach(function(r) {
			var s = r + ":", n = o[s] = e[r], i = t[r] = Object.create(n);
			Object.defineProperties(i, {
				request: {
					value: function(e, r, n) {
						return h && e instanceof h ? e = $(e) : A(e) ? e = $(H(e)) : (n = r, r = S(e), e = { protocol: s }), M(r) && (n = r, r = null), (r = Object.assign({
							maxRedirects: t.maxRedirects,
							maxBodyLength: t.maxBodyLength
						}, e, r)).nativeProtocols = o, !A(r.host) && !A(r.hostname) && (r.hostname = "::1"), g.equal(r.protocol, s, "protocol mismatch"), b("options", r), new j(r, n);
					},
					configurable: !0,
					enumerable: !0,
					writable: !0
				},
				get: {
					value: function(e, t, o) {
						var r = i.request(e, t, o);
						return r.end(), r;
					},
					configurable: !0,
					enumerable: !0,
					writable: !0
				}
			});
		}), t;
	}
	function C() {}
	function H(e) {
		var t;
		if (R) t = new h(e);
		else if (!A((t = S(a.parse(e))).protocol)) throw new q({ input: e });
		return t;
	}
	function S(e) {
		if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname)) throw new q({ input: e.href || e });
		if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host)) throw new q({ input: e.href || e });
		return e;
	}
	function $(e, t) {
		var o = t || {};
		for (var r of v) o[r] = e[r];
		return o.hostname.startsWith("[") && (o.hostname = o.hostname.slice(1, -1)), "" !== o.port && (o.port = Number(o.port)), o.path = o.search ? o.pathname + o.search : o.pathname, o;
	}
	function U(e, t) {
		var o;
		for (var r in t) e.test(r) && (o = t[r], delete t[r]);
		return null === o || typeof o > "u" ? void 0 : String(o).trim();
	}
	function P(e, t, o) {
		function r(o) {
			M(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, o || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
		}
		return r.prototype = new (o || Error)(), Object.defineProperties(r.prototype, {
			constructor: {
				value: r,
				enumerable: !1
			},
			name: {
				value: "Error [" + e + "]",
				enumerable: !1
			}
		}), r;
	}
	function z(e, t) {
		for (var o of w) e.removeListener(o, x[o]);
		e.on("error", C), e.destroy(t);
	}
	function A(e) {
		return "string" == typeof e || e instanceof String;
	}
	function M(e) {
		return "function" == typeof e;
	}
	return j.prototype = Object.create(l.prototype), j.prototype.abort = function() {
		z(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
	}, j.prototype.destroy = function(e) {
		return z(this._currentRequest, e), k.call(this, e), this;
	}, j.prototype.write = function(e, t, o) {
		if (this._ending) throw new L();
		if (!(A(e) || "object" == typeof (r = e) && "length" in r)) throw new TypeError("data should be a string, Buffer or Uint8Array");
		var r;
		M(t) && (o = t, t = null), 0 !== e.length ? this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({
			data: e,
			encoding: t
		}), this._currentRequest.write(e, t, o)) : (this.emit("error", new T()), this.abort()) : o && o();
	}, j.prototype.end = function(e, t, o) {
		if (M(e) ? (o = e, e = t = null) : M(t) && (o = t, t = null), e) {
			var r = this, s = this._currentRequest;
			this.write(e, t, function() {
				r._ended = !0, s.end(null, null, o);
			}), this._ending = !0;
		} else this._ended = this._ending = !0, this._currentRequest.end(null, null, o);
	}, j.prototype.setHeader = function(e, t) {
		this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
	}, j.prototype.removeHeader = function(e) {
		delete this._options.headers[e], this._currentRequest.removeHeader(e);
	}, j.prototype.setTimeout = function(e, t) {
		var o = this;
		function r(t) {
			t.setTimeout(e), t.removeListener("timeout", t.destroy), t.addListener("timeout", t.destroy);
		}
		function s(t) {
			o._timeout && clearTimeout(o._timeout), o._timeout = setTimeout(function() {
				o.emit("timeout"), n();
			}, e), r(t);
		}
		function n() {
			o._timeout && (clearTimeout(o._timeout), o._timeout = null), o.removeListener("abort", n), o.removeListener("error", n), o.removeListener("response", n), o.removeListener("close", n), t && o.removeListener("timeout", t), o.socket || o._currentRequest.removeListener("socket", s);
		}
		return t && this.on("timeout", t), this.socket ? s(this.socket) : this._currentRequest.once("socket", s), this.on("socket", r), this.on("abort", n), this.on("error", n), this.on("response", n), this.on("close", n), this;
	}, [
		"flushHeaders",
		"getHeader",
		"setNoDelay",
		"setSocketKeepAlive"
	].forEach(function(e) {
		j.prototype[e] = function(t, o) {
			return this._currentRequest[e](t, o);
		};
	}), [
		"aborted",
		"connection",
		"socket"
	].forEach(function(e) {
		Object.defineProperty(j.prototype, e, { get: function() {
			return this._currentRequest[e];
		} });
	}), j.prototype._sanitizeOptions = function(e) {
		if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
			var t = e.path.indexOf("?");
			t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t));
		}
	}, j.prototype._performRequest = function() {
		var e = this._options.protocol, t = this._options.nativeProtocols[e];
		if (!t) throw new TypeError("Unsupported protocol " + e);
		if (this._options.agents) {
			var o = e.slice(0, -1);
			this._options.agent = this._options.agents[o];
		}
		var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
		for (var s of (r._redirectable = this, w)) r.on(s, x[s]);
		if (this._currentUrl = /^\//.test(this._options.path) ? a.format(this._options) : this._options.path, this._isRedirect) {
			var n = 0, i = this, c = this._requestBodyBuffers;
			(function e(t) {
				if (r === i._currentRequest) if (t) i.emit("error", t);
				else if (n < c.length) {
					var o = c[n++];
					r.finished || r.write(o.data, o.encoding, e);
				} else i._ended && r.end();
			})();
		}
	}, j.prototype._processResponse = function(e) {
		var t = e.statusCode;
		this._options.trackRedirects && this._redirects.push({
			url: this._currentUrl,
			headers: e.headers,
			statusCode: t
		});
		var o = e.headers.location;
		if (!o || !1 === this._options.followRedirects || t < 300 || t >= 400) return e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), void (this._requestBodyBuffers = []);
		if (z(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new O();
		var r, s = this._options.beforeRedirect;
		s && (r = Object.assign({ Host: e.req.getHeader("host") }, this._options.headers));
		var n = this._options.method;
		((301 === t || 302 === t) && "POST" === this._options.method || 303 === t && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], U(/^content-/i, this._options.headers));
		var i, c, u = U(/^host$/i, this._options.headers), p = H(this._currentUrl), d = u || p.host, l = /^\w+:/.test(o) ? this._currentUrl : a.format(Object.assign(p, { host: d })), f = (i = o, c = l, R ? new h(i, c) : H(a.resolve(c, i)));
		if (b("redirecting to", f.href), this._isRedirect = !0, $(f, this._options), (f.protocol !== p.protocol && "https:" !== f.protocol || f.host !== d && !function(e, t) {
			g(A(e) && A(t));
			var o = e.length - t.length - 1;
			return o > 0 && "." === e[o] && e.endsWith(t);
		}(f.host, d)) && U(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), M(s)) {
			var m = {
				headers: e.headers,
				statusCode: t
			}, y = {
				url: l,
				method: n,
				headers: r
			};
			s(this._options, m, y), this._sanitizeOptions(this._options);
		}
		this._performRequest();
	}, _$1.exports = B({
		http: p,
		https: d
	}), _$1.exports.wrap = B, _$1.exports;
}());
function b$1(e) {
	return Object.keys(e || {}).reduce((t, o) => (t[o.toLowerCase()] = e[o], t), {});
}
function R$1(e) {
	return e.replace(/^\.*/, ".").toLowerCase();
}
function v$1(e) {
	const t = e.trim().toLowerCase(), o = t.split(":", 2);
	return {
		hostname: R$1(o[0]),
		port: o[1],
		hasPort: t.indexOf(":") > -1
	};
}
var w$1 = [
	"protocol",
	"slashes",
	"auth",
	"host",
	"port",
	"hostname",
	"hash",
	"search",
	"query",
	"pathname",
	"path",
	"href"
], x$2 = [
	"accept",
	"accept-charset",
	"accept-encoding",
	"accept-language",
	"accept-ranges",
	"cache-control",
	"content-encoding",
	"content-language",
	"content-location",
	"content-md5",
	"content-range",
	"content-type",
	"connection",
	"date",
	"expect",
	"max-forwards",
	"pragma",
	"referer",
	"te",
	"user-agent",
	"via"
], q$1 = ["proxy-authorization"], E$1 = (e) => null !== e && "object" == typeof e && "function" == typeof e.pipe, O = "node", T$1 = (e, t, o, r, s) => ({
	body: s,
	url: o,
	method: r,
	headers: e.headers,
	statusCode: e.statusCode || 0,
	statusMessage: e.statusMessage || "",
	remoteAddress: t
}), L = (e, o) => {
	const { options: i } = e, c = Object.assign({}, r.parse(i.url));
	if ("function" == typeof fetch && i.fetch) {
		const t = new AbortController(), r = e.applyMiddleware("finalizeOptions", {
			...c,
			method: i.method,
			headers: {
				..."object" == typeof i.fetch && i.fetch.headers ? b$1(i.fetch.headers) : {},
				...b$1(i.headers)
			},
			maxRedirects: i.maxRedirects
		}), s = {
			credentials: i.withCredentials ? "include" : "omit",
			..."object" == typeof i.fetch ? i.fetch : {},
			method: r.method,
			headers: r.headers,
			body: i.body,
			signal: t.signal
		}, n = e.applyMiddleware("interceptRequest", void 0, {
			adapter: O,
			context: e
		});
		if (n) {
			const e = setTimeout(o, 0, null, n);
			return { abort: () => clearTimeout(e) };
		}
		const a = fetch(i.url, s);
		return e.applyMiddleware("onRequest", {
			options: i,
			adapter: O,
			request: a,
			context: e
		}), a.then(async (e) => {
			const t = i.rawBody ? e.body : await e.text(), r = {};
			e.headers.forEach((e, t) => {
				r[t] = e;
			}), o(null, {
				body: t,
				url: e.url,
				method: i.method,
				headers: r,
				statusCode: e.status,
				statusMessage: e.statusText
			});
		}).catch((e) => {
			"AbortError" != e.name && o(e);
		}), { abort: () => t.abort() };
	}
	const u = E$1(i.body) ? "stream" : typeof i.body;
	if ("undefined" !== u && "stream" !== u && "string" !== u && !Buffer.isBuffer(i.body)) throw new Error(`Request body must be a string, buffer or stream, got ${u}`);
	const f = {};
	i.bodySize ? f["content-length"] = i.bodySize : i.body && "stream" !== u && (f["content-length"] = Buffer.byteLength(i.body));
	let m = !1;
	const y = (e, t) => !m && o(e, t);
	e.channels.abort.subscribe(() => {
		m = !0;
	});
	let _ = Object.assign({}, c, {
		method: i.method,
		headers: Object.assign({}, b$1(i.headers), f),
		maxRedirects: i.maxRedirects
	});
	const L = function(e) {
		const t = typeof e.proxy > "u" ? function(e) {
			const t = process.env.NO_PROXY || process.env.no_proxy || "";
			return "*" === t || "" !== t && function(e, t) {
				const o = e.port || ("https:" === e.protocol ? "443" : "80"), r = R$1(e.hostname || "");
				return t.split(",").map(v$1).some((e) => {
					const t = r.indexOf(e.hostname), s = t > -1 && t === r.length - e.hostname.length;
					return e.hasPort ? o === e.port && s : s;
				});
			}(e, t) ? null : "http:" === e.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e.protocol && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
		}(r.parse(e.url)) : e.proxy;
		return "string" == typeof t ? r.parse(t) : t || null;
	}(i), k = L && function(e) {
		return typeof e.tunnel < "u" ? !!e.tunnel : "https:" === r.parse(e.url).protocol;
	}(i), j = e.applyMiddleware("interceptRequest", void 0, {
		adapter: O,
		context: e
	});
	if (j) {
		const e = setImmediate(y, null, j);
		return { abort: () => clearImmediate(e) };
	}
	if (0 !== i.maxRedirects && (_.maxRedirects = i.maxRedirects || 5), L && k ? _ = function(e = {}, t) {
		const o = Object.assign({}, e), r = x$2.concat(o.proxyHeaderWhiteList || []).map((e) => e.toLowerCase()), s = q$1.concat(o.proxyHeaderExclusiveList || []).map((e) => e.toLowerCase()), n = (i = o.headers, a = r, Object.keys(i).filter((e) => -1 !== a.indexOf(e.toLowerCase())).reduce((e, t) => (e[t] = i[t], e), {}));
		var i, a;
		n.host = function(e) {
			const t = e.port, o = e.protocol;
			let r = `${e.hostname}:`;
			return r += t || ("https:" === o ? "443" : "80"), r;
		}(o), o.headers = Object.keys(o.headers || {}).reduce((e, t) => (-1 === s.indexOf(t.toLowerCase()) && (e[t] = o.headers[t]), e), {});
		return o.agent = function(e, t) {
			return import_tunnel_agent[function(e, t) {
				return `${"https:" === e.protocol ? "https" : "http"}Over${"https:" === t.protocol ? "Https" : "Http"}`;
			}(function(e) {
				return w$1.reduce((t, o) => (t[o] = e[o], t), {});
			}(e), t)];
		}(o, t)(function(e, t, o) {
			return {
				proxy: {
					host: t.hostname,
					port: +t.port,
					proxyAuth: t.auth,
					headers: o
				},
				headers: e.headers,
				ca: e.ca,
				cert: e.cert,
				key: e.key,
				passphrase: e.passphrase,
				pfx: e.pfx,
				ciphers: e.ciphers,
				rejectUnauthorized: e.rejectUnauthorized,
				secureOptions: e.secureOptions,
				secureProtocol: e.secureProtocol
			};
		}(o, t, n)), o;
	}(_, L) : L && !k && (_ = function(e, t, o) {
		const s = e.headers || {}, n = Object.assign({}, e, { headers: s });
		return s.host = s.host || function(e) {
			const t = e.port || ("https:" === e.protocol ? "443" : "80");
			return `${e.hostname}:${t}`;
		}(t), n.protocol = o.protocol || n.protocol, n.hostname = (o.host || "hostname" in o && o.hostname || n.hostname || "").replace(/:\d+/, ""), n.port = o.port ? `${o.port}` : n.port, n.host = function(e) {
			let t = e.host;
			return e.port && ("80" === e.port && "http:" === e.protocol || "443" === e.port && "https:" === e.protocol) && (t = e.hostname), t;
		}(Object.assign({}, t, o)), n.href = `${n.protocol}//${n.host}${n.path}`, n.path = r.format(t), n;
	}(_, c, L)), !k && L && L.auth && !_.headers["proxy-authorization"]) {
		const [e, t] = "string" == typeof L.auth ? L.auth.split(":").map((e) => d.unescape(e)) : [L.auth.username, L.auth.password], o = Buffer.from(`${e}:${t}`, "utf8").toString("base64");
		_.headers["proxy-authorization"] = `Basic ${o}`;
	}
	const B = function(e, t, o) {
		const r = "https:" === e.protocol, i = 0 === e.maxRedirects ? {
			http: s,
			https: n
		} : {
			http: g$1.http,
			https: g$1.https
		};
		if (!t || o) return r ? i.https : i.http;
		let a = 443 === t.port;
		return t.protocol && (a = /^https:?/.test(t.protocol)), a ? i.https : i.http;
	}(_, L, k);
	"function" == typeof i.debug && L && i.debug("Proxying using %s", _.agent ? "tunnel agent" : `${_.host}:${_.port}`);
	const C = "HEAD" !== _.method;
	let H;
	C && !_.headers["accept-encoding"] && !1 !== i.compress && (_.headers["accept-encoding"] = typeof Bun < "u" ? "gzip, deflate" : "br, gzip, deflate");
	const S = e.applyMiddleware("finalizeOptions", _), $ = B.request(S, (o) => {
		const r = o.complete && 0 === o.readableLength, s = C ? (0, import_decompress_response.default)(o) : o;
		H = s;
		const n = e.applyMiddleware("onHeaders", s, {
			headers: o.headers,
			adapter: O,
			context: e
		}), a = "responseUrl" in o ? o.responseUrl : i.url, c = s.socket?.remoteAddress;
		if (i.stream) return y(null, T$1(s, c, a, _.method, n)), void process.nextTick(() => {
			if (!n.readableFlowing) {
				if (r || o.complete && 0 === o.readableLength && !o.readableFlowing) return void n.resume();
				o.complete && o.readableFlowing && n.once("readable", () => {
					if (n.readableFlowing) return;
					const e = n.read(1);
					null === e ? n.resume() : n.unshift(e);
				});
			}
		});
		(function(e, t) {
			const o = [];
			e.on("data", function(e) {
				o.push(e);
			}), e.once("end", function() {
				t && t(null, Buffer.concat(o)), t = null;
			}), e.once("error", function(e) {
				t && t(e), t = null;
			});
		})(n, (e, t) => {
			if (e) return y(e);
			const o = i.rawBody ? t : t.toString(), r = T$1(s, c, a, _.method, o);
			return y(null, r);
		});
	});
	function U(e) {
		H && H.destroy(e), $.destroy(e);
	}
	$.once("socket", (e) => {
		e.once("error", U), $.once("response", (t) => {
			t.once("end", () => {
				e.removeListener("error", U);
			});
		});
	}), $.once("error", (e) => {
		H || y(new v$2(e, $));
	}), i.timeout && function(e, t) {
		if (e.timeoutTimer) return e;
		const o = isNaN(t) ? t : {
			socket: t,
			connect: t
		}, r = e.getHeader("host"), s = r ? " to " + r : "";
		function n() {
			e.timeoutTimer && (clearTimeout(e.timeoutTimer), e.timeoutTimer = null);
		}
		function i(t) {
			if (n(), void 0 !== o.socket) {
				const r = () => {
					const e = /* @__PURE__ */ new Error("Socket timed out on request" + s);
					e.code = "ESOCKETTIMEDOUT", t.destroy(e);
				};
				t.setTimeout(o.socket, r), e.once("response", (e) => {
					e.once("end", () => {
						t.removeListener("timeout", r);
					});
				});
			}
		}
		void 0 !== o.connect && (e.timeoutTimer = setTimeout(function() {
			const t = /* @__PURE__ */ new Error("Connection timed out on request" + s);
			t.code = "ETIMEDOUT", e.destroy(t);
		}, o.connect)), e.on("socket", function(e) {
			e.connecting ? e.once("connect", () => i(e)) : i(e);
		}), e.on("error", n);
	}($, i.timeout);
	const { bodyStream: P, progress: z } = function(e) {
		if (!e.body) return {};
		const t = E$1(e.body), o = e.bodySize || (t ? null : Buffer.byteLength(e.body));
		if (!o) return t ? { bodyStream: e.body } : {};
		const r = w$2({
			time: 32,
			length: o
		});
		return {
			bodyStream: (t ? e.body : Readable.from(e.body)).pipe(r),
			progress: r
		};
	}(i);
	return e.applyMiddleware("onRequest", {
		options: i,
		adapter: O,
		request: $,
		context: e,
		progress: z
	}), P ? P.pipe($) : $.end(i.body), { abort: () => $.abort() };
}, k = (t = [], o = L) => r$2(t, o);
//#endregion
//#region node_modules/.pnpm/get-it@8.8.0/node_modules/get-it/dist/middleware.js
var import_is_retry_allowed = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var denyList = /* @__PURE__ */ new Set([
		"ENOTFOUND",
		"ENETUNREACH",
		"UNABLE_TO_GET_ISSUER_CERT",
		"UNABLE_TO_GET_CRL",
		"UNABLE_TO_DECRYPT_CERT_SIGNATURE",
		"UNABLE_TO_DECRYPT_CRL_SIGNATURE",
		"UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
		"CERT_SIGNATURE_FAILURE",
		"CRL_SIGNATURE_FAILURE",
		"CERT_NOT_YET_VALID",
		"CERT_HAS_EXPIRED",
		"CRL_NOT_YET_VALID",
		"CRL_HAS_EXPIRED",
		"ERROR_IN_CERT_NOT_BEFORE_FIELD",
		"ERROR_IN_CERT_NOT_AFTER_FIELD",
		"ERROR_IN_CRL_LAST_UPDATE_FIELD",
		"ERROR_IN_CRL_NEXT_UPDATE_FIELD",
		"OUT_OF_MEM",
		"DEPTH_ZERO_SELF_SIGNED_CERT",
		"SELF_SIGNED_CERT_IN_CHAIN",
		"UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
		"UNABLE_TO_VERIFY_LEAF_SIGNATURE",
		"CERT_CHAIN_TOO_LONG",
		"CERT_REVOKED",
		"INVALID_CA",
		"PATH_LENGTH_EXCEEDED",
		"INVALID_PURPOSE",
		"CERT_UNTRUSTED",
		"CERT_REJECTED",
		"HOSTNAME_MISMATCH"
	]);
	module.exports = (error) => !denyList.has(error && error.code);
})))(), 1);
var u$1 = /^https:/i;
function p$1(s) {
	const r = new Agent(s), n = new Agent$1(s), o = {
		http: r,
		https: n
	};
	return { finalizeOptions: (e) => {
		if (e.agent) return e;
		if (e.maxRedirects > 0) return {
			...e,
			agents: o
		};
		const t = u$1.test(e.href || e.protocol);
		return {
			...e,
			agent: t ? n : r
		};
	} };
}
var b = /* @__PURE__ */ c$2(h$2());
var h$1 = ["cookie", "authorization"], m = Object.prototype.hasOwnProperty;
function y$1(e = {}) {
	const t = e.verbose, s = e.namespace || "get-it", r = b(s), n = e.log || r, o = n === r && !b.enabled(s);
	let i = 0;
	return {
		processOptions: (e) => (e.debug = n, e.requestId = e.requestId || ++i, e),
		onRequest: (s) => {
			if (o || !s) return s;
			const r = s.options;
			if (n("[%s] HTTP %s %s", r.requestId, r.method, r.url), t && r.body && "string" == typeof r.body && n("[%s] Request body: %s", r.requestId, r.body), t && r.headers) {
				const t = !1 === e.redactSensitiveHeaders ? r.headers : ((e, t) => {
					const s = {};
					for (const r in e) m.call(e, r) && (s[r] = t.indexOf(r.toLowerCase()) > -1 ? "<redacted>" : e[r]);
					return s;
				})(r.headers, h$1);
				n("[%s] Request headers: %s", r.requestId, JSON.stringify(t, null, 2));
			}
			return s;
		},
		onResponse: (e, s) => {
			if (o || !e) return e;
			const r = s.options.requestId;
			return n("[%s] Response code: %s %s", r, e.statusCode, e.statusMessage), t && e.body && n("[%s] Response body: %s", r, function(e) {
				return -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? function(e) {
					try {
						const t = "string" == typeof e ? JSON.parse(e) : e;
						return JSON.stringify(t, null, 2);
					} catch {
						return e;
					}
				}(e.body) : e.body;
			}(e)), e;
		},
		onError: (e, t) => {
			const s = t.options.requestId;
			return e ? (n("[%s] ERROR: %s", s, e.message), e) : (n("[%s] Error encountered, but handled by an earlier middleware", s), e);
		}
	};
}
function g(e, t = {}) {
	return { processOptions: (s) => {
		const r = s.headers || {};
		return s.headers = t.override ? Object.assign({}, r, e) : Object.assign({}, e, r), s;
	} };
}
var R = typeof Buffer > "u" ? () => !1 : (e) => Buffer.isBuffer(e);
function q(e) {
	return "[object Object]" === Object.prototype.toString.call(e);
}
function E(e) {
	if (!1 === q(e)) return !1;
	const t = e.constructor;
	if (void 0 === t) return !0;
	const s = t.prototype;
	return !(!1 === q(s) || !1 === s.hasOwnProperty("isPrototypeOf"));
}
var x$1 = [
	"boolean",
	"string",
	"number"
];
function C() {
	return { processOptions: (e) => {
		const t = e.body;
		return !t || "function" == typeof t.pipe || R(t) || -1 === x$1.indexOf(typeof t) && !Array.isArray(t) && !E(t) ? e : Object.assign({}, e, {
			body: JSON.stringify(e.body),
			headers: Object.assign({}, e.headers, { "Content-Type": "application/json" })
		});
	} };
}
function T(e) {
	return {
		onResponse: (s) => {
			const r = s.headers["content-type"] || "", n = e && e.force || -1 !== r.indexOf("application/json");
			return s.body && r && n ? Object.assign({}, s, { body: t(s.body) }) : s;
		},
		processOptions: (e) => Object.assign({}, e, { headers: Object.assign({ Accept: "application/json" }, e.headers) })
	};
	function t(e) {
		try {
			return JSON.parse(e);
		} catch (e) {
			throw e.message = `Failed to parsed response body as JSON: ${e.message}`, e;
		}
	}
}
var v = {};
typeof globalThis < "u" ? v = globalThis : typeof window < "u" ? v = window : typeof global < "u" ? v = global : typeof self < "u" && (v = self);
var S$1 = v;
function N(e = {}) {
	const t = e.implementation || S$1.Observable;
	if (!t) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
	return { onReturn: (e, s) => new t((t) => (e.error.subscribe((e) => t.error(e)), e.progress.subscribe((e) => t.next(Object.assign({ type: "progress" }, e))), e.response.subscribe((e) => {
		t.next(Object.assign({ type: "response" }, e)), t.complete();
	}), e.request.publish(s), () => e.abort.publish())) };
}
function $(e) {
	return (t) => ({
		stage: e,
		percent: t.percentage,
		total: t.length,
		loaded: t.transferred,
		lengthComputable: !(0 === t.length && 0 === t.percentage)
	});
}
function _() {
	let e = !1;
	const t = $("download"), s = $("upload");
	return {
		onHeaders: (e, s) => {
			const r = w$2({ time: 32 });
			return r.on("progress", (e) => s.context.channels.progress.publish(t(e))), e.pipe(r);
		},
		onRequest: (t) => {
			t.progress && t.progress.on("progress", (r) => {
				e = !0, t.context.channels.progress.publish(s(r));
			});
		},
		onResponse: (t, r) => (!e && typeof r.options.body < "u" && r.channels.progress.publish(s({
			length: 0,
			transferred: 0,
			percentage: 100
		})), t)
	};
}
var A$1 = (e = {}) => {
	const t = e.implementation || Promise;
	if (!t) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
	return { onReturn: (s, r) => new t((t, n) => {
		const o = r.options.cancelToken;
		o && o.promise.then((e) => {
			s.abort.publish(e), n(e);
		}), s.error.subscribe(n), s.response.subscribe((s) => {
			t(e.onlyBody ? s.body : s);
		}), setTimeout(() => {
			try {
				s.request.publish(r);
			} catch (e) {
				n(e);
			}
		}, 0);
	}) };
};
var P$1 = class {
	__CANCEL__ = !0;
	message;
	constructor(e) {
		this.message = e;
	}
	toString() {
		return "Cancel" + (this.message ? `: ${this.message}` : "");
	}
};
var I$1 = class I$1 {
	promise;
	reason;
	constructor(e) {
		if ("function" != typeof e) throw new TypeError("executor must be a function.");
		let t = null;
		this.promise = new Promise((e) => {
			t = e;
		}), e((e) => {
			this.reason || (this.reason = new P$1(e), t(this.reason));
		});
	}
	static source = () => {
		let e;
		return {
			token: new I$1((t) => {
				e = t;
			}),
			cancel: e
		};
	};
};
A$1.Cancel = P$1, A$1.CancelToken = I$1, A$1.isCancel = (e) => !(!e || !e?.__CANCEL__);
var J = (e, t, s) => !("GET" !== s.method && "HEAD" !== s.method || e.response && e.response.statusCode) && (0, import_is_retry_allowed.default)(e);
function M(e) {
	return 100 * Math.pow(2, e) + 100 * Math.random();
}
var z = (e = {}) => ((e) => {
	const t = e.maxRetries || 5, s = e.retryDelay || M, r = e.shouldRetry;
	return { onError: (e, n) => {
		const o = n.options, i = o.maxRetries || t, c = o.retryDelay || s, a = o.shouldRetry || r, u = o.attemptNumber || 0;
		if (null !== (p = o.body) && "object" == typeof p && "function" == typeof p.pipe || !a(e, u, o) || u >= i) return e;
		var p;
		const l = Object.assign({}, n, { options: Object.assign({}, o, { attemptNumber: u + 1 }) });
		return setTimeout(() => n.channels.request.publish(l), c(u)), null;
	} };
})({
	shouldRetry: J,
	...e
});
z.shouldRetry = J;
F = p$1;
var F;
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isFunction.js
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isFunction = void 0;
	function isFunction(value) {
		return typeof value === "function";
	}
	exports.isFunction = isFunction;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js
var require_createErrorClass = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createErrorClass = void 0;
	function createErrorClass(createImpl) {
		var _super = function(instance) {
			Error.call(instance);
			instance.stack = (/* @__PURE__ */ new Error()).stack;
		};
		var ctorFunc = createImpl(_super);
		ctorFunc.prototype = Object.create(Error.prototype);
		ctorFunc.prototype.constructor = ctorFunc;
		return ctorFunc;
	}
	exports.createErrorClass = createErrorClass;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnsubscriptionError = void 0;
	exports.UnsubscriptionError = require_createErrorClass().createErrorClass(function(_super) {
		return function UnsubscriptionErrorImpl(errors) {
			_super(this);
			this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
				return i + 1 + ") " + err.toString();
			}).join("\n  ") : "";
			this.name = "UnsubscriptionError";
			this.errors = errors;
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/arrRemove.js
var require_arrRemove = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.arrRemove = void 0;
	function arrRemove(arr, item) {
		if (arr) {
			var index = arr.indexOf(item);
			0 <= index && arr.splice(index, 1);
		}
	}
	exports.arrRemove = arrRemove;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/Subscription.js
var require_Subscription = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
	var isFunction_1 = require_isFunction();
	var UnsubscriptionError_1 = require_UnsubscriptionError();
	var arrRemove_1 = require_arrRemove();
	var Subscription = function() {
		function Subscription(initialTeardown) {
			this.initialTeardown = initialTeardown;
			this.closed = false;
			this._parentage = null;
			this._finalizers = null;
		}
		Subscription.prototype.unsubscribe = function() {
			var e_1, _a, e_2, _b;
			var errors;
			if (!this.closed) {
				this.closed = true;
				var _parentage = this._parentage;
				if (_parentage) {
					this._parentage = null;
					if (Array.isArray(_parentage)) try {
						for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) _parentage_1_1.value.remove(this);
					} catch (e_1_1) {
						e_1 = { error: e_1_1 };
					} finally {
						try {
							if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
						} finally {
							if (e_1) throw e_1.error;
						}
					}
					else _parentage.remove(this);
				}
				var initialFinalizer = this.initialTeardown;
				if (isFunction_1.isFunction(initialFinalizer)) try {
					initialFinalizer();
				} catch (e) {
					errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
				}
				var _finalizers = this._finalizers;
				if (_finalizers) {
					this._finalizers = null;
					try {
						for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
							var finalizer = _finalizers_1_1.value;
							try {
								execFinalizer(finalizer);
							} catch (err) {
								errors = errors !== null && errors !== void 0 ? errors : [];
								if (err instanceof UnsubscriptionError_1.UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
								else errors.push(err);
							}
						}
					} catch (e_2_1) {
						e_2 = { error: e_2_1 };
					} finally {
						try {
							if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
						} finally {
							if (e_2) throw e_2.error;
						}
					}
				}
				if (errors) throw new UnsubscriptionError_1.UnsubscriptionError(errors);
			}
		};
		Subscription.prototype.add = function(teardown) {
			var _a;
			if (teardown && teardown !== this) if (this.closed) execFinalizer(teardown);
			else {
				if (teardown instanceof Subscription) {
					if (teardown.closed || teardown._hasParent(this)) return;
					teardown._addParent(this);
				}
				(this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
			}
		};
		Subscription.prototype._hasParent = function(parent) {
			var _parentage = this._parentage;
			return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
		};
		Subscription.prototype._addParent = function(parent) {
			var _parentage = this._parentage;
			this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
		};
		Subscription.prototype._removeParent = function(parent) {
			var _parentage = this._parentage;
			if (_parentage === parent) this._parentage = null;
			else if (Array.isArray(_parentage)) arrRemove_1.arrRemove(_parentage, parent);
		};
		Subscription.prototype.remove = function(teardown) {
			var _finalizers = this._finalizers;
			_finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
			if (teardown instanceof Subscription) teardown._removeParent(this);
		};
		Subscription.EMPTY = (function() {
			var empty = new Subscription();
			empty.closed = true;
			return empty;
		})();
		return Subscription;
	}();
	exports.Subscription = Subscription;
	exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
	function isSubscription(value) {
		return value instanceof Subscription || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
	}
	exports.isSubscription = isSubscription;
	function execFinalizer(finalizer) {
		if (isFunction_1.isFunction(finalizer)) finalizer();
		else finalizer.unsubscribe();
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/config.js
var require_config = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.config = void 0;
	exports.config = {
		onUnhandledError: null,
		onStoppedNotification: null,
		Promise: void 0,
		useDeprecatedSynchronousErrorHandling: false,
		useDeprecatedNextContext: false
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js
var require_timeoutProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.timeoutProvider = void 0;
	exports.timeoutProvider = {
		setTimeout: function(handler, timeout) {
			var args = [];
			for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
			var delegate = exports.timeoutProvider.delegate;
			if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
			return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
		},
		clearTimeout: function(handle) {
			var delegate = exports.timeoutProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
		},
		delegate: void 0
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js
var require_reportUnhandledError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.reportUnhandledError = void 0;
	var config_1 = require_config();
	var timeoutProvider_1 = require_timeoutProvider();
	function reportUnhandledError(err) {
		timeoutProvider_1.timeoutProvider.setTimeout(function() {
			var onUnhandledError = config_1.config.onUnhandledError;
			if (onUnhandledError) onUnhandledError(err);
			else throw err;
		});
	}
	exports.reportUnhandledError = reportUnhandledError;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/noop.js
var require_noop = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.noop = void 0;
	function noop() {}
	exports.noop = noop;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/NotificationFactories.js
var require_NotificationFactories = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
	exports.COMPLETE_NOTIFICATION = (function() {
		return createNotification("C", void 0, void 0);
	})();
	function errorNotification(error) {
		return createNotification("E", void 0, error);
	}
	exports.errorNotification = errorNotification;
	function nextNotification(value) {
		return createNotification("N", value, void 0);
	}
	exports.nextNotification = nextNotification;
	function createNotification(kind, value, error) {
		return {
			kind,
			value,
			error
		};
	}
	exports.createNotification = createNotification;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/errorContext.js
var require_errorContext = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.captureError = exports.errorContext = void 0;
	var config_1 = require_config();
	var context = null;
	function errorContext(cb) {
		if (config_1.config.useDeprecatedSynchronousErrorHandling) {
			var isRoot = !context;
			if (isRoot) context = {
				errorThrown: false,
				error: null
			};
			cb();
			if (isRoot) {
				var _a = context, errorThrown = _a.errorThrown, error = _a.error;
				context = null;
				if (errorThrown) throw error;
			}
		} else cb();
	}
	exports.errorContext = errorContext;
	function captureError(err) {
		if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
			context.errorThrown = true;
			context.error = err;
		}
	}
	exports.captureError = captureError;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/Subscriber.js
var require_Subscriber = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
	var isFunction_1 = require_isFunction();
	var Subscription_1 = require_Subscription();
	var config_1 = require_config();
	var reportUnhandledError_1 = require_reportUnhandledError();
	var noop_1 = require_noop();
	var NotificationFactories_1 = require_NotificationFactories();
	var timeoutProvider_1 = require_timeoutProvider();
	var errorContext_1 = require_errorContext();
	var Subscriber = function(_super) {
		__extends(Subscriber, _super);
		function Subscriber(destination) {
			var _this = _super.call(this) || this;
			_this.isStopped = false;
			if (destination) {
				_this.destination = destination;
				if (Subscription_1.isSubscription(destination)) destination.add(_this);
			} else _this.destination = exports.EMPTY_OBSERVER;
			return _this;
		}
		Subscriber.create = function(next, error, complete) {
			return new SafeSubscriber(next, error, complete);
		};
		Subscriber.prototype.next = function(value) {
			if (this.isStopped) handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
			else this._next(value);
		};
		Subscriber.prototype.error = function(err) {
			if (this.isStopped) handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
			else {
				this.isStopped = true;
				this._error(err);
			}
		};
		Subscriber.prototype.complete = function() {
			if (this.isStopped) handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
			else {
				this.isStopped = true;
				this._complete();
			}
		};
		Subscriber.prototype.unsubscribe = function() {
			if (!this.closed) {
				this.isStopped = true;
				_super.prototype.unsubscribe.call(this);
				this.destination = null;
			}
		};
		Subscriber.prototype._next = function(value) {
			this.destination.next(value);
		};
		Subscriber.prototype._error = function(err) {
			try {
				this.destination.error(err);
			} finally {
				this.unsubscribe();
			}
		};
		Subscriber.prototype._complete = function() {
			try {
				this.destination.complete();
			} finally {
				this.unsubscribe();
			}
		};
		return Subscriber;
	}(Subscription_1.Subscription);
	exports.Subscriber = Subscriber;
	var _bind = Function.prototype.bind;
	function bind(fn, thisArg) {
		return _bind.call(fn, thisArg);
	}
	var ConsumerObserver = function() {
		function ConsumerObserver(partialObserver) {
			this.partialObserver = partialObserver;
		}
		ConsumerObserver.prototype.next = function(value) {
			var partialObserver = this.partialObserver;
			if (partialObserver.next) try {
				partialObserver.next(value);
			} catch (error) {
				handleUnhandledError(error);
			}
		};
		ConsumerObserver.prototype.error = function(err) {
			var partialObserver = this.partialObserver;
			if (partialObserver.error) try {
				partialObserver.error(err);
			} catch (error) {
				handleUnhandledError(error);
			}
			else handleUnhandledError(err);
		};
		ConsumerObserver.prototype.complete = function() {
			var partialObserver = this.partialObserver;
			if (partialObserver.complete) try {
				partialObserver.complete();
			} catch (error) {
				handleUnhandledError(error);
			}
		};
		return ConsumerObserver;
	}();
	var SafeSubscriber = function(_super) {
		__extends(SafeSubscriber, _super);
		function SafeSubscriber(observerOrNext, error, complete) {
			var _this = _super.call(this) || this;
			var partialObserver;
			if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) partialObserver = {
				next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
				error: error !== null && error !== void 0 ? error : void 0,
				complete: complete !== null && complete !== void 0 ? complete : void 0
			};
			else {
				var context_1;
				if (_this && config_1.config.useDeprecatedNextContext) {
					context_1 = Object.create(observerOrNext);
					context_1.unsubscribe = function() {
						return _this.unsubscribe();
					};
					partialObserver = {
						next: observerOrNext.next && bind(observerOrNext.next, context_1),
						error: observerOrNext.error && bind(observerOrNext.error, context_1),
						complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
					};
				} else partialObserver = observerOrNext;
			}
			_this.destination = new ConsumerObserver(partialObserver);
			return _this;
		}
		return SafeSubscriber;
	}(Subscriber);
	exports.SafeSubscriber = SafeSubscriber;
	function handleUnhandledError(error) {
		if (config_1.config.useDeprecatedSynchronousErrorHandling) errorContext_1.captureError(error);
		else reportUnhandledError_1.reportUnhandledError(error);
	}
	function defaultErrorHandler(err) {
		throw err;
	}
	function handleStoppedNotification(notification, subscriber) {
		var onStoppedNotification = config_1.config.onStoppedNotification;
		onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
			return onStoppedNotification(notification, subscriber);
		});
	}
	exports.EMPTY_OBSERVER = {
		closed: true,
		next: noop_1.noop,
		error: defaultErrorHandler,
		complete: noop_1.noop
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/symbol/observable.js
var require_observable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.observable = void 0;
	exports.observable = (function() {
		return typeof Symbol === "function" && Symbol.observable || "@@observable";
	})();
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/identity.js
var require_identity = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.identity = void 0;
	function identity(x) {
		return x;
	}
	exports.identity = identity;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/pipe.js
var require_pipe = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pipeFromArray = exports.pipe = void 0;
	var identity_1 = require_identity();
	function pipe() {
		var fns = [];
		for (var _i = 0; _i < arguments.length; _i++) fns[_i] = arguments[_i];
		return pipeFromArray(fns);
	}
	exports.pipe = pipe;
	function pipeFromArray(fns) {
		if (fns.length === 0) return identity_1.identity;
		if (fns.length === 1) return fns[0];
		return function piped(input) {
			return fns.reduce(function(prev, fn) {
				return fn(prev);
			}, input);
		};
	}
	exports.pipeFromArray = pipeFromArray;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/Observable.js
var require_Observable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Observable = void 0;
	var Subscriber_1 = require_Subscriber();
	var Subscription_1 = require_Subscription();
	var observable_1 = require_observable();
	var pipe_1 = require_pipe();
	var config_1 = require_config();
	var isFunction_1 = require_isFunction();
	var errorContext_1 = require_errorContext();
	exports.Observable = function() {
		function Observable(subscribe) {
			if (subscribe) this._subscribe = subscribe;
		}
		Observable.prototype.lift = function(operator) {
			var observable = new Observable();
			observable.source = this;
			observable.operator = operator;
			return observable;
		};
		Observable.prototype.subscribe = function(observerOrNext, error, complete) {
			var _this = this;
			var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
			errorContext_1.errorContext(function() {
				var _a = _this, operator = _a.operator, source = _a.source;
				subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
			});
			return subscriber;
		};
		Observable.prototype._trySubscribe = function(sink) {
			try {
				return this._subscribe(sink);
			} catch (err) {
				sink.error(err);
			}
		};
		Observable.prototype.forEach = function(next, promiseCtor) {
			var _this = this;
			promiseCtor = getPromiseCtor(promiseCtor);
			return new promiseCtor(function(resolve, reject) {
				var subscriber = new Subscriber_1.SafeSubscriber({
					next: function(value) {
						try {
							next(value);
						} catch (err) {
							reject(err);
							subscriber.unsubscribe();
						}
					},
					error: reject,
					complete: resolve
				});
				_this.subscribe(subscriber);
			});
		};
		Observable.prototype._subscribe = function(subscriber) {
			var _a;
			return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
		};
		Observable.prototype[observable_1.observable] = function() {
			return this;
		};
		Observable.prototype.pipe = function() {
			var operations = [];
			for (var _i = 0; _i < arguments.length; _i++) operations[_i] = arguments[_i];
			return pipe_1.pipeFromArray(operations)(this);
		};
		Observable.prototype.toPromise = function(promiseCtor) {
			var _this = this;
			promiseCtor = getPromiseCtor(promiseCtor);
			return new promiseCtor(function(resolve, reject) {
				var value;
				_this.subscribe(function(x) {
					return value = x;
				}, function(err) {
					return reject(err);
				}, function() {
					return resolve(value);
				});
			});
		};
		Observable.create = function(subscribe) {
			return new Observable(subscribe);
		};
		return Observable;
	}();
	function getPromiseCtor(promiseCtor) {
		var _a;
		return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
	}
	function isObserver(value) {
		return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
	}
	function isSubscriber(value) {
		return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/lift.js
var require_lift = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.operate = exports.hasLift = void 0;
	var isFunction_1 = require_isFunction();
	function hasLift(source) {
		return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
	}
	exports.hasLift = hasLift;
	function operate(init) {
		return function(source) {
			if (hasLift(source)) return source.lift(function(liftedSource) {
				try {
					return init(liftedSource, this);
				} catch (err) {
					this.error(err);
				}
			});
			throw new TypeError("Unable to lift unknown Observable type");
		};
	}
	exports.operate = operate;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js
var require_OperatorSubscriber = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
	var Subscriber_1 = require_Subscriber();
	function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
		return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
	}
	exports.createOperatorSubscriber = createOperatorSubscriber;
	var OperatorSubscriber = function(_super) {
		__extends(OperatorSubscriber, _super);
		function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
			var _this = _super.call(this, destination) || this;
			_this.onFinalize = onFinalize;
			_this.shouldUnsubscribe = shouldUnsubscribe;
			_this._next = onNext ? function(value) {
				try {
					onNext(value);
				} catch (err) {
					destination.error(err);
				}
			} : _super.prototype._next;
			_this._error = onError ? function(err) {
				try {
					onError(err);
				} catch (err) {
					destination.error(err);
				} finally {
					this.unsubscribe();
				}
			} : _super.prototype._error;
			_this._complete = onComplete ? function() {
				try {
					onComplete();
				} catch (err) {
					destination.error(err);
				} finally {
					this.unsubscribe();
				}
			} : _super.prototype._complete;
			return _this;
		}
		OperatorSubscriber.prototype.unsubscribe = function() {
			var _a;
			if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
				var closed_1 = this.closed;
				_super.prototype.unsubscribe.call(this);
				!closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
			}
		};
		return OperatorSubscriber;
	}(Subscriber_1.Subscriber);
	exports.OperatorSubscriber = OperatorSubscriber;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/refCount.js
var require_refCount = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.refCount = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function refCount() {
		return lift_1.operate(function(source, subscriber) {
			var connection = null;
			source._refCount++;
			var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
				if (!source || source._refCount <= 0 || 0 < --source._refCount) {
					connection = null;
					return;
				}
				var sharedConnection = source._connection;
				var conn = connection;
				connection = null;
				if (sharedConnection && (!conn || sharedConnection === conn)) sharedConnection.unsubscribe();
				subscriber.unsubscribe();
			});
			source.subscribe(refCounter);
			if (!refCounter.closed) connection = source.connect();
		});
	}
	exports.refCount = refCount;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js
var require_ConnectableObservable = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ConnectableObservable = void 0;
	var Observable_1 = require_Observable();
	var Subscription_1 = require_Subscription();
	var refCount_1 = require_refCount();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var lift_1 = require_lift();
	exports.ConnectableObservable = function(_super) {
		__extends(ConnectableObservable, _super);
		function ConnectableObservable(source, subjectFactory) {
			var _this = _super.call(this) || this;
			_this.source = source;
			_this.subjectFactory = subjectFactory;
			_this._subject = null;
			_this._refCount = 0;
			_this._connection = null;
			if (lift_1.hasLift(source)) _this.lift = source.lift;
			return _this;
		}
		ConnectableObservable.prototype._subscribe = function(subscriber) {
			return this.getSubject().subscribe(subscriber);
		};
		ConnectableObservable.prototype.getSubject = function() {
			var subject = this._subject;
			if (!subject || subject.isStopped) this._subject = this.subjectFactory();
			return this._subject;
		};
		ConnectableObservable.prototype._teardown = function() {
			this._refCount = 0;
			var _connection = this._connection;
			this._subject = this._connection = null;
			_connection === null || _connection === void 0 || _connection.unsubscribe();
		};
		ConnectableObservable.prototype.connect = function() {
			var _this = this;
			var connection = this._connection;
			if (!connection) {
				connection = this._connection = new Subscription_1.Subscription();
				var subject_1 = this.getSubject();
				connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, void 0, function() {
					_this._teardown();
					subject_1.complete();
				}, function(err) {
					_this._teardown();
					subject_1.error(err);
				}, function() {
					return _this._teardown();
				})));
				if (connection.closed) {
					this._connection = null;
					connection = Subscription_1.Subscription.EMPTY;
				}
			}
			return connection;
		};
		ConnectableObservable.prototype.refCount = function() {
			return refCount_1.refCount()(this);
		};
		return ConnectableObservable;
	}(Observable_1.Observable);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.performanceTimestampProvider = void 0;
	exports.performanceTimestampProvider = {
		now: function() {
			return (exports.performanceTimestampProvider.delegate || performance).now();
		},
		delegate: void 0
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.animationFrameProvider = void 0;
	var Subscription_1 = require_Subscription();
	exports.animationFrameProvider = {
		schedule: function(callback) {
			var request = requestAnimationFrame;
			var cancel = cancelAnimationFrame;
			var delegate = exports.animationFrameProvider.delegate;
			if (delegate) {
				request = delegate.requestAnimationFrame;
				cancel = delegate.cancelAnimationFrame;
			}
			var handle = request(function(timestamp) {
				cancel = void 0;
				callback(timestamp);
			});
			return new Subscription_1.Subscription(function() {
				return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
			});
		},
		requestAnimationFrame: function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var delegate = exports.animationFrameProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
		},
		cancelAnimationFrame: function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var delegate = exports.animationFrameProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
		},
		delegate: void 0
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.animationFrames = void 0;
	var Observable_1 = require_Observable();
	var performanceTimestampProvider_1 = require_performanceTimestampProvider();
	var animationFrameProvider_1 = require_animationFrameProvider();
	function animationFrames(timestampProvider) {
		return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
	}
	exports.animationFrames = animationFrames;
	function animationFramesFactory(timestampProvider) {
		return new Observable_1.Observable(function(subscriber) {
			var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
			var start = provider.now();
			var id = 0;
			var run = function() {
				if (!subscriber.closed) id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
					id = 0;
					var now = provider.now();
					subscriber.next({
						timestamp: timestampProvider ? now : timestamp,
						elapsed: now - start
					});
					run();
				});
			};
			run();
			return function() {
				if (id) animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
			};
		});
	}
	var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js
var require_ObjectUnsubscribedError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ObjectUnsubscribedError = void 0;
	exports.ObjectUnsubscribedError = require_createErrorClass().createErrorClass(function(_super) {
		return function ObjectUnsubscribedErrorImpl() {
			_super(this);
			this.name = "ObjectUnsubscribedError";
			this.message = "object unsubscribed";
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/Subject.js
var require_Subject = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AnonymousSubject = exports.Subject = void 0;
	var Observable_1 = require_Observable();
	var Subscription_1 = require_Subscription();
	var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
	var arrRemove_1 = require_arrRemove();
	var errorContext_1 = require_errorContext();
	var Subject = function(_super) {
		__extends(Subject, _super);
		function Subject() {
			var _this = _super.call(this) || this;
			_this.closed = false;
			_this.currentObservers = null;
			_this.observers = [];
			_this.isStopped = false;
			_this.hasError = false;
			_this.thrownError = null;
			return _this;
		}
		Subject.prototype.lift = function(operator) {
			var subject = new AnonymousSubject(this, this);
			subject.operator = operator;
			return subject;
		};
		Subject.prototype._throwIfClosed = function() {
			if (this.closed) throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
		};
		Subject.prototype.next = function(value) {
			var _this = this;
			errorContext_1.errorContext(function() {
				var e_1, _a;
				_this._throwIfClosed();
				if (!_this.isStopped) {
					if (!_this.currentObservers) _this.currentObservers = Array.from(_this.observers);
					try {
						for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) _c.value.next(value);
					} catch (e_1_1) {
						e_1 = { error: e_1_1 };
					} finally {
						try {
							if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
						} finally {
							if (e_1) throw e_1.error;
						}
					}
				}
			});
		};
		Subject.prototype.error = function(err) {
			var _this = this;
			errorContext_1.errorContext(function() {
				_this._throwIfClosed();
				if (!_this.isStopped) {
					_this.hasError = _this.isStopped = true;
					_this.thrownError = err;
					var observers = _this.observers;
					while (observers.length) observers.shift().error(err);
				}
			});
		};
		Subject.prototype.complete = function() {
			var _this = this;
			errorContext_1.errorContext(function() {
				_this._throwIfClosed();
				if (!_this.isStopped) {
					_this.isStopped = true;
					var observers = _this.observers;
					while (observers.length) observers.shift().complete();
				}
			});
		};
		Subject.prototype.unsubscribe = function() {
			this.isStopped = this.closed = true;
			this.observers = this.currentObservers = null;
		};
		Object.defineProperty(Subject.prototype, "observed", {
			get: function() {
				var _a;
				return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
			},
			enumerable: false,
			configurable: true
		});
		Subject.prototype._trySubscribe = function(subscriber) {
			this._throwIfClosed();
			return _super.prototype._trySubscribe.call(this, subscriber);
		};
		Subject.prototype._subscribe = function(subscriber) {
			this._throwIfClosed();
			this._checkFinalizedStatuses(subscriber);
			return this._innerSubscribe(subscriber);
		};
		Subject.prototype._innerSubscribe = function(subscriber) {
			var _this = this;
			var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
			if (hasError || isStopped) return Subscription_1.EMPTY_SUBSCRIPTION;
			this.currentObservers = null;
			observers.push(subscriber);
			return new Subscription_1.Subscription(function() {
				_this.currentObservers = null;
				arrRemove_1.arrRemove(observers, subscriber);
			});
		};
		Subject.prototype._checkFinalizedStatuses = function(subscriber) {
			var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
			if (hasError) subscriber.error(thrownError);
			else if (isStopped) subscriber.complete();
		};
		Subject.prototype.asObservable = function() {
			var observable = new Observable_1.Observable();
			observable.source = this;
			return observable;
		};
		Subject.create = function(destination, source) {
			return new AnonymousSubject(destination, source);
		};
		return Subject;
	}(Observable_1.Observable);
	exports.Subject = Subject;
	var AnonymousSubject = function(_super) {
		__extends(AnonymousSubject, _super);
		function AnonymousSubject(destination, source) {
			var _this = _super.call(this) || this;
			_this.destination = destination;
			_this.source = source;
			return _this;
		}
		AnonymousSubject.prototype.next = function(value) {
			var _a, _b;
			(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
		};
		AnonymousSubject.prototype.error = function(err) {
			var _a, _b;
			(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
		};
		AnonymousSubject.prototype.complete = function() {
			var _a, _b;
			(_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
		};
		AnonymousSubject.prototype._subscribe = function(subscriber) {
			var _a, _b;
			return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
		};
		return AnonymousSubject;
	}(Subject);
	exports.AnonymousSubject = AnonymousSubject;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js
var require_BehaviorSubject = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BehaviorSubject = void 0;
	exports.BehaviorSubject = function(_super) {
		__extends(BehaviorSubject, _super);
		function BehaviorSubject(_value) {
			var _this = _super.call(this) || this;
			_this._value = _value;
			return _this;
		}
		Object.defineProperty(BehaviorSubject.prototype, "value", {
			get: function() {
				return this.getValue();
			},
			enumerable: false,
			configurable: true
		});
		BehaviorSubject.prototype._subscribe = function(subscriber) {
			var subscription = _super.prototype._subscribe.call(this, subscriber);
			!subscription.closed && subscriber.next(this._value);
			return subscription;
		};
		BehaviorSubject.prototype.getValue = function() {
			var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
			if (hasError) throw thrownError;
			this._throwIfClosed();
			return _value;
		};
		BehaviorSubject.prototype.next = function(value) {
			_super.prototype.next.call(this, this._value = value);
		};
		return BehaviorSubject;
	}(require_Subject().Subject);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js
var require_dateTimestampProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.dateTimestampProvider = void 0;
	exports.dateTimestampProvider = {
		now: function() {
			return (exports.dateTimestampProvider.delegate || Date).now();
		},
		delegate: void 0
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/ReplaySubject.js
var require_ReplaySubject = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ReplaySubject = void 0;
	var Subject_1 = require_Subject();
	var dateTimestampProvider_1 = require_dateTimestampProvider();
	exports.ReplaySubject = function(_super) {
		__extends(ReplaySubject, _super);
		function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
			if (_bufferSize === void 0) _bufferSize = Infinity;
			if (_windowTime === void 0) _windowTime = Infinity;
			if (_timestampProvider === void 0) _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
			var _this = _super.call(this) || this;
			_this._bufferSize = _bufferSize;
			_this._windowTime = _windowTime;
			_this._timestampProvider = _timestampProvider;
			_this._buffer = [];
			_this._infiniteTimeWindow = true;
			_this._infiniteTimeWindow = _windowTime === Infinity;
			_this._bufferSize = Math.max(1, _bufferSize);
			_this._windowTime = Math.max(1, _windowTime);
			return _this;
		}
		ReplaySubject.prototype.next = function(value) {
			var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
			if (!isStopped) {
				_buffer.push(value);
				!_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
			}
			this._trimBuffer();
			_super.prototype.next.call(this, value);
		};
		ReplaySubject.prototype._subscribe = function(subscriber) {
			this._throwIfClosed();
			this._trimBuffer();
			var subscription = this._innerSubscribe(subscriber);
			var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow;
			var copy = _a._buffer.slice();
			for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) subscriber.next(copy[i]);
			this._checkFinalizedStatuses(subscriber);
			return subscription;
		};
		ReplaySubject.prototype._trimBuffer = function() {
			var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
			var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
			_bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
			if (!_infiniteTimeWindow) {
				var now = _timestampProvider.now();
				var last = 0;
				for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) last = i;
				last && _buffer.splice(0, last + 1);
			}
		};
		return ReplaySubject;
	}(Subject_1.Subject);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/AsyncSubject.js
var require_AsyncSubject = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncSubject = void 0;
	exports.AsyncSubject = function(_super) {
		__extends(AsyncSubject, _super);
		function AsyncSubject() {
			var _this = _super !== null && _super.apply(this, arguments) || this;
			_this._value = null;
			_this._hasValue = false;
			_this._isComplete = false;
			return _this;
		}
		AsyncSubject.prototype._checkFinalizedStatuses = function(subscriber) {
			var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
			if (hasError) subscriber.error(thrownError);
			else if (isStopped || _isComplete) {
				_hasValue && subscriber.next(_value);
				subscriber.complete();
			}
		};
		AsyncSubject.prototype.next = function(value) {
			if (!this.isStopped) {
				this._value = value;
				this._hasValue = true;
			}
		};
		AsyncSubject.prototype.complete = function() {
			var _a = this, _hasValue = _a._hasValue, _value = _a._value;
			if (!_a._isComplete) {
				this._isComplete = true;
				_hasValue && _super.prototype.next.call(this, _value);
				_super.prototype.complete.call(this);
			}
		};
		return AsyncSubject;
	}(require_Subject().Subject);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/Action.js
var require_Action = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Action = void 0;
	exports.Action = function(_super) {
		__extends(Action, _super);
		function Action(scheduler, work) {
			return _super.call(this) || this;
		}
		Action.prototype.schedule = function(state, delay) {
			if (delay === void 0) delay = 0;
			return this;
		};
		return Action;
	}(require_Subscription().Subscription);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js
var require_intervalProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.intervalProvider = void 0;
	exports.intervalProvider = {
		setInterval: function(handler, timeout) {
			var args = [];
			for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
			var delegate = exports.intervalProvider.delegate;
			if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
			return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
		},
		clearInterval: function(handle) {
			var delegate = exports.intervalProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
		},
		delegate: void 0
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js
var require_AsyncAction = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncAction = void 0;
	var Action_1 = require_Action();
	var intervalProvider_1 = require_intervalProvider();
	var arrRemove_1 = require_arrRemove();
	exports.AsyncAction = function(_super) {
		__extends(AsyncAction, _super);
		function AsyncAction(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			_this.pending = false;
			return _this;
		}
		AsyncAction.prototype.schedule = function(state, delay) {
			var _a;
			if (delay === void 0) delay = 0;
			if (this.closed) return this;
			this.state = state;
			var id = this.id;
			var scheduler = this.scheduler;
			if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
			this.pending = true;
			this.delay = delay;
			this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
			return this;
		};
		AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
			if (delay === void 0) delay = 0;
			return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
		};
		AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay != null && this.delay === delay && this.pending === false) return id;
			if (id != null) intervalProvider_1.intervalProvider.clearInterval(id);
		};
		AsyncAction.prototype.execute = function(state, delay) {
			if (this.closed) return /* @__PURE__ */ new Error("executing a cancelled action");
			this.pending = false;
			var error = this._execute(state, delay);
			if (error) return error;
			else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
		};
		AsyncAction.prototype._execute = function(state, _delay) {
			var errored = false;
			var errorValue;
			try {
				this.work(state);
			} catch (e) {
				errored = true;
				errorValue = e ? e : /* @__PURE__ */ new Error("Scheduled action threw falsy error");
			}
			if (errored) {
				this.unsubscribe();
				return errorValue;
			}
		};
		AsyncAction.prototype.unsubscribe = function() {
			if (!this.closed) {
				var _a = this, id = _a.id, scheduler = _a.scheduler;
				var actions = scheduler.actions;
				this.work = this.state = this.scheduler = null;
				this.pending = false;
				arrRemove_1.arrRemove(actions, this);
				if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
				this.delay = null;
				_super.prototype.unsubscribe.call(this);
			}
		};
		return AsyncAction;
	}(Action_1.Action);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TestTools = exports.Immediate = void 0;
	var nextHandle = 1;
	var resolved;
	var activeHandles = {};
	function findAndClearHandle(handle) {
		if (handle in activeHandles) {
			delete activeHandles[handle];
			return true;
		}
		return false;
	}
	exports.Immediate = {
		setImmediate: function(cb) {
			var handle = nextHandle++;
			activeHandles[handle] = true;
			if (!resolved) resolved = Promise.resolve();
			resolved.then(function() {
				return findAndClearHandle(handle) && cb();
			});
			return handle;
		},
		clearImmediate: function(handle) {
			findAndClearHandle(handle);
		}
	};
	exports.TestTools = { pending: function() {
		return Object.keys(activeHandles).length;
	} };
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.immediateProvider = void 0;
	var Immediate_1 = require_Immediate();
	var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
	exports.immediateProvider = {
		setImmediate: function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var delegate = exports.immediateProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
		},
		clearImmediate: function(handle) {
			var delegate = exports.immediateProvider.delegate;
			return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
		},
		delegate: void 0
	};
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsapAction = void 0;
	var AsyncAction_1 = require_AsyncAction();
	var immediateProvider_1 = require_immediateProvider();
	exports.AsapAction = function(_super) {
		__extends(AsapAction, _super);
		function AsapAction(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			return _this;
		}
		AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
			scheduler.actions.push(this);
			return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
		};
		AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
			var _a;
			if (delay === void 0) delay = 0;
			if (delay != null ? delay > 0 : this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
			var actions = scheduler.actions;
			if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
				immediateProvider_1.immediateProvider.clearImmediate(id);
				if (scheduler._scheduled === id) scheduler._scheduled = void 0;
			}
		};
		return AsapAction;
	}(AsyncAction_1.AsyncAction);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/Scheduler.js
var require_Scheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Scheduler = void 0;
	var dateTimestampProvider_1 = require_dateTimestampProvider();
	exports.Scheduler = function() {
		function Scheduler(schedulerActionCtor, now) {
			if (now === void 0) now = Scheduler.now;
			this.schedulerActionCtor = schedulerActionCtor;
			this.now = now;
		}
		Scheduler.prototype.schedule = function(work, delay, state) {
			if (delay === void 0) delay = 0;
			return new this.schedulerActionCtor(this, work).schedule(state, delay);
		};
		Scheduler.now = dateTimestampProvider_1.dateTimestampProvider.now;
		return Scheduler;
	}();
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js
var require_AsyncScheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncScheduler = void 0;
	var Scheduler_1 = require_Scheduler();
	exports.AsyncScheduler = function(_super) {
		__extends(AsyncScheduler, _super);
		function AsyncScheduler(SchedulerAction, now) {
			if (now === void 0) now = Scheduler_1.Scheduler.now;
			var _this = _super.call(this, SchedulerAction, now) || this;
			_this.actions = [];
			_this._active = false;
			return _this;
		}
		AsyncScheduler.prototype.flush = function(action) {
			var actions = this.actions;
			if (this._active) {
				actions.push(action);
				return;
			}
			var error;
			this._active = true;
			do
				if (error = action.execute(action.state, action.delay)) break;
			while (action = actions.shift());
			this._active = false;
			if (error) {
				while (action = actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		return AsyncScheduler;
	}(Scheduler_1.Scheduler);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsapScheduler = void 0;
	exports.AsapScheduler = function(_super) {
		__extends(AsapScheduler, _super);
		function AsapScheduler() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		AsapScheduler.prototype.flush = function(action) {
			this._active = true;
			var flushId = this._scheduled;
			this._scheduled = void 0;
			var actions = this.actions;
			var error;
			action = action || actions.shift();
			do
				if (error = action.execute(action.state, action.delay)) break;
			while ((action = actions[0]) && action.id === flushId && actions.shift());
			this._active = false;
			if (error) {
				while ((action = actions[0]) && action.id === flushId && actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		return AsapScheduler;
	}(require_AsyncScheduler().AsyncScheduler);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.asap = exports.asapScheduler = void 0;
	var AsapAction_1 = require_AsapAction();
	exports.asapScheduler = new (require_AsapScheduler()).AsapScheduler(AsapAction_1.AsapAction);
	exports.asap = exports.asapScheduler;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/async.js
var require_async = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.async = exports.asyncScheduler = void 0;
	var AsyncAction_1 = require_AsyncAction();
	exports.asyncScheduler = new (require_AsyncScheduler()).AsyncScheduler(AsyncAction_1.AsyncAction);
	exports.async = exports.asyncScheduler;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QueueAction = void 0;
	exports.QueueAction = function(_super) {
		__extends(QueueAction, _super);
		function QueueAction(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			return _this;
		}
		QueueAction.prototype.schedule = function(state, delay) {
			if (delay === void 0) delay = 0;
			if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
			this.delay = delay;
			this.state = state;
			this.scheduler.flush(this);
			return this;
		};
		QueueAction.prototype.execute = function(state, delay) {
			return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
		};
		QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
			scheduler.flush(this);
			return 0;
		};
		return QueueAction;
	}(require_AsyncAction().AsyncAction);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QueueScheduler = void 0;
	exports.QueueScheduler = function(_super) {
		__extends(QueueScheduler, _super);
		function QueueScheduler() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		return QueueScheduler;
	}(require_AsyncScheduler().AsyncScheduler);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.queue = exports.queueScheduler = void 0;
	var QueueAction_1 = require_QueueAction();
	exports.queueScheduler = new (require_QueueScheduler()).QueueScheduler(QueueAction_1.QueueAction);
	exports.queue = exports.queueScheduler;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AnimationFrameAction = void 0;
	var AsyncAction_1 = require_AsyncAction();
	var animationFrameProvider_1 = require_animationFrameProvider();
	exports.AnimationFrameAction = function(_super) {
		__extends(AnimationFrameAction, _super);
		function AnimationFrameAction(scheduler, work) {
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			return _this;
		}
		AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
			scheduler.actions.push(this);
			return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
				return scheduler.flush(void 0);
			}));
		};
		AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
			var _a;
			if (delay === void 0) delay = 0;
			if (delay != null ? delay > 0 : this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
			var actions = scheduler.actions;
			if (id != null && id === scheduler._scheduled && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
				animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
				scheduler._scheduled = void 0;
			}
		};
		return AnimationFrameAction;
	}(AsyncAction_1.AsyncAction);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AnimationFrameScheduler = void 0;
	exports.AnimationFrameScheduler = function(_super) {
		__extends(AnimationFrameScheduler, _super);
		function AnimationFrameScheduler() {
			return _super !== null && _super.apply(this, arguments) || this;
		}
		AnimationFrameScheduler.prototype.flush = function(action) {
			this._active = true;
			var flushId;
			if (action) flushId = action.id;
			else {
				flushId = this._scheduled;
				this._scheduled = void 0;
			}
			var actions = this.actions;
			var error;
			action = action || actions.shift();
			do
				if (error = action.execute(action.state, action.delay)) break;
			while ((action = actions[0]) && action.id === flushId && actions.shift());
			this._active = false;
			if (error) {
				while ((action = actions[0]) && action.id === flushId && actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		return AnimationFrameScheduler;
	}(require_AsyncScheduler().AsyncScheduler);
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.animationFrame = exports.animationFrameScheduler = void 0;
	var AnimationFrameAction_1 = require_AnimationFrameAction();
	exports.animationFrameScheduler = new (require_AnimationFrameScheduler()).AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
	exports.animationFrame = exports.animationFrameScheduler;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __extends = exports && exports.__extends || (function() {
		var extendStatics = function(d, b) {
			extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
				d.__proto__ = b;
			} || function(d, b) {
				for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
			};
			return extendStatics(d, b);
		};
		return function(d, b) {
			if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
	var AsyncAction_1 = require_AsyncAction();
	var Subscription_1 = require_Subscription();
	exports.VirtualTimeScheduler = function(_super) {
		__extends(VirtualTimeScheduler, _super);
		function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
			if (schedulerActionCtor === void 0) schedulerActionCtor = VirtualAction;
			if (maxFrames === void 0) maxFrames = Infinity;
			var _this = _super.call(this, schedulerActionCtor, function() {
				return _this.frame;
			}) || this;
			_this.maxFrames = maxFrames;
			_this.frame = 0;
			_this.index = -1;
			return _this;
		}
		VirtualTimeScheduler.prototype.flush = function() {
			var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
			var error;
			var action;
			while ((action = actions[0]) && action.delay <= maxFrames) {
				actions.shift();
				this.frame = action.delay;
				if (error = action.execute(action.state, action.delay)) break;
			}
			if (error) {
				while (action = actions.shift()) action.unsubscribe();
				throw error;
			}
		};
		VirtualTimeScheduler.frameTimeFactor = 10;
		return VirtualTimeScheduler;
	}(require_AsyncScheduler().AsyncScheduler);
	var VirtualAction = function(_super) {
		__extends(VirtualAction, _super);
		function VirtualAction(scheduler, work, index) {
			if (index === void 0) index = scheduler.index += 1;
			var _this = _super.call(this, scheduler, work) || this;
			_this.scheduler = scheduler;
			_this.work = work;
			_this.index = index;
			_this.active = true;
			_this.index = scheduler.index = index;
			return _this;
		}
		VirtualAction.prototype.schedule = function(state, delay) {
			if (delay === void 0) delay = 0;
			if (Number.isFinite(delay)) {
				if (!this.id) return _super.prototype.schedule.call(this, state, delay);
				this.active = false;
				var action = new VirtualAction(this.scheduler, this.work);
				this.add(action);
				return action.schedule(state, delay);
			} else return Subscription_1.Subscription.EMPTY;
		};
		VirtualAction.prototype.requestAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
			this.delay = scheduler.frame + delay;
			var actions = scheduler.actions;
			actions.push(this);
			actions.sort(VirtualAction.sortActions);
			return 1;
		};
		VirtualAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
			if (delay === void 0) delay = 0;
		};
		VirtualAction.prototype._execute = function(state, delay) {
			if (this.active === true) return _super.prototype._execute.call(this, state, delay);
		};
		VirtualAction.sortActions = function(a, b) {
			if (a.delay === b.delay) if (a.index === b.index) return 0;
			else if (a.index > b.index) return 1;
			else return -1;
			else if (a.delay > b.delay) return 1;
			else return -1;
		};
		return VirtualAction;
	}(AsyncAction_1.AsyncAction);
	exports.VirtualAction = VirtualAction;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/empty.js
var require_empty = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.empty = exports.EMPTY = void 0;
	var Observable_1 = require_Observable();
	exports.EMPTY = new Observable_1.Observable(function(subscriber) {
		return subscriber.complete();
	});
	function empty(scheduler) {
		return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
	}
	exports.empty = empty;
	function emptyScheduled(scheduler) {
		return new Observable_1.Observable(function(subscriber) {
			return scheduler.schedule(function() {
				return subscriber.complete();
			});
		});
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isScheduler.js
var require_isScheduler = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isScheduler = void 0;
	var isFunction_1 = require_isFunction();
	function isScheduler(value) {
		return value && isFunction_1.isFunction(value.schedule);
	}
	exports.isScheduler = isScheduler;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/args.js
var require_args = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
	var isFunction_1 = require_isFunction();
	var isScheduler_1 = require_isScheduler();
	function last(arr) {
		return arr[arr.length - 1];
	}
	function popResultSelector(args) {
		return isFunction_1.isFunction(last(args)) ? args.pop() : void 0;
	}
	exports.popResultSelector = popResultSelector;
	function popScheduler(args) {
		return isScheduler_1.isScheduler(last(args)) ? args.pop() : void 0;
	}
	exports.popScheduler = popScheduler;
	function popNumber(args, defaultValue) {
		return typeof last(args) === "number" ? args.pop() : defaultValue;
	}
	exports.popNumber = popNumber;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js
var require_isArrayLike = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isArrayLike = void 0;
	exports.isArrayLike = (function(x) {
		return x && typeof x.length === "number" && typeof x !== "function";
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isPromise.js
var require_isPromise = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isPromise = void 0;
	var isFunction_1 = require_isFunction();
	function isPromise(value) {
		return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
	}
	exports.isPromise = isPromise;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js
var require_isInteropObservable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isInteropObservable = void 0;
	var observable_1 = require_observable();
	var isFunction_1 = require_isFunction();
	function isInteropObservable(input) {
		return isFunction_1.isFunction(input[observable_1.observable]);
	}
	exports.isInteropObservable = isInteropObservable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js
var require_isAsyncIterable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isAsyncIterable = void 0;
	var isFunction_1 = require_isFunction();
	function isAsyncIterable(obj) {
		return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
	}
	exports.isAsyncIterable = isAsyncIterable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js
var require_throwUnobservableError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createInvalidObservableTypeError = void 0;
	function createInvalidObservableTypeError(input) {
		return /* @__PURE__ */ new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
	}
	exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/symbol/iterator.js
var require_iterator = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.iterator = exports.getSymbolIterator = void 0;
	function getSymbolIterator() {
		if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
		return Symbol.iterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	exports.iterator = getSymbolIterator();
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isIterable.js
var require_isIterable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isIterable = void 0;
	var iterator_1 = require_iterator();
	var isFunction_1 = require_isFunction();
	function isIterable(input) {
		return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
	}
	exports.isIterable = isIterable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js
var require_isReadableStreamLike = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __generator = exports && exports.__generator || function(thisArg, body) {
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		}, f, y, t, g;
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	};
	var __await = exports && exports.__await || function(v) {
		return this instanceof __await ? (this.v = v, this) : new __await(v);
	};
	var __asyncGenerator = exports && exports.__asyncGenerator || function(thisArg, _arguments, generator) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var g = generator.apply(thisArg, _arguments || []), i, q = [];
		return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
			return this;
		}, i;
		function verb(n) {
			if (g[n]) i[n] = function(v) {
				return new Promise(function(a, b) {
					q.push([
						n,
						v,
						a,
						b
					]) > 1 || resume(n, v);
				});
			};
		}
		function resume(n, v) {
			try {
				step(g[n](v));
			} catch (e) {
				settle(q[0][3], e);
			}
		}
		function step(r) {
			r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
		}
		function fulfill(value) {
			resume("next", value);
		}
		function reject(value) {
			resume("throw", value);
		}
		function settle(f, v) {
			if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
		}
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
	var isFunction_1 = require_isFunction();
	function readableStreamLikeToAsyncGenerator(readableStream) {
		return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
			var reader, _a, value, done;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						reader = readableStream.getReader();
						_b.label = 1;
					case 1:
						_b.trys.push([
							1,
							,
							9,
							10
						]);
						_b.label = 2;
					case 2: return [4, __await(reader.read())];
					case 3:
						_a = _b.sent(), value = _a.value, done = _a.done;
						if (!done) return [3, 5];
						return [4, __await(void 0)];
					case 4: return [2, _b.sent()];
					case 5: return [4, __await(value)];
					case 6: return [4, _b.sent()];
					case 7:
						_b.sent();
						return [3, 2];
					case 8: return [3, 10];
					case 9:
						reader.releaseLock();
						return [7];
					case 10: return [2];
				}
			});
		});
	}
	exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
	function isReadableStreamLike(obj) {
		return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
	}
	exports.isReadableStreamLike = isReadableStreamLike;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js
var require_innerFrom = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P ? value : new P(function(resolve) {
				resolve(value);
			});
		}
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
	var __generator = exports && exports.__generator || function(thisArg, body) {
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		}, f, y, t, g;
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	};
	var __asyncValues = exports && exports.__asyncValues || function(o) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var m = o[Symbol.asyncIterator], i;
		return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
			return this;
		}, i);
		function verb(n) {
			i[n] = o[n] && function(v) {
				return new Promise(function(resolve, reject) {
					v = o[n](v), settle(resolve, reject, v.done, v.value);
				});
			};
		}
		function settle(resolve, reject, d, v) {
			Promise.resolve(v).then(function(v) {
				resolve({
					value: v,
					done: d
				});
			}, reject);
		}
	};
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
	var isArrayLike_1 = require_isArrayLike();
	var isPromise_1 = require_isPromise();
	var Observable_1 = require_Observable();
	var isInteropObservable_1 = require_isInteropObservable();
	var isAsyncIterable_1 = require_isAsyncIterable();
	var throwUnobservableError_1 = require_throwUnobservableError();
	var isIterable_1 = require_isIterable();
	var isReadableStreamLike_1 = require_isReadableStreamLike();
	var isFunction_1 = require_isFunction();
	var reportUnhandledError_1 = require_reportUnhandledError();
	var observable_1 = require_observable();
	function innerFrom(input) {
		if (input instanceof Observable_1.Observable) return input;
		if (input != null) {
			if (isInteropObservable_1.isInteropObservable(input)) return fromInteropObservable(input);
			if (isArrayLike_1.isArrayLike(input)) return fromArrayLike(input);
			if (isPromise_1.isPromise(input)) return fromPromise(input);
			if (isAsyncIterable_1.isAsyncIterable(input)) return fromAsyncIterable(input);
			if (isIterable_1.isIterable(input)) return fromIterable(input);
			if (isReadableStreamLike_1.isReadableStreamLike(input)) return fromReadableStreamLike(input);
		}
		throw throwUnobservableError_1.createInvalidObservableTypeError(input);
	}
	exports.innerFrom = innerFrom;
	function fromInteropObservable(obj) {
		return new Observable_1.Observable(function(subscriber) {
			var obs = obj[observable_1.observable]();
			if (isFunction_1.isFunction(obs.subscribe)) return obs.subscribe(subscriber);
			throw new TypeError("Provided object does not correctly implement Symbol.observable");
		});
	}
	exports.fromInteropObservable = fromInteropObservable;
	function fromArrayLike(array) {
		return new Observable_1.Observable(function(subscriber) {
			for (var i = 0; i < array.length && !subscriber.closed; i++) subscriber.next(array[i]);
			subscriber.complete();
		});
	}
	exports.fromArrayLike = fromArrayLike;
	function fromPromise(promise) {
		return new Observable_1.Observable(function(subscriber) {
			promise.then(function(value) {
				if (!subscriber.closed) {
					subscriber.next(value);
					subscriber.complete();
				}
			}, function(err) {
				return subscriber.error(err);
			}).then(null, reportUnhandledError_1.reportUnhandledError);
		});
	}
	exports.fromPromise = fromPromise;
	function fromIterable(iterable) {
		return new Observable_1.Observable(function(subscriber) {
			var e_1, _a;
			try {
				for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
					var value = iterable_1_1.value;
					subscriber.next(value);
					if (subscriber.closed) return;
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
			subscriber.complete();
		});
	}
	exports.fromIterable = fromIterable;
	function fromAsyncIterable(asyncIterable) {
		return new Observable_1.Observable(function(subscriber) {
			process(asyncIterable, subscriber).catch(function(err) {
				return subscriber.error(err);
			});
		});
	}
	exports.fromAsyncIterable = fromAsyncIterable;
	function fromReadableStreamLike(readableStream) {
		return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
	}
	exports.fromReadableStreamLike = fromReadableStreamLike;
	function process(asyncIterable, subscriber) {
		var asyncIterable_1, asyncIterable_1_1;
		var e_2, _a;
		return __awaiter(this, void 0, void 0, function() {
			var value, e_2_1;
			return __generator(this, function(_b) {
				switch (_b.label) {
					case 0:
						_b.trys.push([
							0,
							5,
							6,
							11
						]);
						asyncIterable_1 = __asyncValues(asyncIterable);
						_b.label = 1;
					case 1: return [4, asyncIterable_1.next()];
					case 2:
						if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
						value = asyncIterable_1_1.value;
						subscriber.next(value);
						if (subscriber.closed) return [2];
						_b.label = 3;
					case 3: return [3, 1];
					case 4: return [3, 11];
					case 5:
						e_2_1 = _b.sent();
						e_2 = { error: e_2_1 };
						return [3, 11];
					case 6:
						_b.trys.push([
							6,
							,
							9,
							10
						]);
						if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
						return [4, _a.call(asyncIterable_1)];
					case 7:
						_b.sent();
						_b.label = 8;
					case 8: return [3, 10];
					case 9:
						if (e_2) throw e_2.error;
						return [7];
					case 10: return [7];
					case 11:
						subscriber.complete();
						return [2];
				}
			});
		});
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js
var require_executeSchedule = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.executeSchedule = void 0;
	function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
		if (delay === void 0) delay = 0;
		if (repeat === void 0) repeat = false;
		var scheduleSubscription = scheduler.schedule(function() {
			work();
			if (repeat) parentSubscription.add(this.schedule(null, delay));
			else this.unsubscribe();
		}, delay);
		parentSubscription.add(scheduleSubscription);
		if (!repeat) return scheduleSubscription;
	}
	exports.executeSchedule = executeSchedule;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/observeOn.js
var require_observeOn = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.observeOn = void 0;
	var executeSchedule_1 = require_executeSchedule();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function observeOn(scheduler, delay) {
		if (delay === void 0) delay = 0;
		return lift_1.operate(function(source, subscriber) {
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
					return subscriber.next(value);
				}, delay);
			}, function() {
				return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
					return subscriber.complete();
				}, delay);
			}, function(err) {
				return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
					return subscriber.error(err);
				}, delay);
			}));
		});
	}
	exports.observeOn = observeOn;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js
var require_subscribeOn = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.subscribeOn = void 0;
	var lift_1 = require_lift();
	function subscribeOn(scheduler, delay) {
		if (delay === void 0) delay = 0;
		return lift_1.operate(function(source, subscriber) {
			subscriber.add(scheduler.schedule(function() {
				return source.subscribe(subscriber);
			}, delay));
		});
	}
	exports.subscribeOn = subscribeOn;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js
var require_scheduleObservable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scheduleObservable = void 0;
	var innerFrom_1 = require_innerFrom();
	var observeOn_1 = require_observeOn();
	var subscribeOn_1 = require_subscribeOn();
	function scheduleObservable(input, scheduler) {
		return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
	}
	exports.scheduleObservable = scheduleObservable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js
var require_schedulePromise = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.schedulePromise = void 0;
	var innerFrom_1 = require_innerFrom();
	var observeOn_1 = require_observeOn();
	var subscribeOn_1 = require_subscribeOn();
	function schedulePromise(input, scheduler) {
		return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
	}
	exports.schedulePromise = schedulePromise;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js
var require_scheduleArray = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scheduleArray = void 0;
	var Observable_1 = require_Observable();
	function scheduleArray(input, scheduler) {
		return new Observable_1.Observable(function(subscriber) {
			var i = 0;
			return scheduler.schedule(function() {
				if (i === input.length) subscriber.complete();
				else {
					subscriber.next(input[i++]);
					if (!subscriber.closed) this.schedule();
				}
			});
		});
	}
	exports.scheduleArray = scheduleArray;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js
var require_scheduleIterable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scheduleIterable = void 0;
	var Observable_1 = require_Observable();
	var iterator_1 = require_iterator();
	var isFunction_1 = require_isFunction();
	var executeSchedule_1 = require_executeSchedule();
	function scheduleIterable(input, scheduler) {
		return new Observable_1.Observable(function(subscriber) {
			var iterator;
			executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
				iterator = input[iterator_1.iterator]();
				executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
					var _a;
					var value;
					var done;
					try {
						_a = iterator.next(), value = _a.value, done = _a.done;
					} catch (err) {
						subscriber.error(err);
						return;
					}
					if (done) subscriber.complete();
					else subscriber.next(value);
				}, 0, true);
			});
			return function() {
				return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
			};
		});
	}
	exports.scheduleIterable = scheduleIterable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js
var require_scheduleAsyncIterable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scheduleAsyncIterable = void 0;
	var Observable_1 = require_Observable();
	var executeSchedule_1 = require_executeSchedule();
	function scheduleAsyncIterable(input, scheduler) {
		if (!input) throw new Error("Iterable cannot be null");
		return new Observable_1.Observable(function(subscriber) {
			executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
				var iterator = input[Symbol.asyncIterator]();
				executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
					iterator.next().then(function(result) {
						if (result.done) subscriber.complete();
						else subscriber.next(result.value);
					});
				}, 0, true);
			});
		});
	}
	exports.scheduleAsyncIterable = scheduleAsyncIterable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js
var require_scheduleReadableStreamLike = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scheduleReadableStreamLike = void 0;
	var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
	var isReadableStreamLike_1 = require_isReadableStreamLike();
	function scheduleReadableStreamLike(input, scheduler) {
		return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
	}
	exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js
var require_scheduled = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scheduled = void 0;
	var scheduleObservable_1 = require_scheduleObservable();
	var schedulePromise_1 = require_schedulePromise();
	var scheduleArray_1 = require_scheduleArray();
	var scheduleIterable_1 = require_scheduleIterable();
	var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
	var isInteropObservable_1 = require_isInteropObservable();
	var isPromise_1 = require_isPromise();
	var isArrayLike_1 = require_isArrayLike();
	var isIterable_1 = require_isIterable();
	var isAsyncIterable_1 = require_isAsyncIterable();
	var throwUnobservableError_1 = require_throwUnobservableError();
	var isReadableStreamLike_1 = require_isReadableStreamLike();
	var scheduleReadableStreamLike_1 = require_scheduleReadableStreamLike();
	function scheduled(input, scheduler) {
		if (input != null) {
			if (isInteropObservable_1.isInteropObservable(input)) return scheduleObservable_1.scheduleObservable(input, scheduler);
			if (isArrayLike_1.isArrayLike(input)) return scheduleArray_1.scheduleArray(input, scheduler);
			if (isPromise_1.isPromise(input)) return schedulePromise_1.schedulePromise(input, scheduler);
			if (isAsyncIterable_1.isAsyncIterable(input)) return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
			if (isIterable_1.isIterable(input)) return scheduleIterable_1.scheduleIterable(input, scheduler);
			if (isReadableStreamLike_1.isReadableStreamLike(input)) return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
		}
		throw throwUnobservableError_1.createInvalidObservableTypeError(input);
	}
	exports.scheduled = scheduled;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/from.js
var require_from = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.from = void 0;
	var scheduled_1 = require_scheduled();
	var innerFrom_1 = require_innerFrom();
	function from(input, scheduler) {
		return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
	}
	exports.from = from;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/of.js
var require_of = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.of = void 0;
	var args_1 = require_args();
	var from_1 = require_from();
	function of() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(args);
		return from_1.from(args, scheduler);
	}
	exports.of = of;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/throwError.js
var require_throwError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.throwError = void 0;
	var Observable_1 = require_Observable();
	var isFunction_1 = require_isFunction();
	function throwError(errorOrErrorFactory, scheduler) {
		var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
			return errorOrErrorFactory;
		};
		var init = function(subscriber) {
			return subscriber.error(errorFactory());
		};
		return new Observable_1.Observable(scheduler ? function(subscriber) {
			return scheduler.schedule(init, 0, subscriber);
		} : init);
	}
	exports.throwError = throwError;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/Notification.js
var require_Notification = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
	var empty_1 = require_empty();
	var of_1 = require_of();
	var throwError_1 = require_throwError();
	var isFunction_1 = require_isFunction();
	(function(NotificationKind) {
		NotificationKind["NEXT"] = "N";
		NotificationKind["ERROR"] = "E";
		NotificationKind["COMPLETE"] = "C";
	})(exports.NotificationKind || (exports.NotificationKind = {}));
	exports.Notification = function() {
		function Notification(kind, value, error) {
			this.kind = kind;
			this.value = value;
			this.error = error;
			this.hasValue = kind === "N";
		}
		Notification.prototype.observe = function(observer) {
			return observeNotification(this, observer);
		};
		Notification.prototype.do = function(nextHandler, errorHandler, completeHandler) {
			var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
			return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
		};
		Notification.prototype.accept = function(nextOrObserver, error, complete) {
			var _a;
			return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
		};
		Notification.prototype.toObservable = function() {
			var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
			var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
				return error;
			}) : kind === "C" ? empty_1.EMPTY : 0;
			if (!result) throw new TypeError("Unexpected notification kind " + kind);
			return result;
		};
		Notification.createNext = function(value) {
			return new Notification("N", value);
		};
		Notification.createError = function(err) {
			return new Notification("E", void 0, err);
		};
		Notification.createComplete = function() {
			return Notification.completeNotification;
		};
		Notification.completeNotification = new Notification("C");
		return Notification;
	}();
	function observeNotification(notification, observer) {
		var _a, _b, _c;
		var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
		if (typeof kind !== "string") throw new TypeError("Invalid notification, missing \"kind\"");
		kind === "N" ? (_a = observer.next) === null || _a === void 0 || _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 || _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 || _c.call(observer);
	}
	exports.observeNotification = observeNotification;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isObservable = void 0;
	var Observable_1 = require_Observable();
	var isFunction_1 = require_isFunction();
	function isObservable(obj) {
		return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
	}
	exports.isObservable = isObservable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/EmptyError.js
var require_EmptyError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.EmptyError = void 0;
	exports.EmptyError = require_createErrorClass().createErrorClass(function(_super) {
		return function EmptyErrorImpl() {
			_super(this);
			this.name = "EmptyError";
			this.message = "no elements in sequence";
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.lastValueFrom = void 0;
	var EmptyError_1 = require_EmptyError();
	function lastValueFrom(source, config) {
		var hasConfig = typeof config === "object";
		return new Promise(function(resolve, reject) {
			var _hasValue = false;
			var _value;
			source.subscribe({
				next: function(value) {
					_value = value;
					_hasValue = true;
				},
				error: reject,
				complete: function() {
					if (_hasValue) resolve(_value);
					else if (hasConfig) resolve(config.defaultValue);
					else reject(new EmptyError_1.EmptyError());
				}
			});
		});
	}
	exports.lastValueFrom = lastValueFrom;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.firstValueFrom = void 0;
	var EmptyError_1 = require_EmptyError();
	var Subscriber_1 = require_Subscriber();
	function firstValueFrom(source, config) {
		var hasConfig = typeof config === "object";
		return new Promise(function(resolve, reject) {
			var subscriber = new Subscriber_1.SafeSubscriber({
				next: function(value) {
					resolve(value);
					subscriber.unsubscribe();
				},
				error: reject,
				complete: function() {
					if (hasConfig) resolve(config.defaultValue);
					else reject(new EmptyError_1.EmptyError());
				}
			});
			source.subscribe(subscriber);
		});
	}
	exports.firstValueFrom = firstValueFrom;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ArgumentOutOfRangeError = void 0;
	exports.ArgumentOutOfRangeError = require_createErrorClass().createErrorClass(function(_super) {
		return function ArgumentOutOfRangeErrorImpl() {
			_super(this);
			this.name = "ArgumentOutOfRangeError";
			this.message = "argument out of range";
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js
var require_NotFoundError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NotFoundError = void 0;
	exports.NotFoundError = require_createErrorClass().createErrorClass(function(_super) {
		return function NotFoundErrorImpl(message) {
			_super(this);
			this.name = "NotFoundError";
			this.message = message;
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/SequenceError.js
var require_SequenceError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SequenceError = void 0;
	exports.SequenceError = require_createErrorClass().createErrorClass(function(_super) {
		return function SequenceErrorImpl(message) {
			_super(this);
			this.name = "SequenceError";
			this.message = message;
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/isDate.js
var require_isDate = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isValidDate = void 0;
	function isValidDate(value) {
		return value instanceof Date && !isNaN(value);
	}
	exports.isValidDate = isValidDate;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/timeout.js
var require_timeout = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.timeout = exports.TimeoutError = void 0;
	var async_1 = require_async();
	var isDate_1 = require_isDate();
	var lift_1 = require_lift();
	var innerFrom_1 = require_innerFrom();
	var createErrorClass_1 = require_createErrorClass();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var executeSchedule_1 = require_executeSchedule();
	exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
		return function TimeoutErrorImpl(info) {
			if (info === void 0) info = null;
			_super(this);
			this.message = "Timeout has occurred";
			this.name = "TimeoutError";
			this.info = info;
		};
	});
	function timeout(config, schedulerArg) {
		var _a = isDate_1.isValidDate(config) ? { first: config } : typeof config === "number" ? { each: config } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
		if (first == null && each == null) throw new TypeError("No timeout provided.");
		return lift_1.operate(function(source, subscriber) {
			var originalSourceSubscription;
			var timerSubscription;
			var lastValue = null;
			var seen = 0;
			var startTimer = function(delay) {
				timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
					try {
						originalSourceSubscription.unsubscribe();
						innerFrom_1.innerFrom(_with({
							meta,
							lastValue,
							seen
						})).subscribe(subscriber);
					} catch (err) {
						subscriber.error(err);
					}
				}, delay);
			};
			originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
				seen++;
				subscriber.next(lastValue = value);
				each > 0 && startTimer(each);
			}, void 0, void 0, function() {
				if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
				lastValue = null;
			}));
			!seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
		});
	}
	exports.timeout = timeout;
	function timeoutErrorFactory(info) {
		throw new exports.TimeoutError(info);
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/map.js
var require_map = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.map = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function map(project, thisArg) {
		return lift_1.operate(function(source, subscriber) {
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				subscriber.next(project.call(thisArg, value, index++));
			}));
		});
	}
	exports.map = map;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js
var require_mapOneOrManyArgs = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mapOneOrManyArgs = void 0;
	var map_1 = require_map();
	var isArray = Array.isArray;
	function callOrApply(fn, args) {
		return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
	}
	function mapOneOrManyArgs(fn) {
		return map_1.map(function(args) {
			return callOrApply(fn, args);
		});
	}
	exports.mapOneOrManyArgs = mapOneOrManyArgs;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bindCallbackInternals = void 0;
	var isScheduler_1 = require_isScheduler();
	var Observable_1 = require_Observable();
	var subscribeOn_1 = require_subscribeOn();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	var observeOn_1 = require_observeOn();
	var AsyncSubject_1 = require_AsyncSubject();
	function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
		if (resultSelector) if (isScheduler_1.isScheduler(resultSelector)) scheduler = resultSelector;
		else return function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
		};
		if (scheduler) return function() {
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
		};
		return function() {
			var _this = this;
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			var subject = new AsyncSubject_1.AsyncSubject();
			var uninitialized = true;
			return new Observable_1.Observable(function(subscriber) {
				var subs = subject.subscribe(subscriber);
				if (uninitialized) {
					uninitialized = false;
					var isAsync_1 = false;
					var isComplete_1 = false;
					callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [function() {
						var results = [];
						for (var _i = 0; _i < arguments.length; _i++) results[_i] = arguments[_i];
						if (isNodeStyle) {
							var err = results.shift();
							if (err != null) {
								subject.error(err);
								return;
							}
						}
						subject.next(1 < results.length ? results : results[0]);
						isComplete_1 = true;
						if (isAsync_1) subject.complete();
					}]));
					if (isComplete_1) subject.complete();
					isAsync_1 = true;
				}
				return subs;
			});
		};
	}
	exports.bindCallbackInternals = bindCallbackInternals;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bindCallback = void 0;
	var bindCallbackInternals_1 = require_bindCallbackInternals();
	function bindCallback(callbackFunc, resultSelector, scheduler) {
		return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
	}
	exports.bindCallback = bindCallback;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bindNodeCallback = void 0;
	var bindCallbackInternals_1 = require_bindCallbackInternals();
	function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
		return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
	}
	exports.bindNodeCallback = bindNodeCallback;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js
var require_argsArgArrayOrObject = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.argsArgArrayOrObject = void 0;
	var isArray = Array.isArray;
	var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
	function argsArgArrayOrObject(args) {
		if (args.length === 1) {
			var first_1 = args[0];
			if (isArray(first_1)) return {
				args: first_1,
				keys: null
			};
			if (isPOJO(first_1)) {
				var keys = getKeys(first_1);
				return {
					args: keys.map(function(key) {
						return first_1[key];
					}),
					keys
				};
			}
		}
		return {
			args,
			keys: null
		};
	}
	exports.argsArgArrayOrObject = argsArgArrayOrObject;
	function isPOJO(obj) {
		return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/createObject.js
var require_createObject = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createObject = void 0;
	function createObject(keys, values) {
		return keys.reduce(function(result, key, i) {
			return result[key] = values[i], result;
		}, {});
	}
	exports.createObject = createObject;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js
var require_combineLatest$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.combineLatestInit = exports.combineLatest = void 0;
	var Observable_1 = require_Observable();
	var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
	var from_1 = require_from();
	var identity_1 = require_identity();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	var args_1 = require_args();
	var createObject_1 = require_createObject();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var executeSchedule_1 = require_executeSchedule();
	function combineLatest() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(args);
		var resultSelector = args_1.popResultSelector(args);
		var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
		if (observables.length === 0) return from_1.from([], scheduler);
		var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
			return createObject_1.createObject(keys, values);
		} : identity_1.identity));
		return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
	}
	exports.combineLatest = combineLatest;
	function combineLatestInit(observables, scheduler, valueTransform) {
		if (valueTransform === void 0) valueTransform = identity_1.identity;
		return function(subscriber) {
			maybeSchedule(scheduler, function() {
				var length = observables.length;
				var values = new Array(length);
				var active = length;
				var remainingFirstValues = length;
				var _loop_1 = function(i) {
					maybeSchedule(scheduler, function() {
						var source = from_1.from(observables[i], scheduler);
						var hasFirstValue = false;
						source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
							values[i] = value;
							if (!hasFirstValue) {
								hasFirstValue = true;
								remainingFirstValues--;
							}
							if (!remainingFirstValues) subscriber.next(valueTransform(values.slice()));
						}, function() {
							if (!--active) subscriber.complete();
						}));
					}, subscriber);
				};
				for (var i = 0; i < length; i++) _loop_1(i);
			}, subscriber);
		};
	}
	exports.combineLatestInit = combineLatestInit;
	function maybeSchedule(scheduler, execute, subscription) {
		if (scheduler) executeSchedule_1.executeSchedule(subscription, scheduler, execute);
		else execute();
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js
var require_mergeInternals = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeInternals = void 0;
	var innerFrom_1 = require_innerFrom();
	var executeSchedule_1 = require_executeSchedule();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
		var buffer = [];
		var active = 0;
		var index = 0;
		var isComplete = false;
		var checkComplete = function() {
			if (isComplete && !buffer.length && !active) subscriber.complete();
		};
		var outerNext = function(value) {
			return active < concurrent ? doInnerSub(value) : buffer.push(value);
		};
		var doInnerSub = function(value) {
			expand && subscriber.next(value);
			active++;
			var innerComplete = false;
			innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
				onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
				if (expand) outerNext(innerValue);
				else subscriber.next(innerValue);
			}, function() {
				innerComplete = true;
			}, void 0, function() {
				if (innerComplete) try {
					active--;
					var _loop_1 = function() {
						var bufferedValue = buffer.shift();
						if (innerSubScheduler) executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
							return doInnerSub(bufferedValue);
						});
						else doInnerSub(bufferedValue);
					};
					while (buffer.length && active < concurrent) _loop_1();
					checkComplete();
				} catch (err) {
					subscriber.error(err);
				}
			}));
		};
		source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
			isComplete = true;
			checkComplete();
		}));
		return function() {
			additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
		};
	}
	exports.mergeInternals = mergeInternals;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js
var require_mergeMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeMap = void 0;
	var map_1 = require_map();
	var innerFrom_1 = require_innerFrom();
	var lift_1 = require_lift();
	var mergeInternals_1 = require_mergeInternals();
	var isFunction_1 = require_isFunction();
	function mergeMap(project, resultSelector, concurrent) {
		if (concurrent === void 0) concurrent = Infinity;
		if (isFunction_1.isFunction(resultSelector)) return mergeMap(function(a, i) {
			return map_1.map(function(b, ii) {
				return resultSelector(a, b, i, ii);
			})(innerFrom_1.innerFrom(project(a, i)));
		}, concurrent);
		else if (typeof resultSelector === "number") concurrent = resultSelector;
		return lift_1.operate(function(source, subscriber) {
			return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
		});
	}
	exports.mergeMap = mergeMap;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js
var require_mergeAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeAll = void 0;
	var mergeMap_1 = require_mergeMap();
	var identity_1 = require_identity();
	function mergeAll(concurrent) {
		if (concurrent === void 0) concurrent = Infinity;
		return mergeMap_1.mergeMap(identity_1.identity, concurrent);
	}
	exports.mergeAll = mergeAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/concatAll.js
var require_concatAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.concatAll = void 0;
	var mergeAll_1 = require_mergeAll();
	function concatAll() {
		return mergeAll_1.mergeAll(1);
	}
	exports.concatAll = concatAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/concat.js
var require_concat$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.concat = void 0;
	var concatAll_1 = require_concatAll();
	var args_1 = require_args();
	var from_1 = require_from();
	function concat() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
	}
	exports.concat = concat;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defer = void 0;
	var Observable_1 = require_Observable();
	var innerFrom_1 = require_innerFrom();
	function defer(observableFactory) {
		return new Observable_1.Observable(function(subscriber) {
			innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
		});
	}
	exports.defer = defer;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.connectable = void 0;
	var Subject_1 = require_Subject();
	var Observable_1 = require_Observable();
	var defer_1 = require_defer();
	var DEFAULT_CONFIG = {
		connector: function() {
			return new Subject_1.Subject();
		},
		resetOnDisconnect: true
	};
	function connectable(source, config) {
		if (config === void 0) config = DEFAULT_CONFIG;
		var connection = null;
		var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
		var subject = connector();
		var result = new Observable_1.Observable(function(subscriber) {
			return subject.subscribe(subscriber);
		});
		result.connect = function() {
			if (!connection || connection.closed) {
				connection = defer_1.defer(function() {
					return source;
				}).subscribe(subject);
				if (resetOnDisconnect) connection.add(function() {
					return subject = connector();
				});
			}
			return connection;
		};
		return result;
	}
	exports.connectable = connectable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.forkJoin = void 0;
	var Observable_1 = require_Observable();
	var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
	var innerFrom_1 = require_innerFrom();
	var args_1 = require_args();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	var createObject_1 = require_createObject();
	function forkJoin() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var resultSelector = args_1.popResultSelector(args);
		var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
		var result = new Observable_1.Observable(function(subscriber) {
			var length = sources.length;
			if (!length) {
				subscriber.complete();
				return;
			}
			var values = new Array(length);
			var remainingCompletions = length;
			var remainingEmissions = length;
			var _loop_1 = function(sourceIndex) {
				var hasValue = false;
				innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
					if (!hasValue) {
						hasValue = true;
						remainingEmissions--;
					}
					values[sourceIndex] = value;
				}, function() {
					return remainingCompletions--;
				}, void 0, function() {
					if (!remainingCompletions || !hasValue) {
						if (!remainingEmissions) subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
						subscriber.complete();
					}
				}));
			};
			for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) _loop_1(sourceIndex);
		});
		return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
	}
	exports.forkJoin = forkJoin;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromEvent = void 0;
	var innerFrom_1 = require_innerFrom();
	var Observable_1 = require_Observable();
	var mergeMap_1 = require_mergeMap();
	var isArrayLike_1 = require_isArrayLike();
	var isFunction_1 = require_isFunction();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	var nodeEventEmitterMethods = ["addListener", "removeListener"];
	var eventTargetMethods = ["addEventListener", "removeEventListener"];
	var jqueryMethods = ["on", "off"];
	function fromEvent(target, eventName, options, resultSelector) {
		if (isFunction_1.isFunction(options)) {
			resultSelector = options;
			options = void 0;
		}
		if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
		var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
			return function(handler) {
				return target[methodName](eventName, handler, options);
			};
		}) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
		if (!add) {
			if (isArrayLike_1.isArrayLike(target)) return mergeMap_1.mergeMap(function(subTarget) {
				return fromEvent(subTarget, eventName, options);
			})(innerFrom_1.innerFrom(target));
		}
		if (!add) throw new TypeError("Invalid event target");
		return new Observable_1.Observable(function(subscriber) {
			var handler = function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				return subscriber.next(1 < args.length ? args : args[0]);
			};
			add(handler);
			return function() {
				return remove(handler);
			};
		});
	}
	exports.fromEvent = fromEvent;
	function toCommonHandlerRegistry(target, eventName) {
		return function(methodName) {
			return function(handler) {
				return target[methodName](eventName, handler);
			};
		};
	}
	function isNodeStyleEventEmitter(target) {
		return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
	}
	function isJQueryStyleEventEmitter(target) {
		return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
	}
	function isEventTarget(target) {
		return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromEventPattern = void 0;
	var Observable_1 = require_Observable();
	var isFunction_1 = require_isFunction();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	function fromEventPattern(addHandler, removeHandler, resultSelector) {
		if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
		return new Observable_1.Observable(function(subscriber) {
			var handler = function() {
				var e = [];
				for (var _i = 0; _i < arguments.length; _i++) e[_i] = arguments[_i];
				return subscriber.next(e.length === 1 ? e[0] : e);
			};
			var retValue = addHandler(handler);
			return isFunction_1.isFunction(removeHandler) ? function() {
				return removeHandler(handler, retValue);
			} : void 0;
		});
	}
	exports.fromEventPattern = fromEventPattern;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __generator = exports && exports.__generator || function(thisArg, body) {
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		}, f, y, t, g;
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.generate = void 0;
	var identity_1 = require_identity();
	var isScheduler_1 = require_isScheduler();
	var defer_1 = require_defer();
	var scheduleIterable_1 = require_scheduleIterable();
	function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
		var _a, _b;
		var resultSelector;
		var initialState;
		if (arguments.length === 1) _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
		else {
			initialState = initialStateOrOptions;
			if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
				resultSelector = identity_1.identity;
				scheduler = resultSelectorOrScheduler;
			} else resultSelector = resultSelectorOrScheduler;
		}
		function gen() {
			var state;
			return __generator(this, function(_a) {
				switch (_a.label) {
					case 0:
						state = initialState;
						_a.label = 1;
					case 1:
						if (!(!condition || condition(state))) return [3, 4];
						return [4, resultSelector(state)];
					case 2:
						_a.sent();
						_a.label = 3;
					case 3:
						state = iterate(state);
						return [3, 1];
					case 4: return [2];
				}
			});
		}
		return defer_1.defer(scheduler ? function() {
			return scheduleIterable_1.scheduleIterable(gen(), scheduler);
		} : gen);
	}
	exports.generate = generate;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.iif = void 0;
	var defer_1 = require_defer();
	function iif(condition, trueResult, falseResult) {
		return defer_1.defer(function() {
			return condition() ? trueResult : falseResult;
		});
	}
	exports.iif = iif;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/timer.js
var require_timer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.timer = void 0;
	var Observable_1 = require_Observable();
	var async_1 = require_async();
	var isScheduler_1 = require_isScheduler();
	var isDate_1 = require_isDate();
	function timer(dueTime, intervalOrScheduler, scheduler) {
		if (dueTime === void 0) dueTime = 0;
		if (scheduler === void 0) scheduler = async_1.async;
		var intervalDuration = -1;
		if (intervalOrScheduler != null) if (isScheduler_1.isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
		else intervalDuration = intervalOrScheduler;
		return new Observable_1.Observable(function(subscriber) {
			var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
			if (due < 0) due = 0;
			var n = 0;
			return scheduler.schedule(function() {
				if (!subscriber.closed) {
					subscriber.next(n++);
					if (0 <= intervalDuration) this.schedule(void 0, intervalDuration);
					else subscriber.complete();
				}
			}, due);
		});
	}
	exports.timer = timer;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/interval.js
var require_interval = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.interval = void 0;
	var async_1 = require_async();
	var timer_1 = require_timer();
	function interval(period, scheduler) {
		if (period === void 0) period = 0;
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		if (period < 0) period = 0;
		return timer_1.timer(period, period, scheduler);
	}
	exports.interval = interval;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.merge = void 0;
	var mergeAll_1 = require_mergeAll();
	var innerFrom_1 = require_innerFrom();
	var empty_1 = require_empty();
	var args_1 = require_args();
	var from_1 = require_from();
	function merge() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(args);
		var concurrent = args_1.popNumber(args, Infinity);
		var sources = args;
		return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
	}
	exports.merge = merge;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.never = exports.NEVER = void 0;
	var Observable_1 = require_Observable();
	var noop_1 = require_noop();
	exports.NEVER = new Observable_1.Observable(noop_1.noop);
	function never() {
		return exports.NEVER;
	}
	exports.never = never;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js
var require_argsOrArgArray = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.argsOrArgArray = void 0;
	var isArray = Array.isArray;
	function argsOrArgArray(args) {
		return args.length === 1 && isArray(args[0]) ? args[0] : args;
	}
	exports.argsOrArgArray = argsOrArgArray;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js
var require_onErrorResumeNext = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.onErrorResumeNext = void 0;
	var Observable_1 = require_Observable();
	var argsOrArgArray_1 = require_argsOrArgArray();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var noop_1 = require_noop();
	var innerFrom_1 = require_innerFrom();
	function onErrorResumeNext() {
		var sources = [];
		for (var _i = 0; _i < arguments.length; _i++) sources[_i] = arguments[_i];
		var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
		return new Observable_1.Observable(function(subscriber) {
			var sourceIndex = 0;
			var subscribeNext = function() {
				if (sourceIndex < nextSources.length) {
					var nextSource = void 0;
					try {
						nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
					} catch (err) {
						subscribeNext();
						return;
					}
					var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, void 0, noop_1.noop, noop_1.noop);
					nextSource.subscribe(innerSubscriber);
					innerSubscriber.add(subscribeNext);
				} else subscriber.complete();
			};
			subscribeNext();
		});
	}
	exports.onErrorResumeNext = onErrorResumeNext;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pairs = void 0;
	var from_1 = require_from();
	function pairs(obj, scheduler) {
		return from_1.from(Object.entries(obj), scheduler);
	}
	exports.pairs = pairs;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/util/not.js
var require_not = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.not = void 0;
	function not(pred, thisArg) {
		return function(value, index) {
			return !pred.call(thisArg, value, index);
		};
	}
	exports.not = not;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/filter.js
var require_filter = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.filter = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function filter(predicate, thisArg) {
		return lift_1.operate(function(source, subscriber) {
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return predicate.call(thisArg, value, index++) && subscriber.next(value);
			}));
		});
	}
	exports.filter = filter;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.partition = void 0;
	var not_1 = require_not();
	var filter_1 = require_filter();
	var innerFrom_1 = require_innerFrom();
	function partition(source, predicate, thisArg) {
		return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
	}
	exports.partition = partition;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/race.js
var require_race$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.raceInit = exports.race = void 0;
	var Observable_1 = require_Observable();
	var innerFrom_1 = require_innerFrom();
	var argsOrArgArray_1 = require_argsOrArgArray();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function race() {
		var sources = [];
		for (var _i = 0; _i < arguments.length; _i++) sources[_i] = arguments[_i];
		sources = argsOrArgArray_1.argsOrArgArray(sources);
		return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
	}
	exports.race = race;
	function raceInit(sources) {
		return function(subscriber) {
			var subscriptions = [];
			var _loop_1 = function(i) {
				subscriptions.push(innerFrom_1.innerFrom(sources[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
					if (subscriptions) {
						for (var s = 0; s < subscriptions.length; s++) s !== i && subscriptions[s].unsubscribe();
						subscriptions = null;
					}
					subscriber.next(value);
				})));
			};
			for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) _loop_1(i);
		};
	}
	exports.raceInit = raceInit;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.range = void 0;
	var Observable_1 = require_Observable();
	var empty_1 = require_empty();
	function range(start, count, scheduler) {
		if (count == null) {
			count = start;
			start = 0;
		}
		if (count <= 0) return empty_1.EMPTY;
		var end = count + start;
		return new Observable_1.Observable(scheduler ? function(subscriber) {
			var n = start;
			return scheduler.schedule(function() {
				if (n < end) {
					subscriber.next(n++);
					this.schedule();
				} else subscriber.complete();
			});
		} : function(subscriber) {
			var n = start;
			while (n < end && !subscriber.closed) subscriber.next(n++);
			subscriber.complete();
		});
	}
	exports.range = range;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.using = void 0;
	var Observable_1 = require_Observable();
	var innerFrom_1 = require_innerFrom();
	var empty_1 = require_empty();
	function using(resourceFactory, observableFactory) {
		return new Observable_1.Observable(function(subscriber) {
			var resource = resourceFactory();
			var result = observableFactory(resource);
			(result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY).subscribe(subscriber);
			return function() {
				if (resource) resource.unsubscribe();
			};
		});
	}
	exports.using = using;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/zip.js
var require_zip$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.zip = void 0;
	var Observable_1 = require_Observable();
	var innerFrom_1 = require_innerFrom();
	var argsOrArgArray_1 = require_argsOrArgArray();
	var empty_1 = require_empty();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var args_1 = require_args();
	function zip() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var resultSelector = args_1.popResultSelector(args);
		var sources = argsOrArgArray_1.argsOrArgArray(args);
		return sources.length ? new Observable_1.Observable(function(subscriber) {
			var buffers = sources.map(function() {
				return [];
			});
			var completed = sources.map(function() {
				return false;
			});
			subscriber.add(function() {
				buffers = completed = null;
			});
			var _loop_1 = function(sourceIndex) {
				innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
					buffers[sourceIndex].push(value);
					if (buffers.every(function(buffer) {
						return buffer.length;
					})) {
						var result = buffers.map(function(buffer) {
							return buffer.shift();
						});
						subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
						if (buffers.some(function(buffer, i) {
							return !buffer.length && completed[i];
						})) subscriber.complete();
					}
				}, function() {
					completed[sourceIndex] = true;
					!buffers[sourceIndex].length && subscriber.complete();
				}));
			};
			for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) _loop_1(sourceIndex);
			return function() {
				buffers = completed = null;
			};
		}) : empty_1.EMPTY;
	}
	exports.zip = zip;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/audit.js
var require_audit = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.audit = void 0;
	var lift_1 = require_lift();
	var innerFrom_1 = require_innerFrom();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function audit(durationSelector) {
		return lift_1.operate(function(source, subscriber) {
			var hasValue = false;
			var lastValue = null;
			var durationSubscriber = null;
			var isComplete = false;
			var endDuration = function() {
				durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
				durationSubscriber = null;
				if (hasValue) {
					hasValue = false;
					var value = lastValue;
					lastValue = null;
					subscriber.next(value);
				}
				isComplete && subscriber.complete();
			};
			var cleanupDuration = function() {
				durationSubscriber = null;
				isComplete && subscriber.complete();
			};
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				hasValue = true;
				lastValue = value;
				if (!durationSubscriber) innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
			}, function() {
				isComplete = true;
				(!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
			}));
		});
	}
	exports.audit = audit;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/auditTime.js
var require_auditTime = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.auditTime = void 0;
	var async_1 = require_async();
	var audit_1 = require_audit();
	var timer_1 = require_timer();
	function auditTime(duration, scheduler) {
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		return audit_1.audit(function() {
			return timer_1.timer(duration, scheduler);
		});
	}
	exports.auditTime = auditTime;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/buffer.js
var require_buffer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.buffer = void 0;
	var lift_1 = require_lift();
	var noop_1 = require_noop();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	function buffer(closingNotifier) {
		return lift_1.operate(function(source, subscriber) {
			var currentBuffer = [];
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return currentBuffer.push(value);
			}, function() {
				subscriber.next(currentBuffer);
				subscriber.complete();
			}));
			innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				var b = currentBuffer;
				currentBuffer = [];
				subscriber.next(b);
			}, noop_1.noop));
			return function() {
				currentBuffer = null;
			};
		});
	}
	exports.buffer = buffer;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js
var require_bufferCount = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bufferCount = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var arrRemove_1 = require_arrRemove();
	function bufferCount(bufferSize, startBufferEvery) {
		if (startBufferEvery === void 0) startBufferEvery = null;
		startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
		return lift_1.operate(function(source, subscriber) {
			var buffers = [];
			var count = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var e_1, _a, e_2, _b;
				var toEmit = null;
				if (count++ % startBufferEvery === 0) buffers.push([]);
				try {
					for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
						var buffer = buffers_1_1.value;
						buffer.push(value);
						if (bufferSize <= buffer.length) {
							toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
							toEmit.push(buffer);
						}
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				if (toEmit) try {
					for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
						var buffer = toEmit_1_1.value;
						arrRemove_1.arrRemove(buffers, buffer);
						subscriber.next(buffer);
					}
				} catch (e_2_1) {
					e_2 = { error: e_2_1 };
				} finally {
					try {
						if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
					} finally {
						if (e_2) throw e_2.error;
					}
				}
			}, function() {
				var e_3, _a;
				try {
					for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
						var buffer = buffers_2_1.value;
						subscriber.next(buffer);
					}
				} catch (e_3_1) {
					e_3 = { error: e_3_1 };
				} finally {
					try {
						if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
					} finally {
						if (e_3) throw e_3.error;
					}
				}
				subscriber.complete();
			}, void 0, function() {
				buffers = null;
			}));
		});
	}
	exports.bufferCount = bufferCount;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js
var require_bufferTime = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bufferTime = void 0;
	var Subscription_1 = require_Subscription();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var arrRemove_1 = require_arrRemove();
	var async_1 = require_async();
	var args_1 = require_args();
	var executeSchedule_1 = require_executeSchedule();
	function bufferTime(bufferTimeSpan) {
		var _a, _b;
		var otherArgs = [];
		for (var _i = 1; _i < arguments.length; _i++) otherArgs[_i - 1] = arguments[_i];
		var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
		var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
		var maxBufferSize = otherArgs[1] || Infinity;
		return lift_1.operate(function(source, subscriber) {
			var bufferRecords = [];
			var restartOnEmit = false;
			var emit = function(record) {
				var buffer = record.buffer;
				record.subs.unsubscribe();
				arrRemove_1.arrRemove(bufferRecords, record);
				subscriber.next(buffer);
				restartOnEmit && startBuffer();
			};
			var startBuffer = function() {
				if (bufferRecords) {
					var subs = new Subscription_1.Subscription();
					subscriber.add(subs);
					var record_1 = {
						buffer: [],
						subs
					};
					bufferRecords.push(record_1);
					executeSchedule_1.executeSchedule(subs, scheduler, function() {
						return emit(record_1);
					}, bufferTimeSpan);
				}
			};
			if (bufferCreationInterval !== null && bufferCreationInterval >= 0) executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
			else restartOnEmit = true;
			startBuffer();
			var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var e_1, _a;
				var recordsCopy = bufferRecords.slice();
				try {
					for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
						var record = recordsCopy_1_1.value;
						var buffer = record.buffer;
						buffer.push(value);
						maxBufferSize <= buffer.length && emit(record);
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
			}, function() {
				while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) subscriber.next(bufferRecords.shift().buffer);
				bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 || bufferTimeSubscriber.unsubscribe();
				subscriber.complete();
				subscriber.unsubscribe();
			}, void 0, function() {
				return bufferRecords = null;
			});
			source.subscribe(bufferTimeSubscriber);
		});
	}
	exports.bufferTime = bufferTime;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js
var require_bufferToggle = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bufferToggle = void 0;
	var Subscription_1 = require_Subscription();
	var lift_1 = require_lift();
	var innerFrom_1 = require_innerFrom();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var noop_1 = require_noop();
	var arrRemove_1 = require_arrRemove();
	function bufferToggle(openings, closingSelector) {
		return lift_1.operate(function(source, subscriber) {
			var buffers = [];
			innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
				var buffer = [];
				buffers.push(buffer);
				var closingSubscription = new Subscription_1.Subscription();
				var emitBuffer = function() {
					arrRemove_1.arrRemove(buffers, buffer);
					subscriber.next(buffer);
					closingSubscription.unsubscribe();
				};
				closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
			}, noop_1.noop));
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var e_1, _a;
				try {
					for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) buffers_1_1.value.push(value);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
			}, function() {
				while (buffers.length > 0) subscriber.next(buffers.shift());
				subscriber.complete();
			}));
		});
	}
	exports.bufferToggle = bufferToggle;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js
var require_bufferWhen = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.bufferWhen = void 0;
	var lift_1 = require_lift();
	var noop_1 = require_noop();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	function bufferWhen(closingSelector) {
		return lift_1.operate(function(source, subscriber) {
			var buffer = null;
			var closingSubscriber = null;
			var openBuffer = function() {
				closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
				var b = buffer;
				buffer = [];
				b && subscriber.next(b);
				innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
			};
			openBuffer();
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
			}, function() {
				buffer && subscriber.next(buffer);
				subscriber.complete();
			}, void 0, function() {
				return buffer = closingSubscriber = null;
			}));
		});
	}
	exports.bufferWhen = bufferWhen;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/catchError.js
var require_catchError = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.catchError = void 0;
	var innerFrom_1 = require_innerFrom();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var lift_1 = require_lift();
	function catchError(selector) {
		return lift_1.operate(function(source, subscriber) {
			var innerSub = null;
			var syncUnsub = false;
			var handledResult;
			innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
				handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
				if (innerSub) {
					innerSub.unsubscribe();
					innerSub = null;
					handledResult.subscribe(subscriber);
				} else syncUnsub = true;
			}));
			if (syncUnsub) {
				innerSub.unsubscribe();
				innerSub = null;
				handledResult.subscribe(subscriber);
			}
		});
	}
	exports.catchError = catchError;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js
var require_scanInternals = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scanInternals = void 0;
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
		return function(source, subscriber) {
			var hasState = hasSeed;
			var state = seed;
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var i = index++;
				state = hasState ? accumulator(state, value, i) : (hasState = true, value);
				emitOnNext && subscriber.next(state);
			}, emitBeforeComplete && (function() {
				hasState && subscriber.next(state);
				subscriber.complete();
			})));
		};
	}
	exports.scanInternals = scanInternals;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/reduce.js
var require_reduce = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.reduce = void 0;
	var scanInternals_1 = require_scanInternals();
	var lift_1 = require_lift();
	function reduce(accumulator, seed) {
		return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
	}
	exports.reduce = reduce;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/toArray.js
var require_toArray = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.toArray = void 0;
	var reduce_1 = require_reduce();
	var lift_1 = require_lift();
	var arrReducer = function(arr, value) {
		return arr.push(value), arr;
	};
	function toArray() {
		return lift_1.operate(function(source, subscriber) {
			reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
		});
	}
	exports.toArray = toArray;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js
var require_joinAllInternals = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.joinAllInternals = void 0;
	var identity_1 = require_identity();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	var pipe_1 = require_pipe();
	var mergeMap_1 = require_mergeMap();
	var toArray_1 = require_toArray();
	function joinAllInternals(joinFn, project) {
		return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
			return joinFn(sources);
		}), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
	}
	exports.joinAllInternals = joinAllInternals;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js
var require_combineLatestAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.combineLatestAll = void 0;
	var combineLatest_1 = require_combineLatest$1();
	var joinAllInternals_1 = require_joinAllInternals();
	function combineLatestAll(project) {
		return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
	}
	exports.combineLatestAll = combineLatestAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/combineAll.js
var require_combineAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.combineAll = void 0;
	exports.combineAll = require_combineLatestAll().combineLatestAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js
var require_combineLatest = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.combineLatest = void 0;
	var combineLatest_1 = require_combineLatest$1();
	var lift_1 = require_lift();
	var argsOrArgArray_1 = require_argsOrArgArray();
	var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
	var pipe_1 = require_pipe();
	var args_1 = require_args();
	function combineLatest() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var resultSelector = args_1.popResultSelector(args);
		return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
			combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
		});
	}
	exports.combineLatest = combineLatest;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js
var require_combineLatestWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.combineLatestWith = void 0;
	var combineLatest_1 = require_combineLatest();
	function combineLatestWith() {
		var otherSources = [];
		for (var _i = 0; _i < arguments.length; _i++) otherSources[_i] = arguments[_i];
		return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
	}
	exports.combineLatestWith = combineLatestWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/concatMap.js
var require_concatMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.concatMap = void 0;
	var mergeMap_1 = require_mergeMap();
	var isFunction_1 = require_isFunction();
	function concatMap(project, resultSelector) {
		return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
	}
	exports.concatMap = concatMap;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js
var require_concatMapTo = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.concatMapTo = void 0;
	var concatMap_1 = require_concatMap();
	var isFunction_1 = require_isFunction();
	function concatMapTo(innerObservable, resultSelector) {
		return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
			return innerObservable;
		}, resultSelector) : concatMap_1.concatMap(function() {
			return innerObservable;
		});
	}
	exports.concatMapTo = concatMapTo;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/concat.js
var require_concat = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.concat = void 0;
	var lift_1 = require_lift();
	var concatAll_1 = require_concatAll();
	var args_1 = require_args();
	var from_1 = require_from();
	function concat() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(args);
		return lift_1.operate(function(source, subscriber) {
			concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
		});
	}
	exports.concat = concat;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/concatWith.js
var require_concatWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.concatWith = void 0;
	var concat_1 = require_concat();
	function concatWith() {
		var otherSources = [];
		for (var _i = 0; _i < arguments.length; _i++) otherSources[_i] = arguments[_i];
		return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
	}
	exports.concatWith = concatWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js
var require_fromSubscribable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fromSubscribable = void 0;
	var Observable_1 = require_Observable();
	function fromSubscribable(subscribable) {
		return new Observable_1.Observable(function(subscriber) {
			return subscribable.subscribe(subscriber);
		});
	}
	exports.fromSubscribable = fromSubscribable;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/connect.js
var require_connect = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.connect = void 0;
	var Subject_1 = require_Subject();
	var innerFrom_1 = require_innerFrom();
	var lift_1 = require_lift();
	var fromSubscribable_1 = require_fromSubscribable();
	var DEFAULT_CONFIG = { connector: function() {
		return new Subject_1.Subject();
	} };
	function connect(selector, config) {
		if (config === void 0) config = DEFAULT_CONFIG;
		var connector = config.connector;
		return lift_1.operate(function(source, subscriber) {
			var subject = connector();
			innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
			subscriber.add(source.subscribe(subject));
		});
	}
	exports.connect = connect;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/count.js
var require_count = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.count = void 0;
	var reduce_1 = require_reduce();
	function count(predicate) {
		return reduce_1.reduce(function(total, value, i) {
			return !predicate || predicate(value, i) ? total + 1 : total;
		}, 0);
	}
	exports.count = count;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/debounce.js
var require_debounce = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.debounce = void 0;
	var lift_1 = require_lift();
	var noop_1 = require_noop();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	function debounce(durationSelector) {
		return lift_1.operate(function(source, subscriber) {
			var hasValue = false;
			var lastValue = null;
			var durationSubscriber = null;
			var emit = function() {
				durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
				durationSubscriber = null;
				if (hasValue) {
					hasValue = false;
					var value = lastValue;
					lastValue = null;
					subscriber.next(value);
				}
			};
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
				hasValue = true;
				lastValue = value;
				durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
				innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
			}, function() {
				emit();
				subscriber.complete();
			}, void 0, function() {
				lastValue = durationSubscriber = null;
			}));
		});
	}
	exports.debounce = debounce;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js
var require_debounceTime = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.debounceTime = void 0;
	var async_1 = require_async();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function debounceTime(dueTime, scheduler) {
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		return lift_1.operate(function(source, subscriber) {
			var activeTask = null;
			var lastValue = null;
			var lastTime = null;
			var emit = function() {
				if (activeTask) {
					activeTask.unsubscribe();
					activeTask = null;
					var value = lastValue;
					lastValue = null;
					subscriber.next(value);
				}
			};
			function emitWhenIdle() {
				var targetTime = lastTime + dueTime;
				var now = scheduler.now();
				if (now < targetTime) {
					activeTask = this.schedule(void 0, targetTime - now);
					subscriber.add(activeTask);
					return;
				}
				emit();
			}
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				lastValue = value;
				lastTime = scheduler.now();
				if (!activeTask) {
					activeTask = scheduler.schedule(emitWhenIdle, dueTime);
					subscriber.add(activeTask);
				}
			}, function() {
				emit();
				subscriber.complete();
			}, void 0, function() {
				lastValue = activeTask = null;
			}));
		});
	}
	exports.debounceTime = debounceTime;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defaultIfEmpty = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function defaultIfEmpty(defaultValue) {
		return lift_1.operate(function(source, subscriber) {
			var hasValue = false;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				hasValue = true;
				subscriber.next(value);
			}, function() {
				if (!hasValue) subscriber.next(defaultValue);
				subscriber.complete();
			}));
		});
	}
	exports.defaultIfEmpty = defaultIfEmpty;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/take.js
var require_take = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.take = void 0;
	var empty_1 = require_empty();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function take(count) {
		return count <= 0 ? function() {
			return empty_1.EMPTY;
		} : lift_1.operate(function(source, subscriber) {
			var seen = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				if (++seen <= count) {
					subscriber.next(value);
					if (count <= seen) subscriber.complete();
				}
			}));
		});
	}
	exports.take = take;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js
var require_ignoreElements = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ignoreElements = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var noop_1 = require_noop();
	function ignoreElements() {
		return lift_1.operate(function(source, subscriber) {
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
		});
	}
	exports.ignoreElements = ignoreElements;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mapTo.js
var require_mapTo = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mapTo = void 0;
	var map_1 = require_map();
	function mapTo(value) {
		return map_1.map(function() {
			return value;
		});
	}
	exports.mapTo = mapTo;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js
var require_delayWhen = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.delayWhen = void 0;
	var concat_1 = require_concat$1();
	var take_1 = require_take();
	var ignoreElements_1 = require_ignoreElements();
	var mapTo_1 = require_mapTo();
	var mergeMap_1 = require_mergeMap();
	var innerFrom_1 = require_innerFrom();
	function delayWhen(delayDurationSelector, subscriptionDelay) {
		if (subscriptionDelay) return function(source) {
			return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
		};
		return mergeMap_1.mergeMap(function(value, index) {
			return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
		});
	}
	exports.delayWhen = delayWhen;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/delay.js
var require_delay = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.delay = void 0;
	var async_1 = require_async();
	var delayWhen_1 = require_delayWhen();
	var timer_1 = require_timer();
	function delay(due, scheduler) {
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		var duration = timer_1.timer(due, scheduler);
		return delayWhen_1.delayWhen(function() {
			return duration;
		});
	}
	exports.delay = delay;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js
var require_dematerialize = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.dematerialize = void 0;
	var Notification_1 = require_Notification();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function dematerialize() {
		return lift_1.operate(function(source, subscriber) {
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
				return Notification_1.observeNotification(notification, subscriber);
			}));
		});
	}
	exports.dematerialize = dematerialize;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/distinct.js
var require_distinct = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.distinct = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var noop_1 = require_noop();
	var innerFrom_1 = require_innerFrom();
	function distinct(keySelector, flushes) {
		return lift_1.operate(function(source, subscriber) {
			var distinctKeys = /* @__PURE__ */ new Set();
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var key = keySelector ? keySelector(value) : value;
				if (!distinctKeys.has(key)) {
					distinctKeys.add(key);
					subscriber.next(value);
				}
			}));
			flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				return distinctKeys.clear();
			}, noop_1.noop));
		});
	}
	exports.distinct = distinct;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js
var require_distinctUntilChanged = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.distinctUntilChanged = void 0;
	var identity_1 = require_identity();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function distinctUntilChanged(comparator, keySelector) {
		if (keySelector === void 0) keySelector = identity_1.identity;
		comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
		return lift_1.operate(function(source, subscriber) {
			var previousKey;
			var first = true;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var currentKey = keySelector(value);
				if (first || !comparator(previousKey, currentKey)) {
					first = false;
					previousKey = currentKey;
					subscriber.next(value);
				}
			}));
		});
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	function defaultCompare(a, b) {
		return a === b;
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js
var require_distinctUntilKeyChanged = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.distinctUntilKeyChanged = void 0;
	var distinctUntilChanged_1 = require_distinctUntilChanged();
	function distinctUntilKeyChanged(key, compare) {
		return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
			return compare ? compare(x[key], y[key]) : x[key] === y[key];
		});
	}
	exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js
var require_throwIfEmpty = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.throwIfEmpty = void 0;
	var EmptyError_1 = require_EmptyError();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function throwIfEmpty(errorFactory) {
		if (errorFactory === void 0) errorFactory = defaultErrorFactory;
		return lift_1.operate(function(source, subscriber) {
			var hasValue = false;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				hasValue = true;
				subscriber.next(value);
			}, function() {
				return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
			}));
		});
	}
	exports.throwIfEmpty = throwIfEmpty;
	function defaultErrorFactory() {
		return new EmptyError_1.EmptyError();
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/elementAt.js
var require_elementAt = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.elementAt = void 0;
	var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
	var filter_1 = require_filter();
	var throwIfEmpty_1 = require_throwIfEmpty();
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	var take_1 = require_take();
	function elementAt(index, defaultValue) {
		if (index < 0) throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
		var hasDefaultValue = arguments.length >= 2;
		return function(source) {
			return source.pipe(filter_1.filter(function(v, i) {
				return i === index;
			}), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
				return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
			}));
		};
	}
	exports.elementAt = elementAt;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/endWith.js
var require_endWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.endWith = void 0;
	var concat_1 = require_concat$1();
	var of_1 = require_of();
	function endWith() {
		var values = [];
		for (var _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
		return function(source) {
			return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
		};
	}
	exports.endWith = endWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/every.js
var require_every = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.every = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function every(predicate, thisArg) {
		return lift_1.operate(function(source, subscriber) {
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				if (!predicate.call(thisArg, value, index++, source)) {
					subscriber.next(false);
					subscriber.complete();
				}
			}, function() {
				subscriber.next(true);
				subscriber.complete();
			}));
		});
	}
	exports.every = every;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js
var require_exhaustMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.exhaustMap = void 0;
	var map_1 = require_map();
	var innerFrom_1 = require_innerFrom();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function exhaustMap(project, resultSelector) {
		if (resultSelector) return function(source) {
			return source.pipe(exhaustMap(function(a, i) {
				return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
					return resultSelector(a, b, i, ii);
				}));
			}));
		};
		return lift_1.operate(function(source, subscriber) {
			var index = 0;
			var innerSub = null;
			var isComplete = false;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
				if (!innerSub) {
					innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
						innerSub = null;
						isComplete && subscriber.complete();
					});
					innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
				}
			}, function() {
				isComplete = true;
				!innerSub && subscriber.complete();
			}));
		});
	}
	exports.exhaustMap = exhaustMap;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js
var require_exhaustAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.exhaustAll = void 0;
	var exhaustMap_1 = require_exhaustMap();
	var identity_1 = require_identity();
	function exhaustAll() {
		return exhaustMap_1.exhaustMap(identity_1.identity);
	}
	exports.exhaustAll = exhaustAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/exhaust.js
var require_exhaust = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.exhaust = void 0;
	exports.exhaust = require_exhaustAll().exhaustAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/expand.js
var require_expand = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.expand = void 0;
	var lift_1 = require_lift();
	var mergeInternals_1 = require_mergeInternals();
	function expand(project, concurrent, scheduler) {
		if (concurrent === void 0) concurrent = Infinity;
		concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
		return lift_1.operate(function(source, subscriber) {
			return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, void 0, true, scheduler);
		});
	}
	exports.expand = expand;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/finalize.js
var require_finalize = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.finalize = void 0;
	var lift_1 = require_lift();
	function finalize(callback) {
		return lift_1.operate(function(source, subscriber) {
			try {
				source.subscribe(subscriber);
			} finally {
				subscriber.add(callback);
			}
		});
	}
	exports.finalize = finalize;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/find.js
var require_find = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createFind = exports.find = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function find(predicate, thisArg) {
		return lift_1.operate(createFind(predicate, thisArg, "value"));
	}
	exports.find = find;
	function createFind(predicate, thisArg, emit) {
		var findIndex = emit === "index";
		return function(source, subscriber) {
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var i = index++;
				if (predicate.call(thisArg, value, i, source)) {
					subscriber.next(findIndex ? i : value);
					subscriber.complete();
				}
			}, function() {
				subscriber.next(findIndex ? -1 : void 0);
				subscriber.complete();
			}));
		};
	}
	exports.createFind = createFind;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/findIndex.js
var require_findIndex = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.findIndex = void 0;
	var lift_1 = require_lift();
	var find_1 = require_find();
	function findIndex(predicate, thisArg) {
		return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
	}
	exports.findIndex = findIndex;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/first.js
var require_first = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.first = void 0;
	var EmptyError_1 = require_EmptyError();
	var filter_1 = require_filter();
	var take_1 = require_take();
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	var throwIfEmpty_1 = require_throwIfEmpty();
	var identity_1 = require_identity();
	function first(predicate, defaultValue) {
		var hasDefaultValue = arguments.length >= 2;
		return function(source) {
			return source.pipe(predicate ? filter_1.filter(function(v, i) {
				return predicate(v, i, source);
			}) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
				return new EmptyError_1.EmptyError();
			}));
		};
	}
	exports.first = first;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/groupBy.js
var require_groupBy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.groupBy = void 0;
	var Observable_1 = require_Observable();
	var innerFrom_1 = require_innerFrom();
	var Subject_1 = require_Subject();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function groupBy(keySelector, elementOrOptions, duration, connector) {
		return lift_1.operate(function(source, subscriber) {
			var element;
			if (!elementOrOptions || typeof elementOrOptions === "function") element = elementOrOptions;
			else duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
			var groups = /* @__PURE__ */ new Map();
			var notify = function(cb) {
				groups.forEach(cb);
				cb(subscriber);
			};
			var handleError = function(err) {
				return notify(function(consumer) {
					return consumer.error(err);
				});
			};
			var activeGroups = 0;
			var teardownAttempted = false;
			var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
				try {
					var key_1 = keySelector(value);
					var group_1 = groups.get(key_1);
					if (!group_1) {
						groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
						var grouped = createGroupedObservable(key_1, group_1);
						subscriber.next(grouped);
						if (duration) {
							var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
								group_1.complete();
								durationSubscriber_1 === null || durationSubscriber_1 === void 0 || durationSubscriber_1.unsubscribe();
							}, void 0, void 0, function() {
								return groups.delete(key_1);
							});
							groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
						}
					}
					group_1.next(element ? element(value) : value);
				} catch (err) {
					handleError(err);
				}
			}, function() {
				return notify(function(consumer) {
					return consumer.complete();
				});
			}, handleError, function() {
				return groups.clear();
			}, function() {
				teardownAttempted = true;
				return activeGroups === 0;
			});
			source.subscribe(groupBySourceSubscriber);
			function createGroupedObservable(key, groupSubject) {
				var result = new Observable_1.Observable(function(groupSubscriber) {
					activeGroups++;
					var innerSub = groupSubject.subscribe(groupSubscriber);
					return function() {
						innerSub.unsubscribe();
						--activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
					};
				});
				result.key = key;
				return result;
			}
		});
	}
	exports.groupBy = groupBy;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js
var require_isEmpty = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isEmpty = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function isEmpty() {
		return lift_1.operate(function(source, subscriber) {
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				subscriber.next(false);
				subscriber.complete();
			}, function() {
				subscriber.next(true);
				subscriber.complete();
			}));
		});
	}
	exports.isEmpty = isEmpty;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/takeLast.js
var require_takeLast = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.takeLast = void 0;
	var empty_1 = require_empty();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function takeLast(count) {
		return count <= 0 ? function() {
			return empty_1.EMPTY;
		} : lift_1.operate(function(source, subscriber) {
			var buffer = [];
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				buffer.push(value);
				count < buffer.length && buffer.shift();
			}, function() {
				var e_1, _a;
				try {
					for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
						var value = buffer_1_1.value;
						subscriber.next(value);
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				subscriber.complete();
			}, void 0, function() {
				buffer = null;
			}));
		});
	}
	exports.takeLast = takeLast;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/last.js
var require_last = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.last = void 0;
	var EmptyError_1 = require_EmptyError();
	var filter_1 = require_filter();
	var takeLast_1 = require_takeLast();
	var throwIfEmpty_1 = require_throwIfEmpty();
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	var identity_1 = require_identity();
	function last(predicate, defaultValue) {
		var hasDefaultValue = arguments.length >= 2;
		return function(source) {
			return source.pipe(predicate ? filter_1.filter(function(v, i) {
				return predicate(v, i, source);
			}) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
				return new EmptyError_1.EmptyError();
			}));
		};
	}
	exports.last = last;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/materialize.js
var require_materialize = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.materialize = void 0;
	var Notification_1 = require_Notification();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function materialize() {
		return lift_1.operate(function(source, subscriber) {
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				subscriber.next(Notification_1.Notification.createNext(value));
			}, function() {
				subscriber.next(Notification_1.Notification.createComplete());
				subscriber.complete();
			}, function(err) {
				subscriber.next(Notification_1.Notification.createError(err));
				subscriber.complete();
			}));
		});
	}
	exports.materialize = materialize;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/max.js
var require_max = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.max = void 0;
	var reduce_1 = require_reduce();
	var isFunction_1 = require_isFunction();
	function max(comparer) {
		return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
			return comparer(x, y) > 0 ? x : y;
		} : function(x, y) {
			return x > y ? x : y;
		});
	}
	exports.max = max;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/flatMap.js
var require_flatMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.flatMap = void 0;
	exports.flatMap = require_mergeMap().mergeMap;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js
var require_mergeMapTo = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeMapTo = void 0;
	var mergeMap_1 = require_mergeMap();
	var isFunction_1 = require_isFunction();
	function mergeMapTo(innerObservable, resultSelector, concurrent) {
		if (concurrent === void 0) concurrent = Infinity;
		if (isFunction_1.isFunction(resultSelector)) return mergeMap_1.mergeMap(function() {
			return innerObservable;
		}, resultSelector, concurrent);
		if (typeof resultSelector === "number") concurrent = resultSelector;
		return mergeMap_1.mergeMap(function() {
			return innerObservable;
		}, concurrent);
	}
	exports.mergeMapTo = mergeMapTo;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js
var require_mergeScan = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeScan = void 0;
	var lift_1 = require_lift();
	var mergeInternals_1 = require_mergeInternals();
	function mergeScan(accumulator, seed, concurrent) {
		if (concurrent === void 0) concurrent = Infinity;
		return lift_1.operate(function(source, subscriber) {
			var state = seed;
			return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
				return accumulator(state, value, index);
			}, concurrent, function(value) {
				state = value;
			}, false, void 0, function() {
				return state = null;
			});
		});
	}
	exports.mergeScan = mergeScan;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/merge.js
var require_merge = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.merge = void 0;
	var lift_1 = require_lift();
	var mergeAll_1 = require_mergeAll();
	var args_1 = require_args();
	var from_1 = require_from();
	function merge() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(args);
		var concurrent = args_1.popNumber(args, Infinity);
		return lift_1.operate(function(source, subscriber) {
			mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
		});
	}
	exports.merge = merge;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js
var require_mergeWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeWith = void 0;
	var merge_1 = require_merge();
	function mergeWith() {
		var otherSources = [];
		for (var _i = 0; _i < arguments.length; _i++) otherSources[_i] = arguments[_i];
		return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
	}
	exports.mergeWith = mergeWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/min.js
var require_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.min = void 0;
	var reduce_1 = require_reduce();
	var isFunction_1 = require_isFunction();
	function min(comparer) {
		return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
			return comparer(x, y) < 0 ? x : y;
		} : function(x, y) {
			return x < y ? x : y;
		});
	}
	exports.min = min;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/multicast.js
var require_multicast = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.multicast = void 0;
	var ConnectableObservable_1 = require_ConnectableObservable();
	var isFunction_1 = require_isFunction();
	var connect_1 = require_connect();
	function multicast(subjectOrSubjectFactory, selector) {
		var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
			return subjectOrSubjectFactory;
		};
		if (isFunction_1.isFunction(selector)) return connect_1.connect(selector, { connector: subjectFactory });
		return function(source) {
			return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
		};
	}
	exports.multicast = multicast;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js
var require_onErrorResumeNextWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
	var argsOrArgArray_1 = require_argsOrArgArray();
	var onErrorResumeNext_1 = require_onErrorResumeNext();
	function onErrorResumeNextWith() {
		var sources = [];
		for (var _i = 0; _i < arguments.length; _i++) sources[_i] = arguments[_i];
		var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
		return function(source) {
			return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([source], __read(nextSources)));
		};
	}
	exports.onErrorResumeNextWith = onErrorResumeNextWith;
	exports.onErrorResumeNext = onErrorResumeNextWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/pairwise.js
var require_pairwise = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pairwise = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function pairwise() {
		return lift_1.operate(function(source, subscriber) {
			var prev;
			var hasPrev = false;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var p = prev;
				prev = value;
				hasPrev && subscriber.next([p, value]);
				hasPrev = true;
			}));
		});
	}
	exports.pairwise = pairwise;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/pluck.js
var require_pluck = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pluck = void 0;
	var map_1 = require_map();
	function pluck() {
		var properties = [];
		for (var _i = 0; _i < arguments.length; _i++) properties[_i] = arguments[_i];
		var length = properties.length;
		if (length === 0) throw new Error("list of properties cannot be empty.");
		return map_1.map(function(x) {
			var currentProp = x;
			for (var i = 0; i < length; i++) {
				var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
				if (typeof p !== "undefined") currentProp = p;
				else return;
			}
			return currentProp;
		});
	}
	exports.pluck = pluck;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/publish.js
var require_publish = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.publish = void 0;
	var Subject_1 = require_Subject();
	var multicast_1 = require_multicast();
	var connect_1 = require_connect();
	function publish(selector) {
		return selector ? function(source) {
			return connect_1.connect(selector)(source);
		} : function(source) {
			return multicast_1.multicast(new Subject_1.Subject())(source);
		};
	}
	exports.publish = publish;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js
var require_publishBehavior = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.publishBehavior = void 0;
	var BehaviorSubject_1 = require_BehaviorSubject();
	var ConnectableObservable_1 = require_ConnectableObservable();
	function publishBehavior(initialValue) {
		return function(source) {
			var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
			return new ConnectableObservable_1.ConnectableObservable(source, function() {
				return subject;
			});
		};
	}
	exports.publishBehavior = publishBehavior;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/publishLast.js
var require_publishLast = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.publishLast = void 0;
	var AsyncSubject_1 = require_AsyncSubject();
	var ConnectableObservable_1 = require_ConnectableObservable();
	function publishLast() {
		return function(source) {
			var subject = new AsyncSubject_1.AsyncSubject();
			return new ConnectableObservable_1.ConnectableObservable(source, function() {
				return subject;
			});
		};
	}
	exports.publishLast = publishLast;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js
var require_publishReplay = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.publishReplay = void 0;
	var ReplaySubject_1 = require_ReplaySubject();
	var multicast_1 = require_multicast();
	var isFunction_1 = require_isFunction();
	function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
		if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) timestampProvider = selectorOrScheduler;
		var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : void 0;
		return function(source) {
			return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
		};
	}
	exports.publishReplay = publishReplay;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/raceWith.js
var require_raceWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.raceWith = void 0;
	var race_1 = require_race$1();
	var lift_1 = require_lift();
	var identity_1 = require_identity();
	function raceWith() {
		var otherSources = [];
		for (var _i = 0; _i < arguments.length; _i++) otherSources[_i] = arguments[_i];
		return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
			race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
		});
	}
	exports.raceWith = raceWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/repeat.js
var require_repeat = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.repeat = void 0;
	var empty_1 = require_empty();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	var timer_1 = require_timer();
	function repeat(countOrConfig) {
		var _a;
		var count = Infinity;
		var delay;
		if (countOrConfig != null) if (typeof countOrConfig === "object") _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
		else count = countOrConfig;
		return count <= 0 ? function() {
			return empty_1.EMPTY;
		} : lift_1.operate(function(source, subscriber) {
			var soFar = 0;
			var sourceSub;
			var resubscribe = function() {
				sourceSub === null || sourceSub === void 0 || sourceSub.unsubscribe();
				sourceSub = null;
				if (delay != null) {
					var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
					var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
						notifierSubscriber_1.unsubscribe();
						subscribeToSource();
					});
					notifier.subscribe(notifierSubscriber_1);
				} else subscribeToSource();
			};
			var subscribeToSource = function() {
				var syncUnsub = false;
				sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
					if (++soFar < count) if (sourceSub) resubscribe();
					else syncUnsub = true;
					else subscriber.complete();
				}));
				if (syncUnsub) resubscribe();
			};
			subscribeToSource();
		});
	}
	exports.repeat = repeat;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js
var require_repeatWhen = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.repeatWhen = void 0;
	var innerFrom_1 = require_innerFrom();
	var Subject_1 = require_Subject();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function repeatWhen(notifier) {
		return lift_1.operate(function(source, subscriber) {
			var innerSub;
			var syncResub = false;
			var completions$;
			var isNotifierComplete = false;
			var isMainComplete = false;
			var checkComplete = function() {
				return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
			};
			var getCompletionSubject = function() {
				if (!completions$) {
					completions$ = new Subject_1.Subject();
					innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
						if (innerSub) subscribeForRepeatWhen();
						else syncResub = true;
					}, function() {
						isNotifierComplete = true;
						checkComplete();
					}));
				}
				return completions$;
			};
			var subscribeForRepeatWhen = function() {
				isMainComplete = false;
				innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
					isMainComplete = true;
					!checkComplete() && getCompletionSubject().next();
				}));
				if (syncResub) {
					innerSub.unsubscribe();
					innerSub = null;
					syncResub = false;
					subscribeForRepeatWhen();
				}
			};
			subscribeForRepeatWhen();
		});
	}
	exports.repeatWhen = repeatWhen;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/retry.js
var require_retry = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.retry = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var identity_1 = require_identity();
	var timer_1 = require_timer();
	var innerFrom_1 = require_innerFrom();
	function retry(configOrCount) {
		if (configOrCount === void 0) configOrCount = Infinity;
		var config;
		if (configOrCount && typeof configOrCount === "object") config = configOrCount;
		else config = { count: configOrCount };
		var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
		return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
			var soFar = 0;
			var innerSub;
			var subscribeForRetry = function() {
				var syncUnsub = false;
				innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
					if (resetOnSuccess) soFar = 0;
					subscriber.next(value);
				}, void 0, function(err) {
					if (soFar++ < count) {
						var resub_1 = function() {
							if (innerSub) {
								innerSub.unsubscribe();
								innerSub = null;
								subscribeForRetry();
							} else syncUnsub = true;
						};
						if (delay != null) {
							var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
							var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
								notifierSubscriber_1.unsubscribe();
								resub_1();
							}, function() {
								subscriber.complete();
							});
							notifier.subscribe(notifierSubscriber_1);
						} else resub_1();
					} else subscriber.error(err);
				}));
				if (syncUnsub) {
					innerSub.unsubscribe();
					innerSub = null;
					subscribeForRetry();
				}
			};
			subscribeForRetry();
		});
	}
	exports.retry = retry;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js
var require_retryWhen = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.retryWhen = void 0;
	var innerFrom_1 = require_innerFrom();
	var Subject_1 = require_Subject();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function retryWhen(notifier) {
		return lift_1.operate(function(source, subscriber) {
			var innerSub;
			var syncResub = false;
			var errors$;
			var subscribeForRetryWhen = function() {
				innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
					if (!errors$) {
						errors$ = new Subject_1.Subject();
						innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
							return innerSub ? subscribeForRetryWhen() : syncResub = true;
						}));
					}
					if (errors$) errors$.next(err);
				}));
				if (syncResub) {
					innerSub.unsubscribe();
					innerSub = null;
					syncResub = false;
					subscribeForRetryWhen();
				}
			};
			subscribeForRetryWhen();
		});
	}
	exports.retryWhen = retryWhen;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/sample.js
var require_sample = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sample = void 0;
	var innerFrom_1 = require_innerFrom();
	var lift_1 = require_lift();
	var noop_1 = require_noop();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function sample(notifier) {
		return lift_1.operate(function(source, subscriber) {
			var hasValue = false;
			var lastValue = null;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				hasValue = true;
				lastValue = value;
			}));
			innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				if (hasValue) {
					hasValue = false;
					var value = lastValue;
					lastValue = null;
					subscriber.next(value);
				}
			}, noop_1.noop));
		});
	}
	exports.sample = sample;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js
var require_sampleTime = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sampleTime = void 0;
	var async_1 = require_async();
	var sample_1 = require_sample();
	var interval_1 = require_interval();
	function sampleTime(period, scheduler) {
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		return sample_1.sample(interval_1.interval(period, scheduler));
	}
	exports.sampleTime = sampleTime;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/scan.js
var require_scan = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.scan = void 0;
	var lift_1 = require_lift();
	var scanInternals_1 = require_scanInternals();
	function scan(accumulator, seed) {
		return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
	}
	exports.scan = scan;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js
var require_sequenceEqual = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sequenceEqual = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	function sequenceEqual(compareTo, comparator) {
		if (comparator === void 0) comparator = function(a, b) {
			return a === b;
		};
		return lift_1.operate(function(source, subscriber) {
			var aState = createState();
			var bState = createState();
			var emit = function(isEqual) {
				subscriber.next(isEqual);
				subscriber.complete();
			};
			var createSubscriber = function(selfState, otherState) {
				var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
					var buffer = otherState.buffer, complete = otherState.complete;
					if (buffer.length === 0) complete ? emit(false) : selfState.buffer.push(a);
					else !comparator(a, buffer.shift()) && emit(false);
				}, function() {
					selfState.complete = true;
					var complete = otherState.complete, buffer = otherState.buffer;
					complete && emit(buffer.length === 0);
					sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 || sequenceEqualSubscriber.unsubscribe();
				});
				return sequenceEqualSubscriber;
			};
			source.subscribe(createSubscriber(aState, bState));
			innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
		});
	}
	exports.sequenceEqual = sequenceEqual;
	function createState() {
		return {
			buffer: [],
			complete: false
		};
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/share.js
var require_share = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.share = void 0;
	var innerFrom_1 = require_innerFrom();
	var Subject_1 = require_Subject();
	var Subscriber_1 = require_Subscriber();
	var lift_1 = require_lift();
	function share(options) {
		if (options === void 0) options = {};
		var _a = options.connector, connector = _a === void 0 ? function() {
			return new Subject_1.Subject();
		} : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
		return function(wrapperSource) {
			var connection;
			var resetConnection;
			var subject;
			var refCount = 0;
			var hasCompleted = false;
			var hasErrored = false;
			var cancelReset = function() {
				resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
				resetConnection = void 0;
			};
			var reset = function() {
				cancelReset();
				connection = subject = void 0;
				hasCompleted = hasErrored = false;
			};
			var resetAndUnsubscribe = function() {
				var conn = connection;
				reset();
				conn === null || conn === void 0 || conn.unsubscribe();
			};
			return lift_1.operate(function(source, subscriber) {
				refCount++;
				if (!hasErrored && !hasCompleted) cancelReset();
				var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
				subscriber.add(function() {
					refCount--;
					if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
				});
				dest.subscribe(subscriber);
				if (!connection && refCount > 0) {
					connection = new Subscriber_1.SafeSubscriber({
						next: function(value) {
							return dest.next(value);
						},
						error: function(err) {
							hasErrored = true;
							cancelReset();
							resetConnection = handleReset(reset, resetOnError, err);
							dest.error(err);
						},
						complete: function() {
							hasCompleted = true;
							cancelReset();
							resetConnection = handleReset(reset, resetOnComplete);
							dest.complete();
						}
					});
					innerFrom_1.innerFrom(source).subscribe(connection);
				}
			})(wrapperSource);
		};
	}
	exports.share = share;
	function handleReset(reset, on) {
		var args = [];
		for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
		if (on === true) {
			reset();
			return;
		}
		if (on === false) return;
		var onSubscriber = new Subscriber_1.SafeSubscriber({ next: function() {
			onSubscriber.unsubscribe();
			reset();
		} });
		return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
	}
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js
var require_shareReplay = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.shareReplay = void 0;
	var ReplaySubject_1 = require_ReplaySubject();
	var share_1 = require_share();
	function shareReplay(configOrBufferSize, windowTime, scheduler) {
		var _a, _b, _c;
		var bufferSize;
		var refCount = false;
		if (configOrBufferSize && typeof configOrBufferSize === "object") _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
		else bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
		return share_1.share({
			connector: function() {
				return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
			},
			resetOnError: true,
			resetOnComplete: false,
			resetOnRefCountZero: refCount
		});
	}
	exports.shareReplay = shareReplay;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/single.js
var require_single = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.single = void 0;
	var EmptyError_1 = require_EmptyError();
	var SequenceError_1 = require_SequenceError();
	var NotFoundError_1 = require_NotFoundError();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function single(predicate) {
		return lift_1.operate(function(source, subscriber) {
			var hasValue = false;
			var singleValue;
			var seenValue = false;
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				seenValue = true;
				if (!predicate || predicate(value, index++, source)) {
					hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
					hasValue = true;
					singleValue = value;
				}
			}, function() {
				if (hasValue) {
					subscriber.next(singleValue);
					subscriber.complete();
				} else subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
			}));
		});
	}
	exports.single = single;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/skip.js
var require_skip = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.skip = void 0;
	var filter_1 = require_filter();
	function skip(count) {
		return filter_1.filter(function(_, index) {
			return count <= index;
		});
	}
	exports.skip = skip;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/skipLast.js
var require_skipLast = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.skipLast = void 0;
	var identity_1 = require_identity();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function skipLast(skipCount) {
		return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
			var ring = new Array(skipCount);
			var seen = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var valueIndex = seen++;
				if (valueIndex < skipCount) ring[valueIndex] = value;
				else {
					var index = valueIndex % skipCount;
					var oldValue = ring[index];
					ring[index] = value;
					subscriber.next(oldValue);
				}
			}));
			return function() {
				ring = null;
			};
		});
	}
	exports.skipLast = skipLast;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js
var require_skipUntil = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.skipUntil = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	var noop_1 = require_noop();
	function skipUntil(notifier) {
		return lift_1.operate(function(source, subscriber) {
			var taking = false;
			var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				skipSubscriber === null || skipSubscriber === void 0 || skipSubscriber.unsubscribe();
				taking = true;
			}, noop_1.noop);
			innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return taking && subscriber.next(value);
			}));
		});
	}
	exports.skipUntil = skipUntil;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js
var require_skipWhile = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.skipWhile = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function skipWhile(predicate) {
		return lift_1.operate(function(source, subscriber) {
			var taking = false;
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
			}));
		});
	}
	exports.skipWhile = skipWhile;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/startWith.js
var require_startWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.startWith = void 0;
	var concat_1 = require_concat$1();
	var args_1 = require_args();
	var lift_1 = require_lift();
	function startWith() {
		var values = [];
		for (var _i = 0; _i < arguments.length; _i++) values[_i] = arguments[_i];
		var scheduler = args_1.popScheduler(values);
		return lift_1.operate(function(source, subscriber) {
			(scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
		});
	}
	exports.startWith = startWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/switchMap.js
var require_switchMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.switchMap = void 0;
	var innerFrom_1 = require_innerFrom();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function switchMap(project, resultSelector) {
		return lift_1.operate(function(source, subscriber) {
			var innerSubscriber = null;
			var index = 0;
			var isComplete = false;
			var checkComplete = function() {
				return isComplete && !innerSubscriber && subscriber.complete();
			};
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
				var innerIndex = 0;
				var outerIndex = index++;
				innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
					return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
				}, function() {
					innerSubscriber = null;
					checkComplete();
				}));
			}, function() {
				isComplete = true;
				checkComplete();
			}));
		});
	}
	exports.switchMap = switchMap;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/switchAll.js
var require_switchAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.switchAll = void 0;
	var switchMap_1 = require_switchMap();
	var identity_1 = require_identity();
	function switchAll() {
		return switchMap_1.switchMap(identity_1.identity);
	}
	exports.switchAll = switchAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js
var require_switchMapTo = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.switchMapTo = void 0;
	var switchMap_1 = require_switchMap();
	var isFunction_1 = require_isFunction();
	function switchMapTo(innerObservable, resultSelector) {
		return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
			return innerObservable;
		}, resultSelector) : switchMap_1.switchMap(function() {
			return innerObservable;
		});
	}
	exports.switchMapTo = switchMapTo;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/switchScan.js
var require_switchScan = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.switchScan = void 0;
	var switchMap_1 = require_switchMap();
	var lift_1 = require_lift();
	function switchScan(accumulator, seed) {
		return lift_1.operate(function(source, subscriber) {
			var state = seed;
			switchMap_1.switchMap(function(value, index) {
				return accumulator(state, value, index);
			}, function(_, innerValue) {
				return state = innerValue, innerValue;
			})(source).subscribe(subscriber);
			return function() {
				state = null;
			};
		});
	}
	exports.switchScan = switchScan;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js
var require_takeUntil = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.takeUntil = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	var noop_1 = require_noop();
	function takeUntil(notifier) {
		return lift_1.operate(function(source, subscriber) {
			innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				return subscriber.complete();
			}, noop_1.noop));
			!subscriber.closed && source.subscribe(subscriber);
		});
	}
	exports.takeUntil = takeUntil;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js
var require_takeWhile = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.takeWhile = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function takeWhile(predicate, inclusive) {
		if (inclusive === void 0) inclusive = false;
		return lift_1.operate(function(source, subscriber) {
			var index = 0;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var result = predicate(value, index++);
				(result || inclusive) && subscriber.next(value);
				!result && subscriber.complete();
			}));
		});
	}
	exports.takeWhile = takeWhile;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/tap.js
var require_tap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.tap = void 0;
	var isFunction_1 = require_isFunction();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var identity_1 = require_identity();
	function tap(observerOrNext, error, complete) {
		var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
			next: observerOrNext,
			error,
			complete
		} : observerOrNext;
		return tapObserver ? lift_1.operate(function(source, subscriber) {
			var _a;
			(_a = tapObserver.subscribe) === null || _a === void 0 || _a.call(tapObserver);
			var isUnsub = true;
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var _a;
				(_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
				subscriber.next(value);
			}, function() {
				var _a;
				isUnsub = false;
				(_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
				subscriber.complete();
			}, function(err) {
				var _a;
				isUnsub = false;
				(_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
				subscriber.error(err);
			}, function() {
				var _a, _b;
				if (isUnsub) (_a = tapObserver.unsubscribe) === null || _a === void 0 || _a.call(tapObserver);
				(_b = tapObserver.finalize) === null || _b === void 0 || _b.call(tapObserver);
			}));
		}) : identity_1.identity;
	}
	exports.tap = tap;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/throttle.js
var require_throttle = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.throttle = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	function throttle(durationSelector, config) {
		return lift_1.operate(function(source, subscriber) {
			var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
			var hasValue = false;
			var sendValue = null;
			var throttled = null;
			var isComplete = false;
			var endThrottling = function() {
				throttled === null || throttled === void 0 || throttled.unsubscribe();
				throttled = null;
				if (trailing) {
					send();
					isComplete && subscriber.complete();
				}
			};
			var cleanupThrottling = function() {
				throttled = null;
				isComplete && subscriber.complete();
			};
			var startThrottle = function(value) {
				return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
			};
			var send = function() {
				if (hasValue) {
					hasValue = false;
					var value = sendValue;
					sendValue = null;
					subscriber.next(value);
					!isComplete && startThrottle(value);
				}
			};
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				hasValue = true;
				sendValue = value;
				!(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
			}, function() {
				isComplete = true;
				!(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
			}));
		});
	}
	exports.throttle = throttle;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js
var require_throttleTime = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.throttleTime = void 0;
	var async_1 = require_async();
	var throttle_1 = require_throttle();
	var timer_1 = require_timer();
	function throttleTime(duration, scheduler, config) {
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		var duration$ = timer_1.timer(duration, scheduler);
		return throttle_1.throttle(function() {
			return duration$;
		}, config);
	}
	exports.throttleTime = throttleTime;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js
var require_timeInterval = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TimeInterval = exports.timeInterval = void 0;
	var async_1 = require_async();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function timeInterval(scheduler) {
		if (scheduler === void 0) scheduler = async_1.asyncScheduler;
		return lift_1.operate(function(source, subscriber) {
			var last = scheduler.now();
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var now = scheduler.now();
				var interval = now - last;
				last = now;
				subscriber.next(new TimeInterval(value, interval));
			}));
		});
	}
	exports.timeInterval = timeInterval;
	var TimeInterval = function() {
		function TimeInterval(value, interval) {
			this.value = value;
			this.interval = interval;
		}
		return TimeInterval;
	}();
	exports.TimeInterval = TimeInterval;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js
var require_timeoutWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.timeoutWith = void 0;
	var async_1 = require_async();
	var isDate_1 = require_isDate();
	var timeout_1 = require_timeout();
	function timeoutWith(due, withObservable, scheduler) {
		var first;
		var each;
		var _with;
		scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
		if (isDate_1.isValidDate(due)) first = due;
		else if (typeof due === "number") each = due;
		if (withObservable) _with = function() {
			return withObservable;
		};
		else throw new TypeError("No observable provided to switch to");
		if (first == null && each == null) throw new TypeError("No timeout provided.");
		return timeout_1.timeout({
			first,
			each,
			scheduler,
			with: _with
		});
	}
	exports.timeoutWith = timeoutWith;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/timestamp.js
var require_timestamp = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.timestamp = void 0;
	var dateTimestampProvider_1 = require_dateTimestampProvider();
	var map_1 = require_map();
	function timestamp(timestampProvider) {
		if (timestampProvider === void 0) timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
		return map_1.map(function(value) {
			return {
				value,
				timestamp: timestampProvider.now()
			};
		});
	}
	exports.timestamp = timestamp;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/window.js
var require_window = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.window = void 0;
	var Subject_1 = require_Subject();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var noop_1 = require_noop();
	var innerFrom_1 = require_innerFrom();
	function window(windowBoundaries) {
		return lift_1.operate(function(source, subscriber) {
			var windowSubject = new Subject_1.Subject();
			subscriber.next(windowSubject.asObservable());
			var errorHandler = function(err) {
				windowSubject.error(err);
				subscriber.error(err);
			};
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
			}, function() {
				windowSubject.complete();
				subscriber.complete();
			}, errorHandler));
			innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
				windowSubject.complete();
				subscriber.next(windowSubject = new Subject_1.Subject());
			}, noop_1.noop, errorHandler));
			return function() {
				windowSubject === null || windowSubject === void 0 || windowSubject.unsubscribe();
				windowSubject = null;
			};
		});
	}
	exports.window = window;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/windowCount.js
var require_windowCount = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.windowCount = void 0;
	var Subject_1 = require_Subject();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	function windowCount(windowSize, startWindowEvery) {
		if (startWindowEvery === void 0) startWindowEvery = 0;
		var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
		return lift_1.operate(function(source, subscriber) {
			var windows = [new Subject_1.Subject()];
			var count = 0;
			subscriber.next(windows[0].asObservable());
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var e_1, _a;
				try {
					for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) windows_1_1.value.next(value);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				var c = count - windowSize + 1;
				if (c >= 0 && c % startEvery === 0) windows.shift().complete();
				if (++count % startEvery === 0) {
					var window_2 = new Subject_1.Subject();
					windows.push(window_2);
					subscriber.next(window_2.asObservable());
				}
			}, function() {
				while (windows.length > 0) windows.shift().complete();
				subscriber.complete();
			}, function(err) {
				while (windows.length > 0) windows.shift().error(err);
				subscriber.error(err);
			}, function() {
				windows = null;
			}));
		});
	}
	exports.windowCount = windowCount;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/windowTime.js
var require_windowTime = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.windowTime = void 0;
	var Subject_1 = require_Subject();
	var async_1 = require_async();
	var Subscription_1 = require_Subscription();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var arrRemove_1 = require_arrRemove();
	var args_1 = require_args();
	var executeSchedule_1 = require_executeSchedule();
	function windowTime(windowTimeSpan) {
		var _a, _b;
		var otherArgs = [];
		for (var _i = 1; _i < arguments.length; _i++) otherArgs[_i - 1] = arguments[_i];
		var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
		var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
		var maxWindowSize = otherArgs[1] || Infinity;
		return lift_1.operate(function(source, subscriber) {
			var windowRecords = [];
			var restartOnClose = false;
			var closeWindow = function(record) {
				var window = record.window, subs = record.subs;
				window.complete();
				subs.unsubscribe();
				arrRemove_1.arrRemove(windowRecords, record);
				restartOnClose && startWindow();
			};
			var startWindow = function() {
				if (windowRecords) {
					var subs = new Subscription_1.Subscription();
					subscriber.add(subs);
					var window_1 = new Subject_1.Subject();
					var record_1 = {
						window: window_1,
						subs,
						seen: 0
					};
					windowRecords.push(record_1);
					subscriber.next(window_1.asObservable());
					executeSchedule_1.executeSchedule(subs, scheduler, function() {
						return closeWindow(record_1);
					}, windowTimeSpan);
				}
			};
			if (windowCreationInterval !== null && windowCreationInterval >= 0) executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
			else restartOnClose = true;
			startWindow();
			var loop = function(cb) {
				return windowRecords.slice().forEach(cb);
			};
			var terminate = function(cb) {
				loop(function(_a) {
					var window = _a.window;
					return cb(window);
				});
				cb(subscriber);
				subscriber.unsubscribe();
			};
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				loop(function(record) {
					record.window.next(value);
					maxWindowSize <= ++record.seen && closeWindow(record);
				});
			}, function() {
				return terminate(function(consumer) {
					return consumer.complete();
				});
			}, function(err) {
				return terminate(function(consumer) {
					return consumer.error(err);
				});
			}));
			return function() {
				windowRecords = null;
			};
		});
	}
	exports.windowTime = windowTime;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js
var require_windowToggle = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __values = exports && exports.__values || function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.windowToggle = void 0;
	var Subject_1 = require_Subject();
	var Subscription_1 = require_Subscription();
	var lift_1 = require_lift();
	var innerFrom_1 = require_innerFrom();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var noop_1 = require_noop();
	var arrRemove_1 = require_arrRemove();
	function windowToggle(openings, closingSelector) {
		return lift_1.operate(function(source, subscriber) {
			var windows = [];
			var handleError = function(err) {
				while (0 < windows.length) windows.shift().error(err);
				subscriber.error(err);
			};
			innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
				var window = new Subject_1.Subject();
				windows.push(window);
				var closingSubscription = new Subscription_1.Subscription();
				var closeWindow = function() {
					arrRemove_1.arrRemove(windows, window);
					window.complete();
					closingSubscription.unsubscribe();
				};
				var closingNotifier;
				try {
					closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
				} catch (err) {
					handleError(err);
					return;
				}
				subscriber.next(window.asObservable());
				closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
			}, noop_1.noop));
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				var e_1, _a;
				var windowsCopy = windows.slice();
				try {
					for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) windowsCopy_1_1.value.next(value);
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
			}, function() {
				while (0 < windows.length) windows.shift().complete();
				subscriber.complete();
			}, handleError, function() {
				while (0 < windows.length) windows.shift().unsubscribe();
			}));
		});
	}
	exports.windowToggle = windowToggle;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js
var require_windowWhen = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.windowWhen = void 0;
	var Subject_1 = require_Subject();
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	function windowWhen(closingSelector) {
		return lift_1.operate(function(source, subscriber) {
			var window;
			var closingSubscriber;
			var handleError = function(err) {
				window.error(err);
				subscriber.error(err);
			};
			var openWindow = function() {
				closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
				window === null || window === void 0 || window.complete();
				window = new Subject_1.Subject();
				subscriber.next(window.asObservable());
				var closingNotifier;
				try {
					closingNotifier = innerFrom_1.innerFrom(closingSelector());
				} catch (err) {
					handleError(err);
					return;
				}
				closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
			};
			openWindow();
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				return window.next(value);
			}, function() {
				window.complete();
				subscriber.complete();
			}, handleError, function() {
				closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
				window = null;
			}));
		});
	}
	exports.windowWhen = windowWhen;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js
var require_withLatestFrom = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.withLatestFrom = void 0;
	var lift_1 = require_lift();
	var OperatorSubscriber_1 = require_OperatorSubscriber();
	var innerFrom_1 = require_innerFrom();
	var identity_1 = require_identity();
	var noop_1 = require_noop();
	var args_1 = require_args();
	function withLatestFrom() {
		var inputs = [];
		for (var _i = 0; _i < arguments.length; _i++) inputs[_i] = arguments[_i];
		var project = args_1.popResultSelector(inputs);
		return lift_1.operate(function(source, subscriber) {
			var len = inputs.length;
			var otherValues = new Array(len);
			var hasValue = inputs.map(function() {
				return false;
			});
			var ready = false;
			var _loop_1 = function(i) {
				innerFrom_1.innerFrom(inputs[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
					otherValues[i] = value;
					if (!ready && !hasValue[i]) {
						hasValue[i] = true;
						(ready = hasValue.every(identity_1.identity)) && (hasValue = null);
					}
				}, noop_1.noop));
			};
			for (var i = 0; i < len; i++) _loop_1(i);
			source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
				if (ready) {
					var values = __spreadArray([value], __read(otherValues));
					subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
				}
			}));
		});
	}
	exports.withLatestFrom = withLatestFrom;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/zipAll.js
var require_zipAll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.zipAll = void 0;
	var zip_1 = require_zip$1();
	var joinAllInternals_1 = require_joinAllInternals();
	function zipAll(project) {
		return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
	}
	exports.zipAll = zipAll;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/zip.js
var require_zip = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.zip = void 0;
	var zip_1 = require_zip$1();
	var lift_1 = require_lift();
	function zip() {
		var sources = [];
		for (var _i = 0; _i < arguments.length; _i++) sources[_i] = arguments[_i];
		return lift_1.operate(function(source, subscriber) {
			zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
		});
	}
	exports.zip = zip;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/zipWith.js
var require_zipWith = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.zipWith = void 0;
	var zip_1 = require_zip();
	function zipWith() {
		var otherInputs = [];
		for (var _i = 0; _i < arguments.length; _i++) otherInputs[_i] = arguments[_i];
		return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
	}
	exports.zipWith = zipWith;
}));
//#endregion
//#region node_modules/.pnpm/@sanity+client@7.23.0/node_modules/@sanity/client/dist/_chunks-es/isRecord.js
var import_cjs = (/* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		Object.defineProperty(o, k2, {
			enumerable: true,
			get: function() {
				return m[k];
			}
		});
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
	exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
	exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
	exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
	var Observable_1 = require_Observable();
	Object.defineProperty(exports, "Observable", {
		enumerable: true,
		get: function() {
			return Observable_1.Observable;
		}
	});
	var ConnectableObservable_1 = require_ConnectableObservable();
	Object.defineProperty(exports, "ConnectableObservable", {
		enumerable: true,
		get: function() {
			return ConnectableObservable_1.ConnectableObservable;
		}
	});
	var observable_1 = require_observable();
	Object.defineProperty(exports, "observable", {
		enumerable: true,
		get: function() {
			return observable_1.observable;
		}
	});
	var animationFrames_1 = require_animationFrames();
	Object.defineProperty(exports, "animationFrames", {
		enumerable: true,
		get: function() {
			return animationFrames_1.animationFrames;
		}
	});
	var Subject_1 = require_Subject();
	Object.defineProperty(exports, "Subject", {
		enumerable: true,
		get: function() {
			return Subject_1.Subject;
		}
	});
	var BehaviorSubject_1 = require_BehaviorSubject();
	Object.defineProperty(exports, "BehaviorSubject", {
		enumerable: true,
		get: function() {
			return BehaviorSubject_1.BehaviorSubject;
		}
	});
	var ReplaySubject_1 = require_ReplaySubject();
	Object.defineProperty(exports, "ReplaySubject", {
		enumerable: true,
		get: function() {
			return ReplaySubject_1.ReplaySubject;
		}
	});
	var AsyncSubject_1 = require_AsyncSubject();
	Object.defineProperty(exports, "AsyncSubject", {
		enumerable: true,
		get: function() {
			return AsyncSubject_1.AsyncSubject;
		}
	});
	var asap_1 = require_asap();
	Object.defineProperty(exports, "asap", {
		enumerable: true,
		get: function() {
			return asap_1.asap;
		}
	});
	Object.defineProperty(exports, "asapScheduler", {
		enumerable: true,
		get: function() {
			return asap_1.asapScheduler;
		}
	});
	var async_1 = require_async();
	Object.defineProperty(exports, "async", {
		enumerable: true,
		get: function() {
			return async_1.async;
		}
	});
	Object.defineProperty(exports, "asyncScheduler", {
		enumerable: true,
		get: function() {
			return async_1.asyncScheduler;
		}
	});
	var queue_1 = require_queue();
	Object.defineProperty(exports, "queue", {
		enumerable: true,
		get: function() {
			return queue_1.queue;
		}
	});
	Object.defineProperty(exports, "queueScheduler", {
		enumerable: true,
		get: function() {
			return queue_1.queueScheduler;
		}
	});
	var animationFrame_1 = require_animationFrame();
	Object.defineProperty(exports, "animationFrame", {
		enumerable: true,
		get: function() {
			return animationFrame_1.animationFrame;
		}
	});
	Object.defineProperty(exports, "animationFrameScheduler", {
		enumerable: true,
		get: function() {
			return animationFrame_1.animationFrameScheduler;
		}
	});
	var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
	Object.defineProperty(exports, "VirtualTimeScheduler", {
		enumerable: true,
		get: function() {
			return VirtualTimeScheduler_1.VirtualTimeScheduler;
		}
	});
	Object.defineProperty(exports, "VirtualAction", {
		enumerable: true,
		get: function() {
			return VirtualTimeScheduler_1.VirtualAction;
		}
	});
	var Scheduler_1 = require_Scheduler();
	Object.defineProperty(exports, "Scheduler", {
		enumerable: true,
		get: function() {
			return Scheduler_1.Scheduler;
		}
	});
	var Subscription_1 = require_Subscription();
	Object.defineProperty(exports, "Subscription", {
		enumerable: true,
		get: function() {
			return Subscription_1.Subscription;
		}
	});
	var Subscriber_1 = require_Subscriber();
	Object.defineProperty(exports, "Subscriber", {
		enumerable: true,
		get: function() {
			return Subscriber_1.Subscriber;
		}
	});
	var Notification_1 = require_Notification();
	Object.defineProperty(exports, "Notification", {
		enumerable: true,
		get: function() {
			return Notification_1.Notification;
		}
	});
	Object.defineProperty(exports, "NotificationKind", {
		enumerable: true,
		get: function() {
			return Notification_1.NotificationKind;
		}
	});
	var pipe_1 = require_pipe();
	Object.defineProperty(exports, "pipe", {
		enumerable: true,
		get: function() {
			return pipe_1.pipe;
		}
	});
	var noop_1 = require_noop();
	Object.defineProperty(exports, "noop", {
		enumerable: true,
		get: function() {
			return noop_1.noop;
		}
	});
	var identity_1 = require_identity();
	Object.defineProperty(exports, "identity", {
		enumerable: true,
		get: function() {
			return identity_1.identity;
		}
	});
	var isObservable_1 = require_isObservable();
	Object.defineProperty(exports, "isObservable", {
		enumerable: true,
		get: function() {
			return isObservable_1.isObservable;
		}
	});
	var lastValueFrom_1 = require_lastValueFrom();
	Object.defineProperty(exports, "lastValueFrom", {
		enumerable: true,
		get: function() {
			return lastValueFrom_1.lastValueFrom;
		}
	});
	var firstValueFrom_1 = require_firstValueFrom();
	Object.defineProperty(exports, "firstValueFrom", {
		enumerable: true,
		get: function() {
			return firstValueFrom_1.firstValueFrom;
		}
	});
	var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
	Object.defineProperty(exports, "ArgumentOutOfRangeError", {
		enumerable: true,
		get: function() {
			return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
		}
	});
	var EmptyError_1 = require_EmptyError();
	Object.defineProperty(exports, "EmptyError", {
		enumerable: true,
		get: function() {
			return EmptyError_1.EmptyError;
		}
	});
	var NotFoundError_1 = require_NotFoundError();
	Object.defineProperty(exports, "NotFoundError", {
		enumerable: true,
		get: function() {
			return NotFoundError_1.NotFoundError;
		}
	});
	var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
	Object.defineProperty(exports, "ObjectUnsubscribedError", {
		enumerable: true,
		get: function() {
			return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
		}
	});
	var SequenceError_1 = require_SequenceError();
	Object.defineProperty(exports, "SequenceError", {
		enumerable: true,
		get: function() {
			return SequenceError_1.SequenceError;
		}
	});
	var timeout_1 = require_timeout();
	Object.defineProperty(exports, "TimeoutError", {
		enumerable: true,
		get: function() {
			return timeout_1.TimeoutError;
		}
	});
	var UnsubscriptionError_1 = require_UnsubscriptionError();
	Object.defineProperty(exports, "UnsubscriptionError", {
		enumerable: true,
		get: function() {
			return UnsubscriptionError_1.UnsubscriptionError;
		}
	});
	var bindCallback_1 = require_bindCallback();
	Object.defineProperty(exports, "bindCallback", {
		enumerable: true,
		get: function() {
			return bindCallback_1.bindCallback;
		}
	});
	var bindNodeCallback_1 = require_bindNodeCallback();
	Object.defineProperty(exports, "bindNodeCallback", {
		enumerable: true,
		get: function() {
			return bindNodeCallback_1.bindNodeCallback;
		}
	});
	var combineLatest_1 = require_combineLatest$1();
	Object.defineProperty(exports, "combineLatest", {
		enumerable: true,
		get: function() {
			return combineLatest_1.combineLatest;
		}
	});
	var concat_1 = require_concat$1();
	Object.defineProperty(exports, "concat", {
		enumerable: true,
		get: function() {
			return concat_1.concat;
		}
	});
	var connectable_1 = require_connectable();
	Object.defineProperty(exports, "connectable", {
		enumerable: true,
		get: function() {
			return connectable_1.connectable;
		}
	});
	var defer_1 = require_defer();
	Object.defineProperty(exports, "defer", {
		enumerable: true,
		get: function() {
			return defer_1.defer;
		}
	});
	var empty_1 = require_empty();
	Object.defineProperty(exports, "empty", {
		enumerable: true,
		get: function() {
			return empty_1.empty;
		}
	});
	var forkJoin_1 = require_forkJoin();
	Object.defineProperty(exports, "forkJoin", {
		enumerable: true,
		get: function() {
			return forkJoin_1.forkJoin;
		}
	});
	var from_1 = require_from();
	Object.defineProperty(exports, "from", {
		enumerable: true,
		get: function() {
			return from_1.from;
		}
	});
	var fromEvent_1 = require_fromEvent();
	Object.defineProperty(exports, "fromEvent", {
		enumerable: true,
		get: function() {
			return fromEvent_1.fromEvent;
		}
	});
	var fromEventPattern_1 = require_fromEventPattern();
	Object.defineProperty(exports, "fromEventPattern", {
		enumerable: true,
		get: function() {
			return fromEventPattern_1.fromEventPattern;
		}
	});
	var generate_1 = require_generate();
	Object.defineProperty(exports, "generate", {
		enumerable: true,
		get: function() {
			return generate_1.generate;
		}
	});
	var iif_1 = require_iif();
	Object.defineProperty(exports, "iif", {
		enumerable: true,
		get: function() {
			return iif_1.iif;
		}
	});
	var interval_1 = require_interval();
	Object.defineProperty(exports, "interval", {
		enumerable: true,
		get: function() {
			return interval_1.interval;
		}
	});
	var merge_1 = require_merge$1();
	Object.defineProperty(exports, "merge", {
		enumerable: true,
		get: function() {
			return merge_1.merge;
		}
	});
	var never_1 = require_never();
	Object.defineProperty(exports, "never", {
		enumerable: true,
		get: function() {
			return never_1.never;
		}
	});
	var of_1 = require_of();
	Object.defineProperty(exports, "of", {
		enumerable: true,
		get: function() {
			return of_1.of;
		}
	});
	var onErrorResumeNext_1 = require_onErrorResumeNext();
	Object.defineProperty(exports, "onErrorResumeNext", {
		enumerable: true,
		get: function() {
			return onErrorResumeNext_1.onErrorResumeNext;
		}
	});
	var pairs_1 = require_pairs();
	Object.defineProperty(exports, "pairs", {
		enumerable: true,
		get: function() {
			return pairs_1.pairs;
		}
	});
	var partition_1 = require_partition$1();
	Object.defineProperty(exports, "partition", {
		enumerable: true,
		get: function() {
			return partition_1.partition;
		}
	});
	var race_1 = require_race$1();
	Object.defineProperty(exports, "race", {
		enumerable: true,
		get: function() {
			return race_1.race;
		}
	});
	var range_1 = require_range();
	Object.defineProperty(exports, "range", {
		enumerable: true,
		get: function() {
			return range_1.range;
		}
	});
	var throwError_1 = require_throwError();
	Object.defineProperty(exports, "throwError", {
		enumerable: true,
		get: function() {
			return throwError_1.throwError;
		}
	});
	var timer_1 = require_timer();
	Object.defineProperty(exports, "timer", {
		enumerable: true,
		get: function() {
			return timer_1.timer;
		}
	});
	var using_1 = require_using();
	Object.defineProperty(exports, "using", {
		enumerable: true,
		get: function() {
			return using_1.using;
		}
	});
	var zip_1 = require_zip$1();
	Object.defineProperty(exports, "zip", {
		enumerable: true,
		get: function() {
			return zip_1.zip;
		}
	});
	var scheduled_1 = require_scheduled();
	Object.defineProperty(exports, "scheduled", {
		enumerable: true,
		get: function() {
			return scheduled_1.scheduled;
		}
	});
	var empty_2 = require_empty();
	Object.defineProperty(exports, "EMPTY", {
		enumerable: true,
		get: function() {
			return empty_2.EMPTY;
		}
	});
	var never_2 = require_never();
	Object.defineProperty(exports, "NEVER", {
		enumerable: true,
		get: function() {
			return never_2.NEVER;
		}
	});
	__exportStar(require_types(), exports);
	var config_1 = require_config();
	Object.defineProperty(exports, "config", {
		enumerable: true,
		get: function() {
			return config_1.config;
		}
	});
	var audit_1 = require_audit();
	Object.defineProperty(exports, "audit", {
		enumerable: true,
		get: function() {
			return audit_1.audit;
		}
	});
	var auditTime_1 = require_auditTime();
	Object.defineProperty(exports, "auditTime", {
		enumerable: true,
		get: function() {
			return auditTime_1.auditTime;
		}
	});
	var buffer_1 = require_buffer();
	Object.defineProperty(exports, "buffer", {
		enumerable: true,
		get: function() {
			return buffer_1.buffer;
		}
	});
	var bufferCount_1 = require_bufferCount();
	Object.defineProperty(exports, "bufferCount", {
		enumerable: true,
		get: function() {
			return bufferCount_1.bufferCount;
		}
	});
	var bufferTime_1 = require_bufferTime();
	Object.defineProperty(exports, "bufferTime", {
		enumerable: true,
		get: function() {
			return bufferTime_1.bufferTime;
		}
	});
	var bufferToggle_1 = require_bufferToggle();
	Object.defineProperty(exports, "bufferToggle", {
		enumerable: true,
		get: function() {
			return bufferToggle_1.bufferToggle;
		}
	});
	var bufferWhen_1 = require_bufferWhen();
	Object.defineProperty(exports, "bufferWhen", {
		enumerable: true,
		get: function() {
			return bufferWhen_1.bufferWhen;
		}
	});
	var catchError_1 = require_catchError();
	Object.defineProperty(exports, "catchError", {
		enumerable: true,
		get: function() {
			return catchError_1.catchError;
		}
	});
	var combineAll_1 = require_combineAll();
	Object.defineProperty(exports, "combineAll", {
		enumerable: true,
		get: function() {
			return combineAll_1.combineAll;
		}
	});
	var combineLatestAll_1 = require_combineLatestAll();
	Object.defineProperty(exports, "combineLatestAll", {
		enumerable: true,
		get: function() {
			return combineLatestAll_1.combineLatestAll;
		}
	});
	var combineLatestWith_1 = require_combineLatestWith();
	Object.defineProperty(exports, "combineLatestWith", {
		enumerable: true,
		get: function() {
			return combineLatestWith_1.combineLatestWith;
		}
	});
	var concatAll_1 = require_concatAll();
	Object.defineProperty(exports, "concatAll", {
		enumerable: true,
		get: function() {
			return concatAll_1.concatAll;
		}
	});
	var concatMap_1 = require_concatMap();
	Object.defineProperty(exports, "concatMap", {
		enumerable: true,
		get: function() {
			return concatMap_1.concatMap;
		}
	});
	var concatMapTo_1 = require_concatMapTo();
	Object.defineProperty(exports, "concatMapTo", {
		enumerable: true,
		get: function() {
			return concatMapTo_1.concatMapTo;
		}
	});
	var concatWith_1 = require_concatWith();
	Object.defineProperty(exports, "concatWith", {
		enumerable: true,
		get: function() {
			return concatWith_1.concatWith;
		}
	});
	var connect_1 = require_connect();
	Object.defineProperty(exports, "connect", {
		enumerable: true,
		get: function() {
			return connect_1.connect;
		}
	});
	var count_1 = require_count();
	Object.defineProperty(exports, "count", {
		enumerable: true,
		get: function() {
			return count_1.count;
		}
	});
	var debounce_1 = require_debounce();
	Object.defineProperty(exports, "debounce", {
		enumerable: true,
		get: function() {
			return debounce_1.debounce;
		}
	});
	var debounceTime_1 = require_debounceTime();
	Object.defineProperty(exports, "debounceTime", {
		enumerable: true,
		get: function() {
			return debounceTime_1.debounceTime;
		}
	});
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	Object.defineProperty(exports, "defaultIfEmpty", {
		enumerable: true,
		get: function() {
			return defaultIfEmpty_1.defaultIfEmpty;
		}
	});
	var delay_1 = require_delay();
	Object.defineProperty(exports, "delay", {
		enumerable: true,
		get: function() {
			return delay_1.delay;
		}
	});
	var delayWhen_1 = require_delayWhen();
	Object.defineProperty(exports, "delayWhen", {
		enumerable: true,
		get: function() {
			return delayWhen_1.delayWhen;
		}
	});
	var dematerialize_1 = require_dematerialize();
	Object.defineProperty(exports, "dematerialize", {
		enumerable: true,
		get: function() {
			return dematerialize_1.dematerialize;
		}
	});
	var distinct_1 = require_distinct();
	Object.defineProperty(exports, "distinct", {
		enumerable: true,
		get: function() {
			return distinct_1.distinct;
		}
	});
	var distinctUntilChanged_1 = require_distinctUntilChanged();
	Object.defineProperty(exports, "distinctUntilChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilChanged_1.distinctUntilChanged;
		}
	});
	var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
	Object.defineProperty(exports, "distinctUntilKeyChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
		}
	});
	var elementAt_1 = require_elementAt();
	Object.defineProperty(exports, "elementAt", {
		enumerable: true,
		get: function() {
			return elementAt_1.elementAt;
		}
	});
	var endWith_1 = require_endWith();
	Object.defineProperty(exports, "endWith", {
		enumerable: true,
		get: function() {
			return endWith_1.endWith;
		}
	});
	var every_1 = require_every();
	Object.defineProperty(exports, "every", {
		enumerable: true,
		get: function() {
			return every_1.every;
		}
	});
	var exhaust_1 = require_exhaust();
	Object.defineProperty(exports, "exhaust", {
		enumerable: true,
		get: function() {
			return exhaust_1.exhaust;
		}
	});
	var exhaustAll_1 = require_exhaustAll();
	Object.defineProperty(exports, "exhaustAll", {
		enumerable: true,
		get: function() {
			return exhaustAll_1.exhaustAll;
		}
	});
	var exhaustMap_1 = require_exhaustMap();
	Object.defineProperty(exports, "exhaustMap", {
		enumerable: true,
		get: function() {
			return exhaustMap_1.exhaustMap;
		}
	});
	var expand_1 = require_expand();
	Object.defineProperty(exports, "expand", {
		enumerable: true,
		get: function() {
			return expand_1.expand;
		}
	});
	var filter_1 = require_filter();
	Object.defineProperty(exports, "filter", {
		enumerable: true,
		get: function() {
			return filter_1.filter;
		}
	});
	var finalize_1 = require_finalize();
	Object.defineProperty(exports, "finalize", {
		enumerable: true,
		get: function() {
			return finalize_1.finalize;
		}
	});
	var find_1 = require_find();
	Object.defineProperty(exports, "find", {
		enumerable: true,
		get: function() {
			return find_1.find;
		}
	});
	var findIndex_1 = require_findIndex();
	Object.defineProperty(exports, "findIndex", {
		enumerable: true,
		get: function() {
			return findIndex_1.findIndex;
		}
	});
	var first_1 = require_first();
	Object.defineProperty(exports, "first", {
		enumerable: true,
		get: function() {
			return first_1.first;
		}
	});
	var groupBy_1 = require_groupBy();
	Object.defineProperty(exports, "groupBy", {
		enumerable: true,
		get: function() {
			return groupBy_1.groupBy;
		}
	});
	var ignoreElements_1 = require_ignoreElements();
	Object.defineProperty(exports, "ignoreElements", {
		enumerable: true,
		get: function() {
			return ignoreElements_1.ignoreElements;
		}
	});
	var isEmpty_1 = require_isEmpty();
	Object.defineProperty(exports, "isEmpty", {
		enumerable: true,
		get: function() {
			return isEmpty_1.isEmpty;
		}
	});
	var last_1 = require_last();
	Object.defineProperty(exports, "last", {
		enumerable: true,
		get: function() {
			return last_1.last;
		}
	});
	var map_1 = require_map();
	Object.defineProperty(exports, "map", {
		enumerable: true,
		get: function() {
			return map_1.map;
		}
	});
	var mapTo_1 = require_mapTo();
	Object.defineProperty(exports, "mapTo", {
		enumerable: true,
		get: function() {
			return mapTo_1.mapTo;
		}
	});
	var materialize_1 = require_materialize();
	Object.defineProperty(exports, "materialize", {
		enumerable: true,
		get: function() {
			return materialize_1.materialize;
		}
	});
	var max_1 = require_max();
	Object.defineProperty(exports, "max", {
		enumerable: true,
		get: function() {
			return max_1.max;
		}
	});
	var mergeAll_1 = require_mergeAll();
	Object.defineProperty(exports, "mergeAll", {
		enumerable: true,
		get: function() {
			return mergeAll_1.mergeAll;
		}
	});
	var flatMap_1 = require_flatMap();
	Object.defineProperty(exports, "flatMap", {
		enumerable: true,
		get: function() {
			return flatMap_1.flatMap;
		}
	});
	var mergeMap_1 = require_mergeMap();
	Object.defineProperty(exports, "mergeMap", {
		enumerable: true,
		get: function() {
			return mergeMap_1.mergeMap;
		}
	});
	var mergeMapTo_1 = require_mergeMapTo();
	Object.defineProperty(exports, "mergeMapTo", {
		enumerable: true,
		get: function() {
			return mergeMapTo_1.mergeMapTo;
		}
	});
	var mergeScan_1 = require_mergeScan();
	Object.defineProperty(exports, "mergeScan", {
		enumerable: true,
		get: function() {
			return mergeScan_1.mergeScan;
		}
	});
	var mergeWith_1 = require_mergeWith();
	Object.defineProperty(exports, "mergeWith", {
		enumerable: true,
		get: function() {
			return mergeWith_1.mergeWith;
		}
	});
	var min_1 = require_min();
	Object.defineProperty(exports, "min", {
		enumerable: true,
		get: function() {
			return min_1.min;
		}
	});
	var multicast_1 = require_multicast();
	Object.defineProperty(exports, "multicast", {
		enumerable: true,
		get: function() {
			return multicast_1.multicast;
		}
	});
	var observeOn_1 = require_observeOn();
	Object.defineProperty(exports, "observeOn", {
		enumerable: true,
		get: function() {
			return observeOn_1.observeOn;
		}
	});
	var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
	Object.defineProperty(exports, "onErrorResumeNextWith", {
		enumerable: true,
		get: function() {
			return onErrorResumeNextWith_1.onErrorResumeNextWith;
		}
	});
	var pairwise_1 = require_pairwise();
	Object.defineProperty(exports, "pairwise", {
		enumerable: true,
		get: function() {
			return pairwise_1.pairwise;
		}
	});
	var pluck_1 = require_pluck();
	Object.defineProperty(exports, "pluck", {
		enumerable: true,
		get: function() {
			return pluck_1.pluck;
		}
	});
	var publish_1 = require_publish();
	Object.defineProperty(exports, "publish", {
		enumerable: true,
		get: function() {
			return publish_1.publish;
		}
	});
	var publishBehavior_1 = require_publishBehavior();
	Object.defineProperty(exports, "publishBehavior", {
		enumerable: true,
		get: function() {
			return publishBehavior_1.publishBehavior;
		}
	});
	var publishLast_1 = require_publishLast();
	Object.defineProperty(exports, "publishLast", {
		enumerable: true,
		get: function() {
			return publishLast_1.publishLast;
		}
	});
	var publishReplay_1 = require_publishReplay();
	Object.defineProperty(exports, "publishReplay", {
		enumerable: true,
		get: function() {
			return publishReplay_1.publishReplay;
		}
	});
	var raceWith_1 = require_raceWith();
	Object.defineProperty(exports, "raceWith", {
		enumerable: true,
		get: function() {
			return raceWith_1.raceWith;
		}
	});
	var reduce_1 = require_reduce();
	Object.defineProperty(exports, "reduce", {
		enumerable: true,
		get: function() {
			return reduce_1.reduce;
		}
	});
	var repeat_1 = require_repeat();
	Object.defineProperty(exports, "repeat", {
		enumerable: true,
		get: function() {
			return repeat_1.repeat;
		}
	});
	var repeatWhen_1 = require_repeatWhen();
	Object.defineProperty(exports, "repeatWhen", {
		enumerable: true,
		get: function() {
			return repeatWhen_1.repeatWhen;
		}
	});
	var retry_1 = require_retry();
	Object.defineProperty(exports, "retry", {
		enumerable: true,
		get: function() {
			return retry_1.retry;
		}
	});
	var retryWhen_1 = require_retryWhen();
	Object.defineProperty(exports, "retryWhen", {
		enumerable: true,
		get: function() {
			return retryWhen_1.retryWhen;
		}
	});
	var refCount_1 = require_refCount();
	Object.defineProperty(exports, "refCount", {
		enumerable: true,
		get: function() {
			return refCount_1.refCount;
		}
	});
	var sample_1 = require_sample();
	Object.defineProperty(exports, "sample", {
		enumerable: true,
		get: function() {
			return sample_1.sample;
		}
	});
	var sampleTime_1 = require_sampleTime();
	Object.defineProperty(exports, "sampleTime", {
		enumerable: true,
		get: function() {
			return sampleTime_1.sampleTime;
		}
	});
	var scan_1 = require_scan();
	Object.defineProperty(exports, "scan", {
		enumerable: true,
		get: function() {
			return scan_1.scan;
		}
	});
	var sequenceEqual_1 = require_sequenceEqual();
	Object.defineProperty(exports, "sequenceEqual", {
		enumerable: true,
		get: function() {
			return sequenceEqual_1.sequenceEqual;
		}
	});
	var share_1 = require_share();
	Object.defineProperty(exports, "share", {
		enumerable: true,
		get: function() {
			return share_1.share;
		}
	});
	var shareReplay_1 = require_shareReplay();
	Object.defineProperty(exports, "shareReplay", {
		enumerable: true,
		get: function() {
			return shareReplay_1.shareReplay;
		}
	});
	var single_1 = require_single();
	Object.defineProperty(exports, "single", {
		enumerable: true,
		get: function() {
			return single_1.single;
		}
	});
	var skip_1 = require_skip();
	Object.defineProperty(exports, "skip", {
		enumerable: true,
		get: function() {
			return skip_1.skip;
		}
	});
	var skipLast_1 = require_skipLast();
	Object.defineProperty(exports, "skipLast", {
		enumerable: true,
		get: function() {
			return skipLast_1.skipLast;
		}
	});
	var skipUntil_1 = require_skipUntil();
	Object.defineProperty(exports, "skipUntil", {
		enumerable: true,
		get: function() {
			return skipUntil_1.skipUntil;
		}
	});
	var skipWhile_1 = require_skipWhile();
	Object.defineProperty(exports, "skipWhile", {
		enumerable: true,
		get: function() {
			return skipWhile_1.skipWhile;
		}
	});
	var startWith_1 = require_startWith();
	Object.defineProperty(exports, "startWith", {
		enumerable: true,
		get: function() {
			return startWith_1.startWith;
		}
	});
	var subscribeOn_1 = require_subscribeOn();
	Object.defineProperty(exports, "subscribeOn", {
		enumerable: true,
		get: function() {
			return subscribeOn_1.subscribeOn;
		}
	});
	var switchAll_1 = require_switchAll();
	Object.defineProperty(exports, "switchAll", {
		enumerable: true,
		get: function() {
			return switchAll_1.switchAll;
		}
	});
	var switchMap_1 = require_switchMap();
	Object.defineProperty(exports, "switchMap", {
		enumerable: true,
		get: function() {
			return switchMap_1.switchMap;
		}
	});
	var switchMapTo_1 = require_switchMapTo();
	Object.defineProperty(exports, "switchMapTo", {
		enumerable: true,
		get: function() {
			return switchMapTo_1.switchMapTo;
		}
	});
	var switchScan_1 = require_switchScan();
	Object.defineProperty(exports, "switchScan", {
		enumerable: true,
		get: function() {
			return switchScan_1.switchScan;
		}
	});
	var take_1 = require_take();
	Object.defineProperty(exports, "take", {
		enumerable: true,
		get: function() {
			return take_1.take;
		}
	});
	var takeLast_1 = require_takeLast();
	Object.defineProperty(exports, "takeLast", {
		enumerable: true,
		get: function() {
			return takeLast_1.takeLast;
		}
	});
	var takeUntil_1 = require_takeUntil();
	Object.defineProperty(exports, "takeUntil", {
		enumerable: true,
		get: function() {
			return takeUntil_1.takeUntil;
		}
	});
	var takeWhile_1 = require_takeWhile();
	Object.defineProperty(exports, "takeWhile", {
		enumerable: true,
		get: function() {
			return takeWhile_1.takeWhile;
		}
	});
	var tap_1 = require_tap();
	Object.defineProperty(exports, "tap", {
		enumerable: true,
		get: function() {
			return tap_1.tap;
		}
	});
	var throttle_1 = require_throttle();
	Object.defineProperty(exports, "throttle", {
		enumerable: true,
		get: function() {
			return throttle_1.throttle;
		}
	});
	var throttleTime_1 = require_throttleTime();
	Object.defineProperty(exports, "throttleTime", {
		enumerable: true,
		get: function() {
			return throttleTime_1.throttleTime;
		}
	});
	var throwIfEmpty_1 = require_throwIfEmpty();
	Object.defineProperty(exports, "throwIfEmpty", {
		enumerable: true,
		get: function() {
			return throwIfEmpty_1.throwIfEmpty;
		}
	});
	var timeInterval_1 = require_timeInterval();
	Object.defineProperty(exports, "timeInterval", {
		enumerable: true,
		get: function() {
			return timeInterval_1.timeInterval;
		}
	});
	var timeout_2 = require_timeout();
	Object.defineProperty(exports, "timeout", {
		enumerable: true,
		get: function() {
			return timeout_2.timeout;
		}
	});
	var timeoutWith_1 = require_timeoutWith();
	Object.defineProperty(exports, "timeoutWith", {
		enumerable: true,
		get: function() {
			return timeoutWith_1.timeoutWith;
		}
	});
	var timestamp_1 = require_timestamp();
	Object.defineProperty(exports, "timestamp", {
		enumerable: true,
		get: function() {
			return timestamp_1.timestamp;
		}
	});
	var toArray_1 = require_toArray();
	Object.defineProperty(exports, "toArray", {
		enumerable: true,
		get: function() {
			return toArray_1.toArray;
		}
	});
	var window_1 = require_window();
	Object.defineProperty(exports, "window", {
		enumerable: true,
		get: function() {
			return window_1.window;
		}
	});
	var windowCount_1 = require_windowCount();
	Object.defineProperty(exports, "windowCount", {
		enumerable: true,
		get: function() {
			return windowCount_1.windowCount;
		}
	});
	var windowTime_1 = require_windowTime();
	Object.defineProperty(exports, "windowTime", {
		enumerable: true,
		get: function() {
			return windowTime_1.windowTime;
		}
	});
	var windowToggle_1 = require_windowToggle();
	Object.defineProperty(exports, "windowToggle", {
		enumerable: true,
		get: function() {
			return windowToggle_1.windowToggle;
		}
	});
	var windowWhen_1 = require_windowWhen();
	Object.defineProperty(exports, "windowWhen", {
		enumerable: true,
		get: function() {
			return windowWhen_1.windowWhen;
		}
	});
	var withLatestFrom_1 = require_withLatestFrom();
	Object.defineProperty(exports, "withLatestFrom", {
		enumerable: true,
		get: function() {
			return withLatestFrom_1.withLatestFrom;
		}
	});
	var zipAll_1 = require_zipAll();
	Object.defineProperty(exports, "zipAll", {
		enumerable: true,
		get: function() {
			return zipAll_1.zipAll;
		}
	});
	var zipWith_1 = require_zipWith();
	Object.defineProperty(exports, "zipWith", {
		enumerable: true,
		get: function() {
			return zipWith_1.zipWith;
		}
	});
})))();
function isRecord$1(value) {
	return typeof value == "object" && value !== null && !Array.isArray(value);
}
//#endregion
//#region node_modules/.pnpm/@sanity+client@7.23.0/node_modules/@sanity/client/dist/_chunks-es/stegaClean.js
function isRecord(value) {
	return typeof value == "object" && value !== null && !Array.isArray(value);
}
var p = {
	0: 8203,
	1: 8204,
	2: 8205,
	3: 8290,
	4: 8291,
	5: 8288,
	6: 65279,
	7: 8289,
	8: 119155,
	9: 119156,
	a: 119157,
	b: 119158,
	c: 119159,
	d: 119160,
	e: 119161,
	f: 119162
}, l = {
	0: 8203,
	1: 8204,
	2: 8205,
	3: 65279
}, d$1 = {
	0: String.fromCodePoint(l[0]),
	1: String.fromCodePoint(l[1]),
	2: String.fromCodePoint(l[2]),
	3: String.fromCodePoint(l[3])
}, u = new Array(4).fill(String.fromCodePoint(l[0])).join("");
function A(e) {
	let r = JSON.stringify(e), t = new TextEncoder().encode(r), i = "";
	for (let c = 0; c < t.length; c++) {
		let n = t[c];
		i += d$1[n >> 6 & 3] + d$1[n >> 4 & 3] + d$1[n >> 2 & 3] + d$1[n & 3];
	}
	return u + i;
}
function I(e) {
	return !Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e) ? !1 : !!Date.parse(e);
}
function S(e) {
	try {
		new URL(e, e.startsWith("/") ? "https://acme.com" : void 0);
	} catch {
		return !1;
	}
	return !0;
}
function y(e, r, t = "auto") {
	return t === !0 || t === "auto" && (I(e) || S(e)) ? e : `${e}${A(r)}`;
}
Object.fromEntries(Object.entries(d$1).map((e) => [e[1], +e[0]]));
Object.fromEntries(Object.entries(p).map((e) => e.reverse()));
var h = `${Object.values(p).map((e) => `\\u{${e.toString(16)}}`).join("")}`, x = new RegExp(`[${h}]{4,}`, "gu");
function P(e) {
	var r;
	return {
		cleaned: e.replace(x, ""),
		encoded: ((r = e.match(x)) == null ? void 0 : r[0]) || ""
	};
}
function w(e) {
	return e && JSON.parse(P(JSON.stringify(e)).cleaned);
}
function stegaClean(result) {
	return w(result);
}
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/partition.js
var require_partition = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.partition = void 0;
	var not_1 = require_not();
	var filter_1 = require_filter();
	function partition(predicate, thisArg) {
		return function(source) {
			return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
		};
	}
	exports.partition = partition;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/internal/operators/race.js
var require_race = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.race = void 0;
	var argsOrArgArray_1 = require_argsOrArgArray();
	var raceWith_1 = require_raceWith();
	function race() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
	}
	exports.race = race;
}));
//#endregion
//#region node_modules/.pnpm/rxjs@7.8.2/node_modules/rxjs/dist/cjs/operators/index.js
var require_operators = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
	exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
	exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
	var audit_1 = require_audit();
	Object.defineProperty(exports, "audit", {
		enumerable: true,
		get: function() {
			return audit_1.audit;
		}
	});
	var auditTime_1 = require_auditTime();
	Object.defineProperty(exports, "auditTime", {
		enumerable: true,
		get: function() {
			return auditTime_1.auditTime;
		}
	});
	var buffer_1 = require_buffer();
	Object.defineProperty(exports, "buffer", {
		enumerable: true,
		get: function() {
			return buffer_1.buffer;
		}
	});
	var bufferCount_1 = require_bufferCount();
	Object.defineProperty(exports, "bufferCount", {
		enumerable: true,
		get: function() {
			return bufferCount_1.bufferCount;
		}
	});
	var bufferTime_1 = require_bufferTime();
	Object.defineProperty(exports, "bufferTime", {
		enumerable: true,
		get: function() {
			return bufferTime_1.bufferTime;
		}
	});
	var bufferToggle_1 = require_bufferToggle();
	Object.defineProperty(exports, "bufferToggle", {
		enumerable: true,
		get: function() {
			return bufferToggle_1.bufferToggle;
		}
	});
	var bufferWhen_1 = require_bufferWhen();
	Object.defineProperty(exports, "bufferWhen", {
		enumerable: true,
		get: function() {
			return bufferWhen_1.bufferWhen;
		}
	});
	var catchError_1 = require_catchError();
	Object.defineProperty(exports, "catchError", {
		enumerable: true,
		get: function() {
			return catchError_1.catchError;
		}
	});
	var combineAll_1 = require_combineAll();
	Object.defineProperty(exports, "combineAll", {
		enumerable: true,
		get: function() {
			return combineAll_1.combineAll;
		}
	});
	var combineLatestAll_1 = require_combineLatestAll();
	Object.defineProperty(exports, "combineLatestAll", {
		enumerable: true,
		get: function() {
			return combineLatestAll_1.combineLatestAll;
		}
	});
	var combineLatest_1 = require_combineLatest();
	Object.defineProperty(exports, "combineLatest", {
		enumerable: true,
		get: function() {
			return combineLatest_1.combineLatest;
		}
	});
	var combineLatestWith_1 = require_combineLatestWith();
	Object.defineProperty(exports, "combineLatestWith", {
		enumerable: true,
		get: function() {
			return combineLatestWith_1.combineLatestWith;
		}
	});
	var concat_1 = require_concat();
	Object.defineProperty(exports, "concat", {
		enumerable: true,
		get: function() {
			return concat_1.concat;
		}
	});
	var concatAll_1 = require_concatAll();
	Object.defineProperty(exports, "concatAll", {
		enumerable: true,
		get: function() {
			return concatAll_1.concatAll;
		}
	});
	var concatMap_1 = require_concatMap();
	Object.defineProperty(exports, "concatMap", {
		enumerable: true,
		get: function() {
			return concatMap_1.concatMap;
		}
	});
	var concatMapTo_1 = require_concatMapTo();
	Object.defineProperty(exports, "concatMapTo", {
		enumerable: true,
		get: function() {
			return concatMapTo_1.concatMapTo;
		}
	});
	var concatWith_1 = require_concatWith();
	Object.defineProperty(exports, "concatWith", {
		enumerable: true,
		get: function() {
			return concatWith_1.concatWith;
		}
	});
	var connect_1 = require_connect();
	Object.defineProperty(exports, "connect", {
		enumerable: true,
		get: function() {
			return connect_1.connect;
		}
	});
	var count_1 = require_count();
	Object.defineProperty(exports, "count", {
		enumerable: true,
		get: function() {
			return count_1.count;
		}
	});
	var debounce_1 = require_debounce();
	Object.defineProperty(exports, "debounce", {
		enumerable: true,
		get: function() {
			return debounce_1.debounce;
		}
	});
	var debounceTime_1 = require_debounceTime();
	Object.defineProperty(exports, "debounceTime", {
		enumerable: true,
		get: function() {
			return debounceTime_1.debounceTime;
		}
	});
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	Object.defineProperty(exports, "defaultIfEmpty", {
		enumerable: true,
		get: function() {
			return defaultIfEmpty_1.defaultIfEmpty;
		}
	});
	var delay_1 = require_delay();
	Object.defineProperty(exports, "delay", {
		enumerable: true,
		get: function() {
			return delay_1.delay;
		}
	});
	var delayWhen_1 = require_delayWhen();
	Object.defineProperty(exports, "delayWhen", {
		enumerable: true,
		get: function() {
			return delayWhen_1.delayWhen;
		}
	});
	var dematerialize_1 = require_dematerialize();
	Object.defineProperty(exports, "dematerialize", {
		enumerable: true,
		get: function() {
			return dematerialize_1.dematerialize;
		}
	});
	var distinct_1 = require_distinct();
	Object.defineProperty(exports, "distinct", {
		enumerable: true,
		get: function() {
			return distinct_1.distinct;
		}
	});
	var distinctUntilChanged_1 = require_distinctUntilChanged();
	Object.defineProperty(exports, "distinctUntilChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilChanged_1.distinctUntilChanged;
		}
	});
	var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
	Object.defineProperty(exports, "distinctUntilKeyChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
		}
	});
	var elementAt_1 = require_elementAt();
	Object.defineProperty(exports, "elementAt", {
		enumerable: true,
		get: function() {
			return elementAt_1.elementAt;
		}
	});
	var endWith_1 = require_endWith();
	Object.defineProperty(exports, "endWith", {
		enumerable: true,
		get: function() {
			return endWith_1.endWith;
		}
	});
	var every_1 = require_every();
	Object.defineProperty(exports, "every", {
		enumerable: true,
		get: function() {
			return every_1.every;
		}
	});
	var exhaust_1 = require_exhaust();
	Object.defineProperty(exports, "exhaust", {
		enumerable: true,
		get: function() {
			return exhaust_1.exhaust;
		}
	});
	var exhaustAll_1 = require_exhaustAll();
	Object.defineProperty(exports, "exhaustAll", {
		enumerable: true,
		get: function() {
			return exhaustAll_1.exhaustAll;
		}
	});
	var exhaustMap_1 = require_exhaustMap();
	Object.defineProperty(exports, "exhaustMap", {
		enumerable: true,
		get: function() {
			return exhaustMap_1.exhaustMap;
		}
	});
	var expand_1 = require_expand();
	Object.defineProperty(exports, "expand", {
		enumerable: true,
		get: function() {
			return expand_1.expand;
		}
	});
	var filter_1 = require_filter();
	Object.defineProperty(exports, "filter", {
		enumerable: true,
		get: function() {
			return filter_1.filter;
		}
	});
	var finalize_1 = require_finalize();
	Object.defineProperty(exports, "finalize", {
		enumerable: true,
		get: function() {
			return finalize_1.finalize;
		}
	});
	var find_1 = require_find();
	Object.defineProperty(exports, "find", {
		enumerable: true,
		get: function() {
			return find_1.find;
		}
	});
	var findIndex_1 = require_findIndex();
	Object.defineProperty(exports, "findIndex", {
		enumerable: true,
		get: function() {
			return findIndex_1.findIndex;
		}
	});
	var first_1 = require_first();
	Object.defineProperty(exports, "first", {
		enumerable: true,
		get: function() {
			return first_1.first;
		}
	});
	var groupBy_1 = require_groupBy();
	Object.defineProperty(exports, "groupBy", {
		enumerable: true,
		get: function() {
			return groupBy_1.groupBy;
		}
	});
	var ignoreElements_1 = require_ignoreElements();
	Object.defineProperty(exports, "ignoreElements", {
		enumerable: true,
		get: function() {
			return ignoreElements_1.ignoreElements;
		}
	});
	var isEmpty_1 = require_isEmpty();
	Object.defineProperty(exports, "isEmpty", {
		enumerable: true,
		get: function() {
			return isEmpty_1.isEmpty;
		}
	});
	var last_1 = require_last();
	Object.defineProperty(exports, "last", {
		enumerable: true,
		get: function() {
			return last_1.last;
		}
	});
	var map_1 = require_map();
	Object.defineProperty(exports, "map", {
		enumerable: true,
		get: function() {
			return map_1.map;
		}
	});
	var mapTo_1 = require_mapTo();
	Object.defineProperty(exports, "mapTo", {
		enumerable: true,
		get: function() {
			return mapTo_1.mapTo;
		}
	});
	var materialize_1 = require_materialize();
	Object.defineProperty(exports, "materialize", {
		enumerable: true,
		get: function() {
			return materialize_1.materialize;
		}
	});
	var max_1 = require_max();
	Object.defineProperty(exports, "max", {
		enumerable: true,
		get: function() {
			return max_1.max;
		}
	});
	var merge_1 = require_merge();
	Object.defineProperty(exports, "merge", {
		enumerable: true,
		get: function() {
			return merge_1.merge;
		}
	});
	var mergeAll_1 = require_mergeAll();
	Object.defineProperty(exports, "mergeAll", {
		enumerable: true,
		get: function() {
			return mergeAll_1.mergeAll;
		}
	});
	var flatMap_1 = require_flatMap();
	Object.defineProperty(exports, "flatMap", {
		enumerable: true,
		get: function() {
			return flatMap_1.flatMap;
		}
	});
	var mergeMap_1 = require_mergeMap();
	Object.defineProperty(exports, "mergeMap", {
		enumerable: true,
		get: function() {
			return mergeMap_1.mergeMap;
		}
	});
	var mergeMapTo_1 = require_mergeMapTo();
	Object.defineProperty(exports, "mergeMapTo", {
		enumerable: true,
		get: function() {
			return mergeMapTo_1.mergeMapTo;
		}
	});
	var mergeScan_1 = require_mergeScan();
	Object.defineProperty(exports, "mergeScan", {
		enumerable: true,
		get: function() {
			return mergeScan_1.mergeScan;
		}
	});
	var mergeWith_1 = require_mergeWith();
	Object.defineProperty(exports, "mergeWith", {
		enumerable: true,
		get: function() {
			return mergeWith_1.mergeWith;
		}
	});
	var min_1 = require_min();
	Object.defineProperty(exports, "min", {
		enumerable: true,
		get: function() {
			return min_1.min;
		}
	});
	var multicast_1 = require_multicast();
	Object.defineProperty(exports, "multicast", {
		enumerable: true,
		get: function() {
			return multicast_1.multicast;
		}
	});
	var observeOn_1 = require_observeOn();
	Object.defineProperty(exports, "observeOn", {
		enumerable: true,
		get: function() {
			return observeOn_1.observeOn;
		}
	});
	var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
	Object.defineProperty(exports, "onErrorResumeNext", {
		enumerable: true,
		get: function() {
			return onErrorResumeNextWith_1.onErrorResumeNext;
		}
	});
	var pairwise_1 = require_pairwise();
	Object.defineProperty(exports, "pairwise", {
		enumerable: true,
		get: function() {
			return pairwise_1.pairwise;
		}
	});
	var partition_1 = require_partition();
	Object.defineProperty(exports, "partition", {
		enumerable: true,
		get: function() {
			return partition_1.partition;
		}
	});
	var pluck_1 = require_pluck();
	Object.defineProperty(exports, "pluck", {
		enumerable: true,
		get: function() {
			return pluck_1.pluck;
		}
	});
	var publish_1 = require_publish();
	Object.defineProperty(exports, "publish", {
		enumerable: true,
		get: function() {
			return publish_1.publish;
		}
	});
	var publishBehavior_1 = require_publishBehavior();
	Object.defineProperty(exports, "publishBehavior", {
		enumerable: true,
		get: function() {
			return publishBehavior_1.publishBehavior;
		}
	});
	var publishLast_1 = require_publishLast();
	Object.defineProperty(exports, "publishLast", {
		enumerable: true,
		get: function() {
			return publishLast_1.publishLast;
		}
	});
	var publishReplay_1 = require_publishReplay();
	Object.defineProperty(exports, "publishReplay", {
		enumerable: true,
		get: function() {
			return publishReplay_1.publishReplay;
		}
	});
	var race_1 = require_race();
	Object.defineProperty(exports, "race", {
		enumerable: true,
		get: function() {
			return race_1.race;
		}
	});
	var raceWith_1 = require_raceWith();
	Object.defineProperty(exports, "raceWith", {
		enumerable: true,
		get: function() {
			return raceWith_1.raceWith;
		}
	});
	var reduce_1 = require_reduce();
	Object.defineProperty(exports, "reduce", {
		enumerable: true,
		get: function() {
			return reduce_1.reduce;
		}
	});
	var repeat_1 = require_repeat();
	Object.defineProperty(exports, "repeat", {
		enumerable: true,
		get: function() {
			return repeat_1.repeat;
		}
	});
	var repeatWhen_1 = require_repeatWhen();
	Object.defineProperty(exports, "repeatWhen", {
		enumerable: true,
		get: function() {
			return repeatWhen_1.repeatWhen;
		}
	});
	var retry_1 = require_retry();
	Object.defineProperty(exports, "retry", {
		enumerable: true,
		get: function() {
			return retry_1.retry;
		}
	});
	var retryWhen_1 = require_retryWhen();
	Object.defineProperty(exports, "retryWhen", {
		enumerable: true,
		get: function() {
			return retryWhen_1.retryWhen;
		}
	});
	var refCount_1 = require_refCount();
	Object.defineProperty(exports, "refCount", {
		enumerable: true,
		get: function() {
			return refCount_1.refCount;
		}
	});
	var sample_1 = require_sample();
	Object.defineProperty(exports, "sample", {
		enumerable: true,
		get: function() {
			return sample_1.sample;
		}
	});
	var sampleTime_1 = require_sampleTime();
	Object.defineProperty(exports, "sampleTime", {
		enumerable: true,
		get: function() {
			return sampleTime_1.sampleTime;
		}
	});
	var scan_1 = require_scan();
	Object.defineProperty(exports, "scan", {
		enumerable: true,
		get: function() {
			return scan_1.scan;
		}
	});
	var sequenceEqual_1 = require_sequenceEqual();
	Object.defineProperty(exports, "sequenceEqual", {
		enumerable: true,
		get: function() {
			return sequenceEqual_1.sequenceEqual;
		}
	});
	var share_1 = require_share();
	Object.defineProperty(exports, "share", {
		enumerable: true,
		get: function() {
			return share_1.share;
		}
	});
	var shareReplay_1 = require_shareReplay();
	Object.defineProperty(exports, "shareReplay", {
		enumerable: true,
		get: function() {
			return shareReplay_1.shareReplay;
		}
	});
	var single_1 = require_single();
	Object.defineProperty(exports, "single", {
		enumerable: true,
		get: function() {
			return single_1.single;
		}
	});
	var skip_1 = require_skip();
	Object.defineProperty(exports, "skip", {
		enumerable: true,
		get: function() {
			return skip_1.skip;
		}
	});
	var skipLast_1 = require_skipLast();
	Object.defineProperty(exports, "skipLast", {
		enumerable: true,
		get: function() {
			return skipLast_1.skipLast;
		}
	});
	var skipUntil_1 = require_skipUntil();
	Object.defineProperty(exports, "skipUntil", {
		enumerable: true,
		get: function() {
			return skipUntil_1.skipUntil;
		}
	});
	var skipWhile_1 = require_skipWhile();
	Object.defineProperty(exports, "skipWhile", {
		enumerable: true,
		get: function() {
			return skipWhile_1.skipWhile;
		}
	});
	var startWith_1 = require_startWith();
	Object.defineProperty(exports, "startWith", {
		enumerable: true,
		get: function() {
			return startWith_1.startWith;
		}
	});
	var subscribeOn_1 = require_subscribeOn();
	Object.defineProperty(exports, "subscribeOn", {
		enumerable: true,
		get: function() {
			return subscribeOn_1.subscribeOn;
		}
	});
	var switchAll_1 = require_switchAll();
	Object.defineProperty(exports, "switchAll", {
		enumerable: true,
		get: function() {
			return switchAll_1.switchAll;
		}
	});
	var switchMap_1 = require_switchMap();
	Object.defineProperty(exports, "switchMap", {
		enumerable: true,
		get: function() {
			return switchMap_1.switchMap;
		}
	});
	var switchMapTo_1 = require_switchMapTo();
	Object.defineProperty(exports, "switchMapTo", {
		enumerable: true,
		get: function() {
			return switchMapTo_1.switchMapTo;
		}
	});
	var switchScan_1 = require_switchScan();
	Object.defineProperty(exports, "switchScan", {
		enumerable: true,
		get: function() {
			return switchScan_1.switchScan;
		}
	});
	var take_1 = require_take();
	Object.defineProperty(exports, "take", {
		enumerable: true,
		get: function() {
			return take_1.take;
		}
	});
	var takeLast_1 = require_takeLast();
	Object.defineProperty(exports, "takeLast", {
		enumerable: true,
		get: function() {
			return takeLast_1.takeLast;
		}
	});
	var takeUntil_1 = require_takeUntil();
	Object.defineProperty(exports, "takeUntil", {
		enumerable: true,
		get: function() {
			return takeUntil_1.takeUntil;
		}
	});
	var takeWhile_1 = require_takeWhile();
	Object.defineProperty(exports, "takeWhile", {
		enumerable: true,
		get: function() {
			return takeWhile_1.takeWhile;
		}
	});
	var tap_1 = require_tap();
	Object.defineProperty(exports, "tap", {
		enumerable: true,
		get: function() {
			return tap_1.tap;
		}
	});
	var throttle_1 = require_throttle();
	Object.defineProperty(exports, "throttle", {
		enumerable: true,
		get: function() {
			return throttle_1.throttle;
		}
	});
	var throttleTime_1 = require_throttleTime();
	Object.defineProperty(exports, "throttleTime", {
		enumerable: true,
		get: function() {
			return throttleTime_1.throttleTime;
		}
	});
	var throwIfEmpty_1 = require_throwIfEmpty();
	Object.defineProperty(exports, "throwIfEmpty", {
		enumerable: true,
		get: function() {
			return throwIfEmpty_1.throwIfEmpty;
		}
	});
	var timeInterval_1 = require_timeInterval();
	Object.defineProperty(exports, "timeInterval", {
		enumerable: true,
		get: function() {
			return timeInterval_1.timeInterval;
		}
	});
	var timeout_1 = require_timeout();
	Object.defineProperty(exports, "timeout", {
		enumerable: true,
		get: function() {
			return timeout_1.timeout;
		}
	});
	var timeoutWith_1 = require_timeoutWith();
	Object.defineProperty(exports, "timeoutWith", {
		enumerable: true,
		get: function() {
			return timeoutWith_1.timeoutWith;
		}
	});
	var timestamp_1 = require_timestamp();
	Object.defineProperty(exports, "timestamp", {
		enumerable: true,
		get: function() {
			return timestamp_1.timestamp;
		}
	});
	var toArray_1 = require_toArray();
	Object.defineProperty(exports, "toArray", {
		enumerable: true,
		get: function() {
			return toArray_1.toArray;
		}
	});
	var window_1 = require_window();
	Object.defineProperty(exports, "window", {
		enumerable: true,
		get: function() {
			return window_1.window;
		}
	});
	var windowCount_1 = require_windowCount();
	Object.defineProperty(exports, "windowCount", {
		enumerable: true,
		get: function() {
			return windowCount_1.windowCount;
		}
	});
	var windowTime_1 = require_windowTime();
	Object.defineProperty(exports, "windowTime", {
		enumerable: true,
		get: function() {
			return windowTime_1.windowTime;
		}
	});
	var windowToggle_1 = require_windowToggle();
	Object.defineProperty(exports, "windowToggle", {
		enumerable: true,
		get: function() {
			return windowToggle_1.windowToggle;
		}
	});
	var windowWhen_1 = require_windowWhen();
	Object.defineProperty(exports, "windowWhen", {
		enumerable: true,
		get: function() {
			return windowWhen_1.windowWhen;
		}
	});
	var withLatestFrom_1 = require_withLatestFrom();
	Object.defineProperty(exports, "withLatestFrom", {
		enumerable: true,
		get: function() {
			return withLatestFrom_1.withLatestFrom;
		}
	});
	var zip_1 = require_zip();
	Object.defineProperty(exports, "zip", {
		enumerable: true,
		get: function() {
			return zip_1.zip;
		}
	});
	var zipAll_1 = require_zipAll();
	Object.defineProperty(exports, "zipAll", {
		enumerable: true,
		get: function() {
			return zipAll_1.zipAll;
		}
	});
	var zipWith_1 = require_zipWith();
	Object.defineProperty(exports, "zipWith", {
		enumerable: true,
		get: function() {
			return zipWith_1.zipWith;
		}
	});
}));
//#endregion
//#region node_modules/.pnpm/@sanity+client@7.23.0/node_modules/@sanity/client/dist/_chunks-es/resolveEditInfo.js
var DRAFTS_FOLDER = "drafts", VERSION_FOLDER = "versions", PATH_SEPARATOR = ".", DRAFTS_PREFIX = `${DRAFTS_FOLDER}${PATH_SEPARATOR}`, VERSION_PREFIX = `${VERSION_FOLDER}${PATH_SEPARATOR}`;
function isDraftId(id) {
	return id.startsWith(DRAFTS_PREFIX);
}
function isVersionId(id) {
	return id.startsWith(VERSION_PREFIX);
}
function getDraftId(id) {
	if (isVersionId(id)) return DRAFTS_PREFIX + getPublishedId(id);
	return isDraftId(id) ? id : DRAFTS_PREFIX + id;
}
function getVersionId(id, version) {
	if (version === "drafts" || version === "published") throw new Error("Version can not be \"published\" or \"drafts\"");
	return `${VERSION_PREFIX}${version}${PATH_SEPARATOR}${getPublishedId(id)}`;
}
function getVersionFromId(id) {
	if (!isVersionId(id)) return;
	const [_versionPrefix, versionId] = id.split(PATH_SEPARATOR);
	return versionId;
}
function getPublishedId(id) {
	return isVersionId(id) ? id.split(PATH_SEPARATOR).slice(2).join(PATH_SEPARATOR) : isDraftId(id) ? id.slice(DRAFTS_PREFIX.length) : id;
}
//#endregion
//#region node_modules/.pnpm/@sanity+client@7.23.0/node_modules/@sanity/client/dist/_chunks-es/config.js
var import_operators = require_operators();
var BASE_URL = "https://www.sanity.io/help/";
function generateHelpUrl(slug) {
	return BASE_URL + slug;
}
var VALID_ASSET_TYPES = ["image", "file"], VALID_INSERT_LOCATIONS = [
	"before",
	"after",
	"replace"
], dataset = (name) => {
	if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
}, projectId = (id) => {
	if (!/^[-a-z0-9]+$/i.test(id)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
}, validateAssetType = (type) => {
	if (VALID_ASSET_TYPES.indexOf(type) === -1) throw new Error(`Invalid asset type: ${type}. Must be one of ${VALID_ASSET_TYPES.join(", ")}`);
}, validateObject = (op, val) => {
	if (val === null || typeof val != "object" || Array.isArray(val)) throw new Error(`${op}() takes an object of properties`);
}, validateDocumentId = (op, id) => {
	if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) throw new Error(`${op}(): "${id}" is not a valid document ID`);
}, requireDocumentId = (op, doc) => {
	if (!doc._id) throw new Error(`${op}() requires that the document contains an ID ("_id" property)`);
	validateDocumentId(op, doc._id);
}, validateDocumentType = (op, type) => {
	if (typeof type != "string") throw new Error(`\`${op}()\`: \`${type}\` is not a valid document type`);
}, requireDocumentType = (op, doc) => {
	if (!doc._type) throw new Error(`\`${op}()\` requires that the document contains a type (\`_type\` property)`);
	validateDocumentType(op, doc._type);
}, validateVersionIdMatch = (builtVersionId, document) => {
	if (document._id && document._id !== builtVersionId) throw new Error(`The provided document ID (\`${document._id}\`) does not match the generated version ID (\`${builtVersionId}\`)`);
}, validateInsert = (at, selector, items) => {
	const signature = "insert(at, selector, items)";
	if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
		const valid = VALID_INSERT_LOCATIONS.map((loc) => `"${loc}"`).join(", ");
		throw new Error(`${signature} takes an "at"-argument which is one of: ${valid}`);
	}
	if (typeof selector != "string") throw new Error(`${signature} takes a "selector"-argument which must be a string`);
	if (!Array.isArray(items)) throw new Error(`${signature} takes an "items"-argument which must be an array`);
}, hasDataset = (config) => {
	if (config.dataset) return config.dataset;
	const resource = config.resource;
	if (resource && resource.type === "dataset") {
		const segments = resource.id.split(".");
		if (segments.length !== 2) throw new Error("Dataset resource ID must be in the format \"project.dataset\"");
		return segments[1];
	}
	throw new Error("`dataset` must be provided to perform queries");
}, requestTag = (tag) => {
	if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
	return tag;
}, resourceConfig = (config) => {
	const resource = config.resource;
	if (!resource) throw new Error("`resource` must be provided to perform resource queries");
	const { type, id } = resource;
	switch (type) {
		case "dataset":
			if (id.split(".").length !== 2) throw new Error("Dataset resource ID must be in the format \"project.dataset\"");
			return;
		case "dashboard":
		case "media-library":
		case "canvas": return;
		default: throw new Error(`Unsupported resource type: ${type.toString()}`);
	}
}, resourceGuard = (service, config) => {
	if (config.resource) throw new Error(`\`${service}\` does not support resource-based operations`);
};
function once(fn) {
	let didCall = !1, returnValue;
	return (...args) => (didCall || (returnValue = fn(...args), didCall = !0), returnValue);
}
var createWarningPrinter = (message) => once((...args) => console.warn(message.join(" "), ...args)), printCdnAndWithCredentialsWarning = createWarningPrinter(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]), printCdnWarning = createWarningPrinter([
	"Since you haven't set a value for `useCdn`, we will deliver content using our",
	"global, edge-cached API-CDN. If you wish to have content delivered faster, set",
	"`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]), printCdnPreviewDraftsWarning = createWarningPrinter(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]), printPreviewDraftsDeprecationWarning = createWarningPrinter(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]), printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${generateHelpUrl("js-client-browser-token")} for more information and how to hide this warning.`]), printCredentialedTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]), printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", `See ${generateHelpUrl("js-client-api-version")}`]);
createWarningPrinter(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]);
var printCreateVersionWithBaseIdWarning = createWarningPrinter(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."]), printDeprecatedResourceConfigWarning = createWarningPrinter(["The `~experimental_resource` configuration property has been renamed to `resource`.", "Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version."]), defaultCdnHost = "apicdn.sanity.io", defaultConfig = {
	apiHost: "https://api.sanity.io",
	apiVersion: "1",
	useProjectHostname: !0,
	stega: { enabled: !1 }
}, LOCALHOSTS = [
	"localhost",
	"127.0.0.1",
	"0.0.0.0"
], isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
function validateApiVersion(apiVersion) {
	if (apiVersion === "1" || apiVersion === "X") return;
	const apiDate = new Date(apiVersion);
	if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0)) throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function validateApiPerspective(perspective) {
	if (Array.isArray(perspective) && perspective.length > 1 && perspective.includes("raw")) throw new TypeError("Invalid API perspective value: \"raw\". The raw-perspective can not be combined with other perspectives");
}
var initConfig = (config, prevConfig) => {
	const specifiedConfig = {
		...prevConfig,
		...config,
		stega: {
			...typeof prevConfig.stega == "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
			...typeof config.stega == "boolean" ? { enabled: config.stega } : config.stega || {}
		}
	};
	specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
	const newConfig = {
		...defaultConfig,
		...specifiedConfig
	};
	newConfig["~experimental_resource"] && !newConfig.resource && (printDeprecatedResourceConfigWarning(), newConfig.resource = newConfig["~experimental_resource"]);
	const resourceConfig$1 = newConfig.resource, projectBased = newConfig.useProjectHostname && !resourceConfig$1;
	if (typeof Promise > "u") {
		const helpUrl = generateHelpUrl("js-client-promise-polyfill");
		throw new Error(`No native Promise-implementation found, polyfill needed - see ${helpUrl}`);
	}
	if (projectBased && !newConfig.projectId) throw new Error("Configuration must contain `projectId`");
	if (resourceConfig$1 && resourceConfig(newConfig), typeof newConfig.perspective < "u" && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
	if ("encodeSourceMapAtPath" in newConfig) throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
	if (typeof newConfig.stega.enabled != "boolean") throw new Error(`stega.enabled must be a boolean, received ${newConfig.stega.enabled}`);
	if (newConfig.stega.enabled && newConfig.stega.studioUrl === void 0) throw new Error("stega.studioUrl must be defined when stega.enabled is true");
	if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function") throw new Error(`stega.studioUrl must be a string or a function, received ${newConfig.stega.studioUrl}`);
	const isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname), hasToken = !!newConfig.token;
	newConfig.withCredentials && hasToken && (printCredentialedTokenWarning(), newConfig.withCredentials = !1), isBrowser && isLocalhost && hasToken && newConfig.ignoreBrowserTokenWarning !== !0 ? printBrowserTokenWarning() : typeof newConfig.useCdn > "u" && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0), newConfig.apiVersion = `${newConfig.apiVersion}`.replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === !0 && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== !1 && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
	const hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
	return projectBased ? (newConfig.url = `${protocol}://${newConfig.projectId}.${host}/v${newConfig.apiVersion}`, newConfig.cdnUrl = `${protocol}://${newConfig.projectId}.${cdnHost}/v${newConfig.apiVersion}`) : (newConfig.url = `${newConfig.apiHost}/v${newConfig.apiVersion}`, newConfig.cdnUrl = newConfig.url), newConfig;
};
//#endregion
//#region node_modules/.pnpm/nanoid@3.3.15/node_modules/nanoid/index.js
var POOL_SIZE_MULTIPLIER = 128;
var pool, poolOffset;
var fillPool = (bytes) => {
	if (bytes < 0) throw new RangeError("Wrong ID size");
	try {
		if (!pool || pool.length < bytes) {
			pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
			crypto.randomFillSync(pool);
			poolOffset = 0;
		} else if (poolOffset + bytes > pool.length) {
			crypto.randomFillSync(pool);
			poolOffset = 0;
		}
	} catch (e) {
		pool = void 0;
		throw e;
	}
	poolOffset += bytes;
};
var random = (bytes) => {
	fillPool(bytes |= 0);
	return pool.subarray(poolOffset - bytes, poolOffset);
};
var customRandom = (alphabet, defaultSize, getRandom) => {
	let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
	let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
	return (size = defaultSize) => {
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let i = step;
			while (i--) {
				id += alphabet[bytes[i] & mask] || "";
				if (id.length === size) return id;
			}
		}
	};
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
//#endregion
//#region node_modules/.pnpm/@sanity+client@7.23.0/node_modules/@sanity/client/dist/index.js
var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
function codeFrame(query, location2, message) {
	const lines = query.split(NEWLINE), { start, end, markerLines } = getMarkerLines({
		start: columnToLine(location2.start, lines),
		end: location2.end ? columnToLine(location2.end, lines) : void 0
	}, lines), numberMaxWidth = `${end}`.length;
	return query.split(NEWLINE, end).slice(start, end).map((line, index) => {
		const number = start + 1 + index, gutter = ` ${` ${number}`.slice(-numberMaxWidth)} |`, hasMarker = markerLines[number], lastMarkerLine = !markerLines[number + 1];
		if (!hasMarker) return ` ${gutter}${line.length > 0 ? ` ${line}` : ""}`;
		let markerLine = "";
		if (Array.isArray(hasMarker)) {
			const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " "), numberOfMarkers = hasMarker[1] || 1;
			markerLine = [
				`
 `,
				gutter.replace(/\d/g, " "),
				" ",
				markerSpacing,
				"^".repeat(numberOfMarkers)
			].join(""), lastMarkerLine && message && (markerLine += " " + message);
		}
		return [
			">",
			gutter,
			line.length > 0 ? ` ${line}` : "",
			markerLine
		].join("");
	}).join(`
`);
}
function getMarkerLines(loc, source) {
	const startLoc = { ...loc.start }, endLoc = {
		...startLoc,
		...loc.end
	}, linesBelow = 3, startLine = startLoc.line ?? -1, startColumn = startLoc.column ?? 0, endLine = endLoc.line, endColumn = endLoc.column;
	let start = Math.max(startLine - 3, 0), end = Math.min(source.length, endLine + linesBelow);
	startLine === -1 && (start = 0), endLine === -1 && (end = source.length);
	const lineDiff = endLine - startLine, markerLines = {};
	if (lineDiff) for (let i = 0; i <= lineDiff; i++) {
		const lineNumber = i + startLine;
		if (!startColumn) markerLines[lineNumber] = !0;
		else if (i === 0) markerLines[lineNumber] = [startColumn, source[lineNumber - 1].length - startColumn + 1];
		else if (i === lineDiff) markerLines[lineNumber] = [0, endColumn];
		else markerLines[lineNumber] = [0, source[lineNumber - i].length];
	}
	else startColumn === endColumn ? startColumn ? markerLines[startLine] = [startColumn, 0] : markerLines[startLine] = !0 : markerLines[startLine] = [startColumn, endColumn - startColumn];
	return {
		start,
		end,
		markerLines
	};
}
function columnToLine(column, lines) {
	let offset = 0;
	for (let i = 0; i < lines.length; i++) {
		const lineLength = lines[i].length + 1;
		if (offset + lineLength > column) return {
			line: i + 1,
			column: column - offset
		};
		offset += lineLength;
	}
	return {
		line: lines.length,
		column: lines[lines.length - 1]?.length ?? 0
	};
}
var MAX_ITEMS_IN_ERROR_MESSAGE = 5;
var ClientError = class extends Error {
	response;
	statusCode = 400;
	responseBody;
	traceId;
	details;
	constructor(res, context) {
		const props = extractErrorProps(res, context);
		super(props.message), Object.assign(this, props);
	}
};
var ServerError = class extends Error {
	response;
	statusCode = 500;
	responseBody;
	traceId;
	details;
	constructor(res) {
		const props = extractErrorProps(res);
		super(props.message), Object.assign(this, props);
	}
};
function extractErrorProps(res, context) {
	const body = res.body, props = {
		response: res,
		statusCode: res.statusCode,
		responseBody: stringifyBody(body, res),
		traceId: extractTraceId(res),
		message: "",
		details: void 0
	};
	if (!isRecord$1(body)) return props.message = `${httpErrorMessage(res, body)}${formatTraceId(props.traceId)}`, props;
	const error = body.error;
	if (typeof error == "string" && typeof body.message == "string") return props.message = `${error} - ${body.message}${formatTraceId(props.traceId)}`, props;
	if (typeof error != "object" || error === null) return typeof error == "string" ? props.message = `${error}${formatTraceId(props.traceId)}` : typeof body.message == "string" ? props.message = `${body.message}${formatTraceId(props.traceId)}` : props.message = `${httpErrorMessage(res, body)}${formatTraceId(props.traceId)}`, props;
	if (isMutationError(error) || isActionError(error)) {
		const allItems = error.items || [], items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item) => item.error?.description).filter(Boolean);
		let itemsStr = items.length ? `:
- ${items.join(`
- `)}` : "";
		return allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE && (itemsStr += `
...and ${allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE} more`), props.message = `${error.description}${formatTraceId(props.traceId)}${itemsStr}`, props.details = body.error, props;
	}
	if (isQueryParseError(error)) {
		const tag = context?.options?.query?.tag;
		return props.message = formatQueryParseError(error, tag, props.traceId), props.details = body.error, props;
	}
	return "description" in error && typeof error.description == "string" ? (props.message = `${error.description}${formatTraceId(props.traceId)}`, props.details = error, props) : (props.message = `${httpErrorMessage(res, body)}${formatTraceId(props.traceId)}`, props);
}
function isMutationError(error) {
	return "type" in error && error.type === "mutationError" && "description" in error && typeof error.description == "string";
}
function isActionError(error) {
	return "type" in error && error.type === "actionError" && "description" in error && typeof error.description == "string";
}
function isQueryParseError(error) {
	return isRecord$1(error) && error.type === "queryParseError" && typeof error.query == "string" && typeof error.start == "number" && typeof error.end == "number";
}
function formatQueryParseError(error, tag, traceId) {
	const { query, start, end, description } = error, withTraceId = traceId ? `
(traceId: ${traceId})` : "";
	if (!query || typeof start > "u") return `GROQ query parse error: ${description}${withTraceId}`;
	const withTag = tag ? `

Tag: ${tag}` : "";
	return `GROQ query parse error:
${codeFrame(query, {
		start,
		end
	}, description)}${withTag}${withTraceId}`;
}
function httpErrorMessage(res, body) {
	const details = typeof body == "string" ? ` (${sliceWithEllipsis(body, 100)})` : "", statusMessage = res.statusMessage ? ` ${res.statusMessage}` : "";
	return `${res.method}-request to ${res.url} resulted in HTTP ${res.statusCode}${statusMessage}${details}`;
}
function extractTraceId(res) {
	const traceparent = res?.headers?.traceparent;
	if (traceparent) return traceparent.split("-")[1];
}
function stringifyBody(body, res) {
	return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(body, null, 2) : body;
}
function formatTraceId(traceId) {
	return traceId ? ` (traceId: ${traceId})` : "";
}
function sliceWithEllipsis(str, max) {
	return str.length > max ? `${str.slice(0, max)}\u2026` : str;
}
var CorsOriginError = class extends Error {
	projectId;
	addOriginUrl;
	constructor({ projectId, credentials } = {}) {
		if (super("CorsOriginError"), this.name = "CorsOriginError", this.projectId = projectId, projectId && typeof location < "u") {
			const url = new URL(`https://sanity.io/manage/project/${projectId}/api`), { origin } = location;
			url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin), credentials && url.searchParams.set("credentials", ""), this.addOriginUrl = url, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${url}`;
		} else projectId ? this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: https://sanity.io/manage/project/${projectId}/api` : this.message = "The current origin is not allowed to connect to the Live Content API.";
	}
};
var httpError = { onResponse: (res, context) => {
	if (res.statusCode >= 500) throw new ServerError(res);
	if (res.statusCode >= 400) throw new ClientError(res, context);
	return res;
} };
function printWarnings(config = {}) {
	const seen = {}, shouldIgnoreWarning = (message) => config.ignoreWarnings === void 0 ? !1 : (Array.isArray(config.ignoreWarnings) ? config.ignoreWarnings : [config.ignoreWarnings]).some((pattern) => typeof pattern == "string" ? message.includes(pattern) : pattern instanceof RegExp ? pattern.test(message) : !1);
	return { onResponse: (res) => {
		const warn = res.headers["x-sanity-warning"], warnings = Array.isArray(warn) ? warn : [warn];
		for (const msg of warnings) !msg || seen[msg] || shouldIgnoreWarning(msg) || (seen[msg] = !0, console.warn(msg));
		return res;
	} };
}
function defineHttpRequest(envMiddleware, config = {}) {
	return k([
		z({ shouldRetry }),
		...envMiddleware,
		printWarnings(config),
		C(),
		T(),
		_(),
		httpError,
		N({ implementation: import_cjs.Observable })
	]);
}
function shouldRetry(err, attempt, options) {
	if (options.maxRetries === 0) return !1;
	const isSafe = options.method === "GET" || options.method === "HEAD", isQuery2 = (options.uri || options.url).startsWith("/data/query"), isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
	return (isSafe || isQuery2) && isRetriableResponse ? !0 : z.shouldRetry(err, attempt, options);
}
var ConnectionFailedError = class extends Error {
	name = "ConnectionFailedError";
};
var DisconnectError = class extends Error {
	name = "DisconnectError";
	reason;
	constructor(message, reason, options = {}) {
		super(message, options), this.reason = reason;
	}
};
var ChannelError = class extends Error {
	name = "ChannelError";
	data;
	constructor(message, data) {
		super(message), this.data = data;
	}
};
var MessageError = class extends Error {
	name = "MessageError";
	data;
	constructor(message, data, options = {}) {
		super(message, options), this.data = data;
	}
};
var MessageParseError = class extends Error {
	name = "MessageParseError";
};
var REQUIRED_EVENTS = ["channelError", "disconnect"];
function connectEventSource(initEventSource, events) {
	return (0, import_cjs.defer)(() => {
		const es = initEventSource();
		return (0, import_cjs.isObservable)(es) ? es : (0, import_cjs.of)(es);
	}).pipe((0, import_cjs.mergeMap)((es) => connectWithESInstance(es, events)));
}
function connectWithESInstance(es, events) {
	return new import_cjs.Observable((observer) => {
		const emitOpen = events.includes("open"), emitReconnect = events.includes("reconnect");
		function onError(evt) {
			if ("data" in evt) {
				const [parseError, event] = parseEvent(evt);
				observer.error(parseError ? new MessageParseError("Unable to parse EventSource error message", { cause: event }) : new MessageError((event?.data).message, event));
				return;
			}
			es.readyState === es.CLOSED ? observer.error(new ConnectionFailedError("EventSource connection failed")) : emitReconnect && observer.next({ type: "reconnect" });
		}
		function onOpen() {
			observer.next({ type: "open" });
		}
		function onMessage(message) {
			const [parseError, event] = parseEvent(message);
			if (parseError) {
				observer.error(new MessageParseError("Unable to parse EventSource message", { cause: parseError }));
				return;
			}
			if (message.type === "channelError") {
				const tag = new URL(es.url).searchParams.get("tag");
				observer.error(new ChannelError(extractErrorMessage(event?.data, tag), event.data));
				return;
			}
			if (message.type === "disconnect") {
				observer.error(new DisconnectError(`Server disconnected client: ${event.data?.reason || "unknown error"}`));
				return;
			}
			observer.next({
				type: message.type,
				id: message.lastEventId,
				...event.data ? { data: event.data } : {}
			});
		}
		es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
		const cleanedEvents = [.../* @__PURE__ */ new Set([...REQUIRED_EVENTS, ...events])].filter((type) => type !== "error" && type !== "open" && type !== "reconnect");
		return cleanedEvents.forEach((type) => es.addEventListener(type, onMessage)), () => {
			es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type) => es.removeEventListener(type, onMessage)), es.close();
		};
	});
}
function parseEvent(message) {
	try {
		const data = typeof message.data == "string" && JSON.parse(message.data);
		return [null, {
			type: message.type,
			id: message.lastEventId,
			...isEmptyObject(data) ? {} : { data }
		}];
	} catch (err) {
		return [err, null];
	}
}
function extractErrorMessage(err, tag) {
	const error = err.error;
	return error ? isQueryParseError(error) ? formatQueryParseError(error, tag) : error.description ? error.description : typeof error == "string" ? error : JSON.stringify(error, null, 2) : err.message || "Unknown listener error";
}
function isEmptyObject(data) {
	for (const _ in data) return !1;
	return !0;
}
function getSelection(sel) {
	if (typeof sel == "string") return { id: sel };
	if (Array.isArray(sel)) return {
		query: "*[_id in $ids]",
		params: { ids: sel }
	};
	if (typeof sel == "object" && sel !== null && "query" in sel && typeof sel.query == "string") return "params" in sel && typeof sel.params == "object" && sel.params !== null ? {
		query: sel.query,
		params: sel.params
	} : { query: sel.query };
	const selectionOpts = [
		"* Document ID (<docId>)",
		"* Array of document IDs",
		"* Object containing `query`"
	].join(`
`);
	throw new Error(`Unknown selection - must be one of:

${selectionOpts}`);
}
var BasePatch = class {
	selection;
	operations;
	constructor(selection, operations = {}) {
		this.selection = selection, this.operations = operations;
	}
	/**
	* Sets the given attributes to the document. Does NOT merge objects.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	*/
	set(attrs) {
		return this._assign("set", attrs);
	}
	/**
	* Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
	*/
	setIfMissing(attrs) {
		return this._assign("setIfMissing", attrs);
	}
	/**
	* Performs a "diff-match-patch" operation on the string attributes provided.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
	*/
	diffMatchPatch(attrs) {
		return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
	}
	/**
	* Unsets the attribute paths provided.
	* The operation is added to the current patch, ready to be commited by `commit()`
	*
	* @param attrs - Attribute paths to unset.
	*/
	unset(attrs) {
		if (!Array.isArray(attrs)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
		return this.operations = Object.assign({}, this.operations, { unset: attrs }), this;
	}
	/**
	* Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	*
	* @param attrs - Object of attribute paths to increment, values representing the number to increment by.
	*/
	inc(attrs) {
		return this._assign("inc", attrs);
	}
	/**
	* Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
	*
	* @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
	*/
	dec(attrs) {
		return this._assign("dec", attrs);
	}
	/**
	* Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
	*
	* @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
	* @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
	* @param items - Array of items to insert/replace
	*/
	insert(at, selector, items) {
		return validateInsert(at, selector, items), this._assign("insert", {
			[at]: selector,
			items
		});
	}
	/**
	* Append the given items to the array at the given JSONPath
	*
	* @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
	* @param items - Array of items to append to the array
	*/
	append(selector, items) {
		return this.insert("after", `${selector}[-1]`, items);
	}
	/**
	* Prepend the given items to the array at the given JSONPath
	*
	* @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
	* @param items - Array of items to prepend to the array
	*/
	prepend(selector, items) {
		return this.insert("before", `${selector}[0]`, items);
	}
	/**
	* Change the contents of an array by removing existing elements and/or adding new elements.
	*
	* @param selector - Attribute or JSONPath expression for array
	* @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
	* @param deleteCount - An integer indicating the number of old array elements to remove.
	* @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
	*/
	splice(selector, start, deleteCount, items) {
		const delAll = typeof deleteCount > "u" || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), rangeSelector = `${selector}[${startIndex}:${startIndex < 0 && delCount >= 0 ? "" : delCount}]`;
		return this.insert("replace", rangeSelector, items || []);
	}
	/**
	* Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
	*
	* @param rev - Revision to lock the patch to
	*/
	ifRevisionId(rev) {
		return this.operations.ifRevisionID = rev, this;
	}
	/**
	* Return a plain JSON representation of the patch
	*/
	serialize() {
		return {
			...getSelection(this.selection),
			...this.operations
		};
	}
	/**
	* Return a plain JSON representation of the patch
	*/
	toJSON() {
		return this.serialize();
	}
	/**
	* Clears the patch of all operations
	*/
	reset() {
		return this.operations = {}, this;
	}
	_assign(op, props, merge2 = !0) {
		return validateObject(op, props), this.operations = Object.assign({}, this.operations, { [op]: Object.assign({}, merge2 && this.operations[op] || {}, props) }), this;
	}
	_set(op, props) {
		return this._assign(op, props, !1);
	}
};
var ObservablePatch = class ObservablePatch extends BasePatch {
	#client;
	constructor(selection, operations, client) {
		super(selection, operations), this.#client = client;
	}
	/**
	* Clones the patch
	*/
	clone() {
		return new ObservablePatch(this.selection, { ...this.operations }, this.#client);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
		const returnFirst = typeof this.selection == "string", opts = Object.assign({
			returnFirst,
			returnDocuments: !0
		}, options);
		return this.#client.mutate({ patch: this.serialize() }, opts);
	}
};
var Patch = class Patch extends BasePatch {
	#client;
	constructor(selection, operations, client) {
		super(selection, operations), this.#client = client;
	}
	/**
	* Clones the patch
	*/
	clone() {
		return new Patch(this.selection, { ...this.operations }, this.#client);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
		const returnFirst = typeof this.selection == "string", opts = Object.assign({
			returnFirst,
			returnDocuments: !0
		}, options);
		return this.#client.mutate({ patch: this.serialize() }, opts);
	}
};
var defaultMutateOptions = { returnDocuments: !1 };
var BaseTransaction = class {
	operations;
	trxId;
	constructor(operations = [], transactionId) {
		this.operations = operations, this.trxId = transactionId;
	}
	/**
	* Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create. Requires a `_type` property.
	*/
	create(doc) {
		return validateObject("create", doc), this._add({ create: doc });
	}
	/**
	* Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
	*/
	createIfNotExists(doc) {
		const op = "createIfNotExists";
		return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
	}
	/**
	* Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param doc - Document to create or replace. Requires `_id` and `_type` properties.
	*/
	createOrReplace(doc) {
		const op = "createOrReplace";
		return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
	}
	/**
	* Deletes the document with the given document ID
	* The operation is added to the current transaction, ready to be commited by `commit()`
	*
	* @param documentId - Document ID to delete
	*/
	delete(documentId) {
		return validateDocumentId("delete", documentId), this._add({ delete: { id: documentId } });
	}
	transactionId(id) {
		return id ? (this.trxId = id, this) : this.trxId;
	}
	/**
	* Return a plain JSON representation of the transaction
	*/
	serialize() {
		return [...this.operations];
	}
	/**
	* Return a plain JSON representation of the transaction
	*/
	toJSON() {
		return this.serialize();
	}
	/**
	* Clears the transaction of all operations
	*/
	reset() {
		return this.operations = [], this;
	}
	_add(mut) {
		return this.operations.push(mut), this;
	}
};
var Transaction = class Transaction extends BaseTransaction {
	#client;
	constructor(operations, client, transactionId) {
		super(operations, transactionId), this.#client = client;
	}
	/**
	* Clones the transaction
	*/
	clone() {
		return new Transaction([...this.operations], this.#client, this.trxId);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
		return this.#client.mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {}));
	}
	patch(patchOrDocumentId, patchOps) {
		const isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
		if (isPatch) return this._add({ patch: patchOrDocumentId.serialize() });
		if (isBuilder) {
			const patch = patchOps(new Patch(patchOrDocumentId, {}, this.#client));
			if (!(patch instanceof Patch)) throw new Error("function passed to `patch()` must return the patch");
			return this._add({ patch: patch.serialize() });
		}
		if (isMutationSelection) {
			const patch = new Patch(patchOrDocumentId, patchOps || {}, this.#client);
			return this._add({ patch: patch.serialize() });
		}
		return this._add({ patch: {
			id: patchOrDocumentId,
			...patchOps
		} });
	}
};
var ObservableTransaction = class ObservableTransaction extends BaseTransaction {
	#client;
	constructor(operations, client, transactionId) {
		super(operations, transactionId), this.#client = client;
	}
	/**
	* Clones the transaction
	*/
	clone() {
		return new ObservableTransaction([...this.operations], this.#client, this.trxId);
	}
	commit(options) {
		if (!this.#client) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
		return this.#client.mutate(this.serialize(), Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {}));
	}
	patch(patchOrDocumentId, patchOps) {
		const isBuilder = typeof patchOps == "function";
		if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch) return this._add({ patch: patchOrDocumentId.serialize() });
		if (isBuilder) {
			const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, this.#client));
			if (!(patch instanceof ObservablePatch)) throw new Error("function passed to `patch()` must return the patch");
			return this._add({ patch: patch.serialize() });
		}
		return this._add({ patch: {
			id: patchOrDocumentId,
			...patchOps
		} });
	}
};
var projectHeader = "X-Sanity-Project-ID";
function requestOptions(config, overrides = {}) {
	const headers2 = {};
	config.headers && Object.assign(headers2, config.headers);
	const token = overrides.token || config.token;
	token && (headers2.Authorization = `Bearer ${token}`), !overrides.useGlobalApi && !config.useProjectHostname && config.projectId && (headers2[projectHeader] = config.projectId);
	const withCredentials = !!(typeof overrides.withCredentials > "u" ? config.withCredentials : overrides.withCredentials), timeout = typeof overrides.timeout > "u" ? config.timeout : overrides.timeout;
	return Object.assign({}, overrides, {
		headers: Object.assign({}, headers2, overrides.headers || {}),
		timeout: typeof timeout > "u" ? 300 * 1e3 : timeout,
		proxy: overrides.proxy || config.proxy,
		json: !0,
		withCredentials,
		fetch: typeof overrides.fetch == "object" && typeof config.fetch == "object" ? {
			...config.fetch,
			...overrides.fetch
		} : overrides.fetch || config.fetch
	});
}
var encodeQueryString = ({ query, params = {}, options = {} }) => {
	const searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options;
	tag && searchParams.append("tag", tag), searchParams.append("query", query);
	for (const [key, value] of Object.entries(params)) value !== void 0 && searchParams.append(`$${key}`, JSON.stringify(value));
	for (const [key, value] of Object.entries(opts)) value && searchParams.append(key, `${value}`);
	return returnQuery === !1 && searchParams.append("returnQuery", "false"), includeMutations === !1 && searchParams.append("includeMutations", "false"), `?${searchParams}`;
}, excludeFalsey = (param, defValue) => param === !1 ? void 0 : typeof param > "u" ? defValue : param, getMutationQuery = (options = {}) => ({
	dryRun: options.dryRun,
	returnIds: !0,
	returnDocuments: excludeFalsey(options.returnDocuments, !0),
	visibility: options.visibility || "sync",
	autoGenerateArrayKeys: options.autoGenerateArrayKeys,
	skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
}), isResponse = (event) => event.type === "response", getBody = (event) => event.body, indexBy = (docs, attr) => docs.reduce((indexed, doc) => (indexed[attr(doc)] = doc, indexed), /* @__PURE__ */ Object.create(null)), getQuerySizeLimit = 11264;
function _fetch(client, httpRequest, _stega, query, _params = {}, options = {}) {
	const stega = "stega" in options ? {
		..._stega || {},
		...typeof options.stega == "boolean" ? { enabled: options.stega } : options.stega || {}
	} : _stega, params = stega.enabled ? stegaClean(_params) : _params, mapResponse = options.filterResponse === !1 ? (res) => res : (res) => res.result, { cache, next, ...opts } = {
		useAbortSignal: typeof options.signal < "u",
		resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
		...options,
		returnQuery: options.filterResponse === !1 && options.returnQuery !== !1
	}, reqOpts = typeof cache < "u" || typeof next < "u" ? {
		...opts,
		fetch: {
			cache,
			next
		}
	} : opts, $request = _dataRequest(client, httpRequest, "query", {
		query,
		params
	}, reqOpts);
	return stega.enabled ? $request.pipe((0, import_operators.combineLatestWith)((0, import_cjs.from)(import("./assets/stegaEncodeSourceMap-pD4l9jnx.js").then(function(n) {
		return n.stegaEncodeSourceMap$1;
	}).then(({ stegaEncodeSourceMap }) => stegaEncodeSourceMap))), (0, import_operators.map)(([res, stegaEncodeSourceMap]) => {
		const result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
		return mapResponse({
			...res,
			result
		});
	})) : $request.pipe((0, import_operators.map)(mapResponse));
}
function _getDocument(client, httpRequest, id, opts = {}) {
	return _requestObservable(client, httpRequest, {
		uri: _getDataUrl(client, "doc", (() => {
			if (!opts.releaseId) return id;
			const versionId = getVersionFromId(id);
			if (!versionId) {
				if (isDraftId(id)) throw new Error(`The document ID (\`${id}\`) is a draft, but \`options.releaseId\` is set as \`${opts.releaseId}\``);
				return getVersionId(id, opts.releaseId);
			}
			if (versionId !== opts.releaseId) throw new Error(`The document ID (\`${id}\`) is already a version of \`${versionId}\` release, but this does not match the provided \`options.releaseId\` (\`${opts.releaseId}\`)`);
			return id;
		})()),
		json: !0,
		tag: opts.tag,
		signal: opts.signal,
		query: opts.includeAllVersions !== void 0 ? { includeAllVersions: opts.includeAllVersions } : void 0
	}).pipe((0, import_operators.filter)(isResponse), (0, import_operators.map)((event) => {
		const documents = event.body.documents;
		return documents ? opts.includeAllVersions ? documents : documents[0] : opts.includeAllVersions ? [] : void 0;
	}));
}
function _getDocuments(client, httpRequest, ids, opts = {}) {
	return _requestObservable(client, httpRequest, {
		uri: _getDataUrl(client, "doc", ids.join(",")),
		json: !0,
		tag: opts.tag,
		signal: opts.signal
	}).pipe((0, import_operators.filter)(isResponse), (0, import_operators.map)((event) => {
		const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
		return ids.map((id) => indexed[id] || null);
	}));
}
var DOCUMENTS_EXISTS_BATCH_SIZE = 100;
function _documentsExists(client, httpRequest, ids, opts = {}) {
	if (ids.length === 0) return (0, import_cjs.of)(/* @__PURE__ */ new Set());
	const batches = [];
	for (let i = 0; i < ids.length; i += DOCUMENTS_EXISTS_BATCH_SIZE) batches.push(ids.slice(i, i + DOCUMENTS_EXISTS_BATCH_SIZE));
	const fetchBatch = (batchIds) => _requestObservable(client, httpRequest, {
		uri: _getDataUrl(client, "doc", batchIds.map(encodeURIComponent).join(",")),
		tag: opts.tag,
		signal: opts.signal,
		query: { excludeContent: !0 }
	}).pipe((0, import_operators.filter)(isResponse), (0, import_operators.map)((event) => {
		const missing = /* @__PURE__ */ new Set();
		for (const omitted of event.body.omitted || []) omitted.reason === "existence" && missing.add(omitted.id);
		return new Set(batchIds.filter((id) => !missing.has(id)));
	}));
	return (0, import_cjs.from)(batches).pipe((0, import_operators.concatMap)(fetchBatch), (0, import_operators.reduce)((acc, set) => {
		for (const id of set) acc.add(id);
		return acc;
	}, /* @__PURE__ */ new Set()));
}
function _getReleaseDocuments(client, httpRequest, releaseId, opts = {}) {
	return _dataRequest(client, httpRequest, "query", {
		query: "*[sanity::partOfRelease($releaseId)]",
		params: { releaseId }
	}, opts);
}
function _createIfNotExists(client, httpRequest, doc, options) {
	return requireDocumentId("createIfNotExists", doc), _create(client, httpRequest, doc, "createIfNotExists", options);
}
function _createOrReplace(client, httpRequest, doc, options) {
	return requireDocumentId("createOrReplace", doc), _create(client, httpRequest, doc, "createOrReplace", options);
}
function _createVersion(client, httpRequest, doc, publishedId, options) {
	return requireDocumentId("createVersion", doc), requireDocumentType("createVersion", doc), printCreateVersionWithBaseIdWarning(), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.create",
		publishedId,
		document: doc
	}, options);
}
function _createVersionFromBase(client, httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options) {
	if (!baseId) throw new Error("`createVersion()` requires `baseId` when no `document` is provided");
	if (!publishedId) throw new Error("`createVersion()` requires `publishedId` when `baseId` is provided");
	validateDocumentId("createVersion", baseId), validateDocumentId("createVersion", publishedId);
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.create",
		publishedId,
		baseId,
		versionId: releaseId ? getVersionId(publishedId, releaseId) : getDraftId(publishedId),
		ifBaseRevisionId
	}, options);
}
function _delete(client, httpRequest, selection, options) {
	return _dataRequest(client, httpRequest, "mutate", { mutations: [{ delete: getSelection(selection) }] }, options);
}
function _discardVersion(client, httpRequest, versionId, purge = !1, options) {
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.discard",
		versionId,
		purge
	}, options);
}
function _replaceVersion(client, httpRequest, doc, options) {
	return requireDocumentId("replaceVersion", doc), requireDocumentType("replaceVersion", doc), _action(client, httpRequest, {
		actionType: "sanity.action.document.version.replace",
		document: doc
	}, options);
}
function _unpublishVersion(client, httpRequest, versionId, publishedId, options) {
	return _action(client, httpRequest, {
		actionType: "sanity.action.document.version.unpublish",
		versionId,
		publishedId
	}, options);
}
function _mutate(client, httpRequest, mutations, options) {
	let mut;
	mutations instanceof Patch || mutations instanceof ObservablePatch ? mut = { patch: mutations.serialize() } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mut = mutations.serialize() : mut = mutations;
	return _dataRequest(client, httpRequest, "mutate", {
		mutations: Array.isArray(mut) ? mut : [mut],
		transactionId: options && options.transactionId || void 0
	}, options);
}
function _action(client, httpRequest, actions, options) {
	return _dataRequest(client, httpRequest, "actions", {
		actions: Array.isArray(actions) ? actions : [actions],
		transactionId: options && options.transactionId || void 0,
		skipCrossDatasetReferenceValidation: options && options.skipCrossDatasetReferenceValidation || void 0,
		dryRun: options && options.dryRun || void 0
	}, options);
}
function _dataRequest(client, httpRequest, endpoint, body, options = {}) {
	const isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery2 = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body), useGet = !isMutation && !isAction && strQuery.length < getQuerySizeLimit, stringQuery = useGet ? strQuery : "", returnFirst = options.returnFirst, { timeout, token, tag, headers: headers2, returnQuery, lastLiveEventId, cacheMode } = options, uri = _getDataUrl(client, endpoint, stringQuery);
	return _requestObservable(client, httpRequest, {
		method: useGet ? "GET" : "POST",
		uri,
		json: !0,
		body: useGet ? void 0 : body,
		query: isMutation && getMutationQuery(options),
		timeout,
		headers: headers2,
		token,
		tag,
		returnQuery,
		perspective: options.perspective,
		resultSourceMap: options.resultSourceMap,
		lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
		cacheMode,
		canUseCdn: isQuery2,
		signal: options.signal,
		fetch: options.fetch,
		useAbortSignal: options.useAbortSignal,
		useCdn: options.useCdn
	}).pipe((0, import_operators.filter)(isResponse), (0, import_operators.map)(getBody), (0, import_operators.map)((res) => {
		if (!isMutation) return res;
		const results = res.results || [];
		if (options.returnDocuments) return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
		const key = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
		return {
			transactionId: res.transactionId,
			results,
			[key]: ids
		};
	}));
}
function _create(client, httpRequest, doc, op, options = {}) {
	const mutation = { [op]: doc }, opts = Object.assign({
		returnFirst: !0,
		returnDocuments: !0
	}, options);
	return _dataRequest(client, httpRequest, "mutate", { mutations: [mutation] }, opts);
}
var hasDataConfig = (client) => {
	const config = client.config();
	return config.dataset !== void 0 && config.projectId !== void 0 || config.resource !== void 0;
}, isQuery = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "query")), isMutate = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "mutate")), isDoc = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "doc", "")), isListener = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "listen")), isHistory = (client, uri) => hasDataConfig(client) && uri.startsWith(_getDataUrl(client, "history", "")), isData = (client, uri) => uri.startsWith("/data/") || isQuery(client, uri) || isMutate(client, uri) || isDoc(client, uri) || isListener(client, uri) || isHistory(client, uri);
function _requestObservable(client, httpRequest, options) {
	const callSiteStack = /* @__PURE__ */ new Error(), uri = options.url || options.uri, config = client.config(), canUseCdn = typeof options.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && isData(client, uri) : options.canUseCdn;
	let useCdn = (options.useCdn ?? config.useCdn) && canUseCdn;
	const tag = options.tag && config.requestTagPrefix ? [config.requestTagPrefix, options.tag].join(".") : options.tag || config.requestTagPrefix;
	if (tag && options.tag !== null && (options.query = {
		tag: requestTag(tag),
		...options.query
	}), [
		"GET",
		"HEAD",
		"POST"
	].indexOf(options.method || "GET") >= 0 && isQuery(client, uri)) {
		const resultSourceMap = options.resultSourceMap ?? config.resultSourceMap;
		resultSourceMap !== void 0 && resultSourceMap !== !1 && (options.query = {
			resultSourceMap,
			...options.query
		});
		const perspectiveOption = options.perspective || config.perspective;
		typeof perspectiveOption < "u" && (perspectiveOption === "previewDrafts" && printPreviewDraftsDeprecationWarning(), validateApiPerspective(perspectiveOption), options.query = {
			perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
			...options.query
		}, (Array.isArray(perspectiveOption) && perspectiveOption.length > 0 || perspectiveOption === "previewDrafts" || perspectiveOption === "drafts") && useCdn && (useCdn = !1, printCdnPreviewDraftsWarning())), options.lastLiveEventId && (options.query = {
			...options.query,
			lastLiveEventId: options.lastLiveEventId
		}), options.returnQuery === !1 && (options.query = {
			returnQuery: "false",
			...options.query
		}), useCdn && options.cacheMode == "noStale" && (options.query = {
			cacheMode: "noStale",
			...options.query
		});
	}
	const reqOptions = requestOptions(config, Object.assign({}, options, {
		url: _getUrl(client, uri, useCdn),
		callSiteStack
	})), request = new import_cjs.Observable((subscriber) => httpRequest(reqOptions, config.requester).subscribe(subscriber));
	return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
}
function _request(client, httpRequest, options) {
	return _requestObservable(client, httpRequest, options).pipe((0, import_operators.filter)((event) => event.type === "response"), (0, import_operators.map)((event) => event.body));
}
function _getDataUrl(client, operation, path) {
	const config = client.config();
	if (config.resource) {
		resourceConfig(config);
		return `${resourceDataBase(config)}/${path !== void 0 ? `${operation}/${path}` : operation}`.replace(/\/($|\?)/, "$1");
	}
	const baseUri = `/${operation}/${hasDataset(config)}`;
	return `/data${path !== void 0 ? `${baseUri}/${path}` : baseUri}`.replace(/\/($|\?)/, "$1");
}
function _getUrl(client, uri, canUseCdn = !1) {
	const { url, cdnUrl } = client.config();
	return `${canUseCdn ? cdnUrl : url}/${uri.replace(/^\//, "")}`;
}
function _withAbortSignal(signal) {
	return (input) => new import_cjs.Observable((observer) => {
		const abort = () => observer.error(_createAbortError(signal));
		if (signal && signal.aborted) {
			abort();
			return;
		}
		const subscription = input.subscribe(observer);
		return signal.addEventListener("abort", abort), () => {
			signal.removeEventListener("abort", abort), subscription.unsubscribe();
		};
	});
}
var isDomExceptionSupported = !!globalThis.DOMException;
function _createAbortError(signal) {
	if (isDomExceptionSupported) return new DOMException(signal?.reason ?? "The operation was aborted.", "AbortError");
	const error = new Error(signal?.reason ?? "The operation was aborted.");
	return error.name = "AbortError", error;
}
var resourceDataBase = (config) => {
	const resource = config.resource;
	if (!resource) throw new Error("`resource` must be provided to perform resource queries");
	const { type, id } = resource;
	switch (type) {
		case "dataset": {
			const segments = id.split(".");
			if (segments.length !== 2) throw new Error("Dataset ID must be in the format \"project.dataset\"");
			return `/projects/${segments[0]}/datasets/${segments[1]}`;
		}
		case "canvas": return `/canvases/${id}`;
		case "media-library": return `/media-libraries/${id}`;
		case "dashboard": return `/dashboards/${id}`;
		default: throw new Error(`Unsupported resource type: ${type.toString()}`);
	}
};
function _generate(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/generate/${hasDataset(client.config())}`,
		body: request
	});
}
function _patch(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/patch/${hasDataset(client.config())}`,
		body: request
	});
}
function _prompt(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/prompt/${hasDataset(client.config())}`,
		body: request
	});
}
function _transform(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/transform/${hasDataset(client.config())}`,
		body: request
	});
}
function _translate(client, httpRequest, request) {
	return _request(client, httpRequest, {
		method: "POST",
		uri: `/agent/action/translate/${hasDataset(client.config())}`,
		body: request
	});
}
var ObservableAgentsActionClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Run an instruction to generate content in a target document.
	* @param request - instruction request
	*/
	generate(request) {
		return _generate(this.#client, this.#httpRequest, request);
	}
	/**
	* Transform a target document based on a source.
	* @param request - translation request
	*/
	transform(request) {
		return _transform(this.#client, this.#httpRequest, request);
	}
	/**
	* Translate a target document based on a source.
	* @param request - translation request
	*/
	translate(request) {
		return _translate(this.#client, this.#httpRequest, request);
	}
};
var AgentActionsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Run an instruction to generate content in a target document.
	* @param request - instruction request
	*/
	generate(request) {
		return (0, import_cjs.lastValueFrom)(_generate(this.#client, this.#httpRequest, request));
	}
	/**
	* Transform a target document based on a source.
	* @param request - translation request
	*/
	transform(request) {
		return (0, import_cjs.lastValueFrom)(_transform(this.#client, this.#httpRequest, request));
	}
	/**
	* Translate a target document based on a source.
	* @param request - translation request
	*/
	translate(request) {
		return (0, import_cjs.lastValueFrom)(_translate(this.#client, this.#httpRequest, request));
	}
	/**
	* Run a raw instruction and return the result either as text or json
	* @param request - prompt request
	*/
	prompt(request) {
		return (0, import_cjs.lastValueFrom)(_prompt(this.#client, this.#httpRequest, request));
	}
	/**
	* Patch a document using a schema aware API.
	* Does not use an LLM, but uses the schema to ensure paths and values matches the schema.
	* @param request - instruction request
	*/
	patch(request) {
		return (0, import_cjs.lastValueFrom)(_patch(this.#client, this.#httpRequest, request));
	}
};
var ObservableAssetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	upload(assetType, body, options) {
		return _upload(this.#client, this.#httpRequest, assetType, body, options);
	}
};
var AssetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	upload(assetType, body, options) {
		return (0, import_cjs.lastValueFrom)(_upload(this.#client, this.#httpRequest, assetType, body, options).pipe((0, import_operators.filter)((event) => event.type === "response"), (0, import_operators.map)((event) => event.body.document)));
	}
};
function _upload(client, httpRequest, assetType, body, opts = {}) {
	validateAssetType(assetType);
	let meta = opts.extract || void 0;
	meta && !meta.length && (meta = ["none"]);
	const config = client.config(), options = optionsFromFile(opts, body), { tag, label, title, description, creditLine, filename, source } = options, isMediaLibrary = config.resource?.type === "media-library", query = isMediaLibrary ? {
		title,
		filename
	} : {
		label,
		title,
		description,
		filename,
		meta,
		creditLine
	};
	return source && !isMediaLibrary && (query.sourceId = source.id, query.sourceName = source.name, query.sourceUrl = source.url), _requestObservable(client, httpRequest, {
		tag,
		method: "POST",
		timeout: options.timeout || 0,
		uri: buildAssetUploadUrl(config, assetType),
		headers: options.contentType ? { "Content-Type": options.contentType } : {},
		query,
		body
	});
}
function buildAssetUploadUrl(config, assetType) {
	const assetTypeEndpoint = assetType === "image" ? "images" : "files", resource = config.resource;
	if (resource) {
		const { type, id } = resource;
		switch (type) {
			case "dataset": throw new Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
			case "canvas": return `/canvases/${id}/assets/${assetTypeEndpoint}`;
			case "media-library": return `/media-libraries/${id}/upload`;
			case "dashboard": return `/dashboards/${id}/assets/${assetTypeEndpoint}`;
			default: throw new Error(`Unsupported resource type: ${type.toString()}`);
		}
	}
	return `assets/${assetTypeEndpoint}/${hasDataset(config)}`;
}
function optionsFromFile(opts, file) {
	return typeof File > "u" || !(file instanceof File) ? opts : Object.assign({
		filename: opts.preserveFilename === !1 ? void 0 : file.name,
		contentType: file.type
	}, opts);
}
var defaults = (obj, defaults2) => Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop) => (target[prop] = typeof obj[prop] > "u" ? defaults2[prop] : obj[prop], target), {});
var pick = (obj, props) => props.reduce((selection, prop) => (typeof obj[prop] > "u" || (selection[prop] = obj[prop]), selection), {}), eventSourcePolyfill = (0, import_cjs.defer)(() => import("./assets/node-Bwfe0Aa4.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))).pipe((0, import_operators.map)(({ default: EventSource2 }) => EventSource2), (0, import_cjs.shareReplay)(1));
function reconnectOnConnectionFailure() {
	return function(source) {
		return source.pipe((0, import_cjs.catchError)((err, caught) => err instanceof ConnectionFailedError ? (0, import_cjs.concat)((0, import_cjs.of)({ type: "reconnect" }), (0, import_cjs.timer)(1e3).pipe((0, import_cjs.mergeMap)(() => caught))) : (0, import_cjs.throwError)(() => err)));
	};
}
var MAX_URL_LENGTH = 14800, possibleOptions = [
	"includePreviousRevision",
	"includeResult",
	"includeMutations",
	"includeAllVersions",
	"visibility",
	"effectFormat",
	"enableResume",
	"tag"
], defaultOptions = { includeResult: !0 };
function _listen(query, params, opts = {}) {
	const { url, token, withCredentials, requestTagPrefix, headers: configHeaders } = this.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, options = {
		...defaults(opts, defaultOptions),
		tag
	}, qs = encodeQueryString({
		query,
		params,
		options: {
			tag,
			...pick(options, possibleOptions)
		}
	}), uri = `${url}${_getDataUrl(this, "listen", qs)}`;
	if (uri.length > MAX_URL_LENGTH) return (0, import_cjs.throwError)(() => /* @__PURE__ */ new Error("Query too large for listener"));
	const listenFor = options.events ? options.events : ["mutation"], esOptions = {};
	return withCredentials && (esOptions.withCredentials = !0), (token || configHeaders) && (esOptions.headers = {}, token && (esOptions.headers.Authorization = `Bearer ${token}`), configHeaders && Object.assign(esOptions.headers, configHeaders)), connectEventSource(() => (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : (0, import_cjs.of)(EventSource)).pipe((0, import_operators.map)((EventSource2) => new EventSource2(uri, esOptions))), listenFor).pipe(reconnectOnConnectionFailure(), (0, import_operators.filter)((event) => listenFor.includes(event.type)), (0, import_operators.map)((event) => ({
		type: event.type,
		..."data" in event ? event.data : {}
	})));
}
function shareReplayLatest(configOrPredicate, config) {
	return _shareReplayLatest(typeof configOrPredicate == "function" ? {
		predicate: configOrPredicate,
		...config
	} : configOrPredicate);
}
function _shareReplayLatest(config) {
	return (source) => {
		let latest, emitted = !1;
		const { predicate, ...shareConfig } = config;
		return (0, import_cjs.merge)(source.pipe((0, import_cjs.tap)((value) => {
			config.predicate(value) && (emitted = !0, latest = value);
		}), (0, import_cjs.finalize)(() => {
			emitted = !1, latest = void 0;
		}), (0, import_cjs.share)(shareConfig)), new import_cjs.Observable((subscriber) => {
			emitted && subscriber.next(latest), subscriber.complete();
		}));
	};
}
var requiredApiVersion = "2021-03-25";
var LiveClient = class {
	#client;
	constructor(client) {
		this.#client = client;
	}
	/**
	* Requires `apiVersion` to be `2021-03-25` or later.
	*/
	events({ includeDrafts = !1, tag: _tag, waitFor } = {}) {
		const { projectId, apiVersion: _apiVersion, token, withCredentials, requestTagPrefix, headers: configHeaders } = this.#client.config(), apiVersion = _apiVersion.replace(/^v/, "");
		if (apiVersion !== "X" && apiVersion < requiredApiVersion) throw new Error(`The live events API requires API version ${requiredApiVersion} or later. The current API version is ${apiVersion}. Please update your API version to use this feature.`);
		if (includeDrafts && !token && !withCredentials) throw new Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
		const path = _getDataUrl(this.#client, "live/events"), url = new URL(this.#client.getUrl(path, !1)), tag = _tag && requestTagPrefix ? [requestTagPrefix, _tag].join(".") : _tag;
		tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true"), waitFor && url.searchParams.set("waitFor", waitFor);
		const esOptions = {};
		includeDrafts && withCredentials && (esOptions.withCredentials = !0), (includeDrafts && token || configHeaders) && (esOptions.headers = {}, includeDrafts && token && (esOptions.headers.Authorization = `Bearer ${token}`), configHeaders && Object.assign(esOptions.headers, configHeaders));
		const key = `${url.href}::${JSON.stringify(esOptions)}`, existing = eventsCache.get(key);
		if (existing) return existing;
		const events = connectEventSource(() => (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : (0, import_cjs.of)(EventSource)).pipe((0, import_operators.map)((EventSource2) => new EventSource2(url.href, esOptions))), [
			"message",
			"restart",
			"welcome",
			"reconnect",
			"goaway"
		]), checkCors = checkCorsObservable(new URL(this.#client.getUrl("/check/cors", !1)), projectId, esOptions.withCredentials === !0), observable2 = events.pipe(reconnectOnConnectionFailure(), (0, import_cjs.mergeMap)((event) => event.type === "reconnect" ? checkCors.pipe((0, import_cjs.mergeMap)(() => (0, import_cjs.of)(event))) : (0, import_cjs.of)(event)), (0, import_cjs.catchError)((err) => err instanceof CorsOriginError ? (0, import_cjs.throwError)(() => err) : checkCors.pipe((0, import_cjs.mergeMap)(() => {
			throw err;
		}))), (0, import_operators.map)((event) => {
			if (event.type === "message") {
				const { data, ...rest } = event;
				return {
					...rest,
					tags: data.tags
				};
			}
			return event;
		})).pipe((0, import_operators.finalize)(() => eventsCache.delete(key)), shareReplayLatest({ predicate: (event) => event.type === "welcome" }));
		return eventsCache.set(key, observable2), observable2;
	}
};
function checkCorsObservable(url, projectId, requireCredentials) {
	return new import_cjs.Observable((observer) => {
		const controller = new AbortController(), { signal } = controller;
		return fetch(url, {
			method: "GET",
			mode: "cors",
			credentials: "omit",
			signal
		}).then((response) => {
			if (!(signal.aborted || !response.ok)) return response.json();
		}).then((body) => {
			if (!signal.aborted) {
				if (requireCredentials && body?.result?.withCredentials === !1) {
					observer.error(new CorsOriginError({
						projectId,
						credentials: !0
					}));
					return;
				}
				if (body?.result?.allowed === !1) {
					observer.error(new CorsOriginError({
						projectId,
						credentials: requireCredentials
					}));
					return;
				}
				observer.next(), observer.complete();
			}
		}).catch(() => {
			signal.aborted || observer.closed || (observer.next(), observer.complete());
		}), () => controller.abort();
	});
}
var eventsCache = /* @__PURE__ */ new Map();
var ObservableDatasetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Create a new dataset with the given name
	*
	* @param name - Name of the dataset to create
	* @param options - Options for the dataset, including optional embeddings configuration
	*/
	create(name2, options) {
		return _modify(this.#client, this.#httpRequest, "PUT", name2, options);
	}
	/**
	* Edit a dataset with the given name
	*
	* @param name - Name of the dataset to edit
	* @param options - New options for the dataset
	*/
	edit(name2, options) {
		return _modify(this.#client, this.#httpRequest, "PATCH", name2, options);
	}
	/**
	* Delete a dataset with the given name
	*
	* @param name - Name of the dataset to delete
	*/
	delete(name2) {
		return _modify(this.#client, this.#httpRequest, "DELETE", name2);
	}
	/**
	* Fetch a list of datasets for the configured project
	*/
	list() {
		resourceGuard("dataset", this.#client.config());
		const config = this.#client.config(), projectId = config.projectId;
		let uri = "/datasets";
		return config.useProjectHostname === !1 && (uri = `/projects/${projectId}/datasets`), _request(this.#client, this.#httpRequest, {
			uri,
			tag: null
		});
	}
	/**
	* Get embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	*/
	getEmbeddingsSettings(name2) {
		return resourceGuard("dataset", this.#client.config()), dataset(name2), _request(this.#client, this.#httpRequest, {
			uri: _embeddingsSettingsUri(this.#client, name2),
			tag: null
		});
	}
	/**
	* Edit embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	* @param settings - Embeddings settings to apply
	*/
	editEmbeddingsSettings(name2, settings) {
		return resourceGuard("dataset", this.#client.config()), dataset(name2), _request(this.#client, this.#httpRequest, {
			method: "PUT",
			uri: _embeddingsSettingsUri(this.#client, name2),
			body: settings,
			tag: null
		});
	}
};
var DatasetsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Create a new dataset with the given name
	*
	* @param name - Name of the dataset to create
	* @param options - Options for the dataset, including optional embeddings configuration
	*/
	create(name2, options) {
		return resourceGuard("dataset", this.#client.config()), (0, import_cjs.lastValueFrom)(_modify(this.#client, this.#httpRequest, "PUT", name2, options));
	}
	/**
	* Edit a dataset with the given name
	*
	* @param name - Name of the dataset to edit
	* @param options - New options for the dataset
	*/
	edit(name2, options) {
		return resourceGuard("dataset", this.#client.config()), (0, import_cjs.lastValueFrom)(_modify(this.#client, this.#httpRequest, "PATCH", name2, options));
	}
	/**
	* Delete a dataset with the given name
	*
	* @param name - Name of the dataset to delete
	*/
	delete(name2) {
		return resourceGuard("dataset", this.#client.config()), (0, import_cjs.lastValueFrom)(_modify(this.#client, this.#httpRequest, "DELETE", name2));
	}
	/**
	* Fetch a list of datasets for the configured project
	*/
	list() {
		resourceGuard("dataset", this.#client.config());
		const config = this.#client.config(), projectId = config.projectId;
		let uri = "/datasets";
		return config.useProjectHostname === !1 && (uri = `/projects/${projectId}/datasets`), (0, import_cjs.lastValueFrom)(_request(this.#client, this.#httpRequest, {
			uri,
			tag: null
		}));
	}
	/**
	* Get embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	*/
	getEmbeddingsSettings(name2) {
		return resourceGuard("dataset", this.#client.config()), dataset(name2), (0, import_cjs.lastValueFrom)(_request(this.#client, this.#httpRequest, {
			uri: _embeddingsSettingsUri(this.#client, name2),
			tag: null
		}));
	}
	/**
	* Edit embeddings settings for a dataset
	*
	* @param name - Name of the dataset
	* @param settings - Embeddings settings to apply
	*/
	editEmbeddingsSettings(name2, settings) {
		return resourceGuard("dataset", this.#client.config()), dataset(name2), (0, import_cjs.lastValueFrom)(_request(this.#client, this.#httpRequest, {
			method: "PUT",
			uri: _embeddingsSettingsUri(this.#client, name2),
			body: settings,
			tag: null
		}));
	}
};
function _embeddingsSettingsUri(client, name2) {
	const config = client.config();
	return config.useProjectHostname === !1 ? `/projects/${config.projectId}/datasets/${name2}/settings/embeddings` : `/datasets/${name2}/settings/embeddings`;
}
function _modify(client, httpRequest, method, name2, options) {
	return resourceGuard("dataset", client.config()), dataset(name2), _request(client, httpRequest, {
		method,
		uri: `/datasets/${name2}`,
		body: options,
		tag: null
	});
}
var ObservableMediaLibraryVideoClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Get video playback information for a media library asset
	*
	* @param assetIdentifier - Asset instance identifier (GDR, video-prefixed ID, or container ID)
	* @param options - Options for transformations and expiration
	*/
	getPlaybackInfo(assetIdentifier, options = {}) {
		const config = this.#client.config(), configMediaLibraryId = (config.resource || config["~experimental_resource"])?.id, { instanceId, libraryId } = parseAssetInstanceId(assetIdentifier), effectiveLibraryId = libraryId || configMediaLibraryId;
		if (!effectiveLibraryId) throw new Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
		const uri = buildVideoPlaybackInfoUrl(instanceId, effectiveLibraryId), queryParams = buildQueryParams(options);
		return _request(this.#client, this.#httpRequest, {
			method: "GET",
			uri,
			query: queryParams
		});
	}
};
var MediaLibraryVideoClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Get video playback information for a media library asset
	*
	* @param assetIdentifier - Asset instance identifier (GDR, video-prefixed ID, or container ID)
	* @param options - Options for transformations and expiration
	*/
	getPlaybackInfo(assetIdentifier, options = {}) {
		return (0, import_cjs.lastValueFrom)(new ObservableMediaLibraryVideoClient(this.#client.observable, this.#httpRequest).getPlaybackInfo(assetIdentifier, options));
	}
};
var ML_GDR_PATTERN = /^media-library:(ml[^:]+):([^:]+)$/;
function isSanityReference(assetIdentifier) {
	return typeof assetIdentifier == "object" && "_ref" in assetIdentifier;
}
function parseAssetInstanceId(assetIdentifier) {
	const ref = isSanityReference(assetIdentifier) ? assetIdentifier._ref : assetIdentifier, match = ML_GDR_PATTERN.exec(ref);
	if (match) {
		const [, libraryId, instanceId] = match;
		return {
			libraryId,
			instanceId
		};
	}
	if (typeof assetIdentifier == "string" && assetIdentifier.startsWith("video-")) return { instanceId: assetIdentifier };
	throw new Error(`Invalid video asset instance identifier "${ref}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`);
}
function buildVideoPlaybackInfoUrl(instanceId, libraryId) {
	return `/media-libraries/${libraryId}/video/${instanceId}/playback-info`;
}
function buildQueryParams(options) {
	const params = {};
	if (options.transformations) {
		const { thumbnail, animated, storyboard } = options.transformations;
		thumbnail && (thumbnail.width && (params.thumbnailWidth = thumbnail.width), thumbnail.height && (params.thumbnailHeight = thumbnail.height), thumbnail.time !== void 0 && (params.thumbnailTime = thumbnail.time), thumbnail.fit && (params.thumbnailFit = thumbnail.fit), thumbnail.format && (params.thumbnailFormat = thumbnail.format)), animated && (animated.width && (params.animatedWidth = animated.width), animated.height && (params.animatedHeight = animated.height), animated.start !== void 0 && (params.animatedStart = animated.start), animated.end !== void 0 && (params.animatedEnd = animated.end), animated.fps && (params.animatedFps = animated.fps), animated.format && (params.animatedFormat = animated.format)), storyboard && storyboard.format && (params.storyboardFormat = storyboard.format);
	}
	return options.expiration && (params.expiration = options.expiration), params;
}
var ObservableProjectsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Fetch a list of projects the authenticated user has access to.
	*
	* @param options - Options for the list request
	*   - `includeMembers` - Whether to include members in the response (default: true)
	*   - `includeFeatures` - Whether to include features in the response (default: true)
	*   - `organizationId` - ID of the organization to fetch projects for
	*   - `onlyExplicitMembership` - Whether to include only projects with explicit membership (default: false)
	*/
	list(options) {
		const query = {};
		return options?.includeMembers === !1 && (query.includeMembers = "false"), options?.includeFeatures === !1 && (query.includeFeatures = "false"), options?.organizationId && (query.organizationId = options.organizationId), options?.onlyExplicitMembership && (query.onlyExplicitMembership = "true"), _request(this.#client, this.#httpRequest, {
			uri: "/projects",
			query
		});
	}
	/**
	* Fetch a project by project ID
	*
	* @param projectId - ID of the project to fetch
	*/
	getById(projectId) {
		return _request(this.#client, this.#httpRequest, { uri: `/projects/${projectId}` });
	}
};
var ProjectsClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Fetch a list of projects the authenticated user has access to.
	*
	* @param options - Options for the list request
	*   - `includeMembers` - Whether to include members in the response (default: true)
	*   - `includeFeatures` - Whether to include features in the response (default: true)
	*   - `organizationId` - ID of the organization to fetch projects for
	*   - `onlyExplicitMembership` - Whether to include only projects with explicit membership (default: false)
	*/
	list(options) {
		const query = {};
		return options?.includeMembers === !1 && (query.includeMembers = "false"), options?.includeFeatures === !1 && (query.includeFeatures = "false"), options?.organizationId && (query.organizationId = options.organizationId), options?.onlyExplicitMembership && (query.onlyExplicitMembership = "true"), (0, import_cjs.lastValueFrom)(_request(this.#client, this.#httpRequest, {
			uri: "/projects",
			query
		}));
	}
	/**
	* Fetch a project by project ID
	*
	* @param projectId - ID of the project to fetch
	*/
	getById(projectId) {
		return (0, import_cjs.lastValueFrom)(_request(this.#client, this.#httpRequest, { uri: `/projects/${projectId}` }));
	}
};
var generateReleaseId = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8), getDocumentVersionId = (publishedId, releaseId) => releaseId ? getVersionId(publishedId, releaseId) : getDraftId(publishedId);
function deriveDocumentVersionId(op, { releaseId, publishedId, document }) {
	if (publishedId && document._id) {
		const versionId = getDocumentVersionId(publishedId, releaseId);
		return validateVersionIdMatch(versionId, document), versionId;
	}
	if (document._id) {
		const isDraft = isDraftId(document._id), isVersion = isVersionId(document._id);
		if (!isDraft && !isVersion) throw new Error(`\`${op}()\` requires a document with an \`_id\` that is a version or draft ID`);
		if (releaseId) {
			if (isDraft) throw new Error(`\`${op}()\` was called with a document ID (\`${document._id}\`) that is a draft ID, but a release ID (\`${releaseId}\`) was also provided.`);
			const builtVersionId = getVersionFromId(document._id);
			if (builtVersionId !== releaseId) throw new Error(`\`${op}()\` was called with a document ID (\`${document._id}\`) that is a version ID, but the release ID (\`${releaseId}\`) does not match the document's version ID (\`${builtVersionId}\`).`);
		}
		return document._id;
	}
	if (publishedId) return getDocumentVersionId(publishedId, releaseId);
	throw new Error(`\`${op}()\` requires either a publishedId or a document with an \`_id\``);
}
var getArgs = (releaseOrOptions, maybeOptions) => {
	if (typeof releaseOrOptions == "object" && releaseOrOptions !== null && ("releaseId" in releaseOrOptions || "metadata" in releaseOrOptions)) {
		const { releaseId = generateReleaseId(), metadata = {} } = releaseOrOptions;
		return [
			releaseId,
			metadata,
			maybeOptions
		];
	}
	return [
		generateReleaseId(),
		{},
		releaseOrOptions
	];
}, createRelease = (releaseOrOptions, maybeOptions) => {
	const [releaseId, metadata, options] = getArgs(releaseOrOptions, maybeOptions);
	return {
		action: {
			actionType: "sanity.action.release.create",
			releaseId,
			metadata: {
				...metadata,
				releaseType: metadata.releaseType || "undecided"
			}
		},
		options
	};
};
var ObservableReleasesClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* @public
	*
	* Retrieve a release by id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to retrieve.
	* @param options - Additional query options including abort signal and query tag.
	* @returns An observable that resolves to the release document {@link ReleaseDocument}.
	*
	* @example Retrieving a release by id
	* ```ts
	* client.observable.releases.get({releaseId: 'my-release'}).pipe(
	*   tap((release) => console.log(release)),
	*   // {
	*   //   _id: '_.releases.my-release',
	*   //   name: 'my-release'
	*   //   _type: 'system.release',
	*   //   metadata: {releaseType: 'asap'},
	*   //   _createdAt: '2021-01-01T00:00:00.000Z',
	*   //   ...
	*   // }
	* ).subscribe()
	* ```
	*/
	get({ releaseId }, options) {
		return _getDocument(this.#client, this.#httpRequest, `_.releases.${releaseId}`, options);
	}
	create(releaseOrOptions, maybeOptions) {
		const { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
		return _action(this.#client, this.#httpRequest, action, options).pipe((0, import_cjs.map)((actionResult) => ({
			...actionResult,
			releaseId,
			metadata
		})));
	}
	/**
	* @public
	*
	* Edits an existing release, updating the metadata.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to edit.
	*   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	edit({ releaseId, patch }, options) {
		const editAction = {
			actionType: "sanity.action.release.edit",
			releaseId,
			patch
		};
		return _action(this.#client, this.#httpRequest, editAction, options);
	}
	/**
	* @public
	*
	* Publishes all documents in a release at once. For larger releases the effect of the publish
	* will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
	* documents and creation of the corresponding published documents with the new content may
	* take some time.
	*
	* During this period both the source and target documents are locked and cannot be
	* modified through any other means.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to publish.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	publish({ releaseId }, options) {
		const publishAction = {
			actionType: "sanity.action.release.publish",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, publishAction, options);
	}
	/**
	* @public
	*
	* An archive action removes an active release. The documents that comprise the release
	* are deleted and therefore no longer queryable.
	*
	* While the documents remain in retention the last version can still be accessed using document history endpoint.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to archive.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	archive({ releaseId }, options) {
		const archiveAction = {
			actionType: "sanity.action.release.archive",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, archiveAction, options);
	}
	/**
	* @public
	*
	* An unarchive action restores an archived release and all documents
	* with the content they had just prior to archiving.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unarchive.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	unarchive({ releaseId }, options) {
		const unarchiveAction = {
			actionType: "sanity.action.release.unarchive",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, unarchiveAction, options);
	}
	/**
	* @public
	*
	* A schedule action queues a release for publishing at the given future time.
	* The release is locked such that no documents in the release can be modified and
	* no documents that it references can be deleted as this would make the publish fail.
	* At the given time, the same logic as for the publish action is triggered.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to schedule.
	*   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	schedule({ releaseId, publishAt }, options) {
		const scheduleAction = {
			actionType: "sanity.action.release.schedule",
			releaseId,
			publishAt
		};
		return _action(this.#client, this.#httpRequest, scheduleAction, options);
	}
	/**
	* @public
	*
	* An unschedule action stops a release from being published.
	* The documents in the release are considered unlocked and can be edited again.
	* This may fail if another release is scheduled to be published after this one and
	* has a reference to a document created by this one.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unschedule.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	unschedule({ releaseId }, options) {
		const unscheduleAction = {
			actionType: "sanity.action.release.unschedule",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, unscheduleAction, options);
	}
	/**
	* @public
	*
	* A delete action removes a published or archived release.
	* The backing system document will be removed from the dataset.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to delete.
	* @param options - Additional action options.
	* @returns An observable that resolves to the `transactionId`.
	*/
	delete({ releaseId }, options) {
		const deleteAction = {
			actionType: "sanity.action.release.delete",
			releaseId
		};
		return _action(this.#client, this.#httpRequest, deleteAction, options);
	}
	/**
	* @public
	*
	* Fetch the documents in a release by release id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to fetch documents for.
	* @param options - Additional mutation options {@link BaseMutationOptions}.
	* @returns An observable that resolves to the documents in the release.
	*/
	fetchDocuments({ releaseId }, options) {
		return _getReleaseDocuments(this.#client, this.#httpRequest, releaseId, options);
	}
};
var ReleasesClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* @public
	*
	* Retrieve a release by id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to retrieve.
	* @param options - Additional query options including abort signal and query tag.
	* @returns A promise that resolves to the release document {@link ReleaseDocument}.
	*
	* @example Retrieving a release by id
	* ```ts
	* const release = await client.releases.get({releaseId: 'my-release'})
	* console.log(release)
	* // {
	* //   _id: '_.releases.my-release',
	* //   name: 'my-release'
	* //   _type: 'system.release',
	* //   metadata: {releaseType: 'asap'},
	* //   _createdAt: '2021-01-01T00:00:00.000Z',
	* //   ...
	* // }
	* ```
	*/
	get({ releaseId }, options) {
		return (0, import_cjs.lastValueFrom)(_getDocument(this.#client, this.#httpRequest, `_.releases.${releaseId}`, options));
	}
	async create(releaseOrOptions, maybeOptions) {
		const { action, options } = createRelease(releaseOrOptions, maybeOptions), { releaseId, metadata } = action;
		return {
			...await (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, action, options)),
			releaseId,
			metadata
		};
	}
	/**
	* @public
	*
	* Edits an existing release, updating the metadata.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to edit.
	*   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	edit({ releaseId, patch }, options) {
		const editAction = {
			actionType: "sanity.action.release.edit",
			releaseId,
			patch
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, editAction, options));
	}
	/**
	* @public
	*
	* Publishes all documents in a release at once. For larger releases the effect of the publish
	* will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
	* documents and creation of the corresponding published documents with the new content may
	* take some time.
	*
	* During this period both the source and target documents are locked and cannot be
	* modified through any other means.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to publish.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	publish({ releaseId }, options) {
		const publishAction = {
			actionType: "sanity.action.release.publish",
			releaseId
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, publishAction, options));
	}
	/**
	* @public
	*
	* An archive action removes an active release. The documents that comprise the release
	* are deleted and therefore no longer queryable.
	*
	* While the documents remain in retention the last version can still be accessed using document history endpoint.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to archive.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	archive({ releaseId }, options) {
		const archiveAction = {
			actionType: "sanity.action.release.archive",
			releaseId
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, archiveAction, options));
	}
	/**
	* @public
	*
	* An unarchive action restores an archived release and all documents
	* with the content they had just prior to archiving.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unarchive.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	unarchive({ releaseId }, options) {
		const unarchiveAction = {
			actionType: "sanity.action.release.unarchive",
			releaseId
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, unarchiveAction, options));
	}
	/**
	* @public
	*
	* A schedule action queues a release for publishing at the given future time.
	* The release is locked such that no documents in the release can be modified and
	* no documents that it references can be deleted as this would make the publish fail.
	* At the given time, the same logic as for the publish action is triggered.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to schedule.
	*   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	schedule({ releaseId, publishAt }, options) {
		const scheduleAction = {
			actionType: "sanity.action.release.schedule",
			releaseId,
			publishAt
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, scheduleAction, options));
	}
	/**
	* @public
	*
	* An unschedule action stops a release from being published.
	* The documents in the release are considered unlocked and can be edited again.
	* This may fail if another release is scheduled to be published after this one and
	* has a reference to a document created by this one.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to unschedule.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	unschedule({ releaseId }, options) {
		const unscheduleAction = {
			actionType: "sanity.action.release.unschedule",
			releaseId
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, unscheduleAction, options));
	}
	/**
	* @public
	*
	* A delete action removes a published or archived release.
	* The backing system document will be removed from the dataset.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to delete.
	* @param options - Additional action options.
	* @returns A promise that resolves to the `transactionId`.
	*/
	delete({ releaseId }, options) {
		const deleteAction = {
			actionType: "sanity.action.release.delete",
			releaseId
		};
		return (0, import_cjs.lastValueFrom)(_action(this.#client, this.#httpRequest, deleteAction, options));
	}
	/**
	* @public
	*
	* Fetch the documents in a release by release id.
	*
	* @category Releases
	*
	* @param params - Release action parameters:
	*   - `releaseId` - The id of the release to fetch documents for.
	* @param options - Additional mutation options {@link BaseMutationOptions}.
	* @returns A promise that resolves to the documents in the release.
	*/
	fetchDocuments({ releaseId }, options) {
		return (0, import_cjs.lastValueFrom)(_getReleaseDocuments(this.#client, this.#httpRequest, releaseId, options));
	}
};
var ObservableUsersClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Fetch a user by user ID
	*
	* @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	*/
	getById(id) {
		return _request(this.#client, this.#httpRequest, { uri: `/users/${id}` });
	}
};
var UsersClient = class {
	#client;
	#httpRequest;
	constructor(client, httpRequest) {
		this.#client = client, this.#httpRequest = httpRequest;
	}
	/**
	* Fetch a user by user ID
	*
	* @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
	*/
	getById(id) {
		return (0, import_cjs.lastValueFrom)(_request(this.#client, this.#httpRequest, { uri: `/users/${id}` }));
	}
};
var ObservableSanityClient = class ObservableSanityClient {
	assets;
	datasets;
	live;
	mediaLibrary;
	projects;
	users;
	agent;
	releases;
	/**
	* Private properties
	*/
	#clientConfig;
	#originalHttpRequest;
	#httpRequest;
	/**
	* Instance properties
	*/
	listen = _listen;
	constructor(httpRequest, config = defaultConfig) {
		this.config(config), this.#originalHttpRequest = httpRequest;
		const requestHandler = config._requestHandler;
		this.#httpRequest = requestHandler ? /* @__PURE__ */ (() => {
			let bareClient;
			return (options, requester2) => {
				const opts = options;
				return bareClient || (bareClient = new SanityClient(httpRequest, {
					...config,
					_requestHandler: void 0
				})), requestHandler(opts, (o) => httpRequest(o, requester2), bareClient);
			};
		})() : httpRequest, this.assets = new ObservableAssetsClient(this, this.#httpRequest), this.datasets = new ObservableDatasetsClient(this, this.#httpRequest), this.live = new LiveClient(this), this.mediaLibrary = { video: new ObservableMediaLibraryVideoClient(this, this.#httpRequest) }, this.projects = new ObservableProjectsClient(this, this.#httpRequest), this.users = new ObservableUsersClient(this, this.#httpRequest), this.agent = { action: new ObservableAgentsActionClient(this, this.#httpRequest) }, this.releases = new ObservableReleasesClient(this, this.#httpRequest);
	}
	/**
	* Clone the client - returns a new instance
	*/
	clone() {
		return new ObservableSanityClient(this.#originalHttpRequest, this.config());
	}
	config(newConfig) {
		if (newConfig === void 0) return { ...this.#clientConfig };
		if (this.#clientConfig && this.#clientConfig.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
		return this.#clientConfig = initConfig(newConfig, this.#clientConfig || {}), this;
	}
	/**
	* Clone the client with a new (partial) configuration.
	*
	* @param newConfig - New client configuration properties, shallowly merged with existing configuration
	*/
	withConfig(newConfig) {
		const thisConfig = this.config();
		return new ObservableSanityClient(this.#originalHttpRequest, {
			...thisConfig,
			...newConfig,
			stega: {
				...thisConfig.stega || {},
				...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
			}
		});
	}
	fetch(query, params, options) {
		return _fetch(this, this.#httpRequest, this.#clientConfig.stega, query, params, options);
	}
	getDocument(id, options) {
		if (options?.includeAllVersions === !0) return _getDocument(this, this.#httpRequest, id, {
			...options,
			includeAllVersions: !0
		});
		const opts = {
			signal: options?.signal,
			tag: options?.tag,
			releaseId: options?.releaseId,
			...options && "includeAllVersions" in options ? { includeAllVersions: !1 } : {}
		};
		return _getDocument(this, this.#httpRequest, id, opts);
	}
	/**
	* Fetch multiple documents in one request.
	* Should be used sparingly - performing a query is usually a better option.
	* The order/position of documents is preserved based on the original array of IDs.
	* If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	*
	* @param ids - Document IDs to fetch
	* @param options - Request options
	*/
	getDocuments(ids, options) {
		return _getDocuments(this, this.#httpRequest, ids, options);
	}
	/**
	* Convenient and bandwidth efficient method of checking wether a set of document IDs exists.
	* Returns a set of the IDs that exist.
	*
	* @param ids - Document IDs to check
	* @param options - Request options
	*/
	documentsExists(ids, options) {
		return _documentsExists(this, this.#httpRequest, ids, options);
	}
	create(document, options) {
		return _create(this, this.#httpRequest, document, "create", options);
	}
	createIfNotExists(document, options) {
		return _createIfNotExists(this, this.#httpRequest, document, options);
	}
	createOrReplace(document, options) {
		return _createOrReplace(this, this.#httpRequest, document, options);
	}
	createVersion({ document, publishedId, releaseId, baseId, ifBaseRevisionId }, options) {
		if (!document) return _createVersionFromBase(this, this.#httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options);
		const documentVersionId = deriveDocumentVersionId("createVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		}, versionPublishedId = publishedId || getPublishedId(document._id);
		return _createVersion(this, this.#httpRequest, documentVersion, versionPublishedId, options);
	}
	delete(selection, options) {
		return _delete(this, this.#httpRequest, selection, options);
	}
	/**
	* @public
	*
	* Deletes the draft or release version of a document.
	*
	* @remarks
	* * Discarding a version with no `releaseId` will discard the draft version of the published document.
	* * If the draft or release version does not exist, any error will throw.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to discard the document from.
	*   - `publishedId` - The published ID of the document to discard.
	* @param purge - if `true` the document history is also discarded.
	* @param options - Additional action options.
	* @returns an observable that resolves to the `transactionId`.
	*
	* @example Discarding a release version of a document
	* ```ts
	* client.observable.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be discarded.
	* ```
	*
	* @example Discarding a draft version of a document
	* ```ts
	* client.observable.discardVersion({publishedId: 'myDocument'})
	* // The document with the ID `drafts.myDocument` will be discarded.
	* ```
	*/
	discardVersion({ releaseId, publishedId }, purge, options) {
		const documentVersionId = getDocumentVersionId(publishedId, releaseId);
		return _discardVersion(this, this.#httpRequest, documentVersionId, purge, options);
	}
	replaceVersion({ document, publishedId, releaseId }, options) {
		const documentVersionId = deriveDocumentVersionId("replaceVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		};
		return _replaceVersion(this, this.#httpRequest, documentVersion, options);
	}
	/**
	* @public
	*
	* Used to indicate when a document within a release should be unpublished when
	* the release is run.
	*
	* @remarks
	* * If the published document does not exist, an error will be thrown.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to unpublish the document from.
	*   - `publishedId` - The published ID of the document to unpublish.
	* @param options - Additional action options.
	* @returns an observable that resolves to the `transactionId`.
	*
	* @example Unpublishing a release version of a published document
	* ```ts
	* client.observable.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
	* ```
	*/
	unpublishVersion({ releaseId, publishedId }, options) {
		const versionId = getVersionId(publishedId, releaseId);
		return _unpublishVersion(this, this.#httpRequest, versionId, publishedId, options);
	}
	mutate(operations, options) {
		return _mutate(this, this.#httpRequest, operations, options);
	}
	/**
	* Create a new buildable patch of operations to perform
	*
	* @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	* @param operations - Optional object of patch operations to initialize the patch instance with
	* @returns Patch instance - call `.commit()` to perform the operations defined
	*/
	patch(selection, operations) {
		return new ObservablePatch(selection, operations, this);
	}
	/**
	* Create a new transaction of mutations
	*
	* @param operations - Optional array of mutation operations to initialize the transaction instance with
	*/
	transaction(operations) {
		return new ObservableTransaction(operations, this);
	}
	/**
	* Perform action operations against the configured dataset
	*
	* @param operations - Action operation(s) to execute
	* @param options - Action options
	*/
	action(operations, options) {
		return _action(this, this.#httpRequest, operations, options);
	}
	/**
	* Perform an HTTP request against the Sanity API
	*
	* @param options - Request options
	*/
	request(options) {
		return _request(this, this.#httpRequest, options);
	}
	/**
	* Get a Sanity API URL for the URI provided
	*
	* @param uri - URI/path to build URL for
	* @param canUseCdn - Whether or not to allow using the API CDN for this route
	*/
	getUrl(uri, canUseCdn) {
		return _getUrl(this, uri, canUseCdn);
	}
	/**
	* Get a Sanity API URL for the data operation and path provided
	*
	* @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	* @param path - Path to append after the operation
	*/
	getDataUrl(operation, path) {
		return _getDataUrl(this, operation, path);
	}
};
var SanityClient = class SanityClient {
	assets;
	datasets;
	live;
	mediaLibrary;
	projects;
	users;
	agent;
	releases;
	/**
	* Observable version of the Sanity client, with the same configuration as the promise-based one
	*/
	observable;
	/**
	* Private properties
	*/
	#clientConfig;
	#originalHttpRequest;
	#httpRequest;
	/**
	* Instance properties
	*/
	listen = _listen;
	constructor(httpRequest, config = defaultConfig) {
		this.config(config), this.#originalHttpRequest = httpRequest;
		const requestHandler = config._requestHandler;
		this.#httpRequest = requestHandler ? /* @__PURE__ */ (() => {
			let bareClient;
			return (options, requester2) => {
				const opts = options;
				return bareClient || (bareClient = new SanityClient(httpRequest, {
					...config,
					_requestHandler: void 0
				})), requestHandler(opts, (o) => httpRequest(o, requester2), bareClient);
			};
		})() : httpRequest, this.assets = new AssetsClient(this, this.#httpRequest), this.datasets = new DatasetsClient(this, this.#httpRequest), this.live = new LiveClient(this), this.mediaLibrary = { video: new MediaLibraryVideoClient(this, this.#httpRequest) }, this.projects = new ProjectsClient(this, this.#httpRequest), this.users = new UsersClient(this, this.#httpRequest), this.agent = { action: new AgentActionsClient(this, this.#httpRequest) }, this.releases = new ReleasesClient(this, this.#httpRequest), this.observable = new ObservableSanityClient(httpRequest, config);
	}
	/**
	* Clone the client - returns a new instance
	*/
	clone() {
		return new SanityClient(this.#originalHttpRequest, this.config());
	}
	config(newConfig) {
		if (newConfig === void 0) return { ...this.#clientConfig };
		if (this.#clientConfig && this.#clientConfig.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
		return this.observable && this.observable.config(newConfig), this.#clientConfig = initConfig(newConfig, this.#clientConfig || {}), this;
	}
	/**
	* Clone the client with a new (partial) configuration.
	*
	* @param newConfig - New client configuration properties, shallowly merged with existing configuration
	*/
	withConfig(newConfig) {
		const thisConfig = this.config();
		return new SanityClient(this.#originalHttpRequest, {
			...thisConfig,
			...newConfig,
			stega: {
				...thisConfig.stega || {},
				...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
			}
		});
	}
	fetch(query, params, options) {
		return (0, import_cjs.lastValueFrom)(_fetch(this, this.#httpRequest, this.#clientConfig.stega, query, params, options));
	}
	getDocument(id, options) {
		if (options?.includeAllVersions === !0) return (0, import_cjs.lastValueFrom)(_getDocument(this, this.#httpRequest, id, {
			...options,
			includeAllVersions: !0
		}));
		const opts = {
			signal: options?.signal,
			tag: options?.tag,
			releaseId: options?.releaseId,
			...options && "includeAllVersions" in options ? { includeAllVersions: !1 } : {}
		};
		return (0, import_cjs.lastValueFrom)(_getDocument(this, this.#httpRequest, id, opts));
	}
	/**
	* Fetch multiple documents in one request.
	* Should be used sparingly - performing a query is usually a better option.
	* The order/position of documents is preserved based on the original array of IDs.
	* If any of the documents are missing, they will be replaced by a `null` entry in the returned array
	*
	* @param ids - Document IDs to fetch
	* @param options - Request options
	*/
	getDocuments(ids, options) {
		return (0, import_cjs.lastValueFrom)(_getDocuments(this, this.#httpRequest, ids, options));
	}
	/**
	* Convenient and bandwidth efficient method of checking wether a set of document IDs exists.
	* Returns a set of the IDs that exist.
	*
	* @param ids - Document IDs to check
	* @param options - Request options
	*/
	documentsExists(ids, options) {
		return (0, import_cjs.lastValueFrom)(_documentsExists(this, this.#httpRequest, ids, options));
	}
	create(document, options) {
		return (0, import_cjs.lastValueFrom)(_create(this, this.#httpRequest, document, "create", options));
	}
	createIfNotExists(document, options) {
		return (0, import_cjs.lastValueFrom)(_createIfNotExists(this, this.#httpRequest, document, options));
	}
	createOrReplace(document, options) {
		return (0, import_cjs.lastValueFrom)(_createOrReplace(this, this.#httpRequest, document, options));
	}
	createVersion({ document, publishedId, releaseId, baseId, ifBaseRevisionId }, options) {
		if (!document) return (0, import_cjs.firstValueFrom)(_createVersionFromBase(this, this.#httpRequest, publishedId, baseId, releaseId, ifBaseRevisionId, options));
		const documentVersionId = deriveDocumentVersionId("createVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		}, versionPublishedId = publishedId || getPublishedId(document._id);
		return (0, import_cjs.firstValueFrom)(_createVersion(this, this.#httpRequest, documentVersion, versionPublishedId, options));
	}
	delete(selection, options) {
		return (0, import_cjs.lastValueFrom)(_delete(this, this.#httpRequest, selection, options));
	}
	/**
	* @public
	*
	* Deletes the draft or release version of a document.
	*
	* @remarks
	* * Discarding a version with no `releaseId` will discard the draft version of the published document.
	* * If the draft or release version does not exist, any error will throw.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to discard the document from.
	*   - `publishedId` - The published ID of the document to discard.
	* @param purge - if `true` the document history is also discarded.
	* @param options - Additional action options.
	* @returns a promise that resolves to the `transactionId`.
	*
	* @example Discarding a release version of a document
	* ```ts
	* client.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be discarded.
	* ```
	*
	* @example Discarding a draft version of a document
	* ```ts
	* client.discardVersion({publishedId: 'myDocument'})
	* // The document with the ID `drafts.myDocument` will be discarded.
	* ```
	*/
	discardVersion({ releaseId, publishedId }, purge, options) {
		const documentVersionId = getDocumentVersionId(publishedId, releaseId);
		return (0, import_cjs.lastValueFrom)(_discardVersion(this, this.#httpRequest, documentVersionId, purge, options));
	}
	replaceVersion({ document, publishedId, releaseId }, options) {
		const documentVersionId = deriveDocumentVersionId("replaceVersion", {
			document,
			publishedId,
			releaseId
		}), documentVersion = {
			...document,
			_id: documentVersionId
		};
		return (0, import_cjs.firstValueFrom)(_replaceVersion(this, this.#httpRequest, documentVersion, options));
	}
	/**
	* @public
	*
	* Used to indicate when a document within a release should be unpublished when
	* the release is run.
	*
	* @remarks
	* * If the published document does not exist, an error will be thrown.
	*
	* @param params - Version action parameters:
	*   - `releaseId` - The ID of the release to unpublish the document from.
	*   - `publishedId` - The published ID of the document to unpublish.
	* @param options - Additional action options.
	* @returns a promise that resolves to the `transactionId`.
	*
	* @example Unpublishing a release version of a published document
	* ```ts
	* await client.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
	* // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
	* ```
	*/
	unpublishVersion({ releaseId, publishedId }, options) {
		const versionId = getVersionId(publishedId, releaseId);
		return (0, import_cjs.lastValueFrom)(_unpublishVersion(this, this.#httpRequest, versionId, publishedId, options));
	}
	mutate(operations, options) {
		return (0, import_cjs.lastValueFrom)(_mutate(this, this.#httpRequest, operations, options));
	}
	/**
	* Create a new buildable patch of operations to perform
	*
	* @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
	* @param operations - Optional object of patch operations to initialize the patch instance with
	* @returns Patch instance - call `.commit()` to perform the operations defined
	*/
	patch(documentId, operations) {
		return new Patch(documentId, operations, this);
	}
	/**
	* Create a new transaction of mutations
	*
	* @param operations - Optional array of mutation operations to initialize the transaction instance with
	*/
	transaction(operations) {
		return new Transaction(operations, this);
	}
	/**
	* Perform action operations against the configured dataset
	* Returns a promise that resolves to the transaction result
	*
	* @param operations - Action operation(s) to execute
	* @param options - Action options
	*/
	action(operations, options) {
		return (0, import_cjs.lastValueFrom)(_action(this, this.#httpRequest, operations, options));
	}
	/**
	* Perform a request against the Sanity API
	* NOTE: Only use this for Sanity API endpoints, not for your own APIs!
	*
	* @param options - Request options
	* @returns Promise resolving to the response body
	*/
	request(options) {
		return (0, import_cjs.lastValueFrom)(_request(this, this.#httpRequest, options));
	}
	/**
	* Perform an HTTP request a `/data` sub-endpoint
	* NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
	*
	* @deprecated - Use `request()` or your own HTTP library instead
	* @param endpoint - Endpoint to hit (mutate, query etc)
	* @param body - Request body
	* @param options - Request options
	* @internal
	*/
	dataRequest(endpoint, body, options) {
		return (0, import_cjs.lastValueFrom)(_dataRequest(this, this.#httpRequest, endpoint, body, options));
	}
	/**
	* Get a Sanity API URL for the URI provided
	*
	* @param uri - URI/path to build URL for
	* @param canUseCdn - Whether or not to allow using the API CDN for this route
	*/
	getUrl(uri, canUseCdn) {
		return _getUrl(this, uri, canUseCdn);
	}
	/**
	* Get a Sanity API URL for the data operation and path provided
	*
	* @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
	* @param path - Path to append after the operation
	*/
	getDataUrl(operation, path) {
		return _getDataUrl(this, operation, path);
	}
};
function defineCreateClientExports(envMiddleware, ClassConstructor) {
	return {
		requester: defineHttpRequest(envMiddleware),
		createClient: (config) => {
			const clientRequester = defineHttpRequest(envMiddleware, { ignoreWarnings: config.ignoreWarnings });
			return new ClassConstructor((options, requester2) => (requester2 || clientRequester)({
				maxRedirects: 0,
				maxRetries: config.maxRetries,
				retryDelay: config.retryDelay,
				lineage: config.lineage,
				...options
			}), config);
		}
	};
}
var exp = defineCreateClientExports([
	y$1({
		verbose: !0,
		namespace: "sanity:client"
	}),
	g({ "User-Agent": `@sanity/client 7.23.0` }),
	{ processOptions(opts) {
		const lineage = typeof process < "u" && process.env.X_SANITY_LINEAGE || opts.lineage;
		return lineage && (opts.headers = opts.headers || {}, opts.headers["x-sanity-lineage"] = lineage), opts;
	} },
	p$1({
		keepAlive: !0,
		maxSockets: 30,
		maxTotalSockets: 256
	})
], SanityClient);
exp.requester;
var createClient = exp.createClient;
//#endregion
//#region functions/first-published/index.ts
var handler = documentEventHandler(async ({ context, event }) => {
	try {
		await createClient({
			...context.clientOptions,
			useCdn: false,
			apiVersion: "2026-02-27"
		}).patch(event.data._id).setIfMissing({ firstPublished: (/* @__PURE__ */ new Date()).toISOString() }).commit({ dryRun: context.local });
		console.log(context.local ? "Dry run:" : "Updated:", `firstPublished set on ${event.data._id}`);
	} catch (error) {
		console.error(error);
	}
});
//#endregion
export { handler, __require as i, y as n, __commonJSMin as r, isRecord as t };

//# sourceMappingURL=index.js.map