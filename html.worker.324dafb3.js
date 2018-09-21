// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"html.worker.js":[function(require,module,exports) {
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}([function (e, t, n) {
  "use strict";
  (function (e, r) {
    var i;n.d(t, "a", function () {
      return o;
    }), function () {
      var t = Object.create(null);t["WinJS/Core/_WinJS"] = {};var n = function n(e, _n2, r) {
        var i = {},
            o = !1,
            a = _n2.map(function (e) {
          return "exports" === e ? (o = !0, i) : t[e];
        }),
            s = r.apply({}, a);t[e] = o ? i : s;
      };n("WinJS/Core/_Global", [], function () {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== e ? e : {};
      }), n("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function (e) {
        var t = null;return { hasWinRT: !!e.Windows, markSupportedForProcessing: function markSupportedForProcessing(e) {
            return e.supportedForProcessing = !0, e;
          }, _setImmediate: function _setImmediate(n) {
            null === t && (t = e.setImmediate ? e.setImmediate.bind(e) : void 0 !== r && "function" == typeof r.nextTick ? r.nextTick.bind(r) : e.setTimeout.bind(e)), t(n);
          } };
      }), n("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function (e) {
        return e.msWriteProfilerMark || function () {};
      }), n("WinJS/Core/_Base", ["WinJS/Core/_WinJS", "WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_WriteProfilerMark"], function (e, t, n, r) {
        function i(e, t, n) {
          var r,
              i,
              o,
              a = Object.keys(t),
              s = Array.isArray(e);for (i = 0, o = a.length; i < o; i++) {
            var u = a[i],
                l = 95 !== u.charCodeAt(0),
                c = t[u];!c || "object" != (typeof c === "undefined" ? "undefined" : _typeof(c)) || void 0 === c.value && "function" != typeof c.get && "function" != typeof c.set ? l ? s ? e.forEach(function (e) {
              e[u] = c;
            }) : e[u] = c : (r = r || {})[u] = { value: c, enumerable: l, configurable: !0, writable: !0 } : (void 0 === c.enumerable && (c.enumerable = l), n && c.setName && "function" == typeof c.setName && c.setName(n + "." + u), (r = r || {})[u] = c);
          }r && (s ? e.forEach(function (e) {
            Object.defineProperties(e, r);
          }) : Object.defineProperties(e, r));
        }return function () {
          var n = e;function o(n, r) {
            var i = n || {};if (r) {
              var o = r.split(".");i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));for (var a = 0, s = o.length; a < s; a++) {
                var u = o[a];i[u] || Object.defineProperty(i, u, { value: {}, writable: !1, enumerable: !0, configurable: !0 }), i = i[u];
              }
            }return i;
          }function a(e, t, n) {
            var r = o(e, t);return n && i(r, n, t || "<ANONYMOUS>"), r;
          }n.Namespace || (n.Namespace = Object.create(Object.prototype));var s = { uninitialized: 1, working: 2, initialized: 3 };Object.defineProperties(n.Namespace, { defineWithParent: { value: a, writable: !0, enumerable: !0, configurable: !0 }, define: { value: function value(e, n) {
                return a(t, e, n);
              }, writable: !0, enumerable: !0, configurable: !0 }, _lazy: { value: function value(e) {
                var t,
                    n,
                    i = s.uninitialized;return { setName: function setName(e) {
                    t = e;
                  }, get: function get() {
                    switch (i) {case s.initialized:
                        return n;case s.uninitialized:
                        i = s.working;try {
                          r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e();
                        } finally {
                          r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = s.uninitialized;
                        }return e = null, i = s.initialized, n;case s.working:
                        throw "Illegal: reentrancy on initialization";default:
                        throw "Illegal";}
                  }, set: function set(e) {
                    switch (i) {case s.working:
                        throw "Illegal: reentrancy on initialization";default:
                        i = s.initialized, n = e;}
                  }, enumerable: !0, configurable: !0 };
              }, writable: !0, enumerable: !0, configurable: !0 }, _moduleDefine: { value: function value(e, n, r) {
                var a = [e],
                    s = null;return n && (s = o(t, n), a.push(s)), i(a, r, n || "<ANONYMOUS>"), s;
              }, writable: !0, enumerable: !0, configurable: !0 } });
        }(), function () {
          function t(e, t, r) {
            return e = e || function () {}, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e;
          }e.Namespace.define("WinJS.Class", { define: t, derive: function derive(e, r, o, a) {
              if (e) {
                r = r || function () {};var s = e.prototype;return r.prototype = Object.create(s), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", { value: r, writable: !0, configurable: !0, enumerable: !0 }), o && i(r.prototype, o), a && i(r, a), r;
              }return t(r, o, a);
            }, mix: function mix(e) {
              var t, n;for (e = e || function () {}, t = 1, n = arguments.length; t < n; t++) {
                i(e.prototype, arguments[t]);
              }return e;
            } });
        }(), { Namespace: e.Namespace, Class: e.Class };
      }), n("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function (e) {
        var t = e.Class.derive(Error, function (e, t) {
          this.name = e, this.message = t || e;
        }, {}, { supportedForProcessing: !1 });return e.Namespace.define("WinJS", { ErrorFromName: t }), t;
      }), n("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function (e, t) {
        function n(e) {
          var t = "_on" + e + "state";return { get: function get() {
              var e = this[t];return e && e.userHandler;
            }, set: function set(n) {
              var r = this[t];n ? (r || (r = { wrapper: function wrapper(e) {
                  return r.userHandler(e);
                }, userHandler: n }, Object.defineProperty(this, t, { value: r, enumerable: !1, writable: !0, configurable: !0 }), this.addEventListener(e, r.wrapper, !1)), r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null);
            }, enumerable: !0 };
        }var r = t.Class.define(function (e, t, n) {
          this.detail = t, this.target = n, this.timeStamp = Date.now(), this.type = e;
        }, { bubbles: { value: !1, writable: !1 }, cancelable: { value: !1, writable: !1 }, currentTarget: { get: function get() {
              return this.target;
            } }, defaultPrevented: { get: function get() {
              return this._preventDefaultCalled;
            } }, trusted: { value: !1, writable: !1 }, eventPhase: { value: 0, writable: !1 }, target: null, timeStamp: null, type: null, preventDefault: function preventDefault() {
            this._preventDefaultCalled = !0;
          }, stopImmediatePropagation: function stopImmediatePropagation() {
            this._stopImmediatePropagationCalled = !0;
          }, stopPropagation: function stopPropagation() {} }, { supportedForProcessing: !1 }),
            i = { _listeners: null, addEventListener: function addEventListener(e, t, n) {
            n = n || !1, this._listeners = this._listeners || {};for (var r = this._listeners[e] = this._listeners[e] || [], i = 0, o = r.length; i < o; i++) {
              var a = r[i];if (a.useCapture === n && a.listener === t) return;
            }r.push({ listener: t, useCapture: n });
          }, dispatchEvent: function dispatchEvent(e, t) {
            var n = this._listeners && this._listeners[e];if (n) {
              for (var i = new r(e, t, this), o = 0, a = (n = n.slice(0, n.length)).length; o < a && !i._stopImmediatePropagationCalled; o++) {
                n[o].listener(i);
              }return i.defaultPrevented || !1;
            }return !1;
          }, removeEventListener: function removeEventListener(e, t, n) {
            n = n || !1;var r = this._listeners && this._listeners[e];if (r) for (var i = 0, o = r.length; i < o; i++) {
              var a = r[i];if (a.listener === t && a.useCapture === n) {
                r.splice(i, 1), 0 === r.length && delete this._listeners[e];break;
              }
            }
          } };t.Namespace._moduleDefine(e, "WinJS.Utilities", { _createEventProperty: n, createEventProperties: function createEventProperties() {
            for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
              var i = arguments[t];e["on" + i] = n(i);
            }return e;
          }, eventMixin: i });
      }), n("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function (e) {
        function t(e) {
          return e;
        }return { _traceAsyncOperationStarting: e.Debug && e.Debug.msTraceAsyncOperationStarting && e.Debug.msTraceAsyncOperationStarting.bind(e.Debug) || t, _traceAsyncOperationCompleted: e.Debug && e.Debug.msTraceAsyncOperationCompleted && e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug) || t, _traceAsyncCallbackStarting: e.Debug && e.Debug.msTraceAsyncCallbackStarting && e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug) || t, _traceAsyncCallbackCompleted: e.Debug && e.Debug.msTraceAsyncCallbackCompleted && e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug) || t };
      }), n("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_Base", "WinJS/Core/_ErrorFromName", "WinJS/Core/_Events", "WinJS/Core/_Trace"], function (e, t, n, r, i, o) {
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);var a = new (n.Class.mix(n.Class.define(null, {}, { supportedForProcessing: !1 }), i.eventMixin))();a._listeners = {};var s = "error",
            u = "Canceled",
            l = !1,
            c = { promise: 1, thenPromise: 2, errorPromise: 4, exceptionPromise: 8, completePromise: 16 };c.all = c.promise | c.thenPromise | c.errorPromise | c.exceptionPromise | c.completePromise;var h,
            d,
            f,
            p,
            g,
            m,
            b,
            _,
            v,
            y,
            w = 1;function C() {}h = { name: "created", enter: function enter(e) {
            e._setState(d);
          }, cancel: C, done: C, then: C, _completed: C, _error: C, _notify: C, _progress: C, _setCompleteValue: C, _setErrorValue: C }, d = { name: "working", enter: C, cancel: function cancel(e) {
            e._setState(g);
          }, done: N, then: W, _completed: x, _error: O, _notify: C, _progress: D, _setCompleteValue: V, _setErrorValue: R }, f = { name: "waiting", enter: function enter(e) {
            var t = e._value;if (t instanceof B && t._state !== y && t._state !== _) M(t, { promise: e });else {
              var n = function n(r) {
                t._errorId ? e._chainedError(r, t) : (I(e, r, S, t, n), e._error(r));
              };n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e));
            }
          }, cancel: function cancel(e) {
            e._setState(p);
          }, done: N, then: W, _completed: x, _error: O, _notify: C, _progress: D, _setCompleteValue: V, _setErrorValue: R }, p = { name: "waiting_canceled", enter: function enter(e) {
            e._setState(m);var t = e._value;t.cancel && t.cancel();
          }, cancel: C, done: N, then: W, _completed: x, _error: O, _notify: C, _progress: D, _setCompleteValue: V, _setErrorValue: R }, g = { name: "canceled", enter: function enter(e) {
            e._setState(m), e._cancelAction();
          }, cancel: C, done: N, then: W, _completed: x, _error: O, _notify: C, _progress: D, _setCompleteValue: V, _setErrorValue: R }, m = { name: "canceling", enter: function enter(e) {
            var t = new Error(u);t.name = t.message, e._value = t, e._setState(v);
          }, cancel: C, done: C, then: C, _completed: C, _error: C, _notify: C, _progress: C, _setCompleteValue: C, _setErrorValue: C }, b = { name: "complete_notify", enter: function enter(e) {
            if (e.done = H.prototype.done, e.then = H.prototype.then, e._listeners) for (var t, n = [e]; n.length;) {
              (t = n.shift())._state._notify(t, n);
            }e._setState(_);
          }, cancel: C, done: null, then: null, _completed: C, _error: C, _notify: P, _progress: C, _setCompleteValue: C, _setErrorValue: C }, _ = { name: "success", enter: function enter(e) {
            e.done = H.prototype.done, e.then = H.prototype.then, e._cleanupAction();
          }, cancel: C, done: null, then: null, _completed: C, _error: C, _notify: P, _progress: C, _setCompleteValue: C, _setErrorValue: C }, v = { name: "error_notify", enter: function enter(e) {
            if (e.done = K.prototype.done, e.then = K.prototype.then, e._listeners) for (var t, n = [e]; n.length;) {
              (t = n.shift())._state._notify(t, n);
            }e._setState(y);
          }, cancel: C, done: null, then: null, _completed: C, _error: C, _notify: q, _progress: C, _setCompleteValue: C, _setErrorValue: C }, y = { name: "error", enter: function enter(e) {
            e.done = K.prototype.done, e.then = K.prototype.then, e._cleanupAction();
          }, cancel: C, done: null, then: null, _completed: C, _error: C, _notify: q, _progress: C, _setCompleteValue: C, _setErrorValue: C };var T = n.Class.define(null, { _listeners: null, _nextState: null, _state: null, _value: null, cancel: function cancel() {
            this._state.cancel(this), this._run();
          }, done: function done(e, t, n) {
            this._state.done(this, e, t, n);
          }, then: function e(t, n, r) {
            if (this.then === e) return this._state.then(this, t, n, r);this.then(t, n, r);
          }, _chainedError: function _chainedError(e, t) {
            var n = this._state._error(this, e, E, t);return this._run(), n;
          }, _completed: function _completed(e) {
            var t = this._state._completed(this, e);return this._run(), t;
          }, _error: function _error(e) {
            var t = this._state._error(this, e, A);return this._run(), t;
          }, _progress: function _progress(e) {
            this._state._progress(this, e);
          }, _setState: function _setState(e) {
            this._nextState = e;
          }, _setCompleteValue: function _setCompleteValue(e) {
            this._state._setCompleteValue(this, e), this._run();
          }, _setChainedErrorValue: function _setChainedErrorValue(e, t) {
            var n = this._state._setErrorValue(this, e, E, t);return this._run(), n;
          }, _setExceptionValue: function _setExceptionValue(e) {
            var t = this._state._setErrorValue(this, e, L);return this._run(), t;
          }, _run: function _run() {
            for (; this._nextState;) {
              this._state = this._nextState, this._nextState = null, this._state.enter(this);
            }
          } }, { supportedForProcessing: !1 });function x(e, t) {
          var n;n = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.then ? f : b, e._value = t, e._setState(n);
        }function k(e, t, n, r, i, o) {
          return { exception: e, error: t, promise: n, handler: o, id: r, parent: i };
        }function S(e, t, n, r) {
          var i = n._isException,
              o = n._errorId;return k(i ? t : null, i ? null : t, e, o, n, r);
        }function E(e, t, n) {
          var r = n._isException,
              i = n._errorId;return U(e, i, r), k(r ? t : null, r ? null : t, e, i, n);
        }function A(e, t) {
          var n = ++w;return U(e, n), k(null, t, e, n);
        }function L(e, t) {
          var n = ++w;return U(e, n, !0), k(t, null, e, n);
        }function N(e, t, n, r) {
          M(e, { c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done") });
        }function O(e, t, n, r) {
          e._value = t, I(e, t, n, r), e._setState(v);
        }function P(t, n) {
          var r,
              i,
              a = t._value,
              s = t._listeners;if (s) for (t._listeners = null, r = 0, i = Array.isArray(s) ? s.length : 1; r < i; r++) {
            var u = 1 === i ? s : s[r],
                l = u.c,
                c = u.promise;if (o._traceAsyncOperationCompleted(u.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), c) {
              o._traceAsyncCallbackStarting(u.asyncOpID);try {
                c._setCompleteValue(l ? l(a) : a);
              } catch (e) {
                c._setExceptionValue(e);
              } finally {
                o._traceAsyncCallbackCompleted();
              }c._state !== f && c._listeners && n.push(c);
            } else H.prototype.done.call(t, l);
          }
        }function q(t, n) {
          var r,
              i,
              a = t._value,
              s = t._listeners;if (s) for (t._listeners = null, r = 0, i = Array.isArray(s) ? s.length : 1; r < i; r++) {
            var l = 1 === i ? s : s[r],
                c = l.e,
                h = l.promise,
                d = e.Debug && (a && a.name === u ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);if (o._traceAsyncOperationCompleted(l.asyncOpID, d), h) {
              var p = !1;try {
                c ? (o._traceAsyncCallbackStarting(l.asyncOpID), p = !0, c.handlesOnError || I(h, a, S, t, c), h._setCompleteValue(c(a))) : h._setChainedErrorValue(a, t);
              } catch (e) {
                h._setExceptionValue(e);
              } finally {
                p && o._traceAsyncCallbackCompleted();
              }h._state !== f && h._listeners && n.push(h);
            } else K.prototype.done.call(t, null, c);
          }
        }function I(e, t, n, r, i) {
          if (a._listeners[s]) {
            if (t instanceof Error && t.message === u) return;a.dispatchEvent(s, n(e, t, r, i));
          }
        }function D(e, t) {
          var n,
              r,
              i = e._listeners;if (i) for (n = 0, r = Array.isArray(i) ? i.length : 1; n < r; n++) {
            var o = 1 === r ? i : i[n],
                a = o.p;if (a) try {
              a(t);
            } catch (e) {}o.c || o.e || !o.promise || o.promise._progress(t);
          }
        }function M(e, t) {
          var n = e._listeners;n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n;
        }function U(e, t, n) {
          e._isException = n || !1, e._errorId = t;
        }function R(e, t, n, r) {
          e._value = t, I(e, t, n, r), e._setState(y);
        }function V(e, t) {
          var n;n = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.then ? f : _, e._value = t, e._setState(n);
        }function W(e, t, n, r) {
          var i = new B(e);return M(e, { promise: i, c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then") }), i;
        }var j,
            B = n.Class.derive(T, function (e) {
          l && (!0 === l || l & c.thenPromise) && (this._stack = Y._getStack()), this._creator = e, this._setState(h), this._run();
        }, { _creator: null, _cancelAction: function _cancelAction() {
            this._creator && this._creator.cancel();
          }, _cleanupAction: function _cleanupAction() {
            this._creator = null;
          } }, { supportedForProcessing: !1 }),
            K = n.Class.define(function (e) {
          l && (!0 === l || l & c.errorPromise) && (this._stack = Y._getStack()), this._value = e, I(this, e, A);
        }, { cancel: function cancel() {}, done: function done(e, t) {
            var n = this._value;if (t) try {
              t.handlesOnError || I(null, n, S, this, t);var r = t(n);return void (r && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" == typeof r.done && r.done());
            } catch (e) {
              n = e;
            }n instanceof Error && n.message === u || Y._doneHandler(n);
          }, then: function then(e, t) {
            if (!t) return this;var n,
                r = this._value;try {
              t.handlesOnError || I(null, r, S, this, t), n = new H(t(r));
            } catch (e) {
              n = e === r ? this : new F(e);
            }return n;
          } }, { supportedForProcessing: !1 }),
            F = n.Class.derive(K, function (e) {
          l && (!0 === l || l & c.exceptionPromise) && (this._stack = Y._getStack()), this._value = e, I(this, e, L);
        }, {}, { supportedForProcessing: !1 }),
            H = n.Class.define(function (e) {
          if (l && (!0 === l || l & c.completePromise) && (this._stack = Y._getStack()), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then) {
            var t = new B(null);return t._setCompleteValue(e), t;
          }this._value = e;
        }, { cancel: function cancel() {}, done: function done(e) {
            if (e) try {
              var t = e(this._value);t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" == typeof t.done && t.done();
            } catch (e) {
              Y._doneHandler(e);
            }
          }, then: function then(e) {
            try {
              var t = e ? e(this._value) : this._value;return t === this._value ? this : new H(t);
            } catch (e) {
              return new F(e);
            }
          } }, { supportedForProcessing: !1 });var Y = n.Class.derive(T, function (e, t) {
          l && (!0 === l || l & c.promise) && (this._stack = Y._getStack()), this._oncancel = t, this._setState(h), this._run();try {
            e(this._completed.bind(this), this._error.bind(this), this._progress.bind(this));
          } catch (e) {
            this._setExceptionValue(e);
          }
        }, { _oncancel: null, _cancelAction: function _cancelAction() {
            try {
              if (!this._oncancel) throw new Error("Promise did not implement oncancel");this._oncancel();
            } catch (e) {
              e.message, e.stack;a.dispatchEvent("error", e);
            }
          }, _cleanupAction: function _cleanupAction() {
            this._oncancel = null;
          } }, { addEventListener: function addEventListener(e, t, n) {
            a.addEventListener(e, t, n);
          }, any: function any(e) {
            return new Y(function (t, n) {
              var r = Object.keys(e);0 === r.length && t();var i = 0;r.forEach(function (o) {
                Y.as(e[o]).then(function () {
                  t({ key: o, value: e[o] });
                }, function (a) {
                  a instanceof Error && a.name === u ? ++i === r.length && t(Y.cancel) : n({ key: o, value: e[o] });
                });
              });
            }, function () {
              Object.keys(e).forEach(function (t) {
                var n = Y.as(e[t]);"function" == typeof n.cancel && n.cancel();
              });
            });
          }, as: function as(e) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then ? e : new H(e);
          }, cancel: { get: function get() {
              return j = j || new K(new r(u));
            } }, dispatchEvent: function dispatchEvent(e, t) {
            return a.dispatchEvent(e, t);
          }, is: function is(e) {
            return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.then;
          }, join: function join(e) {
            return new Y(function (t, n, r) {
              var i = Object.keys(e),
                  o = Array.isArray(e) ? [] : {},
                  a = Array.isArray(e) ? [] : {},
                  s = 0,
                  l = i.length,
                  c = function c(e) {
                if (0 == --l) {
                  var s = Object.keys(o).length;if (0 === s) t(a);else {
                    var c = 0;i.forEach(function (e) {
                      var t = o[e];t instanceof Error && t.name === u && c++;
                    }), c === s ? t(Y.cancel) : n(o);
                  }
                } else r({ Key: e, Done: !0 });
              };i.forEach(function (t) {
                var n = e[t];void 0 === n ? s++ : Y.then(n, function (e) {
                  a[t] = e, c(t);
                }, function (e) {
                  o[t] = e, c(t);
                });
              }), 0 !== (l -= s) || t(a);
            }, function () {
              Object.keys(e).forEach(function (t) {
                var n = Y.as(e[t]);"function" == typeof n.cancel && n.cancel();
              });
            });
          }, removeEventListener: function removeEventListener(e, t, n) {
            a.removeEventListener(e, t, n);
          }, supportedForProcessing: !1, then: function then(e, t, n, r) {
            return Y.as(e).then(t, n, r);
          }, thenEach: function thenEach(e, t, n, r) {
            var i = Array.isArray(e) ? [] : {};return Object.keys(e).forEach(function (o) {
              i[o] = Y.as(e[o]).then(t, n, r);
            }), Y.join(i);
          }, timeout: function timeout(n, r) {
            var i,
                o,
                a = (i = n, new Y(function (n) {
              i ? o = e.setTimeout(n, i) : t._setImmediate(n);
            }, function () {
              o && e.clearTimeout(o);
            }));return r ? function (e, t) {
              var n = function n() {
                e.cancel();
              };return e.then(function () {
                t.cancel();
              }), t.then(n, n), t;
            }(a, r) : a;
          }, wrap: function wrap(e) {
            return new H(e);
          }, wrapError: function wrapError(e) {
            return new K(e);
          }, _veryExpensiveTagWithStack: { get: function get() {
              return l;
            }, set: function set(e) {
              l = e;
            } }, _veryExpensiveTagWithStack_tag: c, _getStack: function _getStack() {
            if (e.Debug && e.Debug.debuggerEnabled) try {
              throw new Error();
            } catch (e) {
              return e.stack;
            }
          }, _cancelBlocker: function _cancelBlocker(e, t) {
            if (!Y.is(e)) return Y.wrap(e);var n,
                r,
                i = new Y(function (e, t) {
              n = e, r = t;
            }, function () {
              n = null, r = null, t && t();
            });return e.then(function (e) {
              n && n(e);
            }, function (e) {
              r && r(e);
            }), i;
          } });return Object.defineProperties(Y, i.createEventProperties(s)), Y._doneHandler = function (e) {
          t._setImmediate(function () {
            throw e;
          });
        }, { PromiseStateMachine: T, Promise: Y, state_created: h };
      }), n("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function (e, t) {
        return e.Namespace.define("WinJS", { Promise: t.Promise }), t.Promise;
      }), (i = t["WinJS/Core/_WinJS"]).TPromise = i.Promise, i.PPromise = i.Promise;
    }();i.Promise;var o = i.TPromise;i.PPromise;
  }).call(this, n(4), n(2));
}, function (e, t, n) {
  "use strict";
  (function (e, r) {
    n.d(t, "c", function () {
      return p;
    }), n.d(t, "b", function () {
      return g;
    }), n.d(t, "a", function () {
      return m;
    });var i,
        o = !1,
        a = !1,
        s = !1,
        u = !1,
        l = !1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.nextTick && "string" == typeof e.platform) {
      o = "win32" === e.platform, a = "darwin" === e.platform, s = "linux" === e.platform, "en", "en";var c = e.env.VSCODE_NLS_CONFIG;if (c) try {
        var h = JSON.parse(c),
            d = h.availableLanguages["*"];h.locale, d || "en", h._translationsConfigFile;
      } catch (e) {}u = !0;
    } else if ("object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator))) {
      var f = navigator.userAgent;o = f.indexOf("Windows") >= 0, a = f.indexOf("Macintosh") >= 0, s = f.indexOf("Linux") >= 0, l = !0, navigator.language;
    }!function (e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    }(i || (i = {}));i.Web;u && (a ? i.Mac : o ? i.Windows : s && i.Linux);var p = o,
        g = l,
        m = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) ? self : "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? r : {};
  }).call(this, n(2), n(4));
}, function (e, t) {
  var n,
      r,
      i = e.exports = {};function o() {
    throw new Error("setTimeout has not been defined");
  }function a() {
    throw new Error("clearTimeout has not been defined");
  }function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }!function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (e) {
      n = o;
    }try {
      r = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (e) {
      r = a;
    }
  }();var u,
      l = [],
      c = !1,
      h = -1;function d() {
    c && u && (c = !1, u.length ? l = u.concat(l) : h = -1, l.length && f());
  }function f() {
    if (!c) {
      var e = s(d);c = !0;for (var t = l.length; t;) {
        for (u = l, l = []; ++h < t;) {
          u && u[h].run();
        }h = -1, t = l.length;
      }u = null, c = !1, function (e) {
        if (r === clearTimeout) return clearTimeout(e);if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }function p(e, t) {
    this.fun = e, this.array = t;
  }function g() {}i.nextTick = function (e) {
    var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }l.push(new p(e, t)), 1 !== l.length || c || s(f);
  }, p.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (e) {
    return [];
  }, i.binding = function (e) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var n,
        r,
        i = (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    }, function (e, t) {
      function r() {
        this.constructor = e;
      }n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    });if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) r = "win32" === e.platform;else if ("object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator))) {
      var o = navigator.userAgent;r = o.indexOf("Windows") >= 0;
    }var a = /^\w[\w\d+.-]*$/,
        s = /^\//,
        u = /^\/\//;var l = "",
        c = "/",
        h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
        d = function () {
      function e(e, t, n, r, i) {
        "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (this.scheme = e.scheme || l, this.authority = e.authority || l, this.path = e.path || l, this.query = e.query || l, this.fragment = e.fragment || l) : (this.scheme = e || l, this.authority = t || l, this.path = function (e, t) {
          switch (e) {case "https":case "http":case "file":
              t ? t[0] !== c && (t = c + t) : t = c;}return t;
        }(this.scheme, n || l), this.query = r || l, this.fragment = i || l, function (e) {
          if (e.scheme && !a.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");if (e.path) if (e.authority) {
            if (!s.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
          } else if (u.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
        }(this));
      }return e.isUri = function (t) {
        return t instanceof e || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme;
      }, Object.defineProperty(e.prototype, "fsPath", { get: function get() {
          return _(this);
        }, enumerable: !0, configurable: !0 }), e.prototype.with = function (e) {
        if (!e) return this;var t = e.scheme,
            n = e.authority,
            r = e.path,
            i = e.query,
            o = e.fragment;return void 0 === t ? t = this.scheme : null === t && (t = l), void 0 === n ? n = this.authority : null === n && (n = l), void 0 === r ? r = this.path : null === r && (r = l), void 0 === i ? i = this.query : null === i && (i = l), void 0 === o ? o = this.fragment : null === o && (o = l), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new p(t, n, r, i, o);
      }, e.parse = function (e) {
        var t = h.exec(e);return t ? new p(t[2] || l, decodeURIComponent(t[4] || l), decodeURIComponent(t[5] || l), decodeURIComponent(t[7] || l), decodeURIComponent(t[9] || l)) : new p(l, l, l, l, l);
      }, e.file = function (e) {
        var t = l;if (r && (e = e.replace(/\\/g, c)), e[0] === c && e[1] === c) {
          var n = e.indexOf(c, 2);-1 === n ? (t = e.substring(2), e = c) : (t = e.substring(2, n), e = e.substring(n) || c);
        }return new p("file", t, e, l, l);
      }, e.from = function (e) {
        return new p(e.scheme, e.authority, e.path, e.query, e.fragment);
      }, e.prototype.toString = function (e) {
        return void 0 === e && (e = !1), v(this, e);
      }, e.prototype.toJSON = function () {
        return this;
      }, e.revive = function (t) {
        if (t) {
          if (t instanceof e) return t;var n = new p(t);return n._fsPath = t.fsPath, n._formatted = t.external, n;
        }return t;
      }, e;
    }();t.a = d;var f,
        p = function (e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;return t._formatted = null, t._fsPath = null, t;
      }return i(t, e), Object.defineProperty(t.prototype, "fsPath", { get: function get() {
          return this._fsPath || (this._fsPath = _(this)), this._fsPath;
        }, enumerable: !0, configurable: !0 }), t.prototype.toString = function (e) {
        return void 0 === e && (e = !1), e ? v(this, !0) : (this._formatted || (this._formatted = v(this, !1)), this._formatted);
      }, t.prototype.toJSON = function () {
        var e = { $mid: 1 };return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
      }, t;
    }(d),
        g = ((f = {})[58] = "%3A", f[47] = "%2F", f[63] = "%3F", f[35] = "%23", f[91] = "%5B", f[93] = "%5D", f[64] = "%40", f[33] = "%21", f[36] = "%24", f[38] = "%26", f[39] = "%27", f[40] = "%28", f[41] = "%29", f[42] = "%2A", f[43] = "%2B", f[44] = "%2C", f[59] = "%3B", f[61] = "%3D", f[32] = "%20", f);function m(e, t) {
      for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i);if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));else {
          void 0 === n && (n = e.substr(0, i));var a = g[o];void 0 !== a ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += a) : -1 === r && (r = i);
        }
      }return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
    }function b(e) {
      for (var t = void 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += g[r]) : void 0 !== t && (t += e[n]);
      }return void 0 !== t ? t : e;
    }function _(e) {
      var t;return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, r && (t = t.replace(/\//g, "\\")), t;
    }function v(e, t) {
      var n = t ? b : m,
          r = "",
          i = e.scheme,
          o = e.authority,
          a = e.path,
          s = e.query,
          u = e.fragment;if (i && (r += i, r += ":"), (o || "file" === i) && (r += c, r += c), o) {
        var l = o.indexOf("@");if (-1 !== l) {
          var h = o.substr(0, l);o = o.substr(l + 1), -1 === (l = h.indexOf(":")) ? r += n(h, !1) : (r += n(h.substr(0, l), !1), r += ":", r += n(h.substr(l + 1), !1)), r += "@";
        }-1 === (l = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, l), !1), r += o.substr(l));
      }if (a) {
        if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) (d = a.charCodeAt(1)) >= 65 && d <= 90 && (a = "/" + String.fromCharCode(d + 32) + ":" + a.substr(3));else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
          var d;(d = a.charCodeAt(0)) >= 65 && d <= 90 && (a = String.fromCharCode(d + 32) + ":" + a.substr(2));
        }r += n(a, !0);
      }return s && (r += "?", r += n(s, !1)), u && (r += "#", r += n(u, !1)), r;
    }
  }).call(this, n(2));
}, function (e, t) {
  var n;n = function () {
    return this;
  }();try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }e.exports = n;
}, function (e, t, n) {
  "use strict";
  n.r(t);var r,
      i,
      o = n(1),
      a = (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var n in t) {
      t.hasOwnProperty(n) && (e[n] = t[n]);
    }
  }, function (e, t) {
    function n() {
      this.constructor = e;
    }r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }),
      s = /^\w[\w\d+.-]*$/,
      u = /^\//,
      l = /^\/\//;var c = "",
      h = "/",
      d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      f = function () {
    function e(e, t, n, r, i) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? (this.scheme = e.scheme || c, this.authority = e.authority || c, this.path = e.path || c, this.query = e.query || c, this.fragment = e.fragment || c) : (this.scheme = e || c, this.authority = t || c, this.path = function (e, t) {
        switch (e) {case "https":case "http":case "file":
            t ? t[0] !== h && (t = h + t) : t = h;}return t;
      }(this.scheme, n || c), this.query = r || c, this.fragment = i || c, function (e) {
        if (e.scheme && !s.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");if (e.path) if (e.authority) {
          if (!u.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }(this));
    }return e.isUri = function (t) {
      return t instanceof e || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme;
    }, Object.defineProperty(e.prototype, "fsPath", { get: function get() {
        return v(this);
      }, enumerable: !0, configurable: !0 }), e.prototype.with = function (e) {
      if (!e) return this;var t = e.scheme,
          n = e.authority,
          r = e.path,
          i = e.query,
          o = e.fragment;return void 0 === t ? t = this.scheme : null === t && (t = c), void 0 === n ? n = this.authority : null === n && (n = c), void 0 === r ? r = this.path : null === r && (r = c), void 0 === i ? i = this.query : null === i && (i = c), void 0 === o ? o = this.fragment : null === o && (o = c), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new g(t, n, r, i, o);
    }, e.parse = function (e) {
      var t = d.exec(e);return t ? new g(t[2] || c, decodeURIComponent(t[4] || c), decodeURIComponent(t[5] || c), decodeURIComponent(t[7] || c), decodeURIComponent(t[9] || c)) : new g(c, c, c, c, c);
    }, e.file = function (e) {
      var t = c;if (o.c && (e = e.replace(/\\/g, h)), e[0] === h && e[1] === h) {
        var n = e.indexOf(h, 2);-1 === n ? (t = e.substring(2), e = h) : (t = e.substring(2, n), e = e.substring(n) || h);
      }return new g("file", t, e, c, c);
    }, e.from = function (e) {
      return new g(e.scheme, e.authority, e.path, e.query, e.fragment);
    }, e.prototype.toString = function (e) {
      return void 0 === e && (e = !1), y(this, e);
    }, e.prototype.toJSON = function () {
      return this;
    }, e.revive = function (t) {
      if (t) {
        if (t instanceof e) return t;var n = new g(t);return n._fsPath = t.fsPath, n._formatted = t.external, n;
      }return t;
    }, e;
  }(),
      p = f,
      g = function (e) {
    function t() {
      var t = null !== e && e.apply(this, arguments) || this;return t._formatted = null, t._fsPath = null, t;
    }return a(t, e), Object.defineProperty(t.prototype, "fsPath", { get: function get() {
        return this._fsPath || (this._fsPath = v(this)), this._fsPath;
      }, enumerable: !0, configurable: !0 }), t.prototype.toString = function (e) {
      return void 0 === e && (e = !1), e ? y(this, !0) : (this._formatted || (this._formatted = y(this, !1)), this._formatted);
    }, t.prototype.toJSON = function () {
      var e = { $mid: 1 };return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
    }, t;
  }(f),
      m = ((i = {})[58] = "%3A", i[47] = "%2F", i[63] = "%3F", i[35] = "%23", i[91] = "%5B", i[93] = "%5D", i[64] = "%40", i[33] = "%21", i[36] = "%24", i[38] = "%26", i[39] = "%27", i[40] = "%28", i[41] = "%29", i[42] = "%2A", i[43] = "%2B", i[44] = "%2C", i[59] = "%3B", i[61] = "%3D", i[32] = "%20", i);function b(e, t) {
    for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
      var o = e.charCodeAt(i);if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i));else {
        void 0 === n && (n = e.substr(0, i));var a = m[o];void 0 !== a ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += a) : -1 === r && (r = i);
      }
    }return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
  }function _(e) {
    for (var t = void 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += m[r]) : void 0 !== t && (t += e[n]);
    }return void 0 !== t ? t : e;
  }function v(e) {
    var t;return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, o.c && (t = t.replace(/\//g, "\\")), t;
  }function y(e, t) {
    var n = t ? _ : b,
        r = "",
        i = e.scheme,
        o = e.authority,
        a = e.path,
        s = e.query,
        u = e.fragment;if (i && (r += i, r += ":"), (o || "file" === i) && (r += h, r += h), o) {
      var l = o.indexOf("@");if (-1 !== l) {
        var c = o.substr(0, l);o = o.substr(l + 1), -1 === (l = c.indexOf(":")) ? r += n(c, !1) : (r += n(c.substr(0, l), !1), r += ":", r += n(c.substr(l + 1), !1)), r += "@";
      }-1 === (l = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, l), !1), r += o.substr(l));
    }if (a) {
      if (a.length >= 3 && 47 === a.charCodeAt(0) && 58 === a.charCodeAt(2)) (d = a.charCodeAt(1)) >= 65 && d <= 90 && (a = "/" + String.fromCharCode(d + 32) + ":" + a.substr(3));else if (a.length >= 2 && 58 === a.charCodeAt(1)) {
        var d;(d = a.charCodeAt(0)) >= 65 && d <= 90 && (a = String.fromCharCode(d + 32) + ":" + a.substr(2));
      }r += n(a, !0);
    }return s && (r += "?", r += n(s, !1)), u && (r += "#", r += t ? u : b(u, !1)), r;
  }var w = n(0),
      C = function () {
    function e(e, t) {
      this.lineNumber = e, this.column = t;
    }return e.prototype.equals = function (t) {
      return e.equals(this, t);
    }, e.equals = function (e, t) {
      return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column;
    }, e.prototype.isBefore = function (t) {
      return e.isBefore(this, t);
    }, e.isBefore = function (e, t) {
      return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column;
    }, e.prototype.isBeforeOrEqual = function (t) {
      return e.isBeforeOrEqual(this, t);
    }, e.isBeforeOrEqual = function (e, t) {
      return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column;
    }, e.compare = function (e, t) {
      var n = 0 | e.lineNumber,
          r = 0 | t.lineNumber;return n === r ? (0 | e.column) - (0 | t.column) : n - r;
    }, e.prototype.clone = function () {
      return new e(this.lineNumber, this.column);
    }, e.prototype.toString = function () {
      return "(" + this.lineNumber + "," + this.column + ")";
    }, e.lift = function (t) {
      return new e(t.lineNumber, t.column);
    }, e.isIPosition = function (e) {
      return e && "number" == typeof e.lineNumber && "number" == typeof e.column;
    }, e;
  }(),
      T = function () {
    function e(e, t, n, r) {
      e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r);
    }return e.prototype.isEmpty = function () {
      return e.isEmpty(this);
    }, e.isEmpty = function (e) {
      return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
    }, e.prototype.containsPosition = function (t) {
      return e.containsPosition(this, t);
    }, e.containsPosition = function (e, t) {
      return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn);
    }, e.prototype.containsRange = function (t) {
      return e.containsRange(this, t);
    }, e.containsRange = function (e, t) {
      return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && !(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn);
    }, e.prototype.plusRange = function (t) {
      return e.plusRange(this, t);
    }, e.plusRange = function (t, n) {
      var r, i, o, a;return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, a = t.endColumn), new e(r, i, o, a);
    }, e.prototype.intersectRanges = function (t) {
      return e.intersectRanges(this, t);
    }, e.intersectRanges = function (t, n) {
      var r = t.startLineNumber,
          i = t.startColumn,
          o = t.endLineNumber,
          a = t.endColumn,
          s = n.startLineNumber,
          u = n.startColumn,
          l = n.endLineNumber,
          c = n.endColumn;return r < s ? (r = s, i = u) : r === s && (i = Math.max(i, u)), o > l ? (o = l, a = c) : o === l && (a = Math.min(a, c)), r > o ? null : r === o && i > a ? null : new e(r, i, o, a);
    }, e.prototype.equalsRange = function (t) {
      return e.equalsRange(this, t);
    }, e.equalsRange = function (e, t) {
      return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn;
    }, e.prototype.getEndPosition = function () {
      return new C(this.endLineNumber, this.endColumn);
    }, e.prototype.getStartPosition = function () {
      return new C(this.startLineNumber, this.startColumn);
    }, e.prototype.toString = function () {
      return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }, e.prototype.setEndPosition = function (t, n) {
      return new e(this.startLineNumber, this.startColumn, t, n);
    }, e.prototype.setStartPosition = function (t, n) {
      return new e(t, n, this.endLineNumber, this.endColumn);
    }, e.prototype.collapseToStart = function () {
      return e.collapseToStart(this);
    }, e.collapseToStart = function (t) {
      return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
    }, e.fromPositions = function (t, n) {
      return void 0 === n && (n = t), new e(t.lineNumber, t.column, n.lineNumber, n.column);
    }, e.lift = function (t) {
      return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
    }, e.isIRange = function (e) {
      return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn;
    }, e.areIntersectingOrTouching = function (e, t) {
      return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn);
    }, e.areIntersecting = function (e, t) {
      return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn);
    }, e.compareRangesUsingStarts = function (e, t) {
      var n = 0 | e.startLineNumber,
          r = 0 | t.startLineNumber;if (n === r) {
        var i = 0 | e.startColumn,
            o = 0 | t.startColumn;if (i === o) {
          var a = 0 | e.endLineNumber,
              s = 0 | t.endLineNumber;return a === s ? (0 | e.endColumn) - (0 | t.endColumn) : a - s;
        }return i - o;
      }return n - r;
    }, e.compareRangesUsingEnds = function (e, t) {
      return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
    }, e.spansMultipleLines = function (e) {
      return e.endLineNumber > e.startLineNumber;
    }, e;
  }(),
      x = function () {
    function e(e, t, n, r) {
      this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r;
    }return e.prototype.getOriginalEnd = function () {
      return this.originalStart + this.originalLength;
    }, e.prototype.getModifiedEnd = function () {
      return this.modifiedStart + this.modifiedLength;
    }, e;
  }();function k(e) {
    return { getLength: function getLength() {
        return e.length;
      }, getElementAtIndex: function getElementAtIndex(t) {
        return e.charCodeAt(t);
      } };
  }function S(e, t, n) {
    return new N(k(e), k(t)).ComputeDiff(n);
  }var E = function () {
    function e() {}return e.Assert = function (e, t) {
      if (!e) throw new Error(t);
    }, e;
  }(),
      A = function () {
    function e() {}return e.Copy = function (e, t, n, r, i) {
      for (var o = 0; o < i; o++) {
        n[r + o] = e[t + o];
      }
    }, e;
  }(),
      L = function () {
    function e() {
      this.m_changes = [], this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }return e.prototype.MarkNextChange = function () {
      (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new x(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE;
    }, e.prototype.AddOriginalElement = function (e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
    }, e.prototype.AddModifiedElement = function (e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
    }, e.prototype.getChanges = function () {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }, e.prototype.getReverseChanges = function () {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }, e;
  }(),
      N = function () {
    function e(e, t, n) {
      void 0 === n && (n = null), this.OriginalSequence = e, this.ModifiedSequence = t, this.ContinueProcessingPredicate = n, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }return e.prototype.ElementsAreEqual = function (e, t) {
      return this.OriginalSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
    }, e.prototype.OriginalElementsAreEqual = function (e, t) {
      return this.OriginalSequence.getElementAtIndex(e) === this.OriginalSequence.getElementAtIndex(t);
    }, e.prototype.ModifiedElementsAreEqual = function (e, t) {
      return this.ModifiedSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
    }, e.prototype.ComputeDiff = function (e) {
      return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, e);
    }, e.prototype._ComputeDiff = function (e, t, n, r, i) {
      var o = this.ComputeDiffRecursive(e, t, n, r, [!1]);return i ? this.ShiftChanges(o) : o;
    }, e.prototype.ComputeDiffRecursive = function (e, t, n, r, i) {
      for (i[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n);) {
        e++, n++;
      }for (; t >= e && r >= n && this.ElementsAreEqual(t, r);) {
        t--, r--;
      }if (e > t || n > r) {
        var o = void 0;return n <= r ? (E.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o = [new x(e, 0, n, r - n + 1)]) : e <= t ? (E.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = [new x(e, t - e + 1, n, 0)]) : (E.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), E.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = []), o;
      }var a = [0],
          s = [0],
          u = this.ComputeRecursionPoint(e, t, n, r, a, s, i),
          l = a[0],
          c = s[0];if (null !== u) return u;if (!i[0]) {
        var h = this.ComputeDiffRecursive(e, l, n, c, i),
            d = [];return d = i[0] ? [new x(l + 1, t - (l + 1) + 1, c + 1, r - (c + 1) + 1)] : this.ComputeDiffRecursive(l + 1, t, c + 1, r, i), this.ConcatenateChanges(h, d);
      }return [new x(e, t - e + 1, n, r - n + 1)];
    }, e.prototype.WALKTRACE = function (e, t, n, r, i, o, a, s, u, l, c, h, d, f, p, g, m, b) {
      var _,
          v,
          y = null,
          w = new L(),
          C = t,
          T = n,
          k = d[0] - g[0] - r,
          S = Number.MIN_VALUE,
          E = this.m_forwardHistory.length - 1;do {
        (v = k + e) === C || v < T && u[v - 1] < u[v + 1] ? (f = (c = u[v + 1]) - k - r, c < S && w.MarkNextChange(), S = c, w.AddModifiedElement(c + 1, f), k = v + 1 - e) : (f = (c = u[v - 1] + 1) - k - r, c < S && w.MarkNextChange(), S = c - 1, w.AddOriginalElement(c, f + 1), k = v - 1 - e), E >= 0 && (e = (u = this.m_forwardHistory[E])[0], C = 1, T = u.length - 1);
      } while (--E >= -1);if (_ = w.getReverseChanges(), b[0]) {
        var A = d[0] + 1,
            N = g[0] + 1;if (null !== _ && _.length > 0) {
          var O = _[_.length - 1];A = Math.max(A, O.getOriginalEnd()), N = Math.max(N, O.getModifiedEnd());
        }y = [new x(A, h - A + 1, N, p - N + 1)];
      } else {
        w = new L(), C = o, T = a, k = d[0] - g[0] - s, S = Number.MAX_VALUE, E = m ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;do {
          (v = k + i) === C || v < T && l[v - 1] >= l[v + 1] ? (f = (c = l[v + 1] - 1) - k - s, c > S && w.MarkNextChange(), S = c + 1, w.AddOriginalElement(c + 1, f + 1), k = v + 1 - i) : (f = (c = l[v - 1]) - k - s, c > S && w.MarkNextChange(), S = c, w.AddModifiedElement(c + 1, f + 1), k = v - 1 - i), E >= 0 && (i = (l = this.m_reverseHistory[E])[0], C = 1, T = l.length - 1);
        } while (--E >= -1);y = w.getChanges();
      }return this.ConcatenateChanges(_, y);
    }, e.prototype.ComputeRecursionPoint = function (e, t, n, r, i, o, a) {
      var s,
          u,
          l,
          c = 0,
          h = 0,
          d = 0,
          f = 0;e--, n--, i[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];var p,
          g,
          m = t - e + (r - n),
          b = m + 1,
          _ = new Array(b),
          v = new Array(b),
          y = r - n,
          w = t - e,
          C = e - n,
          T = t - r,
          k = (w - y) % 2 == 0;for (_[y] = e, v[w] = t, a[0] = !1, l = 1; l <= m / 2 + 1; l++) {
        var S = 0,
            E = 0;for (c = this.ClipDiagonalBound(y - l, l, y, b), h = this.ClipDiagonalBound(y + l, l, y, b), p = c; p <= h; p += 2) {
          for (u = (s = p === c || p < h && _[p - 1] < _[p + 1] ? _[p + 1] : _[p - 1] + 1) - (p - y) - C, g = s; s < t && u < r && this.ElementsAreEqual(s + 1, u + 1);) {
            s++, u++;
          }if (_[p] = s, s + u > S + E && (S = s, E = u), !k && Math.abs(p - w) <= l - 1 && s >= v[p]) return i[0] = s, o[0] = u, g <= v[p] && l <= 1448 ? this.WALKTRACE(y, c, h, C, w, d, f, T, _, v, s, t, i, u, r, o, k, a) : null;
        }var L = (S - e + (E - n) - l) / 2;if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(S, this.OriginalSequence, L)) return a[0] = !0, i[0] = S, o[0] = E, L > 0 && l <= 1448 ? this.WALKTRACE(y, c, h, C, w, d, f, T, _, v, s, t, i, u, r, o, k, a) : [new x(++e, t - e + 1, ++n, r - n + 1)];for (d = this.ClipDiagonalBound(w - l, l, w, b), f = this.ClipDiagonalBound(w + l, l, w, b), p = d; p <= f; p += 2) {
          for (u = (s = p === d || p < f && v[p - 1] >= v[p + 1] ? v[p + 1] - 1 : v[p - 1]) - (p - w) - T, g = s; s > e && u > n && this.ElementsAreEqual(s, u);) {
            s--, u--;
          }if (v[p] = s, k && Math.abs(p - y) <= l && s <= _[p]) return i[0] = s, o[0] = u, g >= _[p] && l <= 1448 ? this.WALKTRACE(y, c, h, C, w, d, f, T, _, v, s, t, i, u, r, o, k, a) : null;
        }if (l <= 1447) {
          var N = new Array(h - c + 2);N[0] = y - c + 1, A.Copy(_, c, N, 1, h - c + 1), this.m_forwardHistory.push(N), (N = new Array(f - d + 2))[0] = w - d + 1, A.Copy(v, d, N, 1, f - d + 1), this.m_reverseHistory.push(N);
        }
      }return this.WALKTRACE(y, c, h, C, w, d, f, T, _, v, s, t, i, u, r, o, k, a);
    }, e.prototype.ShiftChanges = function (e) {
      var t;do {
        t = !1;for (var n = 0; n < e.length; n++) {
          for (var r = e[n], i = n < e.length - 1 ? e[n + 1].originalStart : this.OriginalSequence.getLength(), o = n < e.length - 1 ? e[n + 1].modifiedStart : this.ModifiedSequence.getLength(), a = r.originalLength > 0, s = r.modifiedLength > 0; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < o && (!a || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!s || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength));) {
            r.originalStart++, r.modifiedStart++;
          }
        }var u = new Array(),
            l = [null];for (n = 0; n < e.length; n++) {
          n < e.length - 1 && this.ChangesOverlap(e[n], e[n + 1], l) ? (t = !0, u.push(l[0]), n++) : u.push(e[n]);
        }e = u;
      } while (t);for (n = e.length - 1; n >= 0; n--) {
        r = e[n], i = 0, o = 0;if (n > 0) {
          var c = e[n - 1];c.originalLength > 0 && (i = c.originalStart + c.originalLength), c.modifiedLength > 0 && (o = c.modifiedStart + c.modifiedLength);
        }a = r.originalLength > 0, s = r.modifiedLength > 0;for (var h = 0, d = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength), f = 1;; f++) {
          var p = r.originalStart - f,
              g = r.modifiedStart - f;if (p < i || g < o) break;if (a && !this.OriginalElementsAreEqual(p, p + r.originalLength)) break;if (s && !this.ModifiedElementsAreEqual(g, g + r.modifiedLength)) break;var m = this._boundaryScore(p, r.originalLength, g, r.modifiedLength);m > d && (d = m, h = f);
        }r.originalStart -= h, r.modifiedStart -= h;
      }return e;
    }, e.prototype._OriginalIsBoundary = function (e) {
      if (e <= 0 || e >= this.OriginalSequence.getLength() - 1) return !0;var t = this.OriginalSequence.getElementAtIndex(e);return "string" == typeof t && /^\s*$/.test(t);
    }, e.prototype._OriginalRegionIsBoundary = function (e, t) {
      if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;if (t > 0) {
        var n = e + t;if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0;
      }return !1;
    }, e.prototype._ModifiedIsBoundary = function (e) {
      if (e <= 0 || e >= this.ModifiedSequence.getLength() - 1) return !0;var t = this.ModifiedSequence.getElementAtIndex(e);return "string" == typeof t && /^\s*$/.test(t);
    }, e.prototype._ModifiedRegionIsBoundary = function (e, t) {
      if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;if (t > 0) {
        var n = e + t;if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0;
      }return !1;
    }, e.prototype._boundaryScore = function (e, t, n, r) {
      return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0);
    }, e.prototype.ConcatenateChanges = function (e, t) {
      var n = [],
          r = null;return 0 === e.length || 0 === t.length ? t.length > 0 ? t : e : this.ChangesOverlap(e[e.length - 1], t[0], n) ? (r = new Array(e.length + t.length - 1), A.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], A.Copy(t, 1, r, e.length, t.length - 1), r) : (r = new Array(e.length + t.length), A.Copy(e, 0, r, 0, e.length), A.Copy(t, 0, r, e.length, t.length), r);
    }, e.prototype.ChangesOverlap = function (e, t, n) {
      if (E.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), E.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
        var r = e.originalStart,
            i = e.originalLength,
            o = e.modifiedStart,
            a = e.modifiedLength;return e.originalStart + e.originalLength >= t.originalStart && (i = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (a = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new x(r, i, o, a), !0;
      }return n[0] = null, !1;
    }, e.prototype.ClipDiagonalBound = function (e, t, n, r) {
      if (e >= 0 && e < r) return e;var i = t % 2 == 0;return e < 0 ? i === (n % 2 == 0) ? 0 : 1 : i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2;
    }, e;
  }();String.fromCharCode(65279);var O = 5e3,
      P = 3;function q(e, t, n, r) {
    return new N(e, t, n).ComputeDiff(r);
  }var I = function () {
    function e(t) {
      for (var n = [], r = [], i = 0, o = t.length; i < o; i++) {
        n[i] = e._getFirstNonBlankColumn(t[i], 1), r[i] = e._getLastNonBlankColumn(t[i], 1);
      }this._lines = t, this._startColumns = n, this._endColumns = r;
    }return e.prototype.getLength = function () {
      return this._lines.length;
    }, e.prototype.getElementAtIndex = function (e) {
      return this._lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
    }, e.prototype.getStartLineNumber = function (e) {
      return e + 1;
    }, e.prototype.getEndLineNumber = function (e) {
      return e + 1;
    }, e._getFirstNonBlankColumn = function (e, t) {
      var n = function (e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);if (32 !== r && 9 !== r) return t;
        }return -1;
      }(e);return -1 === n ? t : n + 1;
    }, e._getLastNonBlankColumn = function (e, t) {
      var n = function (e, t) {
        void 0 === t && (t = e.length - 1);for (var n = t; n >= 0; n--) {
          var r = e.charCodeAt(n);if (32 !== r && 9 !== r) return n;
        }return -1;
      }(e);return -1 === n ? t : n + 2;
    }, e.prototype.getCharSequence = function (e, t, n) {
      for (var r = [], i = [], o = [], a = 0, s = t; s <= n; s++) {
        for (var u = this._lines[s], l = e ? this._startColumns[s] : 1, c = e ? this._endColumns[s] : u.length + 1, h = l; h < c; h++) {
          r[a] = u.charCodeAt(h - 1), i[a] = s + 1, o[a] = h, a++;
        }
      }return new D(r, i, o);
    }, e;
  }(),
      D = function () {
    function e(e, t, n) {
      this._charCodes = e, this._lineNumbers = t, this._columns = n;
    }return e.prototype.getLength = function () {
      return this._charCodes.length;
    }, e.prototype.getElementAtIndex = function (e) {
      return this._charCodes[e];
    }, e.prototype.getStartLineNumber = function (e) {
      return this._lineNumbers[e];
    }, e.prototype.getStartColumn = function (e) {
      return this._columns[e];
    }, e.prototype.getEndLineNumber = function (e) {
      return this._lineNumbers[e];
    }, e.prototype.getEndColumn = function (e) {
      return this._columns[e] + 1;
    }, e;
  }(),
      M = function () {
    function e(e, t, n, r, i, o, a, s) {
      this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = r, this.modifiedStartLineNumber = i, this.modifiedStartColumn = o, this.modifiedEndLineNumber = a, this.modifiedEndColumn = s;
    }return e.createFromDiffChange = function (t, n, r) {
      var i, o, a, s, u, l, c, h;return 0 === t.originalLength ? (i = 0, o = 0, a = 0, s = 0) : (i = n.getStartLineNumber(t.originalStart), o = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), s = n.getEndColumn(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (u = 0, l = 0, c = 0, h = 0) : (u = r.getStartLineNumber(t.modifiedStart), l = r.getStartColumn(t.modifiedStart), c = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), h = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)), new e(i, o, a, s, u, l, c, h);
    }, e;
  }();var U = function () {
    function e(e, t, n, r, i) {
      this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = r, this.charChanges = i;
    }return e.createFromDiffResult = function (t, n, r, i, o, a, s) {
      var u, l, c, h, d;if (0 === n.originalLength ? (u = r.getStartLineNumber(n.originalStart) - 1, l = 0) : (u = r.getStartLineNumber(n.originalStart), l = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), 0 === n.modifiedLength ? (c = i.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (c = i.getStartLineNumber(n.modifiedStart), h = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && 0 !== n.originalLength && 0 !== n.modifiedLength && o()) {
        var f = r.getCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1),
            p = i.getCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1),
            g = q(f, p, o, !0);s && (g = function (e) {
          if (e.length <= 1) return e;for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
            var o = e[r],
                a = o.originalStart - (n.originalStart + n.originalLength),
                s = o.modifiedStart - (n.modifiedStart + n.modifiedLength);Math.min(a, s) < P ? (n.originalLength = o.originalStart + o.originalLength - n.originalStart, n.modifiedLength = o.modifiedStart + o.modifiedLength - n.modifiedStart) : (t.push(o), n = o);
          }return t;
        }(g)), d = [];for (var m = 0, b = g.length; m < b; m++) {
          d.push(M.createFromDiffChange(g[m], f, p));
        }
      }return new e(u, l, c, h, d);
    }, e;
  }(),
      R = function () {
    function e(e, t, n) {
      this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.maximumRunTimeMs = O, this.originalLines = e, this.modifiedLines = t, this.original = new I(e), this.modified = new I(t);
    }return e.prototype.computeDiff = function () {
      if (1 === this.original.getLength() && 0 === this.original.getElementAtIndex(0).length) return [{ originalStartLineNumber: 1, originalEndLineNumber: 1, modifiedStartLineNumber: 1, modifiedEndLineNumber: this.modified.getLength(), charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }];if (1 === this.modified.getLength() && 0 === this.modified.getElementAtIndex(0).length) return [{ originalStartLineNumber: 1, originalEndLineNumber: this.original.getLength(), modifiedStartLineNumber: 1, modifiedEndLineNumber: 1, charChanges: [{ modifiedEndColumn: 0, modifiedEndLineNumber: 0, modifiedStartColumn: 0, modifiedStartLineNumber: 0, originalEndColumn: 0, originalEndLineNumber: 0, originalStartColumn: 0, originalStartLineNumber: 0 }] }];this.computationStartTime = new Date().getTime();var e = q(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);if (this.shouldIgnoreTrimWhitespace) {
        for (var t = [], n = 0, r = e.length; n < r; n++) {
          t.push(U.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[n], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        }return t;
      }for (var i = [], o = 0, a = 0, s = (n = -1, e.length); n < s; n++) {
        for (var u = n + 1 < s ? e[n + 1] : null, l = u ? u.originalStart : this.originalLines.length, c = u ? u.modifiedStart : this.modifiedLines.length; o < l && a < c;) {
          var h = this.originalLines[o],
              d = this.modifiedLines[a];if (h !== d) {
            for (var f = I._getFirstNonBlankColumn(h, 1), p = I._getFirstNonBlankColumn(d, 1); f > 1 && p > 1;) {
              if (h.charCodeAt(f - 2) !== d.charCodeAt(p - 2)) break;f--, p--;
            }(f > 1 || p > 1) && this._pushTrimWhitespaceCharChange(i, o + 1, 1, f, a + 1, 1, p);for (var g = I._getLastNonBlankColumn(h, 1), m = I._getLastNonBlankColumn(d, 1), b = h.length + 1, _ = d.length + 1; g < b && m < _;) {
              if (h.charCodeAt(g - 1) !== h.charCodeAt(m - 1)) break;g++, m++;
            }(g < b || m < _) && this._pushTrimWhitespaceCharChange(i, o + 1, g, b, a + 1, m, _);
          }o++, a++;
        }u && (i.push(U.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), o += u.originalLength, a += u.modifiedLength);
      }return i;
    }, e.prototype._pushTrimWhitespaceCharChange = function (e, t, n, r, i, o, a) {
      var s;this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, a) || (this.shouldComputeCharChanges && (s = [new M(t, n, t, r, i, o, i, a)]), e.push(new U(t, t, i, i, s)));
    }, e.prototype._mergeTrimWhitespaceCharChange = function (e, t, n, r, i, o, a) {
      var s = e.length;if (0 === s) return !1;var u = e[s - 1];return 0 !== u.originalEndLineNumber && 0 !== u.modifiedEndLineNumber && u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === i && (u.originalEndLineNumber = t, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges.push(new M(t, n, t, r, i, o, i, a)), !0);
    }, e.prototype._continueProcessingPredicate = function () {
      return 0 === this.maximumRunTimeMs || new Date().getTime() - this.computationStartTime < this.maximumRunTimeMs;
    }, e;
  }(),
      V = function () {
    function e(e, t, n) {
      for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++) {
        r[i] = n;
      }this._data = r, this.rows = e, this.cols = t;
    }return e.prototype.get = function (e, t) {
      return this._data[e * this.cols + t];
    }, e.prototype.set = function (e, t, n) {
      this._data[e * this.cols + t] = n;
    }, e;
  }();function W(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }function j(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }var B = function () {
    return function (e, t) {
      this.index = e, this.remainder = t;
    };
  }(),
      K = function () {
    function e(e) {
      this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }return e.prototype.getCount = function () {
      return this.values.length;
    }, e.prototype.insertValues = function (e, t) {
      e = j(e);var n = this.values,
          r = this.prefixSum,
          i = t.length;return 0 !== i && (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.changeValue = function (e, t) {
      return e = j(e), t = j(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
    }, e.prototype.removeValues = function (e, t) {
      e = j(e), t = j(t);var n = this.values,
          r = this.prefixSum;if (e >= n.length) return !1;var i = n.length - e;return t >= i && (t = i), 0 !== t && (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.getTotalValue = function () {
      return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1);
    }, e.prototype.getAccumulatedValue = function (e) {
      return e < 0 ? 0 : (e = j(e), this._getAccumulatedValue(e));
    }, e.prototype._getAccumulatedValue = function (e) {
      if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];var t = this.prefixSumValidIndex[0] + 1;0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);for (var n = t; n <= e; n++) {
        this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
      }return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
    }, e.prototype.getIndexOf = function (e) {
      e = Math.floor(e), this.getTotalValue();for (var t, n, r, i = 0, o = this.values.length - 1; i <= o;) {
        if (t = i + (o - i) / 2 | 0, e < (r = (n = this.prefixSum[t]) - this.values[t])) o = t - 1;else {
          if (!(e >= n)) break;i = t + 1;
        }
      }return new B(t, e - r);
    }, e;
  }(),
      F = (function () {
    function e(e) {
      this._cacheAccumulatedValueStart = 0, this._cache = null, this._actual = new K(e), this._bustCache();
    }e.prototype._bustCache = function () {
      this._cacheAccumulatedValueStart = 0, this._cache = null;
    }, e.prototype.insertValues = function (e, t) {
      this._actual.insertValues(e, t) && this._bustCache();
    }, e.prototype.changeValue = function (e, t) {
      this._actual.changeValue(e, t) && this._bustCache();
    }, e.prototype.removeValues = function (e, t) {
      this._actual.removeValues(e, t) && this._bustCache();
    }, e.prototype.getTotalValue = function () {
      return this._actual.getTotalValue();
    }, e.prototype.getAccumulatedValue = function (e) {
      return this._actual.getAccumulatedValue(e);
    }, e.prototype.getIndexOf = function (e) {
      if (e = Math.floor(e), null !== this._cache) {
        var t = e - this._cacheAccumulatedValueStart;if (t >= 0 && t < this._cache.length) return this._cache[t];
      }return this._actual.getIndexOf(e);
    }, e.prototype.warmUpCache = function (e, t) {
      for (var n = [], r = e; r <= t; r++) {
        n[r - e] = this.getIndexOf(r);
      }this._cache = n, this._cacheAccumulatedValueStart = e;
    };
  }(), function () {
    function e(e, t, n, r) {
      this._uri = e, this._lines = t, this._eol = n, this._versionId = r;
    }return e.prototype.dispose = function () {
      this._lines.length = 0;
    }, e.prototype.getText = function () {
      return this._lines.join(this._eol);
    }, e.prototype.onEvents = function (e) {
      e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);for (var t = e.changes, n = 0, r = t.length; n < r; n++) {
        var i = t[n];this._acceptDeleteRange(i.range), this._acceptInsertText(new C(i.range.startLineNumber, i.range.startColumn), i.text);
      }this._versionId = e.versionId;
    }, e.prototype._ensureLineStarts = function () {
      if (!this._lineStarts) {
        for (var e = this._eol.length, t = this._lines.length, n = new Uint32Array(t), r = 0; r < t; r++) {
          n[r] = this._lines[r].length + e;
        }this._lineStarts = new K(n);
      }
    }, e.prototype._setLineText = function (e, t) {
      this._lines[e] = t, this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length);
    }, e.prototype._acceptDeleteRange = function (e) {
      if (e.startLineNumber !== e.endLineNumber) this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);else {
        if (e.startColumn === e.endColumn) return;this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
      }
    }, e.prototype._acceptInsertText = function (e, t) {
      if (0 !== t.length) {
        var n = t.split(/\r\n|\r|\n/);if (1 !== n.length) {
          n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++) {
            this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
          }this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
        } else this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
      }
    }, e;
  }()),
      H = function () {
    function e(t) {
      var n = W(t);this._defaultValue = n, this._asciiMap = e._createAsciiMap(n), this._map = new Map();
    }return e._createAsciiMap = function (e) {
      for (var t = new Uint8Array(256), n = 0; n < 256; n++) {
        t[n] = e;
      }return t;
    }, e.prototype.set = function (e, t) {
      var n = W(t);e >= 0 && e < 256 ? this._asciiMap[e] = n : this._map.set(e, n);
    }, e.prototype.get = function (e) {
      return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
    }, e;
  }(),
      Y = (function () {
    function e() {
      this._actual = new H(0);
    }e.prototype.add = function (e) {
      this._actual.set(e, 1);
    }, e.prototype.has = function (e) {
      return 1 === this._actual.get(e);
    };
  }(), function () {
    function e(e) {
      for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) {
        var o = e[r],
            a = o[0],
            s = o[1],
            u = o[2];s > t && (t = s), a > n && (n = a), u > n && (n = u);
      }var l = new V(++n, ++t, 0);for (r = 0, i = e.length; r < i; r++) {
        var c = e[r];a = c[0], s = c[1], u = c[2];l.set(a, s, u);
      }this._states = l, this._maxCharCode = t;
    }return e.prototype.nextState = function (e, t) {
      return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
    }, e;
  }()),
      z = null;var G = null;var J = function () {
    function e() {}return e._createLink = function (e, t, n, r, i) {
      var o = i - 1;do {
        var a = t.charCodeAt(o);if (2 !== e.get(a)) break;o--;
      } while (o > r);if (r > 0) {
        var s = t.charCodeAt(r - 1),
            u = t.charCodeAt(o);(40 === s && 41 === u || 91 === s && 93 === u || 123 === s && 125 === u) && o--;
      }return { range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 }, url: t.substring(r, o + 1) };
    }, e.computeLinks = function (t) {
      for (var n = (null === z && (z = new Y([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), z), r = function () {
        if (null === G) {
          G = new H(0);for (var e = 0; e < " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".length; e++) {
            G.set(" \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".charCodeAt(e), 1);
          }for (e = 0; e < ".,;".length; e++) {
            G.set(".,;".charCodeAt(e), 2);
          }
        }return G;
      }(), i = [], o = 1, a = t.getLineCount(); o <= a; o++) {
        for (var s = t.getLineContent(o), u = s.length, l = 0, c = 0, h = 0, d = 1, f = !1, p = !1, g = !1; l < u;) {
          var m = !1,
              b = s.charCodeAt(l);if (13 === d) {
            var _ = void 0;switch (b) {case 40:
                f = !0, _ = 0;break;case 41:
                _ = f ? 0 : 1;break;case 91:
                p = !0, _ = 0;break;case 93:
                _ = p ? 0 : 1;break;case 123:
                g = !0, _ = 0;break;case 125:
                _ = g ? 0 : 1;break;case 39:
                _ = 34 === h || 96 === h ? 0 : 1;break;case 34:
                _ = 39 === h || 96 === h ? 0 : 1;break;case 96:
                _ = 39 === h || 34 === h ? 0 : 1;break;default:
                _ = r.get(b);}1 === _ && (i.push(e._createLink(r, s, o, c, l)), m = !0);
          } else if (12 === d) {
            1 === (_ = r.get(b)) ? m = !0 : d = 13;
          } else 0 === (d = n.nextState(d, b)) && (m = !0);m && (d = 1, f = !1, p = !1, g = !1, c = l + 1, h = b), l++;
        }13 === d && i.push(e._createLink(r, s, o, c, u));
      }return i;
    }, e;
  }();var $ = function () {
    function e() {
      this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]];
    }return e.prototype.navigateValueSet = function (e, t, n, r, i) {
      var o;if (e && t && (o = this.doNavigateValueSet(t, i))) return { range: e, value: o };if (n && r && (o = this.doNavigateValueSet(r, i))) return { range: n, value: o };return null;
    }, e.prototype.doNavigateValueSet = function (e, t) {
      var n = this.numberReplace(e, t);return null !== n ? n : this.textReplace(e, t);
    }, e.prototype.numberReplace = function (e, t) {
      var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)),
          r = Number(e),
          i = parseFloat(e);return isNaN(r) || isNaN(i) || r !== i ? null : 0 !== r || t ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null;
    }, e.prototype.textReplace = function (e, t) {
      return this.valueSetsReplace(this._defaultValueSet, e, t);
    }, e.prototype.valueSetsReplace = function (e, t, n) {
      for (var r = null, i = 0, o = e.length; null === r && i < o; i++) {
        r = this.valueSetReplace(e[i], t, n);
      }return r;
    }, e.prototype.valueSetReplace = function (e, t, n) {
      var r = e.indexOf(t);return r >= 0 ? ((r += n ? 1 : -1) < 0 ? r = e.length - 1 : r %= e.length, e[r]) : null;
    }, e.INSTANCE = new e(), e;
  }(),
      Q = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";var Z = function (e) {
    void 0 === e && (e = "");for (var t = "(-?\\d*\\.\\d\\w*)|([^", n = 0; n < Q.length; n++) {
      e.indexOf(Q[n]) >= 0 || (t += "\\" + Q[n]);
    }return t += "\\s]+)", new RegExp(t, "g");
  }();var X = {};w.a.addEventListener("error", function (e) {
    var t = e.detail,
        n = t.id;t.parent ? t.handler && X && delete X[n] : (X[n] = t, 1 === Object.keys(X).length && setTimeout(function () {
      var e = X;X = {}, Object.keys(e).forEach(function (t) {
        var n = e[t];n.exception ? te(n.exception) : n.error && te(n.error), console.log("WARNING: Promise with no error callback:" + n.id), console.log(n), n.exception && console.log(n.exception.stack);
      });
    }, 0));
  });var ee = new (function () {
    function e() {
      this.listeners = [], this.unexpectedErrorHandler = function (e) {
        setTimeout(function () {
          if (e.stack) throw new Error(e.message + "\n\n" + e.stack);throw e;
        }, 0);
      };
    }return e.prototype.emit = function (e) {
      this.listeners.forEach(function (t) {
        t(e);
      });
    }, e.prototype.onUnexpectedError = function (e) {
      this.unexpectedErrorHandler(e), this.emit(e);
    }, e.prototype.onUnexpectedExternalError = function (e) {
      this.unexpectedErrorHandler(e);
    }, e;
  }())();function te(e) {
    ie(e) || ee.onUnexpectedError(e);
  }function ne(e) {
    return e instanceof Error ? { $isError: !0, name: e.name, message: e.message, stack: e.stacktrace || e.stack } : e;
  }var re = "Canceled";function ie(e) {
    return e instanceof Error && e.name === re && e.message === re;
  }function oe() {
    var e = new Error(re);return e.name = e.message, e;
  }function ae(e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }return Array.isArray(e) ? (e.forEach(function (e) {
      return e && e.dispose();
    }), []) : 0 === t.length ? e ? (e.dispose(), e) : void 0 : (ae(e), ae(t), []);
  }var se,
      ue = function () {
    function e() {
      this._toDispose = [];
    }return Object.defineProperty(e.prototype, "toDispose", { get: function get() {
        return this._toDispose;
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this._toDispose = ae(this._toDispose);
    }, e.prototype._register = function (e) {
      return this._toDispose.push(e), e;
    }, e.None = Object.freeze({ dispose: function dispose() {} }), e;
  }(),
      le = (function () {
    function e(e) {
      this.object = e;
    }e.prototype.dispose = function () {};
  }(), function () {
    return function (e) {
      this.element = e;
    };
  }()),
      ce = function () {
    function e() {}return e.prototype.isEmpty = function () {
      return !this._first;
    }, e.prototype.unshift = function (e) {
      return this.insert(e, !1);
    }, e.prototype.push = function (e) {
      return this.insert(e, !0);
    }, e.prototype.insert = function (e, t) {
      var n = this,
          r = new le(e);if (this._first) {
        if (t) {
          var i = this._last;this._last = r, r.prev = i, i.next = r;
        } else {
          var o = this._first;this._first = r, r.next = o, o.prev = r;
        }
      } else this._first = r, this._last = r;return function () {
        for (var e = n._first; e instanceof le; e = e.next) {
          if (e === r) {
            if (e.prev && e.next) {
              var t = e.prev;t.next = e.next, e.next.prev = t;
            } else e.prev || e.next ? e.next ? e.prev || (n._first = n._first.next, n._first.prev = void 0) : (n._last = n._last.prev, n._last.next = void 0) : (n._first = void 0, n._last = void 0);break;
          }
        }
      };
    }, e.prototype.iterator = function () {
      var e = { done: void 0, value: void 0 },
          t = this._first;return { next: function next() {
          return t ? (e.done = !1, e.value = t.element, t = t.next) : (e.done = !0, e.value = void 0), e;
        } };
    }, e;
  }();!function (e) {
    var t = { dispose: function dispose() {} };e.None = function () {
      return t;
    };
  }(se || (se = {}));var he = function () {
    function e(e) {
      this._options = e;
    }return Object.defineProperty(e.prototype, "event", { get: function get() {
        var t = this;return this._event || (this._event = function (n, r, i) {
          t._listeners || (t._listeners = new ce());var o = t._listeners.isEmpty();o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);var a,
              s = t._listeners.push(r ? [n, r] : n);return o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r), a = { dispose: function dispose() {
              a.dispose = e._noop, t._disposed || (s(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t));
            } }, Array.isArray(i) && i.push(a), a;
        }), this._event;
      }, enumerable: !0, configurable: !0 }), e.prototype.fire = function (e) {
      if (this._listeners) {
        this._deliveryQueue || (this._deliveryQueue = []);for (var t = this._listeners.iterator(), n = t.next(); !n.done; n = t.next()) {
          this._deliveryQueue.push([n.value, e]);
        }for (; this._deliveryQueue.length > 0;) {
          var r = this._deliveryQueue.shift(),
              i = r[0],
              o = r[1];try {
            "function" == typeof i ? i.call(void 0, o) : i[0].call(i[1], o);
          } catch (n) {
            te(n);
          }
        }
      }
    }, e.prototype.dispose = function () {
      this._listeners && (this._listeners = void 0), this._deliveryQueue && (this._deliveryQueue.length = 0), this._disposed = !0;
    }, e._noop = function () {}, e;
  }();!function () {
    function e() {
      var e = this;this.hasListeners = !1, this.events = [], this.emitter = new he({ onFirstListenerAdd: function onFirstListenerAdd() {
          return e.onFirstListenerAdd();
        }, onLastListenerRemove: function onLastListenerRemove() {
          return e.onLastListenerRemove();
        } });
    }Object.defineProperty(e.prototype, "event", { get: function get() {
        return this.emitter.event;
      }, enumerable: !0, configurable: !0 }), e.prototype.add = function (e) {
      var t = this,
          n = { event: e, listener: null };this.events.push(n), this.hasListeners && this.hook(n);var r;return r = function (e) {
        var t,
            n = this,
            r = !1;return function () {
          return r ? t : (r = !0, t = e.apply(n, arguments));
        };
      }(function () {
        t.hasListeners && t.unhook(n);var e = t.events.indexOf(n);t.events.splice(e, 1);
      }), { dispose: function dispose() {
          r();
        } };
    }, e.prototype.onFirstListenerAdd = function () {
      var e = this;this.hasListeners = !0, this.events.forEach(function (t) {
        return e.hook(t);
      });
    }, e.prototype.onLastListenerRemove = function () {
      var e = this;this.hasListeners = !1, this.events.forEach(function (t) {
        return e.unhook(t);
      });
    }, e.prototype.hook = function (e) {
      var t = this;e.listener = e.event(function (e) {
        return t.emitter.fire(e);
      });
    }, e.prototype.unhook = function (e) {
      e.listener.dispose(), e.listener = null;
    }, e.prototype.dispose = function () {
      this.emitter.dispose();
    };
  }();!function () {
    function e() {
      this.buffers = [];
    }e.prototype.wrapEvent = function (e) {
      var t = this;return function (n, r, i) {
        return e(function (e) {
          var i = t.buffers[t.buffers.length - 1];i ? i.push(function () {
            return n.call(r, e);
          }) : n.call(r, e);
        }, void 0, i);
      };
    }, e.prototype.bufferEvents = function (e) {
      var t = [];this.buffers.push(t), e(), this.buffers.pop(), t.forEach(function (e) {
        return e();
      });
    };
  }();!function () {
    function e(e) {
      this._event = e;
    }Object.defineProperty(e.prototype, "event", { get: function get() {
        return this._event;
      }, enumerable: !0, configurable: !0 }), e.prototype.map = function (t) {
      return new e((n = this._event, r = t, function (e, t, i) {
        return void 0 === t && (t = null), n(function (n) {
          return e.call(t, r(n));
        }, null, i);
      }));var n, r;
    }, e.prototype.filter = function (t) {
      return new e((n = this._event, r = t, function (e, t, i) {
        return void 0 === t && (t = null), n(function (n) {
          return r(n) && e.call(t, n);
        }, null, i);
      }));var n, r;
    }, e.prototype.on = function (e, t, n) {
      return this._event(e, t, n);
    };
  }();!function () {
    function e() {
      this.emitter = new he(), this.event = this.emitter.event, this.disposable = ue.None;
    }Object.defineProperty(e.prototype, "input", { set: function set(e) {
        this.disposable.dispose(), this.disposable = e(this.emitter.fire, this.emitter);
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this.disposable.dispose(), this.emitter.dispose();
    };
  }();var de,
      fe = function () {
    function e() {
      this._keyCodeToStr = [], this._strToKeyCode = Object.create(null);
    }return e.prototype.define = function (e, t) {
      this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
    }, e.prototype.keyCodeToStr = function (e) {
      return this._keyCodeToStr[e];
    }, e.prototype.strToKeyCode = function (e) {
      return this._strToKeyCode[e.toLowerCase()] || 0;
    }, e;
  }(),
      pe = new fe(),
      ge = new fe(),
      me = new fe();!function () {
    function e(e, t, n, r) {
      void 0 === n && (n = t), void 0 === r && (r = n), pe.define(e, t), ge.define(e, n), me.define(e, r);
    }e(0, "unknown"), e(1, "Backspace"), e(2, "Tab"), e(3, "Enter"), e(4, "Shift"), e(5, "Ctrl"), e(6, "Alt"), e(7, "PauseBreak"), e(8, "CapsLock"), e(9, "Escape"), e(10, "Space"), e(11, "PageUp"), e(12, "PageDown"), e(13, "End"), e(14, "Home"), e(15, "LeftArrow", "Left"), e(16, "UpArrow", "Up"), e(17, "RightArrow", "Right"), e(18, "DownArrow", "Down"), e(19, "Insert"), e(20, "Delete"), e(21, "0"), e(22, "1"), e(23, "2"), e(24, "3"), e(25, "4"), e(26, "5"), e(27, "6"), e(28, "7"), e(29, "8"), e(30, "9"), e(31, "A"), e(32, "B"), e(33, "C"), e(34, "D"), e(35, "E"), e(36, "F"), e(37, "G"), e(38, "H"), e(39, "I"), e(40, "J"), e(41, "K"), e(42, "L"), e(43, "M"), e(44, "N"), e(45, "O"), e(46, "P"), e(47, "Q"), e(48, "R"), e(49, "S"), e(50, "T"), e(51, "U"), e(52, "V"), e(53, "W"), e(54, "X"), e(55, "Y"), e(56, "Z"), e(57, "Meta"), e(58, "ContextMenu"), e(59, "F1"), e(60, "F2"), e(61, "F3"), e(62, "F4"), e(63, "F5"), e(64, "F6"), e(65, "F7"), e(66, "F8"), e(67, "F9"), e(68, "F10"), e(69, "F11"), e(70, "F12"), e(71, "F13"), e(72, "F14"), e(73, "F15"), e(74, "F16"), e(75, "F17"), e(76, "F18"), e(77, "F19"), e(78, "NumLock"), e(79, "ScrollLock"), e(80, ";", ";", "OEM_1"), e(81, "=", "=", "OEM_PLUS"), e(82, ",", ",", "OEM_COMMA"), e(83, "-", "-", "OEM_MINUS"), e(84, ".", ".", "OEM_PERIOD"), e(85, "/", "/", "OEM_2"), e(86, "`", "`", "OEM_3"), e(110, "ABNT_C1"), e(111, "ABNT_C2"), e(87, "[", "[", "OEM_4"), e(88, "\\", "\\", "OEM_5"), e(89, "]", "]", "OEM_6"), e(90, "'", "'", "OEM_7"), e(91, "OEM_8"), e(92, "OEM_102"), e(93, "NumPad0"), e(94, "NumPad1"), e(95, "NumPad2"), e(96, "NumPad3"), e(97, "NumPad4"), e(98, "NumPad5"), e(99, "NumPad6"), e(100, "NumPad7"), e(101, "NumPad8"), e(102, "NumPad9"), e(103, "NumPad_Multiply"), e(104, "NumPad_Add"), e(105, "NumPad_Separator"), e(106, "NumPad_Subtract"), e(107, "NumPad_Decimal"), e(108, "NumPad_Divide");
  }(), function (e) {
    e.toString = function (e) {
      return pe.keyCodeToStr(e);
    }, e.fromString = function (e) {
      return pe.strToKeyCode(e);
    }, e.toUserSettingsUS = function (e) {
      return ge.keyCodeToStr(e);
    }, e.toUserSettingsGeneral = function (e) {
      return me.keyCodeToStr(e);
    }, e.fromUserSettings = function (e) {
      return ge.strToKeyCode(e) || me.strToKeyCode(e);
    };
  }(de || (de = {}));!function () {
    function e(e, t, n, r, i) {
      this.type = 1, this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.metaKey = r, this.keyCode = i;
    }e.prototype.equals = function (e) {
      return 1 === e.type && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode;
    }, e.prototype.isModifierKey = function () {
      return 0 === this.keyCode || 5 === this.keyCode || 57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode;
    }, e.prototype.isDuplicateModifierCase = function () {
      return this.ctrlKey && 5 === this.keyCode || this.shiftKey && 4 === this.keyCode || this.altKey && 6 === this.keyCode || this.metaKey && 57 === this.keyCode;
    };
  }();var be,
      _e = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }();!function (e) {
    e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
  }(be || (be = {}));var ve,
      ye,
      we = function (e) {
    function t(t, n, r, i) {
      var o = e.call(this, t, n, r, i) || this;return o.selectionStartLineNumber = t, o.selectionStartColumn = n, o.positionLineNumber = r, o.positionColumn = i, o;
    }return _e(t, e), t.prototype.clone = function () {
      return new t(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    }, t.prototype.toString = function () {
      return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }, t.prototype.equalsSelection = function (e) {
      return t.selectionsEqual(this, e);
    }, t.selectionsEqual = function (e, t) {
      return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn;
    }, t.prototype.getDirection = function () {
      return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? be.LTR : be.RTL;
    }, t.prototype.setEndPosition = function (e, n) {
      return this.getDirection() === be.LTR ? new t(this.startLineNumber, this.startColumn, e, n) : new t(e, n, this.startLineNumber, this.startColumn);
    }, t.prototype.getPosition = function () {
      return new C(this.positionLineNumber, this.positionColumn);
    }, t.prototype.setStartPosition = function (e, n) {
      return this.getDirection() === be.LTR ? new t(e, n, this.endLineNumber, this.endColumn) : new t(this.endLineNumber, this.endColumn, e, n);
    }, t.fromPositions = function (e, n) {
      return void 0 === n && (n = e), new t(e.lineNumber, e.column, n.lineNumber, n.column);
    }, t.liftSelection = function (e) {
      return new t(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
    }, t.selectionsArrEqual = function (e, t) {
      if (e && !t || !e && t) return !1;if (!e && !t) return !0;if (e.length !== t.length) return !1;for (var n = 0, r = e.length; n < r; n++) {
        if (!this.selectionsEqual(e[n], t[n])) return !1;
      }return !0;
    }, t.isISelection = function (e) {
      return e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn;
    }, t.createWithDirection = function (e, n, r, i, o) {
      return o === be.LTR ? new t(e, n, r, i) : new t(r, i, e, n);
    }, t;
  }(T),
      Ce = Object.freeze(function (e, t) {
    var n = setTimeout(e.bind(t), 0);return { dispose: function dispose() {
        clearTimeout(n);
      } };
  });(ye = ve || (ve = {})).None = Object.freeze({ isCancellationRequested: !1, onCancellationRequested: se.None }), ye.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: Ce });var Te,
      xe,
      ke = function () {
    function e() {
      this._isCancelled = !1;
    }return e.prototype.cancel = function () {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }, Object.defineProperty(e.prototype, "isCancellationRequested", { get: function get() {
        return this._isCancelled;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "onCancellationRequested", { get: function get() {
        return this._isCancelled ? Ce : (this._emitter || (this._emitter = new he()), this._emitter.event);
      }, enumerable: !0, configurable: !0 }), e.prototype.dispose = function () {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }, e;
  }(),
      Se = function () {
    function e() {}return Object.defineProperty(e.prototype, "token", { get: function get() {
        return this._token || (this._token = new ke()), this._token;
      }, enumerable: !0, configurable: !0 }), e.prototype.cancel = function () {
      this._token ? this._token instanceof ke && this._token.cancel() : this._token = ve.Cancelled;
    }, e.prototype.dispose = function () {
      this._token ? this._token instanceof ke && this._token.dispose() : this._token = ve.None;
    }, e;
  }(),
      Ee = function () {
    function e(e, t, n) {
      this.offset = 0 | e, this.type = t, this.language = n;
    }return e.prototype.toString = function () {
      return "(" + this.offset + ", " + this.type + ")";
    }, e;
  }();!function (e) {
    e[e.Unnecessary = 1] = "Unnecessary";
  }(Te || (Te = {})), function (e) {
    e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
  }(xe || (xe = {}));var Ae,
      Le = function () {
    function e() {}return e.chord = function (e, t) {
      return function (e, t) {
        return (e | (65535 & t) << 16 >>> 0) >>> 0;
      }(e, t);
    }, e.CtrlCmd = 2048, e.Shift = 1024, e.Alt = 512, e.WinCtrl = 256, e;
  }();!function (e) {
    e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7", e[e.NUMPAD_8 = 101] = "NUMPAD_8", e[e.NUMPAD_9 = 102] = "NUMPAD_9", e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY", e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD", e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR", e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT", e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL", e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE", e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 110] = "ABNT_C1", e[e.ABNT_C2 = 111] = "ABNT_C2", e[e.MAX_VALUE = 112] = "MAX_VALUE";
  }(Ae || (Ae = {}));var Ne = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      Oe = function (e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }return Ne(t, e), Object.defineProperty(t.prototype, "uri", { get: function get() {
        return this._uri;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "version", { get: function get() {
        return this._versionId;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "eol", { get: function get() {
        return this._eol;
      }, enumerable: !0, configurable: !0 }), t.prototype.getValue = function () {
      return this.getText();
    }, t.prototype.getLinesContent = function () {
      return this._lines.slice(0);
    }, t.prototype.getLineCount = function () {
      return this._lines.length;
    }, t.prototype.getLineContent = function (e) {
      return this._lines[e - 1];
    }, t.prototype.getWordAtPosition = function (e, t) {
      var n = function (e, t, n, r) {
        t.lastIndex = 0;var i = t.exec(n);if (!i) return null;var o = i[0].indexOf(" ") >= 0 ? function (e, t, n, r) {
          var i,
              o = e - 1 - r;for (t.lastIndex = 0; i = t.exec(n);) {
            if (i.index > o) return null;if (t.lastIndex >= o) return { word: i[0], startColumn: r + 1 + i.index, endColumn: r + 1 + t.lastIndex };
          }return null;
        }(e, t, n, r) : function (e, t, n, r) {
          var i,
              o = e - 1 - r,
              a = n.lastIndexOf(" ", o - 1) + 1,
              s = n.indexOf(" ", o);for (-1 === s && (s = n.length), t.lastIndex = a; i = t.exec(n);) {
            if (i.index <= o && t.lastIndex >= o) return { word: i[0], startColumn: r + 1 + i.index, endColumn: r + 1 + t.lastIndex };
          }return null;
        }(e, t, n, r);return t.lastIndex = 0, o;
      }(e.column, function (e) {
        var t = Z;if (e && e instanceof RegExp) if (e.global) t = e;else {
          var n = "g";e.ignoreCase && (n += "i"), e.multiline && (n += "m"), t = new RegExp(e.source, n);
        }return t.lastIndex = 0, t;
      }(t), this._lines[e.lineNumber - 1], 0);return n ? new T(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
    }, t.prototype.getWordUntilPosition = function (e, t) {
      var n = this.getWordAtPosition(e, t);return n ? { word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1), startColumn: n.startColumn, endColumn: e.column } : { word: "", startColumn: e.column, endColumn: e.column };
    }, t.prototype.createWordIterator = function (e) {
      var t,
          n = this,
          r = { done: !1, value: "" },
          i = 0,
          o = 0,
          a = [],
          s = function s() {
        if (o < a.length) r.done = !1, r.value = t.substring(a[o].start, a[o].end), o += 1;else {
          if (!(i >= n._lines.length)) return t = n._lines[i], a = n._wordenize(t, e), o = 0, i += 1, s();r.done = !0, r.value = void 0;
        }return r;
      };return { next: s };
    }, t.prototype._wordenize = function (e, t) {
      var n,
          r = [];for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length;) {
        r.push({ start: n.index, end: n.index + n[0].length });
      }return r;
    }, t.prototype.getValueInRange = function (e) {
      if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);var t = this._eol,
          n = e.startLineNumber - 1,
          r = e.endLineNumber - 1,
          i = [];i.push(this._lines[n].substring(e.startColumn - 1));for (var o = n + 1; o < r; o++) {
        i.push(this._lines[o]);
      }return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t);
    }, t.prototype.offsetAt = function (e) {
      return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1);
    }, t.prototype.positionAt = function (e) {
      e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();var t = this._lineStarts.getIndexOf(e),
          n = this._lines[t.index].length;return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
    }, t.prototype._validateRange = function (e) {
      var t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }),
          n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn });return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? { startLineNumber: t.lineNumber, startColumn: t.column, endLineNumber: n.lineNumber, endColumn: n.column } : e;
    }, t.prototype._validatePosition = function (e) {
      if (!C.isIPosition(e)) throw new Error("bad position");var t = e.lineNumber,
          n = e.column,
          r = !1;if (t < 1) t = 1, n = 1, r = !0;else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;else {
        var i = this._lines[t - 1].length + 1;n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
      }return r ? { lineNumber: t, column: n } : e;
    }, t;
  }(F),
      Pe = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;return n._models = Object.create(null), n;
    }return Ne(t, e), t.prototype.dispose = function () {
      this._models = Object.create(null);
    }, t.prototype._getModel = function (e) {
      return this._models[e];
    }, t.prototype._getModels = function () {
      var e = this,
          t = [];return Object.keys(this._models).forEach(function (n) {
        return t.push(e._models[n]);
      }), t;
    }, t.prototype.acceptNewModel = function (e) {
      this._models[e.url] = new Oe(p.parse(e.url), e.lines, e.EOL, e.versionId);
    }, t.prototype.acceptModelChanged = function (e, t) {
      this._models[e] && this._models[e].onEvents(t);
    }, t.prototype.acceptRemovedModel = function (e) {
      this._models[e] && delete this._models[e];
    }, t;
  }(function () {
    function e(e) {
      this._foreignModuleFactory = e, this._foreignModule = null;
    }return e.prototype.computeDiff = function (e, t, n) {
      var r = this._getModel(e),
          i = this._getModel(t);if (!r || !i) return null;var o = r.getLinesContent(),
          a = i.getLinesContent(),
          s = new R(o, a, { shouldComputeCharChanges: !0, shouldPostProcessCharChanges: !0, shouldIgnoreTrimWhitespace: n, shouldMakePrettyDiff: !0 });return w.a.as(s.computeDiff());
    }, e.prototype.computeMoreMinimalEdits = function (t, n) {
      var r = this._getModel(t);if (!r) return w.a.as(n);for (var i, o = [], a = 0, s = n; a < s.length; a++) {
        var u = s[a],
            l = u.range,
            c = u.text,
            h = u.eol;if ("number" == typeof h && (i = h), l) {
          var d = r.getValueInRange(l);if (d !== (c = c.replace(/\r\n|\n|\r/g, r.eol))) if (Math.max(c.length, d.length) > e._diffLimit) o.push({ range: l, text: c });else for (var f = S(d, c, !1), p = r.offsetAt(T.lift(l).getStartPosition()), g = 0, m = f; g < m.length; g++) {
            var b = m[g],
                _ = r.positionAt(p + b.originalStart),
                v = r.positionAt(p + b.originalStart + b.originalLength),
                y = { text: c.substr(b.modifiedStart, b.modifiedLength), range: { startLineNumber: _.lineNumber, startColumn: _.column, endLineNumber: v.lineNumber, endColumn: v.column } };r.getValueInRange(y.range) !== y.text && o.push(y);
          }
        }
      }return "number" == typeof i && o.push({ eol: i, text: void 0, range: void 0 }), w.a.as(o);
    }, e.prototype.computeLinks = function (e) {
      var t = this._getModel(e);return t ? w.a.as(function (e) {
        return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? J.computeLinks(e) : [];
      }(t)) : null;
    }, e.prototype.textualSuggest = function (t, n, r, i) {
      var o = this._getModel(t);if (o) {
        var a = [],
            s = new RegExp(r, i),
            u = o.getWordUntilPosition(n, s).word,
            l = Object.create(null);l[u] = !0;for (var c = o.createWordIterator(s), h = c.next(); !h.done && a.length <= e._suggestionsLimit; h = c.next()) {
          var d = h.value;l[d] || (l[d] = !0, isNaN(Number(d)) && a.push({ type: "text", label: d, insertText: d, noAutoAccept: !0, overwriteBefore: u.length }));
        }return w.a.as({ suggestions: a });
      }
    }, e.prototype.navigateValueSet = function (e, t, n, r, i) {
      var o = this._getModel(e);if (!o) return null;var a = new RegExp(r, i);t.startColumn === t.endColumn && (t = { startLineNumber: t.startLineNumber, startColumn: t.startColumn, endLineNumber: t.endLineNumber, endColumn: t.endColumn + 1 });var s = o.getValueInRange(t),
          u = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, a),
          l = null;null !== u && (l = o.getValueInRange(u));var c = $.INSTANCE.navigateValueSet(t, s, u, l, n);return w.a.as(c);
    }, e.prototype.loadForeignModule = function (e, t) {
      var n = this,
          r = { getMirrorModels: function getMirrorModels() {
          return n._getModels();
        } };if (this._foreignModuleFactory) {
        this._foreignModule = this._foreignModuleFactory(r, t);var i = [];for (var o in this._foreignModule) {
          "function" == typeof this._foreignModule[o] && i.push(o);
        }return w.a.as(i);
      }return w.a.wrapError(new Error("Unexpected usage"));
    }, e.prototype.fmr = function (e, t) {
      if (!this._foreignModule || "function" != typeof this._foreignModule[e]) return w.a.wrapError(new Error("Missing requestHandler or method: " + e));try {
        return w.a.as(this._foreignModule[e].apply(this._foreignModule, t));
      } catch (e) {
        return w.a.wrapError(e);
      }
    }, e._diffLimit = 1e4, e._suggestionsLimit = 1e4, e;
  }());"function" == typeof importScripts && (o.a.monaco = { editor: void 0, languages: void 0, CancellationTokenSource: Se, Emitter: he, KeyCode: Ae, KeyMod: Le, Position: C, Range: T, Selection: we, SelectionDirection: be, MarkerSeverity: xe, MarkerTag: Te, Promise: w.a, Uri: p, Token: Ee });var qe = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }();(function () {
    function e() {
      this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
    }e.prototype.queue = function (e) {
      var t = this;if (this.activePromise) {
        if (this.queuedPromiseFactory = e, !this.queuedPromise) {
          var n = function n() {
            t.queuedPromise = null;var e = t.queue(t.queuedPromiseFactory);return t.queuedPromiseFactory = null, e;
          };this.queuedPromise = new w.a(function (e, r, i) {
            t.activePromise.then(n, n, i).done(e);
          }, function () {
            t.activePromise.cancel();
          });
        }return new w.a(function (e, n, r) {
          t.queuedPromise.then(e, n, r);
        }, function () {});
      }return this.activePromise = e(), new w.a(function (e, n, r) {
        t.activePromise.done(function (n) {
          t.activePromise = null, e(n);
        }, function (e) {
          t.activePromise = null, n(e);
        }, r);
      }, function () {
        t.activePromise.cancel();
      });
    };
  })(), function () {
    function e(e) {
      this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null;
    }e.prototype.trigger = function (e, t) {
      var n = this;return void 0 === t && (t = this.defaultDelay), this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new w.a(function (e) {
        n.onSuccess = e;
      }, function () {}).then(function () {
        n.completionPromise = null, n.onSuccess = null;var e = n.task;return n.task = null, e();
      })), this.timeout = setTimeout(function () {
        n.timeout = null, n.onSuccess(null);
      }, t), this.completionPromise;
    }, e.prototype.cancel = function () {
      this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null);
    }, e.prototype.cancelTimeout = function () {
      null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    };
  }();var Ie = function (e) {
    function t(t) {
      var n, r, i, o;return n = e.call(this, function (e, t, n) {
        r = e, i = t, o = n;
      }, function () {
        i(oe());
      }) || this, t.then(r, i, o), n;
    }return qe(t, e), t;
  }(w.a);(function (e) {
    function t() {
      var t = e.call(this) || this;return t._token = -1, t;
    }qe(t, e), t.prototype.dispose = function () {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function () {
      -1 !== this._token && (clearTimeout(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function (e, t) {
      var n = this;this.cancel(), this._token = setTimeout(function () {
        n._token = -1, e();
      }, t);
    }, t.prototype.setIfNotSet = function (e, t) {
      var n = this;-1 === this._token && (this._token = setTimeout(function () {
        n._token = -1, e();
      }, t));
    };
  })(ue), function (e) {
    function t() {
      var t = e.call(this) || this;return t._token = -1, t;
    }qe(t, e), t.prototype.dispose = function () {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function () {
      -1 !== this._token && (clearInterval(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function (e, t) {
      this.cancel(), this._token = setInterval(function () {
        e();
      }, t);
    };
  }(ue), function () {
    function e(e, t) {
      this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
    }e.prototype.dispose = function () {
      this.cancel(), this.runner = null;
    }, e.prototype.cancel = function () {
      this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
    }, e.prototype.schedule = function (e) {
      void 0 === e && (e = this.timeout), this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
    }, e.prototype.isScheduled = function () {
      return -1 !== this.timeoutToken;
    }, e.prototype.onTimeout = function () {
      this.timeoutToken = -1, this.runner && this.doRun();
    }, e.prototype.doRun = function () {
      this.runner();
    };
  }();var De = function () {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        t.hasOwnProperty(n) && (e[n] = t[n]);
      }
    };return function (t, n) {
      function r() {
        this.constructor = t;
      }e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
    };
  }(),
      Me = "$initialize";var Ue = function () {
    function e(e) {
      this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null);
    }return e.prototype.setWorkerId = function (e) {
      this._workerId = e;
    }, e.prototype.sendMessage = function (e, t) {
      var n = String(++this._lastSentReq),
          r = { c: null, e: null },
          i = new w.a(function (e, t) {
        r.c = e, r.e = t;
      }, function () {});return this._pendingReplies[n] = r, this._send({ vsWorker: this._workerId, req: n, method: e, args: t }), i;
    }, e.prototype.handleMessage = function (e) {
      var t;try {
        t = JSON.parse(e);
      } catch (e) {}t && t.vsWorker && (-1 !== this._workerId && t.vsWorker !== this._workerId || this._handleMessage(t));
    }, e.prototype._handleMessage = function (e) {
      var t = this;if (e.seq) {
        var n = e;if (!this._pendingReplies[n.seq]) return void console.warn("Got reply to unknown seq");var r = this._pendingReplies[n.seq];if (delete this._pendingReplies[n.seq], n.err) {
          var i = n.err;return n.err.$isError && ((i = new Error()).name = n.err.name, i.message = n.err.message, i.stack = n.err.stack), void r.e(i);
        }r.c(n.res);
      } else {
        var o = e,
            a = o.req;this._handler.handleMessage(o.method, o.args).then(function (e) {
          t._send({ vsWorker: t._workerId, seq: a, res: e, err: void 0 });
        }, function (e) {
          e.detail instanceof Error && (e.detail = ne(e.detail)), t._send({ vsWorker: t._workerId, seq: a, res: void 0, err: ne(e) });
        });
      }
    }, e.prototype._send = function (e) {
      var t = JSON.stringify(e);this._handler.sendMessage(t);
    }, e;
  }(),
      Re = (function (e) {
    function t(t, n) {
      var r = e.call(this) || this,
          i = null,
          o = null;r._worker = r._register(t.create("vs/base/common/worker/simpleWorker", function (e) {
        r._protocol.handleMessage(e);
      }, function (e) {
        o(e);
      })), r._protocol = new Ue({ sendMessage: function sendMessage(e) {
          r._worker.postMessage(e);
        }, handleMessage: function handleMessage(e, t) {
          return w.a.as(null);
        } }), r._protocol.setWorkerId(r._worker.getId());var a = null;void 0 !== self.require && "function" == typeof self.require.getConfig ? a = self.require.getConfig() : void 0 !== self.requirejs && (a = self.requirejs.s.contexts._.config), r._lazyProxy = new w.a(function (e, t) {
        i = e, o = t;
      }, function () {}), r._onModuleLoaded = r._protocol.sendMessage(Me, [r._worker.getId(), n, a]), r._onModuleLoaded.then(function (e) {
        for (var t = {}, n = 0; n < e.length; n++) {
          t[e[n]] = u(e[n], s);
        }i(t);
      }, function (e) {
        o(e), r._onError("Worker failed to load " + n, e);
      });var s = function s(e, t) {
        return r._request(e, t);
      },
          u = function u(e, t) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);return t(e, n);
        };
      };return r;
    }De(t, e), t.prototype.getProxyObject = function () {
      return new Ie(this._lazyProxy);
    }, t.prototype._request = function (e, t) {
      var n = this;return new w.a(function (r, i) {
        n._onModuleLoaded.then(function () {
          n._protocol.sendMessage(e, t).then(r, i);
        }, i);
      }, function () {});
    }, t.prototype._onError = function (e, t) {
      console.error(e), console.info(t);
    };
  }(ue), function () {
    function e(e, t) {
      var n = this;this._requestHandler = t, this._protocol = new Ue({ sendMessage: function sendMessage(t) {
          e(t);
        }, handleMessage: function handleMessage(e, t) {
          return n._handleMessage(e, t);
        } });
    }return e.prototype.onmessage = function (e) {
      this._protocol.handleMessage(e);
    }, e.prototype._handleMessage = function (e, t) {
      if (e === Me) return this.initialize(t[0], t[1], t[2]);if (!this._requestHandler || "function" != typeof this._requestHandler[e]) return w.a.wrapError(new Error("Missing requestHandler or method: " + e));try {
        return w.a.as(this._requestHandler[e].apply(this._requestHandler, t));
      } catch (e) {
        return w.a.wrapError(e);
      }
    }, e.prototype.initialize = function (e, t, n) {
      var r,
          i,
          o = this;if (this._protocol.setWorkerId(e), this._requestHandler) {
        var a = [];for (var s in this._requestHandler) {
          "function" == typeof this._requestHandler[s] && a.push(s);
        }return w.a.as(a);
      }n && (void 0 !== n.baseUrl && delete n.baseUrl, void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs, n.catchError = !0, self.require.config(n));var u = new w.a(function (e, t) {
        r = e, i = t;
      });return self.require([t], function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }var n = e[0];o._requestHandler = n.create();var i = [];for (var a in o._requestHandler) {
          "function" == typeof o._requestHandler[a] && i.push(a);
        }r(i);
      }, i), u;
    }, e;
  }());var Ve,
      We,
      je = !1;function Be(e) {
    if (!je) {
      je = !0;var t = new Pe(e),
          n = new Re(function (e) {
        self.postMessage(e);
      }, t);self.onmessage = function (e) {
        n.onmessage(e.data);
      };
    }
  }function Ke(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
    }return function (e, t) {
      return 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function (e, n) {
        var r = n[0];return void 0 !== t[r] ? t[r] : e;
      });
    }(t, n);
  }function Fe(e) {
    return Ke;
  }self.onmessage = function (e) {
    je || Be(null);
  }, function (e) {
    e[e.StartCommentTag = 0] = "StartCommentTag", e[e.Comment = 1] = "Comment", e[e.EndCommentTag = 2] = "EndCommentTag", e[e.StartTagOpen = 3] = "StartTagOpen", e[e.StartTagClose = 4] = "StartTagClose", e[e.StartTagSelfClose = 5] = "StartTagSelfClose", e[e.StartTag = 6] = "StartTag", e[e.EndTagOpen = 7] = "EndTagOpen", e[e.EndTagClose = 8] = "EndTagClose", e[e.EndTag = 9] = "EndTag", e[e.DelimiterAssign = 10] = "DelimiterAssign", e[e.AttributeName = 11] = "AttributeName", e[e.AttributeValue = 12] = "AttributeValue", e[e.StartDoctypeTag = 13] = "StartDoctypeTag", e[e.Doctype = 14] = "Doctype", e[e.EndDoctypeTag = 15] = "EndDoctypeTag", e[e.Content = 16] = "Content", e[e.Whitespace = 17] = "Whitespace", e[e.Unknown = 18] = "Unknown", e[e.Script = 19] = "Script", e[e.Styles = 20] = "Styles", e[e.EOS = 21] = "EOS";
  }(Ve || (Ve = {})), function (e) {
    e[e.WithinContent = 0] = "WithinContent", e[e.AfterOpeningStartTag = 1] = "AfterOpeningStartTag", e[e.AfterOpeningEndTag = 2] = "AfterOpeningEndTag", e[e.WithinDoctype = 3] = "WithinDoctype", e[e.WithinTag = 4] = "WithinTag", e[e.WithinEndTag = 5] = "WithinEndTag", e[e.WithinComment = 6] = "WithinComment", e[e.WithinScriptContent = 7] = "WithinScriptContent", e[e.WithinStyleContent = 8] = "WithinStyleContent", e[e.AfterAttributeName = 9] = "AfterAttributeName", e[e.BeforeAttributeValue = 10] = "BeforeAttributeValue";
  }(We || (We = {}));var He = Fe(),
      Ye = function () {
    function e(e, t) {
      this.source = e, this.len = e.length, this.position = t;
    }return e.prototype.eos = function () {
      return this.len <= this.position;
    }, e.prototype.getSource = function () {
      return this.source;
    }, e.prototype.pos = function () {
      return this.position;
    }, e.prototype.goBackTo = function (e) {
      this.position = e;
    }, e.prototype.goBack = function (e) {
      this.position -= e;
    }, e.prototype.advance = function (e) {
      this.position += e;
    }, e.prototype.goToEnd = function () {
      this.position = this.source.length;
    }, e.prototype.nextChar = function () {
      return this.source.charCodeAt(this.position++) || 0;
    }, e.prototype.peekChar = function (e) {
      return void 0 === e && (e = 0), this.source.charCodeAt(this.position + e) || 0;
    }, e.prototype.advanceIfChar = function (e) {
      return e === this.source.charCodeAt(this.position) && (this.position++, !0);
    }, e.prototype.advanceIfChars = function (e) {
      var t;if (this.position + e.length > this.source.length) return !1;for (t = 0; t < e.length; t++) {
        if (this.source.charCodeAt(this.position + t) !== e[t]) return !1;
      }return this.advance(t), !0;
    }, e.prototype.advanceIfRegExp = function (e) {
      var t = this.source.substr(this.position).match(e);return t ? (this.position = this.position + t.index + t[0].length, t[0]) : "";
    }, e.prototype.advanceUntilRegExp = function (e) {
      var t = this.source.substr(this.position).match(e);return t ? (this.position = this.position + t.index, t[0]) : (this.goToEnd(), "");
    }, e.prototype.advanceUntilChar = function (e) {
      for (; this.position < this.source.length;) {
        if (this.source.charCodeAt(this.position) === e) return !0;this.advance(1);
      }return !1;
    }, e.prototype.advanceUntilChars = function (e) {
      for (; this.position + e.length <= this.source.length;) {
        for (var t = 0; t < e.length && this.source.charCodeAt(this.position + t) === e[t]; t++) {}if (t === e.length) return !0;this.advance(1);
      }return this.goToEnd(), !1;
    }, e.prototype.skipWhitespace = function () {
      return this.advanceWhileChar(function (e) {
        return e === it || e === ot || e === tt || e === rt || e === nt;
      }) > 0;
    }, e.prototype.advanceWhileChar = function (e) {
      for (var t = this.position; this.position < this.len && e(this.source.charCodeAt(this.position));) {
        this.position++;
      }return this.position - t;
    }, e;
  }(),
      ze = "!".charCodeAt(0),
      Ge = "-".charCodeAt(0),
      Je = "<".charCodeAt(0),
      $e = ">".charCodeAt(0),
      Qe = "/".charCodeAt(0),
      Ze = "=".charCodeAt(0),
      Xe = '"'.charCodeAt(0),
      et = "'".charCodeAt(0),
      tt = "\n".charCodeAt(0),
      nt = "\r".charCodeAt(0),
      rt = "\f".charCodeAt(0),
      it = " ".charCodeAt(0),
      ot = "\t".charCodeAt(0),
      at = { "text/x-handlebars-template": !0 };function st(e, t, n) {
    void 0 === t && (t = 0), void 0 === n && (n = We.WithinContent);var r,
        i,
        o,
        a,
        s,
        u = new Ye(e, t),
        l = n,
        c = 0,
        h = Ve.Unknown;function d() {
      return u.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
    }function f(e, t, n) {
      return h = t, c = e, r = n, t;
    }return { scan: function scan() {
        var e = u.pos(),
            t = l,
            n = function e() {
          var t,
              n = u.pos();if (u.eos()) return f(n, Ve.EOS);switch (l) {case We.WithinComment:
              return u.advanceIfChars([Ge, Ge, $e]) ? (l = We.WithinContent, f(n, Ve.EndCommentTag)) : (u.advanceUntilChars([Ge, Ge, $e]), f(n, Ve.Comment));case We.WithinDoctype:
              return u.advanceIfChar($e) ? (l = We.WithinContent, f(n, Ve.EndDoctypeTag)) : (u.advanceUntilChar($e), f(n, Ve.Doctype));case We.WithinContent:
              if (u.advanceIfChar(Je)) {
                if (!u.eos() && u.peekChar() === ze) {
                  if (u.advanceIfChars([ze, Ge, Ge])) return l = We.WithinComment, f(n, Ve.StartCommentTag);if (u.advanceIfRegExp(/^!doctype/i)) return l = We.WithinDoctype, f(n, Ve.StartDoctypeTag);
                }return u.advanceIfChar(Qe) ? (l = We.AfterOpeningEndTag, f(n, Ve.EndTagOpen)) : (l = We.AfterOpeningStartTag, f(n, Ve.StartTagOpen));
              }return u.advanceUntilChar(Je), f(n, Ve.Content);case We.AfterOpeningEndTag:
              var r = d();return r.length > 0 ? (l = We.WithinEndTag, f(n, Ve.EndTag)) : u.skipWhitespace() ? f(n, Ve.Whitespace, He("error.unexpectedWhitespace", "Tag name must directly follow the open bracket.")) : (l = We.WithinEndTag, u.advanceUntilChar($e), n < u.pos() ? f(n, Ve.Unknown, He("error.endTagNameExpected", "End tag name expected.")) : e());case We.WithinEndTag:
              if (u.skipWhitespace()) return f(n, Ve.Whitespace);if (u.advanceIfChar($e)) return l = We.WithinContent, f(n, Ve.EndTagClose);t = He("error.tagNameExpected", "Closing bracket expected.");break;case We.AfterOpeningStartTag:
              return o = d(), s = void 0, a = void 0, o.length > 0 ? (i = !1, l = We.WithinTag, f(n, Ve.StartTag)) : u.skipWhitespace() ? f(n, Ve.Whitespace, He("error.unexpectedWhitespace", "Tag name must directly follow the open bracket.")) : (l = We.WithinTag, u.advanceUntilChar($e), n < u.pos() ? f(n, Ve.Unknown, He("error.startTagNameExpected", "Start tag name expected.")) : e());case We.WithinTag:
              return u.skipWhitespace() ? (i = !0, f(n, Ve.Whitespace)) : i && (a = u.advanceIfRegExp(/^[^\s"'>/=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase()).length > 0 ? (l = We.AfterAttributeName, i = !1, f(n, Ve.AttributeName)) : u.advanceIfChars([Qe, $e]) ? (l = We.WithinContent, f(n, Ve.StartTagSelfClose)) : u.advanceIfChar($e) ? (l = "script" === o ? s && at[s] ? We.WithinContent : We.WithinScriptContent : "style" === o ? We.WithinStyleContent : We.WithinContent, f(n, Ve.StartTagClose)) : (u.advance(1), f(n, Ve.Unknown, He("error.unexpectedCharacterInTag", "Unexpected character in tag.")));case We.AfterAttributeName:
              return u.skipWhitespace() ? (i = !0, f(n, Ve.Whitespace)) : u.advanceIfChar(Ze) ? (l = We.BeforeAttributeValue, f(n, Ve.DelimiterAssign)) : (l = We.WithinTag, e());case We.BeforeAttributeValue:
              if (u.skipWhitespace()) return f(n, Ve.Whitespace);var c = u.advanceIfRegExp(/^[^\s"'`=<>\/]+/);if (c.length > 0) return "type" === a && (s = c), l = We.WithinTag, i = !1, f(n, Ve.AttributeValue);var h = u.peekChar();return h === et || h === Xe ? (u.advance(1), u.advanceUntilChar(h) && u.advance(1), "type" === a && (s = u.getSource().substring(n + 1, u.pos() - 1)), l = We.WithinTag, i = !1, f(n, Ve.AttributeValue)) : (l = We.WithinTag, i = !1, e());case We.WithinScriptContent:
              for (var p = 1; !u.eos();) {
                var g = u.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);if (0 === g.length) return u.goToEnd(), f(n, Ve.Script);if ("\x3c!--" === g) 1 === p && (p = 2);else if ("--\x3e" === g) p = 1;else if ("/" !== g[1]) 2 === p && (p = 3);else {
                  if (3 !== p) {
                    u.goBack(g.length);break;
                  }p = 2;
                }
              }return l = We.WithinContent, n < u.pos() ? f(n, Ve.Script) : e();case We.WithinStyleContent:
              return u.advanceUntilRegExp(/<\/style/i), l = We.WithinContent, n < u.pos() ? f(n, Ve.Styles) : e();}return u.advance(1), l = We.WithinContent, f(n, Ve.Unknown, t);
        }();return n !== Ve.EOS && e === u.pos() ? (console.log("Scanner.scan has not advanced at offset " + e + ", state before: " + t + " after: " + l), u.advance(1), f(e, Ve.Unknown)) : n;
      }, getTokenType: function getTokenType() {
        return h;
      }, getTokenOffset: function getTokenOffset() {
        return c;
      }, getTokenLength: function getTokenLength() {
        return u.pos() - c;
      }, getTokenEnd: function getTokenEnd() {
        return u.pos();
      }, getTokenText: function getTokenText() {
        return u.getSource().substring(c, u.pos());
      }, getScannerState: function getScannerState() {
        return l;
      }, getTokenError: function getTokenError() {
        return r;
      } };
  }function ut(e, t) {
    var n = 0,
        r = e.length;if (0 === r) return 0;for (; n < r;) {
      var i = Math.floor((n + r) / 2);t(e[i]) ? r = i : n = i + 1;
    }return n;
  }function lt(e, t) {
    if (e.length < t.length) return !1;for (var n = 0; n < t.length; n++) {
      if (e[n] !== t[n]) return !1;
    }return !0;
  }function ct(e, t) {
    for (var n = ""; t > 0;) {
      1 == (1 & t) && (n += e), e += e, t >>>= 1;
    }return n;
  }var ht = "a".charCodeAt(0),
      dt = "z".charCodeAt(0),
      ft = "A".charCodeAt(0),
      pt = "Z".charCodeAt(0),
      gt = "0".charCodeAt(0),
      mt = "9".charCodeAt(0);function bt(e, t) {
    var n = e.charCodeAt(t);return ht <= n && n <= dt || ft <= n && n <= pt || gt <= n && n <= mt;
  }
  /*!
  BEGIN THIRD PARTY
  */var _t = Fe(),
      vt = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];function yt(e) {
    return !!e && function (e, t, n) {
      for (var r = 0, i = e.length - 1; r <= i;) {
        var o = (r + i) / 2 | 0,
            a = n(e[o], t);if (a < 0) r = o + 1;else {
          if (!(a > 0)) return o;i = o - 1;
        }
      }return -(r + 1);
    }(vt, e.toLowerCase(), function (e, t) {
      return e.localeCompare(t);
    }) >= 0;
  }var wt = function () {
    return function (e, t) {
      void 0 === t && (t = []), this.label = e, this.attributes = t;
    };
  }(),
      Ct = { html: new wt(_t("tags.html", "The html element represents the root of an HTML document."), ["manifest"]), head: new wt(_t("tags.head", "The head element represents a collection of metadata for the Document.")), title: new wt(_t("tags.title", "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.")), base: new wt(_t("tags.base", "The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information."), ["href", "target"]), link: new wt(_t("tags.link", "The link element allows authors to link their document to other resources."), ["href", "crossorigin:xo", "rel", "media", "hreflang", "type", "sizes"]), meta: new wt(_t("tags.meta", "The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements."), ["name", "http-equiv", "content", "charset"]), style: new wt(_t("tags.style", "The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user."), ["media", "nonce", "type", "scoped:v"]), body: new wt(_t("tags.body", "The body element represents the content of the document."), ["onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onstorage", "onunload"]), article: new wt(_t("tags.article", "The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.")), section: new wt(_t("tags.section", "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.")), nav: new wt(_t("tags.nav", "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.")), aside: new wt(_t("tags.aside", "The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.")), h1: new wt(_t("tags.h1", "The h1 element represents a section heading.")), h2: new wt(_t("tags.h2", "The h2 element represents a section heading.")), h3: new wt(_t("tags.h3", "The h3 element represents a section heading.")), h4: new wt(_t("tags.h4", "The h4 element represents a section heading.")), h5: new wt(_t("tags.h5", "The h5 element represents a section heading.")), h6: new wt(_t("tags.h6", "The h6 element represents a section heading.")), header: new wt(_t("tags.header", "The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.")), footer: new wt(_t("tags.footer", "The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.")), address: new wt(_t("tags.address", "The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.")), p: new wt(_t("tags.p", "The p element represents a paragraph.")), hr: new wt(_t("tags.hr", "The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.")), pre: new wt(_t("tags.pre", "The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.")), blockquote: new wt(_t("tags.blockquote", "The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations."), ["cite"]), ol: new wt(_t("tags.ol", "The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document."), ["reversed:v", "start", "type:lt"]), ul: new wt(_t("tags.ul", "The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.")), li: new wt(_t("tags.li", "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element."), ["value"]), dl: new wt(_t("tags.dl", "The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.")), dt: new wt(_t("tags.dt", "The dt element represents the term, or name, part of a term-description group in a description list (dl element).")), dd: new wt(_t("tags.dd", "The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).")), figure: new wt(_t("tags.figure", "The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.")), figcaption: new wt(_t("tags.figcaption", "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any.")), main: new wt(_t("tags.main", "The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.")), div: new wt(_t("tags.div", "The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.")), a: new wt(_t("tags.a", "If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents."), ["href", "target", "download", "ping", "rel", "hreflang", "type"]), em: new wt(_t("tags.em", "The em element represents stress emphasis of its contents.")), strong: new wt(_t("tags.strong", "The strong element represents strong importance, seriousness, or urgency for its contents.")), small: new wt(_t("tags.small", "The small element represents side comments such as small print.")), s: new wt(_t("tags.s", "The s element represents contents that are no longer accurate or no longer relevant.")), cite: new wt(_t("tags.cite", "The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.")), q: new wt(_t("tags.q", "The q element represents some phrasing content quoted from another source."), ["cite"]), dfn: new wt(_t("tags.dfn", "The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.")), abbr: new wt(_t("tags.abbr", "The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.")), ruby: new wt(_t("tags.ruby", "The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]")), rb: new wt(_t("tags.rb", "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents.")), rt: new wt(_t("tags.rt", "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents.")), rp: new wt(_t("tags.rp", "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation.")), time: new wt(_t("tags.time", "The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below."), ["datetime"]), code: new wt(_t("tags.code", "The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.")), var: new wt(_t("tags.var", "The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.")), samp: new wt(_t("tags.samp", "The samp element represents sample or quoted output from another program or computing system.")), kbd: new wt(_t("tags.kbd", "The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).")), sub: new wt(_t("tags.sub", "The sub element represents a subscript.")), sup: new wt(_t("tags.sup", "The sup element represents a superscript.")), i: new wt(_t("tags.i", "The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.")), b: new wt(_t("tags.b", "The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.")), u: new wt(_t("tags.u", "The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.")), mark: new wt(_t("tags.mark", "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity.")), bdi: new wt(_t("tags.bdi", "The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]")), bdo: new wt(_t("tags.dbo", "The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]")), span: new wt(_t("tags.span", "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children.")), br: new wt(_t("tags.br", "The br element represents a line break.")), wbr: new wt(_t("tags.wbr", "The wbr element represents a line break opportunity.")), ins: new wt(_t("tags.ins", "The ins element represents an addition to the document.")), del: new wt(_t("tags.del", "The del element represents a removal from the document."), ["cite", "datetime"]), picture: new wt(_t("tags.picture", "The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.")), img: new wt(_t("tags.img", "An img element represents an image."), ["alt", "src", "srcset", "crossorigin:xo", "usemap", "ismap:v", "width", "height"]), iframe: new wt(_t("tags.iframe", "The iframe element represents a nested browsing context."), ["src", "srcdoc", "name", "sandbox:sb", "seamless:v", "allowfullscreen:v", "width", "height"]), embed: new wt(_t("tags.embed", "The embed element provides an integration point for an external (typically non-HTML) application or interactive content."), ["src", "type", "width", "height"]), object: new wt(_t("tags.object", "The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin."), ["data", "type", "typemustmatch:v", "name", "usemap", "form", "width", "height"]), param: new wt(_t("tags.param", "The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own."), ["name", "value"]), video: new wt(_t("tags.video", "A video element is used for playing videos or movies, and audio files with captions."), ["src", "crossorigin:xo", "poster", "preload:pl", "autoplay:v", "mediagroup", "loop:v", "muted:v", "controls:v", "width", "height"]), audio: new wt(_t("tags.audio", "An audio element represents a sound or audio stream."), ["src", "crossorigin:xo", "preload:pl", "autoplay:v", "mediagroup", "loop:v", "muted:v", "controls:v"]), source: new wt(_t("tags.source", "The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own."), ["src", "type"]), track: new wt(_t("tags.track", "The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own."), ["default:v", "kind:tk", "label", "src", "srclang"]), map: new wt(_t("tags.map", "The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children."), ["name"]), area: new wt(_t("tags.area", "The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map."), ["alt", "coords", "shape:sh", "href", "target", "download", "ping", "rel", "hreflang", "type"]), table: new wt(_t("tags.table", "The table element represents data with more than one dimension, in the form of a table."), ["sortable:v", "border"]), caption: new wt(_t("tags.caption", "The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.")), colgroup: new wt(_t("tags.colgroup", "The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element."), ["span"]), col: new wt(_t("tags.col", "If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup."), ["span"]), tbody: new wt(_t("tags.tbody", "The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.")), thead: new wt(_t("tags.thead", "The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.")), tfoot: new wt(_t("tags.tfoot", "The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.")), tr: new wt(_t("tags.tr", "The tr element represents a row of cells in a table.")), td: new wt(_t("tags.td", "The td element represents a data cell in a table."), ["colspan", "rowspan", "headers"]), th: new wt(_t("tags.th", "The th element represents a header cell in a table."), ["colspan", "rowspan", "headers", "scope:s", "sorted", "abbr"]), form: new wt(_t("tags.form", "The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing."), ["accept-charset", "action", "autocomplete:o", "enctype:et", "method:m", "name", "novalidate:v", "target"]), label: new wt(_t("tags.label", "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself."), ["form", "for"]), input: new wt(_t("tags.input", "The input element represents a typed data field, usually with a form control to allow the user to edit the data."), ["accept", "alt", "autocomplete:inputautocomplete", "autofocus:v", "checked:v", "dirname", "disabled:v", "form", "formaction", "formenctype:et", "formmethod:fm", "formnovalidate:v", "formtarget", "height", "inputmode:im", "list", "max", "maxlength", "min", "minlength", "multiple:v", "name", "pattern", "placeholder", "readonly:v", "required:v", "size", "src", "step", "type:t", "value", "width"]), button: new wt(_t("tags.button", "The button element represents a button labeled by its contents."), ["autofocus:v", "disabled:v", "form", "formaction", "formenctype:et", "formmethod:fm", "formnovalidate:v", "formtarget", "name", "type:bt", "value"]), select: new wt(_t("tags.select", "The select element represents a control for selecting amongst a set of options."), ["autocomplete:inputautocomplete", "autofocus:v", "disabled:v", "form", "multiple:v", "name", "required:v", "size"]), datalist: new wt(_t("tags.datalist", "The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.")), optgroup: new wt(_t("tags.optgroup", "The optgroup element represents a group of option elements with a common label."), ["disabled:v", "label"]), option: new wt(_t("tags.option", "The option element represents an option in a select element or as part of a list of suggestions in a datalist element."), ["disabled:v", "label", "selected:v", "value"]), textarea: new wt(_t("tags.textarea", "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value."), ["autocomplete:inputautocomplete", "autofocus:v", "cols", "dirname", "disabled:v", "form", "inputmode:im", "maxlength", "minlength", "name", "placeholder", "readonly:v", "required:v", "rows", "wrap:w"]), output: new wt(_t("tags.output", "The output element represents the result of a calculation performed by the application, or the result of a user action."), ["for", "form", "name"]), progress: new wt(_t("tags.progress", "The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed."), ["value", "max"]), meter: new wt(_t("tags.meter", "The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate."), ["value", "min", "max", "low", "high", "optimum"]), fieldset: new wt(_t("tags.fieldset", "The fieldset element represents a set of form controls optionally grouped under a common name."), ["disabled:v", "form", "name"]), legend: new wt(_t("tags.legend", "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.")), details: new wt(_t("tags.details", "The details element represents a disclosure widget from which the user can obtain additional information or controls."), ["open:v"]), summary: new wt(_t("tags.summary", "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any.")), dialog: new wt(_t("tags.dialog", "The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.")), script: new wt(_t("tags.script", "The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user."), ["src", "type", "charset", "async:v", "defer:v", "crossorigin:xo", "nonce"]), noscript: new wt(_t("tags.noscript", "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed.")), template: new wt(_t("tags.template", "The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.")), canvas: new wt(_t("tags.canvas", "The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly."), ["width", "height"]) },
      Tt = { "ion-checkbox": new wt(_t("tags.ion.checkbox", "The checkbox is no different than the HTML checkbox input, except it's styled differently. The checkbox behaves like any AngularJS checkbox."), ["name", "ng-false-value", "ng-model", "ng-true-value"]), "ion-content": new wt(_t("tags.ion.content", "The ionContent directive provides an easy to use content area that can be configured to use Ionic's custom Scroll View, or the built-in overflow scrolling of the browser."), ["delegate-handle", "direction:scrolldir", "has-bouncing:b", "locking:b", "on-scroll", "on-scroll-complete", "overflow-scroll:b", "padding:b", "scroll:b", "scrollbar-x:b", "scrollbar-y:b", "start-x", "start-y"]), "ion-delete-button": new wt(_t("tags.ion.deletebutton", "Child of ionItem"), []), "ion-footer-bar": new wt(_t("tags.ion.footerbar", 'Adds a fixed footer bar below some content. Can also be a subfooter (higher up) if the "bar-subfooter" class is applied.'), ["align-title:align", "keyboard-attach:v"]), "ion-header-bar": new wt(_t("tags.ion.headerbar", 'Adds a fixed header bar above some content. Can also be a subheader (lower down) if the "bar-subheader" class is applied.'), ["align-title:align", "no-tap-scroll:b"]), "ion-infinite-scroll": new wt(_t("tags.ion.infinitescroll", "Child of ionContent or ionScroll. The ionInfiniteScroll directive allows you to call a function whenever the user gets to the bottom of the page or near the bottom of the page."), ["distance", "icon", "immediate-check:b", "on-infinite", "spinner"]), "ion-input": new wt(_t("tags.ion.input", 'ionInput is meant for text type inputs only. Ionic uses an actual <input type="text"> HTML element within the component, with Ionic wrapping to better handle the user experience and interactivity.'), ["type:inputtype", "clearInput:v"]), "ion-item": new wt(_t("tags.ion.item", "Child of ionList."), []), "ion-list": new wt(_t("tags.ion.list", "The List is a widely used interface element in almost any mobile app, and can include content ranging from basic text all the way to buttons, toggles, icons, and thumbnails."), ["can-swipe:b", "delegate-handle", "show-delete:b", "show-reorder:b", "type:listtype"]), "ion-modal-view": new wt(_t("tags.ion.modalview", "The Modal is a content pane that can go over the user's main view temporarily. Usually used for making a choice or editing an item."), []), "ion-nav-back-button": new wt(_t("tags.ion.navbackbutton", "Child of ionNavBar. Creates a back button inside an ionNavBar. The back button will appear when the user is able to go back in the current navigation stack."), []), "ion-nav-bar": new wt(_t("tags.ion.navbar", "If you have an ionNavView directive, you can also create an <ion-nav-bar>, which will create a topbar that updates as the application state changes."), ["align-title:align", "delegate-handle", "no-tap-scroll:b"]), "ion-nav-buttons": new wt(_t("tags.ion.navbuttons", "Child of ionNavView. Use ionNavButtons to set the buttons on your ionNavBar from within an ionView."), ["side:navsides"]), "ion-nav-title": new wt(_t("tags.ion.navtitle", "Child of ionNavView. The ionNavTitle directive replaces an ionNavBar title text with custom HTML from within an ionView template."), []), "ion-nav-view": new wt(_t("tags.ion.navview", "The ionNavView directive is used to render templates in your application. Each template is part of a state. States are usually mapped to a url, and are defined programatically using angular-ui-router."), ["name"]), "ion-option-button": new wt(_t("tags.ion.optionbutton", "Child of ionItem. Creates an option button inside a list item, that is visible when the item is swiped to the left by the user."), []), "ion-pane": new wt(_t("tags.ion.pane", 'A simple container that fits content, with no side effects. Adds the "pane" class to the element.'), []), "ion-popover-view": new wt(_t("tags.ion.popoverview", "The Popover is a view that floats above an app's content. Popovers provide an easy way to present or gather information from the user."), []), "ion-radio": new wt(_t("tags.ion.radio", "The radio ionRirective is no different than the HTML radio input, except it's styled differently. The ionRadio behaves like AngularJS radio input."), ["disabled:b", "icon", "name", "ng-disabled:b", "ng-model", "ng-value", "value"]), "ion-refresher": new wt(_t("tags.ion.refresher", "Child of ionContent or ionScroll. Allows you to add pull-to-refresh to a scrollView. Place it as the first child of your ionContent or ionScroll element."), ["disable-pulling-rotation:b", "on-pulling", "on-refresh", "pulling-icon", "pulling-text", "refreshing-icon", "spinner"]), "ion-reorder-button": new wt(_t("tags.ion.reorderbutton", "Child of ionItem."), ["on-reorder"]), "ion-scroll": new wt(_t("tags.ion.scroll", "Creates a scrollable container for all content inside."), ["delegate-handle", "direction:scrolldir", "has-bouncing:b", "locking:b", "max-zoom", "min-zoom", "on-refresh", "on-scroll", "paging:b", "scrollbar-x:b", "scrollbar-y:b", "zooming:b"]), "ion-side-menu": new wt(_t("tags.ion.sidemenu", "Child of ionSideMenus. A container for a side menu, sibling to an ionSideMenuContent directive."), ["is-enabled:b", "expose-aside-when", "side:navsides", "width"]), "ion-side-menu-content": new wt(_t("tags.ion.sidemenucontent", "Child of ionSideMenus. A container for the main visible content, sibling to one or more ionSideMenu directives."), ["drag-content:b", "edge-drag-threshold"]), "ion-side-menus": new wt(_t("tags.ion.sidemenus", "A container element for side menu(s) and the main content. Allows the left and/or right side menu to be toggled by dragging the main content area side to side."), ["delegate-handle", "enable-menu-with-back-views:b"]), "ion-slide": new wt(_t("tags.ion.slide", "Child of ionSlideBox. Displays a slide inside of a slidebox."), []), "ion-slide-box": new wt(_t("tags.ion.slidebox", "The Slide Box is a multi-page container where each page can be swiped or dragged between."), ["active-slide", "auto-play:b", "delegate-handle", "does-continue:b", "on-slide-changed", "pager-click", "show-pager:b", "slide-interval"]), "ion-spinner": new wt(_t("tags.ion.spinner", "The ionSpinner directive provides a variety of animated spinners."), ["icon"]), "ion-tab": new wt(_t("tags.ion.tab", "Child of ionTabs. Contains a tab's content. The content only exists while the given tab is selected."), ["badge", "badge-style", "disabled", "hidden", "href", "icon", "icon-off", "icon-on", "ng-click", "on-deselect", "on-select", "title"]), "ion-tabs": new wt(_t("tags.ion.tabs", 'Powers a multi-tabbed interface with a tab bar and a set of "pages" that can be tabbed through.'), ["delegate-handle"]), "ion-title": new wt(_t("tags.ion.title", "ion-title is a component that sets the title of the ionNavbar"), []), "ion-toggle": new wt(_t("tags.ion.toggle", "A toggle is an animated switch which binds a given model to a boolean. Allows dragging of the switch's nub. The toggle behaves like any AngularJS checkbox otherwise."), ["name", "ng-false-value", "ng-model", "ng-true-value", "toggle-class"]), "ion-view ": new wt(_t("tags.ion.view", "Child of ionNavView. A container for view content and any navigational and header bar information."), ["cache-view:b", "can-swipe-back:b", "hide-back-button:b", "hide-nav-bar:b", "view-title"]) };function xt(e, t) {
    for (var n in t) {
      e(n, t[n].label);
    }
  }function kt(e, t, n, r) {
    if (r.forEach(function (e) {
      var n = e.split(":");t(n[0], n[1]);
    }), e) {
      var i = n[e];if (i) {
        var o = i.attributes;o && o.forEach(function (e) {
          var n = e.split(":");t(n[0], n[1]);
        });
      }
    }
  }function St(e, t, n, r, i, o, a) {
    var s = t + ":",
        u = function u(e) {
      e.forEach(function (e) {
        if (e.length > s.length && lt(e, s)) {
          var r = e.substr(s.length);if ("v" === r) n(t);else {
            var i = o[r];i && i.forEach(n);
          }
        }
      });
    };if (e) {
      var l = r[e];if (l) {
        var c = l.attributes;c && u(c);
      }
    }if (u(i), a) {
      var h = a[e];h && u(h);
    }
  }
  /*!
  END THIRD PARTY
  */var Et,
      At,
      Lt,
      Nt,
      Ot,
      Pt,
      qt,
      It,
      Dt,
      Mt,
      Ut,
      Rt,
      Vt,
      Wt,
      jt,
      Bt = function () {
    function e(e, t, n, r) {
      this.start = e, this.end = t, this.children = n, this.parent = r, this.closed = !1;
    }return Object.defineProperty(e.prototype, "attributeNames", { get: function get() {
        return this.attributes ? Object.keys(this.attributes) : [];
      }, enumerable: !0, configurable: !0 }), e.prototype.isSameTag = function (e) {
      return this.tag && e && this.tag.length === e.length && this.tag.toLowerCase() === e;
    }, Object.defineProperty(e.prototype, "firstChild", { get: function get() {
        return this.children[0];
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "lastChild", { get: function get() {
        return this.children.length ? this.children[this.children.length - 1] : void 0;
      }, enumerable: !0, configurable: !0 }), e.prototype.findNodeBefore = function (e) {
      var t = ut(this.children, function (t) {
        return e <= t.start;
      }) - 1;if (t >= 0) {
        var n = this.children[t];if (e > n.start) {
          if (e < n.end) return n.findNodeBefore(e);var r = n.lastChild;return r && r.end === n.end ? n.findNodeBefore(e) : n;
        }
      }return this;
    }, e.prototype.findNodeAt = function (e) {
      var t = ut(this.children, function (t) {
        return e <= t.start;
      }) - 1;if (t >= 0) {
        var n = this.children[t];if (e > n.start && e <= n.end) return n.findNodeAt(e);
      }return this;
    }, e;
  }();!function (e) {
    e.create = function (e, t) {
      return { line: e, character: t };
    }, e.is = function (e) {
      var t = e;return bn.objectLiteral(t) && bn.number(t.line) && bn.number(t.character);
    };
  }(Et || (Et = {})), function (e) {
    e.create = function (e, t, n, r) {
      if (bn.number(e) && bn.number(t) && bn.number(n) && bn.number(r)) return { start: Et.create(e, t), end: Et.create(n, r) };if (Et.is(e) && Et.is(t)) return { start: e, end: t };throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + r + "]");
    }, e.is = function (e) {
      var t = e;return bn.objectLiteral(t) && Et.is(t.start) && Et.is(t.end);
    };
  }(At || (At = {})), function (e) {
    e.create = function (e, t) {
      return { uri: e, range: t };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && At.is(t.range) && (bn.string(t.uri) || bn.undefined(t.uri));
    };
  }(Lt || (Lt = {})), function (e) {
    e.create = function (e, t, n, r) {
      return { red: e, green: t, blue: n, alpha: r };
    }, e.is = function (e) {
      var t = e;return bn.number(t.red) && bn.number(t.green) && bn.number(t.blue) && bn.number(t.alpha);
    };
  }(Nt || (Nt = {})), function (e) {
    e.create = function (e, t) {
      return { range: e, color: t };
    }, e.is = function (e) {
      var t = e;return At.is(t.range) && Nt.is(t.color);
    };
  }(Ot || (Ot = {})), function (e) {
    e.create = function (e, t, n) {
      return { label: e, textEdit: t, additionalTextEdits: n };
    }, e.is = function (e) {
      var t = e;return bn.string(t.label) && (bn.undefined(t.textEdit) || Vt.is(t)) && (bn.undefined(t.additionalTextEdits) || bn.typedArray(t.additionalTextEdits, Vt.is));
    };
  }(Pt || (Pt = {})), function (e) {
    e.Comment = "comment", e.Imports = "imports", e.Region = "region";
  }(qt || (qt = {})), function (e) {
    e.create = function (e, t, n, r, i) {
      var o = { startLine: e, endLine: t };return bn.defined(n) && (o.startCharacter = n), bn.defined(r) && (o.endCharacter = r), bn.defined(i) && (o.kind = i), o;
    }, e.is = function (e) {
      var t = e;return bn.number(t.startLine) && bn.number(t.startLine) && (bn.undefined(t.startCharacter) || bn.number(t.startCharacter)) && (bn.undefined(t.endCharacter) || bn.number(t.endCharacter)) && (bn.undefined(t.kind) || bn.string(t.kind));
    };
  }(It || (It = {})), function (e) {
    e.create = function (e, t) {
      return { location: e, message: t };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && Lt.is(t.location) && bn.string(t.message);
    };
  }(Dt || (Dt = {})), function (e) {
    e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
  }(Mt || (Mt = {})), function (e) {
    e.create = function (e, t, n, r, i, o) {
      var a = { range: e, message: t };return bn.defined(n) && (a.severity = n), bn.defined(r) && (a.code = r), bn.defined(i) && (a.source = i), bn.defined(o) && (a.relatedInformation = o), a;
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && At.is(t.range) && bn.string(t.message) && (bn.number(t.severity) || bn.undefined(t.severity)) && (bn.number(t.code) || bn.string(t.code) || bn.undefined(t.code)) && (bn.string(t.source) || bn.undefined(t.source)) && (bn.undefined(t.relatedInformation) || bn.typedArray(t.relatedInformation, Dt.is));
    };
  }(Ut || (Ut = {})), function (e) {
    e.create = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }var i = { title: e, command: t };return bn.defined(n) && n.length > 0 && (i.arguments = n), i;
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && bn.string(t.title) && bn.string(t.command);
    };
  }(Rt || (Rt = {})), function (e) {
    e.replace = function (e, t) {
      return { range: e, newText: t };
    }, e.insert = function (e, t) {
      return { range: { start: e, end: e }, newText: t };
    }, e.del = function (e) {
      return { range: e, newText: "" };
    }, e.is = function (e) {
      var t = e;return bn.objectLiteral(t) && bn.string(t.newText) && At.is(t.range);
    };
  }(Vt || (Vt = {})), function (e) {
    e.create = function (e, t) {
      return { textDocument: e, edits: t };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && Ft.is(t.textDocument) && Array.isArray(t.edits);
    };
  }(Wt || (Wt = {})), function (e) {
    e.is = function (e) {
      var t = e;return t && (void 0 !== t.changes || void 0 !== t.documentChanges) && (void 0 === t.documentChanges || bn.typedArray(t.documentChanges, Wt.is));
    };
  }(jt || (jt = {}));var Kt,
      Ft,
      Ht,
      Yt,
      zt,
      Gt,
      Jt,
      $t,
      Qt,
      Zt,
      Xt,
      en,
      tn,
      nn,
      rn,
      on,
      an,
      sn = function () {
    function e(e) {
      this.edits = e;
    }return e.prototype.insert = function (e, t) {
      this.edits.push(Vt.insert(e, t));
    }, e.prototype.replace = function (e, t) {
      this.edits.push(Vt.replace(e, t));
    }, e.prototype.delete = function (e) {
      this.edits.push(Vt.del(e));
    }, e.prototype.add = function (e) {
      this.edits.push(e);
    }, e.prototype.all = function () {
      return this.edits;
    }, e.prototype.clear = function () {
      this.edits.splice(0, this.edits.length);
    }, e;
  }();!function () {
    function e(e) {
      var t = this;this._textEditChanges = Object.create(null), e && (this._workspaceEdit = e, e.documentChanges ? e.documentChanges.forEach(function (e) {
        var n = new sn(e.edits);t._textEditChanges[e.textDocument.uri] = n;
      }) : e.changes && Object.keys(e.changes).forEach(function (n) {
        var r = new sn(e.changes[n]);t._textEditChanges[n] = r;
      }));
    }Object.defineProperty(e.prototype, "edit", { get: function get() {
        return this._workspaceEdit;
      }, enumerable: !0, configurable: !0 }), e.prototype.getTextEditChange = function (e) {
      if (Ft.is(e)) {
        if (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }), !this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for versioned document changes.");var t = e;if (!(r = this._textEditChanges[t.uri])) {
          var n = { textDocument: t, edits: i = [] };this._workspaceEdit.documentChanges.push(n), r = new sn(i), this._textEditChanges[t.uri] = r;
        }return r;
      }if (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }), !this._workspaceEdit.changes) throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if (!(r = this._textEditChanges[e])) {
        var i = [];this._workspaceEdit.changes[e] = i, r = new sn(i), this._textEditChanges[e] = r;
      }return r;
    };
  }();!function (e) {
    e.create = function (e) {
      return { uri: e };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && bn.string(t.uri);
    };
  }(Kt || (Kt = {})), function (e) {
    e.create = function (e, t) {
      return { uri: e, version: t };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && bn.string(t.uri) && bn.number(t.version);
    };
  }(Ft || (Ft = {})), function (e) {
    e.create = function (e, t, n, r) {
      return { uri: e, languageId: t, version: n, text: r };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && bn.string(t.uri) && bn.string(t.languageId) && bn.number(t.version) && bn.string(t.text);
    };
  }(Ht || (Ht = {})), function (e) {
    e.PlainText = "plaintext", e.Markdown = "markdown";
  }(Yt || (Yt = {})), function (e) {
    e.is = function (t) {
      var n = t;return n === e.PlainText || n === e.Markdown;
    };
  }(Yt || (Yt = {})), function (e) {
    e.is = function (e) {
      var t = e;return bn.objectLiteral(e) && Yt.is(t.kind) && bn.string(t.value);
    };
  }(zt || (zt = {})), function (e) {
    e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
  }(Gt || (Gt = {})), function (e) {
    e.PlainText = 1, e.Snippet = 2;
  }(Jt || (Jt = {})), function (e) {
    e.create = function (e) {
      return { label: e };
    };
  }($t || ($t = {})), function (e) {
    e.create = function (e, t) {
      return { items: e || [], isIncomplete: !!t };
    };
  }(Qt || (Qt = {})), function (e) {
    e.fromPlainText = function (e) {
      return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }, e.is = function (e) {
      var t = e;return bn.string(t) || bn.objectLiteral(t) && bn.string(t.language) && bn.string(t.value);
    };
  }(Zt || (Zt = {})), function (e) {
    e.is = function (e) {
      var t = e;return bn.objectLiteral(t) && (zt.is(t.contents) || Zt.is(t.contents) || bn.typedArray(t.contents, Zt.is)) && (void 0 === e.range || At.is(e.range));
    };
  }(Xt || (Xt = {})), function (e) {
    e.create = function (e, t) {
      return t ? { label: e, documentation: t } : { label: e };
    };
  }(en || (en = {})), function (e) {
    e.create = function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) {
        n[r - 2] = arguments[r];
      }var i = { label: e };return bn.defined(t) && (i.documentation = t), bn.defined(n) ? i.parameters = n : i.parameters = [], i;
    };
  }(tn || (tn = {})), function (e) {
    e.Text = 1, e.Read = 2, e.Write = 3;
  }(nn || (nn = {})), function (e) {
    e.create = function (e, t) {
      var n = { range: e };return bn.number(t) && (n.kind = t), n;
    };
  }(rn || (rn = {})), function (e) {
    e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
  }(on || (on = {})), function (e) {
    e.create = function (e, t, n, r, i) {
      var o = { name: e, kind: t, location: { uri: r, range: n } };return i && (o.containerName = i), o;
    };
  }(an || (an = {}));var un,
      ln,
      cn,
      hn,
      dn,
      fn = function () {
    return function () {};
  }();!function (e) {
    e.create = function (e, t, n, r, i, o) {
      var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };return void 0 !== o && (a.children = o), a;
    }, e.is = function (e) {
      var t = e;return t && bn.string(t.name) && bn.string(t.detail) && bn.number(t.kind) && At.is(t.range) && At.is(t.selectionRange) && (void 0 === t.deprecated || bn.boolean(t.deprecated)) && (void 0 === t.children || Array.isArray(t.children));
    };
  }(fn || (fn = {})), function (e) {
    e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports";
  }(un || (un = {})), function (e) {
    e.create = function (e, t) {
      var n = { diagnostics: e };return void 0 !== t && null !== t && (n.only = t), n;
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && bn.typedArray(t.diagnostics, Ut.is) && (void 0 === t.only || bn.typedArray(t.only, bn.string));
    };
  }(ln || (ln = {})), function (e) {
    e.create = function (e, t, n) {
      var r = { title: e };return Rt.is(t) ? r.command = t : r.edit = t, void 0 !== n && (r.kind = n), r;
    }, e.is = function (e) {
      var t = e;return t && bn.string(t.title) && (void 0 === t.diagnostics || bn.typedArray(t.diagnostics, Ut.is)) && (void 0 === t.kind || bn.string(t.kind)) && (void 0 !== t.edit || void 0 !== t.command) && (void 0 === t.command || Rt.is(t.command)) && (void 0 === t.edit || jt.is(t.edit));
    };
  }(cn || (cn = {})), function (e) {
    e.create = function (e, t) {
      var n = { range: e };return bn.defined(t) && (n.data = t), n;
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && At.is(t.range) && (bn.undefined(t.command) || Rt.is(t.command));
    };
  }(hn || (hn = {})), function (e) {
    e.create = function (e, t) {
      return { tabSize: e, insertSpaces: t };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && bn.number(t.tabSize) && bn.boolean(t.insertSpaces);
    };
  }(dn || (dn = {}));var pn = function () {
    return function () {};
  }();!function (e) {
    e.create = function (e, t, n) {
      return { range: e, target: t, data: n };
    }, e.is = function (e) {
      var t = e;return bn.defined(t) && At.is(t.range) && (bn.undefined(t.target) || bn.string(t.target));
    };
  }(pn || (pn = {}));var gn, mn;!function (e) {
    e.create = function (e, t, n, r) {
      return new _n(e, t, n, r);
    }, e.is = function (e) {
      var t = e;return !!(bn.defined(t) && bn.string(t.uri) && (bn.undefined(t.languageId) || bn.string(t.languageId)) && bn.number(t.lineCount) && bn.func(t.getText) && bn.func(t.positionAt) && bn.func(t.offsetAt));
    }, e.applyEdits = function (e, t) {
      for (var n = e.getText(), r = function e(t, n) {
        if (t.length <= 1) return t;var r = t.length / 2 | 0,
            i = t.slice(0, r),
            o = t.slice(r);e(i, n), e(o, n);for (var a = 0, s = 0, u = 0; a < i.length && s < o.length;) {
          var l = n(i[a], o[s]);t[u++] = l <= 0 ? i[a++] : o[s++];
        }for (; a < i.length;) {
          t[u++] = i[a++];
        }for (; s < o.length;) {
          t[u++] = o[s++];
        }return t;
      }(t, function (e, t) {
        var n = e.range.start.line - t.range.start.line;return 0 === n ? e.range.start.character - t.range.start.character : n;
      }), i = n.length, o = r.length - 1; o >= 0; o--) {
        var a = r[o],
            s = e.offsetAt(a.range.start),
            u = e.offsetAt(a.range.end);if (!(u <= i)) throw new Error("Ovelapping edit");n = n.substring(0, s) + a.newText + n.substring(u, n.length), i = s;
      }return n;
    };
  }(gn || (gn = {})), function (e) {
    e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3;
  }(mn || (mn = {}));var bn,
      _n = function () {
    function e(e, t, n, r) {
      this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = null;
    }return Object.defineProperty(e.prototype, "uri", { get: function get() {
        return this._uri;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "languageId", { get: function get() {
        return this._languageId;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "version", { get: function get() {
        return this._version;
      }, enumerable: !0, configurable: !0 }), e.prototype.getText = function (e) {
      if (e) {
        var t = this.offsetAt(e.start),
            n = this.offsetAt(e.end);return this._content.substring(t, n);
      }return this._content;
    }, e.prototype.update = function (e, t) {
      this._content = e.text, this._version = t, this._lineOffsets = null;
    }, e.prototype.getLineOffsets = function () {
      if (null === this._lineOffsets) {
        for (var e = [], t = this._content, n = !0, r = 0; r < t.length; r++) {
          n && (e.push(r), n = !1);var i = t.charAt(r);n = "\r" === i || "\n" === i, "\r" === i && r + 1 < t.length && "\n" === t.charAt(r + 1) && r++;
        }n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
      }return this._lineOffsets;
    }, e.prototype.positionAt = function (e) {
      e = Math.max(Math.min(e, this._content.length), 0);var t = this.getLineOffsets(),
          n = 0,
          r = t.length;if (0 === r) return Et.create(0, e);for (; n < r;) {
        var i = Math.floor((n + r) / 2);t[i] > e ? r = i : n = i + 1;
      }var o = n - 1;return Et.create(o, e - t[o]);
    }, e.prototype.offsetAt = function (e) {
      var t = this.getLineOffsets();if (e.line >= t.length) return this._content.length;if (e.line < 0) return 0;var n = t[e.line],
          r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;return Math.max(Math.min(n + e.character, r), n);
    }, Object.defineProperty(e.prototype, "lineCount", { get: function get() {
        return this.getLineOffsets().length;
      }, enumerable: !0, configurable: !0 }), e;
  }();!function (e) {
    var t = Object.prototype.toString;e.defined = function (e) {
      return void 0 !== e;
    }, e.undefined = function (e) {
      return void 0 === e;
    }, e.boolean = function (e) {
      return !0 === e || !1 === e;
    }, e.string = function (e) {
      return "[object String]" === t.call(e);
    }, e.number = function (e) {
      return "[object Number]" === t.call(e);
    }, e.func = function (e) {
      return "[object Function]" === t.call(e);
    }, e.objectLiteral = function (e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }, e.typedArray = function (e, t) {
      return Array.isArray(e) && e.every(t);
    };
  }(bn || (bn = {}));var vn,
      yn,
      wn,
      Cn,
      Tn = [(yn = ["aria-activedescendant", "aria-atomic:b", "aria-autocomplete:autocomplete", "aria-busy:b", "aria-checked:tristate", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current:current", "aria-describedat", "aria-describedby", "aria-disabled:b", "aria-dropeffect:dropeffect", "aria-errormessage", "aria-expanded:u", "aria-flowto", "aria-grabbed:u", "aria-haspopup:b", "aria-hidden:b", "aria-invalid:invalid", "aria-kbdshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live:live", "aria-modal:b", "aria-multiline:b", "aria-multiselectable:b", "aria-orientation:orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed:tristate", "aria-readonly:b", "aria-relevant:relevant", "aria-required:b", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected:u", "aria-setsize", "aria-sort:sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "accesskey", "class", "contenteditable:b", "contextmenu", "dir:d", "draggable:b", "dropzone", "hidden:v", "id", "itemid", "itemprop", "itemref", "itemscope:v", "itemtype", "lang", "role:roles", "spellcheck:b", "style", "tabindex", "title", "translate:y"], wn = ["onabort", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformchange", "onforminput", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onreadystatechange", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"], Cn = { b: ["true", "false"], u: ["true", "false", "undefined"], o: ["on", "off"], y: ["yes", "no"], w: ["soft", "hard"], d: ["ltr", "rtl", "auto"], m: ["GET", "POST", "dialog"], fm: ["GET", "POST"], s: ["row", "col", "rowgroup", "colgroup"], t: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"], im: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"], bt: ["button", "submit", "reset", "menu"], lt: ["1", "a", "A", "i", "I"], mt: ["context", "toolbar"], mit: ["command", "checkbox", "radio"], et: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"], tk: ["subtitles", "captions", "descriptions", "chapters", "metadata"], pl: ["none", "metadata", "auto"], sh: ["circle", "default", "poly", "rect"], xo: ["anonymous", "use-credentials"], sb: ["allow-forms", "allow-modals", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin", "allow-scripts", "allow-top-navigation"], tristate: ["true", "false", "mixed", "undefined"], inputautocomplete: ["additional-name", "address-level1", "address-level2", "address-level3", "address-level4", "address-line1", "address-line2", "address-line3", "bday", "bday-year", "bday-day", "bday-month", "billing", "cc-additional-name", "cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-family-name", "cc-given-name", "cc-name", "cc-number", "cc-type", "country", "country-name", "current-password", "email", "family-name", "fax", "given-name", "home", "honorific-prefix", "honorific-suffix", "impp", "language", "mobile", "name", "new-password", "nickname", "organization", "organization-title", "pager", "photo", "postal-code", "sex", "shipping", "street-address", "tel-area-code", "tel", "tel-country-code", "tel-extension", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-national", "transaction-amount", "transaction-currency", "url", "username", "work"], autocomplete: ["inline", "list", "both", "none"], current: ["page", "step", "location", "date", "time", "true", "false"], dropeffect: ["copy", "move", "link", "execute", "popup", "none"], invalid: ["grammar", "false", "spelling", "true"], live: ["off", "polite", "assertive"], orientation: ["vertical", "horizontal", "undefined"], relevant: ["additions", "removals", "text", "all", "additions text"], sort: ["ascending", "descending", "none", "other"], roles: ["alert", "alertdialog", "button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "treeitem", "combobox", "grid", "listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid", "application", "article", "cell", "columnheader", "definition", "directory", "document", "feed", "figure", "group", "heading", "img", "list", "listitem", "math", "none", "note", "presentation", "region", "row", "rowgroup", "rowheader", "separator", "table", "term", "text", "toolbar", "banner", "complementary", "contentinfo", "form", "main", "navigation", "region", "search", "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-backlink", "doc-biblioentry", "doc-bibliography", "doc-biblioref", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-cover", "doc-credit", "doc-credits", "doc-dedication", "doc-endnote", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-footnote", "doc-foreword", "doc-glossary", "doc-glossref", "doc-index", "doc-introduction", "doc-noteref", "doc-notice", "doc-pagebreak", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-subtitle", "doc-tip", "doc-toc"] }, { getId: function getId() {
      return "html5";
    }, isApplicable: function isApplicable() {
      return !0;
    }, collectTags: function collectTags(e) {
      return xt(e, Ct);
    }, collectAttributes: function collectAttributes(e, t) {
      kt(e, t, Ct, yn), wn.forEach(function (e) {
        t(e, "event");
      });
    }, collectValues: function collectValues(e, t, n) {
      return St(e, t, n, Ct, yn, Cn);
    } }), function () {
    var e = { input: ["ng-model", "ng-required", "ng-minlength", "ng-maxlength", "ng-pattern", "ng-trim"], select: ["ng-model"], textarea: ["ng-model", "ng-required", "ng-minlength", "ng-maxlength", "ng-pattern", "ng-trim"] },
        t = ["ng-app", "ng-strict-di", "ng-bind", "ng-bind-html", "ng-bind-template", "ng-blur", "ng-change", "ng-checked", "ng-class", "ng-class-even", "ng-class-odd", "ng-click", "ng-cloak", "ng-controller", "ng-copy", "ng-csp", "ng-cut", "ng-dblclick", "ng-disabled", "ng-focus", "ng-form", "ng-hide", "ng-href", "ng-if", "ng-include", "ng-init", "ng-jq", "ng-keydown", "ng-keypress", "ng-keyup", "ng-list", "ng-model-options", "ng-mousedown", "ng-mouseenter", "ng-mouseleave", "ng-mousemove", "ng-mouseover", "ng-mouseup", "ng-non-bindable", "ng-open", "ng-options", "ng-paste", "ng-pluralize", "ng-readonly", "ng-repeat", "ng-selected", "ng-show", "ng-src", "ng-srcset", "ng-style", "ng-submit", "ng-switch", "ng-transclude", "ng-value"];return { getId: function getId() {
        return "angular1";
      }, isApplicable: function isApplicable(e) {
        return "html" === e;
      }, collectTags: function collectTags(e) {}, collectAttributes: function collectAttributes(n, r) {
        if (n) {
          var i = e[n];i && i.forEach(function (e) {
            r(e), r("data-" + e);
          });
        }t.forEach(function (e) {
          r(e), r("data-" + e);
        });
      }, collectValues: function collectValues(e, t, n) {} };
  }(), function () {
    var e = { a: ["nav-direction:navdir", "nav-transition:trans"], button: ["menu-toggle:menusides"] },
        t = ["collection-repeat", "force-refresh-images:b", "ion-stop-event", "item-height", "item-render-buffer", "item-width", "menu-close:v", "on-double-tap", "on-drag", "on-drag-down", "on-drag-left", "on-drag-right", "on-drag-up", "on-hold", "on-release", "on-swipe", "on-swipe-down", "on-swipe-left", "on-swipe-right", "on-swipe-up", "on-tap", "on-touch"],
        n = { align: ["center", "left", "right"], b: ["true", "false"], inputtype: ["email", "number", "password", "search", "tel", "text", "url"], listtype: ["card", "list-inset"], menusides: ["left", "right"], navdir: ["back", "enter", "exit", "forward", "swap"], navsides: ["left", "primary", "right", "secondary"], scrolldir: ["x", "xy", "y"], trans: ["android", "ios", "none"] };return { getId: function getId() {
        return "ionic";
      }, isApplicable: function isApplicable(e) {
        return "html" === e;
      }, collectTags: function collectTags(e) {
        return xt(e, Tt);
      }, collectAttributes: function collectAttributes(n, r) {
        if (kt(n, r, Tt, t), n) {
          var i = e[n];i && i.forEach(function (e) {
            var t = e.split(":");r(t[0], t[1]);
          });
        }
      }, collectValues: function collectValues(r, i, o) {
        return St(r, i, o, Tt, t, n, e);
      } };
  }(), (vn = { a: ["asp-action", "asp-controller", "asp-fragment", "asp-host", "asp-protocol", "asp-route"], div: ["asp-validation-summary"], form: ["asp-action", "asp-controller", "asp-anti-forgery"], input: ["asp-for", "asp-format"], label: ["asp-for"], select: ["asp-for", "asp-items"], span: ["asp-validation-for"] }, { getId: function getId() {
      return "razor";
    }, isApplicable: function isApplicable(e) {
      return "razor" === e;
    }, collectTags: function collectTags(e) {}, collectAttributes: function collectAttributes(e, t) {
      if (e) {
        var n = vn[e];n && n.forEach(function (e) {
          return t(e);
        });
      }
    }, collectValues: function collectValues(e, t, n) {} })],
      xn = { "Aacute;": "Á", Aacute: "Á", "aacute;": "á", aacute: "á", "Abreve;": "Ă", "abreve;": "ă", "ac;": "∾", "acd;": "∿", "acE;": "∾̳", "Acirc;": "Â", Acirc: "Â", "acirc;": "â", acirc: "â", "acute;": "´", acute: "´", "Acy;": "А", "acy;": "а", "AElig;": "Æ", AElig: "Æ", "aelig;": "æ", aelig: "æ", "af;": "⁡", "Afr;": "𝔄", "afr;": "𝔞", "Agrave;": "À", Agrave: "À", "agrave;": "à", agrave: "à", "alefsym;": "ℵ", "aleph;": "ℵ", "Alpha;": "Α", "alpha;": "α", "Amacr;": "Ā", "amacr;": "ā", "amalg;": "⨿", "AMP;": "&", AMP: "&", "amp;": "&", amp: "&", "And;": "⩓", "and;": "∧", "andand;": "⩕", "andd;": "⩜", "andslope;": "⩘", "andv;": "⩚", "ang;": "∠", "ange;": "⦤", "angle;": "∠", "angmsd;": "∡", "angmsdaa;": "⦨", "angmsdab;": "⦩", "angmsdac;": "⦪", "angmsdad;": "⦫", "angmsdae;": "⦬", "angmsdaf;": "⦭", "angmsdag;": "⦮", "angmsdah;": "⦯", "angrt;": "∟", "angrtvb;": "⊾", "angrtvbd;": "⦝", "angsph;": "∢", "angst;": "Å", "angzarr;": "⍼", "Aogon;": "Ą", "aogon;": "ą", "Aopf;": "𝔸", "aopf;": "𝕒", "ap;": "≈", "apacir;": "⩯", "apE;": "⩰", "ape;": "≊", "apid;": "≋", "apos;": "'", "ApplyFunction;": "⁡", "approx;": "≈", "approxeq;": "≊", "Aring;": "Å", Aring: "Å", "aring;": "å", aring: "å", "Ascr;": "𝒜", "ascr;": "𝒶", "Assign;": "≔", "ast;": "*", "asymp;": "≈", "asympeq;": "≍", "Atilde;": "Ã", Atilde: "Ã", "atilde;": "ã", atilde: "ã", "Auml;": "Ä", Auml: "Ä", "auml;": "ä", auml: "ä", "awconint;": "∳", "awint;": "⨑", "backcong;": "≌", "backepsilon;": "϶", "backprime;": "‵", "backsim;": "∽", "backsimeq;": "⋍", "Backslash;": "∖", "Barv;": "⫧", "barvee;": "⊽", "Barwed;": "⌆", "barwed;": "⌅", "barwedge;": "⌅", "bbrk;": "⎵", "bbrktbrk;": "⎶", "bcong;": "≌", "Bcy;": "Б", "bcy;": "б", "bdquo;": "„", "becaus;": "∵", "Because;": "∵", "because;": "∵", "bemptyv;": "⦰", "bepsi;": "϶", "bernou;": "ℬ", "Bernoullis;": "ℬ", "Beta;": "Β", "beta;": "β", "beth;": "ℶ", "between;": "≬", "Bfr;": "𝔅", "bfr;": "𝔟", "bigcap;": "⋂", "bigcirc;": "◯", "bigcup;": "⋃", "bigodot;": "⨀", "bigoplus;": "⨁", "bigotimes;": "⨂", "bigsqcup;": "⨆", "bigstar;": "★", "bigtriangledown;": "▽", "bigtriangleup;": "△", "biguplus;": "⨄", "bigvee;": "⋁", "bigwedge;": "⋀", "bkarow;": "⤍", "blacklozenge;": "⧫", "blacksquare;": "▪", "blacktriangle;": "▴", "blacktriangledown;": "▾", "blacktriangleleft;": "◂", "blacktriangleright;": "▸", "blank;": "␣", "blk12;": "▒", "blk14;": "░", "blk34;": "▓", "block;": "█", "bne;": "=⃥", "bnequiv;": "≡⃥", "bNot;": "⫭", "bnot;": "⌐", "Bopf;": "𝔹", "bopf;": "𝕓", "bot;": "⊥", "bottom;": "⊥", "bowtie;": "⋈", "boxbox;": "⧉", "boxDL;": "╗", "boxDl;": "╖", "boxdL;": "╕", "boxdl;": "┐", "boxDR;": "╔", "boxDr;": "╓", "boxdR;": "╒", "boxdr;": "┌", "boxH;": "═", "boxh;": "─", "boxHD;": "╦", "boxHd;": "╤", "boxhD;": "╥", "boxhd;": "┬", "boxHU;": "╩", "boxHu;": "╧", "boxhU;": "╨", "boxhu;": "┴", "boxminus;": "⊟", "boxplus;": "⊞", "boxtimes;": "⊠", "boxUL;": "╝", "boxUl;": "╜", "boxuL;": "╛", "boxul;": "┘", "boxUR;": "╚", "boxUr;": "╙", "boxuR;": "╘", "boxur;": "└", "boxV;": "║", "boxv;": "│", "boxVH;": "╬", "boxVh;": "╫", "boxvH;": "╪", "boxvh;": "┼", "boxVL;": "╣", "boxVl;": "╢", "boxvL;": "╡", "boxvl;": "┤", "boxVR;": "╠", "boxVr;": "╟", "boxvR;": "╞", "boxvr;": "├", "bprime;": "‵", "Breve;": "˘", "breve;": "˘", "brvbar;": "¦", brvbar: "¦", "Bscr;": "ℬ", "bscr;": "𝒷", "bsemi;": "⁏", "bsim;": "∽", "bsime;": "⋍", "bsol;": "\\", "bsolb;": "⧅", "bsolhsub;": "⟈", "bull;": "•", "bullet;": "•", "bump;": "≎", "bumpE;": "⪮", "bumpe;": "≏", "Bumpeq;": "≎", "bumpeq;": "≏", "Cacute;": "Ć", "cacute;": "ć", "Cap;": "⋒", "cap;": "∩", "capand;": "⩄", "capbrcup;": "⩉", "capcap;": "⩋", "capcup;": "⩇", "capdot;": "⩀", "CapitalDifferentialD;": "ⅅ", "caps;": "∩︀", "caret;": "⁁", "caron;": "ˇ", "Cayleys;": "ℭ", "ccaps;": "⩍", "Ccaron;": "Č", "ccaron;": "č", "Ccedil;": "Ç", Ccedil: "Ç", "ccedil;": "ç", ccedil: "ç", "Ccirc;": "Ĉ", "ccirc;": "ĉ", "Cconint;": "∰", "ccups;": "⩌", "ccupssm;": "⩐", "Cdot;": "Ċ", "cdot;": "ċ", "cedil;": "¸", cedil: "¸", "Cedilla;": "¸", "cemptyv;": "⦲", "cent;": "¢", cent: "¢", "CenterDot;": "·", "centerdot;": "·", "Cfr;": "ℭ", "cfr;": "𝔠", "CHcy;": "Ч", "chcy;": "ч", "check;": "✓", "checkmark;": "✓", "Chi;": "Χ", "chi;": "χ", "cir;": "○", "circ;": "ˆ", "circeq;": "≗", "circlearrowleft;": "↺", "circlearrowright;": "↻", "circledast;": "⊛", "circledcirc;": "⊚", "circleddash;": "⊝", "CircleDot;": "⊙", "circledR;": "®", "circledS;": "Ⓢ", "CircleMinus;": "⊖", "CirclePlus;": "⊕", "CircleTimes;": "⊗", "cirE;": "⧃", "cire;": "≗", "cirfnint;": "⨐", "cirmid;": "⫯", "cirscir;": "⧂", "ClockwiseContourIntegral;": "∲", "CloseCurlyDoubleQuote;": "”", "CloseCurlyQuote;": "’", "clubs;": "♣", "clubsuit;": "♣", "Colon;": "∷", "colon;": ":", "Colone;": "⩴", "colone;": "≔", "coloneq;": "≔", "comma;": ",", "commat;": "@", "comp;": "∁", "compfn;": "∘", "complement;": "∁", "complexes;": "ℂ", "cong;": "≅", "congdot;": "⩭", "Congruent;": "≡", "Conint;": "∯", "conint;": "∮", "ContourIntegral;": "∮", "Copf;": "ℂ", "copf;": "𝕔", "coprod;": "∐", "Coproduct;": "∐", "COPY;": "©", COPY: "©", "copy;": "©", copy: "©", "copysr;": "℗", "CounterClockwiseContourIntegral;": "∳", "crarr;": "↵", "Cross;": "⨯", "cross;": "✗", "Cscr;": "𝒞", "cscr;": "𝒸", "csub;": "⫏", "csube;": "⫑", "csup;": "⫐", "csupe;": "⫒", "ctdot;": "⋯", "cudarrl;": "⤸", "cudarrr;": "⤵", "cuepr;": "⋞", "cuesc;": "⋟", "cularr;": "↶", "cularrp;": "⤽", "Cup;": "⋓", "cup;": "∪", "cupbrcap;": "⩈", "CupCap;": "≍", "cupcap;": "⩆", "cupcup;": "⩊", "cupdot;": "⊍", "cupor;": "⩅", "cups;": "∪︀", "curarr;": "↷", "curarrm;": "⤼", "curlyeqprec;": "⋞", "curlyeqsucc;": "⋟", "curlyvee;": "⋎", "curlywedge;": "⋏", "curren;": "¤", curren: "¤", "curvearrowleft;": "↶", "curvearrowright;": "↷", "cuvee;": "⋎", "cuwed;": "⋏", "cwconint;": "∲", "cwint;": "∱", "cylcty;": "⌭", "Dagger;": "‡", "dagger;": "†", "daleth;": "ℸ", "Darr;": "↡", "dArr;": "⇓", "darr;": "↓", "dash;": "‐", "Dashv;": "⫤", "dashv;": "⊣", "dbkarow;": "⤏", "dblac;": "˝", "Dcaron;": "Ď", "dcaron;": "ď", "Dcy;": "Д", "dcy;": "д", "DD;": "ⅅ", "dd;": "ⅆ", "ddagger;": "‡", "ddarr;": "⇊", "DDotrahd;": "⤑", "ddotseq;": "⩷", "deg;": "°", deg: "°", "Del;": "∇", "Delta;": "Δ", "delta;": "δ", "demptyv;": "⦱", "dfisht;": "⥿", "Dfr;": "𝔇", "dfr;": "𝔡", "dHar;": "⥥", "dharl;": "⇃", "dharr;": "⇂", "DiacriticalAcute;": "´", "DiacriticalDot;": "˙", "DiacriticalDoubleAcute;": "˝", "DiacriticalGrave;": "`", "DiacriticalTilde;": "˜", "diam;": "⋄", "Diamond;": "⋄", "diamond;": "⋄", "diamondsuit;": "♦", "diams;": "♦", "die;": "¨", "DifferentialD;": "ⅆ", "digamma;": "ϝ", "disin;": "⋲", "div;": "÷", "divide;": "÷", divide: "÷", "divideontimes;": "⋇", "divonx;": "⋇", "DJcy;": "Ђ", "djcy;": "ђ", "dlcorn;": "⌞", "dlcrop;": "⌍", "dollar;": "$", "Dopf;": "𝔻", "dopf;": "𝕕", "Dot;": "¨", "dot;": "˙", "DotDot;": "⃜", "doteq;": "≐", "doteqdot;": "≑", "DotEqual;": "≐", "dotminus;": "∸", "dotplus;": "∔", "dotsquare;": "⊡", "doublebarwedge;": "⌆", "DoubleContourIntegral;": "∯", "DoubleDot;": "¨", "DoubleDownArrow;": "⇓", "DoubleLeftArrow;": "⇐", "DoubleLeftRightArrow;": "⇔", "DoubleLeftTee;": "⫤", "DoubleLongLeftArrow;": "⟸", "DoubleLongLeftRightArrow;": "⟺", "DoubleLongRightArrow;": "⟹", "DoubleRightArrow;": "⇒", "DoubleRightTee;": "⊨", "DoubleUpArrow;": "⇑", "DoubleUpDownArrow;": "⇕", "DoubleVerticalBar;": "∥", "DownArrow;": "↓", "Downarrow;": "⇓", "downarrow;": "↓", "DownArrowBar;": "⤓", "DownArrowUpArrow;": "⇵", "DownBreve;": "̑", "downdownarrows;": "⇊", "downharpoonleft;": "⇃", "downharpoonright;": "⇂", "DownLeftRightVector;": "⥐", "DownLeftTeeVector;": "⥞", "DownLeftVector;": "↽", "DownLeftVectorBar;": "⥖", "DownRightTeeVector;": "⥟", "DownRightVector;": "⇁", "DownRightVectorBar;": "⥗", "DownTee;": "⊤", "DownTeeArrow;": "↧", "drbkarow;": "⤐", "drcorn;": "⌟", "drcrop;": "⌌", "Dscr;": "𝒟", "dscr;": "𝒹", "DScy;": "Ѕ", "dscy;": "ѕ", "dsol;": "⧶", "Dstrok;": "Đ", "dstrok;": "đ", "dtdot;": "⋱", "dtri;": "▿", "dtrif;": "▾", "duarr;": "⇵", "duhar;": "⥯", "dwangle;": "⦦", "DZcy;": "Џ", "dzcy;": "џ", "dzigrarr;": "⟿", "Eacute;": "É", Eacute: "É", "eacute;": "é", eacute: "é", "easter;": "⩮", "Ecaron;": "Ě", "ecaron;": "ě", "ecir;": "≖", "Ecirc;": "Ê", Ecirc: "Ê", "ecirc;": "ê", ecirc: "ê", "ecolon;": "≕", "Ecy;": "Э", "ecy;": "э", "eDDot;": "⩷", "Edot;": "Ė", "eDot;": "≑", "edot;": "ė", "ee;": "ⅇ", "efDot;": "≒", "Efr;": "𝔈", "efr;": "𝔢", "eg;": "⪚", "Egrave;": "È", Egrave: "È", "egrave;": "è", egrave: "è", "egs;": "⪖", "egsdot;": "⪘", "el;": "⪙", "Element;": "∈", "elinters;": "⏧", "ell;": "ℓ", "els;": "⪕", "elsdot;": "⪗", "Emacr;": "Ē", "emacr;": "ē", "empty;": "∅", "emptyset;": "∅", "EmptySmallSquare;": "◻", "emptyv;": "∅", "EmptyVerySmallSquare;": "▫", "emsp;": " ", "emsp13;": " ", "emsp14;": " ", "ENG;": "Ŋ", "eng;": "ŋ", "ensp;": " ", "Eogon;": "Ę", "eogon;": "ę", "Eopf;": "𝔼", "eopf;": "𝕖", "epar;": "⋕", "eparsl;": "⧣", "eplus;": "⩱", "epsi;": "ε", "Epsilon;": "Ε", "epsilon;": "ε", "epsiv;": "ϵ", "eqcirc;": "≖", "eqcolon;": "≕", "eqsim;": "≂", "eqslantgtr;": "⪖", "eqslantless;": "⪕", "Equal;": "⩵", "equals;": "=", "EqualTilde;": "≂", "equest;": "≟", "Equilibrium;": "⇌", "equiv;": "≡", "equivDD;": "⩸", "eqvparsl;": "⧥", "erarr;": "⥱", "erDot;": "≓", "Escr;": "ℰ", "escr;": "ℯ", "esdot;": "≐", "Esim;": "⩳", "esim;": "≂", "Eta;": "Η", "eta;": "η", "ETH;": "Ð", ETH: "Ð", "eth;": "ð", eth: "ð", "Euml;": "Ë", Euml: "Ë", "euml;": "ë", euml: "ë", "euro;": "€", "excl;": "!", "exist;": "∃", "Exists;": "∃", "expectation;": "ℰ", "ExponentialE;": "ⅇ", "exponentiale;": "ⅇ", "fallingdotseq;": "≒", "Fcy;": "Ф", "fcy;": "ф", "female;": "♀", "ffilig;": "ﬃ", "fflig;": "ﬀ", "ffllig;": "ﬄ", "Ffr;": "𝔉", "ffr;": "𝔣", "filig;": "ﬁ", "FilledSmallSquare;": "◼", "FilledVerySmallSquare;": "▪", "fjlig;": "fj", "flat;": "♭", "fllig;": "ﬂ", "fltns;": "▱", "fnof;": "ƒ", "Fopf;": "𝔽", "fopf;": "𝕗", "ForAll;": "∀", "forall;": "∀", "fork;": "⋔", "forkv;": "⫙", "Fouriertrf;": "ℱ", "fpartint;": "⨍", "frac12;": "½", frac12: "½", "frac13;": "⅓", "frac14;": "¼", frac14: "¼", "frac15;": "⅕", "frac16;": "⅙", "frac18;": "⅛", "frac23;": "⅔", "frac25;": "⅖", "frac34;": "¾", frac34: "¾", "frac35;": "⅗", "frac38;": "⅜", "frac45;": "⅘", "frac56;": "⅚", "frac58;": "⅝", "frac78;": "⅞", "frasl;": "⁄", "frown;": "⌢", "Fscr;": "ℱ", "fscr;": "𝒻", "gacute;": "ǵ", "Gamma;": "Γ", "gamma;": "γ", "Gammad;": "Ϝ", "gammad;": "ϝ", "gap;": "⪆", "Gbreve;": "Ğ", "gbreve;": "ğ", "Gcedil;": "Ģ", "Gcirc;": "Ĝ", "gcirc;": "ĝ", "Gcy;": "Г", "gcy;": "г", "Gdot;": "Ġ", "gdot;": "ġ", "gE;": "≧", "ge;": "≥", "gEl;": "⪌", "gel;": "⋛", "geq;": "≥", "geqq;": "≧", "geqslant;": "⩾", "ges;": "⩾", "gescc;": "⪩", "gesdot;": "⪀", "gesdoto;": "⪂", "gesdotol;": "⪄", "gesl;": "⋛︀", "gesles;": "⪔", "Gfr;": "𝔊", "gfr;": "𝔤", "Gg;": "⋙", "gg;": "≫", "ggg;": "⋙", "gimel;": "ℷ", "GJcy;": "Ѓ", "gjcy;": "ѓ", "gl;": "≷", "gla;": "⪥", "glE;": "⪒", "glj;": "⪤", "gnap;": "⪊", "gnapprox;": "⪊", "gnE;": "≩", "gne;": "⪈", "gneq;": "⪈", "gneqq;": "≩", "gnsim;": "⋧", "Gopf;": "𝔾", "gopf;": "𝕘", "grave;": "`", "GreaterEqual;": "≥", "GreaterEqualLess;": "⋛", "GreaterFullEqual;": "≧", "GreaterGreater;": "⪢", "GreaterLess;": "≷", "GreaterSlantEqual;": "⩾", "GreaterTilde;": "≳", "Gscr;": "𝒢", "gscr;": "ℊ", "gsim;": "≳", "gsime;": "⪎", "gsiml;": "⪐", "GT;": ">", GT: ">", "Gt;": "≫", "gt;": ">", gt: ">", "gtcc;": "⪧", "gtcir;": "⩺", "gtdot;": "⋗", "gtlPar;": "⦕", "gtquest;": "⩼", "gtrapprox;": "⪆", "gtrarr;": "⥸", "gtrdot;": "⋗", "gtreqless;": "⋛", "gtreqqless;": "⪌", "gtrless;": "≷", "gtrsim;": "≳", "gvertneqq;": "≩︀", "gvnE;": "≩︀", "Hacek;": "ˇ", "hairsp;": " ", "half;": "½", "hamilt;": "ℋ", "HARDcy;": "Ъ", "hardcy;": "ъ", "hArr;": "⇔", "harr;": "↔", "harrcir;": "⥈", "harrw;": "↭", "Hat;": "^", "hbar;": "ℏ", "Hcirc;": "Ĥ", "hcirc;": "ĥ", "hearts;": "♥", "heartsuit;": "♥", "hellip;": "…", "hercon;": "⊹", "Hfr;": "ℌ", "hfr;": "𝔥", "HilbertSpace;": "ℋ", "hksearow;": "⤥", "hkswarow;": "⤦", "hoarr;": "⇿", "homtht;": "∻", "hookleftarrow;": "↩", "hookrightarrow;": "↪", "Hopf;": "ℍ", "hopf;": "𝕙", "horbar;": "―", "HorizontalLine;": "─", "Hscr;": "ℋ", "hscr;": "𝒽", "hslash;": "ℏ", "Hstrok;": "Ħ", "hstrok;": "ħ", "HumpDownHump;": "≎", "HumpEqual;": "≏", "hybull;": "⁃", "hyphen;": "‐", "Iacute;": "Í", Iacute: "Í", "iacute;": "í", iacute: "í", "ic;": "⁣", "Icirc;": "Î", Icirc: "Î", "icirc;": "î", icirc: "î", "Icy;": "И", "icy;": "и", "Idot;": "İ", "IEcy;": "Е", "iecy;": "е", "iexcl;": "¡", iexcl: "¡", "iff;": "⇔", "Ifr;": "ℑ", "ifr;": "𝔦", "Igrave;": "Ì", Igrave: "Ì", "igrave;": "ì", igrave: "ì", "ii;": "ⅈ", "iiiint;": "⨌", "iiint;": "∭", "iinfin;": "⧜", "iiota;": "℩", "IJlig;": "Ĳ", "ijlig;": "ĳ", "Im;": "ℑ", "Imacr;": "Ī", "imacr;": "ī", "image;": "ℑ", "ImaginaryI;": "ⅈ", "imagline;": "ℐ", "imagpart;": "ℑ", "imath;": "ı", "imof;": "⊷", "imped;": "Ƶ", "Implies;": "⇒", "in;": "∈", "incare;": "℅", "infin;": "∞", "infintie;": "⧝", "inodot;": "ı", "Int;": "∬", "int;": "∫", "intcal;": "⊺", "integers;": "ℤ", "Integral;": "∫", "intercal;": "⊺", "Intersection;": "⋂", "intlarhk;": "⨗", "intprod;": "⨼", "InvisibleComma;": "⁣", "InvisibleTimes;": "⁢", "IOcy;": "Ё", "iocy;": "ё", "Iogon;": "Į", "iogon;": "į", "Iopf;": "𝕀", "iopf;": "𝕚", "Iota;": "Ι", "iota;": "ι", "iprod;": "⨼", "iquest;": "¿", iquest: "¿", "Iscr;": "ℐ", "iscr;": "𝒾", "isin;": "∈", "isindot;": "⋵", "isinE;": "⋹", "isins;": "⋴", "isinsv;": "⋳", "isinv;": "∈", "it;": "⁢", "Itilde;": "Ĩ", "itilde;": "ĩ", "Iukcy;": "І", "iukcy;": "і", "Iuml;": "Ï", Iuml: "Ï", "iuml;": "ï", iuml: "ï", "Jcirc;": "Ĵ", "jcirc;": "ĵ", "Jcy;": "Й", "jcy;": "й", "Jfr;": "𝔍", "jfr;": "𝔧", "jmath;": "ȷ", "Jopf;": "𝕁", "jopf;": "𝕛", "Jscr;": "𝒥", "jscr;": "𝒿", "Jsercy;": "Ј", "jsercy;": "ј", "Jukcy;": "Є", "jukcy;": "є", "Kappa;": "Κ", "kappa;": "κ", "kappav;": "ϰ", "Kcedil;": "Ķ", "kcedil;": "ķ", "Kcy;": "К", "kcy;": "к", "Kfr;": "𝔎", "kfr;": "𝔨", "kgreen;": "ĸ", "KHcy;": "Х", "khcy;": "х", "KJcy;": "Ќ", "kjcy;": "ќ", "Kopf;": "𝕂", "kopf;": "𝕜", "Kscr;": "𝒦", "kscr;": "𝓀", "lAarr;": "⇚", "Lacute;": "Ĺ", "lacute;": "ĺ", "laemptyv;": "⦴", "lagran;": "ℒ", "Lambda;": "Λ", "lambda;": "λ", "Lang;": "⟪", "lang;": "⟨", "langd;": "⦑", "langle;": "⟨", "lap;": "⪅", "Laplacetrf;": "ℒ", "laquo;": "«", laquo: "«", "Larr;": "↞", "lArr;": "⇐", "larr;": "←", "larrb;": "⇤", "larrbfs;": "⤟", "larrfs;": "⤝", "larrhk;": "↩", "larrlp;": "↫", "larrpl;": "⤹", "larrsim;": "⥳", "larrtl;": "↢", "lat;": "⪫", "lAtail;": "⤛", "latail;": "⤙", "late;": "⪭", "lates;": "⪭︀", "lBarr;": "⤎", "lbarr;": "⤌", "lbbrk;": "❲", "lbrace;": "{", "lbrack;": "[", "lbrke;": "⦋", "lbrksld;": "⦏", "lbrkslu;": "⦍", "Lcaron;": "Ľ", "lcaron;": "ľ", "Lcedil;": "Ļ", "lcedil;": "ļ", "lceil;": "⌈", "lcub;": "{", "Lcy;": "Л", "lcy;": "л", "ldca;": "⤶", "ldquo;": "“", "ldquor;": "„", "ldrdhar;": "⥧", "ldrushar;": "⥋", "ldsh;": "↲", "lE;": "≦", "le;": "≤", "LeftAngleBracket;": "⟨", "LeftArrow;": "←", "Leftarrow;": "⇐", "leftarrow;": "←", "LeftArrowBar;": "⇤", "LeftArrowRightArrow;": "⇆", "leftarrowtail;": "↢", "LeftCeiling;": "⌈", "LeftDoubleBracket;": "⟦", "LeftDownTeeVector;": "⥡", "LeftDownVector;": "⇃", "LeftDownVectorBar;": "⥙", "LeftFloor;": "⌊", "leftharpoondown;": "↽", "leftharpoonup;": "↼", "leftleftarrows;": "⇇", "LeftRightArrow;": "↔", "Leftrightarrow;": "⇔", "leftrightarrow;": "↔", "leftrightarrows;": "⇆", "leftrightharpoons;": "⇋", "leftrightsquigarrow;": "↭", "LeftRightVector;": "⥎", "LeftTee;": "⊣", "LeftTeeArrow;": "↤", "LeftTeeVector;": "⥚", "leftthreetimes;": "⋋", "LeftTriangle;": "⊲", "LeftTriangleBar;": "⧏", "LeftTriangleEqual;": "⊴", "LeftUpDownVector;": "⥑", "LeftUpTeeVector;": "⥠", "LeftUpVector;": "↿", "LeftUpVectorBar;": "⥘", "LeftVector;": "↼", "LeftVectorBar;": "⥒", "lEg;": "⪋", "leg;": "⋚", "leq;": "≤", "leqq;": "≦", "leqslant;": "⩽", "les;": "⩽", "lescc;": "⪨", "lesdot;": "⩿", "lesdoto;": "⪁", "lesdotor;": "⪃", "lesg;": "⋚︀", "lesges;": "⪓", "lessapprox;": "⪅", "lessdot;": "⋖", "lesseqgtr;": "⋚", "lesseqqgtr;": "⪋", "LessEqualGreater;": "⋚", "LessFullEqual;": "≦", "LessGreater;": "≶", "lessgtr;": "≶", "LessLess;": "⪡", "lesssim;": "≲", "LessSlantEqual;": "⩽", "LessTilde;": "≲", "lfisht;": "⥼", "lfloor;": "⌊", "Lfr;": "𝔏", "lfr;": "𝔩", "lg;": "≶", "lgE;": "⪑", "lHar;": "⥢", "lhard;": "↽", "lharu;": "↼", "lharul;": "⥪", "lhblk;": "▄", "LJcy;": "Љ", "ljcy;": "љ", "Ll;": "⋘", "ll;": "≪", "llarr;": "⇇", "llcorner;": "⌞", "Lleftarrow;": "⇚", "llhard;": "⥫", "lltri;": "◺", "Lmidot;": "Ŀ", "lmidot;": "ŀ", "lmoust;": "⎰", "lmoustache;": "⎰", "lnap;": "⪉", "lnapprox;": "⪉", "lnE;": "≨", "lne;": "⪇", "lneq;": "⪇", "lneqq;": "≨", "lnsim;": "⋦", "loang;": "⟬", "loarr;": "⇽", "lobrk;": "⟦", "LongLeftArrow;": "⟵", "Longleftarrow;": "⟸", "longleftarrow;": "⟵", "LongLeftRightArrow;": "⟷", "Longleftrightarrow;": "⟺", "longleftrightarrow;": "⟷", "longmapsto;": "⟼", "LongRightArrow;": "⟶", "Longrightarrow;": "⟹", "longrightarrow;": "⟶", "looparrowleft;": "↫", "looparrowright;": "↬", "lopar;": "⦅", "Lopf;": "𝕃", "lopf;": "𝕝", "loplus;": "⨭", "lotimes;": "⨴", "lowast;": "∗", "lowbar;": "_", "LowerLeftArrow;": "↙", "LowerRightArrow;": "↘", "loz;": "◊", "lozenge;": "◊", "lozf;": "⧫", "lpar;": "(", "lparlt;": "⦓", "lrarr;": "⇆", "lrcorner;": "⌟", "lrhar;": "⇋", "lrhard;": "⥭", "lrm;": "‎", "lrtri;": "⊿", "lsaquo;": "‹", "Lscr;": "ℒ", "lscr;": "𝓁", "Lsh;": "↰", "lsh;": "↰", "lsim;": "≲", "lsime;": "⪍", "lsimg;": "⪏", "lsqb;": "[", "lsquo;": "‘", "lsquor;": "‚", "Lstrok;": "Ł", "lstrok;": "ł", "LT;": "<", LT: "<", "Lt;": "≪", "lt;": "<", lt: "<", "ltcc;": "⪦", "ltcir;": "⩹", "ltdot;": "⋖", "lthree;": "⋋", "ltimes;": "⋉", "ltlarr;": "⥶", "ltquest;": "⩻", "ltri;": "◃", "ltrie;": "⊴", "ltrif;": "◂", "ltrPar;": "⦖", "lurdshar;": "⥊", "luruhar;": "⥦", "lvertneqq;": "≨︀", "lvnE;": "≨︀", "macr;": "¯", macr: "¯", "male;": "♂", "malt;": "✠", "maltese;": "✠", "Map;": "⤅", "map;": "↦", "mapsto;": "↦", "mapstodown;": "↧", "mapstoleft;": "↤", "mapstoup;": "↥", "marker;": "▮", "mcomma;": "⨩", "Mcy;": "М", "mcy;": "м", "mdash;": "—", "mDDot;": "∺", "measuredangle;": "∡", "MediumSpace;": " ", "Mellintrf;": "ℳ", "Mfr;": "𝔐", "mfr;": "𝔪", "mho;": "℧", "micro;": "µ", micro: "µ", "mid;": "∣", "midast;": "*", "midcir;": "⫰", "middot;": "·", middot: "·", "minus;": "−", "minusb;": "⊟", "minusd;": "∸", "minusdu;": "⨪", "MinusPlus;": "∓", "mlcp;": "⫛", "mldr;": "…", "mnplus;": "∓", "models;": "⊧", "Mopf;": "𝕄", "mopf;": "𝕞", "mp;": "∓", "Mscr;": "ℳ", "mscr;": "𝓂", "mstpos;": "∾", "Mu;": "Μ", "mu;": "μ", "multimap;": "⊸", "mumap;": "⊸", "nabla;": "∇", "Nacute;": "Ń", "nacute;": "ń", "nang;": "∠⃒", "nap;": "≉", "napE;": "⩰̸", "napid;": "≋̸", "napos;": "ŉ", "napprox;": "≉", "natur;": "♮", "natural;": "♮", "naturals;": "ℕ", "nbsp;": " ", nbsp: " ", "nbump;": "≎̸", "nbumpe;": "≏̸", "ncap;": "⩃", "Ncaron;": "Ň", "ncaron;": "ň", "Ncedil;": "Ņ", "ncedil;": "ņ", "ncong;": "≇", "ncongdot;": "⩭̸", "ncup;": "⩂", "Ncy;": "Н", "ncy;": "н", "ndash;": "–", "ne;": "≠", "nearhk;": "⤤", "neArr;": "⇗", "nearr;": "↗", "nearrow;": "↗", "nedot;": "≐̸", "NegativeMediumSpace;": "​", "NegativeThickSpace;": "​", "NegativeThinSpace;": "​", "NegativeVeryThinSpace;": "​", "nequiv;": "≢", "nesear;": "⤨", "nesim;": "≂̸", "NestedGreaterGreater;": "≫", "NestedLessLess;": "≪", "NewLine;": "\n", "nexist;": "∄", "nexists;": "∄", "Nfr;": "𝔑", "nfr;": "𝔫", "ngE;": "≧̸", "nge;": "≱", "ngeq;": "≱", "ngeqq;": "≧̸", "ngeqslant;": "⩾̸", "nges;": "⩾̸", "nGg;": "⋙̸", "ngsim;": "≵", "nGt;": "≫⃒", "ngt;": "≯", "ngtr;": "≯", "nGtv;": "≫̸", "nhArr;": "⇎", "nharr;": "↮", "nhpar;": "⫲", "ni;": "∋", "nis;": "⋼", "nisd;": "⋺", "niv;": "∋", "NJcy;": "Њ", "njcy;": "њ", "nlArr;": "⇍", "nlarr;": "↚", "nldr;": "‥", "nlE;": "≦̸", "nle;": "≰", "nLeftarrow;": "⇍", "nleftarrow;": "↚", "nLeftrightarrow;": "⇎", "nleftrightarrow;": "↮", "nleq;": "≰", "nleqq;": "≦̸", "nleqslant;": "⩽̸", "nles;": "⩽̸", "nless;": "≮", "nLl;": "⋘̸", "nlsim;": "≴", "nLt;": "≪⃒", "nlt;": "≮", "nltri;": "⋪", "nltrie;": "⋬", "nLtv;": "≪̸", "nmid;": "∤", "NoBreak;": "⁠", "NonBreakingSpace;": " ", "Nopf;": "ℕ", "nopf;": "𝕟", "Not;": "⫬", "not;": "¬", not: "¬", "NotCongruent;": "≢", "NotCupCap;": "≭", "NotDoubleVerticalBar;": "∦", "NotElement;": "∉", "NotEqual;": "≠", "NotEqualTilde;": "≂̸", "NotExists;": "∄", "NotGreater;": "≯", "NotGreaterEqual;": "≱", "NotGreaterFullEqual;": "≧̸", "NotGreaterGreater;": "≫̸", "NotGreaterLess;": "≹", "NotGreaterSlantEqual;": "⩾̸", "NotGreaterTilde;": "≵", "NotHumpDownHump;": "≎̸", "NotHumpEqual;": "≏̸", "notin;": "∉", "notindot;": "⋵̸", "notinE;": "⋹̸", "notinva;": "∉", "notinvb;": "⋷", "notinvc;": "⋶", "NotLeftTriangle;": "⋪", "NotLeftTriangleBar;": "⧏̸", "NotLeftTriangleEqual;": "⋬", "NotLess;": "≮", "NotLessEqual;": "≰", "NotLessGreater;": "≸", "NotLessLess;": "≪̸", "NotLessSlantEqual;": "⩽̸", "NotLessTilde;": "≴", "NotNestedGreaterGreater;": "⪢̸", "NotNestedLessLess;": "⪡̸", "notni;": "∌", "notniva;": "∌", "notnivb;": "⋾", "notnivc;": "⋽", "NotPrecedes;": "⊀", "NotPrecedesEqual;": "⪯̸", "NotPrecedesSlantEqual;": "⋠", "NotReverseElement;": "∌", "NotRightTriangle;": "⋫", "NotRightTriangleBar;": "⧐̸", "NotRightTriangleEqual;": "⋭", "NotSquareSubset;": "⊏̸", "NotSquareSubsetEqual;": "⋢", "NotSquareSuperset;": "⊐̸", "NotSquareSupersetEqual;": "⋣", "NotSubset;": "⊂⃒", "NotSubsetEqual;": "⊈", "NotSucceeds;": "⊁", "NotSucceedsEqual;": "⪰̸", "NotSucceedsSlantEqual;": "⋡", "NotSucceedsTilde;": "≿̸", "NotSuperset;": "⊃⃒", "NotSupersetEqual;": "⊉", "NotTilde;": "≁", "NotTildeEqual;": "≄", "NotTildeFullEqual;": "≇", "NotTildeTilde;": "≉", "NotVerticalBar;": "∤", "npar;": "∦", "nparallel;": "∦", "nparsl;": "⫽⃥", "npart;": "∂̸", "npolint;": "⨔", "npr;": "⊀", "nprcue;": "⋠", "npre;": "⪯̸", "nprec;": "⊀", "npreceq;": "⪯̸", "nrArr;": "⇏", "nrarr;": "↛", "nrarrc;": "⤳̸", "nrarrw;": "↝̸", "nRightarrow;": "⇏", "nrightarrow;": "↛", "nrtri;": "⋫", "nrtrie;": "⋭", "nsc;": "⊁", "nsccue;": "⋡", "nsce;": "⪰̸", "Nscr;": "𝒩", "nscr;": "𝓃", "nshortmid;": "∤", "nshortparallel;": "∦", "nsim;": "≁", "nsime;": "≄", "nsimeq;": "≄", "nsmid;": "∤", "nspar;": "∦", "nsqsube;": "⋢", "nsqsupe;": "⋣", "nsub;": "⊄", "nsubE;": "⫅̸", "nsube;": "⊈", "nsubset;": "⊂⃒", "nsubseteq;": "⊈", "nsubseteqq;": "⫅̸", "nsucc;": "⊁", "nsucceq;": "⪰̸", "nsup;": "⊅", "nsupE;": "⫆̸", "nsupe;": "⊉", "nsupset;": "⊃⃒", "nsupseteq;": "⊉", "nsupseteqq;": "⫆̸", "ntgl;": "≹", "Ntilde;": "Ñ", Ntilde: "Ñ", "ntilde;": "ñ", ntilde: "ñ", "ntlg;": "≸", "ntriangleleft;": "⋪", "ntrianglelefteq;": "⋬", "ntriangleright;": "⋫", "ntrianglerighteq;": "⋭", "Nu;": "Ν", "nu;": "ν", "num;": "#", "numero;": "№", "numsp;": " ", "nvap;": "≍⃒", "nVDash;": "⊯", "nVdash;": "⊮", "nvDash;": "⊭", "nvdash;": "⊬", "nvge;": "≥⃒", "nvgt;": ">⃒", "nvHarr;": "⤄", "nvinfin;": "⧞", "nvlArr;": "⤂", "nvle;": "≤⃒", "nvlt;": "<⃒", "nvltrie;": "⊴⃒", "nvrArr;": "⤃", "nvrtrie;": "⊵⃒", "nvsim;": "∼⃒", "nwarhk;": "⤣", "nwArr;": "⇖", "nwarr;": "↖", "nwarrow;": "↖", "nwnear;": "⤧", "Oacute;": "Ó", Oacute: "Ó", "oacute;": "ó", oacute: "ó", "oast;": "⊛", "ocir;": "⊚", "Ocirc;": "Ô", Ocirc: "Ô", "ocirc;": "ô", ocirc: "ô", "Ocy;": "О", "ocy;": "о", "odash;": "⊝", "Odblac;": "Ő", "odblac;": "ő", "odiv;": "⨸", "odot;": "⊙", "odsold;": "⦼", "OElig;": "Œ", "oelig;": "œ", "ofcir;": "⦿", "Ofr;": "𝔒", "ofr;": "𝔬", "ogon;": "˛", "Ograve;": "Ò", Ograve: "Ò", "ograve;": "ò", ograve: "ò", "ogt;": "⧁", "ohbar;": "⦵", "ohm;": "Ω", "oint;": "∮", "olarr;": "↺", "olcir;": "⦾", "olcross;": "⦻", "oline;": "‾", "olt;": "⧀", "Omacr;": "Ō", "omacr;": "ō", "Omega;": "Ω", "omega;": "ω", "Omicron;": "Ο", "omicron;": "ο", "omid;": "⦶", "ominus;": "⊖", "Oopf;": "𝕆", "oopf;": "𝕠", "opar;": "⦷", "OpenCurlyDoubleQuote;": "“", "OpenCurlyQuote;": "‘", "operp;": "⦹", "oplus;": "⊕", "Or;": "⩔", "or;": "∨", "orarr;": "↻", "ord;": "⩝", "order;": "ℴ", "orderof;": "ℴ", "ordf;": "ª", ordf: "ª", "ordm;": "º", ordm: "º", "origof;": "⊶", "oror;": "⩖", "orslope;": "⩗", "orv;": "⩛", "oS;": "Ⓢ", "Oscr;": "𝒪", "oscr;": "ℴ", "Oslash;": "Ø", Oslash: "Ø", "oslash;": "ø", oslash: "ø", "osol;": "⊘", "Otilde;": "Õ", Otilde: "Õ", "otilde;": "õ", otilde: "õ", "Otimes;": "⨷", "otimes;": "⊗", "otimesas;": "⨶", "Ouml;": "Ö", Ouml: "Ö", "ouml;": "ö", ouml: "ö", "ovbar;": "⌽", "OverBar;": "‾", "OverBrace;": "⏞", "OverBracket;": "⎴", "OverParenthesis;": "⏜", "par;": "∥", "para;": "¶", para: "¶", "parallel;": "∥", "parsim;": "⫳", "parsl;": "⫽", "part;": "∂", "PartialD;": "∂", "Pcy;": "П", "pcy;": "п", "percnt;": "%", "period;": ".", "permil;": "‰", "perp;": "⊥", "pertenk;": "‱", "Pfr;": "𝔓", "pfr;": "𝔭", "Phi;": "Φ", "phi;": "φ", "phiv;": "ϕ", "phmmat;": "ℳ", "phone;": "☎", "Pi;": "Π", "pi;": "π", "pitchfork;": "⋔", "piv;": "ϖ", "planck;": "ℏ", "planckh;": "ℎ", "plankv;": "ℏ", "plus;": "+", "plusacir;": "⨣", "plusb;": "⊞", "pluscir;": "⨢", "plusdo;": "∔", "plusdu;": "⨥", "pluse;": "⩲", "PlusMinus;": "±", "plusmn;": "±", plusmn: "±", "plussim;": "⨦", "plustwo;": "⨧", "pm;": "±", "Poincareplane;": "ℌ", "pointint;": "⨕", "Popf;": "ℙ", "popf;": "𝕡", "pound;": "£", pound: "£", "Pr;": "⪻", "pr;": "≺", "prap;": "⪷", "prcue;": "≼", "prE;": "⪳", "pre;": "⪯", "prec;": "≺", "precapprox;": "⪷", "preccurlyeq;": "≼", "Precedes;": "≺", "PrecedesEqual;": "⪯", "PrecedesSlantEqual;": "≼", "PrecedesTilde;": "≾", "preceq;": "⪯", "precnapprox;": "⪹", "precneqq;": "⪵", "precnsim;": "⋨", "precsim;": "≾", "Prime;": "″", "prime;": "′", "primes;": "ℙ", "prnap;": "⪹", "prnE;": "⪵", "prnsim;": "⋨", "prod;": "∏", "Product;": "∏", "profalar;": "⌮", "profline;": "⌒", "profsurf;": "⌓", "prop;": "∝", "Proportion;": "∷", "Proportional;": "∝", "propto;": "∝", "prsim;": "≾", "prurel;": "⊰", "Pscr;": "𝒫", "pscr;": "𝓅", "Psi;": "Ψ", "psi;": "ψ", "puncsp;": " ", "Qfr;": "𝔔", "qfr;": "𝔮", "qint;": "⨌", "Qopf;": "ℚ", "qopf;": "𝕢", "qprime;": "⁗", "Qscr;": "𝒬", "qscr;": "𝓆", "quaternions;": "ℍ", "quatint;": "⨖", "quest;": "?", "questeq;": "≟", "QUOT;": '"', QUOT: '"', "quot;": '"', quot: '"', "rAarr;": "⇛", "race;": "∽̱", "Racute;": "Ŕ", "racute;": "ŕ", "radic;": "√", "raemptyv;": "⦳", "Rang;": "⟫", "rang;": "⟩", "rangd;": "⦒", "range;": "⦥", "rangle;": "⟩", "raquo;": "»", raquo: "»", "Rarr;": "↠", "rArr;": "⇒", "rarr;": "→", "rarrap;": "⥵", "rarrb;": "⇥", "rarrbfs;": "⤠", "rarrc;": "⤳", "rarrfs;": "⤞", "rarrhk;": "↪", "rarrlp;": "↬", "rarrpl;": "⥅", "rarrsim;": "⥴", "Rarrtl;": "⤖", "rarrtl;": "↣", "rarrw;": "↝", "rAtail;": "⤜", "ratail;": "⤚", "ratio;": "∶", "rationals;": "ℚ", "RBarr;": "⤐", "rBarr;": "⤏", "rbarr;": "⤍", "rbbrk;": "❳", "rbrace;": "}", "rbrack;": "]", "rbrke;": "⦌", "rbrksld;": "⦎", "rbrkslu;": "⦐", "Rcaron;": "Ř", "rcaron;": "ř", "Rcedil;": "Ŗ", "rcedil;": "ŗ", "rceil;": "⌉", "rcub;": "}", "Rcy;": "Р", "rcy;": "р", "rdca;": "⤷", "rdldhar;": "⥩", "rdquo;": "”", "rdquor;": "”", "rdsh;": "↳", "Re;": "ℜ", "real;": "ℜ", "realine;": "ℛ", "realpart;": "ℜ", "reals;": "ℝ", "rect;": "▭", "REG;": "®", REG: "®", "reg;": "®", reg: "®", "ReverseElement;": "∋", "ReverseEquilibrium;": "⇋", "ReverseUpEquilibrium;": "⥯", "rfisht;": "⥽", "rfloor;": "⌋", "Rfr;": "ℜ", "rfr;": "𝔯", "rHar;": "⥤", "rhard;": "⇁", "rharu;": "⇀", "rharul;": "⥬", "Rho;": "Ρ", "rho;": "ρ", "rhov;": "ϱ", "RightAngleBracket;": "⟩", "RightArrow;": "→", "Rightarrow;": "⇒", "rightarrow;": "→", "RightArrowBar;": "⇥", "RightArrowLeftArrow;": "⇄", "rightarrowtail;": "↣", "RightCeiling;": "⌉", "RightDoubleBracket;": "⟧", "RightDownTeeVector;": "⥝", "RightDownVector;": "⇂", "RightDownVectorBar;": "⥕", "RightFloor;": "⌋", "rightharpoondown;": "⇁", "rightharpoonup;": "⇀", "rightleftarrows;": "⇄", "rightleftharpoons;": "⇌", "rightrightarrows;": "⇉", "rightsquigarrow;": "↝", "RightTee;": "⊢", "RightTeeArrow;": "↦", "RightTeeVector;": "⥛", "rightthreetimes;": "⋌", "RightTriangle;": "⊳", "RightTriangleBar;": "⧐", "RightTriangleEqual;": "⊵", "RightUpDownVector;": "⥏", "RightUpTeeVector;": "⥜", "RightUpVector;": "↾", "RightUpVectorBar;": "⥔", "RightVector;": "⇀", "RightVectorBar;": "⥓", "ring;": "˚", "risingdotseq;": "≓", "rlarr;": "⇄", "rlhar;": "⇌", "rlm;": "‏", "rmoust;": "⎱", "rmoustache;": "⎱", "rnmid;": "⫮", "roang;": "⟭", "roarr;": "⇾", "robrk;": "⟧", "ropar;": "⦆", "Ropf;": "ℝ", "ropf;": "𝕣", "roplus;": "⨮", "rotimes;": "⨵", "RoundImplies;": "⥰", "rpar;": ")", "rpargt;": "⦔", "rppolint;": "⨒", "rrarr;": "⇉", "Rrightarrow;": "⇛", "rsaquo;": "›", "Rscr;": "ℛ", "rscr;": "𝓇", "Rsh;": "↱", "rsh;": "↱", "rsqb;": "]", "rsquo;": "’", "rsquor;": "’", "rthree;": "⋌", "rtimes;": "⋊", "rtri;": "▹", "rtrie;": "⊵", "rtrif;": "▸", "rtriltri;": "⧎", "RuleDelayed;": "⧴", "ruluhar;": "⥨", "rx;": "℞", "Sacute;": "Ś", "sacute;": "ś", "sbquo;": "‚", "Sc;": "⪼", "sc;": "≻", "scap;": "⪸", "Scaron;": "Š", "scaron;": "š", "sccue;": "≽", "scE;": "⪴", "sce;": "⪰", "Scedil;": "Ş", "scedil;": "ş", "Scirc;": "Ŝ", "scirc;": "ŝ", "scnap;": "⪺", "scnE;": "⪶", "scnsim;": "⋩", "scpolint;": "⨓", "scsim;": "≿", "Scy;": "С", "scy;": "с", "sdot;": "⋅", "sdotb;": "⊡", "sdote;": "⩦", "searhk;": "⤥", "seArr;": "⇘", "searr;": "↘", "searrow;": "↘", "sect;": "§", sect: "§", "semi;": ";", "seswar;": "⤩", "setminus;": "∖", "setmn;": "∖", "sext;": "✶", "Sfr;": "𝔖", "sfr;": "𝔰", "sfrown;": "⌢", "sharp;": "♯", "SHCHcy;": "Щ", "shchcy;": "щ", "SHcy;": "Ш", "shcy;": "ш", "ShortDownArrow;": "↓", "ShortLeftArrow;": "←", "shortmid;": "∣", "shortparallel;": "∥", "ShortRightArrow;": "→", "ShortUpArrow;": "↑", "shy;": "­", shy: "­", "Sigma;": "Σ", "sigma;": "σ", "sigmaf;": "ς", "sigmav;": "ς", "sim;": "∼", "simdot;": "⩪", "sime;": "≃", "simeq;": "≃", "simg;": "⪞", "simgE;": "⪠", "siml;": "⪝", "simlE;": "⪟", "simne;": "≆", "simplus;": "⨤", "simrarr;": "⥲", "slarr;": "←", "SmallCircle;": "∘", "smallsetminus;": "∖", "smashp;": "⨳", "smeparsl;": "⧤", "smid;": "∣", "smile;": "⌣", "smt;": "⪪", "smte;": "⪬", "smtes;": "⪬︀", "SOFTcy;": "Ь", "softcy;": "ь", "sol;": "/", "solb;": "⧄", "solbar;": "⌿", "Sopf;": "𝕊", "sopf;": "𝕤", "spades;": "♠", "spadesuit;": "♠", "spar;": "∥", "sqcap;": "⊓", "sqcaps;": "⊓︀", "sqcup;": "⊔", "sqcups;": "⊔︀", "Sqrt;": "√", "sqsub;": "⊏", "sqsube;": "⊑", "sqsubset;": "⊏", "sqsubseteq;": "⊑", "sqsup;": "⊐", "sqsupe;": "⊒", "sqsupset;": "⊐", "sqsupseteq;": "⊒", "squ;": "□", "Square;": "□", "square;": "□", "SquareIntersection;": "⊓", "SquareSubset;": "⊏", "SquareSubsetEqual;": "⊑", "SquareSuperset;": "⊐", "SquareSupersetEqual;": "⊒", "SquareUnion;": "⊔", "squarf;": "▪", "squf;": "▪", "srarr;": "→", "Sscr;": "𝒮", "sscr;": "𝓈", "ssetmn;": "∖", "ssmile;": "⌣", "sstarf;": "⋆", "Star;": "⋆", "star;": "☆", "starf;": "★", "straightepsilon;": "ϵ", "straightphi;": "ϕ", "strns;": "¯", "Sub;": "⋐", "sub;": "⊂", "subdot;": "⪽", "subE;": "⫅", "sube;": "⊆", "subedot;": "⫃", "submult;": "⫁", "subnE;": "⫋", "subne;": "⊊", "subplus;": "⪿", "subrarr;": "⥹", "Subset;": "⋐", "subset;": "⊂", "subseteq;": "⊆", "subseteqq;": "⫅", "SubsetEqual;": "⊆", "subsetneq;": "⊊", "subsetneqq;": "⫋", "subsim;": "⫇", "subsub;": "⫕", "subsup;": "⫓", "succ;": "≻", "succapprox;": "⪸", "succcurlyeq;": "≽", "Succeeds;": "≻", "SucceedsEqual;": "⪰", "SucceedsSlantEqual;": "≽", "SucceedsTilde;": "≿", "succeq;": "⪰", "succnapprox;": "⪺", "succneqq;": "⪶", "succnsim;": "⋩", "succsim;": "≿", "SuchThat;": "∋", "Sum;": "∑", "sum;": "∑", "sung;": "♪", "Sup;": "⋑", "sup;": "⊃", "sup1;": "¹", sup1: "¹", "sup2;": "²", sup2: "²", "sup3;": "³", sup3: "³", "supdot;": "⪾", "supdsub;": "⫘", "supE;": "⫆", "supe;": "⊇", "supedot;": "⫄", "Superset;": "⊃", "SupersetEqual;": "⊇", "suphsol;": "⟉", "suphsub;": "⫗", "suplarr;": "⥻", "supmult;": "⫂", "supnE;": "⫌", "supne;": "⊋", "supplus;": "⫀", "Supset;": "⋑", "supset;": "⊃", "supseteq;": "⊇", "supseteqq;": "⫆", "supsetneq;": "⊋", "supsetneqq;": "⫌", "supsim;": "⫈", "supsub;": "⫔", "supsup;": "⫖", "swarhk;": "⤦", "swArr;": "⇙", "swarr;": "↙", "swarrow;": "↙", "swnwar;": "⤪", "szlig;": "ß", szlig: "ß", "Tab;": "\t", "target;": "⌖", "Tau;": "Τ", "tau;": "τ", "tbrk;": "⎴", "Tcaron;": "Ť", "tcaron;": "ť", "Tcedil;": "Ţ", "tcedil;": "ţ", "Tcy;": "Т", "tcy;": "т", "tdot;": "⃛", "telrec;": "⌕", "Tfr;": "𝔗", "tfr;": "𝔱", "there4;": "∴", "Therefore;": "∴", "therefore;": "∴", "Theta;": "Θ", "theta;": "θ", "thetasym;": "ϑ", "thetav;": "ϑ", "thickapprox;": "≈", "thicksim;": "∼", "ThickSpace;": "  ", "thinsp;": " ", "ThinSpace;": " ", "thkap;": "≈", "thksim;": "∼", "THORN;": "Þ", THORN: "Þ", "thorn;": "þ", thorn: "þ", "Tilde;": "∼", "tilde;": "˜", "TildeEqual;": "≃", "TildeFullEqual;": "≅", "TildeTilde;": "≈", "times;": "×", times: "×", "timesb;": "⊠", "timesbar;": "⨱", "timesd;": "⨰", "tint;": "∭", "toea;": "⤨", "top;": "⊤", "topbot;": "⌶", "topcir;": "⫱", "Topf;": "𝕋", "topf;": "𝕥", "topfork;": "⫚", "tosa;": "⤩", "tprime;": "‴", "TRADE;": "™", "trade;": "™", "triangle;": "▵", "triangledown;": "▿", "triangleleft;": "◃", "trianglelefteq;": "⊴", "triangleq;": "≜", "triangleright;": "▹", "trianglerighteq;": "⊵", "tridot;": "◬", "trie;": "≜", "triminus;": "⨺", "TripleDot;": "⃛", "triplus;": "⨹", "trisb;": "⧍", "tritime;": "⨻", "trpezium;": "⏢", "Tscr;": "𝒯", "tscr;": "𝓉", "TScy;": "Ц", "tscy;": "ц", "TSHcy;": "Ћ", "tshcy;": "ћ", "Tstrok;": "Ŧ", "tstrok;": "ŧ", "twixt;": "≬", "twoheadleftarrow;": "↞", "twoheadrightarrow;": "↠", "Uacute;": "Ú", Uacute: "Ú", "uacute;": "ú", uacute: "ú", "Uarr;": "↟", "uArr;": "⇑", "uarr;": "↑", "Uarrocir;": "⥉", "Ubrcy;": "Ў", "ubrcy;": "ў", "Ubreve;": "Ŭ", "ubreve;": "ŭ", "Ucirc;": "Û", Ucirc: "Û", "ucirc;": "û", ucirc: "û", "Ucy;": "У", "ucy;": "у", "udarr;": "⇅", "Udblac;": "Ű", "udblac;": "ű", "udhar;": "⥮", "ufisht;": "⥾", "Ufr;": "𝔘", "ufr;": "𝔲", "Ugrave;": "Ù", Ugrave: "Ù", "ugrave;": "ù", ugrave: "ù", "uHar;": "⥣", "uharl;": "↿", "uharr;": "↾", "uhblk;": "▀", "ulcorn;": "⌜", "ulcorner;": "⌜", "ulcrop;": "⌏", "ultri;": "◸", "Umacr;": "Ū", "umacr;": "ū", "uml;": "¨", uml: "¨", "UnderBar;": "_", "UnderBrace;": "⏟", "UnderBracket;": "⎵", "UnderParenthesis;": "⏝", "Union;": "⋃", "UnionPlus;": "⊎", "Uogon;": "Ų", "uogon;": "ų", "Uopf;": "𝕌", "uopf;": "𝕦", "UpArrow;": "↑", "Uparrow;": "⇑", "uparrow;": "↑", "UpArrowBar;": "⤒", "UpArrowDownArrow;": "⇅", "UpDownArrow;": "↕", "Updownarrow;": "⇕", "updownarrow;": "↕", "UpEquilibrium;": "⥮", "upharpoonleft;": "↿", "upharpoonright;": "↾", "uplus;": "⊎", "UpperLeftArrow;": "↖", "UpperRightArrow;": "↗", "Upsi;": "ϒ", "upsi;": "υ", "upsih;": "ϒ", "Upsilon;": "Υ", "upsilon;": "υ", "UpTee;": "⊥", "UpTeeArrow;": "↥", "upuparrows;": "⇈", "urcorn;": "⌝", "urcorner;": "⌝", "urcrop;": "⌎", "Uring;": "Ů", "uring;": "ů", "urtri;": "◹", "Uscr;": "𝒰", "uscr;": "𝓊", "utdot;": "⋰", "Utilde;": "Ũ", "utilde;": "ũ", "utri;": "▵", "utrif;": "▴", "uuarr;": "⇈", "Uuml;": "Ü", Uuml: "Ü", "uuml;": "ü", uuml: "ü", "uwangle;": "⦧", "vangrt;": "⦜", "varepsilon;": "ϵ", "varkappa;": "ϰ", "varnothing;": "∅", "varphi;": "ϕ", "varpi;": "ϖ", "varpropto;": "∝", "vArr;": "⇕", "varr;": "↕", "varrho;": "ϱ", "varsigma;": "ς", "varsubsetneq;": "⊊︀", "varsubsetneqq;": "⫋︀", "varsupsetneq;": "⊋︀", "varsupsetneqq;": "⫌︀", "vartheta;": "ϑ", "vartriangleleft;": "⊲", "vartriangleright;": "⊳", "Vbar;": "⫫", "vBar;": "⫨", "vBarv;": "⫩", "Vcy;": "В", "vcy;": "в", "VDash;": "⊫", "Vdash;": "⊩", "vDash;": "⊨", "vdash;": "⊢", "Vdashl;": "⫦", "Vee;": "⋁", "vee;": "∨", "veebar;": "⊻", "veeeq;": "≚", "vellip;": "⋮", "Verbar;": "‖", "verbar;": "|", "Vert;": "‖", "vert;": "|", "VerticalBar;": "∣", "VerticalLine;": "|", "VerticalSeparator;": "❘", "VerticalTilde;": "≀", "VeryThinSpace;": " ", "Vfr;": "𝔙", "vfr;": "𝔳", "vltri;": "⊲", "vnsub;": "⊂⃒", "vnsup;": "⊃⃒", "Vopf;": "𝕍", "vopf;": "𝕧", "vprop;": "∝", "vrtri;": "⊳", "Vscr;": "𝒱", "vscr;": "𝓋", "vsubnE;": "⫋︀", "vsubne;": "⊊︀", "vsupnE;": "⫌︀", "vsupne;": "⊋︀", "Vvdash;": "⊪", "vzigzag;": "⦚", "Wcirc;": "Ŵ", "wcirc;": "ŵ", "wedbar;": "⩟", "Wedge;": "⋀", "wedge;": "∧", "wedgeq;": "≙", "weierp;": "℘", "Wfr;": "𝔚", "wfr;": "𝔴", "Wopf;": "𝕎", "wopf;": "𝕨", "wp;": "℘", "wr;": "≀", "wreath;": "≀", "Wscr;": "𝒲", "wscr;": "𝓌", "xcap;": "⋂", "xcirc;": "◯", "xcup;": "⋃", "xdtri;": "▽", "Xfr;": "𝔛", "xfr;": "𝔵", "xhArr;": "⟺", "xharr;": "⟷", "Xi;": "Ξ", "xi;": "ξ", "xlArr;": "⟸", "xlarr;": "⟵", "xmap;": "⟼", "xnis;": "⋻", "xodot;": "⨀", "Xopf;": "𝕏", "xopf;": "𝕩", "xoplus;": "⨁", "xotime;": "⨂", "xrArr;": "⟹", "xrarr;": "⟶", "Xscr;": "𝒳", "xscr;": "𝓍", "xsqcup;": "⨆", "xuplus;": "⨄", "xutri;": "△", "xvee;": "⋁", "xwedge;": "⋀", "Yacute;": "Ý", Yacute: "Ý", "yacute;": "ý", yacute: "ý", "YAcy;": "Я", "yacy;": "я", "Ycirc;": "Ŷ", "ycirc;": "ŷ", "Ycy;": "Ы", "ycy;": "ы", "yen;": "¥", yen: "¥", "Yfr;": "𝔜", "yfr;": "𝔶", "YIcy;": "Ї", "yicy;": "ї", "Yopf;": "𝕐", "yopf;": "𝕪", "Yscr;": "𝒴", "yscr;": "𝓎", "YUcy;": "Ю", "yucy;": "ю", "Yuml;": "Ÿ", "yuml;": "ÿ", yuml: "ÿ", "Zacute;": "Ź", "zacute;": "ź", "Zcaron;": "Ž", "zcaron;": "ž", "Zcy;": "З", "zcy;": "з", "Zdot;": "Ż", "zdot;": "ż", "zeetrf;": "ℨ", "ZeroWidthSpace;": "​", "Zeta;": "Ζ", "zeta;": "ζ", "Zfr;": "ℨ", "zfr;": "𝔷", "ZHcy;": "Ж", "zhcy;": "ж", "zigrarr;": "⇝", "Zopf;": "ℤ", "zopf;": "𝕫", "Zscr;": "𝒵", "zscr;": "𝓏", "zwj;": "‍", "zwnj;": "‌" },
      kn = Fe(),
      Sn = function () {
    function e() {
      this.completionParticipants = [];
    }return e.prototype.setCompletionParticipants = function (e) {
      this.completionParticipants = e || [];
    }, e.prototype.doComplete = function (e, t, n, r) {
      var i = { isIncomplete: !1, items: [] },
          o = this.completionParticipants,
          a = Tn.filter(function (t) {
        return t.isApplicable(e.languageId) && (!r || !1 !== r[t.getId()]);
      }),
          s = e.getText(),
          u = e.offsetAt(t),
          l = n.findNodeBefore(u);if (!l) return i;var c,
          h = st(s, l.start),
          d = "";function f(t, n) {
        return void 0 === n && (n = u), t > u && (t = u), { start: e.positionAt(t), end: e.positionAt(n) };
      }function p(e, t) {
        var n = f(e, t);return a.forEach(function (e) {
          e.collectTags(function (e, t) {
            i.items.push({ label: e, kind: Gt.Property, documentation: t, textEdit: Vt.replace(n, e), insertTextFormat: Jt.PlainText });
          });
        }), i;
      }function g(e) {
        for (var t = e; t > 0;) {
          var n = s.charAt(t - 1);if ("\n\r".indexOf(n) >= 0) return s.substring(t, e);if (!En(n)) return null;t--;
        }return s.substring(0, e);
      }function m(e, t, n) {
        void 0 === n && (n = u);var r = f(e, n),
            o = An(s, n, We.WithinEndTag, Ve.EndTagClose) ? "" : ">",
            c = l;for (t && (c = c.parent); c;) {
          var h = c.tag;if (h && (!c.closed || c.endTagStart && c.endTagStart > u)) {
            var d = { label: "/" + h, kind: Gt.Property, filterText: "/" + h + o, textEdit: Vt.replace(r, "/" + h + o), insertTextFormat: Jt.PlainText },
                p = g(c.start),
                m = g(e - 1);if (null !== p && null !== m && p !== m) {
              var b = p + "</" + h + o;d.textEdit = Vt.replace(f(e - 1 - m.length), b), d.filterText = m + "</" + h + o;
            }return i.items.push(d), i;
          }c = c.parent;
        }return t ? i : (a.forEach(function (e) {
          e.collectTags(function (e, t) {
            i.items.push({ label: "/" + e, kind: Gt.Property, documentation: t, filterText: "/" + e + o, textEdit: Vt.replace(r, "/" + e + o), insertTextFormat: Jt.PlainText });
          });
        }), i);
      }function b(t, n) {
        if (r && r.hideAutoCompleteProposals) return i;if (!yt(n)) {
          var o = e.positionAt(t);i.items.push({ label: "</" + n + ">", kind: Gt.Property, filterText: "</" + n + ">", textEdit: Vt.insert(o, "$0</" + n + ">"), insertTextFormat: Jt.Snippet });
        }return i;
      }function _(e, t) {
        return p(e, t), m(e, !0, t), i;
      }function v(e, t) {
        void 0 === t && (t = u);for (var r = u; r < t && "<" !== s[r];) {
          r++;
        }var o = f(e, r),
            l = An(s, t, We.AfterAttributeName, Ve.DelimiterAssign) ? "" : '="$1"',
            c = d.toLowerCase(),
            h = Object.create(null);return a.forEach(function (e) {
          e.collectAttributes(c, function (e, t) {
            if (!h[e]) {
              h[e] = !0;var n,
                  r = e;"v" !== t && l.length && (r += l, t && (n = { title: "Suggest", command: "editor.action.triggerSuggest" })), i.items.push({ label: e, kind: "handler" === t ? Gt.Function : Gt.Value, textEdit: Vt.replace(o, r), insertTextFormat: Jt.Snippet, command: n });
            }
          });
        }), function (e, t) {
          var r = "data-",
              o = {};o[r] = r + '$1="$2"', n && n.roots.forEach(function (e) {
            return function e(n) {
              n.attributeNames.forEach(function (e) {
                !lt(e, r) || o[e] || t[e] || (o[e] = e + '="$1"');
              });n.children.forEach(function (t) {
                return e(t);
              });
            }(e);
          });Object.keys(o).forEach(function (t) {
            return i.items.push({ label: t, kind: Gt.Value, textEdit: Vt.replace(e, o[t]), insertTextFormat: Jt.Snippet });
          });
        }(o, h), i;
      }function y(n, r) {
        var l, p, g, m;if (void 0 === r && (r = u), u > n && u <= r && (m = s[n], /^["']*$/.test(m))) {
          var b = n + 1,
              _ = r;r > n && s[r - 1] === s[n] && _--;var v = function (e, t, n) {
            for (; t > n && !En(e[t - 1]);) {
              t--;
            }return t;
          }(s, u, b),
              y = function (e, t, n) {
            for (; t < n && !En(e[t]);) {
              t++;
            }return t;
          }(s, u, _);l = f(v, y), g = u >= b && u <= _ ? s.substring(b, u) : "", p = !1;
        } else l = f(n, r), g = s.substring(n, u), p = !0;var w = d.toLowerCase(),
            C = c.toLowerCase();if (o.length > 0) for (var x = f(n, r), k = 0, S = o; k < S.length; k++) {
          var E = S[k];E.onHtmlAttributeValue && E.onHtmlAttributeValue({ document: e, position: t, tag: w, attribute: C, value: g, range: x });
        }h.getTokenText();return a.forEach(function (e) {
          e.collectValues(w, C, function (e) {
            var t = p ? '"' + e + '"' : e;i.items.push({ label: e, filterText: t, kind: Gt.Unit, textEdit: Vt.replace(l, t), insertTextFormat: Jt.PlainText });
          });
        }), T(), i;
      }function w(e) {
        return u === h.getTokenEnd() && (x = h.scan()) === e && h.getTokenOffset() === u ? h.getTokenEnd() : u;
      }function C() {
        for (var n = 0, r = o; n < r.length; n++) {
          var i = r[n];i.onHtmlContent && i.onHtmlContent({ document: e, position: t });
        }return T();
      }function T() {
        for (var e, n, r, o = u - 1, a = t.character; o >= 0 && bt(s, o);) {
          o--, a--;
        }if (o >= 0 && "&" === s[o]) {
          var l = At.create(Et.create(t.line, a - 1), t);for (var c in xn) {
            if (n = ";", void 0, (r = (e = c).length - n.length) > 0 ? e.lastIndexOf(n) === r : 0 === r && e === n) {
              var h = "&" + c;i.items.push({ label: h, kind: Gt.Keyword, documentation: kn("entity.propose", "Character entity representing '" + xn[c] + "'"), textEdit: Vt.replace(l, h), insertTextFormat: Jt.PlainText });
            }
          }
        }return i;
      }for (var x = h.scan(); x !== Ve.EOS && h.getTokenOffset() <= u;) {
        switch (x) {case Ve.StartTagOpen:
            if (h.getTokenEnd() === u) {
              var k = w(Ve.StartTag);return _(u, k);
            }break;case Ve.StartTag:
            if (h.getTokenOffset() <= u && u <= h.getTokenEnd()) return p(h.getTokenOffset(), h.getTokenEnd());d = h.getTokenText();break;case Ve.AttributeName:
            if (h.getTokenOffset() <= u && u <= h.getTokenEnd()) return v(h.getTokenOffset(), h.getTokenEnd());c = h.getTokenText();break;case Ve.DelimiterAssign:
            if (h.getTokenEnd() === u) {
              k = w(Ve.AttributeValue);return y(u, k);
            }break;case Ve.AttributeValue:
            if (h.getTokenOffset() <= u && u <= h.getTokenEnd()) return y(h.getTokenOffset(), h.getTokenEnd());break;case Ve.Whitespace:
            if (u <= h.getTokenEnd()) switch (h.getScannerState()) {case We.AfterOpeningStartTag:
                return _(h.getTokenOffset(), w(Ve.StartTag));case We.WithinTag:case We.AfterAttributeName:
                return v(h.getTokenEnd());case We.BeforeAttributeValue:
                return y(h.getTokenEnd());case We.AfterOpeningEndTag:
                return m(h.getTokenOffset() - 1, !1);case We.WithinContent:
                return C();}break;case Ve.EndTagOpen:
            if (u <= h.getTokenEnd()) return m(h.getTokenOffset() + 1, !1, w(Ve.EndTag));break;case Ve.EndTag:
            if (u <= h.getTokenEnd()) for (var S = h.getTokenOffset() - 1; S >= 0;) {
              var E = s.charAt(S);if ("/" === E) return m(S, !1, h.getTokenEnd());if (!En(E)) break;S--;
            }break;case Ve.StartTagClose:
            if (u <= h.getTokenEnd() && d) return b(h.getTokenEnd(), d);break;case Ve.Content:
            if (u <= h.getTokenEnd()) return C();break;default:
            if (u <= h.getTokenEnd()) return i;}x = h.scan();
      }return i;
    }, e.prototype.doTagComplete = function (e, t, n) {
      var r = e.offsetAt(t);if (r <= 0) return null;var i = e.getText().charAt(r - 1);if (">" === i) {
        if ((a = n.findNodeBefore(r)) && a.tag && !yt(a.tag) && a.start < r && (!a.endTagStart || a.endTagStart > r)) for (var o = (s = st(e.getText(), a.start)).scan(); o !== Ve.EOS && s.getTokenEnd() <= r;) {
          if (o === Ve.StartTagClose && s.getTokenEnd() === r) return "$0</" + a.tag + ">";o = s.scan();
        }
      } else if ("/" === i) {
        for (var a = n.findNodeBefore(r); a && a.closed;) {
          a = a.parent;
        }if (a && a.tag) {
          var s;for (o = (s = st(e.getText(), a.start)).scan(); o !== Ve.EOS && s.getTokenEnd() <= r;) {
            if (o === Ve.EndTagOpen && s.getTokenEnd() === r) return a.tag + ">";o = s.scan();
          }
        }
      }return null;
    }, e;
  }();function En(e) {
    return (/^\s*$/.test(e)
    );
  }function An(e, t, n, r) {
    for (var i = st(e, t, n), o = i.scan(); o === Ve.Whitespace;) {
      o = i.scan();
    }return o === r;
  }function Ln(e, t, n) {
    var r = e.offsetAt(t),
        i = n.findNodeAt(r);if (!i || !i.tag) return null;var o = Tn.filter(function (t) {
      return t.isApplicable(e.languageId);
    });function a(e, t, n) {
      e = e.toLowerCase();for (var r = function r(_r) {
        var i = null;if (_r.collectTags(function (r, o) {
          r === e && (i = { contents: [{ language: "html", value: n ? "<" + e + ">" : "</" + e + ">" }, Zt.fromPlainText(o)], range: t });
        }), i) return { value: i };
      }, i = 0, a = o; i < a.length; i++) {
        var s = r(a[i]);if ("object" == (typeof s === "undefined" ? "undefined" : _typeof(s))) return s.value;
      }return null;
    }function s(t, n) {
      for (var i = st(e.getText(), n), o = i.scan(); o !== Ve.EOS && (i.getTokenEnd() < r || i.getTokenEnd() === r && o !== t);) {
        o = i.scan();
      }return o === t && r <= i.getTokenEnd() ? { start: e.positionAt(i.getTokenOffset()), end: e.positionAt(i.getTokenEnd()) } : null;
    }if (i.endTagStart && r >= i.endTagStart) {
      var u = s(Ve.EndTag, i.endTagStart);return u ? a(i.tag, u, !1) : null;
    }var l = s(Ve.StartTag, i.start);return l ? a(i.tag, l, !0) : null;
  }function Nn(e, t) {
    return e;
  }var On = function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 8);
  }([,, function (e, t) {
    e.exports.mergeOpts = function (e, t) {
      var n,
          r = {};for (n in e) {
        n !== t && (r[n] = e[n]);
      }if (t in e) for (n in e[t]) {
        r[n] = e[t][n];
      }return r;
    };
  }, function (e, t) {
    var n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        r = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",
        i = new RegExp("[$@A-Z_a-z" + n + "]"),
        o = new RegExp("[$0-9A-Z_a-z" + n + r + "]");t.identifier = new RegExp("[$@A-Z_a-z" + n + "][$0-9A-Z_a-z" + n + r + "]*", "g"), t.newline = /[\n\r\u2028\u2029]/, t.lineBreak = new RegExp("\r\n|" + t.newline.source), t.allLineBreaks = new RegExp(t.lineBreak.source, "g"), t.isIdentifierStart = function (e) {
      return i.test(String.fromCharCode(e));
    }, t.isIdentifierChar = function (e) {
      return o.test(String.fromCharCode(e));
    };
  }, function (e, t) {
    e.exports.Output = function (e, t) {
      t = t || "", this.indent_cache = [t], this.baseIndentLength = t.length, this.indent_length = e.length, this.raw = !1, this._lines = [], this.baseIndentString = t, this.indent_string = e, this.previous_line = null, this.current_line = null, this.space_before_token = !1, this.add_outputline = function () {
        this.previous_line = this.current_line, this.current_line = new function (e) {
          this._character_count = 0, this._indent_count = -1, this._items = [];var t = !0;this.set_indent = function (t) {
            this._character_count = e.baseIndentLength + t * e.indent_length, this._indent_count = t;
          }, this.get_character_count = function () {
            return this._character_count;
          }, this.is_empty = function () {
            return t;
          }, this.last = function () {
            return this._empty ? null : this._items[this._items.length - 1];
          }, this.push = function (e) {
            this._items.push(e), this._character_count += e.length, t = !1;
          }, this.pop = function () {
            var e = null;return t || (e = this._items.pop(), this._character_count -= e.length, t = 0 === this._items.length), e;
          }, this.remove_indent = function () {
            this._indent_count > 0 && (this._indent_count -= 1, this._character_count -= e.indent_length);
          }, this.trim = function () {
            for (; " " === this.last();) {
              this._items.pop(), this._character_count -= 1;
            }t = 0 === this._items.length;
          }, this.toString = function () {
            var t = "";return this._empty || (this._indent_count >= 0 && (t = e.indent_cache[this._indent_count]), t += this._items.join("")), t;
          };
        }(this), this._lines.push(this.current_line);
      }, this.add_outputline(), this.get_line_number = function () {
        return this._lines.length;
      }, this.add_new_line = function (e) {
        return !(1 === this.get_line_number() && this.just_added_newline() || !e && this.just_added_newline() || (this.raw || this.add_outputline(), 0));
      }, this.get_code = function (e, t) {
        var n = this._lines.join("\n").replace(/[\r\n\t ]+$/, "");return e && (n += "\n"), "\n" !== t && (n = n.replace(/[\n]/g, t)), n;
      }, this.set_indent = function (e) {
        if (this._lines.length > 1) {
          for (; e >= this.indent_cache.length;) {
            this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
          }return this.current_line.set_indent(e), !0;
        }return this.current_line.set_indent(0), !1;
      }, this.add_raw_token = function (e) {
        for (var t = 0; t < e.newlines; t++) {
          this.add_outputline();
        }this.current_line.push(e.whitespace_before), this.current_line.push(e.text), this.space_before_token = !1;
      }, this.add_token = function (e) {
        this.add_space_before_token(), this.current_line.push(e);
      }, this.add_space_before_token = function () {
        this.space_before_token && !this.just_added_newline() && this.current_line.push(" "), this.space_before_token = !1;
      }, this.remove_indent = function (e) {
        for (var t = this._lines.length; e < t;) {
          this._lines[e].remove_indent(), e++;
        }
      }, this.trim = function (n) {
        for (n = void 0 !== n && n, this.current_line.trim(e, t); n && this._lines.length > 1 && this.current_line.is_empty();) {
          this._lines.pop(), this.current_line = this._lines[this._lines.length - 1], this.current_line.trim();
        }this.previous_line = this._lines.length > 1 ? this._lines[this._lines.length - 2] : null;
      }, this.just_added_newline = function () {
        return this.current_line.is_empty();
      }, this.just_added_blankline = function () {
        return !!this.just_added_newline() && (1 === this._lines.length || this._lines[this._lines.length - 2].is_empty());
      };
    };
  },, function (e, t) {
    e.exports.InputScanner = function (e) {
      var t = e || "",
          n = t.length,
          r = 0;this.back = function () {
        r > 0 && (r -= 1);
      }, this.hasNext = function () {
        return r < n;
      }, this.next = function () {
        var e = null;return this.hasNext() && (e = t.charAt(r), r += 1), e;
      }, this.peek = function (e) {
        var i = null;return e = e || 0, (e += r) >= 0 && e < n && (i = t.charAt(e)), i;
      }, this.test = function (e, i) {
        if (i = i || 0, i += r, e.lastIndex = i, i >= 0 && i < n) {
          var o = e.exec(t);return o && o.index === i;
        }return !1;
      }, this.testChar = function (e, t) {
        var n = this.peek(t);return null !== n && e.test(n);
      }, this.match = function (e) {
        e.lastIndex = r;var n = e.exec(t);return n && n.index === r ? r += n[0].length : n = null, n;
      }, this.readWhile = function (e) {
        var t = "",
            n = this.match(e);return n && (t = n[0]), t;
      }, this.readUntil = function (e) {
        var i,
            o = r;e.lastIndex = r;var a = e.exec(t);return o = a ? a.index : n, i = t.substring(r, o), r = o, i;
      }, this.readUntilAfter = function (e) {
        var i,
            o = r;e.lastIndex = r;var a = e.exec(t);return o = a ? a.index + a[0].length : n, i = t.substring(r, o), r = o, i;
      }, this.peekUntilAfter = function (e) {
        var t = r,
            n = this.readUntilAfter(e);return r = t, n;
      }, this.lookBack = function (e) {
        var n = r - 1;return n >= e.length && t.substring(n - e.length, n).toLowerCase() === e;
      };
    };
  },, function (e, t, n) {
    var r = n(9).Beautifier;e.exports = function (e, t) {
      return new r(e, t).beautify();
    };
  }, function (e, t, n) {
    var r = n(2).mergeOpts,
        i = n(3),
        o = n(4).Output,
        a = n(6).InputScanner,
        s = i.lineBreak,
        u = i.allLineBreaks;e.exports.Beautifier = function (e, t) {
      e = e || "";var n = (t = r(t = t || {}, "css")).indent_size ? parseInt(t.indent_size, 10) : 4,
          i = t.indent_char || " ",
          l = void 0 !== t.preserve_newlines && t.preserve_newlines,
          c = void 0 === t.selector_separator_newline || t.selector_separator_newline,
          h = void 0 !== t.end_with_newline && t.end_with_newline,
          d = void 0 === t.newline_between_rules || t.newline_between_rules,
          f = void 0 !== t.space_around_combinator && t.space_around_combinator;f = f || void 0 !== t.space_around_selector_separator && t.space_around_selector_separator;var p = t.eol ? t.eol : "auto";t.indent_with_tabs && (i = "\t", n = 1), "auto" === p && (p = "\n", e && s.test(e || "") && (p = e.match(s)[0])), p = p.replace(/\\r/, "\r").replace(/\\n/, "\n");var g,
          m,
          b = /\s/,
          _ = /(?:\s|\n)+/g,
          v = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
          y = /\/\/(?:[^\n\r\u2028\u2029]*)/g,
          w = 0;function C(e) {
        var t = "";for (g = m.next(); g;) {
          if (t += g, "\\" === g) t += m.next();else if (-1 !== e.indexOf(g) || "\n" === g) break;g = m.next();
        }return t;
      }function T(e) {
        for (var t = b.test(m.peek()), n = !0; b.test(m.peek());) {
          g = m.next(), e && "\n" === g && (l || n) && (n = !1, L.add_new_line(!0));
        }return t;
      }function x() {
        for (var e = 0, t = 1, n = m.peek(t); n;) {
          if ("{" === n) return !0;if ("(" === n) e += 1;else if (")" === n) {
            if (0 === e) return !1;e -= 1;
          } else if (";" === n || "}" === n) return !1;t++, n = m.peek(t);
        }return !1;
      }var k = "",
          S = 0;if ((e = e.replace(u, "\n")) && e.length) {
        for (; " " === e.charAt(S) || "\t" === e.charAt(S);) {
          S += 1;
        }k = e.substring(0, S), e = e.substring(S);
      }var E,
          A,
          L,
          N = new Array(n + 1).join(i);function O(e) {
        L.just_added_newline() && L.set_indent(E), L.add_token(e);
      }function P(e) {
        e && (L.space_before_token = !0);
      }this.beautify = function () {
        L = new o(N, k), m = new a(e), E = 0, A = 0, g = null, w = 0;for (var t = !1, n = !1, r = !1, i = !1;;) {
          var s = "" !== m.readWhile(_);if (!(g = m.next())) break;if ("/" === g && "*" === m.peek()) L.add_new_line(), m.back(), O(m.readWhile(v)), T(!0), L.add_new_line();else if ("/" === g && "/" === m.peek()) L.space_before_token = !0, m.back(), O(m.readWhile(y)), T(!0);else if ("@" === g) {
            if (P(s), "{" === m.peek()) O(g + C("}"));else {
              O(g);var u = m.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);u.match(/[ :]$/) && (O(u = C(": ").replace(/\s$/, "")), L.space_before_token = !0), "extend" === (u = u.replace(/\s$/, "")) && (i = !0), u in this.NESTED_AT_RULE ? (A += 1, u in this.CONDITIONAL_GROUP_RULE && (r = !0)) : t || 0 !== w || -1 === u.indexOf(":") || (n = !0);
            }
          } else "#" === g && "{" === m.peek() ? (P(s), O(g + C("}"))) : "{" === g ? m.match(/[\t\n ]*}/g) ? (L.space_before_token = !0, O("{}"), T(!0), L.add_new_line(), d && 0 === E && !L.just_added_blankline() && L.add_new_line(!0)) : (E++, L.space_before_token = !0, O(g), T(!0), L.add_new_line(), r ? (r = !1, t = E > A) : t = E >= A) : "}" === g ? (E > 0 && E--, L.add_new_line(), O(g), t = !1, n = !1, A && A--, T(!0), L.add_new_line(), d && 0 === E && !L.just_added_blankline() && L.add_new_line(!0)) : ":" === g ? !t && !r || m.lookBack("&") || x() || m.lookBack("(") || i ? (m.lookBack(" ") && (L.space_before_token = !0), ":" === m.peek() ? (g = m.next(), O("::")) : O(":")) : (O(":"), n || (n = !0, L.space_before_token = !0)) : '"' === g || "'" === g ? (P(s), O(g + C(g))) : ";" === g ? (n = !1, i = !1, O(g), T(!0), "/" !== m.peek() && L.add_new_line()) : "(" === g ? m.lookBack("url") ? (O(g), T(), (g = m.next()) && (")" !== g && '"' !== g && "'" !== g ? O(g + C(")")) : (m.back(), w++))) : (w++, P(s), O(g), T()) : ")" === g ? (O(g), w--) : "," === g ? (O(g), T(!0), c && !n && w < 1 ? L.add_new_line() : L.space_before_token = !0) : (">" === g || "+" === g || "~" === g) && !n && w < 1 ? f ? (L.space_before_token = !0, O(g), L.space_before_token = !0) : (O(g), T(), g && b.test(g) && (g = "")) : "]" === g ? O(g) : "[" === g ? (P(s), O(g)) : "=" === g ? (T(), O("="), b.test(g) && (g = "")) : "!" === g ? (O(" "), O(g)) : (P(s), O(g));
        }return L.get_code(h, p);
      }, this.NESTED_AT_RULE = { "@page": !0, "@font-face": !0, "@keyframes": !0, "@media": !0, "@supports": !0, "@document": !0 }, this.CONDITIONAL_GROUP_RULE = { "@media": !0, "@supports": !0, "@document": !0 };
    };
  }]);var Pn = function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 10);
  }([,, function (e, t) {
    e.exports.mergeOpts = function (e, t) {
      var n,
          r = {};for (n in e) {
        n !== t && (r[n] = e[n]);
      }if (t in e) for (n in e[t]) {
        r[n] = e[t][n];
      }return r;
    };
  }, function (e, t) {
    var n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
        r = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",
        i = new RegExp("[$@A-Z_a-z" + n + "]"),
        o = new RegExp("[$0-9A-Z_a-z" + n + r + "]");t.identifier = new RegExp("[$@A-Z_a-z" + n + "][$0-9A-Z_a-z" + n + r + "]*", "g"), t.newline = /[\n\r\u2028\u2029]/, t.lineBreak = new RegExp("\r\n|" + t.newline.source), t.allLineBreaks = new RegExp(t.lineBreak.source, "g"), t.isIdentifierStart = function (e) {
      return i.test(String.fromCharCode(e));
    }, t.isIdentifierChar = function (e) {
      return o.test(String.fromCharCode(e));
    };
  },,, function (e, t) {
    e.exports.InputScanner = function (e) {
      var t = e || "",
          n = t.length,
          r = 0;this.back = function () {
        r > 0 && (r -= 1);
      }, this.hasNext = function () {
        return r < n;
      }, this.next = function () {
        var e = null;return this.hasNext() && (e = t.charAt(r), r += 1), e;
      }, this.peek = function (e) {
        var i = null;return e = e || 0, (e += r) >= 0 && e < n && (i = t.charAt(e)), i;
      }, this.test = function (e, i) {
        if (i = i || 0, i += r, e.lastIndex = i, i >= 0 && i < n) {
          var o = e.exec(t);return o && o.index === i;
        }return !1;
      }, this.testChar = function (e, t) {
        var n = this.peek(t);return null !== n && e.test(n);
      }, this.match = function (e) {
        e.lastIndex = r;var n = e.exec(t);return n && n.index === r ? r += n[0].length : n = null, n;
      }, this.readWhile = function (e) {
        var t = "",
            n = this.match(e);return n && (t = n[0]), t;
      }, this.readUntil = function (e) {
        var i,
            o = r;e.lastIndex = r;var a = e.exec(t);return o = a ? a.index : n, i = t.substring(r, o), r = o, i;
      }, this.readUntilAfter = function (e) {
        var i,
            o = r;e.lastIndex = r;var a = e.exec(t);return o = a ? a.index + a[0].length : n, i = t.substring(r, o), r = o, i;
      }, this.peekUntilAfter = function (e) {
        var t = r,
            n = this.readUntilAfter(e);return r = t, n;
      }, this.lookBack = function (e) {
        var n = r - 1;return n >= e.length && t.substring(n - e.length, n).toLowerCase() === e;
      };
    };
  },,,, function (e, t, n) {
    var r = n(11).Beautifier;e.exports = function (e, t, n, i) {
      return new r(e, t, n, i).beautify();
    };
  }, function (e, t, n) {
    var r = n(2).mergeOpts,
        i = n(3),
        o = n(6).InputScanner,
        a = i.lineBreak,
        s = i.allLineBreaks;function u(e) {
      return e.replace(/\s+$/g, "");
    }e.exports.Beautifier = function (e, t, n, i) {
      var l, c, h, d, f, p, g, m, b, _, v, y, w, C, T, x, k, S, E, A, L, N, O;e = e || "", void 0 !== (t = r(t = t || {}, "html")).wrap_line_length && 0 !== parseInt(t.wrap_line_length, 10) || void 0 === t.max_char || 0 === parseInt(t.max_char, 10) || (t.wrap_line_length = t.max_char), c = void 0 !== t.indent_inner_html && t.indent_inner_html, h = void 0 === t.indent_body_inner_html || t.indent_body_inner_html, d = void 0 === t.indent_head_inner_html || t.indent_head_inner_html, f = void 0 === t.indent_size ? 4 : parseInt(t.indent_size, 10), p = void 0 === t.indent_char ? " " : t.indent_char, m = void 0 === t.brace_style ? "collapse" : t.brace_style, g = 0 === parseInt(t.wrap_line_length, 10) ? 32786 : parseInt(t.wrap_line_length || 250, 10), b = t.inline || ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "select", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "strike", "tt"], _ = t.unformatted || [], v = t.content_unformatted || ["pre", "textarea"], y = void 0 === t.preserve_newlines || t.preserve_newlines, w = y ? isNaN(parseInt(t.max_preserve_newlines, 10)) ? 32786 : parseInt(t.max_preserve_newlines, 10) : 0, C = void 0 !== t.indent_handlebars && t.indent_handlebars, T = void 0 === t.wrap_attributes ? "auto" : t.wrap_attributes, x = isNaN(parseInt(t.wrap_attributes_indent_size, 10)) ? f : parseInt(t.wrap_attributes_indent_size, 10), k = "force" === T.substr(0, "force".length), S = "force-expand-multiline" === T, E = "force-aligned" === T, A = "aligned-multiple" === T, L = void 0 !== t.end_with_newline && t.end_with_newline, N = "object" == _typeof(t.extra_liners) && t.extra_liners ? t.extra_liners.concat() : "string" == typeof t.extra_liners ? t.extra_liners.split(",") : "head,body,/html".split(","), O = t.eol ? t.eol : "auto", t.indent_with_tabs && (p = "\t", f = 1), "auto" === O && (O = "\n", e && a.test(e || "") && (O = e.match(a)[0])), O = O.replace(/\\r/, "\r").replace(/\\n/, "\n"), e = e.replace(s, "\n"), this.beautify = function () {
        (l = new function () {
          return this.token = "", this.current_mode = "CONTENT", this.tags = { parent: null, tag: "", indent_level: 0, token: null }, this.last_token = { text: "", type: "" }, this.token_text = "", this.newlines = 0, this.indent_content = c, this.indent_body_inner_html = h, this.indent_head_inner_html = d, this.Utils = { whitespace: "\n\r\t ".split(""), single_token: t.void_elements || ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr", "!doctype", "?xml", "?php", "?=", "basefont", "isindex"], extra_liners: N, in_array: function in_array(e, t) {
              for (var n = 0; n < t.length; n++) {
                if (e === t[n]) return !0;
              }return !1;
            } }, this.is_whitespace = function (e) {
            for (var t = 0; t < e.length; t++) {
              if (!this.Utils.in_array(e.charAt(t), this.Utils.whitespace)) return !1;
            }return !0;
          }, this.traverse_whitespace = function () {
            var e = "";if (this.Utils.in_array(this.input.peek(), this.Utils.whitespace)) {
              this.newlines = 0;do {
                e = this.input.next(), y && "\n" === e && this.newlines <= w && (this.newlines += 1);
              } while (this.Utils.in_array(this.input.peek(), this.Utils.whitespace));return !0;
            }return !1;
          }, this.space_or_wrap = function (e) {
            return this.line_char_count >= this.wrap_line_length ? (this.print_newline(!1, e), this.print_indentation(e), !0) : (this.line_char_count++, e.push(" "), !1);
          }, this.get_content = function () {
            for (var e = "", t = { parent: this.tags.token, text: "", type: "TK_CONTENT" }, n = []; !("<" === this.input.peek() || C && this.input.test(/\{\{/g));) {
              if (!this.input.hasNext()) {
                n.length || (t.type = "TK_EOF");break;
              }this.traverse_whitespace() ? this.space_or_wrap(n) : (e = this.input.next(), this.line_char_count++, n.push(e));
            }return t.text = n.join(""), t;
          }, this.get_contents_to = function (e) {
            if (!this.input.hasNext()) return { text: "", type: "TK_EOF" };var t = new RegExp("</" + e + "\\s*>", "igm");return { text: this.input.readUntil(t), type: "TK_" + e };
          }, this.record_tag = function (e, t) {
            var n = { parent: this.tags, tag: e, indent_level: this.indent_level, token: t };this.tags = n;
          }, this.retrieve_tag = function (e) {
            for (var t = null, n = this.tags; n && n.tag !== e;) {
              n = n.parent;
            }return n && (t = n.token, this.indent_level = n.indent_level, this.tags = n.parent), t;
          }, this.indent_to_tag = function (e) {
            for (var t = this.tags; t && t.tag !== e;) {
              t = t.parent;
            }t && (this.indent_level = t.indent_level);
          }, this.get_tag = function () {
            var e,
                t = "",
                n = { parent: this.tags.token, text: "", type: "", tag_name: "", is_inline_tag: !1, is_unformatted: !1, is_content_unformatted: !1, is_opening_tag: !1, is_closing_tag: !1, multiline_content: !1, start_tag_token: null },
                r = [],
                i = "",
                o = !1,
                a = !0,
                s = !1,
                u = !1,
                l = "",
                c = !1,
                h = this.input.peek(),
                d = this.input.peek(1),
                f = this.input.peek(2);"<" !== h || "!" !== d && "?" !== d && "%" !== d ? C && "{" === h && "{" === d && "!" === f ? (e = "{", l = (t = this.get_comment()).match(/^{{([^\s}]+)/)[1], r = [t], u = !0) : "<" === h ? (r.push(this.input.next()), e = "<", l = this.input.readUntil(/[\s>{]/g), r.push(l), l = l.toLowerCase(), o = !0) : C && "{" === h && "{" === d && (r.push(this.input.next()), r.push(this.input.next()), "#" === f && r.push(this.input.next()), e = "{", l = this.input.readUntil(/[\s}]/g), r.push(l), l = l.toLowerCase(), o = !1) : (e = "<", l = (t = this.get_comment()).match(/^<([^\s>]+)/)[1], r = [t], u = !0), n.is_closing_tag = "/" === l.charAt(0), n.tag_name = n.is_closing_tag ? l.substr(1) : l, n.is_inline_tag = this.Utils.in_array(n.tag_name, b) || "{" === e, n.is_unformatted = this.Utils.in_array(l, _), n.is_content_unformatted = this.Utils.in_array(l, v);var p,
                g = x;if ((E || A) && (g = r.join("").length + 1), this.line_char_count += r.join("").length, !u) {
              for (; this.input.hasNext();) {
                if (t = this.input.next(), C && "{" === e && r.length > 2 && "}" === t && "}" === r[r.length - 1]) {
                  this.line_char_count++, r.push(t);break;
                }if ("'" !== t && '"' !== t || (t += this.get_unformatted(t), "{" !== e && (o = !0)), n.is_unformatted) r.push(t), this.line_char_count++;else if (this.Utils.in_array(t, this.Utils.whitespace)) o = !0;else {
                  if ("<" === e && ("=" === t && (o = !1), !S || !s || c || ">" !== t && "/" !== t || this.input.test(/\/?\s*>/g, -1) && (o = !1, c = !0, this.print_newline(!1, r), this.print_indentation(r))), o) if ("{" === e) this.line_char_count++, r.push(" "), o = !1;else if (r.length && "=" !== r[r.length - 1] && ">" !== t && o) {
                    var m = this.space_or_wrap(r) && "/" !== t && !k;if (o = !1, k && "/" !== t) {
                      var y = !1;S && a && (y = !this.input.test(/\S*(="([^"]|\\")*")?\s*\/?\s*>/g, -1)), a && !y || (this.print_newline(!1, r), this.print_indentation(r), m = !0);
                    }if (m) {
                      s = !0;for (var w = 0; w < g; w++) {
                        this.line_char_count++, r.push(" ");
                      }
                    }if (a) for (var T = 0; T < r.length; T++) {
                      if (" " === r[T]) {
                        a = !1;break;
                      }
                    }
                  }if (C && "<" === e && "{" === t && "{" === this.input.peek() && (t += this.get_unformatted(/}}/g), r.length && " " !== r[r.length - 1] && "<" !== r[r.length - 1] && (t = " " + t), o = !0), this.line_char_count++, r.push(t), ">" === t) break;
                }
              }if (!t) return r.length ? n.text = r.join("") : n.type = "TK_EOF", n;
            }return "script" !== l && "style" !== l || (p = r.join("")), r.length > 2 && "/" === r[r.length - 2] || this.Utils.in_array(l, this.Utils.single_token) ? (n.type = "TK_TAG_SINGLE", n.is_closing_tag = !0) : C && "{" === e && "else" === l ? (this.indent_to_tag("if"), n.type = "TK_TAG_HANDLEBARS_ELSE", this.indent_content = !0, this.traverse_whitespace()) : C && "{" === e && (r.length < 2 || /[^#\^\/]/.test(r[2].charAt(0))) ? (n.type = "TK_TAG_SINGLE", n.is_closing_tag = !0) : n.is_unformatted || n.is_content_unformatted ? (i = this.get_unformatted(new RegExp("</" + l + ">", "ig")), r.push(i), n.type = "TK_TAG_SINGLE", n.is_closing_tag = !0) : "script" === l && (-1 === p.search("type") || p.search("type") > -1 && p.search(/\b(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1) ? (this.record_tag(l), n.type = "TK_TAG_SCRIPT") : "style" === l && (-1 === p.search("type") || p.search("type") > -1 && p.search("text/css") > -1) ? (this.record_tag(l), n.type = "TK_TAG_STYLE") : "!" === l.charAt(0) ? (n.type = "TK_TAG_SINGLE", this.traverse_whitespace()) : (n.is_closing_tag ? (n.start_tag_token = this.retrieve_tag(l.substring(1)), n.type = "TK_TAG_END") : (this.record_tag(l, n), "html" !== l && (this.indent_content = !0), n.type = "TK_TAG_START", n.is_opening_tag = !0), this.traverse_whitespace() && this.space_or_wrap(r), this.Utils.in_array(l, this.Utils.extra_liners) && (this.print_newline(!1, this.output), this.output.length && "\n" !== this.output[this.output.length - 2] && this.print_newline(!0, this.output))), n.text = r.join(""), n;
          }, this.get_comment = function () {
            for (var e = "", t = ">", n = !1, r = this.input.next(); r && ((e += r).charAt(e.length - 1) !== t.charAt(t.length - 1) || -1 === e.indexOf(t));) {
              n || (n = e.length > 10, 0 === e.indexOf("<![if") ? (t = "<![endif]>", n = !0) : 0 === e.indexOf("<![cdata[") ? (t = "]]>", n = !0) : 0 === e.indexOf("<![") ? (t = "]>", n = !0) : 0 === e.indexOf("\x3c!--") ? (t = "--\x3e", n = !0) : 0 === e.indexOf("{{!--") ? (t = "--}}", n = !0) : 0 === e.indexOf("{{!") ? 5 === e.length && -1 === e.indexOf("{{!--") && (t = "}}", n = !0) : 0 === e.indexOf("<?") ? (t = "?>", n = !0) : 0 === e.indexOf("<%") && (t = "%>", n = !0)), r = this.input.next();
            }return e;
          }, this.get_unformatted = function (e) {
            var t,
                n = "",
                r = "";if ('"' === e || "'" === e) for (var i = '"' === e ? /"|{{/g : /'|{{/g; this.input.hasNext() && (n += r = this.input.readUntilAfter(i), !r[r.length - 1].match(/['"]/g));) {
              this.input.hasNext() && (n += this.input.readUntilAfter(/}}/g));
            } else n = this.input.readUntilAfter(e);return -1 !== (t = n.lastIndexOf("\n")) ? this.line_char_count = n.length - t : this.line_char_count += n.length, n;
          }, this.get_token = function () {
            var e;if ("TK_TAG_SCRIPT" === this.last_token.type || "TK_TAG_STYLE" === this.last_token.type) {
              var t = this.last_token.type.substr(7);e = this.get_contents_to(t);
            } else "CONTENT" === this.current_mode ? "" === (e = this.get_content()).text && (e = this.get_tag()) : "TAG" === this.current_mode && (e = this.get_tag());return e;
          }, this.get_full_indent = function (e) {
            return (e = this.indent_level + e || 0) < 1 ? "" : Array(e + 1).join(this.indent_string);
          }, this.printer = function (e, t, n, r, i) {
            e = (e = e || "").replace(/\r\n|[\r\u2028\u2029]/g, "\n"), this.input = new o(e), this.output = [], this.indent_character = t, this.indent_string = "", this.indent_size = n, this.brace_style = i, this.indent_level = 0, this.wrap_line_length = r, this.line_char_count = 0;for (var a = 0; a < this.indent_size; a++) {
              this.indent_string += this.indent_character;
            }this.print_newline = function (e, t) {
              t && t.length && (e || "\n" !== t[t.length - 1]) && (this.line_char_count = 0, "\n" !== t[t.length - 1] && (t[t.length - 1] = u(t[t.length - 1])), t.push("\n"));
            }, this.print_indentation = function (e) {
              for (var t = 0; t < this.indent_level; t++) {
                e.push(this.indent_string), this.line_char_count += this.indent_string.length;
              }
            }, this.print_token = function (e) {
              this.is_whitespace(e) && !this.output.length || ((e || "" !== e) && this.output.length && "\n" === this.output[this.output.length - 1] && (this.print_indentation(this.output), e = e.replace(/^\s+/g, "")), this.print_token_raw(e));
            }, this.print_token_raw = function (e) {
              this.newlines > 0 && (e = u(e)), e && "" !== e && (e.length > 1 && "\n" === e.charAt(e.length - 1) ? (this.output.push(e.slice(0, -1)), this.print_newline(!1, this.output)) : this.output.push(e));for (var t = 0; t < this.newlines; t++) {
                this.print_newline(t > 0, this.output);
              }this.newlines = 0;
            }, this.indent = function () {
              this.indent_level++;
            }, this.unindent = function () {
              this.indent_level > 0 && this.indent_level--;
            };
          }, this;
        }()).printer(e, p, f, g, m);for (var r = null, a = { text: "", type: "", tag_name: "", is_opening_tag: !1, is_closing_tag: !1, is_inline_tag: !1 }; "TK_EOF" !== (r = l.get_token()).type;) {
          switch (r.type) {case "TK_TAG_START":
              r.is_inline_tag || "TK_CONTENT" === l.last_token.type || (r.parent && (r.parent.multiline_content = !0), l.print_newline(!1, l.output)), l.print_token(r.text), l.indent_content && (!l.indent_body_inner_html && "body" === r.tag_name || !l.indent_head_inner_html && "head" === r.tag_name || l.indent(), l.indent_content = !1), a = r, l.current_mode = "CONTENT";break;case "TK_TAG_STYLE":case "TK_TAG_SCRIPT":
              l.print_newline(!1, l.output), l.print_token(r.text), a = r, l.current_mode = "CONTENT";break;case "TK_TAG_END":
              (r.start_tag_token && r.start_tag_token.multiline_content || !(r.is_inline_tag || a.is_inline_tag || l.last_token === a && a.is_opening_tag && r.is_closing_tag && a.tag_name === r.tag_name || "TK_CONTENT" === l.last_token.type)) && l.print_newline(!1, l.output), l.print_token(r.text), a = r, l.current_mode = "CONTENT";break;case "TK_TAG_SINGLE":
              "!--" === r.tag_name && l.last_token.is_closing_tag && -1 === r.text.indexOf("\n") || r.is_inline_tag || r.is_unformatted || l.print_newline(!1, l.output), l.print_token(r.text), a = r, l.current_mode = "CONTENT";break;case "TK_TAG_HANDLEBARS_ELSE":
              for (var s = !1, T = l.output.length - 1; T >= 0 && "\n" !== l.output[T]; T--) {
                if (l.output[T].match(/{{#if/)) {
                  s = !0;break;
                }
              }s || l.print_newline(!1, l.output), l.print_token(r.text), l.indent_content && (l.indent(), l.indent_content = !1), a = r, l.current_mode = "CONTENT";break;case "TK_TAG_HANDLEBARS_COMMENT":
              l.print_token(r.text), l.current_mode = "TAG";break;case "TK_CONTENT":
              if (l.print_token(r.text), l.current_mode = "TAG", !r.text) continue;break;case "TK_STYLE":case "TK_SCRIPT":
              if ("" !== r.text) {
                l.print_newline(!1, l.output);var P,
                    q = r.text,
                    I = 1;"TK_SCRIPT" === r.type ? P = "function" == typeof n && n : "TK_STYLE" === r.type && (P = "function" == typeof i && i), "keep" === t.indent_scripts ? I = 0 : "separate" === t.indent_scripts && (I = -l.indent_level);var D = l.get_full_indent(I);if (P) {
                  var M = function M() {
                    this.eol = "\n";
                  };M.prototype = t;var U = new M();q = P(q.replace(/^\s*/, D), U);
                } else {
                  var R = q.match(/^\s*/)[0].match(/[^\n\r]*$/)[0].split(l.indent_string).length - 1,
                      V = l.get_full_indent(I - R);q = q.replace(/^\s*/, D).replace(/\r\n|\r|\n/g, "\n" + V).replace(/\s+$/, "");
                }q && (l.print_token_raw(q), l.print_newline(!0, l.output));
              }l.current_mode = "TAG";break;default:
              "" !== r.text && l.print_token(r.text);}l.last_token = r;
        }var W = l.output.join("").replace(/[\r\n\t ]+$/, "");return L && (W += "\n"), "\n" !== O && (W = W.replace(/[\n]/g, O)), W;
      };
    };
  }]);function qn(e, t, n) {
    var r = e.getText(),
        i = !0,
        o = 0,
        a = n.tabSize || 4;if (t) {
      for (var s = e.offsetAt(t.start), u = s; u > 0 && Un(r, u - 1);) {
        u--;
      }0 === u || Mn(r, u - 1) ? s = u : u < s && (s = u + 1);for (var l = e.offsetAt(t.end), c = l; c < r.length && Un(r, c);) {
        c++;
      }if ((c === r.length || Mn(r, c)) && (l = c), t = At.create(e.positionAt(s), e.positionAt(l)), i = l === r.length, r = r.substring(s, l), 0 !== s) {
        var h = e.offsetAt(Et.create(t.start.line, 0));o = function (e, t, n) {
          var r = t,
              i = 0,
              o = n.tabSize || 4;for (; r < e.length;) {
            var a = e.charAt(r);if (" " === a) i++;else {
              if ("\t" !== a) break;i += o;
            }r++;
          }return Math.floor(i / o);
        }(e.getText(), h, n);
      }
    } else t = At.create(Et.create(0, 0), e.positionAt(r.length));var d = function (e, t) {
      return Pn(e, t, Nn, On);
    }(r, { indent_size: n.insertSpaces ? a : 1, indent_char: n.insertSpaces ? " " : "\t", wrap_line_length: In(n, "wrapLineLength", 120), unformatted: Dn(n, "unformatted", void 0), content_unformatted: Dn(n, "contentUnformatted", void 0), indent_inner_html: In(n, "indentInnerHtml", !1), preserve_newlines: In(n, "preserveNewLines", !0), max_preserve_newlines: In(n, "maxPreserveNewLines", 32786), indent_handlebars: In(n, "indentHandlebars", !1), end_with_newline: i && In(n, "endWithNewline", !1), extra_liners: Dn(n, "extraLiners", void 0), wrap_attributes: In(n, "wrapAttributes", "auto"), wrap_attributes_indent_size: In(n, "wrapAttributesIndentSize", void 0), eol: "\n" });if (o > 0) {
      var f = n.insertSpaces ? ct(" ", a * o) : ct("\t", o);d = d.split("\n").join("\n" + f), 0 === t.start.character && (d = f + d);
    }return [{ range: t, newText: d }];
  }function In(e, t, n) {
    if (e && e.hasOwnProperty(t)) {
      var r = e[t];if (null !== r) return r;
    }return n;
  }function Dn(e, t, n) {
    var r = In(e, t, null);return "string" == typeof r ? r.length > 0 ? r.split(",").map(function (e) {
      return e.trim().toLowerCase();
    }) : [] : n;
  }function Mn(e, t) {
    return -1 !== "\r\n".indexOf(e.charAt(t));
  }function Un(e, t) {
    return -1 !== " \t".indexOf(e.charAt(t));
  }var Rn = n(3);function Vn(e, t) {
    var n = e[0];return n !== e[e.length - 1] || "'" !== n && '"' !== n || (e = e.substr(1, e.length - 2)), "razor" === t && "~" === e[0] && (e = e.substr(1)), e;
  }function Wn(e, t, n, r, i, o) {
    var a = Vn(n, e.languageId);if (!function (e, t) {
      if (!e.length) return !1;if ("handlebars" === t && /{{.*}}/.test(e)) return !1;if ("razor" === t && /@/.test(e)) return !1;try {
        return !!Rn.a.parse(e);
      } catch (e) {
        return !1;
      }
    }(a, e.languageId)) return null;a.length < n.length && (r++, i--);var s = function (e, t, n, r) {
      return (/^\s*javascript\:/i.test(t) || /^\s*\#/i.test(t) || /[\n\r]/.test(t) ? null : (t = t.replace(/^\s*/g, ""), /^https?:\/\//i.test(t) || /^file:\/\//i.test(t) ? t : /^\/\//i.test(t) ? (lt(e, "https://") ? "https" : "http") + ":" + t.replace(/^\s*/g, "") : n ? n.resolveReference(t, r || e) : t)
      );
    }(e.uri, a, t, o);return s && function (e) {
      try {
        return Rn.a.parse(e), !0;
      } catch (e) {
        return !1;
      }
    }(s) ? { range: At.create(e.positionAt(r), e.positionAt(i)), target: s } : null;
  }function jn(e, t) {
    for (var n = [], r = st(e.getText(), 0), i = r.scan(), o = !1, a = !1, s = void 0; i !== Ve.EOS;) {
      switch (i) {case Ve.StartTag:
          if (!s) a = "base" === r.getTokenText().toLowerCase();break;case Ve.AttributeName:
          var u = r.getTokenText().toLowerCase();o = "src" === u || "href" === u;break;case Ve.AttributeValue:
          if (o) {
            var l = r.getTokenText();if (!a) {
              var c = Wn(e, t, l, r.getTokenOffset(), r.getTokenEnd(), s);c && n.push(c);
            }a && void 0 === s && (s = Vn(l, e.languageId)) && t && (s = t.resolveReference(s, e.uri)), a = !1, o = !1;
          }}i = r.scan();
    }return n;
  }function Bn(e, t, n) {
    var r = e.offsetAt(t),
        i = n.findNodeAt(r);if (!i.tag) return [];var o = [],
        a = Hn(Ve.StartTag, e, i.start),
        s = "number" == typeof i.endTagStart && Hn(Ve.EndTag, e, i.endTagStart);return (a && Fn(a, t) || s && Fn(s, t)) && (a && o.push({ kind: nn.Read, range: a }), s && o.push({ kind: nn.Read, range: s })), o;
  }function Kn(e, t) {
    return e.line < t.line || e.line === t.line && e.character <= t.character;
  }function Fn(e, t) {
    return Kn(e.start, t) && Kn(t, e.end);
  }function Hn(e, t, n) {
    for (var r = st(t.getText(), n), i = r.scan(); i !== Ve.EOS && i !== e;) {
      i = r.scan();
    }return i !== Ve.EOS ? { start: t.positionAt(r.getTokenOffset()), end: t.positionAt(r.getTokenEnd()) } : null;
  }function Yn(e, t) {
    var n = [];return t.roots.forEach(function (t) {
      !function e(t, n, r, i) {
        var o = function (e) {
          var t = e.tag;if (e.attributes) {
            var n = e.attributes.id,
                r = e.attributes.class;n && (t += "#" + n.replace(/[\"\']/g, "")), r && (t += r.replace(/[\"\']/g, "").split(/\s+/).map(function (e) {
              return "." + e;
            }).join(""));
          }return t || "?";
        }(n);var a = Lt.create(t.uri, At.create(t.positionAt(n.start), t.positionAt(n.end)));var s = { name: o, location: a, containerName: r, kind: on.Field };i.push(s);n.children.forEach(function (n) {
          e(t, n, o, i);
        });
      }(e, t, "", n);
    }), n;
  }function zn(e, t) {
    var n = st(e.getText()),
        r = n.scan(),
        i = [],
        o = [],
        a = null,
        s = -1;function u(e) {
      i.push(e), s = e.startLine;
    }for (; r !== Ve.EOS;) {
      switch (r) {case Ve.StartTag:
          var l = n.getTokenText(),
              c = e.positionAt(n.getTokenOffset()).line;o.push({ startLine: c, tagName: l }), a = l;break;case Ve.EndTag:
          a = n.getTokenText();break;case Ve.StartTagClose:
          if (!a || !yt(a)) break;case Ve.EndTagClose:case Ve.StartTagSelfClose:
          for (var h = o.length - 1; h >= 0 && o[h].tagName !== a;) {
            h--;
          }if (h >= 0) {
            var d = o[h];o.length = h, (p = e.positionAt(n.getTokenOffset()).line - 1) > (c = d.startLine) && s !== c && u({ startLine: c, endLine: p });
          }break;case Ve.Comment:
          c = e.positionAt(n.getTokenOffset()).line;var f = n.getTokenText().match(/^\s*#(region\b)|(endregion\b)/);if (f) {
            if (f[1]) o.push({ startLine: c, tagName: "" });else {
              for (h = o.length - 1; h >= 0 && o[h].tagName.length;) {
                h--;
              }if (h >= 0) {
                var p;d = o[h];o.length = h, (p = c) > (c = d.startLine) && s !== c && u({ startLine: c, endLine: p, kind: qt.Region });
              }
            }
          } else c < (p = e.positionAt(n.getTokenOffset() + n.getTokenLength()).line) && u({ startLine: c, endLine: p, kind: qt.Comment });}r = n.scan();
    }var g = t && t.rangeLimit || Number.MAX_VALUE;return i.length > g && (i = function (e, t) {
      e = e.sort(function (e, t) {
        var n = e.startLine - t.startLine;return 0 === n && (n = e.endLine - t.endLine), n;
      });for (var n = void 0, r = [], i = [], o = [], a = function a(e, t) {
        i[e] = t, t < 30 && (o[t] = (o[t] || 0) + 1);
      }, s = 0; s < e.length; s++) {
        var u = e[s];if (n) {
          if (u.startLine > n.startLine) if (u.endLine <= n.endLine) r.push(n), n = u, a(s, r.length);else if (u.startLine > n.endLine) {
            do {
              n = r.pop();
            } while (n && u.startLine > n.endLine);n && r.push(n), n = u, a(s, r.length);
          }
        } else n = u, a(s, 0);
      }var l = 0,
          c = 0;for (s = 0; s < o.length; s++) {
        var h = o[s];if (h) {
          if (h + l > t) {
            c = s;break;
          }l += h;
        }
      }var d = [];for (s = 0; s < e.length; s++) {
        var f = i[s];"number" == typeof f && (f < c || f === c && l++ < t) && d.push(e[s]);
      }return d;
    }(i, g)), i;
  }function Gn() {
    var e = new Sn();return { createScanner: st, parseHTMLDocument: function parseHTMLDocument(e) {
        return function (e) {
          for (var t = st(e), n = new Bt(0, e.length, [], void 0), r = n, i = -1, o = null, a = t.scan(); a !== Ve.EOS;) {
            switch (a) {case Ve.StartTagOpen:
                var s = new Bt(t.getTokenOffset(), e.length, [], r);r.children.push(s), r = s;break;case Ve.StartTag:
                r.tag = t.getTokenText();break;case Ve.StartTagClose:
                r.end = t.getTokenEnd(), r.tag && yt(r.tag) && r.parent && (r.closed = !0, r = r.parent);break;case Ve.EndTagOpen:
                i = t.getTokenOffset();break;case Ve.EndTag:
                for (var u = t.getTokenText().toLowerCase(); !r.isSameTag(u) && r.parent;) {
                  r.end = i, r.closed = !1, r = r.parent;
                }r !== n && (r.closed = !0, r.endTagStart = i);break;case Ve.StartTagSelfClose:
                r.parent && (r.closed = !0, r.end = t.getTokenEnd(), r = r.parent);break;case Ve.EndTagClose:
                r.parent && (r.end = t.getTokenEnd(), r = r.parent);break;case Ve.AttributeName:
                o = t.getTokenText(), (l = r.attributes) || (r.attributes = l = {}), l[o] = null;break;case Ve.AttributeValue:
                var l,
                    c = t.getTokenText();(l = r.attributes) && o && (l[o] = c, o = null);}a = t.scan();
          }for (; r.parent;) {
            r.end = e.length, r.closed = !1, r = r.parent;
          }return { roots: n.children, findNodeBefore: n.findNodeBefore.bind(n), findNodeAt: n.findNodeAt.bind(n) };
        }(e.getText());
      }, doComplete: e.doComplete.bind(e), setCompletionParticipants: e.setCompletionParticipants.bind(e), doHover: Ln, format: qn, findDocumentHighlights: Bn, findDocumentLinks: jn, findDocumentSymbols: Yn, getFoldingRanges: zn, doTagComplete: e.doTagComplete.bind(e) };
  }var Jn = monaco.Promise,
      $n = function () {
    function e(e, t) {
      this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = Gn();
    }return e.prototype.doValidation = function (e) {
      return Jn.as([]);
    }, e.prototype.doComplete = function (e, t) {
      var n = this._getTextDocument(e),
          r = this._languageService.parseHTMLDocument(n);return Jn.as(this._languageService.doComplete(n, t, r, this._languageSettings && this._languageSettings.suggest));
    }, e.prototype.format = function (e, t, n) {
      var r = this._getTextDocument(e),
          i = this._languageService.format(r, t, this._languageSettings && this._languageSettings.format);return Jn.as(i);
    }, e.prototype.findDocumentHighlights = function (e, t) {
      var n = this._getTextDocument(e),
          r = this._languageService.parseHTMLDocument(n),
          i = this._languageService.findDocumentHighlights(n, t, r);return Jn.as(i);
    }, e.prototype.findDocumentLinks = function (e) {
      var t = this._getTextDocument(e),
          n = this._languageService.findDocumentLinks(t, null);return Jn.as(n);
    }, e.prototype.provideFoldingRanges = function (e, t) {
      var n = this._getTextDocument(e),
          r = this._languageService.getFoldingRanges(n, t);return Jn.as(r);
    }, e.prototype._getTextDocument = function (e) {
      for (var t = 0, n = this._ctx.getMirrorModels(); t < n.length; t++) {
        var r = n[t];if (r.uri.toString() === e) return gn.create(e, this._languageId, r.version, r.getValue());
      }return null;
    }, e;
  }();self.onmessage = function () {
    Be(function (e, t) {
      return new $n(e, t);
    });
  };
}]);
},{}],"..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55447' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","html.worker.js"], null)
//# sourceMappingURL=/html.worker.324dafb3.map