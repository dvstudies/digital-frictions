var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function Y1(t3, r) {
  for (var o = 0; o < r.length; o++) {
    const l = r[o];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const c in l) if (c !== "default" && !(c in t3)) {
        const f = Object.getOwnPropertyDescriptor(l, c);
        f && Object.defineProperty(t3, c, f.get ? f : { enumerable: true, get: () => l[c] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
  new MutationObserver((c) => {
    for (const f of c) if (f.type === "childList") for (const h of f.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && l(h);
  }).observe(document, { childList: true, subtree: true });
  function o(c) {
    const f = {};
    return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
  }
  function l(c) {
    if (c.ep) return;
    c.ep = true;
    const f = o(c);
    fetch(c.href, f);
  }
})();
function mu(t3) {
  return t3 && t3.__esModule && Object.prototype.hasOwnProperty.call(t3, "default") ? t3.default : t3;
}
var $h = { exports: {} }, Zs = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Av;
function X1() {
  if (Av) return Zs;
  Av = 1;
  var t3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function o(l, c, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      f = {};
      for (var m in c) m !== "key" && (f[m] = c[m]);
    } else f = c;
    return c = f.ref, { $$typeof: t3, type: l, key: h, ref: c !== void 0 ? c : null, props: f };
  }
  return Zs.Fragment = r, Zs.jsx = o, Zs.jsxs = o, Zs;
}
var Ov;
function K1() {
  return Ov || (Ov = 1, $h.exports = X1()), $h.exports;
}
var F = K1(), qh = { exports: {} }, $s = {}, Vh = { exports: {} }, Fh = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Rv;
function Q1() {
  return Rv || (Rv = 1, function(t3) {
    function r(Z, ct) {
      var ut = Z.length;
      Z.push(ct);
      t: for (; 0 < ut; ) {
        var gt = ut - 1 >>> 1, w = Z[gt];
        if (0 < c(w, ct)) Z[gt] = ct, Z[ut] = w, ut = gt;
        else break t;
      }
    }
    function o(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function l(Z) {
      if (Z.length === 0) return null;
      var ct = Z[0], ut = Z.pop();
      if (ut !== ct) {
        Z[0] = ut;
        t: for (var gt = 0, w = Z.length, W = w >>> 1; gt < W; ) {
          var pt = 2 * (gt + 1) - 1, R = Z[pt], bt = pt + 1, wt = Z[bt];
          if (0 > c(R, ut)) bt < w && 0 > c(wt, R) ? (Z[gt] = wt, Z[bt] = ut, gt = bt) : (Z[gt] = R, Z[pt] = ut, gt = pt);
          else if (bt < w && 0 > c(wt, ut)) Z[gt] = wt, Z[bt] = ut, gt = bt;
          else break t;
        }
      }
      return ct;
    }
    function c(Z, ct) {
      var ut = Z.sortIndex - ct.sortIndex;
      return ut !== 0 ? ut : Z.id - ct.id;
    }
    if (t3.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      t3.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, m = h.now();
      t3.unstable_now = function() {
        return h.now() - m;
      };
    }
    var _ = [], v = [], b = 1, S = null, E = 3, C = false, z = false, A = false, $ = false, N = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function U(Z) {
      for (var ct = o(v); ct !== null; ) {
        if (ct.callback === null) l(v);
        else if (ct.startTime <= Z) l(v), ct.sortIndex = ct.expirationTime, r(_, ct);
        else break;
        ct = o(v);
      }
    }
    function D(Z) {
      if (A = false, U(Z), !z) if (o(_) !== null) z = true, I || (I = true, X());
      else {
        var ct = o(v);
        ct !== null && st(D, ct.startTime - Z);
      }
    }
    var I = false, tt = -1, et = 5, lt = -1;
    function M() {
      return $ ? true : !(t3.unstable_now() - lt < et);
    }
    function q() {
      if ($ = false, I) {
        var Z = t3.unstable_now();
        lt = Z;
        var ct = true;
        try {
          t: {
            z = false, A && (A = false, G(tt), tt = -1), C = true;
            var ut = E;
            try {
              e: {
                for (U(Z), S = o(_); S !== null && !(S.expirationTime > Z && M()); ) {
                  var gt = S.callback;
                  if (typeof gt == "function") {
                    S.callback = null, E = S.priorityLevel;
                    var w = gt(S.expirationTime <= Z);
                    if (Z = t3.unstable_now(), typeof w == "function") {
                      S.callback = w, U(Z), ct = true;
                      break e;
                    }
                    S === o(_) && l(_), U(Z);
                  } else l(_);
                  S = o(_);
                }
                if (S !== null) ct = true;
                else {
                  var W = o(v);
                  W !== null && st(D, W.startTime - Z), ct = false;
                }
              }
              break t;
            } finally {
              S = null, E = ut, C = false;
            }
            ct = void 0;
          }
        } finally {
          ct ? X() : I = false;
        }
      }
    }
    var X;
    if (typeof P == "function") X = function() {
      P(q);
    };
    else if (typeof MessageChannel < "u") {
      var ft = new MessageChannel(), at = ft.port2;
      ft.port1.onmessage = q, X = function() {
        at.postMessage(null);
      };
    } else X = function() {
      N(q, 0);
    };
    function st(Z, ct) {
      tt = N(function() {
        Z(t3.unstable_now());
      }, ct);
    }
    t3.unstable_IdlePriority = 5, t3.unstable_ImmediatePriority = 1, t3.unstable_LowPriority = 4, t3.unstable_NormalPriority = 3, t3.unstable_Profiling = null, t3.unstable_UserBlockingPriority = 2, t3.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, t3.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : et = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, t3.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, t3.unstable_next = function(Z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var ct = 3;
          break;
        default:
          ct = E;
      }
      var ut = E;
      E = ct;
      try {
        return Z();
      } finally {
        E = ut;
      }
    }, t3.unstable_requestPaint = function() {
      $ = true;
    }, t3.unstable_runWithPriority = function(Z, ct) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var ut = E;
      E = Z;
      try {
        return ct();
      } finally {
        E = ut;
      }
    }, t3.unstable_scheduleCallback = function(Z, ct, ut) {
      var gt = t3.unstable_now();
      switch (typeof ut == "object" && ut !== null ? (ut = ut.delay, ut = typeof ut == "number" && 0 < ut ? gt + ut : gt) : ut = gt, Z) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = ut + w, Z = { id: b++, callback: ct, priorityLevel: Z, startTime: ut, expirationTime: w, sortIndex: -1 }, ut > gt ? (Z.sortIndex = ut, r(v, Z), o(_) === null && Z === o(v) && (A ? (G(tt), tt = -1) : A = true, st(D, ut - gt))) : (Z.sortIndex = w, r(_, Z), z || C || (z = true, I || (I = true, X()))), Z;
    }, t3.unstable_shouldYield = M, t3.unstable_wrapCallback = function(Z) {
      var ct = E;
      return function() {
        var ut = E;
        E = ct;
        try {
          return Z.apply(this, arguments);
        } finally {
          E = ut;
        }
      };
    };
  }(Fh)), Fh;
}
var zv;
function W1() {
  return zv || (zv = 1, Vh.exports = Q1()), Vh.exports;
}
var Gh = { exports: {} }, Qt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Lv;
function J1() {
  if (Lv) return Qt;
  Lv = 1;
  var t3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.iterator;
  function E(w) {
    return w === null || typeof w != "object" ? null : (w = S && w[S] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var C = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, z = Object.assign, A = {};
  function $(w, W, pt) {
    this.props = w, this.context = W, this.refs = A, this.updater = pt || C;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(w, W) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, W, "setState");
  }, $.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function N() {
  }
  N.prototype = $.prototype;
  function G(w, W, pt) {
    this.props = w, this.context = W, this.refs = A, this.updater = pt || C;
  }
  var P = G.prototype = new N();
  P.constructor = G, z(P, $.prototype), P.isPureReactComponent = true;
  var U = Array.isArray, D = { H: null, A: null, T: null, S: null, V: null }, I = Object.prototype.hasOwnProperty;
  function tt(w, W, pt, R, bt, wt) {
    return pt = wt.ref, { $$typeof: t3, type: w, key: W, ref: pt !== void 0 ? pt : null, props: wt };
  }
  function et(w, W) {
    return tt(w.type, W, void 0, void 0, void 0, w.props);
  }
  function lt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t3;
  }
  function M(w) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(pt) {
      return W[pt];
    });
  }
  var q = /\/+/g;
  function X(w, W) {
    return typeof w == "object" && w !== null && w.key != null ? M("" + w.key) : W.toString(36);
  }
  function ft() {
  }
  function at(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(ft, ft) : (w.status = "pending", w.then(function(W) {
          w.status === "pending" && (w.status = "fulfilled", w.value = W);
        }, function(W) {
          w.status === "pending" && (w.status = "rejected", w.reason = W);
        })), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function st(w, W, pt, R, bt) {
    var wt = typeof w;
    (wt === "undefined" || wt === "boolean") && (w = null);
    var _t = false;
    if (w === null) _t = true;
    else switch (wt) {
      case "bigint":
      case "string":
      case "number":
        _t = true;
        break;
      case "object":
        switch (w.$$typeof) {
          case t3:
          case r:
            _t = true;
            break;
          case b:
            return _t = w._init, st(_t(w._payload), W, pt, R, bt);
        }
    }
    if (_t) return bt = bt(w), _t = R === "" ? "." + X(w, 0) : R, U(bt) ? (pt = "", _t != null && (pt = _t.replace(q, "$&/") + "/"), st(bt, W, pt, "", function(re) {
      return re;
    })) : bt != null && (lt(bt) && (bt = et(bt, pt + (bt.key == null || w && w.key === bt.key ? "" : ("" + bt.key).replace(q, "$&/") + "/") + _t)), W.push(bt)), 1;
    _t = 0;
    var Dt = R === "" ? "." : R + ":";
    if (U(w)) for (var Lt = 0; Lt < w.length; Lt++) R = w[Lt], wt = Dt + X(R, Lt), _t += st(R, W, pt, wt, bt);
    else if (Lt = E(w), typeof Lt == "function") for (w = Lt.call(w), Lt = 0; !(R = w.next()).done; ) R = R.value, wt = Dt + X(R, Lt++), _t += st(R, W, pt, wt, bt);
    else if (wt === "object") {
      if (typeof w.then == "function") return st(at(w), W, pt, R, bt);
      throw W = String(w), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    }
    return _t;
  }
  function Z(w, W, pt) {
    if (w == null) return w;
    var R = [], bt = 0;
    return st(w, R, "", "", function(wt) {
      return W.call(pt, wt, bt++);
    }), R;
  }
  function ct(w) {
    if (w._status === -1) {
      var W = w._result;
      W = W(), W.then(function(pt) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = pt);
      }, function(pt) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = pt);
      }), w._status === -1 && (w._status = 0, w._result = W);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ut = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w), error: w });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function gt() {
  }
  return Qt.Children = { map: Z, forEach: function(w, W, pt) {
    Z(w, function() {
      W.apply(this, arguments);
    }, pt);
  }, count: function(w) {
    var W = 0;
    return Z(w, function() {
      W++;
    }), W;
  }, toArray: function(w) {
    return Z(w, function(W) {
      return W;
    }) || [];
  }, only: function(w) {
    if (!lt(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, Qt.Component = $, Qt.Fragment = o, Qt.Profiler = c, Qt.PureComponent = G, Qt.StrictMode = l, Qt.Suspense = _, Qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, Qt.__COMPILER_RUNTIME = { __proto__: null, c: function(w) {
    return D.H.useMemoCache(w);
  } }, Qt.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, Qt.cloneElement = function(w, W, pt) {
    if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
    var R = z({}, w.props), bt = w.key, wt = void 0;
    if (W != null) for (_t in W.ref !== void 0 && (wt = void 0), W.key !== void 0 && (bt = "" + W.key), W) !I.call(W, _t) || _t === "key" || _t === "__self" || _t === "__source" || _t === "ref" && W.ref === void 0 || (R[_t] = W[_t]);
    var _t = arguments.length - 2;
    if (_t === 1) R.children = pt;
    else if (1 < _t) {
      for (var Dt = Array(_t), Lt = 0; Lt < _t; Lt++) Dt[Lt] = arguments[Lt + 2];
      R.children = Dt;
    }
    return tt(w.type, bt, void 0, void 0, wt, R);
  }, Qt.createContext = function(w) {
    return w = { $$typeof: h, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null }, w.Provider = w, w.Consumer = { $$typeof: f, _context: w }, w;
  }, Qt.createElement = function(w, W, pt) {
    var R, bt = {}, wt = null;
    if (W != null) for (R in W.key !== void 0 && (wt = "" + W.key), W) I.call(W, R) && R !== "key" && R !== "__self" && R !== "__source" && (bt[R] = W[R]);
    var _t = arguments.length - 2;
    if (_t === 1) bt.children = pt;
    else if (1 < _t) {
      for (var Dt = Array(_t), Lt = 0; Lt < _t; Lt++) Dt[Lt] = arguments[Lt + 2];
      bt.children = Dt;
    }
    if (w && w.defaultProps) for (R in _t = w.defaultProps, _t) bt[R] === void 0 && (bt[R] = _t[R]);
    return tt(w, wt, void 0, void 0, null, bt);
  }, Qt.createRef = function() {
    return { current: null };
  }, Qt.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, Qt.isValidElement = lt, Qt.lazy = function(w) {
    return { $$typeof: b, _payload: { _status: -1, _result: w }, _init: ct };
  }, Qt.memo = function(w, W) {
    return { $$typeof: v, type: w, compare: W === void 0 ? null : W };
  }, Qt.startTransition = function(w) {
    var W = D.T, pt = {};
    D.T = pt;
    try {
      var R = w(), bt = D.S;
      bt !== null && bt(pt, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(gt, ut);
    } catch (wt) {
      ut(wt);
    } finally {
      D.T = W;
    }
  }, Qt.unstable_useCacheRefresh = function() {
    return D.H.useCacheRefresh();
  }, Qt.use = function(w) {
    return D.H.use(w);
  }, Qt.useActionState = function(w, W, pt) {
    return D.H.useActionState(w, W, pt);
  }, Qt.useCallback = function(w, W) {
    return D.H.useCallback(w, W);
  }, Qt.useContext = function(w) {
    return D.H.useContext(w);
  }, Qt.useDebugValue = function() {
  }, Qt.useDeferredValue = function(w, W) {
    return D.H.useDeferredValue(w, W);
  }, Qt.useEffect = function(w, W, pt) {
    var R = D.H;
    if (typeof pt == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return R.useEffect(w, W);
  }, Qt.useId = function() {
    return D.H.useId();
  }, Qt.useImperativeHandle = function(w, W, pt) {
    return D.H.useImperativeHandle(w, W, pt);
  }, Qt.useInsertionEffect = function(w, W) {
    return D.H.useInsertionEffect(w, W);
  }, Qt.useLayoutEffect = function(w, W) {
    return D.H.useLayoutEffect(w, W);
  }, Qt.useMemo = function(w, W) {
    return D.H.useMemo(w, W);
  }, Qt.useOptimistic = function(w, W) {
    return D.H.useOptimistic(w, W);
  }, Qt.useReducer = function(w, W, pt) {
    return D.H.useReducer(w, W, pt);
  }, Qt.useRef = function(w) {
    return D.H.useRef(w);
  }, Qt.useState = function(w) {
    return D.H.useState(w);
  }, Qt.useSyncExternalStore = function(w, W, pt) {
    return D.H.useSyncExternalStore(w, W, pt);
  }, Qt.useTransition = function() {
    return D.H.useTransition();
  }, Qt.version = "19.1.0", Qt;
}
var Pv;
function Yp() {
  return Pv || (Pv = 1, Gh.exports = J1()), Gh.exports;
}
var Yh = { exports: {} }, Nn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Bv;
function tS() {
  if (Bv) return Nn;
  Bv = 1;
  var t3 = Yp();
  function r(_) {
    var v = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++) v += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + _ + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var l = { d: { f: o, r: function() {
    throw Error(r(522));
  }, D: o, C: o, L: o, m: o, X: o, S: o, M: o }, p: 0, findDOMNode: null }, c = Symbol.for("react.portal");
  function f(_, v, b) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: c, key: S == null ? null : "" + S, children: _, containerInfo: v, implementation: b };
  }
  var h = t3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(_, v) {
    if (_ === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, Nn.createPortal = function(_, v) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
    return f(_, v, null, b);
  }, Nn.flushSync = function(_) {
    var v = h.T, b = l.p;
    try {
      if (h.T = null, l.p = 2, _) return _();
    } finally {
      h.T = v, l.p = b, l.d.f();
    }
  }, Nn.preconnect = function(_, v) {
    typeof _ == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, l.d.C(_, v));
  }, Nn.prefetchDNS = function(_) {
    typeof _ == "string" && l.d.D(_);
  }, Nn.preinit = function(_, v) {
    if (typeof _ == "string" && v && typeof v.as == "string") {
      var b = v.as, S = m(b, v.crossOrigin), E = typeof v.integrity == "string" ? v.integrity : void 0, C = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      b === "style" ? l.d.S(_, typeof v.precedence == "string" ? v.precedence : void 0, { crossOrigin: S, integrity: E, fetchPriority: C }) : b === "script" && l.d.X(_, { crossOrigin: S, integrity: E, fetchPriority: C, nonce: typeof v.nonce == "string" ? v.nonce : void 0 });
    }
  }, Nn.preinitModule = function(_, v) {
    if (typeof _ == "string") if (typeof v == "object" && v !== null) {
      if (v.as == null || v.as === "script") {
        var b = m(v.as, v.crossOrigin);
        l.d.M(_, { crossOrigin: b, integrity: typeof v.integrity == "string" ? v.integrity : void 0, nonce: typeof v.nonce == "string" ? v.nonce : void 0 });
      }
    } else v == null && l.d.M(_);
  }, Nn.preload = function(_, v) {
    if (typeof _ == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var b = v.as, S = m(b, v.crossOrigin);
      l.d.L(_, b, { crossOrigin: S, integrity: typeof v.integrity == "string" ? v.integrity : void 0, nonce: typeof v.nonce == "string" ? v.nonce : void 0, type: typeof v.type == "string" ? v.type : void 0, fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0, referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0, imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0, imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0, media: typeof v.media == "string" ? v.media : void 0 });
    }
  }, Nn.preloadModule = function(_, v) {
    if (typeof _ == "string") if (v) {
      var b = m(v.as, v.crossOrigin);
      l.d.m(_, { as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0, crossOrigin: b, integrity: typeof v.integrity == "string" ? v.integrity : void 0 });
    } else l.d.m(_);
  }, Nn.requestFormReset = function(_) {
    l.d.r(_);
  }, Nn.unstable_batchedUpdates = function(_, v) {
    return _(v);
  }, Nn.useFormState = function(_, v, b) {
    return h.H.useFormState(_, v, b);
  }, Nn.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Nn.version = "19.1.0", Nn;
}
var Dv;
function N0() {
  if (Dv) return Yh.exports;
  Dv = 1;
  function t3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t3);
    } catch (r) {
      console.error(r);
    }
  }
  return t3(), Yh.exports = tS(), Yh.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nv;
function eS() {
  if (Nv) return $s;
  Nv = 1;
  var t3 = W1(), r = Yp(), o = N0();
  function l(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var n = e, a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (a = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (f(e) !== e) throw Error(l(188));
  }
  function _(e) {
    var n = e.alternate;
    if (!n) {
      if (n = f(e), n === null) throw Error(l(188));
      return n !== e ? null : e;
    }
    for (var a = e, u = n; ; ) {
      var p = a.return;
      if (p === null) break;
      var g = p.alternate;
      if (g === null) {
        if (u = p.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (p.child === g.child) {
        for (g = p.child; g; ) {
          if (g === a) return m(p), e;
          if (g === u) return m(p), n;
          g = g.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== u.return) a = p, u = g;
      else {
        for (var T = false, O = p.child; O; ) {
          if (O === a) {
            T = true, a = p, u = g;
            break;
          }
          if (O === u) {
            T = true, u = p, a = g;
            break;
          }
          O = O.sibling;
        }
        if (!T) {
          for (O = g.child; O; ) {
            if (O === a) {
              T = true, a = g, u = p;
              break;
            }
            if (O === u) {
              T = true, u = g, a = p;
              break;
            }
            O = O.sibling;
          }
          if (!T) throw Error(l(189));
        }
      }
      if (a.alternate !== u) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? e : n;
  }
  function v(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = v(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, S = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), G = Symbol.for("react.consumer"), P = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), lt = Symbol.for("react.activity"), M = Symbol.for("react.memo_cache_sentinel"), q = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = q && e[q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ft = Symbol.for("react.client.reference");
  function at(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === ft ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case $:
        return "Profiler";
      case A:
        return "StrictMode";
      case D:
        return "Suspense";
      case I:
        return "SuspenseList";
      case lt:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case C:
        return "Portal";
      case P:
        return (e.displayName || "Context") + ".Provider";
      case G:
        return (e._context.displayName || "Context") + ".Consumer";
      case U:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case tt:
        return n = e.displayName || null, n !== null ? n : at(e.type) || "Memo";
      case et:
        n = e._payload, e = e._init;
        try {
          return at(e(n));
        } catch {
        }
    }
    return null;
  }
  var st = Array.isArray, Z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ct = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ut = { pending: false, data: null, method: null, action: null }, gt = [], w = -1;
  function W(e) {
    return { current: e };
  }
  function pt(e) {
    0 > w || (e.current = gt[w], gt[w] = null, w--);
  }
  function R(e, n) {
    w++, gt[w] = e.current, e.current = n;
  }
  var bt = W(null), wt = W(null), _t = W(null), Dt = W(null);
  function Lt(e, n) {
    switch (R(_t, n), R(wt, e), R(bt, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? iv(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI) n = iv(n), e = rv(n, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    pt(bt), R(bt, e);
  }
  function re() {
    pt(bt), pt(wt), pt(_t);
  }
  function Bt(e) {
    e.memoizedState !== null && R(Dt, e);
    var n = bt.current, a = rv(n, e.type);
    n !== a && (R(wt, e), R(bt, a));
  }
  function Vt(e) {
    wt.current === e && (pt(bt), pt(wt)), Dt.current === e && (pt(Dt), Ns._currentValue = ut);
  }
  var Kt = Object.prototype.hasOwnProperty, Re = t3.unstable_scheduleCallback, Ft = t3.unstable_cancelCallback, fe = t3.unstable_shouldYield, We = t3.unstable_requestPaint, se = t3.unstable_now, _e = t3.unstable_getCurrentPriorityLevel, Se = t3.unstable_ImmediatePriority, ke = t3.unstable_UserBlockingPriority, de = t3.unstable_NormalPriority, Ot = t3.unstable_LowPriority, Rn = t3.unstable_IdlePriority, $e = t3.log, Un = t3.unstable_setDisableYieldValue, rt = null, ht = null;
  function Ct(e) {
    if (typeof $e == "function" && Un(e), ht && typeof ht.setStrictMode == "function") try {
      ht.setStrictMode(rt, e);
    } catch {
    }
  }
  var Et = Math.clz32 ? Math.clz32 : mn, qt = Math.log, Gt = Math.LN2;
  function mn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qt(e) / Gt | 0) | 0;
  }
  var qe = 256, At = 4194304;
  function Xt(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ee(e, n, a) {
    var u = e.pendingLanes;
    if (u === 0) return 0;
    var p = 0, g = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var O = u & 134217727;
    return O !== 0 ? (u = O & ~g, u !== 0 ? p = Xt(u) : (T &= O, T !== 0 ? p = Xt(T) : a || (a = O & ~e, a !== 0 && (p = Xt(a))))) : (O = u & ~g, O !== 0 ? p = Xt(O) : T !== 0 ? p = Xt(T) : a || (a = u & ~e, a !== 0 && (p = Xt(a)))), p === 0 ? 0 : n !== 0 && n !== p && (n & g) === 0 && (g = p & -p, a = n & -n, g >= a || g === 32 && (a & 4194048) !== 0) ? n : p;
  }
  function Ie(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function zn(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Eu() {
    var e = qe;
    return qe <<= 1, (qe & 4194048) === 0 && (qe = 256), e;
  }
  function Ul() {
    var e = At;
    return At <<= 1, (At & 62914560) === 0 && (At = 4194304), e;
  }
  function Ba(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function to(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Wf(e, n, a, u, p, g) {
    var T = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, j = e.expirationTimes, J = e.hiddenUpdates;
    for (a = T & ~a; 0 < a; ) {
      var mt = 31 - Et(a), vt = 1 << mt;
      O[mt] = 0, j[mt] = -1;
      var nt = J[mt];
      if (nt !== null) for (J[mt] = null, mt = 0; mt < nt.length; mt++) {
        var it = nt[mt];
        it !== null && (it.lane &= -536870913);
      }
      a &= ~vt;
    }
    u !== 0 && ku(e, u, 0), g !== 0 && p === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(T & ~n));
  }
  function ku(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var u = 31 - Et(n);
    e.entangledLanes |= n, e.entanglements[u] = e.entanglements[u] | 1073741824 | a & 4194090;
  }
  function Mu(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var u = 31 - Et(a), p = 1 << u;
      p & n | e[u] & n && (e[u] |= n), a &= ~p;
    }
  }
  function Zl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function $l(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Au() {
    var e = ct.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : wv(e.type));
  }
  function ql(e, n) {
    var a = ct.p;
    try {
      return ct.p = e, n();
    } finally {
      ct.p = a;
    }
  }
  var Xi = Math.random().toString(36).slice(2), gn = "__reactFiber$" + Xi, Ln = "__reactProps$" + Xi, eo = "__reactContainer$" + Xi, Xn = "__reactEvents$" + Xi, zt = "__reactListeners$" + Xi, Ou = "__reactHandles$" + Xi, Vl = "__reactResources$" + Xi, no = "__reactMarker$" + Xi;
  function Da(e) {
    delete e[gn], delete e[Ln], delete e[Xn], delete e[zt], delete e[Ou];
  }
  function Ki(e) {
    var n = e[gn];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[eo] || a[gn]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null) for (e = sv(e); e !== null; ) {
          if (a = e[gn]) return a;
          e = sv(e);
        }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function br(e) {
    if (e = e[gn] || e[eo]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3) return e;
    }
    return null;
  }
  function Si(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(l(33));
  }
  function xr(e) {
    var n = e[Vl];
    return n || (n = e[Vl] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function an(e) {
    e[no] = true;
  }
  var Ru = /* @__PURE__ */ new Set(), zu = {};
  function Sr(e, n) {
    wr(e, n), wr(e + "Capture", n);
  }
  function wr(e, n) {
    for (zu[e] = n, e = 0; e < n.length; e++) Ru.add(n[e]);
  }
  var Jf = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wo = {}, Lu = {};
  function td(e) {
    return Kt.call(Lu, e) ? true : Kt.call(Wo, e) ? false : Jf.test(e) ? Lu[e] = true : (Wo[e] = true, false);
  }
  function Na(e, n, a) {
    if (td(n)) if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(n);
          return;
        case "boolean":
          var u = n.toLowerCase().slice(0, 5);
          if (u !== "data-" && u !== "aria-") {
            e.removeAttribute(n);
            return;
          }
      }
      e.setAttribute(n, "" + a);
    }
  }
  function Ia(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function Ni(e, n, a, u) {
    if (u === null) e.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + u);
    }
  }
  var Jo, io;
  function Cr(e) {
    if (Jo === void 0) try {
      throw Error();
    } catch (a) {
      var n = a.stack.trim().match(/\n( *(at )?)/);
      Jo = n && n[1] || "", io = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Jo + e + io;
  }
  var Ha = false;
  function Tr(e, n) {
    if (!e || Ha) return "";
    Ha = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = { DetermineComponentFrameRoot: function() {
        try {
          if (n) {
            var vt = function() {
              throw Error();
            };
            if (Object.defineProperty(vt.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(vt, []);
              } catch (it) {
                var nt = it;
              }
              Reflect.construct(e, [], vt);
            } else {
              try {
                vt.call();
              } catch (it) {
                nt = it;
              }
              e.call(vt.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (it) {
              nt = it;
            }
            (vt = e()) && typeof vt.catch == "function" && vt.catch(function() {
            });
          }
        } catch (it) {
          if (it && nt && typeof it.stack == "string") return [it.stack, nt.stack];
        }
        return [null, null];
      } };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var p = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      p && p.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var g = u.DetermineComponentFrameRoot(), T = g[0], O = g[1];
      if (T && O) {
        var j = T.split(`
`), J = O.split(`
`);
        for (p = u = 0; u < j.length && !j[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; p < J.length && !J[p].includes("DetermineComponentFrameRoot"); ) p++;
        if (u === j.length || p === J.length) for (u = j.length - 1, p = J.length - 1; 1 <= u && 0 <= p && j[u] !== J[p]; ) p--;
        for (; 1 <= u && 0 <= p; u--, p--) if (j[u] !== J[p]) {
          if (u !== 1 || p !== 1) do
            if (u--, p--, 0 > p || j[u] !== J[p]) {
              var mt = `
` + j[u].replace(" at new ", " at ");
              return e.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", e.displayName)), mt;
            }
          while (1 <= u && 0 <= p);
          break;
        }
      }
    } finally {
      Ha = false, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Cr(a) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Cr(e.type);
      case 16:
        return Cr("Lazy");
      case 13:
        return Cr("Suspense");
      case 19:
        return Cr("SuspenseList");
      case 0:
      case 15:
        return Tr(e.type, false);
      case 11:
        return Tr(e.type.render, false);
      case 1:
        return Tr(e.type, true);
      case 31:
        return Cr("Activity");
      default:
        return "";
    }
  }
  function ze(e) {
    try {
      var n = "";
      do
        n += ue(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function wn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Er(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function ro(e) {
    var n = Er(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), u = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var p = a.get, g = a.set;
      return Object.defineProperty(e, n, { configurable: true, get: function() {
        return p.call(this);
      }, set: function(T) {
        u = "" + T, g.call(this, T);
      } }), Object.defineProperty(e, n, { enumerable: a.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(T) {
        u = "" + T;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function oo(e) {
    e._valueTracker || (e._valueTracker = ro(e));
  }
  function Yt(e) {
    if (!e) return false;
    var n = e._valueTracker;
    if (!n) return true;
    var a = n.getValue(), u = "";
    return e && (u = Er(e) ? e.checked ? "true" : "false" : e.value), e = u, e !== a ? (n.setValue(e), true) : false;
  }
  function Le(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Fl = /[\n"\\]/g;
  function Cn(e) {
    return e.replace(Fl, function(n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pn(e, n, a, u, p, g, T, O) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), n != null ? T === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + wn(n)) : e.value !== "" + wn(n) && (e.value = "" + wn(n)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), n != null ? ao(e, T, wn(n)) : a != null ? ao(e, T, wn(a)) : u != null && e.removeAttribute("value"), p == null && g != null && (e.defaultChecked = !!g), p != null && (e.checked = p && typeof p != "function" && typeof p != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + wn(O) : e.removeAttribute("name");
  }
  function Pu(e, n, a, u, p, g, T, O) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.type = g), n != null || a != null) {
      if (!(g !== "submit" && g !== "reset" || n != null)) return;
      a = a != null ? "" + wn(a) : "", n = n != null ? "" + wn(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    u = u ?? p, u = typeof u != "function" && typeof u != "symbol" && !!u, e.checked = O ? e.checked : !!u, e.defaultChecked = !!u, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function ao(e, n, a) {
    n === "number" && Le(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Kn(e, n, a, u) {
    if (e = e.options, n) {
      n = {};
      for (var p = 0; p < a.length; p++) n["$" + a[p]] = true;
      for (a = 0; a < e.length; a++) p = n.hasOwnProperty("$" + e[a].value), e[a].selected !== p && (e[a].selected = p), p && u && (e[a].defaultSelected = true);
    } else {
      for (a = "" + wn(a), n = null, p = 0; p < e.length; p++) {
        if (e[p].value === a) {
          e[p].selected = true, u && (e[p].defaultSelected = true);
          return;
        }
        n !== null || e[p].disabled || (n = e[p]);
      }
      n !== null && (n.selected = true);
    }
  }
  function Ve(e, n, a) {
    if (n != null && (n = "" + wn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + wn(a) : "";
  }
  function Qi(e, n, a, u) {
    if (n == null) {
      if (u != null) {
        if (a != null) throw Error(l(92));
        if (st(u)) {
          if (1 < u.length) throw Error(l(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), n = a;
    }
    a = wn(n), e.defaultValue = a, u = e.textContent, u === a && u !== "" && u !== null && (e.value = u);
  }
  function wi(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var ta = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ja(e, n, a) {
    var u = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : u ? e.setProperty(n, a) : typeof a != "number" || a === 0 || ta.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function lo(e, n, a) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (e = e.style, a != null) {
      for (var u in a) !a.hasOwnProperty(u) || n != null && n.hasOwnProperty(u) || (u.indexOf("--") === 0 ? e.setProperty(u, "") : u === "float" ? e.cssFloat = "" : e[u] = "");
      for (var p in n) u = n[p], n.hasOwnProperty(p) && a[p] !== u && ja(e, p, u);
    } else for (var g in n) n.hasOwnProperty(g) && ja(e, g, n[g]);
  }
  function ea(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Gl = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ua = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function so(e) {
    return Ua.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var na = null;
  function uo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var kr = null, Wi = null;
  function Bu(e) {
    var n = br(e);
    if (n && (e = n.stateNode)) {
      var a = e[Ln] || null;
      t: switch (e = n.stateNode, n.type) {
        case "input":
          if (Pn(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), n = a.name, a.type === "radio" && n != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + Cn("" + n) + '"][type="radio"]'), n = 0; n < a.length; n++) {
              var u = a[n];
              if (u !== e && u.form === e.form) {
                var p = u[Ln] || null;
                if (!p) throw Error(l(90));
                Pn(u, p.value, p.defaultValue, p.defaultValue, p.checked, p.defaultChecked, p.type, p.name);
              }
            }
            for (n = 0; n < a.length; n++) u = a[n], u.form === e.form && Yt(u);
          }
          break t;
        case "textarea":
          Ve(e, a.value, a.defaultValue);
          break t;
        case "select":
          n = a.value, n != null && Kn(e, !!a.multiple, n, false);
      }
    }
  }
  var $t = false;
  function ai(e, n, a) {
    if ($t) return e(n, a);
    $t = true;
    try {
      var u = e(n);
      return u;
    } finally {
      if ($t = false, (kr !== null || Wi !== null) && (Ac(), kr && (n = kr, e = Wi, Wi = kr = null, Bu(n), e))) for (n = 0; n < e.length; n++) Bu(e[n]);
    }
  }
  function he(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var u = a[Ln] || null;
    if (u === null) return null;
    a = u[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (e = e.type, u = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !u;
        break t;
      default:
        e = false;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(l(231, n, typeof a));
    return a;
  }
  var Ci = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ia = false;
  if (Ci) try {
    var Mr = {};
    Object.defineProperty(Mr, "passive", { get: function() {
      ia = true;
    } }), window.addEventListener("test", Mr, Mr), window.removeEventListener("test", Mr, Mr);
  } catch {
    ia = false;
  }
  var Ti = null, Ii = null, co = null;
  function fo() {
    if (co) return co;
    var e, n = Ii, a = n.length, u, p = "value" in Ti ? Ti.value : Ti.textContent, g = p.length;
    for (e = 0; e < a && n[e] === p[e]; e++) ;
    var T = a - e;
    for (u = 1; u <= T && n[a - u] === p[g - u]; u++) ;
    return co = p.slice(e, 1 < u ? 1 - u : void 0);
  }
  function Ye(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ei() {
    return true;
  }
  function Yl() {
    return false;
  }
  function Tn(e) {
    function n(a, u, p, g, T) {
      this._reactName = a, this._targetInst = p, this.type = u, this.nativeEvent = g, this.target = T, this.currentTarget = null;
      for (var O in e) e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(g) : g[O]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === false) ? Ei : Yl, this.isPropagationStopped = Yl, this;
    }
    return b(n.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = Ei);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = Ei);
    }, persist: function() {
    }, isPersistent: Ei }), n;
  }
  var Ar = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ra = Tn(Ar), Or = b({}, Ar, { view: 0, detail: 0 }), ed = Tn(Or), Za, ne, oa, Bn = b({}, Or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $a, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== oa && (oa && e.type === "mousemove" ? (Za = e.screenX - oa.screenX, ne = e.screenY - oa.screenY) : ne = Za = 0, oa = e), Za);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ne;
  } }), ho = Tn(Bn), Du = b({}, Bn, { dataTransfer: 0 }), nd = Tn(Du), Xl = b({}, Or, { relatedTarget: 0 }), Kl = Tn(Xl), Nu = b({}, Ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), id = Tn(Nu), rd = b({}, Ar, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ql = Tn(rd), od = b({}, Ar, { data: 0 }), li = Tn(od), ad = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Iu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Ji = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hu(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Ji[e]) ? !!n[e] : false;
  }
  function $a() {
    return Hu;
  }
  var Wl = b({}, Or, { key: function(e) {
    if (e.key) {
      var n = ad[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Ye(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Iu[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $a, charCode: function(e) {
    return e.type === "keypress" ? Ye(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ye(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ld = Tn(Wl), ju = b({}, Bn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Jl = Tn(ju), sd = b({}, Or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $a }), ud = Tn(sd), ts = b({}, Ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cd = Tn(ts), Uu = b({}, Bn, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Zu = Tn(Uu), qa = b({}, Ar, { newState: 0, oldState: 0 }), Rr = Tn(qa), fd = [9, 13, 27, 32], zr = Ci && "CompositionEvent" in window, yn = null;
  Ci && "documentMode" in document && (yn = document.documentMode);
  var $u = Ci && "TextEvent" in window && !yn, es = Ci && (!zr || yn && 8 < yn && 11 >= yn), qu = " ", Va = false;
  function Fa(e, n) {
    switch (e) {
      case "keyup":
        return fd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function Vu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var po = false;
  function Fu(e, n) {
    switch (e) {
      case "compositionend":
        return Vu(n);
      case "keypress":
        return n.which !== 32 ? null : (Va = true, qu);
      case "textInput":
        return e = n.data, e === qu && Va ? null : e;
      default:
        return null;
    }
  }
  function dd(e, n) {
    if (po) return e === "compositionend" || !zr && Fa(e, n) ? (e = fo(), co = Ii = Ti = null, po = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return es && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var si = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Lr(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!si[e.type] : n === "textarea";
  }
  function Gu(e, n, a, u) {
    kr ? Wi ? Wi.push(u) : Wi = [u] : kr = u, n = Bc(n, "onChange"), 0 < n.length && (a = new ra("onChange", "change", null, a, u), e.push({ event: a, listeners: n }));
  }
  var Zn = null, aa = null;
  function mo(e) {
    Wy(e, 0);
  }
  function Ga(e) {
    var n = Si(e);
    if (Yt(n)) return e;
  }
  function go(e, n) {
    if (e === "change") return n;
  }
  var ns = false;
  if (Ci) {
    var yo;
    if (Ci) {
      var is = "oninput" in document;
      if (!is) {
        var Hi = document.createElement("div");
        Hi.setAttribute("oninput", "return;"), is = typeof Hi.oninput == "function";
      }
      yo = is;
    } else yo = false;
    ns = yo && (!document.documentMode || 9 < document.documentMode);
  }
  function la() {
    Zn && (Zn.detachEvent("onpropertychange", Yu), aa = Zn = null);
  }
  function Yu(e) {
    if (e.propertyName === "value" && Ga(aa)) {
      var n = [];
      Gu(n, aa, e, uo(e)), ai(mo, n);
    }
  }
  function rs(e, n, a) {
    e === "focusin" ? (la(), Zn = n, aa = a, Zn.attachEvent("onpropertychange", Yu)) : e === "focusout" && la();
  }
  function hd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ga(aa);
  }
  function ji(e, n) {
    if (e === "click") return Ga(n);
  }
  function pd(e, n) {
    if (e === "input" || e === "change") return Ga(n);
  }
  function vo(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var $n = typeof Object.is == "function" ? Object.is : vo;
  function qn(e, n) {
    if ($n(e, n)) return true;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return false;
    var a = Object.keys(e), u = Object.keys(n);
    if (a.length !== u.length) return false;
    for (u = 0; u < a.length; u++) {
      var p = a[u];
      if (!Kt.call(n, p) || !$n(e[p], n[p])) return false;
    }
    return true;
  }
  function sa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function os(e, n) {
    var a = sa(e);
    e = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = e + a.textContent.length, e <= n && u >= n) return { node: a, offset: n - e };
        e = u;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = sa(a);
    }
  }
  function Ya(e, n) {
    return e && n ? e === n ? true : e && e.nodeType === 3 ? false : n && n.nodeType === 3 ? Ya(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : false : false;
  }
  function ua(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Le(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) e = n.contentWindow;
      else break;
      n = Le(e.document);
    }
    return n;
  }
  function ca(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Xa = Ci && "documentMode" in document && 11 >= document.documentMode, ui = null, _o = null, Pr = null, Ka = false;
  function Xu(e, n, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ka || ui == null || ui !== Le(u) || (u = ui, "selectionStart" in u && ca(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Pr && qn(Pr, u) || (Pr = u, u = Bc(_o, "onSelect"), 0 < u.length && (n = new ra("onSelect", "select", null, n, a), e.push({ event: n, listeners: u }), n.target = ui)));
  }
  function ki(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var bo = { animationend: ki("Animation", "AnimationEnd"), animationiteration: ki("Animation", "AnimationIteration"), animationstart: ki("Animation", "AnimationStart"), transitionrun: ki("Transition", "TransitionRun"), transitionstart: ki("Transition", "TransitionStart"), transitioncancel: ki("Transition", "TransitionCancel"), transitionend: ki("Transition", "TransitionEnd") }, Qa = {}, Ku = {};
  Ci && (Ku = document.createElement("div").style, "AnimationEvent" in window || (delete bo.animationend.animation, delete bo.animationiteration.animation, delete bo.animationstart.animation), "TransitionEvent" in window || delete bo.transitionend.transition);
  function tr(e) {
    if (Qa[e]) return Qa[e];
    if (!bo[e]) return e;
    var n = bo[e], a;
    for (a in n) if (n.hasOwnProperty(a) && a in Ku) return Qa[e] = n[a];
    return e;
  }
  var Qu = tr("animationend"), ci = tr("animationiteration"), fa = tr("animationstart"), md = tr("transitionrun"), Wa = tr("transitionstart"), gd = tr("transitioncancel"), as = tr("transitionend"), Wu = /* @__PURE__ */ new Map(), Br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Br.push("scrollEnd");
  function fi(e, n) {
    Wu.set(e, n), Sr(n, [e]);
  }
  var Dr = /* @__PURE__ */ new WeakMap();
  function Vn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = Dr.get(e);
      return a !== void 0 ? a : (n = { value: e, source: n, stack: ze(n) }, Dr.set(e, n), n);
    }
    return { value: e, source: n, stack: ze(n) };
  }
  var Fn = [], xo = 0, di = 0;
  function da() {
    for (var e = xo, n = di = xo = 0; n < e; ) {
      var a = Fn[n];
      Fn[n++] = null;
      var u = Fn[n];
      Fn[n++] = null;
      var p = Fn[n];
      Fn[n++] = null;
      var g = Fn[n];
      if (Fn[n++] = null, u !== null && p !== null) {
        var T = u.pending;
        T === null ? p.next = p : (p.next = T.next, T.next = p), u.pending = p;
      }
      g !== 0 && pa(a, p, g);
    }
  }
  function ha(e, n, a, u) {
    Fn[xo++] = e, Fn[xo++] = n, Fn[xo++] = a, Fn[xo++] = u, di |= u, e.lanes |= u, e = e.alternate, e !== null && (e.lanes |= u);
  }
  function Nr(e, n, a, u) {
    return ha(e, n, a, u), er(e);
  }
  function So(e, n) {
    return ha(e, null, null, n), er(e);
  }
  function pa(e, n, a) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a);
    for (var p = false, g = e.return; g !== null; ) g.childLanes |= a, u = g.alternate, u !== null && (u.childLanes |= a), g.tag === 22 && (e = g.stateNode, e === null || e._visibility & 1 || (p = true)), e = g, g = g.return;
    return e.tag === 3 ? (g = e.stateNode, p && n !== null && (p = 31 - Et(a), e = g.hiddenUpdates, u = e[p], u === null ? e[p] = [n] : u.push(n), n.lane = a | 536870912), g) : null;
  }
  function er(e) {
    if (50 < As) throw As = 0, hh = null, Error(l(185));
    for (var n = e.return; n !== null; ) e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ir = {};
  function Ju(e, n, a, u) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Gn(e, n, a, u) {
    return new Ju(e, n, a, u);
  }
  function Ja(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Mi(e, n) {
    var a = e.alternate;
    return a === null ? (a = Gn(e.tag, n, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function ls(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), e;
  }
  function ma(e, n, a, u, p, g) {
    var T = 0;
    if (u = e, typeof e == "function") Ja(e) && (T = 1);
    else if (typeof e == "string") T = B1(e, a, bt.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else t: switch (e) {
      case lt:
        return e = Gn(31, a, n, p), e.elementType = lt, e.lanes = g, e;
      case z:
        return nr(a.children, p, g, n);
      case A:
        T = 8, p |= 24;
        break;
      case $:
        return e = Gn(12, a, n, p | 2), e.elementType = $, e.lanes = g, e;
      case D:
        return e = Gn(13, a, n, p), e.elementType = D, e.lanes = g, e;
      case I:
        return e = Gn(19, a, n, p), e.elementType = I, e.lanes = g, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case N:
          case P:
            T = 10;
            break t;
          case G:
            T = 9;
            break t;
          case U:
            T = 11;
            break t;
          case tt:
            T = 14;
            break t;
          case et:
            T = 16, u = null;
            break t;
        }
        T = 29, a = Error(l(130, e === null ? "null" : typeof e, "")), u = null;
    }
    return n = Gn(T, a, n, p), n.elementType = e, n.type = u, n.lanes = g, n;
  }
  function nr(e, n, a, u) {
    return e = Gn(7, e, u, n), e.lanes = a, e;
  }
  function ss(e, n, a) {
    return e = Gn(6, e, null, n), e.lanes = a, e;
  }
  function tl(e, n, a) {
    return n = Gn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = a, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  var Hr = [], wo = 0, i = null, s = 0, d = [], y = 0, x = null, k = 1, H = "";
  function K(e, n) {
    Hr[wo++] = s, Hr[wo++] = i, i = e, s = n;
  }
  function ot(e, n, a) {
    d[y++] = k, d[y++] = H, d[y++] = x, x = e;
    var u = k;
    e = H;
    var p = 32 - Et(u) - 1;
    u &= ~(1 << p), a += 1;
    var g = 32 - Et(n) + p;
    if (30 < g) {
      var T = p - p % 5;
      g = (u & (1 << T) - 1).toString(32), u >>= T, p -= T, k = 1 << 32 - Et(n) + p | a << p | u, H = g + e;
    } else k = 1 << g | a << p | u, H = e;
  }
  function xt(e) {
    e.return !== null && (K(e, 1), ot(e, 1, 0));
  }
  function Tt(e) {
    for (; e === i; ) i = Hr[--wo], Hr[wo] = null, s = Hr[--wo], Hr[wo] = null;
    for (; e === x; ) x = d[--y], d[y] = null, H = d[--y], d[y] = null, k = d[--y], d[y] = null;
  }
  var kt = null, Rt = null, Ut = false, Pe = null, Fe = false, vn = Error(l(519));
  function Qn(e) {
    var n = Error(l(418, ""));
    throw To(Vn(n, e)), vn;
  }
  function tc(e) {
    var n = e.stateNode, a = e.type, u = e.memoizedProps;
    switch (n[gn] = e, n[Ln] = u, a) {
      case "dialog":
        ae("cancel", n), ae("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ae("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Rs.length; a++) ae(Rs[a], n);
        break;
      case "source":
        ae("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ae("error", n), ae("load", n);
        break;
      case "details":
        ae("toggle", n);
        break;
      case "input":
        ae("invalid", n), Pu(n, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, true), oo(n);
        break;
      case "select":
        ae("invalid", n);
        break;
      case "textarea":
        ae("invalid", n), Qi(n, u.value, u.defaultValue, u.children), oo(n);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || u.suppressHydrationWarning === true || nv(n.textContent, a) ? (u.popover != null && (ae("beforetoggle", n), ae("toggle", n)), u.onScroll != null && ae("scroll", n), u.onScrollEnd != null && ae("scrollend", n), u.onClick != null && (n.onclick = Dc), n = true) : n = false, n || Qn(e);
  }
  function ec(e) {
    for (kt = e.return; kt; ) switch (kt.tag) {
      case 5:
      case 13:
        Fe = false;
        return;
      case 27:
      case 3:
        Fe = true;
        return;
      default:
        kt = kt.return;
    }
  }
  function ga(e) {
    if (e !== kt) return false;
    if (!Ut) return ec(e), Ut = true, false;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ah(e.type, e.memoizedProps)), a = !a), a && Rt && Qn(e), ec(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      t: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) if (a = e.data, a === "/$") {
            if (n === 0) {
              Rt = qi(e.nextSibling);
              break t;
            }
            n--;
          } else a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        Rt = null;
      }
    } else n === 27 ? (n = Rt, jo(e.type) ? (e = Lh, Lh = null, Rt = e) : Rt = n) : Rt = kt ? qi(e.stateNode.nextSibling) : null;
    return true;
  }
  function Co() {
    Rt = kt = null, Ut = false;
  }
  function nc() {
    var e = Pe;
    return e !== null && (ti === null ? ti = e : ti.push.apply(ti, e), Pe = null), e;
  }
  function To(e) {
    Pe === null ? Pe = [e] : Pe.push(e);
  }
  var He = W(null), Ai = null, Ui = null;
  function ir(e, n, a) {
    R(He, n._currentValue), n._currentValue = a;
  }
  function Zi(e) {
    e._currentValue = He.current, pt(He);
  }
  function ya(e, n, a) {
    for (; e !== null; ) {
      var u = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, u !== null && (u.childLanes |= n)) : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function el(e, n, a, u) {
    var p = e.child;
    for (p !== null && (p.return = e); p !== null; ) {
      var g = p.dependencies;
      if (g !== null) {
        var T = p.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var O = g;
          g = p;
          for (var j = 0; j < n.length; j++) if (O.context === n[j]) {
            g.lanes |= a, O = g.alternate, O !== null && (O.lanes |= a), ya(g.return, a, e), u || (T = null);
            break t;
          }
          g = O.next;
        }
      } else if (p.tag === 18) {
        if (T = p.return, T === null) throw Error(l(341));
        T.lanes |= a, g = T.alternate, g !== null && (g.lanes |= a), ya(T, a, e), T = null;
      } else T = p.child;
      if (T !== null) T.return = p;
      else for (T = p; T !== null; ) {
        if (T === e) {
          T = null;
          break;
        }
        if (p = T.sibling, p !== null) {
          p.return = T.return, T = p;
          break;
        }
        T = T.return;
      }
      p = T;
    }
  }
  function va(e, n, a, u) {
    e = null;
    for (var p = n, g = false; p !== null; ) {
      if (!g) {
        if ((p.flags & 524288) !== 0) g = true;
        else if ((p.flags & 262144) !== 0) break;
      }
      if (p.tag === 10) {
        var T = p.alternate;
        if (T === null) throw Error(l(387));
        if (T = T.memoizedProps, T !== null) {
          var O = p.type;
          $n(p.pendingProps.value, T.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (p === Dt.current) {
        if (T = p.alternate, T === null) throw Error(l(387));
        T.memoizedState.memoizedState !== p.memoizedState.memoizedState && (e !== null ? e.push(Ns) : e = [Ns]);
      }
      p = p.return;
    }
    e !== null && el(n, e, a, u), n.flags |= 262144;
  }
  function ic(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!$n(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function _a(e) {
    Ai = e, Ui = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Dn(e) {
    return Zm(Ai, e);
  }
  function rc(e, n) {
    return Ai === null && _a(e), Zm(e, n);
  }
  function Zm(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, Ui === null) {
      if (e === null) throw Error(l(308));
      Ui = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Ui = Ui.next = n;
    return a;
  }
  var Px = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = { aborted: false, addEventListener: function(a, u) {
      e.push(u);
    } };
    this.abort = function() {
      n.aborted = true, e.forEach(function(a) {
        return a();
      });
    };
  }, Bx = t3.unstable_scheduleCallback, Dx = t3.unstable_NormalPriority, dn = { $$typeof: P, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function yd() {
    return { controller: new Px(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function us(e) {
    e.refCount--, e.refCount === 0 && Bx(Dx, function() {
      e.controller.abort();
    });
  }
  var cs = null, vd = 0, nl = 0, il = null;
  function Nx(e, n) {
    if (cs === null) {
      var a = cs = [];
      vd = 0, nl = bh(), il = { status: "pending", value: void 0, then: function(u) {
        a.push(u);
      } };
    }
    return vd++, n.then($m, $m), n;
  }
  function $m() {
    if (--vd === 0 && cs !== null) {
      il !== null && (il.status = "fulfilled");
      var e = cs;
      cs = null, nl = 0, il = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Ix(e, n) {
    var a = [], u = { status: "pending", value: null, reason: null, then: function(p) {
      a.push(p);
    } };
    return e.then(function() {
      u.status = "fulfilled", u.value = n;
      for (var p = 0; p < a.length; p++) (0, a[p])(n);
    }, function(p) {
      for (u.status = "rejected", u.reason = p, p = 0; p < a.length; p++) (0, a[p])(void 0);
    }), u;
  }
  var qm = Z.S;
  Z.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Nx(e, n), qm !== null && qm(e, n);
  };
  var ba = W(null);
  function _d() {
    var e = ba.current;
    return e !== null ? e : Be.pooledCache;
  }
  function oc(e, n) {
    n === null ? R(ba, ba.current) : R(ba, n.pool);
  }
  function Vm() {
    var e = _d();
    return e === null ? null : { parent: dn._currentValue, pool: e };
  }
  var fs = Error(l(460)), Fm = Error(l(474)), ac = Error(l(542)), bd = { then: function() {
  } };
  function Gm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function lc() {
  }
  function Ym(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(lc, lc), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Km(e), e;
      default:
        if (typeof n.status == "string") n.then(lc, lc);
        else {
          if (e = Be, e !== null && 100 < e.shellSuspendCounter) throw Error(l(482));
          e = n, e.status = "pending", e.then(function(u) {
            if (n.status === "pending") {
              var p = n;
              p.status = "fulfilled", p.value = u;
            }
          }, function(u) {
            if (n.status === "pending") {
              var p = n;
              p.status = "rejected", p.reason = u;
            }
          });
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, Km(e), e;
        }
        throw ds = n, fs;
    }
  }
  var ds = null;
  function Xm() {
    if (ds === null) throw Error(l(459));
    var e = ds;
    return ds = null, e;
  }
  function Km(e) {
    if (e === fs || e === ac) throw Error(l(483));
  }
  var Eo = false;
  function xd(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Sd(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function ko(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Mo(e, n, a) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (be & 2) !== 0) {
      var p = u.pending;
      return p === null ? n.next = n : (n.next = p.next, p.next = n), u.pending = n, n = er(e), pa(e, null, a), n;
    }
    return ha(e, u, n, a), er(e);
  }
  function hs(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var u = n.lanes;
      u &= e.pendingLanes, a |= u, n.lanes = a, Mu(e, a);
    }
  }
  function wd(e, n) {
    var a = e.updateQueue, u = e.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var p = null, g = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var T = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          g === null ? p = g = T : g = g.next = T, a = a.next;
        } while (a !== null);
        g === null ? p = g = n : g = g.next = n;
      } else p = g = n;
      a = { baseState: u.baseState, firstBaseUpdate: p, lastBaseUpdate: g, shared: u.shared, callbacks: u.callbacks }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var Cd = false;
  function ps() {
    if (Cd) {
      var e = il;
      if (e !== null) throw e;
    }
  }
  function ms(e, n, a, u) {
    Cd = false;
    var p = e.updateQueue;
    Eo = false;
    var g = p.firstBaseUpdate, T = p.lastBaseUpdate, O = p.shared.pending;
    if (O !== null) {
      p.shared.pending = null;
      var j = O, J = j.next;
      j.next = null, T === null ? g = J : T.next = J, T = j;
      var mt = e.alternate;
      mt !== null && (mt = mt.updateQueue, O = mt.lastBaseUpdate, O !== T && (O === null ? mt.firstBaseUpdate = J : O.next = J, mt.lastBaseUpdate = j));
    }
    if (g !== null) {
      var vt = p.baseState;
      T = 0, mt = J = j = null, O = g;
      do {
        var nt = O.lane & -536870913, it = nt !== O.lane;
        if (it ? (ce & nt) === nt : (u & nt) === nt) {
          nt !== 0 && nt === nl && (Cd = true), mt !== null && (mt = mt.next = { lane: 0, tag: O.tag, payload: O.payload, callback: null, next: null });
          t: {
            var Ht = e, Nt = O;
            nt = n;
            var Te = a;
            switch (Nt.tag) {
              case 1:
                if (Ht = Nt.payload, typeof Ht == "function") {
                  vt = Ht.call(Te, vt, nt);
                  break t;
                }
                vt = Ht;
                break t;
              case 3:
                Ht.flags = Ht.flags & -65537 | 128;
              case 0:
                if (Ht = Nt.payload, nt = typeof Ht == "function" ? Ht.call(Te, vt, nt) : Ht, nt == null) break t;
                vt = b({}, vt, nt);
                break t;
              case 2:
                Eo = true;
            }
          }
          nt = O.callback, nt !== null && (e.flags |= 64, it && (e.flags |= 8192), it = p.callbacks, it === null ? p.callbacks = [nt] : it.push(nt));
        } else it = { lane: nt, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, mt === null ? (J = mt = it, j = vt) : mt = mt.next = it, T |= nt;
        if (O = O.next, O === null) {
          if (O = p.shared.pending, O === null) break;
          it = O, O = it.next, it.next = null, p.lastBaseUpdate = it, p.shared.pending = null;
        }
      } while (true);
      mt === null && (j = vt), p.baseState = j, p.firstBaseUpdate = J, p.lastBaseUpdate = mt, g === null && (p.shared.lanes = 0), Do |= T, e.lanes = T, e.memoizedState = vt;
    }
  }
  function Qm(e, n) {
    if (typeof e != "function") throw Error(l(191, e));
    e.call(n);
  }
  function Wm(e, n) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) Qm(a[e], n);
  }
  var rl = W(null), sc = W(0);
  function Jm(e, n) {
    e = Fr, R(sc, e), R(rl, n), Fr = e | n.baseLanes;
  }
  function Td() {
    R(sc, Fr), R(rl, rl.current);
  }
  function Ed() {
    Fr = sc.current, pt(rl), pt(sc);
  }
  var Ao = 0, Jt = null, we = null, ln = null, uc = false, ol = false, xa = false, cc = 0, gs = 0, al = null, Hx = 0;
  function Je() {
    throw Error(l(321));
  }
  function kd(e, n) {
    if (n === null) return false;
    for (var a = 0; a < n.length && a < e.length; a++) if (!$n(e[a], n[a])) return false;
    return true;
  }
  function Md(e, n, a, u, p, g) {
    return Ao = g, Jt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Z.H = e === null || e.memoizedState === null ? Dg : Ng, xa = false, g = a(u, p), xa = false, ol && (g = eg(n, a, u, p)), tg(e), g;
  }
  function tg(e) {
    Z.H = gc;
    var n = we !== null && we.next !== null;
    if (Ao = 0, ln = we = Jt = null, uc = false, gs = 0, al = null, n) throw Error(l(300));
    e === null || _n || (e = e.dependencies, e !== null && ic(e) && (_n = true));
  }
  function eg(e, n, a, u) {
    Jt = e;
    var p = 0;
    do {
      if (ol && (al = null), gs = 0, ol = false, 25 <= p) throw Error(l(301));
      if (p += 1, ln = we = null, e.updateQueue != null) {
        var g = e.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      Z.H = Fx, g = n(a, u);
    } while (ol);
    return g;
  }
  function jx() {
    var e = Z.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ys(n) : n, e = e.useState()[0], (we !== null ? we.memoizedState : null) !== e && (Jt.flags |= 1024), n;
  }
  function Ad() {
    var e = cc !== 0;
    return cc = 0, e;
  }
  function Od(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Rd(e) {
    if (uc) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      uc = false;
    }
    Ao = 0, ln = we = Jt = null, ol = false, gs = cc = 0, al = null;
  }
  function Wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ln === null ? Jt.memoizedState = ln = e : ln = ln.next = e, ln;
  }
  function sn() {
    if (we === null) {
      var e = Jt.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var n = ln === null ? Jt.memoizedState : ln.next;
    if (n !== null) ln = n, we = e;
    else {
      if (e === null) throw Jt.alternate === null ? Error(l(467)) : Error(l(310));
      we = e, e = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, ln === null ? Jt.memoizedState = ln = e : ln = ln.next = e;
    }
    return ln;
  }
  function zd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ys(e) {
    var n = gs;
    return gs += 1, al === null && (al = []), e = Ym(al, e, n), n = Jt, (ln === null ? n.memoizedState : ln.next) === null && (n = n.alternate, Z.H = n === null || n.memoizedState === null ? Dg : Ng), e;
  }
  function fc(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ys(e);
      if (e.$$typeof === P) return Dn(e);
    }
    throw Error(l(438, String(e)));
  }
  function Ld(e) {
    var n = null, a = Jt.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var u = Jt.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (n = { data: u.data.map(function(p) {
        return p.slice();
      }), index: 0 })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = zd(), Jt.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0) for (a = n.data[n.index] = Array(e), u = 0; u < e; u++) a[u] = M;
    return n.index++, a;
  }
  function jr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function dc(e) {
    var n = sn();
    return Pd(n, we, e);
  }
  function Pd(e, n, a) {
    var u = e.queue;
    if (u === null) throw Error(l(311));
    u.lastRenderedReducer = a;
    var p = e.baseQueue, g = u.pending;
    if (g !== null) {
      if (p !== null) {
        var T = p.next;
        p.next = g.next, g.next = T;
      }
      n.baseQueue = p = g, u.pending = null;
    }
    if (g = e.baseState, p === null) e.memoizedState = g;
    else {
      n = p.next;
      var O = T = null, j = null, J = n, mt = false;
      do {
        var vt = J.lane & -536870913;
        if (vt !== J.lane ? (ce & vt) === vt : (Ao & vt) === vt) {
          var nt = J.revertLane;
          if (nt === 0) j !== null && (j = j.next = { lane: 0, revertLane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), vt === nl && (mt = true);
          else if ((Ao & nt) === nt) {
            J = J.next, nt === nl && (mt = true);
            continue;
          } else vt = { lane: 0, revertLane: J.revertLane, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }, j === null ? (O = j = vt, T = g) : j = j.next = vt, Jt.lanes |= nt, Do |= nt;
          vt = J.action, xa && a(g, vt), g = J.hasEagerState ? J.eagerState : a(g, vt);
        } else nt = { lane: vt, revertLane: J.revertLane, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }, j === null ? (O = j = nt, T = g) : j = j.next = nt, Jt.lanes |= vt, Do |= vt;
        J = J.next;
      } while (J !== null && J !== n);
      if (j === null ? T = g : j.next = O, !$n(g, e.memoizedState) && (_n = true, mt && (a = il, a !== null))) throw a;
      e.memoizedState = g, e.baseState = T, e.baseQueue = j, u.lastRenderedState = g;
    }
    return p === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function Bd(e) {
    var n = sn(), a = n.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var u = a.dispatch, p = a.pending, g = n.memoizedState;
    if (p !== null) {
      a.pending = null;
      var T = p = p.next;
      do
        g = e(g, T.action), T = T.next;
      while (T !== p);
      $n(g, n.memoizedState) || (_n = true), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), a.lastRenderedState = g;
    }
    return [g, u];
  }
  function ng(e, n, a) {
    var u = Jt, p = sn(), g = Ut;
    if (g) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = n();
    var T = !$n((we || p).memoizedState, a);
    T && (p.memoizedState = a, _n = true), p = p.queue;
    var O = og.bind(null, u, p, e);
    if (vs(2048, 8, O, [e]), p.getSnapshot !== n || T || ln !== null && ln.memoizedState.tag & 1) {
      if (u.flags |= 2048, ll(9, hc(), rg.bind(null, u, p, a, n), null), Be === null) throw Error(l(349));
      g || (Ao & 124) !== 0 || ig(u, n, a);
    }
    return a;
  }
  function ig(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Jt.updateQueue, n === null ? (n = zd(), Jt.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function rg(e, n, a, u) {
    n.value = a, n.getSnapshot = u, ag(n) && lg(e);
  }
  function og(e, n, a) {
    return a(function() {
      ag(n) && lg(e);
    });
  }
  function ag(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !$n(e, a);
    } catch {
      return true;
    }
  }
  function lg(e) {
    var n = So(e, 2);
    n !== null && yi(n, e, 2);
  }
  function Dd(e) {
    var n = Wn();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), xa) {
        Ct(true);
        try {
          a();
        } finally {
          Ct(false);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: e }, n;
  }
  function sg(e, n, a, u) {
    return e.baseState = a, Pd(e, we, typeof u == "function" ? u : jr);
  }
  function Ux(e, n, a, u, p) {
    if (mc(e)) throw Error(l(485));
    if (e = n.action, e !== null) {
      var g = { payload: p, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(T) {
        g.listeners.push(T);
      } };
      Z.T !== null ? a(true) : g.isTransition = false, u(g), a = n.pending, a === null ? (g.next = n.pending = g, ug(n, g)) : (g.next = a.next, n.pending = a.next = g);
    }
  }
  function ug(e, n) {
    var a = n.action, u = n.payload, p = e.state;
    if (n.isTransition) {
      var g = Z.T, T = {};
      Z.T = T;
      try {
        var O = a(p, u), j = Z.S;
        j !== null && j(T, O), cg(e, n, O);
      } catch (J) {
        Nd(e, n, J);
      } finally {
        Z.T = g;
      }
    } else try {
      g = a(p, u), cg(e, n, g);
    } catch (J) {
      Nd(e, n, J);
    }
  }
  function cg(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
      fg(e, n, u);
    }, function(u) {
      return Nd(e, n, u);
    }) : fg(e, n, a);
  }
  function fg(e, n, a) {
    n.status = "fulfilled", n.value = a, dg(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, ug(e, a)));
  }
  function Nd(e, n, a) {
    var u = e.pending;
    if (e.pending = null, u !== null) {
      u = u.next;
      do
        n.status = "rejected", n.reason = a, dg(n), n = n.next;
      while (n !== u);
    }
    e.action = null;
  }
  function dg(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function hg(e, n) {
    return n;
  }
  function pg(e, n) {
    if (Ut) {
      var a = Be.formState;
      if (a !== null) {
        t: {
          var u = Jt;
          if (Ut) {
            if (Rt) {
              e: {
                for (var p = Rt, g = Fe; p.nodeType !== 8; ) {
                  if (!g) {
                    p = null;
                    break e;
                  }
                  if (p = qi(p.nextSibling), p === null) {
                    p = null;
                    break e;
                  }
                }
                g = p.data, p = g === "F!" || g === "F" ? p : null;
              }
              if (p) {
                Rt = qi(p.nextSibling), u = p.data === "F!";
                break t;
              }
            }
            Qn(u);
          }
          u = false;
        }
        u && (n = a[0]);
      }
    }
    return a = Wn(), a.memoizedState = a.baseState = n, u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: hg, lastRenderedState: n }, a.queue = u, a = Lg.bind(null, Jt, u), u.dispatch = a, u = Dd(false), g = Zd.bind(null, Jt, false, u.queue), u = Wn(), p = { state: n, dispatch: null, action: e, pending: null }, u.queue = p, a = Ux.bind(null, Jt, p, g, a), p.dispatch = a, u.memoizedState = e, [n, a, false];
  }
  function mg(e) {
    var n = sn();
    return gg(n, we, e);
  }
  function gg(e, n, a) {
    if (n = Pd(e, n, hg)[0], e = dc(jr)[0], typeof n == "object" && n !== null && typeof n.then == "function") try {
      var u = ys(n);
    } catch (T) {
      throw T === fs ? ac : T;
    }
    else u = n;
    n = sn();
    var p = n.queue, g = p.dispatch;
    return a !== n.memoizedState && (Jt.flags |= 2048, ll(9, hc(), Zx.bind(null, p, a), null)), [u, g, e];
  }
  function Zx(e, n) {
    e.action = n;
  }
  function yg(e) {
    var n = sn(), a = we;
    if (a !== null) return gg(n, a, e);
    sn(), n = n.memoizedState, a = sn();
    var u = a.queue.dispatch;
    return a.memoizedState = e, [n, u, false];
  }
  function ll(e, n, a, u) {
    return e = { tag: e, create: a, deps: u, inst: n, next: null }, n = Jt.updateQueue, n === null && (n = zd(), Jt.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (u = a.next, a.next = e, e.next = u, n.lastEffect = e), e;
  }
  function hc() {
    return { destroy: void 0, resource: void 0 };
  }
  function vg() {
    return sn().memoizedState;
  }
  function pc(e, n, a, u) {
    var p = Wn();
    u = u === void 0 ? null : u, Jt.flags |= e, p.memoizedState = ll(1 | n, hc(), a, u);
  }
  function vs(e, n, a, u) {
    var p = sn();
    u = u === void 0 ? null : u;
    var g = p.memoizedState.inst;
    we !== null && u !== null && kd(u, we.memoizedState.deps) ? p.memoizedState = ll(n, g, a, u) : (Jt.flags |= e, p.memoizedState = ll(1 | n, g, a, u));
  }
  function _g(e, n) {
    pc(8390656, 8, e, n);
  }
  function bg(e, n) {
    vs(2048, 8, e, n);
  }
  function xg(e, n) {
    return vs(4, 2, e, n);
  }
  function Sg(e, n) {
    return vs(4, 4, e, n);
  }
  function wg(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function() {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function Cg(e, n, a) {
    a = a != null ? a.concat([e]) : null, vs(4, 4, wg.bind(null, n, e), a);
  }
  function Id() {
  }
  function Tg(e, n) {
    var a = sn();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    return n !== null && kd(n, u[1]) ? u[0] : (a.memoizedState = [e, n], e);
  }
  function Eg(e, n) {
    var a = sn();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    if (n !== null && kd(n, u[1])) return u[0];
    if (u = e(), xa) {
      Ct(true);
      try {
        e();
      } finally {
        Ct(false);
      }
    }
    return a.memoizedState = [u, n], u;
  }
  function Hd(e, n, a) {
    return a === void 0 || (Ao & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Ay(), Jt.lanes |= e, Do |= e, a);
  }
  function kg(e, n, a, u) {
    return $n(a, n) ? a : rl.current !== null ? (e = Hd(e, a, u), $n(e, n) || (_n = true), e) : (Ao & 42) === 0 ? (_n = true, e.memoizedState = a) : (e = Ay(), Jt.lanes |= e, Do |= e, n);
  }
  function Mg(e, n, a, u, p) {
    var g = ct.p;
    ct.p = g !== 0 && 8 > g ? g : 8;
    var T = Z.T, O = {};
    Z.T = O, Zd(e, false, n, a);
    try {
      var j = p(), J = Z.S;
      if (J !== null && J(O, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var mt = Ix(j, u);
        _s(e, n, mt, gi(e));
      } else _s(e, n, u, gi(e));
    } catch (vt) {
      _s(e, n, { then: function() {
      }, status: "rejected", reason: vt }, gi());
    } finally {
      ct.p = g, Z.T = T;
    }
  }
  function $x() {
  }
  function jd(e, n, a, u) {
    if (e.tag !== 5) throw Error(l(476));
    var p = Ag(e).queue;
    Mg(e, p, n, ut, a === null ? $x : function() {
      return Og(e), a(u);
    });
  }
  function Ag(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = { memoizedState: ut, baseState: ut, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: ut }, next: null };
    var a = {};
    return n.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: jr, lastRenderedState: a }, next: null }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Og(e) {
    var n = Ag(e).next.queue;
    _s(e, n, {}, gi());
  }
  function Ud() {
    return Dn(Ns);
  }
  function Rg() {
    return sn().memoizedState;
  }
  function zg() {
    return sn().memoizedState;
  }
  function qx(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = gi();
          e = ko(a);
          var u = Mo(n, e, a);
          u !== null && (yi(u, n, a), hs(u, n, a)), n = { cache: yd() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Vx(e, n, a) {
    var u = gi();
    a = { lane: u, revertLane: 0, action: a, hasEagerState: false, eagerState: null, next: null }, mc(e) ? Pg(n, a) : (a = Nr(e, n, a, u), a !== null && (yi(a, e, u), Bg(a, n, u)));
  }
  function Lg(e, n, a) {
    var u = gi();
    _s(e, n, a, u);
  }
  function _s(e, n, a, u) {
    var p = { lane: u, revertLane: 0, action: a, hasEagerState: false, eagerState: null, next: null };
    if (mc(e)) Pg(n, p);
    else {
      var g = e.alternate;
      if (e.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null)) try {
        var T = n.lastRenderedState, O = g(T, a);
        if (p.hasEagerState = true, p.eagerState = O, $n(O, T)) return ha(e, n, p, 0), Be === null && da(), false;
      } catch {
      } finally {
      }
      if (a = Nr(e, n, p, u), a !== null) return yi(a, e, u), Bg(a, n, u), true;
    }
    return false;
  }
  function Zd(e, n, a, u) {
    if (u = { lane: 2, revertLane: bh(), action: u, hasEagerState: false, eagerState: null, next: null }, mc(e)) {
      if (n) throw Error(l(479));
    } else n = Nr(e, a, u, 2), n !== null && yi(n, e, 2);
  }
  function mc(e) {
    var n = e.alternate;
    return e === Jt || n !== null && n === Jt;
  }
  function Pg(e, n) {
    ol = uc = true;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function Bg(e, n, a) {
    if ((a & 4194048) !== 0) {
      var u = n.lanes;
      u &= e.pendingLanes, a |= u, n.lanes = a, Mu(e, a);
    }
  }
  var gc = { readContext: Dn, use: fc, useCallback: Je, useContext: Je, useEffect: Je, useImperativeHandle: Je, useLayoutEffect: Je, useInsertionEffect: Je, useMemo: Je, useReducer: Je, useRef: Je, useState: Je, useDebugValue: Je, useDeferredValue: Je, useTransition: Je, useSyncExternalStore: Je, useId: Je, useHostTransitionStatus: Je, useFormState: Je, useActionState: Je, useOptimistic: Je, useMemoCache: Je, useCacheRefresh: Je }, Dg = { readContext: Dn, use: fc, useCallback: function(e, n) {
    return Wn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Dn, useEffect: _g, useImperativeHandle: function(e, n, a) {
    a = a != null ? a.concat([e]) : null, pc(4194308, 4, wg.bind(null, n, e), a);
  }, useLayoutEffect: function(e, n) {
    return pc(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    pc(4, 2, e, n);
  }, useMemo: function(e, n) {
    var a = Wn();
    n = n === void 0 ? null : n;
    var u = e();
    if (xa) {
      Ct(true);
      try {
        e();
      } finally {
        Ct(false);
      }
    }
    return a.memoizedState = [u, n], u;
  }, useReducer: function(e, n, a) {
    var u = Wn();
    if (a !== void 0) {
      var p = a(n);
      if (xa) {
        Ct(true);
        try {
          a(n);
        } finally {
          Ct(false);
        }
      }
    } else p = n;
    return u.memoizedState = u.baseState = p, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: p }, u.queue = e, e = e.dispatch = Vx.bind(null, Jt, e), [u.memoizedState, e];
  }, useRef: function(e) {
    var n = Wn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: function(e) {
    e = Dd(e);
    var n = e.queue, a = Lg.bind(null, Jt, n);
    return n.dispatch = a, [e.memoizedState, a];
  }, useDebugValue: Id, useDeferredValue: function(e, n) {
    var a = Wn();
    return Hd(a, e, n);
  }, useTransition: function() {
    var e = Dd(false);
    return e = Mg.bind(null, Jt, e.queue, true, false), Wn().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, n, a) {
    var u = Jt, p = Wn();
    if (Ut) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else {
      if (a = n(), Be === null) throw Error(l(349));
      (ce & 124) !== 0 || ig(u, n, a);
    }
    p.memoizedState = a;
    var g = { value: a, getSnapshot: n };
    return p.queue = g, _g(og.bind(null, u, g, e), [e]), u.flags |= 2048, ll(9, hc(), rg.bind(null, u, g, a, n), null), a;
  }, useId: function() {
    var e = Wn(), n = Be.identifierPrefix;
    if (Ut) {
      var a = H, u = k;
      a = (u & ~(1 << 32 - Et(u) - 1)).toString(32) + a, n = "\xAB" + n + "R" + a, a = cc++, 0 < a && (n += "H" + a.toString(32)), n += "\xBB";
    } else a = Hx++, n = "\xAB" + n + "r" + a.toString(32) + "\xBB";
    return e.memoizedState = n;
  }, useHostTransitionStatus: Ud, useFormState: pg, useActionState: pg, useOptimistic: function(e) {
    var n = Wn();
    n.memoizedState = n.baseState = e;
    var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return n.queue = a, n = Zd.bind(null, Jt, true, a), a.dispatch = n, [e, n];
  }, useMemoCache: Ld, useCacheRefresh: function() {
    return Wn().memoizedState = qx.bind(null, Jt);
  } }, Ng = { readContext: Dn, use: fc, useCallback: Tg, useContext: Dn, useEffect: bg, useImperativeHandle: Cg, useInsertionEffect: xg, useLayoutEffect: Sg, useMemo: Eg, useReducer: dc, useRef: vg, useState: function() {
    return dc(jr);
  }, useDebugValue: Id, useDeferredValue: function(e, n) {
    var a = sn();
    return kg(a, we.memoizedState, e, n);
  }, useTransition: function() {
    var e = dc(jr)[0], n = sn().memoizedState;
    return [typeof e == "boolean" ? e : ys(e), n];
  }, useSyncExternalStore: ng, useId: Rg, useHostTransitionStatus: Ud, useFormState: mg, useActionState: mg, useOptimistic: function(e, n) {
    var a = sn();
    return sg(a, we, e, n);
  }, useMemoCache: Ld, useCacheRefresh: zg }, Fx = { readContext: Dn, use: fc, useCallback: Tg, useContext: Dn, useEffect: bg, useImperativeHandle: Cg, useInsertionEffect: xg, useLayoutEffect: Sg, useMemo: Eg, useReducer: Bd, useRef: vg, useState: function() {
    return Bd(jr);
  }, useDebugValue: Id, useDeferredValue: function(e, n) {
    var a = sn();
    return we === null ? Hd(a, e, n) : kg(a, we.memoizedState, e, n);
  }, useTransition: function() {
    var e = Bd(jr)[0], n = sn().memoizedState;
    return [typeof e == "boolean" ? e : ys(e), n];
  }, useSyncExternalStore: ng, useId: Rg, useHostTransitionStatus: Ud, useFormState: yg, useActionState: yg, useOptimistic: function(e, n) {
    var a = sn();
    return we !== null ? sg(a, we, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
  }, useMemoCache: Ld, useCacheRefresh: zg }, sl = null, bs = 0;
  function yc(e) {
    var n = bs;
    return bs += 1, sl === null && (sl = []), Ym(sl, e, n);
  }
  function xs(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function vc(e, n) {
    throw n.$$typeof === S ? Error(l(525)) : (e = Object.prototype.toString.call(n), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
  }
  function Ig(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Hg(e) {
    function n(Y, V) {
      if (e) {
        var Q = Y.deletions;
        Q === null ? (Y.deletions = [V], Y.flags |= 16) : Q.push(V);
      }
    }
    function a(Y, V) {
      if (!e) return null;
      for (; V !== null; ) n(Y, V), V = V.sibling;
      return null;
    }
    function u(Y) {
      for (var V = /* @__PURE__ */ new Map(); Y !== null; ) Y.key !== null ? V.set(Y.key, Y) : V.set(Y.index, Y), Y = Y.sibling;
      return V;
    }
    function p(Y, V) {
      return Y = Mi(Y, V), Y.index = 0, Y.sibling = null, Y;
    }
    function g(Y, V, Q) {
      return Y.index = Q, e ? (Q = Y.alternate, Q !== null ? (Q = Q.index, Q < V ? (Y.flags |= 67108866, V) : Q) : (Y.flags |= 67108866, V)) : (Y.flags |= 1048576, V);
    }
    function T(Y) {
      return e && Y.alternate === null && (Y.flags |= 67108866), Y;
    }
    function O(Y, V, Q, yt) {
      return V === null || V.tag !== 6 ? (V = ss(Q, Y.mode, yt), V.return = Y, V) : (V = p(V, Q), V.return = Y, V);
    }
    function j(Y, V, Q, yt) {
      var Mt = Q.type;
      return Mt === z ? mt(Y, V, Q.props.children, yt, Q.key) : V !== null && (V.elementType === Mt || typeof Mt == "object" && Mt !== null && Mt.$$typeof === et && Ig(Mt) === V.type) ? (V = p(V, Q.props), xs(V, Q), V.return = Y, V) : (V = ma(Q.type, Q.key, Q.props, null, Y.mode, yt), xs(V, Q), V.return = Y, V);
    }
    function J(Y, V, Q, yt) {
      return V === null || V.tag !== 4 || V.stateNode.containerInfo !== Q.containerInfo || V.stateNode.implementation !== Q.implementation ? (V = tl(Q, Y.mode, yt), V.return = Y, V) : (V = p(V, Q.children || []), V.return = Y, V);
    }
    function mt(Y, V, Q, yt, Mt) {
      return V === null || V.tag !== 7 ? (V = nr(Q, Y.mode, yt, Mt), V.return = Y, V) : (V = p(V, Q), V.return = Y, V);
    }
    function vt(Y, V, Q) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint") return V = ss("" + V, Y.mode, Q), V.return = Y, V;
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case E:
            return Q = ma(V.type, V.key, V.props, null, Y.mode, Q), xs(Q, V), Q.return = Y, Q;
          case C:
            return V = tl(V, Y.mode, Q), V.return = Y, V;
          case et:
            var yt = V._init;
            return V = yt(V._payload), vt(Y, V, Q);
        }
        if (st(V) || X(V)) return V = nr(V, Y.mode, Q, null), V.return = Y, V;
        if (typeof V.then == "function") return vt(Y, yc(V), Q);
        if (V.$$typeof === P) return vt(Y, rc(Y, V), Q);
        vc(Y, V);
      }
      return null;
    }
    function nt(Y, V, Q, yt) {
      var Mt = V !== null ? V.key : null;
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return Mt !== null ? null : O(Y, V, "" + Q, yt);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case E:
            return Q.key === Mt ? j(Y, V, Q, yt) : null;
          case C:
            return Q.key === Mt ? J(Y, V, Q, yt) : null;
          case et:
            return Mt = Q._init, Q = Mt(Q._payload), nt(Y, V, Q, yt);
        }
        if (st(Q) || X(Q)) return Mt !== null ? null : mt(Y, V, Q, yt, null);
        if (typeof Q.then == "function") return nt(Y, V, yc(Q), yt);
        if (Q.$$typeof === P) return nt(Y, V, rc(Y, Q), yt);
        vc(Y, Q);
      }
      return null;
    }
    function it(Y, V, Q, yt, Mt) {
      if (typeof yt == "string" && yt !== "" || typeof yt == "number" || typeof yt == "bigint") return Y = Y.get(Q) || null, O(V, Y, "" + yt, Mt);
      if (typeof yt == "object" && yt !== null) {
        switch (yt.$$typeof) {
          case E:
            return Y = Y.get(yt.key === null ? Q : yt.key) || null, j(V, Y, yt, Mt);
          case C:
            return Y = Y.get(yt.key === null ? Q : yt.key) || null, J(V, Y, yt, Mt);
          case et:
            var ie = yt._init;
            return yt = ie(yt._payload), it(Y, V, Q, yt, Mt);
        }
        if (st(yt) || X(yt)) return Y = Y.get(Q) || null, mt(V, Y, yt, Mt, null);
        if (typeof yt.then == "function") return it(Y, V, Q, yc(yt), Mt);
        if (yt.$$typeof === P) return it(Y, V, Q, rc(V, yt), Mt);
        vc(V, yt);
      }
      return null;
    }
    function Ht(Y, V, Q, yt) {
      for (var Mt = null, ie = null, Pt = V, It = V = 0, xn = null; Pt !== null && It < Q.length; It++) {
        Pt.index > It ? (xn = Pt, Pt = null) : xn = Pt.sibling;
        var pe = nt(Y, Pt, Q[It], yt);
        if (pe === null) {
          Pt === null && (Pt = xn);
          break;
        }
        e && Pt && pe.alternate === null && n(Y, Pt), V = g(pe, V, It), ie === null ? Mt = pe : ie.sibling = pe, ie = pe, Pt = xn;
      }
      if (It === Q.length) return a(Y, Pt), Ut && K(Y, It), Mt;
      if (Pt === null) {
        for (; It < Q.length; It++) Pt = vt(Y, Q[It], yt), Pt !== null && (V = g(Pt, V, It), ie === null ? Mt = Pt : ie.sibling = Pt, ie = Pt);
        return Ut && K(Y, It), Mt;
      }
      for (Pt = u(Pt); It < Q.length; It++) xn = it(Pt, Y, It, Q[It], yt), xn !== null && (e && xn.alternate !== null && Pt.delete(xn.key === null ? It : xn.key), V = g(xn, V, It), ie === null ? Mt = xn : ie.sibling = xn, ie = xn);
      return e && Pt.forEach(function(Vo) {
        return n(Y, Vo);
      }), Ut && K(Y, It), Mt;
    }
    function Nt(Y, V, Q, yt) {
      if (Q == null) throw Error(l(151));
      for (var Mt = null, ie = null, Pt = V, It = V = 0, xn = null, pe = Q.next(); Pt !== null && !pe.done; It++, pe = Q.next()) {
        Pt.index > It ? (xn = Pt, Pt = null) : xn = Pt.sibling;
        var Vo = nt(Y, Pt, pe.value, yt);
        if (Vo === null) {
          Pt === null && (Pt = xn);
          break;
        }
        e && Pt && Vo.alternate === null && n(Y, Pt), V = g(Vo, V, It), ie === null ? Mt = Vo : ie.sibling = Vo, ie = Vo, Pt = xn;
      }
      if (pe.done) return a(Y, Pt), Ut && K(Y, It), Mt;
      if (Pt === null) {
        for (; !pe.done; It++, pe = Q.next()) pe = vt(Y, pe.value, yt), pe !== null && (V = g(pe, V, It), ie === null ? Mt = pe : ie.sibling = pe, ie = pe);
        return Ut && K(Y, It), Mt;
      }
      for (Pt = u(Pt); !pe.done; It++, pe = Q.next()) pe = it(Pt, Y, It, pe.value, yt), pe !== null && (e && pe.alternate !== null && Pt.delete(pe.key === null ? It : pe.key), V = g(pe, V, It), ie === null ? Mt = pe : ie.sibling = pe, ie = pe);
      return e && Pt.forEach(function(G1) {
        return n(Y, G1);
      }), Ut && K(Y, It), Mt;
    }
    function Te(Y, V, Q, yt) {
      if (typeof Q == "object" && Q !== null && Q.type === z && Q.key === null && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case E:
            t: {
              for (var Mt = Q.key; V !== null; ) {
                if (V.key === Mt) {
                  if (Mt = Q.type, Mt === z) {
                    if (V.tag === 7) {
                      a(Y, V.sibling), yt = p(V, Q.props.children), yt.return = Y, Y = yt;
                      break t;
                    }
                  } else if (V.elementType === Mt || typeof Mt == "object" && Mt !== null && Mt.$$typeof === et && Ig(Mt) === V.type) {
                    a(Y, V.sibling), yt = p(V, Q.props), xs(yt, Q), yt.return = Y, Y = yt;
                    break t;
                  }
                  a(Y, V);
                  break;
                } else n(Y, V);
                V = V.sibling;
              }
              Q.type === z ? (yt = nr(Q.props.children, Y.mode, yt, Q.key), yt.return = Y, Y = yt) : (yt = ma(Q.type, Q.key, Q.props, null, Y.mode, yt), xs(yt, Q), yt.return = Y, Y = yt);
            }
            return T(Y);
          case C:
            t: {
              for (Mt = Q.key; V !== null; ) {
                if (V.key === Mt) if (V.tag === 4 && V.stateNode.containerInfo === Q.containerInfo && V.stateNode.implementation === Q.implementation) {
                  a(Y, V.sibling), yt = p(V, Q.children || []), yt.return = Y, Y = yt;
                  break t;
                } else {
                  a(Y, V);
                  break;
                }
                else n(Y, V);
                V = V.sibling;
              }
              yt = tl(Q, Y.mode, yt), yt.return = Y, Y = yt;
            }
            return T(Y);
          case et:
            return Mt = Q._init, Q = Mt(Q._payload), Te(Y, V, Q, yt);
        }
        if (st(Q)) return Ht(Y, V, Q, yt);
        if (X(Q)) {
          if (Mt = X(Q), typeof Mt != "function") throw Error(l(150));
          return Q = Mt.call(Q), Nt(Y, V, Q, yt);
        }
        if (typeof Q.then == "function") return Te(Y, V, yc(Q), yt);
        if (Q.$$typeof === P) return Te(Y, V, rc(Y, Q), yt);
        vc(Y, Q);
      }
      return typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint" ? (Q = "" + Q, V !== null && V.tag === 6 ? (a(Y, V.sibling), yt = p(V, Q), yt.return = Y, Y = yt) : (a(Y, V), yt = ss(Q, Y.mode, yt), yt.return = Y, Y = yt), T(Y)) : a(Y, V);
    }
    return function(Y, V, Q, yt) {
      try {
        bs = 0;
        var Mt = Te(Y, V, Q, yt);
        return sl = null, Mt;
      } catch (Pt) {
        if (Pt === fs || Pt === ac) throw Pt;
        var ie = Gn(29, Pt, null, Y.mode);
        return ie.lanes = yt, ie.return = Y, ie;
      } finally {
      }
    };
  }
  var ul = Hg(true), jg = Hg(false), Oi = W(null), rr = null;
  function Oo(e) {
    var n = e.alternate;
    R(hn, hn.current & 1), R(Oi, e), rr === null && (n === null || rl.current !== null || n.memoizedState !== null) && (rr = e);
  }
  function Ug(e) {
    if (e.tag === 22) {
      if (R(hn, hn.current), R(Oi, e), rr === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (rr = e);
      }
    } else Ro();
  }
  function Ro() {
    R(hn, hn.current), R(Oi, Oi.current);
  }
  function Ur(e) {
    pt(Oi), rr === e && (rr = null), pt(hn);
  }
  var hn = W(0);
  function _c(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || zh(a))) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function $d(e, n, a, u) {
    n = e.memoizedState, a = a(u, n), a = a == null ? n : b({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var qd = { enqueueSetState: function(e, n, a) {
    e = e._reactInternals;
    var u = gi(), p = ko(u);
    p.payload = n, a != null && (p.callback = a), n = Mo(e, p, u), n !== null && (yi(n, e, u), hs(n, e, u));
  }, enqueueReplaceState: function(e, n, a) {
    e = e._reactInternals;
    var u = gi(), p = ko(u);
    p.tag = 1, p.payload = n, a != null && (p.callback = a), n = Mo(e, p, u), n !== null && (yi(n, e, u), hs(n, e, u));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var a = gi(), u = ko(a);
    u.tag = 2, n != null && (u.callback = n), n = Mo(e, u, a), n !== null && (yi(n, e, a), hs(n, e, a));
  } };
  function Zg(e, n, a, u, p, g, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(u, g, T) : n.prototype && n.prototype.isPureReactComponent ? !qn(a, u) || !qn(p, g) : true;
  }
  function $g(e, n, a, u) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, u), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, u), n.state !== e && qd.enqueueReplaceState(n, n.state, null);
  }
  function Sa(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var u in n) u !== "ref" && (a[u] = n[u]);
    }
    if (e = e.defaultProps) {
      a === n && (a = b({}, a));
      for (var p in e) a[p] === void 0 && (a[p] = e[p]);
    }
    return a;
  }
  var bc = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function qg(e) {
    bc(e);
  }
  function Vg(e) {
    console.error(e);
  }
  function Fg(e) {
    bc(e);
  }
  function xc(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Gg(e, n, a) {
    try {
      var u = e.onCaughtError;
      u(a.value, { componentStack: a.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
    } catch (p) {
      setTimeout(function() {
        throw p;
      });
    }
  }
  function Vd(e, n, a) {
    return a = ko(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      xc(e, n);
    }, a;
  }
  function Yg(e) {
    return e = ko(e), e.tag = 3, e;
  }
  function Xg(e, n, a, u) {
    var p = a.type.getDerivedStateFromError;
    if (typeof p == "function") {
      var g = u.value;
      e.payload = function() {
        return p(g);
      }, e.callback = function() {
        Gg(n, a, u);
      };
    }
    var T = a.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      Gg(n, a, u), typeof p != "function" && (No === null ? No = /* @__PURE__ */ new Set([this]) : No.add(this));
      var O = u.stack;
      this.componentDidCatch(u.value, { componentStack: O !== null ? O : "" });
    });
  }
  function Gx(e, n, a, u, p) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (n = a.alternate, n !== null && va(n, a, p, true), a = Oi.current, a !== null) {
        switch (a.tag) {
          case 13:
            return rr === null ? mh() : a.alternate === null && Xe === 0 && (Xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = p, u === bd ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : n.add(u), yh(e, u, p)), false;
          case 22:
            return a.flags |= 65536, u === bd ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([u]) }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), yh(e, u, p)), false;
        }
        throw Error(l(435, a.tag));
      }
      return yh(e, u, p), mh(), false;
    }
    if (Ut) return n = Oi.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = p, u !== vn && (e = Error(l(422), { cause: u }), To(Vn(e, a)))) : (u !== vn && (n = Error(l(423), { cause: u }), To(Vn(n, a))), e = e.current.alternate, e.flags |= 65536, p &= -p, e.lanes |= p, u = Vn(u, a), p = Vd(e.stateNode, u, p), wd(e, p), Xe !== 4 && (Xe = 2)), false;
    var g = Error(l(520), { cause: u });
    if (g = Vn(g, a), Ms === null ? Ms = [g] : Ms.push(g), Xe !== 4 && (Xe = 2), n === null) return true;
    u = Vn(u, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = p & -p, a.lanes |= e, e = Vd(a.stateNode, u, e), wd(a, e), false;
        case 1:
          if (n = a.type, g = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (No === null || !No.has(g)))) return a.flags |= 65536, p &= -p, a.lanes |= p, p = Yg(p), Xg(p, e, a, u), wd(a, p), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var Kg = Error(l(461)), _n = false;
  function En(e, n, a, u) {
    n.child = e === null ? jg(n, null, a, u) : ul(n, e.child, a, u);
  }
  function Qg(e, n, a, u, p) {
    a = a.render;
    var g = n.ref;
    if ("ref" in u) {
      var T = {};
      for (var O in u) O !== "ref" && (T[O] = u[O]);
    } else T = u;
    return _a(n), u = Md(e, n, a, T, g, p), O = Ad(), e !== null && !_n ? (Od(e, n, p), Zr(e, n, p)) : (Ut && O && xt(n), n.flags |= 1, En(e, n, u, p), n.child);
  }
  function Wg(e, n, a, u, p) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" && !Ja(g) && g.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = g, Jg(e, n, g, u, p)) : (e = ma(a.type, null, u, n, n.mode, p), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (g = e.child, !Jd(e, p)) {
      var T = g.memoizedProps;
      if (a = a.compare, a = a !== null ? a : qn, a(T, u) && e.ref === n.ref) return Zr(e, n, p);
    }
    return n.flags |= 1, e = Mi(g, u), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Jg(e, n, a, u, p) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (qn(g, u) && e.ref === n.ref) if (_n = false, n.pendingProps = u = g, Jd(e, p)) (e.flags & 131072) !== 0 && (_n = true);
      else return n.lanes = e.lanes, Zr(e, n, p);
    }
    return Fd(e, n, a, u, p);
  }
  function ty(e, n, a) {
    var u = n.pendingProps, p = u.children, g = e !== null ? e.memoizedState : null;
    if (u.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (u = g !== null ? g.baseLanes | a : a, e !== null) {
          for (p = n.child = e.child, g = 0; p !== null; ) g = g | p.lanes | p.childLanes, p = p.sibling;
          n.childLanes = g & ~u;
        } else n.childLanes = 0, n.child = null;
        return ey(e, n, u, a);
      }
      if ((a & 536870912) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && oc(n, g !== null ? g.cachePool : null), g !== null ? Jm(n, g) : Td(), Ug(n);
      else return n.lanes = n.childLanes = 536870912, ey(e, n, g !== null ? g.baseLanes | a : a, a);
    } else g !== null ? (oc(n, g.cachePool), Jm(n, g), Ro(), n.memoizedState = null) : (e !== null && oc(n, null), Td(), Ro());
    return En(e, n, p, a), n.child;
  }
  function ey(e, n, a, u) {
    var p = _d();
    return p = p === null ? null : { parent: dn._currentValue, pool: p }, n.memoizedState = { baseLanes: a, cachePool: p }, e !== null && oc(n, null), Td(), Ug(n), e !== null && va(e, n, u, true), null;
  }
  function Sc(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(l(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Fd(e, n, a, u, p) {
    return _a(n), a = Md(e, n, a, u, void 0, p), u = Ad(), e !== null && !_n ? (Od(e, n, p), Zr(e, n, p)) : (Ut && u && xt(n), n.flags |= 1, En(e, n, a, p), n.child);
  }
  function ny(e, n, a, u, p, g) {
    return _a(n), n.updateQueue = null, a = eg(n, u, a, p), tg(e), u = Ad(), e !== null && !_n ? (Od(e, n, g), Zr(e, n, g)) : (Ut && u && xt(n), n.flags |= 1, En(e, n, a, g), n.child);
  }
  function iy(e, n, a, u, p) {
    if (_a(n), n.stateNode === null) {
      var g = Ir, T = a.contextType;
      typeof T == "object" && T !== null && (g = Dn(T)), g = new a(u, g), n.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = qd, n.stateNode = g, g._reactInternals = n, g = n.stateNode, g.props = u, g.state = n.memoizedState, g.refs = {}, xd(n), T = a.contextType, g.context = typeof T == "object" && T !== null ? Dn(T) : Ir, g.state = n.memoizedState, T = a.getDerivedStateFromProps, typeof T == "function" && ($d(n, a, T, u), g.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (T = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), T !== g.state && qd.enqueueReplaceState(g, g.state, null), ms(n, u, g, p), ps(), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4194308), u = true;
    } else if (e === null) {
      g = n.stateNode;
      var O = n.memoizedProps, j = Sa(a, O);
      g.props = j;
      var J = g.context, mt = a.contextType;
      T = Ir, typeof mt == "object" && mt !== null && (T = Dn(mt));
      var vt = a.getDerivedStateFromProps;
      mt = typeof vt == "function" || typeof g.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, mt || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (O || J !== T) && $g(n, g, u, T), Eo = false;
      var nt = n.memoizedState;
      g.state = nt, ms(n, u, g, p), ps(), J = n.memoizedState, O || nt !== J || Eo ? (typeof vt == "function" && ($d(n, a, vt, u), J = n.memoizedState), (j = Eo || Zg(n, a, j, u, nt, J, T)) ? (mt || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = u, n.memoizedState = J), g.props = u, g.state = J, g.context = T, u = j) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), u = false);
    } else {
      g = n.stateNode, Sd(e, n), T = n.memoizedProps, mt = Sa(a, T), g.props = mt, vt = n.pendingProps, nt = g.context, J = a.contextType, j = Ir, typeof J == "object" && J !== null && (j = Dn(J)), O = a.getDerivedStateFromProps, (J = typeof O == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (T !== vt || nt !== j) && $g(n, g, u, j), Eo = false, nt = n.memoizedState, g.state = nt, ms(n, u, g, p), ps();
      var it = n.memoizedState;
      T !== vt || nt !== it || Eo || e !== null && e.dependencies !== null && ic(e.dependencies) ? (typeof O == "function" && ($d(n, a, O, u), it = n.memoizedState), (mt = Eo || Zg(n, a, mt, u, nt, it, j) || e !== null && e.dependencies !== null && ic(e.dependencies)) ? (J || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(u, it, j), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(u, it, j)), typeof g.componentDidUpdate == "function" && (n.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || T === e.memoizedProps && nt === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && nt === e.memoizedState || (n.flags |= 1024), n.memoizedProps = u, n.memoizedState = it), g.props = u, g.state = it, g.context = j, u = mt) : (typeof g.componentDidUpdate != "function" || T === e.memoizedProps && nt === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && nt === e.memoizedState || (n.flags |= 1024), u = false);
    }
    return g = u, Sc(e, n), u = (n.flags & 128) !== 0, g || u ? (g = n.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : g.render(), n.flags |= 1, e !== null && u ? (n.child = ul(n, e.child, null, p), n.child = ul(n, null, a, p)) : En(e, n, a, p), n.memoizedState = g.state, e = n.child) : e = Zr(e, n, p), e;
  }
  function ry(e, n, a, u) {
    return Co(), n.flags |= 256, En(e, n, a, u), n.child;
  }
  var Gd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Yd(e) {
    return { baseLanes: e, cachePool: Vm() };
  }
  function Xd(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Ri), e;
  }
  function oy(e, n, a) {
    var u = n.pendingProps, p = false, g = (n.flags & 128) !== 0, T;
    if ((T = g) || (T = e !== null && e.memoizedState === null ? false : (hn.current & 2) !== 0), T && (p = true, n.flags &= -129), T = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ut) {
        if (p ? Oo(n) : Ro(), Ut) {
          var O = Rt, j;
          if (j = O) {
            t: {
              for (j = O, O = Fe; j.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break t;
                }
                if (j = qi(j.nextSibling), j === null) {
                  O = null;
                  break t;
                }
              }
              O = j;
            }
            O !== null ? (n.memoizedState = { dehydrated: O, treeContext: x !== null ? { id: k, overflow: H } : null, retryLane: 536870912, hydrationErrors: null }, j = Gn(18, null, null, 0), j.stateNode = O, j.return = n, n.child = j, kt = n, Rt = null, j = true) : j = false;
          }
          j || Qn(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null)) return zh(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        Ur(n);
      }
      return O = u.children, u = u.fallback, p ? (Ro(), p = n.mode, O = wc({ mode: "hidden", children: O }, p), u = nr(u, p, a, null), O.return = n, u.return = n, O.sibling = u, n.child = O, p = n.child, p.memoizedState = Yd(a), p.childLanes = Xd(e, T, a), n.memoizedState = Gd, u) : (Oo(n), Kd(n, O));
    }
    if (j = e.memoizedState, j !== null && (O = j.dehydrated, O !== null)) {
      if (g) n.flags & 256 ? (Oo(n), n.flags &= -257, n = Qd(e, n, a)) : n.memoizedState !== null ? (Ro(), n.child = e.child, n.flags |= 128, n = null) : (Ro(), p = u.fallback, O = n.mode, u = wc({ mode: "visible", children: u.children }, O), p = nr(p, O, a, null), p.flags |= 2, u.return = n, p.return = n, u.sibling = p, n.child = u, ul(n, e.child, null, a), u = n.child, u.memoizedState = Yd(a), u.childLanes = Xd(e, T, a), n.memoizedState = Gd, n = p);
      else if (Oo(n), zh(O)) {
        if (T = O.nextSibling && O.nextSibling.dataset, T) var J = T.dgst;
        T = J, u = Error(l(419)), u.stack = "", u.digest = T, To({ value: u, source: null, stack: null }), n = Qd(e, n, a);
      } else if (_n || va(e, n, a, false), T = (a & e.childLanes) !== 0, _n || T) {
        if (T = Be, T !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Zl(u), u = (u & (T.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== j.retryLane)) throw j.retryLane = u, So(e, u), yi(T, e, u), Kg;
        O.data === "$?" || mh(), n = Qd(e, n, a);
      } else O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, Rt = qi(O.nextSibling), kt = n, Ut = true, Pe = null, Fe = false, e !== null && (d[y++] = k, d[y++] = H, d[y++] = x, k = e.id, H = e.overflow, x = n), n = Kd(n, u.children), n.flags |= 4096);
      return n;
    }
    return p ? (Ro(), p = u.fallback, O = n.mode, j = e.child, J = j.sibling, u = Mi(j, { mode: "hidden", children: u.children }), u.subtreeFlags = j.subtreeFlags & 65011712, J !== null ? p = Mi(J, p) : (p = nr(p, O, a, null), p.flags |= 2), p.return = n, u.return = n, u.sibling = p, n.child = u, u = p, p = n.child, O = e.child.memoizedState, O === null ? O = Yd(a) : (j = O.cachePool, j !== null ? (J = dn._currentValue, j = j.parent !== J ? { parent: J, pool: J } : j) : j = Vm(), O = { baseLanes: O.baseLanes | a, cachePool: j }), p.memoizedState = O, p.childLanes = Xd(e, T, a), n.memoizedState = Gd, u) : (Oo(n), a = e.child, e = a.sibling, a = Mi(a, { mode: "visible", children: u.children }), a.return = n, a.sibling = null, e !== null && (T = n.deletions, T === null ? (n.deletions = [e], n.flags |= 16) : T.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Kd(e, n) {
    return n = wc({ mode: "visible", children: n }, e.mode), n.return = e, e.child = n;
  }
  function wc(e, n) {
    return e = Gn(22, e, null, n), e.lanes = 0, e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, e;
  }
  function Qd(e, n, a) {
    return ul(n, e.child, null, a), e = Kd(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function ay(e, n, a) {
    e.lanes |= n;
    var u = e.alternate;
    u !== null && (u.lanes |= n), ya(e.return, n, a);
  }
  function Wd(e, n, a, u, p) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: u, tail: a, tailMode: p } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = u, g.tail = a, g.tailMode = p);
  }
  function ly(e, n, a) {
    var u = n.pendingProps, p = u.revealOrder, g = u.tail;
    if (En(e, n, u.children, a), u = hn.current, (u & 2) !== 0) u = u & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) t: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ay(e, a, n);
        else if (e.tag === 19) ay(e, a, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break t;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break t;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      u &= 1;
    }
    switch (R(hn, u), p) {
      case "forwards":
        for (a = n.child, p = null; a !== null; ) e = a.alternate, e !== null && _c(e) === null && (p = a), a = a.sibling;
        a = p, a === null ? (p = n.child, n.child = null) : (p = a.sibling, a.sibling = null), Wd(n, false, p, a, g);
        break;
      case "backwards":
        for (a = null, p = n.child, n.child = null; p !== null; ) {
          if (e = p.alternate, e !== null && _c(e) === null) {
            n.child = p;
            break;
          }
          e = p.sibling, p.sibling = a, a = p, p = e;
        }
        Wd(n, true, a, null, g);
        break;
      case "together":
        Wd(n, false, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Zr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Do |= n.lanes, (a & n.childLanes) === 0) if (e !== null) {
      if (va(e, n, a, false), (a & n.childLanes) === 0) return null;
    } else return null;
    if (e !== null && n.child !== e.child) throw Error(l(153));
    if (n.child !== null) {
      for (e = n.child, a = Mi(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; ) e = e.sibling, a = a.sibling = Mi(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function Jd(e, n) {
    return (e.lanes & n) !== 0 ? true : (e = e.dependencies, !!(e !== null && ic(e)));
  }
  function Yx(e, n, a) {
    switch (n.tag) {
      case 3:
        Lt(n, n.stateNode.containerInfo), ir(n, dn, e.memoizedState.cache), Co();
        break;
      case 27:
      case 5:
        Bt(n);
        break;
      case 4:
        Lt(n, n.stateNode.containerInfo);
        break;
      case 10:
        ir(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var u = n.memoizedState;
        if (u !== null) return u.dehydrated !== null ? (Oo(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? oy(e, n, a) : (Oo(n), e = Zr(e, n, a), e !== null ? e.sibling : null);
        Oo(n);
        break;
      case 19:
        var p = (e.flags & 128) !== 0;
        if (u = (a & n.childLanes) !== 0, u || (va(e, n, a, false), u = (a & n.childLanes) !== 0), p) {
          if (u) return ly(e, n, a);
          n.flags |= 128;
        }
        if (p = n.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), R(hn, hn.current), u) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, ty(e, n, a);
      case 24:
        ir(n, dn, e.memoizedState.cache);
    }
    return Zr(e, n, a);
  }
  function sy(e, n, a) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps) _n = true;
    else {
      if (!Jd(e, a) && (n.flags & 128) === 0) return _n = false, Yx(e, n, a);
      _n = (e.flags & 131072) !== 0;
    }
    else _n = false, Ut && (n.flags & 1048576) !== 0 && ot(n, s, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          e = n.pendingProps;
          var u = n.elementType, p = u._init;
          if (u = p(u._payload), n.type = u, typeof u == "function") Ja(u) ? (e = Sa(u, e), n.tag = 1, n = iy(null, n, u, e, a)) : (n.tag = 0, n = Fd(null, n, u, e, a));
          else {
            if (u != null) {
              if (p = u.$$typeof, p === U) {
                n.tag = 11, n = Qg(null, n, u, e, a);
                break t;
              } else if (p === tt) {
                n.tag = 14, n = Wg(null, n, u, e, a);
                break t;
              }
            }
            throw n = at(u) || u, Error(l(306, n, ""));
          }
        }
        return n;
      case 0:
        return Fd(e, n, n.type, n.pendingProps, a);
      case 1:
        return u = n.type, p = Sa(u, n.pendingProps), iy(e, n, u, p, a);
      case 3:
        t: {
          if (Lt(n, n.stateNode.containerInfo), e === null) throw Error(l(387));
          u = n.pendingProps;
          var g = n.memoizedState;
          p = g.element, Sd(e, n), ms(n, u, null, a);
          var T = n.memoizedState;
          if (u = T.cache, ir(n, dn, u), u !== g.cache && el(n, [dn], a, true), ps(), u = T.element, g.isDehydrated) if (g = { element: u, isDehydrated: false, cache: T.cache }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
            n = ry(e, n, u, a);
            break t;
          } else if (u !== p) {
            p = Vn(Error(l(424)), n), To(p), n = ry(e, n, u, a);
            break t;
          } else {
            switch (e = n.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (Rt = qi(e.firstChild), kt = n, Ut = true, Pe = null, Fe = true, a = jg(n, null, u, a), n.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          }
          else {
            if (Co(), u === p) {
              n = Zr(e, n, a);
              break t;
            }
            En(e, n, u, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Sc(e, n), e === null ? (a = dv(n.type, null, n.pendingProps, null)) ? n.memoizedState = a : Ut || (a = n.type, e = n.pendingProps, u = Nc(_t.current).createElement(a), u[gn] = n, u[Ln] = e, Mn(u, a, e), an(u), n.stateNode = u) : n.memoizedState = dv(n.type, e.memoizedProps, n.pendingProps, e.memoizedState), null;
      case 27:
        return Bt(n), e === null && Ut && (u = n.stateNode = uv(n.type, n.pendingProps, _t.current), kt = n, Fe = true, p = Rt, jo(n.type) ? (Lh = p, Rt = qi(u.firstChild)) : Rt = p), En(e, n, n.pendingProps.children, a), Sc(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ut && ((p = u = Rt) && (u = S1(u, n.type, n.pendingProps, Fe), u !== null ? (n.stateNode = u, kt = n, Rt = qi(u.firstChild), Fe = false, p = true) : p = false), p || Qn(n)), Bt(n), p = n.type, g = n.pendingProps, T = e !== null ? e.memoizedProps : null, u = g.children, Ah(p, g) ? u = null : T !== null && Ah(p, T) && (n.flags |= 32), n.memoizedState !== null && (p = Md(e, n, jx, null, null, a), Ns._currentValue = p), Sc(e, n), En(e, n, u, a), n.child;
      case 6:
        return e === null && Ut && ((e = a = Rt) && (a = w1(a, n.pendingProps, Fe), a !== null ? (n.stateNode = a, kt = n, Rt = null, e = true) : e = false), e || Qn(n)), null;
      case 13:
        return oy(e, n, a);
      case 4:
        return Lt(n, n.stateNode.containerInfo), u = n.pendingProps, e === null ? n.child = ul(n, null, u, a) : En(e, n, u, a), n.child;
      case 11:
        return Qg(e, n, n.type, n.pendingProps, a);
      case 7:
        return En(e, n, n.pendingProps, a), n.child;
      case 8:
        return En(e, n, n.pendingProps.children, a), n.child;
      case 12:
        return En(e, n, n.pendingProps.children, a), n.child;
      case 10:
        return u = n.pendingProps, ir(n, n.type, u.value), En(e, n, u.children, a), n.child;
      case 9:
        return p = n.type._context, u = n.pendingProps.children, _a(n), p = Dn(p), u = u(p), n.flags |= 1, En(e, n, u, a), n.child;
      case 14:
        return Wg(e, n, n.type, n.pendingProps, a);
      case 15:
        return Jg(e, n, n.type, n.pendingProps, a);
      case 19:
        return ly(e, n, a);
      case 31:
        return u = n.pendingProps, a = n.mode, u = { mode: u.mode, children: u.children }, e === null ? (a = wc(u, a), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = Mi(e.child, u), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return ty(e, n, a);
      case 24:
        return _a(n), u = Dn(dn), e === null ? (p = _d(), p === null && (p = Be, g = yd(), p.pooledCache = g, g.refCount++, g !== null && (p.pooledCacheLanes |= a), p = g), n.memoizedState = { parent: u, cache: p }, xd(n), ir(n, dn, p)) : ((e.lanes & a) !== 0 && (Sd(e, n), ms(n, null, null, a), ps()), p = e.memoizedState, g = n.memoizedState, p.parent !== u ? (p = { parent: u, cache: u }, n.memoizedState = p, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = p), ir(n, dn, u)) : (u = g.cache, ir(n, dn, u), u !== p.cache && el(n, [dn], a, true))), En(e, n, n.pendingProps.children, a), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function $r(e) {
    e.flags |= 4;
  }
  function uy(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !yv(n)) {
      if (n = Oi.current, n !== null && ((ce & 4194048) === ce ? rr !== null : (ce & 62914560) !== ce && (ce & 536870912) === 0 || n !== rr)) throw ds = bd, Fm;
      e.flags |= 8192;
    }
  }
  function Cc(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Ul() : 536870912, e.lanes |= n, hl |= n);
  }
  function Ss(e, n) {
    if (!Ut) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var u = null; a !== null; ) a.alternate !== null && (u = a), a = a.sibling;
        u === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : u.sibling = null;
    }
  }
  function Ge(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, u = 0;
    if (n) for (var p = e.child; p !== null; ) a |= p.lanes | p.childLanes, u |= p.subtreeFlags & 65011712, u |= p.flags & 65011712, p.return = e, p = p.sibling;
    else for (p = e.child; p !== null; ) a |= p.lanes | p.childLanes, u |= p.subtreeFlags, u |= p.flags, p.return = e, p = p.sibling;
    return e.subtreeFlags |= u, e.childLanes = a, n;
  }
  function Xx(e, n, a) {
    var u = n.pendingProps;
    switch (Tt(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(n), null;
      case 1:
        return Ge(n), null;
      case 3:
        return a = n.stateNode, u = null, e !== null && (u = e.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Zi(dn), re(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ga(n) ? $r(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, nc())), Ge(n), null;
      case 26:
        return a = n.memoizedState, e === null ? ($r(n), a !== null ? (Ge(n), uy(n, a)) : (Ge(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? ($r(n), Ge(n), uy(n, a)) : (Ge(n), n.flags &= -16777217) : (e.memoizedProps !== u && $r(n), Ge(n), n.flags &= -16777217), null;
      case 27:
        Vt(n), a = _t.current;
        var p = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== u && $r(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(l(166));
            return Ge(n), null;
          }
          e = bt.current, ga(n) ? tc(n) : (e = uv(p, u, a), n.stateNode = e, $r(n));
        }
        return Ge(n), null;
      case 5:
        if (Vt(n), a = n.type, e !== null && n.stateNode != null) e.memoizedProps !== u && $r(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(l(166));
            return Ge(n), null;
          }
          if (e = bt.current, ga(n)) tc(n);
          else {
            switch (p = Nc(_t.current), e) {
              case 1:
                e = p.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = p.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = p.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = p.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                  case "script":
                    e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof u.is == "string" ? p.createElement("select", { is: u.is }) : p.createElement("select"), u.multiple ? e.multiple = true : u.size && (e.size = u.size);
                    break;
                  default:
                    e = typeof u.is == "string" ? p.createElement(a, { is: u.is }) : p.createElement(a);
                }
            }
            e[gn] = n, e[Ln] = u;
            t: for (p = n.child; p !== null; ) {
              if (p.tag === 5 || p.tag === 6) e.appendChild(p.stateNode);
              else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === n) break t;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === n) break t;
                p = p.return;
              }
              p.sibling.return = p.return, p = p.sibling;
            }
            n.stateNode = e;
            t: switch (Mn(e, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!u.autoFocus;
                break t;
              case "img":
                e = true;
                break t;
              default:
                e = false;
            }
            e && $r(n);
          }
        }
        return Ge(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== u && $r(n);
        else {
          if (typeof u != "string" && n.stateNode === null) throw Error(l(166));
          if (e = _t.current, ga(n)) {
            if (e = n.stateNode, a = n.memoizedProps, u = null, p = kt, p !== null) switch (p.tag) {
              case 27:
              case 5:
                u = p.memoizedProps;
            }
            e[gn] = n, e = !!(e.nodeValue === a || u !== null && u.suppressHydrationWarning === true || nv(e.nodeValue, a)), e || Qn(n);
          } else e = Nc(e).createTextNode(u), e[gn] = n, n.stateNode = e;
        }
        return Ge(n), null;
      case 13:
        if (u = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (p = ga(n), u !== null && u.dehydrated !== null) {
            if (e === null) {
              if (!p) throw Error(l(318));
              if (p = n.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(l(317));
              p[gn] = n;
            } else Co(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ge(n), p = false;
          } else p = nc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = p), p = true;
          if (!p) return n.flags & 256 ? (Ur(n), n) : (Ur(n), null);
        }
        if (Ur(n), (n.flags & 128) !== 0) return n.lanes = a, n;
        if (a = u !== null, e = e !== null && e.memoizedState !== null, a) {
          u = n.child, p = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (p = u.alternate.memoizedState.cachePool.pool);
          var g = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (g = u.memoizedState.cachePool.pool), g !== p && (u.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Cc(n, n.updateQueue), Ge(n), null;
      case 4:
        return re(), e === null && Ch(n.stateNode.containerInfo), Ge(n), null;
      case 10:
        return Zi(n.type), Ge(n), null;
      case 19:
        if (pt(hn), p = n.memoizedState, p === null) return Ge(n), null;
        if (u = (n.flags & 128) !== 0, g = p.rendering, g === null) if (u) Ss(p, false);
        else {
          if (Xe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = n.child; e !== null; ) {
            if (g = _c(e), g !== null) {
              for (n.flags |= 128, Ss(p, false), e = g.updateQueue, n.updateQueue = e, Cc(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; ) ls(a, e), a = a.sibling;
              return R(hn, hn.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          p.tail !== null && se() > kc && (n.flags |= 128, u = true, Ss(p, false), n.lanes = 4194304);
        }
        else {
          if (!u) if (e = _c(g), e !== null) {
            if (n.flags |= 128, u = true, e = e.updateQueue, n.updateQueue = e, Cc(n, e), Ss(p, true), p.tail === null && p.tailMode === "hidden" && !g.alternate && !Ut) return Ge(n), null;
          } else 2 * se() - p.renderingStartTime > kc && a !== 536870912 && (n.flags |= 128, u = true, Ss(p, false), n.lanes = 4194304);
          p.isBackwards ? (g.sibling = n.child, n.child = g) : (e = p.last, e !== null ? e.sibling = g : n.child = g, p.last = g);
        }
        return p.tail !== null ? (n = p.tail, p.rendering = n, p.tail = n.sibling, p.renderingStartTime = se(), n.sibling = null, e = hn.current, R(hn, u ? e & 1 | 2 : e & 1), n) : (Ge(n), null);
      case 22:
      case 23:
        return Ur(n), Ed(), u = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== u && (n.flags |= 8192) : u && (n.flags |= 8192), u ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (Ge(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ge(n), a = n.updateQueue, a !== null && Cc(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== a && (n.flags |= 2048), e !== null && pt(ba), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), Zi(dn), Ge(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function Kx(e, n) {
    switch (Tt(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Zi(dn), re(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Vt(n), null;
      case 13:
        if (Ur(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(l(340));
          Co();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return pt(hn), null;
      case 4:
        return re(), null;
      case 10:
        return Zi(n.type), null;
      case 22:
      case 23:
        return Ur(n), Ed(), e !== null && pt(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Zi(dn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cy(e, n) {
    switch (Tt(n), n.tag) {
      case 3:
        Zi(dn), re();
        break;
      case 26:
      case 27:
      case 5:
        Vt(n);
        break;
      case 4:
        re();
        break;
      case 13:
        Ur(n);
        break;
      case 19:
        pt(hn);
        break;
      case 10:
        Zi(n.type);
        break;
      case 22:
      case 23:
        Ur(n), Ed(), e !== null && pt(ba);
        break;
      case 24:
        Zi(dn);
    }
  }
  function ws(e, n) {
    try {
      var a = n.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var p = u.next;
        a = p;
        do {
          if ((a.tag & e) === e) {
            u = void 0;
            var g = a.create, T = a.inst;
            u = g(), T.destroy = u;
          }
          a = a.next;
        } while (a !== p);
      }
    } catch (O) {
      Me(n, n.return, O);
    }
  }
  function zo(e, n, a) {
    try {
      var u = n.updateQueue, p = u !== null ? u.lastEffect : null;
      if (p !== null) {
        var g = p.next;
        u = g;
        do {
          if ((u.tag & e) === e) {
            var T = u.inst, O = T.destroy;
            if (O !== void 0) {
              T.destroy = void 0, p = n;
              var j = a, J = O;
              try {
                J();
              } catch (mt) {
                Me(p, j, mt);
              }
            }
          }
          u = u.next;
        } while (u !== g);
      }
    } catch (mt) {
      Me(n, n.return, mt);
    }
  }
  function fy(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        Wm(n, a);
      } catch (u) {
        Me(e, e.return, u);
      }
    }
  }
  function dy(e, n, a) {
    a.props = Sa(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      Me(e, n, u);
    }
  }
  function Cs(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = e.stateNode;
            break;
          case 30:
            u = e.stateNode;
            break;
          default:
            u = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(u) : a.current = u;
      }
    } catch (p) {
      Me(e, n, p);
    }
  }
  function or(e, n) {
    var a = e.ref, u = e.refCleanup;
    if (a !== null) if (typeof u == "function") try {
      u();
    } catch (p) {
      Me(e, n, p);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (p) {
      Me(e, n, p);
    }
    else a.current = null;
  }
  function hy(e) {
    var n = e.type, a = e.memoizedProps, u = e.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break t;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (p) {
      Me(e, e.return, p);
    }
  }
  function th(e, n, a) {
    try {
      var u = e.stateNode;
      y1(u, e.type, a, n), u[Ln] = n;
    } catch (p) {
      Me(e, e.return, p);
    }
  }
  function py(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jo(e.type) || e.tag === 4;
  }
  function eh(e) {
    t: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || py(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && jo(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue t;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nh(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6) e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = Dc));
    else if (u !== 4 && (u === 27 && jo(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null)) for (nh(e, n, a), e = e.sibling; e !== null; ) nh(e, n, a), e = e.sibling;
  }
  function Tc(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6) e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (u !== 4 && (u === 27 && jo(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (Tc(e, n, a), e = e.sibling; e !== null; ) Tc(e, n, a), e = e.sibling;
  }
  function my(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var u = e.type, p = n.attributes; p.length; ) n.removeAttributeNode(p[0]);
      Mn(n, u, a), n[gn] = e, n[Ln] = a;
    } catch (g) {
      Me(e, e.return, g);
    }
  }
  var qr = false, tn = false, ih = false, gy = typeof WeakSet == "function" ? WeakSet : Set, bn = null;
  function Qx(e, n) {
    if (e = e.containerInfo, kh = $c, e = ua(e), ca(e)) {
      if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else t: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var u = a.getSelection && a.getSelection();
        if (u && u.rangeCount !== 0) {
          a = u.anchorNode;
          var p = u.anchorOffset, g = u.focusNode;
          u = u.focusOffset;
          try {
            a.nodeType, g.nodeType;
          } catch {
            a = null;
            break t;
          }
          var T = 0, O = -1, j = -1, J = 0, mt = 0, vt = e, nt = null;
          e: for (; ; ) {
            for (var it; vt !== a || p !== 0 && vt.nodeType !== 3 || (O = T + p), vt !== g || u !== 0 && vt.nodeType !== 3 || (j = T + u), vt.nodeType === 3 && (T += vt.nodeValue.length), (it = vt.firstChild) !== null; ) nt = vt, vt = it;
            for (; ; ) {
              if (vt === e) break e;
              if (nt === a && ++J === p && (O = T), nt === g && ++mt === u && (j = T), (it = vt.nextSibling) !== null) break;
              vt = nt, nt = vt.parentNode;
            }
            vt = it;
          }
          a = O === -1 || j === -1 ? null : { start: O, end: j };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Mh = { focusedElem: e, selectionRange: a }, $c = false, bn = n; bn !== null; ) if (n = bn, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null) e.return = n, bn = e;
    else for (; bn !== null; ) {
      switch (n = bn, g = n.alternate, e = n.flags, n.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && g !== null) {
            e = void 0, a = n, p = g.memoizedProps, g = g.memoizedState, u = a.stateNode;
            try {
              var Ht = Sa(a.type, p, a.elementType === a.type);
              e = u.getSnapshotBeforeUpdate(Ht, g), u.__reactInternalSnapshotBeforeUpdate = e;
            } catch (Nt) {
              Me(a, a.return, Nt);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9) Rh(e);
            else if (a === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Rh(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(l(163));
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, bn = e;
        break;
      }
      bn = n.return;
    }
  }
  function yy(e, n, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Lo(e, a), u & 4 && ws(5, a);
        break;
      case 1:
        if (Lo(e, a), u & 4) if (e = a.stateNode, n === null) try {
          e.componentDidMount();
        } catch (T) {
          Me(a, a.return, T);
        }
        else {
          var p = Sa(a.type, n.memoizedProps);
          n = n.memoizedState;
          try {
            e.componentDidUpdate(p, n, e.__reactInternalSnapshotBeforeUpdate);
          } catch (T) {
            Me(a, a.return, T);
          }
        }
        u & 64 && fy(a), u & 512 && Cs(a, a.return);
        break;
      case 3:
        if (Lo(e, a), u & 64 && (e = a.updateQueue, e !== null)) {
          if (n = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              n = a.child.stateNode;
              break;
            case 1:
              n = a.child.stateNode;
          }
          try {
            Wm(e, n);
          } catch (T) {
            Me(a, a.return, T);
          }
        }
        break;
      case 27:
        n === null && u & 4 && my(a);
      case 26:
      case 5:
        Lo(e, a), n === null && u & 4 && hy(a), u & 512 && Cs(a, a.return);
        break;
      case 12:
        Lo(e, a);
        break;
      case 13:
        Lo(e, a), u & 4 && by(e, a), u & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = a1.bind(null, a), C1(e, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || qr, !u) {
          n = n !== null && n.memoizedState !== null || tn, p = qr;
          var g = tn;
          qr = u, (tn = n) && !g ? Po(e, a, (a.subtreeFlags & 8772) !== 0) : Lo(e, a), qr = p, tn = g;
        }
        break;
      case 30:
        break;
      default:
        Lo(e, a);
    }
  }
  function vy(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, vy(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Da(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, Jn = false;
  function Vr(e, n, a) {
    for (a = a.child; a !== null; ) _y(e, n, a), a = a.sibling;
  }
  function _y(e, n, a) {
    if (ht && typeof ht.onCommitFiberUnmount == "function") try {
      ht.onCommitFiberUnmount(rt, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        tn || or(a, n), Vr(e, n, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        tn || or(a, n);
        var u = je, p = Jn;
        jo(a.type) && (je = a.stateNode, Jn = false), Vr(e, n, a), Ls(a.stateNode), je = u, Jn = p;
        break;
      case 5:
        tn || or(a, n);
      case 6:
        if (u = je, p = Jn, je = null, Vr(e, n, a), je = u, Jn = p, je !== null) if (Jn) try {
          (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(a.stateNode);
        } catch (g) {
          Me(a, n, g);
        }
        else try {
          je.removeChild(a.stateNode);
        } catch (g) {
          Me(a, n, g);
        }
        break;
      case 18:
        je !== null && (Jn ? (e = je, lv(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Us(e)) : lv(je, a.stateNode));
        break;
      case 4:
        u = je, p = Jn, je = a.stateNode.containerInfo, Jn = true, Vr(e, n, a), je = u, Jn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        tn || zo(2, a, n), tn || zo(4, a, n), Vr(e, n, a);
        break;
      case 1:
        tn || (or(a, n), u = a.stateNode, typeof u.componentWillUnmount == "function" && dy(a, n, u)), Vr(e, n, a);
        break;
      case 21:
        Vr(e, n, a);
        break;
      case 22:
        tn = (u = tn) || a.memoizedState !== null, Vr(e, n, a), tn = u;
        break;
      default:
        Vr(e, n, a);
    }
  }
  function by(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Us(e);
    } catch (a) {
      Me(n, n.return, a);
    }
  }
  function Wx(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new gy()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new gy()), n;
      default:
        throw Error(l(435, e.tag));
    }
  }
  function rh(e, n) {
    var a = Wx(e);
    n.forEach(function(u) {
      var p = l1.bind(null, e, u);
      a.has(u) || (a.add(u), u.then(p, p));
    });
  }
  function hi(e, n) {
    var a = n.deletions;
    if (a !== null) for (var u = 0; u < a.length; u++) {
      var p = a[u], g = e, T = n, O = T;
      t: for (; O !== null; ) {
        switch (O.tag) {
          case 27:
            if (jo(O.type)) {
              je = O.stateNode, Jn = false;
              break t;
            }
            break;
          case 5:
            je = O.stateNode, Jn = false;
            break t;
          case 3:
          case 4:
            je = O.stateNode.containerInfo, Jn = true;
            break t;
        }
        O = O.return;
      }
      if (je === null) throw Error(l(160));
      _y(g, T, p), je = null, Jn = false, g = p.alternate, g !== null && (g.return = null), p.return = null;
    }
    if (n.subtreeFlags & 13878) for (n = n.child; n !== null; ) xy(n, e), n = n.sibling;
  }
  var $i = null;
  function xy(e, n) {
    var a = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        hi(n, e), pi(e), u & 4 && (zo(3, e, e.return), ws(3, e), zo(5, e, e.return));
        break;
      case 1:
        hi(n, e), pi(e), u & 512 && (tn || a === null || or(a, a.return)), u & 64 && qr && (e = e.updateQueue, e !== null && (u = e.callbacks, u !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var p = $i;
        if (hi(n, e), pi(e), u & 512 && (tn || a === null || or(a, a.return)), u & 4) {
          var g = a !== null ? a.memoizedState : null;
          if (u = e.memoizedState, a === null) if (u === null) if (e.stateNode === null) {
            t: {
              u = e.type, a = e.memoizedProps, p = p.ownerDocument || p;
              e: switch (u) {
                case "title":
                  g = p.getElementsByTagName("title")[0], (!g || g[no] || g[gn] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = p.createElement(u), p.head.insertBefore(g, p.querySelector("head > title"))), Mn(g, u, a), g[gn] = e, an(g), u = g;
                  break t;
                case "link":
                  var T = mv("link", "href", p).get(u + (a.href || ""));
                  if (T) {
                    for (var O = 0; O < T.length; O++) if (g = T[O], g.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && g.getAttribute("rel") === (a.rel == null ? null : a.rel) && g.getAttribute("title") === (a.title == null ? null : a.title) && g.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      T.splice(O, 1);
                      break e;
                    }
                  }
                  g = p.createElement(u), Mn(g, u, a), p.head.appendChild(g);
                  break;
                case "meta":
                  if (T = mv("meta", "content", p).get(u + (a.content || ""))) {
                    for (O = 0; O < T.length; O++) if (g = T[O], g.getAttribute("content") === (a.content == null ? null : "" + a.content) && g.getAttribute("name") === (a.name == null ? null : a.name) && g.getAttribute("property") === (a.property == null ? null : a.property) && g.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && g.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      T.splice(O, 1);
                      break e;
                    }
                  }
                  g = p.createElement(u), Mn(g, u, a), p.head.appendChild(g);
                  break;
                default:
                  throw Error(l(468, u));
              }
              g[gn] = e, an(g), u = g;
            }
            e.stateNode = u;
          } else gv(p, e.type, e.stateNode);
          else e.stateNode = pv(p, u, e.memoizedProps);
          else g !== u ? (g === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : g.count--, u === null ? gv(p, e.type, e.stateNode) : pv(p, u, e.memoizedProps)) : u === null && e.stateNode !== null && th(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        hi(n, e), pi(e), u & 512 && (tn || a === null || or(a, a.return)), a !== null && u & 4 && th(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (hi(n, e), pi(e), u & 512 && (tn || a === null || or(a, a.return)), e.flags & 32) {
          p = e.stateNode;
          try {
            wi(p, "");
          } catch (it) {
            Me(e, e.return, it);
          }
        }
        u & 4 && e.stateNode != null && (p = e.memoizedProps, th(e, p, a !== null ? a.memoizedProps : p)), u & 1024 && (ih = true);
        break;
      case 6:
        if (hi(n, e), pi(e), u & 4) {
          if (e.stateNode === null) throw Error(l(162));
          u = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = u;
          } catch (it) {
            Me(e, e.return, it);
          }
        }
        break;
      case 3:
        if (jc = null, p = $i, $i = Ic(n.containerInfo), hi(n, e), $i = p, pi(e), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Us(n.containerInfo);
        } catch (it) {
          Me(e, e.return, it);
        }
        ih && (ih = false, Sy(e));
        break;
      case 4:
        u = $i, $i = Ic(e.stateNode.containerInfo), hi(n, e), pi(e), $i = u;
        break;
      case 12:
        hi(n, e), pi(e);
        break;
      case 13:
        hi(n, e), pi(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ch = se()), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, rh(e, u)));
        break;
      case 22:
        p = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, J = qr, mt = tn;
        if (qr = J || p, tn = mt || j, hi(n, e), tn = mt, qr = J, pi(e), u & 8192) t: for (n = e.stateNode, n._visibility = p ? n._visibility & -2 : n._visibility | 1, p && (a === null || j || qr || tn || wa(e)), a = null, n = e; ; ) {
          if (n.tag === 5 || n.tag === 26) {
            if (a === null) {
              j = a = n;
              try {
                if (g = j.stateNode, p) T = g.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                else {
                  O = j.stateNode;
                  var vt = j.memoizedProps.style, nt = vt != null && vt.hasOwnProperty("display") ? vt.display : null;
                  O.style.display = nt == null || typeof nt == "boolean" ? "" : ("" + nt).trim();
                }
              } catch (it) {
                Me(j, j.return, it);
              }
            }
          } else if (n.tag === 6) {
            if (a === null) {
              j = n;
              try {
                j.stateNode.nodeValue = p ? "" : j.memoizedProps;
              } catch (it) {
                Me(j, j.return, it);
              }
            }
          } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === e) break t;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) break t;
            a === n && (a = null), n = n.return;
          }
          a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
        }
        u & 4 && (u = e.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, rh(e, a))));
        break;
      case 19:
        hi(n, e), pi(e), u & 4 && (u = e.updateQueue, u !== null && (e.updateQueue = null, rh(e, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        hi(n, e), pi(e);
    }
  }
  function pi(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, u = e.return; u !== null; ) {
          if (py(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var p = a.stateNode, g = eh(e);
            Tc(e, g, p);
            break;
          case 5:
            var T = a.stateNode;
            a.flags & 32 && (wi(T, ""), a.flags &= -33);
            var O = eh(e);
            Tc(e, O, T);
            break;
          case 3:
          case 4:
            var j = a.stateNode.containerInfo, J = eh(e);
            nh(e, J, j);
            break;
          default:
            throw Error(l(161));
        }
      } catch (mt) {
        Me(e, e.return, mt);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Sy(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var n = e;
      Sy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
    }
  }
  function Lo(e, n) {
    if (n.subtreeFlags & 8772) for (n = n.child; n !== null; ) yy(e, n.alternate, n), n = n.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          zo(4, n, n.return), wa(n);
          break;
        case 1:
          or(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && dy(n, n.return, a), wa(n);
          break;
        case 27:
          Ls(n.stateNode);
        case 26:
        case 5:
          or(n, n.return), wa(n);
          break;
        case 22:
          n.memoizedState === null && wa(n);
          break;
        case 30:
          wa(n);
          break;
        default:
          wa(n);
      }
      e = e.sibling;
    }
  }
  function Po(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var u = n.alternate, p = e, g = n, T = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Po(p, g, a), ws(4, g);
          break;
        case 1:
          if (Po(p, g, a), u = g, p = u.stateNode, typeof p.componentDidMount == "function") try {
            p.componentDidMount();
          } catch (J) {
            Me(u, u.return, J);
          }
          if (u = g, p = u.updateQueue, p !== null) {
            var O = u.stateNode;
            try {
              var j = p.shared.hiddenCallbacks;
              if (j !== null) for (p.shared.hiddenCallbacks = null, p = 0; p < j.length; p++) Qm(j[p], O);
            } catch (J) {
              Me(u, u.return, J);
            }
          }
          a && T & 64 && fy(g), Cs(g, g.return);
          break;
        case 27:
          my(g);
        case 26:
        case 5:
          Po(p, g, a), a && u === null && T & 4 && hy(g), Cs(g, g.return);
          break;
        case 12:
          Po(p, g, a);
          break;
        case 13:
          Po(p, g, a), a && T & 4 && by(p, g);
          break;
        case 22:
          g.memoizedState === null && Po(p, g, a), Cs(g, g.return);
          break;
        case 30:
          break;
        default:
          Po(p, g, a);
      }
      n = n.sibling;
    }
  }
  function oh(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && us(a));
  }
  function ah(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && us(e));
  }
  function ar(e, n, a, u) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) wy(e, n, a, u), n = n.sibling;
  }
  function wy(e, n, a, u) {
    var p = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ar(e, n, a, u), p & 2048 && ws(9, n);
        break;
      case 1:
        ar(e, n, a, u);
        break;
      case 3:
        ar(e, n, a, u), p & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && us(e)));
        break;
      case 12:
        if (p & 2048) {
          ar(e, n, a, u), e = n.stateNode;
          try {
            var g = n.memoizedProps, T = g.id, O = g.onPostCommit;
            typeof O == "function" && O(T, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (j) {
            Me(n, n.return, j);
          }
        } else ar(e, n, a, u);
        break;
      case 13:
        ar(e, n, a, u);
        break;
      case 23:
        break;
      case 22:
        g = n.stateNode, T = n.alternate, n.memoizedState !== null ? g._visibility & 2 ? ar(e, n, a, u) : Ts(e, n) : g._visibility & 2 ? ar(e, n, a, u) : (g._visibility |= 2, cl(e, n, a, u, (n.subtreeFlags & 10256) !== 0)), p & 2048 && oh(T, n);
        break;
      case 24:
        ar(e, n, a, u), p & 2048 && ah(n.alternate, n);
        break;
      default:
        ar(e, n, a, u);
    }
  }
  function cl(e, n, a, u, p) {
    for (p = p && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e, T = n, O = a, j = u, J = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          cl(g, T, O, j, p), ws(8, T);
          break;
        case 23:
          break;
        case 22:
          var mt = T.stateNode;
          T.memoizedState !== null ? mt._visibility & 2 ? cl(g, T, O, j, p) : Ts(g, T) : (mt._visibility |= 2, cl(g, T, O, j, p)), p && J & 2048 && oh(T.alternate, T);
          break;
        case 24:
          cl(g, T, O, j, p), p && J & 2048 && ah(T.alternate, T);
          break;
        default:
          cl(g, T, O, j, p);
      }
      n = n.sibling;
    }
  }
  function Ts(e, n) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) {
      var a = e, u = n, p = u.flags;
      switch (u.tag) {
        case 22:
          Ts(a, u), p & 2048 && oh(u.alternate, u);
          break;
        case 24:
          Ts(a, u), p & 2048 && ah(u.alternate, u);
          break;
        default:
          Ts(a, u);
      }
      n = n.sibling;
    }
  }
  var Es = 8192;
  function fl(e) {
    if (e.subtreeFlags & Es) for (e = e.child; e !== null; ) Cy(e), e = e.sibling;
  }
  function Cy(e) {
    switch (e.tag) {
      case 26:
        fl(e), e.flags & Es && e.memoizedState !== null && N1($i, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        fl(e);
        break;
      case 3:
      case 4:
        var n = $i;
        $i = Ic(e.stateNode.containerInfo), fl(e), $i = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Es, Es = 16777216, fl(e), Es = n) : fl(e));
        break;
      default:
        fl(e);
    }
  }
  function Ty(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function ks(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null) for (var a = 0; a < n.length; a++) {
        var u = n[a];
        bn = u, ky(u, e);
      }
      Ty(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ey(e), e = e.sibling;
  }
  function Ey(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ks(e), e.flags & 2048 && zo(9, e, e.return);
        break;
      case 3:
        ks(e);
        break;
      case 12:
        ks(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Ec(e)) : ks(e);
        break;
      default:
        ks(e);
    }
  }
  function Ec(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null) for (var a = 0; a < n.length; a++) {
        var u = n[a];
        bn = u, ky(u, e);
      }
      Ty(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          zo(8, n, n.return), Ec(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Ec(n));
          break;
        default:
          Ec(n);
      }
      e = e.sibling;
    }
  }
  function ky(e, n) {
    for (; bn !== null; ) {
      var a = bn;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          zo(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          us(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, bn = u;
      else t: for (a = e; bn !== null; ) {
        u = bn;
        var p = u.sibling, g = u.return;
        if (vy(u), u === a) {
          bn = null;
          break t;
        }
        if (p !== null) {
          p.return = g, bn = p;
          break t;
        }
        bn = g;
      }
    }
  }
  var Jx = { getCacheForType: function(e) {
    var n = Dn(dn), a = n.data.get(e);
    return a === void 0 && (a = e(), n.data.set(e, a)), a;
  } }, t1 = typeof WeakMap == "function" ? WeakMap : Map, be = 0, Be = null, oe = null, ce = 0, xe = 0, mi = null, Bo = false, dl = false, lh = false, Fr = 0, Xe = 0, Do = 0, Ca = 0, sh = 0, Ri = 0, hl = 0, Ms = null, ti = null, uh = false, ch = 0, kc = 1 / 0, Mc = null, No = null, kn = 0, Io = null, pl = null, ml = 0, fh = 0, dh = null, My = null, As = 0, hh = null;
  function gi() {
    if ((be & 2) !== 0 && ce !== 0) return ce & -ce;
    if (Z.T !== null) {
      var e = nl;
      return e !== 0 ? e : bh();
    }
    return Au();
  }
  function Ay() {
    Ri === 0 && (Ri = (ce & 536870912) === 0 || Ut ? Eu() : 536870912);
    var e = Oi.current;
    return e !== null && (e.flags |= 32), Ri;
  }
  function yi(e, n, a) {
    (e === Be && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (gl(e, 0), Ho(e, ce, Ri, false)), to(e, a), ((be & 2) === 0 || e !== Be) && (e === Be && ((be & 2) === 0 && (Ca |= a), Xe === 4 && Ho(e, ce, Ri, false)), lr(e));
  }
  function Oy(e, n, a) {
    if ((be & 6) !== 0) throw Error(l(327));
    var u = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Ie(e, n), p = u ? i1(e, n) : gh(e, n, true), g = u;
    do {
      if (p === 0) {
        dl && !u && Ho(e, n, 0, false);
        break;
      } else {
        if (a = e.current.alternate, g && !e1(a)) {
          p = gh(e, n, false), g = false;
          continue;
        }
        if (p === 2) {
          if (g = n, e.errorRecoveryDisabledLanes & g) var T = 0;
          else T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            n = T;
            t: {
              var O = e;
              p = Ms;
              var j = O.current.memoizedState.isDehydrated;
              if (j && (gl(O, T).flags |= 256), T = gh(O, T, false), T !== 2) {
                if (lh && !j) {
                  O.errorRecoveryDisabledLanes |= g, Ca |= g, p = 4;
                  break t;
                }
                g = ti, ti = p, g !== null && (ti === null ? ti = g : ti.push.apply(ti, g));
              }
              p = T;
            }
            if (g = false, p !== 2) continue;
          }
        }
        if (p === 1) {
          gl(e, 0), Ho(e, n, 0, true);
          break;
        }
        t: {
          switch (u = e, g = p, g) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ho(u, n, Ri, !Bo);
              break t;
            case 2:
              ti = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && (p = ch + 300 - se(), 10 < p)) {
            if (Ho(u, n, Ri, !Bo), ee(u, 0, true) !== 0) break t;
            u.timeoutHandle = ov(Ry.bind(null, u, a, ti, Mc, uh, n, Ri, Ca, hl, Bo, g, 2, -0, 0), p);
            break t;
          }
          Ry(u, a, ti, Mc, uh, n, Ri, Ca, hl, Bo, g, 0, -0, 0);
        }
      }
      break;
    } while (true);
    lr(e);
  }
  function Ry(e, n, a, u, p, g, T, O, j, J, mt, vt, nt, it) {
    if (e.timeoutHandle = -1, vt = n.subtreeFlags, (vt & 8192 || (vt & 16785408) === 16785408) && (Ds = { stylesheets: null, count: 0, unsuspend: D1 }, Cy(n), vt = I1(), vt !== null)) {
      e.cancelPendingCommit = vt(Iy.bind(null, e, n, g, a, u, p, T, O, j, mt, 1, nt, it)), Ho(e, g, T, !J);
      return;
    }
    Iy(e, n, g, a, u, p, T, O, j);
  }
  function e1(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
        var p = a[u], g = p.getSnapshot;
        p = p.value;
        try {
          if (!$n(g(), p)) return false;
        } catch {
          return false;
        }
      }
      if (a = n.child, n.subtreeFlags & 16384 && a !== null) a.return = n, n = a;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return true;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return true;
  }
  function Ho(e, n, a, u) {
    n &= ~sh, n &= ~Ca, e.suspendedLanes |= n, e.pingedLanes &= ~n, u && (e.warmLanes |= n), u = e.expirationTimes;
    for (var p = n; 0 < p; ) {
      var g = 31 - Et(p), T = 1 << g;
      u[g] = -1, p &= ~T;
    }
    a !== 0 && ku(e, a, n);
  }
  function Ac() {
    return (be & 6) === 0 ? (Os(0), false) : true;
  }
  function ph() {
    if (oe !== null) {
      if (xe === 0) var e = oe.return;
      else e = oe, Ui = Ai = null, Rd(e), sl = null, bs = 0, e = oe;
      for (; e !== null; ) cy(e.alternate, e), e = e.return;
      oe = null;
    }
  }
  function gl(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, _1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ph(), Be = e, oe = a = Mi(e.current, null), ce = n, xe = 0, mi = null, Bo = false, dl = Ie(e, n), lh = false, hl = Ri = sh = Ca = Do = Xe = 0, ti = Ms = null, uh = false, (n & 8) !== 0 && (n |= n & 32);
    var u = e.entangledLanes;
    if (u !== 0) for (e = e.entanglements, u &= n; 0 < u; ) {
      var p = 31 - Et(u), g = 1 << p;
      n |= e[p], u &= ~g;
    }
    return Fr = n, da(), a;
  }
  function zy(e, n) {
    Jt = null, Z.H = gc, n === fs || n === ac ? (n = Xm(), xe = 3) : n === Fm ? (n = Xm(), xe = 4) : xe = n === Kg ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, mi = n, oe === null && (Xe = 1, xc(e, Vn(n, e.current)));
  }
  function Ly() {
    var e = Z.H;
    return Z.H = gc, e === null ? gc : e;
  }
  function Py() {
    var e = Z.A;
    return Z.A = Jx, e;
  }
  function mh() {
    Xe = 4, Bo || (ce & 4194048) !== ce && Oi.current !== null || (dl = true), (Do & 134217727) === 0 && (Ca & 134217727) === 0 || Be === null || Ho(Be, ce, Ri, false);
  }
  function gh(e, n, a) {
    var u = be;
    be |= 2;
    var p = Ly(), g = Py();
    (Be !== e || ce !== n) && (Mc = null, gl(e, n)), n = false;
    var T = Xe;
    t: do
      try {
        if (xe !== 0 && oe !== null) {
          var O = oe, j = mi;
          switch (xe) {
            case 8:
              ph(), T = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Oi.current === null && (n = true);
              var J = xe;
              if (xe = 0, mi = null, yl(e, O, j, J), a && dl) {
                T = 0;
                break t;
              }
              break;
            default:
              J = xe, xe = 0, mi = null, yl(e, O, j, J);
          }
        }
        n1(), T = Xe;
        break;
      } catch (mt) {
        zy(e, mt);
      }
    while (true);
    return n && e.shellSuspendCounter++, Ui = Ai = null, be = u, Z.H = p, Z.A = g, oe === null && (Be = null, ce = 0, da()), T;
  }
  function n1() {
    for (; oe !== null; ) By(oe);
  }
  function i1(e, n) {
    var a = be;
    be |= 2;
    var u = Ly(), p = Py();
    Be !== e || ce !== n ? (Mc = null, kc = se() + 500, gl(e, n)) : dl = Ie(e, n);
    t: do
      try {
        if (xe !== 0 && oe !== null) {
          n = oe;
          var g = mi;
          e: switch (xe) {
            case 1:
              xe = 0, mi = null, yl(e, n, g, 1);
              break;
            case 2:
            case 9:
              if (Gm(g)) {
                xe = 0, mi = null, Dy(n);
                break;
              }
              n = function() {
                xe !== 2 && xe !== 9 || Be !== e || (xe = 7), lr(e);
              }, g.then(n, n);
              break t;
            case 3:
              xe = 7;
              break t;
            case 4:
              xe = 5;
              break t;
            case 7:
              Gm(g) ? (xe = 0, mi = null, Dy(n)) : (xe = 0, mi = null, yl(e, n, g, 7));
              break;
            case 5:
              var T = null;
              switch (oe.tag) {
                case 26:
                  T = oe.memoizedState;
                case 5:
                case 27:
                  var O = oe;
                  if (!T || yv(T)) {
                    xe = 0, mi = null;
                    var j = O.sibling;
                    if (j !== null) oe = j;
                    else {
                      var J = O.return;
                      J !== null ? (oe = J, Oc(J)) : oe = null;
                    }
                    break e;
                  }
              }
              xe = 0, mi = null, yl(e, n, g, 5);
              break;
            case 6:
              xe = 0, mi = null, yl(e, n, g, 6);
              break;
            case 8:
              ph(), Xe = 6;
              break t;
            default:
              throw Error(l(462));
          }
        }
        r1();
        break;
      } catch (mt) {
        zy(e, mt);
      }
    while (true);
    return Ui = Ai = null, Z.H = u, Z.A = p, be = a, oe !== null ? 0 : (Be = null, ce = 0, da(), Xe);
  }
  function r1() {
    for (; oe !== null && !fe(); ) By(oe);
  }
  function By(e) {
    var n = sy(e.alternate, e, Fr);
    e.memoizedProps = e.pendingProps, n === null ? Oc(e) : oe = n;
  }
  function Dy(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = ny(a, n, n.pendingProps, n.type, void 0, ce);
        break;
      case 11:
        n = ny(a, n, n.pendingProps, n.type.render, n.ref, ce);
        break;
      case 5:
        Rd(n);
      default:
        cy(a, n), n = oe = ls(n, Fr), n = sy(a, n, Fr);
    }
    e.memoizedProps = e.pendingProps, n === null ? Oc(e) : oe = n;
  }
  function yl(e, n, a, u) {
    Ui = Ai = null, Rd(n), sl = null, bs = 0;
    var p = n.return;
    try {
      if (Gx(e, p, n, a, ce)) {
        Xe = 1, xc(e, Vn(a, e.current)), oe = null;
        return;
      }
    } catch (g) {
      if (p !== null) throw oe = p, g;
      Xe = 1, xc(e, Vn(a, e.current)), oe = null;
      return;
    }
    n.flags & 32768 ? (Ut || u === 1 ? e = true : dl || (ce & 536870912) !== 0 ? e = false : (Bo = e = true, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Oi.current, u !== null && u.tag === 13 && (u.flags |= 16384))), Ny(n, e)) : Oc(n);
  }
  function Oc(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        Ny(n, Bo);
        return;
      }
      e = n.return;
      var a = Xx(n.alternate, n, Fr);
      if (a !== null) {
        oe = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        oe = n;
        return;
      }
      oe = n = e;
    } while (n !== null);
    Xe === 0 && (Xe = 5);
  }
  function Ny(e, n) {
    do {
      var a = Kx(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, oe = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        oe = e;
        return;
      }
      oe = e = a;
    } while (e !== null);
    Xe = 6, oe = null;
  }
  function Iy(e, n, a, u, p, g, T, O, j) {
    e.cancelPendingCommit = null;
    do
      Rc();
    while (kn !== 0);
    if ((be & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === e.current) throw Error(l(177));
      if (g = n.lanes | n.childLanes, g |= di, Wf(e, a, g, T, O, j), e === Be && (oe = Be = null, ce = 0), pl = n, Io = e, ml = a, fh = g, dh = p, My = u, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, s1(de, function() {
        return $y(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), u = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || u) {
        u = Z.T, Z.T = null, p = ct.p, ct.p = 2, T = be, be |= 4;
        try {
          Qx(e, n, a);
        } finally {
          be = T, ct.p = p, Z.T = u;
        }
      }
      kn = 1, Hy(), jy(), Uy();
    }
  }
  function Hy() {
    if (kn === 1) {
      kn = 0;
      var e = Io, n = pl, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = Z.T, Z.T = null;
        var u = ct.p;
        ct.p = 2;
        var p = be;
        be |= 4;
        try {
          xy(n, e);
          var g = Mh, T = ua(e.containerInfo), O = g.focusedElem, j = g.selectionRange;
          if (T !== O && O && O.ownerDocument && Ya(O.ownerDocument.documentElement, O)) {
            if (j !== null && ca(O)) {
              var J = j.start, mt = j.end;
              if (mt === void 0 && (mt = J), "selectionStart" in O) O.selectionStart = J, O.selectionEnd = Math.min(mt, O.value.length);
              else {
                var vt = O.ownerDocument || document, nt = vt && vt.defaultView || window;
                if (nt.getSelection) {
                  var it = nt.getSelection(), Ht = O.textContent.length, Nt = Math.min(j.start, Ht), Te = j.end === void 0 ? Nt : Math.min(j.end, Ht);
                  !it.extend && Nt > Te && (T = Te, Te = Nt, Nt = T);
                  var Y = os(O, Nt), V = os(O, Te);
                  if (Y && V && (it.rangeCount !== 1 || it.anchorNode !== Y.node || it.anchorOffset !== Y.offset || it.focusNode !== V.node || it.focusOffset !== V.offset)) {
                    var Q = vt.createRange();
                    Q.setStart(Y.node, Y.offset), it.removeAllRanges(), Nt > Te ? (it.addRange(Q), it.extend(V.node, V.offset)) : (Q.setEnd(V.node, V.offset), it.addRange(Q));
                  }
                }
              }
            }
            for (vt = [], it = O; it = it.parentNode; ) it.nodeType === 1 && vt.push({ element: it, left: it.scrollLeft, top: it.scrollTop });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < vt.length; O++) {
              var yt = vt[O];
              yt.element.scrollLeft = yt.left, yt.element.scrollTop = yt.top;
            }
          }
          $c = !!kh, Mh = kh = null;
        } finally {
          be = p, ct.p = u, Z.T = a;
        }
      }
      e.current = n, kn = 2;
    }
  }
  function jy() {
    if (kn === 2) {
      kn = 0;
      var e = Io, n = pl, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = Z.T, Z.T = null;
        var u = ct.p;
        ct.p = 2;
        var p = be;
        be |= 4;
        try {
          yy(e, n.alternate, n);
        } finally {
          be = p, ct.p = u, Z.T = a;
        }
      }
      kn = 3;
    }
  }
  function Uy() {
    if (kn === 4 || kn === 3) {
      kn = 0, We();
      var e = Io, n = pl, a = ml, u = My;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? kn = 5 : (kn = 0, pl = Io = null, Zy(e, e.pendingLanes));
      var p = e.pendingLanes;
      if (p === 0 && (No = null), $l(a), n = n.stateNode, ht && typeof ht.onCommitFiberRoot == "function") try {
        ht.onCommitFiberRoot(rt, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        n = Z.T, p = ct.p, ct.p = 2, Z.T = null;
        try {
          for (var g = e.onRecoverableError, T = 0; T < u.length; T++) {
            var O = u[T];
            g(O.value, { componentStack: O.stack });
          }
        } finally {
          Z.T = n, ct.p = p;
        }
      }
      (ml & 3) !== 0 && Rc(), lr(e), p = e.pendingLanes, (a & 4194090) !== 0 && (p & 42) !== 0 ? e === hh ? As++ : (As = 0, hh = e) : As = 0, Os(0);
    }
  }
  function Zy(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, us(n)));
  }
  function Rc(e) {
    return Hy(), jy(), Uy(), $y();
  }
  function $y() {
    if (kn !== 5) return false;
    var e = Io, n = fh;
    fh = 0;
    var a = $l(ml), u = Z.T, p = ct.p;
    try {
      ct.p = 32 > a ? 32 : a, Z.T = null, a = dh, dh = null;
      var g = Io, T = ml;
      if (kn = 0, pl = Io = null, ml = 0, (be & 6) !== 0) throw Error(l(331));
      var O = be;
      if (be |= 4, Ey(g.current), wy(g, g.current, T, a), be = O, Os(0, false), ht && typeof ht.onPostCommitFiberRoot == "function") try {
        ht.onPostCommitFiberRoot(rt, g);
      } catch {
      }
      return true;
    } finally {
      ct.p = p, Z.T = u, Zy(e, n);
    }
  }
  function qy(e, n, a) {
    n = Vn(a, n), n = Vd(e.stateNode, n, 2), e = Mo(e, n, 2), e !== null && (to(e, 2), lr(e));
  }
  function Me(e, n, a) {
    if (e.tag === 3) qy(e, e, a);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        qy(n, e, a);
        break;
      } else if (n.tag === 1) {
        var u = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (No === null || !No.has(u))) {
          e = Vn(a, e), a = Yg(2), u = Mo(n, a, 2), u !== null && (Xg(a, u, n, e), to(u, 2), lr(u));
          break;
        }
      }
      n = n.return;
    }
  }
  function yh(e, n, a) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new t1();
      var p = /* @__PURE__ */ new Set();
      u.set(n, p);
    } else p = u.get(n), p === void 0 && (p = /* @__PURE__ */ new Set(), u.set(n, p));
    p.has(a) || (lh = true, p.add(a), e = o1.bind(null, e, n, a), n.then(e, e));
  }
  function o1(e, n, a) {
    var u = e.pingCache;
    u !== null && u.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Be === e && (ce & a) === a && (Xe === 4 || Xe === 3 && (ce & 62914560) === ce && 300 > se() - ch ? (be & 2) === 0 && gl(e, 0) : sh |= a, hl === ce && (hl = 0)), lr(e);
  }
  function Vy(e, n) {
    n === 0 && (n = Ul()), e = So(e, n), e !== null && (to(e, n), lr(e));
  }
  function a1(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), Vy(e, a);
  }
  function l1(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode, p = e.memoizedState;
        p !== null && (a = p.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    u !== null && u.delete(n), Vy(e, a);
  }
  function s1(e, n) {
    return Re(e, n);
  }
  var zc = null, vl = null, vh = false, Lc = false, _h = false, Ta = 0;
  function lr(e) {
    e !== vl && e.next === null && (vl === null ? zc = vl = e : vl = vl.next = e), Lc = true, vh || (vh = true, c1());
  }
  function Os(e, n) {
    if (!_h && Lc) {
      _h = true;
      do
        for (var a = false, u = zc; u !== null; ) {
          if (e !== 0) {
            var p = u.pendingLanes;
            if (p === 0) var g = 0;
            else {
              var T = u.suspendedLanes, O = u.pingedLanes;
              g = (1 << 31 - Et(42 | e) + 1) - 1, g &= p & ~(T & ~O), g = g & 201326741 ? g & 201326741 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (a = true, Xy(u, g));
          } else g = ce, g = ee(u, u === Be ? g : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (g & 3) === 0 || Ie(u, g) || (a = true, Xy(u, g));
          u = u.next;
        }
      while (a);
      _h = false;
    }
  }
  function u1() {
    Fy();
  }
  function Fy() {
    Lc = vh = false;
    var e = 0;
    Ta !== 0 && (v1() && (e = Ta), Ta = 0);
    for (var n = se(), a = null, u = zc; u !== null; ) {
      var p = u.next, g = Gy(u, n);
      g === 0 ? (u.next = null, a === null ? zc = p : a.next = p, p === null && (vl = a)) : (a = u, (e !== 0 || (g & 3) !== 0) && (Lc = true)), u = p;
    }
    Os(e);
  }
  function Gy(e, n) {
    for (var a = e.suspendedLanes, u = e.pingedLanes, p = e.expirationTimes, g = e.pendingLanes & -62914561; 0 < g; ) {
      var T = 31 - Et(g), O = 1 << T, j = p[T];
      j === -1 ? ((O & a) === 0 || (O & u) !== 0) && (p[T] = zn(O, n)) : j <= n && (e.expiredLanes |= O), g &= ~O;
    }
    if (n = Be, a = ce, a = ee(e, e === n ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), u = e.callbackNode, a === 0 || e === n && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) return u !== null && u !== null && Ft(u), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ie(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (u !== null && Ft(u), $l(a)) {
        case 2:
        case 8:
          a = ke;
          break;
        case 32:
          a = de;
          break;
        case 268435456:
          a = Rn;
          break;
        default:
          a = de;
      }
      return u = Yy.bind(null, e), a = Re(a, u), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return u !== null && u !== null && Ft(u), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Yy(e, n) {
    if (kn !== 0 && kn !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Rc() && e.callbackNode !== a) return null;
    var u = ce;
    return u = ee(e, e === Be ? u : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), u === 0 ? null : (Oy(e, u, n), Gy(e, se()), e.callbackNode != null && e.callbackNode === a ? Yy.bind(null, e) : null);
  }
  function Xy(e, n) {
    if (Rc()) return null;
    Oy(e, n, true);
  }
  function c1() {
    b1(function() {
      (be & 6) !== 0 ? Re(Se, u1) : Fy();
    });
  }
  function bh() {
    return Ta === 0 && (Ta = Eu()), Ta;
  }
  function Ky(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : so("" + e);
  }
  function Qy(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function f1(e, n, a, u, p) {
    if (n === "submit" && a && a.stateNode === p) {
      var g = Ky((p[Ln] || null).action), T = u.submitter;
      T && (n = (n = T[Ln] || null) ? Ky(n.formAction) : T.getAttribute("formAction"), n !== null && (g = n, T = null));
      var O = new ra("action", "action", null, u, p);
      e.push({ event: O, listeners: [{ instance: null, listener: function() {
        if (u.defaultPrevented) {
          if (Ta !== 0) {
            var j = T ? Qy(p, T) : new FormData(p);
            jd(a, { pending: true, data: j, method: p.method, action: g }, null, j);
          }
        } else typeof g == "function" && (O.preventDefault(), j = T ? Qy(p, T) : new FormData(p), jd(a, { pending: true, data: j, method: p.method, action: g }, g, j));
      }, currentTarget: p }] });
    }
  }
  for (var xh = 0; xh < Br.length; xh++) {
    var Sh = Br[xh], d1 = Sh.toLowerCase(), h1 = Sh[0].toUpperCase() + Sh.slice(1);
    fi(d1, "on" + h1);
  }
  fi(Qu, "onAnimationEnd"), fi(ci, "onAnimationIteration"), fi(fa, "onAnimationStart"), fi("dblclick", "onDoubleClick"), fi("focusin", "onFocus"), fi("focusout", "onBlur"), fi(md, "onTransitionRun"), fi(Wa, "onTransitionStart"), fi(gd, "onTransitionCancel"), fi(as, "onTransitionEnd"), wr("onMouseEnter", ["mouseout", "mouseover"]), wr("onMouseLeave", ["mouseout", "mouseover"]), wr("onPointerEnter", ["pointerout", "pointerover"]), wr("onPointerLeave", ["pointerout", "pointerover"]), Sr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Sr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Sr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Sr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Sr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), p1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rs));
  function Wy(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var u = e[a], p = u.event;
      u = u.listeners;
      t: {
        var g = void 0;
        if (n) for (var T = u.length - 1; 0 <= T; T--) {
          var O = u[T], j = O.instance, J = O.currentTarget;
          if (O = O.listener, j !== g && p.isPropagationStopped()) break t;
          g = O, p.currentTarget = J;
          try {
            g(p);
          } catch (mt) {
            bc(mt);
          }
          p.currentTarget = null, g = j;
        }
        else for (T = 0; T < u.length; T++) {
          if (O = u[T], j = O.instance, J = O.currentTarget, O = O.listener, j !== g && p.isPropagationStopped()) break t;
          g = O, p.currentTarget = J;
          try {
            g(p);
          } catch (mt) {
            bc(mt);
          }
          p.currentTarget = null, g = j;
        }
      }
    }
  }
  function ae(e, n) {
    var a = n[Xn];
    a === void 0 && (a = n[Xn] = /* @__PURE__ */ new Set());
    var u = e + "__bubble";
    a.has(u) || (Jy(n, e, 2, false), a.add(u));
  }
  function wh(e, n, a) {
    var u = 0;
    n && (u |= 4), Jy(a, e, u, n);
  }
  var Pc = "_reactListening" + Math.random().toString(36).slice(2);
  function Ch(e) {
    if (!e[Pc]) {
      e[Pc] = true, Ru.forEach(function(a) {
        a !== "selectionchange" && (p1.has(a) || wh(a, false, e), wh(a, true, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Pc] || (n[Pc] = true, wh("selectionchange", false, n));
    }
  }
  function Jy(e, n, a, u) {
    switch (wv(n)) {
      case 2:
        var p = U1;
        break;
      case 8:
        p = Z1;
        break;
      default:
        p = Ih;
    }
    a = p.bind(null, n, a, e), p = void 0, !ia || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (p = true), u ? p !== void 0 ? e.addEventListener(n, a, { capture: true, passive: p }) : e.addEventListener(n, a, true) : p !== void 0 ? e.addEventListener(n, a, { passive: p }) : e.addEventListener(n, a, false);
  }
  function Th(e, n, a, u, p) {
    var g = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null) t: for (; ; ) {
      if (u === null) return;
      var T = u.tag;
      if (T === 3 || T === 4) {
        var O = u.stateNode.containerInfo;
        if (O === p) break;
        if (T === 4) for (T = u.return; T !== null; ) {
          var j = T.tag;
          if ((j === 3 || j === 4) && T.stateNode.containerInfo === p) return;
          T = T.return;
        }
        for (; O !== null; ) {
          if (T = Ki(O), T === null) return;
          if (j = T.tag, j === 5 || j === 6 || j === 26 || j === 27) {
            u = g = T;
            continue t;
          }
          O = O.parentNode;
        }
      }
      u = u.return;
    }
    ai(function() {
      var J = g, mt = uo(a), vt = [];
      t: {
        var nt = Wu.get(e);
        if (nt !== void 0) {
          var it = ra, Ht = e;
          switch (e) {
            case "keypress":
              if (Ye(a) === 0) break t;
            case "keydown":
            case "keyup":
              it = ld;
              break;
            case "focusin":
              Ht = "focus", it = Kl;
              break;
            case "focusout":
              Ht = "blur", it = Kl;
              break;
            case "beforeblur":
            case "afterblur":
              it = Kl;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              it = ho;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              it = nd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              it = ud;
              break;
            case Qu:
            case ci:
            case fa:
              it = id;
              break;
            case as:
              it = cd;
              break;
            case "scroll":
            case "scrollend":
              it = ed;
              break;
            case "wheel":
              it = Zu;
              break;
            case "copy":
            case "cut":
            case "paste":
              it = Ql;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              it = Jl;
              break;
            case "toggle":
            case "beforetoggle":
              it = Rr;
          }
          var Nt = (n & 4) !== 0, Te = !Nt && (e === "scroll" || e === "scrollend"), Y = Nt ? nt !== null ? nt + "Capture" : null : nt;
          Nt = [];
          for (var V = J, Q; V !== null; ) {
            var yt = V;
            if (Q = yt.stateNode, yt = yt.tag, yt !== 5 && yt !== 26 && yt !== 27 || Q === null || Y === null || (yt = he(V, Y), yt != null && Nt.push(zs(V, yt, Q))), Te) break;
            V = V.return;
          }
          0 < Nt.length && (nt = new it(nt, Ht, null, a, mt), vt.push({ event: nt, listeners: Nt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (nt = e === "mouseover" || e === "pointerover", it = e === "mouseout" || e === "pointerout", nt && a !== na && (Ht = a.relatedTarget || a.fromElement) && (Ki(Ht) || Ht[eo])) break t;
          if ((it || nt) && (nt = mt.window === mt ? mt : (nt = mt.ownerDocument) ? nt.defaultView || nt.parentWindow : window, it ? (Ht = a.relatedTarget || a.toElement, it = J, Ht = Ht ? Ki(Ht) : null, Ht !== null && (Te = f(Ht), Nt = Ht.tag, Ht !== Te || Nt !== 5 && Nt !== 27 && Nt !== 6) && (Ht = null)) : (it = null, Ht = J), it !== Ht)) {
            if (Nt = ho, yt = "onMouseLeave", Y = "onMouseEnter", V = "mouse", (e === "pointerout" || e === "pointerover") && (Nt = Jl, yt = "onPointerLeave", Y = "onPointerEnter", V = "pointer"), Te = it == null ? nt : Si(it), Q = Ht == null ? nt : Si(Ht), nt = new Nt(yt, V + "leave", it, a, mt), nt.target = Te, nt.relatedTarget = Q, yt = null, Ki(mt) === J && (Nt = new Nt(Y, V + "enter", Ht, a, mt), Nt.target = Q, Nt.relatedTarget = Te, yt = Nt), Te = yt, it && Ht) e: {
              for (Nt = it, Y = Ht, V = 0, Q = Nt; Q; Q = _l(Q)) V++;
              for (Q = 0, yt = Y; yt; yt = _l(yt)) Q++;
              for (; 0 < V - Q; ) Nt = _l(Nt), V--;
              for (; 0 < Q - V; ) Y = _l(Y), Q--;
              for (; V--; ) {
                if (Nt === Y || Y !== null && Nt === Y.alternate) break e;
                Nt = _l(Nt), Y = _l(Y);
              }
              Nt = null;
            }
            else Nt = null;
            it !== null && tv(vt, nt, it, Nt, false), Ht !== null && Te !== null && tv(vt, Te, Ht, Nt, true);
          }
        }
        t: {
          if (nt = J ? Si(J) : window, it = nt.nodeName && nt.nodeName.toLowerCase(), it === "select" || it === "input" && nt.type === "file") var Mt = go;
          else if (Lr(nt)) if (ns) Mt = pd;
          else {
            Mt = hd;
            var ie = rs;
          }
          else it = nt.nodeName, !it || it.toLowerCase() !== "input" || nt.type !== "checkbox" && nt.type !== "radio" ? J && ea(J.elementType) && (Mt = go) : Mt = ji;
          if (Mt && (Mt = Mt(e, J))) {
            Gu(vt, Mt, a, mt);
            break t;
          }
          ie && ie(e, nt, J), e === "focusout" && J && nt.type === "number" && J.memoizedProps.value != null && ao(nt, "number", nt.value);
        }
        switch (ie = J ? Si(J) : window, e) {
          case "focusin":
            (Lr(ie) || ie.contentEditable === "true") && (ui = ie, _o = J, Pr = null);
            break;
          case "focusout":
            Pr = _o = ui = null;
            break;
          case "mousedown":
            Ka = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ka = false, Xu(vt, a, mt);
            break;
          case "selectionchange":
            if (Xa) break;
          case "keydown":
          case "keyup":
            Xu(vt, a, mt);
        }
        var Pt;
        if (zr) t: {
          switch (e) {
            case "compositionstart":
              var It = "onCompositionStart";
              break t;
            case "compositionend":
              It = "onCompositionEnd";
              break t;
            case "compositionupdate":
              It = "onCompositionUpdate";
              break t;
          }
          It = void 0;
        }
        else po ? Fa(e, a) && (It = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (It = "onCompositionStart");
        It && (es && a.locale !== "ko" && (po || It !== "onCompositionStart" ? It === "onCompositionEnd" && po && (Pt = fo()) : (Ti = mt, Ii = "value" in Ti ? Ti.value : Ti.textContent, po = true)), ie = Bc(J, It), 0 < ie.length && (It = new li(It, e, null, a, mt), vt.push({ event: It, listeners: ie }), Pt ? It.data = Pt : (Pt = Vu(a), Pt !== null && (It.data = Pt)))), (Pt = $u ? Fu(e, a) : dd(e, a)) && (It = Bc(J, "onBeforeInput"), 0 < It.length && (ie = new li("onBeforeInput", "beforeinput", null, a, mt), vt.push({ event: ie, listeners: It }), ie.data = Pt)), f1(vt, e, J, a, mt);
      }
      Wy(vt, n);
    });
  }
  function zs(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function Bc(e, n) {
    for (var a = n + "Capture", u = []; e !== null; ) {
      var p = e, g = p.stateNode;
      if (p = p.tag, p !== 5 && p !== 26 && p !== 27 || g === null || (p = he(e, a), p != null && u.unshift(zs(e, p, g)), p = he(e, n), p != null && u.push(zs(e, p, g))), e.tag === 3) return u;
      e = e.return;
    }
    return [];
  }
  function _l(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function tv(e, n, a, u, p) {
    for (var g = n._reactName, T = []; a !== null && a !== u; ) {
      var O = a, j = O.alternate, J = O.stateNode;
      if (O = O.tag, j !== null && j === u) break;
      O !== 5 && O !== 26 && O !== 27 || J === null || (j = J, p ? (J = he(a, g), J != null && T.unshift(zs(a, J, j))) : p || (J = he(a, g), J != null && T.push(zs(a, J, j)))), a = a.return;
    }
    T.length !== 0 && e.push({ event: n, listeners: T });
  }
  var m1 = /\r\n?/g, g1 = /\u0000|\uFFFD/g;
  function ev(e) {
    return (typeof e == "string" ? e : "" + e).replace(m1, `
`).replace(g1, "");
  }
  function nv(e, n) {
    return n = ev(n), ev(e) === n;
  }
  function Dc() {
  }
  function Ce(e, n, a, u, p, g) {
    switch (a) {
      case "children":
        typeof u == "string" ? n === "body" || n === "textarea" && u === "" || wi(e, u) : (typeof u == "number" || typeof u == "bigint") && n !== "body" && wi(e, "" + u);
        break;
      case "className":
        Ia(e, "class", u);
        break;
      case "tabIndex":
        Ia(e, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ia(e, a, u);
        break;
      case "style":
        lo(e, u, g);
        break;
      case "data":
        if (n !== "object") {
          Ia(e, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        u = so("" + u), e.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof g == "function" && (a === "formAction" ? (n !== "input" && Ce(e, n, "name", p.name, p, null), Ce(e, n, "formEncType", p.formEncType, p, null), Ce(e, n, "formMethod", p.formMethod, p, null), Ce(e, n, "formTarget", p.formTarget, p, null)) : (Ce(e, n, "encType", p.encType, p, null), Ce(e, n, "method", p.method, p, null), Ce(e, n, "target", p.target, p, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        u = so("" + u), e.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (e.onclick = Dc);
        break;
      case "onScroll":
        u != null && ae("scroll", e);
        break;
      case "onScrollEnd":
        u != null && ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(l(61));
          if (a = u.__html, a != null) {
            if (p.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        e.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = so("" + u), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(a, "" + u) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === true ? e.setAttribute(a, "") : u !== false && u != null && typeof u != "function" && typeof u != "symbol" ? e.setAttribute(a, u) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? e.setAttribute(a, u) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? e.removeAttribute(a) : e.setAttribute(a, u);
        break;
      case "popover":
        ae("beforetoggle", e), ae("toggle", e), Na(e, "popover", u);
        break;
      case "xlinkActuate":
        Ni(e, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ni(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ni(e, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ni(e, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ni(e, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ni(e, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ni(e, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ni(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ni(e, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Na(e, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Gl.get(a) || a, Na(e, a, u));
    }
  }
  function Eh(e, n, a, u, p, g) {
    switch (a) {
      case "style":
        lo(e, u, g);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(l(61));
          if (a = u.__html, a != null) {
            if (p.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wi(e, u) : (typeof u == "number" || typeof u == "bigint") && wi(e, "" + u);
        break;
      case "onScroll":
        u != null && ae("scroll", e);
        break;
      case "onScrollEnd":
        u != null && ae("scrollend", e);
        break;
      case "onClick":
        u != null && (e.onclick = Dc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!zu.hasOwnProperty(a)) t: {
          if (a[0] === "o" && a[1] === "n" && (p = a.endsWith("Capture"), n = a.slice(2, p ? a.length - 7 : void 0), g = e[Ln] || null, g = g != null ? g[a] : null, typeof g == "function" && e.removeEventListener(n, g, p), typeof u == "function")) {
            typeof g != "function" && g !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, u, p);
            break t;
          }
          a in e ? e[a] = u : u === true ? e.setAttribute(a, "") : Na(e, a, u);
        }
    }
  }
  function Mn(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ae("error", e), ae("load", e);
        var u = false, p = false, g;
        for (g in a) if (a.hasOwnProperty(g)) {
          var T = a[g];
          if (T != null) switch (g) {
            case "src":
              u = true;
              break;
            case "srcSet":
              p = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(l(137, n));
            default:
              Ce(e, n, g, T, a, null);
          }
        }
        p && Ce(e, n, "srcSet", a.srcSet, a, null), u && Ce(e, n, "src", a.src, a, null);
        return;
      case "input":
        ae("invalid", e);
        var O = g = T = p = null, j = null, J = null;
        for (u in a) if (a.hasOwnProperty(u)) {
          var mt = a[u];
          if (mt != null) switch (u) {
            case "name":
              p = mt;
              break;
            case "type":
              T = mt;
              break;
            case "checked":
              j = mt;
              break;
            case "defaultChecked":
              J = mt;
              break;
            case "value":
              g = mt;
              break;
            case "defaultValue":
              O = mt;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (mt != null) throw Error(l(137, n));
              break;
            default:
              Ce(e, n, u, mt, a, null);
          }
        }
        Pu(e, g, O, j, J, T, p, false), oo(e);
        return;
      case "select":
        ae("invalid", e), u = T = g = null;
        for (p in a) if (a.hasOwnProperty(p) && (O = a[p], O != null)) switch (p) {
          case "value":
            g = O;
            break;
          case "defaultValue":
            T = O;
            break;
          case "multiple":
            u = O;
          default:
            Ce(e, n, p, O, a, null);
        }
        n = g, a = T, e.multiple = !!u, n != null ? Kn(e, !!u, n, false) : a != null && Kn(e, !!u, a, true);
        return;
      case "textarea":
        ae("invalid", e), g = p = u = null;
        for (T in a) if (a.hasOwnProperty(T) && (O = a[T], O != null)) switch (T) {
          case "value":
            u = O;
            break;
          case "defaultValue":
            p = O;
            break;
          case "children":
            g = O;
            break;
          case "dangerouslySetInnerHTML":
            if (O != null) throw Error(l(91));
            break;
          default:
            Ce(e, n, T, O, a, null);
        }
        Qi(e, u, p, g), oo(e);
        return;
      case "option":
        for (j in a) if (a.hasOwnProperty(j) && (u = a[j], u != null)) switch (j) {
          case "selected":
            e.selected = u && typeof u != "function" && typeof u != "symbol";
            break;
          default:
            Ce(e, n, j, u, a, null);
        }
        return;
      case "dialog":
        ae("beforetoggle", e), ae("toggle", e), ae("cancel", e), ae("close", e);
        break;
      case "iframe":
      case "object":
        ae("load", e);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Rs.length; u++) ae(Rs[u], e);
        break;
      case "image":
        ae("error", e), ae("load", e);
        break;
      case "details":
        ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ae("error", e), ae("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (J in a) if (a.hasOwnProperty(J) && (u = a[J], u != null)) switch (J) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(l(137, n));
          default:
            Ce(e, n, J, u, a, null);
        }
        return;
      default:
        if (ea(n)) {
          for (mt in a) a.hasOwnProperty(mt) && (u = a[mt], u !== void 0 && Eh(e, n, mt, u, a, void 0));
          return;
        }
    }
    for (O in a) a.hasOwnProperty(O) && (u = a[O], u != null && Ce(e, n, O, u, a, null));
  }
  function y1(e, n, a, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var p = null, g = null, T = null, O = null, j = null, J = null, mt = null;
        for (it in a) {
          var vt = a[it];
          if (a.hasOwnProperty(it) && vt != null) switch (it) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              j = vt;
            default:
              u.hasOwnProperty(it) || Ce(e, n, it, null, u, vt);
          }
        }
        for (var nt in u) {
          var it = u[nt];
          if (vt = a[nt], u.hasOwnProperty(nt) && (it != null || vt != null)) switch (nt) {
            case "type":
              g = it;
              break;
            case "name":
              p = it;
              break;
            case "checked":
              J = it;
              break;
            case "defaultChecked":
              mt = it;
              break;
            case "value":
              T = it;
              break;
            case "defaultValue":
              O = it;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (it != null) throw Error(l(137, n));
              break;
            default:
              it !== vt && Ce(e, n, nt, it, u, vt);
          }
        }
        Pn(e, T, O, j, J, mt, g, p);
        return;
      case "select":
        it = T = O = nt = null;
        for (g in a) if (j = a[g], a.hasOwnProperty(g) && j != null) switch (g) {
          case "value":
            break;
          case "multiple":
            it = j;
          default:
            u.hasOwnProperty(g) || Ce(e, n, g, null, u, j);
        }
        for (p in u) if (g = u[p], j = a[p], u.hasOwnProperty(p) && (g != null || j != null)) switch (p) {
          case "value":
            nt = g;
            break;
          case "defaultValue":
            O = g;
            break;
          case "multiple":
            T = g;
          default:
            g !== j && Ce(e, n, p, g, u, j);
        }
        n = O, a = T, u = it, nt != null ? Kn(e, !!a, nt, false) : !!u != !!a && (n != null ? Kn(e, !!a, n, true) : Kn(e, !!a, a ? [] : "", false));
        return;
      case "textarea":
        it = nt = null;
        for (O in a) if (p = a[O], a.hasOwnProperty(O) && p != null && !u.hasOwnProperty(O)) switch (O) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ce(e, n, O, null, u, p);
        }
        for (T in u) if (p = u[T], g = a[T], u.hasOwnProperty(T) && (p != null || g != null)) switch (T) {
          case "value":
            nt = p;
            break;
          case "defaultValue":
            it = p;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (p != null) throw Error(l(91));
            break;
          default:
            p !== g && Ce(e, n, T, p, u, g);
        }
        Ve(e, nt, it);
        return;
      case "option":
        for (var Ht in a) if (nt = a[Ht], a.hasOwnProperty(Ht) && nt != null && !u.hasOwnProperty(Ht)) switch (Ht) {
          case "selected":
            e.selected = false;
            break;
          default:
            Ce(e, n, Ht, null, u, nt);
        }
        for (j in u) if (nt = u[j], it = a[j], u.hasOwnProperty(j) && nt !== it && (nt != null || it != null)) switch (j) {
          case "selected":
            e.selected = nt && typeof nt != "function" && typeof nt != "symbol";
            break;
          default:
            Ce(e, n, j, nt, u, it);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Nt in a) nt = a[Nt], a.hasOwnProperty(Nt) && nt != null && !u.hasOwnProperty(Nt) && Ce(e, n, Nt, null, u, nt);
        for (J in u) if (nt = u[J], it = a[J], u.hasOwnProperty(J) && nt !== it && (nt != null || it != null)) switch (J) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (nt != null) throw Error(l(137, n));
            break;
          default:
            Ce(e, n, J, nt, u, it);
        }
        return;
      default:
        if (ea(n)) {
          for (var Te in a) nt = a[Te], a.hasOwnProperty(Te) && nt !== void 0 && !u.hasOwnProperty(Te) && Eh(e, n, Te, void 0, u, nt);
          for (mt in u) nt = u[mt], it = a[mt], !u.hasOwnProperty(mt) || nt === it || nt === void 0 && it === void 0 || Eh(e, n, mt, nt, u, it);
          return;
        }
    }
    for (var Y in a) nt = a[Y], a.hasOwnProperty(Y) && nt != null && !u.hasOwnProperty(Y) && Ce(e, n, Y, null, u, nt);
    for (vt in u) nt = u[vt], it = a[vt], !u.hasOwnProperty(vt) || nt === it || nt == null && it == null || Ce(e, n, vt, nt, u, it);
  }
  var kh = null, Mh = null;
  function Nc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function iv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function rv(e, n) {
    if (e === 0) switch (n) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Ah(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Oh = null;
  function v1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Oh ? false : (Oh = e, true) : (Oh = null, false);
  }
  var ov = typeof setTimeout == "function" ? setTimeout : void 0, _1 = typeof clearTimeout == "function" ? clearTimeout : void 0, av = typeof Promise == "function" ? Promise : void 0, b1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof av < "u" ? function(e) {
    return av.resolve(null).then(e).catch(x1);
  } : ov;
  function x1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function jo(e) {
    return e === "head";
  }
  function lv(e, n) {
    var a = n, u = 0, p = 0;
    do {
      var g = a.nextSibling;
      if (e.removeChild(a), g && g.nodeType === 8) if (a = g.data, a === "/$") {
        if (0 < u && 8 > u) {
          a = u;
          var T = e.ownerDocument;
          if (a & 1 && Ls(T.documentElement), a & 2 && Ls(T.body), a & 4) for (a = T.head, Ls(a), T = a.firstChild; T; ) {
            var O = T.nextSibling, j = T.nodeName;
            T[no] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && T.rel.toLowerCase() === "stylesheet" || a.removeChild(T), T = O;
          }
        }
        if (p === 0) {
          e.removeChild(g), Us(n);
          return;
        }
        p--;
      } else a === "$" || a === "$?" || a === "$!" ? p++ : u = a.charCodeAt(0) - 48;
      else u = 0;
      a = g;
    } while (a);
    Us(n);
  }
  function Rh(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rh(a), Da(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function S1(e, n, a, u) {
    for (; e.nodeType === 1; ) {
      var p = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!u && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (u) {
        if (!e[no]) switch (n) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (g = e.getAttribute("rel"), g === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (g !== p.rel || e.getAttribute("href") !== (p.href == null || p.href === "" ? null : p.href) || e.getAttribute("crossorigin") !== (p.crossOrigin == null ? null : p.crossOrigin) || e.getAttribute("title") !== (p.title == null ? null : p.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (g = e.getAttribute("src"), (g !== (p.src == null ? null : p.src) || e.getAttribute("type") !== (p.type == null ? null : p.type) || e.getAttribute("crossorigin") !== (p.crossOrigin == null ? null : p.crossOrigin)) && g && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (n === "input" && e.type === "hidden") {
        var g = p.name == null ? null : "" + p.name;
        if (p.type === "hidden" && e.getAttribute("name") === g) return e;
      } else return e;
      if (e = qi(e.nextSibling), e === null) break;
    }
    return null;
  }
  function w1(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = qi(e.nextSibling), e === null)) return null;
    return e;
  }
  function zh(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function C1(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") n();
    else {
      var u = function() {
        n(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), e._reactRetry = u;
    }
  }
  function qi(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Lh = null;
  function sv(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function uv(e, n, a) {
    switch (n = Nc(a), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(l(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(l(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function Ls(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Da(e);
  }
  var zi = /* @__PURE__ */ new Map(), cv = /* @__PURE__ */ new Set();
  function Ic(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Gr = ct.d;
  ct.d = { f: T1, r: E1, D: k1, C: M1, L: A1, m: O1, X: z1, S: R1, M: L1 };
  function T1() {
    var e = Gr.f(), n = Ac();
    return e || n;
  }
  function E1(e) {
    var n = br(e);
    n !== null && n.tag === 5 && n.type === "form" ? Og(n) : Gr.r(e);
  }
  var bl = typeof document > "u" ? null : document;
  function fv(e, n, a) {
    var u = bl;
    if (u && typeof n == "string" && n) {
      var p = Cn(n);
      p = 'link[rel="' + e + '"][href="' + p + '"]', typeof a == "string" && (p += '[crossorigin="' + a + '"]'), cv.has(p) || (cv.add(p), e = { rel: e, crossOrigin: a, href: n }, u.querySelector(p) === null && (n = u.createElement("link"), Mn(n, "link", e), an(n), u.head.appendChild(n)));
    }
  }
  function k1(e) {
    Gr.D(e), fv("dns-prefetch", e, null);
  }
  function M1(e, n) {
    Gr.C(e, n), fv("preconnect", e, n);
  }
  function A1(e, n, a) {
    Gr.L(e, n, a);
    var u = bl;
    if (u && e && n) {
      var p = 'link[rel="preload"][as="' + Cn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (p += '[imagesrcset="' + Cn(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (p += '[imagesizes="' + Cn(a.imageSizes) + '"]')) : p += '[href="' + Cn(e) + '"]';
      var g = p;
      switch (n) {
        case "style":
          g = xl(e);
          break;
        case "script":
          g = Sl(e);
      }
      zi.has(g) || (e = b({ rel: "preload", href: n === "image" && a && a.imageSrcSet ? void 0 : e, as: n }, a), zi.set(g, e), u.querySelector(p) !== null || n === "style" && u.querySelector(Ps(g)) || n === "script" && u.querySelector(Bs(g)) || (n = u.createElement("link"), Mn(n, "link", e), an(n), u.head.appendChild(n)));
    }
  }
  function O1(e, n) {
    Gr.m(e, n);
    var a = bl;
    if (a && e) {
      var u = n && typeof n.as == "string" ? n.as : "script", p = 'link[rel="modulepreload"][as="' + Cn(u) + '"][href="' + Cn(e) + '"]', g = p;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = Sl(e);
      }
      if (!zi.has(g) && (e = b({ rel: "modulepreload", href: e }, n), zi.set(g, e), a.querySelector(p) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Bs(g))) return;
        }
        u = a.createElement("link"), Mn(u, "link", e), an(u), a.head.appendChild(u);
      }
    }
  }
  function R1(e, n, a) {
    Gr.S(e, n, a);
    var u = bl;
    if (u && e) {
      var p = xr(u).hoistableStyles, g = xl(e);
      n = n || "default";
      var T = p.get(g);
      if (!T) {
        var O = { loading: 0, preload: null };
        if (T = u.querySelector(Ps(g))) O.loading = 5;
        else {
          e = b({ rel: "stylesheet", href: e, "data-precedence": n }, a), (a = zi.get(g)) && Ph(e, a);
          var j = T = u.createElement("link");
          an(j), Mn(j, "link", e), j._p = new Promise(function(J, mt) {
            j.onload = J, j.onerror = mt;
          }), j.addEventListener("load", function() {
            O.loading |= 1;
          }), j.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, Hc(T, n, u);
        }
        T = { type: "stylesheet", instance: T, count: 1, state: O }, p.set(g, T);
      }
    }
  }
  function z1(e, n) {
    Gr.X(e, n);
    var a = bl;
    if (a && e) {
      var u = xr(a).hoistableScripts, p = Sl(e), g = u.get(p);
      g || (g = a.querySelector(Bs(p)), g || (e = b({ src: e, async: true }, n), (n = zi.get(p)) && Bh(e, n), g = a.createElement("script"), an(g), Mn(g, "link", e), a.head.appendChild(g)), g = { type: "script", instance: g, count: 1, state: null }, u.set(p, g));
    }
  }
  function L1(e, n) {
    Gr.M(e, n);
    var a = bl;
    if (a && e) {
      var u = xr(a).hoistableScripts, p = Sl(e), g = u.get(p);
      g || (g = a.querySelector(Bs(p)), g || (e = b({ src: e, async: true, type: "module" }, n), (n = zi.get(p)) && Bh(e, n), g = a.createElement("script"), an(g), Mn(g, "link", e), a.head.appendChild(g)), g = { type: "script", instance: g, count: 1, state: null }, u.set(p, g));
    }
  }
  function dv(e, n, a, u) {
    var p = (p = _t.current) ? Ic(p) : null;
    if (!p) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = xl(a.href), a = xr(p).hoistableStyles, u = a.get(n), u || (u = { type: "style", instance: null, count: 0, state: null }, a.set(n, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = xl(a.href);
          var g = xr(p).hoistableStyles, T = g.get(e);
          if (T || (p = p.ownerDocument || p, T = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, g.set(e, T), (g = p.querySelector(Ps(e))) && !g._p && (T.instance = g, T.state.loading = 5), zi.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, zi.set(e, a), g || P1(p, e, a, T.state))), n && u === null) throw Error(l(528, ""));
          return T;
        }
        if (n && u !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Sl(a), a = xr(p).hoistableScripts, u = a.get(n), u || (u = { type: "script", instance: null, count: 0, state: null }, a.set(n, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(l(444, e));
    }
  }
  function xl(e) {
    return 'href="' + Cn(e) + '"';
  }
  function Ps(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function hv(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function P1(e, n, a, u) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? u.loading = 1 : (n = e.createElement("link"), u.preload = n, n.addEventListener("load", function() {
      return u.loading |= 1;
    }), n.addEventListener("error", function() {
      return u.loading |= 2;
    }), Mn(n, "link", a), an(n), e.head.appendChild(n));
  }
  function Sl(e) {
    return '[src="' + Cn(e) + '"]';
  }
  function Bs(e) {
    return "script[async]" + e;
  }
  function pv(e, n, a) {
    if (n.count++, n.instance === null) switch (n.type) {
      case "style":
        var u = e.querySelector('style[data-href~="' + Cn(a.href) + '"]');
        if (u) return n.instance = u, an(u), u;
        var p = b({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
        return u = (e.ownerDocument || e).createElement("style"), an(u), Mn(u, "style", p), Hc(u, a.precedence, e), n.instance = u;
      case "stylesheet":
        p = xl(a.href);
        var g = e.querySelector(Ps(p));
        if (g) return n.state.loading |= 4, n.instance = g, an(g), g;
        u = hv(a), (p = zi.get(p)) && Ph(u, p), g = (e.ownerDocument || e).createElement("link"), an(g);
        var T = g;
        return T._p = new Promise(function(O, j) {
          T.onload = O, T.onerror = j;
        }), Mn(g, "link", u), n.state.loading |= 4, Hc(g, a.precedence, e), n.instance = g;
      case "script":
        return g = Sl(a.src), (p = e.querySelector(Bs(g))) ? (n.instance = p, an(p), p) : (u = a, (p = zi.get(g)) && (u = b({}, a), Bh(u, p)), e = e.ownerDocument || e, p = e.createElement("script"), an(p), Mn(p, "link", u), e.head.appendChild(p), n.instance = p);
      case "void":
        return null;
      default:
        throw Error(l(443, n.type));
    }
    else n.type === "stylesheet" && (n.state.loading & 4) === 0 && (u = n.instance, n.state.loading |= 4, Hc(u, a.precedence, e));
    return n.instance;
  }
  function Hc(e, n, a) {
    for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), p = u.length ? u[u.length - 1] : null, g = p, T = 0; T < u.length; T++) {
      var O = u[T];
      if (O.dataset.precedence === n) g = O;
      else if (g !== p) break;
    }
    g ? g.parentNode.insertBefore(e, g.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Ph(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Bh(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var jc = null;
  function mv(e, n, a) {
    if (jc === null) {
      var u = /* @__PURE__ */ new Map(), p = jc = /* @__PURE__ */ new Map();
      p.set(a, u);
    } else p = jc, u = p.get(a), u || (u = /* @__PURE__ */ new Map(), p.set(a, u));
    if (u.has(e)) return u;
    for (u.set(e, null), a = a.getElementsByTagName(e), p = 0; p < a.length; p++) {
      var g = a[p];
      if (!(g[no] || g[gn] || e === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = g.getAttribute(n) || "";
        T = e + T;
        var O = u.get(T);
        O ? O.push(g) : u.set(T, [g]);
      }
    }
    return u;
  }
  function gv(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(a, n === "title" ? e.querySelector("head > title") : null);
  }
  function B1(e, n, a) {
    if (a === 1 || n.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return true;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError) break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return true;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string") return true;
    }
    return false;
  }
  function yv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ds = null;
  function D1() {
  }
  function N1(e, n, a) {
    if (Ds === null) throw Error(l(475));
    var u = Ds;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var p = xl(a.href), g = e.querySelector(Ps(p));
        if (g) {
          e = g._p, e !== null && typeof e == "object" && typeof e.then == "function" && (u.count++, u = Uc.bind(u), e.then(u, u)), n.state.loading |= 4, n.instance = g, an(g);
          return;
        }
        g = e.ownerDocument || e, a = hv(a), (p = zi.get(p)) && Ph(a, p), g = g.createElement("link"), an(g);
        var T = g;
        T._p = new Promise(function(O, j) {
          T.onload = O, T.onerror = j;
        }), Mn(g, "link", a), n.instance = g;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (u.count++, n = Uc.bind(u), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function I1() {
    if (Ds === null) throw Error(l(475));
    var e = Ds;
    return e.stylesheets && e.count === 0 && Dh(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Dh(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Uc() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Dh(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Zc = null;
  function Dh(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Zc = /* @__PURE__ */ new Map(), n.forEach(H1, e), Zc = null, Uc.call(e));
  }
  function H1(e, n) {
    if (!(n.state.loading & 4)) {
      var a = Zc.get(e);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Zc.set(e, a);
        for (var p = e.querySelectorAll("link[data-precedence],style[data-precedence]"), g = 0; g < p.length; g++) {
          var T = p[g];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (a.set(T.dataset.precedence, T), u = T);
        }
        u && a.set(null, u);
      }
      p = n.instance, T = p.getAttribute("data-precedence"), g = a.get(T) || u, g === u && a.set(null, p), a.set(T, p), this.count++, u = Uc.bind(this), p.addEventListener("load", u), p.addEventListener("error", u), g ? g.parentNode.insertBefore(p, g.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(p, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ns = { $$typeof: P, Provider: null, Consumer: null, _currentValue: ut, _currentValue2: ut, _threadCount: 0 };
  function j1(e, n, a, u, p, g, T, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ba(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ba(0), this.hiddenUpdates = Ba(null), this.identifierPrefix = u, this.onUncaughtError = p, this.onCaughtError = g, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function vv(e, n, a, u, p, g, T, O, j, J, mt, vt) {
    return e = new j1(e, n, a, T, O, j, J, vt), n = 1, g === true && (n |= 24), g = Gn(3, null, null, n), e.current = g, g.stateNode = e, n = yd(), n.refCount++, e.pooledCache = n, n.refCount++, g.memoizedState = { element: u, isDehydrated: a, cache: n }, xd(g), e;
  }
  function _v(e) {
    return e ? (e = Ir, e) : Ir;
  }
  function bv(e, n, a, u, p, g) {
    p = _v(p), u.context === null ? u.context = p : u.pendingContext = p, u = ko(n), u.payload = { element: a }, g = g === void 0 ? null : g, g !== null && (u.callback = g), a = Mo(e, u, n), a !== null && (yi(a, e, n), hs(a, e, n));
  }
  function xv(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Nh(e, n) {
    xv(e, n), (e = e.alternate) && xv(e, n);
  }
  function Sv(e) {
    if (e.tag === 13) {
      var n = So(e, 67108864);
      n !== null && yi(n, e, 67108864), Nh(e, 67108864);
    }
  }
  var $c = true;
  function U1(e, n, a, u) {
    var p = Z.T;
    Z.T = null;
    var g = ct.p;
    try {
      ct.p = 2, Ih(e, n, a, u);
    } finally {
      ct.p = g, Z.T = p;
    }
  }
  function Z1(e, n, a, u) {
    var p = Z.T;
    Z.T = null;
    var g = ct.p;
    try {
      ct.p = 8, Ih(e, n, a, u);
    } finally {
      ct.p = g, Z.T = p;
    }
  }
  function Ih(e, n, a, u) {
    if ($c) {
      var p = Hh(u);
      if (p === null) Th(e, n, u, qc, a), Cv(e, u);
      else if (q1(p, e, n, a, u)) u.stopPropagation();
      else if (Cv(e, u), n & 4 && -1 < $1.indexOf(e)) {
        for (; p !== null; ) {
          var g = br(p);
          if (g !== null) switch (g.tag) {
            case 3:
              if (g = g.stateNode, g.current.memoizedState.isDehydrated) {
                var T = Xt(g.pendingLanes);
                if (T !== 0) {
                  var O = g;
                  for (O.pendingLanes |= 2, O.entangledLanes |= 2; T; ) {
                    var j = 1 << 31 - Et(T);
                    O.entanglements[1] |= j, T &= ~j;
                  }
                  lr(g), (be & 6) === 0 && (kc = se() + 500, Os(0));
                }
              }
              break;
            case 13:
              O = So(g, 2), O !== null && yi(O, g, 2), Ac(), Nh(g, 2);
          }
          if (g = Hh(u), g === null && Th(e, n, u, qc, a), g === p) break;
          p = g;
        }
        p !== null && u.stopPropagation();
      } else Th(e, n, u, null, a);
    }
  }
  function Hh(e) {
    return e = uo(e), jh(e);
  }
  var qc = null;
  function jh(e) {
    if (qc = null, e = Ki(e), e !== null) {
      var n = f(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (e = h(n), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return qc = e, null;
  }
  function wv(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_e()) {
          case Se:
            return 2;
          case ke:
            return 8;
          case de:
          case Ot:
            return 32;
          case Rn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uh = false, Uo = null, Zo = null, $o = null, Is = /* @__PURE__ */ new Map(), Hs = /* @__PURE__ */ new Map(), qo = [], $1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Cv(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Uo = null;
        break;
      case "dragenter":
      case "dragleave":
        Zo = null;
        break;
      case "mouseover":
      case "mouseout":
        $o = null;
        break;
      case "pointerover":
      case "pointerout":
        Is.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hs.delete(n.pointerId);
    }
  }
  function js(e, n, a, u, p, g) {
    return e === null || e.nativeEvent !== g ? (e = { blockedOn: n, domEventName: a, eventSystemFlags: u, nativeEvent: g, targetContainers: [p] }, n !== null && (n = br(n), n !== null && Sv(n)), e) : (e.eventSystemFlags |= u, n = e.targetContainers, p !== null && n.indexOf(p) === -1 && n.push(p), e);
  }
  function q1(e, n, a, u, p) {
    switch (n) {
      case "focusin":
        return Uo = js(Uo, e, n, a, u, p), true;
      case "dragenter":
        return Zo = js(Zo, e, n, a, u, p), true;
      case "mouseover":
        return $o = js($o, e, n, a, u, p), true;
      case "pointerover":
        var g = p.pointerId;
        return Is.set(g, js(Is.get(g) || null, e, n, a, u, p)), true;
      case "gotpointercapture":
        return g = p.pointerId, Hs.set(g, js(Hs.get(g) || null, e, n, a, u, p)), true;
    }
    return false;
  }
  function Tv(e) {
    var n = Ki(e.target);
    if (n !== null) {
      var a = f(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = h(a), n !== null) {
            e.blockedOn = n, ql(e.priority, function() {
              if (a.tag === 13) {
                var u = gi();
                u = Zl(u);
                var p = So(a, u);
                p !== null && yi(p, a, u), Nh(a, u);
              }
            });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vc(e) {
    if (e.blockedOn !== null) return false;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Hh(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var u = new a.constructor(a.type, a);
        na = u, a.target.dispatchEvent(u), na = null;
      } else return n = br(a), n !== null && Sv(n), e.blockedOn = a, false;
      n.shift();
    }
    return true;
  }
  function Ev(e, n, a) {
    Vc(e) && a.delete(n);
  }
  function V1() {
    Uh = false, Uo !== null && Vc(Uo) && (Uo = null), Zo !== null && Vc(Zo) && (Zo = null), $o !== null && Vc($o) && ($o = null), Is.forEach(Ev), Hs.forEach(Ev);
  }
  function Fc(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Uh || (Uh = true, t3.unstable_scheduleCallback(t3.unstable_NormalPriority, V1)));
  }
  var Gc = null;
  function kv(e) {
    Gc !== e && (Gc = e, t3.unstable_scheduleCallback(t3.unstable_NormalPriority, function() {
      Gc === e && (Gc = null);
      for (var n = 0; n < e.length; n += 3) {
        var a = e[n], u = e[n + 1], p = e[n + 2];
        if (typeof u != "function") {
          if (jh(u || a) === null) continue;
          break;
        }
        var g = br(a);
        g !== null && (e.splice(n, 3), n -= 3, jd(g, { pending: true, data: p, method: a.method, action: u }, u, p));
      }
    }));
  }
  function Us(e) {
    function n(j) {
      return Fc(j, e);
    }
    Uo !== null && Fc(Uo, e), Zo !== null && Fc(Zo, e), $o !== null && Fc($o, e), Is.forEach(n), Hs.forEach(n);
    for (var a = 0; a < qo.length; a++) {
      var u = qo[a];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < qo.length && (a = qo[0], a.blockedOn === null); ) Tv(a), a.blockedOn === null && qo.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
      var p = a[u], g = a[u + 1], T = p[Ln] || null;
      if (typeof g == "function") T || kv(a);
      else if (T) {
        var O = null;
        if (g && g.hasAttribute("formAction")) {
          if (p = g, T = g[Ln] || null) O = T.formAction;
          else if (jh(p) !== null) continue;
        } else O = T.action;
        typeof O == "function" ? a[u + 1] = O : (a.splice(u, 3), u -= 3), kv(a);
      }
    }
  }
  function Zh(e) {
    this._internalRoot = e;
  }
  Yc.prototype.render = Zh.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(l(409));
    var a = n.current, u = gi();
    bv(a, u, e, n, null, null);
  }, Yc.prototype.unmount = Zh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      bv(e.current, 2, null, e, null, null), Ac(), n[eo] = null;
    }
  };
  function Yc(e) {
    this._internalRoot = e;
  }
  Yc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Au();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < qo.length && n !== 0 && n < qo[a].priority; a++) ;
      qo.splice(a, 0, e), a === 0 && Tv(e);
    }
  };
  var Mv = r.version;
  if (Mv !== "19.1.0") throw Error(l(527, Mv, "19.1.0"));
  ct.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = _(n), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F1 = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: Z, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xc.isDisabled && Xc.supportsFiber) try {
      rt = Xc.inject(F1), ht = Xc;
    } catch {
    }
  }
  return $s.createRoot = function(e, n) {
    if (!c(e)) throw Error(l(299));
    var a = false, u = "", p = qg, g = Vg, T = Fg, O = null;
    return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (p = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = vv(e, 1, false, null, null, a, u, p, g, T, O, null), e[eo] = n.current, Ch(e), new Zh(n);
  }, $s.hydrateRoot = function(e, n, a) {
    if (!c(e)) throw Error(l(299));
    var u = false, p = "", g = qg, T = Vg, O = Fg, j = null, J = null;
    return a != null && (a.unstable_strictMode === true && (u = true), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onUncaughtError !== void 0 && (g = a.onUncaughtError), a.onCaughtError !== void 0 && (T = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (J = a.formState)), n = vv(e, 1, true, n, a ?? null, u, p, g, T, O, j, J), n.context = _v(null), a = n.current, u = gi(), u = Zl(u), p = ko(u), p.callback = null, Mo(a, p, u), a = u, n.current.lanes = a, to(n, a), lr(n), e[eo] = n.current, Ch(e), new Yc(n);
  }, $s.version = "19.1.0", $s;
}
var Iv;
function nS() {
  if (Iv) return qh.exports;
  Iv = 1;
  function t3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t3);
    } catch (r) {
      console.error(r);
    }
  }
  return t3(), qh.exports = eS(), qh.exports;
}
var iS = nS();
const rS = mu(iS), Hv = (t3) => {
  let r;
  const o = /* @__PURE__ */ new Set(), l = (v, b) => {
    const S = typeof v == "function" ? v(r) : v;
    if (!Object.is(S, r)) {
      const E = r;
      r = b ?? (typeof S != "object" || S === null) ? S : Object.assign({}, r, S), o.forEach((C) => C(r, E));
    }
  }, c = () => r, m = { setState: l, getState: c, getInitialState: () => _, subscribe: (v) => (o.add(v), () => o.delete(v)) }, _ = r = t3(l, c, m);
  return m;
}, oS = (t3) => t3 ? Hv(t3) : Hv;
var B = Yp();
const Hn = mu(B), bp = Y1({ __proto__: null, default: Hn }, [B]), aS = (t3) => t3;
function lS(t3, r = aS) {
  const o = Hn.useSyncExternalStore(t3.subscribe, () => r(t3.getState()), () => r(t3.getInitialState()));
  return Hn.useDebugValue(o), o;
}
const jv = (t3) => {
  const r = oS(t3), o = (l) => lS(r, l);
  return Object.assign(o, r), o;
}, sS = (t3) => t3 ? jv(t3) : jv;
let en = sS((t3, r) => ({ geodb: [], landing: true, visibleDots: false, methodology: false, resetClick: (o) => {
  const l = r().geodb;
  l.map((c) => {
    c.id == (o == null ? void 0 : o.id) ? c.clicked = true : c.clicked = false;
  }), t3({ geodb: l });
} }));
function Qr(t3, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${t3}`);
  return r.forEach((l) => o.searchParams.append("args[]", l)), `Minified MUI error #${t3}; visit ${o} for the full message.`;
}
const mr = "$$material";
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(t3) {
    for (var r = 1; r < arguments.length; r++) {
      var o = arguments[r];
      for (var l in o) ({}).hasOwnProperty.call(o, l) && (t3[l] = o[l]);
    }
    return t3;
  }, pf.apply(null, arguments);
}
function uS(t3) {
  if (t3.sheet) return t3.sheet;
  for (var r = 0; r < document.styleSheets.length; r++) if (document.styleSheets[r].ownerNode === t3) return document.styleSheets[r];
}
function cS(t3) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", t3.key), t3.nonce !== void 0 && r.setAttribute("nonce", t3.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var fS = function() {
  function t3(o) {
    var l = this;
    this._insertTag = function(c) {
      var f;
      l.tags.length === 0 ? l.insertionPoint ? f = l.insertionPoint.nextSibling : l.prepend ? f = l.container.firstChild : f = l.before : f = l.tags[l.tags.length - 1].nextSibling, l.container.insertBefore(c, f), l.tags.push(c);
    }, this.isSpeedy = o.speedy === void 0 ? true : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var r = t3.prototype;
  return r.hydrate = function(l) {
    l.forEach(this._insertTag);
  }, r.insert = function(l) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cS(this));
    var c = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var f = uS(c);
      try {
        f.insertRule(l, f.cssRules.length);
      } catch {
      }
    } else c.appendChild(document.createTextNode(l));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(l) {
      var c;
      return (c = l.parentNode) == null ? void 0 : c.removeChild(l);
    }), this.tags = [], this.ctr = 0;
  }, t3;
}(), In = "-ms-", mf = "-moz-", me = "-webkit-", I0 = "comm", Xp = "rule", Kp = "decl", dS = "@import", H0 = "@keyframes", hS = "@layer", pS = Math.abs, wf = String.fromCharCode, mS = Object.assign;
function gS(t3, r) {
  return An(t3, 0) ^ 45 ? (((r << 2 ^ An(t3, 0)) << 2 ^ An(t3, 1)) << 2 ^ An(t3, 2)) << 2 ^ An(t3, 3) : 0;
}
function j0(t3) {
  return t3.trim();
}
function yS(t3, r) {
  return (t3 = r.exec(t3)) ? t3[0] : t3;
}
function ge(t3, r, o) {
  return t3.replace(r, o);
}
function xp(t3, r) {
  return t3.indexOf(r);
}
function An(t3, r) {
  return t3.charCodeAt(r) | 0;
}
function uu(t3, r, o) {
  return t3.slice(r, o);
}
function fr(t3) {
  return t3.length;
}
function Qp(t3) {
  return t3.length;
}
function Kc(t3, r) {
  return r.push(t3), t3;
}
function vS(t3, r) {
  return t3.map(r).join("");
}
var Cf = 1, Dl = 1, U0 = 0, ri = 0, cn = 0, Il = "";
function Tf(t3, r, o, l, c, f, h) {
  return { value: t3, root: r, parent: o, type: l, props: c, children: f, line: Cf, column: Dl, length: h, return: "" };
}
function qs(t3, r) {
  return mS(Tf("", null, null, "", null, null, 0), t3, { length: -t3.length }, r);
}
function _S() {
  return cn;
}
function bS() {
  return cn = ri > 0 ? An(Il, --ri) : 0, Dl--, cn === 10 && (Dl = 1, Cf--), cn;
}
function xi() {
  return cn = ri < U0 ? An(Il, ri++) : 0, Dl++, cn === 10 && (Dl = 1, Cf++), cn;
}
function gr() {
  return An(Il, ri);
}
function sf() {
  return ri;
}
function gu(t3, r) {
  return uu(Il, t3, r);
}
function cu(t3) {
  switch (t3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Z0(t3) {
  return Cf = Dl = 1, U0 = fr(Il = t3), ri = 0, [];
}
function $0(t3) {
  return Il = "", t3;
}
function uf(t3) {
  return j0(gu(ri - 1, Sp(t3 === 91 ? t3 + 2 : t3 === 40 ? t3 + 1 : t3)));
}
function xS(t3) {
  for (; (cn = gr()) && cn < 33; ) xi();
  return cu(t3) > 2 || cu(cn) > 3 ? "" : " ";
}
function SS(t3, r) {
  for (; --r && xi() && !(cn < 48 || cn > 102 || cn > 57 && cn < 65 || cn > 70 && cn < 97); ) ;
  return gu(t3, sf() + (r < 6 && gr() == 32 && xi() == 32));
}
function Sp(t3) {
  for (; xi(); ) switch (cn) {
    case t3:
      return ri;
    case 34:
    case 39:
      t3 !== 34 && t3 !== 39 && Sp(cn);
      break;
    case 40:
      t3 === 41 && Sp(t3);
      break;
    case 92:
      xi();
      break;
  }
  return ri;
}
function wS(t3, r) {
  for (; xi() && t3 + cn !== 57; ) if (t3 + cn === 84 && gr() === 47) break;
  return "/*" + gu(r, ri - 1) + "*" + wf(t3 === 47 ? t3 : xi());
}
function CS(t3) {
  for (; !cu(gr()); ) xi();
  return gu(t3, ri);
}
function TS(t3) {
  return $0(cf("", null, null, null, [""], t3 = Z0(t3), 0, [0], t3));
}
function cf(t3, r, o, l, c, f, h, m, _) {
  for (var v = 0, b = 0, S = h, E = 0, C = 0, z = 0, A = 1, $ = 1, N = 1, G = 0, P = "", U = c, D = f, I = l, tt = P; $; ) switch (z = G, G = xi()) {
    case 40:
      if (z != 108 && An(tt, S - 1) == 58) {
        xp(tt += ge(uf(G), "&", "&\f"), "&\f") != -1 && (N = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      tt += uf(G);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      tt += xS(z);
      break;
    case 92:
      tt += SS(sf() - 1, 7);
      continue;
    case 47:
      switch (gr()) {
        case 42:
        case 47:
          Kc(ES(wS(xi(), sf()), r, o), _);
          break;
        default:
          tt += "/";
      }
      break;
    case 123 * A:
      m[v++] = fr(tt) * N;
    case 125 * A:
    case 59:
    case 0:
      switch (G) {
        case 0:
        case 125:
          $ = 0;
        case 59 + b:
          N == -1 && (tt = ge(tt, /\f/g, "")), C > 0 && fr(tt) - S && Kc(C > 32 ? Zv(tt + ";", l, o, S - 1) : Zv(ge(tt, " ", "") + ";", l, o, S - 2), _);
          break;
        case 59:
          tt += ";";
        default:
          if (Kc(I = Uv(tt, r, o, v, b, c, m, P, U = [], D = [], S), f), G === 123) if (b === 0) cf(tt, r, I, I, U, f, S, m, D);
          else switch (E === 99 && An(tt, 3) === 110 ? 100 : E) {
            case 100:
            case 108:
            case 109:
            case 115:
              cf(t3, I, I, l && Kc(Uv(t3, I, I, 0, 0, c, m, P, c, U = [], S), D), c, D, S, m, l ? U : D);
              break;
            default:
              cf(tt, I, I, I, [""], D, 0, m, D);
          }
      }
      v = b = C = 0, A = N = 1, P = tt = "", S = h;
      break;
    case 58:
      S = 1 + fr(tt), C = z;
    default:
      if (A < 1) {
        if (G == 123) --A;
        else if (G == 125 && A++ == 0 && bS() == 125) continue;
      }
      switch (tt += wf(G), G * A) {
        case 38:
          N = b > 0 ? 1 : (tt += "\f", -1);
          break;
        case 44:
          m[v++] = (fr(tt) - 1) * N, N = 1;
          break;
        case 64:
          gr() === 45 && (tt += uf(xi())), E = gr(), b = S = fr(P = tt += CS(sf())), G++;
          break;
        case 45:
          z === 45 && fr(tt) == 2 && (A = 0);
      }
  }
  return f;
}
function Uv(t3, r, o, l, c, f, h, m, _, v, b) {
  for (var S = c - 1, E = c === 0 ? f : [""], C = Qp(E), z = 0, A = 0, $ = 0; z < l; ++z) for (var N = 0, G = uu(t3, S + 1, S = pS(A = h[z])), P = t3; N < C; ++N) (P = j0(A > 0 ? E[N] + " " + G : ge(G, /&\f/g, E[N]))) && (_[$++] = P);
  return Tf(t3, r, o, c === 0 ? Xp : m, _, v, b);
}
function ES(t3, r, o) {
  return Tf(t3, r, o, I0, wf(_S()), uu(t3, 2, -2), 0);
}
function Zv(t3, r, o, l) {
  return Tf(t3, r, o, Kp, uu(t3, 0, l), uu(t3, l + 1, -1), l);
}
function zl(t3, r) {
  for (var o = "", l = Qp(t3), c = 0; c < l; c++) o += r(t3[c], c, t3, r) || "";
  return o;
}
function kS(t3, r, o, l) {
  switch (t3.type) {
    case hS:
      if (t3.children.length) break;
    case dS:
    case Kp:
      return t3.return = t3.return || t3.value;
    case I0:
      return "";
    case H0:
      return t3.return = t3.value + "{" + zl(t3.children, l) + "}";
    case Xp:
      t3.value = t3.props.join(",");
  }
  return fr(o = zl(t3.children, l)) ? t3.return = t3.value + "{" + o + "}" : "";
}
function MS(t3) {
  var r = Qp(t3);
  return function(o, l, c, f) {
    for (var h = "", m = 0; m < r; m++) h += t3[m](o, l, c, f) || "";
    return h;
  };
}
function AS(t3) {
  return function(r) {
    r.root || (r = r.return) && t3(r);
  };
}
function q0(t3) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return r[o] === void 0 && (r[o] = t3(o)), r[o];
  };
}
var OS = function(r, o, l) {
  for (var c = 0, f = 0; c = f, f = gr(), c === 38 && f === 12 && (o[l] = 1), !cu(f); ) xi();
  return gu(r, ri);
}, RS = function(r, o) {
  var l = -1, c = 44;
  do
    switch (cu(c)) {
      case 0:
        c === 38 && gr() === 12 && (o[l] = 1), r[l] += OS(ri - 1, o, l);
        break;
      case 2:
        r[l] += uf(c);
        break;
      case 4:
        if (c === 44) {
          r[++l] = gr() === 58 ? "&\f" : "", o[l] = r[l].length;
          break;
        }
      default:
        r[l] += wf(c);
    }
  while (c = xi());
  return r;
}, zS = function(r, o) {
  return $0(RS(Z0(r), o));
}, $v = /* @__PURE__ */ new WeakMap(), LS = function(r) {
  if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
    for (var o = r.value, l = r.parent, c = r.column === l.column && r.line === l.line; l.type !== "rule"; ) if (l = l.parent, !l) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !$v.get(l)) && !c) {
      $v.set(r, true);
      for (var f = [], h = zS(o, f), m = l.props, _ = 0, v = 0; _ < h.length; _++) for (var b = 0; b < m.length; b++, v++) r.props[v] = f[_] ? h[_].replace(/&\f/g, m[b]) : m[b] + " " + h[_];
    }
  }
}, PS = function(r) {
  if (r.type === "decl") {
    var o = r.value;
    o.charCodeAt(0) === 108 && o.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function V0(t3, r) {
  switch (gS(t3, r)) {
    case 5103:
      return me + "print-" + t3 + t3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return me + t3 + t3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + t3 + mf + t3 + In + t3 + t3;
    case 6828:
    case 4268:
      return me + t3 + In + t3 + t3;
    case 6165:
      return me + t3 + In + "flex-" + t3 + t3;
    case 5187:
      return me + t3 + ge(t3, /(\w+).+(:[^]+)/, me + "box-$1$2" + In + "flex-$1$2") + t3;
    case 5443:
      return me + t3 + In + "flex-item-" + ge(t3, /flex-|-self/, "") + t3;
    case 4675:
      return me + t3 + In + "flex-line-pack" + ge(t3, /align-content|flex-|-self/, "") + t3;
    case 5548:
      return me + t3 + In + ge(t3, "shrink", "negative") + t3;
    case 5292:
      return me + t3 + In + ge(t3, "basis", "preferred-size") + t3;
    case 6060:
      return me + "box-" + ge(t3, "-grow", "") + me + t3 + In + ge(t3, "grow", "positive") + t3;
    case 4554:
      return me + ge(t3, /([^-])(transform)/g, "$1" + me + "$2") + t3;
    case 6187:
      return ge(ge(ge(t3, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), t3, "") + t3;
    case 5495:
    case 3959:
      return ge(t3, /(image-set\([^]*)/, me + "$1$`$1");
    case 4968:
      return ge(ge(t3, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + In + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + t3 + t3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ge(t3, /(.+)-inline(.+)/, me + "$1$2") + t3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (fr(t3) - 1 - r > 6) switch (An(t3, r + 1)) {
        case 109:
          if (An(t3, r + 4) !== 45) break;
        case 102:
          return ge(t3, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + mf + (An(t3, r + 3) == 108 ? "$3" : "$2-$3")) + t3;
        case 115:
          return ~xp(t3, "stretch") ? V0(ge(t3, "stretch", "fill-available"), r) + t3 : t3;
      }
      break;
    case 4949:
      if (An(t3, r + 1) !== 115) break;
    case 6444:
      switch (An(t3, fr(t3) - 3 - (~xp(t3, "!important") && 10))) {
        case 107:
          return ge(t3, ":", ":" + me) + t3;
        case 101:
          return ge(t3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (An(t3, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + In + "$2box$3") + t3;
      }
      break;
    case 5936:
      switch (An(t3, r + 11)) {
        case 114:
          return me + t3 + In + ge(t3, /[svh]\w+-[tblr]{2}/, "tb") + t3;
        case 108:
          return me + t3 + In + ge(t3, /[svh]\w+-[tblr]{2}/, "tb-rl") + t3;
        case 45:
          return me + t3 + In + ge(t3, /[svh]\w+-[tblr]{2}/, "lr") + t3;
      }
      return me + t3 + In + t3 + t3;
  }
  return t3;
}
var BS = function(r, o, l, c) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Kp:
      r.return = V0(r.value, r.length);
      break;
    case H0:
      return zl([qs(r, { value: ge(r.value, "@", "@" + me) })], c);
    case Xp:
      if (r.length) return vS(r.props, function(f) {
        switch (yS(f, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return zl([qs(r, { props: [ge(f, /:(read-\w+)/, ":" + mf + "$1")] })], c);
          case "::placeholder":
            return zl([qs(r, { props: [ge(f, /:(plac\w+)/, ":" + me + "input-$1")] }), qs(r, { props: [ge(f, /:(plac\w+)/, ":" + mf + "$1")] }), qs(r, { props: [ge(f, /:(plac\w+)/, In + "input-$1")] })], c);
        }
        return "";
      });
  }
}, DS = [BS], NS = function(r) {
  var o = r.key;
  if (o === "css") {
    var l = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(l, function(A) {
      var $ = A.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(A), A.setAttribute("data-s", ""));
    });
  }
  var c = r.stylisPlugins || DS, f = {}, h, m = [];
  h = r.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o + ' "]'), function(A) {
    for (var $ = A.getAttribute("data-emotion").split(" "), N = 1; N < $.length; N++) f[$[N]] = true;
    m.push(A);
  });
  var _, v = [LS, PS];
  {
    var b, S = [kS, AS(function(A) {
      b.insert(A);
    })], E = MS(v.concat(c, S)), C = function($) {
      return zl(TS($), E);
    };
    _ = function($, N, G, P) {
      b = G, C($ ? $ + "{" + N.styles + "}" : N.styles), P && (z.inserted[N.name] = true);
    };
  }
  var z = { key: o, sheet: new fS({ key: o, container: h, nonce: r.nonce, speedy: r.speedy, prepend: r.prepend, insertionPoint: r.insertionPoint }), nonce: r.nonce, inserted: f, registered: {}, insert: _ };
  return z.sheet.hydrate(m), z;
}, Xh = { exports: {} }, ve = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var qv;
function IS() {
  if (qv) return ve;
  qv = 1;
  var t3 = typeof Symbol == "function" && Symbol.for, r = t3 ? Symbol.for("react.element") : 60103, o = t3 ? Symbol.for("react.portal") : 60106, l = t3 ? Symbol.for("react.fragment") : 60107, c = t3 ? Symbol.for("react.strict_mode") : 60108, f = t3 ? Symbol.for("react.profiler") : 60114, h = t3 ? Symbol.for("react.provider") : 60109, m = t3 ? Symbol.for("react.context") : 60110, _ = t3 ? Symbol.for("react.async_mode") : 60111, v = t3 ? Symbol.for("react.concurrent_mode") : 60111, b = t3 ? Symbol.for("react.forward_ref") : 60112, S = t3 ? Symbol.for("react.suspense") : 60113, E = t3 ? Symbol.for("react.suspense_list") : 60120, C = t3 ? Symbol.for("react.memo") : 60115, z = t3 ? Symbol.for("react.lazy") : 60116, A = t3 ? Symbol.for("react.block") : 60121, $ = t3 ? Symbol.for("react.fundamental") : 60117, N = t3 ? Symbol.for("react.responder") : 60118, G = t3 ? Symbol.for("react.scope") : 60119;
  function P(D) {
    if (typeof D == "object" && D !== null) {
      var I = D.$$typeof;
      switch (I) {
        case r:
          switch (D = D.type, D) {
            case _:
            case v:
            case l:
            case f:
            case c:
            case S:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case m:
                case b:
                case z:
                case C:
                case h:
                  return D;
                default:
                  return I;
              }
          }
        case o:
          return I;
      }
    }
  }
  function U(D) {
    return P(D) === v;
  }
  return ve.AsyncMode = _, ve.ConcurrentMode = v, ve.ContextConsumer = m, ve.ContextProvider = h, ve.Element = r, ve.ForwardRef = b, ve.Fragment = l, ve.Lazy = z, ve.Memo = C, ve.Portal = o, ve.Profiler = f, ve.StrictMode = c, ve.Suspense = S, ve.isAsyncMode = function(D) {
    return U(D) || P(D) === _;
  }, ve.isConcurrentMode = U, ve.isContextConsumer = function(D) {
    return P(D) === m;
  }, ve.isContextProvider = function(D) {
    return P(D) === h;
  }, ve.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === r;
  }, ve.isForwardRef = function(D) {
    return P(D) === b;
  }, ve.isFragment = function(D) {
    return P(D) === l;
  }, ve.isLazy = function(D) {
    return P(D) === z;
  }, ve.isMemo = function(D) {
    return P(D) === C;
  }, ve.isPortal = function(D) {
    return P(D) === o;
  }, ve.isProfiler = function(D) {
    return P(D) === f;
  }, ve.isStrictMode = function(D) {
    return P(D) === c;
  }, ve.isSuspense = function(D) {
    return P(D) === S;
  }, ve.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === l || D === v || D === f || D === c || D === S || D === E || typeof D == "object" && D !== null && (D.$$typeof === z || D.$$typeof === C || D.$$typeof === h || D.$$typeof === m || D.$$typeof === b || D.$$typeof === $ || D.$$typeof === N || D.$$typeof === G || D.$$typeof === A);
  }, ve.typeOf = P, ve;
}
var Vv;
function HS() {
  return Vv || (Vv = 1, Xh.exports = IS()), Xh.exports;
}
var Kh, Fv;
function jS() {
  if (Fv) return Kh;
  Fv = 1;
  var t3 = HS(), r = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, o = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, l = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, c = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, f = {};
  f[t3.ForwardRef] = l, f[t3.Memo] = c;
  function h(z) {
    return t3.isMemo(z) ? c : f[z.$$typeof] || r;
  }
  var m = Object.defineProperty, _ = Object.getOwnPropertyNames, v = Object.getOwnPropertySymbols, b = Object.getOwnPropertyDescriptor, S = Object.getPrototypeOf, E = Object.prototype;
  function C(z, A, $) {
    if (typeof A != "string") {
      if (E) {
        var N = S(A);
        N && N !== E && C(z, N, $);
      }
      var G = _(A);
      v && (G = G.concat(v(A)));
      for (var P = h(z), U = h(A), D = 0; D < G.length; ++D) {
        var I = G[D];
        if (!o[I] && !($ && $[I]) && !(U && U[I]) && !(P && P[I])) {
          var tt = b(A, I);
          try {
            m(z, I, tt);
          } catch {
          }
        }
      }
    }
    return z;
  }
  return Kh = C, Kh;
}
jS();
var US = true;
function F0(t3, r, o) {
  var l = "";
  return o.split(" ").forEach(function(c) {
    t3[c] !== void 0 ? r.push(t3[c] + ";") : c && (l += c + " ");
  }), l;
}
var Wp = function(r, o, l) {
  var c = r.key + "-" + o.name;
  (l === false || US === false) && r.registered[c] === void 0 && (r.registered[c] = o.styles);
}, Jp = function(r, o, l) {
  Wp(r, o, l);
  var c = r.key + "-" + o.name;
  if (r.inserted[o.name] === void 0) {
    var f = o;
    do
      r.insert(o === f ? "." + c : "", f, r.sheet, true), f = f.next;
    while (f !== void 0);
  }
};
function ZS(t3) {
  for (var r = 0, o, l = 0, c = t3.length; c >= 4; ++l, c -= 4) o = t3.charCodeAt(l) & 255 | (t3.charCodeAt(++l) & 255) << 8 | (t3.charCodeAt(++l) & 255) << 16 | (t3.charCodeAt(++l) & 255) << 24, o = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= o >>> 24, r = (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      r ^= (t3.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (t3.charCodeAt(l + 1) & 255) << 8;
    case 1:
      r ^= t3.charCodeAt(l) & 255, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var $S = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, qS = /[A-Z]|^ms/g, VS = /_EMO_([^_]+?)_([^]*?)_EMO_/g, G0 = function(r) {
  return r.charCodeAt(1) === 45;
}, Gv = function(r) {
  return r != null && typeof r != "boolean";
}, Qh = q0(function(t3) {
  return G0(t3) ? t3 : t3.replace(qS, "-$&").toLowerCase();
}), Yv = function(r, o) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof o == "string") return o.replace(VS, function(l, c, f) {
        return dr = { name: c, styles: f, next: dr }, c;
      });
  }
  return $S[r] !== 1 && !G0(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function fu(t3, r, o) {
  if (o == null) return "";
  var l = o;
  if (l.__emotion_styles !== void 0) return l;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var c = o;
      if (c.anim === 1) return dr = { name: c.name, styles: c.styles, next: dr }, c.name;
      var f = o;
      if (f.styles !== void 0) {
        var h = f.next;
        if (h !== void 0) for (; h !== void 0; ) dr = { name: h.name, styles: h.styles, next: dr }, h = h.next;
        var m = f.styles + ";";
        return m;
      }
      return FS(t3, r, o);
    }
    case "function": {
      if (t3 !== void 0) {
        var _ = dr, v = o(t3);
        return dr = _, fu(t3, r, v);
      }
      break;
    }
  }
  var b = o;
  if (r == null) return b;
  var S = r[b];
  return S !== void 0 ? S : b;
}
function FS(t3, r, o) {
  var l = "";
  if (Array.isArray(o)) for (var c = 0; c < o.length; c++) l += fu(t3, r, o[c]) + ";";
  else for (var f in o) {
    var h = o[f];
    if (typeof h != "object") {
      var m = h;
      r != null && r[m] !== void 0 ? l += f + "{" + r[m] + "}" : Gv(m) && (l += Qh(f) + ":" + Yv(f, m) + ";");
    } else if (Array.isArray(h) && typeof h[0] == "string" && (r == null || r[h[0]] === void 0)) for (var _ = 0; _ < h.length; _++) Gv(h[_]) && (l += Qh(f) + ":" + Yv(f, h[_]) + ";");
    else {
      var v = fu(t3, r, h);
      switch (f) {
        case "animation":
        case "animationName": {
          l += Qh(f) + ":" + v + ";";
          break;
        }
        default:
          l += f + "{" + v + "}";
      }
    }
  }
  return l;
}
var Xv = /label:\s*([^\s;{]+)\s*(;|$)/g, dr;
function yu(t3, r, o) {
  if (t3.length === 1 && typeof t3[0] == "object" && t3[0] !== null && t3[0].styles !== void 0) return t3[0];
  var l = true, c = "";
  dr = void 0;
  var f = t3[0];
  if (f == null || f.raw === void 0) l = false, c += fu(o, r, f);
  else {
    var h = f;
    c += h[0];
  }
  for (var m = 1; m < t3.length; m++) if (c += fu(o, r, t3[m]), l) {
    var _ = f;
    c += _[m];
  }
  Xv.lastIndex = 0;
  for (var v = "", b; (b = Xv.exec(c)) !== null; ) v += "-" + b[1];
  var S = ZS(c) + v;
  return { name: S, styles: c, next: dr };
}
var GS = function(r) {
  return r();
}, Y0 = bp.useInsertionEffect ? bp.useInsertionEffect : false, X0 = Y0 || GS, Kv = Y0 || B.useLayoutEffect, K0 = B.createContext(typeof HTMLElement < "u" ? NS({ key: "css" }) : null);
K0.Provider;
var tm = function(r) {
  return B.forwardRef(function(o, l) {
    var c = B.useContext(K0);
    return r(o, c, l);
  });
}, vu = B.createContext({}), em = {}.hasOwnProperty, wp = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", YS = function(r, o) {
  var l = {};
  for (var c in o) em.call(o, c) && (l[c] = o[c]);
  return l[wp] = r, l;
}, XS = function(r) {
  var o = r.cache, l = r.serialized, c = r.isStringTag;
  return Wp(o, l, c), X0(function() {
    return Jp(o, l, c);
  }), null;
}, KS = tm(function(t3, r, o) {
  var l = t3.css;
  typeof l == "string" && r.registered[l] !== void 0 && (l = r.registered[l]);
  var c = t3[wp], f = [l], h = "";
  typeof t3.className == "string" ? h = F0(r.registered, f, t3.className) : t3.className != null && (h = t3.className + " ");
  var m = yu(f, void 0, B.useContext(vu));
  h += r.key + "-" + m.name;
  var _ = {};
  for (var v in t3) em.call(t3, v) && v !== "css" && v !== wp && (_[v] = t3[v]);
  return _.className = h, o && (_.ref = o), B.createElement(B.Fragment, null, B.createElement(XS, { cache: r, serialized: m, isStringTag: typeof c == "string" }), B.createElement(c, _));
}), QS = KS, Qv = function(r, o) {
  var l = arguments;
  if (o == null || !em.call(o, "css")) return B.createElement.apply(void 0, l);
  var c = l.length, f = new Array(c);
  f[0] = QS, f[1] = YS(r, o);
  for (var h = 2; h < c; h++) f[h] = l[h];
  return B.createElement.apply(null, f);
};
(function(t3) {
  var r;
  r || (r = t3.JSX || (t3.JSX = {}));
})(Qv || (Qv = {}));
var WS = tm(function(t3, r) {
  var o = t3.styles, l = yu([o], void 0, B.useContext(vu)), c = B.useRef();
  return Kv(function() {
    var f = r.key + "-global", h = new r.sheet.constructor({ key: f, nonce: r.sheet.nonce, container: r.sheet.container, speedy: r.sheet.isSpeedy }), m = false, _ = document.querySelector('style[data-emotion="' + f + " " + l.name + '"]');
    return r.sheet.tags.length && (h.before = r.sheet.tags[0]), _ !== null && (m = true, _.setAttribute("data-emotion", f), h.hydrate([_])), c.current = [h, m], function() {
      h.flush();
    };
  }, [r]), Kv(function() {
    var f = c.current, h = f[0], m = f[1];
    if (m) {
      f[1] = false;
      return;
    }
    if (l.next !== void 0 && Jp(r, l.next, true), h.tags.length) {
      var _ = h.tags[h.tags.length - 1].nextElementSibling;
      h.before = _, h.flush();
    }
    r.insert("", l, h, false);
  }, [r, l.name]), null;
});
function nm() {
  for (var t3 = arguments.length, r = new Array(t3), o = 0; o < t3; o++) r[o] = arguments[o];
  return yu(r);
}
function _u() {
  var t3 = nm.apply(void 0, arguments), r = "animation-" + t3.name;
  return { name: r, styles: "@keyframes " + r + "{" + t3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var JS = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tw = q0(function(t3) {
  return JS.test(t3) || t3.charCodeAt(0) === 111 && t3.charCodeAt(1) === 110 && t3.charCodeAt(2) < 91;
}), ew = tw, nw = function(r) {
  return r !== "theme";
}, Wv = function(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96 ? ew : nw;
}, Jv = function(r, o, l) {
  var c;
  if (o) {
    var f = o.shouldForwardProp;
    c = r.__emotion_forwardProp && f ? function(h) {
      return r.__emotion_forwardProp(h) && f(h);
    } : f;
  }
  return typeof c != "function" && l && (c = r.__emotion_forwardProp), c;
}, iw = function(r) {
  var o = r.cache, l = r.serialized, c = r.isStringTag;
  return Wp(o, l, c), X0(function() {
    return Jp(o, l, c);
  }), null;
}, rw = function t(r, o) {
  var l = r.__emotion_real === r, c = l && r.__emotion_base || r, f, h;
  o !== void 0 && (f = o.label, h = o.target);
  var m = Jv(r, o, l), _ = m || Wv(c), v = !_("as");
  return function() {
    var b = arguments, S = l && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (f !== void 0 && S.push("label:" + f + ";"), b[0] == null || b[0].raw === void 0) S.push.apply(S, b);
    else {
      var E = b[0];
      S.push(E[0]);
      for (var C = b.length, z = 1; z < C; z++) S.push(b[z], E[z]);
    }
    var A = tm(function($, N, G) {
      var P = v && $.as || c, U = "", D = [], I = $;
      if ($.theme == null) {
        I = {};
        for (var tt in $) I[tt] = $[tt];
        I.theme = B.useContext(vu);
      }
      typeof $.className == "string" ? U = F0(N.registered, D, $.className) : $.className != null && (U = $.className + " ");
      var et = yu(S.concat(D), N.registered, I);
      U += N.key + "-" + et.name, h !== void 0 && (U += " " + h);
      var lt = v && m === void 0 ? Wv(P) : _, M = {};
      for (var q in $) v && q === "as" || lt(q) && (M[q] = $[q]);
      return M.className = U, G && (M.ref = G), B.createElement(B.Fragment, null, B.createElement(iw, { cache: N, serialized: et, isStringTag: typeof P == "string" }), B.createElement(P, M));
    });
    return A.displayName = f !== void 0 ? f : "Styled(" + (typeof c == "string" ? c : c.displayName || c.name || "Component") + ")", A.defaultProps = r.defaultProps, A.__emotion_real = A, A.__emotion_base = c, A.__emotion_styles = S, A.__emotion_forwardProp = m, Object.defineProperty(A, "toString", { value: function() {
      return "." + h;
    } }), A.withComponent = function($, N) {
      var G = t($, pf({}, o, N, { shouldForwardProp: Jv(A, N, true) }));
      return G.apply(void 0, S);
    }, A;
  };
}, ow = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], Cp = rw.bind(null);
ow.forEach(function(t3) {
  Cp[t3] = Cp(t3);
});
function aw(t3) {
  return t3 == null || Object.keys(t3).length === 0;
}
function Q0(t3) {
  const { styles: r, defaultTheme: o = {} } = t3, l = typeof r == "function" ? (c) => r(aw(c) ? o : c) : r;
  return F.jsx(WS, { styles: l });
}
function W0(t3, r) {
  return Cp(t3, r);
}
function lw(t3, r) {
  Array.isArray(t3.__emotion_styles) && (t3.__emotion_styles = r(t3.__emotion_styles));
}
const t_ = [];
function e_(t3) {
  return t_[0] = t3, yu(t_);
}
var Wh = { exports: {} }, Ee = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var n_;
function sw() {
  if (n_) return Ee;
  n_ = 1;
  var t3 = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), E = Symbol.for("react.view_transition"), C = Symbol.for("react.client.reference");
  function z(A) {
    if (typeof A == "object" && A !== null) {
      var $ = A.$$typeof;
      switch ($) {
        case t3:
          switch (A = A.type, A) {
            case o:
            case c:
            case l:
            case _:
            case v:
            case E:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case h:
                case m:
                case S:
                case b:
                  return A;
                case f:
                  return A;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  return Ee.ContextConsumer = f, Ee.ContextProvider = h, Ee.Element = t3, Ee.ForwardRef = m, Ee.Fragment = o, Ee.Lazy = S, Ee.Memo = b, Ee.Portal = r, Ee.Profiler = c, Ee.StrictMode = l, Ee.Suspense = _, Ee.SuspenseList = v, Ee.isContextConsumer = function(A) {
    return z(A) === f;
  }, Ee.isContextProvider = function(A) {
    return z(A) === h;
  }, Ee.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t3;
  }, Ee.isForwardRef = function(A) {
    return z(A) === m;
  }, Ee.isFragment = function(A) {
    return z(A) === o;
  }, Ee.isLazy = function(A) {
    return z(A) === S;
  }, Ee.isMemo = function(A) {
    return z(A) === b;
  }, Ee.isPortal = function(A) {
    return z(A) === r;
  }, Ee.isProfiler = function(A) {
    return z(A) === c;
  }, Ee.isStrictMode = function(A) {
    return z(A) === l;
  }, Ee.isSuspense = function(A) {
    return z(A) === _;
  }, Ee.isSuspenseList = function(A) {
    return z(A) === v;
  }, Ee.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === o || A === c || A === l || A === _ || A === v || typeof A == "object" && A !== null && (A.$$typeof === S || A.$$typeof === b || A.$$typeof === h || A.$$typeof === f || A.$$typeof === m || A.$$typeof === C || A.getModuleId !== void 0);
  }, Ee.typeOf = z, Ee;
}
var i_;
function uw() {
  return i_ || (i_ = 1, Wh.exports = sw()), Wh.exports;
}
var J0 = uw();
function hr(t3) {
  if (typeof t3 != "object" || t3 === null) return false;
  const r = Object.getPrototypeOf(t3);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t3) && !(Symbol.iterator in t3);
}
function tb(t3) {
  if (B.isValidElement(t3) || J0.isValidElementType(t3) || !hr(t3)) return t3;
  const r = {};
  return Object.keys(t3).forEach((o) => {
    r[o] = tb(t3[o]);
  }), r;
}
function Sn(t3, r, o = { clone: true }) {
  const l = o.clone ? { ...t3 } : t3;
  return hr(t3) && hr(r) && Object.keys(r).forEach((c) => {
    B.isValidElement(r[c]) || J0.isValidElementType(r[c]) ? l[c] = r[c] : hr(r[c]) && Object.prototype.hasOwnProperty.call(t3, c) && hr(t3[c]) ? l[c] = Sn(t3[c], r[c], o) : o.clone ? l[c] = hr(r[c]) ? tb(r[c]) : r[c] : l[c] = r[c];
  }), l;
}
const cw = (t3) => {
  const r = Object.keys(t3).map((o) => ({ key: o, val: t3[o] })) || [];
  return r.sort((o, l) => o.val - l.val), r.reduce((o, l) => ({ ...o, [l.key]: l.val }), {});
};
function fw(t3) {
  const { values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: o = "px", step: l = 5, ...c } = t3, f = cw(r), h = Object.keys(f);
  function m(E) {
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${o})`;
  }
  function _(E) {
    return `@media (max-width:${(typeof r[E] == "number" ? r[E] : E) - l / 100}${o})`;
  }
  function v(E, C) {
    const z = h.indexOf(C);
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${o}) and (max-width:${(z !== -1 && typeof r[h[z]] == "number" ? r[h[z]] : C) - l / 100}${o})`;
  }
  function b(E) {
    return h.indexOf(E) + 1 < h.length ? v(E, h[h.indexOf(E) + 1]) : m(E);
  }
  function S(E) {
    const C = h.indexOf(E);
    return C === 0 ? m(h[1]) : C === h.length - 1 ? _(h[C]) : v(E, h[h.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return { keys: h, values: f, up: m, down: _, between: v, only: b, not: S, unit: o, ...c };
}
function dw(t3, r) {
  if (!t3.containerQueries) return r;
  const o = Object.keys(r).filter((l) => l.startsWith("@container")).sort((l, c) => {
    var _a, _b2;
    const f = /min-width:\s*([0-9.]+)/;
    return +(((_a = l.match(f)) == null ? void 0 : _a[1]) || 0) - +(((_b2 = c.match(f)) == null ? void 0 : _b2[1]) || 0);
  });
  return o.length ? o.reduce((l, c) => {
    const f = r[c];
    return delete l[c], l[c] = f, l;
  }, { ...r }) : r;
}
function hw(t3, r) {
  return r === "@" || r.startsWith("@") && (t3.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/));
}
function pw(t3, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o) return null;
  const [, l, c] = o, f = Number.isNaN(+l) ? l || 0 : +l;
  return t3.containerQueries(c).up(f);
}
function mw(t3) {
  const r = (f, h) => f.replace("@media", h ? `@container ${h}` : "@container");
  function o(f, h) {
    f.up = (...m) => r(t3.breakpoints.up(...m), h), f.down = (...m) => r(t3.breakpoints.down(...m), h), f.between = (...m) => r(t3.breakpoints.between(...m), h), f.only = (...m) => r(t3.breakpoints.only(...m), h), f.not = (...m) => {
      const _ = r(t3.breakpoints.not(...m), h);
      return _.includes("not all and") ? _.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : _;
    };
  }
  const l = {}, c = (f) => (o(l, f), l);
  return o(c), { ...t3, containerQueries: c };
}
const gw = { borderRadius: 4 };
function ru(t3, r) {
  return r ? Sn(t3, r, { clone: false }) : t3;
}
const Ef = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, r_ = { keys: ["xs", "sm", "md", "lg", "xl"], up: (t3) => `@media (min-width:${Ef[t3]}px)` }, yw = { containerQueries: (t3) => ({ up: (r) => {
  let o = typeof r == "number" ? r : Ef[r] || r;
  return typeof o == "number" && (o = `${o}px`), t3 ? `@container ${t3} (min-width:${o})` : `@container (min-width:${o})`;
} }) };
function Fi(t3, r, o) {
  const l = t3.theme || {};
  if (Array.isArray(r)) {
    const f = l.breakpoints || r_;
    return r.reduce((h, m, _) => (h[f.up(f.keys[_])] = o(r[_]), h), {});
  }
  if (typeof r == "object") {
    const f = l.breakpoints || r_;
    return Object.keys(r).reduce((h, m) => {
      if (hw(f.keys, m)) {
        const _ = pw(l.containerQueries ? l : yw, m);
        _ && (h[_] = o(r[m], m));
      } else if (Object.keys(f.values || Ef).includes(m)) {
        const _ = f.up(m);
        h[_] = o(r[m], m);
      } else {
        const _ = m;
        h[_] = r[_];
      }
      return h;
    }, {});
  }
  return o(r);
}
function eb(t3 = {}) {
  var _a;
  return ((_a = t3.keys) == null ? void 0 : _a.reduce((o, l) => {
    const c = t3.up(l);
    return o[c] = {}, o;
  }, {})) || {};
}
function nb(t3, r) {
  return t3.reduce((o, l) => {
    const c = o[l];
    return (!c || Object.keys(c).length === 0) && delete o[l], o;
  }, r);
}
function vw(t3, ...r) {
  const o = eb(t3), l = [o, ...r].reduce((c, f) => Sn(c, f), {});
  return nb(Object.keys(o), l);
}
function _w(t3, r) {
  if (typeof t3 != "object") return {};
  const o = {}, l = Object.keys(r);
  return Array.isArray(t3) ? l.forEach((c, f) => {
    f < t3.length && (o[c] = true);
  }) : l.forEach((c) => {
    t3[c] != null && (o[c] = true);
  }), o;
}
function Jh({ values: t3, breakpoints: r, base: o }) {
  const l = o || _w(t3, r), c = Object.keys(l);
  if (c.length === 0) return t3;
  let f;
  return c.reduce((h, m, _) => (Array.isArray(t3) ? (h[m] = t3[_] != null ? t3[_] : t3[f], f = _) : typeof t3 == "object" ? (h[m] = t3[m] != null ? t3[m] : t3[f], f = m) : h[m] = t3, h), {});
}
function te(t3) {
  if (typeof t3 != "string") throw new Error(Qr(7));
  return t3.charAt(0).toUpperCase() + t3.slice(1);
}
function kf(t3, r, o = true) {
  if (!r || typeof r != "string") return null;
  if (t3 && t3.vars && o) {
    const l = `vars.${r}`.split(".").reduce((c, f) => c && c[f] ? c[f] : null, t3);
    if (l != null) return l;
  }
  return r.split(".").reduce((l, c) => l && l[c] != null ? l[c] : null, t3);
}
function gf(t3, r, o, l = o) {
  let c;
  return typeof t3 == "function" ? c = t3(o) : Array.isArray(t3) ? c = t3[o] || l : c = kf(t3, o) || l, r && (c = r(c, l, t3)), c;
}
function nn(t3) {
  const { prop: r, cssProperty: o = t3.prop, themeKey: l, transform: c } = t3, f = (h) => {
    if (h[r] == null) return null;
    const m = h[r], _ = h.theme, v = kf(_, l) || {};
    return Fi(h, m, (S) => {
      let E = gf(v, c, S);
      return S === E && typeof S == "string" && (E = gf(v, c, `${r}${S === "default" ? "" : te(S)}`, S)), o === false ? E : { [o]: E };
    });
  };
  return f.propTypes = {}, f.filterProps = [r], f;
}
function bw(t3) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = t3(o)), r[o]);
}
const xw = { m: "margin", p: "padding" }, Sw = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, o_ = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, ww = bw((t3) => {
  if (t3.length > 2) if (o_[t3]) t3 = o_[t3];
  else return [t3];
  const [r, o] = t3.split(""), l = xw[r], c = Sw[o] || "";
  return Array.isArray(c) ? c.map((f) => l + f) : [l + c];
}), im = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], rm = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...im, ...rm];
function bu(t3, r, o, l) {
  const c = kf(t3, r, true) ?? o;
  return typeof c == "number" || typeof c == "string" ? (f) => typeof f == "string" ? f : typeof c == "string" ? c.startsWith("var(") && f === 0 ? 0 : c.startsWith("var(") && f === 1 ? c : `calc(${f} * ${c})` : c * f : Array.isArray(c) ? (f) => {
    if (typeof f == "string") return f;
    const h = Math.abs(f), m = c[h];
    return f >= 0 ? m : typeof m == "number" ? -m : typeof m == "string" && m.startsWith("var(") ? `calc(-1 * ${m})` : `-${m}`;
  } : typeof c == "function" ? c : () => {
  };
}
function Mf(t3) {
  return bu(t3, "spacing", 8);
}
function za(t3, r) {
  return typeof r == "string" || r == null ? r : t3(r);
}
function Cw(t3, r) {
  return (o) => t3.reduce((l, c) => (l[c] = za(r, o), l), {});
}
function Tw(t3, r, o, l) {
  if (!r.includes(o)) return null;
  const c = ww(o), f = Cw(c, l), h = t3[o];
  return Fi(t3, h, f);
}
function ib(t3, r) {
  const o = Mf(t3.theme);
  return Object.keys(t3).map((l) => Tw(t3, r, l, o)).reduce(ru, {});
}
function Ke(t3) {
  return ib(t3, im);
}
Ke.propTypes = {};
Ke.filterProps = im;
function Qe(t3) {
  return ib(t3, rm);
}
Qe.propTypes = {};
Qe.filterProps = rm;
function rb(t3 = 8, r = Mf({ spacing: t3 })) {
  if (t3.mui) return t3;
  const o = (...l) => (l.length === 0 ? [1] : l).map((f) => {
    const h = r(f);
    return typeof h == "number" ? `${h}px` : h;
  }).join(" ");
  return o.mui = true, o;
}
function Af(...t3) {
  const r = t3.reduce((l, c) => (c.filterProps.forEach((f) => {
    l[f] = c;
  }), l), {}), o = (l) => Object.keys(l).reduce((c, f) => r[f] ? ru(c, r[f](l)) : c, {});
  return o.propTypes = {}, o.filterProps = t3.reduce((l, c) => l.concat(c.filterProps), []), o;
}
function Pi(t3) {
  return typeof t3 != "number" ? t3 : `${t3}px solid`;
}
function Di(t3, r) {
  return nn({ prop: t3, themeKey: "borders", transform: r });
}
const Ew = Di("border", Pi), kw = Di("borderTop", Pi), Mw = Di("borderRight", Pi), Aw = Di("borderBottom", Pi), Ow = Di("borderLeft", Pi), Rw = Di("borderColor"), zw = Di("borderTopColor"), Lw = Di("borderRightColor"), Pw = Di("borderBottomColor"), Bw = Di("borderLeftColor"), Dw = Di("outline", Pi), Nw = Di("outlineColor"), Of = (t3) => {
  if (t3.borderRadius !== void 0 && t3.borderRadius !== null) {
    const r = bu(t3.theme, "shape.borderRadius", 4), o = (l) => ({ borderRadius: za(r, l) });
    return Fi(t3, t3.borderRadius, o);
  }
  return null;
};
Of.propTypes = {};
Of.filterProps = ["borderRadius"];
Af(Ew, kw, Mw, Aw, Ow, Rw, zw, Lw, Pw, Bw, Of, Dw, Nw);
const Rf = (t3) => {
  if (t3.gap !== void 0 && t3.gap !== null) {
    const r = bu(t3.theme, "spacing", 8), o = (l) => ({ gap: za(r, l) });
    return Fi(t3, t3.gap, o);
  }
  return null;
};
Rf.propTypes = {};
Rf.filterProps = ["gap"];
const zf = (t3) => {
  if (t3.columnGap !== void 0 && t3.columnGap !== null) {
    const r = bu(t3.theme, "spacing", 8), o = (l) => ({ columnGap: za(r, l) });
    return Fi(t3, t3.columnGap, o);
  }
  return null;
};
zf.propTypes = {};
zf.filterProps = ["columnGap"];
const Lf = (t3) => {
  if (t3.rowGap !== void 0 && t3.rowGap !== null) {
    const r = bu(t3.theme, "spacing", 8), o = (l) => ({ rowGap: za(r, l) });
    return Fi(t3, t3.rowGap, o);
  }
  return null;
};
Lf.propTypes = {};
Lf.filterProps = ["rowGap"];
const Iw = nn({ prop: "gridColumn" }), Hw = nn({ prop: "gridRow" }), jw = nn({ prop: "gridAutoFlow" }), Uw = nn({ prop: "gridAutoColumns" }), Zw = nn({ prop: "gridAutoRows" }), $w = nn({ prop: "gridTemplateColumns" }), qw = nn({ prop: "gridTemplateRows" }), Vw = nn({ prop: "gridTemplateAreas" }), Fw = nn({ prop: "gridArea" });
Af(Rf, zf, Lf, Iw, Hw, jw, Uw, Zw, $w, qw, Vw, Fw);
function Ll(t3, r) {
  return r === "grey" ? r : t3;
}
const Gw = nn({ prop: "color", themeKey: "palette", transform: Ll }), Yw = nn({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: Ll }), Xw = nn({ prop: "backgroundColor", themeKey: "palette", transform: Ll });
Af(Gw, Yw, Xw);
function _i(t3) {
  return t3 <= 1 && t3 !== 0 ? `${t3 * 100}%` : t3;
}
const Kw = nn({ prop: "width", transform: _i }), om = (t3) => {
  if (t3.maxWidth !== void 0 && t3.maxWidth !== null) {
    const r = (o) => {
      var _a, _b2, _c, _d, _e;
      const l = ((_c = (_b2 = (_a = t3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c[o]) || Ef[o];
      return l ? ((_e = (_d = t3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${l}${t3.theme.breakpoints.unit}` } : { maxWidth: l } : { maxWidth: _i(o) };
    };
    return Fi(t3, t3.maxWidth, r);
  }
  return null;
};
om.filterProps = ["maxWidth"];
const Qw = nn({ prop: "minWidth", transform: _i }), Ww = nn({ prop: "height", transform: _i }), Jw = nn({ prop: "maxHeight", transform: _i }), tC = nn({ prop: "minHeight", transform: _i });
nn({ prop: "size", cssProperty: "width", transform: _i });
nn({ prop: "size", cssProperty: "height", transform: _i });
const eC = nn({ prop: "boxSizing" });
Af(Kw, om, Qw, Ww, Jw, tC, eC);
const xu = { border: { themeKey: "borders", transform: Pi }, borderTop: { themeKey: "borders", transform: Pi }, borderRight: { themeKey: "borders", transform: Pi }, borderBottom: { themeKey: "borders", transform: Pi }, borderLeft: { themeKey: "borders", transform: Pi }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: Pi }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Of }, color: { themeKey: "palette", transform: Ll }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: Ll }, backgroundColor: { themeKey: "palette", transform: Ll }, p: { style: Qe }, pt: { style: Qe }, pr: { style: Qe }, pb: { style: Qe }, pl: { style: Qe }, px: { style: Qe }, py: { style: Qe }, padding: { style: Qe }, paddingTop: { style: Qe }, paddingRight: { style: Qe }, paddingBottom: { style: Qe }, paddingLeft: { style: Qe }, paddingX: { style: Qe }, paddingY: { style: Qe }, paddingInline: { style: Qe }, paddingInlineStart: { style: Qe }, paddingInlineEnd: { style: Qe }, paddingBlock: { style: Qe }, paddingBlockStart: { style: Qe }, paddingBlockEnd: { style: Qe }, m: { style: Ke }, mt: { style: Ke }, mr: { style: Ke }, mb: { style: Ke }, ml: { style: Ke }, mx: { style: Ke }, my: { style: Ke }, margin: { style: Ke }, marginTop: { style: Ke }, marginRight: { style: Ke }, marginBottom: { style: Ke }, marginLeft: { style: Ke }, marginX: { style: Ke }, marginY: { style: Ke }, marginInline: { style: Ke }, marginInlineStart: { style: Ke }, marginInlineEnd: { style: Ke }, marginBlock: { style: Ke }, marginBlockStart: { style: Ke }, marginBlockEnd: { style: Ke }, displayPrint: { cssProperty: false, transform: (t3) => ({ "@media print": { display: t3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Rf }, rowGap: { style: Lf }, columnGap: { style: zf }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: _i }, maxWidth: { style: om }, minWidth: { transform: _i }, height: { transform: _i }, maxHeight: { transform: _i }, minHeight: { transform: _i }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function nC(...t3) {
  const r = t3.reduce((l, c) => l.concat(Object.keys(c)), []), o = new Set(r);
  return t3.every((l) => o.size === Object.keys(l).length);
}
function iC(t3, r) {
  return typeof t3 == "function" ? t3(r) : t3;
}
function rC() {
  function t3(o, l, c, f) {
    const h = { [o]: l, theme: c }, m = f[o];
    if (!m) return { [o]: l };
    const { cssProperty: _ = o, themeKey: v, transform: b, style: S } = m;
    if (l == null) return null;
    if (v === "typography" && l === "inherit") return { [o]: l };
    const E = kf(c, v) || {};
    return S ? S(h) : Fi(h, l, (z) => {
      let A = gf(E, b, z);
      return z === A && typeof z == "string" && (A = gf(E, b, `${o}${z === "default" ? "" : te(z)}`, z)), _ === false ? A : { [_]: A };
    });
  }
  function r(o) {
    const { sx: l, theme: c = {} } = o || {};
    if (!l) return null;
    const f = c.unstable_sxConfig ?? xu;
    function h(m) {
      let _ = m;
      if (typeof m == "function") _ = m(c);
      else if (typeof m != "object") return m;
      if (!_) return null;
      const v = eb(c.breakpoints), b = Object.keys(v);
      let S = v;
      return Object.keys(_).forEach((E) => {
        const C = iC(_[E], c);
        if (C != null) if (typeof C == "object") if (f[E]) S = ru(S, t3(E, C, c, f));
        else {
          const z = Fi({ theme: c }, C, (A) => ({ [E]: A }));
          nC(z, C) ? S[E] = r({ sx: C, theme: c }) : S = ru(S, z);
        }
        else S = ru(S, t3(E, C, c, f));
      }), dw(c, nb(b, S));
    }
    return Array.isArray(l) ? l.map(h) : h(l);
  }
  return r;
}
const Yo = rC();
Yo.filterProps = ["sx"];
function oC(t3, r) {
  var _a;
  const o = this;
  if (o.vars) {
    if (!((_a = o.colorSchemes) == null ? void 0 : _a[t3]) || typeof o.getColorSchemeSelector != "function") return {};
    let l = o.getColorSchemeSelector(t3);
    return l === "&" ? r : ((l.includes("data-") || l.includes(".")) && (l = `*:where(${l.replace(/\s*&$/, "")}) &`), { [l]: r });
  }
  return o.palette.mode === t3 ? r : {};
}
function Pf(t3 = {}, ...r) {
  const { breakpoints: o = {}, palette: l = {}, spacing: c, shape: f = {}, ...h } = t3, m = fw(o), _ = rb(c);
  let v = Sn({ breakpoints: m, direction: "ltr", components: {}, palette: { mode: "light", ...l }, spacing: _, shape: { ...gw, ...f } }, h);
  return v = mw(v), v.applyStyles = oC, v = r.reduce((b, S) => Sn(b, S), v), v.unstable_sxConfig = { ...xu, ...h == null ? void 0 : h.unstable_sxConfig }, v.unstable_sx = function(S) {
    return Yo({ sx: S, theme: this });
  }, v;
}
function aC(t3) {
  return Object.keys(t3).length === 0;
}
function ob(t3 = null) {
  const r = B.useContext(vu);
  return !r || aC(r) ? t3 : r;
}
const lC = Pf();
function Bf(t3 = lC) {
  return ob(t3);
}
function sC({ styles: t3, themeId: r, defaultTheme: o = {} }) {
  const l = Bf(o), c = typeof t3 == "function" ? t3(r && l[r] || l) : t3;
  return F.jsx(Q0, { styles: c });
}
const uC = (t3) => {
  var _a;
  const r = { systemProps: {}, otherProps: {} }, o = ((_a = t3 == null ? void 0 : t3.theme) == null ? void 0 : _a.unstable_sxConfig) ?? xu;
  return Object.keys(t3).forEach((l) => {
    o[l] ? r.systemProps[l] = t3[l] : r.otherProps[l] = t3[l];
  }), r;
};
function am(t3) {
  const { sx: r, ...o } = t3, { systemProps: l, otherProps: c } = uC(o);
  let f;
  return Array.isArray(r) ? f = [l, ...r] : typeof r == "function" ? f = (...h) => {
    const m = r(...h);
    return hr(m) ? { ...l, ...m } : l;
  } : f = { ...l, ...r }, { ...c, sx: f };
}
const a_ = (t3) => t3, cC = () => {
  let t3 = a_;
  return { configure(r) {
    t3 = r;
  }, generate(r) {
    return t3(r);
  }, reset() {
    t3 = a_;
  } };
}, ab = cC();
function lb(t3) {
  var r, o, l = "";
  if (typeof t3 == "string" || typeof t3 == "number") l += t3;
  else if (typeof t3 == "object") if (Array.isArray(t3)) {
    var c = t3.length;
    for (r = 0; r < c; r++) t3[r] && (o = lb(t3[r])) && (l && (l += " "), l += o);
  } else for (o in t3) t3[o] && (l && (l += " "), l += o);
  return l;
}
function le() {
  for (var t3, r, o = 0, l = "", c = arguments.length; o < c; o++) (t3 = arguments[o]) && (r = lb(t3)) && (l && (l += " "), l += r);
  return l;
}
function fC(t3 = {}) {
  const { themeId: r, defaultTheme: o, defaultClassName: l = "MuiBox-root", generateClassName: c } = t3, f = W0("div", { shouldForwardProp: (m) => m !== "theme" && m !== "sx" && m !== "as" })(Yo);
  return B.forwardRef(function(_, v) {
    const b = Bf(o), { className: S, component: E = "div", ...C } = am(_);
    return F.jsx(f, { as: E, ref: v, className: le(S, c ? c(l) : l), theme: r && b[r] || b, ...C });
  });
}
const dC = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function rn(t3, r, o = "Mui") {
  const l = dC[r];
  return l ? `${o}-${l}` : `${ab.generate(t3)}-${r}`;
}
function Ze(t3, r, o = "Mui") {
  const l = {};
  return r.forEach((c) => {
    l[c] = rn(t3, c, o);
  }), l;
}
function sb(t3) {
  const { variants: r, ...o } = t3, l = { variants: r, style: e_(o), isProcessed: true };
  return l.style === o || r && r.forEach((c) => {
    typeof c.style != "function" && (c.style = e_(c.style));
  }), l;
}
const hC = Pf();
function tp(t3) {
  return t3 !== "ownerState" && t3 !== "theme" && t3 !== "sx" && t3 !== "as";
}
function pC(t3) {
  return t3 ? (r, o) => o[t3] : null;
}
function mC(t3, r, o) {
  t3.theme = yC(t3.theme) ? o : t3.theme[r] || t3.theme;
}
function ff(t3, r) {
  const o = typeof r == "function" ? r(t3) : r;
  if (Array.isArray(o)) return o.flatMap((l) => ff(t3, l));
  if (Array.isArray(o == null ? void 0 : o.variants)) {
    let l;
    if (o.isProcessed) l = o.style;
    else {
      const { variants: c, ...f } = o;
      l = f;
    }
    return ub(t3, o.variants, [l]);
  }
  return (o == null ? void 0 : o.isProcessed) ? o.style : o;
}
function ub(t3, r, o = []) {
  var _a;
  let l;
  t: for (let c = 0; c < r.length; c += 1) {
    const f = r[c];
    if (typeof f.props == "function") {
      if (l ?? (l = { ...t3, ...t3.ownerState, ownerState: t3.ownerState }), !f.props(l)) continue;
    } else for (const h in f.props) if (t3[h] !== f.props[h] && ((_a = t3.ownerState) == null ? void 0 : _a[h]) !== f.props[h]) continue t;
    typeof f.style == "function" ? (l ?? (l = { ...t3, ...t3.ownerState, ownerState: t3.ownerState }), o.push(f.style(l))) : o.push(f.style);
  }
  return o;
}
function cb(t3 = {}) {
  const { themeId: r, defaultTheme: o = hC, rootShouldForwardProp: l = tp, slotShouldForwardProp: c = tp } = t3;
  function f(m) {
    mC(m, r, o);
  }
  return (m, _ = {}) => {
    lw(m, (D) => D.filter((I) => I !== Yo));
    const { name: v, slot: b, skipVariantsResolver: S, skipSx: E, overridesResolver: C = pC(_C(b)), ...z } = _, A = S !== void 0 ? S : b && b !== "Root" && b !== "root" || false, $ = E || false;
    let N = tp;
    b === "Root" || b === "root" ? N = l : b ? N = c : vC(m) && (N = void 0);
    const G = W0(m, { shouldForwardProp: N, label: gC(), ...z }), P = (D) => {
      if (typeof D == "function" && D.__emotion_real !== D) return function(tt) {
        return ff(tt, D);
      };
      if (hr(D)) {
        const I = sb(D);
        return I.variants ? function(et) {
          return ff(et, I);
        } : I.style;
      }
      return D;
    }, U = (...D) => {
      const I = [], tt = D.map(P), et = [];
      if (I.push(f), v && C && et.push(function(X) {
        var _a, _b2;
        const at = (_b2 = (_a = X.theme.components) == null ? void 0 : _a[v]) == null ? void 0 : _b2.styleOverrides;
        if (!at) return null;
        const st = {};
        for (const Z in at) st[Z] = ff(X, at[Z]);
        return C(X, st);
      }), v && !A && et.push(function(X) {
        var _a, _b2, _c;
        const at = (_c = (_b2 = (_a = X.theme) == null ? void 0 : _a.components) == null ? void 0 : _b2[v]) == null ? void 0 : _c.variants;
        return at ? ub(X, at) : null;
      }), $ || et.push(Yo), Array.isArray(tt[0])) {
        const q = tt.shift(), X = new Array(I.length).fill(""), ft = new Array(et.length).fill("");
        let at;
        at = [...X, ...q, ...ft], at.raw = [...X, ...q.raw, ...ft], I.unshift(at);
      }
      const lt = [...I, ...tt, ...et], M = G(...lt);
      return m.muiName && (M.muiName = m.muiName), M;
    };
    return G.withConfig && (U.withConfig = G.withConfig), U;
  };
}
function gC(t3, r) {
  return void 0;
}
function yC(t3) {
  for (const r in t3) return false;
  return true;
}
function vC(t3) {
  return typeof t3 == "string" && t3.charCodeAt(0) > 96;
}
function _C(t3) {
  return t3 && t3.charAt(0).toLowerCase() + t3.slice(1);
}
const bC = cb();
function du(t3, r) {
  const o = { ...r };
  for (const l in t3) if (Object.prototype.hasOwnProperty.call(t3, l)) {
    const c = l;
    if (c === "components" || c === "slots") o[c] = { ...t3[c], ...o[c] };
    else if (c === "componentsProps" || c === "slotProps") {
      const f = t3[c], h = r[c];
      if (!h) o[c] = f || {};
      else if (!f) o[c] = h;
      else {
        o[c] = { ...h };
        for (const m in f) if (Object.prototype.hasOwnProperty.call(f, m)) {
          const _ = m;
          o[c][_] = du(f[_], h[_]);
        }
      }
    } else o[c] === void 0 && (o[c] = t3[c]);
  }
  return o;
}
function xC(t3) {
  const { theme: r, name: o, props: l } = t3;
  return !r || !r.components || !r.components[o] || !r.components[o].defaultProps ? l : du(r.components[o].defaultProps, l);
}
function SC({ props: t3, name: r, defaultTheme: o, themeId: l }) {
  let c = Bf(o);
  return l && (c = c[l] || c), xC({ theme: c, name: r, props: t3 });
}
const Wr = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
function wC(t3, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(t3, o));
}
function lm(t3, r = 0, o = 1) {
  return wC(t3, r, o);
}
function CC(t3) {
  t3 = t3.slice(1);
  const r = new RegExp(`.{1,${t3.length >= 6 ? 2 : 1}}`, "g");
  let o = t3.match(r);
  return o && o[0].length === 1 && (o = o.map((l) => l + l)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((l, c) => c < 3 ? parseInt(l, 16) : Math.round(parseInt(l, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xo(t3) {
  if (t3.type) return t3;
  if (t3.charAt(0) === "#") return Xo(CC(t3));
  const r = t3.indexOf("("), o = t3.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o)) throw new Error(Qr(9, t3));
  let l = t3.substring(r + 1, t3.length - 1), c;
  if (o === "color") {
    if (l = l.split(" "), c = l.shift(), l.length === 4 && l[3].charAt(0) === "/" && (l[3] = l[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(c)) throw new Error(Qr(10, c));
  } else l = l.split(",");
  return l = l.map((f) => parseFloat(f)), { type: o, values: l, colorSpace: c };
}
const TC = (t3) => {
  const r = Xo(t3);
  return r.values.slice(0, 3).map((o, l) => r.type.includes("hsl") && l !== 0 ? `${o}%` : o).join(" ");
}, tu = (t3, r) => {
  try {
    return TC(t3);
  } catch {
    return t3;
  }
};
function Df(t3) {
  const { type: r, colorSpace: o } = t3;
  let { values: l } = t3;
  return r.includes("rgb") ? l = l.map((c, f) => f < 3 ? parseInt(c, 10) : c) : r.includes("hsl") && (l[1] = `${l[1]}%`, l[2] = `${l[2]}%`), r.includes("color") ? l = `${o} ${l.join(" ")}` : l = `${l.join(", ")}`, `${r}(${l})`;
}
function fb(t3) {
  t3 = Xo(t3);
  const { values: r } = t3, o = r[0], l = r[1] / 100, c = r[2] / 100, f = l * Math.min(c, 1 - c), h = (v, b = (v + o / 30) % 12) => c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let m = "rgb";
  const _ = [Math.round(h(0) * 255), Math.round(h(8) * 255), Math.round(h(4) * 255)];
  return t3.type === "hsla" && (m += "a", _.push(r[3])), Df({ type: m, values: _ });
}
function Tp(t3) {
  t3 = Xo(t3);
  let r = t3.type === "hsl" || t3.type === "hsla" ? Xo(fb(t3)).values : t3.values;
  return r = r.map((o) => (t3.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function EC(t3, r) {
  const o = Tp(t3), l = Tp(r);
  return (Math.max(o, l) + 0.05) / (Math.min(o, l) + 0.05);
}
function ni(t3, r) {
  return t3 = Xo(t3), r = lm(r), (t3.type === "rgb" || t3.type === "hsl") && (t3.type += "a"), t3.type === "color" ? t3.values[3] = `/${r}` : t3.values[3] = r, Df(t3);
}
function Qc(t3, r, o) {
  try {
    return ni(t3, r);
  } catch {
    return t3;
  }
}
function sm(t3, r) {
  if (t3 = Xo(t3), r = lm(r), t3.type.includes("hsl")) t3.values[2] *= 1 - r;
  else if (t3.type.includes("rgb") || t3.type.includes("color")) for (let o = 0; o < 3; o += 1) t3.values[o] *= 1 - r;
  return Df(t3);
}
function Ae(t3, r, o) {
  try {
    return sm(t3, r);
  } catch {
    return t3;
  }
}
function um(t3, r) {
  if (t3 = Xo(t3), r = lm(r), t3.type.includes("hsl")) t3.values[2] += (100 - t3.values[2]) * r;
  else if (t3.type.includes("rgb")) for (let o = 0; o < 3; o += 1) t3.values[o] += (255 - t3.values[o]) * r;
  else if (t3.type.includes("color")) for (let o = 0; o < 3; o += 1) t3.values[o] += (1 - t3.values[o]) * r;
  return Df(t3);
}
function Oe(t3, r, o) {
  try {
    return um(t3, r);
  } catch {
    return t3;
  }
}
function kC(t3, r = 0.15) {
  return Tp(t3) > 0.5 ? sm(t3, r) : um(t3, r);
}
function Wc(t3, r, o) {
  try {
    return kC(t3, r);
  } catch {
    return t3;
  }
}
const db = B.createContext(null);
function cm() {
  return B.useContext(db);
}
const MC = typeof Symbol == "function" && Symbol.for, AC = MC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function OC(t3, r) {
  return typeof r == "function" ? r(t3) : { ...t3, ...r };
}
function RC(t3) {
  const { children: r, theme: o } = t3, l = cm(), c = B.useMemo(() => {
    const f = l === null ? { ...o } : OC(l, o);
    return f != null && (f[AC] = l !== null), f;
  }, [o, l]);
  return F.jsx(db.Provider, { value: c, children: r });
}
const hb = B.createContext();
function zC({ value: t3, ...r }) {
  return F.jsx(hb.Provider, { value: t3 ?? true, ...r });
}
const LC = () => B.useContext(hb) ?? false, pb = B.createContext(void 0);
function PC({ value: t3, children: r }) {
  return F.jsx(pb.Provider, { value: t3, children: r });
}
function BC(t3) {
  const { theme: r, name: o, props: l } = t3;
  if (!r || !r.components || !r.components[o]) return l;
  const c = r.components[o];
  return c.defaultProps ? du(c.defaultProps, l) : !c.styleOverrides && !c.variants ? du(c, l) : l;
}
function DC({ props: t3, name: r }) {
  const o = B.useContext(pb);
  return BC({ props: t3, name: r, theme: { components: o } });
}
const l_ = {};
function s_(t3, r, o, l = false) {
  return B.useMemo(() => {
    const c = t3 && r[t3] || r;
    if (typeof o == "function") {
      const f = o(c), h = t3 ? { ...r, [t3]: f } : f;
      return l ? () => h : h;
    }
    return t3 ? { ...r, [t3]: o } : { ...r, ...o };
  }, [t3, r, o, l]);
}
function mb(t3) {
  const { children: r, theme: o, themeId: l } = t3, c = ob(l_), f = cm() || l_, h = s_(l, c, o), m = s_(l, f, o, true), _ = (l ? h[l] : h).direction === "rtl";
  return F.jsx(RC, { theme: m, children: F.jsx(vu.Provider, { value: h, children: F.jsx(zC, { value: _, children: F.jsx(PC, { value: l ? h[l].components : h.components, children: r }) }) }) });
}
const u_ = { theme: void 0 };
function NC(t3) {
  let r, o;
  return function(c) {
    let f = r;
    return (f === void 0 || c.theme !== o) && (u_.theme = c.theme, f = sb(t3(u_)), r = f, o = c.theme), f;
  };
}
const fm = "mode", dm = "color-scheme", IC = "data-color-scheme";
function HC(t3) {
  const { defaultMode: r = "system", defaultLightColorScheme: o = "light", defaultDarkColorScheme: l = "dark", modeStorageKey: c = fm, colorSchemeStorageKey: f = dm, attribute: h = IC, colorSchemeNode: m = "document.documentElement", nonce: _ } = t3 || {};
  let v = "", b = h;
  if (h === "class" && (b = ".%s"), h === "data" && (b = "[data-%s]"), b.startsWith(".")) {
    const E = b.substring(1);
    v += `${m}.classList.remove('${E}'.replace('%s', light), '${E}'.replace('%s', dark));
      ${m}.classList.add('${E}'.replace('%s', colorScheme));`;
  }
  const S = b.match(/\[([^\]]+)\]/);
  if (S) {
    const [E, C] = S[1].split("=");
    C || (v += `${m}.removeAttribute('${E}'.replace('%s', light));
      ${m}.removeAttribute('${E}'.replace('%s', dark));`), v += `
      ${m}.setAttribute('${E}'.replace('%s', colorScheme), ${C ? `${C}.replace('%s', colorScheme)` : '""'});`;
  } else v += `${m}.setAttribute('${b}', colorScheme);`;
  return F.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? _ : "", dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${c}') || '${r}';
  const dark = localStorage.getItem('${f}-dark') || '${l}';
  const light = localStorage.getItem('${f}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${v}
  }
} catch(e){}})();` } }, "mui-color-scheme-init");
}
function jC() {
}
const UC = ({ key: t3, storageWindow: r }) => (!r && typeof window < "u" && (r = window), { get(o) {
  if (typeof window > "u") return;
  if (!r) return o;
  let l;
  try {
    l = r.localStorage.getItem(t3);
  } catch {
  }
  return l || o;
}, set: (o) => {
  if (r) try {
    r.localStorage.setItem(t3, o);
  } catch {
  }
}, subscribe: (o) => {
  if (!r) return jC;
  const l = (c) => {
    const f = c.newValue;
    c.key === t3 && o(f);
  };
  return r.addEventListener("storage", l), () => {
    r.removeEventListener("storage", l);
  };
} });
function ep() {
}
function c_(t3) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && t3 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function gb(t3, r) {
  if (t3.mode === "light" || t3.mode === "system" && t3.systemMode === "light") return r("light");
  if (t3.mode === "dark" || t3.mode === "system" && t3.systemMode === "dark") return r("dark");
}
function ZC(t3) {
  return gb(t3, (r) => {
    if (r === "light") return t3.lightColorScheme;
    if (r === "dark") return t3.darkColorScheme;
  });
}
function $C(t3) {
  const { defaultMode: r = "light", defaultLightColorScheme: o, defaultDarkColorScheme: l, supportedColorSchemes: c = [], modeStorageKey: f = fm, colorSchemeStorageKey: h = dm, storageWindow: m = typeof window > "u" ? void 0 : window, storageManager: _ = UC, noSsr: v = false } = t3, b = c.join(","), S = c.length > 1, E = B.useMemo(() => _ == null ? void 0 : _({ key: f, storageWindow: m }), [_, f, m]), C = B.useMemo(() => _ == null ? void 0 : _({ key: `${h}-light`, storageWindow: m }), [_, h, m]), z = B.useMemo(() => _ == null ? void 0 : _({ key: `${h}-dark`, storageWindow: m }), [_, h, m]), [A, $] = B.useState(() => {
    const et = (E == null ? void 0 : E.get(r)) || r, lt = (C == null ? void 0 : C.get(o)) || o, M = (z == null ? void 0 : z.get(l)) || l;
    return { mode: et, systemMode: c_(et), lightColorScheme: lt, darkColorScheme: M };
  }), [N, G] = B.useState(v || !S);
  B.useEffect(() => {
    G(true);
  }, []);
  const P = ZC(A), U = B.useCallback((et) => {
    $((lt) => {
      if (et === lt.mode) return lt;
      const M = et ?? r;
      return E == null ? void 0 : E.set(M), { ...lt, mode: M, systemMode: c_(M) };
    });
  }, [E, r]), D = B.useCallback((et) => {
    et ? typeof et == "string" ? et && !b.includes(et) ? console.error(`\`${et}\` does not exist in \`theme.colorSchemes\`.`) : $((lt) => {
      const M = { ...lt };
      return gb(lt, (q) => {
        q === "light" && (C == null ? void 0 : C.set(et), M.lightColorScheme = et), q === "dark" && (z == null ? void 0 : z.set(et), M.darkColorScheme = et);
      }), M;
    }) : $((lt) => {
      const M = { ...lt }, q = et.light === null ? o : et.light, X = et.dark === null ? l : et.dark;
      return q && (b.includes(q) ? (M.lightColorScheme = q, C == null ? void 0 : C.set(q)) : console.error(`\`${q}\` does not exist in \`theme.colorSchemes\`.`)), X && (b.includes(X) ? (M.darkColorScheme = X, z == null ? void 0 : z.set(X)) : console.error(`\`${X}\` does not exist in \`theme.colorSchemes\`.`)), M;
    }) : $((lt) => (C == null ? void 0 : C.set(o), z == null ? void 0 : z.set(l), { ...lt, lightColorScheme: o, darkColorScheme: l }));
  }, [b, C, z, o, l]), I = B.useCallback((et) => {
    A.mode === "system" && $((lt) => {
      const M = (et == null ? void 0 : et.matches) ? "dark" : "light";
      return lt.systemMode === M ? lt : { ...lt, systemMode: M };
    });
  }, [A.mode]), tt = B.useRef(I);
  return tt.current = I, B.useEffect(() => {
    if (typeof window.matchMedia != "function" || !S) return;
    const et = (...M) => tt.current(...M), lt = window.matchMedia("(prefers-color-scheme: dark)");
    return lt.addListener(et), et(lt), () => {
      lt.removeListener(et);
    };
  }, [S]), B.useEffect(() => {
    if (S) {
      const et = (E == null ? void 0 : E.subscribe((q) => {
        (!q || ["light", "dark", "system"].includes(q)) && U(q || r);
      })) || ep, lt = (C == null ? void 0 : C.subscribe((q) => {
        (!q || b.match(q)) && D({ light: q });
      })) || ep, M = (z == null ? void 0 : z.subscribe((q) => {
        (!q || b.match(q)) && D({ dark: q });
      })) || ep;
      return () => {
        et(), lt(), M();
      };
    }
  }, [D, U, b, r, m, S, E, C, z]), { ...A, mode: N ? A.mode : void 0, systemMode: N ? A.systemMode : void 0, colorScheme: N ? P : void 0, setMode: U, setColorScheme: D };
}
const qC = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function VC(t3) {
  const { themeId: r, theme: o = {}, modeStorageKey: l = fm, colorSchemeStorageKey: c = dm, disableTransitionOnChange: f = false, defaultColorScheme: h, resolveTheme: m } = t3, _ = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, v = B.createContext(void 0), b = () => B.useContext(v) || _, S = {}, E = {};
  function C(N) {
    var _a, _b2, _c, _d;
    const { children: G, theme: P, modeStorageKey: U = l, colorSchemeStorageKey: D = c, disableTransitionOnChange: I = f, storageManager: tt, storageWindow: et = typeof window > "u" ? void 0 : window, documentNode: lt = typeof document > "u" ? void 0 : document, colorSchemeNode: M = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: q = false, disableStyleSheetGeneration: X = false, defaultMode: ft = "system", forceThemeRerender: at = false, noSsr: st } = N, Z = B.useRef(false), ct = cm(), ut = B.useContext(v), gt = !!ut && !q, w = B.useMemo(() => P || (typeof o == "function" ? o() : o), [P]), W = w[r], pt = W || w, { colorSchemes: R = S, components: bt = E, cssVarPrefix: wt } = pt, _t = Object.keys(R).filter((rt) => !!R[rt]).join(","), Dt = B.useMemo(() => _t.split(","), [_t]), Lt = typeof h == "string" ? h : h.light, re = typeof h == "string" ? h : h.dark, Bt = R[Lt] && R[re] ? ft : ((_b2 = (_a = R[pt.defaultColorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || ((_c = pt.palette) == null ? void 0 : _c.mode), { mode: Vt, setMode: Kt, systemMode: Re, lightColorScheme: Ft, darkColorScheme: fe, colorScheme: We, setColorScheme: se } = $C({ supportedColorSchemes: Dt, defaultLightColorScheme: Lt, defaultDarkColorScheme: re, modeStorageKey: U, colorSchemeStorageKey: D, defaultMode: Bt, storageManager: tt, storageWindow: et, noSsr: st });
    let _e = Vt, Se = We;
    gt && (_e = ut.mode, Se = ut.colorScheme);
    let ke = Se || pt.defaultColorScheme;
    pt.vars && !at && (ke = pt.defaultColorScheme);
    const de = B.useMemo(() => {
      var _a2;
      const rt = ((_a2 = pt.generateThemeVars) == null ? void 0 : _a2.call(pt)) || pt.vars, ht = { ...pt, components: bt, colorSchemes: R, cssVarPrefix: wt, vars: rt };
      if (typeof ht.generateSpacing == "function" && (ht.spacing = ht.generateSpacing()), ke) {
        const Ct = R[ke];
        Ct && typeof Ct == "object" && Object.keys(Ct).forEach((Et) => {
          Ct[Et] && typeof Ct[Et] == "object" ? ht[Et] = { ...ht[Et], ...Ct[Et] } : ht[Et] = Ct[Et];
        });
      }
      return m ? m(ht) : ht;
    }, [pt, ke, bt, R, wt]), Ot = pt.colorSchemeSelector;
    Wr(() => {
      if (Se && M && Ot && Ot !== "media") {
        const rt = Ot;
        let ht = Ot;
        if (rt === "class" && (ht = ".%s"), rt === "data" && (ht = "[data-%s]"), (rt == null ? void 0 : rt.startsWith("data-")) && !rt.includes("%s") && (ht = `[${rt}="%s"]`), ht.startsWith(".")) M.classList.remove(...Dt.map((Ct) => ht.substring(1).replace("%s", Ct))), M.classList.add(ht.substring(1).replace("%s", Se));
        else {
          const Ct = ht.replace("%s", Se).match(/\[([^\]]+)\]/);
          if (Ct) {
            const [Et, qt] = Ct[1].split("=");
            qt || Dt.forEach((Gt) => {
              M.removeAttribute(Et.replace(Se, Gt));
            }), M.setAttribute(Et, qt ? qt.replace(/"|'/g, "") : "");
          } else M.setAttribute(ht, Se);
        }
      }
    }, [Se, Ot, M, Dt]), B.useEffect(() => {
      let rt;
      if (I && Z.current && lt) {
        const ht = lt.createElement("style");
        ht.appendChild(lt.createTextNode(qC)), lt.head.appendChild(ht), window.getComputedStyle(lt.body), rt = setTimeout(() => {
          lt.head.removeChild(ht);
        }, 1);
      }
      return () => {
        clearTimeout(rt);
      };
    }, [Se, I, lt]), B.useEffect(() => (Z.current = true, () => {
      Z.current = false;
    }), []);
    const Rn = B.useMemo(() => ({ allColorSchemes: Dt, colorScheme: Se, darkColorScheme: fe, lightColorScheme: Ft, mode: _e, setColorScheme: se, setMode: Kt, systemMode: Re }), [Dt, Se, fe, Ft, _e, se, Kt, Re, de.colorSchemeSelector]);
    let $e = true;
    (X || pt.cssVariables === false || gt && (ct == null ? void 0 : ct.cssVarPrefix) === wt) && ($e = false);
    const Un = F.jsxs(B.Fragment, { children: [F.jsx(mb, { themeId: W ? r : void 0, theme: de, children: G }), $e && F.jsx(Q0, { styles: ((_d = de.generateStyleSheets) == null ? void 0 : _d.call(de)) || [] })] });
    return gt ? Un : F.jsx(v.Provider, { value: Rn, children: Un });
  }
  const z = typeof h == "string" ? h : h.light, A = typeof h == "string" ? h : h.dark;
  return { CssVarsProvider: C, useColorScheme: b, getInitColorSchemeScript: (N) => HC({ colorSchemeStorageKey: c, defaultLightColorScheme: z, defaultDarkColorScheme: A, modeStorageKey: l, ...N }) };
}
function FC(t3 = "") {
  function r(...l) {
    if (!l.length) return "";
    const c = l[0];
    return typeof c == "string" && !c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${t3 ? `${t3}-` : ""}${c}${r(...l.slice(1))})` : `, ${c}`;
  }
  return (l, ...c) => `var(--${t3 ? `${t3}-` : ""}${l}${r(...c)})`;
}
const f_ = (t3, r, o, l = []) => {
  let c = t3;
  r.forEach((f, h) => {
    h === r.length - 1 ? Array.isArray(c) ? c[Number(f)] = o : c && typeof c == "object" && (c[f] = o) : c && typeof c == "object" && (c[f] || (c[f] = l.includes(f) ? [] : {}), c = c[f]);
  });
}, GC = (t3, r, o) => {
  function l(c, f = [], h = []) {
    Object.entries(c).forEach(([m, _]) => {
      (!o || o && !o([...f, m])) && _ != null && (typeof _ == "object" && Object.keys(_).length > 0 ? l(_, [...f, m], Array.isArray(_) ? [...h, m] : h) : r([...f, m], _, h));
    });
  }
  l(t3);
}, YC = (t3, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((l) => t3.includes(l)) || t3[t3.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function np(t3, r) {
  const { prefix: o, shouldSkipGeneratingVar: l } = r || {}, c = {}, f = {}, h = {};
  return GC(t3, (m, _, v) => {
    if ((typeof _ == "string" || typeof _ == "number") && (!l || !l(m, _))) {
      const b = `--${o ? `${o}-` : ""}${m.join("-")}`, S = YC(m, _);
      Object.assign(c, { [b]: S }), f_(f, m, `var(${b})`, v), f_(h, m, `var(${b}, ${S})`, v);
    }
  }, (m) => m[0] === "vars"), { css: c, vars: f, varsWithDefaults: h };
}
function XC(t3, r = {}) {
  const { getSelector: o = $, disableCssColorScheme: l, colorSchemeSelector: c } = r, { colorSchemes: f = {}, components: h, defaultColorScheme: m = "light", ..._ } = t3, { vars: v, css: b, varsWithDefaults: S } = np(_, r);
  let E = S;
  const C = {}, { [m]: z, ...A } = f;
  if (Object.entries(A || {}).forEach(([P, U]) => {
    const { vars: D, css: I, varsWithDefaults: tt } = np(U, r);
    E = Sn(E, tt), C[P] = { css: I, vars: D };
  }), z) {
    const { css: P, vars: U, varsWithDefaults: D } = np(z, r);
    E = Sn(E, D), C[m] = { css: P, vars: U };
  }
  function $(P, U) {
    var _a, _b2;
    let D = c;
    if (c === "class" && (D = ".%s"), c === "data" && (D = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (D = `[${c}="%s"]`), P) {
      if (D === "media") return t3.defaultColorScheme === P ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a = f[P]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || P})`]: { ":root": U } };
      if (D) return t3.defaultColorScheme === P ? `:root, ${D.replace("%s", String(P))}` : D.replace("%s", String(P));
    }
    return ":root";
  }
  return { vars: E, generateThemeVars: () => {
    let P = { ...v };
    return Object.entries(C).forEach(([, { vars: U }]) => {
      P = Sn(P, U);
    }), P;
  }, generateStyleSheets: () => {
    var _a, _b2;
    const P = [], U = t3.defaultColorScheme || "light";
    function D(et, lt) {
      Object.keys(lt).length && P.push(typeof et == "string" ? { [et]: { ...lt } } : et);
    }
    D(o(void 0, { ...b }), b);
    const { [U]: I, ...tt } = C;
    if (I) {
      const { css: et } = I, lt = (_b2 = (_a = f[U]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode, M = !l && lt ? { colorScheme: lt, ...et } : { ...et };
      D(o(U, { ...M }), M);
    }
    return Object.entries(tt).forEach(([et, { css: lt }]) => {
      var _a2, _b3;
      const M = (_b3 = (_a2 = f[et]) == null ? void 0 : _a2.palette) == null ? void 0 : _b3.mode, q = !l && M ? { colorScheme: M, ...lt } : { ...lt };
      D(o(et, { ...q }), q);
    }), P;
  } };
}
function KC(t3) {
  return function(o) {
    return t3 === "media" ? `@media (prefers-color-scheme: ${o})` : t3 ? t3.startsWith("data-") && !t3.includes("%s") ? `[${t3}="${o}"] &` : t3 === "class" ? `.${o} &` : t3 === "data" ? `[data-${o}] &` : `${t3.replace("%s", o)} &` : "&";
  };
}
function on(t3, r, o = void 0) {
  const l = {};
  for (const c in t3) {
    const f = t3[c];
    let h = "", m = true;
    for (let _ = 0; _ < f.length; _ += 1) {
      const v = f[_];
      v && (h += (m === true ? "" : " ") + r(v), m = false, o && o[v] && (h += " " + o[v]));
    }
    l[c] = h;
  }
  return l;
}
const QC = Pf(), WC = bC("div", { name: "MuiStack", slot: "Root" });
function JC(t3) {
  return SC({ props: t3, name: "MuiStack", defaultTheme: QC });
}
function tT(t3, r) {
  const o = B.Children.toArray(t3).filter(Boolean);
  return o.reduce((l, c, f) => (l.push(c), f < o.length - 1 && l.push(B.cloneElement(r, { key: `separator-${f}` })), l), []);
}
const eT = (t3) => ({ row: "Left", "row-reverse": "Right", column: "Top", "column-reverse": "Bottom" })[t3], nT = ({ ownerState: t3, theme: r }) => {
  let o = { display: "flex", flexDirection: "column", ...Fi({ theme: r }, Jh({ values: t3.direction, breakpoints: r.breakpoints.values }), (l) => ({ flexDirection: l })) };
  if (t3.spacing) {
    const l = Mf(r), c = Object.keys(r.breakpoints.values).reduce((_, v) => ((typeof t3.spacing == "object" && t3.spacing[v] != null || typeof t3.direction == "object" && t3.direction[v] != null) && (_[v] = true), _), {}), f = Jh({ values: t3.direction, base: c }), h = Jh({ values: t3.spacing, base: c });
    typeof f == "object" && Object.keys(f).forEach((_, v, b) => {
      if (!f[_]) {
        const E = v > 0 ? f[b[v - 1]] : "column";
        f[_] = E;
      }
    }), o = Sn(o, Fi({ theme: r }, h, (_, v) => t3.useFlexGap ? { gap: za(l, _) } : { "& > :not(style):not(style)": { margin: 0 }, "& > :not(style) ~ :not(style)": { [`margin${eT(v ? f[v] : t3.direction)}`]: za(l, _) } }));
  }
  return o = vw(r.breakpoints, o), o;
};
function iT(t3 = {}) {
  const { createStyledComponent: r = WC, useThemeProps: o = JC, componentName: l = "MuiStack" } = t3, c = () => on({ root: ["root"] }, (_) => rn(l, _), {}), f = r(nT);
  return B.forwardRef(function(_, v) {
    const b = o(_), S = am(b), { component: E = "div", direction: C = "column", spacing: z = 0, divider: A, children: $, className: N, useFlexGap: G = false, ...P } = S, U = { direction: C, spacing: z, useFlexGap: G }, D = c();
    return F.jsx(f, { as: E, ownerState: U, ref: v, className: le(D.root, N), ...P, children: A ? tT($, A) : $ });
  });
}
const hu = { black: "#000", white: "#fff" }, rT = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" }, wl = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, Cl = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, Vs = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, Tl = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, El = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, kl = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" };
function yb() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: hu.white, default: hu.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const oT = yb();
function vb() {
  return { text: { primary: hu.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: hu.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const d_ = vb();
function h_(t3, r, o, l) {
  const c = l.light || l, f = l.dark || l * 1.5;
  t3[r] || (t3.hasOwnProperty(o) ? t3[r] = t3[o] : r === "light" ? t3.light = um(t3.main, c) : r === "dark" && (t3.dark = sm(t3.main, f)));
}
function aT(t3 = "light") {
  return t3 === "dark" ? { main: Tl[200], light: Tl[50], dark: Tl[400] } : { main: Tl[700], light: Tl[400], dark: Tl[800] };
}
function lT(t3 = "light") {
  return t3 === "dark" ? { main: wl[200], light: wl[50], dark: wl[400] } : { main: wl[500], light: wl[300], dark: wl[700] };
}
function sT(t3 = "light") {
  return t3 === "dark" ? { main: Cl[500], light: Cl[300], dark: Cl[700] } : { main: Cl[700], light: Cl[400], dark: Cl[800] };
}
function uT(t3 = "light") {
  return t3 === "dark" ? { main: El[400], light: El[300], dark: El[700] } : { main: El[700], light: El[500], dark: El[900] };
}
function cT(t3 = "light") {
  return t3 === "dark" ? { main: kl[400], light: kl[300], dark: kl[700] } : { main: kl[800], light: kl[500], dark: kl[900] };
}
function fT(t3 = "light") {
  return t3 === "dark" ? { main: Vs[400], light: Vs[300], dark: Vs[700] } : { main: "#ed6c02", light: Vs[500], dark: Vs[900] };
}
function hm(t3) {
  const { mode: r = "light", contrastThreshold: o = 3, tonalOffset: l = 0.2, ...c } = t3, f = t3.primary || aT(r), h = t3.secondary || lT(r), m = t3.error || sT(r), _ = t3.info || uT(r), v = t3.success || cT(r), b = t3.warning || fT(r);
  function S(A) {
    return EC(A, d_.text.primary) >= o ? d_.text.primary : oT.text.primary;
  }
  const E = ({ color: A, name: $, mainShade: N = 500, lightShade: G = 300, darkShade: P = 700 }) => {
    if (A = { ...A }, !A.main && A[N] && (A.main = A[N]), !A.hasOwnProperty("main")) throw new Error(Qr(11, $ ? ` (${$})` : "", N));
    if (typeof A.main != "string") throw new Error(Qr(12, $ ? ` (${$})` : "", JSON.stringify(A.main)));
    return h_(A, "light", G, l), h_(A, "dark", P, l), A.contrastText || (A.contrastText = S(A.main)), A;
  };
  let C;
  return r === "light" ? C = yb() : r === "dark" && (C = vb()), Sn({ common: { ...hu }, mode: r, primary: E({ color: f, name: "primary" }), secondary: E({ color: h, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: E({ color: m, name: "error" }), warning: E({ color: b, name: "warning" }), info: E({ color: _, name: "info" }), success: E({ color: v, name: "success" }), grey: rT, contrastThreshold: o, getContrastText: S, augmentColor: E, tonalOffset: l, ...C }, c);
}
function dT(t3) {
  const r = {};
  return Object.entries(t3).forEach((l) => {
    const [c, f] = l;
    typeof f == "object" && (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), r;
}
function hT(t3, r) {
  return { toolbar: { minHeight: 56, [t3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [t3.up("sm")]: { minHeight: 64 } }, ...r };
}
function pT(t3) {
  return Math.round(t3 * 1e5) / 1e5;
}
const p_ = { textTransform: "uppercase" }, m_ = '"Roboto", "Helvetica", "Arial", sans-serif';
function _b(t3, r) {
  const { fontFamily: o = m_, fontSize: l = 14, fontWeightLight: c = 300, fontWeightRegular: f = 400, fontWeightMedium: h = 500, fontWeightBold: m = 700, htmlFontSize: _ = 16, allVariants: v, pxToRem: b, ...S } = typeof r == "function" ? r(t3) : r, E = l / 14, C = b || (($) => `${$ / _ * E}rem`), z = ($, N, G, P, U) => ({ fontFamily: o, fontWeight: $, fontSize: C(N), lineHeight: G, ...o === m_ ? { letterSpacing: `${pT(P / N)}em` } : {}, ...U, ...v }), A = { h1: z(c, 96, 1.167, -1.5), h2: z(c, 60, 1.2, -0.5), h3: z(f, 48, 1.167, 0), h4: z(f, 34, 1.235, 0.25), h5: z(f, 24, 1.334, 0), h6: z(h, 20, 1.6, 0.15), subtitle1: z(f, 16, 1.75, 0.15), subtitle2: z(h, 14, 1.57, 0.1), body1: z(f, 16, 1.5, 0.15), body2: z(f, 14, 1.43, 0.15), button: z(h, 14, 1.75, 0.4, p_), caption: z(f, 12, 1.66, 0.4), overline: z(f, 12, 2.66, 1, p_), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Sn({ htmlFontSize: _, pxToRem: C, fontFamily: o, fontSize: l, fontWeightLight: c, fontWeightRegular: f, fontWeightMedium: h, fontWeightBold: m, ...A }, S, { clone: false });
}
const mT = 0.2, gT = 0.14, yT = 0.12;
function Ue(...t3) {
  return [`${t3[0]}px ${t3[1]}px ${t3[2]}px ${t3[3]}px rgba(0,0,0,${mT})`, `${t3[4]}px ${t3[5]}px ${t3[6]}px ${t3[7]}px rgba(0,0,0,${gT})`, `${t3[8]}px ${t3[9]}px ${t3[10]}px ${t3[11]}px rgba(0,0,0,${yT})`].join(",");
}
const vT = ["none", Ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], _T = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, bT = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function g_(t3) {
  return `${Math.round(t3)}ms`;
}
function xT(t3) {
  if (!t3) return 0;
  const r = t3 / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function ST(t3) {
  const r = { ..._T, ...t3.easing }, o = { ...bT, ...t3.duration };
  return { getAutoHeightDuration: xT, create: (c = ["all"], f = {}) => {
    const { duration: h = o.standard, easing: m = r.easeInOut, delay: _ = 0, ...v } = f;
    return (Array.isArray(c) ? c : [c]).map((b) => `${b} ${typeof h == "string" ? h : g_(h)} ${m} ${typeof _ == "string" ? _ : g_(_)}`).join(",");
  }, ...t3, easing: r, duration: o };
}
const wT = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function CT(t3) {
  return hr(t3) || typeof t3 > "u" || typeof t3 == "string" || typeof t3 == "boolean" || typeof t3 == "number" || Array.isArray(t3);
}
function bb(t3 = {}) {
  const r = { ...t3 };
  function o(l) {
    const c = Object.entries(l);
    for (let f = 0; f < c.length; f++) {
      const [h, m] = c[f];
      !CT(m) || h.startsWith("unstable_") ? delete l[h] : hr(m) && (l[h] = { ...m }, o(l[h]));
    }
  }
  return o(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ep(t3 = {}, ...r) {
  const { breakpoints: o, mixins: l = {}, spacing: c, palette: f = {}, transitions: h = {}, typography: m = {}, shape: _, ...v } = t3;
  if (t3.vars && t3.generateThemeVars === void 0) throw new Error(Qr(20));
  const b = hm(f), S = Pf(t3);
  let E = Sn(S, { mixins: hT(S.breakpoints, l), palette: b, shadows: vT.slice(), typography: _b(b, m), transitions: ST(h), zIndex: { ...wT } });
  return E = Sn(E, v), E = r.reduce((C, z) => Sn(C, z), E), E.unstable_sxConfig = { ...xu, ...v == null ? void 0 : v.unstable_sxConfig }, E.unstable_sx = function(z) {
    return Yo({ sx: z, theme: this });
  }, E.toRuntimeSource = bb, E;
}
function kp(t3) {
  let r;
  return t3 < 1 ? r = 5.11916 * t3 ** 2 : r = 4.5 * Math.log(t3 + 1) + 2, Math.round(r * 10) / 1e3;
}
const TT = [...Array(25)].map((t3, r) => {
  if (r === 0) return "none";
  const o = kp(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function xb(t3) {
  return { inputPlaceholder: t3 === "dark" ? 0.5 : 0.42, inputUnderline: t3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: t3 === "dark" ? 0.2 : 0.12, switchTrack: t3 === "dark" ? 0.3 : 0.38 };
}
function Sb(t3) {
  return t3 === "dark" ? TT : [];
}
function ET(t3) {
  const { palette: r = { mode: "light" }, opacity: o, overlays: l, ...c } = t3, f = hm(r);
  return { palette: f, opacity: { ...xb(f.mode), ...o }, overlays: l || Sb(f.mode), ...c };
}
function kT(t3) {
  var _a;
  return !!t3[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t3[0].match(/sxConfig$/) || t3[0] === "palette" && !!((_a = t3[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const MT = (t3) => [...[...Array(25)].map((r, o) => `--${t3 ? `${t3}-` : ""}overlays-${o}`), `--${t3 ? `${t3}-` : ""}palette-AppBar-darkBg`, `--${t3 ? `${t3}-` : ""}palette-AppBar-darkColor`], AT = (t3) => (r, o) => {
  const l = t3.rootSelector || ":root", c = t3.colorSchemeSelector;
  let f = c;
  if (c === "class" && (f = ".%s"), c === "data" && (f = "[data-%s]"), (c == null ? void 0 : c.startsWith("data-")) && !c.includes("%s") && (f = `[${c}="%s"]`), t3.defaultColorScheme === r) {
    if (r === "dark") {
      const h = {};
      return MT(t3.cssVarPrefix).forEach((m) => {
        h[m] = o[m], delete o[m];
      }), f === "media" ? { [l]: o, "@media (prefers-color-scheme: dark)": { [l]: h } } : f ? { [f.replace("%s", r)]: h, [`${l}, ${f.replace("%s", r)}`]: o } : { [l]: { ...o, ...h } };
    }
    if (f && f !== "media") return `${l}, ${f.replace("%s", String(r))}`;
  } else if (r) {
    if (f === "media") return { [`@media (prefers-color-scheme: ${String(r)})`]: { [l]: o } };
    if (f) return f.replace("%s", String(r));
  }
  return l;
};
function OT(t3, r) {
  r.forEach((o) => {
    t3[o] || (t3[o] = {});
  });
}
function dt(t3, r, o) {
  !t3[r] && o && (t3[r] = o);
}
function eu(t3) {
  return typeof t3 != "string" || !t3.startsWith("hsl") ? t3 : fb(t3);
}
function Yr(t3, r) {
  `${r}Channel` in t3 || (t3[`${r}Channel`] = tu(eu(t3[r])));
}
function RT(t3) {
  return typeof t3 == "number" ? `${t3}px` : typeof t3 == "string" || typeof t3 == "function" || Array.isArray(t3) ? t3 : "8px";
}
const sr = (t3) => {
  try {
    return t3();
  } catch {
  }
}, zT = (t3 = "mui") => FC(t3);
function ip(t3, r, o, l) {
  if (!r) return;
  r = r === true ? {} : r;
  const c = l === "dark" ? "dark" : "light";
  if (!o) {
    t3[l] = ET({ ...r, palette: { mode: c, ...r == null ? void 0 : r.palette } });
    return;
  }
  const { palette: f, ...h } = Ep({ ...o, palette: { mode: c, ...r == null ? void 0 : r.palette } });
  return t3[l] = { ...r, palette: f, opacity: { ...xb(c), ...r == null ? void 0 : r.opacity }, overlays: (r == null ? void 0 : r.overlays) || Sb(c) }, h;
}
function LT(t3 = {}, ...r) {
  const { colorSchemes: o = { light: true }, defaultColorScheme: l, disableCssColorScheme: c = false, cssVarPrefix: f = "mui", shouldSkipGeneratingVar: h = kT, colorSchemeSelector: m = o.light && o.dark ? "media" : void 0, rootSelector: _ = ":root", ...v } = t3, b = Object.keys(o)[0], S = l || (o.light && b !== "light" ? "light" : b), E = zT(f), { [S]: C, light: z, dark: A, ...$ } = o, N = { ...$ };
  let G = C;
  if ((S === "dark" && !("dark" in o) || S === "light" && !("light" in o)) && (G = true), !G) throw new Error(Qr(21, S));
  const P = ip(N, G, v, S);
  z && !N.light && ip(N, z, void 0, "light"), A && !N.dark && ip(N, A, void 0, "dark");
  let U = { defaultColorScheme: S, ...P, cssVarPrefix: f, colorSchemeSelector: m, rootSelector: _, getCssVar: E, colorSchemes: N, font: { ...dT(P.typography), ...P.font }, spacing: RT(v.spacing) };
  Object.keys(U.colorSchemes).forEach((lt) => {
    const M = U.colorSchemes[lt].palette, q = (X) => {
      const ft = X.split("-"), at = ft[1], st = ft[2];
      return E(X, M[at][st]);
    };
    if (M.mode === "light" && (dt(M.common, "background", "#fff"), dt(M.common, "onBackground", "#000")), M.mode === "dark" && (dt(M.common, "background", "#000"), dt(M.common, "onBackground", "#fff")), OT(M, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), M.mode === "light") {
      dt(M.Alert, "errorColor", Ae(M.error.light, 0.6)), dt(M.Alert, "infoColor", Ae(M.info.light, 0.6)), dt(M.Alert, "successColor", Ae(M.success.light, 0.6)), dt(M.Alert, "warningColor", Ae(M.warning.light, 0.6)), dt(M.Alert, "errorFilledBg", q("palette-error-main")), dt(M.Alert, "infoFilledBg", q("palette-info-main")), dt(M.Alert, "successFilledBg", q("palette-success-main")), dt(M.Alert, "warningFilledBg", q("palette-warning-main")), dt(M.Alert, "errorFilledColor", sr(() => M.getContrastText(M.error.main))), dt(M.Alert, "infoFilledColor", sr(() => M.getContrastText(M.info.main))), dt(M.Alert, "successFilledColor", sr(() => M.getContrastText(M.success.main))), dt(M.Alert, "warningFilledColor", sr(() => M.getContrastText(M.warning.main))), dt(M.Alert, "errorStandardBg", Oe(M.error.light, 0.9)), dt(M.Alert, "infoStandardBg", Oe(M.info.light, 0.9)), dt(M.Alert, "successStandardBg", Oe(M.success.light, 0.9)), dt(M.Alert, "warningStandardBg", Oe(M.warning.light, 0.9)), dt(M.Alert, "errorIconColor", q("palette-error-main")), dt(M.Alert, "infoIconColor", q("palette-info-main")), dt(M.Alert, "successIconColor", q("palette-success-main")), dt(M.Alert, "warningIconColor", q("palette-warning-main")), dt(M.AppBar, "defaultBg", q("palette-grey-100")), dt(M.Avatar, "defaultBg", q("palette-grey-400")), dt(M.Button, "inheritContainedBg", q("palette-grey-300")), dt(M.Button, "inheritContainedHoverBg", q("palette-grey-A100")), dt(M.Chip, "defaultBorder", q("palette-grey-400")), dt(M.Chip, "defaultAvatarColor", q("palette-grey-700")), dt(M.Chip, "defaultIconColor", q("palette-grey-700")), dt(M.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), dt(M.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), dt(M.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), dt(M.LinearProgress, "primaryBg", Oe(M.primary.main, 0.62)), dt(M.LinearProgress, "secondaryBg", Oe(M.secondary.main, 0.62)), dt(M.LinearProgress, "errorBg", Oe(M.error.main, 0.62)), dt(M.LinearProgress, "infoBg", Oe(M.info.main, 0.62)), dt(M.LinearProgress, "successBg", Oe(M.success.main, 0.62)), dt(M.LinearProgress, "warningBg", Oe(M.warning.main, 0.62)), dt(M.Skeleton, "bg", `rgba(${q("palette-text-primaryChannel")} / 0.11)`), dt(M.Slider, "primaryTrack", Oe(M.primary.main, 0.62)), dt(M.Slider, "secondaryTrack", Oe(M.secondary.main, 0.62)), dt(M.Slider, "errorTrack", Oe(M.error.main, 0.62)), dt(M.Slider, "infoTrack", Oe(M.info.main, 0.62)), dt(M.Slider, "successTrack", Oe(M.success.main, 0.62)), dt(M.Slider, "warningTrack", Oe(M.warning.main, 0.62));
      const X = Wc(M.background.default, 0.8);
      dt(M.SnackbarContent, "bg", X), dt(M.SnackbarContent, "color", sr(() => M.getContrastText(X))), dt(M.SpeedDialAction, "fabHoverBg", Wc(M.background.paper, 0.15)), dt(M.StepConnector, "border", q("palette-grey-400")), dt(M.StepContent, "border", q("palette-grey-400")), dt(M.Switch, "defaultColor", q("palette-common-white")), dt(M.Switch, "defaultDisabledColor", q("palette-grey-100")), dt(M.Switch, "primaryDisabledColor", Oe(M.primary.main, 0.62)), dt(M.Switch, "secondaryDisabledColor", Oe(M.secondary.main, 0.62)), dt(M.Switch, "errorDisabledColor", Oe(M.error.main, 0.62)), dt(M.Switch, "infoDisabledColor", Oe(M.info.main, 0.62)), dt(M.Switch, "successDisabledColor", Oe(M.success.main, 0.62)), dt(M.Switch, "warningDisabledColor", Oe(M.warning.main, 0.62)), dt(M.TableCell, "border", Oe(Qc(M.divider, 1), 0.88)), dt(M.Tooltip, "bg", Qc(M.grey[700], 0.92));
    }
    if (M.mode === "dark") {
      dt(M.Alert, "errorColor", Oe(M.error.light, 0.6)), dt(M.Alert, "infoColor", Oe(M.info.light, 0.6)), dt(M.Alert, "successColor", Oe(M.success.light, 0.6)), dt(M.Alert, "warningColor", Oe(M.warning.light, 0.6)), dt(M.Alert, "errorFilledBg", q("palette-error-dark")), dt(M.Alert, "infoFilledBg", q("palette-info-dark")), dt(M.Alert, "successFilledBg", q("palette-success-dark")), dt(M.Alert, "warningFilledBg", q("palette-warning-dark")), dt(M.Alert, "errorFilledColor", sr(() => M.getContrastText(M.error.dark))), dt(M.Alert, "infoFilledColor", sr(() => M.getContrastText(M.info.dark))), dt(M.Alert, "successFilledColor", sr(() => M.getContrastText(M.success.dark))), dt(M.Alert, "warningFilledColor", sr(() => M.getContrastText(M.warning.dark))), dt(M.Alert, "errorStandardBg", Ae(M.error.light, 0.9)), dt(M.Alert, "infoStandardBg", Ae(M.info.light, 0.9)), dt(M.Alert, "successStandardBg", Ae(M.success.light, 0.9)), dt(M.Alert, "warningStandardBg", Ae(M.warning.light, 0.9)), dt(M.Alert, "errorIconColor", q("palette-error-main")), dt(M.Alert, "infoIconColor", q("palette-info-main")), dt(M.Alert, "successIconColor", q("palette-success-main")), dt(M.Alert, "warningIconColor", q("palette-warning-main")), dt(M.AppBar, "defaultBg", q("palette-grey-900")), dt(M.AppBar, "darkBg", q("palette-background-paper")), dt(M.AppBar, "darkColor", q("palette-text-primary")), dt(M.Avatar, "defaultBg", q("palette-grey-600")), dt(M.Button, "inheritContainedBg", q("palette-grey-800")), dt(M.Button, "inheritContainedHoverBg", q("palette-grey-700")), dt(M.Chip, "defaultBorder", q("palette-grey-700")), dt(M.Chip, "defaultAvatarColor", q("palette-grey-300")), dt(M.Chip, "defaultIconColor", q("palette-grey-300")), dt(M.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), dt(M.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), dt(M.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), dt(M.LinearProgress, "primaryBg", Ae(M.primary.main, 0.5)), dt(M.LinearProgress, "secondaryBg", Ae(M.secondary.main, 0.5)), dt(M.LinearProgress, "errorBg", Ae(M.error.main, 0.5)), dt(M.LinearProgress, "infoBg", Ae(M.info.main, 0.5)), dt(M.LinearProgress, "successBg", Ae(M.success.main, 0.5)), dt(M.LinearProgress, "warningBg", Ae(M.warning.main, 0.5)), dt(M.Skeleton, "bg", `rgba(${q("palette-text-primaryChannel")} / 0.13)`), dt(M.Slider, "primaryTrack", Ae(M.primary.main, 0.5)), dt(M.Slider, "secondaryTrack", Ae(M.secondary.main, 0.5)), dt(M.Slider, "errorTrack", Ae(M.error.main, 0.5)), dt(M.Slider, "infoTrack", Ae(M.info.main, 0.5)), dt(M.Slider, "successTrack", Ae(M.success.main, 0.5)), dt(M.Slider, "warningTrack", Ae(M.warning.main, 0.5));
      const X = Wc(M.background.default, 0.98);
      dt(M.SnackbarContent, "bg", X), dt(M.SnackbarContent, "color", sr(() => M.getContrastText(X))), dt(M.SpeedDialAction, "fabHoverBg", Wc(M.background.paper, 0.15)), dt(M.StepConnector, "border", q("palette-grey-600")), dt(M.StepContent, "border", q("palette-grey-600")), dt(M.Switch, "defaultColor", q("palette-grey-300")), dt(M.Switch, "defaultDisabledColor", q("palette-grey-600")), dt(M.Switch, "primaryDisabledColor", Ae(M.primary.main, 0.55)), dt(M.Switch, "secondaryDisabledColor", Ae(M.secondary.main, 0.55)), dt(M.Switch, "errorDisabledColor", Ae(M.error.main, 0.55)), dt(M.Switch, "infoDisabledColor", Ae(M.info.main, 0.55)), dt(M.Switch, "successDisabledColor", Ae(M.success.main, 0.55)), dt(M.Switch, "warningDisabledColor", Ae(M.warning.main, 0.55)), dt(M.TableCell, "border", Ae(Qc(M.divider, 1), 0.68)), dt(M.Tooltip, "bg", Qc(M.grey[700], 0.92));
    }
    Yr(M.background, "default"), Yr(M.background, "paper"), Yr(M.common, "background"), Yr(M.common, "onBackground"), Yr(M, "divider"), Object.keys(M).forEach((X) => {
      const ft = M[X];
      X !== "tonalOffset" && ft && typeof ft == "object" && (ft.main && dt(M[X], "mainChannel", tu(eu(ft.main))), ft.light && dt(M[X], "lightChannel", tu(eu(ft.light))), ft.dark && dt(M[X], "darkChannel", tu(eu(ft.dark))), ft.contrastText && dt(M[X], "contrastTextChannel", tu(eu(ft.contrastText))), X === "text" && (Yr(M[X], "primary"), Yr(M[X], "secondary")), X === "action" && (ft.active && Yr(M[X], "active"), ft.selected && Yr(M[X], "selected")));
    });
  }), U = r.reduce((lt, M) => Sn(lt, M), U);
  const D = { prefix: f, disableCssColorScheme: c, shouldSkipGeneratingVar: h, getSelector: AT(U) }, { vars: I, generateThemeVars: tt, generateStyleSheets: et } = XC(U, D);
  return U.vars = I, Object.entries(U.colorSchemes[U.defaultColorScheme]).forEach(([lt, M]) => {
    U[lt] = M;
  }), U.generateThemeVars = tt, U.generateStyleSheets = et, U.generateSpacing = function() {
    return rb(v.spacing, Mf(this));
  }, U.getColorSchemeSelector = KC(m), U.spacing = U.generateSpacing(), U.shouldSkipGeneratingVar = h, U.unstable_sxConfig = { ...xu, ...v == null ? void 0 : v.unstable_sxConfig }, U.unstable_sx = function(M) {
    return Yo({ sx: M, theme: this });
  }, U.toRuntimeSource = bb, U;
}
function y_(t3, r, o) {
  t3.colorSchemes && o && (t3.colorSchemes[r] = { ...o !== true && o, palette: hm({ ...o === true ? {} : o.palette, mode: r }) });
}
function Nf(t3 = {}, ...r) {
  const { palette: o, cssVariables: l = false, colorSchemes: c = o ? void 0 : { light: true }, defaultColorScheme: f = o == null ? void 0 : o.mode, ...h } = t3, m = f || "light", _ = c == null ? void 0 : c[m], v = { ...c, ...o ? { [m]: { ...typeof _ != "boolean" && _, palette: o } } : void 0 };
  if (l === false) {
    if (!("colorSchemes" in t3)) return Ep(t3, ...r);
    let b = o;
    "palette" in t3 || v[m] && (v[m] !== true ? b = v[m].palette : m === "dark" && (b = { mode: "dark" }));
    const S = Ep({ ...t3, palette: b }, ...r);
    return S.defaultColorScheme = m, S.colorSchemes = v, S.palette.mode === "light" && (S.colorSchemes.light = { ...v.light !== true && v.light, palette: S.palette }, y_(S, "dark", v.dark)), S.palette.mode === "dark" && (S.colorSchemes.dark = { ...v.dark !== true && v.dark, palette: S.palette }, y_(S, "light", v.light)), S;
  }
  return !o && !("light" in v) && m === "light" && (v.light = true), LT({ ...h, colorSchemes: v, defaultColorScheme: m, ...typeof l != "boolean" && l }, ...r);
}
const pm = Nf();
function La() {
  const t3 = Bf(pm);
  return t3[mr] || t3;
}
function wb(t3) {
  return t3 !== "ownerState" && t3 !== "theme" && t3 !== "sx" && t3 !== "as";
}
const Yi = (t3) => wb(t3) && t3 !== "classes", jt = cb({ themeId: mr, defaultTheme: pm, rootShouldForwardProp: Yi });
function PT({ theme: t3, ...r }) {
  const o = mr in t3 ? t3[mr] : void 0;
  return F.jsx(mb, { ...r, themeId: o ? mr : void 0, theme: o || t3 });
}
const Jc = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: BT } = VC({ themeId: mr, theme: () => Nf({ cssVariables: true }), colorSchemeStorageKey: Jc.colorSchemeStorageKey, modeStorageKey: Jc.modeStorageKey, defaultColorScheme: { light: Jc.defaultLightColorScheme, dark: Jc.defaultDarkColorScheme }, resolveTheme: (t3) => {
  const r = { ...t3, typography: _b(t3.palette, t3.typography) };
  return r.unstable_sx = function(l) {
    return Yo({ sx: l, theme: this });
  }, r;
} }), DT = BT;
function NT({ theme: t3, ...r }) {
  const o = B.useMemo(() => {
    if (typeof t3 == "function") return t3;
    const l = mr in t3 ? t3[mr] : t3;
    return "colorSchemes" in l ? null : "vars" in l ? t3 : { ...t3, vars: null };
  }, [t3]);
  return o ? F.jsx(PT, { theme: o, ...r }) : F.jsx(DT, { theme: t3, ...r });
}
const If = 16, df = window.innerHeight - If * 2, yf = window.innerWidth - If * 2, IT = yf / (yf - df - If);
let HT = Nf({ mainM: `${If}px`, mainH: `${df}px`, mainW: `${yf}px`, imgW: df, mapRatio: IT, thumbMaxDim: (yf - df) / 2, typography: { fontFamily: "Cotham Sans" }, brdRad: "20px", palette: { primary: { main: "#FF6F61", light: "#FF9A8B", dark: "#C94C4C" }, secondary: { main: "#6F61FF", light: "#9A8BFF", dark: "#4C4CC9" }, white: { light: "#ffffff", main: "#f5f5f5", darker: "#ebebeb" }, black: { light: "#000000", main: "#212121", darker: "#000000" } } });
function v_(...t3) {
  return t3.reduce((r, o) => o == null ? r : function(...c) {
    r.apply(this, c), o.apply(this, c);
  }, () => {
  });
}
function jT(t3) {
  return F.jsx(sC, { ...t3, defaultTheme: pm, themeId: mr });
}
function UT(t3) {
  return function(o) {
    return F.jsx(jT, { styles: typeof t3 == "function" ? (l) => t3({ theme: l, ...o }) : t3 });
  };
}
function ZT() {
  return am;
}
const pn = NC;
function fn(t3) {
  return DC(t3);
}
function $T(t3) {
  return rn("MuiSvgIcon", t3);
}
Ze("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const qT = (t3) => {
  const { color: r, fontSize: o, classes: l } = t3, c = { root: ["root", r !== "inherit" && `color${te(r)}`, `fontSize${te(o)}`] };
  return on(c, $T, l);
}, VT = jt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, o.color !== "inherit" && r[`color${te(o.color)}`], r[`fontSize${te(o.fontSize)}`]];
} })(pn(({ theme: t3 }) => {
  var _a, _b2, _c, _d, _e, _f2, _g, _h, _i2, _j, _k2, _l, _m2, _n;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a = t3.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", { duration: (_c = (_b2 = (t3.vars ?? t3).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c.shorter }), variants: [{ props: (r) => !r.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f2 = (_e = t3.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f2.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h = (_g = t3.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = t3.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((t3.vars ?? t3).palette).filter(([, r]) => r && r.main).map(([r]) => {
    var _a2, _b3;
    return { props: { color: r }, style: { color: (_b3 = (_a2 = (t3.vars ?? t3).palette) == null ? void 0 : _a2[r]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l = (_k2 = (t3.vars ?? t3).palette) == null ? void 0 : _k2.action) == null ? void 0 : _l.active } }, { props: { color: "disabled" }, style: { color: (_n = (_m2 = (t3.vars ?? t3).palette) == null ? void 0 : _m2.action) == null ? void 0 : _n.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), Mp = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiSvgIcon" }), { children: c, className: f, color: h = "inherit", component: m = "svg", fontSize: _ = "medium", htmlColor: v, inheritViewBox: b = false, titleAccess: S, viewBox: E = "0 0 24 24", ...C } = l, z = B.isValidElement(c) && c.type === "svg", A = { ...l, color: h, component: m, fontSize: _, instanceFontSize: r.fontSize, inheritViewBox: b, viewBox: E, hasSvgAsChild: z }, $ = {};
  b || ($.viewBox = E);
  const N = qT(A);
  return F.jsxs(VT, { as: m, className: le(N.root, f), focusable: "false", color: v, "aria-hidden": S ? void 0 : true, role: S ? "img" : void 0, ref: o, ...$, ...C, ...z && c.props, ownerState: A, children: [z ? c.props.children : c, S ? F.jsx("title", { children: S }) : null] });
});
Mp.muiName = "SvgIcon";
function Hf(t3, r) {
  function o(l, c) {
    return F.jsx(Mp, { "data-testid": void 0, ref: c, ...l, children: t3 });
  }
  return o.muiName = Mp.muiName, B.memo(B.forwardRef(o));
}
function Cb(t3, r = 166) {
  let o;
  function l(...c) {
    const f = () => {
      t3.apply(this, c);
    };
    clearTimeout(o), o = setTimeout(f, r);
  }
  return l.clear = () => {
    clearTimeout(o);
  }, l;
}
function Gi(t3) {
  return t3 && t3.ownerDocument || document;
}
function Jr(t3) {
  return Gi(t3).defaultView || window;
}
function __(t3, r) {
  typeof t3 == "function" ? t3(r) : t3 && (t3.current = r);
}
let b_ = 0;
function FT(t3) {
  const [r, o] = B.useState(t3), l = t3 || r;
  return B.useEffect(() => {
    r == null && (b_ += 1, o(`mui-${b_}`));
  }, [r]), l;
}
const GT = { ...bp }, x_ = GT.useId;
function mm(t3) {
  if (x_ !== void 0) {
    const r = x_();
    return t3 ?? r;
  }
  return FT(t3);
}
function S_(t3) {
  const { controlled: r, default: o, name: l, state: c = "value" } = t3, { current: f } = B.useRef(r !== void 0), [h, m] = B.useState(o), _ = f ? r : h, v = B.useCallback((b) => {
    f || m(b);
  }, []);
  return [_, v];
}
function Ra(t3) {
  const r = B.useRef(t3);
  return Wr(() => {
    r.current = t3;
  }), B.useRef((...o) => (0, r.current)(...o)).current;
}
function Yn(...t3) {
  const r = B.useRef(void 0), o = B.useCallback((l) => {
    const c = t3.map((f) => {
      if (f == null) return null;
      if (typeof f == "function") {
        const h = f, m = h(l);
        return typeof m == "function" ? m : () => {
          h(null);
        };
      }
      return f.current = l, () => {
        f.current = null;
      };
    });
    return () => {
      c.forEach((f) => f == null ? void 0 : f());
    };
  }, t3);
  return B.useMemo(() => t3.every((l) => l == null) ? null : (l) => {
    r.current && (r.current(), r.current = void 0), l != null && (r.current = o(l));
  }, t3);
}
function YT(t3, r) {
  const o = t3.charCodeAt(2);
  return t3[0] === "o" && t3[1] === "n" && o >= 65 && o <= 90 && typeof r == "function";
}
function XT(t3, r) {
  if (!t3) return r;
  function o(h, m) {
    const _ = {};
    return Object.keys(m).forEach((v) => {
      YT(v, m[v]) && typeof h[v] == "function" && (_[v] = (...b) => {
        h[v](...b), m[v](...b);
      });
    }), _;
  }
  if (typeof t3 == "function" || typeof r == "function") return (h) => {
    const m = typeof r == "function" ? r(h) : r, _ = typeof t3 == "function" ? t3({ ...h, ...m }) : t3, v = le(h == null ? void 0 : h.className, m == null ? void 0 : m.className, _ == null ? void 0 : _.className), b = o(_, m);
    return { ...m, ..._, ...b, ...!!v && { className: v }, ...(m == null ? void 0 : m.style) && (_ == null ? void 0 : _.style) && { style: { ...m.style, ..._.style } }, ...(m == null ? void 0 : m.sx) && (_ == null ? void 0 : _.sx) && { sx: [...Array.isArray(m.sx) ? m.sx : [m.sx], ...Array.isArray(_.sx) ? _.sx : [_.sx]] } };
  };
  const l = r, c = o(t3, l), f = le(l == null ? void 0 : l.className, t3 == null ? void 0 : t3.className);
  return { ...r, ...t3, ...c, ...!!f && { className: f }, ...(l == null ? void 0 : l.style) && (t3 == null ? void 0 : t3.style) && { style: { ...l.style, ...t3.style } }, ...(l == null ? void 0 : l.sx) && (t3 == null ? void 0 : t3.sx) && { sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(t3.sx) ? t3.sx : [t3.sx]] } };
}
function Tb(t3, r) {
  if (t3 == null) return {};
  var o = {};
  for (var l in t3) if ({}.hasOwnProperty.call(t3, l)) {
    if (r.indexOf(l) !== -1) continue;
    o[l] = t3[l];
  }
  return o;
}
function Ap(t3, r) {
  return Ap = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, l) {
    return o.__proto__ = l, o;
  }, Ap(t3, r);
}
function Eb(t3, r) {
  t3.prototype = Object.create(r.prototype), t3.prototype.constructor = t3, Ap(t3, r);
}
var jf = N0();
const tf = mu(jf), w_ = { disabled: false }, vf = Hn.createContext(null);
var KT = function(r) {
  return r.scrollTop;
}, nu = "unmounted", Ma = "exited", Aa = "entering", Rl = "entered", Op = "exiting", _r = function(t3) {
  Eb(r, t3);
  function r(l, c) {
    var f;
    f = t3.call(this, l, c) || this;
    var h = c, m = h && !h.isMounting ? l.enter : l.appear, _;
    return f.appearStatus = null, l.in ? m ? (_ = Ma, f.appearStatus = Aa) : _ = Rl : l.unmountOnExit || l.mountOnEnter ? _ = nu : _ = Ma, f.state = { status: _ }, f.nextCallback = null, f;
  }
  r.getDerivedStateFromProps = function(c, f) {
    var h = c.in;
    return h && f.status === nu ? { status: Ma } : null;
  };
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, o.componentDidUpdate = function(c) {
    var f = null;
    if (c !== this.props) {
      var h = this.state.status;
      this.props.in ? h !== Aa && h !== Rl && (f = Aa) : (h === Aa || h === Rl) && (f = Op);
    }
    this.updateStatus(false, f);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var c = this.props.timeout, f, h, m;
    return f = h = m = c, c != null && typeof c != "number" && (f = c.exit, h = c.enter, m = c.appear !== void 0 ? c.appear : h), { exit: f, enter: h, appear: m };
  }, o.updateStatus = function(c, f) {
    if (c === void 0 && (c = false), f !== null) if (this.cancelNextCallback(), f === Aa) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var h = this.props.nodeRef ? this.props.nodeRef.current : tf.findDOMNode(this);
        h && KT(h);
      }
      this.performEnter(c);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === Ma && this.setState({ status: nu });
  }, o.performEnter = function(c) {
    var f = this, h = this.props.enter, m = this.context ? this.context.isMounting : c, _ = this.props.nodeRef ? [m] : [tf.findDOMNode(this), m], v = _[0], b = _[1], S = this.getTimeouts(), E = m ? S.appear : S.enter;
    if (!c && !h || w_.disabled) {
      this.safeSetState({ status: Rl }, function() {
        f.props.onEntered(v);
      });
      return;
    }
    this.props.onEnter(v, b), this.safeSetState({ status: Aa }, function() {
      f.props.onEntering(v, b), f.onTransitionEnd(E, function() {
        f.safeSetState({ status: Rl }, function() {
          f.props.onEntered(v, b);
        });
      });
    });
  }, o.performExit = function() {
    var c = this, f = this.props.exit, h = this.getTimeouts(), m = this.props.nodeRef ? void 0 : tf.findDOMNode(this);
    if (!f || w_.disabled) {
      this.safeSetState({ status: Ma }, function() {
        c.props.onExited(m);
      });
      return;
    }
    this.props.onExit(m), this.safeSetState({ status: Op }, function() {
      c.props.onExiting(m), c.onTransitionEnd(h.exit, function() {
        c.safeSetState({ status: Ma }, function() {
          c.props.onExited(m);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(c, f) {
    f = this.setNextCallback(f), this.setState(c, f);
  }, o.setNextCallback = function(c) {
    var f = this, h = true;
    return this.nextCallback = function(m) {
      h && (h = false, f.nextCallback = null, c(m));
    }, this.nextCallback.cancel = function() {
      h = false;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(c, f) {
    this.setNextCallback(f);
    var h = this.props.nodeRef ? this.props.nodeRef.current : tf.findDOMNode(this), m = c == null && !this.props.addEndListener;
    if (!h || m) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ = this.props.nodeRef ? [this.nextCallback] : [h, this.nextCallback], v = _[0], b = _[1];
      this.props.addEndListener(v, b);
    }
    c != null && setTimeout(this.nextCallback, c);
  }, o.render = function() {
    var c = this.state.status;
    if (c === nu) return null;
    var f = this.props, h = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var m = Tb(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return Hn.createElement(vf.Provider, { value: null }, typeof h == "function" ? h(c, m) : Hn.cloneElement(Hn.Children.only(h), m));
  }, r;
}(Hn.Component);
_r.contextType = vf;
_r.propTypes = {};
function Ml() {
}
_r.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: Ml, onEntering: Ml, onEntered: Ml, onExit: Ml, onExiting: Ml, onExited: Ml };
_r.UNMOUNTED = nu;
_r.EXITED = Ma;
_r.ENTERING = Aa;
_r.ENTERED = Rl;
_r.EXITING = Op;
function QT(t3) {
  if (t3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t3;
}
function gm(t3, r) {
  var o = function(f) {
    return r && B.isValidElement(f) ? r(f) : f;
  }, l = /* @__PURE__ */ Object.create(null);
  return t3 && B.Children.map(t3, function(c) {
    return c;
  }).forEach(function(c) {
    l[c.key] = o(c);
  }), l;
}
function WT(t3, r) {
  t3 = t3 || {}, r = r || {};
  function o(b) {
    return b in r ? r[b] : t3[b];
  }
  var l = /* @__PURE__ */ Object.create(null), c = [];
  for (var f in t3) f in r ? c.length && (l[f] = c, c = []) : c.push(f);
  var h, m = {};
  for (var _ in r) {
    if (l[_]) for (h = 0; h < l[_].length; h++) {
      var v = l[_][h];
      m[l[_][h]] = o(v);
    }
    m[_] = o(_);
  }
  for (h = 0; h < c.length; h++) m[c[h]] = o(c[h]);
  return m;
}
function Oa(t3, r, o) {
  return o[r] != null ? o[r] : t3.props[r];
}
function JT(t3, r) {
  return gm(t3.children, function(o) {
    return B.cloneElement(o, { onExited: r.bind(null, o), in: true, appear: Oa(o, "appear", t3), enter: Oa(o, "enter", t3), exit: Oa(o, "exit", t3) });
  });
}
function tE(t3, r, o) {
  var l = gm(t3.children), c = WT(r, l);
  return Object.keys(c).forEach(function(f) {
    var h = c[f];
    if (B.isValidElement(h)) {
      var m = f in r, _ = f in l, v = r[f], b = B.isValidElement(v) && !v.props.in;
      _ && (!m || b) ? c[f] = B.cloneElement(h, { onExited: o.bind(null, h), in: true, exit: Oa(h, "exit", t3), enter: Oa(h, "enter", t3) }) : !_ && m && !b ? c[f] = B.cloneElement(h, { in: false }) : _ && m && B.isValidElement(v) && (c[f] = B.cloneElement(h, { onExited: o.bind(null, h), in: v.props.in, exit: Oa(h, "exit", t3), enter: Oa(h, "enter", t3) }));
    }
  }), c;
}
var eE = Object.values || function(t3) {
  return Object.keys(t3).map(function(r) {
    return t3[r];
  });
}, nE = { component: "div", childFactory: function(r) {
  return r;
} }, ym = function(t3) {
  Eb(r, t3);
  function r(l, c) {
    var f;
    f = t3.call(this, l, c) || this;
    var h = f.handleExited.bind(QT(f));
    return f.state = { contextValue: { isMounting: true }, handleExited: h, firstRender: true }, f;
  }
  var o = r.prototype;
  return o.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, o.componentWillUnmount = function() {
    this.mounted = false;
  }, r.getDerivedStateFromProps = function(c, f) {
    var h = f.children, m = f.handleExited, _ = f.firstRender;
    return { children: _ ? JT(c, m) : tE(c, h, m), firstRender: false };
  }, o.handleExited = function(c, f) {
    var h = gm(this.props.children);
    c.key in h || (c.props.onExited && c.props.onExited(f), this.mounted && this.setState(function(m) {
      var _ = pf({}, m.children);
      return delete _[c.key], { children: _ };
    }));
  }, o.render = function() {
    var c = this.props, f = c.component, h = c.childFactory, m = Tb(c, ["component", "childFactory"]), _ = this.state.contextValue, v = eE(this.state.children).map(h);
    return delete m.appear, delete m.enter, delete m.exit, f === null ? Hn.createElement(vf.Provider, { value: _ }, v) : Hn.createElement(vf.Provider, { value: _ }, Hn.createElement(f, m, v));
  }, r;
}(Hn.Component);
ym.propTypes = {};
ym.defaultProps = nE;
const C_ = {};
function kb(t3, r) {
  const o = B.useRef(C_);
  return o.current === C_ && (o.current = t3(r)), o;
}
const iE = [];
function rE(t3) {
  B.useEffect(t3, iE);
}
class vm {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new vm();
  }
  start(r, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, r);
  }
}
function Mb() {
  const t3 = kb(vm.create).current;
  return rE(t3.disposeEffect), t3;
}
const Ab = (t3) => t3.scrollTop;
function _f(t3, r) {
  const { timeout: o, easing: l, style: c = {} } = t3;
  return { duration: c.transitionDuration ?? (typeof o == "number" ? o : o[r.mode] || 0), easing: c.transitionTimingFunction ?? (typeof l == "object" ? l[r.mode] : l), delay: c.transitionDelay };
}
function oE(t3) {
  return rn("MuiPaper", t3);
}
Ze("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const aE = (t3) => {
  const { square: r, elevation: o, variant: l, classes: c } = t3, f = { root: ["root", l, !r && "rounded", l === "elevation" && `elevation${o}`] };
  return on(f, oE, c);
}, lE = jt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, r[o.variant], !o.square && r.rounded, o.variant === "elevation" && r[`elevation${o.elevation}`]];
} })(pn(({ theme: t3 }) => ({ backgroundColor: (t3.vars || t3).palette.background.paper, color: (t3.vars || t3).palette.text.primary, transition: t3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: r }) => !r.square, style: { borderRadius: t3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(t3.vars || t3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), sE = B.forwardRef(function(r, o) {
  var _a;
  const l = fn({ props: r, name: "MuiPaper" }), c = La(), { className: f, component: h = "div", elevation: m = 1, square: _ = false, variant: v = "elevation", ...b } = l, S = { ...l, component: h, elevation: m, square: _, variant: v }, E = aE(S);
  return F.jsx(lE, { as: h, ownerState: S, className: le(E.root, f), ref: o, ...b, style: { ...v === "elevation" && { "--Paper-shadow": (c.vars || c).shadows[m], ...c.vars && { "--Paper-overlay": (_a = c.vars.overlays) == null ? void 0 : _a[m] }, ...!c.vars && c.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${ni("#fff", kp(m))}, ${ni("#fff", kp(m))})` } }, ...b.style } });
});
function uE(t3) {
  return typeof t3 == "string";
}
function Ob(t3, r, o) {
  return t3 === void 0 || uE(t3) ? r : { ...r, ownerState: { ...r.ownerState, ...o } };
}
function Rb(t3, r, o) {
  return typeof t3 == "function" ? t3(r, o) : t3;
}
function zb(t3, r = []) {
  if (t3 === void 0) return {};
  const o = {};
  return Object.keys(t3).filter((l) => l.match(/^on[A-Z]/) && typeof t3[l] == "function" && !r.includes(l)).forEach((l) => {
    o[l] = t3[l];
  }), o;
}
function T_(t3) {
  if (t3 === void 0) return {};
  const r = {};
  return Object.keys(t3).filter((o) => !(o.match(/^on[A-Z]/) && typeof t3[o] == "function")).forEach((o) => {
    r[o] = t3[o];
  }), r;
}
function Lb(t3) {
  const { getSlotProps: r, additionalProps: o, externalSlotProps: l, externalForwardedProps: c, className: f } = t3;
  if (!r) {
    const C = le(o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, l == null ? void 0 : l.className), z = { ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...l == null ? void 0 : l.style }, A = { ...o, ...c, ...l };
    return C.length > 0 && (A.className = C), Object.keys(z).length > 0 && (A.style = z), { props: A, internalRef: void 0 };
  }
  const h = zb({ ...c, ...l }), m = T_(l), _ = T_(c), v = r(h), b = le(v == null ? void 0 : v.className, o == null ? void 0 : o.className, f, c == null ? void 0 : c.className, l == null ? void 0 : l.className), S = { ...v == null ? void 0 : v.style, ...o == null ? void 0 : o.style, ...c == null ? void 0 : c.style, ...l == null ? void 0 : l.style }, E = { ...v, ...o, ..._, ...m };
  return b.length > 0 && (E.className = b), Object.keys(S).length > 0 && (E.style = S), { props: E, internalRef: v.ref };
}
function yr(t3, r) {
  const { className: o, elementType: l, ownerState: c, externalForwardedProps: f, internalForwardedProps: h, shouldForwardComponentProp: m = false, ..._ } = r, { component: v, slots: b = { [t3]: void 0 }, slotProps: S = { [t3]: void 0 }, ...E } = f, C = b[t3] || l, z = Rb(S[t3], c), { props: { component: A, ...$ }, internalRef: N } = Lb({ className: o, ..._, externalForwardedProps: t3 === "root" ? E : void 0, externalSlotProps: z }), G = Yn(N, z == null ? void 0 : z.ref, r.ref), P = t3 === "root" ? A || v : A, U = Ob(C, { ...t3 === "root" && !v && !b[t3] && h, ...t3 !== "root" && !b[t3] && h, ...$, ...P && !m && { as: P }, ...P && m && { component: P }, ref: G }, c);
  return [C, U];
}
function E_(t3) {
  try {
    return t3.matches(":focus-visible");
  } catch {
  }
  return false;
}
class bf {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new bf();
  }
  static use() {
    const r = kb(bf.create).current, [o, l] = B.useState(false);
    return r.shouldMount = o, r.setShouldMount = l, B.useEffect(r.mountEffect, [o]), r;
  }
  mount() {
    return this.mounted || (this.mounted = fE(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...r);
    });
  }
}
function cE() {
  return bf.use();
}
function fE() {
  let t3, r;
  const o = new Promise((l, c) => {
    t3 = l, r = c;
  });
  return o.resolve = t3, o.reject = r, o;
}
function dE(t3) {
  const { className: r, classes: o, pulsate: l = false, rippleX: c, rippleY: f, rippleSize: h, in: m, onExited: _, timeout: v } = t3, [b, S] = B.useState(false), E = le(r, o.ripple, o.rippleVisible, l && o.ripplePulsate), C = { width: h, height: h, top: -(h / 2) + f, left: -(h / 2) + c }, z = le(o.child, b && o.childLeaving, l && o.childPulsate);
  return !m && !b && S(true), B.useEffect(() => {
    if (!m && _ != null) {
      const A = setTimeout(_, v);
      return () => {
        clearTimeout(A);
      };
    }
  }, [_, m, v]), F.jsx("span", { className: E, style: C, children: F.jsx("span", { className: z }) });
}
const Li = Ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Rp = 550, hE = 80, pE = _u`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, mE = _u`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, gE = _u`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, yE = jt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), vE = jt(dE, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Li.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${pE};
    animation-duration: ${Rp}ms;
    animation-timing-function: ${({ theme: t3 }) => t3.transitions.easing.easeInOut};
  }

  &.${Li.ripplePulsate} {
    animation-duration: ${({ theme: t3 }) => t3.transitions.duration.shorter}ms;
  }

  & .${Li.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Li.childLeaving} {
    opacity: 0;
    animation-name: ${mE};
    animation-duration: ${Rp}ms;
    animation-timing-function: ${({ theme: t3 }) => t3.transitions.easing.easeInOut};
  }

  & .${Li.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${gE};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: t3 }) => t3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, _E = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiTouchRipple" }), { center: c = false, classes: f = {}, className: h, ...m } = l, [_, v] = B.useState([]), b = B.useRef(0), S = B.useRef(null);
  B.useEffect(() => {
    S.current && (S.current(), S.current = null);
  }, [_]);
  const E = B.useRef(false), C = Mb(), z = B.useRef(null), A = B.useRef(null), $ = B.useCallback((U) => {
    const { pulsate: D, rippleX: I, rippleY: tt, rippleSize: et, cb: lt } = U;
    v((M) => [...M, F.jsx(vE, { classes: { ripple: le(f.ripple, Li.ripple), rippleVisible: le(f.rippleVisible, Li.rippleVisible), ripplePulsate: le(f.ripplePulsate, Li.ripplePulsate), child: le(f.child, Li.child), childLeaving: le(f.childLeaving, Li.childLeaving), childPulsate: le(f.childPulsate, Li.childPulsate) }, timeout: Rp, pulsate: D, rippleX: I, rippleY: tt, rippleSize: et }, b.current)]), b.current += 1, S.current = lt;
  }, [f]), N = B.useCallback((U = {}, D = {}, I = () => {
  }) => {
    const { pulsate: tt = false, center: et = c || D.pulsate, fakeElement: lt = false } = D;
    if ((U == null ? void 0 : U.type) === "mousedown" && E.current) {
      E.current = false;
      return;
    }
    (U == null ? void 0 : U.type) === "touchstart" && (E.current = true);
    const M = lt ? null : A.current, q = M ? M.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let X, ft, at;
    if (et || U === void 0 || U.clientX === 0 && U.clientY === 0 || !U.clientX && !U.touches) X = Math.round(q.width / 2), ft = Math.round(q.height / 2);
    else {
      const { clientX: st, clientY: Z } = U.touches && U.touches.length > 0 ? U.touches[0] : U;
      X = Math.round(st - q.left), ft = Math.round(Z - q.top);
    }
    if (et) at = Math.sqrt((2 * q.width ** 2 + q.height ** 2) / 3), at % 2 === 0 && (at += 1);
    else {
      const st = Math.max(Math.abs((M ? M.clientWidth : 0) - X), X) * 2 + 2, Z = Math.max(Math.abs((M ? M.clientHeight : 0) - ft), ft) * 2 + 2;
      at = Math.sqrt(st ** 2 + Z ** 2);
    }
    (U == null ? void 0 : U.touches) ? z.current === null && (z.current = () => {
      $({ pulsate: tt, rippleX: X, rippleY: ft, rippleSize: at, cb: I });
    }, C.start(hE, () => {
      z.current && (z.current(), z.current = null);
    })) : $({ pulsate: tt, rippleX: X, rippleY: ft, rippleSize: at, cb: I });
  }, [c, $, C]), G = B.useCallback(() => {
    N({}, { pulsate: true });
  }, [N]), P = B.useCallback((U, D) => {
    if (C.clear(), (U == null ? void 0 : U.type) === "touchend" && z.current) {
      z.current(), z.current = null, C.start(0, () => {
        P(U, D);
      });
      return;
    }
    z.current = null, v((I) => I.length > 0 ? I.slice(1) : I), S.current = D;
  }, [C]);
  return B.useImperativeHandle(o, () => ({ pulsate: G, start: N, stop: P }), [G, N, P]), F.jsx(yE, { className: le(Li.root, f.root, h), ref: A, ...m, children: F.jsx(ym, { component: null, exit: true, children: _ }) });
});
function bE(t3) {
  return rn("MuiButtonBase", t3);
}
const xE = Ze("MuiButtonBase", ["root", "disabled", "focusVisible"]), SE = (t3) => {
  const { disabled: r, focusVisible: o, focusVisibleClassName: l, classes: c } = t3, h = on({ root: ["root", r && "disabled", o && "focusVisible"] }, bE, c);
  return o && l && (h.root += ` ${l}`), h;
}, wE = jt("button", { name: "MuiButtonBase", slot: "Root" })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${xE.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), _m = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiButtonBase" }), { action: c, centerRipple: f = false, children: h, className: m, component: _ = "button", disabled: v = false, disableRipple: b = false, disableTouchRipple: S = false, focusRipple: E = false, focusVisibleClassName: C, LinkComponent: z = "a", onBlur: A, onClick: $, onContextMenu: N, onDragLeave: G, onFocus: P, onFocusVisible: U, onKeyDown: D, onKeyUp: I, onMouseDown: tt, onMouseLeave: et, onMouseUp: lt, onTouchEnd: M, onTouchMove: q, onTouchStart: X, tabIndex: ft = 0, TouchRippleProps: at, touchRippleRef: st, type: Z, ...ct } = l, ut = B.useRef(null), gt = cE(), w = Yn(gt.ref, st), [W, pt] = B.useState(false);
  v && W && pt(false), B.useImperativeHandle(c, () => ({ focusVisible: () => {
    pt(true), ut.current.focus();
  } }), []);
  const R = gt.shouldMount && !b && !v;
  B.useEffect(() => {
    W && E && !b && gt.pulsate();
  }, [b, E, W, gt]);
  const bt = Xr(gt, "start", tt, S), wt = Xr(gt, "stop", N, S), _t = Xr(gt, "stop", G, S), Dt = Xr(gt, "stop", lt, S), Lt = Xr(gt, "stop", (Ot) => {
    W && Ot.preventDefault(), et && et(Ot);
  }, S), re = Xr(gt, "start", X, S), Bt = Xr(gt, "stop", M, S), Vt = Xr(gt, "stop", q, S), Kt = Xr(gt, "stop", (Ot) => {
    E_(Ot.target) || pt(false), A && A(Ot);
  }, false), Re = Ra((Ot) => {
    ut.current || (ut.current = Ot.currentTarget), E_(Ot.target) && (pt(true), U && U(Ot)), P && P(Ot);
  }), Ft = () => {
    const Ot = ut.current;
    return _ && _ !== "button" && !(Ot.tagName === "A" && Ot.href);
  }, fe = Ra((Ot) => {
    E && !Ot.repeat && W && Ot.key === " " && gt.stop(Ot, () => {
      gt.start(Ot);
    }), Ot.target === Ot.currentTarget && Ft() && Ot.key === " " && Ot.preventDefault(), D && D(Ot), Ot.target === Ot.currentTarget && Ft() && Ot.key === "Enter" && !v && (Ot.preventDefault(), $ && $(Ot));
  }), We = Ra((Ot) => {
    E && Ot.key === " " && W && !Ot.defaultPrevented && gt.stop(Ot, () => {
      gt.pulsate(Ot);
    }), I && I(Ot), $ && Ot.target === Ot.currentTarget && Ft() && Ot.key === " " && !Ot.defaultPrevented && $(Ot);
  });
  let se = _;
  se === "button" && (ct.href || ct.to) && (se = z);
  const _e = {};
  se === "button" ? (_e.type = Z === void 0 ? "button" : Z, _e.disabled = v) : (!ct.href && !ct.to && (_e.role = "button"), v && (_e["aria-disabled"] = v));
  const Se = Yn(o, ut), ke = { ...l, centerRipple: f, component: _, disabled: v, disableRipple: b, disableTouchRipple: S, focusRipple: E, tabIndex: ft, focusVisible: W }, de = SE(ke);
  return F.jsxs(wE, { as: se, className: le(de.root, m), ownerState: ke, onBlur: Kt, onClick: $, onContextMenu: wt, onFocus: Re, onKeyDown: fe, onKeyUp: We, onMouseDown: bt, onMouseLeave: Lt, onMouseUp: Dt, onDragLeave: _t, onTouchEnd: Bt, onTouchMove: Vt, onTouchStart: re, ref: Se, tabIndex: v ? -1 : ft, type: Z, ..._e, ...ct, children: [h, R ? F.jsx(_E, { ref: w, center: f, ...at }) : null] });
});
function Xr(t3, r, o, l = false) {
  return Ra((c) => (o && o(c), l || t3[r](c), true));
}
function CE(t3) {
  return typeof t3.main == "string";
}
function TE(t3, r = []) {
  if (!CE(t3)) return false;
  for (const o of r) if (!t3.hasOwnProperty(o) || typeof t3[o] != "string") return false;
  return true;
}
function Ko(t3 = []) {
  return ([, r]) => r && TE(r, t3);
}
function EE(t3) {
  return rn("MuiCircularProgress", t3);
}
Ze("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Fo = 44, zp = _u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Lp = _u`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, kE = typeof zp != "string" ? nm`
        animation: ${zp} 1.4s linear infinite;
      ` : null, ME = typeof Lp != "string" ? nm`
        animation: ${Lp} 1.4s ease-in-out infinite;
      ` : null, AE = (t3) => {
  const { classes: r, variant: o, color: l, disableShrink: c } = t3, f = { root: ["root", o, `color${te(l)}`], svg: ["svg"], circle: ["circle", `circle${te(o)}`, c && "circleDisableShrink"] };
  return on(f, EE, r);
}, OE = jt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, r[o.variant], r[`color${te(o.color)}`]];
} })(pn(({ theme: t3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: t3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: kE || { animation: `${zp} 1.4s linear infinite` } }, ...Object.entries(t3.palette).filter(Ko()).map(([r]) => ({ props: { color: r }, style: { color: (t3.vars || t3).palette[r].main } }))] }))), RE = jt("svg", { name: "MuiCircularProgress", slot: "Svg" })({ display: "block" }), zE = jt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.circle, r[`circle${te(o.variant)}`], o.disableShrink && r.circleDisableShrink];
} })(pn(({ theme: t3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: t3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: r }) => r.variant === "indeterminate" && !r.disableShrink, style: ME || { animation: `${Lp} 1.4s ease-in-out infinite` } }] }))), bm = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiCircularProgress" }), { className: c, color: f = "primary", disableShrink: h = false, size: m = 40, style: _, thickness: v = 3.6, value: b = 0, variant: S = "indeterminate", ...E } = l, C = { ...l, color: f, disableShrink: h, size: m, thickness: v, value: b, variant: S }, z = AE(C), A = {}, $ = {}, N = {};
  if (S === "determinate") {
    const G = 2 * Math.PI * ((Fo - v) / 2);
    A.strokeDasharray = G.toFixed(3), N["aria-valuenow"] = Math.round(b), A.strokeDashoffset = `${((100 - b) / 100 * G).toFixed(3)}px`, $.transform = "rotate(-90deg)";
  }
  return F.jsx(OE, { className: le(z.root, c), style: { width: m, height: m, ...$, ..._ }, ownerState: C, ref: o, role: "progressbar", ...N, ...E, children: F.jsx(RE, { className: z.svg, ownerState: C, viewBox: `${Fo / 2} ${Fo / 2} ${Fo} ${Fo}`, children: F.jsx(zE, { className: z.circle, style: A, ownerState: C, cx: Fo, cy: Fo, r: (Fo - v) / 2, fill: "none", strokeWidth: v }) }) });
});
function LE(t3) {
  return rn("MuiIconButton", t3);
}
const k_ = Ze("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), PE = (t3) => {
  const { classes: r, disabled: o, color: l, edge: c, size: f, loading: h } = t3, m = { root: ["root", h && "loading", o && "disabled", l !== "default" && `color${te(l)}`, c && `edge${te(c)}`, `size${te(f)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return on(m, LE, r);
}, BE = jt(_m, { name: "MuiIconButton", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, o.loading && r.loading, o.color !== "default" && r[`color${te(o.color)}`], o.edge && r[`edge${te(o.edge)}`], r[`size${te(o.size)}`]];
} })(pn(({ theme: t3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: t3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (t3.vars || t3).palette.action.active, transition: t3.transitions.create("background-color", { duration: t3.transitions.duration.shortest }), variants: [{ props: (r) => !r.disableRipple, style: { "--IconButton-hoverBg": t3.vars ? `rgba(${t3.vars.palette.action.activeChannel} / ${t3.vars.palette.action.hoverOpacity})` : ni(t3.palette.action.active, t3.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), pn(({ theme: t3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(t3.palette).filter(Ko()).map(([r]) => ({ props: { color: r }, style: { color: (t3.vars || t3).palette[r].main } })), ...Object.entries(t3.palette).filter(Ko()).map(([r]) => ({ props: { color: r }, style: { "--IconButton-hoverBg": t3.vars ? `rgba(${(t3.vars || t3).palette[r].mainChannel} / ${t3.vars.palette.action.hoverOpacity})` : ni((t3.vars || t3).palette[r].main, t3.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: t3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: t3.typography.pxToRem(28) } }], [`&.${k_.disabled}`]: { backgroundColor: "transparent", color: (t3.vars || t3).palette.action.disabled }, [`&.${k_.loading}`]: { color: "transparent" } }))), DE = jt("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(({ theme: t3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (t3.vars || t3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), Pb = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiIconButton" }), { edge: c = false, children: f, className: h, color: m = "default", disabled: _ = false, disableFocusRipple: v = false, size: b = "medium", id: S, loading: E = null, loadingIndicator: C, ...z } = l, A = mm(S), $ = C ?? F.jsx(bm, { "aria-labelledby": A, color: "inherit", size: 16 }), N = { ...l, edge: c, color: m, disabled: _, disableFocusRipple: v, loading: E, loadingIndicator: $, size: b }, G = PE(N);
  return F.jsxs(BE, { id: E ? A : S, className: le(G.root, h), centerRipple: true, focusRipple: !v, disabled: _ || E, ref: o, ...z, ownerState: N, children: [typeof E == "boolean" && F.jsx("span", { className: G.loadingWrapper, style: { display: "contents" }, children: F.jsx(DE, { className: G.loadingIndicator, ownerState: N, children: E && $ }) }), f] });
});
function NE(t3) {
  return rn("MuiTypography", t3);
}
Ze("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const IE = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, HE = ZT(), jE = (t3) => {
  const { align: r, gutterBottom: o, noWrap: l, paragraph: c, variant: f, classes: h } = t3, m = { root: ["root", f, t3.align !== "inherit" && `align${te(r)}`, o && "gutterBottom", l && "noWrap", c && "paragraph"] };
  return on(m, NE, h);
}, UE = jt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, o.variant && r[o.variant], o.align !== "inherit" && r[`align${te(o.align)}`], o.noWrap && r.noWrap, o.gutterBottom && r.gutterBottom, o.paragraph && r.paragraph];
} })(pn(({ theme: t3 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(t3.typography).filter(([r, o]) => r !== "inherit" && o && typeof o == "object").map(([r, o]) => ({ props: { variant: r }, style: o })), ...Object.entries(t3.palette).filter(Ko()).map(([r]) => ({ props: { color: r }, style: { color: (t3.vars || t3).palette[r].main } })), ...Object.entries(((_a = t3.palette) == null ? void 0 : _a.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({ props: { color: `text${te(r)}` }, style: { color: (t3.vars || t3).palette.text[r] } })), { props: ({ ownerState: r }) => r.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: r }) => r.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: r }) => r.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: r }) => r.paragraph, style: { marginBottom: 16 } }] };
})), M_ = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, Vi = B.forwardRef(function(r, o) {
  const { color: l, ...c } = fn({ props: r, name: "MuiTypography" }), f = !IE[l], h = HE({ ...c, ...f && { color: l } }), { align: m = "inherit", className: _, component: v, gutterBottom: b = false, noWrap: S = false, paragraph: E = false, variant: C = "body1", variantMapping: z = M_, ...A } = h, $ = { ...h, align: m, color: l, className: _, component: v, gutterBottom: b, noWrap: S, paragraph: E, variant: C, variantMapping: z }, N = v || (E ? "p" : z[C] || M_[C]) || "span", G = jE($);
  return F.jsx(UE, { as: N, ref: o, className: le(G.root, _), ...A, ownerState: $, style: { ...m !== "inherit" && { "--Typography-textAlign": m }, ...A.style } });
});
function ZE(t3) {
  var _a;
  const { elementType: r, externalSlotProps: o, ownerState: l, skipResolvingSlotProps: c = false, ...f } = t3, h = c ? {} : Rb(o, l), { props: m, internalRef: _ } = Lb({ ...f, externalSlotProps: h }), v = Yn(_, h == null ? void 0 : h.ref, (_a = t3.additionalProps) == null ? void 0 : _a.ref);
  return Ob(r, { ...m, ref: v }, l);
}
function Su(t3) {
  var _a;
  return parseInt(B.version, 10) >= 19 ? ((_a = t3 == null ? void 0 : t3.props) == null ? void 0 : _a.ref) || null : (t3 == null ? void 0 : t3.ref) || null;
}
function $E(t3) {
  return typeof t3 == "function" ? t3() : t3;
}
const qE = B.forwardRef(function(r, o) {
  const { children: l, container: c, disablePortal: f = false } = r, [h, m] = B.useState(null), _ = Yn(B.isValidElement(l) ? Su(l) : null, o);
  if (Wr(() => {
    f || m($E(c) || document.body);
  }, [c, f]), Wr(() => {
    if (h && !f) return __(o, h), () => {
      __(o, null);
    };
  }, [o, h, f]), f) {
    if (B.isValidElement(l)) {
      const v = { ref: _ };
      return B.cloneElement(l, v);
    }
    return l;
  }
  return h && jf.createPortal(l, h);
});
function ef(t3) {
  return parseInt(t3, 10) || 0;
}
const VE = { shadow: { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" } };
function FE(t3) {
  for (const r in t3) return false;
  return true;
}
function A_(t3) {
  return FE(t3) || t3.outerHeightStyle === 0 && !t3.overflowing;
}
const GE = B.forwardRef(function(r, o) {
  const { onChange: l, maxRows: c, minRows: f = 1, style: h, value: m, ..._ } = r, { current: v } = B.useRef(m != null), b = B.useRef(null), S = Yn(o, b), E = B.useRef(null), C = B.useRef(null), z = B.useCallback(() => {
    const P = b.current, U = C.current;
    if (!P || !U) return;
    const I = Jr(P).getComputedStyle(P);
    if (I.width === "0px") return { outerHeightStyle: 0, overflowing: false };
    U.style.width = I.width, U.value = P.value || r.placeholder || "x", U.value.slice(-1) === `
` && (U.value += " ");
    const tt = I.boxSizing, et = ef(I.paddingBottom) + ef(I.paddingTop), lt = ef(I.borderBottomWidth) + ef(I.borderTopWidth), M = U.scrollHeight;
    U.value = "x";
    const q = U.scrollHeight;
    let X = M;
    f && (X = Math.max(Number(f) * q, X)), c && (X = Math.min(Number(c) * q, X)), X = Math.max(X, q);
    const ft = X + (tt === "border-box" ? et + lt : 0), at = Math.abs(X - M) <= 1;
    return { outerHeightStyle: ft, overflowing: at };
  }, [c, f, r.placeholder]), A = Ra(() => {
    const P = b.current, U = z();
    if (!P || !U || A_(U)) return false;
    const D = U.outerHeightStyle;
    return E.current != null && E.current !== D;
  }), $ = B.useCallback(() => {
    const P = b.current, U = z();
    if (!P || !U || A_(U)) return;
    const D = U.outerHeightStyle;
    E.current !== D && (E.current = D, P.style.height = `${D}px`), P.style.overflow = U.overflowing ? "hidden" : "";
  }, [z]), N = B.useRef(-1);
  Wr(() => {
    const P = Cb($), U = b == null ? void 0 : b.current;
    if (!U) return;
    const D = Jr(U);
    D.addEventListener("resize", P);
    let I;
    return typeof ResizeObserver < "u" && (I = new ResizeObserver(() => {
      A() && (I.unobserve(U), cancelAnimationFrame(N.current), $(), N.current = requestAnimationFrame(() => {
        I.observe(U);
      }));
    }), I.observe(U)), () => {
      P.clear(), cancelAnimationFrame(N.current), D.removeEventListener("resize", P), I && I.disconnect();
    };
  }, [z, $, A]), Wr(() => {
    $();
  });
  const G = (P) => {
    v || $();
    const U = P.target, D = U.value.length, I = U.value.endsWith(`
`), tt = U.selectionStart === D;
    I && tt && U.setSelectionRange(D, D), l && l(P);
  };
  return F.jsxs(B.Fragment, { children: [F.jsx("textarea", { value: m, onChange: G, ref: S, rows: f, style: h, ..._ }), F.jsx("textarea", { "aria-hidden": true, className: r.className, readOnly: true, ref: C, tabIndex: -1, style: { ...VE.shadow, ...h, paddingTop: 0, paddingBottom: 0 } })] });
});
function Pp(t3) {
  return typeof t3 == "string";
}
function xm({ props: t3, states: r, muiFormControl: o }) {
  return r.reduce((l, c) => (l[c] = t3[c], o && typeof t3[c] > "u" && (l[c] = o[c]), l), {});
}
const Bb = B.createContext(void 0);
function Sm() {
  return B.useContext(Bb);
}
function O_(t3) {
  return t3 != null && !(Array.isArray(t3) && t3.length === 0);
}
function Db(t3, r = false) {
  return t3 && (O_(t3.value) && t3.value !== "" || r && O_(t3.defaultValue) && t3.defaultValue !== "");
}
function YE(t3) {
  return rn("MuiInputBase", t3);
}
const Nl = Ze("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var R_;
const Uf = (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, o.formControl && r.formControl, o.startAdornment && r.adornedStart, o.endAdornment && r.adornedEnd, o.error && r.error, o.size === "small" && r.sizeSmall, o.multiline && r.multiline, o.color && r[`color${te(o.color)}`], o.fullWidth && r.fullWidth, o.hiddenLabel && r.hiddenLabel];
}, Zf = (t3, r) => {
  const { ownerState: o } = t3;
  return [r.input, o.size === "small" && r.inputSizeSmall, o.multiline && r.inputMultiline, o.type === "search" && r.inputTypeSearch, o.startAdornment && r.inputAdornedStart, o.endAdornment && r.inputAdornedEnd, o.hiddenLabel && r.inputHiddenLabel];
}, XE = (t3) => {
  const { classes: r, color: o, disabled: l, error: c, endAdornment: f, focused: h, formControl: m, fullWidth: _, hiddenLabel: v, multiline: b, readOnly: S, size: E, startAdornment: C, type: z } = t3, A = { root: ["root", `color${te(o)}`, l && "disabled", c && "error", _ && "fullWidth", h && "focused", m && "formControl", E && E !== "medium" && `size${te(E)}`, b && "multiline", C && "adornedStart", f && "adornedEnd", v && "hiddenLabel", S && "readOnly"], input: ["input", l && "disabled", z === "search" && "inputTypeSearch", b && "inputMultiline", E === "small" && "inputSizeSmall", v && "inputHiddenLabel", C && "inputAdornedStart", f && "inputAdornedEnd", S && "readOnly"] };
  return on(A, YE, r);
}, $f = jt("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Uf })(pn(({ theme: t3 }) => ({ ...t3.typography.body1, color: (t3.vars || t3).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center", [`&.${Nl.disabled}`]: { color: (t3.vars || t3).palette.text.disabled, cursor: "default" }, variants: [{ props: ({ ownerState: r }) => r.multiline, style: { padding: "4px 0 5px" } }, { props: ({ ownerState: r, size: o }) => r.multiline && o === "small", style: { paddingTop: 1 } }, { props: ({ ownerState: r }) => r.fullWidth, style: { width: "100%" } }] }))), qf = jt("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Zf })(pn(({ theme: t3 }) => {
  const r = t3.palette.mode === "light", o = { color: "currentColor", ...t3.vars ? { opacity: t3.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 }, transition: t3.transitions.create("opacity", { duration: t3.transitions.duration.shorter }) }, l = { opacity: "0 !important" }, c = t3.vars ? { opacity: t3.vars.opacity.inputPlaceholder } : { opacity: r ? 0.42 : 0.5 };
  return { font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", "&::-webkit-input-placeholder": o, "&::-moz-placeholder": o, "&::-ms-input-placeholder": o, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" }, [`label[data-shrink=false] + .${Nl.formControl} &`]: { "&::-webkit-input-placeholder": l, "&::-moz-placeholder": l, "&::-ms-input-placeholder": l, "&:focus::-webkit-input-placeholder": c, "&:focus::-moz-placeholder": c, "&:focus::-ms-input-placeholder": c }, [`&.${Nl.disabled}`]: { opacity: 1, WebkitTextFillColor: (t3.vars || t3).palette.text.disabled }, variants: [{ props: ({ ownerState: f }) => !f.disableInjectingGlobalStyles, style: { animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" } } }, { props: { size: "small" }, style: { paddingTop: 1 } }, { props: ({ ownerState: f }) => f.multiline, style: { height: "auto", resize: "none", padding: 0, paddingTop: 0 } }, { props: { type: "search" }, style: { MozAppearance: "textfield" } }] };
})), z_ = UT({ "@keyframes mui-auto-fill": { from: { display: "block" } }, "@keyframes mui-auto-fill-cancel": { from: { display: "block" } } }), wm = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiInputBase" }), { "aria-describedby": c, autoComplete: f, autoFocus: h, className: m, color: _, components: v = {}, componentsProps: b = {}, defaultValue: S, disabled: E, disableInjectingGlobalStyles: C, endAdornment: z, error: A, fullWidth: $ = false, id: N, inputComponent: G = "input", inputProps: P = {}, inputRef: U, margin: D, maxRows: I, minRows: tt, multiline: et = false, name: lt, onBlur: M, onChange: q, onClick: X, onFocus: ft, onKeyDown: at, onKeyUp: st, placeholder: Z, readOnly: ct, renderSuffix: ut, rows: gt, size: w, slotProps: W = {}, slots: pt = {}, startAdornment: R, type: bt = "text", value: wt, ..._t } = l, Dt = P.value != null ? P.value : wt, { current: Lt } = B.useRef(Dt != null), re = B.useRef(), Bt = B.useCallback((Gt) => {
  }, []), Vt = Yn(re, U, P.ref, Bt), [Kt, Re] = B.useState(false), Ft = Sm(), fe = xm({ props: l, muiFormControl: Ft, states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"] });
  fe.focused = Ft ? Ft.focused : Kt, B.useEffect(() => {
    !Ft && E && Kt && (Re(false), M && M());
  }, [Ft, E, Kt, M]);
  const We = Ft && Ft.onFilled, se = Ft && Ft.onEmpty, _e = B.useCallback((Gt) => {
    Db(Gt) ? We && We() : se && se();
  }, [We, se]);
  Wr(() => {
    Lt && _e({ value: Dt });
  }, [Dt, _e, Lt]);
  const Se = (Gt) => {
    ft && ft(Gt), P.onFocus && P.onFocus(Gt), Ft && Ft.onFocus ? Ft.onFocus(Gt) : Re(true);
  }, ke = (Gt) => {
    M && M(Gt), P.onBlur && P.onBlur(Gt), Ft && Ft.onBlur ? Ft.onBlur(Gt) : Re(false);
  }, de = (Gt, ...mn) => {
    if (!Lt) {
      const qe = Gt.target || re.current;
      if (qe == null) throw new Error(Qr(1));
      _e({ value: qe.value });
    }
    P.onChange && P.onChange(Gt, ...mn), q && q(Gt, ...mn);
  };
  B.useEffect(() => {
    _e(re.current);
  }, []);
  const Ot = (Gt) => {
    re.current && Gt.currentTarget === Gt.target && re.current.focus(), X && X(Gt);
  };
  let Rn = G, $e = P;
  et && Rn === "input" && (gt ? $e = { type: void 0, minRows: gt, maxRows: gt, ...$e } : $e = { type: void 0, maxRows: I, minRows: tt, ...$e }, Rn = GE);
  const Un = (Gt) => {
    _e(Gt.animationName === "mui-auto-fill-cancel" ? re.current : { value: "x" });
  };
  B.useEffect(() => {
    Ft && Ft.setAdornedStart(!!R);
  }, [Ft, R]);
  const rt = { ...l, color: fe.color || "primary", disabled: fe.disabled, endAdornment: z, error: fe.error, focused: fe.focused, formControl: Ft, fullWidth: $, hiddenLabel: fe.hiddenLabel, multiline: et, size: fe.size, startAdornment: R, type: bt }, ht = XE(rt), Ct = pt.root || v.Root || $f, Et = W.root || b.root || {}, qt = pt.input || v.Input || qf;
  return $e = { ...$e, ...W.input ?? b.input }, F.jsxs(B.Fragment, { children: [!C && typeof z_ == "function" && (R_ || (R_ = F.jsx(z_, {}))), F.jsxs(Ct, { ...Et, ref: o, onClick: Ot, ..._t, ...!Pp(Ct) && { ownerState: { ...rt, ...Et.ownerState } }, className: le(ht.root, Et.className, m, ct && "MuiInputBase-readOnly"), children: [R, F.jsx(Bb.Provider, { value: null, children: F.jsx(qt, { "aria-invalid": fe.error, "aria-describedby": c, autoComplete: f, autoFocus: h, defaultValue: S, disabled: fe.disabled, id: N, onAnimationStart: Un, name: lt, placeholder: Z, readOnly: ct, required: fe.required, rows: gt, value: Dt, onKeyDown: at, onKeyUp: st, type: bt, ...$e, ...!Pp(qt) && { as: Rn, ownerState: { ...rt, ...$e.ownerState } }, ref: Vt, className: le(ht.input, $e.className, ct && "MuiInputBase-readOnly"), onBlur: ke, onChange: de, onFocus: Se }) }), z, ut ? ut({ ...fe, startAdornment: R }) : null] })] });
});
function KE(t3) {
  return rn("MuiInput", t3);
}
const Fs = { ...Nl, ...Ze("MuiInput", ["root", "underline", "input"]) };
function QE(t3) {
  return rn("MuiOutlinedInput", t3);
}
const ur = { ...Nl, ...Ze("MuiOutlinedInput", ["root", "notchedOutline", "input"]) };
function WE(t3) {
  return rn("MuiFilledInput", t3);
}
const Ea = { ...Nl, ...Ze("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"]) }, JE = Hf(F.jsx("path", { d: "M7 10l5 5 5-5z" })), t2 = { entering: { opacity: 1 }, entered: { opacity: 1 } }, e2 = B.forwardRef(function(r, o) {
  const l = La(), c = { enter: l.transitions.duration.enteringScreen, exit: l.transitions.duration.leavingScreen }, { addEndListener: f, appear: h = true, children: m, easing: _, in: v, onEnter: b, onEntered: S, onEntering: E, onExit: C, onExited: z, onExiting: A, style: $, timeout: N = c, TransitionComponent: G = _r, ...P } = r, U = B.useRef(null), D = Yn(U, Su(m), o), I = (at) => (st) => {
    if (at) {
      const Z = U.current;
      st === void 0 ? at(Z) : at(Z, st);
    }
  }, tt = I(E), et = I((at, st) => {
    Ab(at);
    const Z = _f({ style: $, timeout: N, easing: _ }, { mode: "enter" });
    at.style.webkitTransition = l.transitions.create("opacity", Z), at.style.transition = l.transitions.create("opacity", Z), b && b(at, st);
  }), lt = I(S), M = I(A), q = I((at) => {
    const st = _f({ style: $, timeout: N, easing: _ }, { mode: "exit" });
    at.style.webkitTransition = l.transitions.create("opacity", st), at.style.transition = l.transitions.create("opacity", st), C && C(at);
  }), X = I(z), ft = (at) => {
    f && f(U.current, at);
  };
  return F.jsx(G, { appear: h, in: v, nodeRef: U, onEnter: et, onEntered: lt, onEntering: tt, onExit: q, onExited: X, onExiting: M, addEndListener: ft, timeout: N, ...P, children: (at, { ownerState: st, ...Z }) => B.cloneElement(m, { style: { opacity: 0, visibility: at === "exited" && !v ? "hidden" : void 0, ...t2[at], ...$, ...m.props.style }, ref: D, ...Z }) });
});
function n2(t3) {
  return rn("MuiBackdrop", t3);
}
Ze("MuiBackdrop", ["root", "invisible"]);
const i2 = (t3) => {
  const { classes: r, invisible: o } = t3;
  return on({ root: ["root", o && "invisible"] }, n2, r);
}, r2 = jt("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, o.invisible && r.invisible];
} })({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent", variants: [{ props: { invisible: true }, style: { backgroundColor: "transparent" } }] }), o2 = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiBackdrop" }), { children: c, className: f, component: h = "div", invisible: m = false, open: _, components: v = {}, componentsProps: b = {}, slotProps: S = {}, slots: E = {}, TransitionComponent: C, transitionDuration: z, ...A } = l, $ = { ...l, component: h, invisible: m }, N = i2($), G = { transition: C, root: v.Root, ...E }, P = { ...b, ...S }, U = { slots: G, slotProps: P }, [D, I] = yr("root", { elementType: r2, externalForwardedProps: U, className: le(N.root, f), ownerState: $ }), [tt, et] = yr("transition", { elementType: e2, externalForwardedProps: U, ownerState: $ });
  return F.jsx(tt, { in: _, timeout: z, ...A, ...et, children: F.jsx(D, { "aria-hidden": true, ...I, classes: N, ref: o, children: c }) });
}), a2 = Ze("MuiBox", ["root"]), l2 = Nf(), On = fC({ themeId: mr, defaultTheme: l2, defaultClassName: a2.root, generateClassName: ab.generate });
function s2(t3) {
  return rn("MuiButton", t3);
}
const ka = Ze("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), u2 = B.createContext({}), c2 = B.createContext(void 0), f2 = (t3) => {
  const { color: r, disableElevation: o, fullWidth: l, size: c, variant: f, loading: h, loadingPosition: m, classes: _ } = t3, v = { root: ["root", h && "loading", f, `${f}${te(r)}`, `size${te(c)}`, `${f}Size${te(c)}`, `color${te(r)}`, o && "disableElevation", l && "fullWidth", h && `loadingPosition${te(m)}`], startIcon: ["icon", "startIcon", `iconSize${te(c)}`], endIcon: ["icon", "endIcon", `iconSize${te(c)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] }, b = on(v, s2, _);
  return { ..._, ...b };
}, Nb = [{ props: { size: "small" }, style: { "& > *:nth-of-type(1)": { fontSize: 18 } } }, { props: { size: "medium" }, style: { "& > *:nth-of-type(1)": { fontSize: 20 } } }, { props: { size: "large" }, style: { "& > *:nth-of-type(1)": { fontSize: 22 } } }], d2 = jt(_m, { shouldForwardProp: (t3) => Yi(t3) || t3 === "classes", name: "MuiButton", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, r[o.variant], r[`${o.variant}${te(o.color)}`], r[`size${te(o.size)}`], r[`${o.variant}Size${te(o.size)}`], o.color === "inherit" && r.colorInherit, o.disableElevation && r.disableElevation, o.fullWidth && r.fullWidth, o.loading && r.loading];
} })(pn(({ theme: t3 }) => {
  const r = t3.palette.mode === "light" ? t3.palette.grey[300] : t3.palette.grey[800], o = t3.palette.mode === "light" ? t3.palette.grey.A100 : t3.palette.grey[700];
  return { ...t3.typography.button, minWidth: 64, padding: "6px 16px", border: 0, borderRadius: (t3.vars || t3).shape.borderRadius, transition: t3.transitions.create(["background-color", "box-shadow", "border-color", "color"], { duration: t3.transitions.duration.short }), "&:hover": { textDecoration: "none" }, [`&.${ka.disabled}`]: { color: (t3.vars || t3).palette.action.disabled }, variants: [{ props: { variant: "contained" }, style: { color: "var(--variant-containedColor)", backgroundColor: "var(--variant-containedBg)", boxShadow: (t3.vars || t3).shadows[2], "&:hover": { boxShadow: (t3.vars || t3).shadows[4], "@media (hover: none)": { boxShadow: (t3.vars || t3).shadows[2] } }, "&:active": { boxShadow: (t3.vars || t3).shadows[8] }, [`&.${ka.focusVisible}`]: { boxShadow: (t3.vars || t3).shadows[6] }, [`&.${ka.disabled}`]: { color: (t3.vars || t3).palette.action.disabled, boxShadow: (t3.vars || t3).shadows[0], backgroundColor: (t3.vars || t3).palette.action.disabledBackground } } }, { props: { variant: "outlined" }, style: { padding: "5px 15px", border: "1px solid currentColor", borderColor: "var(--variant-outlinedBorder, currentColor)", backgroundColor: "var(--variant-outlinedBg)", color: "var(--variant-outlinedColor)", [`&.${ka.disabled}`]: { border: `1px solid ${(t3.vars || t3).palette.action.disabledBackground}` } } }, { props: { variant: "text" }, style: { padding: "6px 8px", color: "var(--variant-textColor)", backgroundColor: "var(--variant-textBg)" } }, ...Object.entries(t3.palette).filter(Ko()).map(([l]) => ({ props: { color: l }, style: { "--variant-textColor": (t3.vars || t3).palette[l].main, "--variant-outlinedColor": (t3.vars || t3).palette[l].main, "--variant-outlinedBorder": t3.vars ? `rgba(${t3.vars.palette[l].mainChannel} / 0.5)` : ni(t3.palette[l].main, 0.5), "--variant-containedColor": (t3.vars || t3).palette[l].contrastText, "--variant-containedBg": (t3.vars || t3).palette[l].main, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": (t3.vars || t3).palette[l].dark, "--variant-textBg": t3.vars ? `rgba(${t3.vars.palette[l].mainChannel} / ${t3.vars.palette.action.hoverOpacity})` : ni(t3.palette[l].main, t3.palette.action.hoverOpacity), "--variant-outlinedBorder": (t3.vars || t3).palette[l].main, "--variant-outlinedBg": t3.vars ? `rgba(${t3.vars.palette[l].mainChannel} / ${t3.vars.palette.action.hoverOpacity})` : ni(t3.palette[l].main, t3.palette.action.hoverOpacity) } } } })), { props: { color: "inherit" }, style: { color: "inherit", borderColor: "currentColor", "--variant-containedBg": t3.vars ? t3.vars.palette.Button.inheritContainedBg : r, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": t3.vars ? t3.vars.palette.Button.inheritContainedHoverBg : o, "--variant-textBg": t3.vars ? `rgba(${t3.vars.palette.text.primaryChannel} / ${t3.vars.palette.action.hoverOpacity})` : ni(t3.palette.text.primary, t3.palette.action.hoverOpacity), "--variant-outlinedBg": t3.vars ? `rgba(${t3.vars.palette.text.primaryChannel} / ${t3.vars.palette.action.hoverOpacity})` : ni(t3.palette.text.primary, t3.palette.action.hoverOpacity) } } } }, { props: { size: "small", variant: "text" }, style: { padding: "4px 5px", fontSize: t3.typography.pxToRem(13) } }, { props: { size: "large", variant: "text" }, style: { padding: "8px 11px", fontSize: t3.typography.pxToRem(15) } }, { props: { size: "small", variant: "outlined" }, style: { padding: "3px 9px", fontSize: t3.typography.pxToRem(13) } }, { props: { size: "large", variant: "outlined" }, style: { padding: "7px 21px", fontSize: t3.typography.pxToRem(15) } }, { props: { size: "small", variant: "contained" }, style: { padding: "4px 10px", fontSize: t3.typography.pxToRem(13) } }, { props: { size: "large", variant: "contained" }, style: { padding: "8px 22px", fontSize: t3.typography.pxToRem(15) } }, { props: { disableElevation: true }, style: { boxShadow: "none", "&:hover": { boxShadow: "none" }, [`&.${ka.focusVisible}`]: { boxShadow: "none" }, "&:active": { boxShadow: "none" }, [`&.${ka.disabled}`]: { boxShadow: "none" } } }, { props: { fullWidth: true }, style: { width: "100%" } }, { props: { loadingPosition: "center" }, style: { transition: t3.transitions.create(["background-color", "box-shadow", "border-color"], { duration: t3.transitions.duration.short }), [`&.${ka.loading}`]: { color: "transparent" } } }] };
})), h2 = jt("span", { name: "MuiButton", slot: "StartIcon", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.startIcon, o.loading && r.startIconLoadingStart, r[`iconSize${te(o.size)}`]];
} })(({ theme: t3 }) => ({ display: "inherit", marginRight: 8, marginLeft: -4, variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, { props: { loadingPosition: "start", loading: true }, style: { transition: t3.transitions.create(["opacity"], { duration: t3.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "start", loading: true, fullWidth: true }, style: { marginRight: -8 } }, ...Nb] })), p2 = jt("span", { name: "MuiButton", slot: "EndIcon", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.endIcon, o.loading && r.endIconLoadingEnd, r[`iconSize${te(o.size)}`]];
} })(({ theme: t3 }) => ({ display: "inherit", marginRight: -4, marginLeft: 8, variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, { props: { loadingPosition: "end", loading: true }, style: { transition: t3.transitions.create(["opacity"], { duration: t3.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "end", loading: true, fullWidth: true }, style: { marginLeft: -8 } }, ...Nb] })), m2 = jt("span", { name: "MuiButton", slot: "LoadingIndicator" })(({ theme: t3 }) => ({ display: "none", position: "absolute", visibility: "visible", variants: [{ props: { loading: true }, style: { display: "flex" } }, { props: { loadingPosition: "start" }, style: { left: 14 } }, { props: { loadingPosition: "start", size: "small" }, style: { left: 10 } }, { props: { variant: "text", loadingPosition: "start" }, style: { left: 6 } }, { props: { loadingPosition: "center" }, style: { left: "50%", transform: "translate(-50%)", color: (t3.vars || t3).palette.action.disabled } }, { props: { loadingPosition: "end" }, style: { right: 14 } }, { props: { loadingPosition: "end", size: "small" }, style: { right: 10 } }, { props: { variant: "text", loadingPosition: "end" }, style: { right: 6 } }, { props: { loadingPosition: "start", fullWidth: true }, style: { position: "relative", left: -10 } }, { props: { loadingPosition: "end", fullWidth: true }, style: { position: "relative", right: -10 } }] })), L_ = jt("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({ display: "inline-block", width: "1em", height: "1em" }), Cm = B.forwardRef(function(r, o) {
  const l = B.useContext(u2), c = B.useContext(c2), f = du(l, r), h = fn({ props: f, name: "MuiButton" }), { children: m, color: _ = "primary", component: v = "button", className: b, disabled: S = false, disableElevation: E = false, disableFocusRipple: C = false, endIcon: z, focusVisibleClassName: A, fullWidth: $ = false, id: N, loading: G = null, loadingIndicator: P, loadingPosition: U = "center", size: D = "medium", startIcon: I, type: tt, variant: et = "text", ...lt } = h, M = mm(N), q = P ?? F.jsx(bm, { "aria-labelledby": M, color: "inherit", size: 16 }), X = { ...h, color: _, component: v, disabled: S, disableElevation: E, disableFocusRipple: C, fullWidth: $, loading: G, loadingIndicator: q, loadingPosition: U, size: D, type: tt, variant: et }, ft = f2(X), at = (I || G && U === "start") && F.jsx(h2, { className: ft.startIcon, ownerState: X, children: I || F.jsx(L_, { className: ft.loadingIconPlaceholder, ownerState: X }) }), st = (z || G && U === "end") && F.jsx(p2, { className: ft.endIcon, ownerState: X, children: z || F.jsx(L_, { className: ft.loadingIconPlaceholder, ownerState: X }) }), Z = c || "", ct = typeof G == "boolean" ? F.jsx("span", { className: ft.loadingWrapper, style: { display: "contents" }, children: G && F.jsx(m2, { className: ft.loadingIndicator, ownerState: X, children: q }) }) : null;
  return F.jsxs(d2, { ownerState: X, className: le(l.className, ft.root, b, Z), component: v, disabled: S || G, focusRipple: !C, focusVisibleClassName: le(ft.focusVisible, A), ref: o, type: tt, id: G ? M : N, ...lt, classes: ft, children: [at, U !== "end" && ct, m, U === "end" && ct, st] });
});
function Ib(t3 = window) {
  const r = t3.document.documentElement.clientWidth;
  return t3.innerWidth - r;
}
function g2(t3) {
  const r = Gi(t3);
  return r.body === t3 ? Jr(t3).innerWidth > r.documentElement.clientWidth : t3.scrollHeight > t3.clientHeight;
}
function ou(t3, r) {
  r ? t3.setAttribute("aria-hidden", "true") : t3.removeAttribute("aria-hidden");
}
function P_(t3) {
  return parseInt(Jr(t3).getComputedStyle(t3).paddingRight, 10) || 0;
}
function y2(t3) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(t3.tagName), l = t3.tagName === "INPUT" && t3.getAttribute("type") === "hidden";
  return o || l;
}
function B_(t3, r, o, l, c) {
  const f = [r, o, ...l];
  [].forEach.call(t3.children, (h) => {
    const m = !f.includes(h), _ = !y2(h);
    m && _ && ou(h, c);
  });
}
function rp(t3, r) {
  let o = -1;
  return t3.some((l, c) => r(l) ? (o = c, true) : false), o;
}
function v2(t3, r) {
  const o = [], l = t3.container;
  if (!r.disableScrollLock) {
    if (g2(l)) {
      const h = Ib(Jr(l));
      o.push({ value: l.style.paddingRight, property: "padding-right", el: l }), l.style.paddingRight = `${P_(l) + h}px`;
      const m = Gi(l).querySelectorAll(".mui-fixed");
      [].forEach.call(m, (_) => {
        o.push({ value: _.style.paddingRight, property: "padding-right", el: _ }), _.style.paddingRight = `${P_(_) + h}px`;
      });
    }
    let f;
    if (l.parentNode instanceof DocumentFragment) f = Gi(l).body;
    else {
      const h = l.parentElement, m = Jr(l);
      f = (h == null ? void 0 : h.nodeName) === "HTML" && m.getComputedStyle(h).overflowY === "scroll" ? h : l;
    }
    o.push({ value: f.style.overflow, property: "overflow", el: f }, { value: f.style.overflowX, property: "overflow-x", el: f }, { value: f.style.overflowY, property: "overflow-y", el: f }), f.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({ value: f, el: h, property: m }) => {
      f ? h.style.setProperty(m, f) : h.style.removeProperty(m);
    });
  };
}
function _2(t3) {
  const r = [];
  return [].forEach.call(t3.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && r.push(o);
  }), r;
}
class b2 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(r, o) {
    let l = this.modals.indexOf(r);
    if (l !== -1) return l;
    l = this.modals.length, this.modals.push(r), r.modalRef && ou(r.modalRef, false);
    const c = _2(o);
    B_(o, r.mount, r.modalRef, c, true);
    const f = rp(this.containers, (h) => h.container === o);
    return f !== -1 ? (this.containers[f].modals.push(r), l) : (this.containers.push({ modals: [r], container: o, restore: null, hiddenSiblings: c }), l);
  }
  mount(r, o) {
    const l = rp(this.containers, (f) => f.modals.includes(r)), c = this.containers[l];
    c.restore || (c.restore = v2(c, o));
  }
  remove(r, o = true) {
    const l = this.modals.indexOf(r);
    if (l === -1) return l;
    const c = rp(this.containers, (h) => h.modals.includes(r)), f = this.containers[c];
    if (f.modals.splice(f.modals.indexOf(r), 1), this.modals.splice(l, 1), f.modals.length === 0) f.restore && f.restore(), r.modalRef && ou(r.modalRef, o), B_(f.container, r.mount, r.modalRef, f.hiddenSiblings, false), this.containers.splice(c, 1);
    else {
      const h = f.modals[f.modals.length - 1];
      h.modalRef && ou(h.modalRef, false);
    }
    return l;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const x2 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function S2(t3) {
  const r = parseInt(t3.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r) ? t3.contentEditable === "true" || (t3.nodeName === "AUDIO" || t3.nodeName === "VIDEO" || t3.nodeName === "DETAILS") && t3.getAttribute("tabindex") === null ? 0 : t3.tabIndex : r;
}
function w2(t3) {
  if (t3.tagName !== "INPUT" || t3.type !== "radio" || !t3.name) return false;
  const r = (l) => t3.ownerDocument.querySelector(`input[type="radio"]${l}`);
  let o = r(`[name="${t3.name}"]:checked`);
  return o || (o = r(`[name="${t3.name}"]`)), o !== t3;
}
function C2(t3) {
  return !(t3.disabled || t3.tagName === "INPUT" && t3.type === "hidden" || w2(t3));
}
function T2(t3) {
  const r = [], o = [];
  return Array.from(t3.querySelectorAll(x2)).forEach((l, c) => {
    const f = S2(l);
    f === -1 || !C2(l) || (f === 0 ? r.push(l) : o.push({ documentOrder: c, tabIndex: f, node: l }));
  }), o.sort((l, c) => l.tabIndex === c.tabIndex ? l.documentOrder - c.documentOrder : l.tabIndex - c.tabIndex).map((l) => l.node).concat(r);
}
function E2() {
  return true;
}
function k2(t3) {
  const { children: r, disableAutoFocus: o = false, disableEnforceFocus: l = false, disableRestoreFocus: c = false, getTabbable: f = T2, isEnabled: h = E2, open: m } = t3, _ = B.useRef(false), v = B.useRef(null), b = B.useRef(null), S = B.useRef(null), E = B.useRef(null), C = B.useRef(false), z = B.useRef(null), A = Yn(Su(r), z), $ = B.useRef(null);
  B.useEffect(() => {
    !m || !z.current || (C.current = !o);
  }, [o, m]), B.useEffect(() => {
    if (!m || !z.current) return;
    const P = Gi(z.current);
    return z.current.contains(P.activeElement) || (z.current.hasAttribute("tabIndex") || z.current.setAttribute("tabIndex", "-1"), C.current && z.current.focus()), () => {
      c || (S.current && S.current.focus && (_.current = true, S.current.focus()), S.current = null);
    };
  }, [m]), B.useEffect(() => {
    if (!m || !z.current) return;
    const P = Gi(z.current), U = (tt) => {
      $.current = tt, !(l || !h() || tt.key !== "Tab") && P.activeElement === z.current && tt.shiftKey && (_.current = true, b.current && b.current.focus());
    }, D = () => {
      var _a, _b2;
      const tt = z.current;
      if (tt === null) return;
      if (!P.hasFocus() || !h() || _.current) {
        _.current = false;
        return;
      }
      if (tt.contains(P.activeElement) || l && P.activeElement !== v.current && P.activeElement !== b.current) return;
      if (P.activeElement !== E.current) E.current = null;
      else if (E.current !== null) return;
      if (!C.current) return;
      let et = [];
      if ((P.activeElement === v.current || P.activeElement === b.current) && (et = f(z.current)), et.length > 0) {
        const lt = !!(((_a = $.current) == null ? void 0 : _a.shiftKey) && ((_b2 = $.current) == null ? void 0 : _b2.key) === "Tab"), M = et[0], q = et[et.length - 1];
        typeof M != "string" && typeof q != "string" && (lt ? q.focus() : M.focus());
      } else tt.focus();
    };
    P.addEventListener("focusin", D), P.addEventListener("keydown", U, true);
    const I = setInterval(() => {
      P.activeElement && P.activeElement.tagName === "BODY" && D();
    }, 50);
    return () => {
      clearInterval(I), P.removeEventListener("focusin", D), P.removeEventListener("keydown", U, true);
    };
  }, [o, l, c, h, m, f]);
  const N = (P) => {
    S.current === null && (S.current = P.relatedTarget), C.current = true, E.current = P.target;
    const U = r.props.onFocus;
    U && U(P);
  }, G = (P) => {
    S.current === null && (S.current = P.relatedTarget), C.current = true;
  };
  return F.jsxs(B.Fragment, { children: [F.jsx("div", { tabIndex: m ? 0 : -1, onFocus: G, ref: v, "data-testid": "sentinelStart" }), B.cloneElement(r, { ref: A, onFocus: N }), F.jsx("div", { tabIndex: m ? 0 : -1, onFocus: G, ref: b, "data-testid": "sentinelEnd" })] });
}
function M2(t3) {
  return typeof t3 == "function" ? t3() : t3;
}
function A2(t3) {
  return t3 ? t3.props.hasOwnProperty("in") : false;
}
const D_ = () => {
}, nf = new b2();
function O2(t3) {
  const { container: r, disableEscapeKeyDown: o = false, disableScrollLock: l = false, closeAfterTransition: c = false, onTransitionEnter: f, onTransitionExited: h, children: m, onClose: _, open: v, rootRef: b } = t3, S = B.useRef({}), E = B.useRef(null), C = B.useRef(null), z = Yn(C, b), [A, $] = B.useState(!v), N = A2(m);
  let G = true;
  (t3["aria-hidden"] === "false" || t3["aria-hidden"] === false) && (G = false);
  const P = () => Gi(E.current), U = () => (S.current.modalRef = C.current, S.current.mount = E.current, S.current), D = () => {
    nf.mount(U(), { disableScrollLock: l }), C.current && (C.current.scrollTop = 0);
  }, I = Ra(() => {
    const st = M2(r) || P().body;
    nf.add(U(), st), C.current && D();
  }), tt = () => nf.isTopModal(U()), et = Ra((st) => {
    E.current = st, st && (v && tt() ? D() : C.current && ou(C.current, G));
  }), lt = B.useCallback(() => {
    nf.remove(U(), G);
  }, [G]);
  B.useEffect(() => () => {
    lt();
  }, [lt]), B.useEffect(() => {
    v ? I() : (!N || !c) && lt();
  }, [v, lt, N, c, I]);
  const M = (st) => (Z) => {
    var _a;
    (_a = st.onKeyDown) == null ? void 0 : _a.call(st, Z), !(Z.key !== "Escape" || Z.which === 229 || !tt()) && (o || (Z.stopPropagation(), _ && _(Z, "escapeKeyDown")));
  }, q = (st) => (Z) => {
    var _a;
    (_a = st.onClick) == null ? void 0 : _a.call(st, Z), Z.target === Z.currentTarget && _ && _(Z, "backdropClick");
  };
  return { getRootProps: (st = {}) => {
    const Z = zb(t3);
    delete Z.onTransitionEnter, delete Z.onTransitionExited;
    const ct = { ...Z, ...st };
    return { role: "presentation", ...ct, onKeyDown: M(ct), ref: z };
  }, getBackdropProps: (st = {}) => {
    const Z = st;
    return { "aria-hidden": true, ...Z, onClick: q(Z), open: v };
  }, getTransitionProps: () => {
    const st = () => {
      $(false), f && f();
    }, Z = () => {
      $(true), h && h(), c && lt();
    };
    return { onEnter: v_(st, (m == null ? void 0 : m.props.onEnter) ?? D_), onExited: v_(Z, (m == null ? void 0 : m.props.onExited) ?? D_) };
  }, rootRef: z, portalRef: et, isTopModal: tt, exited: A, hasTransition: N };
}
function R2(t3) {
  return rn("MuiModal", t3);
}
Ze("MuiModal", ["root", "hidden", "backdrop"]);
const z2 = (t3) => {
  const { open: r, exited: o, classes: l } = t3;
  return on({ root: ["root", !r && o && "hidden"], backdrop: ["backdrop"] }, R2, l);
}, L2 = jt("div", { name: "MuiModal", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, !o.open && o.exited && r.hidden];
} })(pn(({ theme: t3 }) => ({ position: "fixed", zIndex: (t3.vars || t3).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{ props: ({ ownerState: r }) => !r.open && r.exited, style: { visibility: "hidden" } }] }))), P2 = jt(o2, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }), B2 = B.forwardRef(function(r, o) {
  const l = fn({ name: "MuiModal", props: r }), { BackdropComponent: c = P2, BackdropProps: f, classes: h, className: m, closeAfterTransition: _ = false, children: v, container: b, component: S, components: E = {}, componentsProps: C = {}, disableAutoFocus: z = false, disableEnforceFocus: A = false, disableEscapeKeyDown: $ = false, disablePortal: N = false, disableRestoreFocus: G = false, disableScrollLock: P = false, hideBackdrop: U = false, keepMounted: D = false, onClose: I, onTransitionEnter: tt, onTransitionExited: et, open: lt, slotProps: M = {}, slots: q = {}, theme: X, ...ft } = l, at = { ...l, closeAfterTransition: _, disableAutoFocus: z, disableEnforceFocus: A, disableEscapeKeyDown: $, disablePortal: N, disableRestoreFocus: G, disableScrollLock: P, hideBackdrop: U, keepMounted: D }, { getRootProps: st, getBackdropProps: Z, getTransitionProps: ct, portalRef: ut, isTopModal: gt, exited: w, hasTransition: W } = O2({ ...at, rootRef: o }), pt = { ...at, exited: w }, R = z2(pt), bt = {};
  if (v.props.tabIndex === void 0 && (bt.tabIndex = "-1"), W) {
    const { onEnter: Bt, onExited: Vt } = ct();
    bt.onEnter = Bt, bt.onExited = Vt;
  }
  const wt = { slots: { root: E.Root, backdrop: E.Backdrop, ...q }, slotProps: { ...C, ...M } }, [_t, Dt] = yr("root", { ref: o, elementType: L2, externalForwardedProps: { ...wt, ...ft, component: S }, getSlotProps: st, ownerState: pt, className: le(m, R == null ? void 0 : R.root, !pt.open && pt.exited && (R == null ? void 0 : R.hidden)) }), [Lt, re] = yr("backdrop", { ref: f == null ? void 0 : f.ref, elementType: c, externalForwardedProps: wt, shouldForwardComponentProp: true, additionalProps: f, getSlotProps: (Bt) => Z({ ...Bt, onClick: (Vt) => {
    (Bt == null ? void 0 : Bt.onClick) && Bt.onClick(Vt);
  } }), className: le(f == null ? void 0 : f.className, R == null ? void 0 : R.backdrop), ownerState: pt });
  return !D && !lt && (!W || w) ? null : F.jsx(qE, { ref: ut, container: b, disablePortal: N, children: F.jsxs(_t, { ...Dt, children: [!U && c ? F.jsx(Lt, { ...re }) : null, F.jsx(k2, { disableEnforceFocus: A, disableAutoFocus: z, disableRestoreFocus: G, isEnabled: gt, open: lt, children: B.cloneElement(v, bt) })] }) });
}), N_ = Ze("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), D2 = (t3) => {
  const { classes: r, disableUnderline: o, startAdornment: l, endAdornment: c, size: f, hiddenLabel: h, multiline: m } = t3, _ = { root: ["root", !o && "underline", l && "adornedStart", c && "adornedEnd", f === "small" && `size${te(f)}`, h && "hiddenLabel", m && "multiline"], input: ["input"] }, v = on(_, WE, r);
  return { ...r, ...v };
}, N2 = jt($f, { shouldForwardProp: (t3) => Yi(t3) || t3 === "classes", name: "MuiFilledInput", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [...Uf(t3, r), !o.disableUnderline && r.underline];
} })(pn(({ theme: t3 }) => {
  const r = t3.palette.mode === "light", o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", l = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", c = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", f = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return { position: "relative", backgroundColor: t3.vars ? t3.vars.palette.FilledInput.bg : l, borderTopLeftRadius: (t3.vars || t3).shape.borderRadius, borderTopRightRadius: (t3.vars || t3).shape.borderRadius, transition: t3.transitions.create("background-color", { duration: t3.transitions.duration.shorter, easing: t3.transitions.easing.easeOut }), "&:hover": { backgroundColor: t3.vars ? t3.vars.palette.FilledInput.hoverBg : c, "@media (hover: none)": { backgroundColor: t3.vars ? t3.vars.palette.FilledInput.bg : l } }, [`&.${Ea.focused}`]: { backgroundColor: t3.vars ? t3.vars.palette.FilledInput.bg : l }, [`&.${Ea.disabled}`]: { backgroundColor: t3.vars ? t3.vars.palette.FilledInput.disabledBg : f }, variants: [{ props: ({ ownerState: h }) => !h.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: t3.transitions.create("transform", { duration: t3.transitions.duration.shorter, easing: t3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${Ea.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${Ea.error}`]: { "&::before, &::after": { borderBottomColor: (t3.vars || t3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${t3.vars ? `rgba(${t3.vars.palette.common.onBackgroundChannel} / ${t3.vars.opacity.inputUnderline})` : o}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: t3.transitions.create("border-bottom-color", { duration: t3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${Ea.disabled}, .${Ea.error}):before`]: { borderBottom: `1px solid ${(t3.vars || t3).palette.text.primary}` }, [`&.${Ea.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(t3.palette).filter(Ko()).map(([h]) => {
    var _a;
    return { props: { disableUnderline: false, color: h }, style: { "&::after": { borderBottom: `2px solid ${(_a = (t3.vars || t3).palette[h]) == null ? void 0 : _a.main}` } } };
  }), { props: ({ ownerState: h }) => h.startAdornment, style: { paddingLeft: 12 } }, { props: ({ ownerState: h }) => h.endAdornment, style: { paddingRight: 12 } }, { props: ({ ownerState: h }) => h.multiline, style: { padding: "25px 12px 8px" } }, { props: ({ ownerState: h, size: m }) => h.multiline && m === "small", style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: h }) => h.multiline && h.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: h }) => h.multiline && h.hiddenLabel && h.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }] };
})), I2 = jt(qf, { name: "MuiFilledInput", slot: "Input", overridesResolver: Zf })(pn(({ theme: t3 }) => ({ paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12, ...!t3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: t3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: t3.palette.mode === "light" ? null : "#fff", caretColor: t3.palette.mode === "light" ? null : "#fff", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, ...t3.vars && { "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }, [t3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: r }) => r.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } }, { props: ({ ownerState: r }) => r.hiddenLabel && r.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }, { props: ({ ownerState: r }) => r.multiline, style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 } }] }))), Hb = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiFilledInput" }), { disableUnderline: c = false, components: f = {}, componentsProps: h, fullWidth: m = false, hiddenLabel: _, inputComponent: v = "input", multiline: b = false, slotProps: S, slots: E = {}, type: C = "text", ...z } = l, A = { ...l, disableUnderline: c, fullWidth: m, inputComponent: v, multiline: b, type: C }, $ = D2(l), N = { root: { ownerState: A }, input: { ownerState: A } }, G = S ?? h ? Sn(N, S ?? h) : N, P = E.root ?? f.Root ?? N2, U = E.input ?? f.Input ?? I2;
  return F.jsx(wm, { slots: { root: P, input: U }, slotProps: G, fullWidth: m, inputComponent: v, multiline: b, ref: o, type: C, ...z, classes: $ });
});
Hb.muiName = "Input";
function Bp(t3) {
  return `scale(${t3}, ${t3 ** 2})`;
}
const H2 = { entering: { opacity: 1, transform: Bp(1) }, entered: { opacity: 1, transform: "none" } }, op = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Dp = B.forwardRef(function(r, o) {
  const { addEndListener: l, appear: c = true, children: f, easing: h, in: m, onEnter: _, onEntered: v, onEntering: b, onExit: S, onExited: E, onExiting: C, style: z, timeout: A = "auto", TransitionComponent: $ = _r, ...N } = r, G = Mb(), P = B.useRef(), U = La(), D = B.useRef(null), I = Yn(D, Su(f), o), tt = (st) => (Z) => {
    if (st) {
      const ct = D.current;
      Z === void 0 ? st(ct) : st(ct, Z);
    }
  }, et = tt(b), lt = tt((st, Z) => {
    Ab(st);
    const { duration: ct, delay: ut, easing: gt } = _f({ style: z, timeout: A, easing: h }, { mode: "enter" });
    let w;
    A === "auto" ? (w = U.transitions.getAutoHeightDuration(st.clientHeight), P.current = w) : w = ct, st.style.transition = [U.transitions.create("opacity", { duration: w, delay: ut }), U.transitions.create("transform", { duration: op ? w : w * 0.666, delay: ut, easing: gt })].join(","), _ && _(st, Z);
  }), M = tt(v), q = tt(C), X = tt((st) => {
    const { duration: Z, delay: ct, easing: ut } = _f({ style: z, timeout: A, easing: h }, { mode: "exit" });
    let gt;
    A === "auto" ? (gt = U.transitions.getAutoHeightDuration(st.clientHeight), P.current = gt) : gt = Z, st.style.transition = [U.transitions.create("opacity", { duration: gt, delay: ct }), U.transitions.create("transform", { duration: op ? gt : gt * 0.666, delay: op ? ct : ct || gt * 0.333, easing: ut })].join(","), st.style.opacity = 0, st.style.transform = Bp(0.75), S && S(st);
  }), ft = tt(E), at = (st) => {
    A === "auto" && G.start(P.current || 0, st), l && l(D.current, st);
  };
  return F.jsx($, { appear: c, in: m, nodeRef: D, onEnter: lt, onEntered: M, onEntering: et, onExit: X, onExited: ft, onExiting: q, addEndListener: at, timeout: A === "auto" ? null : A, ...N, children: (st, { ownerState: Z, ...ct }) => B.cloneElement(f, { style: { opacity: 0, transform: Bp(0.75), visibility: st === "exited" && !m ? "hidden" : void 0, ...H2[st], ...z, ...f.props.style }, ref: I, ...ct }) });
});
Dp && (Dp.muiSupportAuto = true);
const j2 = (t3) => {
  const { classes: r, disableUnderline: o } = t3, c = on({ root: ["root", !o && "underline"], input: ["input"] }, KE, r);
  return { ...r, ...c };
}, U2 = jt($f, { shouldForwardProp: (t3) => Yi(t3) || t3 === "classes", name: "MuiInput", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [...Uf(t3, r), !o.disableUnderline && r.underline];
} })(pn(({ theme: t3 }) => {
  let o = t3.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return t3.vars && (o = `rgba(${t3.vars.palette.common.onBackgroundChannel} / ${t3.vars.opacity.inputUnderline})`), { position: "relative", variants: [{ props: ({ ownerState: l }) => l.formControl, style: { "label + &": { marginTop: 16 } } }, { props: ({ ownerState: l }) => !l.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: t3.transitions.create("transform", { duration: t3.transitions.duration.shorter, easing: t3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${Fs.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${Fs.error}`]: { "&::before, &::after": { borderBottomColor: (t3.vars || t3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${o}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: t3.transitions.create("border-bottom-color", { duration: t3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${Fs.disabled}, .${Fs.error}):before`]: { borderBottom: `2px solid ${(t3.vars || t3).palette.text.primary}`, "@media (hover: none)": { borderBottom: `1px solid ${o}` } }, [`&.${Fs.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(t3.palette).filter(Ko()).map(([l]) => ({ props: { color: l, disableUnderline: false }, style: { "&::after": { borderBottom: `2px solid ${(t3.vars || t3).palette[l].main}` } } }))] };
})), Z2 = jt(qf, { name: "MuiInput", slot: "Input", overridesResolver: Zf })({}), jb = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiInput" }), { disableUnderline: c = false, components: f = {}, componentsProps: h, fullWidth: m = false, inputComponent: _ = "input", multiline: v = false, slotProps: b, slots: S = {}, type: E = "text", ...C } = l, z = j2(l), $ = { root: { ownerState: { disableUnderline: c } } }, N = b ?? h ? Sn(b ?? h, $) : $, G = S.root ?? f.Root ?? U2, P = S.input ?? f.Input ?? Z2;
  return F.jsx(wm, { slots: { root: G, input: P }, slotProps: N, fullWidth: m, inputComponent: _, multiline: v, ref: o, type: E, ...C, classes: z });
});
jb.muiName = "Input";
const Np = B.createContext({});
function $2(t3) {
  return rn("MuiList", t3);
}
Ze("MuiList", ["root", "padding", "dense", "subheader"]);
const q2 = (t3) => {
  const { classes: r, disablePadding: o, dense: l, subheader: c } = t3;
  return on({ root: ["root", !o && "padding", l && "dense", c && "subheader"] }, $2, r);
}, V2 = jt("ul", { name: "MuiList", slot: "Root", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, !o.disablePadding && r.padding, o.dense && r.dense, o.subheader && r.subheader];
} })({ listStyle: "none", margin: 0, padding: 0, position: "relative", variants: [{ props: ({ ownerState: t3 }) => !t3.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } }, { props: ({ ownerState: t3 }) => t3.subheader, style: { paddingTop: 0 } }] }), F2 = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiList" }), { children: c, className: f, component: h = "ul", dense: m = false, disablePadding: _ = false, subheader: v, ...b } = l, S = B.useMemo(() => ({ dense: m }), [m]), E = { ...l, component: h, dense: m, disablePadding: _ }, C = q2(E);
  return F.jsx(Np.Provider, { value: S, children: F.jsxs(V2, { as: h, className: le(C.root, f), ref: o, ownerState: E, ...b, children: [v, c] }) });
}), I_ = Ze("MuiListItemIcon", ["root", "alignItemsFlexStart"]), H_ = Ze("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function ap(t3, r, o) {
  return t3 === r ? t3.firstChild : r && r.nextElementSibling ? r.nextElementSibling : o ? null : t3.firstChild;
}
function j_(t3, r, o) {
  return t3 === r ? o ? t3.firstChild : t3.lastChild : r && r.previousElementSibling ? r.previousElementSibling : o ? null : t3.lastChild;
}
function Ub(t3, r) {
  if (r === void 0) return true;
  let o = t3.innerText;
  return o === void 0 && (o = t3.textContent), o = o.trim().toLowerCase(), o.length === 0 ? false : r.repeating ? o[0] === r.keys[0] : o.startsWith(r.keys.join(""));
}
function Gs(t3, r, o, l, c, f) {
  let h = false, m = c(t3, r, r ? o : false);
  for (; m; ) {
    if (m === t3.firstChild) {
      if (h) return false;
      h = true;
    }
    const _ = l ? false : m.disabled || m.getAttribute("aria-disabled") === "true";
    if (!m.hasAttribute("tabindex") || !Ub(m, f) || _) m = c(t3, m, o);
    else return m.focus(), true;
  }
  return false;
}
const G2 = B.forwardRef(function(r, o) {
  const { actions: l, autoFocus: c = false, autoFocusItem: f = false, children: h, className: m, disabledItemsFocusable: _ = false, disableListWrap: v = false, onKeyDown: b, variant: S = "selectedMenu", ...E } = r, C = B.useRef(null), z = B.useRef({ keys: [], repeating: true, previousKeyMatched: true, lastTime: null });
  Wr(() => {
    c && C.current.focus();
  }, [c]), B.useImperativeHandle(l, () => ({ adjustStyleForScrollbar: (P, { direction: U }) => {
    const D = !C.current.style.width;
    if (P.clientHeight < C.current.clientHeight && D) {
      const I = `${Ib(Jr(P))}px`;
      C.current.style[U === "rtl" ? "paddingLeft" : "paddingRight"] = I, C.current.style.width = `calc(100% + ${I})`;
    }
    return C.current;
  } }), []);
  const A = (P) => {
    const U = C.current, D = P.key;
    if (P.ctrlKey || P.metaKey || P.altKey) {
      b && b(P);
      return;
    }
    const tt = Gi(U).activeElement;
    if (D === "ArrowDown") P.preventDefault(), Gs(U, tt, v, _, ap);
    else if (D === "ArrowUp") P.preventDefault(), Gs(U, tt, v, _, j_);
    else if (D === "Home") P.preventDefault(), Gs(U, null, v, _, ap);
    else if (D === "End") P.preventDefault(), Gs(U, null, v, _, j_);
    else if (D.length === 1) {
      const et = z.current, lt = D.toLowerCase(), M = performance.now();
      et.keys.length > 0 && (M - et.lastTime > 500 ? (et.keys = [], et.repeating = true, et.previousKeyMatched = true) : et.repeating && lt !== et.keys[0] && (et.repeating = false)), et.lastTime = M, et.keys.push(lt);
      const q = tt && !et.repeating && Ub(tt, et);
      et.previousKeyMatched && (q || Gs(U, tt, false, _, ap, et)) ? P.preventDefault() : et.previousKeyMatched = false;
    }
    b && b(P);
  }, $ = Yn(C, o);
  let N = -1;
  B.Children.forEach(h, (P, U) => {
    if (!B.isValidElement(P)) {
      N === U && (N += 1, N >= h.length && (N = -1));
      return;
    }
    P.props.disabled || (S === "selectedMenu" && P.props.selected || N === -1) && (N = U), N === U && (P.props.disabled || P.props.muiSkipListHighlight || P.type.muiSkipListHighlight) && (N += 1, N >= h.length && (N = -1));
  });
  const G = B.Children.map(h, (P, U) => {
    if (U === N) {
      const D = {};
      return f && (D.autoFocus = true), P.props.tabIndex === void 0 && S === "selectedMenu" && (D.tabIndex = 0), B.cloneElement(P, D);
    }
    return P;
  });
  return F.jsx(F2, { role: "menu", ref: $, className: m, onKeyDown: A, tabIndex: c ? 0 : -1, ...E, children: G });
});
function Y2(t3) {
  return rn("MuiPopover", t3);
}
Ze("MuiPopover", ["root", "paper"]);
function U_(t3, r) {
  let o = 0;
  return typeof r == "number" ? o = r : r === "center" ? o = t3.height / 2 : r === "bottom" && (o = t3.height), o;
}
function Z_(t3, r) {
  let o = 0;
  return typeof r == "number" ? o = r : r === "center" ? o = t3.width / 2 : r === "right" && (o = t3.width), o;
}
function $_(t3) {
  return [t3.horizontal, t3.vertical].map((r) => typeof r == "number" ? `${r}px` : r).join(" ");
}
function rf(t3) {
  return typeof t3 == "function" ? t3() : t3;
}
const X2 = (t3) => {
  const { classes: r } = t3;
  return on({ root: ["root"], paper: ["paper"] }, Y2, r);
}, K2 = jt(B2, { name: "MuiPopover", slot: "Root" })({}), Zb = jt(sE, { name: "MuiPopover", slot: "Paper" })({ position: "absolute", overflowY: "auto", overflowX: "hidden", minWidth: 16, minHeight: 16, maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 32px)", outline: 0 }), Q2 = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiPopover" }), { action: c, anchorEl: f, anchorOrigin: h = { vertical: "top", horizontal: "left" }, anchorPosition: m, anchorReference: _ = "anchorEl", children: v, className: b, container: S, elevation: E = 8, marginThreshold: C = 16, open: z, PaperProps: A = {}, slots: $ = {}, slotProps: N = {}, transformOrigin: G = { vertical: "top", horizontal: "left" }, TransitionComponent: P, transitionDuration: U = "auto", TransitionProps: D = {}, disableScrollLock: I = false, ...tt } = l, et = B.useRef(), lt = { ...l, anchorOrigin: h, anchorReference: _, elevation: E, marginThreshold: C, transformOrigin: G, TransitionComponent: P, transitionDuration: U, TransitionProps: D }, M = X2(lt), q = B.useCallback(() => {
    if (_ === "anchorPosition") return m;
    const Bt = rf(f), Kt = (Bt && Bt.nodeType === 1 ? Bt : Gi(et.current).body).getBoundingClientRect();
    return { top: Kt.top + U_(Kt, h.vertical), left: Kt.left + Z_(Kt, h.horizontal) };
  }, [f, h.horizontal, h.vertical, m, _]), X = B.useCallback((Bt) => ({ vertical: U_(Bt, G.vertical), horizontal: Z_(Bt, G.horizontal) }), [G.horizontal, G.vertical]), ft = B.useCallback((Bt) => {
    const Vt = { width: Bt.offsetWidth, height: Bt.offsetHeight }, Kt = X(Vt);
    if (_ === "none") return { top: null, left: null, transformOrigin: $_(Kt) };
    const Re = q();
    let Ft = Re.top - Kt.vertical, fe = Re.left - Kt.horizontal;
    const We = Ft + Vt.height, se = fe + Vt.width, _e = Jr(rf(f)), Se = _e.innerHeight - C, ke = _e.innerWidth - C;
    if (C !== null && Ft < C) {
      const de = Ft - C;
      Ft -= de, Kt.vertical += de;
    } else if (C !== null && We > Se) {
      const de = We - Se;
      Ft -= de, Kt.vertical += de;
    }
    if (C !== null && fe < C) {
      const de = fe - C;
      fe -= de, Kt.horizontal += de;
    } else if (se > ke) {
      const de = se - ke;
      fe -= de, Kt.horizontal += de;
    }
    return { top: `${Math.round(Ft)}px`, left: `${Math.round(fe)}px`, transformOrigin: $_(Kt) };
  }, [f, _, q, X, C]), [at, st] = B.useState(z), Z = B.useCallback(() => {
    const Bt = et.current;
    if (!Bt) return;
    const Vt = ft(Bt);
    Vt.top !== null && Bt.style.setProperty("top", Vt.top), Vt.left !== null && (Bt.style.left = Vt.left), Bt.style.transformOrigin = Vt.transformOrigin, st(true);
  }, [ft]);
  B.useEffect(() => (I && window.addEventListener("scroll", Z), () => window.removeEventListener("scroll", Z)), [f, I, Z]);
  const ct = () => {
    Z();
  }, ut = () => {
    st(false);
  };
  B.useEffect(() => {
    z && Z();
  }), B.useImperativeHandle(c, () => z ? { updatePosition: () => {
    Z();
  } } : null, [z, Z]), B.useEffect(() => {
    if (!z) return;
    const Bt = Cb(() => {
      Z();
    }), Vt = Jr(rf(f));
    return Vt.addEventListener("resize", Bt), () => {
      Bt.clear(), Vt.removeEventListener("resize", Bt);
    };
  }, [f, z, Z]);
  let gt = U;
  const w = { slots: { transition: P, ...$ }, slotProps: { transition: D, paper: A, ...N } }, [W, pt] = yr("transition", { elementType: Dp, externalForwardedProps: w, ownerState: lt, getSlotProps: (Bt) => ({ ...Bt, onEntering: (Vt, Kt) => {
    var _a;
    (_a = Bt.onEntering) == null ? void 0 : _a.call(Bt, Vt, Kt), ct();
  }, onExited: (Vt) => {
    var _a;
    (_a = Bt.onExited) == null ? void 0 : _a.call(Bt, Vt), ut();
  } }), additionalProps: { appear: true, in: z } });
  U === "auto" && !W.muiSupportAuto && (gt = void 0);
  const R = S || (f ? Gi(rf(f)).body : void 0), [bt, { slots: wt, slotProps: _t, ...Dt }] = yr("root", { ref: o, elementType: K2, externalForwardedProps: { ...w, ...tt }, shouldForwardComponentProp: true, additionalProps: { slots: { backdrop: $.backdrop }, slotProps: { backdrop: XT(typeof N.backdrop == "function" ? N.backdrop(lt) : N.backdrop, { invisible: true }) }, container: R, open: z }, ownerState: lt, className: le(M.root, b) }), [Lt, re] = yr("paper", { ref: et, className: M.paper, elementType: Zb, externalForwardedProps: w, shouldForwardComponentProp: true, additionalProps: { elevation: E, style: at ? void 0 : { opacity: 0 } }, ownerState: lt });
  return F.jsx(bt, { ...Dt, ...!Pp(bt) && { slots: wt, slotProps: _t, disableScrollLock: I }, children: F.jsx(W, { ...pt, timeout: gt, children: F.jsx(Lt, { ...re, children: v }) }) });
});
function W2(t3) {
  return rn("MuiMenu", t3);
}
Ze("MuiMenu", ["root", "paper", "list"]);
const J2 = { vertical: "top", horizontal: "right" }, tk = { vertical: "top", horizontal: "left" }, ek = (t3) => {
  const { classes: r } = t3;
  return on({ root: ["root"], paper: ["paper"], list: ["list"] }, W2, r);
}, nk = jt(Q2, { shouldForwardProp: (t3) => Yi(t3) || t3 === "classes", name: "MuiMenu", slot: "Root" })({}), ik = jt(Zb, { name: "MuiMenu", slot: "Paper" })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }), rk = jt(G2, { name: "MuiMenu", slot: "List" })({ outline: 0 }), ok = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiMenu" }), { autoFocus: c = true, children: f, className: h, disableAutoFocusItem: m = false, MenuListProps: _ = {}, onClose: v, open: b, PaperProps: S = {}, PopoverClasses: E, transitionDuration: C = "auto", TransitionProps: { onEntering: z, ...A } = {}, variant: $ = "selectedMenu", slots: N = {}, slotProps: G = {}, ...P } = l, U = LC(), D = { ...l, autoFocus: c, disableAutoFocusItem: m, MenuListProps: _, onEntering: z, PaperProps: S, transitionDuration: C, TransitionProps: A, variant: $ }, I = ek(D), tt = c && !m && b, et = B.useRef(null), lt = (gt, w) => {
    et.current && et.current.adjustStyleForScrollbar(gt, { direction: U ? "rtl" : "ltr" }), z && z(gt, w);
  }, M = (gt) => {
    gt.key === "Tab" && (gt.preventDefault(), v && v(gt, "tabKeyDown"));
  };
  let q = -1;
  B.Children.map(f, (gt, w) => {
    B.isValidElement(gt) && (gt.props.disabled || ($ === "selectedMenu" && gt.props.selected || q === -1) && (q = w));
  });
  const X = { slots: N, slotProps: { list: _, transition: A, paper: S, ...G } }, ft = ZE({ elementType: N.root, externalSlotProps: G.root, ownerState: D, className: [I.root, h] }), [at, st] = yr("paper", { className: I.paper, elementType: ik, externalForwardedProps: X, shouldForwardComponentProp: true, ownerState: D }), [Z, ct] = yr("list", { className: le(I.list, _.className), elementType: rk, shouldForwardComponentProp: true, externalForwardedProps: X, getSlotProps: (gt) => ({ ...gt, onKeyDown: (w) => {
    var _a;
    M(w), (_a = gt.onKeyDown) == null ? void 0 : _a.call(gt, w);
  } }), ownerState: D }), ut = typeof X.slotProps.transition == "function" ? X.slotProps.transition(D) : X.slotProps.transition;
  return F.jsx(nk, { onClose: v, anchorOrigin: { vertical: "bottom", horizontal: U ? "right" : "left" }, transformOrigin: U ? J2 : tk, slots: { root: N.root, paper: at, backdrop: N.backdrop, ...N.transition && { transition: N.transition } }, slotProps: { root: ft, paper: st, backdrop: typeof G.backdrop == "function" ? G.backdrop(D) : G.backdrop, transition: { ...ut, onEntering: (...gt) => {
    var _a;
    lt(...gt), (_a = ut == null ? void 0 : ut.onEntering) == null ? void 0 : _a.call(ut, ...gt);
  } } }, open: b, ref: o, transitionDuration: C, ownerState: D, ...P, classes: E, children: F.jsx(Z, { actions: et, autoFocus: c && (q === -1 || m), autoFocusItem: tt, variant: $, ...ct, children: f }) });
});
function ak(t3) {
  return rn("MuiMenuItem", t3);
}
const Ys = Ze("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), lk = (t3, r) => {
  const { ownerState: o } = t3;
  return [r.root, o.dense && r.dense, o.divider && r.divider, !o.disableGutters && r.gutters];
}, sk = (t3) => {
  const { disabled: r, dense: o, divider: l, disableGutters: c, selected: f, classes: h } = t3, _ = on({ root: ["root", o && "dense", r && "disabled", !c && "gutters", l && "divider", f && "selected"] }, ak, h);
  return { ...h, ..._ };
}, uk = jt(_m, { shouldForwardProp: (t3) => Yi(t3) || t3 === "classes", name: "MuiMenuItem", slot: "Root", overridesResolver: lk })(pn(({ theme: t3 }) => ({ ...t3.typography.body1, display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: "border-box", whiteSpace: "nowrap", "&:hover": { textDecoration: "none", backgroundColor: (t3.vars || t3).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${Ys.selected}`]: { backgroundColor: t3.vars ? `rgba(${t3.vars.palette.primary.mainChannel} / ${t3.vars.palette.action.selectedOpacity})` : ni(t3.palette.primary.main, t3.palette.action.selectedOpacity), [`&.${Ys.focusVisible}`]: { backgroundColor: t3.vars ? `rgba(${t3.vars.palette.primary.mainChannel} / calc(${t3.vars.palette.action.selectedOpacity} + ${t3.vars.palette.action.focusOpacity}))` : ni(t3.palette.primary.main, t3.palette.action.selectedOpacity + t3.palette.action.focusOpacity) } }, [`&.${Ys.selected}:hover`]: { backgroundColor: t3.vars ? `rgba(${t3.vars.palette.primary.mainChannel} / calc(${t3.vars.palette.action.selectedOpacity} + ${t3.vars.palette.action.hoverOpacity}))` : ni(t3.palette.primary.main, t3.palette.action.selectedOpacity + t3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: t3.vars ? `rgba(${t3.vars.palette.primary.mainChannel} / ${t3.vars.palette.action.selectedOpacity})` : ni(t3.palette.primary.main, t3.palette.action.selectedOpacity) } }, [`&.${Ys.focusVisible}`]: { backgroundColor: (t3.vars || t3).palette.action.focus }, [`&.${Ys.disabled}`]: { opacity: (t3.vars || t3).palette.action.disabledOpacity }, [`& + .${N_.root}`]: { marginTop: t3.spacing(1), marginBottom: t3.spacing(1) }, [`& + .${N_.inset}`]: { marginLeft: 52 }, [`& .${H_.root}`]: { marginTop: 0, marginBottom: 0 }, [`& .${H_.inset}`]: { paddingLeft: 36 }, [`& .${I_.root}`]: { minWidth: 36 }, variants: [{ props: ({ ownerState: r }) => !r.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: r }) => r.divider, style: { borderBottom: `1px solid ${(t3.vars || t3).palette.divider}`, backgroundClip: "padding-box" } }, { props: ({ ownerState: r }) => !r.dense, style: { [t3.breakpoints.up("sm")]: { minHeight: "auto" } } }, { props: ({ ownerState: r }) => r.dense, style: { minHeight: 32, paddingTop: 4, paddingBottom: 4, ...t3.typography.body2, [`& .${I_.root} svg`]: { fontSize: "1.25rem" } } }] }))), ck = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiMenuItem" }), { autoFocus: c = false, component: f = "li", dense: h = false, divider: m = false, disableGutters: _ = false, focusVisibleClassName: v, role: b = "menuitem", tabIndex: S, className: E, ...C } = l, z = B.useContext(Np), A = B.useMemo(() => ({ dense: h || z.dense || false, disableGutters: _ }), [z.dense, h, _]), $ = B.useRef(null);
  Wr(() => {
    c && $.current && $.current.focus();
  }, [c]);
  const N = { ...l, dense: A.dense, divider: m, disableGutters: _ }, G = sk(l), P = Yn($, o);
  let U;
  return l.disabled || (U = S !== void 0 ? S : -1), F.jsx(Np.Provider, { value: A, children: F.jsx(uk, { ref: P, role: b, tabIndex: U, component: f, focusVisibleClassName: le(G.focusVisible, v), className: le(G.root, E), ...C, ownerState: N, classes: G }) });
});
function fk(t3) {
  return rn("MuiNativeSelect", t3);
}
const Tm = Ze("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), dk = (t3) => {
  const { classes: r, variant: o, disabled: l, multiple: c, open: f, error: h } = t3, m = { select: ["select", o, l && "disabled", c && "multiple", h && "error"], icon: ["icon", `icon${te(o)}`, f && "iconOpen", l && "disabled"] };
  return on(m, fk, r);
}, $b = jt("select")(({ theme: t3 }) => ({ MozAppearance: "none", WebkitAppearance: "none", userSelect: "none", borderRadius: 0, cursor: "pointer", "&:focus": { borderRadius: 0 }, [`&.${Tm.disabled}`]: { cursor: "default" }, "&[multiple]": { height: "auto" }, "&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: (t3.vars || t3).palette.background.paper }, variants: [{ props: ({ ownerState: r }) => r.variant !== "filled" && r.variant !== "outlined", style: { "&&&": { paddingRight: 24, minWidth: 16 } } }, { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } }, { props: { variant: "outlined" }, style: { borderRadius: (t3.vars || t3).shape.borderRadius, "&:focus": { borderRadius: (t3.vars || t3).shape.borderRadius }, "&&&": { paddingRight: 32 } } }] })), hk = jt($b, { name: "MuiNativeSelect", slot: "Select", shouldForwardProp: Yi, overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.select, r[o.variant], o.error && r.error, { [`&.${Tm.multiple}`]: r.multiple }];
} })({}), qb = jt("svg")(({ theme: t3 }) => ({ position: "absolute", right: 0, top: "calc(50% - .5em)", pointerEvents: "none", color: (t3.vars || t3).palette.action.active, [`&.${Tm.disabled}`]: { color: (t3.vars || t3).palette.action.disabled }, variants: [{ props: ({ ownerState: r }) => r.open, style: { transform: "rotate(180deg)" } }, { props: { variant: "filled" }, style: { right: 7 } }, { props: { variant: "outlined" }, style: { right: 7 } }] })), pk = jt(qb, { name: "MuiNativeSelect", slot: "Icon", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.icon, o.variant && r[`icon${te(o.variant)}`], o.open && r.iconOpen];
} })({}), mk = B.forwardRef(function(r, o) {
  const { className: l, disabled: c, error: f, IconComponent: h, inputRef: m, variant: _ = "standard", ...v } = r, b = { ...r, disabled: c, variant: _, error: f }, S = dk(b);
  return F.jsxs(B.Fragment, { children: [F.jsx(hk, { ownerState: b, className: le(S.select, l), disabled: c, ref: m || o, ...v }), r.multiple ? null : F.jsx(pk, { as: h, ownerState: b, className: S.icon })] });
});
var q_;
const gk = jt("fieldset", { shouldForwardProp: Yi })({ textAlign: "left", position: "absolute", bottom: 0, right: 0, top: -5, left: 0, margin: 0, padding: "0 8px", pointerEvents: "none", borderRadius: "inherit", borderStyle: "solid", borderWidth: 1, overflow: "hidden", minWidth: "0%" }), yk = jt("legend", { shouldForwardProp: Yi })(pn(({ theme: t3 }) => ({ float: "unset", width: "auto", overflow: "hidden", variants: [{ props: ({ ownerState: r }) => !r.withLabel, style: { padding: 0, lineHeight: "11px", transition: t3.transitions.create("width", { duration: 150, easing: t3.transitions.easing.easeOut }) } }, { props: ({ ownerState: r }) => r.withLabel, style: { display: "block", padding: 0, height: 11, fontSize: "0.75em", visibility: "hidden", maxWidth: 0.01, transition: t3.transitions.create("max-width", { duration: 50, easing: t3.transitions.easing.easeOut }), whiteSpace: "nowrap", "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" } } }, { props: ({ ownerState: r }) => r.withLabel && r.notched, style: { maxWidth: "100%", transition: t3.transitions.create("max-width", { duration: 100, easing: t3.transitions.easing.easeOut, delay: 50 }) } }] })));
function vk(t3) {
  const { children: r, classes: o, className: l, label: c, notched: f, ...h } = t3, m = c != null && c !== "", _ = { ...t3, notched: f, withLabel: m };
  return F.jsx(gk, { "aria-hidden": true, className: l, ownerState: _, ...h, children: F.jsx(yk, { ownerState: _, children: m ? F.jsx("span", { children: c }) : q_ || (q_ = F.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) }) });
}
const _k = (t3) => {
  const { classes: r } = t3, l = on({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, QE, r);
  return { ...r, ...l };
}, bk = jt($f, { shouldForwardProp: (t3) => Yi(t3) || t3 === "classes", name: "MuiOutlinedInput", slot: "Root", overridesResolver: Uf })(pn(({ theme: t3 }) => {
  const r = t3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { position: "relative", borderRadius: (t3.vars || t3).shape.borderRadius, [`&:hover .${ur.notchedOutline}`]: { borderColor: (t3.vars || t3).palette.text.primary }, "@media (hover: none)": { [`&:hover .${ur.notchedOutline}`]: { borderColor: t3.vars ? `rgba(${t3.vars.palette.common.onBackgroundChannel} / 0.23)` : r } }, [`&.${ur.focused} .${ur.notchedOutline}`]: { borderWidth: 2 }, variants: [...Object.entries(t3.palette).filter(Ko()).map(([o]) => ({ props: { color: o }, style: { [`&.${ur.focused} .${ur.notchedOutline}`]: { borderColor: (t3.vars || t3).palette[o].main } } })), { props: {}, style: { [`&.${ur.error} .${ur.notchedOutline}`]: { borderColor: (t3.vars || t3).palette.error.main }, [`&.${ur.disabled} .${ur.notchedOutline}`]: { borderColor: (t3.vars || t3).palette.action.disabled } } }, { props: ({ ownerState: o }) => o.startAdornment, style: { paddingLeft: 14 } }, { props: ({ ownerState: o }) => o.endAdornment, style: { paddingRight: 14 } }, { props: ({ ownerState: o }) => o.multiline, style: { padding: "16.5px 14px" } }, { props: ({ ownerState: o, size: l }) => o.multiline && l === "small", style: { padding: "8.5px 14px" } }] };
})), xk = jt(vk, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(pn(({ theme: t3 }) => {
  const r = t3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { borderColor: t3.vars ? `rgba(${t3.vars.palette.common.onBackgroundChannel} / 0.23)` : r };
})), Sk = jt(qf, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Zf })(pn(({ theme: t3 }) => ({ padding: "16.5px 14px", ...!t3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: t3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: t3.palette.mode === "light" ? null : "#fff", caretColor: t3.palette.mode === "light" ? null : "#fff", borderRadius: "inherit" } }, ...t3.vars && { "&:-webkit-autofill": { borderRadius: "inherit" }, [t3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { padding: "8.5px 14px" } }, { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } }, { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 0 } }] }))), Vb = B.forwardRef(function(r, o) {
  const l = fn({ props: r, name: "MuiOutlinedInput" }), { components: c = {}, fullWidth: f = false, inputComponent: h = "input", label: m, multiline: _ = false, notched: v, slots: b = {}, slotProps: S = {}, type: E = "text", ...C } = l, z = _k(l), A = Sm(), $ = xm({ props: l, muiFormControl: A, states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"] }), N = { ...l, color: $.color || "primary", disabled: $.disabled, error: $.error, focused: $.focused, formControl: A, fullWidth: f, hiddenLabel: $.hiddenLabel, multiline: _, size: $.size, type: E }, G = b.root ?? c.Root ?? bk, P = b.input ?? c.Input ?? Sk, [U, D] = yr("notchedOutline", { elementType: xk, className: z.notchedOutline, shouldForwardComponentProp: true, ownerState: N, externalForwardedProps: { slots: b, slotProps: S }, additionalProps: { label: m != null && m !== "" && $.required ? F.jsxs(B.Fragment, { children: [m, "\u2009", "*"] }) : m } });
  return F.jsx(wm, { slots: { root: G, input: P }, slotProps: S, renderSuffix: (I) => F.jsx(U, { ...D, notched: typeof v < "u" ? v : !!(I.startAdornment || I.filled || I.focused) }), fullWidth: f, inputComponent: h, multiline: _, ref: o, type: E, ...C, classes: { ...z, notchedOutline: null } });
});
Vb.muiName = "Input";
function Fb(t3) {
  return rn("MuiSelect", t3);
}
const Xs = Ze("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var V_;
const wk = jt($b, { name: "MuiSelect", slot: "Select", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [{ [`&.${Xs.select}`]: r.select }, { [`&.${Xs.select}`]: r[o.variant] }, { [`&.${Xs.error}`]: r.error }, { [`&.${Xs.multiple}`]: r.multiple }];
} })({ [`&.${Xs.select}`]: { height: "auto", minHeight: "1.4375em", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } }), Ck = jt(qb, { name: "MuiSelect", slot: "Icon", overridesResolver: (t3, r) => {
  const { ownerState: o } = t3;
  return [r.icon, o.variant && r[`icon${te(o.variant)}`], o.open && r.iconOpen];
} })({}), Tk = jt("input", { shouldForwardProp: (t3) => wb(t3) && t3 !== "classes", name: "MuiSelect", slot: "NativeInput" })({ bottom: 0, left: 0, position: "absolute", opacity: 0, pointerEvents: "none", width: "100%", boxSizing: "border-box" });
function F_(t3, r) {
  return typeof r == "object" && r !== null ? t3 === r : String(t3) === String(r);
}
function Ek(t3) {
  return t3 == null || typeof t3 == "string" && !t3.trim();
}
const kk = (t3) => {
  const { classes: r, variant: o, disabled: l, multiple: c, open: f, error: h } = t3, m = { select: ["select", o, l && "disabled", c && "multiple", h && "error"], icon: ["icon", `icon${te(o)}`, f && "iconOpen", l && "disabled"], nativeInput: ["nativeInput"] };
  return on(m, Fb, r);
}, Mk = B.forwardRef(function(r, o) {
  var _a;
  const { "aria-describedby": l, "aria-label": c, autoFocus: f, autoWidth: h, children: m, className: _, defaultOpen: v, defaultValue: b, disabled: S, displayEmpty: E, error: C = false, IconComponent: z, inputRef: A, labelId: $, MenuProps: N = {}, multiple: G, name: P, onBlur: U, onChange: D, onClose: I, onFocus: tt, onOpen: et, open: lt, readOnly: M, renderValue: q, required: X, SelectDisplayProps: ft = {}, tabIndex: at, type: st, value: Z, variant: ct = "standard", ...ut } = r, [gt, w] = S_({ controlled: Z, default: b, name: "Select" }), [W, pt] = S_({ controlled: lt, default: v, name: "Select" }), R = B.useRef(null), bt = B.useRef(null), [wt, _t] = B.useState(null), { current: Dt } = B.useRef(lt != null), [Lt, re] = B.useState(), Bt = Yn(o, A), Vt = B.useCallback((At) => {
    bt.current = At, At && _t(At);
  }, []), Kt = wt == null ? void 0 : wt.parentNode;
  B.useImperativeHandle(Bt, () => ({ focus: () => {
    bt.current.focus();
  }, node: R.current, value: gt }), [gt]), B.useEffect(() => {
    v && W && wt && !Dt && (re(h ? null : Kt.clientWidth), bt.current.focus());
  }, [wt, h]), B.useEffect(() => {
    f && bt.current.focus();
  }, [f]), B.useEffect(() => {
    if (!$) return;
    const At = Gi(bt.current).getElementById($);
    if (At) {
      const Xt = () => {
        getSelection().isCollapsed && bt.current.focus();
      };
      return At.addEventListener("click", Xt), () => {
        At.removeEventListener("click", Xt);
      };
    }
  }, [$]);
  const Re = (At, Xt) => {
    At ? et && et(Xt) : I && I(Xt), Dt || (re(h ? null : Kt.clientWidth), pt(At));
  }, Ft = (At) => {
    At.button === 0 && (At.preventDefault(), bt.current.focus(), Re(true, At));
  }, fe = (At) => {
    Re(false, At);
  }, We = B.Children.toArray(m), se = (At) => {
    const Xt = We.find((ee) => ee.props.value === At.target.value);
    Xt !== void 0 && (w(Xt.props.value), D && D(At, Xt));
  }, _e = (At) => (Xt) => {
    let ee;
    if (Xt.currentTarget.hasAttribute("tabindex")) {
      if (G) {
        ee = Array.isArray(gt) ? gt.slice() : [];
        const Ie = gt.indexOf(At.props.value);
        Ie === -1 ? ee.push(At.props.value) : ee.splice(Ie, 1);
      } else ee = At.props.value;
      if (At.props.onClick && At.props.onClick(Xt), gt !== ee && (w(ee), D)) {
        const Ie = Xt.nativeEvent || Xt, zn = new Ie.constructor(Ie.type, Ie);
        Object.defineProperty(zn, "target", { writable: true, value: { value: ee, name: P } }), D(zn, At);
      }
      G || Re(false, Xt);
    }
  }, Se = (At) => {
    M || [" ", "ArrowUp", "ArrowDown", "Enter"].includes(At.key) && (At.preventDefault(), Re(true, At));
  }, ke = wt !== null && W, de = (At) => {
    !ke && U && (Object.defineProperty(At, "target", { writable: true, value: { value: gt, name: P } }), U(At));
  };
  delete ut["aria-invalid"];
  let Ot, Rn;
  const $e = [];
  let Un = false;
  (Db({ value: gt }) || E) && (q ? Ot = q(gt) : Un = true);
  const rt = We.map((At) => {
    if (!B.isValidElement(At)) return null;
    let Xt;
    if (G) {
      if (!Array.isArray(gt)) throw new Error(Qr(2));
      Xt = gt.some((ee) => F_(ee, At.props.value)), Xt && Un && $e.push(At.props.children);
    } else Xt = F_(gt, At.props.value), Xt && Un && (Rn = At.props.children);
    return B.cloneElement(At, { "aria-selected": Xt ? "true" : "false", onClick: _e(At), onKeyUp: (ee) => {
      ee.key === " " && ee.preventDefault(), At.props.onKeyUp && At.props.onKeyUp(ee);
    }, role: "option", selected: Xt, value: void 0, "data-value": At.props.value });
  });
  Un && (G ? $e.length === 0 ? Ot = null : Ot = $e.reduce((At, Xt, ee) => (At.push(Xt), ee < $e.length - 1 && At.push(", "), At), []) : Ot = Rn);
  let ht = Lt;
  !h && Dt && wt && (ht = Kt.clientWidth);
  let Ct;
  typeof at < "u" ? Ct = at : Ct = S ? null : 0;
  const Et = ft.id || (P ? `mui-component-select-${P}` : void 0), qt = { ...r, variant: ct, value: gt, open: ke, error: C }, Gt = kk(qt), mn = { ...N.PaperProps, ...(_a = N.slotProps) == null ? void 0 : _a.paper }, qe = mm();
  return F.jsxs(B.Fragment, { children: [F.jsx(wk, { as: "div", ref: Vt, tabIndex: Ct, role: "combobox", "aria-controls": ke ? qe : void 0, "aria-disabled": S ? "true" : void 0, "aria-expanded": ke ? "true" : "false", "aria-haspopup": "listbox", "aria-label": c, "aria-labelledby": [$, Et].filter(Boolean).join(" ") || void 0, "aria-describedby": l, "aria-required": X ? "true" : void 0, "aria-invalid": C ? "true" : void 0, onKeyDown: Se, onMouseDown: S || M ? null : Ft, onBlur: de, onFocus: tt, ...ft, ownerState: qt, className: le(ft.className, Gt.select, _), id: Et, children: Ek(Ot) ? V_ || (V_ = F.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : Ot }), F.jsx(Tk, { "aria-invalid": C, value: Array.isArray(gt) ? gt.join(",") : gt, name: P, ref: R, "aria-hidden": true, onChange: se, tabIndex: -1, disabled: S, className: Gt.nativeInput, autoFocus: f, required: X, ...ut, ownerState: qt }), F.jsx(Ck, { as: z, className: Gt.icon, ownerState: qt }), F.jsx(ok, { id: `menu-${P || ""}`, anchorEl: Kt, open: ke, onClose: fe, anchorOrigin: { vertical: "bottom", horizontal: "center" }, transformOrigin: { vertical: "top", horizontal: "center" }, ...N, slotProps: { ...N.slotProps, list: { "aria-labelledby": $, role: "listbox", "aria-multiselectable": G ? "true" : void 0, disableListWrap: true, id: qe, ...N.MenuListProps }, paper: { ...mn, style: { minWidth: ht, ...mn != null ? mn.style : null } } }, children: rt })] });
}), Ak = (t3) => {
  const { classes: r } = t3, l = on({ root: ["root"] }, Fb, r);
  return { ...r, ...l };
}, Em = { name: "MuiSelect", slot: "Root", shouldForwardProp: (t3) => Yi(t3) && t3 !== "variant" }, Ok = jt(jb, Em)(""), Rk = jt(Vb, Em)(""), zk = jt(Hb, Em)(""), Gb = B.forwardRef(function(r, o) {
  const l = fn({ name: "MuiSelect", props: r }), { autoWidth: c = false, children: f, classes: h = {}, className: m, defaultOpen: _ = false, displayEmpty: v = false, IconComponent: b = JE, id: S, input: E, inputProps: C, label: z, labelId: A, MenuProps: $, multiple: N = false, native: G = false, onClose: P, onOpen: U, open: D, renderValue: I, SelectDisplayProps: tt, variant: et = "outlined", ...lt } = l, M = G ? mk : Mk, q = Sm(), X = xm({ props: l, muiFormControl: q, states: ["variant", "error"] }), ft = X.variant || et, at = { ...l, variant: ft, classes: h }, st = Ak(at), { root: Z, ...ct } = st, ut = E || { standard: F.jsx(Ok, { ownerState: at }), outlined: F.jsx(Rk, { label: z, ownerState: at }), filled: F.jsx(zk, { ownerState: at }) }[ft], gt = Yn(o, Su(ut));
  return F.jsx(B.Fragment, { children: B.cloneElement(ut, { inputComponent: M, inputProps: { children: f, error: X.error, IconComponent: b, variant: ft, type: void 0, multiple: N, ...G ? { id: S } : { autoWidth: c, defaultOpen: _, displayEmpty: v, labelId: A, MenuProps: $, onClose: P, onOpen: U, open: D, renderValue: I, SelectDisplayProps: { id: S, ...tt } }, ...C, classes: C ? Sn(ct, C.classes) : ct, ...E ? E.props.inputProps : {} }, ...(N && G || v) && ft === "outlined" ? { notched: true } : {}, ref: gt, className: le(ut.props.className, m, st.root), ...!E && { variant: ft }, ...lt }) });
});
Gb.muiName = "Select";
const Lk = iT({ createStyledComponent: jt("div", { name: "MuiStack", slot: "Root" }), useThemeProps: (t3) => fn({ props: t3, name: "MuiStack" }) });
function Yb(t3, r) {
  const o = B.useRef(r);
  B.useEffect(function() {
    r !== o.current && t3.attributionControl != null && (o.current != null && t3.attributionControl.removeAttribution(o.current), r != null && t3.attributionControl.addAttribution(r)), o.current = r;
  }, [t3, r]);
}
function Pk(t3, r, o) {
  r.center !== o.center && t3.setLatLng(r.center), r.radius != null && r.radius !== o.radius && t3.setRadius(r.radius);
}
const Bk = 1;
function Dk(t3) {
  return Object.freeze({ __version: Bk, map: t3 });
}
function Xb(t3, r) {
  return Object.freeze({ ...t3, ...r });
}
const Vf = B.createContext(null);
function wu() {
  const t3 = B.use(Vf);
  if (t3 == null) throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return t3;
}
function Kb(t3) {
  function r(o, l) {
    const { instance: c, context: f } = t3(o).current;
    B.useImperativeHandle(l, () => c);
    const { children: h } = o;
    return h == null ? null : Hn.createElement(Vf, { value: f }, h);
  }
  return B.forwardRef(r);
}
function Nk(t3) {
  function r(o, l) {
    const [c, f] = B.useState(false), { instance: h } = t3(o, f).current;
    B.useImperativeHandle(l, () => h), B.useEffect(function() {
      c && h.update();
    }, [h, c, o.children]);
    const m = h._contentNode;
    return m ? jf.createPortal(o.children, m) : null;
  }
  return B.forwardRef(r);
}
function Ik(t3) {
  function r(o, l) {
    const { instance: c } = t3(o).current;
    return B.useImperativeHandle(l, () => c), null;
  }
  return B.forwardRef(r);
}
function km(t3, r) {
  const o = B.useRef(void 0);
  B.useEffect(function() {
    return r != null && t3.instance.on(r), o.current = r, function() {
      o.current != null && t3.instance.off(o.current), o.current = null;
    };
  }, [t3, r]);
}
function Ff(t3, r) {
  const o = t3.pane ?? r.pane;
  return o ? { ...t3, pane: o } : t3;
}
function Hk(t3, r) {
  return function(l, c) {
    const f = wu(), h = t3(Ff(l, f), f);
    return Yb(f.map, l.attribution), km(h.current, l.eventHandlers), r(h.current, f, l, c), h;
  };
}
var iu = { exports: {} };
/* @preserve
* Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
* (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
var jk = iu.exports, G_;
function Uk() {
  return G_ || (G_ = 1, function(t3, r) {
    (function(o, l) {
      l(r);
    })(jk, function(o) {
      var l = "1.9.4";
      function c(i) {
        var s, d, y, x;
        for (d = 1, y = arguments.length; d < y; d++) {
          x = arguments[d];
          for (s in x) i[s] = x[s];
        }
        return i;
      }
      var f = Object.create || /* @__PURE__ */ function() {
        function i() {
        }
        return function(s) {
          return i.prototype = s, new i();
        };
      }();
      function h(i, s) {
        var d = Array.prototype.slice;
        if (i.bind) return i.bind.apply(i, d.call(arguments, 1));
        var y = d.call(arguments, 2);
        return function() {
          return i.apply(s, y.length ? y.concat(d.call(arguments)) : arguments);
        };
      }
      var m = 0;
      function _(i) {
        return "_leaflet_id" in i || (i._leaflet_id = ++m), i._leaflet_id;
      }
      function v(i, s, d) {
        var y, x, k, H;
        return H = function() {
          y = false, x && (k.apply(d, x), x = false);
        }, k = function() {
          y ? x = arguments : (i.apply(d, arguments), setTimeout(H, s), y = true);
        }, k;
      }
      function b(i, s, d) {
        var y = s[1], x = s[0], k = y - x;
        return i === y && d ? i : ((i - x) % k + k) % k + x;
      }
      function S() {
        return false;
      }
      function E(i, s) {
        if (s === false) return i;
        var d = Math.pow(10, s === void 0 ? 6 : s);
        return Math.round(i * d) / d;
      }
      function C(i) {
        return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
      }
      function z(i) {
        return C(i).split(/\s+/);
      }
      function A(i, s) {
        Object.prototype.hasOwnProperty.call(i, "options") || (i.options = i.options ? f(i.options) : {});
        for (var d in s) i.options[d] = s[d];
        return i.options;
      }
      function $(i, s, d) {
        var y = [];
        for (var x in i) y.push(encodeURIComponent(d ? x.toUpperCase() : x) + "=" + encodeURIComponent(i[x]));
        return (!s || s.indexOf("?") === -1 ? "?" : "&") + y.join("&");
      }
      var N = /\{ *([\w_ -]+) *\}/g;
      function G(i, s) {
        return i.replace(N, function(d, y) {
          var x = s[y];
          if (x === void 0) throw new Error("No value provided for variable " + d);
          return typeof x == "function" && (x = x(s)), x;
        });
      }
      var P = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
      function U(i, s) {
        for (var d = 0; d < i.length; d++) if (i[d] === s) return d;
        return -1;
      }
      var D = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function I(i) {
        return window["webkit" + i] || window["moz" + i] || window["ms" + i];
      }
      var tt = 0;
      function et(i) {
        var s = +/* @__PURE__ */ new Date(), d = Math.max(0, 16 - (s - tt));
        return tt = s + d, window.setTimeout(i, d);
      }
      var lt = window.requestAnimationFrame || I("RequestAnimationFrame") || et, M = window.cancelAnimationFrame || I("CancelAnimationFrame") || I("CancelRequestAnimationFrame") || function(i) {
        window.clearTimeout(i);
      };
      function q(i, s, d) {
        if (d && lt === et) i.call(s);
        else return lt.call(window, h(i, s));
      }
      function X(i) {
        i && M.call(window, i);
      }
      var ft = { __proto__: null, extend: c, create: f, bind: h, get lastId() {
        return m;
      }, stamp: _, throttle: v, wrapNum: b, falseFn: S, formatNum: E, trim: C, splitWords: z, setOptions: A, getParamString: $, template: G, isArray: P, indexOf: U, emptyImageUrl: D, requestFn: lt, cancelFn: M, requestAnimFrame: q, cancelAnimFrame: X };
      function at() {
      }
      at.extend = function(i) {
        var s = function() {
          A(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, d = s.__super__ = this.prototype, y = f(d);
        y.constructor = s, s.prototype = y;
        for (var x in this) Object.prototype.hasOwnProperty.call(this, x) && x !== "prototype" && x !== "__super__" && (s[x] = this[x]);
        return i.statics && c(s, i.statics), i.includes && (st(i.includes), c.apply(null, [y].concat(i.includes))), c(y, i), delete y.statics, delete y.includes, y.options && (y.options = d.options ? f(d.options) : {}, c(y.options, i.options)), y._initHooks = [], y.callInitHooks = function() {
          if (!this._initHooksCalled) {
            d.callInitHooks && d.callInitHooks.call(this), this._initHooksCalled = true;
            for (var k = 0, H = y._initHooks.length; k < H; k++) y._initHooks[k].call(this);
          }
        }, s;
      }, at.include = function(i) {
        var s = this.prototype.options;
        return c(this.prototype, i), i.options && (this.prototype.options = s, this.mergeOptions(i.options)), this;
      }, at.mergeOptions = function(i) {
        return c(this.prototype.options, i), this;
      }, at.addInitHook = function(i) {
        var s = Array.prototype.slice.call(arguments, 1), d = typeof i == "function" ? i : function() {
          this[i].apply(this, s);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(d), this;
      };
      function st(i) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          i = P(i) ? i : [i];
          for (var s = 0; s < i.length; s++) i[s] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var Z = { on: function(i, s, d) {
        if (typeof i == "object") for (var y in i) this._on(y, i[y], s);
        else {
          i = z(i);
          for (var x = 0, k = i.length; x < k; x++) this._on(i[x], s, d);
        }
        return this;
      }, off: function(i, s, d) {
        if (!arguments.length) delete this._events;
        else if (typeof i == "object") for (var y in i) this._off(y, i[y], s);
        else {
          i = z(i);
          for (var x = arguments.length === 1, k = 0, H = i.length; k < H; k++) x ? this._off(i[k]) : this._off(i[k], s, d);
        }
        return this;
      }, _on: function(i, s, d, y) {
        if (typeof s != "function") {
          console.warn("wrong listener type: " + typeof s);
          return;
        }
        if (this._listens(i, s, d) === false) {
          d === this && (d = void 0);
          var x = { fn: s, ctx: d };
          y && (x.once = true), this._events = this._events || {}, this._events[i] = this._events[i] || [], this._events[i].push(x);
        }
      }, _off: function(i, s, d) {
        var y, x, k;
        if (this._events && (y = this._events[i], !!y)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (x = 0, k = y.length; x < k; x++) y[x].fn = S;
            delete this._events[i];
            return;
          }
          if (typeof s != "function") {
            console.warn("wrong listener type: " + typeof s);
            return;
          }
          var H = this._listens(i, s, d);
          if (H !== false) {
            var K = y[H];
            this._firingCount && (K.fn = S, this._events[i] = y = y.slice()), y.splice(H, 1);
          }
        }
      }, fire: function(i, s, d) {
        if (!this.listens(i, d)) return this;
        var y = c({}, s, { type: i, target: this, sourceTarget: s && s.sourceTarget || this });
        if (this._events) {
          var x = this._events[i];
          if (x) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var k = 0, H = x.length; k < H; k++) {
              var K = x[k], ot = K.fn;
              K.once && this.off(i, ot, K.ctx), ot.call(K.ctx || this, y);
            }
            this._firingCount--;
          }
        }
        return d && this._propagateEvent(y), this;
      }, listens: function(i, s, d, y) {
        typeof i != "string" && console.warn('"string" type argument expected');
        var x = s;
        typeof s != "function" && (y = !!s, x = void 0, d = void 0);
        var k = this._events && this._events[i];
        if (k && k.length && this._listens(i, x, d) !== false) return true;
        if (y) {
          for (var H in this._eventParents) if (this._eventParents[H].listens(i, s, d, y)) return true;
        }
        return false;
      }, _listens: function(i, s, d) {
        if (!this._events) return false;
        var y = this._events[i] || [];
        if (!s) return !!y.length;
        d === this && (d = void 0);
        for (var x = 0, k = y.length; x < k; x++) if (y[x].fn === s && y[x].ctx === d) return x;
        return false;
      }, once: function(i, s, d) {
        if (typeof i == "object") for (var y in i) this._on(y, i[y], s, true);
        else {
          i = z(i);
          for (var x = 0, k = i.length; x < k; x++) this._on(i[x], s, d, true);
        }
        return this;
      }, addEventParent: function(i) {
        return this._eventParents = this._eventParents || {}, this._eventParents[_(i)] = i, this;
      }, removeEventParent: function(i) {
        return this._eventParents && delete this._eventParents[_(i)], this;
      }, _propagateEvent: function(i) {
        for (var s in this._eventParents) this._eventParents[s].fire(i.type, c({ layer: i.target, propagatedFrom: i.target }, i), true);
      } };
      Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
      var ct = at.extend(Z);
      function ut(i, s, d) {
        this.x = d ? Math.round(i) : i, this.y = d ? Math.round(s) : s;
      }
      var gt = Math.trunc || function(i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
      ut.prototype = { clone: function() {
        return new ut(this.x, this.y);
      }, add: function(i) {
        return this.clone()._add(w(i));
      }, _add: function(i) {
        return this.x += i.x, this.y += i.y, this;
      }, subtract: function(i) {
        return this.clone()._subtract(w(i));
      }, _subtract: function(i) {
        return this.x -= i.x, this.y -= i.y, this;
      }, divideBy: function(i) {
        return this.clone()._divideBy(i);
      }, _divideBy: function(i) {
        return this.x /= i, this.y /= i, this;
      }, multiplyBy: function(i) {
        return this.clone()._multiplyBy(i);
      }, _multiplyBy: function(i) {
        return this.x *= i, this.y *= i, this;
      }, scaleBy: function(i) {
        return new ut(this.x * i.x, this.y * i.y);
      }, unscaleBy: function(i) {
        return new ut(this.x / i.x, this.y / i.y);
      }, round: function() {
        return this.clone()._round();
      }, _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }, floor: function() {
        return this.clone()._floor();
      }, _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }, ceil: function() {
        return this.clone()._ceil();
      }, _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }, trunc: function() {
        return this.clone()._trunc();
      }, _trunc: function() {
        return this.x = gt(this.x), this.y = gt(this.y), this;
      }, distanceTo: function(i) {
        i = w(i);
        var s = i.x - this.x, d = i.y - this.y;
        return Math.sqrt(s * s + d * d);
      }, equals: function(i) {
        return i = w(i), i.x === this.x && i.y === this.y;
      }, contains: function(i) {
        return i = w(i), Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + E(this.x) + ", " + E(this.y) + ")";
      } };
      function w(i, s, d) {
        return i instanceof ut ? i : P(i) ? new ut(i[0], i[1]) : i == null ? i : typeof i == "object" && "x" in i && "y" in i ? new ut(i.x, i.y) : new ut(i, s, d);
      }
      function W(i, s) {
        if (i) for (var d = s ? [i, s] : i, y = 0, x = d.length; y < x; y++) this.extend(d[y]);
      }
      W.prototype = { extend: function(i) {
        var s, d;
        if (!i) return this;
        if (i instanceof ut || typeof i[0] == "number" || "x" in i) s = d = w(i);
        else if (i = pt(i), s = i.min, d = i.max, !s || !d) return this;
        return !this.min && !this.max ? (this.min = s.clone(), this.max = d.clone()) : (this.min.x = Math.min(s.x, this.min.x), this.max.x = Math.max(d.x, this.max.x), this.min.y = Math.min(s.y, this.min.y), this.max.y = Math.max(d.y, this.max.y)), this;
      }, getCenter: function(i) {
        return w((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, i);
      }, getBottomLeft: function() {
        return w(this.min.x, this.max.y);
      }, getTopRight: function() {
        return w(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(i) {
        var s, d;
        return typeof i[0] == "number" || i instanceof ut ? i = w(i) : i = pt(i), i instanceof W ? (s = i.min, d = i.max) : s = d = i, s.x >= this.min.x && d.x <= this.max.x && s.y >= this.min.y && d.y <= this.max.y;
      }, intersects: function(i) {
        i = pt(i);
        var s = this.min, d = this.max, y = i.min, x = i.max, k = x.x >= s.x && y.x <= d.x, H = x.y >= s.y && y.y <= d.y;
        return k && H;
      }, overlaps: function(i) {
        i = pt(i);
        var s = this.min, d = this.max, y = i.min, x = i.max, k = x.x > s.x && y.x < d.x, H = x.y > s.y && y.y < d.y;
        return k && H;
      }, isValid: function() {
        return !!(this.min && this.max);
      }, pad: function(i) {
        var s = this.min, d = this.max, y = Math.abs(s.x - d.x) * i, x = Math.abs(s.y - d.y) * i;
        return pt(w(s.x - y, s.y - x), w(d.x + y, d.y + x));
      }, equals: function(i) {
        return i ? (i = pt(i), this.min.equals(i.getTopLeft()) && this.max.equals(i.getBottomRight())) : false;
      } };
      function pt(i, s) {
        return !i || i instanceof W ? i : new W(i, s);
      }
      function R(i, s) {
        if (i) for (var d = s ? [i, s] : i, y = 0, x = d.length; y < x; y++) this.extend(d[y]);
      }
      R.prototype = { extend: function(i) {
        var s = this._southWest, d = this._northEast, y, x;
        if (i instanceof wt) y = i, x = i;
        else if (i instanceof R) {
          if (y = i._southWest, x = i._northEast, !y || !x) return this;
        } else return i ? this.extend(_t(i) || bt(i)) : this;
        return !s && !d ? (this._southWest = new wt(y.lat, y.lng), this._northEast = new wt(x.lat, x.lng)) : (s.lat = Math.min(y.lat, s.lat), s.lng = Math.min(y.lng, s.lng), d.lat = Math.max(x.lat, d.lat), d.lng = Math.max(x.lng, d.lng)), this;
      }, pad: function(i) {
        var s = this._southWest, d = this._northEast, y = Math.abs(s.lat - d.lat) * i, x = Math.abs(s.lng - d.lng) * i;
        return new R(new wt(s.lat - y, s.lng - x), new wt(d.lat + y, d.lng + x));
      }, getCenter: function() {
        return new wt((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new wt(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new wt(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(i) {
        typeof i[0] == "number" || i instanceof wt || "lat" in i ? i = _t(i) : i = bt(i);
        var s = this._southWest, d = this._northEast, y, x;
        return i instanceof R ? (y = i.getSouthWest(), x = i.getNorthEast()) : y = x = i, y.lat >= s.lat && x.lat <= d.lat && y.lng >= s.lng && x.lng <= d.lng;
      }, intersects: function(i) {
        i = bt(i);
        var s = this._southWest, d = this._northEast, y = i.getSouthWest(), x = i.getNorthEast(), k = x.lat >= s.lat && y.lat <= d.lat, H = x.lng >= s.lng && y.lng <= d.lng;
        return k && H;
      }, overlaps: function(i) {
        i = bt(i);
        var s = this._southWest, d = this._northEast, y = i.getSouthWest(), x = i.getNorthEast(), k = x.lat > s.lat && y.lat < d.lat, H = x.lng > s.lng && y.lng < d.lng;
        return k && H;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(i, s) {
        return i ? (i = bt(i), this._southWest.equals(i.getSouthWest(), s) && this._northEast.equals(i.getNorthEast(), s)) : false;
      }, isValid: function() {
        return !!(this._southWest && this._northEast);
      } };
      function bt(i, s) {
        return i instanceof R ? i : new R(i, s);
      }
      function wt(i, s, d) {
        if (isNaN(i) || isNaN(s)) throw new Error("Invalid LatLng object: (" + i + ", " + s + ")");
        this.lat = +i, this.lng = +s, d !== void 0 && (this.alt = +d);
      }
      wt.prototype = { equals: function(i, s) {
        if (!i) return false;
        i = _t(i);
        var d = Math.max(Math.abs(this.lat - i.lat), Math.abs(this.lng - i.lng));
        return d <= (s === void 0 ? 1e-9 : s);
      }, toString: function(i) {
        return "LatLng(" + E(this.lat, i) + ", " + E(this.lng, i) + ")";
      }, distanceTo: function(i) {
        return Lt.distance(this, _t(i));
      }, wrap: function() {
        return Lt.wrapLatLng(this);
      }, toBounds: function(i) {
        var s = 180 * i / 40075017, d = s / Math.cos(Math.PI / 180 * this.lat);
        return bt([this.lat - s, this.lng - d], [this.lat + s, this.lng + d]);
      }, clone: function() {
        return new wt(this.lat, this.lng, this.alt);
      } };
      function _t(i, s, d) {
        return i instanceof wt ? i : P(i) && typeof i[0] != "object" ? i.length === 3 ? new wt(i[0], i[1], i[2]) : i.length === 2 ? new wt(i[0], i[1]) : null : i == null ? i : typeof i == "object" && "lat" in i ? new wt(i.lat, "lng" in i ? i.lng : i.lon, i.alt) : s === void 0 ? null : new wt(i, s, d);
      }
      var Dt = { latLngToPoint: function(i, s) {
        var d = this.projection.project(i), y = this.scale(s);
        return this.transformation._transform(d, y);
      }, pointToLatLng: function(i, s) {
        var d = this.scale(s), y = this.transformation.untransform(i, d);
        return this.projection.unproject(y);
      }, project: function(i) {
        return this.projection.project(i);
      }, unproject: function(i) {
        return this.projection.unproject(i);
      }, scale: function(i) {
        return 256 * Math.pow(2, i);
      }, zoom: function(i) {
        return Math.log(i / 256) / Math.LN2;
      }, getProjectedBounds: function(i) {
        if (this.infinite) return null;
        var s = this.projection.bounds, d = this.scale(i), y = this.transformation.transform(s.min, d), x = this.transformation.transform(s.max, d);
        return new W(y, x);
      }, infinite: false, wrapLatLng: function(i) {
        var s = this.wrapLng ? b(i.lng, this.wrapLng, true) : i.lng, d = this.wrapLat ? b(i.lat, this.wrapLat, true) : i.lat, y = i.alt;
        return new wt(d, s, y);
      }, wrapLatLngBounds: function(i) {
        var s = i.getCenter(), d = this.wrapLatLng(s), y = s.lat - d.lat, x = s.lng - d.lng;
        if (y === 0 && x === 0) return i;
        var k = i.getSouthWest(), H = i.getNorthEast(), K = new wt(k.lat - y, k.lng - x), ot = new wt(H.lat - y, H.lng - x);
        return new R(K, ot);
      } }, Lt = c({}, Dt, { wrapLng: [-180, 180], R: 6371e3, distance: function(i, s) {
        var d = Math.PI / 180, y = i.lat * d, x = s.lat * d, k = Math.sin((s.lat - i.lat) * d / 2), H = Math.sin((s.lng - i.lng) * d / 2), K = k * k + Math.cos(y) * Math.cos(x) * H * H, ot = 2 * Math.atan2(Math.sqrt(K), Math.sqrt(1 - K));
        return this.R * ot;
      } }), re = 6378137, Bt = { R: re, MAX_LATITUDE: 85.0511287798, project: function(i) {
        var s = Math.PI / 180, d = this.MAX_LATITUDE, y = Math.max(Math.min(d, i.lat), -d), x = Math.sin(y * s);
        return new ut(this.R * i.lng * s, this.R * Math.log((1 + x) / (1 - x)) / 2);
      }, unproject: function(i) {
        var s = 180 / Math.PI;
        return new wt((2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * s, i.x * s / this.R);
      }, bounds: function() {
        var i = re * Math.PI;
        return new W([-i, -i], [i, i]);
      }() };
      function Vt(i, s, d, y) {
        if (P(i)) {
          this._a = i[0], this._b = i[1], this._c = i[2], this._d = i[3];
          return;
        }
        this._a = i, this._b = s, this._c = d, this._d = y;
      }
      Vt.prototype = { transform: function(i, s) {
        return this._transform(i.clone(), s);
      }, _transform: function(i, s) {
        return s = s || 1, i.x = s * (this._a * i.x + this._b), i.y = s * (this._c * i.y + this._d), i;
      }, untransform: function(i, s) {
        return s = s || 1, new ut((i.x / s - this._b) / this._a, (i.y / s - this._d) / this._c);
      } };
      function Kt(i, s, d, y) {
        return new Vt(i, s, d, y);
      }
      var Re = c({}, Lt, { code: "EPSG:3857", projection: Bt, transformation: function() {
        var i = 0.5 / (Math.PI * Bt.R);
        return Kt(i, 0.5, -i, 0.5);
      }() }), Ft = c({}, Re, { code: "EPSG:900913" });
      function fe(i) {
        return document.createElementNS("http://www.w3.org/2000/svg", i);
      }
      function We(i, s) {
        var d = "", y, x, k, H, K, ot;
        for (y = 0, k = i.length; y < k; y++) {
          for (K = i[y], x = 0, H = K.length; x < H; x++) ot = K[x], d += (x ? "L" : "M") + ot.x + " " + ot.y;
          d += s ? zt.svg ? "z" : "x" : "";
        }
        return d || "M0 0";
      }
      var se = document.documentElement.style, _e = "ActiveXObject" in window, Se = _e && !document.addEventListener, ke = "msLaunchUri" in navigator && !("documentMode" in document), de = Xn("webkit"), Ot = Xn("android"), Rn = Xn("android 2") || Xn("android 3"), $e = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Un = Ot && Xn("Google") && $e < 537 && !("AudioNode" in window), rt = !!window.opera, ht = !ke && Xn("chrome"), Ct = Xn("gecko") && !de && !rt && !_e, Et = !ht && Xn("safari"), qt = Xn("phantom"), Gt = "OTransition" in se, mn = navigator.platform.indexOf("Win") === 0, qe = _e && "transition" in se, At = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Rn, Xt = "MozPerspective" in se, ee = !window.L_DISABLE_3D && (qe || At || Xt) && !Gt && !qt, Ie = typeof orientation < "u" || Xn("mobile"), zn = Ie && de, Eu = Ie && At, Ul = !window.PointerEvent && window.MSPointerEvent, Ba = !!(window.PointerEvent || Ul), to = "ontouchstart" in window || !!window.TouchEvent, Wf = !window.L_NO_TOUCH && (to || Ba), ku = Ie && rt, Mu = Ie && Ct, Zl = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, $l = function() {
        var i = false;
        try {
          var s = Object.defineProperty({}, "passive", { get: function() {
            i = true;
          } });
          window.addEventListener("testPassiveEventSupport", S, s), window.removeEventListener("testPassiveEventSupport", S, s);
        } catch {
        }
        return i;
      }(), Au = function() {
        return !!document.createElement("canvas").getContext;
      }(), ql = !!(document.createElementNS && fe("svg").createSVGRect), Xi = !!ql && function() {
        var i = document.createElement("div");
        return i.innerHTML = "<svg/>", (i.firstChild && i.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), gn = !ql && function() {
        try {
          var i = document.createElement("div");
          i.innerHTML = '<v:shape adj="1"/>';
          var s = i.firstChild;
          return s.style.behavior = "url(#default#VML)", s && typeof s.adj == "object";
        } catch {
          return false;
        }
      }(), Ln = navigator.platform.indexOf("Mac") === 0, eo = navigator.platform.indexOf("Linux") === 0;
      function Xn(i) {
        return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
      }
      var zt = { ie: _e, ielt9: Se, edge: ke, webkit: de, android: Ot, android23: Rn, androidStock: Un, opera: rt, chrome: ht, gecko: Ct, safari: Et, phantom: qt, opera12: Gt, win: mn, ie3d: qe, webkit3d: At, gecko3d: Xt, any3d: ee, mobile: Ie, mobileWebkit: zn, mobileWebkit3d: Eu, msPointer: Ul, pointer: Ba, touch: Wf, touchNative: to, mobileOpera: ku, mobileGecko: Mu, retina: Zl, passiveEvents: $l, canvas: Au, svg: ql, vml: gn, inlineSvg: Xi, mac: Ln, linux: eo }, Ou = zt.msPointer ? "MSPointerDown" : "pointerdown", Vl = zt.msPointer ? "MSPointerMove" : "pointermove", no = zt.msPointer ? "MSPointerUp" : "pointerup", Da = zt.msPointer ? "MSPointerCancel" : "pointercancel", Ki = { touchstart: Ou, touchmove: Vl, touchend: no, touchcancel: Da }, br = { touchstart: Lu, touchmove: Wo, touchend: Wo, touchcancel: Wo }, Si = {}, xr = false;
      function an(i, s, d) {
        return s === "touchstart" && Jf(), br[s] ? (d = br[s].bind(this, d), i.addEventListener(Ki[s], d, false), d) : (console.warn("wrong event specified:", s), S);
      }
      function Ru(i, s, d) {
        if (!Ki[s]) {
          console.warn("wrong event specified:", s);
          return;
        }
        i.removeEventListener(Ki[s], d, false);
      }
      function zu(i) {
        Si[i.pointerId] = i;
      }
      function Sr(i) {
        Si[i.pointerId] && (Si[i.pointerId] = i);
      }
      function wr(i) {
        delete Si[i.pointerId];
      }
      function Jf() {
        xr || (document.addEventListener(Ou, zu, true), document.addEventListener(Vl, Sr, true), document.addEventListener(no, wr, true), document.addEventListener(Da, wr, true), xr = true);
      }
      function Wo(i, s) {
        if (s.pointerType !== (s.MSPOINTER_TYPE_MOUSE || "mouse")) {
          s.touches = [];
          for (var d in Si) s.touches.push(Si[d]);
          s.changedTouches = [s], i(s);
        }
      }
      function Lu(i, s) {
        s.MSPOINTER_TYPE_TOUCH && s.pointerType === s.MSPOINTER_TYPE_TOUCH && Ye(s), Wo(i, s);
      }
      function td(i) {
        var s = {}, d, y;
        for (y in i) d = i[y], s[y] = d && d.bind ? d.bind(i) : d;
        return i = s, s.type = "dblclick", s.detail = 2, s.isTrusted = false, s._simulated = true, s;
      }
      var Na = 200;
      function Ia(i, s) {
        i.addEventListener("dblclick", s);
        var d = 0, y;
        function x(k) {
          if (k.detail !== 1) {
            y = k.detail;
            return;
          }
          if (!(k.pointerType === "mouse" || k.sourceCapabilities && !k.sourceCapabilities.firesTouchEvents)) {
            var H = Yl(k);
            if (!(H.some(function(ot) {
              return ot instanceof HTMLLabelElement && ot.attributes.for;
            }) && !H.some(function(ot) {
              return ot instanceof HTMLInputElement || ot instanceof HTMLSelectElement;
            }))) {
              var K = Date.now();
              K - d <= Na ? (y++, y === 2 && s(td(k))) : y = 1, d = K;
            }
          }
        }
        return i.addEventListener("click", x), { dblclick: s, simDblclick: x };
      }
      function Ni(i, s) {
        i.removeEventListener("dblclick", s.dblclick), i.removeEventListener("click", s.simDblclick);
      }
      var Jo = ao(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), io = ao(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), Cr = io === "webkitTransition" || io === "OTransition" ? io + "End" : "transitionend";
      function Ha(i) {
        return typeof i == "string" ? document.getElementById(i) : i;
      }
      function Tr(i, s) {
        var d = i.style[s] || i.currentStyle && i.currentStyle[s];
        if ((!d || d === "auto") && document.defaultView) {
          var y = document.defaultView.getComputedStyle(i, null);
          d = y ? y[s] : null;
        }
        return d === "auto" ? null : d;
      }
      function ue(i, s, d) {
        var y = document.createElement(i);
        return y.className = s || "", d && d.appendChild(y), y;
      }
      function ze(i) {
        var s = i.parentNode;
        s && s.removeChild(i);
      }
      function wn(i) {
        for (; i.firstChild; ) i.removeChild(i.firstChild);
      }
      function Er(i) {
        var s = i.parentNode;
        s && s.lastChild !== i && s.appendChild(i);
      }
      function ro(i) {
        var s = i.parentNode;
        s && s.firstChild !== i && s.insertBefore(i, s.firstChild);
      }
      function oo(i, s) {
        if (i.classList !== void 0) return i.classList.contains(s);
        var d = Cn(i);
        return d.length > 0 && new RegExp("(^|\\s)" + s + "(\\s|$)").test(d);
      }
      function Yt(i, s) {
        if (i.classList !== void 0) for (var d = z(s), y = 0, x = d.length; y < x; y++) i.classList.add(d[y]);
        else if (!oo(i, s)) {
          var k = Cn(i);
          Fl(i, (k ? k + " " : "") + s);
        }
      }
      function Le(i, s) {
        i.classList !== void 0 ? i.classList.remove(s) : Fl(i, C((" " + Cn(i) + " ").replace(" " + s + " ", " ")));
      }
      function Fl(i, s) {
        i.className.baseVal === void 0 ? i.className = s : i.className.baseVal = s;
      }
      function Cn(i) {
        return i.correspondingElement && (i = i.correspondingElement), i.className.baseVal === void 0 ? i.className : i.className.baseVal;
      }
      function Pn(i, s) {
        "opacity" in i.style ? i.style.opacity = s : "filter" in i.style && Pu(i, s);
      }
      function Pu(i, s) {
        var d = false, y = "DXImageTransform.Microsoft.Alpha";
        try {
          d = i.filters.item(y);
        } catch {
          if (s === 1) return;
        }
        s = Math.round(s * 100), d ? (d.Enabled = s !== 100, d.Opacity = s) : i.style.filter += " progid:" + y + "(opacity=" + s + ")";
      }
      function ao(i) {
        for (var s = document.documentElement.style, d = 0; d < i.length; d++) if (i[d] in s) return i[d];
        return false;
      }
      function Kn(i, s, d) {
        var y = s || new ut(0, 0);
        i.style[Jo] = (zt.ie3d ? "translate(" + y.x + "px," + y.y + "px)" : "translate3d(" + y.x + "px," + y.y + "px,0)") + (d ? " scale(" + d + ")" : "");
      }
      function Ve(i, s) {
        i._leaflet_pos = s, zt.any3d ? Kn(i, s) : (i.style.left = s.x + "px", i.style.top = s.y + "px");
      }
      function Qi(i) {
        return i._leaflet_pos || new ut(0, 0);
      }
      var wi, ta, ja;
      if ("onselectstart" in document) wi = function() {
        $t(window, "selectstart", Ye);
      }, ta = function() {
        he(window, "selectstart", Ye);
      };
      else {
        var lo = ao(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        wi = function() {
          if (lo) {
            var i = document.documentElement.style;
            ja = i[lo], i[lo] = "none";
          }
        }, ta = function() {
          lo && (document.documentElement.style[lo] = ja, ja = void 0);
        };
      }
      function ea() {
        $t(window, "dragstart", Ye);
      }
      function Gl() {
        he(window, "dragstart", Ye);
      }
      var Ua, so;
      function na(i) {
        for (; i.tabIndex === -1; ) i = i.parentNode;
        i.style && (uo(), Ua = i, so = i.style.outlineStyle, i.style.outlineStyle = "none", $t(window, "keydown", uo));
      }
      function uo() {
        Ua && (Ua.style.outlineStyle = so, Ua = void 0, so = void 0, he(window, "keydown", uo));
      }
      function kr(i) {
        do
          i = i.parentNode;
        while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
        return i;
      }
      function Wi(i) {
        var s = i.getBoundingClientRect();
        return { x: s.width / i.offsetWidth || 1, y: s.height / i.offsetHeight || 1, boundingClientRect: s };
      }
      var Bu = { __proto__: null, TRANSFORM: Jo, TRANSITION: io, TRANSITION_END: Cr, get: Ha, getStyle: Tr, create: ue, remove: ze, empty: wn, toFront: Er, toBack: ro, hasClass: oo, addClass: Yt, removeClass: Le, setClass: Fl, getClass: Cn, setOpacity: Pn, testProp: ao, setTransform: Kn, setPosition: Ve, getPosition: Qi, get disableTextSelection() {
        return wi;
      }, get enableTextSelection() {
        return ta;
      }, disableImageDrag: ea, enableImageDrag: Gl, preventOutline: na, restoreOutline: uo, getSizedParentNode: kr, getScale: Wi };
      function $t(i, s, d, y) {
        if (s && typeof s == "object") for (var x in s) Mr(i, x, s[x], d);
        else {
          s = z(s);
          for (var k = 0, H = s.length; k < H; k++) Mr(i, s[k], d, y);
        }
        return this;
      }
      var ai = "_leaflet_events";
      function he(i, s, d, y) {
        if (arguments.length === 1) Ci(i), delete i[ai];
        else if (s && typeof s == "object") for (var x in s) Ti(i, x, s[x], d);
        else if (s = z(s), arguments.length === 2) Ci(i, function(K) {
          return U(s, K) !== -1;
        });
        else for (var k = 0, H = s.length; k < H; k++) Ti(i, s[k], d, y);
        return this;
      }
      function Ci(i, s) {
        for (var d in i[ai]) {
          var y = d.split(/\d/)[0];
          (!s || s(y)) && Ti(i, y, null, null, d);
        }
      }
      var ia = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function Mr(i, s, d, y) {
        var x = s + _(d) + (y ? "_" + _(y) : "");
        if (i[ai] && i[ai][x]) return this;
        var k = function(K) {
          return d.call(y || i, K || window.event);
        }, H = k;
        !zt.touchNative && zt.pointer && s.indexOf("touch") === 0 ? k = an(i, s, k) : zt.touch && s === "dblclick" ? k = Ia(i, k) : "addEventListener" in i ? s === "touchstart" || s === "touchmove" || s === "wheel" || s === "mousewheel" ? i.addEventListener(ia[s] || s, k, zt.passiveEvents ? { passive: false } : false) : s === "mouseenter" || s === "mouseleave" ? (k = function(K) {
          K = K || window.event, Or(i, K) && H(K);
        }, i.addEventListener(ia[s], k, false)) : i.addEventListener(s, H, false) : i.attachEvent("on" + s, k), i[ai] = i[ai] || {}, i[ai][x] = k;
      }
      function Ti(i, s, d, y, x) {
        x = x || s + _(d) + (y ? "_" + _(y) : "");
        var k = i[ai] && i[ai][x];
        if (!k) return this;
        !zt.touchNative && zt.pointer && s.indexOf("touch") === 0 ? Ru(i, s, k) : zt.touch && s === "dblclick" ? Ni(i, k) : "removeEventListener" in i ? i.removeEventListener(ia[s] || s, k, false) : i.detachEvent("on" + s, k), i[ai][x] = null;
      }
      function Ii(i) {
        return i.stopPropagation ? i.stopPropagation() : i.originalEvent ? i.originalEvent._stopped = true : i.cancelBubble = true, this;
      }
      function co(i) {
        return Mr(i, "wheel", Ii), this;
      }
      function fo(i) {
        return $t(i, "mousedown touchstart dblclick contextmenu", Ii), i._leaflet_disable_click = true, this;
      }
      function Ye(i) {
        return i.preventDefault ? i.preventDefault() : i.returnValue = false, this;
      }
      function Ei(i) {
        return Ye(i), Ii(i), this;
      }
      function Yl(i) {
        if (i.composedPath) return i.composedPath();
        for (var s = [], d = i.target; d; ) s.push(d), d = d.parentNode;
        return s;
      }
      function Tn(i, s) {
        if (!s) return new ut(i.clientX, i.clientY);
        var d = Wi(s), y = d.boundingClientRect;
        return new ut((i.clientX - y.left) / d.x - s.clientLeft, (i.clientY - y.top) / d.y - s.clientTop);
      }
      var Ar = zt.linux && zt.chrome ? window.devicePixelRatio : zt.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function ra(i) {
        return zt.edge ? i.wheelDeltaY / 2 : i.deltaY && i.deltaMode === 0 ? -i.deltaY / Ar : i.deltaY && i.deltaMode === 1 ? -i.deltaY * 20 : i.deltaY && i.deltaMode === 2 ? -i.deltaY * 60 : i.deltaX || i.deltaZ ? 0 : i.wheelDelta ? (i.wheelDeltaY || i.wheelDelta) / 2 : i.detail && Math.abs(i.detail) < 32765 ? -i.detail * 20 : i.detail ? i.detail / -32765 * 60 : 0;
      }
      function Or(i, s) {
        var d = s.relatedTarget;
        if (!d) return true;
        try {
          for (; d && d !== i; ) d = d.parentNode;
        } catch {
          return false;
        }
        return d !== i;
      }
      var ed = { __proto__: null, on: $t, off: he, stopPropagation: Ii, disableScrollPropagation: co, disableClickPropagation: fo, preventDefault: Ye, stop: Ei, getPropagationPath: Yl, getMousePosition: Tn, getWheelDelta: ra, isExternalTarget: Or, addListener: $t, removeListener: he }, Za = ct.extend({ run: function(i, s, d, y) {
        this.stop(), this._el = i, this._inProgress = true, this._duration = d || 0.25, this._easeOutPower = 1 / Math.max(y || 0.5, 0.2), this._startPos = Qi(i), this._offset = s.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(true), this._complete());
      }, _animate: function() {
        this._animId = q(this._animate, this), this._step();
      }, _step: function(i) {
        var s = +/* @__PURE__ */ new Date() - this._startTime, d = this._duration * 1e3;
        s < d ? this._runFrame(this._easeOut(s / d), i) : (this._runFrame(1), this._complete());
      }, _runFrame: function(i, s) {
        var d = this._startPos.add(this._offset.multiplyBy(i));
        s && d._round(), Ve(this._el, d), this.fire("step");
      }, _complete: function() {
        X(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(i) {
        return 1 - Math.pow(1 - i, this._easeOutPower);
      } }), ne = ct.extend({ options: { crs: Re, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(i, s) {
        s = A(this, s), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(i), this._initLayout(), this._onResize = h(this._onResize, this), this._initEvents(), s.maxBounds && this.setMaxBounds(s.maxBounds), s.zoom !== void 0 && (this._zoom = this._limitZoom(s.zoom)), s.center && s.zoom !== void 0 && this.setView(_t(s.center), s.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = io && zt.any3d && !zt.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), $t(this._proxy, Cr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(i, s, d) {
        if (s = s === void 0 ? this._zoom : this._limitZoom(s), i = this._limitCenter(_t(i), s, this.options.maxBounds), d = d || {}, this._stop(), this._loaded && !d.reset && d !== true) {
          d.animate !== void 0 && (d.zoom = c({ animate: d.animate }, d.zoom), d.pan = c({ animate: d.animate, duration: d.duration }, d.pan));
          var y = this._zoom !== s ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, s, d.zoom) : this._tryAnimatedPan(i, d.pan);
          if (y) return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(i, s, d.pan && d.pan.noMoveStart), this;
      }, setZoom: function(i, s) {
        return this._loaded ? this.setView(this.getCenter(), i, { zoom: s }) : (this._zoom = i, this);
      }, zoomIn: function(i, s) {
        return i = i || (zt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + i, s);
      }, zoomOut: function(i, s) {
        return i = i || (zt.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - i, s);
      }, setZoomAround: function(i, s, d) {
        var y = this.getZoomScale(s), x = this.getSize().divideBy(2), k = i instanceof ut ? i : this.latLngToContainerPoint(i), H = k.subtract(x).multiplyBy(1 - 1 / y), K = this.containerPointToLatLng(x.add(H));
        return this.setView(K, s, { zoom: d });
      }, _getBoundsCenterZoom: function(i, s) {
        s = s || {}, i = i.getBounds ? i.getBounds() : bt(i);
        var d = w(s.paddingTopLeft || s.padding || [0, 0]), y = w(s.paddingBottomRight || s.padding || [0, 0]), x = this.getBoundsZoom(i, false, d.add(y));
        if (x = typeof s.maxZoom == "number" ? Math.min(s.maxZoom, x) : x, x === 1 / 0) return { center: i.getCenter(), zoom: x };
        var k = y.subtract(d).divideBy(2), H = this.project(i.getSouthWest(), x), K = this.project(i.getNorthEast(), x), ot = this.unproject(H.add(K).divideBy(2).add(k), x);
        return { center: ot, zoom: x };
      }, fitBounds: function(i, s) {
        if (i = bt(i), !i.isValid()) throw new Error("Bounds are not valid.");
        var d = this._getBoundsCenterZoom(i, s);
        return this.setView(d.center, d.zoom, s);
      }, fitWorld: function(i) {
        return this.fitBounds([[-90, -180], [90, 180]], i);
      }, panTo: function(i, s) {
        return this.setView(i, this._zoom, { pan: s });
      }, panBy: function(i, s) {
        if (i = w(i).round(), s = s || {}, !i.x && !i.y) return this.fire("moveend");
        if (s.animate !== true && !this.getSize().contains(i)) return this._resetView(this.unproject(this.project(this.getCenter()).add(i)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new Za(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), s.noMoveStart || this.fire("movestart"), s.animate !== false) {
          Yt(this._mapPane, "leaflet-pan-anim");
          var d = this._getMapPanePos().subtract(i).round();
          this._panAnim.run(this._mapPane, d, s.duration || 0.25, s.easeLinearity);
        } else this._rawPanBy(i), this.fire("move").fire("moveend");
        return this;
      }, flyTo: function(i, s, d) {
        if (d = d || {}, d.animate === false || !zt.any3d) return this.setView(i, s, d);
        this._stop();
        var y = this.project(this.getCenter()), x = this.project(i), k = this.getSize(), H = this._zoom;
        i = _t(i), s = s === void 0 ? H : s;
        var K = Math.max(k.x, k.y), ot = K * this.getZoomScale(H, s), xt = x.distanceTo(y) || 1, Tt = 1.42, kt = Tt * Tt;
        function Rt(He) {
          var Ai = He ? -1 : 1, Ui = He ? ot : K, ir = ot * ot - K * K + Ai * kt * kt * xt * xt, Zi = 2 * Ui * kt * xt, ya = ir / Zi, el = Math.sqrt(ya * ya + 1) - ya, va = el < 1e-9 ? -18 : Math.log(el);
          return va;
        }
        function Ut(He) {
          return (Math.exp(He) - Math.exp(-He)) / 2;
        }
        function Pe(He) {
          return (Math.exp(He) + Math.exp(-He)) / 2;
        }
        function Fe(He) {
          return Ut(He) / Pe(He);
        }
        var vn = Rt(0);
        function Qn(He) {
          return K * (Pe(vn) / Pe(vn + Tt * He));
        }
        function tc(He) {
          return K * (Pe(vn) * Fe(vn + Tt * He) - Ut(vn)) / kt;
        }
        function ec(He) {
          return 1 - Math.pow(1 - He, 1.5);
        }
        var ga = Date.now(), Co = (Rt(1) - vn) / Tt, nc = d.duration ? 1e3 * d.duration : 1e3 * Co * 0.8;
        function To() {
          var He = (Date.now() - ga) / nc, Ai = ec(He) * Co;
          He <= 1 ? (this._flyToFrame = q(To, this), this._move(this.unproject(y.add(x.subtract(y).multiplyBy(tc(Ai) / xt)), H), this.getScaleZoom(K / Qn(Ai), H), { flyTo: true })) : this._move(i, s)._moveEnd(true);
        }
        return this._moveStart(true, d.noMoveStart), To.call(this), this;
      }, flyToBounds: function(i, s) {
        var d = this._getBoundsCenterZoom(i, s);
        return this.flyTo(d.center, d.zoom, s);
      }, setMaxBounds: function(i) {
        return i = bt(i), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), i.isValid() ? (this.options.maxBounds = i, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      }, setMinZoom: function(i) {
        var s = this.options.minZoom;
        return this.options.minZoom = i, this._loaded && s !== i && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(i) : this;
      }, setMaxZoom: function(i) {
        var s = this.options.maxZoom;
        return this.options.maxZoom = i, this._loaded && s !== i && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(i) : this;
      }, panInsideBounds: function(i, s) {
        this._enforcingBounds = true;
        var d = this.getCenter(), y = this._limitCenter(d, this._zoom, bt(i));
        return d.equals(y) || this.panTo(y, s), this._enforcingBounds = false, this;
      }, panInside: function(i, s) {
        s = s || {};
        var d = w(s.paddingTopLeft || s.padding || [0, 0]), y = w(s.paddingBottomRight || s.padding || [0, 0]), x = this.project(this.getCenter()), k = this.project(i), H = this.getPixelBounds(), K = pt([H.min.add(d), H.max.subtract(y)]), ot = K.getSize();
        if (!K.contains(k)) {
          this._enforcingBounds = true;
          var xt = k.subtract(K.getCenter()), Tt = K.extend(k).getSize().subtract(ot);
          x.x += xt.x < 0 ? -Tt.x : Tt.x, x.y += xt.y < 0 ? -Tt.y : Tt.y, this.panTo(this.unproject(x), s), this._enforcingBounds = false;
        }
        return this;
      }, invalidateSize: function(i) {
        if (!this._loaded) return this;
        i = c({ animate: false, pan: true }, i === true ? { animate: true } : i);
        var s = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var d = this.getSize(), y = s.divideBy(2).round(), x = d.divideBy(2).round(), k = y.subtract(x);
        return !k.x && !k.y ? this : (i.animate && i.pan ? this.panBy(k) : (i.pan && this._rawPanBy(k), this.fire("move"), i.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(h(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: s, newSize: d }));
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(i) {
        if (i = this._locateOptions = c({ timeout: 1e4, watch: false }, i), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        var s = h(this._handleGeolocationResponse, this), d = h(this._handleGeolocationError, this);
        return i.watch ? this._locationWatchId = navigator.geolocation.watchPosition(s, d, i) : navigator.geolocation.getCurrentPosition(s, d, i), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
      }, _handleGeolocationError: function(i) {
        if (this._container._leaflet_id) {
          var s = i.code, d = i.message || (s === 1 ? "permission denied" : s === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: s, message: "Geolocation error: " + d + "." });
        }
      }, _handleGeolocationResponse: function(i) {
        if (this._container._leaflet_id) {
          var s = i.coords.latitude, d = i.coords.longitude, y = new wt(s, d), x = y.toBounds(i.coords.accuracy * 2), k = this._locateOptions;
          if (k.setView) {
            var H = this.getBoundsZoom(x);
            this.setView(y, k.maxZoom ? Math.min(H, k.maxZoom) : H);
          }
          var K = { latlng: y, bounds: x, timestamp: i.timestamp };
          for (var ot in i.coords) typeof i.coords[ot] == "number" && (K[ot] = i.coords[ot]);
          this.fire("locationfound", K);
        }
      }, addHandler: function(i, s) {
        if (!s) return this;
        var d = this[i] = new s(this);
        return this._handlers.push(d), this.options[i] && d.enable(), this;
      }, remove: function() {
        if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), ze(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (X(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var i;
        for (i in this._layers) this._layers[i].remove();
        for (i in this._panes) ze(this._panes[i]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(i, s) {
        var d = "leaflet-pane" + (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""), y = ue("div", d, s || this._mapPane);
        return i && (this._panes[i] = y), y;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var i = this.getPixelBounds(), s = this.unproject(i.getBottomLeft()), d = this.unproject(i.getTopRight());
        return new R(s, d);
      }, getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(i, s, d) {
        i = bt(i), d = w(d || [0, 0]);
        var y = this.getZoom() || 0, x = this.getMinZoom(), k = this.getMaxZoom(), H = i.getNorthWest(), K = i.getSouthEast(), ot = this.getSize().subtract(d), xt = pt(this.project(K, y), this.project(H, y)).getSize(), Tt = zt.any3d ? this.options.zoomSnap : 1, kt = ot.x / xt.x, Rt = ot.y / xt.y, Ut = s ? Math.max(kt, Rt) : Math.min(kt, Rt);
        return y = this.getScaleZoom(Ut, y), Tt && (y = Math.round(y / (Tt / 100)) * (Tt / 100), y = s ? Math.ceil(y / Tt) * Tt : Math.floor(y / Tt) * Tt), Math.max(x, Math.min(k, y));
      }, getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new ut(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(i, s) {
        var d = this._getTopLeftPoint(i, s);
        return new W(d, d.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(i) {
        return this.options.crs.getProjectedBounds(i === void 0 ? this.getZoom() : i);
      }, getPane: function(i) {
        return typeof i == "string" ? this._panes[i] : i;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(i, s) {
        var d = this.options.crs;
        return s = s === void 0 ? this._zoom : s, d.scale(i) / d.scale(s);
      }, getScaleZoom: function(i, s) {
        var d = this.options.crs;
        s = s === void 0 ? this._zoom : s;
        var y = d.zoom(i * d.scale(s));
        return isNaN(y) ? 1 / 0 : y;
      }, project: function(i, s) {
        return s = s === void 0 ? this._zoom : s, this.options.crs.latLngToPoint(_t(i), s);
      }, unproject: function(i, s) {
        return s = s === void 0 ? this._zoom : s, this.options.crs.pointToLatLng(w(i), s);
      }, layerPointToLatLng: function(i) {
        var s = w(i).add(this.getPixelOrigin());
        return this.unproject(s);
      }, latLngToLayerPoint: function(i) {
        var s = this.project(_t(i))._round();
        return s._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(i) {
        return this.options.crs.wrapLatLng(_t(i));
      }, wrapLatLngBounds: function(i) {
        return this.options.crs.wrapLatLngBounds(bt(i));
      }, distance: function(i, s) {
        return this.options.crs.distance(_t(i), _t(s));
      }, containerPointToLayerPoint: function(i) {
        return w(i).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(i) {
        return w(i).add(this._getMapPanePos());
      }, containerPointToLatLng: function(i) {
        var s = this.containerPointToLayerPoint(w(i));
        return this.layerPointToLatLng(s);
      }, latLngToContainerPoint: function(i) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(_t(i)));
      }, mouseEventToContainerPoint: function(i) {
        return Tn(i, this._container);
      }, mouseEventToLayerPoint: function(i) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i));
      }, mouseEventToLatLng: function(i) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
      }, _initContainer: function(i) {
        var s = this._container = Ha(i);
        if (s) {
          if (s._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        $t(s, "scroll", this._onScroll, this), this._containerId = _(s);
      }, _initLayout: function() {
        var i = this._container;
        this._fadeAnimated = this.options.fadeAnimation && zt.any3d, Yt(i, "leaflet-container" + (zt.touch ? " leaflet-touch" : "") + (zt.retina ? " leaflet-retina" : "") + (zt.ielt9 ? " leaflet-oldie" : "") + (zt.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var s = Tr(i, "position");
        s !== "absolute" && s !== "relative" && s !== "fixed" && s !== "sticky" && (i.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var i = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Ve(this._mapPane, new ut(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Yt(i.markerPane, "leaflet-zoom-hide"), Yt(i.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(i, s, d) {
        Ve(this._mapPane, new ut(0, 0));
        var y = !this._loaded;
        this._loaded = true, s = this._limitZoom(s), this.fire("viewprereset");
        var x = this._zoom !== s;
        this._moveStart(x, d)._move(i, s)._moveEnd(x), this.fire("viewreset"), y && this.fire("load");
      }, _moveStart: function(i, s) {
        return i && this.fire("zoomstart"), s || this.fire("movestart"), this;
      }, _move: function(i, s, d, y) {
        s === void 0 && (s = this._zoom);
        var x = this._zoom !== s;
        return this._zoom = s, this._lastCenter = i, this._pixelOrigin = this._getNewPixelOrigin(i), y ? d && d.pinch && this.fire("zoom", d) : ((x || d && d.pinch) && this.fire("zoom", d), this.fire("move", d)), this;
      }, _moveEnd: function(i) {
        return i && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return X(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(i) {
        Ve(this._mapPane, this._getMapPanePos().subtract(i));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      }, _initEvents: function(i) {
        this._targets = {}, this._targets[_(this._container)] = this;
        var s = i ? he : $t;
        s(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && s(window, "resize", this._onResize, this), zt.any3d && this.options.transform3DLimit && (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        X(this._resizeRequest), this._resizeRequest = q(function() {
          this.invalidateSize({ debounceMoveend: true });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var i = this._getMapPanePos();
        Math.max(Math.abs(i.x), Math.abs(i.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(i, s) {
        for (var d = [], y, x = s === "mouseout" || s === "mouseover", k = i.target || i.srcElement, H = false; k; ) {
          if (y = this._targets[_(k)], y && (s === "click" || s === "preclick") && this._draggableMoved(y)) {
            H = true;
            break;
          }
          if (y && y.listens(s, true) && (x && !Or(k, i) || (d.push(y), x)) || k === this._container) break;
          k = k.parentNode;
        }
        return !d.length && !H && !x && this.listens(s, true) && (d = [this]), d;
      }, _isClickDisabled: function(i) {
        for (; i && i !== this._container; ) {
          if (i._leaflet_disable_click) return true;
          i = i.parentNode;
        }
      }, _handleDOMEvent: function(i) {
        var s = i.target || i.srcElement;
        if (!(!this._loaded || s._leaflet_disable_events || i.type === "click" && this._isClickDisabled(s))) {
          var d = i.type;
          d === "mousedown" && na(s), this._fireDOMEvent(i, d);
        }
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(i, s, d) {
        if (i.type === "click") {
          var y = c({}, i);
          y.type = "preclick", this._fireDOMEvent(y, y.type, d);
        }
        var x = this._findEventTargets(i, s);
        if (d) {
          for (var k = [], H = 0; H < d.length; H++) d[H].listens(s, true) && k.push(d[H]);
          x = k.concat(x);
        }
        if (x.length) {
          s === "contextmenu" && Ye(i);
          var K = x[0], ot = { originalEvent: i };
          if (i.type !== "keypress" && i.type !== "keydown" && i.type !== "keyup") {
            var xt = K.getLatLng && (!K._radius || K._radius <= 10);
            ot.containerPoint = xt ? this.latLngToContainerPoint(K.getLatLng()) : this.mouseEventToContainerPoint(i), ot.layerPoint = this.containerPointToLayerPoint(ot.containerPoint), ot.latlng = xt ? K.getLatLng() : this.layerPointToLatLng(ot.layerPoint);
          }
          for (H = 0; H < x.length; H++) if (x[H].fire(s, ot, true), ot.originalEvent._stopped || x[H].options.bubblingMouseEvents === false && U(this._mouseEvents, s) !== -1) return;
        }
      }, _draggableMoved: function(i) {
        return i = i.dragging && i.dragging.enabled() ? i : this, i.dragging && i.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var i = 0, s = this._handlers.length; i < s; i++) this._handlers[i].disable();
      }, whenReady: function(i, s) {
        return this._loaded ? i.call(s || this, { target: this }) : this.on("load", i, s), this;
      }, _getMapPanePos: function() {
        return Qi(this._mapPane) || new ut(0, 0);
      }, _moved: function() {
        var i = this._getMapPanePos();
        return i && !i.equals([0, 0]);
      }, _getTopLeftPoint: function(i, s) {
        var d = i && s !== void 0 ? this._getNewPixelOrigin(i, s) : this.getPixelOrigin();
        return d.subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(i, s) {
        var d = this.getSize()._divideBy(2);
        return this.project(i, s)._subtract(d)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(i, s, d) {
        var y = this._getNewPixelOrigin(d, s);
        return this.project(i, s)._subtract(y);
      }, _latLngBoundsToNewLayerBounds: function(i, s, d) {
        var y = this._getNewPixelOrigin(d, s);
        return pt([this.project(i.getSouthWest(), s)._subtract(y), this.project(i.getNorthWest(), s)._subtract(y), this.project(i.getSouthEast(), s)._subtract(y), this.project(i.getNorthEast(), s)._subtract(y)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(i) {
        return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(i, s, d) {
        if (!d) return i;
        var y = this.project(i, s), x = this.getSize().divideBy(2), k = new W(y.subtract(x), y.add(x)), H = this._getBoundsOffset(k, d, s);
        return Math.abs(H.x) <= 1 && Math.abs(H.y) <= 1 ? i : this.unproject(y.add(H), s);
      }, _limitOffset: function(i, s) {
        if (!s) return i;
        var d = this.getPixelBounds(), y = new W(d.min.add(i), d.max.add(i));
        return i.add(this._getBoundsOffset(y, s));
      }, _getBoundsOffset: function(i, s, d) {
        var y = pt(this.project(s.getNorthEast(), d), this.project(s.getSouthWest(), d)), x = y.min.subtract(i.min), k = y.max.subtract(i.max), H = this._rebound(x.x, -k.x), K = this._rebound(x.y, -k.y);
        return new ut(H, K);
      }, _rebound: function(i, s) {
        return i + s > 0 ? Math.round(i - s) / 2 : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(s));
      }, _limitZoom: function(i) {
        var s = this.getMinZoom(), d = this.getMaxZoom(), y = zt.any3d ? this.options.zoomSnap : 1;
        return y && (i = Math.round(i / y) * y), Math.max(s, Math.min(d, i));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        Le(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(i, s) {
        var d = this._getCenterOffset(i)._trunc();
        return (s && s.animate) !== true && !this.getSize().contains(d) ? false : (this.panBy(d, s), true);
      }, _createAnimProxy: function() {
        var i = this._proxy = ue("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(i), this.on("zoomanim", function(s) {
          var d = Jo, y = this._proxy.style[d];
          Kn(this._proxy, this.project(s.center, s.zoom), this.getZoomScale(s.zoom, 1)), y === this._proxy.style[d] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        ze(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var i = this.getCenter(), s = this.getZoom();
        Kn(this._proxy, this.project(i, s), this.getZoomScale(s, 1));
      }, _catchTransitionEnd: function(i) {
        this._animatingZoom && i.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(i, s, d) {
        if (this._animatingZoom) return true;
        if (d = d || {}, !this._zoomAnimated || d.animate === false || this._nothingToAnimate() || Math.abs(s - this._zoom) > this.options.zoomAnimationThreshold) return false;
        var y = this.getZoomScale(s), x = this._getCenterOffset(i)._divideBy(1 - 1 / y);
        return d.animate !== true && !this.getSize().contains(x) ? false : (q(function() {
          this._moveStart(true, d.noMoveStart || false)._animateZoom(i, s, true);
        }, this), true);
      }, _animateZoom: function(i, s, d, y) {
        this._mapPane && (d && (this._animatingZoom = true, this._animateToCenter = i, this._animateToZoom = s, Yt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: i, zoom: s, noUpdate: y }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(h(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && Le(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
      } });
      function oa(i, s) {
        return new ne(i, s);
      }
      var Bn = at.extend({ options: { position: "topright" }, initialize: function(i) {
        A(this, i);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(i) {
        var s = this._map;
        return s && s.removeControl(this), this.options.position = i, s && s.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(i) {
        this.remove(), this._map = i;
        var s = this._container = this.onAdd(i), d = this.getPosition(), y = i._controlCorners[d];
        return Yt(s, "leaflet-control"), d.indexOf("bottom") !== -1 ? y.insertBefore(s, y.firstChild) : y.appendChild(s), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map ? (ze(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      }, _refocusOnMap: function(i) {
        this._map && i && i.screenX > 0 && i.screenY > 0 && this._map.getContainer().focus();
      } }), ho = function(i) {
        return new Bn(i);
      };
      ne.include({ addControl: function(i) {
        return i.addTo(this), this;
      }, removeControl: function(i) {
        return i.remove(), this;
      }, _initControlPos: function() {
        var i = this._controlCorners = {}, s = "leaflet-", d = this._controlContainer = ue("div", s + "control-container", this._container);
        function y(x, k) {
          var H = s + x + " " + s + k;
          i[x + k] = ue("div", H, d);
        }
        y("top", "left"), y("top", "right"), y("bottom", "left"), y("bottom", "right");
      }, _clearControlPos: function() {
        for (var i in this._controlCorners) ze(this._controlCorners[i]);
        ze(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } });
      var Du = Bn.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(i, s, d, y) {
        return d < y ? -1 : y < d ? 1 : 0;
      } }, initialize: function(i, s, d) {
        A(this, d), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false;
        for (var y in i) this._addLayer(i[y], y);
        for (y in s) this._addLayer(s[y], y, true);
      }, onAdd: function(i) {
        this._initLayout(), this._update(), this._map = i, i.on("zoomend", this._checkDisabledLayers, this);
        for (var s = 0; s < this._layers.length; s++) this._layers[s].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(i) {
        return Bn.prototype.addTo.call(this, i), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(i, s) {
        return this._addLayer(i, s), this._map ? this._update() : this;
      }, addOverlay: function(i, s) {
        return this._addLayer(i, s, true), this._map ? this._update() : this;
      }, removeLayer: function(i) {
        i.off("add remove", this._onLayerChange, this);
        var s = this._getLayer(_(i));
        return s && this._layers.splice(this._layers.indexOf(s), 1), this._map ? this._update() : this;
      }, expand: function() {
        Yt(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var i = this._map.getSize().y - (this._container.offsetTop + 50);
        return i < this._section.clientHeight ? (Yt(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = i + "px") : Le(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return Le(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var i = "leaflet-control-layers", s = this._container = ue("div", i), d = this.options.collapsed;
        s.setAttribute("aria-haspopup", true), fo(s), co(s);
        var y = this._section = ue("section", i + "-list");
        d && (this._map.on("click", this.collapse, this), $t(s, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
        var x = this._layersLink = ue("a", i + "-toggle", s);
        x.href = "#", x.title = "Layers", x.setAttribute("role", "button"), $t(x, { keydown: function(k) {
          k.keyCode === 13 && this._expandSafely();
        }, click: function(k) {
          Ye(k), this._expandSafely();
        } }, this), d || this.expand(), this._baseLayersList = ue("div", i + "-base", y), this._separator = ue("div", i + "-separator", y), this._overlaysList = ue("div", i + "-overlays", y), s.appendChild(y);
      }, _getLayer: function(i) {
        for (var s = 0; s < this._layers.length; s++) if (this._layers[s] && _(this._layers[s].layer) === i) return this._layers[s];
      }, _addLayer: function(i, s, d) {
        this._map && i.on("add remove", this._onLayerChange, this), this._layers.push({ layer: i, name: s, overlay: d }), this.options.sortLayers && this._layers.sort(h(function(y, x) {
          return this.options.sortFunction(y.layer, x.layer, y.name, x.name);
        }, this)), this.options.autoZIndex && i.setZIndex && (this._lastZIndex++, i.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container) return this;
        wn(this._baseLayersList), wn(this._overlaysList), this._layerControlInputs = [];
        var i, s, d, y, x = 0;
        for (d = 0; d < this._layers.length; d++) y = this._layers[d], this._addItem(y), s = s || y.overlay, i = i || !y.overlay, x += y.overlay ? 0 : 1;
        return this.options.hideSingleBase && (i = i && x > 1, this._baseLayersList.style.display = i ? "" : "none"), this._separator.style.display = s && i ? "" : "none", this;
      }, _onLayerChange: function(i) {
        this._handlingClick || this._update();
        var s = this._getLayer(_(i.target)), d = s.overlay ? i.type === "add" ? "overlayadd" : "overlayremove" : i.type === "add" ? "baselayerchange" : null;
        d && this._map.fire(d, s);
      }, _createRadioElement: function(i, s) {
        var d = '<input type="radio" class="leaflet-control-layers-selector" name="' + i + '"' + (s ? ' checked="checked"' : "") + "/>", y = document.createElement("div");
        return y.innerHTML = d, y.firstChild;
      }, _addItem: function(i) {
        var s = document.createElement("label"), d = this._map.hasLayer(i.layer), y;
        i.overlay ? (y = document.createElement("input"), y.type = "checkbox", y.className = "leaflet-control-layers-selector", y.defaultChecked = d) : y = this._createRadioElement("leaflet-base-layers_" + _(this), d), this._layerControlInputs.push(y), y.layerId = _(i.layer), $t(y, "click", this._onInputClick, this);
        var x = document.createElement("span");
        x.innerHTML = " " + i.name;
        var k = document.createElement("span");
        s.appendChild(k), k.appendChild(y), k.appendChild(x);
        var H = i.overlay ? this._overlaysList : this._baseLayersList;
        return H.appendChild(s), this._checkDisabledLayers(), s;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var i = this._layerControlInputs, s, d, y = [], x = [];
          this._handlingClick = true;
          for (var k = i.length - 1; k >= 0; k--) s = i[k], d = this._getLayer(s.layerId).layer, s.checked ? y.push(d) : s.checked || x.push(d);
          for (k = 0; k < x.length; k++) this._map.hasLayer(x[k]) && this._map.removeLayer(x[k]);
          for (k = 0; k < y.length; k++) this._map.hasLayer(y[k]) || this._map.addLayer(y[k]);
          this._handlingClick = false, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var i = this._layerControlInputs, s, d, y = this._map.getZoom(), x = i.length - 1; x >= 0; x--) s = i[x], d = this._getLayer(s.layerId).layer, s.disabled = d.options.minZoom !== void 0 && y < d.options.minZoom || d.options.maxZoom !== void 0 && y > d.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var i = this._section;
        this._preventClick = true, $t(i, "click", Ye), this.expand();
        var s = this;
        setTimeout(function() {
          he(i, "click", Ye), s._preventClick = false;
        });
      } }), nd = function(i, s, d) {
        return new Du(i, s, d);
      }, Xl = Bn.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(i) {
        var s = "leaflet-control-zoom", d = ue("div", s + " leaflet-bar"), y = this.options;
        return this._zoomInButton = this._createButton(y.zoomInText, y.zoomInTitle, s + "-in", d, this._zoomIn), this._zoomOutButton = this._createButton(y.zoomOutText, y.zoomOutTitle, s + "-out", d, this._zoomOut), this._updateDisabled(), i.on("zoomend zoomlevelschange", this._updateDisabled, this), d;
      }, onRemove: function(i) {
        i.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = true, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = false, this._updateDisabled(), this;
      }, _zoomIn: function(i) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
      }, _zoomOut: function(i) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (i.shiftKey ? 3 : 1));
      }, _createButton: function(i, s, d, y, x) {
        var k = ue("a", d, y);
        return k.innerHTML = i, k.href = "#", k.title = s, k.setAttribute("role", "button"), k.setAttribute("aria-label", s), fo(k), $t(k, "click", Ei), $t(k, "click", x, this), $t(k, "click", this._refocusOnMap, this), k;
      }, _updateDisabled: function() {
        var i = this._map, s = "leaflet-disabled";
        Le(this._zoomInButton, s), Le(this._zoomOutButton, s), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || i._zoom === i.getMinZoom()) && (Yt(this._zoomOutButton, s), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || i._zoom === i.getMaxZoom()) && (Yt(this._zoomInButton, s), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } });
      ne.mergeOptions({ zoomControl: true }), ne.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Xl(), this.addControl(this.zoomControl));
      });
      var Kl = function(i) {
        return new Xl(i);
      }, Nu = Bn.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(i) {
        var s = "leaflet-control-scale", d = ue("div", s), y = this.options;
        return this._addScales(y, s + "-line", d), i.on(y.updateWhenIdle ? "moveend" : "move", this._update, this), i.whenReady(this._update, this), d;
      }, onRemove: function(i) {
        i.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(i, s, d) {
        i.metric && (this._mScale = ue("div", s, d)), i.imperial && (this._iScale = ue("div", s, d));
      }, _update: function() {
        var i = this._map, s = i.getSize().y / 2, d = i.distance(i.containerPointToLatLng([0, s]), i.containerPointToLatLng([this.options.maxWidth, s]));
        this._updateScales(d);
      }, _updateScales: function(i) {
        this.options.metric && i && this._updateMetric(i), this.options.imperial && i && this._updateImperial(i);
      }, _updateMetric: function(i) {
        var s = this._getRoundNum(i), d = s < 1e3 ? s + " m" : s / 1e3 + " km";
        this._updateScale(this._mScale, d, s / i);
      }, _updateImperial: function(i) {
        var s = i * 3.2808399, d, y, x;
        s > 5280 ? (d = s / 5280, y = this._getRoundNum(d), this._updateScale(this._iScale, y + " mi", y / d)) : (x = this._getRoundNum(s), this._updateScale(this._iScale, x + " ft", x / s));
      }, _updateScale: function(i, s, d) {
        i.style.width = Math.round(this.options.maxWidth * d) + "px", i.innerHTML = s;
      }, _getRoundNum: function(i) {
        var s = Math.pow(10, (Math.floor(i) + "").length - 1), d = i / s;
        return d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1, s * d;
      } }), id = function(i) {
        return new Nu(i);
      }, rd = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Ql = Bn.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (zt.inlineSvg ? rd + " " : "") + "Leaflet</a>" }, initialize: function(i) {
        A(this, i), this._attributions = {};
      }, onAdd: function(i) {
        i.attributionControl = this, this._container = ue("div", "leaflet-control-attribution"), fo(this._container);
        for (var s in i._layers) i._layers[s].getAttribution && this.addAttribution(i._layers[s].getAttribution());
        return this._update(), i.on("layeradd", this._addAttribution, this), this._container;
      }, onRemove: function(i) {
        i.off("layeradd", this._addAttribution, this);
      }, _addAttribution: function(i) {
        i.layer.getAttribution && (this.addAttribution(i.layer.getAttribution()), i.layer.once("remove", function() {
          this.removeAttribution(i.layer.getAttribution());
        }, this));
      }, setPrefix: function(i) {
        return this.options.prefix = i, this._update(), this;
      }, addAttribution: function(i) {
        return i ? (this._attributions[i] || (this._attributions[i] = 0), this._attributions[i]++, this._update(), this) : this;
      }, removeAttribution: function(i) {
        return i ? (this._attributions[i] && (this._attributions[i]--, this._update()), this) : this;
      }, _update: function() {
        if (this._map) {
          var i = [];
          for (var s in this._attributions) this._attributions[s] && i.push(s);
          var d = [];
          this.options.prefix && d.push(this.options.prefix), i.length && d.push(i.join(", ")), this._container.innerHTML = d.join(' <span aria-hidden="true">|</span> ');
        }
      } });
      ne.mergeOptions({ attributionControl: true }), ne.addInitHook(function() {
        this.options.attributionControl && new Ql().addTo(this);
      });
      var od = function(i) {
        return new Ql(i);
      };
      Bn.Layers = Du, Bn.Zoom = Xl, Bn.Scale = Nu, Bn.Attribution = Ql, ho.layers = nd, ho.zoom = Kl, ho.scale = id, ho.attribution = od;
      var li = at.extend({ initialize: function(i) {
        this._map = i;
      }, enable: function() {
        return this._enabled ? this : (this._enabled = true, this.addHooks(), this);
      }, disable: function() {
        return this._enabled ? (this._enabled = false, this.removeHooks(), this) : this;
      }, enabled: function() {
        return !!this._enabled;
      } });
      li.addTo = function(i, s) {
        return i.addHandler(s, this), this;
      };
      var ad = { Events: Z }, Iu = zt.touch ? "touchstart mousedown" : "mousedown", Ji = ct.extend({ options: { clickTolerance: 3 }, initialize: function(i, s, d, y) {
        A(this, y), this._element = i, this._dragStartTarget = s || i, this._preventOutline = d;
      }, enable: function() {
        this._enabled || ($t(this._dragStartTarget, Iu, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (Ji._dragging === this && this.finishDrag(true), he(this._dragStartTarget, Iu, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(i) {
        if (this._enabled && (this._moved = false, !oo(this._element, "leaflet-zoom-anim"))) {
          if (i.touches && i.touches.length !== 1) {
            Ji._dragging === this && this.finishDrag();
            return;
          }
          if (!(Ji._dragging || i.shiftKey || i.which !== 1 && i.button !== 1 && !i.touches) && (Ji._dragging = this, this._preventOutline && na(this._element), ea(), wi(), !this._moving)) {
            this.fire("down");
            var s = i.touches ? i.touches[0] : i, d = kr(this._element);
            this._startPoint = new ut(s.clientX, s.clientY), this._startPos = Qi(this._element), this._parentScale = Wi(d);
            var y = i.type === "mousedown";
            $t(document, y ? "mousemove" : "touchmove", this._onMove, this), $t(document, y ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      }, _onMove: function(i) {
        if (this._enabled) {
          if (i.touches && i.touches.length > 1) {
            this._moved = true;
            return;
          }
          var s = i.touches && i.touches.length === 1 ? i.touches[0] : i, d = new ut(s.clientX, s.clientY)._subtract(this._startPoint);
          !d.x && !d.y || Math.abs(d.x) + Math.abs(d.y) < this.options.clickTolerance || (d.x /= this._parentScale.x, d.y /= this._parentScale.y, Ye(i), this._moved || (this.fire("dragstart"), this._moved = true, Yt(document.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Yt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(d), this._moving = true, this._lastEvent = i, this._updatePosition());
        }
      }, _updatePosition: function() {
        var i = { originalEvent: this._lastEvent };
        this.fire("predrag", i), Ve(this._element, this._newPos), this.fire("drag", i);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(i) {
        Le(document.body, "leaflet-dragging"), this._lastTarget && (Le(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), he(document, "mousemove touchmove", this._onMove, this), he(document, "mouseup touchend touchcancel", this._onUp, this), Gl(), ta();
        var s = this._moved && this._moving;
        this._moving = false, Ji._dragging = false, s && this.fire("dragend", { noInertia: i, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function Hu(i, s, d) {
        var y, x = [1, 4, 2, 8], k, H, K, ot, xt, Tt, kt, Rt;
        for (k = 0, Tt = i.length; k < Tt; k++) i[k]._code = Rr(i[k], s);
        for (K = 0; K < 4; K++) {
          for (kt = x[K], y = [], k = 0, Tt = i.length, H = Tt - 1; k < Tt; H = k++) ot = i[k], xt = i[H], ot._code & kt ? xt._code & kt || (Rt = qa(xt, ot, kt, s, d), Rt._code = Rr(Rt, s), y.push(Rt)) : (xt._code & kt && (Rt = qa(xt, ot, kt, s, d), Rt._code = Rr(Rt, s), y.push(Rt)), y.push(ot));
          i = y;
        }
        return i;
      }
      function $a(i, s) {
        var d, y, x, k, H, K, ot, xt, Tt;
        if (!i || i.length === 0) throw new Error("latlngs not passed");
        yn(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var kt = _t([0, 0]), Rt = bt(i), Ut = Rt.getNorthWest().distanceTo(Rt.getSouthWest()) * Rt.getNorthEast().distanceTo(Rt.getNorthWest());
        Ut < 1700 && (kt = Wl(i));
        var Pe = i.length, Fe = [];
        for (d = 0; d < Pe; d++) {
          var vn = _t(i[d]);
          Fe.push(s.project(_t([vn.lat - kt.lat, vn.lng - kt.lng])));
        }
        for (K = ot = xt = 0, d = 0, y = Pe - 1; d < Pe; y = d++) x = Fe[d], k = Fe[y], H = x.y * k.x - k.y * x.x, ot += (x.x + k.x) * H, xt += (x.y + k.y) * H, K += H * 3;
        K === 0 ? Tt = Fe[0] : Tt = [ot / K, xt / K];
        var Qn = s.unproject(w(Tt));
        return _t([Qn.lat + kt.lat, Qn.lng + kt.lng]);
      }
      function Wl(i) {
        for (var s = 0, d = 0, y = 0, x = 0; x < i.length; x++) {
          var k = _t(i[x]);
          s += k.lat, d += k.lng, y++;
        }
        return _t([s / y, d / y]);
      }
      var ld = { __proto__: null, clipPolygon: Hu, polygonCenter: $a, centroid: Wl };
      function ju(i, s) {
        if (!s || !i.length) return i.slice();
        var d = s * s;
        return i = cd(i, d), i = ud(i, d), i;
      }
      function Jl(i, s, d) {
        return Math.sqrt(zr(i, s, d, true));
      }
      function sd(i, s, d) {
        return zr(i, s, d);
      }
      function ud(i, s) {
        var d = i.length, y = typeof Uint8Array < "u" ? Uint8Array : Array, x = new y(d);
        x[0] = x[d - 1] = 1, ts(i, x, s, 0, d - 1);
        var k, H = [];
        for (k = 0; k < d; k++) x[k] && H.push(i[k]);
        return H;
      }
      function ts(i, s, d, y, x) {
        var k = 0, H, K, ot;
        for (K = y + 1; K <= x - 1; K++) ot = zr(i[K], i[y], i[x], true), ot > k && (H = K, k = ot);
        k > d && (s[H] = 1, ts(i, s, d, y, H), ts(i, s, d, H, x));
      }
      function cd(i, s) {
        for (var d = [i[0]], y = 1, x = 0, k = i.length; y < k; y++) fd(i[y], i[x]) > s && (d.push(i[y]), x = y);
        return x < k - 1 && d.push(i[k - 1]), d;
      }
      var Uu;
      function Zu(i, s, d, y, x) {
        var k = y ? Uu : Rr(i, d), H = Rr(s, d), K, ot, xt;
        for (Uu = H; ; ) {
          if (!(k | H)) return [i, s];
          if (k & H) return false;
          K = k || H, ot = qa(i, s, K, d, x), xt = Rr(ot, d), K === k ? (i = ot, k = xt) : (s = ot, H = xt);
        }
      }
      function qa(i, s, d, y, x) {
        var k = s.x - i.x, H = s.y - i.y, K = y.min, ot = y.max, xt, Tt;
        return d & 8 ? (xt = i.x + k * (ot.y - i.y) / H, Tt = ot.y) : d & 4 ? (xt = i.x + k * (K.y - i.y) / H, Tt = K.y) : d & 2 ? (xt = ot.x, Tt = i.y + H * (ot.x - i.x) / k) : d & 1 && (xt = K.x, Tt = i.y + H * (K.x - i.x) / k), new ut(xt, Tt, x);
      }
      function Rr(i, s) {
        var d = 0;
        return i.x < s.min.x ? d |= 1 : i.x > s.max.x && (d |= 2), i.y < s.min.y ? d |= 4 : i.y > s.max.y && (d |= 8), d;
      }
      function fd(i, s) {
        var d = s.x - i.x, y = s.y - i.y;
        return d * d + y * y;
      }
      function zr(i, s, d, y) {
        var x = s.x, k = s.y, H = d.x - x, K = d.y - k, ot = H * H + K * K, xt;
        return ot > 0 && (xt = ((i.x - x) * H + (i.y - k) * K) / ot, xt > 1 ? (x = d.x, k = d.y) : xt > 0 && (x += H * xt, k += K * xt)), H = i.x - x, K = i.y - k, y ? H * H + K * K : new ut(x, k);
      }
      function yn(i) {
        return !P(i[0]) || typeof i[0][0] != "object" && typeof i[0][0] < "u";
      }
      function $u(i) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), yn(i);
      }
      function es(i, s) {
        var d, y, x, k, H, K, ot, xt;
        if (!i || i.length === 0) throw new Error("latlngs not passed");
        yn(i) || (console.warn("latlngs are not flat! Only the first ring will be used"), i = i[0]);
        var Tt = _t([0, 0]), kt = bt(i), Rt = kt.getNorthWest().distanceTo(kt.getSouthWest()) * kt.getNorthEast().distanceTo(kt.getNorthWest());
        Rt < 1700 && (Tt = Wl(i));
        var Ut = i.length, Pe = [];
        for (d = 0; d < Ut; d++) {
          var Fe = _t(i[d]);
          Pe.push(s.project(_t([Fe.lat - Tt.lat, Fe.lng - Tt.lng])));
        }
        for (d = 0, y = 0; d < Ut - 1; d++) y += Pe[d].distanceTo(Pe[d + 1]) / 2;
        if (y === 0) xt = Pe[0];
        else for (d = 0, k = 0; d < Ut - 1; d++) if (H = Pe[d], K = Pe[d + 1], x = H.distanceTo(K), k += x, k > y) {
          ot = (k - y) / x, xt = [K.x - ot * (K.x - H.x), K.y - ot * (K.y - H.y)];
          break;
        }
        var vn = s.unproject(w(xt));
        return _t([vn.lat + Tt.lat, vn.lng + Tt.lng]);
      }
      var qu = { __proto__: null, simplify: ju, pointToSegmentDistance: Jl, closestPointOnSegment: sd, clipSegment: Zu, _getEdgeIntersection: qa, _getBitCode: Rr, _sqClosestPointOnSegment: zr, isFlat: yn, _flat: $u, polylineCenter: es }, Va = { project: function(i) {
        return new ut(i.lng, i.lat);
      }, unproject: function(i) {
        return new wt(i.y, i.x);
      }, bounds: new W([-180, -90], [180, 90]) }, Fa = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new W([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(i) {
        var s = Math.PI / 180, d = this.R, y = i.lat * s, x = this.R_MINOR / d, k = Math.sqrt(1 - x * x), H = k * Math.sin(y), K = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - H) / (1 + H), k / 2);
        return y = -d * Math.log(Math.max(K, 1e-10)), new ut(i.lng * s * d, y);
      }, unproject: function(i) {
        for (var s = 180 / Math.PI, d = this.R, y = this.R_MINOR / d, x = Math.sqrt(1 - y * y), k = Math.exp(-i.y / d), H = Math.PI / 2 - 2 * Math.atan(k), K = 0, ot = 0.1, xt; K < 15 && Math.abs(ot) > 1e-7; K++) xt = x * Math.sin(H), xt = Math.pow((1 - xt) / (1 + xt), x / 2), ot = Math.PI / 2 - 2 * Math.atan(k * xt) - H, H += ot;
        return new wt(H * s, i.x * s / d);
      } }, Vu = { __proto__: null, LonLat: Va, Mercator: Fa, SphericalMercator: Bt }, po = c({}, Lt, { code: "EPSG:3395", projection: Fa, transformation: function() {
        var i = 0.5 / (Math.PI * Fa.R);
        return Kt(i, 0.5, -i, 0.5);
      }() }), Fu = c({}, Lt, { code: "EPSG:4326", projection: Va, transformation: Kt(1 / 180, 1, -1 / 180, 0.5) }), dd = c({}, Dt, { projection: Va, transformation: Kt(1, 0, -1, 0), scale: function(i) {
        return Math.pow(2, i);
      }, zoom: function(i) {
        return Math.log(i) / Math.LN2;
      }, distance: function(i, s) {
        var d = s.lng - i.lng, y = s.lat - i.lat;
        return Math.sqrt(d * d + y * y);
      }, infinite: true });
      Dt.Earth = Lt, Dt.EPSG3395 = po, Dt.EPSG3857 = Re, Dt.EPSG900913 = Ft, Dt.EPSG4326 = Fu, Dt.Simple = dd;
      var si = ct.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(i) {
        return i.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(i) {
        return i && i.removeLayer(this), this;
      }, getPane: function(i) {
        return this._map.getPane(i ? this.options[i] || i : this.options.pane);
      }, addInteractiveTarget: function(i) {
        return this._map._targets[_(i)] = this, this;
      }, removeInteractiveTarget: function(i) {
        return delete this._map._targets[_(i)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(i) {
        var s = i.target;
        if (s.hasLayer(this)) {
          if (this._map = s, this._zoomAnimated = s._zoomAnimated, this.getEvents) {
            var d = this.getEvents();
            s.on(d, this), this.once("remove", function() {
              s.off(d, this);
            }, this);
          }
          this.onAdd(s), this.fire("add"), s.fire("layeradd", { layer: this });
        }
      } });
      ne.include({ addLayer: function(i) {
        if (!i._layerAdd) throw new Error("The provided object is not a Layer.");
        var s = _(i);
        return this._layers[s] ? this : (this._layers[s] = i, i._mapToAdd = this, i.beforeAdd && i.beforeAdd(this), this.whenReady(i._layerAdd, i), this);
      }, removeLayer: function(i) {
        var s = _(i);
        return this._layers[s] ? (this._loaded && i.onRemove(this), delete this._layers[s], this._loaded && (this.fire("layerremove", { layer: i }), i.fire("remove")), i._map = i._mapToAdd = null, this) : this;
      }, hasLayer: function(i) {
        return _(i) in this._layers;
      }, eachLayer: function(i, s) {
        for (var d in this._layers) i.call(s, this._layers[d]);
        return this;
      }, _addLayers: function(i) {
        i = i ? P(i) ? i : [i] : [];
        for (var s = 0, d = i.length; s < d; s++) this.addLayer(i[s]);
      }, _addZoomLimit: function(i) {
        (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) && (this._zoomBoundLayers[_(i)] = i, this._updateZoomLevels());
      }, _removeZoomLimit: function(i) {
        var s = _(i);
        this._zoomBoundLayers[s] && (delete this._zoomBoundLayers[s], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var i = 1 / 0, s = -1 / 0, d = this._getZoomSpan();
        for (var y in this._zoomBoundLayers) {
          var x = this._zoomBoundLayers[y].options;
          i = x.minZoom === void 0 ? i : Math.min(i, x.minZoom), s = x.maxZoom === void 0 ? s : Math.max(s, x.maxZoom);
        }
        this._layersMaxZoom = s === -1 / 0 ? void 0 : s, this._layersMinZoom = i === 1 / 0 ? void 0 : i, d !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      } });
      var Lr = si.extend({ initialize: function(i, s) {
        A(this, s), this._layers = {};
        var d, y;
        if (i) for (d = 0, y = i.length; d < y; d++) this.addLayer(i[d]);
      }, addLayer: function(i) {
        var s = this.getLayerId(i);
        return this._layers[s] = i, this._map && this._map.addLayer(i), this;
      }, removeLayer: function(i) {
        var s = i in this._layers ? i : this.getLayerId(i);
        return this._map && this._layers[s] && this._map.removeLayer(this._layers[s]), delete this._layers[s], this;
      }, hasLayer: function(i) {
        var s = typeof i == "number" ? i : this.getLayerId(i);
        return s in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(i) {
        var s = Array.prototype.slice.call(arguments, 1), d, y;
        for (d in this._layers) y = this._layers[d], y[i] && y[i].apply(y, s);
        return this;
      }, onAdd: function(i) {
        this.eachLayer(i.addLayer, i);
      }, onRemove: function(i) {
        this.eachLayer(i.removeLayer, i);
      }, eachLayer: function(i, s) {
        for (var d in this._layers) i.call(s, this._layers[d]);
        return this;
      }, getLayer: function(i) {
        return this._layers[i];
      }, getLayers: function() {
        var i = [];
        return this.eachLayer(i.push, i), i;
      }, setZIndex: function(i) {
        return this.invoke("setZIndex", i);
      }, getLayerId: function(i) {
        return _(i);
      } }), Gu = function(i, s) {
        return new Lr(i, s);
      }, Zn = Lr.extend({ addLayer: function(i) {
        return this.hasLayer(i) ? this : (i.addEventParent(this), Lr.prototype.addLayer.call(this, i), this.fire("layeradd", { layer: i }));
      }, removeLayer: function(i) {
        return this.hasLayer(i) ? (i in this._layers && (i = this._layers[i]), i.removeEventParent(this), Lr.prototype.removeLayer.call(this, i), this.fire("layerremove", { layer: i })) : this;
      }, setStyle: function(i) {
        return this.invoke("setStyle", i);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var i = new R();
        for (var s in this._layers) {
          var d = this._layers[s];
          i.extend(d.getBounds ? d.getBounds() : d.getLatLng());
        }
        return i;
      } }), aa = function(i, s) {
        return new Zn(i, s);
      }, mo = at.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(i) {
        A(this, i);
      }, createIcon: function(i) {
        return this._createIcon("icon", i);
      }, createShadow: function(i) {
        return this._createIcon("shadow", i);
      }, _createIcon: function(i, s) {
        var d = this._getIconUrl(i);
        if (!d) {
          if (i === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var y = this._createImg(d, s && s.tagName === "IMG" ? s : null);
        return this._setIconStyles(y, i), (this.options.crossOrigin || this.options.crossOrigin === "") && (y.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), y;
      }, _setIconStyles: function(i, s) {
        var d = this.options, y = d[s + "Size"];
        typeof y == "number" && (y = [y, y]);
        var x = w(y), k = w(s === "shadow" && d.shadowAnchor || d.iconAnchor || x && x.divideBy(2, true));
        i.className = "leaflet-marker-" + s + " " + (d.className || ""), k && (i.style.marginLeft = -k.x + "px", i.style.marginTop = -k.y + "px"), x && (i.style.width = x.x + "px", i.style.height = x.y + "px");
      }, _createImg: function(i, s) {
        return s = s || document.createElement("img"), s.src = i, s;
      }, _getIconUrl: function(i) {
        return zt.retina && this.options[i + "RetinaUrl"] || this.options[i + "Url"];
      } });
      function Ga(i) {
        return new mo(i);
      }
      var go = mo.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(i) {
        return typeof go.imagePath != "string" && (go.imagePath = this._detectIconPath()), (this.options.imagePath || go.imagePath) + mo.prototype._getIconUrl.call(this, i);
      }, _stripUrl: function(i) {
        var s = function(d, y, x) {
          var k = y.exec(d);
          return k && k[x];
        };
        return i = s(i, /^url\((['"])?(.+)\1\)$/, 2), i && s(i, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var i = ue("div", "leaflet-default-icon-path", document.body), s = Tr(i, "background-image") || Tr(i, "backgroundImage");
        if (document.body.removeChild(i), s = this._stripUrl(s), s) return s;
        var d = document.querySelector('link[href$="leaflet.css"]');
        return d ? d.href.substring(0, d.href.length - 11 - 1) : "";
      } }), ns = li.extend({ initialize: function(i) {
        this._marker = i;
      }, addHooks: function() {
        var i = this._marker._icon;
        this._draggable || (this._draggable = new Ji(i, i, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), Yt(i, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && Le(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(i) {
        var s = this._marker, d = s._map, y = this._marker.options.autoPanSpeed, x = this._marker.options.autoPanPadding, k = Qi(s._icon), H = d.getPixelBounds(), K = d.getPixelOrigin(), ot = pt(H.min._subtract(K).add(x), H.max._subtract(K).subtract(x));
        if (!ot.contains(k)) {
          var xt = w((Math.max(ot.max.x, k.x) - ot.max.x) / (H.max.x - ot.max.x) - (Math.min(ot.min.x, k.x) - ot.min.x) / (H.min.x - ot.min.x), (Math.max(ot.max.y, k.y) - ot.max.y) / (H.max.y - ot.max.y) - (Math.min(ot.min.y, k.y) - ot.min.y) / (H.min.y - ot.min.y)).multiplyBy(y);
          d.panBy(xt, { animate: false }), this._draggable._newPos._add(xt), this._draggable._startPos._add(xt), Ve(s._icon, this._draggable._newPos), this._onDrag(i), this._panRequest = q(this._adjustPan.bind(this, i));
        }
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(i) {
        this._marker.options.autoPan && (X(this._panRequest), this._panRequest = q(this._adjustPan.bind(this, i)));
      }, _onDrag: function(i) {
        var s = this._marker, d = s._shadow, y = Qi(s._icon), x = s._map.layerPointToLatLng(y);
        d && Ve(d, y), s._latlng = x, i.latlng = x, i.oldLatLng = this._oldLatLng, s.fire("move", i).fire("drag", i);
      }, _onDragEnd: function(i) {
        X(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", i);
      } }), yo = si.extend({ options: { icon: new go(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(i, s) {
        A(this, s), this._latlng = _t(i);
      }, onAdd: function(i) {
        this._zoomAnimated = this._zoomAnimated && i.options.markerZoomAnimation, this._zoomAnimated && i.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(i) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && i.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(i) {
        var s = this._latlng;
        return this._latlng = _t(i), this.update(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
      }, setZIndexOffset: function(i) {
        return this.options.zIndexOffset = i, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(i) {
        return this.options.icon = i, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        if (this._icon && this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(i);
        }
        return this;
      }, _initIcon: function() {
        var i = this.options, s = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), d = i.icon.createIcon(this._icon), y = false;
        d !== this._icon && (this._icon && this._removeIcon(), y = true, i.title && (d.title = i.title), d.tagName === "IMG" && (d.alt = i.alt || "")), Yt(d, s), i.keyboard && (d.tabIndex = "0", d.setAttribute("role", "button")), this._icon = d, i.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && $t(d, "focus", this._panOnFocus, this);
        var x = i.icon.createShadow(this._shadow), k = false;
        x !== this._shadow && (this._removeShadow(), k = true), x && (Yt(x, s), x.alt = ""), this._shadow = x, i.opacity < 1 && this._updateOpacity(), y && this.getPane().appendChild(this._icon), this._initInteraction(), x && k && this.getPane(i.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && he(this._icon, "focus", this._panOnFocus, this), ze(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && ze(this._shadow), this._shadow = null;
      }, _setPos: function(i) {
        this._icon && Ve(this._icon, i), this._shadow && Ve(this._shadow, i), this._zIndex = i.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(i) {
        this._icon && (this._icon.style.zIndex = this._zIndex + i);
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center).round();
        this._setPos(s);
      }, _initInteraction: function() {
        if (this.options.interactive && (Yt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ns)) {
          var i = this.options.draggable;
          this.dragging && (i = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ns(this), i && this.dragging.enable();
        }
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var i = this.options.opacity;
        this._icon && Pn(this._icon, i), this._shadow && Pn(this._shadow, i);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _panOnFocus: function() {
        var i = this._map;
        if (i) {
          var s = this.options.icon.options, d = s.iconSize ? w(s.iconSize) : w(0, 0), y = s.iconAnchor ? w(s.iconAnchor) : w(0, 0);
          i.panInside(this._latlng, { paddingTopLeft: y, paddingBottomRight: d.subtract(y) });
        }
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      } });
      function is(i, s) {
        return new yo(i, s);
      }
      var Hi = si.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(i) {
        this._renderer = i.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(i) {
        return A(this, i), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && i && Object.prototype.hasOwnProperty.call(i, "weight") && this._updateBounds()), this;
      }, bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      }, bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      }, getElement: function() {
        return this._path;
      }, _reset: function() {
        this._project(), this._update();
      }, _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      } }), la = Hi.extend({ options: { fill: true, radius: 10 }, initialize: function(i, s) {
        A(this, s), this._latlng = _t(i), this._radius = this.options.radius;
      }, setLatLng: function(i) {
        var s = this._latlng;
        return this._latlng = _t(i), this.redraw(), this.fire("move", { oldLatLng: s, latlng: this._latlng });
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(i) {
        return this.options.radius = this._radius = i, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(i) {
        var s = i && i.radius || this._radius;
        return Hi.prototype.setStyle.call(this, i), this.setRadius(s), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var i = this._radius, s = this._radiusY || i, d = this._clickTolerance(), y = [i + d, s + d];
        this._pxBounds = new W(this._point.subtract(y), this._point.add(y));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(i) {
        return i.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } });
      function Yu(i, s) {
        return new la(i, s);
      }
      var rs = la.extend({ initialize: function(i, s, d) {
        if (typeof s == "number" && (s = c({}, d, { radius: s })), A(this, s), this._latlng = _t(i), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(i) {
        return this._mRadius = i, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var i = [this._radius, this._radiusY || this._radius];
        return new R(this._map.layerPointToLatLng(this._point.subtract(i)), this._map.layerPointToLatLng(this._point.add(i)));
      }, setStyle: Hi.prototype.setStyle, _project: function() {
        var i = this._latlng.lng, s = this._latlng.lat, d = this._map, y = d.options.crs;
        if (y.distance === Lt.distance) {
          var x = Math.PI / 180, k = this._mRadius / Lt.R / x, H = d.project([s + k, i]), K = d.project([s - k, i]), ot = H.add(K).divideBy(2), xt = d.unproject(ot).lat, Tt = Math.acos((Math.cos(k * x) - Math.sin(s * x) * Math.sin(xt * x)) / (Math.cos(s * x) * Math.cos(xt * x))) / x;
          (isNaN(Tt) || Tt === 0) && (Tt = k / Math.cos(Math.PI / 180 * s)), this._point = ot.subtract(d.getPixelOrigin()), this._radius = isNaN(Tt) ? 0 : ot.x - d.project([xt, i - Tt]).x, this._radiusY = ot.y - H.y;
        } else {
          var kt = y.unproject(y.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = d.latLngToLayerPoint(this._latlng), this._radius = this._point.x - d.latLngToLayerPoint(kt).x;
        }
        this._updateBounds();
      } });
      function hd(i, s, d) {
        return new rs(i, s, d);
      }
      var ji = Hi.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(i, s) {
        A(this, s), this._setLatLngs(i);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(i) {
        return this._setLatLngs(i), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(i) {
        for (var s = 1 / 0, d = null, y = zr, x, k, H = 0, K = this._parts.length; H < K; H++) for (var ot = this._parts[H], xt = 1, Tt = ot.length; xt < Tt; xt++) {
          x = ot[xt - 1], k = ot[xt];
          var kt = y(i, x, k, true);
          kt < s && (s = kt, d = y(i, x, k));
        }
        return d && (d.distance = Math.sqrt(s)), d;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return es(this._defaultShape(), this._map.options.crs);
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(i, s) {
        return s = s || this._defaultShape(), i = _t(i), s.push(i), this._bounds.extend(i), this.redraw();
      }, _setLatLngs: function(i) {
        this._bounds = new R(), this._latlngs = this._convertLatLngs(i);
      }, _defaultShape: function() {
        return yn(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(i) {
        for (var s = [], d = yn(i), y = 0, x = i.length; y < x; y++) d ? (s[y] = _t(i[y]), this._bounds.extend(s[y])) : s[y] = this._convertLatLngs(i[y]);
        return s;
      }, _project: function() {
        var i = new W();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, i), this._bounds.isValid() && i.isValid() && (this._rawPxBounds = i, this._updateBounds());
      }, _updateBounds: function() {
        var i = this._clickTolerance(), s = new ut(i, i);
        this._rawPxBounds && (this._pxBounds = new W([this._rawPxBounds.min.subtract(s), this._rawPxBounds.max.add(s)]));
      }, _projectLatlngs: function(i, s, d) {
        var y = i[0] instanceof wt, x = i.length, k, H;
        if (y) {
          for (H = [], k = 0; k < x; k++) H[k] = this._map.latLngToLayerPoint(i[k]), d.extend(H[k]);
          s.push(H);
        } else for (k = 0; k < x; k++) this._projectLatlngs(i[k], s, d);
      }, _clipPoints: function() {
        var i = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var s = this._parts, d, y, x, k, H, K, ot;
          for (d = 0, x = 0, k = this._rings.length; d < k; d++) for (ot = this._rings[d], y = 0, H = ot.length; y < H - 1; y++) K = Zu(ot[y], ot[y + 1], i, y, true), K && (s[x] = s[x] || [], s[x].push(K[0]), (K[1] !== ot[y + 1] || y === H - 2) && (s[x].push(K[1]), x++));
        }
      }, _simplifyPoints: function() {
        for (var i = this._parts, s = this.options.smoothFactor, d = 0, y = i.length; d < y; d++) i[d] = ju(i[d], s);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(i, s) {
        var d, y, x, k, H, K, ot = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(i)) return false;
        for (d = 0, k = this._parts.length; d < k; d++) for (K = this._parts[d], y = 0, H = K.length, x = H - 1; y < H; x = y++) if (!(!s && y === 0) && Jl(i, K[x], K[y]) <= ot) return true;
        return false;
      } });
      function pd(i, s) {
        return new ji(i, s);
      }
      ji._flat = $u;
      var vo = ji.extend({ options: { fill: true }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return $a(this._defaultShape(), this._map.options.crs);
      }, _convertLatLngs: function(i) {
        var s = ji.prototype._convertLatLngs.call(this, i), d = s.length;
        return d >= 2 && s[0] instanceof wt && s[0].equals(s[d - 1]) && s.pop(), s;
      }, _setLatLngs: function(i) {
        ji.prototype._setLatLngs.call(this, i), yn(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return yn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var i = this._renderer._bounds, s = this.options.weight, d = new ut(s, s);
        if (i = new W(i.min.subtract(d), i.max.add(d)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(i))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var y = 0, x = this._rings.length, k; y < x; y++) k = Hu(this._rings[y], i, true), k.length && this._parts.push(k);
        }
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(i) {
        var s = false, d, y, x, k, H, K, ot, xt;
        if (!this._pxBounds || !this._pxBounds.contains(i)) return false;
        for (k = 0, ot = this._parts.length; k < ot; k++) for (d = this._parts[k], H = 0, xt = d.length, K = xt - 1; H < xt; K = H++) y = d[H], x = d[K], y.y > i.y != x.y > i.y && i.x < (x.x - y.x) * (i.y - y.y) / (x.y - y.y) + y.x && (s = !s);
        return s || ji.prototype._containsPoint.call(this, i, true);
      } });
      function $n(i, s) {
        return new vo(i, s);
      }
      var qn = Zn.extend({ initialize: function(i, s) {
        A(this, s), this._layers = {}, i && this.addData(i);
      }, addData: function(i) {
        var s = P(i) ? i : i.features, d, y, x;
        if (s) {
          for (d = 0, y = s.length; d < y; d++) x = s[d], (x.geometries || x.geometry || x.features || x.coordinates) && this.addData(x);
          return this;
        }
        var k = this.options;
        if (k.filter && !k.filter(i)) return this;
        var H = sa(i, k);
        return H ? (H.feature = _o(i), H.defaultOptions = H.options, this.resetStyle(H), k.onEachFeature && k.onEachFeature(i, H), this.addLayer(H)) : this;
      }, resetStyle: function(i) {
        return i === void 0 ? this.eachLayer(this.resetStyle, this) : (i.options = c({}, i.defaultOptions), this._setLayerStyle(i, this.options.style), this);
      }, setStyle: function(i) {
        return this.eachLayer(function(s) {
          this._setLayerStyle(s, i);
        }, this);
      }, _setLayerStyle: function(i, s) {
        i.setStyle && (typeof s == "function" && (s = s(i.feature)), i.setStyle(s));
      } });
      function sa(i, s) {
        var d = i.type === "Feature" ? i.geometry : i, y = d ? d.coordinates : null, x = [], k = s && s.pointToLayer, H = s && s.coordsToLatLng || Ya, K, ot, xt, Tt;
        if (!y && !d) return null;
        switch (d.type) {
          case "Point":
            return K = H(y), os(k, i, K, s);
          case "MultiPoint":
            for (xt = 0, Tt = y.length; xt < Tt; xt++) K = H(y[xt]), x.push(os(k, i, K, s));
            return new Zn(x);
          case "LineString":
          case "MultiLineString":
            return ot = ua(y, d.type === "LineString" ? 0 : 1, H), new ji(ot, s);
          case "Polygon":
          case "MultiPolygon":
            return ot = ua(y, d.type === "Polygon" ? 1 : 2, H), new vo(ot, s);
          case "GeometryCollection":
            for (xt = 0, Tt = d.geometries.length; xt < Tt; xt++) {
              var kt = sa({ geometry: d.geometries[xt], type: "Feature", properties: i.properties }, s);
              kt && x.push(kt);
            }
            return new Zn(x);
          case "FeatureCollection":
            for (xt = 0, Tt = d.features.length; xt < Tt; xt++) {
              var Rt = sa(d.features[xt], s);
              Rt && x.push(Rt);
            }
            return new Zn(x);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function os(i, s, d, y) {
        return i ? i(s, d) : new yo(d, y && y.markersInheritOptions && y);
      }
      function Ya(i) {
        return new wt(i[1], i[0], i[2]);
      }
      function ua(i, s, d) {
        for (var y = [], x = 0, k = i.length, H; x < k; x++) H = s ? ua(i[x], s - 1, d) : (d || Ya)(i[x]), y.push(H);
        return y;
      }
      function ca(i, s) {
        return i = _t(i), i.alt !== void 0 ? [E(i.lng, s), E(i.lat, s), E(i.alt, s)] : [E(i.lng, s), E(i.lat, s)];
      }
      function Xa(i, s, d, y) {
        for (var x = [], k = 0, H = i.length; k < H; k++) x.push(s ? Xa(i[k], yn(i[k]) ? 0 : s - 1, d, y) : ca(i[k], y));
        return !s && d && x.length > 0 && x.push(x[0].slice()), x;
      }
      function ui(i, s) {
        return i.feature ? c({}, i.feature, { geometry: s }) : _o(s);
      }
      function _o(i) {
        return i.type === "Feature" || i.type === "FeatureCollection" ? i : { type: "Feature", properties: {}, geometry: i };
      }
      var Pr = { toGeoJSON: function(i) {
        return ui(this, { type: "Point", coordinates: ca(this.getLatLng(), i) });
      } };
      yo.include(Pr), rs.include(Pr), la.include(Pr), ji.include({ toGeoJSON: function(i) {
        var s = !yn(this._latlngs), d = Xa(this._latlngs, s ? 1 : 0, false, i);
        return ui(this, { type: (s ? "Multi" : "") + "LineString", coordinates: d });
      } }), vo.include({ toGeoJSON: function(i) {
        var s = !yn(this._latlngs), d = s && !yn(this._latlngs[0]), y = Xa(this._latlngs, d ? 2 : s ? 1 : 0, true, i);
        return s || (y = [y]), ui(this, { type: (d ? "Multi" : "") + "Polygon", coordinates: y });
      } }), Lr.include({ toMultiPoint: function(i) {
        var s = [];
        return this.eachLayer(function(d) {
          s.push(d.toGeoJSON(i).geometry.coordinates);
        }), ui(this, { type: "MultiPoint", coordinates: s });
      }, toGeoJSON: function(i) {
        var s = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (s === "MultiPoint") return this.toMultiPoint(i);
        var d = s === "GeometryCollection", y = [];
        return this.eachLayer(function(x) {
          if (x.toGeoJSON) {
            var k = x.toGeoJSON(i);
            if (d) y.push(k.geometry);
            else {
              var H = _o(k);
              H.type === "FeatureCollection" ? y.push.apply(y, H.features) : y.push(H);
            }
          }
        }), d ? ui(this, { geometries: y, type: "GeometryCollection" }) : { type: "FeatureCollection", features: y };
      } });
      function Ka(i, s) {
        return new qn(i, s);
      }
      var Xu = Ka, ki = si.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(i, s, d) {
        this._url = i, this._bounds = bt(s), A(this, d);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Yt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        ze(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._image && this._updateOpacity(), this;
      }, setStyle: function(i) {
        return i.opacity && this.setOpacity(i.opacity), this;
      }, bringToFront: function() {
        return this._map && Er(this._image), this;
      }, bringToBack: function() {
        return this._map && ro(this._image), this;
      }, setUrl: function(i) {
        return this._url = i, this._image && (this._image.src = i), this;
      }, setBounds: function(i) {
        return this._bounds = bt(i), this._map && this._reset(), this;
      }, getEvents: function() {
        var i = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      }, setZIndex: function(i) {
        return this.options.zIndex = i, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var i = this._url.tagName === "IMG", s = this._image = i ? this._url : ue("img");
        if (Yt(s, "leaflet-image-layer"), this._zoomAnimated && Yt(s, "leaflet-zoom-animated"), this.options.className && Yt(s, this.options.className), s.onselectstart = S, s.onmousemove = S, s.onload = h(this.fire, this, "load"), s.onerror = h(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), i) {
          this._url = s.src;
          return;
        }
        s.src = this._url, s.alt = this.options.alt;
      }, _animateZoom: function(i) {
        var s = this._map.getZoomScale(i.zoom), d = this._map._latLngBoundsToNewLayerBounds(this._bounds, i.zoom, i.center).min;
        Kn(this._image, d, s);
      }, _reset: function() {
        var i = this._image, s = new W(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), d = s.getSize();
        Ve(i, s.min), i.style.width = d.x + "px", i.style.height = d.y + "px";
      }, _updateOpacity: function() {
        Pn(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var i = this.options.errorOverlayUrl;
        i && this._url !== i && (this._url = i, this._image.src = i);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), bo = function(i, s, d) {
        return new ki(i, s, d);
      }, Qa = ki.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
        var i = this._url.tagName === "VIDEO", s = this._image = i ? this._url : ue("video");
        if (Yt(s, "leaflet-image-layer"), this._zoomAnimated && Yt(s, "leaflet-zoom-animated"), this.options.className && Yt(s, this.options.className), s.onselectstart = S, s.onmousemove = S, s.onloadeddata = h(this.fire, this, "load"), i) {
          for (var d = s.getElementsByTagName("source"), y = [], x = 0; x < d.length; x++) y.push(d[x].src);
          this._url = d.length > 0 ? y : [s.src];
          return;
        }
        P(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(s.style, "objectFit") && (s.style.objectFit = "fill"), s.autoplay = !!this.options.autoplay, s.loop = !!this.options.loop, s.muted = !!this.options.muted, s.playsInline = !!this.options.playsInline;
        for (var k = 0; k < this._url.length; k++) {
          var H = ue("source");
          H.src = this._url[k], s.appendChild(H);
        }
      } });
      function Ku(i, s, d) {
        return new Qa(i, s, d);
      }
      var tr = ki.extend({ _initImage: function() {
        var i = this._image = this._url;
        Yt(i, "leaflet-image-layer"), this._zoomAnimated && Yt(i, "leaflet-zoom-animated"), this.options.className && Yt(i, this.options.className), i.onselectstart = S, i.onmousemove = S;
      } });
      function Qu(i, s, d) {
        return new tr(i, s, d);
      }
      var ci = si.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(i, s) {
        i && (i instanceof wt || P(i)) ? (this._latlng = _t(i), A(this, s)) : (A(this, i), this._source = s), this.options.content && (this._content = this.options.content);
      }, openOn: function(i) {
        return i = arguments.length ? i : this._source._map, i.hasLayer(this) || i.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(i) {
        return this._map ? this.close() : (arguments.length ? this._source = i : i = this._source, this._prepareOpen(), this.openOn(i._map)), this;
      }, onAdd: function(i) {
        this._zoomAnimated = i._zoomAnimated, this._container || this._initLayout(), i._fadeAnimated && Pn(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), i._fadeAnimated && Pn(this._container, 1), this.bringToFront(), this.options.interactive && (Yt(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(i) {
        i._fadeAnimated ? (Pn(this._container, 0), this._removeTimeout = setTimeout(h(ze, void 0, this._container), 200)) : ze(this._container), this.options.interactive && (Le(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(i) {
        return this._latlng = _t(i), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(i) {
        return this._content = i, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var i = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && Er(this._container), this;
      }, bringToBack: function() {
        return this._map && ro(this._container), this;
      }, _prepareOpen: function(i) {
        var s = this._source;
        if (!s._map) return false;
        if (s instanceof Zn) {
          s = null;
          var d = this._source._layers;
          for (var y in d) if (d[y]._map) {
            s = d[y];
            break;
          }
          if (!s) return false;
          this._source = s;
        }
        if (!i) if (s.getCenter) i = s.getCenter();
        else if (s.getLatLng) i = s.getLatLng();
        else if (s.getBounds) i = s.getBounds().getCenter();
        else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(i), this._map && this.update(), true;
      }, _updateContent: function() {
        if (this._content) {
          var i = this._contentNode, s = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof s == "string") i.innerHTML = s;
          else {
            for (; i.hasChildNodes(); ) i.removeChild(i.firstChild);
            i.appendChild(s);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        if (this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng), s = w(this.options.offset), d = this._getAnchor();
          this._zoomAnimated ? Ve(this._container, i.add(d)) : s = s.add(i).add(d);
          var y = this._containerBottom = -s.y, x = this._containerLeft = -Math.round(this._containerWidth / 2) + s.x;
          this._container.style.bottom = y + "px", this._container.style.left = x + "px";
        }
      }, _getAnchor: function() {
        return [0, 0];
      } });
      ne.include({ _initOverlay: function(i, s, d, y) {
        var x = s;
        return x instanceof i || (x = new i(y).setContent(s)), d && x.setLatLng(d), x;
      } }), si.include({ _initOverlay: function(i, s, d, y) {
        var x = d;
        return x instanceof i ? (A(x, y), x._source = this) : (x = s && !y ? s : new i(y, this), x.setContent(d)), x;
      } });
      var fa = ci.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(i) {
        return i = arguments.length ? i : this._source._map, !i.hasLayer(this) && i._popup && i._popup.options.autoClose && i.removeLayer(i._popup), i._popup = this, ci.prototype.openOn.call(this, i);
      }, onAdd: function(i) {
        ci.prototype.onAdd.call(this, i), i.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof Hi || this._source.on("preclick", Ii));
      }, onRemove: function(i) {
        ci.prototype.onRemove.call(this, i), i.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof Hi || this._source.off("preclick", Ii));
      }, getEvents: function() {
        var i = ci.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (i.preclick = this.close), this.options.keepInView && (i.moveend = this._adjustPan), i;
      }, _initLayout: function() {
        var i = "leaflet-popup", s = this._container = ue("div", i + " " + (this.options.className || "") + " leaflet-zoom-animated"), d = this._wrapper = ue("div", i + "-content-wrapper", s);
        if (this._contentNode = ue("div", i + "-content", d), fo(s), co(this._contentNode), $t(s, "contextmenu", Ii), this._tipContainer = ue("div", i + "-tip-container", s), this._tip = ue("div", i + "-tip", this._tipContainer), this.options.closeButton) {
          var y = this._closeButton = ue("a", i + "-close-button", s);
          y.setAttribute("role", "button"), y.setAttribute("aria-label", "Close popup"), y.href = "#close", y.innerHTML = '<span aria-hidden="true">&#215;</span>', $t(y, "click", function(x) {
            Ye(x), this.close();
          }, this);
        }
      }, _updateLayout: function() {
        var i = this._contentNode, s = i.style;
        s.width = "", s.whiteSpace = "nowrap";
        var d = i.offsetWidth;
        d = Math.min(d, this.options.maxWidth), d = Math.max(d, this.options.minWidth), s.width = d + 1 + "px", s.whiteSpace = "", s.height = "";
        var y = i.offsetHeight, x = this.options.maxHeight, k = "leaflet-popup-scrolled";
        x && y > x ? (s.height = x + "px", Yt(i, k)) : Le(i, k), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center), d = this._getAnchor();
        Ve(this._container, s.add(d));
      }, _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = false;
            return;
          }
          var i = this._map, s = parseInt(Tr(this._container, "marginBottom"), 10) || 0, d = this._container.offsetHeight + s, y = this._containerWidth, x = new ut(this._containerLeft, -d - this._containerBottom);
          x._add(Qi(this._container));
          var k = i.layerPointToContainerPoint(x), H = w(this.options.autoPanPadding), K = w(this.options.autoPanPaddingTopLeft || H), ot = w(this.options.autoPanPaddingBottomRight || H), xt = i.getSize(), Tt = 0, kt = 0;
          k.x + y + ot.x > xt.x && (Tt = k.x + y - xt.x + ot.x), k.x - Tt - K.x < 0 && (Tt = k.x - K.x), k.y + d + ot.y > xt.y && (kt = k.y + d - xt.y + ot.y), k.y - kt - K.y < 0 && (kt = k.y - K.y), (Tt || kt) && (this.options.keepInView && (this._autopanning = true), i.fire("autopanstart").panBy([Tt, kt]));
        }
      }, _getAnchor: function() {
        return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } }), md = function(i, s) {
        return new fa(i, s);
      };
      ne.mergeOptions({ closePopupOnClick: true }), ne.include({ openPopup: function(i, s, d) {
        return this._initOverlay(fa, i, s, d).openOn(this), this;
      }, closePopup: function(i) {
        return i = arguments.length ? i : this._popup, i && i.close(), this;
      } }), si.include({ bindPopup: function(i, s) {
        return this._popup = this._initOverlay(fa, this._popup, i, s), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(i) {
        return this._popup && (this instanceof Zn || (this._popup._source = this), this._popup._prepareOpen(i || this._latlng) && this._popup.openOn(this._map)), this;
      }, closePopup: function() {
        return this._popup && this._popup.close(), this;
      }, togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      }, isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : false;
      }, setPopupContent: function(i) {
        return this._popup && this._popup.setContent(i), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(i) {
        if (!(!this._popup || !this._map)) {
          Ei(i);
          var s = i.layer || i.target;
          if (this._popup._source === s && !(s instanceof Hi)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(i.latlng);
            return;
          }
          this._popup._source = s, this.openPopup(i.latlng);
        }
      }, _movePopup: function(i) {
        this._popup.setLatLng(i.latlng);
      }, _onKeyPress: function(i) {
        i.originalEvent.keyCode === 13 && this._openPopup(i);
      } });
      var Wa = ci.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(i) {
        ci.prototype.onAdd.call(this, i), this.setOpacity(this.options.opacity), i.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
      }, onRemove: function(i) {
        ci.prototype.onRemove.call(this, i), i.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
      }, getEvents: function() {
        var i = ci.prototype.getEvents.call(this);
        return this.options.permanent || (i.preclick = this.close), i;
      }, _initLayout: function() {
        var i = "leaflet-tooltip", s = i + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = ue("div", s), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + _(this));
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(i) {
        var s, d, y = this._map, x = this._container, k = y.latLngToContainerPoint(y.getCenter()), H = y.layerPointToContainerPoint(i), K = this.options.direction, ot = x.offsetWidth, xt = x.offsetHeight, Tt = w(this.options.offset), kt = this._getAnchor();
        K === "top" ? (s = ot / 2, d = xt) : K === "bottom" ? (s = ot / 2, d = 0) : K === "center" ? (s = ot / 2, d = xt / 2) : K === "right" ? (s = 0, d = xt / 2) : K === "left" ? (s = ot, d = xt / 2) : H.x < k.x ? (K = "right", s = 0, d = xt / 2) : (K = "left", s = ot + (Tt.x + kt.x) * 2, d = xt / 2), i = i.subtract(w(s, d, true)).add(Tt).add(kt), Le(x, "leaflet-tooltip-right"), Le(x, "leaflet-tooltip-left"), Le(x, "leaflet-tooltip-top"), Le(x, "leaflet-tooltip-bottom"), Yt(x, "leaflet-tooltip-" + K), Ve(x, i);
      }, _updatePosition: function() {
        var i = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(i);
      }, setOpacity: function(i) {
        this.options.opacity = i, this._container && Pn(this._container, i);
      }, _animateZoom: function(i) {
        var s = this._map._latLngToNewLayerPoint(this._latlng, i.zoom, i.center);
        this._setPosition(s);
      }, _getAnchor: function() {
        return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } }), gd = function(i, s) {
        return new Wa(i, s);
      };
      ne.include({ openTooltip: function(i, s, d) {
        return this._initOverlay(Wa, i, s, d).openOn(this), this;
      }, closeTooltip: function(i) {
        return i.close(), this;
      } }), si.include({ bindTooltip: function(i, s) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Wa, this._tooltip, i, s), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(i) {
        if (!(!i && this._tooltipHandlersAdded)) {
          var s = i ? "off" : "on", d = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent ? d.add = this._openTooltip : (d.mouseover = this._openTooltip, d.mouseout = this.closeTooltip, d.click = this._openTooltip, this._map ? this._addFocusListeners() : d.add = this._addFocusListeners), this._tooltip.options.sticky && (d.mousemove = this._moveTooltip), this[s](d), this._tooltipHandlersAdded = !i;
        }
      }, openTooltip: function(i) {
        return this._tooltip && (this instanceof Zn || (this._tooltip._source = this), this._tooltip._prepareOpen(i) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      }, closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      }, toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(i) {
        return this._tooltip && this._tooltip.setContent(i), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      }, _addFocusListenersOnLayer: function(i) {
        var s = typeof i.getElement == "function" && i.getElement();
        s && ($t(s, "focus", function() {
          this._tooltip._source = i, this.openTooltip();
        }, this), $t(s, "blur", this.closeTooltip, this));
      }, _setAriaDescribedByOnLayer: function(i) {
        var s = typeof i.getElement == "function" && i.getElement();
        s && s.setAttribute("aria-describedby", this._tooltip._container.id);
      }, _openTooltip: function(i) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = true;
            var s = this;
            this._map.once("moveend", function() {
              s._openOnceFlag = false, s._openTooltip(i);
            });
            return;
          }
          this._tooltip._source = i.layer || i.target, this.openTooltip(this._tooltip.options.sticky ? i.latlng : void 0);
        }
      }, _moveTooltip: function(i) {
        var s = i.latlng, d, y;
        this._tooltip.options.sticky && i.originalEvent && (d = this._map.mouseEventToContainerPoint(i.originalEvent), y = this._map.containerPointToLayerPoint(d), s = this._map.layerPointToLatLng(y)), this._tooltip.setLatLng(s);
      } });
      var as = mo.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(i) {
        var s = i && i.tagName === "DIV" ? i : document.createElement("div"), d = this.options;
        if (d.html instanceof Element ? (wn(s), s.appendChild(d.html)) : s.innerHTML = d.html !== false ? d.html : "", d.bgPos) {
          var y = w(d.bgPos);
          s.style.backgroundPosition = -y.x + "px " + -y.y + "px";
        }
        return this._setIconStyles(s, "icon"), s;
      }, createShadow: function() {
        return null;
      } });
      function Wu(i) {
        return new as(i);
      }
      mo.Default = go;
      var Br = si.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: zt.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(i) {
        A(this, i);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(i) {
        i._addZoomLimit(this);
      }, onRemove: function(i) {
        this._removeAllTiles(), ze(this._container), i._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (Er(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (ro(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(i) {
        return this.options.opacity = i, this._updateOpacity(), this;
      }, setZIndex: function(i) {
        return this.options.zIndex = i, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var i = this._clampZoom(this._map.getZoom());
          i !== this._tileZoom && (this._tileZoom = i, this._updateLevels()), this._update();
        }
        return this;
      }, getEvents: function() {
        var i = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = v(this._onMoveEnd, this.options.updateInterval, this)), i.move = this._onMove), this._zoomAnimated && (i.zoomanim = this._animateZoom), i;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var i = this.options.tileSize;
        return i instanceof ut ? i : new ut(i, i);
      }, _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(i) {
        for (var s = this.getPane().children, d = -i(-1 / 0, 1 / 0), y = 0, x = s.length, k; y < x; y++) k = s[y].style.zIndex, s[y] !== this._container && k && (d = i(d, +k));
        isFinite(d) && (this.options.zIndex = d + i(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !zt.ielt9) {
          Pn(this._container, this.options.opacity);
          var i = +/* @__PURE__ */ new Date(), s = false, d = false;
          for (var y in this._tiles) {
            var x = this._tiles[y];
            if (!(!x.current || !x.loaded)) {
              var k = Math.min(1, (i - x.loaded) / 200);
              Pn(x.el, k), k < 1 ? s = true : (x.active ? d = true : this._onOpaqueTile(x), x.active = true);
            }
          }
          d && !this._noPrune && this._pruneTiles(), s && (X(this._fadeFrame), this._fadeFrame = q(this._updateOpacity, this));
        }
      }, _onOpaqueTile: S, _initContainer: function() {
        this._container || (this._container = ue("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var i = this._tileZoom, s = this.options.maxZoom;
        if (i !== void 0) {
          for (var d in this._levels) d = Number(d), this._levels[d].el.children.length || d === i ? (this._levels[d].el.style.zIndex = s - Math.abs(i - d), this._onUpdateLevel(d)) : (ze(this._levels[d].el), this._removeTilesAtZoom(d), this._onRemoveLevel(d), delete this._levels[d]);
          var y = this._levels[i], x = this._map;
          return y || (y = this._levels[i] = {}, y.el = ue("div", "leaflet-tile-container leaflet-zoom-animated", this._container), y.el.style.zIndex = s, y.origin = x.project(x.unproject(x.getPixelOrigin()), i).round(), y.zoom = i, this._setZoomTransform(y, x.getCenter(), x.getZoom()), S(y.el.offsetWidth), this._onCreateLevel(y)), this._level = y, y;
        }
      }, _onUpdateLevel: S, _onRemoveLevel: S, _onCreateLevel: S, _pruneTiles: function() {
        if (this._map) {
          var i, s, d = this._map.getZoom();
          if (d > this.options.maxZoom || d < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (i in this._tiles) s = this._tiles[i], s.retain = s.current;
          for (i in this._tiles) if (s = this._tiles[i], s.current && !s.active) {
            var y = s.coords;
            this._retainParent(y.x, y.y, y.z, y.z - 5) || this._retainChildren(y.x, y.y, y.z, y.z + 2);
          }
          for (i in this._tiles) this._tiles[i].retain || this._removeTile(i);
        }
      }, _removeTilesAtZoom: function(i) {
        for (var s in this._tiles) this._tiles[s].coords.z === i && this._removeTile(s);
      }, _removeAllTiles: function() {
        for (var i in this._tiles) this._removeTile(i);
      }, _invalidateAll: function() {
        for (var i in this._levels) ze(this._levels[i].el), this._onRemoveLevel(Number(i)), delete this._levels[i];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(i, s, d, y) {
        var x = Math.floor(i / 2), k = Math.floor(s / 2), H = d - 1, K = new ut(+x, +k);
        K.z = +H;
        var ot = this._tileCoordsToKey(K), xt = this._tiles[ot];
        return xt && xt.active ? (xt.retain = true, true) : (xt && xt.loaded && (xt.retain = true), H > y ? this._retainParent(x, k, H, y) : false);
      }, _retainChildren: function(i, s, d, y) {
        for (var x = 2 * i; x < 2 * i + 2; x++) for (var k = 2 * s; k < 2 * s + 2; k++) {
          var H = new ut(x, k);
          H.z = d + 1;
          var K = this._tileCoordsToKey(H), ot = this._tiles[K];
          if (ot && ot.active) {
            ot.retain = true;
            continue;
          } else ot && ot.loaded && (ot.retain = true);
          d + 1 < y && this._retainChildren(x, k, d + 1, y);
        }
      }, _resetView: function(i) {
        var s = i && (i.pinch || i.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), s, s);
      }, _animateZoom: function(i) {
        this._setView(i.center, i.zoom, true, i.noUpdate);
      }, _clampZoom: function(i) {
        var s = this.options;
        return s.minNativeZoom !== void 0 && i < s.minNativeZoom ? s.minNativeZoom : s.maxNativeZoom !== void 0 && s.maxNativeZoom < i ? s.maxNativeZoom : i;
      }, _setView: function(i, s, d, y) {
        var x = Math.round(s);
        this.options.maxZoom !== void 0 && x > this.options.maxZoom || this.options.minZoom !== void 0 && x < this.options.minZoom ? x = void 0 : x = this._clampZoom(x);
        var k = this.options.updateWhenZooming && x !== this._tileZoom;
        (!y || k) && (this._tileZoom = x, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), x !== void 0 && this._update(i), d || this._pruneTiles(), this._noPrune = !!d), this._setZoomTransforms(i, s);
      }, _setZoomTransforms: function(i, s) {
        for (var d in this._levels) this._setZoomTransform(this._levels[d], i, s);
      }, _setZoomTransform: function(i, s, d) {
        var y = this._map.getZoomScale(d, i.zoom), x = i.origin.multiplyBy(y).subtract(this._map._getNewPixelOrigin(s, d)).round();
        zt.any3d ? Kn(i.el, x, y) : Ve(i.el, x);
      }, _resetGrid: function() {
        var i = this._map, s = i.options.crs, d = this._tileSize = this.getTileSize(), y = this._tileZoom, x = this._map.getPixelWorldBounds(this._tileZoom);
        x && (this._globalTileRange = this._pxBoundsToTileRange(x)), this._wrapX = s.wrapLng && !this.options.noWrap && [Math.floor(i.project([0, s.wrapLng[0]], y).x / d.x), Math.ceil(i.project([0, s.wrapLng[1]], y).x / d.y)], this._wrapY = s.wrapLat && !this.options.noWrap && [Math.floor(i.project([s.wrapLat[0], 0], y).y / d.x), Math.ceil(i.project([s.wrapLat[1], 0], y).y / d.y)];
      }, _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      }, _getTiledPixelBounds: function(i) {
        var s = this._map, d = s._animatingZoom ? Math.max(s._animateToZoom, s.getZoom()) : s.getZoom(), y = s.getZoomScale(d, this._tileZoom), x = s.project(i, this._tileZoom).floor(), k = s.getSize().divideBy(y * 2);
        return new W(x.subtract(k), x.add(k));
      }, _update: function(i) {
        var s = this._map;
        if (s) {
          var d = this._clampZoom(s.getZoom());
          if (i === void 0 && (i = s.getCenter()), this._tileZoom !== void 0) {
            var y = this._getTiledPixelBounds(i), x = this._pxBoundsToTileRange(y), k = x.getCenter(), H = [], K = this.options.keepBuffer, ot = new W(x.getBottomLeft().subtract([K, -K]), x.getTopRight().add([K, -K]));
            if (!(isFinite(x.min.x) && isFinite(x.min.y) && isFinite(x.max.x) && isFinite(x.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var xt in this._tiles) {
              var Tt = this._tiles[xt].coords;
              (Tt.z !== this._tileZoom || !ot.contains(new ut(Tt.x, Tt.y))) && (this._tiles[xt].current = false);
            }
            if (Math.abs(d - this._tileZoom) > 1) {
              this._setView(i, d);
              return;
            }
            for (var kt = x.min.y; kt <= x.max.y; kt++) for (var Rt = x.min.x; Rt <= x.max.x; Rt++) {
              var Ut = new ut(Rt, kt);
              if (Ut.z = this._tileZoom, !!this._isValidTile(Ut)) {
                var Pe = this._tiles[this._tileCoordsToKey(Ut)];
                Pe ? Pe.current = true : H.push(Ut);
              }
            }
            if (H.sort(function(vn, Qn) {
              return vn.distanceTo(k) - Qn.distanceTo(k);
            }), H.length !== 0) {
              this._loading || (this._loading = true, this.fire("loading"));
              var Fe = document.createDocumentFragment();
              for (Rt = 0; Rt < H.length; Rt++) this._addTile(H[Rt], Fe);
              this._level.el.appendChild(Fe);
            }
          }
        }
      }, _isValidTile: function(i) {
        var s = this._map.options.crs;
        if (!s.infinite) {
          var d = this._globalTileRange;
          if (!s.wrapLng && (i.x < d.min.x || i.x > d.max.x) || !s.wrapLat && (i.y < d.min.y || i.y > d.max.y)) return false;
        }
        if (!this.options.bounds) return true;
        var y = this._tileCoordsToBounds(i);
        return bt(this.options.bounds).overlaps(y);
      }, _keyToBounds: function(i) {
        return this._tileCoordsToBounds(this._keyToTileCoords(i));
      }, _tileCoordsToNwSe: function(i) {
        var s = this._map, d = this.getTileSize(), y = i.scaleBy(d), x = y.add(d), k = s.unproject(y, i.z), H = s.unproject(x, i.z);
        return [k, H];
      }, _tileCoordsToBounds: function(i) {
        var s = this._tileCoordsToNwSe(i), d = new R(s[0], s[1]);
        return this.options.noWrap || (d = this._map.wrapLatLngBounds(d)), d;
      }, _tileCoordsToKey: function(i) {
        return i.x + ":" + i.y + ":" + i.z;
      }, _keyToTileCoords: function(i) {
        var s = i.split(":"), d = new ut(+s[0], +s[1]);
        return d.z = +s[2], d;
      }, _removeTile: function(i) {
        var s = this._tiles[i];
        s && (ze(s.el), delete this._tiles[i], this.fire("tileunload", { tile: s.el, coords: this._keyToTileCoords(i) }));
      }, _initTile: function(i) {
        Yt(i, "leaflet-tile");
        var s = this.getTileSize();
        i.style.width = s.x + "px", i.style.height = s.y + "px", i.onselectstart = S, i.onmousemove = S, zt.ielt9 && this.options.opacity < 1 && Pn(i, this.options.opacity);
      }, _addTile: function(i, s) {
        var d = this._getTilePos(i), y = this._tileCoordsToKey(i), x = this.createTile(this._wrapCoords(i), h(this._tileReady, this, i));
        this._initTile(x), this.createTile.length < 2 && q(h(this._tileReady, this, i, null, x)), Ve(x, d), this._tiles[y] = { el: x, coords: i, current: true }, s.appendChild(x), this.fire("tileloadstart", { tile: x, coords: i });
      }, _tileReady: function(i, s, d) {
        s && this.fire("tileerror", { error: s, tile: d, coords: i });
        var y = this._tileCoordsToKey(i);
        d = this._tiles[y], d && (d.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Pn(d.el, 0), X(this._fadeFrame), this._fadeFrame = q(this._updateOpacity, this)) : (d.active = true, this._pruneTiles()), s || (Yt(d.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: d.el, coords: i })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), zt.ielt9 || !this._map._fadeAnimated ? q(this._pruneTiles, this) : setTimeout(h(this._pruneTiles, this), 250)));
      }, _getTilePos: function(i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(i) {
        var s = new ut(this._wrapX ? b(i.x, this._wrapX) : i.x, this._wrapY ? b(i.y, this._wrapY) : i.y);
        return s.z = i.z, s;
      }, _pxBoundsToTileRange: function(i) {
        var s = this.getTileSize();
        return new W(i.min.unscaleBy(s).floor(), i.max.unscaleBy(s).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return false;
        return true;
      } });
      function fi(i) {
        return new Br(i);
      }
      var Dr = Br.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(i, s) {
        this._url = i, s = A(this, s), s.detectRetina && zt.retina && s.maxZoom > 0 ? (s.tileSize = Math.floor(s.tileSize / 2), s.zoomReverse ? (s.zoomOffset--, s.minZoom = Math.min(s.maxZoom, s.minZoom + 1)) : (s.zoomOffset++, s.maxZoom = Math.max(s.minZoom, s.maxZoom - 1)), s.minZoom = Math.max(0, s.minZoom)) : s.zoomReverse ? s.minZoom = Math.min(s.maxZoom, s.minZoom) : s.maxZoom = Math.max(s.minZoom, s.maxZoom), typeof s.subdomains == "string" && (s.subdomains = s.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      }, setUrl: function(i, s) {
        return this._url === i && s === void 0 && (s = true), this._url = i, s || this.redraw(), this;
      }, createTile: function(i, s) {
        var d = document.createElement("img");
        return $t(d, "load", h(this._tileOnLoad, this, s, d)), $t(d, "error", h(this._tileOnError, this, s, d)), (this.options.crossOrigin || this.options.crossOrigin === "") && (d.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (d.referrerPolicy = this.options.referrerPolicy), d.alt = "", d.src = this.getTileUrl(i), d;
      }, getTileUrl: function(i) {
        var s = { r: zt.retina ? "@2x" : "", s: this._getSubdomain(i), x: i.x, y: i.y, z: this._getZoomForUrl() };
        if (this._map && !this._map.options.crs.infinite) {
          var d = this._globalTileRange.max.y - i.y;
          this.options.tms && (s.y = d), s["-y"] = d;
        }
        return G(this._url, c(s, this.options));
      }, _tileOnLoad: function(i, s) {
        zt.ielt9 ? setTimeout(h(i, this, null, s), 0) : i(null, s);
      }, _tileOnError: function(i, s, d) {
        var y = this.options.errorTileUrl;
        y && s.getAttribute("src") !== y && (s.src = y), i(d, s);
      }, _onTileRemove: function(i) {
        i.tile.onload = null;
      }, _getZoomForUrl: function() {
        var i = this._tileZoom, s = this.options.maxZoom, d = this.options.zoomReverse, y = this.options.zoomOffset;
        return d && (i = s - i), i + y;
      }, _getSubdomain: function(i) {
        var s = Math.abs(i.x + i.y) % this.options.subdomains.length;
        return this.options.subdomains[s];
      }, _abortLoading: function() {
        var i, s;
        for (i in this._tiles) if (this._tiles[i].coords.z !== this._tileZoom && (s = this._tiles[i].el, s.onload = S, s.onerror = S, !s.complete)) {
          s.src = D;
          var d = this._tiles[i].coords;
          ze(s), delete this._tiles[i], this.fire("tileabort", { tile: s, coords: d });
        }
      }, _removeTile: function(i) {
        var s = this._tiles[i];
        if (s) return s.el.setAttribute("src", D), Br.prototype._removeTile.call(this, i);
      }, _tileReady: function(i, s, d) {
        if (!(!this._map || d && d.getAttribute("src") === D)) return Br.prototype._tileReady.call(this, i, s, d);
      } });
      function Vn(i, s) {
        return new Dr(i, s);
      }
      var Fn = Dr.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(i, s) {
        this._url = i;
        var d = c({}, this.defaultWmsParams);
        for (var y in s) y in this.options || (d[y] = s[y]);
        s = A(this, s);
        var x = s.detectRetina && zt.retina ? 2 : 1, k = this.getTileSize();
        d.width = k.x * x, d.height = k.y * x, this.wmsParams = d;
      }, onAdd: function(i) {
        this._crs = this.options.crs || i.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var s = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[s] = this._crs.code, Dr.prototype.onAdd.call(this, i);
      }, getTileUrl: function(i) {
        var s = this._tileCoordsToNwSe(i), d = this._crs, y = pt(d.project(s[0]), d.project(s[1])), x = y.min, k = y.max, H = (this._wmsVersion >= 1.3 && this._crs === Fu ? [x.y, x.x, k.y, k.x] : [x.x, x.y, k.x, k.y]).join(","), K = Dr.prototype.getTileUrl.call(this, i);
        return K + $(this.wmsParams, K, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + H;
      }, setParams: function(i, s) {
        return c(this.wmsParams, i), s || this.redraw(), this;
      } });
      function xo(i, s) {
        return new Fn(i, s);
      }
      Dr.WMS = Fn, Vn.wms = xo;
      var di = si.extend({ options: { padding: 0.1 }, initialize: function(i) {
        A(this, i), _(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), Yt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var i = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
        return this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i;
      }, _onAnimZoom: function(i) {
        this._updateTransform(i.center, i.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(i, s) {
        var d = this._map.getZoomScale(s, this._zoom), y = this._map.getSize().multiplyBy(0.5 + this.options.padding), x = this._map.project(this._center, s), k = y.multiplyBy(-d).add(x).subtract(this._map._getNewPixelOrigin(i, s));
        zt.any3d ? Kn(this._container, k, d) : Ve(this._container, k);
      }, _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var i in this._layers) this._layers[i]._reset();
      }, _onZoomEnd: function() {
        for (var i in this._layers) this._layers[i]._project();
      }, _updatePaths: function() {
        for (var i in this._layers) this._layers[i]._update();
      }, _update: function() {
        var i = this.options.padding, s = this._map.getSize(), d = this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();
        this._bounds = new W(d, d.add(s.multiplyBy(1 + i * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), da = di.extend({ options: { tolerance: 0 }, getEvents: function() {
        var i = di.prototype.getEvents.call(this);
        return i.viewprereset = this._onViewPreReset, i;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        di.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var i = this._container = document.createElement("canvas");
        $t(i, "mousemove", this._onMouseMove, this), $t(i, "click dblclick mousedown mouseup contextmenu", this._onClick, this), $t(i, "mouseout", this._handleMouseOut, this), i._leaflet_disable_events = true, this._ctx = i.getContext("2d");
      }, _destroyContainer: function() {
        X(this._redrawRequest), delete this._ctx, ze(this._container), he(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var i;
          this._redrawBounds = null;
          for (var s in this._layers) i = this._layers[s], i._update();
          this._redraw();
        }
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          di.prototype._update.call(this);
          var i = this._bounds, s = this._container, d = i.getSize(), y = zt.retina ? 2 : 1;
          Ve(s, i.min), s.width = y * d.x, s.height = y * d.y, s.style.width = d.x + "px", s.style.height = d.y + "px", zt.retina && this._ctx.scale(2, 2), this._ctx.translate(-i.min.x, -i.min.y), this.fire("update");
        }
      }, _reset: function() {
        di.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
      }, _initPath: function(i) {
        this._updateDashArray(i), this._layers[_(i)] = i;
        var s = i._order = { layer: i, prev: this._drawLast, next: null };
        this._drawLast && (this._drawLast.next = s), this._drawLast = s, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(i) {
        this._requestRedraw(i);
      }, _removePath: function(i) {
        var s = i._order, d = s.next, y = s.prev;
        d ? d.prev = y : this._drawLast = y, y ? y.next = d : this._drawFirst = d, delete i._order, delete this._layers[_(i)], this._requestRedraw(i);
      }, _updatePath: function(i) {
        this._extendRedrawBounds(i), i._project(), i._update(), this._requestRedraw(i);
      }, _updateStyle: function(i) {
        this._updateDashArray(i), this._requestRedraw(i);
      }, _updateDashArray: function(i) {
        if (typeof i.options.dashArray == "string") {
          var s = i.options.dashArray.split(/[, ]+/), d = [], y, x;
          for (x = 0; x < s.length; x++) {
            if (y = Number(s[x]), isNaN(y)) return;
            d.push(y);
          }
          i.options._dashArray = d;
        } else i.options._dashArray = i.options.dashArray;
      }, _requestRedraw: function(i) {
        this._map && (this._extendRedrawBounds(i), this._redrawRequest = this._redrawRequest || q(this._redraw, this));
      }, _extendRedrawBounds: function(i) {
        if (i._pxBounds) {
          var s = (i.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new W(), this._redrawBounds.extend(i._pxBounds.min.subtract([s, s])), this._redrawBounds.extend(i._pxBounds.max.add([s, s]));
        }
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var i = this._redrawBounds;
        if (i) {
          var s = i.getSize();
          this._ctx.clearRect(i.min.x, i.min.y, s.x, s.y);
        } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      }, _draw: function() {
        var i, s = this._redrawBounds;
        if (this._ctx.save(), s) {
          var d = s.getSize();
          this._ctx.beginPath(), this._ctx.rect(s.min.x, s.min.y, d.x, d.y), this._ctx.clip();
        }
        this._drawing = true;
        for (var y = this._drawFirst; y; y = y.next) i = y.layer, (!s || i._pxBounds && i._pxBounds.intersects(s)) && i._updatePath();
        this._drawing = false, this._ctx.restore();
      }, _updatePoly: function(i, s) {
        if (this._drawing) {
          var d, y, x, k, H = i._parts, K = H.length, ot = this._ctx;
          if (K) {
            for (ot.beginPath(), d = 0; d < K; d++) {
              for (y = 0, x = H[d].length; y < x; y++) k = H[d][y], ot[y ? "lineTo" : "moveTo"](k.x, k.y);
              s && ot.closePath();
            }
            this._fillStroke(ot, i);
          }
        }
      }, _updateCircle: function(i) {
        if (!(!this._drawing || i._empty())) {
          var s = i._point, d = this._ctx, y = Math.max(Math.round(i._radius), 1), x = (Math.max(Math.round(i._radiusY), 1) || y) / y;
          x !== 1 && (d.save(), d.scale(1, x)), d.beginPath(), d.arc(s.x, s.y / x, y, 0, Math.PI * 2, false), x !== 1 && d.restore(), this._fillStroke(d, i);
        }
      }, _fillStroke: function(i, s) {
        var d = s.options;
        d.fill && (i.globalAlpha = d.fillOpacity, i.fillStyle = d.fillColor || d.color, i.fill(d.fillRule || "evenodd")), d.stroke && d.weight !== 0 && (i.setLineDash && i.setLineDash(s.options && s.options._dashArray || []), i.globalAlpha = d.opacity, i.lineWidth = d.weight, i.strokeStyle = d.color, i.lineCap = d.lineCap, i.lineJoin = d.lineJoin, i.stroke());
      }, _onClick: function(i) {
        for (var s = this._map.mouseEventToLayerPoint(i), d, y, x = this._drawFirst; x; x = x.next) d = x.layer, d.options.interactive && d._containsPoint(s) && (!(i.type === "click" || i.type === "preclick") || !this._map._draggableMoved(d)) && (y = d);
        this._fireEvent(y ? [y] : false, i);
      }, _onMouseMove: function(i) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var s = this._map.mouseEventToLayerPoint(i);
          this._handleMouseHover(i, s);
        }
      }, _handleMouseOut: function(i) {
        var s = this._hoveredLayer;
        s && (Le(this._container, "leaflet-interactive"), this._fireEvent([s], i, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
      }, _handleMouseHover: function(i, s) {
        if (!this._mouseHoverThrottled) {
          for (var d, y, x = this._drawFirst; x; x = x.next) d = x.layer, d.options.interactive && d._containsPoint(s) && (y = d);
          y !== this._hoveredLayer && (this._handleMouseOut(i), y && (Yt(this._container, "leaflet-interactive"), this._fireEvent([y], i, "mouseover"), this._hoveredLayer = y)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, i), this._mouseHoverThrottled = true, setTimeout(h(function() {
            this._mouseHoverThrottled = false;
          }, this), 32);
        }
      }, _fireEvent: function(i, s, d) {
        this._map._fireDOMEvent(s, d || s.type, i);
      }, _bringToFront: function(i) {
        var s = i._order;
        if (s) {
          var d = s.next, y = s.prev;
          if (d) d.prev = y;
          else return;
          y ? y.next = d : d && (this._drawFirst = d), s.prev = this._drawLast, this._drawLast.next = s, s.next = null, this._drawLast = s, this._requestRedraw(i);
        }
      }, _bringToBack: function(i) {
        var s = i._order;
        if (s) {
          var d = s.next, y = s.prev;
          if (y) y.next = d;
          else return;
          d ? d.prev = y : y && (this._drawLast = y), s.prev = null, s.next = this._drawFirst, this._drawFirst.prev = s, this._drawFirst = s, this._requestRedraw(i);
        }
      } });
      function ha(i) {
        return zt.canvas ? new da(i) : null;
      }
      var Nr = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(i) {
            return document.createElement("<lvml:" + i + ' class="lvml">');
          };
        } catch {
        }
        return function(i) {
          return document.createElement("<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), So = { _initContainer: function() {
        this._container = ue("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (di.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(i) {
        var s = i._container = Nr("shape");
        Yt(s, "leaflet-vml-shape " + (this.options.className || "")), s.coordsize = "1 1", i._path = Nr("path"), s.appendChild(i._path), this._updateStyle(i), this._layers[_(i)] = i;
      }, _addPath: function(i) {
        var s = i._container;
        this._container.appendChild(s), i.options.interactive && i.addInteractiveTarget(s);
      }, _removePath: function(i) {
        var s = i._container;
        ze(s), i.removeInteractiveTarget(s), delete this._layers[_(i)];
      }, _updateStyle: function(i) {
        var s = i._stroke, d = i._fill, y = i.options, x = i._container;
        x.stroked = !!y.stroke, x.filled = !!y.fill, y.stroke ? (s || (s = i._stroke = Nr("stroke")), x.appendChild(s), s.weight = y.weight + "px", s.color = y.color, s.opacity = y.opacity, y.dashArray ? s.dashStyle = P(y.dashArray) ? y.dashArray.join(" ") : y.dashArray.replace(/( *, *)/g, " ") : s.dashStyle = "", s.endcap = y.lineCap.replace("butt", "flat"), s.joinstyle = y.lineJoin) : s && (x.removeChild(s), i._stroke = null), y.fill ? (d || (d = i._fill = Nr("fill")), x.appendChild(d), d.color = y.fillColor || y.color, d.opacity = y.fillOpacity) : d && (x.removeChild(d), i._fill = null);
      }, _updateCircle: function(i) {
        var s = i._point.round(), d = Math.round(i._radius), y = Math.round(i._radiusY || d);
        this._setPath(i, i._empty() ? "M0 0" : "AL " + s.x + "," + s.y + " " + d + "," + y + " 0," + 65535 * 360);
      }, _setPath: function(i, s) {
        i._path.v = s;
      }, _bringToFront: function(i) {
        Er(i._container);
      }, _bringToBack: function(i) {
        ro(i._container);
      } }, pa = zt.vml ? Nr : fe, er = di.extend({ _initContainer: function() {
        this._container = pa("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = pa("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        ze(this._container), he(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          di.prototype._update.call(this);
          var i = this._bounds, s = i.getSize(), d = this._container;
          (!this._svgSize || !this._svgSize.equals(s)) && (this._svgSize = s, d.setAttribute("width", s.x), d.setAttribute("height", s.y)), Ve(d, i.min), d.setAttribute("viewBox", [i.min.x, i.min.y, s.x, s.y].join(" ")), this.fire("update");
        }
      }, _initPath: function(i) {
        var s = i._path = pa("path");
        i.options.className && Yt(s, i.options.className), i.options.interactive && Yt(s, "leaflet-interactive"), this._updateStyle(i), this._layers[_(i)] = i;
      }, _addPath: function(i) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(i._path), i.addInteractiveTarget(i._path);
      }, _removePath: function(i) {
        ze(i._path), i.removeInteractiveTarget(i._path), delete this._layers[_(i)];
      }, _updatePath: function(i) {
        i._project(), i._update();
      }, _updateStyle: function(i) {
        var s = i._path, d = i.options;
        s && (d.stroke ? (s.setAttribute("stroke", d.color), s.setAttribute("stroke-opacity", d.opacity), s.setAttribute("stroke-width", d.weight), s.setAttribute("stroke-linecap", d.lineCap), s.setAttribute("stroke-linejoin", d.lineJoin), d.dashArray ? s.setAttribute("stroke-dasharray", d.dashArray) : s.removeAttribute("stroke-dasharray"), d.dashOffset ? s.setAttribute("stroke-dashoffset", d.dashOffset) : s.removeAttribute("stroke-dashoffset")) : s.setAttribute("stroke", "none"), d.fill ? (s.setAttribute("fill", d.fillColor || d.color), s.setAttribute("fill-opacity", d.fillOpacity), s.setAttribute("fill-rule", d.fillRule || "evenodd")) : s.setAttribute("fill", "none"));
      }, _updatePoly: function(i, s) {
        this._setPath(i, We(i._parts, s));
      }, _updateCircle: function(i) {
        var s = i._point, d = Math.max(Math.round(i._radius), 1), y = Math.max(Math.round(i._radiusY), 1) || d, x = "a" + d + "," + y + " 0 1,0 ", k = i._empty() ? "M0 0" : "M" + (s.x - d) + "," + s.y + x + d * 2 + ",0 " + x + -d * 2 + ",0 ";
        this._setPath(i, k);
      }, _setPath: function(i, s) {
        i._path.setAttribute("d", s);
      }, _bringToFront: function(i) {
        Er(i._path);
      }, _bringToBack: function(i) {
        ro(i._path);
      } });
      zt.vml && er.include(So);
      function Ir(i) {
        return zt.svg || zt.vml ? new er(i) : null;
      }
      ne.include({ getRenderer: function(i) {
        var s = i.options.renderer || this._getPaneRenderer(i.options.pane) || this.options.renderer || this._renderer;
        return s || (s = this._renderer = this._createRenderer()), this.hasLayer(s) || this.addLayer(s), s;
      }, _getPaneRenderer: function(i) {
        if (i === "overlayPane" || i === void 0) return false;
        var s = this._paneRenderers[i];
        return s === void 0 && (s = this._createRenderer({ pane: i }), this._paneRenderers[i] = s), s;
      }, _createRenderer: function(i) {
        return this.options.preferCanvas && ha(i) || Ir(i);
      } });
      var Ju = vo.extend({ initialize: function(i, s) {
        vo.prototype.initialize.call(this, this._boundsToLatLngs(i), s);
      }, setBounds: function(i) {
        return this.setLatLngs(this._boundsToLatLngs(i));
      }, _boundsToLatLngs: function(i) {
        return i = bt(i), [i.getSouthWest(), i.getNorthWest(), i.getNorthEast(), i.getSouthEast()];
      } });
      function Gn(i, s) {
        return new Ju(i, s);
      }
      er.create = pa, er.pointsToPath = We, qn.geometryToLayer = sa, qn.coordsToLatLng = Ya, qn.coordsToLatLngs = ua, qn.latLngToCoords = ca, qn.latLngsToCoords = Xa, qn.getFeature = ui, qn.asFeature = _o, ne.mergeOptions({ boxZoom: true });
      var Ja = li.extend({ initialize: function(i) {
        this._map = i, this._container = i._container, this._pane = i._panes.overlayPane, this._resetStateTimeout = 0, i.on("unload", this._destroy, this);
      }, addHooks: function() {
        $t(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        he(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        ze(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(i) {
        if (!i.shiftKey || i.which !== 1 && i.button !== 1) return false;
        this._clearDeferredResetState(), this._resetState(), wi(), ea(), this._startPoint = this._map.mouseEventToContainerPoint(i), $t(document, { contextmenu: Ei, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(i) {
        this._moved || (this._moved = true, this._box = ue("div", "leaflet-zoom-box", this._container), Yt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(i);
        var s = new W(this._point, this._startPoint), d = s.getSize();
        Ve(this._box, s.min), this._box.style.width = d.x + "px", this._box.style.height = d.y + "px";
      }, _finish: function() {
        this._moved && (ze(this._box), Le(this._container, "leaflet-crosshair")), ta(), Gl(), he(document, { contextmenu: Ei, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(i) {
        if (!(i.which !== 1 && i.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(h(this._resetState, this), 0);
          var s = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(s).fire("boxzoomend", { boxZoomBounds: s });
        }
      }, _onKeyDown: function(i) {
        i.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } });
      ne.addInitHook("addHandler", "boxZoom", Ja), ne.mergeOptions({ doubleClickZoom: true });
      var Mi = li.extend({ addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(i) {
        var s = this._map, d = s.getZoom(), y = s.options.zoomDelta, x = i.originalEvent.shiftKey ? d - y : d + y;
        s.options.doubleClickZoom === "center" ? s.setZoom(x) : s.setZoomAround(i.containerPoint, x);
      } });
      ne.addInitHook("addHandler", "doubleClickZoom", Mi), ne.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 });
      var ls = li.extend({ addHooks: function() {
        if (!this._draggable) {
          var i = this._map;
          this._draggable = new Ji(i._mapPane, i._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), i.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), i.on("zoomend", this._onZoomEnd, this), i.whenReady(this._onZoomEnd, this));
        }
        Yt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        Le(this._map._container, "leaflet-grab"), Le(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var i = this._map;
        if (i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var s = bt(this._map.options.maxBounds);
          this._offsetLimit = pt(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else this._offsetLimit = null;
        i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(i) {
        if (this._map.options.inertia) {
          var s = this._lastTime = +/* @__PURE__ */ new Date(), d = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(d), this._times.push(s), this._prunePositions(s);
        }
        this._map.fire("move", i).fire("drag", i);
      }, _prunePositions: function(i) {
        for (; this._positions.length > 1 && i - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var i = this._map.getSize().divideBy(2), s = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = s.subtract(i).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(i, s) {
        return i - (i - s) * this._viscosity;
      }, _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var i = this._draggable._newPos.subtract(this._draggable._startPos), s = this._offsetLimit;
          i.x < s.min.x && (i.x = this._viscousLimit(i.x, s.min.x)), i.y < s.min.y && (i.y = this._viscousLimit(i.y, s.min.y)), i.x > s.max.x && (i.x = this._viscousLimit(i.x, s.max.x)), i.y > s.max.y && (i.y = this._viscousLimit(i.y, s.max.y)), this._draggable._newPos = this._draggable._startPos.add(i);
        }
      }, _onPreDragWrap: function() {
        var i = this._worldWidth, s = Math.round(i / 2), d = this._initialWorldOffset, y = this._draggable._newPos.x, x = (y - s + d) % i + s - d, k = (y + s + d) % i - s - d, H = Math.abs(x + d) < Math.abs(k + d) ? x : k;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = H;
      }, _onDragEnd: function(i) {
        var s = this._map, d = s.options, y = !d.inertia || i.noInertia || this._times.length < 2;
        if (s.fire("dragend", i), y) s.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var x = this._lastPos.subtract(this._positions[0]), k = (this._lastTime - this._times[0]) / 1e3, H = d.easeLinearity, K = x.multiplyBy(H / k), ot = K.distanceTo([0, 0]), xt = Math.min(d.inertiaMaxSpeed, ot), Tt = K.multiplyBy(xt / ot), kt = xt / (d.inertiaDeceleration * H), Rt = Tt.multiplyBy(-kt / 2).round();
          !Rt.x && !Rt.y ? s.fire("moveend") : (Rt = s._limitOffset(Rt, s.options.maxBounds), q(function() {
            s.panBy(Rt, { duration: kt, easeLinearity: H, noMoveStart: true, animate: true });
          }));
        }
      } });
      ne.addInitHook("addHandler", "dragging", ls), ne.mergeOptions({ keyboard: true, keyboardPanDelta: 80 });
      var ma = li.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(i) {
        this._map = i, this._setPanDelta(i.options.keyboardPanDelta), this._setZoomDelta(i.options.zoomDelta);
      }, addHooks: function() {
        var i = this._map._container;
        i.tabIndex <= 0 && (i.tabIndex = "0"), $t(i, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), he(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, _onMouseDown: function() {
        if (!this._focused) {
          var i = document.body, s = document.documentElement, d = i.scrollTop || s.scrollTop, y = i.scrollLeft || s.scrollLeft;
          this._map._container.focus(), window.scrollTo(y, d);
        }
      }, _onFocus: function() {
        this._focused = true, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = false, this._map.fire("blur");
      }, _setPanDelta: function(i) {
        var s = this._panKeys = {}, d = this.keyCodes, y, x;
        for (y = 0, x = d.left.length; y < x; y++) s[d.left[y]] = [-1 * i, 0];
        for (y = 0, x = d.right.length; y < x; y++) s[d.right[y]] = [i, 0];
        for (y = 0, x = d.down.length; y < x; y++) s[d.down[y]] = [0, i];
        for (y = 0, x = d.up.length; y < x; y++) s[d.up[y]] = [0, -1 * i];
      }, _setZoomDelta: function(i) {
        var s = this._zoomKeys = {}, d = this.keyCodes, y, x;
        for (y = 0, x = d.zoomIn.length; y < x; y++) s[d.zoomIn[y]] = i;
        for (y = 0, x = d.zoomOut.length; y < x; y++) s[d.zoomOut[y]] = -i;
      }, _addHooks: function() {
        $t(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        he(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(i) {
        if (!(i.altKey || i.ctrlKey || i.metaKey)) {
          var s = i.keyCode, d = this._map, y;
          if (s in this._panKeys) {
            if (!d._panAnim || !d._panAnim._inProgress) if (y = this._panKeys[s], i.shiftKey && (y = w(y).multiplyBy(3)), d.options.maxBounds && (y = d._limitOffset(w(y), d.options.maxBounds)), d.options.worldCopyJump) {
              var x = d.wrapLatLng(d.unproject(d.project(d.getCenter()).add(y)));
              d.panTo(x);
            } else d.panBy(y);
          } else if (s in this._zoomKeys) d.setZoom(d.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[s]);
          else if (s === 27 && d._popup && d._popup.options.closeOnEscapeKey) d.closePopup();
          else return;
          Ei(i);
        }
      } });
      ne.addInitHook("addHandler", "keyboard", ma), ne.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var nr = li.extend({ addHooks: function() {
        $t(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        he(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(i) {
        var s = ra(i), d = this._map.options.wheelDebounceTime;
        this._delta += s, this._lastMousePos = this._map.mouseEventToContainerPoint(i), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var y = Math.max(d - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(h(this._performZoom, this), y), Ei(i);
      }, _performZoom: function() {
        var i = this._map, s = i.getZoom(), d = this._map.options.zoomSnap || 0;
        i._stop();
        var y = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), x = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(y)))) / Math.LN2, k = d ? Math.ceil(x / d) * d : x, H = i._limitZoom(s + (this._delta > 0 ? k : -k)) - s;
        this._delta = 0, this._startTime = null, H && (i.options.scrollWheelZoom === "center" ? i.setZoom(s + H) : i.setZoomAround(this._lastMousePos, s + H));
      } });
      ne.addInitHook("addHandler", "scrollWheelZoom", nr);
      var ss = 600;
      ne.mergeOptions({ tapHold: zt.touchNative && zt.safari && zt.mobile, tapTolerance: 15 });
      var tl = li.extend({ addHooks: function() {
        $t(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        he(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(i) {
        if (clearTimeout(this._holdTimeout), i.touches.length === 1) {
          var s = i.touches[0];
          this._startPos = this._newPos = new ut(s.clientX, s.clientY), this._holdTimeout = setTimeout(h(function() {
            this._cancel(), this._isTapValid() && ($t(document, "touchend", Ye), $t(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", s));
          }, this), ss), $t(document, "touchend touchcancel contextmenu", this._cancel, this), $t(document, "touchmove", this._onMove, this);
        }
      }, _cancelClickPrevent: function i() {
        he(document, "touchend", Ye), he(document, "touchend touchcancel", i);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), he(document, "touchend touchcancel contextmenu", this._cancel, this), he(document, "touchmove", this._onMove, this);
      }, _onMove: function(i) {
        var s = i.touches[0];
        this._newPos = new ut(s.clientX, s.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(i, s) {
        var d = new MouseEvent(i, { bubbles: true, cancelable: true, view: window, screenX: s.screenX, screenY: s.screenY, clientX: s.clientX, clientY: s.clientY });
        d._simulated = true, s.target.dispatchEvent(d);
      } });
      ne.addInitHook("addHandler", "tapHold", tl), ne.mergeOptions({ touchZoom: zt.touch, bounceAtZoomLimits: true });
      var Hr = li.extend({ addHooks: function() {
        Yt(this._map._container, "leaflet-touch-zoom"), $t(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        Le(this._map._container, "leaflet-touch-zoom"), he(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(i) {
        var s = this._map;
        if (!(!i.touches || i.touches.length !== 2 || s._animatingZoom || this._zooming)) {
          var d = s.mouseEventToContainerPoint(i.touches[0]), y = s.mouseEventToContainerPoint(i.touches[1]);
          this._centerPoint = s.getSize()._divideBy(2), this._startLatLng = s.containerPointToLatLng(this._centerPoint), s.options.touchZoom !== "center" && (this._pinchStartLatLng = s.containerPointToLatLng(d.add(y)._divideBy(2))), this._startDist = d.distanceTo(y), this._startZoom = s.getZoom(), this._moved = false, this._zooming = true, s._stop(), $t(document, "touchmove", this._onTouchMove, this), $t(document, "touchend touchcancel", this._onTouchEnd, this), Ye(i);
        }
      }, _onTouchMove: function(i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var s = this._map, d = s.mouseEventToContainerPoint(i.touches[0]), y = s.mouseEventToContainerPoint(i.touches[1]), x = d.distanceTo(y) / this._startDist;
          if (this._zoom = s.getScaleZoom(x, this._startZoom), !s.options.bounceAtZoomLimits && (this._zoom < s.getMinZoom() && x < 1 || this._zoom > s.getMaxZoom() && x > 1) && (this._zoom = s._limitZoom(this._zoom)), s.options.touchZoom === "center") {
            if (this._center = this._startLatLng, x === 1) return;
          } else {
            var k = d._add(y)._divideBy(2)._subtract(this._centerPoint);
            if (x === 1 && k.x === 0 && k.y === 0) return;
            this._center = s.unproject(s.project(this._pinchStartLatLng, this._zoom).subtract(k), this._zoom);
          }
          this._moved || (s._moveStart(true, false), this._moved = true), X(this._animRequest);
          var H = h(s._move, s, this._center, this._zoom, { pinch: true, round: false }, void 0);
          this._animRequest = q(H, this, true), Ye(i);
        }
      }, _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }
        this._zooming = false, X(this._animRequest), he(document, "touchmove", this._onTouchMove, this), he(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      } });
      ne.addInitHook("addHandler", "touchZoom", Hr), ne.BoxZoom = Ja, ne.DoubleClickZoom = Mi, ne.Drag = ls, ne.Keyboard = ma, ne.ScrollWheelZoom = nr, ne.TapHold = tl, ne.TouchZoom = Hr, o.Bounds = W, o.Browser = zt, o.CRS = Dt, o.Canvas = da, o.Circle = rs, o.CircleMarker = la, o.Class = at, o.Control = Bn, o.DivIcon = as, o.DivOverlay = ci, o.DomEvent = ed, o.DomUtil = Bu, o.Draggable = Ji, o.Evented = ct, o.FeatureGroup = Zn, o.GeoJSON = qn, o.GridLayer = Br, o.Handler = li, o.Icon = mo, o.ImageOverlay = ki, o.LatLng = wt, o.LatLngBounds = R, o.Layer = si, o.LayerGroup = Lr, o.LineUtil = qu, o.Map = ne, o.Marker = yo, o.Mixin = ad, o.Path = Hi, o.Point = ut, o.PolyUtil = ld, o.Polygon = vo, o.Polyline = ji, o.Popup = fa, o.PosAnimation = Za, o.Projection = Vu, o.Rectangle = Ju, o.Renderer = di, o.SVG = er, o.SVGOverlay = tr, o.TileLayer = Dr, o.Tooltip = Wa, o.Transformation = Vt, o.Util = ft, o.VideoOverlay = Qa, o.bind = h, o.bounds = pt, o.canvas = ha, o.circle = hd, o.circleMarker = Yu, o.control = ho, o.divIcon = Wu, o.extend = c, o.featureGroup = aa, o.geoJSON = Ka, o.geoJson = Xu, o.gridLayer = fi, o.icon = Ga, o.imageOverlay = bo, o.latLng = _t, o.latLngBounds = bt, o.layerGroup = Gu, o.map = oa, o.marker = is, o.point = w, o.polygon = $n, o.polyline = pd, o.popup = md, o.rectangle = Gn, o.setOptions = A, o.stamp = _, o.svg = Ir, o.svgOverlay = Qu, o.tileLayer = Vn, o.tooltip = gd, o.transformation = Kt, o.version = l, o.videoOverlay = Ku;
      var wo = window.L;
      o.noConflict = function() {
        return window.L = wo, this;
      }, window.L = o;
    });
  }(iu, iu.exports)), iu.exports;
}
var Kr = Uk();
function Zk(t3) {
  return t3.split(" ").filter(Boolean);
}
function $k(t3, r) {
  for (const o of Zk(r)) Kr.DomUtil.addClass(t3, o);
}
function Gf(t3, r, o) {
  return Object.freeze({ instance: t3, context: r, container: o });
}
function Yf(t3, r) {
  return r == null ? function(l, c) {
    const f = B.useRef(void 0);
    return f.current || (f.current = t3(l, c)), f;
  } : function(l, c) {
    const f = B.useRef(void 0);
    f.current || (f.current = t3(l, c));
    const h = B.useRef(l), { instance: m } = f.current;
    return B.useEffect(function() {
      h.current !== l && (r(m, l, h.current), h.current = l);
    }, [m, l, r]), f;
  };
}
function Qb(t3, r) {
  B.useEffect(function() {
    return (r.layerContainer ?? r.map).addLayer(t3.instance), function() {
      var _a;
      (_a = r.layerContainer) == null ? void 0 : _a.removeLayer(t3.instance), r.map.removeLayer(t3.instance);
    };
  }, [r, t3]);
}
function Wb(t3) {
  return function(o) {
    const l = wu(), c = t3(Ff(o, l), l);
    return Yb(l.map, o.attribution), km(c.current, o.eventHandlers), Qb(c.current, l), c;
  };
}
function qk(t3, r) {
  const o = B.useRef(void 0);
  B.useEffect(function() {
    if (r.pathOptions !== o.current) {
      const c = r.pathOptions ?? {};
      t3.instance.setStyle(c), o.current = c;
    }
  }, [t3, r]);
}
function Vk(t3) {
  return function(o) {
    const l = wu(), c = t3(Ff(o, l), l);
    return km(c.current, o.eventHandlers), Qb(c.current, l), qk(c.current, o), c;
  };
}
function Fk(t3, r) {
  const o = Yf(t3, r), l = Wb(o);
  return Kb(l);
}
function Gk(t3, r) {
  const o = Yf(t3), l = Hk(o, r);
  return Nk(l);
}
function Yk(t3, r) {
  const o = Yf(t3, r), l = Vk(o);
  return Kb(l);
}
function Xk(t3, r) {
  const o = Yf(t3, r), l = Wb(o);
  return Ik(l);
}
function Kk(t3, r, o) {
  const { opacity: l, zIndex: c } = r;
  l != null && l !== o.opacity && t3.setOpacity(l), c != null && c !== o.zIndex && t3.setZIndex(c);
}
function Qk(t3, r, o) {
  r.bounds instanceof Kr.LatLngBounds && r.bounds !== o.bounds && t3.setBounds(r.bounds), r.opacity != null && r.opacity !== o.opacity && t3.setOpacity(r.opacity), r.zIndex != null && r.zIndex !== o.zIndex && t3.setZIndex(r.zIndex);
}
function Wk() {
  return wu().map;
}
const Jk = Yk(function({ center: r, children: o, ...l }, c) {
  const f = new Kr.Circle(r, l);
  return Gf(f, Xb(c, { overlayContainer: f }));
}, Pk), tM = Fk(function({ bounds: r, url: o, ...l }, c) {
  const f = new Kr.ImageOverlay(o, r, l);
  return Gf(f, Xb(c, { overlayContainer: f }));
}, function(r, o, l) {
  if (Qk(r, o, l), o.bounds !== l.bounds) {
    const c = o.bounds instanceof Kr.LatLngBounds ? o.bounds : new Kr.LatLngBounds(o.bounds);
    r.setBounds(c);
  }
  o.url !== l.url && r.setUrl(o.url);
});
function eM({ bounds: t3, boundsOptions: r, center: o, children: l, className: c, id: f, placeholder: h, style: m, whenReady: _, zoom: v, ...b }, S) {
  const [E] = B.useState({ className: c, id: f, style: m }), [C, z] = B.useState(null), A = B.useRef(void 0);
  B.useImperativeHandle(S, () => (C == null ? void 0 : C.map) ?? null, [C]);
  const $ = B.useCallback((G) => {
    if (G !== null && !A.current) {
      const P = new Kr.Map(G, b);
      A.current = P, o != null && v != null ? P.setView(o, v) : t3 != null && P.fitBounds(t3, r), _ != null && P.whenReady(_), z(Dk(P));
    }
  }, []);
  B.useEffect(() => () => {
    C == null ? void 0 : C.map.remove();
  }, [C]);
  const N = C ? Hn.createElement(Vf, { value: C }, l) : h ?? null;
  return Hn.createElement("div", { ...E, ref: $ }, N);
}
const nM = B.forwardRef(eM), iM = ["mapPane", "markerPane", "overlayPane", "popupPane", "shadowPane", "tilePane", "tooltipPane"];
function Y_(t3, r) {
  const { [r]: o, ...l } = t3;
  return l;
}
function rM(t3, r, o) {
  if (iM.indexOf(t3) !== -1) throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${t3}`);
  if (o.map.getPane(t3) != null) throw new Error(`A pane with this name already exists: ${t3}`);
  const l = r.pane ?? o.pane, c = l ? o.map.getPane(l) : void 0, f = o.map.createPane(t3, c);
  if (r.className != null && $k(f, r.className), r.style != null) for (const h of Object.keys(r.style)) f.style[h] = r.style[h];
  return f;
}
function oM(t3, r) {
  const [o] = B.useState(t3.name), [l, c] = B.useState(null);
  B.useImperativeHandle(r, () => l, [l]);
  const f = wu(), h = B.useMemo(() => ({ ...f, pane: o }), [f]);
  return B.useEffect(() => (c(rM(o, t3, f)), function() {
    var _a, _b2;
    (_b2 = (_a = f.map.getPane(o)) == null ? void 0 : _a.remove) == null ? void 0 : _b2.call(_a), f.map._panes != null && (f.map._panes = Y_(f.map._panes, o), f.map._paneRenderers = Y_(f.map._paneRenderers, o));
  }), []), t3.children != null && l != null ? jf.createPortal(Hn.createElement(Vf, { value: h }, t3.children), l) : null;
}
const X_ = B.forwardRef(oM), aM = Xk(function({ url: r, ...o }, l) {
  const c = new Kr.TileLayer(r, Ff(o, l));
  return Gf(c, l);
}, function(r, o, l) {
  Kk(r, o, l);
  const { url: c } = o;
  c != null && c !== l.url && r.setUrl(c);
}), lM = Gk(function(r, o) {
  const l = new Kr.Tooltip(r, o.overlayContainer);
  return Gf(l, o);
}, function(r, o, { position: l }, c) {
  B.useEffect(function() {
    const h = o.overlayContainer;
    if (h == null) return;
    const { instance: m } = r, _ = (b) => {
      b.tooltip === m && (l != null && m.setLatLng(l), m.update(), c(true));
    }, v = (b) => {
      b.tooltip === m && c(false);
    };
    return h.on({ tooltipopen: _, tooltipclose: v }), h.bindTooltip(m), function() {
      h.off({ tooltipopen: _, tooltipclose: v }), h._map != null && h.unbindTooltip();
    };
  }, [r, o, c, l]);
});
function sM({ obj: t3 }) {
  const r = La(), o = en((S) => S.resetClick), l = en((S) => S.visibleDots), c = r.thumbMaxDim, f = 0.25, h = Wk(), m = t3.width / Math.max(t3.width, t3.height) * c, _ = t3.height / Math.max(t3.width, t3.height) * c, v = { width: `${t3.clicked ? m : c * f}px`, height: `${t3.clicked ? _ : c * f}px`, opacity: 1, overflow: "hidden", margin: 0, padding: 0, border: "1px solid white" };
  function b() {
    t3.clicked ? (o(), en.setState({ focus: null })) : (o(t3), t3.found = true, en.setState({ focus: t3 }), setTimeout(() => {
      const S = h.project([t3.lat, t3.lon], h.getZoom()), C = h.getSize().x / 2, z = C - C / r.mapRatio;
      S.x += z;
      const A = h.unproject(S, h.getZoom());
      h.flyTo([A.lat, A.lng], h.getZoom(), { animate: true, duration: 1.5 });
    }, 10));
  }
  return F.jsx(F.Fragment, { children: l && F.jsx(Jk, { center: [t3.lat, t3.lon], radius: 1e3, pathOptions: { fillOpacity: 1, fillColor: t3.found ? "transparent" : "whitesmoke", weight: 0 }, eventHandlers: { click: (S) => {
    b();
  } }, className: "square", children: t3.found && F.jsx(lM, { direction: "center", permanent: true, style: { backgroundColor: "transparent", border: "none", padding: 0, margin: 0, fontSize: "0px", zIndex: t3.clicked ? 1e4 : "inherit" }, children: F.jsx("div", { style: { ...v, borderRadius: t3.clicked ? "0%" : "100%" }, children: F.jsx("img", { src: `images/collection/${t3.filename}`, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }) }) }) }) });
}
function uM() {
  const t3 = en((h) => h.geodb), r = en((h) => h.landing), o = en((h) => h.resetClick), l = B.useRef(), c = [[-4.23, -78.95], [12.53, -66.85]], f = 10;
  return B.useEffect(() => {
    if (r) {
      const h = l.current;
      h && (h.setMinZoom(0), h.setMaxZoom(12), h.flyToBounds(c, { animate: true, duration: 1 }));
    } else {
      const h = l.current;
      if (h && t3.length > 0) {
        const m = t3[Math.floor(Math.random() * t3.length)];
        h.setMaxZoom(12), h.setMinZoom(10), m && (h.flyTo([m.lat, m.lon], 11, { animate: true, duration: 1.5 }), setTimeout(() => {
          en.setState({ visibleDots: true });
        }, 1500));
      }
    }
  }, [r]), F.jsx("div", { style: { height: "100%", width: "100%" }, onClick: (h) => {
    h.target.classList.contains("square") || (o(), en.setState({ focus: null }));
  }, children: F.jsxs(nM, { zoom: 10, bounds: c, zoomControl: false, ref: l, maxBounds: c.map((h, m) => [h[0] + (m === 0 ? -10 : f), h[1] + (m === 0 ? -10 : f)]), style: { width: "100%", height: "100%", zIndex: 0, backgroundColor: "transparent" }, children: [F.jsx(X_, { name: "tilelayer-pane", style: { zIndex: 11 }, children: F.jsx(aM, { url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", attribution: "Tiles \xA9 Esri", opacity: r ? 0 : 1, eventHandlers: { add: (h) => {
    const m = h.target;
    m.getContainer().style.transition = "all 3s ease-in-out";
  } } }) }), F.jsx(X_, { name: "imagelayer-pane", style: { zIndex: 1 }, children: F.jsx(tM, { bounds: c, url: "./sat_clip_final.png", zIndex: 1, opacity: r ? 0.8 : 0 }) }), t3.length > 0 && t3.map((h, m) => F.jsx(sM, { obj: h }, m))] }) });
}
function K_(t3, r) {
  return `rgba(${((l) => {
    const c = parseInt(l.slice(1), 16), f = c >> 16 & 255, h = c >> 8 & 255, m = c & 255;
    return `${f}, ${h}, ${m}`;
  })(t3)}, ${r})`;
}
function cM({ label: t3, color: r, options: o, value: l, onChange: c }) {
  const f = La();
  return F.jsx(Gb, { value: l, onChange: c, displayEmpty: true, sx: { borderRadius: "50px", px: 2, py: 0, my: 0, color: r, "& .MuiSelect-icon": { color: r }, border: "solid 1px black", backgroundColor: "whitesmoke", opacity: 0.95 }, MenuProps: { PaperProps: { sx: { borderRadius: f.brdRad, pt: 0, mt: 1, backgroundColor: f.palette.white.main, "& .MuiMenuItem-root": { border: "solid 1px transparent", borderRadius: f.brdRad, mx: 1 }, "& .MuiMenuItem-root.Mui-selected": { borderColor: r, backgroundColor: K_(r, 0.1) }, "& .MuiMenuItem-root:hover": { backgroundColor: K_(r, 0.1) } } } }, children: o.map((h) => F.jsx(ck, { value: h.value, children: h.label }, h.value)) });
}
function fM({ focus: t3 }) {
  const r = ["colonial_diffusion_all", "mambo_diffusion_all", "oro_diffusion_all", "street_art_diffusion_all"], [o, l] = B.useState(r[0]), c = r.map((f) => ({ label: f.replaceAll("_diffusion_all", "").replaceAll("_", " ") == "oro" ? "pre-hispanic" : f.replaceAll("_diffusion_all", "").replaceAll("_", " "), value: f }));
  return F.jsx(F.Fragment, { children: F.jsxs(On, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }, children: [F.jsx("img", { src: `images/generations/${o}/${t3 == null ? void 0 : t3.caption.replaceAll("'", "_")}.png`, alt: "", style: { width: "75%", height: "75%", objectFit: "cover", borderRadius: "20px" }, className: "holomorphic" }), F.jsx(On, { sx: { position: "absolute", top: 0, right: 0, m: 2 }, children: F.jsx(cM, { label: "Lora", color: "black", options: c, value: o, onChange: (f) => {
    l(f.target.value);
  } }) })] }) });
}
function dM() {
  const t3 = en((o) => o.focus);
  return F.jsx(F.Fragment, { children: t3 && F.jsxs(On, { sx: { position: "absolute", bottom: 0, left: 0, m: 2, p: 2, width: t3 ? "15vw" : "0px", maxWidth: "15vw", height: t3 ? "auto" : "0px", backgroundColor: "whitesmoke", border: t3 ? "1px solid black" : "none", borderRadius: "20px", opacity: 0.95, zIndex: 100, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", transition: `all ${500 * 1e-3}s` }, children: [F.jsxs(On, { sx: { flex: 1 }, children: [F.jsx(Vi, { variant: "h6", children: t3 == null ? void 0 : t3.title }), F.jsx(Vi, { children: t3 == null ? void 0 : t3.author }), F.jsx(Vi, { sx: { pb: 2 }, children: (t3 == null ? void 0 : t3.date) ? t3 == null ? void 0 : t3.date : "-" })] }), F.jsx(Pb, { sx: { overflow: "hidden", p: 0, border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "100%" }, onClick: () => (t3 == null ? void 0 : t3.url) && window.open(t3.url, "_blank"), className: "holomorphic", children: F.jsx("img", { src: "./mambo_logo.png", alt: "Go to Mambo", style: { width: 40, height: 40, borderRadius: "100%" } }) })] }) });
}
const hM = Hf(F.jsx("path", { d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" }));
function pM() {
  const t3 = en((r) => r.landing);
  return F.jsxs(On, { sx: { position: "absolute", top: 0, left: 0, p: t3 ? 2 : 0, m: 2, borderRadius: "20px", backgroundColor: "#000000", color: "#eeeeee", maxWidth: t3 ? "20vw" : "auto", zIndex: 1e3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxHeight: "80vh", overflowY: "auto", overflowX: "hidden" }, children: [F.jsx(On, { sx: { maxHeight: t3 ? "80vh" : "0px", width: t3 ? "20vw" : "0px", overflow: "hidden", transition: "all 0.5s ease-in-out" }, children: t3 && F.jsxs(F.Fragment, { children: [F.jsx(Vi, { sx: { pb: 2, textAlign: "justify" }, children: "Culture as dream, as encounter, as discovery and liberation. Surprise as emancipation. Territory as an endless horizon." }), F.jsx(Vi, { sx: { textAlign: "justify" }, children: "We land in new geographies, we immerse ourselves in vaguely intuited contexts, to cross, gently and wildly, the blurred mists of clich\xE9, of assumptions and commonplaces, and to enter into the unmitigated richness of a palimpsest. How to inhabit this natural, cultural, social and emotional maelstrom? Our digital age, with networked and scaled images, with distributed, automated and supposedly intelligent computational processes, exacerbates the processes of syncretism that characterise every culture. The large artificial intelligence models that increasingly mediate and shape contemporary culture are trained on vast amounts of unfiltered data from the internet, mostly representative of a global north, Anglo-Saxon based culture. What to do with our cultural legacies and heritages that are foreign to this reality? How to preserve and promote them? Do we accept to be swallowed up and processed by the machine to be part of this new automated and merciless syncretism? Or do we say we inhabit the shadows of silence, of invisibility as a strategy for survival?" })] }) }), t3 ? F.jsx(Cm, { sx: { borderRadius: "20px", color: "whitesmoke", border: "1px solid white", m: 0, mt: 4, px: 3 }, onClick: () => {
    en.setState({ landing: false });
  }, children: "Begin" }) : F.jsx(F.Fragment, { children: F.jsx(Pb, { sx: { color: "whitesmoke", p: 1, borderRadius: "100%" }, onClick: () => {
    en.setState({ landing: !t3, focus: null, visibleDots: false });
  }, children: F.jsx(hM, {}) }) })] });
}
const Q_ = Hf(F.jsx("path", { d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z" }));
function mM() {
  const t3 = en((r) => r.landing);
  return F.jsxs(F.Fragment, { children: [F.jsxs(On, { sx: { position: "absolute", top: 0, right: 0, p: 2, px: 2, m: 2, borderRadius: "20px", backgroundColor: "#000000", color: "#eeeeee", width: "10vw", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", opacity: t3 ? 1 : 0, visibility: t3 ? "visible" : "hidden", transition: "all 0.5s ease-in-out" }, children: [F.jsx("img", { src: "./dvs_logo.png", alt: "Go to Mambo", style: { width: "auto", height: "100%", cursor: "pointer" }, onClick: () => window.open("https://dvstudies.net/", "_blank") }), F.jsxs(Vi, { sx: { textAlign: "justify", fontSize: "0.8rem", pb: 2, pt: 2 }, children: ["Team: ", F.jsx("br", {}), "I. Neri, L. Schaerf, A. Zapata, D. Negueruela del Castillo"] }), F.jsx(Vi, { sx: { textAlign: "justify", fontSize: "0.6rem" }, children: "Digital-F(r)ictions is the result of a digital residency at the Bogot\xE1 Museum of Modern Art - MAMBO, supported by the Government of Canada\u2019s New Frontiers in Research Fund (NFRF), [NFRF-2022-00245] in collaboration with Susana Vargas-Mej\xEDa. We thank the MAMBO team and our colleague Pepe Ballesteros for their valuable insights." })] }), F.jsx(On, { sx: { position: "absolute", bottom: 0, m: 2, zIndex: 1e3, display: "flex", flexDirection: "column", alignItems: "center" }, children: F.jsxs(Cm, { sx: { opacity: t3 ? 1 : 0, visibility: t3 ? "visible" : "hidden", transition: "all 0.5s ease-in-out", border: "1px solid #000000", borderRadius: "20px", color: "#000000", backgroundColor: "whitesmoke", px: 2 }, onClick: () => en.setState({ methodology: true }), children: [F.jsx(Q_, { sx: { mr: 5, fontSize: "1.2rem" } }), "To know more", F.jsx(Q_, { sx: { ml: 5, fontSize: "1.2rem" } })] }) })] });
}
function gM(t3, r) {
  const o = {};
  return (t3[t3.length - 1] === "" ? [...t3, ""] : t3).join((o.padRight ? " " : "") + "," + (o.padLeft === false ? "" : " ")).trim();
}
const yM = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, vM = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, _M = {};
function W_(t3, r) {
  return (_M.jsx ? vM : yM).test(t3);
}
const bM = /[ \t\n\f\r]/g;
function xM(t3) {
  return typeof t3 == "object" ? t3.type === "text" ? J_(t3.value) : false : J_(t3);
}
function J_(t3) {
  return t3.replace(bM, "") === "";
}
class Cu {
  constructor(r, o, l) {
    this.normal = o, this.property = r, l && (this.space = l);
  }
}
Cu.prototype.normal = {};
Cu.prototype.property = {};
Cu.prototype.space = void 0;
function Jb(t3, r) {
  const o = {}, l = {};
  for (const c of t3) Object.assign(o, c.property), Object.assign(l, c.normal);
  return new Cu(o, l, r);
}
function Ip(t3) {
  return t3.toLowerCase();
}
class oi {
  constructor(r, o) {
    this.attribute = o, this.property = r;
  }
}
oi.prototype.attribute = "";
oi.prototype.booleanish = false;
oi.prototype.boolean = false;
oi.prototype.commaOrSpaceSeparated = false;
oi.prototype.commaSeparated = false;
oi.prototype.defined = false;
oi.prototype.mustUseProperty = false;
oi.prototype.number = false;
oi.prototype.overloadedBoolean = false;
oi.prototype.property = "";
oi.prototype.spaceSeparated = false;
oi.prototype.space = void 0;
let SM = 0;
const Wt = Pa(), un = Pa(), Hp = Pa(), St = Pa(), De = Pa(), Pl = Pa(), vi = Pa();
function Pa() {
  return 2 ** ++SM;
}
const jp = Object.freeze(Object.defineProperty({ __proto__: null, boolean: Wt, booleanish: un, commaOrSpaceSeparated: vi, commaSeparated: Pl, number: St, overloadedBoolean: Hp, spaceSeparated: De }, Symbol.toStringTag, { value: "Module" })), lp = Object.keys(jp);
class Mm extends oi {
  constructor(r, o, l, c) {
    let f = -1;
    if (super(r, o), t0(this, "space", c), typeof l == "number") for (; ++f < lp.length; ) {
      const h = lp[f];
      t0(this, lp[f], (l & jp[h]) === jp[h]);
    }
  }
}
Mm.prototype.defined = true;
function t0(t3, r, o) {
  o && (t3[r] = o);
}
function Hl(t3) {
  const r = {}, o = {};
  for (const [l, c] of Object.entries(t3.properties)) {
    const f = new Mm(l, t3.transform(t3.attributes || {}, l), c, t3.space);
    t3.mustUseProperty && t3.mustUseProperty.includes(l) && (f.mustUseProperty = true), r[l] = f, o[Ip(l)] = l, o[Ip(f.attribute)] = l;
  }
  return new Cu(r, o, t3.space);
}
const tx = Hl({ properties: { ariaActiveDescendant: null, ariaAtomic: un, ariaAutoComplete: null, ariaBusy: un, ariaChecked: un, ariaColCount: St, ariaColIndex: St, ariaColSpan: St, ariaControls: De, ariaCurrent: null, ariaDescribedBy: De, ariaDetails: null, ariaDisabled: un, ariaDropEffect: De, ariaErrorMessage: null, ariaExpanded: un, ariaFlowTo: De, ariaGrabbed: un, ariaHasPopup: null, ariaHidden: un, ariaInvalid: null, ariaKeyShortcuts: null, ariaLabel: null, ariaLabelledBy: De, ariaLevel: St, ariaLive: null, ariaModal: un, ariaMultiLine: un, ariaMultiSelectable: un, ariaOrientation: null, ariaOwns: De, ariaPlaceholder: null, ariaPosInSet: St, ariaPressed: un, ariaReadOnly: un, ariaRelevant: null, ariaRequired: un, ariaRoleDescription: De, ariaRowCount: St, ariaRowIndex: St, ariaRowSpan: St, ariaSelected: un, ariaSetSize: St, ariaSort: null, ariaValueMax: St, ariaValueMin: St, ariaValueNow: St, ariaValueText: null, role: null }, transform(t3, r) {
  return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
} });
function ex(t3, r) {
  return r in t3 ? t3[r] : r;
}
function nx(t3, r) {
  return ex(t3, r.toLowerCase());
}
const wM = Hl({ attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" }, mustUseProperty: ["checked", "multiple", "muted", "selected"], properties: { abbr: null, accept: Pl, acceptCharset: De, accessKey: De, action: null, allow: null, allowFullScreen: Wt, allowPaymentRequest: Wt, allowUserMedia: Wt, alt: null, as: null, async: Wt, autoCapitalize: null, autoComplete: De, autoFocus: Wt, autoPlay: Wt, blocking: De, capture: null, charSet: null, checked: Wt, cite: null, className: De, cols: St, colSpan: null, content: null, contentEditable: un, controls: Wt, controlsList: De, coords: St | Pl, crossOrigin: null, data: null, dateTime: null, decoding: null, default: Wt, defer: Wt, dir: null, dirName: null, disabled: Wt, download: Hp, draggable: un, encType: null, enterKeyHint: null, fetchPriority: null, form: null, formAction: null, formEncType: null, formMethod: null, formNoValidate: Wt, formTarget: null, headers: De, height: St, hidden: Hp, high: St, href: null, hrefLang: null, htmlFor: De, httpEquiv: De, id: null, imageSizes: null, imageSrcSet: null, inert: Wt, inputMode: null, integrity: null, is: null, isMap: Wt, itemId: null, itemProp: De, itemRef: De, itemScope: Wt, itemType: De, kind: null, label: null, lang: null, language: null, list: null, loading: null, loop: Wt, low: St, manifest: null, max: null, maxLength: St, media: null, method: null, min: null, minLength: St, multiple: Wt, muted: Wt, name: null, nonce: null, noModule: Wt, noValidate: Wt, onAbort: null, onAfterPrint: null, onAuxClick: null, onBeforeMatch: null, onBeforePrint: null, onBeforeToggle: null, onBeforeUnload: null, onBlur: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onContextLost: null, onContextMenu: null, onContextRestored: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnded: null, onError: null, onFocus: null, onFormData: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLanguageChange: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadEnd: null, onLoadStart: null, onMessage: null, onMessageError: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRejectionHandled: null, onReset: null, onResize: null, onScroll: null, onScrollEnd: null, onSecurityPolicyViolation: null, onSeeked: null, onSeeking: null, onSelect: null, onSlotChange: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnhandledRejection: null, onUnload: null, onVolumeChange: null, onWaiting: null, onWheel: null, open: Wt, optimum: St, pattern: null, ping: De, placeholder: null, playsInline: Wt, popover: null, popoverTarget: null, popoverTargetAction: null, poster: null, preload: null, readOnly: Wt, referrerPolicy: null, rel: De, required: Wt, reversed: Wt, rows: St, rowSpan: St, sandbox: De, scope: null, scoped: Wt, seamless: Wt, selected: Wt, shadowRootClonable: Wt, shadowRootDelegatesFocus: Wt, shadowRootMode: null, shape: null, size: St, sizes: null, slot: null, span: St, spellCheck: un, src: null, srcDoc: null, srcLang: null, srcSet: null, start: St, step: null, style: null, tabIndex: St, target: null, title: null, translate: null, type: null, typeMustMatch: Wt, useMap: null, value: un, width: St, wrap: null, writingSuggestions: null, align: null, aLink: null, archive: De, axis: null, background: null, bgColor: null, border: St, borderColor: null, bottomMargin: St, cellPadding: null, cellSpacing: null, char: null, charOff: null, classId: null, clear: null, code: null, codeBase: null, codeType: null, color: null, compact: Wt, declare: Wt, event: null, face: null, frame: null, frameBorder: null, hSpace: St, leftMargin: St, link: null, longDesc: null, lowSrc: null, marginHeight: St, marginWidth: St, noResize: Wt, noHref: Wt, noShade: Wt, noWrap: Wt, object: null, profile: null, prompt: null, rev: null, rightMargin: St, rules: null, scheme: null, scrolling: un, standby: null, summary: null, text: null, topMargin: St, valueType: null, version: null, vAlign: null, vLink: null, vSpace: St, allowTransparency: null, autoCorrect: null, autoSave: null, disablePictureInPicture: Wt, disableRemotePlayback: Wt, prefix: null, property: null, results: St, security: null, unselectable: null }, space: "html", transform: nx }), CM = Hl({ attributes: { accentHeight: "accent-height", alignmentBaseline: "alignment-baseline", arabicForm: "arabic-form", baselineShift: "baseline-shift", capHeight: "cap-height", className: "class", clipPath: "clip-path", clipRule: "clip-rule", colorInterpolation: "color-interpolation", colorInterpolationFilters: "color-interpolation-filters", colorProfile: "color-profile", colorRendering: "color-rendering", crossOrigin: "crossorigin", dataType: "datatype", dominantBaseline: "dominant-baseline", enableBackground: "enable-background", fillOpacity: "fill-opacity", fillRule: "fill-rule", floodColor: "flood-color", floodOpacity: "flood-opacity", fontFamily: "font-family", fontSize: "font-size", fontSizeAdjust: "font-size-adjust", fontStretch: "font-stretch", fontStyle: "font-style", fontVariant: "font-variant", fontWeight: "font-weight", glyphName: "glyph-name", glyphOrientationHorizontal: "glyph-orientation-horizontal", glyphOrientationVertical: "glyph-orientation-vertical", hrefLang: "hreflang", horizAdvX: "horiz-adv-x", horizOriginX: "horiz-origin-x", horizOriginY: "horiz-origin-y", imageRendering: "image-rendering", letterSpacing: "letter-spacing", lightingColor: "lighting-color", markerEnd: "marker-end", markerMid: "marker-mid", markerStart: "marker-start", navDown: "nav-down", navDownLeft: "nav-down-left", navDownRight: "nav-down-right", navLeft: "nav-left", navNext: "nav-next", navPrev: "nav-prev", navRight: "nav-right", navUp: "nav-up", navUpLeft: "nav-up-left", navUpRight: "nav-up-right", onAbort: "onabort", onActivate: "onactivate", onAfterPrint: "onafterprint", onBeforePrint: "onbeforeprint", onBegin: "onbegin", onCancel: "oncancel", onCanPlay: "oncanplay", onCanPlayThrough: "oncanplaythrough", onChange: "onchange", onClick: "onclick", onClose: "onclose", onCopy: "oncopy", onCueChange: "oncuechange", onCut: "oncut", onDblClick: "ondblclick", onDrag: "ondrag", onDragEnd: "ondragend", onDragEnter: "ondragenter", onDragExit: "ondragexit", onDragLeave: "ondragleave", onDragOver: "ondragover", onDragStart: "ondragstart", onDrop: "ondrop", onDurationChange: "ondurationchange", onEmptied: "onemptied", onEnd: "onend", onEnded: "onended", onError: "onerror", onFocus: "onfocus", onFocusIn: "onfocusin", onFocusOut: "onfocusout", onHashChange: "onhashchange", onInput: "oninput", onInvalid: "oninvalid", onKeyDown: "onkeydown", onKeyPress: "onkeypress", onKeyUp: "onkeyup", onLoad: "onload", onLoadedData: "onloadeddata", onLoadedMetadata: "onloadedmetadata", onLoadStart: "onloadstart", onMessage: "onmessage", onMouseDown: "onmousedown", onMouseEnter: "onmouseenter", onMouseLeave: "onmouseleave", onMouseMove: "onmousemove", onMouseOut: "onmouseout", onMouseOver: "onmouseover", onMouseUp: "onmouseup", onMouseWheel: "onmousewheel", onOffline: "onoffline", onOnline: "ononline", onPageHide: "onpagehide", onPageShow: "onpageshow", onPaste: "onpaste", onPause: "onpause", onPlay: "onplay", onPlaying: "onplaying", onPopState: "onpopstate", onProgress: "onprogress", onRateChange: "onratechange", onRepeat: "onrepeat", onReset: "onreset", onResize: "onresize", onScroll: "onscroll", onSeeked: "onseeked", onSeeking: "onseeking", onSelect: "onselect", onShow: "onshow", onStalled: "onstalled", onStorage: "onstorage", onSubmit: "onsubmit", onSuspend: "onsuspend", onTimeUpdate: "ontimeupdate", onToggle: "ontoggle", onUnload: "onunload", onVolumeChange: "onvolumechange", onWaiting: "onwaiting", onZoom: "onzoom", overlinePosition: "overline-position", overlineThickness: "overline-thickness", paintOrder: "paint-order", panose1: "panose-1", pointerEvents: "pointer-events", referrerPolicy: "referrerpolicy", renderingIntent: "rendering-intent", shapeRendering: "shape-rendering", stopColor: "stop-color", stopOpacity: "stop-opacity", strikethroughPosition: "strikethrough-position", strikethroughThickness: "strikethrough-thickness", strokeDashArray: "stroke-dasharray", strokeDashOffset: "stroke-dashoffset", strokeLineCap: "stroke-linecap", strokeLineJoin: "stroke-linejoin", strokeMiterLimit: "stroke-miterlimit", strokeOpacity: "stroke-opacity", strokeWidth: "stroke-width", tabIndex: "tabindex", textAnchor: "text-anchor", textDecoration: "text-decoration", textRendering: "text-rendering", transformOrigin: "transform-origin", typeOf: "typeof", underlinePosition: "underline-position", underlineThickness: "underline-thickness", unicodeBidi: "unicode-bidi", unicodeRange: "unicode-range", unitsPerEm: "units-per-em", vAlphabetic: "v-alphabetic", vHanging: "v-hanging", vIdeographic: "v-ideographic", vMathematical: "v-mathematical", vectorEffect: "vector-effect", vertAdvY: "vert-adv-y", vertOriginX: "vert-origin-x", vertOriginY: "vert-origin-y", wordSpacing: "word-spacing", writingMode: "writing-mode", xHeight: "x-height", playbackOrder: "playbackorder", timelineBegin: "timelinebegin" }, properties: { about: vi, accentHeight: St, accumulate: null, additive: null, alignmentBaseline: null, alphabetic: St, amplitude: St, arabicForm: null, ascent: St, attributeName: null, attributeType: null, azimuth: St, bandwidth: null, baselineShift: null, baseFrequency: null, baseProfile: null, bbox: null, begin: null, bias: St, by: null, calcMode: null, capHeight: St, className: De, clip: null, clipPath: null, clipPathUnits: null, clipRule: null, color: null, colorInterpolation: null, colorInterpolationFilters: null, colorProfile: null, colorRendering: null, content: null, contentScriptType: null, contentStyleType: null, crossOrigin: null, cursor: null, cx: null, cy: null, d: null, dataType: null, defaultAction: null, descent: St, diffuseConstant: St, direction: null, display: null, dur: null, divisor: St, dominantBaseline: null, download: Wt, dx: null, dy: null, edgeMode: null, editable: null, elevation: St, enableBackground: null, end: null, event: null, exponent: St, externalResourcesRequired: null, fill: null, fillOpacity: St, fillRule: null, filter: null, filterRes: null, filterUnits: null, floodColor: null, floodOpacity: null, focusable: null, focusHighlight: null, fontFamily: null, fontSize: null, fontSizeAdjust: null, fontStretch: null, fontStyle: null, fontVariant: null, fontWeight: null, format: null, fr: null, from: null, fx: null, fy: null, g1: Pl, g2: Pl, glyphName: Pl, glyphOrientationHorizontal: null, glyphOrientationVertical: null, glyphRef: null, gradientTransform: null, gradientUnits: null, handler: null, hanging: St, hatchContentUnits: null, hatchUnits: null, height: null, href: null, hrefLang: null, horizAdvX: St, horizOriginX: St, horizOriginY: St, id: null, ideographic: St, imageRendering: null, initialVisibility: null, in: null, in2: null, intercept: St, k: St, k1: St, k2: St, k3: St, k4: St, kernelMatrix: vi, kernelUnitLength: null, keyPoints: null, keySplines: null, keyTimes: null, kerning: null, lang: null, lengthAdjust: null, letterSpacing: null, lightingColor: null, limitingConeAngle: St, local: null, markerEnd: null, markerMid: null, markerStart: null, markerHeight: null, markerUnits: null, markerWidth: null, mask: null, maskContentUnits: null, maskUnits: null, mathematical: null, max: null, media: null, mediaCharacterEncoding: null, mediaContentEncodings: null, mediaSize: St, mediaTime: null, method: null, min: null, mode: null, name: null, navDown: null, navDownLeft: null, navDownRight: null, navLeft: null, navNext: null, navPrev: null, navRight: null, navUp: null, navUpLeft: null, navUpRight: null, numOctaves: null, observer: null, offset: null, onAbort: null, onActivate: null, onAfterPrint: null, onBeforePrint: null, onBegin: null, onCancel: null, onCanPlay: null, onCanPlayThrough: null, onChange: null, onClick: null, onClose: null, onCopy: null, onCueChange: null, onCut: null, onDblClick: null, onDrag: null, onDragEnd: null, onDragEnter: null, onDragExit: null, onDragLeave: null, onDragOver: null, onDragStart: null, onDrop: null, onDurationChange: null, onEmptied: null, onEnd: null, onEnded: null, onError: null, onFocus: null, onFocusIn: null, onFocusOut: null, onHashChange: null, onInput: null, onInvalid: null, onKeyDown: null, onKeyPress: null, onKeyUp: null, onLoad: null, onLoadedData: null, onLoadedMetadata: null, onLoadStart: null, onMessage: null, onMouseDown: null, onMouseEnter: null, onMouseLeave: null, onMouseMove: null, onMouseOut: null, onMouseOver: null, onMouseUp: null, onMouseWheel: null, onOffline: null, onOnline: null, onPageHide: null, onPageShow: null, onPaste: null, onPause: null, onPlay: null, onPlaying: null, onPopState: null, onProgress: null, onRateChange: null, onRepeat: null, onReset: null, onResize: null, onScroll: null, onSeeked: null, onSeeking: null, onSelect: null, onShow: null, onStalled: null, onStorage: null, onSubmit: null, onSuspend: null, onTimeUpdate: null, onToggle: null, onUnload: null, onVolumeChange: null, onWaiting: null, onZoom: null, opacity: null, operator: null, order: null, orient: null, orientation: null, origin: null, overflow: null, overlay: null, overlinePosition: St, overlineThickness: St, paintOrder: null, panose1: null, path: null, pathLength: St, patternContentUnits: null, patternTransform: null, patternUnits: null, phase: null, ping: De, pitch: null, playbackOrder: null, pointerEvents: null, points: null, pointsAtX: St, pointsAtY: St, pointsAtZ: St, preserveAlpha: null, preserveAspectRatio: null, primitiveUnits: null, propagate: null, property: vi, r: null, radius: null, referrerPolicy: null, refX: null, refY: null, rel: vi, rev: vi, renderingIntent: null, repeatCount: null, repeatDur: null, requiredExtensions: vi, requiredFeatures: vi, requiredFonts: vi, requiredFormats: vi, resource: null, restart: null, result: null, rotate: null, rx: null, ry: null, scale: null, seed: null, shapeRendering: null, side: null, slope: null, snapshotTime: null, specularConstant: St, specularExponent: St, spreadMethod: null, spacing: null, startOffset: null, stdDeviation: null, stemh: null, stemv: null, stitchTiles: null, stopColor: null, stopOpacity: null, strikethroughPosition: St, strikethroughThickness: St, string: null, stroke: null, strokeDashArray: vi, strokeDashOffset: null, strokeLineCap: null, strokeLineJoin: null, strokeMiterLimit: St, strokeOpacity: St, strokeWidth: null, style: null, surfaceScale: St, syncBehavior: null, syncBehaviorDefault: null, syncMaster: null, syncTolerance: null, syncToleranceDefault: null, systemLanguage: vi, tabIndex: St, tableValues: null, target: null, targetX: St, targetY: St, textAnchor: null, textDecoration: null, textRendering: null, textLength: null, timelineBegin: null, title: null, transformBehavior: null, type: null, typeOf: vi, to: null, transform: null, transformOrigin: null, u1: null, u2: null, underlinePosition: St, underlineThickness: St, unicode: null, unicodeBidi: null, unicodeRange: null, unitsPerEm: St, values: null, vAlphabetic: St, vMathematical: St, vectorEffect: null, vHanging: St, vIdeographic: St, version: null, vertAdvY: St, vertOriginX: St, vertOriginY: St, viewBox: null, viewTarget: null, visibility: null, width: null, widths: null, wordSpacing: null, writingMode: null, x: null, x1: null, x2: null, xChannelSelector: null, xHeight: St, y: null, y1: null, y2: null, yChannelSelector: null, z: null, zoomAndPan: null }, space: "svg", transform: ex }), ix = Hl({ properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null }, space: "xlink", transform(t3, r) {
  return "xlink:" + r.slice(5).toLowerCase();
} }), rx = Hl({ attributes: { xmlnsxlink: "xmlns:xlink" }, properties: { xmlnsXLink: null, xmlns: null }, space: "xmlns", transform: nx }), ox = Hl({ properties: { xmlBase: null, xmlLang: null, xmlSpace: null }, space: "xml", transform(t3, r) {
  return "xml:" + r.slice(3).toLowerCase();
} }), TM = { classId: "classID", dataType: "datatype", itemId: "itemID", strokeDashArray: "strokeDasharray", strokeDashOffset: "strokeDashoffset", strokeLineCap: "strokeLinecap", strokeLineJoin: "strokeLinejoin", strokeMiterLimit: "strokeMiterlimit", typeOf: "typeof", xLinkActuate: "xlinkActuate", xLinkArcRole: "xlinkArcrole", xLinkHref: "xlinkHref", xLinkRole: "xlinkRole", xLinkShow: "xlinkShow", xLinkTitle: "xlinkTitle", xLinkType: "xlinkType", xmlnsXLink: "xmlnsXlink" }, EM = /[A-Z]/g, e0 = /-[a-z]/g, kM = /^data[-\w.:]+$/i;
function MM(t3, r) {
  const o = Ip(r);
  let l = r, c = oi;
  if (o in t3.normal) return t3.property[t3.normal[o]];
  if (o.length > 4 && o.slice(0, 4) === "data" && kM.test(r)) {
    if (r.charAt(4) === "-") {
      const f = r.slice(5).replace(e0, OM);
      l = "data" + f.charAt(0).toUpperCase() + f.slice(1);
    } else {
      const f = r.slice(4);
      if (!e0.test(f)) {
        let h = f.replace(EM, AM);
        h.charAt(0) !== "-" && (h = "-" + h), r = "data" + h;
      }
    }
    c = Mm;
  }
  return new c(l, r);
}
function AM(t3) {
  return "-" + t3.toLowerCase();
}
function OM(t3) {
  return t3.charAt(1).toUpperCase();
}
const RM = Jb([tx, wM, ix, rx, ox], "html"), Am = Jb([tx, CM, ix, rx, ox], "svg");
function zM(t3) {
  return t3.join(" ").trim();
}
var Al = {}, sp, n0;
function LM() {
  if (n0) return sp;
  n0 = 1;
  var t3 = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, o = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, c = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, h = /^[;\s]*/, m = /^\s+|\s+$/g, _ = `
`, v = "/", b = "*", S = "", E = "comment", C = "declaration";
  sp = function(A, $) {
    if (typeof A != "string") throw new TypeError("First argument must be a string");
    if (!A) return [];
    $ = $ || {};
    var N = 1, G = 1;
    function P(ft) {
      var at = ft.match(r);
      at && (N += at.length);
      var st = ft.lastIndexOf(_);
      G = ~st ? ft.length - st : G + ft.length;
    }
    function U() {
      var ft = { line: N, column: G };
      return function(at) {
        return at.position = new D(ft), et(), at;
      };
    }
    function D(ft) {
      this.start = ft, this.end = { line: N, column: G }, this.source = $.source;
    }
    D.prototype.content = A;
    function I(ft) {
      var at = new Error($.source + ":" + N + ":" + G + ": " + ft);
      if (at.reason = ft, at.filename = $.source, at.line = N, at.column = G, at.source = A, !$.silent) throw at;
    }
    function tt(ft) {
      var at = ft.exec(A);
      if (at) {
        var st = at[0];
        return P(st), A = A.slice(st.length), at;
      }
    }
    function et() {
      tt(o);
    }
    function lt(ft) {
      var at;
      for (ft = ft || []; at = M(); ) at !== false && ft.push(at);
      return ft;
    }
    function M() {
      var ft = U();
      if (!(v != A.charAt(0) || b != A.charAt(1))) {
        for (var at = 2; S != A.charAt(at) && (b != A.charAt(at) || v != A.charAt(at + 1)); ) ++at;
        if (at += 2, S === A.charAt(at - 1)) return I("End of comment missing");
        var st = A.slice(2, at - 2);
        return G += 2, P(st), A = A.slice(at), G += 2, ft({ type: E, comment: st });
      }
    }
    function q() {
      var ft = U(), at = tt(l);
      if (at) {
        if (M(), !tt(c)) return I("property missing ':'");
        var st = tt(f), Z = ft({ type: C, property: z(at[0].replace(t3, S)), value: st ? z(st[0].replace(t3, S)) : S });
        return tt(h), Z;
      }
    }
    function X() {
      var ft = [];
      lt(ft);
      for (var at; at = q(); ) at !== false && (ft.push(at), lt(ft));
      return ft;
    }
    return et(), X();
  };
  function z(A) {
    return A ? A.replace(m, S) : S;
  }
  return sp;
}
var i0;
function PM() {
  if (i0) return Al;
  i0 = 1;
  var t3 = Al && Al.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(Al, "__esModule", { value: true }), Al.default = o;
  var r = t3(LM());
  function o(l, c) {
    var f = null;
    if (!l || typeof l != "string") return f;
    var h = (0, r.default)(l), m = typeof c == "function";
    return h.forEach(function(_) {
      if (_.type === "declaration") {
        var v = _.property, b = _.value;
        m ? c(v, b, _) : b && (f = f || {}, f[v] = b);
      }
    }), f;
  }
  return Al;
}
var Ks = {}, r0;
function BM() {
  if (r0) return Ks;
  r0 = 1, Object.defineProperty(Ks, "__esModule", { value: true }), Ks.camelCase = void 0;
  var t3 = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, o = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, c = /^-(ms)-/, f = function(v) {
    return !v || o.test(v) || t3.test(v);
  }, h = function(v, b) {
    return b.toUpperCase();
  }, m = function(v, b) {
    return "".concat(b, "-");
  }, _ = function(v, b) {
    return b === void 0 && (b = {}), f(v) ? v : (v = v.toLowerCase(), b.reactCompat ? v = v.replace(c, m) : v = v.replace(l, m), v.replace(r, h));
  };
  return Ks.camelCase = _, Ks;
}
var Qs, o0;
function DM() {
  if (o0) return Qs;
  o0 = 1;
  var t3 = Qs && Qs.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  }, r = t3(PM()), o = BM();
  function l(c, f) {
    var h = {};
    return !c || typeof c != "string" || (0, r.default)(c, function(m, _) {
      m && _ && (h[(0, o.camelCase)(m, f)] = _);
    }), h;
  }
  return l.default = l, Qs = l, Qs;
}
var NM = DM();
const IM = mu(NM), ax = lx("end"), Om = lx("start");
function lx(t3) {
  return r;
  function r(o) {
    const l = o && o.position && o.position[t3] || {};
    if (typeof l.line == "number" && l.line > 0 && typeof l.column == "number" && l.column > 0) return { line: l.line, column: l.column, offset: typeof l.offset == "number" && l.offset > -1 ? l.offset : void 0 };
  }
}
function HM(t3) {
  const r = Om(t3), o = ax(t3);
  if (r && o) return { start: r, end: o };
}
function au(t3) {
  return !t3 || typeof t3 != "object" ? "" : "position" in t3 || "type" in t3 ? a0(t3.position) : "start" in t3 || "end" in t3 ? a0(t3) : "line" in t3 || "column" in t3 ? Up(t3) : "";
}
function Up(t3) {
  return l0(t3 && t3.line) + ":" + l0(t3 && t3.column);
}
function a0(t3) {
  return Up(t3 && t3.start) + "-" + Up(t3 && t3.end);
}
function l0(t3) {
  return t3 && typeof t3 == "number" ? t3 : 1;
}
class jn extends Error {
  constructor(r, o, l) {
    super(), typeof o == "string" && (l = o, o = void 0);
    let c = "", f = {}, h = false;
    if (o && ("line" in o && "column" in o ? f = { place: o } : "start" in o && "end" in o ? f = { place: o } : "type" in o ? f = { ancestors: [o], place: o.position } : f = { ...o }), typeof r == "string" ? c = r : !f.cause && r && (h = true, c = r.message, f.cause = r), !f.ruleId && !f.source && typeof l == "string") {
      const _ = l.indexOf(":");
      _ === -1 ? f.ruleId = l : (f.source = l.slice(0, _), f.ruleId = l.slice(_ + 1));
    }
    if (!f.place && f.ancestors && f.ancestors) {
      const _ = f.ancestors[f.ancestors.length - 1];
      _ && (f.place = _.position);
    }
    const m = f.place && "start" in f.place ? f.place.start : f.place;
    this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = m ? m.column : void 0, this.fatal = void 0, this.file, this.message = c, this.line = m ? m.line : void 0, this.name = au(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = h && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
jn.prototype.file = "";
jn.prototype.name = "";
jn.prototype.reason = "";
jn.prototype.message = "";
jn.prototype.stack = "";
jn.prototype.column = void 0;
jn.prototype.line = void 0;
jn.prototype.ancestors = void 0;
jn.prototype.cause = void 0;
jn.prototype.fatal = void 0;
jn.prototype.place = void 0;
jn.prototype.ruleId = void 0;
jn.prototype.source = void 0;
const Rm = {}.hasOwnProperty, jM = /* @__PURE__ */ new Map(), UM = /[A-Z]/g, ZM = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), $M = /* @__PURE__ */ new Set(["td", "th"]), sx = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function qM(t3, r) {
  if (!r || r.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
  const o = r.filePath || void 0;
  let l;
  if (r.development) {
    if (typeof r.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
    l = WM(o, r.jsxDEV);
  } else {
    if (typeof r.jsx != "function") throw new TypeError("Expected `jsx` in production options");
    if (typeof r.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
    l = QM(o, r.jsx, r.jsxs);
  }
  const c = { Fragment: r.Fragment, ancestors: [], components: r.components || {}, create: l, elementAttributeNameCase: r.elementAttributeNameCase || "react", evaluater: r.createEvaluater ? r.createEvaluater() : void 0, filePath: o, ignoreInvalidStyle: r.ignoreInvalidStyle || false, passKeys: r.passKeys !== false, passNode: r.passNode || false, schema: r.space === "svg" ? Am : RM, stylePropertyNameCase: r.stylePropertyNameCase || "dom", tableCellAlignToStyle: r.tableCellAlignToStyle !== false }, f = ux(c, t3, void 0);
  return f && typeof f != "string" ? f : c.create(t3, c.Fragment, { children: f || void 0 }, void 0);
}
function ux(t3, r, o) {
  if (r.type === "element") return VM(t3, r, o);
  if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression") return FM(t3, r);
  if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement") return YM(t3, r, o);
  if (r.type === "mdxjsEsm") return GM(t3, r);
  if (r.type === "root") return XM(t3, r, o);
  if (r.type === "text") return KM(t3, r);
}
function VM(t3, r, o) {
  const l = t3.schema;
  let c = l;
  r.tagName.toLowerCase() === "svg" && l.space === "html" && (c = Am, t3.schema = c), t3.ancestors.push(r);
  const f = fx(t3, r.tagName, false), h = JM(t3, r);
  let m = Lm(t3, r);
  return ZM.has(r.tagName) && (m = m.filter(function(_) {
    return typeof _ == "string" ? !xM(_) : true;
  })), cx(t3, h, f, r), zm(h, m), t3.ancestors.pop(), t3.schema = l, t3.create(r, f, h, o);
}
function FM(t3, r) {
  if (r.data && r.data.estree && t3.evaluater) {
    const l = r.data.estree.body[0];
    return l.type, t3.evaluater.evaluateExpression(l.expression);
  }
  pu(t3, r.position);
}
function GM(t3, r) {
  if (r.data && r.data.estree && t3.evaluater) return t3.evaluater.evaluateProgram(r.data.estree);
  pu(t3, r.position);
}
function YM(t3, r, o) {
  const l = t3.schema;
  let c = l;
  r.name === "svg" && l.space === "html" && (c = Am, t3.schema = c), t3.ancestors.push(r);
  const f = r.name === null ? t3.Fragment : fx(t3, r.name, true), h = tA(t3, r), m = Lm(t3, r);
  return cx(t3, h, f, r), zm(h, m), t3.ancestors.pop(), t3.schema = l, t3.create(r, f, h, o);
}
function XM(t3, r, o) {
  const l = {};
  return zm(l, Lm(t3, r)), t3.create(r, t3.Fragment, l, o);
}
function KM(t3, r) {
  return r.value;
}
function cx(t3, r, o, l) {
  typeof o != "string" && o !== t3.Fragment && t3.passNode && (r.node = l);
}
function zm(t3, r) {
  if (r.length > 0) {
    const o = r.length > 1 ? r : r[0];
    o && (t3.children = o);
  }
}
function QM(t3, r, o) {
  return l;
  function l(c, f, h, m) {
    const v = Array.isArray(h.children) ? o : r;
    return m ? v(f, h, m) : v(f, h);
  }
}
function WM(t3, r) {
  return o;
  function o(l, c, f, h) {
    const m = Array.isArray(f.children), _ = Om(l);
    return r(c, f, h, m, { columnNumber: _ ? _.column - 1 : void 0, fileName: t3, lineNumber: _ ? _.line : void 0 }, void 0);
  }
}
function JM(t3, r) {
  const o = {};
  let l, c;
  for (c in r.properties) if (c !== "children" && Rm.call(r.properties, c)) {
    const f = eA(t3, c, r.properties[c]);
    if (f) {
      const [h, m] = f;
      t3.tableCellAlignToStyle && h === "align" && typeof m == "string" && $M.has(r.tagName) ? l = m : o[h] = m;
    }
  }
  if (l) {
    const f = o.style || (o.style = {});
    f[t3.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l;
  }
  return o;
}
function tA(t3, r) {
  const o = {};
  for (const l of r.attributes) if (l.type === "mdxJsxExpressionAttribute") if (l.data && l.data.estree && t3.evaluater) {
    const f = l.data.estree.body[0];
    f.type;
    const h = f.expression;
    h.type;
    const m = h.properties[0];
    m.type, Object.assign(o, t3.evaluater.evaluateExpression(m.argument));
  } else pu(t3, r.position);
  else {
    const c = l.name;
    let f;
    if (l.value && typeof l.value == "object") if (l.value.data && l.value.data.estree && t3.evaluater) {
      const m = l.value.data.estree.body[0];
      m.type, f = t3.evaluater.evaluateExpression(m.expression);
    } else pu(t3, r.position);
    else f = l.value === null ? true : l.value;
    o[c] = f;
  }
  return o;
}
function Lm(t3, r) {
  const o = [];
  let l = -1;
  const c = t3.passKeys ? /* @__PURE__ */ new Map() : jM;
  for (; ++l < r.children.length; ) {
    const f = r.children[l];
    let h;
    if (t3.passKeys) {
      const _ = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
      if (_) {
        const v = c.get(_) || 0;
        h = _ + "-" + v, c.set(_, v + 1);
      }
    }
    const m = ux(t3, f, h);
    m !== void 0 && o.push(m);
  }
  return o;
}
function eA(t3, r, o) {
  const l = MM(t3.schema, r);
  if (!(o == null || typeof o == "number" && Number.isNaN(o))) {
    if (Array.isArray(o) && (o = l.commaSeparated ? gM(o) : zM(o)), l.property === "style") {
      let c = typeof o == "object" ? o : nA(t3, String(o));
      return t3.stylePropertyNameCase === "css" && (c = iA(c)), ["style", c];
    }
    return [t3.elementAttributeNameCase === "react" && l.space ? TM[l.property] || l.property : l.attribute, o];
  }
}
function nA(t3, r) {
  try {
    return IM(r, { reactCompat: true });
  } catch (o) {
    if (t3.ignoreInvalidStyle) return {};
    const l = o, c = new jn("Cannot parse `style` attribute", { ancestors: t3.ancestors, cause: l, ruleId: "style", source: "hast-util-to-jsx-runtime" });
    throw c.file = t3.filePath || void 0, c.url = sx + "#cannot-parse-style-attribute", c;
  }
}
function fx(t3, r, o) {
  let l;
  if (!o) l = { type: "Literal", value: r };
  else if (r.includes(".")) {
    const c = r.split(".");
    let f = -1, h;
    for (; ++f < c.length; ) {
      const m = W_(c[f]) ? { type: "Identifier", name: c[f] } : { type: "Literal", value: c[f] };
      h = h ? { type: "MemberExpression", object: h, property: m, computed: !!(f && m.type === "Literal"), optional: false } : m;
    }
    l = h;
  } else l = W_(r) && !/^[a-z]/.test(r) ? { type: "Identifier", name: r } : { type: "Literal", value: r };
  if (l.type === "Literal") {
    const c = l.value;
    return Rm.call(t3.components, c) ? t3.components[c] : c;
  }
  if (t3.evaluater) return t3.evaluater.evaluateExpression(l);
  pu(t3);
}
function pu(t3, r) {
  const o = new jn("Cannot handle MDX estrees without `createEvaluater`", { ancestors: t3.ancestors, place: r, ruleId: "mdx-estree", source: "hast-util-to-jsx-runtime" });
  throw o.file = t3.filePath || void 0, o.url = sx + "#cannot-handle-mdx-estrees-without-createevaluater", o;
}
function iA(t3) {
  const r = {};
  let o;
  for (o in t3) Rm.call(t3, o) && (r[rA(o)] = t3[o]);
  return r;
}
function rA(t3) {
  let r = t3.replace(UM, oA);
  return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function oA(t3) {
  return "-" + t3.toLowerCase();
}
const up = { action: ["form"], cite: ["blockquote", "del", "ins", "q"], data: ["object"], formAction: ["button", "input"], href: ["a", "area", "base", "link"], icon: ["menuitem"], itemId: null, manifest: ["html"], ping: ["a", "area"], poster: ["video"], src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"] }, aA = {};
function lA(t3, r) {
  const o = aA, l = typeof o.includeImageAlt == "boolean" ? o.includeImageAlt : true, c = typeof o.includeHtml == "boolean" ? o.includeHtml : true;
  return dx(t3, l, c);
}
function dx(t3, r, o) {
  if (sA(t3)) {
    if ("value" in t3) return t3.type === "html" && !o ? "" : t3.value;
    if (r && "alt" in t3 && t3.alt) return t3.alt;
    if ("children" in t3) return s0(t3.children, r, o);
  }
  return Array.isArray(t3) ? s0(t3, r, o) : "";
}
function s0(t3, r, o) {
  const l = [];
  let c = -1;
  for (; ++c < t3.length; ) l[c] = dx(t3[c], r, o);
  return l.join("");
}
function sA(t3) {
  return !!(t3 && typeof t3 == "object");
}
const u0 = document.createElement("i");
function Pm(t3) {
  const r = "&" + t3 + ";";
  u0.innerHTML = r;
  const o = u0.textContent;
  return o.charCodeAt(o.length - 1) === 59 && t3 !== "semi" || o === r ? false : o;
}
function vr(t3, r, o, l) {
  const c = t3.length;
  let f = 0, h;
  if (r < 0 ? r = -r > c ? 0 : c + r : r = r > c ? c : r, o = o > 0 ? o : 0, l.length < 1e4) h = Array.from(l), h.unshift(r, o), t3.splice(...h);
  else for (o && t3.splice(r, o); f < l.length; ) h = l.slice(f, f + 1e4), h.unshift(r, 0), t3.splice(...h), f += 1e4, r += 1e4;
}
function Bi(t3, r) {
  return t3.length > 0 ? (vr(t3, t3.length, 0, r), t3) : r;
}
const c0 = {}.hasOwnProperty;
function uA(t3) {
  const r = {};
  let o = -1;
  for (; ++o < t3.length; ) cA(r, t3[o]);
  return r;
}
function cA(t3, r) {
  let o;
  for (o in r) {
    const c = (c0.call(t3, o) ? t3[o] : void 0) || (t3[o] = {}), f = r[o];
    let h;
    if (f) for (h in f) {
      c0.call(c, h) || (c[h] = []);
      const m = f[h];
      fA(c[h], Array.isArray(m) ? m : m ? [m] : []);
    }
  }
}
function fA(t3, r) {
  let o = -1;
  const l = [];
  for (; ++o < r.length; ) (r[o].add === "after" ? t3 : l).push(r[o]);
  vr(t3, 0, 0, l);
}
function hx(t3, r) {
  const o = Number.parseInt(t3, r);
  return o < 9 || o === 11 || o > 13 && o < 32 || o > 126 && o < 160 || o > 55295 && o < 57344 || o > 64975 && o < 65008 || (o & 65535) === 65535 || (o & 65535) === 65534 || o > 1114111 ? "\uFFFD" : String.fromCodePoint(o);
}
function Bl(t3) {
  return t3.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const pr = Qo(/[A-Za-z]/), bi = Qo(/[\dA-Za-z]/), dA = Qo(/[#-'*+\--9=?A-Z^-~]/);
function Zp(t3) {
  return t3 !== null && (t3 < 32 || t3 === 127);
}
const $p = Qo(/\d/), hA = Qo(/[\dA-Fa-f]/), pA = Qo(/[!-/:-@[-`{-~]/);
function Zt(t3) {
  return t3 !== null && t3 < -2;
}
function ii(t3) {
  return t3 !== null && (t3 < 0 || t3 === 32);
}
function ye(t3) {
  return t3 === -2 || t3 === -1 || t3 === 32;
}
const mA = Qo(new RegExp("\\p{P}|\\p{S}", "u")), gA = Qo(/\s/);
function Qo(t3) {
  return r;
  function r(o) {
    return o !== null && o > -1 && t3.test(String.fromCharCode(o));
  }
}
function jl(t3) {
  const r = [];
  let o = -1, l = 0, c = 0;
  for (; ++o < t3.length; ) {
    const f = t3.charCodeAt(o);
    let h = "";
    if (f === 37 && bi(t3.charCodeAt(o + 1)) && bi(t3.charCodeAt(o + 2))) c = 2;
    else if (f < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (h = String.fromCharCode(f));
    else if (f > 55295 && f < 57344) {
      const m = t3.charCodeAt(o + 1);
      f < 56320 && m > 56319 && m < 57344 ? (h = String.fromCharCode(f, m), c = 1) : h = "\uFFFD";
    } else h = String.fromCharCode(f);
    h && (r.push(t3.slice(l, o), encodeURIComponent(h)), l = o + c + 1, h = ""), c && (o += c, c = 0);
  }
  return r.join("") + t3.slice(l);
}
function Ne(t3, r, o, l) {
  const c = l ? l - 1 : Number.POSITIVE_INFINITY;
  let f = 0;
  return h;
  function h(_) {
    return ye(_) ? (t3.enter(o), m(_)) : r(_);
  }
  function m(_) {
    return ye(_) && f++ < c ? (t3.consume(_), m) : (t3.exit(o), r(_));
  }
}
const yA = { tokenize: vA };
function vA(t3) {
  const r = t3.attempt(this.parser.constructs.contentInitial, l, c);
  let o;
  return r;
  function l(m) {
    if (m === null) {
      t3.consume(m);
      return;
    }
    return t3.enter("lineEnding"), t3.consume(m), t3.exit("lineEnding"), Ne(t3, r, "linePrefix");
  }
  function c(m) {
    return t3.enter("paragraph"), f(m);
  }
  function f(m) {
    const _ = t3.enter("chunkText", { contentType: "text", previous: o });
    return o && (o.next = _), o = _, h(m);
  }
  function h(m) {
    if (m === null) {
      t3.exit("chunkText"), t3.exit("paragraph"), t3.consume(m);
      return;
    }
    return Zt(m) ? (t3.consume(m), t3.exit("chunkText"), f) : (t3.consume(m), h);
  }
}
const _A = { tokenize: bA }, f0 = { tokenize: xA };
function bA(t3) {
  const r = this, o = [];
  let l = 0, c, f, h;
  return m;
  function m(P) {
    if (l < o.length) {
      const U = o[l];
      return r.containerState = U[1], t3.attempt(U[0].continuation, _, v)(P);
    }
    return v(P);
  }
  function _(P) {
    if (l++, r.containerState._closeFlow) {
      r.containerState._closeFlow = void 0, c && G();
      const U = r.events.length;
      let D = U, I;
      for (; D--; ) if (r.events[D][0] === "exit" && r.events[D][1].type === "chunkFlow") {
        I = r.events[D][1].end;
        break;
      }
      N(l);
      let tt = U;
      for (; tt < r.events.length; ) r.events[tt][1].end = { ...I }, tt++;
      return vr(r.events, D + 1, 0, r.events.slice(U)), r.events.length = tt, v(P);
    }
    return m(P);
  }
  function v(P) {
    if (l === o.length) {
      if (!c) return E(P);
      if (c.currentConstruct && c.currentConstruct.concrete) return z(P);
      r.interrupt = !!(c.currentConstruct && !c._gfmTableDynamicInterruptHack);
    }
    return r.containerState = {}, t3.check(f0, b, S)(P);
  }
  function b(P) {
    return c && G(), N(l), E(P);
  }
  function S(P) {
    return r.parser.lazy[r.now().line] = l !== o.length, h = r.now().offset, z(P);
  }
  function E(P) {
    return r.containerState = {}, t3.attempt(f0, C, z)(P);
  }
  function C(P) {
    return l++, o.push([r.currentConstruct, r.containerState]), E(P);
  }
  function z(P) {
    if (P === null) {
      c && G(), N(0), t3.consume(P);
      return;
    }
    return c = c || r.parser.flow(r.now()), t3.enter("chunkFlow", { _tokenizer: c, contentType: "flow", previous: f }), A(P);
  }
  function A(P) {
    if (P === null) {
      $(t3.exit("chunkFlow"), true), N(0), t3.consume(P);
      return;
    }
    return Zt(P) ? (t3.consume(P), $(t3.exit("chunkFlow")), l = 0, r.interrupt = void 0, m) : (t3.consume(P), A);
  }
  function $(P, U) {
    const D = r.sliceStream(P);
    if (U && D.push(null), P.previous = f, f && (f.next = P), f = P, c.defineSkip(P.start), c.write(D), r.parser.lazy[P.start.line]) {
      let I = c.events.length;
      for (; I--; ) if (c.events[I][1].start.offset < h && (!c.events[I][1].end || c.events[I][1].end.offset > h)) return;
      const tt = r.events.length;
      let et = tt, lt, M;
      for (; et--; ) if (r.events[et][0] === "exit" && r.events[et][1].type === "chunkFlow") {
        if (lt) {
          M = r.events[et][1].end;
          break;
        }
        lt = true;
      }
      for (N(l), I = tt; I < r.events.length; ) r.events[I][1].end = { ...M }, I++;
      vr(r.events, et + 1, 0, r.events.slice(tt)), r.events.length = I;
    }
  }
  function N(P) {
    let U = o.length;
    for (; U-- > P; ) {
      const D = o[U];
      r.containerState = D[1], D[0].exit.call(r, t3);
    }
    o.length = P;
  }
  function G() {
    c.write([null]), f = void 0, c = void 0, r.containerState._closeFlow = void 0;
  }
}
function xA(t3, r, o) {
  return Ne(t3, t3.attempt(this.parser.constructs.document, r, o), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function d0(t3) {
  if (t3 === null || ii(t3) || gA(t3)) return 1;
  if (mA(t3)) return 2;
}
function Bm(t3, r, o) {
  const l = [];
  let c = -1;
  for (; ++c < t3.length; ) {
    const f = t3[c].resolveAll;
    f && !l.includes(f) && (r = f(r, o), l.push(f));
  }
  return r;
}
const qp = { name: "attention", resolveAll: SA, tokenize: wA };
function SA(t3, r) {
  let o = -1, l, c, f, h, m, _, v, b;
  for (; ++o < t3.length; ) if (t3[o][0] === "enter" && t3[o][1].type === "attentionSequence" && t3[o][1]._close) {
    for (l = o; l--; ) if (t3[l][0] === "exit" && t3[l][1].type === "attentionSequence" && t3[l][1]._open && r.sliceSerialize(t3[l][1]).charCodeAt(0) === r.sliceSerialize(t3[o][1]).charCodeAt(0)) {
      if ((t3[l][1]._close || t3[o][1]._open) && (t3[o][1].end.offset - t3[o][1].start.offset) % 3 && !((t3[l][1].end.offset - t3[l][1].start.offset + t3[o][1].end.offset - t3[o][1].start.offset) % 3)) continue;
      _ = t3[l][1].end.offset - t3[l][1].start.offset > 1 && t3[o][1].end.offset - t3[o][1].start.offset > 1 ? 2 : 1;
      const S = { ...t3[l][1].end }, E = { ...t3[o][1].start };
      h0(S, -_), h0(E, _), h = { type: _ > 1 ? "strongSequence" : "emphasisSequence", start: S, end: { ...t3[l][1].end } }, m = { type: _ > 1 ? "strongSequence" : "emphasisSequence", start: { ...t3[o][1].start }, end: E }, f = { type: _ > 1 ? "strongText" : "emphasisText", start: { ...t3[l][1].end }, end: { ...t3[o][1].start } }, c = { type: _ > 1 ? "strong" : "emphasis", start: { ...h.start }, end: { ...m.end } }, t3[l][1].end = { ...h.start }, t3[o][1].start = { ...m.end }, v = [], t3[l][1].end.offset - t3[l][1].start.offset && (v = Bi(v, [["enter", t3[l][1], r], ["exit", t3[l][1], r]])), v = Bi(v, [["enter", c, r], ["enter", h, r], ["exit", h, r], ["enter", f, r]]), v = Bi(v, Bm(r.parser.constructs.insideSpan.null, t3.slice(l + 1, o), r)), v = Bi(v, [["exit", f, r], ["enter", m, r], ["exit", m, r], ["exit", c, r]]), t3[o][1].end.offset - t3[o][1].start.offset ? (b = 2, v = Bi(v, [["enter", t3[o][1], r], ["exit", t3[o][1], r]])) : b = 0, vr(t3, l - 1, o - l + 3, v), o = l + v.length - b - 2;
      break;
    }
  }
  for (o = -1; ++o < t3.length; ) t3[o][1].type === "attentionSequence" && (t3[o][1].type = "data");
  return t3;
}
function wA(t3, r) {
  const o = this.parser.constructs.attentionMarkers.null, l = this.previous, c = d0(l);
  let f;
  return h;
  function h(_) {
    return f = _, t3.enter("attentionSequence"), m(_);
  }
  function m(_) {
    if (_ === f) return t3.consume(_), m;
    const v = t3.exit("attentionSequence"), b = d0(_), S = !b || b === 2 && c || o.includes(_), E = !c || c === 2 && b || o.includes(l);
    return v._open = !!(f === 42 ? S : S && (c || !E)), v._close = !!(f === 42 ? E : E && (b || !S)), r(_);
  }
}
function h0(t3, r) {
  t3.column += r, t3.offset += r, t3._bufferIndex += r;
}
const CA = { name: "autolink", tokenize: TA };
function TA(t3, r, o) {
  let l = 0;
  return c;
  function c(C) {
    return t3.enter("autolink"), t3.enter("autolinkMarker"), t3.consume(C), t3.exit("autolinkMarker"), t3.enter("autolinkProtocol"), f;
  }
  function f(C) {
    return pr(C) ? (t3.consume(C), h) : C === 64 ? o(C) : v(C);
  }
  function h(C) {
    return C === 43 || C === 45 || C === 46 || bi(C) ? (l = 1, m(C)) : v(C);
  }
  function m(C) {
    return C === 58 ? (t3.consume(C), l = 0, _) : (C === 43 || C === 45 || C === 46 || bi(C)) && l++ < 32 ? (t3.consume(C), m) : (l = 0, v(C));
  }
  function _(C) {
    return C === 62 ? (t3.exit("autolinkProtocol"), t3.enter("autolinkMarker"), t3.consume(C), t3.exit("autolinkMarker"), t3.exit("autolink"), r) : C === null || C === 32 || C === 60 || Zp(C) ? o(C) : (t3.consume(C), _);
  }
  function v(C) {
    return C === 64 ? (t3.consume(C), b) : dA(C) ? (t3.consume(C), v) : o(C);
  }
  function b(C) {
    return bi(C) ? S(C) : o(C);
  }
  function S(C) {
    return C === 46 ? (t3.consume(C), l = 0, b) : C === 62 ? (t3.exit("autolinkProtocol").type = "autolinkEmail", t3.enter("autolinkMarker"), t3.consume(C), t3.exit("autolinkMarker"), t3.exit("autolink"), r) : E(C);
  }
  function E(C) {
    if ((C === 45 || bi(C)) && l++ < 63) {
      const z = C === 45 ? E : S;
      return t3.consume(C), z;
    }
    return o(C);
  }
}
const Xf = { partial: true, tokenize: EA };
function EA(t3, r, o) {
  return l;
  function l(f) {
    return ye(f) ? Ne(t3, c, "linePrefix")(f) : c(f);
  }
  function c(f) {
    return f === null || Zt(f) ? r(f) : o(f);
  }
}
const px = { continuation: { tokenize: MA }, exit: AA, name: "blockQuote", tokenize: kA };
function kA(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    if (h === 62) {
      const m = l.containerState;
      return m.open || (t3.enter("blockQuote", { _container: true }), m.open = true), t3.enter("blockQuotePrefix"), t3.enter("blockQuoteMarker"), t3.consume(h), t3.exit("blockQuoteMarker"), f;
    }
    return o(h);
  }
  function f(h) {
    return ye(h) ? (t3.enter("blockQuotePrefixWhitespace"), t3.consume(h), t3.exit("blockQuotePrefixWhitespace"), t3.exit("blockQuotePrefix"), r) : (t3.exit("blockQuotePrefix"), r(h));
  }
}
function MA(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    return ye(h) ? Ne(t3, f, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : f(h);
  }
  function f(h) {
    return t3.attempt(px, r, o)(h);
  }
}
function AA(t3) {
  t3.exit("blockQuote");
}
const mx = { name: "characterEscape", tokenize: OA };
function OA(t3, r, o) {
  return l;
  function l(f) {
    return t3.enter("characterEscape"), t3.enter("escapeMarker"), t3.consume(f), t3.exit("escapeMarker"), c;
  }
  function c(f) {
    return pA(f) ? (t3.enter("characterEscapeValue"), t3.consume(f), t3.exit("characterEscapeValue"), t3.exit("characterEscape"), r) : o(f);
  }
}
const gx = { name: "characterReference", tokenize: RA };
function RA(t3, r, o) {
  const l = this;
  let c = 0, f, h;
  return m;
  function m(S) {
    return t3.enter("characterReference"), t3.enter("characterReferenceMarker"), t3.consume(S), t3.exit("characterReferenceMarker"), _;
  }
  function _(S) {
    return S === 35 ? (t3.enter("characterReferenceMarkerNumeric"), t3.consume(S), t3.exit("characterReferenceMarkerNumeric"), v) : (t3.enter("characterReferenceValue"), f = 31, h = bi, b(S));
  }
  function v(S) {
    return S === 88 || S === 120 ? (t3.enter("characterReferenceMarkerHexadecimal"), t3.consume(S), t3.exit("characterReferenceMarkerHexadecimal"), t3.enter("characterReferenceValue"), f = 6, h = hA, b) : (t3.enter("characterReferenceValue"), f = 7, h = $p, b(S));
  }
  function b(S) {
    if (S === 59 && c) {
      const E = t3.exit("characterReferenceValue");
      return h === bi && !Pm(l.sliceSerialize(E)) ? o(S) : (t3.enter("characterReferenceMarker"), t3.consume(S), t3.exit("characterReferenceMarker"), t3.exit("characterReference"), r);
    }
    return h(S) && c++ < f ? (t3.consume(S), b) : o(S);
  }
}
const p0 = { partial: true, tokenize: LA }, m0 = { concrete: true, name: "codeFenced", tokenize: zA };
function zA(t3, r, o) {
  const l = this, c = { partial: true, tokenize: D };
  let f = 0, h = 0, m;
  return _;
  function _(I) {
    return v(I);
  }
  function v(I) {
    const tt = l.events[l.events.length - 1];
    return f = tt && tt[1].type === "linePrefix" ? tt[2].sliceSerialize(tt[1], true).length : 0, m = I, t3.enter("codeFenced"), t3.enter("codeFencedFence"), t3.enter("codeFencedFenceSequence"), b(I);
  }
  function b(I) {
    return I === m ? (h++, t3.consume(I), b) : h < 3 ? o(I) : (t3.exit("codeFencedFenceSequence"), ye(I) ? Ne(t3, S, "whitespace")(I) : S(I));
  }
  function S(I) {
    return I === null || Zt(I) ? (t3.exit("codeFencedFence"), l.interrupt ? r(I) : t3.check(p0, A, U)(I)) : (t3.enter("codeFencedFenceInfo"), t3.enter("chunkString", { contentType: "string" }), E(I));
  }
  function E(I) {
    return I === null || Zt(I) ? (t3.exit("chunkString"), t3.exit("codeFencedFenceInfo"), S(I)) : ye(I) ? (t3.exit("chunkString"), t3.exit("codeFencedFenceInfo"), Ne(t3, C, "whitespace")(I)) : I === 96 && I === m ? o(I) : (t3.consume(I), E);
  }
  function C(I) {
    return I === null || Zt(I) ? S(I) : (t3.enter("codeFencedFenceMeta"), t3.enter("chunkString", { contentType: "string" }), z(I));
  }
  function z(I) {
    return I === null || Zt(I) ? (t3.exit("chunkString"), t3.exit("codeFencedFenceMeta"), S(I)) : I === 96 && I === m ? o(I) : (t3.consume(I), z);
  }
  function A(I) {
    return t3.attempt(c, U, $)(I);
  }
  function $(I) {
    return t3.enter("lineEnding"), t3.consume(I), t3.exit("lineEnding"), N;
  }
  function N(I) {
    return f > 0 && ye(I) ? Ne(t3, G, "linePrefix", f + 1)(I) : G(I);
  }
  function G(I) {
    return I === null || Zt(I) ? t3.check(p0, A, U)(I) : (t3.enter("codeFlowValue"), P(I));
  }
  function P(I) {
    return I === null || Zt(I) ? (t3.exit("codeFlowValue"), G(I)) : (t3.consume(I), P);
  }
  function U(I) {
    return t3.exit("codeFenced"), r(I);
  }
  function D(I, tt, et) {
    let lt = 0;
    return M;
    function M(st) {
      return I.enter("lineEnding"), I.consume(st), I.exit("lineEnding"), q;
    }
    function q(st) {
      return I.enter("codeFencedFence"), ye(st) ? Ne(I, X, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(st) : X(st);
    }
    function X(st) {
      return st === m ? (I.enter("codeFencedFenceSequence"), ft(st)) : et(st);
    }
    function ft(st) {
      return st === m ? (lt++, I.consume(st), ft) : lt >= h ? (I.exit("codeFencedFenceSequence"), ye(st) ? Ne(I, at, "whitespace")(st) : at(st)) : et(st);
    }
    function at(st) {
      return st === null || Zt(st) ? (I.exit("codeFencedFence"), tt(st)) : et(st);
    }
  }
}
function LA(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    return h === null ? o(h) : (t3.enter("lineEnding"), t3.consume(h), t3.exit("lineEnding"), f);
  }
  function f(h) {
    return l.parser.lazy[l.now().line] ? o(h) : r(h);
  }
}
const cp = { name: "codeIndented", tokenize: BA }, PA = { partial: true, tokenize: DA };
function BA(t3, r, o) {
  const l = this;
  return c;
  function c(v) {
    return t3.enter("codeIndented"), Ne(t3, f, "linePrefix", 5)(v);
  }
  function f(v) {
    const b = l.events[l.events.length - 1];
    return b && b[1].type === "linePrefix" && b[2].sliceSerialize(b[1], true).length >= 4 ? h(v) : o(v);
  }
  function h(v) {
    return v === null ? _(v) : Zt(v) ? t3.attempt(PA, h, _)(v) : (t3.enter("codeFlowValue"), m(v));
  }
  function m(v) {
    return v === null || Zt(v) ? (t3.exit("codeFlowValue"), h(v)) : (t3.consume(v), m);
  }
  function _(v) {
    return t3.exit("codeIndented"), r(v);
  }
}
function DA(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    return l.parser.lazy[l.now().line] ? o(h) : Zt(h) ? (t3.enter("lineEnding"), t3.consume(h), t3.exit("lineEnding"), c) : Ne(t3, f, "linePrefix", 5)(h);
  }
  function f(h) {
    const m = l.events[l.events.length - 1];
    return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], true).length >= 4 ? r(h) : Zt(h) ? c(h) : o(h);
  }
}
const NA = { name: "codeText", previous: HA, resolve: IA, tokenize: jA };
function IA(t3) {
  let r = t3.length - 4, o = 3, l, c;
  if ((t3[o][1].type === "lineEnding" || t3[o][1].type === "space") && (t3[r][1].type === "lineEnding" || t3[r][1].type === "space")) {
    for (l = o; ++l < r; ) if (t3[l][1].type === "codeTextData") {
      t3[o][1].type = "codeTextPadding", t3[r][1].type = "codeTextPadding", o += 2, r -= 2;
      break;
    }
  }
  for (l = o - 1, r++; ++l <= r; ) c === void 0 ? l !== r && t3[l][1].type !== "lineEnding" && (c = l) : (l === r || t3[l][1].type === "lineEnding") && (t3[c][1].type = "codeTextData", l !== c + 2 && (t3[c][1].end = t3[l - 1][1].end, t3.splice(c + 2, l - c - 2), r -= l - c - 2, l = c + 2), c = void 0);
  return t3;
}
function HA(t3) {
  return t3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function jA(t3, r, o) {
  let l = 0, c, f;
  return h;
  function h(S) {
    return t3.enter("codeText"), t3.enter("codeTextSequence"), m(S);
  }
  function m(S) {
    return S === 96 ? (t3.consume(S), l++, m) : (t3.exit("codeTextSequence"), _(S));
  }
  function _(S) {
    return S === null ? o(S) : S === 32 ? (t3.enter("space"), t3.consume(S), t3.exit("space"), _) : S === 96 ? (f = t3.enter("codeTextSequence"), c = 0, b(S)) : Zt(S) ? (t3.enter("lineEnding"), t3.consume(S), t3.exit("lineEnding"), _) : (t3.enter("codeTextData"), v(S));
  }
  function v(S) {
    return S === null || S === 32 || S === 96 || Zt(S) ? (t3.exit("codeTextData"), _(S)) : (t3.consume(S), v);
  }
  function b(S) {
    return S === 96 ? (t3.consume(S), c++, b) : c === l ? (t3.exit("codeTextSequence"), t3.exit("codeText"), r(S)) : (f.type = "codeTextData", v(S));
  }
}
class UA {
  constructor(r) {
    this.left = r ? [...r] : [], this.right = [];
  }
  get(r) {
    if (r < 0 || r >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + r + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return r < this.left.length ? this.left[r] : this.right[this.right.length - r + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(r, o) {
    const l = o ?? Number.POSITIVE_INFINITY;
    return l < this.left.length ? this.left.slice(r, l) : r > this.left.length ? this.right.slice(this.right.length - l + this.left.length, this.right.length - r + this.left.length).reverse() : this.left.slice(r).concat(this.right.slice(this.right.length - l + this.left.length).reverse());
  }
  splice(r, o, l) {
    const c = o || 0;
    this.setCursor(Math.trunc(r));
    const f = this.right.splice(this.right.length - c, Number.POSITIVE_INFINITY);
    return l && Ws(this.left, l), f.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(r) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
  }
  pushMany(r) {
    this.setCursor(Number.POSITIVE_INFINITY), Ws(this.left, r);
  }
  unshift(r) {
    this.setCursor(0), this.right.push(r);
  }
  unshiftMany(r) {
    this.setCursor(0), Ws(this.right, r.reverse());
  }
  setCursor(r) {
    if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0)) if (r < this.left.length) {
      const o = this.left.splice(r, Number.POSITIVE_INFINITY);
      Ws(this.right, o.reverse());
    } else {
      const o = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
      Ws(this.left, o.reverse());
    }
  }
}
function Ws(t3, r) {
  let o = 0;
  if (r.length < 1e4) t3.push(...r);
  else for (; o < r.length; ) t3.push(...r.slice(o, o + 1e4)), o += 1e4;
}
function yx(t3) {
  const r = {};
  let o = -1, l, c, f, h, m, _, v;
  const b = new UA(t3);
  for (; ++o < b.length; ) {
    for (; o in r; ) o = r[o];
    if (l = b.get(o), o && l[1].type === "chunkFlow" && b.get(o - 1)[1].type === "listItemPrefix" && (_ = l[1]._tokenizer.events, f = 0, f < _.length && _[f][1].type === "lineEndingBlank" && (f += 2), f < _.length && _[f][1].type === "content")) for (; ++f < _.length && _[f][1].type !== "content"; ) _[f][1].type === "chunkText" && (_[f][1]._isInFirstContentOfListItem = true, f++);
    if (l[0] === "enter") l[1].contentType && (Object.assign(r, ZA(b, o)), o = r[o], v = true);
    else if (l[1]._container) {
      for (f = o, c = void 0; f--; ) if (h = b.get(f), h[1].type === "lineEnding" || h[1].type === "lineEndingBlank") h[0] === "enter" && (c && (b.get(c)[1].type = "lineEndingBlank"), h[1].type = "lineEnding", c = f);
      else if (!(h[1].type === "linePrefix" || h[1].type === "listItemIndent")) break;
      c && (l[1].end = { ...b.get(c)[1].start }, m = b.slice(c, o), m.unshift(l), b.splice(c, o - c + 1, m));
    }
  }
  return vr(t3, 0, Number.POSITIVE_INFINITY, b.slice(0)), !v;
}
function ZA(t3, r) {
  const o = t3.get(r)[1], l = t3.get(r)[2];
  let c = r - 1;
  const f = [];
  let h = o._tokenizer;
  h || (h = l.parser[o.contentType](o.start), o._contentTypeTextTrailing && (h._contentTypeTextTrailing = true));
  const m = h.events, _ = [], v = {};
  let b, S, E = -1, C = o, z = 0, A = 0;
  const $ = [A];
  for (; C; ) {
    for (; t3.get(++c)[1] !== C; ) ;
    f.push(c), C._tokenizer || (b = l.sliceStream(C), C.next || b.push(null), S && h.defineSkip(C.start), C._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = true), h.write(b), C._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), S = C, C = C.next;
  }
  for (C = o; ++E < m.length; ) m[E][0] === "exit" && m[E - 1][0] === "enter" && m[E][1].type === m[E - 1][1].type && m[E][1].start.line !== m[E][1].end.line && (A = E + 1, $.push(A), C._tokenizer = void 0, C.previous = void 0, C = C.next);
  for (h.events = [], C ? (C._tokenizer = void 0, C.previous = void 0) : $.pop(), E = $.length; E--; ) {
    const N = m.slice($[E], $[E + 1]), G = f.pop();
    _.push([G, G + N.length - 1]), t3.splice(G, 2, N);
  }
  for (_.reverse(), E = -1; ++E < _.length; ) v[z + _[E][0]] = z + _[E][1], z += _[E][1] - _[E][0] - 1;
  return v;
}
const $A = { resolve: VA, tokenize: FA }, qA = { partial: true, tokenize: GA };
function VA(t3) {
  return yx(t3), t3;
}
function FA(t3, r) {
  let o;
  return l;
  function l(m) {
    return t3.enter("content"), o = t3.enter("chunkContent", { contentType: "content" }), c(m);
  }
  function c(m) {
    return m === null ? f(m) : Zt(m) ? t3.check(qA, h, f)(m) : (t3.consume(m), c);
  }
  function f(m) {
    return t3.exit("chunkContent"), t3.exit("content"), r(m);
  }
  function h(m) {
    return t3.consume(m), t3.exit("chunkContent"), o.next = t3.enter("chunkContent", { contentType: "content", previous: o }), o = o.next, c;
  }
}
function GA(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    return t3.exit("chunkContent"), t3.enter("lineEnding"), t3.consume(h), t3.exit("lineEnding"), Ne(t3, f, "linePrefix");
  }
  function f(h) {
    if (h === null || Zt(h)) return o(h);
    const m = l.events[l.events.length - 1];
    return !l.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], true).length >= 4 ? r(h) : t3.interrupt(l.parser.constructs.flow, o, r)(h);
  }
}
function vx(t3, r, o, l, c, f, h, m, _) {
  const v = _ || Number.POSITIVE_INFINITY;
  let b = 0;
  return S;
  function S(N) {
    return N === 60 ? (t3.enter(l), t3.enter(c), t3.enter(f), t3.consume(N), t3.exit(f), E) : N === null || N === 32 || N === 41 || Zp(N) ? o(N) : (t3.enter(l), t3.enter(h), t3.enter(m), t3.enter("chunkString", { contentType: "string" }), A(N));
  }
  function E(N) {
    return N === 62 ? (t3.enter(f), t3.consume(N), t3.exit(f), t3.exit(c), t3.exit(l), r) : (t3.enter(m), t3.enter("chunkString", { contentType: "string" }), C(N));
  }
  function C(N) {
    return N === 62 ? (t3.exit("chunkString"), t3.exit(m), E(N)) : N === null || N === 60 || Zt(N) ? o(N) : (t3.consume(N), N === 92 ? z : C);
  }
  function z(N) {
    return N === 60 || N === 62 || N === 92 ? (t3.consume(N), C) : C(N);
  }
  function A(N) {
    return !b && (N === null || N === 41 || ii(N)) ? (t3.exit("chunkString"), t3.exit(m), t3.exit(h), t3.exit(l), r(N)) : b < v && N === 40 ? (t3.consume(N), b++, A) : N === 41 ? (t3.consume(N), b--, A) : N === null || N === 32 || N === 40 || Zp(N) ? o(N) : (t3.consume(N), N === 92 ? $ : A);
  }
  function $(N) {
    return N === 40 || N === 41 || N === 92 ? (t3.consume(N), A) : A(N);
  }
}
function _x(t3, r, o, l, c, f) {
  const h = this;
  let m = 0, _;
  return v;
  function v(C) {
    return t3.enter(l), t3.enter(c), t3.consume(C), t3.exit(c), t3.enter(f), b;
  }
  function b(C) {
    return m > 999 || C === null || C === 91 || C === 93 && !_ || C === 94 && !m && "_hiddenFootnoteSupport" in h.parser.constructs ? o(C) : C === 93 ? (t3.exit(f), t3.enter(c), t3.consume(C), t3.exit(c), t3.exit(l), r) : Zt(C) ? (t3.enter("lineEnding"), t3.consume(C), t3.exit("lineEnding"), b) : (t3.enter("chunkString", { contentType: "string" }), S(C));
  }
  function S(C) {
    return C === null || C === 91 || C === 93 || Zt(C) || m++ > 999 ? (t3.exit("chunkString"), b(C)) : (t3.consume(C), _ || (_ = !ye(C)), C === 92 ? E : S);
  }
  function E(C) {
    return C === 91 || C === 92 || C === 93 ? (t3.consume(C), m++, S) : S(C);
  }
}
function bx(t3, r, o, l, c, f) {
  let h;
  return m;
  function m(E) {
    return E === 34 || E === 39 || E === 40 ? (t3.enter(l), t3.enter(c), t3.consume(E), t3.exit(c), h = E === 40 ? 41 : E, _) : o(E);
  }
  function _(E) {
    return E === h ? (t3.enter(c), t3.consume(E), t3.exit(c), t3.exit(l), r) : (t3.enter(f), v(E));
  }
  function v(E) {
    return E === h ? (t3.exit(f), _(h)) : E === null ? o(E) : Zt(E) ? (t3.enter("lineEnding"), t3.consume(E), t3.exit("lineEnding"), Ne(t3, v, "linePrefix")) : (t3.enter("chunkString", { contentType: "string" }), b(E));
  }
  function b(E) {
    return E === h || E === null || Zt(E) ? (t3.exit("chunkString"), v(E)) : (t3.consume(E), E === 92 ? S : b);
  }
  function S(E) {
    return E === h || E === 92 ? (t3.consume(E), b) : b(E);
  }
}
function lu(t3, r) {
  let o;
  return l;
  function l(c) {
    return Zt(c) ? (t3.enter("lineEnding"), t3.consume(c), t3.exit("lineEnding"), o = true, l) : ye(c) ? Ne(t3, l, o ? "linePrefix" : "lineSuffix")(c) : r(c);
  }
}
const YA = { name: "definition", tokenize: KA }, XA = { partial: true, tokenize: QA };
function KA(t3, r, o) {
  const l = this;
  let c;
  return f;
  function f(C) {
    return t3.enter("definition"), h(C);
  }
  function h(C) {
    return _x.call(l, t3, m, o, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(C);
  }
  function m(C) {
    return c = Bl(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)), C === 58 ? (t3.enter("definitionMarker"), t3.consume(C), t3.exit("definitionMarker"), _) : o(C);
  }
  function _(C) {
    return ii(C) ? lu(t3, v)(C) : v(C);
  }
  function v(C) {
    return vx(t3, b, o, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(C);
  }
  function b(C) {
    return t3.attempt(XA, S, S)(C);
  }
  function S(C) {
    return ye(C) ? Ne(t3, E, "whitespace")(C) : E(C);
  }
  function E(C) {
    return C === null || Zt(C) ? (t3.exit("definition"), l.parser.defined.push(c), r(C)) : o(C);
  }
}
function QA(t3, r, o) {
  return l;
  function l(m) {
    return ii(m) ? lu(t3, c)(m) : o(m);
  }
  function c(m) {
    return bx(t3, f, o, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(m);
  }
  function f(m) {
    return ye(m) ? Ne(t3, h, "whitespace")(m) : h(m);
  }
  function h(m) {
    return m === null || Zt(m) ? r(m) : o(m);
  }
}
const WA = { name: "hardBreakEscape", tokenize: JA };
function JA(t3, r, o) {
  return l;
  function l(f) {
    return t3.enter("hardBreakEscape"), t3.consume(f), c;
  }
  function c(f) {
    return Zt(f) ? (t3.exit("hardBreakEscape"), r(f)) : o(f);
  }
}
const tO = { name: "headingAtx", resolve: eO, tokenize: nO };
function eO(t3, r) {
  let o = t3.length - 2, l = 3, c, f;
  return t3[l][1].type === "whitespace" && (l += 2), o - 2 > l && t3[o][1].type === "whitespace" && (o -= 2), t3[o][1].type === "atxHeadingSequence" && (l === o - 1 || o - 4 > l && t3[o - 2][1].type === "whitespace") && (o -= l + 1 === o ? 2 : 4), o > l && (c = { type: "atxHeadingText", start: t3[l][1].start, end: t3[o][1].end }, f = { type: "chunkText", start: t3[l][1].start, end: t3[o][1].end, contentType: "text" }, vr(t3, l, o - l + 1, [["enter", c, r], ["enter", f, r], ["exit", f, r], ["exit", c, r]])), t3;
}
function nO(t3, r, o) {
  let l = 0;
  return c;
  function c(b) {
    return t3.enter("atxHeading"), f(b);
  }
  function f(b) {
    return t3.enter("atxHeadingSequence"), h(b);
  }
  function h(b) {
    return b === 35 && l++ < 6 ? (t3.consume(b), h) : b === null || ii(b) ? (t3.exit("atxHeadingSequence"), m(b)) : o(b);
  }
  function m(b) {
    return b === 35 ? (t3.enter("atxHeadingSequence"), _(b)) : b === null || Zt(b) ? (t3.exit("atxHeading"), r(b)) : ye(b) ? Ne(t3, m, "whitespace")(b) : (t3.enter("atxHeadingText"), v(b));
  }
  function _(b) {
    return b === 35 ? (t3.consume(b), _) : (t3.exit("atxHeadingSequence"), m(b));
  }
  function v(b) {
    return b === null || b === 35 || ii(b) ? (t3.exit("atxHeadingText"), m(b)) : (t3.consume(b), v);
  }
}
const iO = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], g0 = ["pre", "script", "style", "textarea"], rO = { concrete: true, name: "htmlFlow", resolveTo: lO, tokenize: sO }, oO = { partial: true, tokenize: cO }, aO = { partial: true, tokenize: uO };
function lO(t3) {
  let r = t3.length;
  for (; r-- && !(t3[r][0] === "enter" && t3[r][1].type === "htmlFlow"); ) ;
  return r > 1 && t3[r - 2][1].type === "linePrefix" && (t3[r][1].start = t3[r - 2][1].start, t3[r + 1][1].start = t3[r - 2][1].start, t3.splice(r - 2, 2)), t3;
}
function sO(t3, r, o) {
  const l = this;
  let c, f, h, m, _;
  return v;
  function v(R) {
    return b(R);
  }
  function b(R) {
    return t3.enter("htmlFlow"), t3.enter("htmlFlowData"), t3.consume(R), S;
  }
  function S(R) {
    return R === 33 ? (t3.consume(R), E) : R === 47 ? (t3.consume(R), f = true, A) : R === 63 ? (t3.consume(R), c = 3, l.interrupt ? r : w) : pr(R) ? (t3.consume(R), h = String.fromCharCode(R), $) : o(R);
  }
  function E(R) {
    return R === 45 ? (t3.consume(R), c = 2, C) : R === 91 ? (t3.consume(R), c = 5, m = 0, z) : pr(R) ? (t3.consume(R), c = 4, l.interrupt ? r : w) : o(R);
  }
  function C(R) {
    return R === 45 ? (t3.consume(R), l.interrupt ? r : w) : o(R);
  }
  function z(R) {
    const bt = "CDATA[";
    return R === bt.charCodeAt(m++) ? (t3.consume(R), m === bt.length ? l.interrupt ? r : X : z) : o(R);
  }
  function A(R) {
    return pr(R) ? (t3.consume(R), h = String.fromCharCode(R), $) : o(R);
  }
  function $(R) {
    if (R === null || R === 47 || R === 62 || ii(R)) {
      const bt = R === 47, wt = h.toLowerCase();
      return !bt && !f && g0.includes(wt) ? (c = 1, l.interrupt ? r(R) : X(R)) : iO.includes(h.toLowerCase()) ? (c = 6, bt ? (t3.consume(R), N) : l.interrupt ? r(R) : X(R)) : (c = 7, l.interrupt && !l.parser.lazy[l.now().line] ? o(R) : f ? G(R) : P(R));
    }
    return R === 45 || bi(R) ? (t3.consume(R), h += String.fromCharCode(R), $) : o(R);
  }
  function N(R) {
    return R === 62 ? (t3.consume(R), l.interrupt ? r : X) : o(R);
  }
  function G(R) {
    return ye(R) ? (t3.consume(R), G) : M(R);
  }
  function P(R) {
    return R === 47 ? (t3.consume(R), M) : R === 58 || R === 95 || pr(R) ? (t3.consume(R), U) : ye(R) ? (t3.consume(R), P) : M(R);
  }
  function U(R) {
    return R === 45 || R === 46 || R === 58 || R === 95 || bi(R) ? (t3.consume(R), U) : D(R);
  }
  function D(R) {
    return R === 61 ? (t3.consume(R), I) : ye(R) ? (t3.consume(R), D) : P(R);
  }
  function I(R) {
    return R === null || R === 60 || R === 61 || R === 62 || R === 96 ? o(R) : R === 34 || R === 39 ? (t3.consume(R), _ = R, tt) : ye(R) ? (t3.consume(R), I) : et(R);
  }
  function tt(R) {
    return R === _ ? (t3.consume(R), _ = null, lt) : R === null || Zt(R) ? o(R) : (t3.consume(R), tt);
  }
  function et(R) {
    return R === null || R === 34 || R === 39 || R === 47 || R === 60 || R === 61 || R === 62 || R === 96 || ii(R) ? D(R) : (t3.consume(R), et);
  }
  function lt(R) {
    return R === 47 || R === 62 || ye(R) ? P(R) : o(R);
  }
  function M(R) {
    return R === 62 ? (t3.consume(R), q) : o(R);
  }
  function q(R) {
    return R === null || Zt(R) ? X(R) : ye(R) ? (t3.consume(R), q) : o(R);
  }
  function X(R) {
    return R === 45 && c === 2 ? (t3.consume(R), Z) : R === 60 && c === 1 ? (t3.consume(R), ct) : R === 62 && c === 4 ? (t3.consume(R), W) : R === 63 && c === 3 ? (t3.consume(R), w) : R === 93 && c === 5 ? (t3.consume(R), gt) : Zt(R) && (c === 6 || c === 7) ? (t3.exit("htmlFlowData"), t3.check(oO, pt, ft)(R)) : R === null || Zt(R) ? (t3.exit("htmlFlowData"), ft(R)) : (t3.consume(R), X);
  }
  function ft(R) {
    return t3.check(aO, at, pt)(R);
  }
  function at(R) {
    return t3.enter("lineEnding"), t3.consume(R), t3.exit("lineEnding"), st;
  }
  function st(R) {
    return R === null || Zt(R) ? ft(R) : (t3.enter("htmlFlowData"), X(R));
  }
  function Z(R) {
    return R === 45 ? (t3.consume(R), w) : X(R);
  }
  function ct(R) {
    return R === 47 ? (t3.consume(R), h = "", ut) : X(R);
  }
  function ut(R) {
    if (R === 62) {
      const bt = h.toLowerCase();
      return g0.includes(bt) ? (t3.consume(R), W) : X(R);
    }
    return pr(R) && h.length < 8 ? (t3.consume(R), h += String.fromCharCode(R), ut) : X(R);
  }
  function gt(R) {
    return R === 93 ? (t3.consume(R), w) : X(R);
  }
  function w(R) {
    return R === 62 ? (t3.consume(R), W) : R === 45 && c === 2 ? (t3.consume(R), w) : X(R);
  }
  function W(R) {
    return R === null || Zt(R) ? (t3.exit("htmlFlowData"), pt(R)) : (t3.consume(R), W);
  }
  function pt(R) {
    return t3.exit("htmlFlow"), r(R);
  }
}
function uO(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    return Zt(h) ? (t3.enter("lineEnding"), t3.consume(h), t3.exit("lineEnding"), f) : o(h);
  }
  function f(h) {
    return l.parser.lazy[l.now().line] ? o(h) : r(h);
  }
}
function cO(t3, r, o) {
  return l;
  function l(c) {
    return t3.enter("lineEnding"), t3.consume(c), t3.exit("lineEnding"), t3.attempt(Xf, r, o);
  }
}
const fO = { name: "htmlText", tokenize: dO };
function dO(t3, r, o) {
  const l = this;
  let c, f, h;
  return m;
  function m(w) {
    return t3.enter("htmlText"), t3.enter("htmlTextData"), t3.consume(w), _;
  }
  function _(w) {
    return w === 33 ? (t3.consume(w), v) : w === 47 ? (t3.consume(w), D) : w === 63 ? (t3.consume(w), P) : pr(w) ? (t3.consume(w), et) : o(w);
  }
  function v(w) {
    return w === 45 ? (t3.consume(w), b) : w === 91 ? (t3.consume(w), f = 0, z) : pr(w) ? (t3.consume(w), G) : o(w);
  }
  function b(w) {
    return w === 45 ? (t3.consume(w), C) : o(w);
  }
  function S(w) {
    return w === null ? o(w) : w === 45 ? (t3.consume(w), E) : Zt(w) ? (h = S, ct(w)) : (t3.consume(w), S);
  }
  function E(w) {
    return w === 45 ? (t3.consume(w), C) : S(w);
  }
  function C(w) {
    return w === 62 ? Z(w) : w === 45 ? E(w) : S(w);
  }
  function z(w) {
    const W = "CDATA[";
    return w === W.charCodeAt(f++) ? (t3.consume(w), f === W.length ? A : z) : o(w);
  }
  function A(w) {
    return w === null ? o(w) : w === 93 ? (t3.consume(w), $) : Zt(w) ? (h = A, ct(w)) : (t3.consume(w), A);
  }
  function $(w) {
    return w === 93 ? (t3.consume(w), N) : A(w);
  }
  function N(w) {
    return w === 62 ? Z(w) : w === 93 ? (t3.consume(w), N) : A(w);
  }
  function G(w) {
    return w === null || w === 62 ? Z(w) : Zt(w) ? (h = G, ct(w)) : (t3.consume(w), G);
  }
  function P(w) {
    return w === null ? o(w) : w === 63 ? (t3.consume(w), U) : Zt(w) ? (h = P, ct(w)) : (t3.consume(w), P);
  }
  function U(w) {
    return w === 62 ? Z(w) : P(w);
  }
  function D(w) {
    return pr(w) ? (t3.consume(w), I) : o(w);
  }
  function I(w) {
    return w === 45 || bi(w) ? (t3.consume(w), I) : tt(w);
  }
  function tt(w) {
    return Zt(w) ? (h = tt, ct(w)) : ye(w) ? (t3.consume(w), tt) : Z(w);
  }
  function et(w) {
    return w === 45 || bi(w) ? (t3.consume(w), et) : w === 47 || w === 62 || ii(w) ? lt(w) : o(w);
  }
  function lt(w) {
    return w === 47 ? (t3.consume(w), Z) : w === 58 || w === 95 || pr(w) ? (t3.consume(w), M) : Zt(w) ? (h = lt, ct(w)) : ye(w) ? (t3.consume(w), lt) : Z(w);
  }
  function M(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || bi(w) ? (t3.consume(w), M) : q(w);
  }
  function q(w) {
    return w === 61 ? (t3.consume(w), X) : Zt(w) ? (h = q, ct(w)) : ye(w) ? (t3.consume(w), q) : lt(w);
  }
  function X(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? o(w) : w === 34 || w === 39 ? (t3.consume(w), c = w, ft) : Zt(w) ? (h = X, ct(w)) : ye(w) ? (t3.consume(w), X) : (t3.consume(w), at);
  }
  function ft(w) {
    return w === c ? (t3.consume(w), c = void 0, st) : w === null ? o(w) : Zt(w) ? (h = ft, ct(w)) : (t3.consume(w), ft);
  }
  function at(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? o(w) : w === 47 || w === 62 || ii(w) ? lt(w) : (t3.consume(w), at);
  }
  function st(w) {
    return w === 47 || w === 62 || ii(w) ? lt(w) : o(w);
  }
  function Z(w) {
    return w === 62 ? (t3.consume(w), t3.exit("htmlTextData"), t3.exit("htmlText"), r) : o(w);
  }
  function ct(w) {
    return t3.exit("htmlTextData"), t3.enter("lineEnding"), t3.consume(w), t3.exit("lineEnding"), ut;
  }
  function ut(w) {
    return ye(w) ? Ne(t3, gt, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : gt(w);
  }
  function gt(w) {
    return t3.enter("htmlTextData"), h(w);
  }
}
const Dm = { name: "labelEnd", resolveAll: gO, resolveTo: yO, tokenize: vO }, hO = { tokenize: _O }, pO = { tokenize: bO }, mO = { tokenize: xO };
function gO(t3) {
  let r = -1;
  const o = [];
  for (; ++r < t3.length; ) {
    const l = t3[r][1];
    if (o.push(t3[r]), l.type === "labelImage" || l.type === "labelLink" || l.type === "labelEnd") {
      const c = l.type === "labelImage" ? 4 : 2;
      l.type = "data", r += c;
    }
  }
  return t3.length !== o.length && vr(t3, 0, t3.length, o), t3;
}
function yO(t3, r) {
  let o = t3.length, l = 0, c, f, h, m;
  for (; o--; ) if (c = t3[o][1], f) {
    if (c.type === "link" || c.type === "labelLink" && c._inactive) break;
    t3[o][0] === "enter" && c.type === "labelLink" && (c._inactive = true);
  } else if (h) {
    if (t3[o][0] === "enter" && (c.type === "labelImage" || c.type === "labelLink") && !c._balanced && (f = o, c.type !== "labelLink")) {
      l = 2;
      break;
    }
  } else c.type === "labelEnd" && (h = o);
  const _ = { type: t3[f][1].type === "labelLink" ? "link" : "image", start: { ...t3[f][1].start }, end: { ...t3[t3.length - 1][1].end } }, v = { type: "label", start: { ...t3[f][1].start }, end: { ...t3[h][1].end } }, b = { type: "labelText", start: { ...t3[f + l + 2][1].end }, end: { ...t3[h - 2][1].start } };
  return m = [["enter", _, r], ["enter", v, r]], m = Bi(m, t3.slice(f + 1, f + l + 3)), m = Bi(m, [["enter", b, r]]), m = Bi(m, Bm(r.parser.constructs.insideSpan.null, t3.slice(f + l + 4, h - 3), r)), m = Bi(m, [["exit", b, r], t3[h - 2], t3[h - 1], ["exit", v, r]]), m = Bi(m, t3.slice(h + 1)), m = Bi(m, [["exit", _, r]]), vr(t3, f, t3.length, m), t3;
}
function vO(t3, r, o) {
  const l = this;
  let c = l.events.length, f, h;
  for (; c--; ) if ((l.events[c][1].type === "labelImage" || l.events[c][1].type === "labelLink") && !l.events[c][1]._balanced) {
    f = l.events[c][1];
    break;
  }
  return m;
  function m(E) {
    return f ? f._inactive ? S(E) : (h = l.parser.defined.includes(Bl(l.sliceSerialize({ start: f.end, end: l.now() }))), t3.enter("labelEnd"), t3.enter("labelMarker"), t3.consume(E), t3.exit("labelMarker"), t3.exit("labelEnd"), _) : o(E);
  }
  function _(E) {
    return E === 40 ? t3.attempt(hO, b, h ? b : S)(E) : E === 91 ? t3.attempt(pO, b, h ? v : S)(E) : h ? b(E) : S(E);
  }
  function v(E) {
    return t3.attempt(mO, b, S)(E);
  }
  function b(E) {
    return r(E);
  }
  function S(E) {
    return f._balanced = true, o(E);
  }
}
function _O(t3, r, o) {
  return l;
  function l(S) {
    return t3.enter("resource"), t3.enter("resourceMarker"), t3.consume(S), t3.exit("resourceMarker"), c;
  }
  function c(S) {
    return ii(S) ? lu(t3, f)(S) : f(S);
  }
  function f(S) {
    return S === 41 ? b(S) : vx(t3, h, m, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(S);
  }
  function h(S) {
    return ii(S) ? lu(t3, _)(S) : b(S);
  }
  function m(S) {
    return o(S);
  }
  function _(S) {
    return S === 34 || S === 39 || S === 40 ? bx(t3, v, o, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(S) : b(S);
  }
  function v(S) {
    return ii(S) ? lu(t3, b)(S) : b(S);
  }
  function b(S) {
    return S === 41 ? (t3.enter("resourceMarker"), t3.consume(S), t3.exit("resourceMarker"), t3.exit("resource"), r) : o(S);
  }
}
function bO(t3, r, o) {
  const l = this;
  return c;
  function c(m) {
    return _x.call(l, t3, f, h, "reference", "referenceMarker", "referenceString")(m);
  }
  function f(m) {
    return l.parser.defined.includes(Bl(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? r(m) : o(m);
  }
  function h(m) {
    return o(m);
  }
}
function xO(t3, r, o) {
  return l;
  function l(f) {
    return t3.enter("reference"), t3.enter("referenceMarker"), t3.consume(f), t3.exit("referenceMarker"), c;
  }
  function c(f) {
    return f === 93 ? (t3.enter("referenceMarker"), t3.consume(f), t3.exit("referenceMarker"), t3.exit("reference"), r) : o(f);
  }
}
const SO = { name: "labelStartImage", resolveAll: Dm.resolveAll, tokenize: wO };
function wO(t3, r, o) {
  const l = this;
  return c;
  function c(m) {
    return t3.enter("labelImage"), t3.enter("labelImageMarker"), t3.consume(m), t3.exit("labelImageMarker"), f;
  }
  function f(m) {
    return m === 91 ? (t3.enter("labelMarker"), t3.consume(m), t3.exit("labelMarker"), t3.exit("labelImage"), h) : o(m);
  }
  function h(m) {
    return m === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? o(m) : r(m);
  }
}
const CO = { name: "labelStartLink", resolveAll: Dm.resolveAll, tokenize: TO };
function TO(t3, r, o) {
  const l = this;
  return c;
  function c(h) {
    return t3.enter("labelLink"), t3.enter("labelMarker"), t3.consume(h), t3.exit("labelMarker"), t3.exit("labelLink"), f;
  }
  function f(h) {
    return h === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? o(h) : r(h);
  }
}
const fp = { name: "lineEnding", tokenize: EO };
function EO(t3, r) {
  return o;
  function o(l) {
    return t3.enter("lineEnding"), t3.consume(l), t3.exit("lineEnding"), Ne(t3, r, "linePrefix");
  }
}
const hf = { name: "thematicBreak", tokenize: kO };
function kO(t3, r, o) {
  let l = 0, c;
  return f;
  function f(v) {
    return t3.enter("thematicBreak"), h(v);
  }
  function h(v) {
    return c = v, m(v);
  }
  function m(v) {
    return v === c ? (t3.enter("thematicBreakSequence"), _(v)) : l >= 3 && (v === null || Zt(v)) ? (t3.exit("thematicBreak"), r(v)) : o(v);
  }
  function _(v) {
    return v === c ? (t3.consume(v), l++, _) : (t3.exit("thematicBreakSequence"), ye(v) ? Ne(t3, m, "whitespace")(v) : m(v));
  }
}
const ei = { continuation: { tokenize: RO }, exit: LO, name: "list", tokenize: OO }, MO = { partial: true, tokenize: PO }, AO = { partial: true, tokenize: zO };
function OO(t3, r, o) {
  const l = this, c = l.events[l.events.length - 1];
  let f = c && c[1].type === "linePrefix" ? c[2].sliceSerialize(c[1], true).length : 0, h = 0;
  return m;
  function m(C) {
    const z = l.containerState.type || (C === 42 || C === 43 || C === 45 ? "listUnordered" : "listOrdered");
    if (z === "listUnordered" ? !l.containerState.marker || C === l.containerState.marker : $p(C)) {
      if (l.containerState.type || (l.containerState.type = z, t3.enter(z, { _container: true })), z === "listUnordered") return t3.enter("listItemPrefix"), C === 42 || C === 45 ? t3.check(hf, o, v)(C) : v(C);
      if (!l.interrupt || C === 49) return t3.enter("listItemPrefix"), t3.enter("listItemValue"), _(C);
    }
    return o(C);
  }
  function _(C) {
    return $p(C) && ++h < 10 ? (t3.consume(C), _) : (!l.interrupt || h < 2) && (l.containerState.marker ? C === l.containerState.marker : C === 41 || C === 46) ? (t3.exit("listItemValue"), v(C)) : o(C);
  }
  function v(C) {
    return t3.enter("listItemMarker"), t3.consume(C), t3.exit("listItemMarker"), l.containerState.marker = l.containerState.marker || C, t3.check(Xf, l.interrupt ? o : b, t3.attempt(MO, E, S));
  }
  function b(C) {
    return l.containerState.initialBlankLine = true, f++, E(C);
  }
  function S(C) {
    return ye(C) ? (t3.enter("listItemPrefixWhitespace"), t3.consume(C), t3.exit("listItemPrefixWhitespace"), E) : o(C);
  }
  function E(C) {
    return l.containerState.size = f + l.sliceSerialize(t3.exit("listItemPrefix"), true).length, r(C);
  }
}
function RO(t3, r, o) {
  const l = this;
  return l.containerState._closeFlow = void 0, t3.check(Xf, c, f);
  function c(m) {
    return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine, Ne(t3, r, "listItemIndent", l.containerState.size + 1)(m);
  }
  function f(m) {
    return l.containerState.furtherBlankLines || !ye(m) ? (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, h(m)) : (l.containerState.furtherBlankLines = void 0, l.containerState.initialBlankLine = void 0, t3.attempt(AO, r, h)(m));
  }
  function h(m) {
    return l.containerState._closeFlow = true, l.interrupt = void 0, Ne(t3, t3.attempt(ei, r, o), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
  }
}
function zO(t3, r, o) {
  const l = this;
  return Ne(t3, c, "listItemIndent", l.containerState.size + 1);
  function c(f) {
    const h = l.events[l.events.length - 1];
    return h && h[1].type === "listItemIndent" && h[2].sliceSerialize(h[1], true).length === l.containerState.size ? r(f) : o(f);
  }
}
function LO(t3) {
  t3.exit(this.containerState.type);
}
function PO(t3, r, o) {
  const l = this;
  return Ne(t3, c, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function c(f) {
    const h = l.events[l.events.length - 1];
    return !ye(f) && h && h[1].type === "listItemPrefixWhitespace" ? r(f) : o(f);
  }
}
const y0 = { name: "setextUnderline", resolveTo: BO, tokenize: DO };
function BO(t3, r) {
  let o = t3.length, l, c, f;
  for (; o--; ) if (t3[o][0] === "enter") {
    if (t3[o][1].type === "content") {
      l = o;
      break;
    }
    t3[o][1].type === "paragraph" && (c = o);
  } else t3[o][1].type === "content" && t3.splice(o, 1), !f && t3[o][1].type === "definition" && (f = o);
  const h = { type: "setextHeading", start: { ...t3[l][1].start }, end: { ...t3[t3.length - 1][1].end } };
  return t3[c][1].type = "setextHeadingText", f ? (t3.splice(c, 0, ["enter", h, r]), t3.splice(f + 1, 0, ["exit", t3[l][1], r]), t3[l][1].end = { ...t3[f][1].end }) : t3[l][1] = h, t3.push(["exit", h, r]), t3;
}
function DO(t3, r, o) {
  const l = this;
  let c;
  return f;
  function f(v) {
    let b = l.events.length, S;
    for (; b--; ) if (l.events[b][1].type !== "lineEnding" && l.events[b][1].type !== "linePrefix" && l.events[b][1].type !== "content") {
      S = l.events[b][1].type === "paragraph";
      break;
    }
    return !l.parser.lazy[l.now().line] && (l.interrupt || S) ? (t3.enter("setextHeadingLine"), c = v, h(v)) : o(v);
  }
  function h(v) {
    return t3.enter("setextHeadingLineSequence"), m(v);
  }
  function m(v) {
    return v === c ? (t3.consume(v), m) : (t3.exit("setextHeadingLineSequence"), ye(v) ? Ne(t3, _, "lineSuffix")(v) : _(v));
  }
  function _(v) {
    return v === null || Zt(v) ? (t3.exit("setextHeadingLine"), r(v)) : o(v);
  }
}
const NO = { tokenize: IO };
function IO(t3) {
  const r = this, o = t3.attempt(Xf, l, t3.attempt(this.parser.constructs.flowInitial, c, Ne(t3, t3.attempt(this.parser.constructs.flow, c, t3.attempt($A, c)), "linePrefix")));
  return o;
  function l(f) {
    if (f === null) {
      t3.consume(f);
      return;
    }
    return t3.enter("lineEndingBlank"), t3.consume(f), t3.exit("lineEndingBlank"), r.currentConstruct = void 0, o;
  }
  function c(f) {
    if (f === null) {
      t3.consume(f);
      return;
    }
    return t3.enter("lineEnding"), t3.consume(f), t3.exit("lineEnding"), r.currentConstruct = void 0, o;
  }
}
const HO = { resolveAll: Sx() }, jO = xx("string"), UO = xx("text");
function xx(t3) {
  return { resolveAll: Sx(t3 === "text" ? ZO : void 0), tokenize: r };
  function r(o) {
    const l = this, c = this.parser.constructs[t3], f = o.attempt(c, h, m);
    return h;
    function h(b) {
      return v(b) ? f(b) : m(b);
    }
    function m(b) {
      if (b === null) {
        o.consume(b);
        return;
      }
      return o.enter("data"), o.consume(b), _;
    }
    function _(b) {
      return v(b) ? (o.exit("data"), f(b)) : (o.consume(b), _);
    }
    function v(b) {
      if (b === null) return true;
      const S = c[b];
      let E = -1;
      if (S) for (; ++E < S.length; ) {
        const C = S[E];
        if (!C.previous || C.previous.call(l, l.previous)) return true;
      }
      return false;
    }
  }
}
function Sx(t3) {
  return r;
  function r(o, l) {
    let c = -1, f;
    for (; ++c <= o.length; ) f === void 0 ? o[c] && o[c][1].type === "data" && (f = c, c++) : (!o[c] || o[c][1].type !== "data") && (c !== f + 2 && (o[f][1].end = o[c - 1][1].end, o.splice(f + 2, c - f - 2), c = f + 2), f = void 0);
    return t3 ? t3(o, l) : o;
  }
}
function ZO(t3, r) {
  let o = 0;
  for (; ++o <= t3.length; ) if ((o === t3.length || t3[o][1].type === "lineEnding") && t3[o - 1][1].type === "data") {
    const l = t3[o - 1][1], c = r.sliceStream(l);
    let f = c.length, h = -1, m = 0, _;
    for (; f--; ) {
      const v = c[f];
      if (typeof v == "string") {
        for (h = v.length; v.charCodeAt(h - 1) === 32; ) m++, h--;
        if (h) break;
        h = -1;
      } else if (v === -2) _ = true, m++;
      else if (v !== -1) {
        f++;
        break;
      }
    }
    if (r._contentTypeTextTrailing && o === t3.length && (m = 0), m) {
      const v = { type: o === t3.length || _ || m < 2 ? "lineSuffix" : "hardBreakTrailing", start: { _bufferIndex: f ? h : l.start._bufferIndex + h, _index: l.start._index + f, line: l.end.line, column: l.end.column - m, offset: l.end.offset - m }, end: { ...l.end } };
      l.end = { ...v.start }, l.start.offset === l.end.offset ? Object.assign(l, v) : (t3.splice(o, 0, ["enter", v, r], ["exit", v, r]), o += 2);
    }
    o++;
  }
  return t3;
}
const $O = { 42: ei, 43: ei, 45: ei, 48: ei, 49: ei, 50: ei, 51: ei, 52: ei, 53: ei, 54: ei, 55: ei, 56: ei, 57: ei, 62: px }, qO = { 91: YA }, VO = { [-2]: cp, [-1]: cp, 32: cp }, FO = { 35: tO, 42: hf, 45: [y0, hf], 60: rO, 61: y0, 95: hf, 96: m0, 126: m0 }, GO = { 38: gx, 92: mx }, YO = { [-5]: fp, [-4]: fp, [-3]: fp, 33: SO, 38: gx, 42: qp, 60: [CA, fO], 91: CO, 92: [WA, mx], 93: Dm, 95: qp, 96: NA }, XO = { null: [qp, HO] }, KO = { null: [42, 95] }, QO = { null: [] }, WO = Object.freeze(Object.defineProperty({ __proto__: null, attentionMarkers: KO, contentInitial: qO, disable: QO, document: $O, flow: FO, flowInitial: VO, insideSpan: XO, string: GO, text: YO }, Symbol.toStringTag, { value: "Module" }));
function JO(t3, r, o) {
  let l = { _bufferIndex: -1, _index: 0, line: o && o.line || 1, column: o && o.column || 1, offset: o && o.offset || 0 };
  const c = {}, f = [];
  let h = [], m = [];
  const _ = { attempt: tt(D), check: tt(I), consume: G, enter: P, exit: U, interrupt: tt(I, { interrupt: true }) }, v = { code: null, containerState: {}, defineSkip: A, events: [], now: z, parser: t3, previous: null, sliceSerialize: E, sliceStream: C, write: S };
  let b = r.tokenize.call(v, _);
  return r.resolveAll && f.push(r), v;
  function S(q) {
    return h = Bi(h, q), $(), h[h.length - 1] !== null ? [] : (et(r, 0), v.events = Bm(f, v.events, v), v.events);
  }
  function E(q, X) {
    return eR(C(q), X);
  }
  function C(q) {
    return tR(h, q);
  }
  function z() {
    const { _bufferIndex: q, _index: X, line: ft, column: at, offset: st } = l;
    return { _bufferIndex: q, _index: X, line: ft, column: at, offset: st };
  }
  function A(q) {
    c[q.line] = q.column, M();
  }
  function $() {
    let q;
    for (; l._index < h.length; ) {
      const X = h[l._index];
      if (typeof X == "string") for (q = l._index, l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === q && l._bufferIndex < X.length; ) N(X.charCodeAt(l._bufferIndex));
      else N(X);
    }
  }
  function N(q) {
    b = b(q);
  }
  function G(q) {
    Zt(q) ? (l.line++, l.column = 1, l.offset += q === -3 ? 2 : 1, M()) : q !== -1 && (l.column++, l.offset++), l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++, l._bufferIndex === h[l._index].length && (l._bufferIndex = -1, l._index++)), v.previous = q;
  }
  function P(q, X) {
    const ft = X || {};
    return ft.type = q, ft.start = z(), v.events.push(["enter", ft, v]), m.push(ft), ft;
  }
  function U(q) {
    const X = m.pop();
    return X.end = z(), v.events.push(["exit", X, v]), X;
  }
  function D(q, X) {
    et(q, X.from);
  }
  function I(q, X) {
    X.restore();
  }
  function tt(q, X) {
    return ft;
    function ft(at, st, Z) {
      let ct, ut, gt, w;
      return Array.isArray(at) ? pt(at) : "tokenize" in at ? pt([at]) : W(at);
      function W(_t) {
        return Dt;
        function Dt(Lt) {
          const re = Lt !== null && _t[Lt], Bt = Lt !== null && _t.null, Vt = [...Array.isArray(re) ? re : re ? [re] : [], ...Array.isArray(Bt) ? Bt : Bt ? [Bt] : []];
          return pt(Vt)(Lt);
        }
      }
      function pt(_t) {
        return ct = _t, ut = 0, _t.length === 0 ? Z : R(_t[ut]);
      }
      function R(_t) {
        return Dt;
        function Dt(Lt) {
          return w = lt(), gt = _t, _t.partial || (v.currentConstruct = _t), _t.name && v.parser.constructs.disable.null.includes(_t.name) ? wt() : _t.tokenize.call(X ? Object.assign(Object.create(v), X) : v, _, bt, wt)(Lt);
        }
      }
      function bt(_t) {
        return q(gt, w), st;
      }
      function wt(_t) {
        return w.restore(), ++ut < ct.length ? R(ct[ut]) : Z;
      }
    }
  }
  function et(q, X) {
    q.resolveAll && !f.includes(q) && f.push(q), q.resolve && vr(v.events, X, v.events.length - X, q.resolve(v.events.slice(X), v)), q.resolveTo && (v.events = q.resolveTo(v.events, v));
  }
  function lt() {
    const q = z(), X = v.previous, ft = v.currentConstruct, at = v.events.length, st = Array.from(m);
    return { from: at, restore: Z };
    function Z() {
      l = q, v.previous = X, v.currentConstruct = ft, v.events.length = at, m = st, M();
    }
  }
  function M() {
    l.line in c && l.column < 2 && (l.column = c[l.line], l.offset += c[l.line] - 1);
  }
}
function tR(t3, r) {
  const o = r.start._index, l = r.start._bufferIndex, c = r.end._index, f = r.end._bufferIndex;
  let h;
  if (o === c) h = [t3[o].slice(l, f)];
  else {
    if (h = t3.slice(o, c), l > -1) {
      const m = h[0];
      typeof m == "string" ? h[0] = m.slice(l) : h.shift();
    }
    f > 0 && h.push(t3[c].slice(0, f));
  }
  return h;
}
function eR(t3, r) {
  let o = -1;
  const l = [];
  let c;
  for (; ++o < t3.length; ) {
    const f = t3[o];
    let h;
    if (typeof f == "string") h = f;
    else switch (f) {
      case -5: {
        h = "\r";
        break;
      }
      case -4: {
        h = `
`;
        break;
      }
      case -3: {
        h = `\r
`;
        break;
      }
      case -2: {
        h = r ? " " : "	";
        break;
      }
      case -1: {
        if (!r && c) continue;
        h = " ";
        break;
      }
      default:
        h = String.fromCharCode(f);
    }
    c = f === -2, l.push(h);
  }
  return l.join("");
}
function nR(t3) {
  const l = { constructs: uA([WO, ...(t3 || {}).extensions || []]), content: c(yA), defined: [], document: c(_A), flow: c(NO), lazy: {}, string: c(jO), text: c(UO) };
  return l;
  function c(f) {
    return h;
    function h(m) {
      return JO(l, f, m);
    }
  }
}
function iR(t3) {
  for (; !yx(t3); ) ;
  return t3;
}
const v0 = /[\0\t\n\r]/g;
function rR() {
  let t3 = 1, r = "", o = true, l;
  return c;
  function c(f, h, m) {
    const _ = [];
    let v, b, S, E, C;
    for (f = r + (typeof f == "string" ? f.toString() : new TextDecoder(h || void 0).decode(f)), S = 0, r = "", o && (f.charCodeAt(0) === 65279 && S++, o = void 0); S < f.length; ) {
      if (v0.lastIndex = S, v = v0.exec(f), E = v && v.index !== void 0 ? v.index : f.length, C = f.charCodeAt(E), !v) {
        r = f.slice(S);
        break;
      }
      if (C === 10 && S === E && l) _.push(-3), l = void 0;
      else switch (l && (_.push(-5), l = void 0), S < E && (_.push(f.slice(S, E)), t3 += E - S), C) {
        case 0: {
          _.push(65533), t3++;
          break;
        }
        case 9: {
          for (b = Math.ceil(t3 / 4) * 4, _.push(-2); t3++ < b; ) _.push(-1);
          break;
        }
        case 10: {
          _.push(-4), t3 = 1;
          break;
        }
        default:
          l = true, t3 = 1;
      }
      S = E + 1;
    }
    return m && (l && _.push(-5), r && _.push(r), _.push(null)), _;
  }
}
const oR = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function aR(t3) {
  return t3.replace(oR, lR);
}
function lR(t3, r, o) {
  if (r) return r;
  if (o.charCodeAt(0) === 35) {
    const c = o.charCodeAt(1), f = c === 120 || c === 88;
    return hx(o.slice(f ? 2 : 1), f ? 16 : 10);
  }
  return Pm(o) || t3;
}
const wx = {}.hasOwnProperty;
function sR(t3, r, o) {
  return typeof r != "string" && (o = r, r = void 0), uR(o)(iR(nR(o).document().write(rR()(t3, r, true))));
}
function uR(t3) {
  const r = { transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: { autolink: f(Se), autolinkProtocol: lt, autolinkEmail: lt, atxHeading: f(fe), blockQuote: f(Bt), characterEscape: lt, characterReference: lt, codeFenced: f(Vt), codeFencedFenceInfo: h, codeFencedFenceMeta: h, codeIndented: f(Vt, h), codeText: f(Kt, h), codeTextData: lt, data: lt, codeFlowValue: lt, definition: f(Re), definitionDestinationString: h, definitionLabelString: h, definitionTitleString: h, emphasis: f(Ft), hardBreakEscape: f(We), hardBreakTrailing: f(We), htmlFlow: f(se, h), htmlFlowData: lt, htmlText: f(se, h), htmlTextData: lt, image: f(_e), label: h, link: f(Se), listItem: f(de), listItemValue: E, listOrdered: f(ke, S), listUnordered: f(ke), paragraph: f(Ot), reference: R, referenceString: h, resourceDestinationString: h, resourceTitleString: h, setextHeading: f(fe), strong: f(Rn), thematicBreak: f(Un) }, exit: { atxHeading: _(), atxHeadingSequence: D, autolink: _(), autolinkEmail: re, autolinkProtocol: Lt, blockQuote: _(), characterEscapeValue: M, characterReferenceMarkerHexadecimal: wt, characterReferenceMarkerNumeric: wt, characterReferenceValue: _t, characterReference: Dt, codeFenced: _($), codeFencedFence: A, codeFencedFenceInfo: C, codeFencedFenceMeta: z, codeFlowValue: M, codeIndented: _(N), codeText: _(st), codeTextData: M, data: M, definition: _(), definitionDestinationString: U, definitionLabelString: G, definitionTitleString: P, emphasis: _(), hardBreakEscape: _(X), hardBreakTrailing: _(X), htmlFlow: _(ft), htmlFlowData: M, htmlText: _(at), htmlTextData: M, image: _(ct), label: gt, labelText: ut, lineEnding: q, link: _(Z), listItem: _(), listOrdered: _(), listUnordered: _(), paragraph: _(), referenceString: bt, resourceDestinationString: w, resourceTitleString: W, resource: pt, setextHeading: _(et), setextHeadingLineSequence: tt, setextHeadingText: I, strong: _(), thematicBreak: _() } };
  Cx(r, (t3 || {}).mdastExtensions || []);
  const o = {};
  return l;
  function l(rt) {
    let ht = { type: "root", children: [] };
    const Ct = { stack: [ht], tokenStack: [], config: r, enter: m, exit: v, buffer: h, resume: b, data: o }, Et = [];
    let qt = -1;
    for (; ++qt < rt.length; ) if (rt[qt][1].type === "listOrdered" || rt[qt][1].type === "listUnordered") if (rt[qt][0] === "enter") Et.push(qt);
    else {
      const Gt = Et.pop();
      qt = c(rt, Gt, qt);
    }
    for (qt = -1; ++qt < rt.length; ) {
      const Gt = r[rt[qt][0]];
      wx.call(Gt, rt[qt][1].type) && Gt[rt[qt][1].type].call(Object.assign({ sliceSerialize: rt[qt][2].sliceSerialize }, Ct), rt[qt][1]);
    }
    if (Ct.tokenStack.length > 0) {
      const Gt = Ct.tokenStack[Ct.tokenStack.length - 1];
      (Gt[1] || _0).call(Ct, void 0, Gt[0]);
    }
    for (ht.position = { start: Go(rt.length > 0 ? rt[0][1].start : { line: 1, column: 1, offset: 0 }), end: Go(rt.length > 0 ? rt[rt.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, qt = -1; ++qt < r.transforms.length; ) ht = r.transforms[qt](ht) || ht;
    return ht;
  }
  function c(rt, ht, Ct) {
    let Et = ht - 1, qt = -1, Gt = false, mn, qe, At, Xt;
    for (; ++Et <= Ct; ) {
      const ee = rt[Et];
      switch (ee[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ee[0] === "enter" ? qt++ : qt--, Xt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ee[0] === "enter" && (mn && !Xt && !qt && !At && (At = Et), Xt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Xt = void 0;
      }
      if (!qt && ee[0] === "enter" && ee[1].type === "listItemPrefix" || qt === -1 && ee[0] === "exit" && (ee[1].type === "listUnordered" || ee[1].type === "listOrdered")) {
        if (mn) {
          let Ie = Et;
          for (qe = void 0; Ie--; ) {
            const zn = rt[Ie];
            if (zn[1].type === "lineEnding" || zn[1].type === "lineEndingBlank") {
              if (zn[0] === "exit") continue;
              qe && (rt[qe][1].type = "lineEndingBlank", Gt = true), zn[1].type = "lineEnding", qe = Ie;
            } else if (!(zn[1].type === "linePrefix" || zn[1].type === "blockQuotePrefix" || zn[1].type === "blockQuotePrefixWhitespace" || zn[1].type === "blockQuoteMarker" || zn[1].type === "listItemIndent")) break;
          }
          At && (!qe || At < qe) && (mn._spread = true), mn.end = Object.assign({}, qe ? rt[qe][1].start : ee[1].end), rt.splice(qe || Et, 0, ["exit", mn, ee[2]]), Et++, Ct++;
        }
        if (ee[1].type === "listItemPrefix") {
          const Ie = { type: "listItem", _spread: false, start: Object.assign({}, ee[1].start), end: void 0 };
          mn = Ie, rt.splice(Et, 0, ["enter", Ie, ee[2]]), Et++, Ct++, At = void 0, Xt = true;
        }
      }
    }
    return rt[ht][1]._spread = Gt, Ct;
  }
  function f(rt, ht) {
    return Ct;
    function Ct(Et) {
      m.call(this, rt(Et), Et), ht && ht.call(this, Et);
    }
  }
  function h() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function m(rt, ht, Ct) {
    this.stack[this.stack.length - 1].children.push(rt), this.stack.push(rt), this.tokenStack.push([ht, Ct || void 0]), rt.position = { start: Go(ht.start), end: void 0 };
  }
  function _(rt) {
    return ht;
    function ht(Ct) {
      rt && rt.call(this, Ct), v.call(this, Ct);
    }
  }
  function v(rt, ht) {
    const Ct = this.stack.pop(), Et = this.tokenStack.pop();
    if (Et) Et[0].type !== rt.type && (ht ? ht.call(this, rt, Et[0]) : (Et[1] || _0).call(this, rt, Et[0]));
    else throw new Error("Cannot close `" + rt.type + "` (" + au({ start: rt.start, end: rt.end }) + "): it\u2019s not open");
    Ct.position.end = Go(rt.end);
  }
  function b() {
    return lA(this.stack.pop());
  }
  function S() {
    this.data.expectingFirstListItemValue = true;
  }
  function E(rt) {
    if (this.data.expectingFirstListItemValue) {
      const ht = this.stack[this.stack.length - 2];
      ht.start = Number.parseInt(this.sliceSerialize(rt), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function C() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.lang = rt;
  }
  function z() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.meta = rt;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
  }
  function $() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.value = rt.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function N() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.value = rt.replace(/(\r?\n|\r)$/g, "");
  }
  function G(rt) {
    const ht = this.resume(), Ct = this.stack[this.stack.length - 1];
    Ct.label = ht, Ct.identifier = Bl(this.sliceSerialize(rt)).toLowerCase();
  }
  function P() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.title = rt;
  }
  function U() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.url = rt;
  }
  function D(rt) {
    const ht = this.stack[this.stack.length - 1];
    if (!ht.depth) {
      const Ct = this.sliceSerialize(rt).length;
      ht.depth = Ct;
    }
  }
  function I() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function tt(rt) {
    const ht = this.stack[this.stack.length - 1];
    ht.depth = this.sliceSerialize(rt).codePointAt(0) === 61 ? 1 : 2;
  }
  function et() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function lt(rt) {
    const Ct = this.stack[this.stack.length - 1].children;
    let Et = Ct[Ct.length - 1];
    (!Et || Et.type !== "text") && (Et = $e(), Et.position = { start: Go(rt.start), end: void 0 }, Ct.push(Et)), this.stack.push(Et);
  }
  function M(rt) {
    const ht = this.stack.pop();
    ht.value += this.sliceSerialize(rt), ht.position.end = Go(rt.end);
  }
  function q(rt) {
    const ht = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const Ct = ht.children[ht.children.length - 1];
      Ct.position.end = Go(rt.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(ht.type) && (lt.call(this, rt), M.call(this, rt));
  }
  function X() {
    this.data.atHardBreak = true;
  }
  function ft() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.value = rt;
  }
  function at() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.value = rt;
  }
  function st() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.value = rt;
  }
  function Z() {
    const rt = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ht = this.data.referenceType || "shortcut";
      rt.type += "Reference", rt.referenceType = ht, delete rt.url, delete rt.title;
    } else delete rt.identifier, delete rt.label;
    this.data.referenceType = void 0;
  }
  function ct() {
    const rt = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ht = this.data.referenceType || "shortcut";
      rt.type += "Reference", rt.referenceType = ht, delete rt.url, delete rt.title;
    } else delete rt.identifier, delete rt.label;
    this.data.referenceType = void 0;
  }
  function ut(rt) {
    const ht = this.sliceSerialize(rt), Ct = this.stack[this.stack.length - 2];
    Ct.label = aR(ht), Ct.identifier = Bl(ht).toLowerCase();
  }
  function gt() {
    const rt = this.stack[this.stack.length - 1], ht = this.resume(), Ct = this.stack[this.stack.length - 1];
    if (this.data.inReference = true, Ct.type === "link") {
      const Et = rt.children;
      Ct.children = Et;
    } else Ct.alt = ht;
  }
  function w() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.url = rt;
  }
  function W() {
    const rt = this.resume(), ht = this.stack[this.stack.length - 1];
    ht.title = rt;
  }
  function pt() {
    this.data.inReference = void 0;
  }
  function R() {
    this.data.referenceType = "collapsed";
  }
  function bt(rt) {
    const ht = this.resume(), Ct = this.stack[this.stack.length - 1];
    Ct.label = ht, Ct.identifier = Bl(this.sliceSerialize(rt)).toLowerCase(), this.data.referenceType = "full";
  }
  function wt(rt) {
    this.data.characterReferenceType = rt.type;
  }
  function _t(rt) {
    const ht = this.sliceSerialize(rt), Ct = this.data.characterReferenceType;
    let Et;
    Ct ? (Et = hx(ht, Ct === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Et = Pm(ht);
    const qt = this.stack[this.stack.length - 1];
    qt.value += Et;
  }
  function Dt(rt) {
    const ht = this.stack.pop();
    ht.position.end = Go(rt.end);
  }
  function Lt(rt) {
    M.call(this, rt);
    const ht = this.stack[this.stack.length - 1];
    ht.url = this.sliceSerialize(rt);
  }
  function re(rt) {
    M.call(this, rt);
    const ht = this.stack[this.stack.length - 1];
    ht.url = "mailto:" + this.sliceSerialize(rt);
  }
  function Bt() {
    return { type: "blockquote", children: [] };
  }
  function Vt() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function Kt() {
    return { type: "inlineCode", value: "" };
  }
  function Re() {
    return { type: "definition", identifier: "", label: null, title: null, url: "" };
  }
  function Ft() {
    return { type: "emphasis", children: [] };
  }
  function fe() {
    return { type: "heading", depth: 0, children: [] };
  }
  function We() {
    return { type: "break" };
  }
  function se() {
    return { type: "html", value: "" };
  }
  function _e() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Se() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function ke(rt) {
    return { type: "list", ordered: rt.type === "listOrdered", start: null, spread: rt._spread, children: [] };
  }
  function de(rt) {
    return { type: "listItem", spread: rt._spread, checked: null, children: [] };
  }
  function Ot() {
    return { type: "paragraph", children: [] };
  }
  function Rn() {
    return { type: "strong", children: [] };
  }
  function $e() {
    return { type: "text", value: "" };
  }
  function Un() {
    return { type: "thematicBreak" };
  }
}
function Go(t3) {
  return { line: t3.line, column: t3.column, offset: t3.offset };
}
function Cx(t3, r) {
  let o = -1;
  for (; ++o < r.length; ) {
    const l = r[o];
    Array.isArray(l) ? Cx(t3, l) : cR(t3, l);
  }
}
function cR(t3, r) {
  let o;
  for (o in r) if (wx.call(r, o)) switch (o) {
    case "canContainEols": {
      const l = r[o];
      l && t3[o].push(...l);
      break;
    }
    case "transforms": {
      const l = r[o];
      l && t3[o].push(...l);
      break;
    }
    case "enter":
    case "exit": {
      const l = r[o];
      l && Object.assign(t3[o], l);
      break;
    }
  }
}
function _0(t3, r) {
  throw t3 ? new Error("Cannot close `" + t3.type + "` (" + au({ start: t3.start, end: t3.end }) + "): a different token (`" + r.type + "`, " + au({ start: r.start, end: r.end }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + au({ start: r.start, end: r.end }) + ") is still open");
}
function fR(t3) {
  const r = this;
  r.parser = o;
  function o(l) {
    return sR(l, { ...r.data("settings"), ...t3, extensions: r.data("micromarkExtensions") || [], mdastExtensions: r.data("fromMarkdownExtensions") || [] });
  }
}
function dR(t3, r) {
  const o = { type: "element", tagName: "blockquote", properties: {}, children: t3.wrap(t3.all(r), true) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function hR(t3, r) {
  const o = { type: "element", tagName: "br", properties: {}, children: [] };
  return t3.patch(r, o), [t3.applyData(r, o), { type: "text", value: `
` }];
}
function pR(t3, r) {
  const o = r.value ? r.value + `
` : "", l = {};
  r.lang && (l.className = ["language-" + r.lang]);
  let c = { type: "element", tagName: "code", properties: l, children: [{ type: "text", value: o }] };
  return r.meta && (c.data = { meta: r.meta }), t3.patch(r, c), c = t3.applyData(r, c), c = { type: "element", tagName: "pre", properties: {}, children: [c] }, t3.patch(r, c), c;
}
function mR(t3, r) {
  const o = { type: "element", tagName: "del", properties: {}, children: t3.all(r) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function gR(t3, r) {
  const o = { type: "element", tagName: "em", properties: {}, children: t3.all(r) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function yR(t3, r) {
  const o = typeof t3.options.clobberPrefix == "string" ? t3.options.clobberPrefix : "user-content-", l = String(r.identifier).toUpperCase(), c = jl(l.toLowerCase()), f = t3.footnoteOrder.indexOf(l);
  let h, m = t3.footnoteCounts.get(l);
  m === void 0 ? (m = 0, t3.footnoteOrder.push(l), h = t3.footnoteOrder.length) : h = f + 1, m += 1, t3.footnoteCounts.set(l, m);
  const _ = { type: "element", tagName: "a", properties: { href: "#" + o + "fn-" + c, id: o + "fnref-" + c + (m > 1 ? "-" + m : ""), dataFootnoteRef: true, ariaDescribedBy: ["footnote-label"] }, children: [{ type: "text", value: String(h) }] };
  t3.patch(r, _);
  const v = { type: "element", tagName: "sup", properties: {}, children: [_] };
  return t3.patch(r, v), t3.applyData(r, v);
}
function vR(t3, r) {
  const o = { type: "element", tagName: "h" + r.depth, properties: {}, children: t3.all(r) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function _R(t3, r) {
  if (t3.options.allowDangerousHtml) {
    const o = { type: "raw", value: r.value };
    return t3.patch(r, o), t3.applyData(r, o);
  }
}
function Tx(t3, r) {
  const o = r.referenceType;
  let l = "]";
  if (o === "collapsed" ? l += "[]" : o === "full" && (l += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference") return [{ type: "text", value: "![" + r.alt + l }];
  const c = t3.all(r), f = c[0];
  f && f.type === "text" ? f.value = "[" + f.value : c.unshift({ type: "text", value: "[" });
  const h = c[c.length - 1];
  return h && h.type === "text" ? h.value += l : c.push({ type: "text", value: l }), c;
}
function bR(t3, r) {
  const o = String(r.identifier).toUpperCase(), l = t3.definitionById.get(o);
  if (!l) return Tx(t3, r);
  const c = { src: jl(l.url || ""), alt: r.alt };
  l.title !== null && l.title !== void 0 && (c.title = l.title);
  const f = { type: "element", tagName: "img", properties: c, children: [] };
  return t3.patch(r, f), t3.applyData(r, f);
}
function xR(t3, r) {
  const o = { src: jl(r.url) };
  r.alt !== null && r.alt !== void 0 && (o.alt = r.alt), r.title !== null && r.title !== void 0 && (o.title = r.title);
  const l = { type: "element", tagName: "img", properties: o, children: [] };
  return t3.patch(r, l), t3.applyData(r, l);
}
function SR(t3, r) {
  const o = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
  t3.patch(r, o);
  const l = { type: "element", tagName: "code", properties: {}, children: [o] };
  return t3.patch(r, l), t3.applyData(r, l);
}
function wR(t3, r) {
  const o = String(r.identifier).toUpperCase(), l = t3.definitionById.get(o);
  if (!l) return Tx(t3, r);
  const c = { href: jl(l.url || "") };
  l.title !== null && l.title !== void 0 && (c.title = l.title);
  const f = { type: "element", tagName: "a", properties: c, children: t3.all(r) };
  return t3.patch(r, f), t3.applyData(r, f);
}
function CR(t3, r) {
  const o = { href: jl(r.url) };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const l = { type: "element", tagName: "a", properties: o, children: t3.all(r) };
  return t3.patch(r, l), t3.applyData(r, l);
}
function TR(t3, r, o) {
  const l = t3.all(r), c = o ? ER(o) : Ex(r), f = {}, h = [];
  if (typeof r.checked == "boolean") {
    const b = l[0];
    let S;
    b && b.type === "element" && b.tagName === "p" ? S = b : (S = { type: "element", tagName: "p", properties: {}, children: [] }, l.unshift(S)), S.children.length > 0 && S.children.unshift({ type: "text", value: " " }), S.children.unshift({ type: "element", tagName: "input", properties: { type: "checkbox", checked: r.checked, disabled: true }, children: [] }), f.className = ["task-list-item"];
  }
  let m = -1;
  for (; ++m < l.length; ) {
    const b = l[m];
    (c || m !== 0 || b.type !== "element" || b.tagName !== "p") && h.push({ type: "text", value: `
` }), b.type === "element" && b.tagName === "p" && !c ? h.push(...b.children) : h.push(b);
  }
  const _ = l[l.length - 1];
  _ && (c || _.type !== "element" || _.tagName !== "p") && h.push({ type: "text", value: `
` });
  const v = { type: "element", tagName: "li", properties: f, children: h };
  return t3.patch(r, v), t3.applyData(r, v);
}
function ER(t3) {
  let r = false;
  if (t3.type === "list") {
    r = t3.spread || false;
    const o = t3.children;
    let l = -1;
    for (; !r && ++l < o.length; ) r = Ex(o[l]);
  }
  return r;
}
function Ex(t3) {
  const r = t3.spread;
  return r ?? t3.children.length > 1;
}
function kR(t3, r) {
  const o = {}, l = t3.all(r);
  let c = -1;
  for (typeof r.start == "number" && r.start !== 1 && (o.start = r.start); ++c < l.length; ) {
    const h = l[c];
    if (h.type === "element" && h.tagName === "li" && h.properties && Array.isArray(h.properties.className) && h.properties.className.includes("task-list-item")) {
      o.className = ["contains-task-list"];
      break;
    }
  }
  const f = { type: "element", tagName: r.ordered ? "ol" : "ul", properties: o, children: t3.wrap(l, true) };
  return t3.patch(r, f), t3.applyData(r, f);
}
function MR(t3, r) {
  const o = { type: "element", tagName: "p", properties: {}, children: t3.all(r) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function AR(t3, r) {
  const o = { type: "root", children: t3.wrap(t3.all(r)) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function OR(t3, r) {
  const o = { type: "element", tagName: "strong", properties: {}, children: t3.all(r) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function RR(t3, r) {
  const o = t3.all(r), l = o.shift(), c = [];
  if (l) {
    const h = { type: "element", tagName: "thead", properties: {}, children: t3.wrap([l], true) };
    t3.patch(r.children[0], h), c.push(h);
  }
  if (o.length > 0) {
    const h = { type: "element", tagName: "tbody", properties: {}, children: t3.wrap(o, true) }, m = Om(r.children[1]), _ = ax(r.children[r.children.length - 1]);
    m && _ && (h.position = { start: m, end: _ }), c.push(h);
  }
  const f = { type: "element", tagName: "table", properties: {}, children: t3.wrap(c, true) };
  return t3.patch(r, f), t3.applyData(r, f);
}
function zR(t3, r, o) {
  const l = o ? o.children : void 0, f = (l ? l.indexOf(r) : 1) === 0 ? "th" : "td", h = o && o.type === "table" ? o.align : void 0, m = h ? h.length : r.children.length;
  let _ = -1;
  const v = [];
  for (; ++_ < m; ) {
    const S = r.children[_], E = {}, C = h ? h[_] : void 0;
    C && (E.align = C);
    let z = { type: "element", tagName: f, properties: E, children: [] };
    S && (z.children = t3.all(S), t3.patch(S, z), z = t3.applyData(S, z)), v.push(z);
  }
  const b = { type: "element", tagName: "tr", properties: {}, children: t3.wrap(v, true) };
  return t3.patch(r, b), t3.applyData(r, b);
}
function LR(t3, r) {
  const o = { type: "element", tagName: "td", properties: {}, children: t3.all(r) };
  return t3.patch(r, o), t3.applyData(r, o);
}
const b0 = 9, x0 = 32;
function PR(t3) {
  const r = String(t3), o = /\r?\n|\r/g;
  let l = o.exec(r), c = 0;
  const f = [];
  for (; l; ) f.push(S0(r.slice(c, l.index), c > 0, true), l[0]), c = l.index + l[0].length, l = o.exec(r);
  return f.push(S0(r.slice(c), c > 0, false)), f.join("");
}
function S0(t3, r, o) {
  let l = 0, c = t3.length;
  if (r) {
    let f = t3.codePointAt(l);
    for (; f === b0 || f === x0; ) l++, f = t3.codePointAt(l);
  }
  if (o) {
    let f = t3.codePointAt(c - 1);
    for (; f === b0 || f === x0; ) c--, f = t3.codePointAt(c - 1);
  }
  return c > l ? t3.slice(l, c) : "";
}
function BR(t3, r) {
  const o = { type: "text", value: PR(String(r.value)) };
  return t3.patch(r, o), t3.applyData(r, o);
}
function DR(t3, r) {
  const o = { type: "element", tagName: "hr", properties: {}, children: [] };
  return t3.patch(r, o), t3.applyData(r, o);
}
const NR = { blockquote: dR, break: hR, code: pR, delete: mR, emphasis: gR, footnoteReference: yR, heading: vR, html: _R, imageReference: bR, image: xR, inlineCode: SR, linkReference: wR, link: CR, listItem: TR, list: kR, paragraph: MR, root: AR, strong: OR, table: RR, tableCell: LR, tableRow: zR, text: BR, thematicBreak: DR, toml: of, yaml: of, definition: of, footnoteDefinition: of };
function of() {
}
const kx = -1, Kf = 0, su = 1, xf = 2, Nm = 3, Im = 4, Hm = 5, jm = 6, Mx = 7, Ax = 8, w0 = typeof self == "object" ? self : globalThis, IR = (t3, r) => {
  const o = (c, f) => (t3.set(f, c), c), l = (c) => {
    if (t3.has(c)) return t3.get(c);
    const [f, h] = r[c];
    switch (f) {
      case Kf:
      case kx:
        return o(h, c);
      case su: {
        const m = o([], c);
        for (const _ of h) m.push(l(_));
        return m;
      }
      case xf: {
        const m = o({}, c);
        for (const [_, v] of h) m[l(_)] = l(v);
        return m;
      }
      case Nm:
        return o(new Date(h), c);
      case Im: {
        const { source: m, flags: _ } = h;
        return o(new RegExp(m, _), c);
      }
      case Hm: {
        const m = o(/* @__PURE__ */ new Map(), c);
        for (const [_, v] of h) m.set(l(_), l(v));
        return m;
      }
      case jm: {
        const m = o(/* @__PURE__ */ new Set(), c);
        for (const _ of h) m.add(l(_));
        return m;
      }
      case Mx: {
        const { name: m, message: _ } = h;
        return o(new w0[m](_), c);
      }
      case Ax:
        return o(BigInt(h), c);
      case "BigInt":
        return o(Object(BigInt(h)), c);
      case "ArrayBuffer":
        return o(new Uint8Array(h).buffer, h);
      case "DataView": {
        const { buffer: m } = new Uint8Array(h);
        return o(new DataView(m), h);
      }
    }
    return o(new w0[f](h), c);
  };
  return l;
}, C0 = (t3) => IR(/* @__PURE__ */ new Map(), t3)(0), Ol = "", { toString: HR } = {}, { keys: jR } = Object, Js = (t3) => {
  const r = typeof t3;
  if (r !== "object" || !t3) return [Kf, r];
  const o = HR.call(t3).slice(8, -1);
  switch (o) {
    case "Array":
      return [su, Ol];
    case "Object":
      return [xf, Ol];
    case "Date":
      return [Nm, Ol];
    case "RegExp":
      return [Im, Ol];
    case "Map":
      return [Hm, Ol];
    case "Set":
      return [jm, Ol];
    case "DataView":
      return [su, o];
  }
  return o.includes("Array") ? [su, o] : o.includes("Error") ? [Mx, o] : [xf, o];
}, af = ([t3, r]) => t3 === Kf && (r === "function" || r === "symbol"), UR = (t3, r, o, l) => {
  const c = (h, m) => {
    const _ = l.push(h) - 1;
    return o.set(m, _), _;
  }, f = (h) => {
    if (o.has(h)) return o.get(h);
    let [m, _] = Js(h);
    switch (m) {
      case Kf: {
        let b = h;
        switch (_) {
          case "bigint":
            m = Ax, b = h.toString();
            break;
          case "function":
          case "symbol":
            if (t3) throw new TypeError("unable to serialize " + _);
            b = null;
            break;
          case "undefined":
            return c([kx], h);
        }
        return c([m, b], h);
      }
      case su: {
        if (_) {
          let E = h;
          return _ === "DataView" ? E = new Uint8Array(h.buffer) : _ === "ArrayBuffer" && (E = new Uint8Array(h)), c([_, [...E]], h);
        }
        const b = [], S = c([m, b], h);
        for (const E of h) b.push(f(E));
        return S;
      }
      case xf: {
        if (_) switch (_) {
          case "BigInt":
            return c([_, h.toString()], h);
          case "Boolean":
          case "Number":
          case "String":
            return c([_, h.valueOf()], h);
        }
        if (r && "toJSON" in h) return f(h.toJSON());
        const b = [], S = c([m, b], h);
        for (const E of jR(h)) (t3 || !af(Js(h[E]))) && b.push([f(E), f(h[E])]);
        return S;
      }
      case Nm:
        return c([m, h.toISOString()], h);
      case Im: {
        const { source: b, flags: S } = h;
        return c([m, { source: b, flags: S }], h);
      }
      case Hm: {
        const b = [], S = c([m, b], h);
        for (const [E, C] of h) (t3 || !(af(Js(E)) || af(Js(C)))) && b.push([f(E), f(C)]);
        return S;
      }
      case jm: {
        const b = [], S = c([m, b], h);
        for (const E of h) (t3 || !af(Js(E))) && b.push(f(E));
        return S;
      }
    }
    const { message: v } = h;
    return c([m, { name: _, message: v }], h);
  };
  return f;
}, T0 = (t3, { json: r, lossy: o } = {}) => {
  const l = [];
  return UR(!(r || o), !!r, /* @__PURE__ */ new Map(), l)(t3), l;
}, Sf = typeof structuredClone == "function" ? (t3, r) => r && ("json" in r || "lossy" in r) ? C0(T0(t3, r)) : structuredClone(t3) : (t3, r) => C0(T0(t3, r));
function ZR(t3, r) {
  const o = [{ type: "text", value: "\u21A9" }];
  return r > 1 && o.push({ type: "element", tagName: "sup", properties: {}, children: [{ type: "text", value: String(r) }] }), o;
}
function $R(t3, r) {
  return "Back to reference " + (t3 + 1) + (r > 1 ? "-" + r : "");
}
function qR(t3) {
  const r = typeof t3.options.clobberPrefix == "string" ? t3.options.clobberPrefix : "user-content-", o = t3.options.footnoteBackContent || ZR, l = t3.options.footnoteBackLabel || $R, c = t3.options.footnoteLabel || "Footnotes", f = t3.options.footnoteLabelTagName || "h2", h = t3.options.footnoteLabelProperties || { className: ["sr-only"] }, m = [];
  let _ = -1;
  for (; ++_ < t3.footnoteOrder.length; ) {
    const v = t3.footnoteById.get(t3.footnoteOrder[_]);
    if (!v) continue;
    const b = t3.all(v), S = String(v.identifier).toUpperCase(), E = jl(S.toLowerCase());
    let C = 0;
    const z = [], A = t3.footnoteCounts.get(S);
    for (; A !== void 0 && ++C <= A; ) {
      z.length > 0 && z.push({ type: "text", value: " " });
      let G = typeof o == "string" ? o : o(_, C);
      typeof G == "string" && (G = { type: "text", value: G }), z.push({ type: "element", tagName: "a", properties: { href: "#" + r + "fnref-" + E + (C > 1 ? "-" + C : ""), dataFootnoteBackref: "", ariaLabel: typeof l == "string" ? l : l(_, C), className: ["data-footnote-backref"] }, children: Array.isArray(G) ? G : [G] });
    }
    const $ = b[b.length - 1];
    if ($ && $.type === "element" && $.tagName === "p") {
      const G = $.children[$.children.length - 1];
      G && G.type === "text" ? G.value += " " : $.children.push({ type: "text", value: " " }), $.children.push(...z);
    } else b.push(...z);
    const N = { type: "element", tagName: "li", properties: { id: r + "fn-" + E }, children: t3.wrap(b, true) };
    t3.patch(v, N), m.push(N);
  }
  if (m.length !== 0) return { type: "element", tagName: "section", properties: { dataFootnotes: true, className: ["footnotes"] }, children: [{ type: "element", tagName: f, properties: { ...Sf(h), id: "footnote-label" }, children: [{ type: "text", value: c }] }, { type: "text", value: `
` }, { type: "element", tagName: "ol", properties: {}, children: t3.wrap(m, true) }, { type: "text", value: `
` }] };
}
const Ox = function(t3) {
  if (t3 == null) return YR;
  if (typeof t3 == "function") return Qf(t3);
  if (typeof t3 == "object") return Array.isArray(t3) ? VR(t3) : FR(t3);
  if (typeof t3 == "string") return GR(t3);
  throw new Error("Expected function, string, or object as test");
};
function VR(t3) {
  const r = [];
  let o = -1;
  for (; ++o < t3.length; ) r[o] = Ox(t3[o]);
  return Qf(l);
  function l(...c) {
    let f = -1;
    for (; ++f < r.length; ) if (r[f].apply(this, c)) return true;
    return false;
  }
}
function FR(t3) {
  const r = t3;
  return Qf(o);
  function o(l) {
    const c = l;
    let f;
    for (f in t3) if (c[f] !== r[f]) return false;
    return true;
  }
}
function GR(t3) {
  return Qf(r);
  function r(o) {
    return o && o.type === t3;
  }
}
function Qf(t3) {
  return r;
  function r(o, l, c) {
    return !!(XR(o) && t3.call(this, o, typeof l == "number" ? l : void 0, c || void 0));
  }
}
function YR() {
  return true;
}
function XR(t3) {
  return t3 !== null && typeof t3 == "object" && "type" in t3;
}
const Rx = [], KR = true, E0 = false, QR = "skip";
function WR(t3, r, o, l) {
  let c;
  typeof r == "function" && typeof o != "function" ? (l = o, o = r) : c = r;
  const f = Ox(c), h = l ? -1 : 1;
  m(t3, void 0, [])();
  function m(_, v, b) {
    const S = _ && typeof _ == "object" ? _ : {};
    if (typeof S.type == "string") {
      const C = typeof S.tagName == "string" ? S.tagName : typeof S.name == "string" ? S.name : void 0;
      Object.defineProperty(E, "name", { value: "node (" + (_.type + (C ? "<" + C + ">" : "")) + ")" });
    }
    return E;
    function E() {
      let C = Rx, z, A, $;
      if ((!r || f(_, v, b[b.length - 1] || void 0)) && (C = JR(o(_, b)), C[0] === E0)) return C;
      if ("children" in _ && _.children) {
        const N = _;
        if (N.children && C[0] !== QR) for (A = (l ? N.children.length : -1) + h, $ = b.concat(N); A > -1 && A < N.children.length; ) {
          const G = N.children[A];
          if (z = m(G, A, $)(), z[0] === E0) return z;
          A = typeof z[1] == "number" ? z[1] : A + h;
        }
      }
      return C;
    }
  }
}
function JR(t3) {
  return Array.isArray(t3) ? t3 : typeof t3 == "number" ? [KR, t3] : t3 == null ? Rx : [t3];
}
function zx(t3, r, o, l) {
  let c, f, h;
  typeof r == "function" ? (f = void 0, h = r, c = o) : (f = r, h = o, c = l), WR(t3, f, m, c);
  function m(_, v) {
    const b = v[v.length - 1], S = b ? b.children.indexOf(_) : void 0;
    return h(_, S, b);
  }
}
const Vp = {}.hasOwnProperty, tz = {};
function ez(t3, r) {
  const o = r || tz, l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = { ...NR, ...o.handlers }, m = { all: v, applyData: iz, definitionById: l, footnoteById: c, footnoteCounts: f, footnoteOrder: [], handlers: h, one: _, options: o, patch: nz, wrap: oz };
  return zx(t3, function(b) {
    if (b.type === "definition" || b.type === "footnoteDefinition") {
      const S = b.type === "definition" ? l : c, E = String(b.identifier).toUpperCase();
      S.has(E) || S.set(E, b);
    }
  }), m;
  function _(b, S) {
    const E = b.type, C = m.handlers[E];
    if (Vp.call(m.handlers, E) && C) return C(m, b, S);
    if (m.options.passThrough && m.options.passThrough.includes(E)) {
      if ("children" in b) {
        const { children: A, ...$ } = b, N = Sf($);
        return N.children = m.all(b), N;
      }
      return Sf(b);
    }
    return (m.options.unknownHandler || rz)(m, b, S);
  }
  function v(b) {
    const S = [];
    if ("children" in b) {
      const E = b.children;
      let C = -1;
      for (; ++C < E.length; ) {
        const z = m.one(E[C], b);
        if (z) {
          if (C && E[C - 1].type === "break" && (!Array.isArray(z) && z.type === "text" && (z.value = k0(z.value)), !Array.isArray(z) && z.type === "element")) {
            const A = z.children[0];
            A && A.type === "text" && (A.value = k0(A.value));
          }
          Array.isArray(z) ? S.push(...z) : S.push(z);
        }
      }
    }
    return S;
  }
}
function nz(t3, r) {
  t3.position && (r.position = HM(t3));
}
function iz(t3, r) {
  let o = r;
  if (t3 && t3.data) {
    const l = t3.data.hName, c = t3.data.hChildren, f = t3.data.hProperties;
    if (typeof l == "string") if (o.type === "element") o.tagName = l;
    else {
      const h = "children" in o ? o.children : [o];
      o = { type: "element", tagName: l, properties: {}, children: h };
    }
    o.type === "element" && f && Object.assign(o.properties, Sf(f)), "children" in o && o.children && c !== null && c !== void 0 && (o.children = c);
  }
  return o;
}
function rz(t3, r) {
  const o = r.data || {}, l = "value" in r && !(Vp.call(o, "hProperties") || Vp.call(o, "hChildren")) ? { type: "text", value: r.value } : { type: "element", tagName: "div", properties: {}, children: t3.all(r) };
  return t3.patch(r, l), t3.applyData(r, l);
}
function oz(t3, r) {
  const o = [];
  let l = -1;
  for (r && o.push({ type: "text", value: `
` }); ++l < t3.length; ) l && o.push({ type: "text", value: `
` }), o.push(t3[l]);
  return r && t3.length > 0 && o.push({ type: "text", value: `
` }), o;
}
function k0(t3) {
  let r = 0, o = t3.charCodeAt(r);
  for (; o === 9 || o === 32; ) r++, o = t3.charCodeAt(r);
  return t3.slice(r);
}
function M0(t3, r) {
  const o = ez(t3, r), l = o.one(t3, void 0), c = qR(o), f = Array.isArray(l) ? { type: "root", children: l } : l || { type: "root", children: [] };
  return c && f.children.push({ type: "text", value: `
` }, c), f;
}
function az(t3, r) {
  return t3 && "run" in t3 ? async function(o, l) {
    const c = M0(o, { file: l, ...r });
    await t3.run(c, l);
  } : function(o, l) {
    return M0(o, { file: l, ...t3 || r });
  };
}
function A0(t3) {
  if (t3) throw t3;
}
var dp, O0;
function lz() {
  if (O0) return dp;
  O0 = 1;
  var t3 = Object.prototype.hasOwnProperty, r = Object.prototype.toString, o = Object.defineProperty, l = Object.getOwnPropertyDescriptor, c = function(v) {
    return typeof Array.isArray == "function" ? Array.isArray(v) : r.call(v) === "[object Array]";
  }, f = function(v) {
    if (!v || r.call(v) !== "[object Object]") return false;
    var b = t3.call(v, "constructor"), S = v.constructor && v.constructor.prototype && t3.call(v.constructor.prototype, "isPrototypeOf");
    if (v.constructor && !b && !S) return false;
    var E;
    for (E in v) ;
    return typeof E > "u" || t3.call(v, E);
  }, h = function(v, b) {
    o && b.name === "__proto__" ? o(v, b.name, { enumerable: true, configurable: true, value: b.newValue, writable: true }) : v[b.name] = b.newValue;
  }, m = function(v, b) {
    if (b === "__proto__") if (t3.call(v, b)) {
      if (l) return l(v, b).value;
    } else return;
    return v[b];
  };
  return dp = function _() {
    var v, b, S, E, C, z, A = arguments[0], $ = 1, N = arguments.length, G = false;
    for (typeof A == "boolean" && (G = A, A = arguments[1] || {}, $ = 2), (A == null || typeof A != "object" && typeof A != "function") && (A = {}); $ < N; ++$) if (v = arguments[$], v != null) for (b in v) S = m(A, b), E = m(v, b), A !== E && (G && E && (f(E) || (C = c(E))) ? (C ? (C = false, z = S && c(S) ? S : []) : z = S && f(S) ? S : {}, h(A, { name: b, newValue: _(G, z, E) })) : typeof E < "u" && h(A, { name: b, newValue: E }));
    return A;
  }, dp;
}
var sz = lz();
const hp = mu(sz);
function Fp(t3) {
  if (typeof t3 != "object" || t3 === null) return false;
  const r = Object.getPrototypeOf(t3);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in t3) && !(Symbol.iterator in t3);
}
function uz() {
  const t3 = [], r = { run: o, use: l };
  return r;
  function o(...c) {
    let f = -1;
    const h = c.pop();
    if (typeof h != "function") throw new TypeError("Expected function as last argument, not " + h);
    m(null, ...c);
    function m(_, ...v) {
      const b = t3[++f];
      let S = -1;
      if (_) {
        h(_);
        return;
      }
      for (; ++S < c.length; ) (v[S] === null || v[S] === void 0) && (v[S] = c[S]);
      c = v, b ? cz(b, m)(...v) : h(null, ...v);
    }
  }
  function l(c) {
    if (typeof c != "function") throw new TypeError("Expected `middelware` to be a function, not " + c);
    return t3.push(c), r;
  }
}
function cz(t3, r) {
  let o;
  return l;
  function l(...h) {
    const m = t3.length > h.length;
    let _;
    m && h.push(c);
    try {
      _ = t3.apply(this, h);
    } catch (v) {
      const b = v;
      if (m && o) throw b;
      return c(b);
    }
    m || (_ && _.then && typeof _.then == "function" ? _.then(f, c) : _ instanceof Error ? c(_) : f(_));
  }
  function c(h, ...m) {
    o || (o = true, r(h, ...m));
  }
  function f(h) {
    c(null, h);
  }
}
const cr = { basename: fz, dirname: dz, extname: hz, join: pz, sep: "/" };
function fz(t3, r) {
  if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
  Tu(t3);
  let o = 0, l = -1, c = t3.length, f;
  if (r === void 0 || r.length === 0 || r.length > t3.length) {
    for (; c--; ) if (t3.codePointAt(c) === 47) {
      if (f) {
        o = c + 1;
        break;
      }
    } else l < 0 && (f = true, l = c + 1);
    return l < 0 ? "" : t3.slice(o, l);
  }
  if (r === t3) return "";
  let h = -1, m = r.length - 1;
  for (; c--; ) if (t3.codePointAt(c) === 47) {
    if (f) {
      o = c + 1;
      break;
    }
  } else h < 0 && (f = true, h = c + 1), m > -1 && (t3.codePointAt(c) === r.codePointAt(m--) ? m < 0 && (l = c) : (m = -1, l = h));
  return o === l ? l = h : l < 0 && (l = t3.length), t3.slice(o, l);
}
function dz(t3) {
  if (Tu(t3), t3.length === 0) return ".";
  let r = -1, o = t3.length, l;
  for (; --o; ) if (t3.codePointAt(o) === 47) {
    if (l) {
      r = o;
      break;
    }
  } else l || (l = true);
  return r < 0 ? t3.codePointAt(0) === 47 ? "/" : "." : r === 1 && t3.codePointAt(0) === 47 ? "//" : t3.slice(0, r);
}
function hz(t3) {
  Tu(t3);
  let r = t3.length, o = -1, l = 0, c = -1, f = 0, h;
  for (; r--; ) {
    const m = t3.codePointAt(r);
    if (m === 47) {
      if (h) {
        l = r + 1;
        break;
      }
      continue;
    }
    o < 0 && (h = true, o = r + 1), m === 46 ? c < 0 ? c = r : f !== 1 && (f = 1) : c > -1 && (f = -1);
  }
  return c < 0 || o < 0 || f === 0 || f === 1 && c === o - 1 && c === l + 1 ? "" : t3.slice(c, o);
}
function pz(...t3) {
  let r = -1, o;
  for (; ++r < t3.length; ) Tu(t3[r]), t3[r] && (o = o === void 0 ? t3[r] : o + "/" + t3[r]);
  return o === void 0 ? "." : mz(o);
}
function mz(t3) {
  Tu(t3);
  const r = t3.codePointAt(0) === 47;
  let o = gz(t3, !r);
  return o.length === 0 && !r && (o = "."), o.length > 0 && t3.codePointAt(t3.length - 1) === 47 && (o += "/"), r ? "/" + o : o;
}
function gz(t3, r) {
  let o = "", l = 0, c = -1, f = 0, h = -1, m, _;
  for (; ++h <= t3.length; ) {
    if (h < t3.length) m = t3.codePointAt(h);
    else {
      if (m === 47) break;
      m = 47;
    }
    if (m === 47) {
      if (!(c === h - 1 || f === 1)) if (c !== h - 1 && f === 2) {
        if (o.length < 2 || l !== 2 || o.codePointAt(o.length - 1) !== 46 || o.codePointAt(o.length - 2) !== 46) {
          if (o.length > 2) {
            if (_ = o.lastIndexOf("/"), _ !== o.length - 1) {
              _ < 0 ? (o = "", l = 0) : (o = o.slice(0, _), l = o.length - 1 - o.lastIndexOf("/")), c = h, f = 0;
              continue;
            }
          } else if (o.length > 0) {
            o = "", l = 0, c = h, f = 0;
            continue;
          }
        }
        r && (o = o.length > 0 ? o + "/.." : "..", l = 2);
      } else o.length > 0 ? o += "/" + t3.slice(c + 1, h) : o = t3.slice(c + 1, h), l = h - c - 1;
      c = h, f = 0;
    } else m === 46 && f > -1 ? f++ : f = -1;
  }
  return o;
}
function Tu(t3) {
  if (typeof t3 != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(t3));
}
const yz = { cwd: vz };
function vz() {
  return "/";
}
function Gp(t3) {
  return !!(t3 !== null && typeof t3 == "object" && "href" in t3 && t3.href && "protocol" in t3 && t3.protocol && t3.auth === void 0);
}
function _z(t3) {
  if (typeof t3 == "string") t3 = new URL(t3);
  else if (!Gp(t3)) {
    const r = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + t3 + "`");
    throw r.code = "ERR_INVALID_ARG_TYPE", r;
  }
  if (t3.protocol !== "file:") {
    const r = new TypeError("The URL must be of scheme file");
    throw r.code = "ERR_INVALID_URL_SCHEME", r;
  }
  return bz(t3);
}
function bz(t3) {
  if (t3.hostname !== "") {
    const l = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw l.code = "ERR_INVALID_FILE_URL_HOST", l;
  }
  const r = t3.pathname;
  let o = -1;
  for (; ++o < r.length; ) if (r.codePointAt(o) === 37 && r.codePointAt(o + 1) === 50) {
    const l = r.codePointAt(o + 2);
    if (l === 70 || l === 102) {
      const c = new TypeError("File URL path must not include encoded / characters");
      throw c.code = "ERR_INVALID_FILE_URL_PATH", c;
    }
  }
  return decodeURIComponent(r);
}
const pp = ["history", "path", "basename", "stem", "extname", "dirname"];
class Lx {
  constructor(r) {
    let o;
    r ? Gp(r) ? o = { path: r } : typeof r == "string" || xz(r) ? o = { value: r } : o = r : o = {}, this.cwd = "cwd" in o ? "" : yz.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let l = -1;
    for (; ++l < pp.length; ) {
      const f = pp[l];
      f in o && o[f] !== void 0 && o[f] !== null && (this[f] = f === "history" ? [...o[f]] : o[f]);
    }
    let c;
    for (c in o) pp.includes(c) || (this[c] = o[c]);
  }
  get basename() {
    return typeof this.path == "string" ? cr.basename(this.path) : void 0;
  }
  set basename(r) {
    gp(r, "basename"), mp(r, "basename"), this.path = cr.join(this.dirname || "", r);
  }
  get dirname() {
    return typeof this.path == "string" ? cr.dirname(this.path) : void 0;
  }
  set dirname(r) {
    R0(this.basename, "dirname"), this.path = cr.join(r || "", this.basename);
  }
  get extname() {
    return typeof this.path == "string" ? cr.extname(this.path) : void 0;
  }
  set extname(r) {
    if (mp(r, "extname"), R0(this.dirname, "extname"), r) {
      if (r.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
      if (r.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = cr.join(this.dirname, this.stem + (r || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(r) {
    Gp(r) && (r = _z(r)), gp(r, "path"), this.path !== r && this.history.push(r);
  }
  get stem() {
    return typeof this.path == "string" ? cr.basename(this.path, this.extname) : void 0;
  }
  set stem(r) {
    gp(r, "stem"), mp(r, "stem"), this.path = cr.join(this.dirname || "", r + (this.extname || ""));
  }
  fail(r, o, l) {
    const c = this.message(r, o, l);
    throw c.fatal = true, c;
  }
  info(r, o, l) {
    const c = this.message(r, o, l);
    return c.fatal = void 0, c;
  }
  message(r, o, l) {
    const c = new jn(r, o, l);
    return this.path && (c.name = this.path + ":" + c.name, c.file = this.path), c.fatal = false, this.messages.push(c), c;
  }
  toString(r) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
  }
}
function mp(t3, r) {
  if (t3 && t3.includes(cr.sep)) throw new Error("`" + r + "` cannot be a path: did not expect `" + cr.sep + "`");
}
function gp(t3, r) {
  if (!t3) throw new Error("`" + r + "` cannot be empty");
}
function R0(t3, r) {
  if (!t3) throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function xz(t3) {
  return !!(t3 && typeof t3 == "object" && "byteLength" in t3 && "byteOffset" in t3);
}
const Sz = function(t3) {
  const l = this.constructor.prototype, c = l[t3], f = function() {
    return c.apply(f, arguments);
  };
  return Object.setPrototypeOf(f, l), f;
}, wz = {}.hasOwnProperty;
class Um extends Sz {
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = uz();
  }
  copy() {
    const r = new Um();
    let o = -1;
    for (; ++o < this.attachers.length; ) {
      const l = this.attachers[o];
      r.use(...l);
    }
    return r.data(hp(true, {}, this.namespace)), r;
  }
  data(r, o) {
    return typeof r == "string" ? arguments.length === 2 ? (_p("data", this.frozen), this.namespace[r] = o, this) : wz.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (_p("data", this.frozen), this.namespace = r, this) : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const r = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [o, ...l] = this.attachers[this.freezeIndex];
      if (l[0] === false) continue;
      l[0] === true && (l[0] = void 0);
      const c = o.call(r, ...l);
      typeof c == "function" && this.transformers.use(c);
    }
    return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  parse(r) {
    this.freeze();
    const o = lf(r), l = this.parser || this.Parser;
    return yp("parse", l), l(String(o), o);
  }
  process(r, o) {
    const l = this;
    return this.freeze(), yp("process", this.parser || this.Parser), vp("process", this.compiler || this.Compiler), o ? c(void 0, o) : new Promise(c);
    function c(f, h) {
      const m = lf(r), _ = l.parse(m);
      l.run(_, m, function(b, S, E) {
        if (b || !S || !E) return v(b);
        const C = S, z = l.stringify(C, E);
        Ez(z) ? E.value = z : E.result = z, v(b, E);
      });
      function v(b, S) {
        b || !S ? h(b) : f ? f(S) : o(void 0, S);
      }
    }
  }
  processSync(r) {
    let o = false, l;
    return this.freeze(), yp("processSync", this.parser || this.Parser), vp("processSync", this.compiler || this.Compiler), this.process(r, c), L0("processSync", "process", o), l;
    function c(f, h) {
      o = true, A0(f), l = h;
    }
  }
  run(r, o, l) {
    z0(r), this.freeze();
    const c = this.transformers;
    return !l && typeof o == "function" && (l = o, o = void 0), l ? f(void 0, l) : new Promise(f);
    function f(h, m) {
      const _ = lf(o);
      c.run(r, _, v);
      function v(b, S, E) {
        const C = S || r;
        b ? m(b) : h ? h(C) : l(void 0, C, E);
      }
    }
  }
  runSync(r, o) {
    let l = false, c;
    return this.run(r, o, f), L0("runSync", "run", l), c;
    function f(h, m) {
      A0(h), c = m, l = true;
    }
  }
  stringify(r, o) {
    this.freeze();
    const l = lf(o), c = this.compiler || this.Compiler;
    return vp("stringify", c), z0(r), c(r, l);
  }
  use(r, ...o) {
    const l = this.attachers, c = this.namespace;
    if (_p("use", this.frozen), r != null) if (typeof r == "function") _(r, o);
    else if (typeof r == "object") Array.isArray(r) ? m(r) : h(r);
    else throw new TypeError("Expected usable value, not `" + r + "`");
    return this;
    function f(v) {
      if (typeof v == "function") _(v, []);
      else if (typeof v == "object") if (Array.isArray(v)) {
        const [b, ...S] = v;
        _(b, S);
      } else h(v);
      else throw new TypeError("Expected usable value, not `" + v + "`");
    }
    function h(v) {
      if (!("plugins" in v) && !("settings" in v)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
      m(v.plugins), v.settings && (c.settings = hp(true, c.settings, v.settings));
    }
    function m(v) {
      let b = -1;
      if (v != null) if (Array.isArray(v)) for (; ++b < v.length; ) {
        const S = v[b];
        f(S);
      }
      else throw new TypeError("Expected a list of plugins, not `" + v + "`");
    }
    function _(v, b) {
      let S = -1, E = -1;
      for (; ++S < l.length; ) if (l[S][0] === v) {
        E = S;
        break;
      }
      if (E === -1) l.push([v, ...b]);
      else if (b.length > 0) {
        let [C, ...z] = b;
        const A = l[E][1];
        Fp(A) && Fp(C) && (C = hp(true, A, C)), l[E] = [v, C, ...z];
      }
    }
  }
}
const Cz = new Um().freeze();
function yp(t3, r) {
  if (typeof r != "function") throw new TypeError("Cannot `" + t3 + "` without `parser`");
}
function vp(t3, r) {
  if (typeof r != "function") throw new TypeError("Cannot `" + t3 + "` without `compiler`");
}
function _p(t3, r) {
  if (r) throw new Error("Cannot call `" + t3 + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function z0(t3) {
  if (!Fp(t3) || typeof t3.type != "string") throw new TypeError("Expected node, got `" + t3 + "`");
}
function L0(t3, r, o) {
  if (!o) throw new Error("`" + t3 + "` finished async. Use `" + r + "` instead");
}
function lf(t3) {
  return Tz(t3) ? t3 : new Lx(t3);
}
function Tz(t3) {
  return !!(t3 && typeof t3 == "object" && "message" in t3 && "messages" in t3);
}
function Ez(t3) {
  return typeof t3 == "string" || kz(t3);
}
function kz(t3) {
  return !!(t3 && typeof t3 == "object" && "byteLength" in t3 && "byteOffset" in t3);
}
const Mz = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", P0 = [], B0 = { allowDangerousHtml: true }, Az = /^(https?|ircs?|mailto|xmpp)$/i, Oz = [{ from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" }, { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" }, { from: "allowNode", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "allowElement" }, { from: "allowedTypes", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "allowedElements" }, { from: "className", id: "remove-classname" }, { from: "disallowedTypes", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "disallowedElements" }, { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" }, { from: "includeElementIndex", id: "#remove-includeelementindex" }, { from: "includeNodeIndex", id: "change-includenodeindex-to-includeelementindex" }, { from: "linkTarget", id: "remove-linktarget" }, { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" }, { from: "rawSourcePos", id: "#remove-rawsourcepos" }, { from: "renderers", id: "change-renderers-to-components", to: "components" }, { from: "source", id: "change-source-to-children", to: "children" }, { from: "sourcePos", id: "#remove-sourcepos" }, { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" }, { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }];
function Rz(t3) {
  const r = zz(t3), o = Lz(t3);
  return Pz(r.runSync(r.parse(o), o), t3);
}
function zz(t3) {
  const r = t3.rehypePlugins || P0, o = t3.remarkPlugins || P0, l = t3.remarkRehypeOptions ? { ...t3.remarkRehypeOptions, ...B0 } : B0;
  return Cz().use(fR).use(o).use(az, l).use(r);
}
function Lz(t3) {
  const r = t3.children || "", o = new Lx();
  return typeof r == "string" && (o.value = r), o;
}
function Pz(t3, r) {
  const o = r.allowedElements, l = r.allowElement, c = r.components, f = r.disallowedElements, h = r.skipHtml, m = r.unwrapDisallowed, _ = r.urlTransform || Bz;
  for (const b of Oz) Object.hasOwn(r, b.from) && ("" + b.from + (b.to ? "use `" + b.to + "` instead" : "remove it") + Mz + b.id, void 0);
  return zx(t3, v), qM(t3, { Fragment: F.Fragment, components: c, ignoreInvalidStyle: true, jsx: F.jsx, jsxs: F.jsxs, passKeys: true, passNode: true });
  function v(b, S, E) {
    if (b.type === "raw" && E && typeof S == "number") return h ? E.children.splice(S, 1) : E.children[S] = { type: "text", value: b.value }, S;
    if (b.type === "element") {
      let C;
      for (C in up) if (Object.hasOwn(up, C) && Object.hasOwn(b.properties, C)) {
        const z = b.properties[C], A = up[C];
        (A === null || A.includes(b.tagName)) && (b.properties[C] = _(String(z || ""), C, b));
      }
    }
    if (b.type === "element") {
      let C = o ? !o.includes(b.tagName) : f ? f.includes(b.tagName) : false;
      if (!C && l && typeof S == "number" && (C = !l(b, S, E)), C && E && typeof S == "number") return m && b.children ? E.children.splice(S, 1, ...b.children) : E.children.splice(S, 1), S;
    }
  }
}
function Bz(t3) {
  const r = t3.indexOf(":"), o = t3.indexOf("?"), l = t3.indexOf("#"), c = t3.indexOf("/");
  return r === -1 || c !== -1 && r > c || o !== -1 && r > o || l !== -1 && r > l || Az.test(t3.slice(0, r)) ? t3 : "";
}
const D0 = Hf(F.jsx("path", { d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z" }));
function Dz() {
  const t3 = La(), r = en((f) => f.methodology), [o, l] = B.useState(null);
  if (B.useEffect(() => {
    fetch("./methodology.md").then((f) => f.text()).then((f) => l(f));
  }, []), !o) return F.jsx(bm, {});
  const c = { borderRadius: "20px", transition: "all 0.5s ", overflow: "hidden" };
  return F.jsx(F.Fragment, { children: F.jsx(On, { sx: { width: "100vw", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 0, transform: `translateY(${r ? "-100vh" : "0"})`, transition: "transform 2s ease-in-out" }, children: F.jsx(On, { sx: { width: "100vw", height: "100%", display: "flex", p: 0 }, children: F.jsxs(On, { sx: { flex: 1, backgroundColor: "whitesmoke", ...c, display: "block", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", position: "relative", overflow: "auto" }, children: [F.jsx(Iz, {}), F.jsx(Nz, { theme: t3, content: o })] }) }) }) });
}
function Nz({ theme: t3, content: r }) {
  return F.jsx(On, { sx: { flex: 1, display: "block", position: "relative", overflow: "auto", WebkitColumnCount: 4, MozColumnCount: 4, columnCount: 4, columnGap: "2em", p: 4, pt: 0, color: "white", fontFamily: t3.typography.fontFamily }, children: F.jsx(Rz, { components: { h2: ({ node: o, ...l }) => F.jsx(Vi, { variant: "h4", ...l, sx: { mr: "20%" } }), p: ({ node: o, ...l }) => F.jsx(Vi, { ...l, sx: { textAlign: "justify", m: "1em 0" } }) }, children: r }) });
}
function Iz() {
  return F.jsxs(F.Fragment, { children: [F.jsx(Lk, { sx: { p: 4, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, children: F.jsx(Vi, { variant: "h2", children: "Digital F(r)ictions" }) }), F.jsxs(Cm, { sx: { position: "fixed", top: 0, right: 0, m: 6, transition: "all 0.5s ease-in-out", border: "1px solid #000000", borderRadius: "20px", color: "#000000", backgroundColor: "whitesmoke", px: 2, zIndex: 1e3 }, onClick: () => en.setState({ methodology: false }), children: [F.jsx(D0, { sx: { mr: 5, fontSize: "1.2rem" } }), "Return", F.jsx(D0, { sx: { ml: 5, fontSize: "1.2rem" } })] })] });
}
function Hz() {
  const t3 = en((m) => m.methodology), r = en((m) => m.focus), o = en((m) => m.landing), l = B.useRef(null), c = 0.5, f = La(), h = { m: f.mainM, borderRadius: "20px", transition: "all 0.5s ", border: "1px solid black", overflow: "hidden" };
  return F.jsxs(F.Fragment, { children: [F.jsx(On, { sx: { width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 0, transform: `translateY(${t3 ? "-100vh" : "0"})`, transition: "transform 2s ease-in-out" }, children: F.jsxs(On, { sx: { width: "100vw", height: f.mainH, backgroundColor: "whitesmoke", display: "flex", p: 0 }, children: [F.jsxs(On, { sx: { flex: 1, backgroundColor: "whitesmoke", ...h, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }, className: "holomorphic", children: [F.jsx(pM, {}), F.jsx(dM, {}), F.jsx(mM, {}), F.jsx(uM, {}), F.jsx(On, { sx: { position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", pointerEvents: "none" }, children: F.jsx(Vi, { variant: "h1", sx: { fontWeight: "bold", opacity: o ? 1 : 0, transition: `opacity ${c}s` }, children: "Digital F(r)ictions" }) })] }), F.jsx(On, { ref: l, sx: { width: r ? f.imgW : "0px", backgroundColor: "transparent", ...h, ml: 0, mr: r ? h.m : 0, border: "none", visibility: r ? "visible" : "hidden" }, children: r && F.jsx(fM, { focus: r }) })] }) }), F.jsx(Dz, {})] });
}
const jz = rS.createRoot(document.querySelector("#root"));
Uz();
jz.render(F.jsx(F.Fragment, { children: F.jsx(NT, { theme: HT, children: F.jsx(Hz, {}) }) }));
async function Uz() {
  try {
    const t3 = await fetch("./centroid_data_aug.json");
    if (!t3.ok) throw new Error(`Failed to fetch data: ${t3.statusText}`);
    const r = await t3.json();
    r.map((o) => {
      o.found = false, o.clicked = false;
    }), en.setState({ geodb: r });
  } catch (t3) {
    console.error("Error loading data:", t3);
  }
}
