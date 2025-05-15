var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function X0(a3, s) {
  for (var l = 0; l < s.length; l++) {
    const c = s[l];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const h in c) if (h !== "default" && !(h in a3)) {
        const m = Object.getOwnPropertyDescriptor(c, h);
        m && Object.defineProperty(a3, h, m.get ? m : { enumerable: true, get: () => c[h] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(a3, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) c(h);
  new MutationObserver((h) => {
    for (const m of h) if (m.type === "childList") for (const g of m.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && c(g);
  }).observe(document, { childList: true, subtree: true });
  function l(h) {
    const m = {};
    return h.integrity && (m.integrity = h.integrity), h.referrerPolicy && (m.referrerPolicy = h.referrerPolicy), h.crossOrigin === "use-credentials" ? m.credentials = "include" : h.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m;
  }
  function c(h) {
    if (h.ep) return;
    h.ep = true;
    const m = l(h);
    fetch(h.href, m);
  }
})();
function Oh(a3) {
  return a3 && a3.__esModule && Object.prototype.hasOwnProperty.call(a3, "default") ? a3.default : a3;
}
var Gd = { exports: {} }, ml = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Qg;
function K0() {
  if (Qg) return ml;
  Qg = 1;
  var a3 = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function l(c, h, m) {
    var g = null;
    if (m !== void 0 && (g = "" + m), h.key !== void 0 && (g = "" + h.key), "key" in h) {
      m = {};
      for (var _ in h) _ !== "key" && (m[_] = h[_]);
    } else m = h;
    return h = m.ref, { $$typeof: a3, type: c, key: g, ref: h !== void 0 ? h : null, props: m };
  }
  return ml.Fragment = s, ml.jsx = l, ml.jsxs = l, ml;
}
var Fg;
function Q0() {
  return Fg || (Fg = 1, Gd.exports = K0()), Gd.exports;
}
var Y = Q0(), Vd = { exports: {} }, gl = {}, Yd = { exports: {} }, Xd = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Wg;
function F0() {
  return Wg || (Wg = 1, function(a3) {
    function s(H, st) {
      var it = H.length;
      H.push(st);
      t: for (; 0 < it; ) {
        var ht = it - 1 >>> 1, M = H[ht];
        if (0 < h(M, st)) H[ht] = st, H[it] = M, it = ht;
        else break t;
      }
    }
    function l(H) {
      return H.length === 0 ? null : H[0];
    }
    function c(H) {
      if (H.length === 0) return null;
      var st = H[0], it = H.pop();
      if (it !== st) {
        H[0] = it;
        t: for (var ht = 0, M = H.length, K = M >>> 1; ht < K; ) {
          var ut = 2 * (ht + 1) - 1, ct = H[ut], mt = ut + 1, _t = H[mt];
          if (0 > h(ct, it)) mt < M && 0 > h(_t, ct) ? (H[ht] = _t, H[mt] = it, ht = mt) : (H[ht] = ct, H[ut] = it, ht = ut);
          else if (mt < M && 0 > h(_t, it)) H[ht] = _t, H[mt] = it, ht = mt;
          else break t;
        }
      }
      return st;
    }
    function h(H, st) {
      var it = H.sortIndex - st.sortIndex;
      return it !== 0 ? it : H.id - st.id;
    }
    if (a3.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      a3.unstable_now = function() {
        return m.now();
      };
    } else {
      var g = Date, _ = g.now();
      a3.unstable_now = function() {
        return g.now() - _;
      };
    }
    var b = [], S = [], w = 1, E = null, R = 3, D = false, N = false, A = false, $ = false, q = typeof setTimeout == "function" ? setTimeout : null, tt = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function U(H) {
      for (var st = l(S); st !== null; ) {
        if (st.callback === null) c(S);
        else if (st.startTime <= H) c(S), st.sortIndex = st.expirationTime, s(b, st);
        else break;
        st = l(S);
      }
    }
    function B(H) {
      if (A = false, U(H), !N) if (l(b) !== null) N = true, J || (J = true, rt());
      else {
        var st = l(S);
        st !== null && vt(B, st.startTime - H);
      }
    }
    var J = false, ot = -1, et = 5, dt = -1;
    function C() {
      return $ ? true : !(a3.unstable_now() - dt < et);
    }
    function Q() {
      if ($ = false, J) {
        var H = a3.unstable_now();
        dt = H;
        var st = true;
        try {
          t: {
            N = false, A && (A = false, tt(ot), ot = -1), D = true;
            var it = R;
            try {
              e: {
                for (U(H), E = l(b); E !== null && !(E.expirationTime > H && C()); ) {
                  var ht = E.callback;
                  if (typeof ht == "function") {
                    E.callback = null, R = E.priorityLevel;
                    var M = ht(E.expirationTime <= H);
                    if (H = a3.unstable_now(), typeof M == "function") {
                      E.callback = M, U(H), st = true;
                      break e;
                    }
                    E === l(b) && c(b), U(H);
                  } else c(b);
                  E = l(b);
                }
                if (E !== null) st = true;
                else {
                  var K = l(S);
                  K !== null && vt(B, K.startTime - H), st = false;
                }
              }
              break t;
            } finally {
              E = null, R = it, D = false;
            }
            st = void 0;
          }
        } finally {
          st ? rt() : J = false;
        }
      }
    }
    var rt;
    if (typeof k == "function") rt = function() {
      k(Q);
    };
    else if (typeof MessageChannel < "u") {
      var bt = new MessageChannel(), yt = bt.port2;
      bt.port1.onmessage = Q, rt = function() {
        yt.postMessage(null);
      };
    } else rt = function() {
      q(Q, 0);
    };
    function vt(H, st) {
      ot = q(function() {
        H(a3.unstable_now());
      }, st);
    }
    a3.unstable_IdlePriority = 5, a3.unstable_ImmediatePriority = 1, a3.unstable_LowPriority = 4, a3.unstable_NormalPriority = 3, a3.unstable_Profiling = null, a3.unstable_UserBlockingPriority = 2, a3.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, a3.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : et = 0 < H ? Math.floor(1e3 / H) : 5;
    }, a3.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, a3.unstable_next = function(H) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var st = 3;
          break;
        default:
          st = R;
      }
      var it = R;
      R = st;
      try {
        return H();
      } finally {
        R = it;
      }
    }, a3.unstable_requestPaint = function() {
      $ = true;
    }, a3.unstable_runWithPriority = function(H, st) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var it = R;
      R = H;
      try {
        return st();
      } finally {
        R = it;
      }
    }, a3.unstable_scheduleCallback = function(H, st, it) {
      var ht = a3.unstable_now();
      switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? ht + it : ht) : it = ht, H) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = it + M, H = { id: w++, callback: st, priorityLevel: H, startTime: it, expirationTime: M, sortIndex: -1 }, it > ht ? (H.sortIndex = it, s(S, H), l(b) === null && H === l(S) && (A ? (tt(ot), ot = -1) : A = true, vt(B, it - ht))) : (H.sortIndex = M, s(b, H), N || D || (N = true, J || (J = true, rt()))), H;
    }, a3.unstable_shouldYield = C, a3.unstable_wrapCallback = function(H) {
      var st = R;
      return function() {
        var it = R;
        R = st;
        try {
          return H.apply(this, arguments);
        } finally {
          R = it;
        }
      };
    };
  }(Xd)), Xd;
}
var Jg;
function W0() {
  return Jg || (Jg = 1, Yd.exports = F0()), Yd.exports;
}
var Kd = { exports: {} }, jt = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var tv;
function J0() {
  if (tv) return jt;
  tv = 1;
  var a3 = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), E = Symbol.iterator;
  function R(M) {
    return M === null || typeof M != "object" ? null : (M = E && M[E] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var D = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, N = Object.assign, A = {};
  function $(M, K, ut) {
    this.props = M, this.context = K, this.refs = A, this.updater = ut || D;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(M, K) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, K, "setState");
  }, $.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function q() {
  }
  q.prototype = $.prototype;
  function tt(M, K, ut) {
    this.props = M, this.context = K, this.refs = A, this.updater = ut || D;
  }
  var k = tt.prototype = new q();
  k.constructor = tt, N(k, $.prototype), k.isPureReactComponent = true;
  var U = Array.isArray, B = { H: null, A: null, T: null, S: null, V: null }, J = Object.prototype.hasOwnProperty;
  function ot(M, K, ut, ct, mt, _t) {
    return ut = _t.ref, { $$typeof: a3, type: M, key: K, ref: ut !== void 0 ? ut : null, props: _t };
  }
  function et(M, K) {
    return ot(M.type, K, void 0, void 0, void 0, M.props);
  }
  function dt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === a3;
  }
  function C(M) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(ut) {
      return K[ut];
    });
  }
  var Q = /\/+/g;
  function rt(M, K) {
    return typeof M == "object" && M !== null && M.key != null ? C("" + M.key) : K.toString(36);
  }
  function bt() {
  }
  function yt(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(bt, bt) : (M.status = "pending", M.then(function(K) {
          M.status === "pending" && (M.status = "fulfilled", M.value = K);
        }, function(K) {
          M.status === "pending" && (M.status = "rejected", M.reason = K);
        })), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function vt(M, K, ut, ct, mt) {
    var _t = typeof M;
    (_t === "undefined" || _t === "boolean") && (M = null);
    var gt = false;
    if (M === null) gt = true;
    else switch (_t) {
      case "bigint":
      case "string":
      case "number":
        gt = true;
        break;
      case "object":
        switch (M.$$typeof) {
          case a3:
          case s:
            gt = true;
            break;
          case w:
            return gt = M._init, vt(gt(M._payload), K, ut, ct, mt);
        }
    }
    if (gt) return mt = mt(M), gt = ct === "" ? "." + rt(M, 0) : ct, U(mt) ? (ut = "", gt != null && (ut = gt.replace(Q, "$&/") + "/"), vt(mt, K, ut, "", function(le) {
      return le;
    })) : mt != null && (dt(mt) && (mt = et(mt, ut + (mt.key == null || M && M.key === mt.key ? "" : ("" + mt.key).replace(Q, "$&/") + "/") + gt)), K.push(mt)), 1;
    gt = 0;
    var Nt = ct === "" ? "." : ct + ":";
    if (U(M)) for (var Lt = 0; Lt < M.length; Lt++) ct = M[Lt], _t = Nt + rt(ct, Lt), gt += vt(ct, K, ut, _t, mt);
    else if (Lt = R(M), typeof Lt == "function") for (M = Lt.call(M), Lt = 0; !(ct = M.next()).done; ) ct = ct.value, _t = Nt + rt(ct, Lt++), gt += vt(ct, K, ut, _t, mt);
    else if (_t === "object") {
      if (typeof M.then == "function") return vt(yt(M), K, ut, ct, mt);
      throw K = String(M), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    }
    return gt;
  }
  function H(M, K, ut) {
    if (M == null) return M;
    var ct = [], mt = 0;
    return vt(M, ct, "", "", function(_t) {
      return K.call(ut, _t, mt++);
    }), ct;
  }
  function st(M) {
    if (M._status === -1) {
      var K = M._result;
      K = K(), K.then(function(ut) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = ut);
      }, function(ut) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = ut);
      }), M._status === -1 && (M._status = 0, M._result = K);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var it = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M), error: M });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function ht() {
  }
  return jt.Children = { map: H, forEach: function(M, K, ut) {
    H(M, function() {
      K.apply(this, arguments);
    }, ut);
  }, count: function(M) {
    var K = 0;
    return H(M, function() {
      K++;
    }), K;
  }, toArray: function(M) {
    return H(M, function(K) {
      return K;
    }) || [];
  }, only: function(M) {
    if (!dt(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, jt.Component = $, jt.Fragment = l, jt.Profiler = h, jt.PureComponent = tt, jt.StrictMode = c, jt.Suspense = b, jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, jt.__COMPILER_RUNTIME = { __proto__: null, c: function(M) {
    return B.H.useMemoCache(M);
  } }, jt.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, jt.cloneElement = function(M, K, ut) {
    if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
    var ct = N({}, M.props), mt = M.key, _t = void 0;
    if (K != null) for (gt in K.ref !== void 0 && (_t = void 0), K.key !== void 0 && (mt = "" + K.key), K) !J.call(K, gt) || gt === "key" || gt === "__self" || gt === "__source" || gt === "ref" && K.ref === void 0 || (ct[gt] = K[gt]);
    var gt = arguments.length - 2;
    if (gt === 1) ct.children = ut;
    else if (1 < gt) {
      for (var Nt = Array(gt), Lt = 0; Lt < gt; Lt++) Nt[Lt] = arguments[Lt + 2];
      ct.children = Nt;
    }
    return ot(M.type, mt, void 0, void 0, _t, ct);
  }, jt.createContext = function(M) {
    return M = { $$typeof: g, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null }, M.Provider = M, M.Consumer = { $$typeof: m, _context: M }, M;
  }, jt.createElement = function(M, K, ut) {
    var ct, mt = {}, _t = null;
    if (K != null) for (ct in K.key !== void 0 && (_t = "" + K.key), K) J.call(K, ct) && ct !== "key" && ct !== "__self" && ct !== "__source" && (mt[ct] = K[ct]);
    var gt = arguments.length - 2;
    if (gt === 1) mt.children = ut;
    else if (1 < gt) {
      for (var Nt = Array(gt), Lt = 0; Lt < gt; Lt++) Nt[Lt] = arguments[Lt + 2];
      mt.children = Nt;
    }
    if (M && M.defaultProps) for (ct in gt = M.defaultProps, gt) mt[ct] === void 0 && (mt[ct] = gt[ct]);
    return ot(M, _t, void 0, void 0, null, mt);
  }, jt.createRef = function() {
    return { current: null };
  }, jt.forwardRef = function(M) {
    return { $$typeof: _, render: M };
  }, jt.isValidElement = dt, jt.lazy = function(M) {
    return { $$typeof: w, _payload: { _status: -1, _result: M }, _init: st };
  }, jt.memo = function(M, K) {
    return { $$typeof: S, type: M, compare: K === void 0 ? null : K };
  }, jt.startTransition = function(M) {
    var K = B.T, ut = {};
    B.T = ut;
    try {
      var ct = M(), mt = B.S;
      mt !== null && mt(ut, ct), typeof ct == "object" && ct !== null && typeof ct.then == "function" && ct.then(ht, it);
    } catch (_t) {
      it(_t);
    } finally {
      B.T = K;
    }
  }, jt.unstable_useCacheRefresh = function() {
    return B.H.useCacheRefresh();
  }, jt.use = function(M) {
    return B.H.use(M);
  }, jt.useActionState = function(M, K, ut) {
    return B.H.useActionState(M, K, ut);
  }, jt.useCallback = function(M, K) {
    return B.H.useCallback(M, K);
  }, jt.useContext = function(M) {
    return B.H.useContext(M);
  }, jt.useDebugValue = function() {
  }, jt.useDeferredValue = function(M, K) {
    return B.H.useDeferredValue(M, K);
  }, jt.useEffect = function(M, K, ut) {
    var ct = B.H;
    if (typeof ut == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return ct.useEffect(M, K);
  }, jt.useId = function() {
    return B.H.useId();
  }, jt.useImperativeHandle = function(M, K, ut) {
    return B.H.useImperativeHandle(M, K, ut);
  }, jt.useInsertionEffect = function(M, K) {
    return B.H.useInsertionEffect(M, K);
  }, jt.useLayoutEffect = function(M, K) {
    return B.H.useLayoutEffect(M, K);
  }, jt.useMemo = function(M, K) {
    return B.H.useMemo(M, K);
  }, jt.useOptimistic = function(M, K) {
    return B.H.useOptimistic(M, K);
  }, jt.useReducer = function(M, K, ut) {
    return B.H.useReducer(M, K, ut);
  }, jt.useRef = function(M) {
    return B.H.useRef(M);
  }, jt.useState = function(M) {
    return B.H.useState(M);
  }, jt.useSyncExternalStore = function(M, K, ut) {
    return B.H.useSyncExternalStore(M, K, ut);
  }, jt.useTransition = function() {
    return B.H.useTransition();
  }, jt.version = "19.1.0", jt;
}
var ev;
function Ah() {
  return ev || (ev = 1, Kd.exports = J0()), Kd.exports;
}
var Qd = { exports: {} }, Tn = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var nv;
function tb() {
  if (nv) return Tn;
  nv = 1;
  var a3 = Ah();
  function s(b) {
    var S = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++) S += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + b + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var c = { d: { f: l, r: function() {
    throw Error(s(522));
  }, D: l, C: l, L: l, m: l, X: l, S: l, M: l }, p: 0, findDOMNode: null }, h = Symbol.for("react.portal");
  function m(b, S, w) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: h, key: E == null ? null : "" + E, children: b, containerInfo: S, implementation: w };
  }
  var g = a3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(b, S) {
    if (b === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : "";
  }
  return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Tn.createPortal = function(b, S) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11) throw Error(s(299));
    return m(b, S, null, w);
  }, Tn.flushSync = function(b) {
    var S = g.T, w = c.p;
    try {
      if (g.T = null, c.p = 2, b) return b();
    } finally {
      g.T = S, c.p = w, c.d.f();
    }
  }, Tn.preconnect = function(b, S) {
    typeof b == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, c.d.C(b, S));
  }, Tn.prefetchDNS = function(b) {
    typeof b == "string" && c.d.D(b);
  }, Tn.preinit = function(b, S) {
    if (typeof b == "string" && S && typeof S.as == "string") {
      var w = S.as, E = _(w, S.crossOrigin), R = typeof S.integrity == "string" ? S.integrity : void 0, D = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      w === "style" ? c.d.S(b, typeof S.precedence == "string" ? S.precedence : void 0, { crossOrigin: E, integrity: R, fetchPriority: D }) : w === "script" && c.d.X(b, { crossOrigin: E, integrity: R, fetchPriority: D, nonce: typeof S.nonce == "string" ? S.nonce : void 0 });
    }
  }, Tn.preinitModule = function(b, S) {
    if (typeof b == "string") if (typeof S == "object" && S !== null) {
      if (S.as == null || S.as === "script") {
        var w = _(S.as, S.crossOrigin);
        c.d.M(b, { crossOrigin: w, integrity: typeof S.integrity == "string" ? S.integrity : void 0, nonce: typeof S.nonce == "string" ? S.nonce : void 0 });
      }
    } else S == null && c.d.M(b);
  }, Tn.preload = function(b, S) {
    if (typeof b == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var w = S.as, E = _(w, S.crossOrigin);
      c.d.L(b, w, { crossOrigin: E, integrity: typeof S.integrity == "string" ? S.integrity : void 0, nonce: typeof S.nonce == "string" ? S.nonce : void 0, type: typeof S.type == "string" ? S.type : void 0, fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0, referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0, imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0, imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0, media: typeof S.media == "string" ? S.media : void 0 });
    }
  }, Tn.preloadModule = function(b, S) {
    if (typeof b == "string") if (S) {
      var w = _(S.as, S.crossOrigin);
      c.d.m(b, { as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0, crossOrigin: w, integrity: typeof S.integrity == "string" ? S.integrity : void 0 });
    } else c.d.m(b);
  }, Tn.requestFormReset = function(b) {
    c.d.r(b);
  }, Tn.unstable_batchedUpdates = function(b, S) {
    return b(S);
  }, Tn.useFormState = function(b, S, w) {
    return g.H.useFormState(b, S, w);
  }, Tn.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, Tn.version = "19.1.0", Tn;
}
var iv;
function yy() {
  if (iv) return Qd.exports;
  iv = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (s) {
      console.error(s);
    }
  }
  return a3(), Qd.exports = tb(), Qd.exports;
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
var av;
function eb() {
  if (av) return gl;
  av = 1;
  var a3 = W0(), s = Ah(), l = yy();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++) e += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function m(t) {
    var e = t, i = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (i = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? i : null;
  }
  function g(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (m(t) !== t) throw Error(c(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var i = t, r = e; ; ) {
      var f = i.return;
      if (f === null) break;
      var d = f.alternate;
      if (d === null) {
        if (r = f.return, r !== null) {
          i = r;
          continue;
        }
        break;
      }
      if (f.child === d.child) {
        for (d = f.child; d; ) {
          if (d === i) return _(f), t;
          if (d === r) return _(f), e;
          d = d.sibling;
        }
        throw Error(c(188));
      }
      if (i.return !== r.return) i = f, r = d;
      else {
        for (var y = false, T = f.child; T; ) {
          if (T === i) {
            y = true, i = f, r = d;
            break;
          }
          if (T === r) {
            y = true, r = f, i = d;
            break;
          }
          T = T.sibling;
        }
        if (!y) {
          for (T = d.child; T; ) {
            if (T === i) {
              y = true, i = d, r = f;
              break;
            }
            if (T === r) {
              y = true, r = d, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!y) throw Error(c(189));
        }
      }
      if (i.alternate !== r) throw Error(c(190));
    }
    if (i.tag !== 3) throw Error(c(188));
    return i.stateNode.current === i ? t : e;
  }
  function S(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = S(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var w = Object.assign, E = Symbol.for("react.element"), R = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), tt = Symbol.for("react.consumer"), k = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), dt = Symbol.for("react.activity"), C = Symbol.for("react.memo_cache_sentinel"), Q = Symbol.iterator;
  function rt(t) {
    return t === null || typeof t != "object" ? null : (t = Q && t[Q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var bt = Symbol.for("react.client.reference");
  function yt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case N:
        return "Fragment";
      case $:
        return "Profiler";
      case A:
        return "StrictMode";
      case B:
        return "Suspense";
      case J:
        return "SuspenseList";
      case dt:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case D:
        return "Portal";
      case k:
        return (t.displayName || "Context") + ".Provider";
      case tt:
        return (t._context.displayName || "Context") + ".Consumer";
      case U:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case ot:
        return e = t.displayName || null, e !== null ? e : yt(t.type) || "Memo";
      case et:
        e = t._payload, t = t._init;
        try {
          return yt(t(e));
        } catch {
        }
    }
    return null;
  }
  var vt = Array.isArray, H = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, st = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, it = { pending: false, data: null, method: null, action: null }, ht = [], M = -1;
  function K(t) {
    return { current: t };
  }
  function ut(t) {
    0 > M || (t.current = ht[M], ht[M] = null, M--);
  }
  function ct(t, e) {
    M++, ht[M] = t.current, t.current = e;
  }
  var mt = K(null), _t = K(null), gt = K(null), Nt = K(null);
  function Lt(t, e) {
    switch (ct(gt, e), ct(_t, t), ct(mt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Cg(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = Cg(e), t = wg(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    ut(mt), ct(mt, t);
  }
  function le() {
    ut(mt), ut(_t), ut(gt);
  }
  function Dt(t) {
    t.memoizedState !== null && ct(Nt, t);
    var e = mt.current, i = wg(e, t.type);
    e !== i && (ct(_t, t), ct(mt, i));
  }
  function Gt(t) {
    _t.current === t && (ut(mt), ut(_t)), Nt.current === t && (ut(Nt), cl._currentValue = it);
  }
  var It = Object.prototype.hasOwnProperty, Oe = a3.unstable_scheduleCallback, Zt = a3.unstable_cancelCallback, ue = a3.unstable_shouldYield, nn = a3.unstable_requestPaint, ie = a3.unstable_now, _e = a3.unstable_getCurrentPriorityLevel, Me = a3.unstable_ImmediatePriority, Ae = a3.unstable_UserBlockingPriority, ce = a3.unstable_NormalPriority, wt = a3.unstable_LowPriority, kn = a3.unstable_IdlePriority, Ie = a3.log, qn = a3.unstable_setDisableYieldValue, pe = null, Ht = null;
  function ae(t) {
    if (typeof Ie == "function" && qn(t), Ht && typeof Ht.setStrictMode == "function") try {
      Ht.setStrictMode(pe, t);
    } catch {
    }
  }
  var te = Math.clz32 ? Math.clz32 : Ri, yn = Math.log, oe = Math.LN2;
  function Ri(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (yn(t) / oe | 0) | 0;
  }
  var Gn = 256, Mt = 4194304;
  function Qt(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Re(t, e, i) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var f = 0, d = t.suspendedLanes, y = t.pingedLanes;
    t = t.warmLanes;
    var T = r & 134217727;
    return T !== 0 ? (r = T & ~d, r !== 0 ? f = Qt(r) : (y &= T, y !== 0 ? f = Qt(y) : i || (i = T & ~t, i !== 0 && (f = Qt(i))))) : (T = r & ~d, T !== 0 ? f = Qt(T) : y !== 0 ? f = Qt(y) : i || (i = r & ~t, i !== 0 && (f = Qt(i)))), f === 0 ? 0 : e !== 0 && e !== f && (e & d) === 0 && (d = f & -f, i = e & -e, d >= i || d === 32 && (i & 4194048) !== 0) ? e : f;
  }
  function an(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function dr(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function Il() {
    var t = Gn;
    return Gn <<= 1, (Gn & 4194048) === 0 && (Gn = 256), t;
  }
  function ps() {
    var t = Mt;
    return Mt <<= 1, (Mt & 62914560) === 0 && (Mt = 4194304), t;
  }
  function hr(t) {
    for (var e = [], i = 0; 31 > i; i++) e.push(t);
    return e;
  }
  function ka(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Jc(t, e, i, r, f, d) {
    var y = t.pendingLanes;
    t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= i, t.entangledLanes &= i, t.errorRecoveryDisabledLanes &= i, t.shellSuspendCounter = 0;
    var T = t.entanglements, P = t.expirationTimes, V = t.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var at = 31 - te(i), ft = 1 << at;
      T[at] = 0, P[at] = -1;
      var X = V[at];
      if (X !== null) for (V[at] = null, at = 0; at < X.length; at++) {
        var F = X[at];
        F !== null && (F.lane &= -536870913);
      }
      i &= ~ft;
    }
    r !== 0 && $l(t, r, 0), d !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~e));
  }
  function $l(t, e, i) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var r = 31 - te(e);
    t.entangledLanes |= e, t.entanglements[r] = t.entanglements[r] | 1073741824 | i & 4194090;
  }
  function ql(t, e) {
    var i = t.entangledLanes |= e;
    for (t = t.entanglements; i; ) {
      var r = 31 - te(i), f = 1 << r;
      f & e | t[r] & e && (t[r] |= e), i &= ~f;
    }
  }
  function ms(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function gs(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Gl() {
    var t = st.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qg(t.type));
  }
  function vs(t, e) {
    var i = st.p;
    try {
      return st.p = t, e();
    } finally {
      st.p = i;
    }
  }
  var Li = Math.random().toString(36).slice(2), on = "__reactFiber$" + Li, _n = "__reactProps$" + Li, Na = "__reactContainer$" + Li, Nn = "__reactEvents$" + Li, Et = "__reactListeners$" + Li, Vl = "__reactHandles$" + Li, ys = "__reactResources$" + Li, Da = "__reactMarker$" + Li;
  function pr(t) {
    delete t[on], delete t[_n], delete t[Nn], delete t[Et], delete t[Vl];
  }
  function zi(t) {
    var e = t[on];
    if (e) return e;
    for (var i = t.parentNode; i; ) {
      if (e = i[Na] || i[on]) {
        if (i = e.alternate, e.child !== null || i !== null && i.child !== null) for (t = Ag(t); t !== null; ) {
          if (i = t[on]) return i;
          t = Ag(t);
        }
        return e;
      }
      t = i, i = t.parentNode;
    }
    return null;
  }
  function ta(t) {
    if (t = t[on] || t[Na]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function ri(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function ea(t) {
    var e = t[ys];
    return e || (e = t[ys] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Ve(t) {
    t[Da] = true;
  }
  var Yl = /* @__PURE__ */ new Set(), Xl = {};
  function na(t, e) {
    ia(t, e), ia(t + "Capture", e);
  }
  function ia(t, e) {
    for (Xl[t] = e, t = 0; t < e.length; t++) Yl.add(e[t]);
  }
  var tf = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Lo = {}, Kl = {};
  function ef(t) {
    return It.call(Kl, t) ? true : It.call(Lo, t) ? false : tf.test(t) ? Kl[t] = true : (Lo[t] = true, false);
  }
  function mr(t, e, i) {
    if (ef(e)) if (i === null) t.removeAttribute(e);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(e);
          return;
        case "boolean":
          var r = e.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") {
            t.removeAttribute(e);
            return;
          }
      }
      t.setAttribute(e, "" + i);
    }
  }
  function gr(t, e, i) {
    if (i === null) t.removeAttribute(e);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + i);
    }
  }
  function bi(t, e, i, r) {
    if (r === null) t.removeAttribute(i);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(i);
          return;
      }
      t.setAttributeNS(e, i, "" + r);
    }
  }
  var zo, Ha;
  function aa(t) {
    if (zo === void 0) try {
      throw Error();
    } catch (i) {
      var e = i.stack.trim().match(/\n( *(at )?)/);
      zo = e && e[1] || "", Ha = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + zo + t + Ha;
  }
  var vr = false;
  function oa(t, e) {
    if (!t || vr) return "";
    vr = true;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var ft = function() {
              throw Error();
            };
            if (Object.defineProperty(ft.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ft, []);
              } catch (F) {
                var X = F;
              }
              Reflect.construct(t, [], ft);
            } else {
              try {
                ft.call();
              } catch (F) {
                X = F;
              }
              t.call(ft.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (F) {
              X = F;
            }
            (ft = t()) && typeof ft.catch == "function" && ft.catch(function() {
            });
          }
        } catch (F) {
          if (F && X && typeof F.stack == "string") return [F.stack, X.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      f && f.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var d = r.DetermineComponentFrameRoot(), y = d[0], T = d[1];
      if (y && T) {
        var P = y.split(`
`), V = T.split(`
`);
        for (f = r = 0; r < P.length && !P[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; f < V.length && !V[f].includes("DetermineComponentFrameRoot"); ) f++;
        if (r === P.length || f === V.length) for (r = P.length - 1, f = V.length - 1; 1 <= r && 0 <= f && P[r] !== V[f]; ) f--;
        for (; 1 <= r && 0 <= f; r--, f--) if (P[r] !== V[f]) {
          if (r !== 1 || f !== 1) do
            if (r--, f--, 0 > f || P[r] !== V[f]) {
              var at = `
` + P[r].replace(" at new ", " at ");
              return t.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", t.displayName)), at;
            }
          while (1 <= r && 0 <= f);
          break;
        }
      }
    } finally {
      vr = false, Error.prepareStackTrace = i;
    }
    return (i = t ? t.displayName || t.name : "") ? aa(i) : "";
  }
  function Wt(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return aa(t.type);
      case 16:
        return aa("Lazy");
      case 13:
        return aa("Suspense");
      case 19:
        return aa("SuspenseList");
      case 0:
      case 15:
        return oa(t.type, false);
      case 11:
        return oa(t.type.render, false);
      case 1:
        return oa(t.type, true);
      case 31:
        return aa("Activity");
      default:
        return "";
    }
  }
  function Te(t) {
    try {
      var e = "";
      do
        e += Wt(t), t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function fn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ra(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Ua(t) {
    var e = ra(t) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var f = i.get, d = i.set;
      return Object.defineProperty(t, e, { configurable: true, get: function() {
        return f.call(this);
      }, set: function(y) {
        r = "" + y, d.call(this, y);
      } }), Object.defineProperty(t, e, { enumerable: i.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(y) {
        r = "" + y;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[e];
      } };
    }
  }
  function Za(t) {
    t._valueTracker || (t._valueTracker = Ua(t));
  }
  function Ut(t) {
    if (!t) return false;
    var e = t._valueTracker;
    if (!e) return true;
    var i = e.getValue(), r = "";
    return t && (r = ra(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== i ? (e.setValue(t), true) : false;
  }
  function Ce(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var _s = /[\n"\\]/g;
  function dn(t) {
    return t.replace(_s, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function bn(t, e, i, r, f, d, y, T) {
    t.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.type = y : t.removeAttribute("type"), e != null ? y === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + fn(e)) : t.value !== "" + fn(e) && (t.value = "" + fn(e)) : y !== "submit" && y !== "reset" || t.removeAttribute("value"), e != null ? ja(t, y, fn(e)) : i != null ? ja(t, y, fn(i)) : r != null && t.removeAttribute("value"), f == null && d != null && (t.defaultChecked = !!d), f != null && (t.checked = f && typeof f != "function" && typeof f != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? t.name = "" + fn(T) : t.removeAttribute("name");
  }
  function Ql(t, e, i, r, f, d, y, T) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.type = d), e != null || i != null) {
      if (!(d !== "submit" && d !== "reset" || e != null)) return;
      i = i != null ? "" + fn(i) : "", e = e != null ? "" + fn(e) : i, T || e === t.value || (t.value = e), t.defaultValue = e;
    }
    r = r ?? f, r = typeof r != "function" && typeof r != "symbol" && !!r, t.checked = T ? t.checked : !!r, t.defaultChecked = !!r, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (t.name = y);
  }
  function ja(t, e, i) {
    e === "number" && Ce(t.ownerDocument) === t || t.defaultValue === "" + i || (t.defaultValue = "" + i);
  }
  function Dn(t, e, i, r) {
    if (t = t.options, e) {
      e = {};
      for (var f = 0; f < i.length; f++) e["$" + i[f]] = true;
      for (i = 0; i < t.length; i++) f = e.hasOwnProperty("$" + t[i].value), t[i].selected !== f && (t[i].selected = f), f && r && (t[i].defaultSelected = true);
    } else {
      for (i = "" + fn(i), e = null, f = 0; f < t.length; f++) {
        if (t[f].value === i) {
          t[f].selected = true, r && (t[f].defaultSelected = true);
          return;
        }
        e !== null || t[f].disabled || (e = t[f]);
      }
      e !== null && (e.selected = true);
    }
  }
  function ke(t, e, i) {
    if (e != null && (e = "" + fn(e), e !== t.value && (t.value = e), i == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = i != null ? "" + fn(i) : "";
  }
  function Pi(t, e, i, r) {
    if (e == null) {
      if (r != null) {
        if (i != null) throw Error(c(92));
        if (vt(r)) {
          if (1 < r.length) throw Error(c(93));
          r = r[0];
        }
        i = r;
      }
      i == null && (i = ""), e = i;
    }
    i = fn(e), t.defaultValue = i, r = t.textContent, r === i && r !== "" && r !== null && (t.value = r);
  }
  function si(t, e) {
    if (e) {
      var i = t.firstChild;
      if (i && i === t.lastChild && i.nodeType === 3) {
        i.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Po = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function yr(t, e, i) {
    var r = e.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? r ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : r ? t.setProperty(e, i) : typeof i != "number" || i === 0 || Po.has(e) ? e === "float" ? t.cssFloat = i : t[e] = ("" + i).trim() : t[e] = i + "px";
  }
  function Ia(t, e, i) {
    if (e != null && typeof e != "object") throw Error(c(62));
    if (t = t.style, i != null) {
      for (var r in i) !i.hasOwnProperty(r) || e != null && e.hasOwnProperty(r) || (r.indexOf("--") === 0 ? t.setProperty(r, "") : r === "float" ? t.cssFloat = "" : t[r] = "");
      for (var f in e) r = e[f], e.hasOwnProperty(f) && i[f] !== r && yr(t, f, r);
    } else for (var d in e) e.hasOwnProperty(d) && yr(t, d, e[d]);
  }
  function Bo(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
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
  var bs = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), _r = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $a(t) {
    return _r.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var ko = null;
  function qa(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var sa = null, Bi = null;
  function Fl(t) {
    var e = ta(t);
    if (e && (t = e.stateNode)) {
      var i = t[_n] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (bn(t, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name), e = i.name, i.type === "radio" && e != null) {
            for (i = t; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll('input[name="' + dn("" + e) + '"][type="radio"]'), e = 0; e < i.length; e++) {
              var r = i[e];
              if (r !== t && r.form === t.form) {
                var f = r[_n] || null;
                if (!f) throw Error(c(90));
                bn(r, f.value, f.defaultValue, f.defaultValue, f.checked, f.defaultChecked, f.type, f.name);
              }
            }
            for (e = 0; e < i.length; e++) r = i[e], r.form === t.form && Ut(r);
          }
          break t;
        case "textarea":
          ke(t, i.value, i.defaultValue);
          break t;
        case "select":
          e = i.value, e != null && Dn(t, !!i.multiple, e, false);
      }
    }
  }
  var kt = false;
  function Vn(t, e, i) {
    if (kt) return t(e, i);
    kt = true;
    try {
      var r = t(e);
      return r;
    } finally {
      if (kt = false, (sa !== null || Bi !== null) && (Gu(), sa && (e = sa, t = Bi, Bi = sa = null, Fl(e), t))) for (e = 0; e < t.length; e++) Fl(t[e]);
    }
  }
  function ee(t, e) {
    var i = t.stateNode;
    if (i === null) return null;
    var r = i[_n] || null;
    if (r === null) return null;
    i = r[e];
    t: switch (e) {
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
        (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (i && typeof i != "function") throw Error(c(231, e, typeof i));
    return i;
  }
  var li = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), No = false;
  if (li) try {
    var la = {};
    Object.defineProperty(la, "passive", { get: function() {
      No = true;
    } }), window.addEventListener("test", la, la), window.removeEventListener("test", la, la);
  } catch {
    No = false;
  }
  var ui = null, Si = null, Ga = null;
  function Va() {
    if (Ga) return Ga;
    var t, e = Si, i = e.length, r, f = "value" in ui ? ui.value : ui.textContent, d = f.length;
    for (t = 0; t < i && e[t] === f[t]; t++) ;
    var y = i - t;
    for (r = 1; r <= y && e[i - r] === f[d - r]; r++) ;
    return Ga = f.slice(t, 1 < r ? 1 - r : void 0);
  }
  function He(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ci() {
    return true;
  }
  function Ss() {
    return false;
  }
  function hn(t) {
    function e(i, r, f, d, y) {
      this._reactName = i, this._targetInst = f, this.type = r, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var T in t) t.hasOwnProperty(T) && (i = t[T], this[T] = i ? i(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === false) ? ci : Ss, this.isPropagationStopped = Ss, this;
    }
    return w(e.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = false), this.isDefaultPrevented = ci);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = true), this.isPropagationStopped = ci);
    }, persist: function() {
    }, isPersistent: ci }), e;
  }
  var ua = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Do = hn(ua), ca = w({}, ua, { view: 0, detail: 0 }), nf = hn(ca), br, Vt, Ho, Sn = w({}, ca, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sr, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Ho && (Ho && t.type === "mousemove" ? (br = t.screenX - Ho.screenX, Vt = t.screenY - Ho.screenY) : Vt = br = 0, Ho = t), br);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : Vt;
  } }), Ya = hn(Sn), Wl = w({}, Sn, { dataTransfer: 0 }), af = hn(Wl), xs = w({}, ca, { relatedTarget: 0 }), Ts = hn(xs), Jl = w({}, ua, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = hn(Jl), rf = w({}, ua, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), Cs = hn(rf), sf = w({}, ua, { data: 0 }), Yn = hn(sf), lf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, tu = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, ki = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function eu(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ki[t]) ? !!e[t] : false;
  }
  function Sr() {
    return eu;
  }
  var ws = w({}, ca, { key: function(t) {
    if (t.key) {
      var e = lf[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress" ? (t = He(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? tu[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sr, charCode: function(t) {
    return t.type === "keypress" ? He(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? He(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), uf = hn(ws), nu = w({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Es = hn(nu), cf = w({}, ca, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sr }), ff = hn(cf), Ms = w({}, ua, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), df = hn(Ms), iu = w({}, Sn, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), au = hn(iu), xr = w({}, ua, { newState: 0, oldState: 0 }), fa = hn(xr), hf = [9, 13, 27, 32], da = li && "CompositionEvent" in window, rn = null;
  li && "documentMode" in document && (rn = document.documentMode);
  var ou = li && "TextEvent" in window && !rn, Os = li && (!da || rn && 8 < rn && 11 >= rn), ru = " ", Tr = false;
  function Cr(t, e) {
    switch (t) {
      case "keyup":
        return hf.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function su(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Xa = false;
  function lu(t, e) {
    switch (t) {
      case "compositionend":
        return su(e);
      case "keypress":
        return e.which !== 32 ? null : (Tr = true, ru);
      case "textInput":
        return t = e.data, t === ru && Tr ? null : t;
      default:
        return null;
    }
  }
  function pf(t, e) {
    if (Xa) return t === "compositionend" || !da && Cr(t, e) ? (t = Va(), Ga = Si = ui = null, Xa = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Os && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Xn = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function ha(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Xn[t.type] : e === "textarea";
  }
  function uu(t, e, i, r) {
    sa ? Bi ? Bi.push(r) : Bi = [r] : sa = r, e = Fu(e, "onChange"), 0 < e.length && (i = new Do("onChange", "change", null, i, r), t.push({ event: i, listeners: e }));
  }
  var On = null, Uo = null;
  function Ka(t) {
    _g(t, 0);
  }
  function wr(t) {
    var e = ri(t);
    if (Ut(e)) return t;
  }
  function Qa(t, e) {
    if (t === "change") return e;
  }
  var As = false;
  if (li) {
    var Fa;
    if (li) {
      var Rs = "oninput" in document;
      if (!Rs) {
        var xi = document.createElement("div");
        xi.setAttribute("oninput", "return;"), Rs = typeof xi.oninput == "function";
      }
      Fa = Rs;
    } else Fa = false;
    As = Fa && (!document.documentMode || 9 < document.documentMode);
  }
  function Zo() {
    On && (On.detachEvent("onpropertychange", cu), Uo = On = null);
  }
  function cu(t) {
    if (t.propertyName === "value" && wr(Uo)) {
      var e = [];
      uu(e, Uo, t, qa(t)), Vn(Ka, e);
    }
  }
  function Ls(t, e, i) {
    t === "focusin" ? (Zo(), On = e, Uo = i, On.attachEvent("onpropertychange", cu)) : t === "focusout" && Zo();
  }
  function mf(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return wr(Uo);
  }
  function Ti(t, e) {
    if (t === "click") return wr(e);
  }
  function gf(t, e) {
    if (t === "input" || t === "change") return wr(e);
  }
  function Wa(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var An = typeof Object.is == "function" ? Object.is : Wa;
  function Rn(t, e) {
    if (An(t, e)) return true;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
    var i = Object.keys(t), r = Object.keys(e);
    if (i.length !== r.length) return false;
    for (r = 0; r < i.length; r++) {
      var f = i[r];
      if (!It.call(e, f) || !An(t[f], e[f])) return false;
    }
    return true;
  }
  function jo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function zs(t, e) {
    var i = jo(t);
    t = 0;
    for (var r; i; ) {
      if (i.nodeType === 3) {
        if (r = t + i.textContent.length, t <= e && r >= e) return { node: i, offset: e - t };
        t = r;
      }
      t: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break t;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = jo(i);
    }
  }
  function Er(t, e) {
    return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Er(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
  }
  function Io(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ce(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var i = typeof e.contentWindow.location.href == "string";
      } catch {
        i = false;
      }
      if (i) t = e.contentWindow;
      else break;
      e = Ce(t.document);
    }
    return e;
  }
  function $o(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Mr = li && "documentMode" in document && 11 >= document.documentMode, Kn = null, Ja = null, pa = null, Or = false;
  function fu(t, e, i) {
    var r = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Or || Kn == null || Kn !== Ce(r) || (r = Kn, "selectionStart" in r && $o(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), pa && Rn(pa, r) || (pa = r, r = Fu(Ja, "onSelect"), 0 < r.length && (e = new Do("onSelect", "select", null, e, i), t.push({ event: e, listeners: r }), e.target = Kn)));
  }
  function fi(t, e) {
    var i = {};
    return i[t.toLowerCase()] = e.toLowerCase(), i["Webkit" + t] = "webkit" + e, i["Moz" + t] = "moz" + e, i;
  }
  var to = { animationend: fi("Animation", "AnimationEnd"), animationiteration: fi("Animation", "AnimationIteration"), animationstart: fi("Animation", "AnimationStart"), transitionrun: fi("Transition", "TransitionRun"), transitionstart: fi("Transition", "TransitionStart"), transitioncancel: fi("Transition", "TransitionCancel"), transitionend: fi("Transition", "TransitionEnd") }, Ar = {}, du = {};
  li && (du = document.createElement("div").style, "AnimationEvent" in window || (delete to.animationend.animation, delete to.animationiteration.animation, delete to.animationstart.animation), "TransitionEvent" in window || delete to.transitionend.transition);
  function Ni(t) {
    if (Ar[t]) return Ar[t];
    if (!to[t]) return t;
    var e = to[t], i;
    for (i in e) if (e.hasOwnProperty(i) && i in du) return Ar[t] = e[i];
    return t;
  }
  var hu = Ni("animationend"), Qn = Ni("animationiteration"), qo = Ni("animationstart"), vf = Ni("transitionrun"), Rr = Ni("transitionstart"), yf = Ni("transitioncancel"), Ps = Ni("transitionend"), pu = /* @__PURE__ */ new Map(), ma = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  ma.push("scrollEnd");
  function Fn(t, e) {
    pu.set(t, e), na(e, [t]);
  }
  var ga = /* @__PURE__ */ new WeakMap();
  function Ln(t, e) {
    if (typeof t == "object" && t !== null) {
      var i = ga.get(t);
      return i !== void 0 ? i : (e = { value: t, source: e, stack: Te(e) }, ga.set(t, e), e);
    }
    return { value: t, source: e, stack: Te(e) };
  }
  var zn = [], eo = 0, Wn = 0;
  function Go() {
    for (var t = eo, e = Wn = eo = 0; e < t; ) {
      var i = zn[e];
      zn[e++] = null;
      var r = zn[e];
      zn[e++] = null;
      var f = zn[e];
      zn[e++] = null;
      var d = zn[e];
      if (zn[e++] = null, r !== null && f !== null) {
        var y = r.pending;
        y === null ? f.next = f : (f.next = y.next, y.next = f), r.pending = f;
      }
      d !== 0 && Yo(i, f, d);
    }
  }
  function Vo(t, e, i, r) {
    zn[eo++] = t, zn[eo++] = e, zn[eo++] = i, zn[eo++] = r, Wn |= r, t.lanes |= r, t = t.alternate, t !== null && (t.lanes |= r);
  }
  function va(t, e, i, r) {
    return Vo(t, e, i, r), Di(t);
  }
  function no(t, e) {
    return Vo(t, null, null, e), Di(t);
  }
  function Yo(t, e, i) {
    t.lanes |= i;
    var r = t.alternate;
    r !== null && (r.lanes |= i);
    for (var f = false, d = t.return; d !== null; ) d.childLanes |= i, r = d.alternate, r !== null && (r.childLanes |= i), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (f = true)), t = d, d = d.return;
    return t.tag === 3 ? (d = t.stateNode, f && e !== null && (f = 31 - te(i), t = d.hiddenUpdates, r = t[f], r === null ? t[f] = [e] : r.push(e), e.lane = i | 536870912), d) : null;
  }
  function Di(t) {
    if (50 < nl) throw nl = 0, md = null, Error(c(185));
    for (var e = t.return; e !== null; ) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var ya = {};
  function mu(t, e, i, r) {
    this.tag = t, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pn(t, e, i, r) {
    return new mu(t, e, i, r);
  }
  function Lr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function di(t, e) {
    var i = t.alternate;
    return i === null ? (i = Pn(t.tag, e, t.key, t.mode), i.elementType = t.elementType, i.type = t.type, i.stateNode = t.stateNode, i.alternate = t, t.alternate = i) : (i.pendingProps = e, i.type = t.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = t.flags & 65011712, i.childLanes = t.childLanes, i.lanes = t.lanes, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, e = t.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, i.sibling = t.sibling, i.index = t.index, i.ref = t.ref, i.refCleanup = t.refCleanup, i;
  }
  function Bs(t, e) {
    t.flags &= 65011714;
    var i = t.alternate;
    return i === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = i.childLanes, t.lanes = i.lanes, t.child = i.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = i.memoizedProps, t.memoizedState = i.memoizedState, t.updateQueue = i.updateQueue, t.type = i.type, e = i.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t;
  }
  function Xo(t, e, i, r, f, d) {
    var y = 0;
    if (r = t, typeof t == "function") Lr(t) && (y = 1);
    else if (typeof t == "string") y = k0(t, i, mt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case dt:
        return t = Pn(31, i, e, f), t.elementType = dt, t.lanes = d, t;
      case N:
        return Hi(i.children, f, d, e);
      case A:
        y = 8, f |= 24;
        break;
      case $:
        return t = Pn(12, i, e, f | 2), t.elementType = $, t.lanes = d, t;
      case B:
        return t = Pn(13, i, e, f), t.elementType = B, t.lanes = d, t;
      case J:
        return t = Pn(19, i, e, f), t.elementType = J, t.lanes = d, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case q:
          case k:
            y = 10;
            break t;
          case tt:
            y = 9;
            break t;
          case U:
            y = 11;
            break t;
          case ot:
            y = 14;
            break t;
          case et:
            y = 16, r = null;
            break t;
        }
        y = 29, i = Error(c(130, t === null ? "null" : typeof t, "")), r = null;
    }
    return e = Pn(y, i, e, f), e.elementType = t, e.type = r, e.lanes = d, e;
  }
  function Hi(t, e, i, r) {
    return t = Pn(7, t, r, e), t.lanes = i, t;
  }
  function ks(t, e, i) {
    return t = Pn(6, t, null, e), t.lanes = i, t;
  }
  function zr(t, e, i) {
    return e = Pn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = i, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e;
  }
  var _a = [], io = 0, n = null, o = 0, u = [], p = 0, v = null, x = 1, z = "";
  function I(t, e) {
    _a[io++] = o, _a[io++] = n, n = t, o = e;
  }
  function W(t, e, i) {
    u[p++] = x, u[p++] = z, u[p++] = v, v = t;
    var r = x;
    t = z;
    var f = 32 - te(r) - 1;
    r &= ~(1 << f), i += 1;
    var d = 32 - te(e) + f;
    if (30 < d) {
      var y = f - f % 5;
      d = (r & (1 << y) - 1).toString(32), r >>= y, f -= y, x = 1 << 32 - te(e) + f | i << f | r, z = d + t;
    } else x = 1 << d | i << f | r, z = t;
  }
  function pt(t) {
    t.return !== null && (I(t, 1), W(t, 1, 0));
  }
  function St(t) {
    for (; t === n; ) n = _a[--io], _a[io] = null, o = _a[--io], _a[io] = null;
    for (; t === v; ) v = u[--p], u[p] = null, z = u[--p], u[p] = null, x = u[--p], u[p] = null;
  }
  var xt = null, Ct = null, Pt = false, we = null, Ne = false, sn = Error(c(519));
  function Hn(t) {
    var e = Error(c(418, ""));
    throw oo(Ln(e, t)), sn;
  }
  function gu(t) {
    var e = t.stateNode, i = t.type, r = t.memoizedProps;
    switch (e[on] = t, e[_n] = r, i) {
      case "dialog":
        Kt("cancel", e), Kt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Kt("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < al.length; i++) Kt(al[i], e);
        break;
      case "source":
        Kt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Kt("error", e), Kt("load", e);
        break;
      case "details":
        Kt("toggle", e);
        break;
      case "input":
        Kt("invalid", e), Ql(e, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true), Za(e);
        break;
      case "select":
        Kt("invalid", e);
        break;
      case "textarea":
        Kt("invalid", e), Pi(e, r.value, r.defaultValue, r.children), Za(e);
    }
    i = r.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || e.textContent === "" + i || r.suppressHydrationWarning === true || Tg(e.textContent, i) ? (r.popover != null && (Kt("beforetoggle", e), Kt("toggle", e)), r.onScroll != null && Kt("scroll", e), r.onScrollEnd != null && Kt("scrollend", e), r.onClick != null && (e.onclick = Wu), e = true) : e = false, e || Hn(t);
  }
  function vu(t) {
    for (xt = t.return; xt; ) switch (xt.tag) {
      case 5:
      case 13:
        Ne = false;
        return;
      case 27:
      case 3:
        Ne = true;
        return;
      default:
        xt = xt.return;
    }
  }
  function Ko(t) {
    if (t !== xt) return false;
    if (!Pt) return vu(t), Pt = true, false;
    var e = t.tag, i;
    if ((i = e !== 3 && e !== 27) && ((i = e === 5) && (i = t.type, i = !(i !== "form" && i !== "button") || Ld(t.type, t.memoizedProps)), i = !i), i && Ct && Hn(t), vu(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8) if (i = t.data, i === "/$") {
            if (e === 0) {
              Ct = Mi(t.nextSibling);
              break t;
            }
            e--;
          } else i !== "$" && i !== "$!" && i !== "$?" || e++;
          t = t.nextSibling;
        }
        Ct = null;
      }
    } else e === 27 ? (e = Ct, So(t.type) ? (t = kd, kd = null, Ct = t) : Ct = e) : Ct = xt ? Mi(t.stateNode.nextSibling) : null;
    return true;
  }
  function ao() {
    Ct = xt = null, Pt = false;
  }
  function yu() {
    var t = we;
    return t !== null && (jn === null ? jn = t : jn.push.apply(jn, t), we = null), t;
  }
  function oo(t) {
    we === null ? we = [t] : we.push(t);
  }
  var Le = K(null), hi = null, Ci = null;
  function Ui(t, e, i) {
    ct(Le, e._currentValue), e._currentValue = i;
  }
  function wi(t) {
    t._currentValue = Le.current, ut(Le);
  }
  function Qo(t, e, i) {
    for (; t !== null; ) {
      var r = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === i) break;
      t = t.return;
    }
  }
  function Pr(t, e, i, r) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var d = f.dependencies;
      if (d !== null) {
        var y = f.child;
        d = d.firstContext;
        t: for (; d !== null; ) {
          var T = d;
          d = f;
          for (var P = 0; P < e.length; P++) if (T.context === e[P]) {
            d.lanes |= i, T = d.alternate, T !== null && (T.lanes |= i), Qo(d.return, i, t), r || (y = null);
            break t;
          }
          d = T.next;
        }
      } else if (f.tag === 18) {
        if (y = f.return, y === null) throw Error(c(341));
        y.lanes |= i, d = y.alternate, d !== null && (d.lanes |= i), Qo(y, i, t), y = null;
      } else y = f.child;
      if (y !== null) y.return = f;
      else for (y = f; y !== null; ) {
        if (y === t) {
          y = null;
          break;
        }
        if (f = y.sibling, f !== null) {
          f.return = y.return, y = f;
          break;
        }
        y = y.return;
      }
      f = y;
    }
  }
  function Fo(t, e, i, r) {
    t = null;
    for (var f = e, d = false; f !== null; ) {
      if (!d) {
        if ((f.flags & 524288) !== 0) d = true;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(c(387));
        if (y = y.memoizedProps, y !== null) {
          var T = f.type;
          An(f.pendingProps.value, y.value) || (t !== null ? t.push(T) : t = [T]);
        }
      } else if (f === Nt.current) {
        if (y = f.alternate, y === null) throw Error(c(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState && (t !== null ? t.push(cl) : t = [cl]);
      }
      f = f.return;
    }
    t !== null && Pr(e, t, i, r), e.flags |= 262144;
  }
  function _u(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!An(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function Wo(t) {
    hi = t, Ci = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function xn(t) {
    return up(hi, t);
  }
  function bu(t, e) {
    return hi === null && Wo(t), up(t, e);
  }
  function up(t, e) {
    var i = e._currentValue;
    if (e = { context: e, memoizedValue: i, next: null }, Ci === null) {
      if (t === null) throw Error(c(308));
      Ci = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ci = Ci.next = e;
    return i;
  }
  var B_ = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = { aborted: false, addEventListener: function(i, r) {
      t.push(r);
    } };
    this.abort = function() {
      e.aborted = true, t.forEach(function(i) {
        return i();
      });
    };
  }, k_ = a3.unstable_scheduleCallback, N_ = a3.unstable_NormalPriority, We = { $$typeof: k, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function _f() {
    return { controller: new B_(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Ns(t) {
    t.refCount--, t.refCount === 0 && k_(N_, function() {
      t.controller.abort();
    });
  }
  var Ds = null, bf = 0, Br = 0, kr = null;
  function D_(t, e) {
    if (Ds === null) {
      var i = Ds = [];
      bf = 0, Br = xd(), kr = { status: "pending", value: void 0, then: function(r) {
        i.push(r);
      } };
    }
    return bf++, e.then(cp, cp), e;
  }
  function cp() {
    if (--bf === 0 && Ds !== null) {
      kr !== null && (kr.status = "fulfilled");
      var t = Ds;
      Ds = null, Br = 0, kr = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function H_(t, e) {
    var i = [], r = { status: "pending", value: null, reason: null, then: function(f) {
      i.push(f);
    } };
    return t.then(function() {
      r.status = "fulfilled", r.value = e;
      for (var f = 0; f < i.length; f++) (0, i[f])(e);
    }, function(f) {
      for (r.status = "rejected", r.reason = f, f = 0; f < i.length; f++) (0, i[f])(void 0);
    }), r;
  }
  var fp = H.S;
  H.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && D_(t, e), fp !== null && fp(t, e);
  };
  var Jo = K(null);
  function Sf() {
    var t = Jo.current;
    return t !== null ? t : Ee.pooledCache;
  }
  function Su(t, e) {
    e === null ? ct(Jo, Jo.current) : ct(Jo, e.pool);
  }
  function dp() {
    var t = Sf();
    return t === null ? null : { parent: We._currentValue, pool: t };
  }
  var Hs = Error(c(460)), hp = Error(c(474)), xu = Error(c(542)), xf = { then: function() {
  } };
  function pp(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Tu() {
  }
  function mp(t, e, i) {
    switch (i = t[i], i === void 0 ? t.push(e) : i !== e && (e.then(Tu, Tu), e = i), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, vp(t), t;
      default:
        if (typeof e.status == "string") e.then(Tu, Tu);
        else {
          if (t = Ee, t !== null && 100 < t.shellSuspendCounter) throw Error(c(482));
          t = e, t.status = "pending", t.then(function(r) {
            if (e.status === "pending") {
              var f = e;
              f.status = "fulfilled", f.value = r;
            }
          }, function(r) {
            if (e.status === "pending") {
              var f = e;
              f.status = "rejected", f.reason = r;
            }
          });
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, vp(t), t;
        }
        throw Us = e, Hs;
    }
  }
  var Us = null;
  function gp() {
    if (Us === null) throw Error(c(459));
    var t = Us;
    return Us = null, t;
  }
  function vp(t) {
    if (t === Hs || t === xu) throw Error(c(483));
  }
  var ro = false;
  function Tf(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Cf(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function so(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function lo(t, e, i) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (de & 2) !== 0) {
      var f = r.pending;
      return f === null ? e.next = e : (e.next = f.next, f.next = e), r.pending = e, e = Di(t), Yo(t, null, i), e;
    }
    return Vo(t, r, e, i), Di(t);
  }
  function Zs(t, e, i) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (i & 4194048) !== 0)) {
      var r = e.lanes;
      r &= t.pendingLanes, i |= r, e.lanes = i, ql(t, i);
    }
  }
  function wf(t, e) {
    var i = t.updateQueue, r = t.alternate;
    if (r !== null && (r = r.updateQueue, i === r)) {
      var f = null, d = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var y = { lane: i.lane, tag: i.tag, payload: i.payload, callback: null, next: null };
          d === null ? f = d = y : d = d.next = y, i = i.next;
        } while (i !== null);
        d === null ? f = d = e : d = d.next = e;
      } else f = d = e;
      i = { baseState: r.baseState, firstBaseUpdate: f, lastBaseUpdate: d, shared: r.shared, callbacks: r.callbacks }, t.updateQueue = i;
      return;
    }
    t = i.lastBaseUpdate, t === null ? i.firstBaseUpdate = e : t.next = e, i.lastBaseUpdate = e;
  }
  var Ef = false;
  function js() {
    if (Ef) {
      var t = kr;
      if (t !== null) throw t;
    }
  }
  function Is(t, e, i, r) {
    Ef = false;
    var f = t.updateQueue;
    ro = false;
    var d = f.firstBaseUpdate, y = f.lastBaseUpdate, T = f.shared.pending;
    if (T !== null) {
      f.shared.pending = null;
      var P = T, V = P.next;
      P.next = null, y === null ? d = V : y.next = V, y = P;
      var at = t.alternate;
      at !== null && (at = at.updateQueue, T = at.lastBaseUpdate, T !== y && (T === null ? at.firstBaseUpdate = V : T.next = V, at.lastBaseUpdate = P));
    }
    if (d !== null) {
      var ft = f.baseState;
      y = 0, at = V = P = null, T = d;
      do {
        var X = T.lane & -536870913, F = X !== T.lane;
        if (F ? (Jt & X) === X : (r & X) === X) {
          X !== 0 && X === Br && (Ef = true), at !== null && (at = at.next = { lane: 0, tag: T.tag, payload: T.payload, callback: null, next: null });
          t: {
            var zt = t, At = T;
            X = e;
            var ve = i;
            switch (At.tag) {
              case 1:
                if (zt = At.payload, typeof zt == "function") {
                  ft = zt.call(ve, ft, X);
                  break t;
                }
                ft = zt;
                break t;
              case 3:
                zt.flags = zt.flags & -65537 | 128;
              case 0:
                if (zt = At.payload, X = typeof zt == "function" ? zt.call(ve, ft, X) : zt, X == null) break t;
                ft = w({}, ft, X);
                break t;
              case 2:
                ro = true;
            }
          }
          X = T.callback, X !== null && (t.flags |= 64, F && (t.flags |= 8192), F = f.callbacks, F === null ? f.callbacks = [X] : F.push(X));
        } else F = { lane: X, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, at === null ? (V = at = F, P = ft) : at = at.next = F, y |= X;
        if (T = T.next, T === null) {
          if (T = f.shared.pending, T === null) break;
          F = T, T = F.next, F.next = null, f.lastBaseUpdate = F, f.shared.pending = null;
        }
      } while (true);
      at === null && (P = ft), f.baseState = P, f.firstBaseUpdate = V, f.lastBaseUpdate = at, d === null && (f.shared.lanes = 0), vo |= y, t.lanes = y, t.memoizedState = ft;
    }
  }
  function yp(t, e) {
    if (typeof t != "function") throw Error(c(191, t));
    t.call(e);
  }
  function _p(t, e) {
    var i = t.callbacks;
    if (i !== null) for (t.callbacks = null, t = 0; t < i.length; t++) yp(i[t], e);
  }
  var Nr = K(null), Cu = K(0);
  function bp(t, e) {
    t = Ea, ct(Cu, t), ct(Nr, e), Ea = t | e.baseLanes;
  }
  function Mf() {
    ct(Cu, Ea), ct(Nr, Nr.current);
  }
  function Of() {
    Ea = Cu.current, ut(Nr), ut(Cu);
  }
  var uo = 0, $t = null, me = null, Ye = null, wu = false, Dr = false, tr = false, Eu = 0, $s = 0, Hr = null, U_ = 0;
  function $e() {
    throw Error(c(321));
  }
  function Af(t, e) {
    if (e === null) return false;
    for (var i = 0; i < e.length && i < t.length; i++) if (!An(t[i], e[i])) return false;
    return true;
  }
  function Rf(t, e, i, r, f, d) {
    return uo = d, $t = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, H.H = t === null || t.memoizedState === null ? im : am, tr = false, d = i(r, f), tr = false, Dr && (d = xp(e, i, r, f)), Sp(t), d;
  }
  function Sp(t) {
    H.H = zu;
    var e = me !== null && me.next !== null;
    if (uo = 0, Ye = me = $t = null, wu = false, $s = 0, Hr = null, e) throw Error(c(300));
    t === null || ln || (t = t.dependencies, t !== null && _u(t) && (ln = true));
  }
  function xp(t, e, i, r) {
    $t = t;
    var f = 0;
    do {
      if (Dr && (Hr = null), $s = 0, Dr = false, 25 <= f) throw Error(c(301));
      if (f += 1, Ye = me = null, t.updateQueue != null) {
        var d = t.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      H.H = V_, d = e(i, r);
    } while (Dr);
    return d;
  }
  function Z_() {
    var t = H.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? qs(e) : e, t = t.useState()[0], (me !== null ? me.memoizedState : null) !== t && ($t.flags |= 1024), e;
  }
  function Lf() {
    var t = Eu !== 0;
    return Eu = 0, t;
  }
  function zf(t, e, i) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i;
  }
  function Pf(t) {
    if (wu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      wu = false;
    }
    uo = 0, Ye = me = $t = null, Dr = false, $s = Eu = 0, Hr = null;
  }
  function Un() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ye === null ? $t.memoizedState = Ye = t : Ye = Ye.next = t, Ye;
  }
  function Xe() {
    if (me === null) {
      var t = $t.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = me.next;
    var e = Ye === null ? $t.memoizedState : Ye.next;
    if (e !== null) Ye = e, me = t;
    else {
      if (t === null) throw $t.alternate === null ? Error(c(467)) : Error(c(310));
      me = t, t = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, Ye === null ? $t.memoizedState = Ye = t : Ye = Ye.next = t;
    }
    return Ye;
  }
  function Bf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function qs(t) {
    var e = $s;
    return $s += 1, Hr === null && (Hr = []), t = mp(Hr, t, e), e = $t, (Ye === null ? e.memoizedState : Ye.next) === null && (e = e.alternate, H.H = e === null || e.memoizedState === null ? im : am), t;
  }
  function Mu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return qs(t);
      if (t.$$typeof === k) return xn(t);
    }
    throw Error(c(438, String(t)));
  }
  function kf(t) {
    var e = null, i = $t.updateQueue;
    if (i !== null && (e = i.memoCache), e == null) {
      var r = $t.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (e = { data: r.data.map(function(f) {
        return f.slice();
      }), index: 0 })));
    }
    if (e == null && (e = { data: [], index: 0 }), i === null && (i = Bf(), $t.updateQueue = i), i.memoCache = e, i = e.data[e.index], i === void 0) for (i = e.data[e.index] = Array(t), r = 0; r < t; r++) i[r] = C;
    return e.index++, i;
  }
  function ba(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ou(t) {
    var e = Xe();
    return Nf(e, me, t);
  }
  function Nf(t, e, i) {
    var r = t.queue;
    if (r === null) throw Error(c(311));
    r.lastRenderedReducer = i;
    var f = t.baseQueue, d = r.pending;
    if (d !== null) {
      if (f !== null) {
        var y = f.next;
        f.next = d.next, d.next = y;
      }
      e.baseQueue = f = d, r.pending = null;
    }
    if (d = t.baseState, f === null) t.memoizedState = d;
    else {
      e = f.next;
      var T = y = null, P = null, V = e, at = false;
      do {
        var ft = V.lane & -536870913;
        if (ft !== V.lane ? (Jt & ft) === ft : (uo & ft) === ft) {
          var X = V.revertLane;
          if (X === 0) P !== null && (P = P.next = { lane: 0, revertLane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), ft === Br && (at = true);
          else if ((uo & X) === X) {
            V = V.next, X === Br && (at = true);
            continue;
          } else ft = { lane: 0, revertLane: V.revertLane, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }, P === null ? (T = P = ft, y = d) : P = P.next = ft, $t.lanes |= X, vo |= X;
          ft = V.action, tr && i(d, ft), d = V.hasEagerState ? V.eagerState : i(d, ft);
        } else X = { lane: ft, revertLane: V.revertLane, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }, P === null ? (T = P = X, y = d) : P = P.next = X, $t.lanes |= ft, vo |= ft;
        V = V.next;
      } while (V !== null && V !== e);
      if (P === null ? y = d : P.next = T, !An(d, t.memoizedState) && (ln = true, at && (i = kr, i !== null))) throw i;
      t.memoizedState = d, t.baseState = y, t.baseQueue = P, r.lastRenderedState = d;
    }
    return f === null && (r.lanes = 0), [t.memoizedState, r.dispatch];
  }
  function Df(t) {
    var e = Xe(), i = e.queue;
    if (i === null) throw Error(c(311));
    i.lastRenderedReducer = t;
    var r = i.dispatch, f = i.pending, d = e.memoizedState;
    if (f !== null) {
      i.pending = null;
      var y = f = f.next;
      do
        d = t(d, y.action), y = y.next;
      while (y !== f);
      An(d, e.memoizedState) || (ln = true), e.memoizedState = d, e.baseQueue === null && (e.baseState = d), i.lastRenderedState = d;
    }
    return [d, r];
  }
  function Tp(t, e, i) {
    var r = $t, f = Xe(), d = Pt;
    if (d) {
      if (i === void 0) throw Error(c(407));
      i = i();
    } else i = e();
    var y = !An((me || f).memoizedState, i);
    y && (f.memoizedState = i, ln = true), f = f.queue;
    var T = Ep.bind(null, r, f, t);
    if (Gs(2048, 8, T, [t]), f.getSnapshot !== e || y || Ye !== null && Ye.memoizedState.tag & 1) {
      if (r.flags |= 2048, Ur(9, Au(), wp.bind(null, r, f, i, e), null), Ee === null) throw Error(c(349));
      d || (uo & 124) !== 0 || Cp(r, e, i);
    }
    return i;
  }
  function Cp(t, e, i) {
    t.flags |= 16384, t = { getSnapshot: e, value: i }, e = $t.updateQueue, e === null ? (e = Bf(), $t.updateQueue = e, e.stores = [t]) : (i = e.stores, i === null ? e.stores = [t] : i.push(t));
  }
  function wp(t, e, i, r) {
    e.value = i, e.getSnapshot = r, Mp(e) && Op(t);
  }
  function Ep(t, e, i) {
    return i(function() {
      Mp(e) && Op(t);
    });
  }
  function Mp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var i = e();
      return !An(t, i);
    } catch {
      return true;
    }
  }
  function Op(t) {
    var e = no(t, 2);
    e !== null && ii(e, t, 2);
  }
  function Hf(t) {
    var e = Un();
    if (typeof t == "function") {
      var i = t;
      if (t = i(), tr) {
        ae(true);
        try {
          i();
        } finally {
          ae(false);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ba, lastRenderedState: t }, e;
  }
  function Ap(t, e, i, r) {
    return t.baseState = i, Nf(t, me, typeof r == "function" ? r : ba);
  }
  function j_(t, e, i, r, f) {
    if (Lu(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var d = { payload: f, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(y) {
        d.listeners.push(y);
      } };
      H.T !== null ? i(true) : d.isTransition = false, r(d), i = e.pending, i === null ? (d.next = e.pending = d, Rp(e, d)) : (d.next = i.next, e.pending = i.next = d);
    }
  }
  function Rp(t, e) {
    var i = e.action, r = e.payload, f = t.state;
    if (e.isTransition) {
      var d = H.T, y = {};
      H.T = y;
      try {
        var T = i(f, r), P = H.S;
        P !== null && P(y, T), Lp(t, e, T);
      } catch (V) {
        Uf(t, e, V);
      } finally {
        H.T = d;
      }
    } else try {
      d = i(f, r), Lp(t, e, d);
    } catch (V) {
      Uf(t, e, V);
    }
  }
  function Lp(t, e, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(r) {
      zp(t, e, r);
    }, function(r) {
      return Uf(t, e, r);
    }) : zp(t, e, i);
  }
  function zp(t, e, i) {
    e.status = "fulfilled", e.value = i, Pp(e), t.state = i, e = t.pending, e !== null && (i = e.next, i === e ? t.pending = null : (i = i.next, e.next = i, Rp(t, i)));
  }
  function Uf(t, e, i) {
    var r = t.pending;
    if (t.pending = null, r !== null) {
      r = r.next;
      do
        e.status = "rejected", e.reason = i, Pp(e), e = e.next;
      while (e !== r);
    }
    t.action = null;
  }
  function Pp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Bp(t, e) {
    return e;
  }
  function kp(t, e) {
    if (Pt) {
      var i = Ee.formState;
      if (i !== null) {
        t: {
          var r = $t;
          if (Pt) {
            if (Ct) {
              e: {
                for (var f = Ct, d = Ne; f.nodeType !== 8; ) {
                  if (!d) {
                    f = null;
                    break e;
                  }
                  if (f = Mi(f.nextSibling), f === null) {
                    f = null;
                    break e;
                  }
                }
                d = f.data, f = d === "F!" || d === "F" ? f : null;
              }
              if (f) {
                Ct = Mi(f.nextSibling), r = f.data === "F!";
                break t;
              }
            }
            Hn(r);
          }
          r = false;
        }
        r && (e = i[0]);
      }
    }
    return i = Un(), i.memoizedState = i.baseState = e, r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Bp, lastRenderedState: e }, i.queue = r, i = tm.bind(null, $t, r), r.dispatch = i, r = Hf(false), d = qf.bind(null, $t, false, r.queue), r = Un(), f = { state: e, dispatch: null, action: t, pending: null }, r.queue = f, i = j_.bind(null, $t, f, d, i), f.dispatch = i, r.memoizedState = t, [e, i, false];
  }
  function Np(t) {
    var e = Xe();
    return Dp(e, me, t);
  }
  function Dp(t, e, i) {
    if (e = Nf(t, e, Bp)[0], t = Ou(ba)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var r = qs(e);
    } catch (y) {
      throw y === Hs ? xu : y;
    }
    else r = e;
    e = Xe();
    var f = e.queue, d = f.dispatch;
    return i !== e.memoizedState && ($t.flags |= 2048, Ur(9, Au(), I_.bind(null, f, i), null)), [r, d, t];
  }
  function I_(t, e) {
    t.action = e;
  }
  function Hp(t) {
    var e = Xe(), i = me;
    if (i !== null) return Dp(e, i, t);
    Xe(), e = e.memoizedState, i = Xe();
    var r = i.queue.dispatch;
    return i.memoizedState = t, [e, r, false];
  }
  function Ur(t, e, i, r) {
    return t = { tag: t, create: i, deps: r, inst: e, next: null }, e = $t.updateQueue, e === null && (e = Bf(), $t.updateQueue = e), i = e.lastEffect, i === null ? e.lastEffect = t.next = t : (r = i.next, i.next = t, t.next = r, e.lastEffect = t), t;
  }
  function Au() {
    return { destroy: void 0, resource: void 0 };
  }
  function Up() {
    return Xe().memoizedState;
  }
  function Ru(t, e, i, r) {
    var f = Un();
    r = r === void 0 ? null : r, $t.flags |= t, f.memoizedState = Ur(1 | e, Au(), i, r);
  }
  function Gs(t, e, i, r) {
    var f = Xe();
    r = r === void 0 ? null : r;
    var d = f.memoizedState.inst;
    me !== null && r !== null && Af(r, me.memoizedState.deps) ? f.memoizedState = Ur(e, d, i, r) : ($t.flags |= t, f.memoizedState = Ur(1 | e, d, i, r));
  }
  function Zp(t, e) {
    Ru(8390656, 8, t, e);
  }
  function jp(t, e) {
    Gs(2048, 8, t, e);
  }
  function Ip(t, e) {
    return Gs(4, 2, t, e);
  }
  function $p(t, e) {
    return Gs(4, 4, t, e);
  }
  function qp(t, e) {
    if (typeof e == "function") {
      t = t();
      var i = e(t);
      return function() {
        typeof i == "function" ? i() : e(null);
      };
    }
    if (e != null) return t = t(), e.current = t, function() {
      e.current = null;
    };
  }
  function Gp(t, e, i) {
    i = i != null ? i.concat([t]) : null, Gs(4, 4, qp.bind(null, e, t), i);
  }
  function Zf() {
  }
  function Vp(t, e) {
    var i = Xe();
    e = e === void 0 ? null : e;
    var r = i.memoizedState;
    return e !== null && Af(e, r[1]) ? r[0] : (i.memoizedState = [t, e], t);
  }
  function Yp(t, e) {
    var i = Xe();
    e = e === void 0 ? null : e;
    var r = i.memoizedState;
    if (e !== null && Af(e, r[1])) return r[0];
    if (r = t(), tr) {
      ae(true);
      try {
        t();
      } finally {
        ae(false);
      }
    }
    return i.memoizedState = [r, e], r;
  }
  function jf(t, e, i) {
    return i === void 0 || (uo & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = i, t = Qm(), $t.lanes |= t, vo |= t, i);
  }
  function Xp(t, e, i, r) {
    return An(i, e) ? i : Nr.current !== null ? (t = jf(t, i, r), An(t, e) || (ln = true), t) : (uo & 42) === 0 ? (ln = true, t.memoizedState = i) : (t = Qm(), $t.lanes |= t, vo |= t, e);
  }
  function Kp(t, e, i, r, f) {
    var d = st.p;
    st.p = d !== 0 && 8 > d ? d : 8;
    var y = H.T, T = {};
    H.T = T, qf(t, false, e, i);
    try {
      var P = f(), V = H.S;
      if (V !== null && V(T, P), P !== null && typeof P == "object" && typeof P.then == "function") {
        var at = H_(P, r);
        Vs(t, e, at, ni(t));
      } else Vs(t, e, r, ni(t));
    } catch (ft) {
      Vs(t, e, { then: function() {
      }, status: "rejected", reason: ft }, ni());
    } finally {
      st.p = d, H.T = y;
    }
  }
  function $_() {
  }
  function If(t, e, i, r) {
    if (t.tag !== 5) throw Error(c(476));
    var f = Qp(t).queue;
    Kp(t, f, e, it, i === null ? $_ : function() {
      return Fp(t), i(r);
    });
  }
  function Qp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = { memoizedState: it, baseState: it, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ba, lastRenderedState: it }, next: null };
    var i = {};
    return e.next = { memoizedState: i, baseState: i, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ba, lastRenderedState: i }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Fp(t) {
    var e = Qp(t).next.queue;
    Vs(t, e, {}, ni());
  }
  function $f() {
    return xn(cl);
  }
  function Wp() {
    return Xe().memoizedState;
  }
  function Jp() {
    return Xe().memoizedState;
  }
  function q_(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var i = ni();
          t = so(i);
          var r = lo(e, t, i);
          r !== null && (ii(r, e, i), Zs(r, e, i)), e = { cache: _f() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function G_(t, e, i) {
    var r = ni();
    i = { lane: r, revertLane: 0, action: i, hasEagerState: false, eagerState: null, next: null }, Lu(t) ? em(e, i) : (i = va(t, e, i, r), i !== null && (ii(i, t, r), nm(i, e, r)));
  }
  function tm(t, e, i) {
    var r = ni();
    Vs(t, e, i, r);
  }
  function Vs(t, e, i, r) {
    var f = { lane: r, revertLane: 0, action: i, hasEagerState: false, eagerState: null, next: null };
    if (Lu(t)) em(e, f);
    else {
      var d = t.alternate;
      if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = e.lastRenderedReducer, d !== null)) try {
        var y = e.lastRenderedState, T = d(y, i);
        if (f.hasEagerState = true, f.eagerState = T, An(T, y)) return Vo(t, e, f, 0), Ee === null && Go(), false;
      } catch {
      } finally {
      }
      if (i = va(t, e, f, r), i !== null) return ii(i, t, r), nm(i, e, r), true;
    }
    return false;
  }
  function qf(t, e, i, r) {
    if (r = { lane: 2, revertLane: xd(), action: r, hasEagerState: false, eagerState: null, next: null }, Lu(t)) {
      if (e) throw Error(c(479));
    } else e = va(t, i, r, 2), e !== null && ii(e, t, 2);
  }
  function Lu(t) {
    var e = t.alternate;
    return t === $t || e !== null && e === $t;
  }
  function em(t, e) {
    Dr = wu = true;
    var i = t.pending;
    i === null ? e.next = e : (e.next = i.next, i.next = e), t.pending = e;
  }
  function nm(t, e, i) {
    if ((i & 4194048) !== 0) {
      var r = e.lanes;
      r &= t.pendingLanes, i |= r, e.lanes = i, ql(t, i);
    }
  }
  var zu = { readContext: xn, use: Mu, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useLayoutEffect: $e, useInsertionEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useSyncExternalStore: $e, useId: $e, useHostTransitionStatus: $e, useFormState: $e, useActionState: $e, useOptimistic: $e, useMemoCache: $e, useCacheRefresh: $e }, im = { readContext: xn, use: Mu, useCallback: function(t, e) {
    return Un().memoizedState = [t, e === void 0 ? null : e], t;
  }, useContext: xn, useEffect: Zp, useImperativeHandle: function(t, e, i) {
    i = i != null ? i.concat([t]) : null, Ru(4194308, 4, qp.bind(null, e, t), i);
  }, useLayoutEffect: function(t, e) {
    return Ru(4194308, 4, t, e);
  }, useInsertionEffect: function(t, e) {
    Ru(4, 2, t, e);
  }, useMemo: function(t, e) {
    var i = Un();
    e = e === void 0 ? null : e;
    var r = t();
    if (tr) {
      ae(true);
      try {
        t();
      } finally {
        ae(false);
      }
    }
    return i.memoizedState = [r, e], r;
  }, useReducer: function(t, e, i) {
    var r = Un();
    if (i !== void 0) {
      var f = i(e);
      if (tr) {
        ae(true);
        try {
          i(e);
        } finally {
          ae(false);
        }
      }
    } else f = e;
    return r.memoizedState = r.baseState = f, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: f }, r.queue = t, t = t.dispatch = G_.bind(null, $t, t), [r.memoizedState, t];
  }, useRef: function(t) {
    var e = Un();
    return t = { current: t }, e.memoizedState = t;
  }, useState: function(t) {
    t = Hf(t);
    var e = t.queue, i = tm.bind(null, $t, e);
    return e.dispatch = i, [t.memoizedState, i];
  }, useDebugValue: Zf, useDeferredValue: function(t, e) {
    var i = Un();
    return jf(i, t, e);
  }, useTransition: function() {
    var t = Hf(false);
    return t = Kp.bind(null, $t, t.queue, true, false), Un().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, e, i) {
    var r = $t, f = Un();
    if (Pt) {
      if (i === void 0) throw Error(c(407));
      i = i();
    } else {
      if (i = e(), Ee === null) throw Error(c(349));
      (Jt & 124) !== 0 || Cp(r, e, i);
    }
    f.memoizedState = i;
    var d = { value: i, getSnapshot: e };
    return f.queue = d, Zp(Ep.bind(null, r, d, t), [t]), r.flags |= 2048, Ur(9, Au(), wp.bind(null, r, d, i, e), null), i;
  }, useId: function() {
    var t = Un(), e = Ee.identifierPrefix;
    if (Pt) {
      var i = z, r = x;
      i = (r & ~(1 << 32 - te(r) - 1)).toString(32) + i, e = "\xAB" + e + "R" + i, i = Eu++, 0 < i && (e += "H" + i.toString(32)), e += "\xBB";
    } else i = U_++, e = "\xAB" + e + "r" + i.toString(32) + "\xBB";
    return t.memoizedState = e;
  }, useHostTransitionStatus: $f, useFormState: kp, useActionState: kp, useOptimistic: function(t) {
    var e = Un();
    e.memoizedState = e.baseState = t;
    var i = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return e.queue = i, e = qf.bind(null, $t, true, i), i.dispatch = e, [t, e];
  }, useMemoCache: kf, useCacheRefresh: function() {
    return Un().memoizedState = q_.bind(null, $t);
  } }, am = { readContext: xn, use: Mu, useCallback: Vp, useContext: xn, useEffect: jp, useImperativeHandle: Gp, useInsertionEffect: Ip, useLayoutEffect: $p, useMemo: Yp, useReducer: Ou, useRef: Up, useState: function() {
    return Ou(ba);
  }, useDebugValue: Zf, useDeferredValue: function(t, e) {
    var i = Xe();
    return Xp(i, me.memoizedState, t, e);
  }, useTransition: function() {
    var t = Ou(ba)[0], e = Xe().memoizedState;
    return [typeof t == "boolean" ? t : qs(t), e];
  }, useSyncExternalStore: Tp, useId: Wp, useHostTransitionStatus: $f, useFormState: Np, useActionState: Np, useOptimistic: function(t, e) {
    var i = Xe();
    return Ap(i, me, t, e);
  }, useMemoCache: kf, useCacheRefresh: Jp }, V_ = { readContext: xn, use: Mu, useCallback: Vp, useContext: xn, useEffect: jp, useImperativeHandle: Gp, useInsertionEffect: Ip, useLayoutEffect: $p, useMemo: Yp, useReducer: Df, useRef: Up, useState: function() {
    return Df(ba);
  }, useDebugValue: Zf, useDeferredValue: function(t, e) {
    var i = Xe();
    return me === null ? jf(i, t, e) : Xp(i, me.memoizedState, t, e);
  }, useTransition: function() {
    var t = Df(ba)[0], e = Xe().memoizedState;
    return [typeof t == "boolean" ? t : qs(t), e];
  }, useSyncExternalStore: Tp, useId: Wp, useHostTransitionStatus: $f, useFormState: Hp, useActionState: Hp, useOptimistic: function(t, e) {
    var i = Xe();
    return me !== null ? Ap(i, me, t, e) : (i.baseState = t, [t, i.queue.dispatch]);
  }, useMemoCache: kf, useCacheRefresh: Jp }, Zr = null, Ys = 0;
  function Pu(t) {
    var e = Ys;
    return Ys += 1, Zr === null && (Zr = []), mp(Zr, t, e);
  }
  function Xs(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Bu(t, e) {
    throw e.$$typeof === E ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(c(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
  }
  function om(t) {
    var e = t._init;
    return e(t._payload);
  }
  function rm(t) {
    function e(j, Z) {
      if (t) {
        var G = j.deletions;
        G === null ? (j.deletions = [Z], j.flags |= 16) : G.push(Z);
      }
    }
    function i(j, Z) {
      if (!t) return null;
      for (; Z !== null; ) e(j, Z), Z = Z.sibling;
      return null;
    }
    function r(j) {
      for (var Z = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? Z.set(j.key, j) : Z.set(j.index, j), j = j.sibling;
      return Z;
    }
    function f(j, Z) {
      return j = di(j, Z), j.index = 0, j.sibling = null, j;
    }
    function d(j, Z, G) {
      return j.index = G, t ? (G = j.alternate, G !== null ? (G = G.index, G < Z ? (j.flags |= 67108866, Z) : G) : (j.flags |= 67108866, Z)) : (j.flags |= 1048576, Z);
    }
    function y(j) {
      return t && j.alternate === null && (j.flags |= 67108866), j;
    }
    function T(j, Z, G, lt) {
      return Z === null || Z.tag !== 6 ? (Z = ks(G, j.mode, lt), Z.return = j, Z) : (Z = f(Z, G), Z.return = j, Z);
    }
    function P(j, Z, G, lt) {
      var Tt = G.type;
      return Tt === N ? at(j, Z, G.props.children, lt, G.key) : Z !== null && (Z.elementType === Tt || typeof Tt == "object" && Tt !== null && Tt.$$typeof === et && om(Tt) === Z.type) ? (Z = f(Z, G.props), Xs(Z, G), Z.return = j, Z) : (Z = Xo(G.type, G.key, G.props, null, j.mode, lt), Xs(Z, G), Z.return = j, Z);
    }
    function V(j, Z, G, lt) {
      return Z === null || Z.tag !== 4 || Z.stateNode.containerInfo !== G.containerInfo || Z.stateNode.implementation !== G.implementation ? (Z = zr(G, j.mode, lt), Z.return = j, Z) : (Z = f(Z, G.children || []), Z.return = j, Z);
    }
    function at(j, Z, G, lt, Tt) {
      return Z === null || Z.tag !== 7 ? (Z = Hi(G, j.mode, lt, Tt), Z.return = j, Z) : (Z = f(Z, G), Z.return = j, Z);
    }
    function ft(j, Z, G) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint") return Z = ks("" + Z, j.mode, G), Z.return = j, Z;
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case R:
            return G = Xo(Z.type, Z.key, Z.props, null, j.mode, G), Xs(G, Z), G.return = j, G;
          case D:
            return Z = zr(Z, j.mode, G), Z.return = j, Z;
          case et:
            var lt = Z._init;
            return Z = lt(Z._payload), ft(j, Z, G);
        }
        if (vt(Z) || rt(Z)) return Z = Hi(Z, j.mode, G, null), Z.return = j, Z;
        if (typeof Z.then == "function") return ft(j, Pu(Z), G);
        if (Z.$$typeof === k) return ft(j, bu(j, Z), G);
        Bu(j, Z);
      }
      return null;
    }
    function X(j, Z, G, lt) {
      var Tt = Z !== null ? Z.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return Tt !== null ? null : T(j, Z, "" + G, lt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case R:
            return G.key === Tt ? P(j, Z, G, lt) : null;
          case D:
            return G.key === Tt ? V(j, Z, G, lt) : null;
          case et:
            return Tt = G._init, G = Tt(G._payload), X(j, Z, G, lt);
        }
        if (vt(G) || rt(G)) return Tt !== null ? null : at(j, Z, G, lt, null);
        if (typeof G.then == "function") return X(j, Z, Pu(G), lt);
        if (G.$$typeof === k) return X(j, Z, bu(j, G), lt);
        Bu(j, G);
      }
      return null;
    }
    function F(j, Z, G, lt, Tt) {
      if (typeof lt == "string" && lt !== "" || typeof lt == "number" || typeof lt == "bigint") return j = j.get(G) || null, T(Z, j, "" + lt, Tt);
      if (typeof lt == "object" && lt !== null) {
        switch (lt.$$typeof) {
          case R:
            return j = j.get(lt.key === null ? G : lt.key) || null, P(Z, j, lt, Tt);
          case D:
            return j = j.get(lt.key === null ? G : lt.key) || null, V(Z, j, lt, Tt);
          case et:
            var Yt = lt._init;
            return lt = Yt(lt._payload), F(j, Z, G, lt, Tt);
        }
        if (vt(lt) || rt(lt)) return j = j.get(G) || null, at(Z, j, lt, Tt, null);
        if (typeof lt.then == "function") return F(j, Z, G, Pu(lt), Tt);
        if (lt.$$typeof === k) return F(j, Z, G, bu(Z, lt), Tt);
        Bu(Z, lt);
      }
      return null;
    }
    function zt(j, Z, G, lt) {
      for (var Tt = null, Yt = null, Ot = Z, Rt = Z = 0, cn = null; Ot !== null && Rt < G.length; Rt++) {
        Ot.index > Rt ? (cn = Ot, Ot = null) : cn = Ot.sibling;
        var ne = X(j, Ot, G[Rt], lt);
        if (ne === null) {
          Ot === null && (Ot = cn);
          break;
        }
        t && Ot && ne.alternate === null && e(j, Ot), Z = d(ne, Z, Rt), Yt === null ? Tt = ne : Yt.sibling = ne, Yt = ne, Ot = cn;
      }
      if (Rt === G.length) return i(j, Ot), Pt && I(j, Rt), Tt;
      if (Ot === null) {
        for (; Rt < G.length; Rt++) Ot = ft(j, G[Rt], lt), Ot !== null && (Z = d(Ot, Z, Rt), Yt === null ? Tt = Ot : Yt.sibling = Ot, Yt = Ot);
        return Pt && I(j, Rt), Tt;
      }
      for (Ot = r(Ot); Rt < G.length; Rt++) cn = F(Ot, j, Rt, G[Rt], lt), cn !== null && (t && cn.alternate !== null && Ot.delete(cn.key === null ? Rt : cn.key), Z = d(cn, Z, Rt), Yt === null ? Tt = cn : Yt.sibling = cn, Yt = cn);
      return t && Ot.forEach(function(Eo) {
        return e(j, Eo);
      }), Pt && I(j, Rt), Tt;
    }
    function At(j, Z, G, lt) {
      if (G == null) throw Error(c(151));
      for (var Tt = null, Yt = null, Ot = Z, Rt = Z = 0, cn = null, ne = G.next(); Ot !== null && !ne.done; Rt++, ne = G.next()) {
        Ot.index > Rt ? (cn = Ot, Ot = null) : cn = Ot.sibling;
        var Eo = X(j, Ot, ne.value, lt);
        if (Eo === null) {
          Ot === null && (Ot = cn);
          break;
        }
        t && Ot && Eo.alternate === null && e(j, Ot), Z = d(Eo, Z, Rt), Yt === null ? Tt = Eo : Yt.sibling = Eo, Yt = Eo, Ot = cn;
      }
      if (ne.done) return i(j, Ot), Pt && I(j, Rt), Tt;
      if (Ot === null) {
        for (; !ne.done; Rt++, ne = G.next()) ne = ft(j, ne.value, lt), ne !== null && (Z = d(ne, Z, Rt), Yt === null ? Tt = ne : Yt.sibling = ne, Yt = ne);
        return Pt && I(j, Rt), Tt;
      }
      for (Ot = r(Ot); !ne.done; Rt++, ne = G.next()) ne = F(Ot, j, Rt, ne.value, lt), ne !== null && (t && ne.alternate !== null && Ot.delete(ne.key === null ? Rt : ne.key), Z = d(ne, Z, Rt), Yt === null ? Tt = ne : Yt.sibling = ne, Yt = ne);
      return t && Ot.forEach(function(Y0) {
        return e(j, Y0);
      }), Pt && I(j, Rt), Tt;
    }
    function ve(j, Z, G, lt) {
      if (typeof G == "object" && G !== null && G.type === N && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case R:
            t: {
              for (var Tt = G.key; Z !== null; ) {
                if (Z.key === Tt) {
                  if (Tt = G.type, Tt === N) {
                    if (Z.tag === 7) {
                      i(j, Z.sibling), lt = f(Z, G.props.children), lt.return = j, j = lt;
                      break t;
                    }
                  } else if (Z.elementType === Tt || typeof Tt == "object" && Tt !== null && Tt.$$typeof === et && om(Tt) === Z.type) {
                    i(j, Z.sibling), lt = f(Z, G.props), Xs(lt, G), lt.return = j, j = lt;
                    break t;
                  }
                  i(j, Z);
                  break;
                } else e(j, Z);
                Z = Z.sibling;
              }
              G.type === N ? (lt = Hi(G.props.children, j.mode, lt, G.key), lt.return = j, j = lt) : (lt = Xo(G.type, G.key, G.props, null, j.mode, lt), Xs(lt, G), lt.return = j, j = lt);
            }
            return y(j);
          case D:
            t: {
              for (Tt = G.key; Z !== null; ) {
                if (Z.key === Tt) if (Z.tag === 4 && Z.stateNode.containerInfo === G.containerInfo && Z.stateNode.implementation === G.implementation) {
                  i(j, Z.sibling), lt = f(Z, G.children || []), lt.return = j, j = lt;
                  break t;
                } else {
                  i(j, Z);
                  break;
                }
                else e(j, Z);
                Z = Z.sibling;
              }
              lt = zr(G, j.mode, lt), lt.return = j, j = lt;
            }
            return y(j);
          case et:
            return Tt = G._init, G = Tt(G._payload), ve(j, Z, G, lt);
        }
        if (vt(G)) return zt(j, Z, G, lt);
        if (rt(G)) {
          if (Tt = rt(G), typeof Tt != "function") throw Error(c(150));
          return G = Tt.call(G), At(j, Z, G, lt);
        }
        if (typeof G.then == "function") return ve(j, Z, Pu(G), lt);
        if (G.$$typeof === k) return ve(j, Z, bu(j, G), lt);
        Bu(j, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint" ? (G = "" + G, Z !== null && Z.tag === 6 ? (i(j, Z.sibling), lt = f(Z, G), lt.return = j, j = lt) : (i(j, Z), lt = ks(G, j.mode, lt), lt.return = j, j = lt), y(j)) : i(j, Z);
    }
    return function(j, Z, G, lt) {
      try {
        Ys = 0;
        var Tt = ve(j, Z, G, lt);
        return Zr = null, Tt;
      } catch (Ot) {
        if (Ot === Hs || Ot === xu) throw Ot;
        var Yt = Pn(29, Ot, null, j.mode);
        return Yt.lanes = lt, Yt.return = j, Yt;
      } finally {
      }
    };
  }
  var jr = rm(true), sm = rm(false), pi = K(null), Zi = null;
  function co(t) {
    var e = t.alternate;
    ct(Je, Je.current & 1), ct(pi, t), Zi === null && (e === null || Nr.current !== null || e.memoizedState !== null) && (Zi = t);
  }
  function lm(t) {
    if (t.tag === 22) {
      if (ct(Je, Je.current), ct(pi, t), Zi === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Zi = t);
      }
    } else fo();
  }
  function fo() {
    ct(Je, Je.current), ct(pi, pi.current);
  }
  function Sa(t) {
    ut(pi), Zi === t && (Zi = null), ut(Je);
  }
  var Je = K(0);
  function ku(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var i = e.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Bd(i))) return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  function Gf(t, e, i, r) {
    e = t.memoizedState, i = i(r, e), i = i == null ? e : w({}, e, i), t.memoizedState = i, t.lanes === 0 && (t.updateQueue.baseState = i);
  }
  var Vf = { enqueueSetState: function(t, e, i) {
    t = t._reactInternals;
    var r = ni(), f = so(r);
    f.payload = e, i != null && (f.callback = i), e = lo(t, f, r), e !== null && (ii(e, t, r), Zs(e, t, r));
  }, enqueueReplaceState: function(t, e, i) {
    t = t._reactInternals;
    var r = ni(), f = so(r);
    f.tag = 1, f.payload = e, i != null && (f.callback = i), e = lo(t, f, r), e !== null && (ii(e, t, r), Zs(e, t, r));
  }, enqueueForceUpdate: function(t, e) {
    t = t._reactInternals;
    var i = ni(), r = so(i);
    r.tag = 2, e != null && (r.callback = e), e = lo(t, r, i), e !== null && (ii(e, t, i), Zs(e, t, i));
  } };
  function um(t, e, i, r, f, d, y) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, d, y) : e.prototype && e.prototype.isPureReactComponent ? !Rn(i, r) || !Rn(f, d) : true;
  }
  function cm(t, e, i, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(i, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(i, r), e.state !== t && Vf.enqueueReplaceState(e, e.state, null);
  }
  function er(t, e) {
    var i = e;
    if ("ref" in e) {
      i = {};
      for (var r in e) r !== "ref" && (i[r] = e[r]);
    }
    if (t = t.defaultProps) {
      i === e && (i = w({}, i));
      for (var f in t) i[f] === void 0 && (i[f] = t[f]);
    }
    return i;
  }
  var Nu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function fm(t) {
    Nu(t);
  }
  function dm(t) {
    console.error(t);
  }
  function hm(t) {
    Nu(t);
  }
  function Du(t, e) {
    try {
      var i = t.onUncaughtError;
      i(e.value, { componentStack: e.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function pm(t, e, i) {
    try {
      var r = t.onCaughtError;
      r(i.value, { componentStack: i.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (f) {
      setTimeout(function() {
        throw f;
      });
    }
  }
  function Yf(t, e, i) {
    return i = so(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Du(t, e);
    }, i;
  }
  function mm(t) {
    return t = so(t), t.tag = 3, t;
  }
  function gm(t, e, i, r) {
    var f = i.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var d = r.value;
      t.payload = function() {
        return f(d);
      }, t.callback = function() {
        pm(e, i, r);
      };
    }
    var y = i.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (t.callback = function() {
      pm(e, i, r), typeof f != "function" && (yo === null ? yo = /* @__PURE__ */ new Set([this]) : yo.add(this));
      var T = r.stack;
      this.componentDidCatch(r.value, { componentStack: T !== null ? T : "" });
    });
  }
  function Y_(t, e, i, r, f) {
    if (i.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (e = i.alternate, e !== null && Fo(e, i, f, true), i = pi.current, i !== null) {
        switch (i.tag) {
          case 13:
            return Zi === null ? vd() : i.alternate === null && Ue === 0 && (Ue = 3), i.flags &= -257, i.flags |= 65536, i.lanes = f, r === xf ? i.flags |= 16384 : (e = i.updateQueue, e === null ? i.updateQueue = /* @__PURE__ */ new Set([r]) : e.add(r), _d(t, r, f)), false;
          case 22:
            return i.flags |= 65536, r === xf ? i.flags |= 16384 : (e = i.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r]) }, i.updateQueue = e) : (i = e.retryQueue, i === null ? e.retryQueue = /* @__PURE__ */ new Set([r]) : i.add(r)), _d(t, r, f)), false;
        }
        throw Error(c(435, i.tag));
      }
      return _d(t, r, f), vd(), false;
    }
    if (Pt) return e = pi.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = f, r !== sn && (t = Error(c(422), { cause: r }), oo(Ln(t, i)))) : (r !== sn && (e = Error(c(423), { cause: r }), oo(Ln(e, i))), t = t.current.alternate, t.flags |= 65536, f &= -f, t.lanes |= f, r = Ln(r, i), f = Yf(t.stateNode, r, f), wf(t, f), Ue !== 4 && (Ue = 2)), false;
    var d = Error(c(520), { cause: r });
    if (d = Ln(d, i), el === null ? el = [d] : el.push(d), Ue !== 4 && (Ue = 2), e === null) return true;
    r = Ln(r, i), i = e;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, t = f & -f, i.lanes |= t, t = Yf(i.stateNode, r, t), wf(i, t), false;
        case 1:
          if (e = i.type, d = i.stateNode, (i.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (yo === null || !yo.has(d)))) return i.flags |= 65536, f &= -f, i.lanes |= f, f = mm(f), gm(f, t, i, r), wf(i, f), false;
      }
      i = i.return;
    } while (i !== null);
    return false;
  }
  var vm = Error(c(461)), ln = false;
  function pn(t, e, i, r) {
    e.child = t === null ? sm(e, null, i, r) : jr(e, t.child, i, r);
  }
  function ym(t, e, i, r, f) {
    i = i.render;
    var d = e.ref;
    if ("ref" in r) {
      var y = {};
      for (var T in r) T !== "ref" && (y[T] = r[T]);
    } else y = r;
    return Wo(e), r = Rf(t, e, i, y, d, f), T = Lf(), t !== null && !ln ? (zf(t, e, f), xa(t, e, f)) : (Pt && T && pt(e), e.flags |= 1, pn(t, e, r, f), e.child);
  }
  function _m(t, e, i, r, f) {
    if (t === null) {
      var d = i.type;
      return typeof d == "function" && !Lr(d) && d.defaultProps === void 0 && i.compare === null ? (e.tag = 15, e.type = d, bm(t, e, d, r, f)) : (t = Xo(i.type, null, r, e, e.mode, f), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (d = t.child, !ed(t, f)) {
      var y = d.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Rn, i(y, r) && t.ref === e.ref) return xa(t, e, f);
    }
    return e.flags |= 1, t = di(d, r), t.ref = e.ref, t.return = e, e.child = t;
  }
  function bm(t, e, i, r, f) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (Rn(d, r) && t.ref === e.ref) if (ln = false, e.pendingProps = r = d, ed(t, f)) (t.flags & 131072) !== 0 && (ln = true);
      else return e.lanes = t.lanes, xa(t, e, f);
    }
    return Xf(t, e, i, r, f);
  }
  function Sm(t, e, i) {
    var r = e.pendingProps, f = r.children, d = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (r = d !== null ? d.baseLanes | i : i, t !== null) {
          for (f = e.child = t.child, d = 0; f !== null; ) d = d | f.lanes | f.childLanes, f = f.sibling;
          e.childLanes = d & ~r;
        } else e.childLanes = 0, e.child = null;
        return xm(t, e, r, i);
      }
      if ((i & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Su(e, d !== null ? d.cachePool : null), d !== null ? bp(e, d) : Mf(), lm(e);
      else return e.lanes = e.childLanes = 536870912, xm(t, e, d !== null ? d.baseLanes | i : i, i);
    } else d !== null ? (Su(e, d.cachePool), bp(e, d), fo(), e.memoizedState = null) : (t !== null && Su(e, null), Mf(), fo());
    return pn(t, e, f, i), e.child;
  }
  function xm(t, e, i, r) {
    var f = Sf();
    return f = f === null ? null : { parent: We._currentValue, pool: f }, e.memoizedState = { baseLanes: i, cachePool: f }, t !== null && Su(e, null), Mf(), lm(e), t !== null && Fo(t, e, r, true), null;
  }
  function Hu(t, e) {
    var i = e.ref;
    if (i === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(c(284));
      (t === null || t.ref !== i) && (e.flags |= 4194816);
    }
  }
  function Xf(t, e, i, r, f) {
    return Wo(e), i = Rf(t, e, i, r, void 0, f), r = Lf(), t !== null && !ln ? (zf(t, e, f), xa(t, e, f)) : (Pt && r && pt(e), e.flags |= 1, pn(t, e, i, f), e.child);
  }
  function Tm(t, e, i, r, f, d) {
    return Wo(e), e.updateQueue = null, i = xp(e, r, i, f), Sp(t), r = Lf(), t !== null && !ln ? (zf(t, e, d), xa(t, e, d)) : (Pt && r && pt(e), e.flags |= 1, pn(t, e, i, d), e.child);
  }
  function Cm(t, e, i, r, f) {
    if (Wo(e), e.stateNode === null) {
      var d = ya, y = i.contextType;
      typeof y == "object" && y !== null && (d = xn(y)), d = new i(r, d), e.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Vf, e.stateNode = d, d._reactInternals = e, d = e.stateNode, d.props = r, d.state = e.memoizedState, d.refs = {}, Tf(e), y = i.contextType, d.context = typeof y == "object" && y !== null ? xn(y) : ya, d.state = e.memoizedState, y = i.getDerivedStateFromProps, typeof y == "function" && (Gf(e, i, y, r), d.state = e.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && Vf.enqueueReplaceState(d, d.state, null), Is(e, r, d, f), js(), d.state = e.memoizedState), typeof d.componentDidMount == "function" && (e.flags |= 4194308), r = true;
    } else if (t === null) {
      d = e.stateNode;
      var T = e.memoizedProps, P = er(i, T);
      d.props = P;
      var V = d.context, at = i.contextType;
      y = ya, typeof at == "object" && at !== null && (y = xn(at));
      var ft = i.getDerivedStateFromProps;
      at = typeof ft == "function" || typeof d.getSnapshotBeforeUpdate == "function", T = e.pendingProps !== T, at || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (T || V !== y) && cm(e, d, r, y), ro = false;
      var X = e.memoizedState;
      d.state = X, Is(e, r, d, f), js(), V = e.memoizedState, T || X !== V || ro ? (typeof ft == "function" && (Gf(e, i, ft, r), V = e.memoizedState), (P = ro || um(e, i, P, r, X, V, y)) ? (at || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = V), d.props = r, d.state = V, d.context = y, r = P) : (typeof d.componentDidMount == "function" && (e.flags |= 4194308), r = false);
    } else {
      d = e.stateNode, Cf(t, e), y = e.memoizedProps, at = er(i, y), d.props = at, ft = e.pendingProps, X = d.context, V = i.contextType, P = ya, typeof V == "object" && V !== null && (P = xn(V)), T = i.getDerivedStateFromProps, (V = typeof T == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== ft || X !== P) && cm(e, d, r, P), ro = false, X = e.memoizedState, d.state = X, Is(e, r, d, f), js();
      var F = e.memoizedState;
      y !== ft || X !== F || ro || t !== null && t.dependencies !== null && _u(t.dependencies) ? (typeof T == "function" && (Gf(e, i, T, r), F = e.memoizedState), (at = ro || um(e, i, at, r, X, F, P) || t !== null && t.dependencies !== null && _u(t.dependencies)) ? (V || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(r, F, P), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(r, F, P)), typeof d.componentDidUpdate == "function" && (e.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && X === t.memoizedState || (e.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && X === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = F), d.props = r, d.state = F, d.context = P, r = at) : (typeof d.componentDidUpdate != "function" || y === t.memoizedProps && X === t.memoizedState || (e.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === t.memoizedProps && X === t.memoizedState || (e.flags |= 1024), r = false);
    }
    return d = r, Hu(t, e), r = (e.flags & 128) !== 0, d || r ? (d = e.stateNode, i = r && typeof i.getDerivedStateFromError != "function" ? null : d.render(), e.flags |= 1, t !== null && r ? (e.child = jr(e, t.child, null, f), e.child = jr(e, null, i, f)) : pn(t, e, i, f), e.memoizedState = d.state, t = e.child) : t = xa(t, e, f), t;
  }
  function wm(t, e, i, r) {
    return ao(), e.flags |= 256, pn(t, e, i, r), e.child;
  }
  var Kf = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Qf(t) {
    return { baseLanes: t, cachePool: dp() };
  }
  function Ff(t, e, i) {
    return t = t !== null ? t.childLanes & ~i : 0, e && (t |= mi), t;
  }
  function Em(t, e, i) {
    var r = e.pendingProps, f = false, d = (e.flags & 128) !== 0, y;
    if ((y = d) || (y = t !== null && t.memoizedState === null ? false : (Je.current & 2) !== 0), y && (f = true, e.flags &= -129), y = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Pt) {
        if (f ? co(e) : fo(), Pt) {
          var T = Ct, P;
          if (P = T) {
            t: {
              for (P = T, T = Ne; P.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break t;
                }
                if (P = Mi(P.nextSibling), P === null) {
                  T = null;
                  break t;
                }
              }
              T = P;
            }
            T !== null ? (e.memoizedState = { dehydrated: T, treeContext: v !== null ? { id: x, overflow: z } : null, retryLane: 536870912, hydrationErrors: null }, P = Pn(18, null, null, 0), P.stateNode = T, P.return = e, e.child = P, xt = e, Ct = null, P = true) : P = false;
          }
          P || Hn(e);
        }
        if (T = e.memoizedState, T !== null && (T = T.dehydrated, T !== null)) return Bd(T) ? e.lanes = 32 : e.lanes = 536870912, null;
        Sa(e);
      }
      return T = r.children, r = r.fallback, f ? (fo(), f = e.mode, T = Uu({ mode: "hidden", children: T }, f), r = Hi(r, f, i, null), T.return = e, r.return = e, T.sibling = r, e.child = T, f = e.child, f.memoizedState = Qf(i), f.childLanes = Ff(t, y, i), e.memoizedState = Kf, r) : (co(e), Wf(e, T));
    }
    if (P = t.memoizedState, P !== null && (T = P.dehydrated, T !== null)) {
      if (d) e.flags & 256 ? (co(e), e.flags &= -257, e = Jf(t, e, i)) : e.memoizedState !== null ? (fo(), e.child = t.child, e.flags |= 128, e = null) : (fo(), f = r.fallback, T = e.mode, r = Uu({ mode: "visible", children: r.children }, T), f = Hi(f, T, i, null), f.flags |= 2, r.return = e, f.return = e, r.sibling = f, e.child = r, jr(e, t.child, null, i), r = e.child, r.memoizedState = Qf(i), r.childLanes = Ff(t, y, i), e.memoizedState = Kf, e = f);
      else if (co(e), Bd(T)) {
        if (y = T.nextSibling && T.nextSibling.dataset, y) var V = y.dgst;
        y = V, r = Error(c(419)), r.stack = "", r.digest = y, oo({ value: r, source: null, stack: null }), e = Jf(t, e, i);
      } else if (ln || Fo(t, e, i, false), y = (i & t.childLanes) !== 0, ln || y) {
        if (y = Ee, y !== null && (r = i & -i, r = (r & 42) !== 0 ? 1 : ms(r), r = (r & (y.suspendedLanes | i)) !== 0 ? 0 : r, r !== 0 && r !== P.retryLane)) throw P.retryLane = r, no(t, r), ii(y, t, r), vm;
        T.data === "$?" || vd(), e = Jf(t, e, i);
      } else T.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = P.treeContext, Ct = Mi(T.nextSibling), xt = e, Pt = true, we = null, Ne = false, t !== null && (u[p++] = x, u[p++] = z, u[p++] = v, x = t.id, z = t.overflow, v = e), e = Wf(e, r.children), e.flags |= 4096);
      return e;
    }
    return f ? (fo(), f = r.fallback, T = e.mode, P = t.child, V = P.sibling, r = di(P, { mode: "hidden", children: r.children }), r.subtreeFlags = P.subtreeFlags & 65011712, V !== null ? f = di(V, f) : (f = Hi(f, T, i, null), f.flags |= 2), f.return = e, r.return = e, r.sibling = f, e.child = r, r = f, f = e.child, T = t.child.memoizedState, T === null ? T = Qf(i) : (P = T.cachePool, P !== null ? (V = We._currentValue, P = P.parent !== V ? { parent: V, pool: V } : P) : P = dp(), T = { baseLanes: T.baseLanes | i, cachePool: P }), f.memoizedState = T, f.childLanes = Ff(t, y, i), e.memoizedState = Kf, r) : (co(e), i = t.child, t = i.sibling, i = di(i, { mode: "visible", children: r.children }), i.return = e, i.sibling = null, t !== null && (y = e.deletions, y === null ? (e.deletions = [t], e.flags |= 16) : y.push(t)), e.child = i, e.memoizedState = null, i);
  }
  function Wf(t, e) {
    return e = Uu({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e;
  }
  function Uu(t, e) {
    return t = Pn(22, t, null, e), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function Jf(t, e, i) {
    return jr(e, t.child, null, i), t = Wf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
  }
  function Mm(t, e, i) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), Qo(t.return, e, i);
  }
  function td(t, e, i, r, f) {
    var d = t.memoizedState;
    d === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: i, tailMode: f } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = r, d.tail = i, d.tailMode = f);
  }
  function Om(t, e, i) {
    var r = e.pendingProps, f = r.revealOrder, d = r.tail;
    if (pn(t, e, r.children, i), r = Je.current, (r & 2) !== 0) r = r & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Mm(t, i, e);
        else if (t.tag === 19) Mm(t, i, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      r &= 1;
    }
    switch (ct(Je, r), f) {
      case "forwards":
        for (i = e.child, f = null; i !== null; ) t = i.alternate, t !== null && ku(t) === null && (f = i), i = i.sibling;
        i = f, i === null ? (f = e.child, e.child = null) : (f = i.sibling, i.sibling = null), td(e, false, f, i, d);
        break;
      case "backwards":
        for (i = null, f = e.child, e.child = null; f !== null; ) {
          if (t = f.alternate, t !== null && ku(t) === null) {
            e.child = f;
            break;
          }
          t = f.sibling, f.sibling = i, i = f, f = t;
        }
        td(e, true, i, null, d);
        break;
      case "together":
        td(e, false, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function xa(t, e, i) {
    if (t !== null && (e.dependencies = t.dependencies), vo |= e.lanes, (i & e.childLanes) === 0) if (t !== null) {
      if (Fo(t, e, i, false), (i & e.childLanes) === 0) return null;
    } else return null;
    if (t !== null && e.child !== t.child) throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, i = di(t, t.pendingProps), e.child = i, i.return = e; t.sibling !== null; ) t = t.sibling, i = i.sibling = di(t, t.pendingProps), i.return = e;
      i.sibling = null;
    }
    return e.child;
  }
  function ed(t, e) {
    return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && _u(t)));
  }
  function X_(t, e, i) {
    switch (e.tag) {
      case 3:
        Lt(e, e.stateNode.containerInfo), Ui(e, We, t.memoizedState.cache), ao();
        break;
      case 27:
      case 5:
        Dt(e);
        break;
      case 4:
        Lt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ui(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var r = e.memoizedState;
        if (r !== null) return r.dehydrated !== null ? (co(e), e.flags |= 128, null) : (i & e.child.childLanes) !== 0 ? Em(t, e, i) : (co(e), t = xa(t, e, i), t !== null ? t.sibling : null);
        co(e);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (r = (i & e.childLanes) !== 0, r || (Fo(t, e, i, false), r = (i & e.childLanes) !== 0), f) {
          if (r) return Om(t, e, i);
          e.flags |= 128;
        }
        if (f = e.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), ct(Je, Je.current), r) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, Sm(t, e, i);
      case 24:
        Ui(e, We, t.memoizedState.cache);
    }
    return xa(t, e, i);
  }
  function Am(t, e, i) {
    if (t !== null) if (t.memoizedProps !== e.pendingProps) ln = true;
    else {
      if (!ed(t, i) && (e.flags & 128) === 0) return ln = false, X_(t, e, i);
      ln = (t.flags & 131072) !== 0;
    }
    else ln = false, Pt && (e.flags & 1048576) !== 0 && W(e, o, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var r = e.elementType, f = r._init;
          if (r = f(r._payload), e.type = r, typeof r == "function") Lr(r) ? (t = er(r, t), e.tag = 1, e = Cm(null, e, r, t, i)) : (e.tag = 0, e = Xf(null, e, r, t, i));
          else {
            if (r != null) {
              if (f = r.$$typeof, f === U) {
                e.tag = 11, e = ym(null, e, r, t, i);
                break t;
              } else if (f === ot) {
                e.tag = 14, e = _m(null, e, r, t, i);
                break t;
              }
            }
            throw e = yt(r) || r, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Xf(t, e, e.type, e.pendingProps, i);
      case 1:
        return r = e.type, f = er(r, e.pendingProps), Cm(t, e, r, f, i);
      case 3:
        t: {
          if (Lt(e, e.stateNode.containerInfo), t === null) throw Error(c(387));
          r = e.pendingProps;
          var d = e.memoizedState;
          f = d.element, Cf(t, e), Is(e, r, null, i);
          var y = e.memoizedState;
          if (r = y.cache, Ui(e, We, r), r !== d.cache && Pr(e, [We], i, true), js(), r = y.element, d.isDehydrated) if (d = { element: r, isDehydrated: false, cache: y.cache }, e.updateQueue.baseState = d, e.memoizedState = d, e.flags & 256) {
            e = wm(t, e, r, i);
            break t;
          } else if (r !== f) {
            f = Ln(Error(c(424)), e), oo(f), e = wm(t, e, r, i);
            break t;
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (Ct = Mi(t.firstChild), xt = e, Pt = true, we = null, Ne = true, i = sm(e, null, r, i), e.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          }
          else {
            if (ao(), r === f) {
              e = xa(t, e, i);
              break t;
            }
            pn(t, e, r, i);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Hu(t, e), t === null ? (i = Pg(e.type, null, e.pendingProps, null)) ? e.memoizedState = i : Pt || (i = e.type, t = e.pendingProps, r = Ju(gt.current).createElement(i), r[on] = e, r[_n] = t, gn(r, i, t), Ve(r), e.stateNode = r) : e.memoizedState = Pg(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return Dt(e), t === null && Pt && (r = e.stateNode = Rg(e.type, e.pendingProps, gt.current), xt = e, Ne = true, f = Ct, So(e.type) ? (kd = f, Ct = Mi(r.firstChild)) : Ct = f), pn(t, e, e.pendingProps.children, i), Hu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Pt && ((f = r = Ct) && (r = x0(r, e.type, e.pendingProps, Ne), r !== null ? (e.stateNode = r, xt = e, Ct = Mi(r.firstChild), Ne = false, f = true) : f = false), f || Hn(e)), Dt(e), f = e.type, d = e.pendingProps, y = t !== null ? t.memoizedProps : null, r = d.children, Ld(f, d) ? r = null : y !== null && Ld(f, y) && (e.flags |= 32), e.memoizedState !== null && (f = Rf(t, e, Z_, null, null, i), cl._currentValue = f), Hu(t, e), pn(t, e, r, i), e.child;
      case 6:
        return t === null && Pt && ((t = i = Ct) && (i = T0(i, e.pendingProps, Ne), i !== null ? (e.stateNode = i, xt = e, Ct = null, t = true) : t = false), t || Hn(e)), null;
      case 13:
        return Em(t, e, i);
      case 4:
        return Lt(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = jr(e, null, r, i) : pn(t, e, r, i), e.child;
      case 11:
        return ym(t, e, e.type, e.pendingProps, i);
      case 7:
        return pn(t, e, e.pendingProps, i), e.child;
      case 8:
        return pn(t, e, e.pendingProps.children, i), e.child;
      case 12:
        return pn(t, e, e.pendingProps.children, i), e.child;
      case 10:
        return r = e.pendingProps, Ui(e, e.type, r.value), pn(t, e, r.children, i), e.child;
      case 9:
        return f = e.type._context, r = e.pendingProps.children, Wo(e), f = xn(f), r = r(f), e.flags |= 1, pn(t, e, r, i), e.child;
      case 14:
        return _m(t, e, e.type, e.pendingProps, i);
      case 15:
        return bm(t, e, e.type, e.pendingProps, i);
      case 19:
        return Om(t, e, i);
      case 31:
        return r = e.pendingProps, i = e.mode, r = { mode: r.mode, children: r.children }, t === null ? (i = Uu(r, i), i.ref = e.ref, e.child = i, i.return = e, e = i) : (i = di(t.child, r), i.ref = e.ref, e.child = i, i.return = e, e = i), e;
      case 22:
        return Sm(t, e, i);
      case 24:
        return Wo(e), r = xn(We), t === null ? (f = Sf(), f === null && (f = Ee, d = _f(), f.pooledCache = d, d.refCount++, d !== null && (f.pooledCacheLanes |= i), f = d), e.memoizedState = { parent: r, cache: f }, Tf(e), Ui(e, We, f)) : ((t.lanes & i) !== 0 && (Cf(t, e), Is(e, null, null, i), js()), f = t.memoizedState, d = e.memoizedState, f.parent !== r ? (f = { parent: r, cache: r }, e.memoizedState = f, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = f), Ui(e, We, r)) : (r = d.cache, Ui(e, We, r), r !== f.cache && Pr(e, [We], i, true))), pn(t, e, e.pendingProps.children, i), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function Ta(t) {
    t.flags |= 4;
  }
  function Rm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Hg(e)) {
      if (e = pi.current, e !== null && ((Jt & 4194048) === Jt ? Zi !== null : (Jt & 62914560) !== Jt && (Jt & 536870912) === 0 || e !== Zi)) throw Us = xf, hp;
      t.flags |= 8192;
    }
  }
  function Zu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ps() : 536870912, t.lanes |= e, Gr |= e);
  }
  function Ks(t, e) {
    if (!Pt) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var i = null; e !== null; ) e.alternate !== null && (i = e), e = e.sibling;
        i === null ? t.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = t.tail;
        for (var r = null; i !== null; ) i.alternate !== null && (r = i), i = i.sibling;
        r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null;
    }
  }
  function De(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, i = 0, r = 0;
    if (e) for (var f = t.child; f !== null; ) i |= f.lanes | f.childLanes, r |= f.subtreeFlags & 65011712, r |= f.flags & 65011712, f.return = t, f = f.sibling;
    else for (f = t.child; f !== null; ) i |= f.lanes | f.childLanes, r |= f.subtreeFlags, r |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= r, t.childLanes = i, e;
  }
  function K_(t, e, i) {
    var r = e.pendingProps;
    switch (St(e), e.tag) {
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
        return De(e), null;
      case 1:
        return De(e), null;
      case 3:
        return i = e.stateNode, r = null, t !== null && (r = t.memoizedState.cache), e.memoizedState.cache !== r && (e.flags |= 2048), wi(We), le(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (Ko(e) ? Ta(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, yu())), De(e), null;
      case 26:
        return i = e.memoizedState, t === null ? (Ta(e), i !== null ? (De(e), Rm(e, i)) : (De(e), e.flags &= -16777217)) : i ? i !== t.memoizedState ? (Ta(e), De(e), Rm(e, i)) : (De(e), e.flags &= -16777217) : (t.memoizedProps !== r && Ta(e), De(e), e.flags &= -16777217), null;
      case 27:
        Gt(e), i = gt.current;
        var f = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== r && Ta(e);
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(c(166));
            return De(e), null;
          }
          t = mt.current, Ko(e) ? gu(e) : (t = Rg(f, r, i), e.stateNode = t, Ta(e));
        }
        return De(e), null;
      case 5:
        if (Gt(e), i = e.type, t !== null && e.stateNode != null) t.memoizedProps !== r && Ta(e);
        else {
          if (!r) {
            if (e.stateNode === null) throw Error(c(166));
            return De(e), null;
          }
          if (t = mt.current, Ko(e)) gu(e);
          else {
            switch (f = Ju(gt.current), t) {
              case 1:
                t = f.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                t = f.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    t = f.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    t = f.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                    break;
                  case "script":
                    t = f.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof r.is == "string" ? f.createElement("select", { is: r.is }) : f.createElement("select"), r.multiple ? t.multiple = true : r.size && (t.size = r.size);
                    break;
                  default:
                    t = typeof r.is == "string" ? f.createElement(i, { is: r.is }) : f.createElement(i);
                }
            }
            t[on] = e, t[_n] = r;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) t.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = t;
            t: switch (gn(t, i, r), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!r.autoFocus;
                break t;
              case "img":
                t = true;
                break t;
              default:
                t = false;
            }
            t && Ta(e);
          }
        }
        return De(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== r && Ta(e);
        else {
          if (typeof r != "string" && e.stateNode === null) throw Error(c(166));
          if (t = gt.current, Ko(e)) {
            if (t = e.stateNode, i = e.memoizedProps, r = null, f = xt, f !== null) switch (f.tag) {
              case 27:
              case 5:
                r = f.memoizedProps;
            }
            t[on] = e, t = !!(t.nodeValue === i || r !== null && r.suppressHydrationWarning === true || Tg(t.nodeValue, i)), t || Hn(e);
          } else t = Ju(t).createTextNode(r), t[on] = e, e.stateNode = t;
        }
        return De(e), null;
      case 13:
        if (r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (f = Ko(e), r !== null && r.dehydrated !== null) {
            if (t === null) {
              if (!f) throw Error(c(318));
              if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(c(317));
              f[on] = e;
            } else ao(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            De(e), f = false;
          } else f = yu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = f), f = true;
          if (!f) return e.flags & 256 ? (Sa(e), e) : (Sa(e), null);
        }
        if (Sa(e), (e.flags & 128) !== 0) return e.lanes = i, e;
        if (i = r !== null, t = t !== null && t.memoizedState !== null, i) {
          r = e.child, f = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (f = r.alternate.memoizedState.cachePool.pool);
          var d = null;
          r.memoizedState !== null && r.memoizedState.cachePool !== null && (d = r.memoizedState.cachePool.pool), d !== f && (r.flags |= 2048);
        }
        return i !== t && i && (e.child.flags |= 8192), Zu(e, e.updateQueue), De(e), null;
      case 4:
        return le(), t === null && Ed(e.stateNode.containerInfo), De(e), null;
      case 10:
        return wi(e.type), De(e), null;
      case 19:
        if (ut(Je), f = e.memoizedState, f === null) return De(e), null;
        if (r = (e.flags & 128) !== 0, d = f.rendering, d === null) if (r) Ks(f, false);
        else {
          if (Ue !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
            if (d = ku(t), d !== null) {
              for (e.flags |= 128, Ks(f, false), t = d.updateQueue, e.updateQueue = t, Zu(e, t), e.subtreeFlags = 0, t = i, i = e.child; i !== null; ) Bs(i, t), i = i.sibling;
              return ct(Je, Je.current & 1 | 2), e.child;
            }
            t = t.sibling;
          }
          f.tail !== null && ie() > $u && (e.flags |= 128, r = true, Ks(f, false), e.lanes = 4194304);
        }
        else {
          if (!r) if (t = ku(d), t !== null) {
            if (e.flags |= 128, r = true, t = t.updateQueue, e.updateQueue = t, Zu(e, t), Ks(f, true), f.tail === null && f.tailMode === "hidden" && !d.alternate && !Pt) return De(e), null;
          } else 2 * ie() - f.renderingStartTime > $u && i !== 536870912 && (e.flags |= 128, r = true, Ks(f, false), e.lanes = 4194304);
          f.isBackwards ? (d.sibling = e.child, e.child = d) : (t = f.last, t !== null ? t.sibling = d : e.child = d, f.last = d);
        }
        return f.tail !== null ? (e = f.tail, f.rendering = e, f.tail = e.sibling, f.renderingStartTime = ie(), e.sibling = null, t = Je.current, ct(Je, r ? t & 1 | 2 : t & 1), e) : (De(e), null);
      case 22:
      case 23:
        return Sa(e), Of(), r = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== r && (e.flags |= 8192) : r && (e.flags |= 8192), r ? (i & 536870912) !== 0 && (e.flags & 128) === 0 && (De(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : De(e), i = e.updateQueue, i !== null && Zu(e, i.retryQueue), i = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), r = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), r !== i && (e.flags |= 2048), t !== null && ut(Jo), null;
      case 24:
        return i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), wi(We), De(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Q_(t, e) {
    switch (St(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return wi(We), le(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Gt(e), null;
      case 13:
        if (Sa(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(c(340));
          ao();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return ut(Je), null;
      case 4:
        return le(), null;
      case 10:
        return wi(e.type), null;
      case 22:
      case 23:
        return Sa(e), Of(), t !== null && ut(Jo), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return wi(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lm(t, e) {
    switch (St(e), e.tag) {
      case 3:
        wi(We), le();
        break;
      case 26:
      case 27:
      case 5:
        Gt(e);
        break;
      case 4:
        le();
        break;
      case 13:
        Sa(e);
        break;
      case 19:
        ut(Je);
        break;
      case 10:
        wi(e.type);
        break;
      case 22:
      case 23:
        Sa(e), Of(), t !== null && ut(Jo);
        break;
      case 24:
        wi(We);
    }
  }
  function Qs(t, e) {
    try {
      var i = e.updateQueue, r = i !== null ? i.lastEffect : null;
      if (r !== null) {
        var f = r.next;
        i = f;
        do {
          if ((i.tag & t) === t) {
            r = void 0;
            var d = i.create, y = i.inst;
            r = d(), y.destroy = r;
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (T) {
      be(e, e.return, T);
    }
  }
  function ho(t, e, i) {
    try {
      var r = e.updateQueue, f = r !== null ? r.lastEffect : null;
      if (f !== null) {
        var d = f.next;
        r = d;
        do {
          if ((r.tag & t) === t) {
            var y = r.inst, T = y.destroy;
            if (T !== void 0) {
              y.destroy = void 0, f = e;
              var P = i, V = T;
              try {
                V();
              } catch (at) {
                be(f, P, at);
              }
            }
          }
          r = r.next;
        } while (r !== d);
      }
    } catch (at) {
      be(e, e.return, at);
    }
  }
  function zm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var i = t.stateNode;
      try {
        _p(e, i);
      } catch (r) {
        be(t, t.return, r);
      }
    }
  }
  function Pm(t, e, i) {
    i.props = er(t.type, t.memoizedProps), i.state = t.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (r) {
      be(t, e, r);
    }
  }
  function Fs(t, e) {
    try {
      var i = t.ref;
      if (i !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof i == "function" ? t.refCleanup = i(r) : i.current = r;
      }
    } catch (f) {
      be(t, e, f);
    }
  }
  function ji(t, e) {
    var i = t.ref, r = t.refCleanup;
    if (i !== null) if (typeof r == "function") try {
      r();
    } catch (f) {
      be(t, e, f);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof i == "function") try {
      i(null);
    } catch (f) {
      be(t, e, f);
    }
    else i.current = null;
  }
  function Bm(t) {
    var e = t.type, i = t.memoizedProps, r = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && r.focus();
          break t;
        case "img":
          i.src ? r.src = i.src : i.srcSet && (r.srcset = i.srcSet);
      }
    } catch (f) {
      be(t, t.return, f);
    }
  }
  function nd(t, e, i) {
    try {
      var r = t.stateNode;
      v0(r, t.type, i, e), r[_n] = e;
    } catch (f) {
      be(t, t.return, f);
    }
  }
  function km(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && So(t.type) || t.tag === 4;
  }
  function id(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || km(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && So(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ad(t, e, i) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(t, e) : (e = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, e.appendChild(t), i = i._reactRootContainer, i != null || e.onclick !== null || (e.onclick = Wu));
    else if (r !== 4 && (r === 27 && So(t.type) && (i = t.stateNode, e = null), t = t.child, t !== null)) for (ad(t, e, i), t = t.sibling; t !== null; ) ad(t, e, i), t = t.sibling;
  }
  function ju(t, e, i) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? i.insertBefore(t, e) : i.appendChild(t);
    else if (r !== 4 && (r === 27 && So(t.type) && (i = t.stateNode), t = t.child, t !== null)) for (ju(t, e, i), t = t.sibling; t !== null; ) ju(t, e, i), t = t.sibling;
  }
  function Nm(t) {
    var e = t.stateNode, i = t.memoizedProps;
    try {
      for (var r = t.type, f = e.attributes; f.length; ) e.removeAttributeNode(f[0]);
      gn(e, r, i), e[on] = t, e[_n] = i;
    } catch (d) {
      be(t, t.return, d);
    }
  }
  var Ca = false, qe = false, od = false, Dm = typeof WeakSet == "function" ? WeakSet : Set, un = null;
  function F_(t, e) {
    if (t = t.containerInfo, Ad = oc, t = Io(t), $o(t)) {
      if ("selectionStart" in t) var i = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        i = (i = t.ownerDocument) && i.defaultView || window;
        var r = i.getSelection && i.getSelection();
        if (r && r.rangeCount !== 0) {
          i = r.anchorNode;
          var f = r.anchorOffset, d = r.focusNode;
          r = r.focusOffset;
          try {
            i.nodeType, d.nodeType;
          } catch {
            i = null;
            break t;
          }
          var y = 0, T = -1, P = -1, V = 0, at = 0, ft = t, X = null;
          e: for (; ; ) {
            for (var F; ft !== i || f !== 0 && ft.nodeType !== 3 || (T = y + f), ft !== d || r !== 0 && ft.nodeType !== 3 || (P = y + r), ft.nodeType === 3 && (y += ft.nodeValue.length), (F = ft.firstChild) !== null; ) X = ft, ft = F;
            for (; ; ) {
              if (ft === t) break e;
              if (X === i && ++V === f && (T = y), X === d && ++at === r && (P = y), (F = ft.nextSibling) !== null) break;
              ft = X, X = ft.parentNode;
            }
            ft = F;
          }
          i = T === -1 || P === -1 ? null : { start: T, end: P };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Rd = { focusedElem: t, selectionRange: i }, oc = false, un = e; un !== null; ) if (e = un, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, un = t;
    else for (; un !== null; ) {
      switch (e = un, d = e.alternate, t = e.flags, e.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && d !== null) {
            t = void 0, i = e, f = d.memoizedProps, d = d.memoizedState, r = i.stateNode;
            try {
              var zt = er(i.type, f, i.elementType === i.type);
              t = r.getSnapshotBeforeUpdate(zt, d), r.__reactInternalSnapshotBeforeUpdate = t;
            } catch (At) {
              be(i, i.return, At);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = e.stateNode.containerInfo, i = t.nodeType, i === 9) Pd(t);
            else if (i === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Pd(t);
                break;
              default:
                t.textContent = "";
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
          if ((t & 1024) !== 0) throw Error(c(163));
      }
      if (t = e.sibling, t !== null) {
        t.return = e.return, un = t;
        break;
      }
      un = e.return;
    }
  }
  function Hm(t, e, i) {
    var r = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        po(t, i), r & 4 && Qs(5, i);
        break;
      case 1:
        if (po(t, i), r & 4) if (t = i.stateNode, e === null) try {
          t.componentDidMount();
        } catch (y) {
          be(i, i.return, y);
        }
        else {
          var f = er(i.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            t.componentDidUpdate(f, e, t.__reactInternalSnapshotBeforeUpdate);
          } catch (y) {
            be(i, i.return, y);
          }
        }
        r & 64 && zm(i), r & 512 && Fs(i, i.return);
        break;
      case 3:
        if (po(t, i), r & 64 && (t = i.updateQueue, t !== null)) {
          if (e = null, i.child !== null) switch (i.child.tag) {
            case 27:
            case 5:
              e = i.child.stateNode;
              break;
            case 1:
              e = i.child.stateNode;
          }
          try {
            _p(t, e);
          } catch (y) {
            be(i, i.return, y);
          }
        }
        break;
      case 27:
        e === null && r & 4 && Nm(i);
      case 26:
      case 5:
        po(t, i), e === null && r & 4 && Bm(i), r & 512 && Fs(i, i.return);
        break;
      case 12:
        po(t, i);
        break;
      case 13:
        po(t, i), r & 4 && jm(t, i), r & 64 && (t = i.memoizedState, t !== null && (t = t.dehydrated, t !== null && (i = r0.bind(null, i), C0(t, i))));
        break;
      case 22:
        if (r = i.memoizedState !== null || Ca, !r) {
          e = e !== null && e.memoizedState !== null || qe, f = Ca;
          var d = qe;
          Ca = r, (qe = e) && !d ? mo(t, i, (i.subtreeFlags & 8772) !== 0) : po(t, i), Ca = f, qe = d;
        }
        break;
      case 30:
        break;
      default:
        po(t, i);
    }
  }
  function Um(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Um(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && pr(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ze = null, Zn = false;
  function wa(t, e, i) {
    for (i = i.child; i !== null; ) Zm(t, e, i), i = i.sibling;
  }
  function Zm(t, e, i) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function") try {
      Ht.onCommitFiberUnmount(pe, i);
    } catch {
    }
    switch (i.tag) {
      case 26:
        qe || ji(i, e), wa(t, e, i), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        qe || ji(i, e);
        var r = ze, f = Zn;
        So(i.type) && (ze = i.stateNode, Zn = false), wa(t, e, i), rl(i.stateNode), ze = r, Zn = f;
        break;
      case 5:
        qe || ji(i, e);
      case 6:
        if (r = ze, f = Zn, ze = null, wa(t, e, i), ze = r, Zn = f, ze !== null) if (Zn) try {
          (ze.nodeType === 9 ? ze.body : ze.nodeName === "HTML" ? ze.ownerDocument.body : ze).removeChild(i.stateNode);
        } catch (d) {
          be(i, e, d);
        }
        else try {
          ze.removeChild(i.stateNode);
        } catch (d) {
          be(i, e, d);
        }
        break;
      case 18:
        ze !== null && (Zn ? (t = ze, Og(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, i.stateNode), pl(t)) : Og(ze, i.stateNode));
        break;
      case 4:
        r = ze, f = Zn, ze = i.stateNode.containerInfo, Zn = true, wa(t, e, i), ze = r, Zn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qe || ho(2, i, e), qe || ho(4, i, e), wa(t, e, i);
        break;
      case 1:
        qe || (ji(i, e), r = i.stateNode, typeof r.componentWillUnmount == "function" && Pm(i, e, r)), wa(t, e, i);
        break;
      case 21:
        wa(t, e, i);
        break;
      case 22:
        qe = (r = qe) || i.memoizedState !== null, wa(t, e, i), qe = r;
        break;
      default:
        wa(t, e, i);
    }
  }
  function jm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      pl(t);
    } catch (i) {
      be(e, e.return, i);
    }
  }
  function W_(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Dm()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Dm()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function rd(t, e) {
    var i = W_(t);
    e.forEach(function(r) {
      var f = s0.bind(null, t, r);
      i.has(r) || (i.add(r), r.then(f, f));
    });
  }
  function Jn(t, e) {
    var i = e.deletions;
    if (i !== null) for (var r = 0; r < i.length; r++) {
      var f = i[r], d = t, y = e, T = y;
      t: for (; T !== null; ) {
        switch (T.tag) {
          case 27:
            if (So(T.type)) {
              ze = T.stateNode, Zn = false;
              break t;
            }
            break;
          case 5:
            ze = T.stateNode, Zn = false;
            break t;
          case 3:
          case 4:
            ze = T.stateNode.containerInfo, Zn = true;
            break t;
        }
        T = T.return;
      }
      if (ze === null) throw Error(c(160));
      Zm(d, y, f), ze = null, Zn = false, d = f.alternate, d !== null && (d.return = null), f.return = null;
    }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) Im(e, t), e = e.sibling;
  }
  var Ei = null;
  function Im(t, e) {
    var i = t.alternate, r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jn(e, t), ti(t), r & 4 && (ho(3, t, t.return), Qs(3, t), ho(5, t, t.return));
        break;
      case 1:
        Jn(e, t), ti(t), r & 512 && (qe || i === null || ji(i, i.return)), r & 64 && Ca && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (i = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = i === null ? r : i.concat(r))));
        break;
      case 26:
        var f = Ei;
        if (Jn(e, t), ti(t), r & 512 && (qe || i === null || ji(i, i.return)), r & 4) {
          var d = i !== null ? i.memoizedState : null;
          if (r = t.memoizedState, i === null) if (r === null) if (t.stateNode === null) {
            t: {
              r = t.type, i = t.memoizedProps, f = f.ownerDocument || f;
              e: switch (r) {
                case "title":
                  d = f.getElementsByTagName("title")[0], (!d || d[Da] || d[on] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = f.createElement(r), f.head.insertBefore(d, f.querySelector("head > title"))), gn(d, r, i), d[on] = t, Ve(d), r = d;
                  break t;
                case "link":
                  var y = Ng("link", "href", f).get(r + (i.href || ""));
                  if (y) {
                    for (var T = 0; T < y.length; T++) if (d = y[T], d.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && d.getAttribute("rel") === (i.rel == null ? null : i.rel) && d.getAttribute("title") === (i.title == null ? null : i.title) && d.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                      y.splice(T, 1);
                      break e;
                    }
                  }
                  d = f.createElement(r), gn(d, r, i), f.head.appendChild(d);
                  break;
                case "meta":
                  if (y = Ng("meta", "content", f).get(r + (i.content || ""))) {
                    for (T = 0; T < y.length; T++) if (d = y[T], d.getAttribute("content") === (i.content == null ? null : "" + i.content) && d.getAttribute("name") === (i.name == null ? null : i.name) && d.getAttribute("property") === (i.property == null ? null : i.property) && d.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && d.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                      y.splice(T, 1);
                      break e;
                    }
                  }
                  d = f.createElement(r), gn(d, r, i), f.head.appendChild(d);
                  break;
                default:
                  throw Error(c(468, r));
              }
              d[on] = t, Ve(d), r = d;
            }
            t.stateNode = r;
          } else Dg(f, t.type, t.stateNode);
          else t.stateNode = kg(f, r, t.memoizedProps);
          else d !== r ? (d === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : d.count--, r === null ? Dg(f, t.type, t.stateNode) : kg(f, r, t.memoizedProps)) : r === null && t.stateNode !== null && nd(t, t.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Jn(e, t), ti(t), r & 512 && (qe || i === null || ji(i, i.return)), i !== null && r & 4 && nd(t, t.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (Jn(e, t), ti(t), r & 512 && (qe || i === null || ji(i, i.return)), t.flags & 32) {
          f = t.stateNode;
          try {
            si(f, "");
          } catch (F) {
            be(t, t.return, F);
          }
        }
        r & 4 && t.stateNode != null && (f = t.memoizedProps, nd(t, f, i !== null ? i.memoizedProps : f)), r & 1024 && (od = true);
        break;
      case 6:
        if (Jn(e, t), ti(t), r & 4) {
          if (t.stateNode === null) throw Error(c(162));
          r = t.memoizedProps, i = t.stateNode;
          try {
            i.nodeValue = r;
          } catch (F) {
            be(t, t.return, F);
          }
        }
        break;
      case 3:
        if (nc = null, f = Ei, Ei = tc(e.containerInfo), Jn(e, t), Ei = f, ti(t), r & 4 && i !== null && i.memoizedState.isDehydrated) try {
          pl(e.containerInfo);
        } catch (F) {
          be(t, t.return, F);
        }
        od && (od = false, $m(t));
        break;
      case 4:
        r = Ei, Ei = tc(t.stateNode.containerInfo), Jn(e, t), ti(t), Ei = r;
        break;
      case 12:
        Jn(e, t), ti(t);
        break;
      case 13:
        Jn(e, t), ti(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (dd = ie()), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, rd(t, r)));
        break;
      case 22:
        f = t.memoizedState !== null;
        var P = i !== null && i.memoizedState !== null, V = Ca, at = qe;
        if (Ca = V || f, qe = at || P, Jn(e, t), qe = at, Ca = V, ti(t), r & 8192) t: for (e = t.stateNode, e._visibility = f ? e._visibility & -2 : e._visibility | 1, f && (i === null || P || Ca || qe || nr(t)), i = null, e = t; ; ) {
          if (e.tag === 5 || e.tag === 26) {
            if (i === null) {
              P = i = e;
              try {
                if (d = P.stateNode, f) y = d.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                else {
                  T = P.stateNode;
                  var ft = P.memoizedProps.style, X = ft != null && ft.hasOwnProperty("display") ? ft.display : null;
                  T.style.display = X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                }
              } catch (F) {
                be(P, P.return, F);
              }
            }
          } else if (e.tag === 6) {
            if (i === null) {
              P = e;
              try {
                P.stateNode.nodeValue = f ? "" : P.memoizedProps;
              } catch (F) {
                be(P, P.return, F);
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break t;
            i === e && (i = null), e = e.return;
          }
          i === e && (i = null), e.sibling.return = e.return, e = e.sibling;
        }
        r & 4 && (r = t.updateQueue, r !== null && (i = r.retryQueue, i !== null && (r.retryQueue = null, rd(t, i))));
        break;
      case 19:
        Jn(e, t), ti(t), r & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, rd(t, r)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jn(e, t), ti(t);
    }
  }
  function ti(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var i, r = t.return; r !== null; ) {
          if (km(r)) {
            i = r;
            break;
          }
          r = r.return;
        }
        if (i == null) throw Error(c(160));
        switch (i.tag) {
          case 27:
            var f = i.stateNode, d = id(t);
            ju(t, d, f);
            break;
          case 5:
            var y = i.stateNode;
            i.flags & 32 && (si(y, ""), i.flags &= -33);
            var T = id(t);
            ju(t, T, y);
            break;
          case 3:
          case 4:
            var P = i.stateNode.containerInfo, V = id(t);
            ad(t, V, P);
            break;
          default:
            throw Error(c(161));
        }
      } catch (at) {
        be(t, t.return, at);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function $m(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var e = t;
      $m(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
    }
  }
  function po(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Hm(t, e.alternate, e), e = e.sibling;
  }
  function nr(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ho(4, e, e.return), nr(e);
          break;
        case 1:
          ji(e, e.return);
          var i = e.stateNode;
          typeof i.componentWillUnmount == "function" && Pm(e, e.return, i), nr(e);
          break;
        case 27:
          rl(e.stateNode);
        case 26:
        case 5:
          ji(e, e.return), nr(e);
          break;
        case 22:
          e.memoizedState === null && nr(e);
          break;
        case 30:
          nr(e);
          break;
        default:
          nr(e);
      }
      t = t.sibling;
    }
  }
  function mo(t, e, i) {
    for (i = i && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var r = e.alternate, f = t, d = e, y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          mo(f, d, i), Qs(4, d);
          break;
        case 1:
          if (mo(f, d, i), r = d, f = r.stateNode, typeof f.componentDidMount == "function") try {
            f.componentDidMount();
          } catch (V) {
            be(r, r.return, V);
          }
          if (r = d, f = r.updateQueue, f !== null) {
            var T = r.stateNode;
            try {
              var P = f.shared.hiddenCallbacks;
              if (P !== null) for (f.shared.hiddenCallbacks = null, f = 0; f < P.length; f++) yp(P[f], T);
            } catch (V) {
              be(r, r.return, V);
            }
          }
          i && y & 64 && zm(d), Fs(d, d.return);
          break;
        case 27:
          Nm(d);
        case 26:
        case 5:
          mo(f, d, i), i && r === null && y & 4 && Bm(d), Fs(d, d.return);
          break;
        case 12:
          mo(f, d, i);
          break;
        case 13:
          mo(f, d, i), i && y & 4 && jm(f, d);
          break;
        case 22:
          d.memoizedState === null && mo(f, d, i), Fs(d, d.return);
          break;
        case 30:
          break;
        default:
          mo(f, d, i);
      }
      e = e.sibling;
    }
  }
  function sd(t, e) {
    var i = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== i && (t != null && t.refCount++, i != null && Ns(i));
  }
  function ld(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ns(t));
  }
  function Ii(t, e, i, r) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) qm(t, e, i, r), e = e.sibling;
  }
  function qm(t, e, i, r) {
    var f = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ii(t, e, i, r), f & 2048 && Qs(9, e);
        break;
      case 1:
        Ii(t, e, i, r);
        break;
      case 3:
        Ii(t, e, i, r), f & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ns(t)));
        break;
      case 12:
        if (f & 2048) {
          Ii(t, e, i, r), t = e.stateNode;
          try {
            var d = e.memoizedProps, y = d.id, T = d.onPostCommit;
            typeof T == "function" && T(y, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (P) {
            be(e, e.return, P);
          }
        } else Ii(t, e, i, r);
        break;
      case 13:
        Ii(t, e, i, r);
        break;
      case 23:
        break;
      case 22:
        d = e.stateNode, y = e.alternate, e.memoizedState !== null ? d._visibility & 2 ? Ii(t, e, i, r) : Ws(t, e) : d._visibility & 2 ? Ii(t, e, i, r) : (d._visibility |= 2, Ir(t, e, i, r, (e.subtreeFlags & 10256) !== 0)), f & 2048 && sd(y, e);
        break;
      case 24:
        Ii(t, e, i, r), f & 2048 && ld(e.alternate, e);
        break;
      default:
        Ii(t, e, i, r);
    }
  }
  function Ir(t, e, i, r, f) {
    for (f = f && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var d = t, y = e, T = i, P = r, V = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ir(d, y, T, P, f), Qs(8, y);
          break;
        case 23:
          break;
        case 22:
          var at = y.stateNode;
          y.memoizedState !== null ? at._visibility & 2 ? Ir(d, y, T, P, f) : Ws(d, y) : (at._visibility |= 2, Ir(d, y, T, P, f)), f && V & 2048 && sd(y.alternate, y);
          break;
        case 24:
          Ir(d, y, T, P, f), f && V & 2048 && ld(y.alternate, y);
          break;
        default:
          Ir(d, y, T, P, f);
      }
      e = e.sibling;
    }
  }
  function Ws(t, e) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
      var i = t, r = e, f = r.flags;
      switch (r.tag) {
        case 22:
          Ws(i, r), f & 2048 && sd(r.alternate, r);
          break;
        case 24:
          Ws(i, r), f & 2048 && ld(r.alternate, r);
          break;
        default:
          Ws(i, r);
      }
      e = e.sibling;
    }
  }
  var Js = 8192;
  function $r(t) {
    if (t.subtreeFlags & Js) for (t = t.child; t !== null; ) Gm(t), t = t.sibling;
  }
  function Gm(t) {
    switch (t.tag) {
      case 26:
        $r(t), t.flags & Js && t.memoizedState !== null && D0(Ei, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        $r(t);
        break;
      case 3:
      case 4:
        var e = Ei;
        Ei = tc(t.stateNode.containerInfo), $r(t), Ei = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Js, Js = 16777216, $r(t), Js = e) : $r(t));
        break;
      default:
        $r(t);
    }
  }
  function Vm(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function tl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var i = 0; i < e.length; i++) {
        var r = e[i];
        un = r, Xm(r, t);
      }
      Vm(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Ym(t), t = t.sibling;
  }
  function Ym(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tl(t), t.flags & 2048 && ho(9, t, t.return);
        break;
      case 3:
        tl(t);
        break;
      case 12:
        tl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Iu(t)) : tl(t);
        break;
      default:
        tl(t);
    }
  }
  function Iu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null) for (var i = 0; i < e.length; i++) {
        var r = e[i];
        un = r, Xm(r, t);
      }
      Vm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ho(8, e, e.return), Iu(e);
          break;
        case 22:
          i = e.stateNode, i._visibility & 2 && (i._visibility &= -3, Iu(e));
          break;
        default:
          Iu(e);
      }
      t = t.sibling;
    }
  }
  function Xm(t, e) {
    for (; un !== null; ) {
      var i = un;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ho(8, i, e);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var r = i.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Ns(i.memoizedState.cache);
      }
      if (r = i.child, r !== null) r.return = i, un = r;
      else t: for (i = t; un !== null; ) {
        r = un;
        var f = r.sibling, d = r.return;
        if (Um(r), r === i) {
          un = null;
          break t;
        }
        if (f !== null) {
          f.return = d, un = f;
          break t;
        }
        un = d;
      }
    }
  }
  var J_ = { getCacheForType: function(t) {
    var e = xn(We), i = e.data.get(t);
    return i === void 0 && (i = t(), e.data.set(t, i)), i;
  } }, t0 = typeof WeakMap == "function" ? WeakMap : Map, de = 0, Ee = null, Xt = null, Jt = 0, he = 0, ei = null, go = false, qr = false, ud = false, Ea = 0, Ue = 0, vo = 0, ir = 0, cd = 0, mi = 0, Gr = 0, el = null, jn = null, fd = false, dd = 0, $u = 1 / 0, qu = null, yo = null, mn = 0, _o = null, Vr = null, Yr = 0, hd = 0, pd = null, Km = null, nl = 0, md = null;
  function ni() {
    if ((de & 2) !== 0 && Jt !== 0) return Jt & -Jt;
    if (H.T !== null) {
      var t = Br;
      return t !== 0 ? t : xd();
    }
    return Gl();
  }
  function Qm() {
    mi === 0 && (mi = (Jt & 536870912) === 0 || Pt ? Il() : 536870912);
    var t = pi.current;
    return t !== null && (t.flags |= 32), mi;
  }
  function ii(t, e, i) {
    (t === Ee && (he === 2 || he === 9) || t.cancelPendingCommit !== null) && (Xr(t, 0), bo(t, Jt, mi, false)), ka(t, i), ((de & 2) === 0 || t !== Ee) && (t === Ee && ((de & 2) === 0 && (ir |= i), Ue === 4 && bo(t, Jt, mi, false)), $i(t));
  }
  function Fm(t, e, i) {
    if ((de & 6) !== 0) throw Error(c(327));
    var r = !i && (e & 124) === 0 && (e & t.expiredLanes) === 0 || an(t, e), f = r ? i0(t, e) : yd(t, e, true), d = r;
    do {
      if (f === 0) {
        qr && !r && bo(t, e, 0, false);
        break;
      } else {
        if (i = t.current.alternate, d && !e0(i)) {
          f = yd(t, e, false), d = false;
          continue;
        }
        if (f === 2) {
          if (d = e, t.errorRecoveryDisabledLanes & d) var y = 0;
          else y = t.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            e = y;
            t: {
              var T = t;
              f = el;
              var P = T.current.memoizedState.isDehydrated;
              if (P && (Xr(T, y).flags |= 256), y = yd(T, y, false), y !== 2) {
                if (ud && !P) {
                  T.errorRecoveryDisabledLanes |= d, ir |= d, f = 4;
                  break t;
                }
                d = jn, jn = f, d !== null && (jn === null ? jn = d : jn.push.apply(jn, d));
              }
              f = y;
            }
            if (d = false, f !== 2) continue;
          }
        }
        if (f === 1) {
          Xr(t, 0), bo(t, e, 0, true);
          break;
        }
        t: {
          switch (r = t, d = f, d) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              bo(r, e, mi, !go);
              break t;
            case 2:
              jn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (f = dd + 300 - ie(), 10 < f)) {
            if (bo(r, e, mi, !go), Re(r, 0, true) !== 0) break t;
            r.timeoutHandle = Eg(Wm.bind(null, r, i, jn, qu, fd, e, mi, ir, Gr, go, d, 2, -0, 0), f);
            break t;
          }
          Wm(r, i, jn, qu, fd, e, mi, ir, Gr, go, d, 0, -0, 0);
        }
      }
      break;
    } while (true);
    $i(t);
  }
  function Wm(t, e, i, r, f, d, y, T, P, V, at, ft, X, F) {
    if (t.timeoutHandle = -1, ft = e.subtreeFlags, (ft & 8192 || (ft & 16785408) === 16785408) && (ul = { stylesheets: null, count: 0, unsuspend: N0 }, Gm(e), ft = H0(), ft !== null)) {
      t.cancelPendingCommit = ft(og.bind(null, t, e, d, i, r, f, y, T, P, at, 1, X, F)), bo(t, d, y, !V);
      return;
    }
    og(t, e, d, i, r, f, y, T, P);
  }
  function e0(t) {
    for (var e = t; ; ) {
      var i = e.tag;
      if ((i === 0 || i === 11 || i === 15) && e.flags & 16384 && (i = e.updateQueue, i !== null && (i = i.stores, i !== null))) for (var r = 0; r < i.length; r++) {
        var f = i[r], d = f.getSnapshot;
        f = f.value;
        try {
          if (!An(d(), f)) return false;
        } catch {
          return false;
        }
      }
      if (i = e.child, e.subtreeFlags & 16384 && i !== null) i.return = e, e = i;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return true;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return true;
  }
  function bo(t, e, i, r) {
    e &= ~cd, e &= ~ir, t.suspendedLanes |= e, t.pingedLanes &= ~e, r && (t.warmLanes |= e), r = t.expirationTimes;
    for (var f = e; 0 < f; ) {
      var d = 31 - te(f), y = 1 << d;
      r[d] = -1, f &= ~y;
    }
    i !== 0 && $l(t, i, e);
  }
  function Gu() {
    return (de & 6) === 0 ? (il(0), false) : true;
  }
  function gd() {
    if (Xt !== null) {
      if (he === 0) var t = Xt.return;
      else t = Xt, Ci = hi = null, Pf(t), Zr = null, Ys = 0, t = Xt;
      for (; t !== null; ) Lm(t.alternate, t), t = t.return;
      Xt = null;
    }
  }
  function Xr(t, e) {
    var i = t.timeoutHandle;
    i !== -1 && (t.timeoutHandle = -1, _0(i)), i = t.cancelPendingCommit, i !== null && (t.cancelPendingCommit = null, i()), gd(), Ee = t, Xt = i = di(t.current, null), Jt = e, he = 0, ei = null, go = false, qr = an(t, e), ud = false, Gr = mi = cd = ir = vo = Ue = 0, jn = el = null, fd = false, (e & 8) !== 0 && (e |= e & 32);
    var r = t.entangledLanes;
    if (r !== 0) for (t = t.entanglements, r &= e; 0 < r; ) {
      var f = 31 - te(r), d = 1 << f;
      e |= t[f], r &= ~d;
    }
    return Ea = e, Go(), i;
  }
  function Jm(t, e) {
    $t = null, H.H = zu, e === Hs || e === xu ? (e = gp(), he = 3) : e === hp ? (e = gp(), he = 4) : he = e === vm ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ei = e, Xt === null && (Ue = 1, Du(t, Ln(e, t.current)));
  }
  function tg() {
    var t = H.H;
    return H.H = zu, t === null ? zu : t;
  }
  function eg() {
    var t = H.A;
    return H.A = J_, t;
  }
  function vd() {
    Ue = 4, go || (Jt & 4194048) !== Jt && pi.current !== null || (qr = true), (vo & 134217727) === 0 && (ir & 134217727) === 0 || Ee === null || bo(Ee, Jt, mi, false);
  }
  function yd(t, e, i) {
    var r = de;
    de |= 2;
    var f = tg(), d = eg();
    (Ee !== t || Jt !== e) && (qu = null, Xr(t, e)), e = false;
    var y = Ue;
    t: do
      try {
        if (he !== 0 && Xt !== null) {
          var T = Xt, P = ei;
          switch (he) {
            case 8:
              gd(), y = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pi.current === null && (e = true);
              var V = he;
              if (he = 0, ei = null, Kr(t, T, P, V), i && qr) {
                y = 0;
                break t;
              }
              break;
            default:
              V = he, he = 0, ei = null, Kr(t, T, P, V);
          }
        }
        n0(), y = Ue;
        break;
      } catch (at) {
        Jm(t, at);
      }
    while (true);
    return e && t.shellSuspendCounter++, Ci = hi = null, de = r, H.H = f, H.A = d, Xt === null && (Ee = null, Jt = 0, Go()), y;
  }
  function n0() {
    for (; Xt !== null; ) ng(Xt);
  }
  function i0(t, e) {
    var i = de;
    de |= 2;
    var r = tg(), f = eg();
    Ee !== t || Jt !== e ? (qu = null, $u = ie() + 500, Xr(t, e)) : qr = an(t, e);
    t: do
      try {
        if (he !== 0 && Xt !== null) {
          e = Xt;
          var d = ei;
          e: switch (he) {
            case 1:
              he = 0, ei = null, Kr(t, e, d, 1);
              break;
            case 2:
            case 9:
              if (pp(d)) {
                he = 0, ei = null, ig(e);
                break;
              }
              e = function() {
                he !== 2 && he !== 9 || Ee !== t || (he = 7), $i(t);
              }, d.then(e, e);
              break t;
            case 3:
              he = 7;
              break t;
            case 4:
              he = 5;
              break t;
            case 7:
              pp(d) ? (he = 0, ei = null, ig(e)) : (he = 0, ei = null, Kr(t, e, d, 7));
              break;
            case 5:
              var y = null;
              switch (Xt.tag) {
                case 26:
                  y = Xt.memoizedState;
                case 5:
                case 27:
                  var T = Xt;
                  if (!y || Hg(y)) {
                    he = 0, ei = null;
                    var P = T.sibling;
                    if (P !== null) Xt = P;
                    else {
                      var V = T.return;
                      V !== null ? (Xt = V, Vu(V)) : Xt = null;
                    }
                    break e;
                  }
              }
              he = 0, ei = null, Kr(t, e, d, 5);
              break;
            case 6:
              he = 0, ei = null, Kr(t, e, d, 6);
              break;
            case 8:
              gd(), Ue = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        a0();
        break;
      } catch (at) {
        Jm(t, at);
      }
    while (true);
    return Ci = hi = null, H.H = r, H.A = f, de = i, Xt !== null ? 0 : (Ee = null, Jt = 0, Go(), Ue);
  }
  function a0() {
    for (; Xt !== null && !ue(); ) ng(Xt);
  }
  function ng(t) {
    var e = Am(t.alternate, t, Ea);
    t.memoizedProps = t.pendingProps, e === null ? Vu(t) : Xt = e;
  }
  function ig(t) {
    var e = t, i = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Tm(i, e, e.pendingProps, e.type, void 0, Jt);
        break;
      case 11:
        e = Tm(i, e, e.pendingProps, e.type.render, e.ref, Jt);
        break;
      case 5:
        Pf(e);
      default:
        Lm(i, e), e = Xt = Bs(e, Ea), e = Am(i, e, Ea);
    }
    t.memoizedProps = t.pendingProps, e === null ? Vu(t) : Xt = e;
  }
  function Kr(t, e, i, r) {
    Ci = hi = null, Pf(e), Zr = null, Ys = 0;
    var f = e.return;
    try {
      if (Y_(t, f, e, i, Jt)) {
        Ue = 1, Du(t, Ln(i, t.current)), Xt = null;
        return;
      }
    } catch (d) {
      if (f !== null) throw Xt = f, d;
      Ue = 1, Du(t, Ln(i, t.current)), Xt = null;
      return;
    }
    e.flags & 32768 ? (Pt || r === 1 ? t = true : qr || (Jt & 536870912) !== 0 ? t = false : (go = t = true, (r === 2 || r === 9 || r === 3 || r === 6) && (r = pi.current, r !== null && r.tag === 13 && (r.flags |= 16384))), ag(e, t)) : Vu(e);
  }
  function Vu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ag(e, go);
        return;
      }
      t = e.return;
      var i = K_(e.alternate, e, Ea);
      if (i !== null) {
        Xt = i;
        return;
      }
      if (e = e.sibling, e !== null) {
        Xt = e;
        return;
      }
      Xt = e = t;
    } while (e !== null);
    Ue === 0 && (Ue = 5);
  }
  function ag(t, e) {
    do {
      var i = Q_(t.alternate, t);
      if (i !== null) {
        i.flags &= 32767, Xt = i;
        return;
      }
      if (i = t.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !e && (t = t.sibling, t !== null)) {
        Xt = t;
        return;
      }
      Xt = t = i;
    } while (t !== null);
    Ue = 6, Xt = null;
  }
  function og(t, e, i, r, f, d, y, T, P) {
    t.cancelPendingCommit = null;
    do
      Yu();
    while (mn !== 0);
    if ((de & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (d = e.lanes | e.childLanes, d |= Wn, Jc(t, i, d, y, T, P), t === Ee && (Xt = Ee = null, Jt = 0), Vr = e, _o = t, Yr = i, hd = d, pd = f, Km = r, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, l0(ce, function() {
        return cg(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), r = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || r) {
        r = H.T, H.T = null, f = st.p, st.p = 2, y = de, de |= 4;
        try {
          F_(t, e, i);
        } finally {
          de = y, st.p = f, H.T = r;
        }
      }
      mn = 1, rg(), sg(), lg();
    }
  }
  function rg() {
    if (mn === 1) {
      mn = 0;
      var t = _o, e = Vr, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = H.T, H.T = null;
        var r = st.p;
        st.p = 2;
        var f = de;
        de |= 4;
        try {
          Im(e, t);
          var d = Rd, y = Io(t.containerInfo), T = d.focusedElem, P = d.selectionRange;
          if (y !== T && T && T.ownerDocument && Er(T.ownerDocument.documentElement, T)) {
            if (P !== null && $o(T)) {
              var V = P.start, at = P.end;
              if (at === void 0 && (at = V), "selectionStart" in T) T.selectionStart = V, T.selectionEnd = Math.min(at, T.value.length);
              else {
                var ft = T.ownerDocument || document, X = ft && ft.defaultView || window;
                if (X.getSelection) {
                  var F = X.getSelection(), zt = T.textContent.length, At = Math.min(P.start, zt), ve = P.end === void 0 ? At : Math.min(P.end, zt);
                  !F.extend && At > ve && (y = ve, ve = At, At = y);
                  var j = zs(T, At), Z = zs(T, ve);
                  if (j && Z && (F.rangeCount !== 1 || F.anchorNode !== j.node || F.anchorOffset !== j.offset || F.focusNode !== Z.node || F.focusOffset !== Z.offset)) {
                    var G = ft.createRange();
                    G.setStart(j.node, j.offset), F.removeAllRanges(), At > ve ? (F.addRange(G), F.extend(Z.node, Z.offset)) : (G.setEnd(Z.node, Z.offset), F.addRange(G));
                  }
                }
              }
            }
            for (ft = [], F = T; F = F.parentNode; ) F.nodeType === 1 && ft.push({ element: F, left: F.scrollLeft, top: F.scrollTop });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < ft.length; T++) {
              var lt = ft[T];
              lt.element.scrollLeft = lt.left, lt.element.scrollTop = lt.top;
            }
          }
          oc = !!Ad, Rd = Ad = null;
        } finally {
          de = f, st.p = r, H.T = i;
        }
      }
      t.current = e, mn = 2;
    }
  }
  function sg() {
    if (mn === 2) {
      mn = 0;
      var t = _o, e = Vr, i = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || i) {
        i = H.T, H.T = null;
        var r = st.p;
        st.p = 2;
        var f = de;
        de |= 4;
        try {
          Hm(t, e.alternate, e);
        } finally {
          de = f, st.p = r, H.T = i;
        }
      }
      mn = 3;
    }
  }
  function lg() {
    if (mn === 4 || mn === 3) {
      mn = 0, nn();
      var t = _o, e = Vr, i = Yr, r = Km;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? mn = 5 : (mn = 0, Vr = _o = null, ug(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (f === 0 && (yo = null), gs(i), e = e.stateNode, Ht && typeof Ht.onCommitFiberRoot == "function") try {
        Ht.onCommitFiberRoot(pe, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
      if (r !== null) {
        e = H.T, f = st.p, st.p = 2, H.T = null;
        try {
          for (var d = t.onRecoverableError, y = 0; y < r.length; y++) {
            var T = r[y];
            d(T.value, { componentStack: T.stack });
          }
        } finally {
          H.T = e, st.p = f;
        }
      }
      (Yr & 3) !== 0 && Yu(), $i(t), f = t.pendingLanes, (i & 4194090) !== 0 && (f & 42) !== 0 ? t === md ? nl++ : (nl = 0, md = t) : nl = 0, il(0);
    }
  }
  function ug(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ns(e)));
  }
  function Yu(t) {
    return rg(), sg(), lg(), cg();
  }
  function cg() {
    if (mn !== 5) return false;
    var t = _o, e = hd;
    hd = 0;
    var i = gs(Yr), r = H.T, f = st.p;
    try {
      st.p = 32 > i ? 32 : i, H.T = null, i = pd, pd = null;
      var d = _o, y = Yr;
      if (mn = 0, Vr = _o = null, Yr = 0, (de & 6) !== 0) throw Error(c(331));
      var T = de;
      if (de |= 4, Ym(d.current), qm(d, d.current, y, i), de = T, il(0, false), Ht && typeof Ht.onPostCommitFiberRoot == "function") try {
        Ht.onPostCommitFiberRoot(pe, d);
      } catch {
      }
      return true;
    } finally {
      st.p = f, H.T = r, ug(t, e);
    }
  }
  function fg(t, e, i) {
    e = Ln(i, e), e = Yf(t.stateNode, e, 2), t = lo(t, e, 2), t !== null && (ka(t, 2), $i(t));
  }
  function be(t, e, i) {
    if (t.tag === 3) fg(t, t, i);
    else for (; e !== null; ) {
      if (e.tag === 3) {
        fg(e, t, i);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yo === null || !yo.has(r))) {
          t = Ln(i, t), i = mm(2), r = lo(e, i, 2), r !== null && (gm(i, r, e, t), ka(r, 2), $i(r));
          break;
        }
      }
      e = e.return;
    }
  }
  function _d(t, e, i) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new t0();
      var f = /* @__PURE__ */ new Set();
      r.set(e, f);
    } else f = r.get(e), f === void 0 && (f = /* @__PURE__ */ new Set(), r.set(e, f));
    f.has(i) || (ud = true, f.add(i), t = o0.bind(null, t, e, i), e.then(t, t));
  }
  function o0(t, e, i) {
    var r = t.pingCache;
    r !== null && r.delete(e), t.pingedLanes |= t.suspendedLanes & i, t.warmLanes &= ~i, Ee === t && (Jt & i) === i && (Ue === 4 || Ue === 3 && (Jt & 62914560) === Jt && 300 > ie() - dd ? (de & 2) === 0 && Xr(t, 0) : cd |= i, Gr === Jt && (Gr = 0)), $i(t);
  }
  function dg(t, e) {
    e === 0 && (e = ps()), t = no(t, e), t !== null && (ka(t, e), $i(t));
  }
  function r0(t) {
    var e = t.memoizedState, i = 0;
    e !== null && (i = e.retryLane), dg(t, i);
  }
  function s0(t, e) {
    var i = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode, f = t.memoizedState;
        f !== null && (i = f.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    r !== null && r.delete(e), dg(t, i);
  }
  function l0(t, e) {
    return Oe(t, e);
  }
  var Xu = null, Qr = null, bd = false, Ku = false, Sd = false, ar = 0;
  function $i(t) {
    t !== Qr && t.next === null && (Qr === null ? Xu = Qr = t : Qr = Qr.next = t), Ku = true, bd || (bd = true, c0());
  }
  function il(t, e) {
    if (!Sd && Ku) {
      Sd = true;
      do
        for (var i = false, r = Xu; r !== null; ) {
          if (t !== 0) {
            var f = r.pendingLanes;
            if (f === 0) var d = 0;
            else {
              var y = r.suspendedLanes, T = r.pingedLanes;
              d = (1 << 31 - te(42 | t) + 1) - 1, d &= f & ~(y & ~T), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (i = true, gg(r, d));
          } else d = Jt, d = Re(r, r === Ee ? d : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (d & 3) === 0 || an(r, d) || (i = true, gg(r, d));
          r = r.next;
        }
      while (i);
      Sd = false;
    }
  }
  function u0() {
    hg();
  }
  function hg() {
    Ku = bd = false;
    var t = 0;
    ar !== 0 && (y0() && (t = ar), ar = 0);
    for (var e = ie(), i = null, r = Xu; r !== null; ) {
      var f = r.next, d = pg(r, e);
      d === 0 ? (r.next = null, i === null ? Xu = f : i.next = f, f === null && (Qr = i)) : (i = r, (t !== 0 || (d & 3) !== 0) && (Ku = true)), r = f;
    }
    il(t);
  }
  function pg(t, e) {
    for (var i = t.suspendedLanes, r = t.pingedLanes, f = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d; ) {
      var y = 31 - te(d), T = 1 << y, P = f[y];
      P === -1 ? ((T & i) === 0 || (T & r) !== 0) && (f[y] = dr(T, e)) : P <= e && (t.expiredLanes |= T), d &= ~T;
    }
    if (e = Ee, i = Jt, i = Re(t, t === e ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r = t.callbackNode, i === 0 || t === e && (he === 2 || he === 9) || t.cancelPendingCommit !== null) return r !== null && r !== null && Zt(r), t.callbackNode = null, t.callbackPriority = 0;
    if ((i & 3) === 0 || an(t, i)) {
      if (e = i & -i, e === t.callbackPriority) return e;
      switch (r !== null && Zt(r), gs(i)) {
        case 2:
        case 8:
          i = Ae;
          break;
        case 32:
          i = ce;
          break;
        case 268435456:
          i = kn;
          break;
        default:
          i = ce;
      }
      return r = mg.bind(null, t), i = Oe(i, r), t.callbackPriority = e, t.callbackNode = i, e;
    }
    return r !== null && r !== null && Zt(r), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function mg(t, e) {
    if (mn !== 0 && mn !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var i = t.callbackNode;
    if (Yu() && t.callbackNode !== i) return null;
    var r = Jt;
    return r = Re(t, t === Ee ? r : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), r === 0 ? null : (Fm(t, r, e), pg(t, ie()), t.callbackNode != null && t.callbackNode === i ? mg.bind(null, t) : null);
  }
  function gg(t, e) {
    if (Yu()) return null;
    Fm(t, e, true);
  }
  function c0() {
    b0(function() {
      (de & 6) !== 0 ? Oe(Me, u0) : hg();
    });
  }
  function xd() {
    return ar === 0 && (ar = Il()), ar;
  }
  function vg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : $a("" + t);
  }
  function yg(t, e) {
    var i = e.ownerDocument.createElement("input");
    return i.name = e.name, i.value = e.value, t.id && i.setAttribute("form", t.id), e.parentNode.insertBefore(i, e), t = new FormData(t), i.parentNode.removeChild(i), t;
  }
  function f0(t, e, i, r, f) {
    if (e === "submit" && i && i.stateNode === f) {
      var d = vg((f[_n] || null).action), y = r.submitter;
      y && (e = (e = y[_n] || null) ? vg(e.formAction) : y.getAttribute("formAction"), e !== null && (d = e, y = null));
      var T = new Do("action", "action", null, r, f);
      t.push({ event: T, listeners: [{ instance: null, listener: function() {
        if (r.defaultPrevented) {
          if (ar !== 0) {
            var P = y ? yg(f, y) : new FormData(f);
            If(i, { pending: true, data: P, method: f.method, action: d }, null, P);
          }
        } else typeof d == "function" && (T.preventDefault(), P = y ? yg(f, y) : new FormData(f), If(i, { pending: true, data: P, method: f.method, action: d }, d, P));
      }, currentTarget: f }] });
    }
  }
  for (var Td = 0; Td < ma.length; Td++) {
    var Cd = ma[Td], d0 = Cd.toLowerCase(), h0 = Cd[0].toUpperCase() + Cd.slice(1);
    Fn(d0, "on" + h0);
  }
  Fn(hu, "onAnimationEnd"), Fn(Qn, "onAnimationIteration"), Fn(qo, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(vf, "onTransitionRun"), Fn(Rr, "onTransitionStart"), Fn(yf, "onTransitionCancel"), Fn(Ps, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), na("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), na("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), na("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), na("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), na("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), na("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), p0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));
  function _g(t, e) {
    e = (e & 4) !== 0;
    for (var i = 0; i < t.length; i++) {
      var r = t[i], f = r.event;
      r = r.listeners;
      t: {
        var d = void 0;
        if (e) for (var y = r.length - 1; 0 <= y; y--) {
          var T = r[y], P = T.instance, V = T.currentTarget;
          if (T = T.listener, P !== d && f.isPropagationStopped()) break t;
          d = T, f.currentTarget = V;
          try {
            d(f);
          } catch (at) {
            Nu(at);
          }
          f.currentTarget = null, d = P;
        }
        else for (y = 0; y < r.length; y++) {
          if (T = r[y], P = T.instance, V = T.currentTarget, T = T.listener, P !== d && f.isPropagationStopped()) break t;
          d = T, f.currentTarget = V;
          try {
            d(f);
          } catch (at) {
            Nu(at);
          }
          f.currentTarget = null, d = P;
        }
      }
    }
  }
  function Kt(t, e) {
    var i = e[Nn];
    i === void 0 && (i = e[Nn] = /* @__PURE__ */ new Set());
    var r = t + "__bubble";
    i.has(r) || (bg(e, t, 2, false), i.add(r));
  }
  function wd(t, e, i) {
    var r = 0;
    e && (r |= 4), bg(i, t, r, e);
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ed(t) {
    if (!t[Qu]) {
      t[Qu] = true, Yl.forEach(function(i) {
        i !== "selectionchange" && (p0.has(i) || wd(i, false, t), wd(i, true, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Qu] || (e[Qu] = true, wd("selectionchange", false, e));
    }
  }
  function bg(t, e, i, r) {
    switch (qg(e)) {
      case 2:
        var f = j0;
        break;
      case 8:
        f = I0;
        break;
      default:
        f = Zd;
    }
    i = f.bind(null, e, i, t), f = void 0, !No || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (f = true), r ? f !== void 0 ? t.addEventListener(e, i, { capture: true, passive: f }) : t.addEventListener(e, i, true) : f !== void 0 ? t.addEventListener(e, i, { passive: f }) : t.addEventListener(e, i, false);
  }
  function Md(t, e, i, r, f) {
    var d = r;
    if ((e & 1) === 0 && (e & 2) === 0 && r !== null) t: for (; ; ) {
      if (r === null) return;
      var y = r.tag;
      if (y === 3 || y === 4) {
        var T = r.stateNode.containerInfo;
        if (T === f) break;
        if (y === 4) for (y = r.return; y !== null; ) {
          var P = y.tag;
          if ((P === 3 || P === 4) && y.stateNode.containerInfo === f) return;
          y = y.return;
        }
        for (; T !== null; ) {
          if (y = zi(T), y === null) return;
          if (P = y.tag, P === 5 || P === 6 || P === 26 || P === 27) {
            r = d = y;
            continue t;
          }
          T = T.parentNode;
        }
      }
      r = r.return;
    }
    Vn(function() {
      var V = d, at = qa(i), ft = [];
      t: {
        var X = pu.get(t);
        if (X !== void 0) {
          var F = Do, zt = t;
          switch (t) {
            case "keypress":
              if (He(i) === 0) break t;
            case "keydown":
            case "keyup":
              F = uf;
              break;
            case "focusin":
              zt = "focus", F = Ts;
              break;
            case "focusout":
              zt = "blur", F = Ts;
              break;
            case "beforeblur":
            case "afterblur":
              F = Ts;
              break;
            case "click":
              if (i.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Ya;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = af;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = ff;
              break;
            case hu:
            case Qn:
            case qo:
              F = of;
              break;
            case Ps:
              F = df;
              break;
            case "scroll":
            case "scrollend":
              F = nf;
              break;
            case "wheel":
              F = au;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Cs;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Es;
              break;
            case "toggle":
            case "beforetoggle":
              F = fa;
          }
          var At = (e & 4) !== 0, ve = !At && (t === "scroll" || t === "scrollend"), j = At ? X !== null ? X + "Capture" : null : X;
          At = [];
          for (var Z = V, G; Z !== null; ) {
            var lt = Z;
            if (G = lt.stateNode, lt = lt.tag, lt !== 5 && lt !== 26 && lt !== 27 || G === null || j === null || (lt = ee(Z, j), lt != null && At.push(ol(Z, lt, G))), ve) break;
            Z = Z.return;
          }
          0 < At.length && (X = new F(X, zt, null, i, at), ft.push({ event: X, listeners: At }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (X = t === "mouseover" || t === "pointerover", F = t === "mouseout" || t === "pointerout", X && i !== ko && (zt = i.relatedTarget || i.fromElement) && (zi(zt) || zt[Na])) break t;
          if ((F || X) && (X = at.window === at ? at : (X = at.ownerDocument) ? X.defaultView || X.parentWindow : window, F ? (zt = i.relatedTarget || i.toElement, F = V, zt = zt ? zi(zt) : null, zt !== null && (ve = m(zt), At = zt.tag, zt !== ve || At !== 5 && At !== 27 && At !== 6) && (zt = null)) : (F = null, zt = V), F !== zt)) {
            if (At = Ya, lt = "onMouseLeave", j = "onMouseEnter", Z = "mouse", (t === "pointerout" || t === "pointerover") && (At = Es, lt = "onPointerLeave", j = "onPointerEnter", Z = "pointer"), ve = F == null ? X : ri(F), G = zt == null ? X : ri(zt), X = new At(lt, Z + "leave", F, i, at), X.target = ve, X.relatedTarget = G, lt = null, zi(at) === V && (At = new At(j, Z + "enter", zt, i, at), At.target = G, At.relatedTarget = ve, lt = At), ve = lt, F && zt) e: {
              for (At = F, j = zt, Z = 0, G = At; G; G = Fr(G)) Z++;
              for (G = 0, lt = j; lt; lt = Fr(lt)) G++;
              for (; 0 < Z - G; ) At = Fr(At), Z--;
              for (; 0 < G - Z; ) j = Fr(j), G--;
              for (; Z--; ) {
                if (At === j || j !== null && At === j.alternate) break e;
                At = Fr(At), j = Fr(j);
              }
              At = null;
            }
            else At = null;
            F !== null && Sg(ft, X, F, At, false), zt !== null && ve !== null && Sg(ft, ve, zt, At, true);
          }
        }
        t: {
          if (X = V ? ri(V) : window, F = X.nodeName && X.nodeName.toLowerCase(), F === "select" || F === "input" && X.type === "file") var Tt = Qa;
          else if (ha(X)) if (As) Tt = gf;
          else {
            Tt = mf;
            var Yt = Ls;
          }
          else F = X.nodeName, !F || F.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? V && Bo(V.elementType) && (Tt = Qa) : Tt = Ti;
          if (Tt && (Tt = Tt(t, V))) {
            uu(ft, Tt, i, at);
            break t;
          }
          Yt && Yt(t, X, V), t === "focusout" && V && X.type === "number" && V.memoizedProps.value != null && ja(X, "number", X.value);
        }
        switch (Yt = V ? ri(V) : window, t) {
          case "focusin":
            (ha(Yt) || Yt.contentEditable === "true") && (Kn = Yt, Ja = V, pa = null);
            break;
          case "focusout":
            pa = Ja = Kn = null;
            break;
          case "mousedown":
            Or = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Or = false, fu(ft, i, at);
            break;
          case "selectionchange":
            if (Mr) break;
          case "keydown":
          case "keyup":
            fu(ft, i, at);
        }
        var Ot;
        if (da) t: {
          switch (t) {
            case "compositionstart":
              var Rt = "onCompositionStart";
              break t;
            case "compositionend":
              Rt = "onCompositionEnd";
              break t;
            case "compositionupdate":
              Rt = "onCompositionUpdate";
              break t;
          }
          Rt = void 0;
        }
        else Xa ? Cr(t, i) && (Rt = "onCompositionEnd") : t === "keydown" && i.keyCode === 229 && (Rt = "onCompositionStart");
        Rt && (Os && i.locale !== "ko" && (Xa || Rt !== "onCompositionStart" ? Rt === "onCompositionEnd" && Xa && (Ot = Va()) : (ui = at, Si = "value" in ui ? ui.value : ui.textContent, Xa = true)), Yt = Fu(V, Rt), 0 < Yt.length && (Rt = new Yn(Rt, t, null, i, at), ft.push({ event: Rt, listeners: Yt }), Ot ? Rt.data = Ot : (Ot = su(i), Ot !== null && (Rt.data = Ot)))), (Ot = ou ? lu(t, i) : pf(t, i)) && (Rt = Fu(V, "onBeforeInput"), 0 < Rt.length && (Yt = new Yn("onBeforeInput", "beforeinput", null, i, at), ft.push({ event: Yt, listeners: Rt }), Yt.data = Ot)), f0(ft, t, V, i, at);
      }
      _g(ft, e);
    });
  }
  function ol(t, e, i) {
    return { instance: t, listener: e, currentTarget: i };
  }
  function Fu(t, e) {
    for (var i = e + "Capture", r = []; t !== null; ) {
      var f = t, d = f.stateNode;
      if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || d === null || (f = ee(t, i), f != null && r.unshift(ol(t, f, d)), f = ee(t, e), f != null && r.push(ol(t, f, d))), t.tag === 3) return r;
      t = t.return;
    }
    return [];
  }
  function Fr(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sg(t, e, i, r, f) {
    for (var d = e._reactName, y = []; i !== null && i !== r; ) {
      var T = i, P = T.alternate, V = T.stateNode;
      if (T = T.tag, P !== null && P === r) break;
      T !== 5 && T !== 26 && T !== 27 || V === null || (P = V, f ? (V = ee(i, d), V != null && y.unshift(ol(i, V, P))) : f || (V = ee(i, d), V != null && y.push(ol(i, V, P)))), i = i.return;
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var m0 = /\r\n?/g, g0 = /\u0000|\uFFFD/g;
  function xg(t) {
    return (typeof t == "string" ? t : "" + t).replace(m0, `
`).replace(g0, "");
  }
  function Tg(t, e) {
    return e = xg(e), xg(t) === e;
  }
  function Wu() {
  }
  function ge(t, e, i, r, f, d) {
    switch (i) {
      case "children":
        typeof r == "string" ? e === "body" || e === "textarea" && r === "" || si(t, r) : (typeof r == "number" || typeof r == "bigint") && e !== "body" && si(t, "" + r);
        break;
      case "className":
        gr(t, "class", r);
        break;
      case "tabIndex":
        gr(t, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gr(t, i, r);
        break;
      case "style":
        Ia(t, r, d);
        break;
      case "data":
        if (e !== "object") {
          gr(t, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (e !== "a" || i !== "href")) {
          t.removeAttribute(i);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(i);
          break;
        }
        r = $a("" + r), t.setAttribute(i, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          t.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof d == "function" && (i === "formAction" ? (e !== "input" && ge(t, e, "name", f.name, f, null), ge(t, e, "formEncType", f.formEncType, f, null), ge(t, e, "formMethod", f.formMethod, f, null), ge(t, e, "formTarget", f.formTarget, f, null)) : (ge(t, e, "encType", f.encType, f, null), ge(t, e, "method", f.method, f, null), ge(t, e, "target", f.target, f, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          t.removeAttribute(i);
          break;
        }
        r = $a("" + r), t.setAttribute(i, r);
        break;
      case "onClick":
        r != null && (t.onclick = Wu);
        break;
      case "onScroll":
        r != null && Kt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && Kt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (i = r.__html, i != null) {
            if (f.children != null) throw Error(c(60));
            t.innerHTML = i;
          }
        }
        break;
      case "multiple":
        t.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        t.muted = r && typeof r != "function" && typeof r != "symbol";
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
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        i = $a("" + r), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "" + r) : t.removeAttribute(i);
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
        r && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, "") : t.removeAttribute(i);
        break;
      case "capture":
      case "download":
        r === true ? t.setAttribute(i, "") : r !== false && r != null && typeof r != "function" && typeof r != "symbol" ? t.setAttribute(i, r) : t.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? t.setAttribute(i, r) : t.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? t.removeAttribute(i) : t.setAttribute(i, r);
        break;
      case "popover":
        Kt("beforetoggle", t), Kt("toggle", t), mr(t, "popover", r);
        break;
      case "xlinkActuate":
        bi(t, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        bi(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        bi(t, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        bi(t, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        bi(t, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        bi(t, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        bi(t, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        bi(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        bi(t, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        mr(t, "is", r);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = bs.get(i) || i, mr(t, i, r));
    }
  }
  function Od(t, e, i, r, f, d) {
    switch (i) {
      case "style":
        Ia(t, r, d);
        break;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (i = r.__html, i != null) {
            if (f.children != null) throw Error(c(60));
            t.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof r == "string" ? si(t, r) : (typeof r == "number" || typeof r == "bigint") && si(t, "" + r);
        break;
      case "onScroll":
        r != null && Kt("scroll", t);
        break;
      case "onScrollEnd":
        r != null && Kt("scrollend", t);
        break;
      case "onClick":
        r != null && (t.onclick = Wu);
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
        if (!Xl.hasOwnProperty(i)) t: {
          if (i[0] === "o" && i[1] === "n" && (f = i.endsWith("Capture"), e = i.slice(2, f ? i.length - 7 : void 0), d = t[_n] || null, d = d != null ? d[i] : null, typeof d == "function" && t.removeEventListener(e, d, f), typeof r == "function")) {
            typeof d != "function" && d !== null && (i in t ? t[i] = null : t.hasAttribute(i) && t.removeAttribute(i)), t.addEventListener(e, r, f);
            break t;
          }
          i in t ? t[i] = r : r === true ? t.setAttribute(i, "") : mr(t, i, r);
        }
    }
  }
  function gn(t, e, i) {
    switch (e) {
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
        Kt("error", t), Kt("load", t);
        var r = false, f = false, d;
        for (d in i) if (i.hasOwnProperty(d)) {
          var y = i[d];
          if (y != null) switch (d) {
            case "src":
              r = true;
              break;
            case "srcSet":
              f = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, e));
            default:
              ge(t, e, d, y, i, null);
          }
        }
        f && ge(t, e, "srcSet", i.srcSet, i, null), r && ge(t, e, "src", i.src, i, null);
        return;
      case "input":
        Kt("invalid", t);
        var T = d = y = f = null, P = null, V = null;
        for (r in i) if (i.hasOwnProperty(r)) {
          var at = i[r];
          if (at != null) switch (r) {
            case "name":
              f = at;
              break;
            case "type":
              y = at;
              break;
            case "checked":
              P = at;
              break;
            case "defaultChecked":
              V = at;
              break;
            case "value":
              d = at;
              break;
            case "defaultValue":
              T = at;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (at != null) throw Error(c(137, e));
              break;
            default:
              ge(t, e, r, at, i, null);
          }
        }
        Ql(t, d, T, P, V, y, f, false), Za(t);
        return;
      case "select":
        Kt("invalid", t), r = y = d = null;
        for (f in i) if (i.hasOwnProperty(f) && (T = i[f], T != null)) switch (f) {
          case "value":
            d = T;
            break;
          case "defaultValue":
            y = T;
            break;
          case "multiple":
            r = T;
          default:
            ge(t, e, f, T, i, null);
        }
        e = d, i = y, t.multiple = !!r, e != null ? Dn(t, !!r, e, false) : i != null && Dn(t, !!r, i, true);
        return;
      case "textarea":
        Kt("invalid", t), d = f = r = null;
        for (y in i) if (i.hasOwnProperty(y) && (T = i[y], T != null)) switch (y) {
          case "value":
            r = T;
            break;
          case "defaultValue":
            f = T;
            break;
          case "children":
            d = T;
            break;
          case "dangerouslySetInnerHTML":
            if (T != null) throw Error(c(91));
            break;
          default:
            ge(t, e, y, T, i, null);
        }
        Pi(t, r, f, d), Za(t);
        return;
      case "option":
        for (P in i) if (i.hasOwnProperty(P) && (r = i[P], r != null)) switch (P) {
          case "selected":
            t.selected = r && typeof r != "function" && typeof r != "symbol";
            break;
          default:
            ge(t, e, P, r, i, null);
        }
        return;
      case "dialog":
        Kt("beforetoggle", t), Kt("toggle", t), Kt("cancel", t), Kt("close", t);
        break;
      case "iframe":
      case "object":
        Kt("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < al.length; r++) Kt(al[r], t);
        break;
      case "image":
        Kt("error", t), Kt("load", t);
        break;
      case "details":
        Kt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Kt("error", t), Kt("load", t);
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
        for (V in i) if (i.hasOwnProperty(V) && (r = i[V], r != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(137, e));
          default:
            ge(t, e, V, r, i, null);
        }
        return;
      default:
        if (Bo(e)) {
          for (at in i) i.hasOwnProperty(at) && (r = i[at], r !== void 0 && Od(t, e, at, r, i, void 0));
          return;
        }
    }
    for (T in i) i.hasOwnProperty(T) && (r = i[T], r != null && ge(t, e, T, r, i, null));
  }
  function v0(t, e, i, r) {
    switch (e) {
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
        var f = null, d = null, y = null, T = null, P = null, V = null, at = null;
        for (F in i) {
          var ft = i[F];
          if (i.hasOwnProperty(F) && ft != null) switch (F) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              P = ft;
            default:
              r.hasOwnProperty(F) || ge(t, e, F, null, r, ft);
          }
        }
        for (var X in r) {
          var F = r[X];
          if (ft = i[X], r.hasOwnProperty(X) && (F != null || ft != null)) switch (X) {
            case "type":
              d = F;
              break;
            case "name":
              f = F;
              break;
            case "checked":
              V = F;
              break;
            case "defaultChecked":
              at = F;
              break;
            case "value":
              y = F;
              break;
            case "defaultValue":
              T = F;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (F != null) throw Error(c(137, e));
              break;
            default:
              F !== ft && ge(t, e, X, F, r, ft);
          }
        }
        bn(t, y, T, P, V, at, d, f);
        return;
      case "select":
        F = y = T = X = null;
        for (d in i) if (P = i[d], i.hasOwnProperty(d) && P != null) switch (d) {
          case "value":
            break;
          case "multiple":
            F = P;
          default:
            r.hasOwnProperty(d) || ge(t, e, d, null, r, P);
        }
        for (f in r) if (d = r[f], P = i[f], r.hasOwnProperty(f) && (d != null || P != null)) switch (f) {
          case "value":
            X = d;
            break;
          case "defaultValue":
            T = d;
            break;
          case "multiple":
            y = d;
          default:
            d !== P && ge(t, e, f, d, r, P);
        }
        e = T, i = y, r = F, X != null ? Dn(t, !!i, X, false) : !!r != !!i && (e != null ? Dn(t, !!i, e, true) : Dn(t, !!i, i ? [] : "", false));
        return;
      case "textarea":
        F = X = null;
        for (T in i) if (f = i[T], i.hasOwnProperty(T) && f != null && !r.hasOwnProperty(T)) switch (T) {
          case "value":
            break;
          case "children":
            break;
          default:
            ge(t, e, T, null, r, f);
        }
        for (y in r) if (f = r[y], d = i[y], r.hasOwnProperty(y) && (f != null || d != null)) switch (y) {
          case "value":
            X = f;
            break;
          case "defaultValue":
            F = f;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (f != null) throw Error(c(91));
            break;
          default:
            f !== d && ge(t, e, y, f, r, d);
        }
        ke(t, X, F);
        return;
      case "option":
        for (var zt in i) if (X = i[zt], i.hasOwnProperty(zt) && X != null && !r.hasOwnProperty(zt)) switch (zt) {
          case "selected":
            t.selected = false;
            break;
          default:
            ge(t, e, zt, null, r, X);
        }
        for (P in r) if (X = r[P], F = i[P], r.hasOwnProperty(P) && X !== F && (X != null || F != null)) switch (P) {
          case "selected":
            t.selected = X && typeof X != "function" && typeof X != "symbol";
            break;
          default:
            ge(t, e, P, X, r, F);
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
        for (var At in i) X = i[At], i.hasOwnProperty(At) && X != null && !r.hasOwnProperty(At) && ge(t, e, At, null, r, X);
        for (V in r) if (X = r[V], F = i[V], r.hasOwnProperty(V) && X !== F && (X != null || F != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (X != null) throw Error(c(137, e));
            break;
          default:
            ge(t, e, V, X, r, F);
        }
        return;
      default:
        if (Bo(e)) {
          for (var ve in i) X = i[ve], i.hasOwnProperty(ve) && X !== void 0 && !r.hasOwnProperty(ve) && Od(t, e, ve, void 0, r, X);
          for (at in r) X = r[at], F = i[at], !r.hasOwnProperty(at) || X === F || X === void 0 && F === void 0 || Od(t, e, at, X, r, F);
          return;
        }
    }
    for (var j in i) X = i[j], i.hasOwnProperty(j) && X != null && !r.hasOwnProperty(j) && ge(t, e, j, null, r, X);
    for (ft in r) X = r[ft], F = i[ft], !r.hasOwnProperty(ft) || X === F || X == null && F == null || ge(t, e, ft, X, r, F);
  }
  var Ad = null, Rd = null;
  function Ju(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Cg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wg(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ld(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var zd = null;
  function y0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === zd ? false : (zd = t, true) : (zd = null, false);
  }
  var Eg = typeof setTimeout == "function" ? setTimeout : void 0, _0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Mg = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mg < "u" ? function(t) {
    return Mg.resolve(null).then(t).catch(S0);
  } : Eg;
  function S0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function So(t) {
    return t === "head";
  }
  function Og(t, e) {
    var i = e, r = 0, f = 0;
    do {
      var d = i.nextSibling;
      if (t.removeChild(i), d && d.nodeType === 8) if (i = d.data, i === "/$") {
        if (0 < r && 8 > r) {
          i = r;
          var y = t.ownerDocument;
          if (i & 1 && rl(y.documentElement), i & 2 && rl(y.body), i & 4) for (i = y.head, rl(i), y = i.firstChild; y; ) {
            var T = y.nextSibling, P = y.nodeName;
            y[Da] || P === "SCRIPT" || P === "STYLE" || P === "LINK" && y.rel.toLowerCase() === "stylesheet" || i.removeChild(y), y = T;
          }
        }
        if (f === 0) {
          t.removeChild(d), pl(e);
          return;
        }
        f--;
      } else i === "$" || i === "$?" || i === "$!" ? f++ : r = i.charCodeAt(0) - 48;
      else r = 0;
      i = d;
    } while (i);
    pl(e);
  }
  function Pd(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var i = e;
      switch (e = e.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pd(i), pr(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(i);
    }
  }
  function x0(t, e, i, r) {
    for (; t.nodeType === 1; ) {
      var f = i;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!r && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (r) {
        if (!t[Da]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (d = t.getAttribute("rel"), d === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (d !== f.rel || t.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || t.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || t.getAttribute("title") !== (f.title == null ? null : f.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (d = t.getAttribute("src"), (d !== (f.src == null ? null : f.src) || t.getAttribute("type") !== (f.type == null ? null : f.type) || t.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && d && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (e === "input" && t.type === "hidden") {
        var d = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === d) return t;
      } else return t;
      if (t = Mi(t.nextSibling), t === null) break;
    }
    return null;
  }
  function T0(t, e, i) {
    if (e === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !i || (t = Mi(t.nextSibling), t === null)) return null;
    return t;
  }
  function Bd(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function C0(t, e) {
    var i = t.ownerDocument;
    if (t.data !== "$?" || i.readyState === "complete") e();
    else {
      var r = function() {
        e(), i.removeEventListener("DOMContentLoaded", r);
      };
      i.addEventListener("DOMContentLoaded", r), t._reactRetry = r;
    }
  }
  function Mi(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var kd = null;
  function Ag(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var i = t.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (e === 0) return t;
          e--;
        } else i === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Rg(t, e, i) {
    switch (e = Ju(i), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function rl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    pr(t);
  }
  var gi = /* @__PURE__ */ new Map(), Lg = /* @__PURE__ */ new Set();
  function tc(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Ma = st.d;
  st.d = { f: w0, r: E0, D: M0, C: O0, L: A0, m: R0, X: z0, S: L0, M: P0 };
  function w0() {
    var t = Ma.f(), e = Gu();
    return t || e;
  }
  function E0(t) {
    var e = ta(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fp(e) : Ma.r(t);
  }
  var Wr = typeof document > "u" ? null : document;
  function zg(t, e, i) {
    var r = Wr;
    if (r && typeof e == "string" && e) {
      var f = dn(e);
      f = 'link[rel="' + t + '"][href="' + f + '"]', typeof i == "string" && (f += '[crossorigin="' + i + '"]'), Lg.has(f) || (Lg.add(f), t = { rel: t, crossOrigin: i, href: e }, r.querySelector(f) === null && (e = r.createElement("link"), gn(e, "link", t), Ve(e), r.head.appendChild(e)));
    }
  }
  function M0(t) {
    Ma.D(t), zg("dns-prefetch", t, null);
  }
  function O0(t, e) {
    Ma.C(t, e), zg("preconnect", t, e);
  }
  function A0(t, e, i) {
    Ma.L(t, e, i);
    var r = Wr;
    if (r && t && e) {
      var f = 'link[rel="preload"][as="' + dn(e) + '"]';
      e === "image" && i && i.imageSrcSet ? (f += '[imagesrcset="' + dn(i.imageSrcSet) + '"]', typeof i.imageSizes == "string" && (f += '[imagesizes="' + dn(i.imageSizes) + '"]')) : f += '[href="' + dn(t) + '"]';
      var d = f;
      switch (e) {
        case "style":
          d = Jr(t);
          break;
        case "script":
          d = ts(t);
      }
      gi.has(d) || (t = w({ rel: "preload", href: e === "image" && i && i.imageSrcSet ? void 0 : t, as: e }, i), gi.set(d, t), r.querySelector(f) !== null || e === "style" && r.querySelector(sl(d)) || e === "script" && r.querySelector(ll(d)) || (e = r.createElement("link"), gn(e, "link", t), Ve(e), r.head.appendChild(e)));
    }
  }
  function R0(t, e) {
    Ma.m(t, e);
    var i = Wr;
    if (i && t) {
      var r = e && typeof e.as == "string" ? e.as : "script", f = 'link[rel="modulepreload"][as="' + dn(r) + '"][href="' + dn(t) + '"]', d = f;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ts(t);
      }
      if (!gi.has(d) && (t = w({ rel: "modulepreload", href: t }, e), gi.set(d, t), i.querySelector(f) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(ll(d))) return;
        }
        r = i.createElement("link"), gn(r, "link", t), Ve(r), i.head.appendChild(r);
      }
    }
  }
  function L0(t, e, i) {
    Ma.S(t, e, i);
    var r = Wr;
    if (r && t) {
      var f = ea(r).hoistableStyles, d = Jr(t);
      e = e || "default";
      var y = f.get(d);
      if (!y) {
        var T = { loading: 0, preload: null };
        if (y = r.querySelector(sl(d))) T.loading = 5;
        else {
          t = w({ rel: "stylesheet", href: t, "data-precedence": e }, i), (i = gi.get(d)) && Nd(t, i);
          var P = y = r.createElement("link");
          Ve(P), gn(P, "link", t), P._p = new Promise(function(V, at) {
            P.onload = V, P.onerror = at;
          }), P.addEventListener("load", function() {
            T.loading |= 1;
          }), P.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, ec(y, e, r);
        }
        y = { type: "stylesheet", instance: y, count: 1, state: T }, f.set(d, y);
      }
    }
  }
  function z0(t, e) {
    Ma.X(t, e);
    var i = Wr;
    if (i && t) {
      var r = ea(i).hoistableScripts, f = ts(t), d = r.get(f);
      d || (d = i.querySelector(ll(f)), d || (t = w({ src: t, async: true }, e), (e = gi.get(f)) && Dd(t, e), d = i.createElement("script"), Ve(d), gn(d, "link", t), i.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(f, d));
    }
  }
  function P0(t, e) {
    Ma.M(t, e);
    var i = Wr;
    if (i && t) {
      var r = ea(i).hoistableScripts, f = ts(t), d = r.get(f);
      d || (d = i.querySelector(ll(f)), d || (t = w({ src: t, async: true, type: "module" }, e), (e = gi.get(f)) && Dd(t, e), d = i.createElement("script"), Ve(d), gn(d, "link", t), i.head.appendChild(d)), d = { type: "script", instance: d, count: 1, state: null }, r.set(f, d));
    }
  }
  function Pg(t, e, i, r) {
    var f = (f = gt.current) ? tc(f) : null;
    if (!f) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (e = Jr(i.href), i = ea(f).hoistableStyles, r = i.get(e), r || (r = { type: "style", instance: null, count: 0, state: null }, i.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          t = Jr(i.href);
          var d = ea(f).hoistableStyles, y = d.get(t);
          if (y || (f = f.ownerDocument || f, y = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, d.set(t, y), (d = f.querySelector(sl(t))) && !d._p && (y.instance = d, y.state.loading = 5), gi.has(t) || (i = { rel: "preload", as: "style", href: i.href, crossOrigin: i.crossOrigin, integrity: i.integrity, media: i.media, hrefLang: i.hrefLang, referrerPolicy: i.referrerPolicy }, gi.set(t, i), d || B0(f, t, i, y.state))), e && r === null) throw Error(c(528, ""));
          return y;
        }
        if (e && r !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return e = i.async, i = i.src, typeof i == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ts(i), i = ea(f).hoistableScripts, r = i.get(e), r || (r = { type: "script", instance: null, count: 0, state: null }, i.set(e, r)), r) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function Jr(t) {
    return 'href="' + dn(t) + '"';
  }
  function sl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Bg(t) {
    return w({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function B0(t, e, i, r) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? r.loading = 1 : (e = t.createElement("link"), r.preload = e, e.addEventListener("load", function() {
      return r.loading |= 1;
    }), e.addEventListener("error", function() {
      return r.loading |= 2;
    }), gn(e, "link", i), Ve(e), t.head.appendChild(e));
  }
  function ts(t) {
    return '[src="' + dn(t) + '"]';
  }
  function ll(t) {
    return "script[async]" + t;
  }
  function kg(t, e, i) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var r = t.querySelector('style[data-href~="' + dn(i.href) + '"]');
        if (r) return e.instance = r, Ve(r), r;
        var f = w({}, i, { "data-href": i.href, "data-precedence": i.precedence, href: null, precedence: null });
        return r = (t.ownerDocument || t).createElement("style"), Ve(r), gn(r, "style", f), ec(r, i.precedence, t), e.instance = r;
      case "stylesheet":
        f = Jr(i.href);
        var d = t.querySelector(sl(f));
        if (d) return e.state.loading |= 4, e.instance = d, Ve(d), d;
        r = Bg(i), (f = gi.get(f)) && Nd(r, f), d = (t.ownerDocument || t).createElement("link"), Ve(d);
        var y = d;
        return y._p = new Promise(function(T, P) {
          y.onload = T, y.onerror = P;
        }), gn(d, "link", r), e.state.loading |= 4, ec(d, i.precedence, t), e.instance = d;
      case "script":
        return d = ts(i.src), (f = t.querySelector(ll(d))) ? (e.instance = f, Ve(f), f) : (r = i, (f = gi.get(d)) && (r = w({}, i), Dd(r, f)), t = t.ownerDocument || t, f = t.createElement("script"), Ve(f), gn(f, "link", r), t.head.appendChild(f), e.instance = f);
      case "void":
        return null;
      default:
        throw Error(c(443, e.type));
    }
    else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (r = e.instance, e.state.loading |= 4, ec(r, i.precedence, t));
    return e.instance;
  }
  function ec(t, e, i) {
    for (var r = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), f = r.length ? r[r.length - 1] : null, d = f, y = 0; y < r.length; y++) {
      var T = r[y];
      if (T.dataset.precedence === e) d = T;
      else if (d !== f) break;
    }
    d ? d.parentNode.insertBefore(t, d.nextSibling) : (e = i.nodeType === 9 ? i.head : i, e.insertBefore(t, e.firstChild));
  }
  function Nd(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Dd(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var nc = null;
  function Ng(t, e, i) {
    if (nc === null) {
      var r = /* @__PURE__ */ new Map(), f = nc = /* @__PURE__ */ new Map();
      f.set(i, r);
    } else f = nc, r = f.get(i), r || (r = /* @__PURE__ */ new Map(), f.set(i, r));
    if (r.has(t)) return r;
    for (r.set(t, null), i = i.getElementsByTagName(t), f = 0; f < i.length; f++) {
      var d = i[f];
      if (!(d[Da] || d[on] || t === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = d.getAttribute(e) || "";
        y = t + y;
        var T = r.get(y);
        T ? T.push(d) : r.set(y, [d]);
      }
    }
    return r;
  }
  function Dg(t, e, i) {
    t = t.ownerDocument || t, t.head.insertBefore(i, e === "title" ? t.querySelector("head > title") : null);
  }
  function k0(t, e, i) {
    if (i === 1 || e.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return true;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
    }
    return false;
  }
  function Hg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ul = null;
  function N0() {
  }
  function D0(t, e, i) {
    if (ul === null) throw Error(c(475));
    var r = ul;
    if (e.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== false) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var f = Jr(i.href), d = t.querySelector(sl(f));
        if (d) {
          t = d._p, t !== null && typeof t == "object" && typeof t.then == "function" && (r.count++, r = ic.bind(r), t.then(r, r)), e.state.loading |= 4, e.instance = d, Ve(d);
          return;
        }
        d = t.ownerDocument || t, i = Bg(i), (f = gi.get(f)) && Nd(i, f), d = d.createElement("link"), Ve(d);
        var y = d;
        y._p = new Promise(function(T, P) {
          y.onload = T, y.onerror = P;
        }), gn(d, "link", i), e.instance = d;
      }
      r.stylesheets === null && (r.stylesheets = /* @__PURE__ */ new Map()), r.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (r.count++, e = ic.bind(r), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  function H0() {
    if (ul === null) throw Error(c(475));
    var t = ul;
    return t.stylesheets && t.count === 0 && Hd(t, t.stylesheets), 0 < t.count ? function(e) {
      var i = setTimeout(function() {
        if (t.stylesheets && Hd(t, t.stylesheets), t.unsuspend) {
          var r = t.unsuspend;
          t.unsuspend = null, r();
        }
      }, 6e4);
      return t.unsuspend = e, function() {
        t.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function ic() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Hd(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ac = null;
  function Hd(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ac = /* @__PURE__ */ new Map(), e.forEach(U0, t), ac = null, ic.call(t));
  }
  function U0(t, e) {
    if (!(e.state.loading & 4)) {
      var i = ac.get(t);
      if (i) var r = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), ac.set(t, i);
        for (var f = t.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < f.length; d++) {
          var y = f[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (i.set(y.dataset.precedence, y), r = y);
        }
        r && i.set(null, r);
      }
      f = e.instance, y = f.getAttribute("data-precedence"), d = i.get(y) || r, d === r && i.set(null, f), i.set(y, f), this.count++, r = ic.bind(this), f.addEventListener("load", r), f.addEventListener("error", r), d ? d.parentNode.insertBefore(f, d.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(f, t.firstChild)), e.state.loading |= 4;
    }
  }
  var cl = { $$typeof: k, Provider: null, Consumer: null, _currentValue: it, _currentValue2: it, _threadCount: 0 };
  function Z0(t, e, i, r, f, d, y, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hr(0), this.hiddenUpdates = hr(null), this.identifierPrefix = r, this.onUncaughtError = f, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ug(t, e, i, r, f, d, y, T, P, V, at, ft) {
    return t = new Z0(t, e, i, y, T, P, V, ft), e = 1, d === true && (e |= 24), d = Pn(3, null, null, e), t.current = d, d.stateNode = t, e = _f(), e.refCount++, t.pooledCache = e, e.refCount++, d.memoizedState = { element: r, isDehydrated: i, cache: e }, Tf(d), t;
  }
  function Zg(t) {
    return t ? (t = ya, t) : ya;
  }
  function jg(t, e, i, r, f, d) {
    f = Zg(f), r.context === null ? r.context = f : r.pendingContext = f, r = so(e), r.payload = { element: i }, d = d === void 0 ? null : d, d !== null && (r.callback = d), i = lo(t, r, e), i !== null && (ii(i, t, e), Zs(i, t, e));
  }
  function Ig(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var i = t.retryLane;
      t.retryLane = i !== 0 && i < e ? i : e;
    }
  }
  function Ud(t, e) {
    Ig(t, e), (t = t.alternate) && Ig(t, e);
  }
  function $g(t) {
    if (t.tag === 13) {
      var e = no(t, 67108864);
      e !== null && ii(e, t, 67108864), Ud(t, 67108864);
    }
  }
  var oc = true;
  function j0(t, e, i, r) {
    var f = H.T;
    H.T = null;
    var d = st.p;
    try {
      st.p = 2, Zd(t, e, i, r);
    } finally {
      st.p = d, H.T = f;
    }
  }
  function I0(t, e, i, r) {
    var f = H.T;
    H.T = null;
    var d = st.p;
    try {
      st.p = 8, Zd(t, e, i, r);
    } finally {
      st.p = d, H.T = f;
    }
  }
  function Zd(t, e, i, r) {
    if (oc) {
      var f = jd(r);
      if (f === null) Md(t, e, r, rc, i), Gg(t, r);
      else if (q0(f, t, e, i, r)) r.stopPropagation();
      else if (Gg(t, r), e & 4 && -1 < $0.indexOf(t)) {
        for (; f !== null; ) {
          var d = ta(f);
          if (d !== null) switch (d.tag) {
            case 3:
              if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                var y = Qt(d.pendingLanes);
                if (y !== 0) {
                  var T = d;
                  for (T.pendingLanes |= 2, T.entangledLanes |= 2; y; ) {
                    var P = 1 << 31 - te(y);
                    T.entanglements[1] |= P, y &= ~P;
                  }
                  $i(d), (de & 6) === 0 && ($u = ie() + 500, il(0));
                }
              }
              break;
            case 13:
              T = no(d, 2), T !== null && ii(T, d, 2), Gu(), Ud(d, 2);
          }
          if (d = jd(r), d === null && Md(t, e, r, rc, i), d === f) break;
          f = d;
        }
        f !== null && r.stopPropagation();
      } else Md(t, e, r, null, i);
    }
  }
  function jd(t) {
    return t = qa(t), Id(t);
  }
  var rc = null;
  function Id(t) {
    if (rc = null, t = zi(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var i = e.tag;
        if (i === 13) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (i === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return rc = t, null;
  }
  function qg(t) {
    switch (t) {
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
          case Me:
            return 2;
          case Ae:
            return 8;
          case ce:
          case wt:
            return 32;
          case kn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $d = false, xo = null, To = null, Co = null, fl = /* @__PURE__ */ new Map(), dl = /* @__PURE__ */ new Map(), wo = [], $0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Gg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xo = null;
        break;
      case "dragenter":
      case "dragleave":
        To = null;
        break;
      case "mouseover":
      case "mouseout":
        Co = null;
        break;
      case "pointerover":
      case "pointerout":
        fl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dl.delete(e.pointerId);
    }
  }
  function hl(t, e, i, r, f, d) {
    return t === null || t.nativeEvent !== d ? (t = { blockedOn: e, domEventName: i, eventSystemFlags: r, nativeEvent: d, targetContainers: [f] }, e !== null && (e = ta(e), e !== null && $g(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, f !== null && e.indexOf(f) === -1 && e.push(f), t);
  }
  function q0(t, e, i, r, f) {
    switch (e) {
      case "focusin":
        return xo = hl(xo, t, e, i, r, f), true;
      case "dragenter":
        return To = hl(To, t, e, i, r, f), true;
      case "mouseover":
        return Co = hl(Co, t, e, i, r, f), true;
      case "pointerover":
        var d = f.pointerId;
        return fl.set(d, hl(fl.get(d) || null, t, e, i, r, f)), true;
      case "gotpointercapture":
        return d = f.pointerId, dl.set(d, hl(dl.get(d) || null, t, e, i, r, f)), true;
    }
    return false;
  }
  function Vg(t) {
    var e = zi(t.target);
    if (e !== null) {
      var i = m(e);
      if (i !== null) {
        if (e = i.tag, e === 13) {
          if (e = g(i), e !== null) {
            t.blockedOn = e, vs(t.priority, function() {
              if (i.tag === 13) {
                var r = ni();
                r = ms(r);
                var f = no(i, r);
                f !== null && ii(f, i, r), Ud(i, r);
              }
            });
            return;
          }
        } else if (e === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function sc(t) {
    if (t.blockedOn !== null) return false;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var i = jd(t.nativeEvent);
      if (i === null) {
        i = t.nativeEvent;
        var r = new i.constructor(i.type, i);
        ko = r, i.target.dispatchEvent(r), ko = null;
      } else return e = ta(i), e !== null && $g(e), t.blockedOn = i, false;
      e.shift();
    }
    return true;
  }
  function Yg(t, e, i) {
    sc(t) && i.delete(e);
  }
  function G0() {
    $d = false, xo !== null && sc(xo) && (xo = null), To !== null && sc(To) && (To = null), Co !== null && sc(Co) && (Co = null), fl.forEach(Yg), dl.forEach(Yg);
  }
  function lc(t, e) {
    t.blockedOn === e && (t.blockedOn = null, $d || ($d = true, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, G0)));
  }
  var uc = null;
  function Xg(t) {
    uc !== t && (uc = t, a3.unstable_scheduleCallback(a3.unstable_NormalPriority, function() {
      uc === t && (uc = null);
      for (var e = 0; e < t.length; e += 3) {
        var i = t[e], r = t[e + 1], f = t[e + 2];
        if (typeof r != "function") {
          if (Id(r || i) === null) continue;
          break;
        }
        var d = ta(i);
        d !== null && (t.splice(e, 3), e -= 3, If(d, { pending: true, data: f, method: i.method, action: r }, r, f));
      }
    }));
  }
  function pl(t) {
    function e(P) {
      return lc(P, t);
    }
    xo !== null && lc(xo, t), To !== null && lc(To, t), Co !== null && lc(Co, t), fl.forEach(e), dl.forEach(e);
    for (var i = 0; i < wo.length; i++) {
      var r = wo[i];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < wo.length && (i = wo[0], i.blockedOn === null); ) Vg(i), i.blockedOn === null && wo.shift();
    if (i = (t.ownerDocument || t).$$reactFormReplay, i != null) for (r = 0; r < i.length; r += 3) {
      var f = i[r], d = i[r + 1], y = f[_n] || null;
      if (typeof d == "function") y || Xg(i);
      else if (y) {
        var T = null;
        if (d && d.hasAttribute("formAction")) {
          if (f = d, y = d[_n] || null) T = y.formAction;
          else if (Id(f) !== null) continue;
        } else T = y.action;
        typeof T == "function" ? i[r + 1] = T : (i.splice(r, 3), r -= 3), Xg(i);
      }
    }
  }
  function qd(t) {
    this._internalRoot = t;
  }
  cc.prototype.render = qd.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var i = e.current, r = ni();
    jg(i, r, t, e, null, null);
  }, cc.prototype.unmount = qd.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      jg(t.current, 2, null, t, null, null), Gu(), e[Na] = null;
    }
  };
  function cc(t) {
    this._internalRoot = t;
  }
  cc.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Gl();
      t = { blockedOn: null, target: t, priority: e };
      for (var i = 0; i < wo.length && e !== 0 && e < wo[i].priority; i++) ;
      wo.splice(i, 0, t), i === 0 && Vg(t);
    }
  };
  var Kg = s.version;
  if (Kg !== "19.1.0") throw Error(c(527, Kg, "19.1.0"));
  st.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = b(e), t = t !== null ? S(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var V0 = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: H, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fc.isDisabled && fc.supportsFiber) try {
      pe = fc.inject(V0), Ht = fc;
    } catch {
    }
  }
  return gl.createRoot = function(t, e) {
    if (!h(t)) throw Error(c(299));
    var i = false, r = "", f = fm, d = dm, y = hm, T = null;
    return e != null && (e.unstable_strictMode === true && (i = true), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onUncaughtError !== void 0 && (f = e.onUncaughtError), e.onCaughtError !== void 0 && (d = e.onCaughtError), e.onRecoverableError !== void 0 && (y = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (T = e.unstable_transitionCallbacks)), e = Ug(t, 1, false, null, null, i, r, f, d, y, T, null), t[Na] = e.current, Ed(t), new qd(e);
  }, gl.hydrateRoot = function(t, e, i) {
    if (!h(t)) throw Error(c(299));
    var r = false, f = "", d = fm, y = dm, T = hm, P = null, V = null;
    return i != null && (i.unstable_strictMode === true && (r = true), i.identifierPrefix !== void 0 && (f = i.identifierPrefix), i.onUncaughtError !== void 0 && (d = i.onUncaughtError), i.onCaughtError !== void 0 && (y = i.onCaughtError), i.onRecoverableError !== void 0 && (T = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (P = i.unstable_transitionCallbacks), i.formState !== void 0 && (V = i.formState)), e = Ug(t, 1, true, e, i ?? null, r, f, d, y, T, P, V), e.context = Zg(null), i = e.current, r = ni(), r = ms(r), f = so(r), f.callback = null, lo(i, f, r), i = r, e.current.lanes = i, ka(e, i), $i(e), t[Na] = e.current, Ed(t), new cc(e);
  }, gl.version = "19.1.0", gl;
}
var ov;
function nb() {
  if (ov) return Vd.exports;
  ov = 1;
  function a3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a3);
    } catch (s) {
      console.error(s);
    }
  }
  return a3(), Vd.exports = eb(), Vd.exports;
}
var ib = nb();
const ab = Oh(ib), rv = (a3) => {
  let s;
  const l = /* @__PURE__ */ new Set(), c = (S, w) => {
    const E = typeof S == "function" ? S(s) : S;
    if (!Object.is(E, s)) {
      const R = s;
      s = w ?? (typeof E != "object" || E === null) ? E : Object.assign({}, s, E), l.forEach((D) => D(s, R));
    }
  }, h = () => s, _ = { setState: c, getState: h, getInitialState: () => b, subscribe: (S) => (l.add(S), () => l.delete(S)) }, b = s = a3(c, h, _);
  return _;
}, ob = (a3) => a3 ? rv(a3) : rv;
var O = Ah();
const En = Oh(O), lh = X0({ __proto__: null, default: En }, [O]), rb = (a3) => a3;
function sb(a3, s = rb) {
  const l = En.useSyncExternalStore(a3.subscribe, () => s(a3.getState()), () => s(a3.getInitialState()));
  return En.useDebugValue(l), l;
}
const sv = (a3) => {
  const s = ob(a3), l = (c) => sb(s, c);
  return Object.assign(l, s), l;
}, lb = (a3) => a3 ? sv(a3) : sv;
let wn = lb((a3, s) => ({ geodb: [], landing: true, visibleDots: false, resetClick: (l) => {
  const c = s().geodb;
  c.map((h) => {
    h.id == (l == null ? void 0 : l.id) ? h.clicked = true : h.clicked = false;
  }), a3({ geodb: c });
} }));
function La(a3, ...s) {
  const l = new URL(`https://mui.com/production-error/?code=${a3}`);
  return s.forEach((c) => l.searchParams.append("args[]", c)), `Minified MUI error #${a3}; visit ${l} for the full message.`;
}
const Qi = "$$material";
function Cc() {
  return Cc = Object.assign ? Object.assign.bind() : function(a3) {
    for (var s = 1; s < arguments.length; s++) {
      var l = arguments[s];
      for (var c in l) ({}).hasOwnProperty.call(l, c) && (a3[c] = l[c]);
    }
    return a3;
  }, Cc.apply(null, arguments);
}
function ub(a3) {
  if (a3.sheet) return a3.sheet;
  for (var s = 0; s < document.styleSheets.length; s++) if (document.styleSheets[s].ownerNode === a3) return document.styleSheets[s];
}
function cb(a3) {
  var s = document.createElement("style");
  return s.setAttribute("data-emotion", a3.key), a3.nonce !== void 0 && s.setAttribute("nonce", a3.nonce), s.appendChild(document.createTextNode("")), s.setAttribute("data-s", ""), s;
}
var fb = function() {
  function a3(l) {
    var c = this;
    this._insertTag = function(h) {
      var m;
      c.tags.length === 0 ? c.insertionPoint ? m = c.insertionPoint.nextSibling : c.prepend ? m = c.container.firstChild : m = c.before : m = c.tags[c.tags.length - 1].nextSibling, c.container.insertBefore(h, m), c.tags.push(h);
    }, this.isSpeedy = l.speedy === void 0 ? true : l.speedy, this.tags = [], this.ctr = 0, this.nonce = l.nonce, this.key = l.key, this.container = l.container, this.prepend = l.prepend, this.insertionPoint = l.insertionPoint, this.before = null;
  }
  var s = a3.prototype;
  return s.hydrate = function(c) {
    c.forEach(this._insertTag);
  }, s.insert = function(c) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(cb(this));
    var h = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var m = ub(h);
      try {
        m.insertRule(c, m.cssRules.length);
      } catch {
      }
    } else h.appendChild(document.createTextNode(c));
    this.ctr++;
  }, s.flush = function() {
    this.tags.forEach(function(c) {
      var h;
      return (h = c.parentNode) == null ? void 0 : h.removeChild(c);
    }), this.tags = [], this.ctr = 0;
  }, a3;
}(), Cn = "-ms-", wc = "-moz-", re = "-webkit-", _y = "comm", Rh = "rule", Lh = "decl", db = "@import", by = "@keyframes", hb = "@layer", pb = Math.abs, Lc = String.fromCharCode, mb = Object.assign;
function gb(a3, s) {
  return vn(a3, 0) ^ 45 ? (((s << 2 ^ vn(a3, 0)) << 2 ^ vn(a3, 1)) << 2 ^ vn(a3, 2)) << 2 ^ vn(a3, 3) : 0;
}
function Sy(a3) {
  return a3.trim();
}
function vb(a3, s) {
  return (a3 = s.exec(a3)) ? a3[0] : a3;
}
function se(a3, s, l) {
  return a3.replace(s, l);
}
function uh(a3, s) {
  return a3.indexOf(s);
}
function vn(a3, s) {
  return a3.charCodeAt(s) | 0;
}
function Al(a3, s, l) {
  return a3.slice(s, l);
}
function Vi(a3) {
  return a3.length;
}
function zh(a3) {
  return a3.length;
}
function dc(a3, s) {
  return s.push(a3), a3;
}
function yb(a3, s) {
  return a3.map(s).join("");
}
var zc = 1, cs = 1, xy = 0, $n = 0, Ke = 0, ds = "";
function Pc(a3, s, l, c, h, m, g) {
  return { value: a3, root: s, parent: l, type: c, props: h, children: m, line: zc, column: cs, length: g, return: "" };
}
function vl(a3, s) {
  return mb(Pc("", null, null, "", null, null, 0), a3, { length: -a3.length }, s);
}
function _b() {
  return Ke;
}
function bb() {
  return Ke = $n > 0 ? vn(ds, --$n) : 0, cs--, Ke === 10 && (cs = 1, zc--), Ke;
}
function oi() {
  return Ke = $n < xy ? vn(ds, $n++) : 0, cs++, Ke === 10 && (cs = 1, zc++), Ke;
}
function Fi() {
  return vn(ds, $n);
}
function bc() {
  return $n;
}
function Pl(a3, s) {
  return Al(ds, a3, s);
}
function Rl(a3) {
  switch (a3) {
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
function Ty(a3) {
  return zc = cs = 1, xy = Vi(ds = a3), $n = 0, [];
}
function Cy(a3) {
  return ds = "", a3;
}
function Sc(a3) {
  return Sy(Pl($n - 1, ch(a3 === 91 ? a3 + 2 : a3 === 40 ? a3 + 1 : a3)));
}
function Sb(a3) {
  for (; (Ke = Fi()) && Ke < 33; ) oi();
  return Rl(a3) > 2 || Rl(Ke) > 3 ? "" : " ";
}
function xb(a3, s) {
  for (; --s && oi() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); ) ;
  return Pl(a3, bc() + (s < 6 && Fi() == 32 && oi() == 32));
}
function ch(a3) {
  for (; oi(); ) switch (Ke) {
    case a3:
      return $n;
    case 34:
    case 39:
      a3 !== 34 && a3 !== 39 && ch(Ke);
      break;
    case 40:
      a3 === 41 && ch(a3);
      break;
    case 92:
      oi();
      break;
  }
  return $n;
}
function Tb(a3, s) {
  for (; oi() && a3 + Ke !== 57; ) if (a3 + Ke === 84 && Fi() === 47) break;
  return "/*" + Pl(s, $n - 1) + "*" + Lc(a3 === 47 ? a3 : oi());
}
function Cb(a3) {
  for (; !Rl(Fi()); ) oi();
  return Pl(a3, $n);
}
function wb(a3) {
  return Cy(xc("", null, null, null, [""], a3 = Ty(a3), 0, [0], a3));
}
function xc(a3, s, l, c, h, m, g, _, b) {
  for (var S = 0, w = 0, E = g, R = 0, D = 0, N = 0, A = 1, $ = 1, q = 1, tt = 0, k = "", U = h, B = m, J = c, ot = k; $; ) switch (N = tt, tt = oi()) {
    case 40:
      if (N != 108 && vn(ot, E - 1) == 58) {
        uh(ot += se(Sc(tt), "&", "&\f"), "&\f") != -1 && (q = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      ot += Sc(tt);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      ot += Sb(N);
      break;
    case 92:
      ot += xb(bc() - 1, 7);
      continue;
    case 47:
      switch (Fi()) {
        case 42:
        case 47:
          dc(Eb(Tb(oi(), bc()), s, l), b);
          break;
        default:
          ot += "/";
      }
      break;
    case 123 * A:
      _[S++] = Vi(ot) * q;
    case 125 * A:
    case 59:
    case 0:
      switch (tt) {
        case 0:
        case 125:
          $ = 0;
        case 59 + w:
          q == -1 && (ot = se(ot, /\f/g, "")), D > 0 && Vi(ot) - E && dc(D > 32 ? uv(ot + ";", c, l, E - 1) : uv(se(ot, " ", "") + ";", c, l, E - 2), b);
          break;
        case 59:
          ot += ";";
        default:
          if (dc(J = lv(ot, s, l, S, w, h, _, k, U = [], B = [], E), m), tt === 123) if (w === 0) xc(ot, s, J, J, U, m, E, _, B);
          else switch (R === 99 && vn(ot, 3) === 110 ? 100 : R) {
            case 100:
            case 108:
            case 109:
            case 115:
              xc(a3, J, J, c && dc(lv(a3, J, J, 0, 0, h, _, k, h, U = [], E), B), h, B, E, _, c ? U : B);
              break;
            default:
              xc(ot, J, J, J, [""], B, 0, _, B);
          }
      }
      S = w = D = 0, A = q = 1, k = ot = "", E = g;
      break;
    case 58:
      E = 1 + Vi(ot), D = N;
    default:
      if (A < 1) {
        if (tt == 123) --A;
        else if (tt == 125 && A++ == 0 && bb() == 125) continue;
      }
      switch (ot += Lc(tt), tt * A) {
        case 38:
          q = w > 0 ? 1 : (ot += "\f", -1);
          break;
        case 44:
          _[S++] = (Vi(ot) - 1) * q, q = 1;
          break;
        case 64:
          Fi() === 45 && (ot += Sc(oi())), R = Fi(), w = E = Vi(k = ot += Cb(bc())), tt++;
          break;
        case 45:
          N === 45 && Vi(ot) == 2 && (A = 0);
      }
  }
  return m;
}
function lv(a3, s, l, c, h, m, g, _, b, S, w) {
  for (var E = h - 1, R = h === 0 ? m : [""], D = zh(R), N = 0, A = 0, $ = 0; N < c; ++N) for (var q = 0, tt = Al(a3, E + 1, E = pb(A = g[N])), k = a3; q < D; ++q) (k = Sy(A > 0 ? R[q] + " " + tt : se(tt, /&\f/g, R[q]))) && (b[$++] = k);
  return Pc(a3, s, l, h === 0 ? Rh : _, b, S, w);
}
function Eb(a3, s, l) {
  return Pc(a3, s, l, _y, Lc(_b()), Al(a3, 2, -2), 0);
}
function uv(a3, s, l, c) {
  return Pc(a3, s, l, Lh, Al(a3, 0, c), Al(a3, c + 1, -1), c);
}
function ls(a3, s) {
  for (var l = "", c = zh(a3), h = 0; h < c; h++) l += s(a3[h], h, a3, s) || "";
  return l;
}
function Mb(a3, s, l, c) {
  switch (a3.type) {
    case hb:
      if (a3.children.length) break;
    case db:
    case Lh:
      return a3.return = a3.return || a3.value;
    case _y:
      return "";
    case by:
      return a3.return = a3.value + "{" + ls(a3.children, c) + "}";
    case Rh:
      a3.value = a3.props.join(",");
  }
  return Vi(l = ls(a3.children, c)) ? a3.return = a3.value + "{" + l + "}" : "";
}
function Ob(a3) {
  var s = zh(a3);
  return function(l, c, h, m) {
    for (var g = "", _ = 0; _ < s; _++) g += a3[_](l, c, h, m) || "";
    return g;
  };
}
function Ab(a3) {
  return function(s) {
    s.root || (s = s.return) && a3(s);
  };
}
function wy(a3) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return s[l] === void 0 && (s[l] = a3(l)), s[l];
  };
}
var Rb = function(s, l, c) {
  for (var h = 0, m = 0; h = m, m = Fi(), h === 38 && m === 12 && (l[c] = 1), !Rl(m); ) oi();
  return Pl(s, $n);
}, Lb = function(s, l) {
  var c = -1, h = 44;
  do
    switch (Rl(h)) {
      case 0:
        h === 38 && Fi() === 12 && (l[c] = 1), s[c] += Rb($n - 1, l, c);
        break;
      case 2:
        s[c] += Sc(h);
        break;
      case 4:
        if (h === 44) {
          s[++c] = Fi() === 58 ? "&\f" : "", l[c] = s[c].length;
          break;
        }
      default:
        s[c] += Lc(h);
    }
  while (h = oi());
  return s;
}, zb = function(s, l) {
  return Cy(Lb(Ty(s), l));
}, cv = /* @__PURE__ */ new WeakMap(), Pb = function(s) {
  if (!(s.type !== "rule" || !s.parent || s.length < 1)) {
    for (var l = s.value, c = s.parent, h = s.column === c.column && s.line === c.line; c.type !== "rule"; ) if (c = c.parent, !c) return;
    if (!(s.props.length === 1 && l.charCodeAt(0) !== 58 && !cv.get(c)) && !h) {
      cv.set(s, true);
      for (var m = [], g = zb(l, m), _ = c.props, b = 0, S = 0; b < g.length; b++) for (var w = 0; w < _.length; w++, S++) s.props[S] = m[b] ? g[b].replace(/&\f/g, _[w]) : _[w] + " " + g[b];
    }
  }
}, Bb = function(s) {
  if (s.type === "decl") {
    var l = s.value;
    l.charCodeAt(0) === 108 && l.charCodeAt(2) === 98 && (s.return = "", s.value = "");
  }
};
function Ey(a3, s) {
  switch (gb(a3, s)) {
    case 5103:
      return re + "print-" + a3 + a3;
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
      return re + a3 + a3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + a3 + wc + a3 + Cn + a3 + a3;
    case 6828:
    case 4268:
      return re + a3 + Cn + a3 + a3;
    case 6165:
      return re + a3 + Cn + "flex-" + a3 + a3;
    case 5187:
      return re + a3 + se(a3, /(\w+).+(:[^]+)/, re + "box-$1$2" + Cn + "flex-$1$2") + a3;
    case 5443:
      return re + a3 + Cn + "flex-item-" + se(a3, /flex-|-self/, "") + a3;
    case 4675:
      return re + a3 + Cn + "flex-line-pack" + se(a3, /align-content|flex-|-self/, "") + a3;
    case 5548:
      return re + a3 + Cn + se(a3, "shrink", "negative") + a3;
    case 5292:
      return re + a3 + Cn + se(a3, "basis", "preferred-size") + a3;
    case 6060:
      return re + "box-" + se(a3, "-grow", "") + re + a3 + Cn + se(a3, "grow", "positive") + a3;
    case 4554:
      return re + se(a3, /([^-])(transform)/g, "$1" + re + "$2") + a3;
    case 6187:
      return se(se(se(a3, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"), a3, "") + a3;
    case 5495:
    case 3959:
      return se(a3, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return se(se(a3, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Cn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + re + a3 + a3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(a3, /(.+)-inline(.+)/, re + "$1$2") + a3;
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
      if (Vi(a3) - 1 - s > 6) switch (vn(a3, s + 1)) {
        case 109:
          if (vn(a3, s + 4) !== 45) break;
        case 102:
          return se(a3, /(.+:)(.+)-([^]+)/, "$1" + re + "$2-$3$1" + wc + (vn(a3, s + 3) == 108 ? "$3" : "$2-$3")) + a3;
        case 115:
          return ~uh(a3, "stretch") ? Ey(se(a3, "stretch", "fill-available"), s) + a3 : a3;
      }
      break;
    case 4949:
      if (vn(a3, s + 1) !== 115) break;
    case 6444:
      switch (vn(a3, Vi(a3) - 3 - (~uh(a3, "!important") && 10))) {
        case 107:
          return se(a3, ":", ":" + re) + a3;
        case 101:
          return se(a3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + re + (vn(a3, 14) === 45 ? "inline-" : "") + "box$3$1" + re + "$2$3$1" + Cn + "$2box$3") + a3;
      }
      break;
    case 5936:
      switch (vn(a3, s + 11)) {
        case 114:
          return re + a3 + Cn + se(a3, /[svh]\w+-[tblr]{2}/, "tb") + a3;
        case 108:
          return re + a3 + Cn + se(a3, /[svh]\w+-[tblr]{2}/, "tb-rl") + a3;
        case 45:
          return re + a3 + Cn + se(a3, /[svh]\w+-[tblr]{2}/, "lr") + a3;
      }
      return re + a3 + Cn + a3 + a3;
  }
  return a3;
}
var kb = function(s, l, c, h) {
  if (s.length > -1 && !s.return) switch (s.type) {
    case Lh:
      s.return = Ey(s.value, s.length);
      break;
    case by:
      return ls([vl(s, { value: se(s.value, "@", "@" + re) })], h);
    case Rh:
      if (s.length) return yb(s.props, function(m) {
        switch (vb(m, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ls([vl(s, { props: [se(m, /:(read-\w+)/, ":" + wc + "$1")] })], h);
          case "::placeholder":
            return ls([vl(s, { props: [se(m, /:(plac\w+)/, ":" + re + "input-$1")] }), vl(s, { props: [se(m, /:(plac\w+)/, ":" + wc + "$1")] }), vl(s, { props: [se(m, /:(plac\w+)/, Cn + "input-$1")] })], h);
        }
        return "";
      });
  }
}, Nb = [kb], Db = function(s) {
  var l = s.key;
  if (l === "css") {
    var c = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(c, function(A) {
      var $ = A.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(A), A.setAttribute("data-s", ""));
    });
  }
  var h = s.stylisPlugins || Nb, m = {}, g, _ = [];
  g = s.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + l + ' "]'), function(A) {
    for (var $ = A.getAttribute("data-emotion").split(" "), q = 1; q < $.length; q++) m[$[q]] = true;
    _.push(A);
  });
  var b, S = [Pb, Bb];
  {
    var w, E = [Mb, Ab(function(A) {
      w.insert(A);
    })], R = Ob(S.concat(h, E)), D = function($) {
      return ls(wb($), R);
    };
    b = function($, q, tt, k) {
      w = tt, D($ ? $ + "{" + q.styles + "}" : q.styles), k && (N.inserted[q.name] = true);
    };
  }
  var N = { key: l, sheet: new fb({ key: l, container: g, nonce: s.nonce, speedy: s.speedy, prepend: s.prepend, insertionPoint: s.insertionPoint }), nonce: s.nonce, inserted: m, registered: {}, insert: b };
  return N.sheet.hydrate(_), N;
}, Fd = { exports: {} }, fe = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var fv;
function Hb() {
  if (fv) return fe;
  fv = 1;
  var a3 = typeof Symbol == "function" && Symbol.for, s = a3 ? Symbol.for("react.element") : 60103, l = a3 ? Symbol.for("react.portal") : 60106, c = a3 ? Symbol.for("react.fragment") : 60107, h = a3 ? Symbol.for("react.strict_mode") : 60108, m = a3 ? Symbol.for("react.profiler") : 60114, g = a3 ? Symbol.for("react.provider") : 60109, _ = a3 ? Symbol.for("react.context") : 60110, b = a3 ? Symbol.for("react.async_mode") : 60111, S = a3 ? Symbol.for("react.concurrent_mode") : 60111, w = a3 ? Symbol.for("react.forward_ref") : 60112, E = a3 ? Symbol.for("react.suspense") : 60113, R = a3 ? Symbol.for("react.suspense_list") : 60120, D = a3 ? Symbol.for("react.memo") : 60115, N = a3 ? Symbol.for("react.lazy") : 60116, A = a3 ? Symbol.for("react.block") : 60121, $ = a3 ? Symbol.for("react.fundamental") : 60117, q = a3 ? Symbol.for("react.responder") : 60118, tt = a3 ? Symbol.for("react.scope") : 60119;
  function k(B) {
    if (typeof B == "object" && B !== null) {
      var J = B.$$typeof;
      switch (J) {
        case s:
          switch (B = B.type, B) {
            case b:
            case S:
            case c:
            case m:
            case h:
            case E:
              return B;
            default:
              switch (B = B && B.$$typeof, B) {
                case _:
                case w:
                case N:
                case D:
                case g:
                  return B;
                default:
                  return J;
              }
          }
        case l:
          return J;
      }
    }
  }
  function U(B) {
    return k(B) === S;
  }
  return fe.AsyncMode = b, fe.ConcurrentMode = S, fe.ContextConsumer = _, fe.ContextProvider = g, fe.Element = s, fe.ForwardRef = w, fe.Fragment = c, fe.Lazy = N, fe.Memo = D, fe.Portal = l, fe.Profiler = m, fe.StrictMode = h, fe.Suspense = E, fe.isAsyncMode = function(B) {
    return U(B) || k(B) === b;
  }, fe.isConcurrentMode = U, fe.isContextConsumer = function(B) {
    return k(B) === _;
  }, fe.isContextProvider = function(B) {
    return k(B) === g;
  }, fe.isElement = function(B) {
    return typeof B == "object" && B !== null && B.$$typeof === s;
  }, fe.isForwardRef = function(B) {
    return k(B) === w;
  }, fe.isFragment = function(B) {
    return k(B) === c;
  }, fe.isLazy = function(B) {
    return k(B) === N;
  }, fe.isMemo = function(B) {
    return k(B) === D;
  }, fe.isPortal = function(B) {
    return k(B) === l;
  }, fe.isProfiler = function(B) {
    return k(B) === m;
  }, fe.isStrictMode = function(B) {
    return k(B) === h;
  }, fe.isSuspense = function(B) {
    return k(B) === E;
  }, fe.isValidElementType = function(B) {
    return typeof B == "string" || typeof B == "function" || B === c || B === S || B === m || B === h || B === E || B === R || typeof B == "object" && B !== null && (B.$$typeof === N || B.$$typeof === D || B.$$typeof === g || B.$$typeof === _ || B.$$typeof === w || B.$$typeof === $ || B.$$typeof === q || B.$$typeof === tt || B.$$typeof === A);
  }, fe.typeOf = k, fe;
}
var dv;
function Ub() {
  return dv || (dv = 1, Fd.exports = Hb()), Fd.exports;
}
var Wd, hv;
function Zb() {
  if (hv) return Wd;
  hv = 1;
  var a3 = Ub(), s = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, l = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, c = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, h = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, m = {};
  m[a3.ForwardRef] = c, m[a3.Memo] = h;
  function g(N) {
    return a3.isMemo(N) ? h : m[N.$$typeof] || s;
  }
  var _ = Object.defineProperty, b = Object.getOwnPropertyNames, S = Object.getOwnPropertySymbols, w = Object.getOwnPropertyDescriptor, E = Object.getPrototypeOf, R = Object.prototype;
  function D(N, A, $) {
    if (typeof A != "string") {
      if (R) {
        var q = E(A);
        q && q !== R && D(N, q, $);
      }
      var tt = b(A);
      S && (tt = tt.concat(S(A)));
      for (var k = g(N), U = g(A), B = 0; B < tt.length; ++B) {
        var J = tt[B];
        if (!l[J] && !($ && $[J]) && !(U && U[J]) && !(k && k[J])) {
          var ot = w(A, J);
          try {
            _(N, J, ot);
          } catch {
          }
        }
      }
    }
    return N;
  }
  return Wd = D, Wd;
}
Zb();
var jb = true;
function My(a3, s, l) {
  var c = "";
  return l.split(" ").forEach(function(h) {
    a3[h] !== void 0 ? s.push(a3[h] + ";") : h && (c += h + " ");
  }), c;
}
var Ph = function(s, l, c) {
  var h = s.key + "-" + l.name;
  (c === false || jb === false) && s.registered[h] === void 0 && (s.registered[h] = l.styles);
}, Bh = function(s, l, c) {
  Ph(s, l, c);
  var h = s.key + "-" + l.name;
  if (s.inserted[l.name] === void 0) {
    var m = l;
    do
      s.insert(l === m ? "." + h : "", m, s.sheet, true), m = m.next;
    while (m !== void 0);
  }
};
function Ib(a3) {
  for (var s = 0, l, c = 0, h = a3.length; h >= 4; ++c, h -= 4) l = a3.charCodeAt(c) & 255 | (a3.charCodeAt(++c) & 255) << 8 | (a3.charCodeAt(++c) & 255) << 16 | (a3.charCodeAt(++c) & 255) << 24, l = (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16), l ^= l >>> 24, s = (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16) ^ (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  switch (h) {
    case 3:
      s ^= (a3.charCodeAt(c + 2) & 255) << 16;
    case 2:
      s ^= (a3.charCodeAt(c + 1) & 255) << 8;
    case 1:
      s ^= a3.charCodeAt(c) & 255, s = (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  }
  return s ^= s >>> 13, s = (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), ((s ^ s >>> 15) >>> 0).toString(36);
}
var $b = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, qb = /[A-Z]|^ms/g, Gb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Oy = function(s) {
  return s.charCodeAt(1) === 45;
}, pv = function(s) {
  return s != null && typeof s != "boolean";
}, Jd = wy(function(a3) {
  return Oy(a3) ? a3 : a3.replace(qb, "-$&").toLowerCase();
}), mv = function(s, l) {
  switch (s) {
    case "animation":
    case "animationName":
      if (typeof l == "string") return l.replace(Gb, function(c, h, m) {
        return Yi = { name: h, styles: m, next: Yi }, h;
      });
  }
  return $b[s] !== 1 && !Oy(s) && typeof l == "number" && l !== 0 ? l + "px" : l;
};
function Ll(a3, s, l) {
  if (l == null) return "";
  var c = l;
  if (c.__emotion_styles !== void 0) return c;
  switch (typeof l) {
    case "boolean":
      return "";
    case "object": {
      var h = l;
      if (h.anim === 1) return Yi = { name: h.name, styles: h.styles, next: Yi }, h.name;
      var m = l;
      if (m.styles !== void 0) {
        var g = m.next;
        if (g !== void 0) for (; g !== void 0; ) Yi = { name: g.name, styles: g.styles, next: Yi }, g = g.next;
        var _ = m.styles + ";";
        return _;
      }
      return Vb(a3, s, l);
    }
    case "function": {
      if (a3 !== void 0) {
        var b = Yi, S = l(a3);
        return Yi = b, Ll(a3, s, S);
      }
      break;
    }
  }
  var w = l;
  if (s == null) return w;
  var E = s[w];
  return E !== void 0 ? E : w;
}
function Vb(a3, s, l) {
  var c = "";
  if (Array.isArray(l)) for (var h = 0; h < l.length; h++) c += Ll(a3, s, l[h]) + ";";
  else for (var m in l) {
    var g = l[m];
    if (typeof g != "object") {
      var _ = g;
      s != null && s[_] !== void 0 ? c += m + "{" + s[_] + "}" : pv(_) && (c += Jd(m) + ":" + mv(m, _) + ";");
    } else if (Array.isArray(g) && typeof g[0] == "string" && (s == null || s[g[0]] === void 0)) for (var b = 0; b < g.length; b++) pv(g[b]) && (c += Jd(m) + ":" + mv(m, g[b]) + ";");
    else {
      var S = Ll(a3, s, g);
      switch (m) {
        case "animation":
        case "animationName": {
          c += Jd(m) + ":" + S + ";";
          break;
        }
        default:
          c += m + "{" + S + "}";
      }
    }
  }
  return c;
}
var gv = /label:\s*([^\s;{]+)\s*(;|$)/g, Yi;
function Bl(a3, s, l) {
  if (a3.length === 1 && typeof a3[0] == "object" && a3[0] !== null && a3[0].styles !== void 0) return a3[0];
  var c = true, h = "";
  Yi = void 0;
  var m = a3[0];
  if (m == null || m.raw === void 0) c = false, h += Ll(l, s, m);
  else {
    var g = m;
    h += g[0];
  }
  for (var _ = 1; _ < a3.length; _++) if (h += Ll(l, s, a3[_]), c) {
    var b = m;
    h += b[_];
  }
  gv.lastIndex = 0;
  for (var S = "", w; (w = gv.exec(h)) !== null; ) S += "-" + w[1];
  var E = Ib(h) + S;
  return { name: E, styles: h, next: Yi };
}
var Yb = function(s) {
  return s();
}, Ay = lh.useInsertionEffect ? lh.useInsertionEffect : false, Ry = Ay || Yb, vv = Ay || O.useLayoutEffect, Ly = O.createContext(typeof HTMLElement < "u" ? Db({ key: "css" }) : null);
Ly.Provider;
var kh = function(s) {
  return O.forwardRef(function(l, c) {
    var h = O.useContext(Ly);
    return s(l, h, c);
  });
}, kl = O.createContext({}), Nh = {}.hasOwnProperty, fh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Xb = function(s, l) {
  var c = {};
  for (var h in l) Nh.call(l, h) && (c[h] = l[h]);
  return c[fh] = s, c;
}, Kb = function(s) {
  var l = s.cache, c = s.serialized, h = s.isStringTag;
  return Ph(l, c, h), Ry(function() {
    return Bh(l, c, h);
  }), null;
}, Qb = kh(function(a3, s, l) {
  var c = a3.css;
  typeof c == "string" && s.registered[c] !== void 0 && (c = s.registered[c]);
  var h = a3[fh], m = [c], g = "";
  typeof a3.className == "string" ? g = My(s.registered, m, a3.className) : a3.className != null && (g = a3.className + " ");
  var _ = Bl(m, void 0, O.useContext(kl));
  g += s.key + "-" + _.name;
  var b = {};
  for (var S in a3) Nh.call(a3, S) && S !== "css" && S !== fh && (b[S] = a3[S]);
  return b.className = g, l && (b.ref = l), O.createElement(O.Fragment, null, O.createElement(Kb, { cache: s, serialized: _, isStringTag: typeof h == "string" }), O.createElement(h, b));
}), Fb = Qb, yv = function(s, l) {
  var c = arguments;
  if (l == null || !Nh.call(l, "css")) return O.createElement.apply(void 0, c);
  var h = c.length, m = new Array(h);
  m[0] = Fb, m[1] = Xb(s, l);
  for (var g = 2; g < h; g++) m[g] = c[g];
  return O.createElement.apply(null, m);
};
(function(a3) {
  var s;
  s || (s = a3.JSX || (a3.JSX = {}));
})(yv || (yv = {}));
var Wb = kh(function(a3, s) {
  var l = a3.styles, c = Bl([l], void 0, O.useContext(kl)), h = O.useRef();
  return vv(function() {
    var m = s.key + "-global", g = new s.sheet.constructor({ key: m, nonce: s.sheet.nonce, container: s.sheet.container, speedy: s.sheet.isSpeedy }), _ = false, b = document.querySelector('style[data-emotion="' + m + " " + c.name + '"]');
    return s.sheet.tags.length && (g.before = s.sheet.tags[0]), b !== null && (_ = true, b.setAttribute("data-emotion", m), g.hydrate([b])), h.current = [g, _], function() {
      g.flush();
    };
  }, [s]), vv(function() {
    var m = h.current, g = m[0], _ = m[1];
    if (_) {
      m[1] = false;
      return;
    }
    if (c.next !== void 0 && Bh(s, c.next, true), g.tags.length) {
      var b = g.tags[g.tags.length - 1].nextElementSibling;
      g.before = b, g.flush();
    }
    s.insert("", c, g, false);
  }, [s, c.name]), null;
});
function Dh() {
  for (var a3 = arguments.length, s = new Array(a3), l = 0; l < a3; l++) s[l] = arguments[l];
  return Bl(s);
}
function Nl() {
  var a3 = Dh.apply(void 0, arguments), s = "animation-" + a3.name;
  return { name: s, styles: "@keyframes " + s + "{" + a3.styles + "}", anim: 1, toString: function() {
    return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
  } };
}
var Jb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, t1 = wy(function(a3) {
  return Jb.test(a3) || a3.charCodeAt(0) === 111 && a3.charCodeAt(1) === 110 && a3.charCodeAt(2) < 91;
}), e1 = t1, n1 = function(s) {
  return s !== "theme";
}, _v = function(s) {
  return typeof s == "string" && s.charCodeAt(0) > 96 ? e1 : n1;
}, bv = function(s, l, c) {
  var h;
  if (l) {
    var m = l.shouldForwardProp;
    h = s.__emotion_forwardProp && m ? function(g) {
      return s.__emotion_forwardProp(g) && m(g);
    } : m;
  }
  return typeof h != "function" && c && (h = s.__emotion_forwardProp), h;
}, i1 = function(s) {
  var l = s.cache, c = s.serialized, h = s.isStringTag;
  return Ph(l, c, h), Ry(function() {
    return Bh(l, c, h);
  }), null;
}, a1 = function a(s, l) {
  var c = s.__emotion_real === s, h = c && s.__emotion_base || s, m, g;
  l !== void 0 && (m = l.label, g = l.target);
  var _ = bv(s, l, c), b = _ || _v(h), S = !b("as");
  return function() {
    var w = arguments, E = c && s.__emotion_styles !== void 0 ? s.__emotion_styles.slice(0) : [];
    if (m !== void 0 && E.push("label:" + m + ";"), w[0] == null || w[0].raw === void 0) E.push.apply(E, w);
    else {
      var R = w[0];
      E.push(R[0]);
      for (var D = w.length, N = 1; N < D; N++) E.push(w[N], R[N]);
    }
    var A = kh(function($, q, tt) {
      var k = S && $.as || h, U = "", B = [], J = $;
      if ($.theme == null) {
        J = {};
        for (var ot in $) J[ot] = $[ot];
        J.theme = O.useContext(kl);
      }
      typeof $.className == "string" ? U = My(q.registered, B, $.className) : $.className != null && (U = $.className + " ");
      var et = Bl(E.concat(B), q.registered, J);
      U += q.key + "-" + et.name, g !== void 0 && (U += " " + g);
      var dt = S && _ === void 0 ? _v(k) : b, C = {};
      for (var Q in $) S && Q === "as" || dt(Q) && (C[Q] = $[Q]);
      return C.className = U, tt && (C.ref = tt), O.createElement(O.Fragment, null, O.createElement(i1, { cache: q, serialized: et, isStringTag: typeof k == "string" }), O.createElement(k, C));
    });
    return A.displayName = m !== void 0 ? m : "Styled(" + (typeof h == "string" ? h : h.displayName || h.name || "Component") + ")", A.defaultProps = s.defaultProps, A.__emotion_real = A, A.__emotion_base = h, A.__emotion_styles = E, A.__emotion_forwardProp = _, Object.defineProperty(A, "toString", { value: function() {
      return "." + g;
    } }), A.withComponent = function($, q) {
      var tt = a($, Cc({}, l, q, { shouldForwardProp: bv(A, q, true) }));
      return tt.apply(void 0, E);
    }, A;
  };
}, o1 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], dh = a1.bind(null);
o1.forEach(function(a3) {
  dh[a3] = dh(a3);
});
function r1(a3) {
  return a3 == null || Object.keys(a3).length === 0;
}
function zy(a3) {
  const { styles: s, defaultTheme: l = {} } = a3, c = typeof s == "function" ? (h) => s(r1(h) ? l : h) : s;
  return Y.jsx(Wb, { styles: c });
}
function Py(a3, s) {
  return dh(a3, s);
}
function s1(a3, s) {
  Array.isArray(a3.__emotion_styles) && (a3.__emotion_styles = s(a3.__emotion_styles));
}
const Sv = [];
function xv(a3) {
  return Sv[0] = a3, Bl(Sv);
}
var th = { exports: {} }, ye = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Tv;
function l1() {
  if (Tv) return ye;
  Tv = 1;
  var a3 = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.for("react.view_transition"), D = Symbol.for("react.client.reference");
  function N(A) {
    if (typeof A == "object" && A !== null) {
      var $ = A.$$typeof;
      switch ($) {
        case a3:
          switch (A = A.type, A) {
            case l:
            case h:
            case c:
            case b:
            case S:
            case R:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case g:
                case _:
                case E:
                case w:
                  return A;
                case m:
                  return A;
                default:
                  return $;
              }
          }
        case s:
          return $;
      }
    }
  }
  return ye.ContextConsumer = m, ye.ContextProvider = g, ye.Element = a3, ye.ForwardRef = _, ye.Fragment = l, ye.Lazy = E, ye.Memo = w, ye.Portal = s, ye.Profiler = h, ye.StrictMode = c, ye.Suspense = b, ye.SuspenseList = S, ye.isContextConsumer = function(A) {
    return N(A) === m;
  }, ye.isContextProvider = function(A) {
    return N(A) === g;
  }, ye.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === a3;
  }, ye.isForwardRef = function(A) {
    return N(A) === _;
  }, ye.isFragment = function(A) {
    return N(A) === l;
  }, ye.isLazy = function(A) {
    return N(A) === E;
  }, ye.isMemo = function(A) {
    return N(A) === w;
  }, ye.isPortal = function(A) {
    return N(A) === s;
  }, ye.isProfiler = function(A) {
    return N(A) === h;
  }, ye.isStrictMode = function(A) {
    return N(A) === c;
  }, ye.isSuspense = function(A) {
    return N(A) === b;
  }, ye.isSuspenseList = function(A) {
    return N(A) === S;
  }, ye.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === l || A === h || A === c || A === b || A === S || typeof A == "object" && A !== null && (A.$$typeof === E || A.$$typeof === w || A.$$typeof === g || A.$$typeof === m || A.$$typeof === _ || A.$$typeof === D || A.getModuleId !== void 0);
  }, ye.typeOf = N, ye;
}
var Cv;
function u1() {
  return Cv || (Cv = 1, th.exports = l1()), th.exports;
}
var By = u1();
function Xi(a3) {
  if (typeof a3 != "object" || a3 === null) return false;
  const s = Object.getPrototypeOf(a3);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in a3) && !(Symbol.iterator in a3);
}
function ky(a3) {
  if (O.isValidElement(a3) || By.isValidElementType(a3) || !Xi(a3)) return a3;
  const s = {};
  return Object.keys(a3).forEach((l) => {
    s[l] = ky(a3[l]);
  }), s;
}
function Mn(a3, s, l = { clone: true }) {
  const c = l.clone ? { ...a3 } : a3;
  return Xi(a3) && Xi(s) && Object.keys(s).forEach((h) => {
    O.isValidElement(s[h]) || By.isValidElementType(s[h]) ? c[h] = s[h] : Xi(s[h]) && Object.prototype.hasOwnProperty.call(a3, h) && Xi(a3[h]) ? c[h] = Mn(a3[h], s[h], l) : l.clone ? c[h] = Xi(s[h]) ? ky(s[h]) : s[h] : c[h] = s[h];
  }), c;
}
const c1 = (a3) => {
  const s = Object.keys(a3).map((l) => ({ key: l, val: a3[l] })) || [];
  return s.sort((l, c) => l.val - c.val), s.reduce((l, c) => ({ ...l, [c.key]: c.val }), {});
};
function f1(a3) {
  const { values: s = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: l = "px", step: c = 5, ...h } = a3, m = c1(s), g = Object.keys(m);
  function _(R) {
    return `@media (min-width:${typeof s[R] == "number" ? s[R] : R}${l})`;
  }
  function b(R) {
    return `@media (max-width:${(typeof s[R] == "number" ? s[R] : R) - c / 100}${l})`;
  }
  function S(R, D) {
    const N = g.indexOf(D);
    return `@media (min-width:${typeof s[R] == "number" ? s[R] : R}${l}) and (max-width:${(N !== -1 && typeof s[g[N]] == "number" ? s[g[N]] : D) - c / 100}${l})`;
  }
  function w(R) {
    return g.indexOf(R) + 1 < g.length ? S(R, g[g.indexOf(R) + 1]) : _(R);
  }
  function E(R) {
    const D = g.indexOf(R);
    return D === 0 ? _(g[1]) : D === g.length - 1 ? b(g[D]) : S(R, g[g.indexOf(R) + 1]).replace("@media", "@media not all and");
  }
  return { keys: g, values: m, up: _, down: b, between: S, only: w, not: E, unit: l, ...h };
}
function d1(a3, s) {
  if (!a3.containerQueries) return s;
  const l = Object.keys(s).filter((c) => c.startsWith("@container")).sort((c, h) => {
    var _a, _b2;
    const m = /min-width:\s*([0-9.]+)/;
    return +(((_a = c.match(m)) == null ? void 0 : _a[1]) || 0) - +(((_b2 = h.match(m)) == null ? void 0 : _b2[1]) || 0);
  });
  return l.length ? l.reduce((c, h) => {
    const m = s[h];
    return delete c[h], c[h] = m, c;
  }, { ...s }) : s;
}
function h1(a3, s) {
  return s === "@" || s.startsWith("@") && (a3.some((l) => s.startsWith(`@${l}`)) || !!s.match(/^@\d/));
}
function p1(a3, s) {
  const l = s.match(/^@([^/]+)?\/?(.+)?$/);
  if (!l) return null;
  const [, c, h] = l, m = Number.isNaN(+c) ? c || 0 : +c;
  return a3.containerQueries(h).up(m);
}
function m1(a3) {
  const s = (m, g) => m.replace("@media", g ? `@container ${g}` : "@container");
  function l(m, g) {
    m.up = (..._) => s(a3.breakpoints.up(..._), g), m.down = (..._) => s(a3.breakpoints.down(..._), g), m.between = (..._) => s(a3.breakpoints.between(..._), g), m.only = (..._) => s(a3.breakpoints.only(..._), g), m.not = (..._) => {
      const b = s(a3.breakpoints.not(..._), g);
      return b.includes("not all and") ? b.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : b;
    };
  }
  const c = {}, h = (m) => (l(c, m), c);
  return l(h), { ...a3, containerQueries: h };
}
const g1 = { borderRadius: 4 };
function Ml(a3, s) {
  return s ? Mn(a3, s, { clone: false }) : a3;
}
const Bc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, wv = { keys: ["xs", "sm", "md", "lg", "xl"], up: (a3) => `@media (min-width:${Bc[a3]}px)` }, v1 = { containerQueries: (a3) => ({ up: (s) => {
  let l = typeof s == "number" ? s : Bc[s] || s;
  return typeof l == "number" && (l = `${l}px`), a3 ? `@container ${a3} (min-width:${l})` : `@container (min-width:${l})`;
} }) };
function za(a3, s, l) {
  const c = a3.theme || {};
  if (Array.isArray(s)) {
    const m = c.breakpoints || wv;
    return s.reduce((g, _, b) => (g[m.up(m.keys[b])] = l(s[b]), g), {});
  }
  if (typeof s == "object") {
    const m = c.breakpoints || wv;
    return Object.keys(s).reduce((g, _) => {
      if (h1(m.keys, _)) {
        const b = p1(c.containerQueries ? c : v1, _);
        b && (g[b] = l(s[_], _));
      } else if (Object.keys(m.values || Bc).includes(_)) {
        const b = m.up(_);
        g[b] = l(s[_], _);
      } else {
        const b = _;
        g[b] = s[b];
      }
      return g;
    }, {});
  }
  return l(s);
}
function y1(a3 = {}) {
  var _a;
  return ((_a = a3.keys) == null ? void 0 : _a.reduce((l, c) => {
    const h = a3.up(c);
    return l[h] = {}, l;
  }, {})) || {};
}
function _1(a3, s) {
  return a3.reduce((l, c) => {
    const h = l[c];
    return (!h || Object.keys(h).length === 0) && delete l[c], l;
  }, s);
}
function qt(a3) {
  if (typeof a3 != "string") throw new Error(La(7));
  return a3.charAt(0).toUpperCase() + a3.slice(1);
}
function kc(a3, s, l = true) {
  if (!s || typeof s != "string") return null;
  if (a3 && a3.vars && l) {
    const c = `vars.${s}`.split(".").reduce((h, m) => h && h[m] ? h[m] : null, a3);
    if (c != null) return c;
  }
  return s.split(".").reduce((c, h) => c && c[h] != null ? c[h] : null, a3);
}
function Ec(a3, s, l, c = l) {
  let h;
  return typeof a3 == "function" ? h = a3(l) : Array.isArray(a3) ? h = a3[l] || c : h = kc(a3, l) || c, s && (h = s(h, c, a3)), h;
}
function Ge(a3) {
  const { prop: s, cssProperty: l = a3.prop, themeKey: c, transform: h } = a3, m = (g) => {
    if (g[s] == null) return null;
    const _ = g[s], b = g.theme, S = kc(b, c) || {};
    return za(g, _, (E) => {
      let R = Ec(S, h, E);
      return E === R && typeof E == "string" && (R = Ec(S, h, `${s}${E === "default" ? "" : qt(E)}`, E)), l === false ? R : { [l]: R };
    });
  };
  return m.propTypes = {}, m.filterProps = [s], m;
}
function b1(a3) {
  const s = {};
  return (l) => (s[l] === void 0 && (s[l] = a3(l)), s[l]);
}
const S1 = { m: "margin", p: "padding" }, x1 = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] }, Ev = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" }, T1 = b1((a3) => {
  if (a3.length > 2) if (Ev[a3]) a3 = Ev[a3];
  else return [a3];
  const [s, l] = a3.split(""), c = S1[s], h = x1[l] || "";
  return Array.isArray(h) ? h.map((m) => c + m) : [c + h];
}), Hh = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Uh = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Hh, ...Uh];
function Dl(a3, s, l, c) {
  const h = kc(a3, s, true) ?? l;
  return typeof h == "number" || typeof h == "string" ? (m) => typeof m == "string" ? m : typeof h == "string" ? h.startsWith("var(") && m === 0 ? 0 : h.startsWith("var(") && m === 1 ? h : `calc(${m} * ${h})` : h * m : Array.isArray(h) ? (m) => {
    if (typeof m == "string") return m;
    const g = Math.abs(m), _ = h[g];
    return m >= 0 ? _ : typeof _ == "number" ? -_ : typeof _ == "string" && _.startsWith("var(") ? `calc(-1 * ${_})` : `-${_}`;
  } : typeof h == "function" ? h : () => {
  };
}
function Zh(a3) {
  return Dl(a3, "spacing", 8);
}
function Hl(a3, s) {
  return typeof s == "string" || s == null ? s : a3(s);
}
function C1(a3, s) {
  return (l) => a3.reduce((c, h) => (c[h] = Hl(s, l), c), {});
}
function w1(a3, s, l, c) {
  if (!s.includes(l)) return null;
  const h = T1(l), m = C1(h, c), g = a3[l];
  return za(a3, g, m);
}
function Ny(a3, s) {
  const l = Zh(a3.theme);
  return Object.keys(a3).map((c) => w1(a3, s, c, l)).reduce(Ml, {});
}
function Ze(a3) {
  return Ny(a3, Hh);
}
Ze.propTypes = {};
Ze.filterProps = Hh;
function je(a3) {
  return Ny(a3, Uh);
}
je.propTypes = {};
je.filterProps = Uh;
function Dy(a3 = 8, s = Zh({ spacing: a3 })) {
  if (a3.mui) return a3;
  const l = (...c) => (c.length === 0 ? [1] : c).map((m) => {
    const g = s(m);
    return typeof g == "number" ? `${g}px` : g;
  }).join(" ");
  return l.mui = true, l;
}
function Nc(...a3) {
  const s = a3.reduce((c, h) => (h.filterProps.forEach((m) => {
    c[m] = h;
  }), c), {}), l = (c) => Object.keys(c).reduce((h, m) => s[m] ? Ml(h, s[m](c)) : h, {});
  return l.propTypes = {}, l.filterProps = a3.reduce((c, h) => c.concat(h.filterProps), []), l;
}
function yi(a3) {
  return typeof a3 != "number" ? a3 : `${a3}px solid`;
}
function _i(a3, s) {
  return Ge({ prop: a3, themeKey: "borders", transform: s });
}
const E1 = _i("border", yi), M1 = _i("borderTop", yi), O1 = _i("borderRight", yi), A1 = _i("borderBottom", yi), R1 = _i("borderLeft", yi), L1 = _i("borderColor"), z1 = _i("borderTopColor"), P1 = _i("borderRightColor"), B1 = _i("borderBottomColor"), k1 = _i("borderLeftColor"), N1 = _i("outline", yi), D1 = _i("outlineColor"), Dc = (a3) => {
  if (a3.borderRadius !== void 0 && a3.borderRadius !== null) {
    const s = Dl(a3.theme, "shape.borderRadius", 4), l = (c) => ({ borderRadius: Hl(s, c) });
    return za(a3, a3.borderRadius, l);
  }
  return null;
};
Dc.propTypes = {};
Dc.filterProps = ["borderRadius"];
Nc(E1, M1, O1, A1, R1, L1, z1, P1, B1, k1, Dc, N1, D1);
const Hc = (a3) => {
  if (a3.gap !== void 0 && a3.gap !== null) {
    const s = Dl(a3.theme, "spacing", 8), l = (c) => ({ gap: Hl(s, c) });
    return za(a3, a3.gap, l);
  }
  return null;
};
Hc.propTypes = {};
Hc.filterProps = ["gap"];
const Uc = (a3) => {
  if (a3.columnGap !== void 0 && a3.columnGap !== null) {
    const s = Dl(a3.theme, "spacing", 8), l = (c) => ({ columnGap: Hl(s, c) });
    return za(a3, a3.columnGap, l);
  }
  return null;
};
Uc.propTypes = {};
Uc.filterProps = ["columnGap"];
const Zc = (a3) => {
  if (a3.rowGap !== void 0 && a3.rowGap !== null) {
    const s = Dl(a3.theme, "spacing", 8), l = (c) => ({ rowGap: Hl(s, c) });
    return za(a3, a3.rowGap, l);
  }
  return null;
};
Zc.propTypes = {};
Zc.filterProps = ["rowGap"];
const H1 = Ge({ prop: "gridColumn" }), U1 = Ge({ prop: "gridRow" }), Z1 = Ge({ prop: "gridAutoFlow" }), j1 = Ge({ prop: "gridAutoColumns" }), I1 = Ge({ prop: "gridAutoRows" }), $1 = Ge({ prop: "gridTemplateColumns" }), q1 = Ge({ prop: "gridTemplateRows" }), G1 = Ge({ prop: "gridTemplateAreas" }), V1 = Ge({ prop: "gridArea" });
Nc(Hc, Uc, Zc, H1, U1, Z1, j1, I1, $1, q1, G1, V1);
function us(a3, s) {
  return s === "grey" ? s : a3;
}
const Y1 = Ge({ prop: "color", themeKey: "palette", transform: us }), X1 = Ge({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: us }), K1 = Ge({ prop: "backgroundColor", themeKey: "palette", transform: us });
Nc(Y1, X1, K1);
function ai(a3) {
  return a3 <= 1 && a3 !== 0 ? `${a3 * 100}%` : a3;
}
const Q1 = Ge({ prop: "width", transform: ai }), jh = (a3) => {
  if (a3.maxWidth !== void 0 && a3.maxWidth !== null) {
    const s = (l) => {
      var _a, _b2, _c2, _d, _e;
      const c = ((_c2 = (_b2 = (_a = a3.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[l]) || Bc[l];
      return c ? ((_e = (_d = a3.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e.unit) !== "px" ? { maxWidth: `${c}${a3.theme.breakpoints.unit}` } : { maxWidth: c } : { maxWidth: ai(l) };
    };
    return za(a3, a3.maxWidth, s);
  }
  return null;
};
jh.filterProps = ["maxWidth"];
const F1 = Ge({ prop: "minWidth", transform: ai }), W1 = Ge({ prop: "height", transform: ai }), J1 = Ge({ prop: "maxHeight", transform: ai }), tS = Ge({ prop: "minHeight", transform: ai });
Ge({ prop: "size", cssProperty: "width", transform: ai });
Ge({ prop: "size", cssProperty: "height", transform: ai });
const eS = Ge({ prop: "boxSizing" });
Nc(Q1, jh, F1, W1, J1, tS, eS);
const Ul = { border: { themeKey: "borders", transform: yi }, borderTop: { themeKey: "borders", transform: yi }, borderRight: { themeKey: "borders", transform: yi }, borderBottom: { themeKey: "borders", transform: yi }, borderLeft: { themeKey: "borders", transform: yi }, borderColor: { themeKey: "palette" }, borderTopColor: { themeKey: "palette" }, borderRightColor: { themeKey: "palette" }, borderBottomColor: { themeKey: "palette" }, borderLeftColor: { themeKey: "palette" }, outline: { themeKey: "borders", transform: yi }, outlineColor: { themeKey: "palette" }, borderRadius: { themeKey: "shape.borderRadius", style: Dc }, color: { themeKey: "palette", transform: us }, bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: us }, backgroundColor: { themeKey: "palette", transform: us }, p: { style: je }, pt: { style: je }, pr: { style: je }, pb: { style: je }, pl: { style: je }, px: { style: je }, py: { style: je }, padding: { style: je }, paddingTop: { style: je }, paddingRight: { style: je }, paddingBottom: { style: je }, paddingLeft: { style: je }, paddingX: { style: je }, paddingY: { style: je }, paddingInline: { style: je }, paddingInlineStart: { style: je }, paddingInlineEnd: { style: je }, paddingBlock: { style: je }, paddingBlockStart: { style: je }, paddingBlockEnd: { style: je }, m: { style: Ze }, mt: { style: Ze }, mr: { style: Ze }, mb: { style: Ze }, ml: { style: Ze }, mx: { style: Ze }, my: { style: Ze }, margin: { style: Ze }, marginTop: { style: Ze }, marginRight: { style: Ze }, marginBottom: { style: Ze }, marginLeft: { style: Ze }, marginX: { style: Ze }, marginY: { style: Ze }, marginInline: { style: Ze }, marginInlineStart: { style: Ze }, marginInlineEnd: { style: Ze }, marginBlock: { style: Ze }, marginBlockStart: { style: Ze }, marginBlockEnd: { style: Ze }, displayPrint: { cssProperty: false, transform: (a3) => ({ "@media print": { display: a3 } }) }, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: { style: Hc }, rowGap: { style: Zc }, columnGap: { style: Uc }, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: { themeKey: "zIndex" }, top: {}, right: {}, bottom: {}, left: {}, boxShadow: { themeKey: "shadows" }, width: { transform: ai }, maxWidth: { style: jh }, minWidth: { transform: ai }, height: { transform: ai }, maxHeight: { transform: ai }, minHeight: { transform: ai }, boxSizing: {}, font: { themeKey: "font" }, fontFamily: { themeKey: "typography" }, fontSize: { themeKey: "typography" }, fontStyle: { themeKey: "typography" }, fontWeight: { themeKey: "typography" }, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: { cssProperty: false, themeKey: "typography" } };
function nS(...a3) {
  const s = a3.reduce((c, h) => c.concat(Object.keys(h)), []), l = new Set(s);
  return a3.every((c) => l.size === Object.keys(c).length);
}
function iS(a3, s) {
  return typeof a3 == "function" ? a3(s) : a3;
}
function aS() {
  function a3(l, c, h, m) {
    const g = { [l]: c, theme: h }, _ = m[l];
    if (!_) return { [l]: c };
    const { cssProperty: b = l, themeKey: S, transform: w, style: E } = _;
    if (c == null) return null;
    if (S === "typography" && c === "inherit") return { [l]: c };
    const R = kc(h, S) || {};
    return E ? E(g) : za(g, c, (N) => {
      let A = Ec(R, w, N);
      return N === A && typeof N == "string" && (A = Ec(R, w, `${l}${N === "default" ? "" : qt(N)}`, N)), b === false ? A : { [b]: A };
    });
  }
  function s(l) {
    const { sx: c, theme: h = {} } = l || {};
    if (!c) return null;
    const m = h.unstable_sxConfig ?? Ul;
    function g(_) {
      let b = _;
      if (typeof _ == "function") b = _(h);
      else if (typeof _ != "object") return _;
      if (!b) return null;
      const S = y1(h.breakpoints), w = Object.keys(S);
      let E = S;
      return Object.keys(b).forEach((R) => {
        const D = iS(b[R], h);
        if (D != null) if (typeof D == "object") if (m[R]) E = Ml(E, a3(R, D, h, m));
        else {
          const N = za({ theme: h }, D, (A) => ({ [R]: A }));
          nS(N, D) ? E[R] = s({ sx: D, theme: h }) : E = Ml(E, N);
        }
        else E = Ml(E, a3(R, D, h, m));
      }), d1(h, _1(w, E));
    }
    return Array.isArray(c) ? c.map(g) : g(c);
  }
  return s;
}
const Oo = aS();
Oo.filterProps = ["sx"];
function oS(a3, s) {
  var _a;
  const l = this;
  if (l.vars) {
    if (!((_a = l.colorSchemes) == null ? void 0 : _a[a3]) || typeof l.getColorSchemeSelector != "function") return {};
    let c = l.getColorSchemeSelector(a3);
    return c === "&" ? s : ((c.includes("data-") || c.includes(".")) && (c = `*:where(${c.replace(/\s*&$/, "")}) &`), { [c]: s });
  }
  return l.palette.mode === a3 ? s : {};
}
function Ih(a3 = {}, ...s) {
  const { breakpoints: l = {}, palette: c = {}, spacing: h, shape: m = {}, ...g } = a3, _ = f1(l), b = Dy(h);
  let S = Mn({ breakpoints: _, direction: "ltr", components: {}, palette: { mode: "light", ...c }, spacing: b, shape: { ...g1, ...m } }, g);
  return S = m1(S), S.applyStyles = oS, S = s.reduce((w, E) => Mn(w, E), S), S.unstable_sxConfig = { ...Ul, ...g == null ? void 0 : g.unstable_sxConfig }, S.unstable_sx = function(E) {
    return Oo({ sx: E, theme: this });
  }, S;
}
function rS(a3) {
  return Object.keys(a3).length === 0;
}
function Hy(a3 = null) {
  const s = O.useContext(kl);
  return !s || rS(s) ? a3 : s;
}
const sS = Ih();
function $h(a3 = sS) {
  return Hy(a3);
}
function lS({ styles: a3, themeId: s, defaultTheme: l = {} }) {
  const c = $h(l), h = typeof a3 == "function" ? a3(s && c[s] || c) : a3;
  return Y.jsx(zy, { styles: h });
}
const uS = (a3) => {
  var _a;
  const s = { systemProps: {}, otherProps: {} }, l = ((_a = a3 == null ? void 0 : a3.theme) == null ? void 0 : _a.unstable_sxConfig) ?? Ul;
  return Object.keys(a3).forEach((c) => {
    l[c] ? s.systemProps[c] = a3[c] : s.otherProps[c] = a3[c];
  }), s;
};
function Uy(a3) {
  const { sx: s, ...l } = a3, { systemProps: c, otherProps: h } = uS(l);
  let m;
  return Array.isArray(s) ? m = [c, ...s] : typeof s == "function" ? m = (...g) => {
    const _ = s(...g);
    return Xi(_) ? { ...c, ..._ } : c;
  } : m = { ...c, ...s }, { ...h, sx: m };
}
const Mv = (a3) => a3, cS = () => {
  let a3 = Mv;
  return { configure(s) {
    a3 = s;
  }, generate(s) {
    return a3(s);
  }, reset() {
    a3 = Mv;
  } };
}, Zy = cS();
function jy(a3) {
  var s, l, c = "";
  if (typeof a3 == "string" || typeof a3 == "number") c += a3;
  else if (typeof a3 == "object") if (Array.isArray(a3)) {
    var h = a3.length;
    for (s = 0; s < h; s++) a3[s] && (l = jy(a3[s])) && (c && (c += " "), c += l);
  } else for (l in a3) a3[l] && (c && (c += " "), c += l);
  return c;
}
function Ft() {
  for (var a3, s, l = 0, c = "", h = arguments.length; l < h; l++) (a3 = arguments[l]) && (s = jy(a3)) && (c && (c += " "), c += s);
  return c;
}
function fS(a3 = {}) {
  const { themeId: s, defaultTheme: l, defaultClassName: c = "MuiBox-root", generateClassName: h } = a3, m = Py("div", { shouldForwardProp: (_) => _ !== "theme" && _ !== "sx" && _ !== "as" })(Oo);
  return O.forwardRef(function(b, S) {
    const w = $h(l), { className: E, component: R = "div", ...D } = Uy(b);
    return Y.jsx(m, { as: R, ref: S, className: Ft(E, h ? h(c) : c), theme: s && w[s] || w, ...D });
  });
}
const dS = { active: "active", checked: "checked", completed: "completed", disabled: "disabled", error: "error", expanded: "expanded", focused: "focused", focusVisible: "focusVisible", open: "open", readOnly: "readOnly", required: "required", selected: "selected" };
function Qe(a3, s, l = "Mui") {
  const c = dS[s];
  return c ? `${l}-${c}` : `${Zy.generate(a3)}-${s}`;
}
function Be(a3, s, l = "Mui") {
  const c = {};
  return s.forEach((h) => {
    c[h] = Qe(a3, h, l);
  }), c;
}
function Iy(a3) {
  const { variants: s, ...l } = a3, c = { variants: s, style: xv(l), isProcessed: true };
  return c.style === l || s && s.forEach((h) => {
    typeof h.style != "function" && (h.style = xv(h.style));
  }), c;
}
const hS = Ih();
function eh(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
function pS(a3) {
  return a3 ? (s, l) => l[a3] : null;
}
function mS(a3, s, l) {
  a3.theme = yS(a3.theme) ? l : a3.theme[s] || a3.theme;
}
function Tc(a3, s) {
  const l = typeof s == "function" ? s(a3) : s;
  if (Array.isArray(l)) return l.flatMap((c) => Tc(a3, c));
  if (Array.isArray(l == null ? void 0 : l.variants)) {
    let c;
    if (l.isProcessed) c = l.style;
    else {
      const { variants: h, ...m } = l;
      c = m;
    }
    return $y(a3, l.variants, [c]);
  }
  return (l == null ? void 0 : l.isProcessed) ? l.style : l;
}
function $y(a3, s, l = []) {
  var _a;
  let c;
  t: for (let h = 0; h < s.length; h += 1) {
    const m = s[h];
    if (typeof m.props == "function") {
      if (c ?? (c = { ...a3, ...a3.ownerState, ownerState: a3.ownerState }), !m.props(c)) continue;
    } else for (const g in m.props) if (a3[g] !== m.props[g] && ((_a = a3.ownerState) == null ? void 0 : _a[g]) !== m.props[g]) continue t;
    typeof m.style == "function" ? (c ?? (c = { ...a3, ...a3.ownerState, ownerState: a3.ownerState }), l.push(m.style(c))) : l.push(m.style);
  }
  return l;
}
function gS(a3 = {}) {
  const { themeId: s, defaultTheme: l = hS, rootShouldForwardProp: c = eh, slotShouldForwardProp: h = eh } = a3;
  function m(_) {
    mS(_, s, l);
  }
  return (_, b = {}) => {
    s1(_, (B) => B.filter((J) => J !== Oo));
    const { name: S, slot: w, skipVariantsResolver: E, skipSx: R, overridesResolver: D = pS(bS(w)), ...N } = b, A = E !== void 0 ? E : w && w !== "Root" && w !== "root" || false, $ = R || false;
    let q = eh;
    w === "Root" || w === "root" ? q = c : w ? q = h : _S(_) && (q = void 0);
    const tt = Py(_, { shouldForwardProp: q, label: vS(), ...N }), k = (B) => {
      if (typeof B == "function" && B.__emotion_real !== B) return function(ot) {
        return Tc(ot, B);
      };
      if (Xi(B)) {
        const J = Iy(B);
        return J.variants ? function(et) {
          return Tc(et, J);
        } : J.style;
      }
      return B;
    }, U = (...B) => {
      const J = [], ot = B.map(k), et = [];
      if (J.push(m), S && D && et.push(function(rt) {
        var _a, _b2;
        const yt = (_b2 = (_a = rt.theme.components) == null ? void 0 : _a[S]) == null ? void 0 : _b2.styleOverrides;
        if (!yt) return null;
        const vt = {};
        for (const H in yt) vt[H] = Tc(rt, yt[H]);
        return D(rt, vt);
      }), S && !A && et.push(function(rt) {
        var _a, _b2, _c2;
        const yt = (_c2 = (_b2 = (_a = rt.theme) == null ? void 0 : _a.components) == null ? void 0 : _b2[S]) == null ? void 0 : _c2.variants;
        return yt ? $y(rt, yt) : null;
      }), $ || et.push(Oo), Array.isArray(ot[0])) {
        const Q = ot.shift(), rt = new Array(J.length).fill(""), bt = new Array(et.length).fill("");
        let yt;
        yt = [...rt, ...Q, ...bt], yt.raw = [...rt, ...Q.raw, ...bt], J.unshift(yt);
      }
      const dt = [...J, ...ot, ...et], C = tt(...dt);
      return _.muiName && (C.muiName = _.muiName), C;
    };
    return tt.withConfig && (U.withConfig = tt.withConfig), U;
  };
}
function vS(a3, s) {
  return void 0;
}
function yS(a3) {
  for (const s in a3) return false;
  return true;
}
function _S(a3) {
  return typeof a3 == "string" && a3.charCodeAt(0) > 96;
}
function bS(a3) {
  return a3 && a3.charAt(0).toLowerCase() + a3.slice(1);
}
function Mc(a3, s) {
  const l = { ...s };
  for (const c in a3) if (Object.prototype.hasOwnProperty.call(a3, c)) {
    const h = c;
    if (h === "components" || h === "slots") l[h] = { ...a3[h], ...l[h] };
    else if (h === "componentsProps" || h === "slotProps") {
      const m = a3[h], g = s[h];
      if (!g) l[h] = m || {};
      else if (!m) l[h] = g;
      else {
        l[h] = { ...g };
        for (const _ in m) if (Object.prototype.hasOwnProperty.call(m, _)) {
          const b = _;
          l[h][b] = Mc(m[b], g[b]);
        }
      }
    } else l[h] === void 0 && (l[h] = a3[h]);
  }
  return l;
}
const Pa = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function SS(a3, s = Number.MIN_SAFE_INTEGER, l = Number.MAX_SAFE_INTEGER) {
  return Math.max(s, Math.min(a3, l));
}
function qh(a3, s = 0, l = 1) {
  return SS(a3, s, l);
}
function xS(a3) {
  a3 = a3.slice(1);
  const s = new RegExp(`.{1,${a3.length >= 6 ? 2 : 1}}`, "g");
  let l = a3.match(s);
  return l && l[0].length === 1 && (l = l.map((c) => c + c)), l ? `rgb${l.length === 4 ? "a" : ""}(${l.map((c, h) => h < 3 ? parseInt(c, 16) : Math.round(parseInt(c, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ao(a3) {
  if (a3.type) return a3;
  if (a3.charAt(0) === "#") return Ao(xS(a3));
  const s = a3.indexOf("("), l = a3.substring(0, s);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(l)) throw new Error(La(9, a3));
  let c = a3.substring(s + 1, a3.length - 1), h;
  if (l === "color") {
    if (c = c.split(" "), h = c.shift(), c.length === 4 && c[3].charAt(0) === "/" && (c[3] = c[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(h)) throw new Error(La(10, h));
  } else c = c.split(",");
  return c = c.map((m) => parseFloat(m)), { type: l, values: c, colorSpace: h };
}
const TS = (a3) => {
  const s = Ao(a3);
  return s.values.slice(0, 3).map((l, c) => s.type.includes("hsl") && c !== 0 ? `${l}%` : l).join(" ");
}, Tl = (a3, s) => {
  try {
    return TS(a3);
  } catch {
    return a3;
  }
};
function jc(a3) {
  const { type: s, colorSpace: l } = a3;
  let { values: c } = a3;
  return s.includes("rgb") ? c = c.map((h, m) => m < 3 ? parseInt(h, 10) : h) : s.includes("hsl") && (c[1] = `${c[1]}%`, c[2] = `${c[2]}%`), s.includes("color") ? c = `${l} ${c.join(" ")}` : c = `${c.join(", ")}`, `${s}(${c})`;
}
function qy(a3) {
  a3 = Ao(a3);
  const { values: s } = a3, l = s[0], c = s[1] / 100, h = s[2] / 100, m = c * Math.min(h, 1 - h), g = (S, w = (S + l / 30) % 12) => h - m * Math.max(Math.min(w - 3, 9 - w, 1), -1);
  let _ = "rgb";
  const b = [Math.round(g(0) * 255), Math.round(g(8) * 255), Math.round(g(4) * 255)];
  return a3.type === "hsla" && (_ += "a", b.push(s[3])), jc({ type: _, values: b });
}
function hh(a3) {
  a3 = Ao(a3);
  let s = a3.type === "hsl" || a3.type === "hsla" ? Ao(qy(a3)).values : a3.values;
  return s = s.map((l) => (a3.type !== "color" && (l /= 255), l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4)), Number((0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]).toFixed(3));
}
function CS(a3, s) {
  const l = hh(a3), c = hh(s);
  return (Math.max(l, c) + 0.05) / (Math.min(l, c) + 0.05);
}
function In(a3, s) {
  return a3 = Ao(a3), s = qh(s), (a3.type === "rgb" || a3.type === "hsl") && (a3.type += "a"), a3.type === "color" ? a3.values[3] = `/${s}` : a3.values[3] = s, jc(a3);
}
function hc(a3, s, l) {
  try {
    return In(a3, s);
  } catch {
    return a3;
  }
}
function Gh(a3, s) {
  if (a3 = Ao(a3), s = qh(s), a3.type.includes("hsl")) a3.values[2] *= 1 - s;
  else if (a3.type.includes("rgb") || a3.type.includes("color")) for (let l = 0; l < 3; l += 1) a3.values[l] *= 1 - s;
  return jc(a3);
}
function Se(a3, s, l) {
  try {
    return Gh(a3, s);
  } catch {
    return a3;
  }
}
function Vh(a3, s) {
  if (a3 = Ao(a3), s = qh(s), a3.type.includes("hsl")) a3.values[2] += (100 - a3.values[2]) * s;
  else if (a3.type.includes("rgb")) for (let l = 0; l < 3; l += 1) a3.values[l] += (255 - a3.values[l]) * s;
  else if (a3.type.includes("color")) for (let l = 0; l < 3; l += 1) a3.values[l] += (1 - a3.values[l]) * s;
  return jc(a3);
}
function xe(a3, s, l) {
  try {
    return Vh(a3, s);
  } catch {
    return a3;
  }
}
function wS(a3, s = 0.15) {
  return hh(a3) > 0.5 ? Gh(a3, s) : Vh(a3, s);
}
function pc(a3, s, l) {
  try {
    return wS(a3, s);
  } catch {
    return a3;
  }
}
const Gy = O.createContext(null);
function Yh() {
  return O.useContext(Gy);
}
const ES = typeof Symbol == "function" && Symbol.for, MS = ES ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function OS(a3, s) {
  return typeof s == "function" ? s(a3) : { ...a3, ...s };
}
function AS(a3) {
  const { children: s, theme: l } = a3, c = Yh(), h = O.useMemo(() => {
    const m = c === null ? { ...l } : OS(c, l);
    return m != null && (m[MS] = c !== null), m;
  }, [l, c]);
  return Y.jsx(Gy.Provider, { value: h, children: s });
}
const Vy = O.createContext();
function RS({ value: a3, ...s }) {
  return Y.jsx(Vy.Provider, { value: a3 ?? true, ...s });
}
const LS = () => O.useContext(Vy) ?? false, Yy = O.createContext(void 0);
function zS({ value: a3, children: s }) {
  return Y.jsx(Yy.Provider, { value: a3, children: s });
}
function PS(a3) {
  const { theme: s, name: l, props: c } = a3;
  if (!s || !s.components || !s.components[l]) return c;
  const h = s.components[l];
  return h.defaultProps ? Mc(h.defaultProps, c) : !h.styleOverrides && !h.variants ? Mc(h, c) : c;
}
function BS({ props: a3, name: s }) {
  const l = O.useContext(Yy);
  return PS({ props: a3, name: s, theme: { components: l } });
}
const Ov = {};
function Av(a3, s, l, c = false) {
  return O.useMemo(() => {
    const h = a3 && s[a3] || s;
    if (typeof l == "function") {
      const m = l(h), g = a3 ? { ...s, [a3]: m } : m;
      return c ? () => g : g;
    }
    return a3 ? { ...s, [a3]: l } : { ...s, ...l };
  }, [a3, s, l, c]);
}
function Xy(a3) {
  const { children: s, theme: l, themeId: c } = a3, h = Hy(Ov), m = Yh() || Ov, g = Av(c, h, l), _ = Av(c, m, l, true), b = (c ? g[c] : g).direction === "rtl";
  return Y.jsx(AS, { theme: _, children: Y.jsx(kl.Provider, { value: g, children: Y.jsx(RS, { value: b, children: Y.jsx(zS, { value: c ? g[c].components : g.components, children: s }) }) }) });
}
const Rv = { theme: void 0 };
function kS(a3) {
  let s, l;
  return function(h) {
    let m = s;
    return (m === void 0 || h.theme !== l) && (Rv.theme = h.theme, m = Iy(a3(Rv)), s = m, l = h.theme), m;
  };
}
const Xh = "mode", Kh = "color-scheme", NS = "data-color-scheme";
function DS(a3) {
  const { defaultMode: s = "system", defaultLightColorScheme: l = "light", defaultDarkColorScheme: c = "dark", modeStorageKey: h = Xh, colorSchemeStorageKey: m = Kh, attribute: g = NS, colorSchemeNode: _ = "document.documentElement", nonce: b } = a3 || {};
  let S = "", w = g;
  if (g === "class" && (w = ".%s"), g === "data" && (w = "[data-%s]"), w.startsWith(".")) {
    const R = w.substring(1);
    S += `${_}.classList.remove('${R}'.replace('%s', light), '${R}'.replace('%s', dark));
      ${_}.classList.add('${R}'.replace('%s', colorScheme));`;
  }
  const E = w.match(/\[([^\]]+)\]/);
  if (E) {
    const [R, D] = E[1].split("=");
    D || (S += `${_}.removeAttribute('${R}'.replace('%s', light));
      ${_}.removeAttribute('${R}'.replace('%s', dark));`), S += `
      ${_}.setAttribute('${R}'.replace('%s', colorScheme), ${D ? `${D}.replace('%s', colorScheme)` : '""'});`;
  } else S += `${_}.setAttribute('${w}', colorScheme);`;
  return Y.jsx("script", { suppressHydrationWarning: true, nonce: typeof window > "u" ? b : "", dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${h}') || '${s}';
  const dark = localStorage.getItem('${m}-dark') || '${c}';
  const light = localStorage.getItem('${m}-light') || '${l}';
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
    ${S}
  }
} catch(e){}})();` } }, "mui-color-scheme-init");
}
function HS() {
}
const US = ({ key: a3, storageWindow: s }) => (!s && typeof window < "u" && (s = window), { get(l) {
  if (typeof window > "u") return;
  if (!s) return l;
  let c;
  try {
    c = s.localStorage.getItem(a3);
  } catch {
  }
  return c || l;
}, set: (l) => {
  if (s) try {
    s.localStorage.setItem(a3, l);
  } catch {
  }
}, subscribe: (l) => {
  if (!s) return HS;
  const c = (h) => {
    const m = h.newValue;
    h.key === a3 && l(m);
  };
  return s.addEventListener("storage", c), () => {
    s.removeEventListener("storage", c);
  };
} });
function nh() {
}
function Lv(a3) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && a3 === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ky(a3, s) {
  if (a3.mode === "light" || a3.mode === "system" && a3.systemMode === "light") return s("light");
  if (a3.mode === "dark" || a3.mode === "system" && a3.systemMode === "dark") return s("dark");
}
function ZS(a3) {
  return Ky(a3, (s) => {
    if (s === "light") return a3.lightColorScheme;
    if (s === "dark") return a3.darkColorScheme;
  });
}
function jS(a3) {
  const { defaultMode: s = "light", defaultLightColorScheme: l, defaultDarkColorScheme: c, supportedColorSchemes: h = [], modeStorageKey: m = Xh, colorSchemeStorageKey: g = Kh, storageWindow: _ = typeof window > "u" ? void 0 : window, storageManager: b = US, noSsr: S = false } = a3, w = h.join(","), E = h.length > 1, R = O.useMemo(() => b == null ? void 0 : b({ key: m, storageWindow: _ }), [b, m, _]), D = O.useMemo(() => b == null ? void 0 : b({ key: `${g}-light`, storageWindow: _ }), [b, g, _]), N = O.useMemo(() => b == null ? void 0 : b({ key: `${g}-dark`, storageWindow: _ }), [b, g, _]), [A, $] = O.useState(() => {
    const et = (R == null ? void 0 : R.get(s)) || s, dt = (D == null ? void 0 : D.get(l)) || l, C = (N == null ? void 0 : N.get(c)) || c;
    return { mode: et, systemMode: Lv(et), lightColorScheme: dt, darkColorScheme: C };
  }), [q, tt] = O.useState(S || !E);
  O.useEffect(() => {
    tt(true);
  }, []);
  const k = ZS(A), U = O.useCallback((et) => {
    $((dt) => {
      if (et === dt.mode) return dt;
      const C = et ?? s;
      return R == null ? void 0 : R.set(C), { ...dt, mode: C, systemMode: Lv(C) };
    });
  }, [R, s]), B = O.useCallback((et) => {
    et ? typeof et == "string" ? et && !w.includes(et) ? console.error(`\`${et}\` does not exist in \`theme.colorSchemes\`.`) : $((dt) => {
      const C = { ...dt };
      return Ky(dt, (Q) => {
        Q === "light" && (D == null ? void 0 : D.set(et), C.lightColorScheme = et), Q === "dark" && (N == null ? void 0 : N.set(et), C.darkColorScheme = et);
      }), C;
    }) : $((dt) => {
      const C = { ...dt }, Q = et.light === null ? l : et.light, rt = et.dark === null ? c : et.dark;
      return Q && (w.includes(Q) ? (C.lightColorScheme = Q, D == null ? void 0 : D.set(Q)) : console.error(`\`${Q}\` does not exist in \`theme.colorSchemes\`.`)), rt && (w.includes(rt) ? (C.darkColorScheme = rt, N == null ? void 0 : N.set(rt)) : console.error(`\`${rt}\` does not exist in \`theme.colorSchemes\`.`)), C;
    }) : $((dt) => (D == null ? void 0 : D.set(l), N == null ? void 0 : N.set(c), { ...dt, lightColorScheme: l, darkColorScheme: c }));
  }, [w, D, N, l, c]), J = O.useCallback((et) => {
    A.mode === "system" && $((dt) => {
      const C = (et == null ? void 0 : et.matches) ? "dark" : "light";
      return dt.systemMode === C ? dt : { ...dt, systemMode: C };
    });
  }, [A.mode]), ot = O.useRef(J);
  return ot.current = J, O.useEffect(() => {
    if (typeof window.matchMedia != "function" || !E) return;
    const et = (...C) => ot.current(...C), dt = window.matchMedia("(prefers-color-scheme: dark)");
    return dt.addListener(et), et(dt), () => {
      dt.removeListener(et);
    };
  }, [E]), O.useEffect(() => {
    if (E) {
      const et = (R == null ? void 0 : R.subscribe((Q) => {
        (!Q || ["light", "dark", "system"].includes(Q)) && U(Q || s);
      })) || nh, dt = (D == null ? void 0 : D.subscribe((Q) => {
        (!Q || w.match(Q)) && B({ light: Q });
      })) || nh, C = (N == null ? void 0 : N.subscribe((Q) => {
        (!Q || w.match(Q)) && B({ dark: Q });
      })) || nh;
      return () => {
        et(), dt(), C();
      };
    }
  }, [B, U, w, s, _, E, R, D, N]), { ...A, mode: q ? A.mode : void 0, systemMode: q ? A.systemMode : void 0, colorScheme: q ? k : void 0, setMode: U, setColorScheme: B };
}
const IS = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function $S(a3) {
  const { themeId: s, theme: l = {}, modeStorageKey: c = Xh, colorSchemeStorageKey: h = Kh, disableTransitionOnChange: m = false, defaultColorScheme: g, resolveTheme: _ } = a3, b = { allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0 }, S = O.createContext(void 0), w = () => O.useContext(S) || b, E = {}, R = {};
  function D(q) {
    var _a, _b2, _c2, _d;
    const { children: tt, theme: k, modeStorageKey: U = c, colorSchemeStorageKey: B = h, disableTransitionOnChange: J = m, storageManager: ot, storageWindow: et = typeof window > "u" ? void 0 : window, documentNode: dt = typeof document > "u" ? void 0 : document, colorSchemeNode: C = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: Q = false, disableStyleSheetGeneration: rt = false, defaultMode: bt = "system", forceThemeRerender: yt = false, noSsr: vt } = q, H = O.useRef(false), st = Yh(), it = O.useContext(S), ht = !!it && !Q, M = O.useMemo(() => k || (typeof l == "function" ? l() : l), [k]), K = M[s], ut = K || M, { colorSchemes: ct = E, components: mt = R, cssVarPrefix: _t } = ut, gt = Object.keys(ct).filter((pe) => !!ct[pe]).join(","), Nt = O.useMemo(() => gt.split(","), [gt]), Lt = typeof g == "string" ? g : g.light, le = typeof g == "string" ? g : g.dark, Dt = ct[Lt] && ct[le] ? bt : ((_b2 = (_a = ct[ut.defaultColorScheme]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || ((_c2 = ut.palette) == null ? void 0 : _c2.mode), { mode: Gt, setMode: It, systemMode: Oe, lightColorScheme: Zt, darkColorScheme: ue, colorScheme: nn, setColorScheme: ie } = jS({ supportedColorSchemes: Nt, defaultLightColorScheme: Lt, defaultDarkColorScheme: le, modeStorageKey: U, colorSchemeStorageKey: B, defaultMode: Dt, storageManager: ot, storageWindow: et, noSsr: vt });
    let _e = Gt, Me = nn;
    ht && (_e = it.mode, Me = it.colorScheme);
    let Ae = Me || ut.defaultColorScheme;
    ut.vars && !yt && (Ae = ut.defaultColorScheme);
    const ce = O.useMemo(() => {
      var _a2;
      const pe = ((_a2 = ut.generateThemeVars) == null ? void 0 : _a2.call(ut)) || ut.vars, Ht = { ...ut, components: mt, colorSchemes: ct, cssVarPrefix: _t, vars: pe };
      if (typeof Ht.generateSpacing == "function" && (Ht.spacing = Ht.generateSpacing()), Ae) {
        const ae = ct[Ae];
        ae && typeof ae == "object" && Object.keys(ae).forEach((te) => {
          ae[te] && typeof ae[te] == "object" ? Ht[te] = { ...Ht[te], ...ae[te] } : Ht[te] = ae[te];
        });
      }
      return _ ? _(Ht) : Ht;
    }, [ut, Ae, mt, ct, _t]), wt = ut.colorSchemeSelector;
    Pa(() => {
      if (Me && C && wt && wt !== "media") {
        const pe = wt;
        let Ht = wt;
        if (pe === "class" && (Ht = ".%s"), pe === "data" && (Ht = "[data-%s]"), (pe == null ? void 0 : pe.startsWith("data-")) && !pe.includes("%s") && (Ht = `[${pe}="%s"]`), Ht.startsWith(".")) C.classList.remove(...Nt.map((ae) => Ht.substring(1).replace("%s", ae))), C.classList.add(Ht.substring(1).replace("%s", Me));
        else {
          const ae = Ht.replace("%s", Me).match(/\[([^\]]+)\]/);
          if (ae) {
            const [te, yn] = ae[1].split("=");
            yn || Nt.forEach((oe) => {
              C.removeAttribute(te.replace(Me, oe));
            }), C.setAttribute(te, yn ? yn.replace(/"|'/g, "") : "");
          } else C.setAttribute(Ht, Me);
        }
      }
    }, [Me, wt, C, Nt]), O.useEffect(() => {
      let pe;
      if (J && H.current && dt) {
        const Ht = dt.createElement("style");
        Ht.appendChild(dt.createTextNode(IS)), dt.head.appendChild(Ht), window.getComputedStyle(dt.body), pe = setTimeout(() => {
          dt.head.removeChild(Ht);
        }, 1);
      }
      return () => {
        clearTimeout(pe);
      };
    }, [Me, J, dt]), O.useEffect(() => (H.current = true, () => {
      H.current = false;
    }), []);
    const kn = O.useMemo(() => ({ allColorSchemes: Nt, colorScheme: Me, darkColorScheme: ue, lightColorScheme: Zt, mode: _e, setColorScheme: ie, setMode: It, systemMode: Oe }), [Nt, Me, ue, Zt, _e, ie, It, Oe, ce.colorSchemeSelector]);
    let Ie = true;
    (rt || ut.cssVariables === false || ht && (st == null ? void 0 : st.cssVarPrefix) === _t) && (Ie = false);
    const qn = Y.jsxs(O.Fragment, { children: [Y.jsx(Xy, { themeId: K ? s : void 0, theme: ce, children: tt }), Ie && Y.jsx(zy, { styles: ((_d = ce.generateStyleSheets) == null ? void 0 : _d.call(ce)) || [] })] });
    return ht ? qn : Y.jsx(S.Provider, { value: kn, children: qn });
  }
  const N = typeof g == "string" ? g : g.light, A = typeof g == "string" ? g : g.dark;
  return { CssVarsProvider: D, useColorScheme: w, getInitColorSchemeScript: (q) => DS({ colorSchemeStorageKey: h, defaultLightColorScheme: N, defaultDarkColorScheme: A, modeStorageKey: c, ...q }) };
}
function qS(a3 = "") {
  function s(...c) {
    if (!c.length) return "";
    const h = c[0];
    return typeof h == "string" && !h.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${a3 ? `${a3}-` : ""}${h}${s(...c.slice(1))})` : `, ${h}`;
  }
  return (c, ...h) => `var(--${a3 ? `${a3}-` : ""}${c}${s(...h)})`;
}
const zv = (a3, s, l, c = []) => {
  let h = a3;
  s.forEach((m, g) => {
    g === s.length - 1 ? Array.isArray(h) ? h[Number(m)] = l : h && typeof h == "object" && (h[m] = l) : h && typeof h == "object" && (h[m] || (h[m] = c.includes(m) ? [] : {}), h = h[m]);
  });
}, GS = (a3, s, l) => {
  function c(h, m = [], g = []) {
    Object.entries(h).forEach(([_, b]) => {
      (!l || l && !l([...m, _])) && b != null && (typeof b == "object" && Object.keys(b).length > 0 ? c(b, [...m, _], Array.isArray(b) ? [...g, _] : g) : s([...m, _], b, g));
    });
  }
  c(a3);
}, VS = (a3, s) => typeof s == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((c) => a3.includes(c)) || a3[a3.length - 1].toLowerCase().includes("opacity") ? s : `${s}px` : s;
function ih(a3, s) {
  const { prefix: l, shouldSkipGeneratingVar: c } = s || {}, h = {}, m = {}, g = {};
  return GS(a3, (_, b, S) => {
    if ((typeof b == "string" || typeof b == "number") && (!c || !c(_, b))) {
      const w = `--${l ? `${l}-` : ""}${_.join("-")}`, E = VS(_, b);
      Object.assign(h, { [w]: E }), zv(m, _, `var(${w})`, S), zv(g, _, `var(${w}, ${E})`, S);
    }
  }, (_) => _[0] === "vars"), { css: h, vars: m, varsWithDefaults: g };
}
function YS(a3, s = {}) {
  const { getSelector: l = $, disableCssColorScheme: c, colorSchemeSelector: h } = s, { colorSchemes: m = {}, components: g, defaultColorScheme: _ = "light", ...b } = a3, { vars: S, css: w, varsWithDefaults: E } = ih(b, s);
  let R = E;
  const D = {}, { [_]: N, ...A } = m;
  if (Object.entries(A || {}).forEach(([k, U]) => {
    const { vars: B, css: J, varsWithDefaults: ot } = ih(U, s);
    R = Mn(R, ot), D[k] = { css: J, vars: B };
  }), N) {
    const { css: k, vars: U, varsWithDefaults: B } = ih(N, s);
    R = Mn(R, B), D[_] = { css: k, vars: U };
  }
  function $(k, U) {
    var _a, _b2;
    let B = h;
    if (h === "class" && (B = ".%s"), h === "data" && (B = "[data-%s]"), (h == null ? void 0 : h.startsWith("data-")) && !h.includes("%s") && (B = `[${h}="%s"]`), k) {
      if (B === "media") return a3.defaultColorScheme === k ? ":root" : { [`@media (prefers-color-scheme: ${((_b2 = (_a = m[k]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode) || k})`]: { ":root": U } };
      if (B) return a3.defaultColorScheme === k ? `:root, ${B.replace("%s", String(k))}` : B.replace("%s", String(k));
    }
    return ":root";
  }
  return { vars: R, generateThemeVars: () => {
    let k = { ...S };
    return Object.entries(D).forEach(([, { vars: U }]) => {
      k = Mn(k, U);
    }), k;
  }, generateStyleSheets: () => {
    var _a, _b2;
    const k = [], U = a3.defaultColorScheme || "light";
    function B(et, dt) {
      Object.keys(dt).length && k.push(typeof et == "string" ? { [et]: { ...dt } } : et);
    }
    B(l(void 0, { ...w }), w);
    const { [U]: J, ...ot } = D;
    if (J) {
      const { css: et } = J, dt = (_b2 = (_a = m[U]) == null ? void 0 : _a.palette) == null ? void 0 : _b2.mode, C = !c && dt ? { colorScheme: dt, ...et } : { ...et };
      B(l(U, { ...C }), C);
    }
    return Object.entries(ot).forEach(([et, { css: dt }]) => {
      var _a2, _b3;
      const C = (_b3 = (_a2 = m[et]) == null ? void 0 : _a2.palette) == null ? void 0 : _b3.mode, Q = !c && C ? { colorScheme: C, ...dt } : { ...dt };
      B(l(et, { ...Q }), Q);
    }), k;
  } };
}
function XS(a3) {
  return function(l) {
    return a3 === "media" ? `@media (prefers-color-scheme: ${l})` : a3 ? a3.startsWith("data-") && !a3.includes("%s") ? `[${a3}="${l}"] &` : a3 === "class" ? `.${l} &` : a3 === "data" ? `[data-${l}] &` : `${a3.replace("%s", l)} &` : "&";
  };
}
function Fe(a3, s, l = void 0) {
  const c = {};
  for (const h in a3) {
    const m = a3[h];
    let g = "", _ = true;
    for (let b = 0; b < m.length; b += 1) {
      const S = m[b];
      S && (g += (_ === true ? "" : " ") + s(S), _ = false, l && l[S] && (g += " " + l[S]));
    }
    c[h] = g;
  }
  return c;
}
const zl = { black: "#000", white: "#fff" }, KS = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121", A100: "#f5f5f5", A200: "#eeeeee", A400: "#bdbdbd", A700: "#616161" }, es = { 50: "#f3e5f5", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 700: "#7b1fa2" }, ns = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" }, yl = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" }, is = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" }, as = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" }, os = { 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20" };
function Qy() {
  return { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" }, divider: "rgba(0, 0, 0, 0.12)", background: { paper: zl.white, default: zl.white }, action: { active: "rgba(0, 0, 0, 0.54)", hover: "rgba(0, 0, 0, 0.04)", hoverOpacity: 0.04, selected: "rgba(0, 0, 0, 0.08)", selectedOpacity: 0.08, disabled: "rgba(0, 0, 0, 0.26)", disabledBackground: "rgba(0, 0, 0, 0.12)", disabledOpacity: 0.38, focus: "rgba(0, 0, 0, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.12 } };
}
const QS = Qy();
function Fy() {
  return { text: { primary: zl.white, secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", icon: "rgba(255, 255, 255, 0.5)" }, divider: "rgba(255, 255, 255, 0.12)", background: { paper: "#121212", default: "#121212" }, action: { active: zl.white, hover: "rgba(255, 255, 255, 0.08)", hoverOpacity: 0.08, selected: "rgba(255, 255, 255, 0.16)", selectedOpacity: 0.16, disabled: "rgba(255, 255, 255, 0.3)", disabledBackground: "rgba(255, 255, 255, 0.12)", disabledOpacity: 0.38, focus: "rgba(255, 255, 255, 0.12)", focusOpacity: 0.12, activatedOpacity: 0.24 } };
}
const Pv = Fy();
function Bv(a3, s, l, c) {
  const h = c.light || c, m = c.dark || c * 1.5;
  a3[s] || (a3.hasOwnProperty(l) ? a3[s] = a3[l] : s === "light" ? a3.light = Vh(a3.main, h) : s === "dark" && (a3.dark = Gh(a3.main, m)));
}
function FS(a3 = "light") {
  return a3 === "dark" ? { main: is[200], light: is[50], dark: is[400] } : { main: is[700], light: is[400], dark: is[800] };
}
function WS(a3 = "light") {
  return a3 === "dark" ? { main: es[200], light: es[50], dark: es[400] } : { main: es[500], light: es[300], dark: es[700] };
}
function JS(a3 = "light") {
  return a3 === "dark" ? { main: ns[500], light: ns[300], dark: ns[700] } : { main: ns[700], light: ns[400], dark: ns[800] };
}
function tx(a3 = "light") {
  return a3 === "dark" ? { main: as[400], light: as[300], dark: as[700] } : { main: as[700], light: as[500], dark: as[900] };
}
function ex(a3 = "light") {
  return a3 === "dark" ? { main: os[400], light: os[300], dark: os[700] } : { main: os[800], light: os[500], dark: os[900] };
}
function nx(a3 = "light") {
  return a3 === "dark" ? { main: yl[400], light: yl[300], dark: yl[700] } : { main: "#ed6c02", light: yl[500], dark: yl[900] };
}
function Qh(a3) {
  const { mode: s = "light", contrastThreshold: l = 3, tonalOffset: c = 0.2, ...h } = a3, m = a3.primary || FS(s), g = a3.secondary || WS(s), _ = a3.error || JS(s), b = a3.info || tx(s), S = a3.success || ex(s), w = a3.warning || nx(s);
  function E(A) {
    return CS(A, Pv.text.primary) >= l ? Pv.text.primary : QS.text.primary;
  }
  const R = ({ color: A, name: $, mainShade: q = 500, lightShade: tt = 300, darkShade: k = 700 }) => {
    if (A = { ...A }, !A.main && A[q] && (A.main = A[q]), !A.hasOwnProperty("main")) throw new Error(La(11, $ ? ` (${$})` : "", q));
    if (typeof A.main != "string") throw new Error(La(12, $ ? ` (${$})` : "", JSON.stringify(A.main)));
    return Bv(A, "light", tt, c), Bv(A, "dark", k, c), A.contrastText || (A.contrastText = E(A.main)), A;
  };
  let D;
  return s === "light" ? D = Qy() : s === "dark" && (D = Fy()), Mn({ common: { ...zl }, mode: s, primary: R({ color: m, name: "primary" }), secondary: R({ color: g, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }), error: R({ color: _, name: "error" }), warning: R({ color: w, name: "warning" }), info: R({ color: b, name: "info" }), success: R({ color: S, name: "success" }), grey: KS, contrastThreshold: l, getContrastText: E, augmentColor: R, tonalOffset: c, ...D }, h);
}
function ix(a3) {
  const s = {};
  return Object.entries(a3).forEach((c) => {
    const [h, m] = c;
    typeof m == "object" && (s[h] = `${m.fontStyle ? `${m.fontStyle} ` : ""}${m.fontVariant ? `${m.fontVariant} ` : ""}${m.fontWeight ? `${m.fontWeight} ` : ""}${m.fontStretch ? `${m.fontStretch} ` : ""}${m.fontSize || ""}${m.lineHeight ? `/${m.lineHeight} ` : ""}${m.fontFamily || ""}`);
  }), s;
}
function ax(a3, s) {
  return { toolbar: { minHeight: 56, [a3.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } }, [a3.up("sm")]: { minHeight: 64 } }, ...s };
}
function ox(a3) {
  return Math.round(a3 * 1e5) / 1e5;
}
const kv = { textTransform: "uppercase" }, Nv = '"Roboto", "Helvetica", "Arial", sans-serif';
function Wy(a3, s) {
  const { fontFamily: l = Nv, fontSize: c = 14, fontWeightLight: h = 300, fontWeightRegular: m = 400, fontWeightMedium: g = 500, fontWeightBold: _ = 700, htmlFontSize: b = 16, allVariants: S, pxToRem: w, ...E } = typeof s == "function" ? s(a3) : s, R = c / 14, D = w || (($) => `${$ / b * R}rem`), N = ($, q, tt, k, U) => ({ fontFamily: l, fontWeight: $, fontSize: D(q), lineHeight: tt, ...l === Nv ? { letterSpacing: `${ox(k / q)}em` } : {}, ...U, ...S }), A = { h1: N(h, 96, 1.167, -1.5), h2: N(h, 60, 1.2, -0.5), h3: N(m, 48, 1.167, 0), h4: N(m, 34, 1.235, 0.25), h5: N(m, 24, 1.334, 0), h6: N(g, 20, 1.6, 0.15), subtitle1: N(m, 16, 1.75, 0.15), subtitle2: N(g, 14, 1.57, 0.1), body1: N(m, 16, 1.5, 0.15), body2: N(m, 14, 1.43, 0.15), button: N(g, 14, 1.75, 0.4, kv), caption: N(m, 12, 1.66, 0.4), overline: N(m, 12, 2.66, 1, kv), inherit: { fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } };
  return Mn({ htmlFontSize: b, pxToRem: D, fontFamily: l, fontSize: c, fontWeightLight: h, fontWeightRegular: m, fontWeightMedium: g, fontWeightBold: _, ...A }, E, { clone: false });
}
const rx = 0.2, sx = 0.14, lx = 0.12;
function Pe(...a3) {
  return [`${a3[0]}px ${a3[1]}px ${a3[2]}px ${a3[3]}px rgba(0,0,0,${rx})`, `${a3[4]}px ${a3[5]}px ${a3[6]}px ${a3[7]}px rgba(0,0,0,${sx})`, `${a3[8]}px ${a3[9]}px ${a3[10]}px ${a3[11]}px rgba(0,0,0,${lx})`].join(",");
}
const ux = ["none", Pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], cx = { easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", easeOut: "cubic-bezier(0.0, 0, 0.2, 1)", easeIn: "cubic-bezier(0.4, 0, 1, 1)", sharp: "cubic-bezier(0.4, 0, 0.6, 1)" }, fx = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 };
function Dv(a3) {
  return `${Math.round(a3)}ms`;
}
function dx(a3) {
  if (!a3) return 0;
  const s = a3 / 36;
  return Math.min(Math.round((4 + 15 * s ** 0.25 + s / 5) * 10), 3e3);
}
function hx(a3) {
  const s = { ...cx, ...a3.easing }, l = { ...fx, ...a3.duration };
  return { getAutoHeightDuration: dx, create: (h = ["all"], m = {}) => {
    const { duration: g = l.standard, easing: _ = s.easeInOut, delay: b = 0, ...S } = m;
    return (Array.isArray(h) ? h : [h]).map((w) => `${w} ${typeof g == "string" ? g : Dv(g)} ${_} ${typeof b == "string" ? b : Dv(b)}`).join(",");
  }, ...a3, easing: s, duration: l };
}
const px = { mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500 };
function mx(a3) {
  return Xi(a3) || typeof a3 > "u" || typeof a3 == "string" || typeof a3 == "boolean" || typeof a3 == "number" || Array.isArray(a3);
}
function Jy(a3 = {}) {
  const s = { ...a3 };
  function l(c) {
    const h = Object.entries(c);
    for (let m = 0; m < h.length; m++) {
      const [g, _] = h[m];
      !mx(_) || g.startsWith("unstable_") ? delete c[g] : Xi(_) && (c[g] = { ..._ }, l(c[g]));
    }
  }
  return l(s), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(s, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ph(a3 = {}, ...s) {
  const { breakpoints: l, mixins: c = {}, spacing: h, palette: m = {}, transitions: g = {}, typography: _ = {}, shape: b, ...S } = a3;
  if (a3.vars && a3.generateThemeVars === void 0) throw new Error(La(20));
  const w = Qh(m), E = Ih(a3);
  let R = Mn(E, { mixins: ax(E.breakpoints, c), palette: w, shadows: ux.slice(), typography: Wy(w, _), transitions: hx(g), zIndex: { ...px } });
  return R = Mn(R, S), R = s.reduce((D, N) => Mn(D, N), R), R.unstable_sxConfig = { ...Ul, ...S == null ? void 0 : S.unstable_sxConfig }, R.unstable_sx = function(N) {
    return Oo({ sx: N, theme: this });
  }, R.toRuntimeSource = Jy, R;
}
function mh(a3) {
  let s;
  return a3 < 1 ? s = 5.11916 * a3 ** 2 : s = 4.5 * Math.log(a3 + 1) + 2, Math.round(s * 10) / 1e3;
}
const gx = [...Array(25)].map((a3, s) => {
  if (s === 0) return "none";
  const l = mh(s);
  return `linear-gradient(rgba(255 255 255 / ${l}), rgba(255 255 255 / ${l}))`;
});
function t_(a3) {
  return { inputPlaceholder: a3 === "dark" ? 0.5 : 0.42, inputUnderline: a3 === "dark" ? 0.7 : 0.42, switchTrackDisabled: a3 === "dark" ? 0.2 : 0.12, switchTrack: a3 === "dark" ? 0.3 : 0.38 };
}
function e_(a3) {
  return a3 === "dark" ? gx : [];
}
function vx(a3) {
  const { palette: s = { mode: "light" }, opacity: l, overlays: c, ...h } = a3, m = Qh(s);
  return { palette: m, opacity: { ...t_(m.mode), ...l }, overlays: c || e_(m.mode), ...h };
}
function yx(a3) {
  var _a;
  return !!a3[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!a3[0].match(/sxConfig$/) || a3[0] === "palette" && !!((_a = a3[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const _x = (a3) => [...[...Array(25)].map((s, l) => `--${a3 ? `${a3}-` : ""}overlays-${l}`), `--${a3 ? `${a3}-` : ""}palette-AppBar-darkBg`, `--${a3 ? `${a3}-` : ""}palette-AppBar-darkColor`], bx = (a3) => (s, l) => {
  const c = a3.rootSelector || ":root", h = a3.colorSchemeSelector;
  let m = h;
  if (h === "class" && (m = ".%s"), h === "data" && (m = "[data-%s]"), (h == null ? void 0 : h.startsWith("data-")) && !h.includes("%s") && (m = `[${h}="%s"]`), a3.defaultColorScheme === s) {
    if (s === "dark") {
      const g = {};
      return _x(a3.cssVarPrefix).forEach((_) => {
        g[_] = l[_], delete l[_];
      }), m === "media" ? { [c]: l, "@media (prefers-color-scheme: dark)": { [c]: g } } : m ? { [m.replace("%s", s)]: g, [`${c}, ${m.replace("%s", s)}`]: l } : { [c]: { ...l, ...g } };
    }
    if (m && m !== "media") return `${c}, ${m.replace("%s", String(s))}`;
  } else if (s) {
    if (m === "media") return { [`@media (prefers-color-scheme: ${String(s)})`]: { [c]: l } };
    if (m) return m.replace("%s", String(s));
  }
  return c;
};
function Sx(a3, s) {
  s.forEach((l) => {
    a3[l] || (a3[l] = {});
  });
}
function nt(a3, s, l) {
  !a3[s] && l && (a3[s] = l);
}
function Cl(a3) {
  return typeof a3 != "string" || !a3.startsWith("hsl") ? a3 : qy(a3);
}
function Oa(a3, s) {
  `${s}Channel` in a3 || (a3[`${s}Channel`] = Tl(Cl(a3[s])));
}
function xx(a3) {
  return typeof a3 == "number" ? `${a3}px` : typeof a3 == "string" || typeof a3 == "function" || Array.isArray(a3) ? a3 : "8px";
}
const qi = (a3) => {
  try {
    return a3();
  } catch {
  }
}, Tx = (a3 = "mui") => qS(a3);
function ah(a3, s, l, c) {
  if (!s) return;
  s = s === true ? {} : s;
  const h = c === "dark" ? "dark" : "light";
  if (!l) {
    a3[c] = vx({ ...s, palette: { mode: h, ...s == null ? void 0 : s.palette } });
    return;
  }
  const { palette: m, ...g } = ph({ ...l, palette: { mode: h, ...s == null ? void 0 : s.palette } });
  return a3[c] = { ...s, palette: m, opacity: { ...t_(h), ...s == null ? void 0 : s.opacity }, overlays: (s == null ? void 0 : s.overlays) || e_(h) }, g;
}
function Cx(a3 = {}, ...s) {
  const { colorSchemes: l = { light: true }, defaultColorScheme: c, disableCssColorScheme: h = false, cssVarPrefix: m = "mui", shouldSkipGeneratingVar: g = yx, colorSchemeSelector: _ = l.light && l.dark ? "media" : void 0, rootSelector: b = ":root", ...S } = a3, w = Object.keys(l)[0], E = c || (l.light && w !== "light" ? "light" : w), R = Tx(m), { [E]: D, light: N, dark: A, ...$ } = l, q = { ...$ };
  let tt = D;
  if ((E === "dark" && !("dark" in l) || E === "light" && !("light" in l)) && (tt = true), !tt) throw new Error(La(21, E));
  const k = ah(q, tt, S, E);
  N && !q.light && ah(q, N, void 0, "light"), A && !q.dark && ah(q, A, void 0, "dark");
  let U = { defaultColorScheme: E, ...k, cssVarPrefix: m, colorSchemeSelector: _, rootSelector: b, getCssVar: R, colorSchemes: q, font: { ...ix(k.typography), ...k.font }, spacing: xx(S.spacing) };
  Object.keys(U.colorSchemes).forEach((dt) => {
    const C = U.colorSchemes[dt].palette, Q = (rt) => {
      const bt = rt.split("-"), yt = bt[1], vt = bt[2];
      return R(rt, C[yt][vt]);
    };
    if (C.mode === "light" && (nt(C.common, "background", "#fff"), nt(C.common, "onBackground", "#000")), C.mode === "dark" && (nt(C.common, "background", "#000"), nt(C.common, "onBackground", "#fff")), Sx(C, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), C.mode === "light") {
      nt(C.Alert, "errorColor", Se(C.error.light, 0.6)), nt(C.Alert, "infoColor", Se(C.info.light, 0.6)), nt(C.Alert, "successColor", Se(C.success.light, 0.6)), nt(C.Alert, "warningColor", Se(C.warning.light, 0.6)), nt(C.Alert, "errorFilledBg", Q("palette-error-main")), nt(C.Alert, "infoFilledBg", Q("palette-info-main")), nt(C.Alert, "successFilledBg", Q("palette-success-main")), nt(C.Alert, "warningFilledBg", Q("palette-warning-main")), nt(C.Alert, "errorFilledColor", qi(() => C.getContrastText(C.error.main))), nt(C.Alert, "infoFilledColor", qi(() => C.getContrastText(C.info.main))), nt(C.Alert, "successFilledColor", qi(() => C.getContrastText(C.success.main))), nt(C.Alert, "warningFilledColor", qi(() => C.getContrastText(C.warning.main))), nt(C.Alert, "errorStandardBg", xe(C.error.light, 0.9)), nt(C.Alert, "infoStandardBg", xe(C.info.light, 0.9)), nt(C.Alert, "successStandardBg", xe(C.success.light, 0.9)), nt(C.Alert, "warningStandardBg", xe(C.warning.light, 0.9)), nt(C.Alert, "errorIconColor", Q("palette-error-main")), nt(C.Alert, "infoIconColor", Q("palette-info-main")), nt(C.Alert, "successIconColor", Q("palette-success-main")), nt(C.Alert, "warningIconColor", Q("palette-warning-main")), nt(C.AppBar, "defaultBg", Q("palette-grey-100")), nt(C.Avatar, "defaultBg", Q("palette-grey-400")), nt(C.Button, "inheritContainedBg", Q("palette-grey-300")), nt(C.Button, "inheritContainedHoverBg", Q("palette-grey-A100")), nt(C.Chip, "defaultBorder", Q("palette-grey-400")), nt(C.Chip, "defaultAvatarColor", Q("palette-grey-700")), nt(C.Chip, "defaultIconColor", Q("palette-grey-700")), nt(C.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), nt(C.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), nt(C.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), nt(C.LinearProgress, "primaryBg", xe(C.primary.main, 0.62)), nt(C.LinearProgress, "secondaryBg", xe(C.secondary.main, 0.62)), nt(C.LinearProgress, "errorBg", xe(C.error.main, 0.62)), nt(C.LinearProgress, "infoBg", xe(C.info.main, 0.62)), nt(C.LinearProgress, "successBg", xe(C.success.main, 0.62)), nt(C.LinearProgress, "warningBg", xe(C.warning.main, 0.62)), nt(C.Skeleton, "bg", `rgba(${Q("palette-text-primaryChannel")} / 0.11)`), nt(C.Slider, "primaryTrack", xe(C.primary.main, 0.62)), nt(C.Slider, "secondaryTrack", xe(C.secondary.main, 0.62)), nt(C.Slider, "errorTrack", xe(C.error.main, 0.62)), nt(C.Slider, "infoTrack", xe(C.info.main, 0.62)), nt(C.Slider, "successTrack", xe(C.success.main, 0.62)), nt(C.Slider, "warningTrack", xe(C.warning.main, 0.62));
      const rt = pc(C.background.default, 0.8);
      nt(C.SnackbarContent, "bg", rt), nt(C.SnackbarContent, "color", qi(() => C.getContrastText(rt))), nt(C.SpeedDialAction, "fabHoverBg", pc(C.background.paper, 0.15)), nt(C.StepConnector, "border", Q("palette-grey-400")), nt(C.StepContent, "border", Q("palette-grey-400")), nt(C.Switch, "defaultColor", Q("palette-common-white")), nt(C.Switch, "defaultDisabledColor", Q("palette-grey-100")), nt(C.Switch, "primaryDisabledColor", xe(C.primary.main, 0.62)), nt(C.Switch, "secondaryDisabledColor", xe(C.secondary.main, 0.62)), nt(C.Switch, "errorDisabledColor", xe(C.error.main, 0.62)), nt(C.Switch, "infoDisabledColor", xe(C.info.main, 0.62)), nt(C.Switch, "successDisabledColor", xe(C.success.main, 0.62)), nt(C.Switch, "warningDisabledColor", xe(C.warning.main, 0.62)), nt(C.TableCell, "border", xe(hc(C.divider, 1), 0.88)), nt(C.Tooltip, "bg", hc(C.grey[700], 0.92));
    }
    if (C.mode === "dark") {
      nt(C.Alert, "errorColor", xe(C.error.light, 0.6)), nt(C.Alert, "infoColor", xe(C.info.light, 0.6)), nt(C.Alert, "successColor", xe(C.success.light, 0.6)), nt(C.Alert, "warningColor", xe(C.warning.light, 0.6)), nt(C.Alert, "errorFilledBg", Q("palette-error-dark")), nt(C.Alert, "infoFilledBg", Q("palette-info-dark")), nt(C.Alert, "successFilledBg", Q("palette-success-dark")), nt(C.Alert, "warningFilledBg", Q("palette-warning-dark")), nt(C.Alert, "errorFilledColor", qi(() => C.getContrastText(C.error.dark))), nt(C.Alert, "infoFilledColor", qi(() => C.getContrastText(C.info.dark))), nt(C.Alert, "successFilledColor", qi(() => C.getContrastText(C.success.dark))), nt(C.Alert, "warningFilledColor", qi(() => C.getContrastText(C.warning.dark))), nt(C.Alert, "errorStandardBg", Se(C.error.light, 0.9)), nt(C.Alert, "infoStandardBg", Se(C.info.light, 0.9)), nt(C.Alert, "successStandardBg", Se(C.success.light, 0.9)), nt(C.Alert, "warningStandardBg", Se(C.warning.light, 0.9)), nt(C.Alert, "errorIconColor", Q("palette-error-main")), nt(C.Alert, "infoIconColor", Q("palette-info-main")), nt(C.Alert, "successIconColor", Q("palette-success-main")), nt(C.Alert, "warningIconColor", Q("palette-warning-main")), nt(C.AppBar, "defaultBg", Q("palette-grey-900")), nt(C.AppBar, "darkBg", Q("palette-background-paper")), nt(C.AppBar, "darkColor", Q("palette-text-primary")), nt(C.Avatar, "defaultBg", Q("palette-grey-600")), nt(C.Button, "inheritContainedBg", Q("palette-grey-800")), nt(C.Button, "inheritContainedHoverBg", Q("palette-grey-700")), nt(C.Chip, "defaultBorder", Q("palette-grey-700")), nt(C.Chip, "defaultAvatarColor", Q("palette-grey-300")), nt(C.Chip, "defaultIconColor", Q("palette-grey-300")), nt(C.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), nt(C.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), nt(C.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), nt(C.LinearProgress, "primaryBg", Se(C.primary.main, 0.5)), nt(C.LinearProgress, "secondaryBg", Se(C.secondary.main, 0.5)), nt(C.LinearProgress, "errorBg", Se(C.error.main, 0.5)), nt(C.LinearProgress, "infoBg", Se(C.info.main, 0.5)), nt(C.LinearProgress, "successBg", Se(C.success.main, 0.5)), nt(C.LinearProgress, "warningBg", Se(C.warning.main, 0.5)), nt(C.Skeleton, "bg", `rgba(${Q("palette-text-primaryChannel")} / 0.13)`), nt(C.Slider, "primaryTrack", Se(C.primary.main, 0.5)), nt(C.Slider, "secondaryTrack", Se(C.secondary.main, 0.5)), nt(C.Slider, "errorTrack", Se(C.error.main, 0.5)), nt(C.Slider, "infoTrack", Se(C.info.main, 0.5)), nt(C.Slider, "successTrack", Se(C.success.main, 0.5)), nt(C.Slider, "warningTrack", Se(C.warning.main, 0.5));
      const rt = pc(C.background.default, 0.98);
      nt(C.SnackbarContent, "bg", rt), nt(C.SnackbarContent, "color", qi(() => C.getContrastText(rt))), nt(C.SpeedDialAction, "fabHoverBg", pc(C.background.paper, 0.15)), nt(C.StepConnector, "border", Q("palette-grey-600")), nt(C.StepContent, "border", Q("palette-grey-600")), nt(C.Switch, "defaultColor", Q("palette-grey-300")), nt(C.Switch, "defaultDisabledColor", Q("palette-grey-600")), nt(C.Switch, "primaryDisabledColor", Se(C.primary.main, 0.55)), nt(C.Switch, "secondaryDisabledColor", Se(C.secondary.main, 0.55)), nt(C.Switch, "errorDisabledColor", Se(C.error.main, 0.55)), nt(C.Switch, "infoDisabledColor", Se(C.info.main, 0.55)), nt(C.Switch, "successDisabledColor", Se(C.success.main, 0.55)), nt(C.Switch, "warningDisabledColor", Se(C.warning.main, 0.55)), nt(C.TableCell, "border", Se(hc(C.divider, 1), 0.68)), nt(C.Tooltip, "bg", hc(C.grey[700], 0.92));
    }
    Oa(C.background, "default"), Oa(C.background, "paper"), Oa(C.common, "background"), Oa(C.common, "onBackground"), Oa(C, "divider"), Object.keys(C).forEach((rt) => {
      const bt = C[rt];
      rt !== "tonalOffset" && bt && typeof bt == "object" && (bt.main && nt(C[rt], "mainChannel", Tl(Cl(bt.main))), bt.light && nt(C[rt], "lightChannel", Tl(Cl(bt.light))), bt.dark && nt(C[rt], "darkChannel", Tl(Cl(bt.dark))), bt.contrastText && nt(C[rt], "contrastTextChannel", Tl(Cl(bt.contrastText))), rt === "text" && (Oa(C[rt], "primary"), Oa(C[rt], "secondary")), rt === "action" && (bt.active && Oa(C[rt], "active"), bt.selected && Oa(C[rt], "selected")));
    });
  }), U = s.reduce((dt, C) => Mn(dt, C), U);
  const B = { prefix: m, disableCssColorScheme: h, shouldSkipGeneratingVar: g, getSelector: bx(U) }, { vars: J, generateThemeVars: ot, generateStyleSheets: et } = YS(U, B);
  return U.vars = J, Object.entries(U.colorSchemes[U.defaultColorScheme]).forEach(([dt, C]) => {
    U[dt] = C;
  }), U.generateThemeVars = ot, U.generateStyleSheets = et, U.generateSpacing = function() {
    return Dy(S.spacing, Zh(this));
  }, U.getColorSchemeSelector = XS(_), U.spacing = U.generateSpacing(), U.shouldSkipGeneratingVar = g, U.unstable_sxConfig = { ...Ul, ...S == null ? void 0 : S.unstable_sxConfig }, U.unstable_sx = function(C) {
    return Oo({ sx: C, theme: this });
  }, U.toRuntimeSource = Jy, U;
}
function Hv(a3, s, l) {
  a3.colorSchemes && l && (a3.colorSchemes[s] = { ...l !== true && l, palette: Qh({ ...l === true ? {} : l.palette, mode: s }) });
}
function Ic(a3 = {}, ...s) {
  const { palette: l, cssVariables: c = false, colorSchemes: h = l ? void 0 : { light: true }, defaultColorScheme: m = l == null ? void 0 : l.mode, ...g } = a3, _ = m || "light", b = h == null ? void 0 : h[_], S = { ...h, ...l ? { [_]: { ...typeof b != "boolean" && b, palette: l } } : void 0 };
  if (c === false) {
    if (!("colorSchemes" in a3)) return ph(a3, ...s);
    let w = l;
    "palette" in a3 || S[_] && (S[_] !== true ? w = S[_].palette : _ === "dark" && (w = { mode: "dark" }));
    const E = ph({ ...a3, palette: w }, ...s);
    return E.defaultColorScheme = _, E.colorSchemes = S, E.palette.mode === "light" && (E.colorSchemes.light = { ...S.light !== true && S.light, palette: E.palette }, Hv(E, "dark", S.dark)), E.palette.mode === "dark" && (E.colorSchemes.dark = { ...S.dark !== true && S.dark, palette: E.palette }, Hv(E, "light", S.light)), E;
  }
  return !l && !("light" in S) && _ === "light" && (S.light = true), Cx({ ...g, colorSchemes: S, defaultColorScheme: _, ...typeof c != "boolean" && c }, ...s);
}
const Fh = Ic();
function hs() {
  const a3 = $h(Fh);
  return a3[Qi] || a3;
}
function n_(a3) {
  return a3 !== "ownerState" && a3 !== "theme" && a3 !== "sx" && a3 !== "as";
}
const Ai = (a3) => n_(a3) && a3 !== "classes", Bt = gS({ themeId: Qi, defaultTheme: Fh, rootShouldForwardProp: Ai });
function wx({ theme: a3, ...s }) {
  const l = Qi in a3 ? a3[Qi] : void 0;
  return Y.jsx(Xy, { ...s, themeId: l ? Qi : void 0, theme: l || a3 });
}
const mc = { colorSchemeStorageKey: "mui-color-scheme", defaultLightColorScheme: "light", defaultDarkColorScheme: "dark", modeStorageKey: "mui-mode" }, { CssVarsProvider: Ex } = $S({ themeId: Qi, theme: () => Ic({ cssVariables: true }), colorSchemeStorageKey: mc.colorSchemeStorageKey, modeStorageKey: mc.modeStorageKey, defaultColorScheme: { light: mc.defaultLightColorScheme, dark: mc.defaultDarkColorScheme }, resolveTheme: (a3) => {
  const s = { ...a3, typography: Wy(a3.palette, a3.typography) };
  return s.unstable_sx = function(c) {
    return Oo({ sx: c, theme: this });
  }, s;
} }), Mx = Ex;
function Ox({ theme: a3, ...s }) {
  const l = O.useMemo(() => {
    if (typeof a3 == "function") return a3;
    const c = Qi in a3 ? a3[Qi] : a3;
    return "colorSchemes" in c ? null : "vars" in c ? a3 : { ...a3, vars: null };
  }, [a3]);
  return l ? Y.jsx(wx, { theme: l, ...s }) : Y.jsx(Mx, { theme: a3, ...s });
}
const $c = 16, gh = window.innerHeight - $c * 2, vh = window.innerWidth - $c * 2, Ax = vh / (vh - gh - $c);
let Rx = Ic({ mainM: `${$c}px`, mainH: `${gh}px`, mainW: `${vh}px`, imgW: gh, mapRatio: Ax, typography: { fontFamily: "Cotham Sans" }, brdRad: "20px", palette: { primary: { main: "#FF6F61", light: "#FF9A8B", dark: "#C94C4C" }, secondary: { main: "#6F61FF", light: "#9A8BFF", dark: "#4C4CC9" }, white: { light: "#ffffff", main: "#f5f5f5", darker: "#ebebeb" }, black: { light: "#000000", main: "#212121", darker: "#000000" } } });
function Uv(...a3) {
  return a3.reduce((s, l) => l == null ? s : function(...h) {
    s.apply(this, h), l.apply(this, h);
  }, () => {
  });
}
function Lx(a3) {
  return Y.jsx(lS, { ...a3, defaultTheme: Fh, themeId: Qi });
}
function zx(a3) {
  return function(l) {
    return Y.jsx(Lx, { styles: typeof a3 == "function" ? (c) => a3({ theme: c, ...l }) : a3 });
  };
}
function Px() {
  return Uy;
}
const tn = kS;
function en(a3) {
  return BS(a3);
}
function Bx(a3) {
  return Qe("MuiSvgIcon", a3);
}
Be("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const kx = (a3) => {
  const { color: s, fontSize: l, classes: c } = a3, h = { root: ["root", s !== "inherit" && `color${qt(s)}`, `fontSize${qt(l)}`] };
  return Fe(h, Bx, c);
}, Nx = Bt("svg", { name: "MuiSvgIcon", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, l.color !== "inherit" && s[`color${qt(l.color)}`], s[`fontSize${qt(l.fontSize)}`]];
} })(tn(({ theme: a3 }) => {
  var _a, _b2, _c2, _d, _e, _f, _g, _h2, _i2, _j, _k, _l2, _m, _n;
  return { userSelect: "none", width: "1em", height: "1em", display: "inline-block", flexShrink: 0, transition: (_d = (_a = a3.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", { duration: (_c2 = (_b2 = (a3.vars ?? a3).transitions) == null ? void 0 : _b2.duration) == null ? void 0 : _c2.shorter }), variants: [{ props: (s) => !s.hasSvgAsChild, style: { fill: "currentColor" } }, { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } }, { props: { fontSize: "small" }, style: { fontSize: ((_f = (_e = a3.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem" } }, { props: { fontSize: "medium" }, style: { fontSize: ((_h2 = (_g = a3.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h2.call(_g, 24)) || "1.5rem" } }, { props: { fontSize: "large" }, style: { fontSize: ((_j = (_i2 = a3.typography) == null ? void 0 : _i2.pxToRem) == null ? void 0 : _j.call(_i2, 35)) || "2.1875rem" } }, ...Object.entries((a3.vars ?? a3).palette).filter(([, s]) => s && s.main).map(([s]) => {
    var _a2, _b3;
    return { props: { color: s }, style: { color: (_b3 = (_a2 = (a3.vars ?? a3).palette) == null ? void 0 : _a2[s]) == null ? void 0 : _b3.main } };
  }), { props: { color: "action" }, style: { color: (_l2 = (_k = (a3.vars ?? a3).palette) == null ? void 0 : _k.action) == null ? void 0 : _l2.active } }, { props: { color: "disabled" }, style: { color: (_n = (_m = (a3.vars ?? a3).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled } }, { props: { color: "inherit" }, style: { color: void 0 } }] };
})), yh = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiSvgIcon" }), { children: h, className: m, color: g = "inherit", component: _ = "svg", fontSize: b = "medium", htmlColor: S, inheritViewBox: w = false, titleAccess: E, viewBox: R = "0 0 24 24", ...D } = c, N = O.isValidElement(h) && h.type === "svg", A = { ...c, color: g, component: _, fontSize: b, instanceFontSize: s.fontSize, inheritViewBox: w, viewBox: R, hasSvgAsChild: N }, $ = {};
  w || ($.viewBox = R);
  const q = kx(A);
  return Y.jsxs(Nx, { as: _, className: Ft(q.root, m), focusable: "false", color: S, "aria-hidden": E ? void 0 : true, role: E ? "img" : void 0, ref: l, ...$, ...D, ...N && h.props, ownerState: A, children: [N ? h.props.children : h, E ? Y.jsx("title", { children: E }) : null] });
});
yh.muiName = "SvgIcon";
function i_(a3, s) {
  function l(c, h) {
    return Y.jsx(yh, { "data-testid": void 0, ref: h, ...c, children: a3 });
  }
  return l.muiName = yh.muiName, O.memo(O.forwardRef(l));
}
function a_(a3, s = 166) {
  let l;
  function c(...h) {
    const m = () => {
      a3.apply(this, h);
    };
    clearTimeout(l), l = setTimeout(m, s);
  }
  return c.clear = () => {
    clearTimeout(l);
  }, c;
}
function Oi(a3) {
  return a3 && a3.ownerDocument || document;
}
function Ba(a3) {
  return Oi(a3).defaultView || window;
}
function Zv(a3, s) {
  typeof a3 == "function" ? a3(s) : a3 && (a3.current = s);
}
let jv = 0;
function Dx(a3) {
  const [s, l] = O.useState(a3), c = a3 || s;
  return O.useEffect(() => {
    s == null && (jv += 1, l(`mui-${jv}`));
  }, [s]), c;
}
const Hx = { ...lh }, Iv = Hx.useId;
function Wh(a3) {
  if (Iv !== void 0) {
    const s = Iv();
    return a3 ?? s;
  }
  return Dx(a3);
}
function $v(a3) {
  const { controlled: s, default: l, name: c, state: h = "value" } = a3, { current: m } = O.useRef(s !== void 0), [g, _] = O.useState(l), b = m ? s : g, S = O.useCallback((w) => {
    m || _(w);
  }, []);
  return [b, S];
}
function cr(a3) {
  const s = O.useRef(a3);
  return Pa(() => {
    s.current = a3;
  }), O.useRef((...l) => (0, s.current)(...l)).current;
}
function Bn(...a3) {
  const s = O.useRef(void 0), l = O.useCallback((c) => {
    const h = a3.map((m) => {
      if (m == null) return null;
      if (typeof m == "function") {
        const g = m, _ = g(c);
        return typeof _ == "function" ? _ : () => {
          g(null);
        };
      }
      return m.current = c, () => {
        m.current = null;
      };
    });
    return () => {
      h.forEach((m) => m == null ? void 0 : m());
    };
  }, a3);
  return O.useMemo(() => a3.every((c) => c == null) ? null : (c) => {
    s.current && (s.current(), s.current = void 0), c != null && (s.current = l(c));
  }, a3);
}
function Ux(a3, s) {
  const l = a3.charCodeAt(2);
  return a3[0] === "o" && a3[1] === "n" && l >= 65 && l <= 90 && typeof s == "function";
}
function Zx(a3, s) {
  if (!a3) return s;
  function l(g, _) {
    const b = {};
    return Object.keys(_).forEach((S) => {
      Ux(S, _[S]) && typeof g[S] == "function" && (b[S] = (...w) => {
        g[S](...w), _[S](...w);
      });
    }), b;
  }
  if (typeof a3 == "function" || typeof s == "function") return (g) => {
    const _ = typeof s == "function" ? s(g) : s, b = typeof a3 == "function" ? a3({ ...g, ..._ }) : a3, S = Ft(g == null ? void 0 : g.className, _ == null ? void 0 : _.className, b == null ? void 0 : b.className), w = l(b, _);
    return { ..._, ...b, ...w, ...!!S && { className: S }, ...(_ == null ? void 0 : _.style) && (b == null ? void 0 : b.style) && { style: { ..._.style, ...b.style } }, ...(_ == null ? void 0 : _.sx) && (b == null ? void 0 : b.sx) && { sx: [...Array.isArray(_.sx) ? _.sx : [_.sx], ...Array.isArray(b.sx) ? b.sx : [b.sx]] } };
  };
  const c = s, h = l(a3, c), m = Ft(c == null ? void 0 : c.className, a3 == null ? void 0 : a3.className);
  return { ...s, ...a3, ...h, ...!!m && { className: m }, ...(c == null ? void 0 : c.style) && (a3 == null ? void 0 : a3.style) && { style: { ...c.style, ...a3.style } }, ...(c == null ? void 0 : c.sx) && (a3 == null ? void 0 : a3.sx) && { sx: [...Array.isArray(c.sx) ? c.sx : [c.sx], ...Array.isArray(a3.sx) ? a3.sx : [a3.sx]] } };
}
function o_(a3, s) {
  if (a3 == null) return {};
  var l = {};
  for (var c in a3) if ({}.hasOwnProperty.call(a3, c)) {
    if (s.indexOf(c) !== -1) continue;
    l[c] = a3[c];
  }
  return l;
}
function _h(a3, s) {
  return _h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
    return l.__proto__ = c, l;
  }, _h(a3, s);
}
function r_(a3, s) {
  a3.prototype = Object.create(s.prototype), a3.prototype.constructor = a3, _h(a3, s);
}
var qc = yy();
const gc = Oh(qc), qv = { disabled: false }, Oc = En.createContext(null);
var jx = function(s) {
  return s.scrollTop;
}, wl = "unmounted", sr = "exited", lr = "entering", ss = "entered", bh = "exiting", Ji = function(a3) {
  r_(s, a3);
  function s(c, h) {
    var m;
    m = a3.call(this, c, h) || this;
    var g = h, _ = g && !g.isMounting ? c.enter : c.appear, b;
    return m.appearStatus = null, c.in ? _ ? (b = sr, m.appearStatus = lr) : b = ss : c.unmountOnExit || c.mountOnEnter ? b = wl : b = sr, m.state = { status: b }, m.nextCallback = null, m;
  }
  s.getDerivedStateFromProps = function(h, m) {
    var g = h.in;
    return g && m.status === wl ? { status: sr } : null;
  };
  var l = s.prototype;
  return l.componentDidMount = function() {
    this.updateStatus(true, this.appearStatus);
  }, l.componentDidUpdate = function(h) {
    var m = null;
    if (h !== this.props) {
      var g = this.state.status;
      this.props.in ? g !== lr && g !== ss && (m = lr) : (g === lr || g === ss) && (m = bh);
    }
    this.updateStatus(false, m);
  }, l.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, l.getTimeouts = function() {
    var h = this.props.timeout, m, g, _;
    return m = g = _ = h, h != null && typeof h != "number" && (m = h.exit, g = h.enter, _ = h.appear !== void 0 ? h.appear : g), { exit: m, enter: g, appear: _ };
  }, l.updateStatus = function(h, m) {
    if (h === void 0 && (h = false), m !== null) if (this.cancelNextCallback(), m === lr) {
      if (this.props.unmountOnExit || this.props.mountOnEnter) {
        var g = this.props.nodeRef ? this.props.nodeRef.current : gc.findDOMNode(this);
        g && jx(g);
      }
      this.performEnter(h);
    } else this.performExit();
    else this.props.unmountOnExit && this.state.status === sr && this.setState({ status: wl });
  }, l.performEnter = function(h) {
    var m = this, g = this.props.enter, _ = this.context ? this.context.isMounting : h, b = this.props.nodeRef ? [_] : [gc.findDOMNode(this), _], S = b[0], w = b[1], E = this.getTimeouts(), R = _ ? E.appear : E.enter;
    if (!h && !g || qv.disabled) {
      this.safeSetState({ status: ss }, function() {
        m.props.onEntered(S);
      });
      return;
    }
    this.props.onEnter(S, w), this.safeSetState({ status: lr }, function() {
      m.props.onEntering(S, w), m.onTransitionEnd(R, function() {
        m.safeSetState({ status: ss }, function() {
          m.props.onEntered(S, w);
        });
      });
    });
  }, l.performExit = function() {
    var h = this, m = this.props.exit, g = this.getTimeouts(), _ = this.props.nodeRef ? void 0 : gc.findDOMNode(this);
    if (!m || qv.disabled) {
      this.safeSetState({ status: sr }, function() {
        h.props.onExited(_);
      });
      return;
    }
    this.props.onExit(_), this.safeSetState({ status: bh }, function() {
      h.props.onExiting(_), h.onTransitionEnd(g.exit, function() {
        h.safeSetState({ status: sr }, function() {
          h.props.onExited(_);
        });
      });
    });
  }, l.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, l.safeSetState = function(h, m) {
    m = this.setNextCallback(m), this.setState(h, m);
  }, l.setNextCallback = function(h) {
    var m = this, g = true;
    return this.nextCallback = function(_) {
      g && (g = false, m.nextCallback = null, h(_));
    }, this.nextCallback.cancel = function() {
      g = false;
    }, this.nextCallback;
  }, l.onTransitionEnd = function(h, m) {
    this.setNextCallback(m);
    var g = this.props.nodeRef ? this.props.nodeRef.current : gc.findDOMNode(this), _ = h == null && !this.props.addEndListener;
    if (!g || _) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var b = this.props.nodeRef ? [this.nextCallback] : [g, this.nextCallback], S = b[0], w = b[1];
      this.props.addEndListener(S, w);
    }
    h != null && setTimeout(this.nextCallback, h);
  }, l.render = function() {
    var h = this.state.status;
    if (h === wl) return null;
    var m = this.props, g = m.children;
    m.in, m.mountOnEnter, m.unmountOnExit, m.appear, m.enter, m.exit, m.timeout, m.addEndListener, m.onEnter, m.onEntering, m.onEntered, m.onExit, m.onExiting, m.onExited, m.nodeRef;
    var _ = o_(m, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return En.createElement(Oc.Provider, { value: null }, typeof g == "function" ? g(h, _) : En.cloneElement(En.Children.only(g), _));
  }, s;
}(En.Component);
Ji.contextType = Oc;
Ji.propTypes = {};
function rs() {
}
Ji.defaultProps = { in: false, mountOnEnter: false, unmountOnExit: false, appear: false, enter: true, exit: true, onEnter: rs, onEntering: rs, onEntered: rs, onExit: rs, onExiting: rs, onExited: rs };
Ji.UNMOUNTED = wl;
Ji.EXITED = sr;
Ji.ENTERING = lr;
Ji.ENTERED = ss;
Ji.EXITING = bh;
function Ix(a3) {
  if (a3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a3;
}
function Jh(a3, s) {
  var l = function(m) {
    return s && O.isValidElement(m) ? s(m) : m;
  }, c = /* @__PURE__ */ Object.create(null);
  return a3 && O.Children.map(a3, function(h) {
    return h;
  }).forEach(function(h) {
    c[h.key] = l(h);
  }), c;
}
function $x(a3, s) {
  a3 = a3 || {}, s = s || {};
  function l(w) {
    return w in s ? s[w] : a3[w];
  }
  var c = /* @__PURE__ */ Object.create(null), h = [];
  for (var m in a3) m in s ? h.length && (c[m] = h, h = []) : h.push(m);
  var g, _ = {};
  for (var b in s) {
    if (c[b]) for (g = 0; g < c[b].length; g++) {
      var S = c[b][g];
      _[c[b][g]] = l(S);
    }
    _[b] = l(b);
  }
  for (g = 0; g < h.length; g++) _[h[g]] = l(h[g]);
  return _;
}
function ur(a3, s, l) {
  return l[s] != null ? l[s] : a3.props[s];
}
function qx(a3, s) {
  return Jh(a3.children, function(l) {
    return O.cloneElement(l, { onExited: s.bind(null, l), in: true, appear: ur(l, "appear", a3), enter: ur(l, "enter", a3), exit: ur(l, "exit", a3) });
  });
}
function Gx(a3, s, l) {
  var c = Jh(a3.children), h = $x(s, c);
  return Object.keys(h).forEach(function(m) {
    var g = h[m];
    if (O.isValidElement(g)) {
      var _ = m in s, b = m in c, S = s[m], w = O.isValidElement(S) && !S.props.in;
      b && (!_ || w) ? h[m] = O.cloneElement(g, { onExited: l.bind(null, g), in: true, exit: ur(g, "exit", a3), enter: ur(g, "enter", a3) }) : !b && _ && !w ? h[m] = O.cloneElement(g, { in: false }) : b && _ && O.isValidElement(S) && (h[m] = O.cloneElement(g, { onExited: l.bind(null, g), in: S.props.in, exit: ur(g, "exit", a3), enter: ur(g, "enter", a3) }));
    }
  }), h;
}
var Vx = Object.values || function(a3) {
  return Object.keys(a3).map(function(s) {
    return a3[s];
  });
}, Yx = { component: "div", childFactory: function(s) {
  return s;
} }, tp = function(a3) {
  r_(s, a3);
  function s(c, h) {
    var m;
    m = a3.call(this, c, h) || this;
    var g = m.handleExited.bind(Ix(m));
    return m.state = { contextValue: { isMounting: true }, handleExited: g, firstRender: true }, m;
  }
  var l = s.prototype;
  return l.componentDidMount = function() {
    this.mounted = true, this.setState({ contextValue: { isMounting: false } });
  }, l.componentWillUnmount = function() {
    this.mounted = false;
  }, s.getDerivedStateFromProps = function(h, m) {
    var g = m.children, _ = m.handleExited, b = m.firstRender;
    return { children: b ? qx(h, _) : Gx(h, g, _), firstRender: false };
  }, l.handleExited = function(h, m) {
    var g = Jh(this.props.children);
    h.key in g || (h.props.onExited && h.props.onExited(m), this.mounted && this.setState(function(_) {
      var b = Cc({}, _.children);
      return delete b[h.key], { children: b };
    }));
  }, l.render = function() {
    var h = this.props, m = h.component, g = h.childFactory, _ = o_(h, ["component", "childFactory"]), b = this.state.contextValue, S = Vx(this.state.children).map(g);
    return delete _.appear, delete _.enter, delete _.exit, m === null ? En.createElement(Oc.Provider, { value: b }, S) : En.createElement(Oc.Provider, { value: b }, En.createElement(m, _, S));
  }, s;
}(En.Component);
tp.propTypes = {};
tp.defaultProps = Yx;
const Gv = {};
function s_(a3, s) {
  const l = O.useRef(Gv);
  return l.current === Gv && (l.current = a3(s)), l;
}
const Xx = [];
function Kx(a3) {
  O.useEffect(a3, Xx);
}
class ep {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    __publicField(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ep();
  }
  start(s, l) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, l();
    }, s);
  }
}
function l_() {
  const a3 = s_(ep.create).current;
  return Kx(a3.disposeEffect), a3;
}
const u_ = (a3) => a3.scrollTop;
function Ac(a3, s) {
  const { timeout: l, easing: c, style: h = {} } = a3;
  return { duration: h.transitionDuration ?? (typeof l == "number" ? l : l[s.mode] || 0), easing: h.transitionTimingFunction ?? (typeof c == "object" ? c[s.mode] : c), delay: h.transitionDelay };
}
function Qx(a3) {
  return Qe("MuiPaper", a3);
}
Be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Fx = (a3) => {
  const { square: s, elevation: l, variant: c, classes: h } = a3, m = { root: ["root", c, !s && "rounded", c === "elevation" && `elevation${l}`] };
  return Fe(m, Qx, h);
}, Wx = Bt("div", { name: "MuiPaper", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, s[l.variant], !l.square && s.rounded, l.variant === "elevation" && s[`elevation${l.elevation}`]];
} })(tn(({ theme: a3 }) => ({ backgroundColor: (a3.vars || a3).palette.background.paper, color: (a3.vars || a3).palette.text.primary, transition: a3.transitions.create("box-shadow"), variants: [{ props: ({ ownerState: s }) => !s.square, style: { borderRadius: a3.shape.borderRadius } }, { props: { variant: "outlined" }, style: { border: `1px solid ${(a3.vars || a3).palette.divider}` } }, { props: { variant: "elevation" }, style: { boxShadow: "var(--Paper-shadow)", backgroundImage: "var(--Paper-overlay)" } }] }))), Jx = O.forwardRef(function(s, l) {
  var _a;
  const c = en({ props: s, name: "MuiPaper" }), h = hs(), { className: m, component: g = "div", elevation: _ = 1, square: b = false, variant: S = "elevation", ...w } = c, E = { ...c, component: g, elevation: _, square: b, variant: S }, R = Fx(E);
  return Y.jsx(Wx, { as: g, ownerState: E, className: Ft(R.root, m), ref: l, ...w, style: { ...S === "elevation" && { "--Paper-shadow": (h.vars || h).shadows[_], ...h.vars && { "--Paper-overlay": (_a = h.vars.overlays) == null ? void 0 : _a[_] }, ...!h.vars && h.palette.mode === "dark" && { "--Paper-overlay": `linear-gradient(${In("#fff", mh(_))}, ${In("#fff", mh(_))})` } }, ...w.style } });
});
function tT(a3) {
  return typeof a3 == "string";
}
function c_(a3, s, l) {
  return a3 === void 0 || tT(a3) ? s : { ...s, ownerState: { ...s.ownerState, ...l } };
}
function f_(a3, s, l) {
  return typeof a3 == "function" ? a3(s, l) : a3;
}
function d_(a3, s = []) {
  if (a3 === void 0) return {};
  const l = {};
  return Object.keys(a3).filter((c) => c.match(/^on[A-Z]/) && typeof a3[c] == "function" && !s.includes(c)).forEach((c) => {
    l[c] = a3[c];
  }), l;
}
function Vv(a3) {
  if (a3 === void 0) return {};
  const s = {};
  return Object.keys(a3).filter((l) => !(l.match(/^on[A-Z]/) && typeof a3[l] == "function")).forEach((l) => {
    s[l] = a3[l];
  }), s;
}
function h_(a3) {
  const { getSlotProps: s, additionalProps: l, externalSlotProps: c, externalForwardedProps: h, className: m } = a3;
  if (!s) {
    const D = Ft(l == null ? void 0 : l.className, m, h == null ? void 0 : h.className, c == null ? void 0 : c.className), N = { ...l == null ? void 0 : l.style, ...h == null ? void 0 : h.style, ...c == null ? void 0 : c.style }, A = { ...l, ...h, ...c };
    return D.length > 0 && (A.className = D), Object.keys(N).length > 0 && (A.style = N), { props: A, internalRef: void 0 };
  }
  const g = d_({ ...h, ...c }), _ = Vv(c), b = Vv(h), S = s(g), w = Ft(S == null ? void 0 : S.className, l == null ? void 0 : l.className, m, h == null ? void 0 : h.className, c == null ? void 0 : c.className), E = { ...S == null ? void 0 : S.style, ...l == null ? void 0 : l.style, ...h == null ? void 0 : h.style, ...c == null ? void 0 : c.style }, R = { ...S, ...l, ...b, ..._ };
  return w.length > 0 && (R.className = w), Object.keys(E).length > 0 && (R.style = E), { props: R, internalRef: S.ref };
}
function Wi(a3, s) {
  const { className: l, elementType: c, ownerState: h, externalForwardedProps: m, internalForwardedProps: g, shouldForwardComponentProp: _ = false, ...b } = s, { component: S, slots: w = { [a3]: void 0 }, slotProps: E = { [a3]: void 0 }, ...R } = m, D = w[a3] || c, N = f_(E[a3], h), { props: { component: A, ...$ }, internalRef: q } = h_({ className: l, ...b, externalForwardedProps: a3 === "root" ? R : void 0, externalSlotProps: N }), tt = Bn(q, N == null ? void 0 : N.ref, s.ref), k = a3 === "root" ? A || S : A, U = c_(D, { ...a3 === "root" && !S && !w[a3] && g, ...a3 !== "root" && !w[a3] && g, ...$, ...k && !_ && { as: k }, ...k && _ && { component: k }, ref: tt }, h);
  return [D, U];
}
function Yv(a3) {
  try {
    return a3.matches(":focus-visible");
  } catch {
  }
  return false;
}
class Rc {
  constructor() {
    __publicField(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
    });
    this.ref = { current: null }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  static create() {
    return new Rc();
  }
  static use() {
    const s = s_(Rc.create).current, [l, c] = O.useState(false);
    return s.shouldMount = l, s.setShouldMount = c, O.useEffect(s.mountEffect, [l]), s;
  }
  mount() {
    return this.mounted || (this.mounted = nT(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  start(...s) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.start(...s);
    });
  }
  stop(...s) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.stop(...s);
    });
  }
  pulsate(...s) {
    this.mount().then(() => {
      var _a;
      return (_a = this.ref.current) == null ? void 0 : _a.pulsate(...s);
    });
  }
}
function eT() {
  return Rc.use();
}
function nT() {
  let a3, s;
  const l = new Promise((c, h) => {
    a3 = c, s = h;
  });
  return l.resolve = a3, l.reject = s, l;
}
function iT(a3) {
  const { className: s, classes: l, pulsate: c = false, rippleX: h, rippleY: m, rippleSize: g, in: _, onExited: b, timeout: S } = a3, [w, E] = O.useState(false), R = Ft(s, l.ripple, l.rippleVisible, c && l.ripplePulsate), D = { width: g, height: g, top: -(g / 2) + m, left: -(g / 2) + h }, N = Ft(l.child, w && l.childLeaving, c && l.childPulsate);
  return !_ && !w && E(true), O.useEffect(() => {
    if (!_ && b != null) {
      const A = setTimeout(b, S);
      return () => {
        clearTimeout(A);
      };
    }
  }, [b, _, S]), Y.jsx("span", { className: R, style: D, children: Y.jsx("span", { className: N }) });
}
const vi = Be("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Sh = 550, aT = 80, oT = Nl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, rT = Nl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, sT = Nl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, lT = Bt("span", { name: "MuiTouchRipple", slot: "Root" })({ overflow: "hidden", pointerEvents: "none", position: "absolute", zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: "inherit" }), uT = Bt(iT, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${vi.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${oT};
    animation-duration: ${Sh}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  &.${vi.ripplePulsate} {
    animation-duration: ${({ theme: a3 }) => a3.transitions.duration.shorter}ms;
  }

  & .${vi.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${vi.childLeaving} {
    opacity: 0;
    animation-name: ${rT};
    animation-duration: ${Sh}ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
  }

  & .${vi.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${sT};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: a3 }) => a3.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, cT = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiTouchRipple" }), { center: h = false, classes: m = {}, className: g, ..._ } = c, [b, S] = O.useState([]), w = O.useRef(0), E = O.useRef(null);
  O.useEffect(() => {
    E.current && (E.current(), E.current = null);
  }, [b]);
  const R = O.useRef(false), D = l_(), N = O.useRef(null), A = O.useRef(null), $ = O.useCallback((U) => {
    const { pulsate: B, rippleX: J, rippleY: ot, rippleSize: et, cb: dt } = U;
    S((C) => [...C, Y.jsx(uT, { classes: { ripple: Ft(m.ripple, vi.ripple), rippleVisible: Ft(m.rippleVisible, vi.rippleVisible), ripplePulsate: Ft(m.ripplePulsate, vi.ripplePulsate), child: Ft(m.child, vi.child), childLeaving: Ft(m.childLeaving, vi.childLeaving), childPulsate: Ft(m.childPulsate, vi.childPulsate) }, timeout: Sh, pulsate: B, rippleX: J, rippleY: ot, rippleSize: et }, w.current)]), w.current += 1, E.current = dt;
  }, [m]), q = O.useCallback((U = {}, B = {}, J = () => {
  }) => {
    const { pulsate: ot = false, center: et = h || B.pulsate, fakeElement: dt = false } = B;
    if ((U == null ? void 0 : U.type) === "mousedown" && R.current) {
      R.current = false;
      return;
    }
    (U == null ? void 0 : U.type) === "touchstart" && (R.current = true);
    const C = dt ? null : A.current, Q = C ? C.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    let rt, bt, yt;
    if (et || U === void 0 || U.clientX === 0 && U.clientY === 0 || !U.clientX && !U.touches) rt = Math.round(Q.width / 2), bt = Math.round(Q.height / 2);
    else {
      const { clientX: vt, clientY: H } = U.touches && U.touches.length > 0 ? U.touches[0] : U;
      rt = Math.round(vt - Q.left), bt = Math.round(H - Q.top);
    }
    if (et) yt = Math.sqrt((2 * Q.width ** 2 + Q.height ** 2) / 3), yt % 2 === 0 && (yt += 1);
    else {
      const vt = Math.max(Math.abs((C ? C.clientWidth : 0) - rt), rt) * 2 + 2, H = Math.max(Math.abs((C ? C.clientHeight : 0) - bt), bt) * 2 + 2;
      yt = Math.sqrt(vt ** 2 + H ** 2);
    }
    (U == null ? void 0 : U.touches) ? N.current === null && (N.current = () => {
      $({ pulsate: ot, rippleX: rt, rippleY: bt, rippleSize: yt, cb: J });
    }, D.start(aT, () => {
      N.current && (N.current(), N.current = null);
    })) : $({ pulsate: ot, rippleX: rt, rippleY: bt, rippleSize: yt, cb: J });
  }, [h, $, D]), tt = O.useCallback(() => {
    q({}, { pulsate: true });
  }, [q]), k = O.useCallback((U, B) => {
    if (D.clear(), (U == null ? void 0 : U.type) === "touchend" && N.current) {
      N.current(), N.current = null, D.start(0, () => {
        k(U, B);
      });
      return;
    }
    N.current = null, S((J) => J.length > 0 ? J.slice(1) : J), E.current = B;
  }, [D]);
  return O.useImperativeHandle(l, () => ({ pulsate: tt, start: q, stop: k }), [tt, q, k]), Y.jsx(lT, { className: Ft(vi.root, m.root, g), ref: A, ..._, children: Y.jsx(tp, { component: null, exit: true, children: b }) });
});
function fT(a3) {
  return Qe("MuiButtonBase", a3);
}
const dT = Be("MuiButtonBase", ["root", "disabled", "focusVisible"]), hT = (a3) => {
  const { disabled: s, focusVisible: l, focusVisibleClassName: c, classes: h } = a3, g = Fe({ root: ["root", s && "disabled", l && "focusVisible"] }, fT, h);
  return l && c && (g.root += ` ${c}`), g;
}, pT = Bt("button", { name: "MuiButtonBase", slot: "Root" })({ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", textDecoration: "none", color: "inherit", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${dT.disabled}`]: { pointerEvents: "none", cursor: "default" }, "@media print": { colorAdjust: "exact" } }), np = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiButtonBase" }), { action: h, centerRipple: m = false, children: g, className: _, component: b = "button", disabled: S = false, disableRipple: w = false, disableTouchRipple: E = false, focusRipple: R = false, focusVisibleClassName: D, LinkComponent: N = "a", onBlur: A, onClick: $, onContextMenu: q, onDragLeave: tt, onFocus: k, onFocusVisible: U, onKeyDown: B, onKeyUp: J, onMouseDown: ot, onMouseLeave: et, onMouseUp: dt, onTouchEnd: C, onTouchMove: Q, onTouchStart: rt, tabIndex: bt = 0, TouchRippleProps: yt, touchRippleRef: vt, type: H, ...st } = c, it = O.useRef(null), ht = eT(), M = Bn(ht.ref, vt), [K, ut] = O.useState(false);
  S && K && ut(false), O.useImperativeHandle(h, () => ({ focusVisible: () => {
    ut(true), it.current.focus();
  } }), []);
  const ct = ht.shouldMount && !w && !S;
  O.useEffect(() => {
    K && R && !w && ht.pulsate();
  }, [w, R, K, ht]);
  const mt = Aa(ht, "start", ot, E), _t = Aa(ht, "stop", q, E), gt = Aa(ht, "stop", tt, E), Nt = Aa(ht, "stop", dt, E), Lt = Aa(ht, "stop", (wt) => {
    K && wt.preventDefault(), et && et(wt);
  }, E), le = Aa(ht, "start", rt, E), Dt = Aa(ht, "stop", C, E), Gt = Aa(ht, "stop", Q, E), It = Aa(ht, "stop", (wt) => {
    Yv(wt.target) || ut(false), A && A(wt);
  }, false), Oe = cr((wt) => {
    it.current || (it.current = wt.currentTarget), Yv(wt.target) && (ut(true), U && U(wt)), k && k(wt);
  }), Zt = () => {
    const wt = it.current;
    return b && b !== "button" && !(wt.tagName === "A" && wt.href);
  }, ue = cr((wt) => {
    R && !wt.repeat && K && wt.key === " " && ht.stop(wt, () => {
      ht.start(wt);
    }), wt.target === wt.currentTarget && Zt() && wt.key === " " && wt.preventDefault(), B && B(wt), wt.target === wt.currentTarget && Zt() && wt.key === "Enter" && !S && (wt.preventDefault(), $ && $(wt));
  }), nn = cr((wt) => {
    R && wt.key === " " && K && !wt.defaultPrevented && ht.stop(wt, () => {
      ht.pulsate(wt);
    }), J && J(wt), $ && wt.target === wt.currentTarget && Zt() && wt.key === " " && !wt.defaultPrevented && $(wt);
  });
  let ie = b;
  ie === "button" && (st.href || st.to) && (ie = N);
  const _e = {};
  ie === "button" ? (_e.type = H === void 0 ? "button" : H, _e.disabled = S) : (!st.href && !st.to && (_e.role = "button"), S && (_e["aria-disabled"] = S));
  const Me = Bn(l, it), Ae = { ...c, centerRipple: m, component: b, disabled: S, disableRipple: w, disableTouchRipple: E, focusRipple: R, tabIndex: bt, focusVisible: K }, ce = hT(Ae);
  return Y.jsxs(pT, { as: ie, className: Ft(ce.root, _), ownerState: Ae, onBlur: It, onClick: $, onContextMenu: _t, onFocus: Oe, onKeyDown: ue, onKeyUp: nn, onMouseDown: mt, onMouseLeave: Lt, onMouseUp: Nt, onDragLeave: gt, onTouchEnd: Dt, onTouchMove: Gt, onTouchStart: le, ref: Me, tabIndex: S ? -1 : bt, type: H, ..._e, ...st, children: [g, ct ? Y.jsx(cT, { ref: M, center: m, ...yt }) : null] });
});
function Aa(a3, s, l, c = false) {
  return cr((h) => (l && l(h), c || a3[s](h), true));
}
function mT(a3) {
  return typeof a3.main == "string";
}
function gT(a3, s = []) {
  if (!mT(a3)) return false;
  for (const l of s) if (!a3.hasOwnProperty(l) || typeof a3[l] != "string") return false;
  return true;
}
function Ro(a3 = []) {
  return ([, s]) => s && gT(s, a3);
}
function vT(a3) {
  return Qe("MuiCircularProgress", a3);
}
Be("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Mo = 44, xh = Nl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Th = Nl`
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
`, yT = typeof xh != "string" ? Dh`
        animation: ${xh} 1.4s linear infinite;
      ` : null, _T = typeof Th != "string" ? Dh`
        animation: ${Th} 1.4s ease-in-out infinite;
      ` : null, bT = (a3) => {
  const { classes: s, variant: l, color: c, disableShrink: h } = a3, m = { root: ["root", l, `color${qt(c)}`], svg: ["svg"], circle: ["circle", `circle${qt(l)}`, h && "circleDisableShrink"] };
  return Fe(m, vT, s);
}, ST = Bt("span", { name: "MuiCircularProgress", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, s[l.variant], s[`color${qt(l.color)}`]];
} })(tn(({ theme: a3 }) => ({ display: "inline-block", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("transform") } }, { props: { variant: "indeterminate" }, style: yT || { animation: `${xh} 1.4s linear infinite` } }, ...Object.entries(a3.palette).filter(Ro()).map(([s]) => ({ props: { color: s }, style: { color: (a3.vars || a3).palette[s].main } }))] }))), xT = Bt("svg", { name: "MuiCircularProgress", slot: "Svg" })({ display: "block" }), TT = Bt("circle", { name: "MuiCircularProgress", slot: "Circle", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.circle, s[`circle${qt(l.variant)}`], l.disableShrink && s.circleDisableShrink];
} })(tn(({ theme: a3 }) => ({ stroke: "currentColor", variants: [{ props: { variant: "determinate" }, style: { transition: a3.transitions.create("stroke-dashoffset") } }, { props: { variant: "indeterminate" }, style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 } }, { props: ({ ownerState: s }) => s.variant === "indeterminate" && !s.disableShrink, style: _T || { animation: `${Th} 1.4s ease-in-out infinite` } }] }))), p_ = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiCircularProgress" }), { className: h, color: m = "primary", disableShrink: g = false, size: _ = 40, style: b, thickness: S = 3.6, value: w = 0, variant: E = "indeterminate", ...R } = c, D = { ...c, color: m, disableShrink: g, size: _, thickness: S, value: w, variant: E }, N = bT(D), A = {}, $ = {}, q = {};
  if (E === "determinate") {
    const tt = 2 * Math.PI * ((Mo - S) / 2);
    A.strokeDasharray = tt.toFixed(3), q["aria-valuenow"] = Math.round(w), A.strokeDashoffset = `${((100 - w) / 100 * tt).toFixed(3)}px`, $.transform = "rotate(-90deg)";
  }
  return Y.jsx(ST, { className: Ft(N.root, h), style: { width: _, height: _, ...$, ...b }, ownerState: D, ref: l, role: "progressbar", ...q, ...R, children: Y.jsx(xT, { className: N.svg, ownerState: D, viewBox: `${Mo / 2} ${Mo / 2} ${Mo} ${Mo}`, children: Y.jsx(TT, { className: N.circle, style: A, ownerState: D, cx: Mo, cy: Mo, r: (Mo - S) / 2, fill: "none", strokeWidth: S }) }) });
});
function CT(a3) {
  return Qe("MuiIconButton", a3);
}
const Xv = Be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), wT = (a3) => {
  const { classes: s, disabled: l, color: c, edge: h, size: m, loading: g } = a3, _ = { root: ["root", g && "loading", l && "disabled", c !== "default" && `color${qt(c)}`, h && `edge${qt(h)}`, `size${qt(m)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] };
  return Fe(_, CT, s);
}, ET = Bt(np, { name: "MuiIconButton", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, l.loading && s.loading, l.color !== "default" && s[`color${qt(l.color)}`], l.edge && s[`edge${qt(l.edge)}`], s[`size${qt(l.size)}`]];
} })(tn(({ theme: a3 }) => ({ textAlign: "center", flex: "0 0 auto", fontSize: a3.typography.pxToRem(24), padding: 8, borderRadius: "50%", color: (a3.vars || a3).palette.action.active, transition: a3.transitions.create("background-color", { duration: a3.transitions.duration.shortest }), variants: [{ props: (s) => !s.disableRipple, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${a3.vars.palette.action.activeChannel} / ${a3.vars.palette.action.hoverOpacity})` : In(a3.palette.action.active, a3.palette.action.hoverOpacity), "&:hover": { backgroundColor: "var(--IconButton-hoverBg)", "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: { edge: "start" }, style: { marginLeft: -12 } }, { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: { edge: "end" }, style: { marginRight: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }] })), tn(({ theme: a3 }) => ({ variants: [{ props: { color: "inherit" }, style: { color: "inherit" } }, ...Object.entries(a3.palette).filter(Ro()).map(([s]) => ({ props: { color: s }, style: { color: (a3.vars || a3).palette[s].main } })), ...Object.entries(a3.palette).filter(Ro()).map(([s]) => ({ props: { color: s }, style: { "--IconButton-hoverBg": a3.vars ? `rgba(${(a3.vars || a3).palette[s].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : In((a3.vars || a3).palette[s].main, a3.palette.action.hoverOpacity) } })), { props: { size: "small" }, style: { padding: 5, fontSize: a3.typography.pxToRem(18) } }, { props: { size: "large" }, style: { padding: 12, fontSize: a3.typography.pxToRem(28) } }], [`&.${Xv.disabled}`]: { backgroundColor: "transparent", color: (a3.vars || a3).palette.action.disabled }, [`&.${Xv.loading}`]: { color: "transparent" } }))), MT = Bt("span", { name: "MuiIconButton", slot: "LoadingIndicator" })(({ theme: a3 }) => ({ display: "none", position: "absolute", visibility: "visible", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: (a3.vars || a3).palette.action.disabled, variants: [{ props: { loading: true }, style: { display: "flex" } }] })), m_ = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiIconButton" }), { edge: h = false, children: m, className: g, color: _ = "default", disabled: b = false, disableFocusRipple: S = false, size: w = "medium", id: E, loading: R = null, loadingIndicator: D, ...N } = c, A = Wh(E), $ = D ?? Y.jsx(p_, { "aria-labelledby": A, color: "inherit", size: 16 }), q = { ...c, edge: h, color: _, disabled: b, disableFocusRipple: S, loading: R, loadingIndicator: $, size: w }, tt = wT(q);
  return Y.jsxs(ET, { id: R ? A : E, className: Ft(tt.root, g), centerRipple: true, focusRipple: !S, disabled: b || R, ref: l, ...N, ownerState: q, children: [typeof R == "boolean" && Y.jsx("span", { className: tt.loadingWrapper, style: { display: "contents" }, children: Y.jsx(MT, { className: tt.loadingIndicator, ownerState: q, children: R && $ }) }), m] });
});
function OT(a3) {
  return Qe("MuiTypography", a3);
}
Be("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const AT = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, RT = Px(), LT = (a3) => {
  const { align: s, gutterBottom: l, noWrap: c, paragraph: h, variant: m, classes: g } = a3, _ = { root: ["root", m, a3.align !== "inherit" && `align${qt(s)}`, l && "gutterBottom", c && "noWrap", h && "paragraph"] };
  return Fe(_, OT, g);
}, zT = Bt("span", { name: "MuiTypography", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, l.variant && s[l.variant], l.align !== "inherit" && s[`align${qt(l.align)}`], l.noWrap && s.noWrap, l.gutterBottom && s.gutterBottom, l.paragraph && s.paragraph];
} })(tn(({ theme: a3 }) => {
  var _a;
  return { margin: 0, variants: [{ props: { variant: "inherit" }, style: { font: "inherit", lineHeight: "inherit", letterSpacing: "inherit" } }, ...Object.entries(a3.typography).filter(([s, l]) => s !== "inherit" && l && typeof l == "object").map(([s, l]) => ({ props: { variant: s }, style: l })), ...Object.entries(a3.palette).filter(Ro()).map(([s]) => ({ props: { color: s }, style: { color: (a3.vars || a3).palette[s].main } })), ...Object.entries(((_a = a3.palette) == null ? void 0 : _a.text) || {}).filter(([, s]) => typeof s == "string").map(([s]) => ({ props: { color: `text${qt(s)}` }, style: { color: (a3.vars || a3).palette.text[s] } })), { props: ({ ownerState: s }) => s.align !== "inherit", style: { textAlign: "var(--Typography-textAlign)" } }, { props: ({ ownerState: s }) => s.noWrap, style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, { props: ({ ownerState: s }) => s.gutterBottom, style: { marginBottom: "0.35em" } }, { props: ({ ownerState: s }) => s.paragraph, style: { marginBottom: 16 } }] };
})), Kv = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", subtitle1: "h6", subtitle2: "h6", body1: "p", body2: "p", inherit: "p" }, fr = O.forwardRef(function(s, l) {
  const { color: c, ...h } = en({ props: s, name: "MuiTypography" }), m = !AT[c], g = RT({ ...h, ...m && { color: c } }), { align: _ = "inherit", className: b, component: S, gutterBottom: w = false, noWrap: E = false, paragraph: R = false, variant: D = "body1", variantMapping: N = Kv, ...A } = g, $ = { ...g, align: _, color: c, className: b, component: S, gutterBottom: w, noWrap: E, paragraph: R, variant: D, variantMapping: N }, q = S || (R ? "p" : N[D] || Kv[D]) || "span", tt = LT($);
  return Y.jsx(zT, { as: q, ref: l, className: Ft(tt.root, b), ...A, ownerState: $, style: { ..._ !== "inherit" && { "--Typography-textAlign": _ }, ...A.style } });
});
function PT(a3) {
  var _a;
  const { elementType: s, externalSlotProps: l, ownerState: c, skipResolvingSlotProps: h = false, ...m } = a3, g = h ? {} : f_(l, c), { props: _, internalRef: b } = h_({ ...m, externalSlotProps: g }), S = Bn(b, g == null ? void 0 : g.ref, (_a = a3.additionalProps) == null ? void 0 : _a.ref);
  return c_(s, { ..._, ref: S }, c);
}
function Zl(a3) {
  var _a;
  return parseInt(O.version, 10) >= 19 ? ((_a = a3 == null ? void 0 : a3.props) == null ? void 0 : _a.ref) || null : (a3 == null ? void 0 : a3.ref) || null;
}
function BT(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
const kT = O.forwardRef(function(s, l) {
  const { children: c, container: h, disablePortal: m = false } = s, [g, _] = O.useState(null), b = Bn(O.isValidElement(c) ? Zl(c) : null, l);
  if (Pa(() => {
    m || _(BT(h) || document.body);
  }, [h, m]), Pa(() => {
    if (g && !m) return Zv(l, g), () => {
      Zv(l, null);
    };
  }, [l, g, m]), m) {
    if (O.isValidElement(c)) {
      const S = { ref: b };
      return O.cloneElement(c, S);
    }
    return c;
  }
  return g && qc.createPortal(c, g);
});
function vc(a3) {
  return parseInt(a3, 10) || 0;
}
const NT = { shadow: { visibility: "hidden", position: "absolute", overflow: "hidden", height: 0, top: 0, left: 0, transform: "translateZ(0)" } };
function DT(a3) {
  for (const s in a3) return false;
  return true;
}
function Qv(a3) {
  return DT(a3) || a3.outerHeightStyle === 0 && !a3.overflowing;
}
const HT = O.forwardRef(function(s, l) {
  const { onChange: c, maxRows: h, minRows: m = 1, style: g, value: _, ...b } = s, { current: S } = O.useRef(_ != null), w = O.useRef(null), E = Bn(l, w), R = O.useRef(null), D = O.useRef(null), N = O.useCallback(() => {
    const k = w.current, U = D.current;
    if (!k || !U) return;
    const J = Ba(k).getComputedStyle(k);
    if (J.width === "0px") return { outerHeightStyle: 0, overflowing: false };
    U.style.width = J.width, U.value = k.value || s.placeholder || "x", U.value.slice(-1) === `
` && (U.value += " ");
    const ot = J.boxSizing, et = vc(J.paddingBottom) + vc(J.paddingTop), dt = vc(J.borderBottomWidth) + vc(J.borderTopWidth), C = U.scrollHeight;
    U.value = "x";
    const Q = U.scrollHeight;
    let rt = C;
    m && (rt = Math.max(Number(m) * Q, rt)), h && (rt = Math.min(Number(h) * Q, rt)), rt = Math.max(rt, Q);
    const bt = rt + (ot === "border-box" ? et + dt : 0), yt = Math.abs(rt - C) <= 1;
    return { outerHeightStyle: bt, overflowing: yt };
  }, [h, m, s.placeholder]), A = cr(() => {
    const k = w.current, U = N();
    if (!k || !U || Qv(U)) return false;
    const B = U.outerHeightStyle;
    return R.current != null && R.current !== B;
  }), $ = O.useCallback(() => {
    const k = w.current, U = N();
    if (!k || !U || Qv(U)) return;
    const B = U.outerHeightStyle;
    R.current !== B && (R.current = B, k.style.height = `${B}px`), k.style.overflow = U.overflowing ? "hidden" : "";
  }, [N]), q = O.useRef(-1);
  Pa(() => {
    const k = a_($), U = w == null ? void 0 : w.current;
    if (!U) return;
    const B = Ba(U);
    B.addEventListener("resize", k);
    let J;
    return typeof ResizeObserver < "u" && (J = new ResizeObserver(() => {
      A() && (J.unobserve(U), cancelAnimationFrame(q.current), $(), q.current = requestAnimationFrame(() => {
        J.observe(U);
      }));
    }), J.observe(U)), () => {
      k.clear(), cancelAnimationFrame(q.current), B.removeEventListener("resize", k), J && J.disconnect();
    };
  }, [N, $, A]), Pa(() => {
    $();
  });
  const tt = (k) => {
    S || $();
    const U = k.target, B = U.value.length, J = U.value.endsWith(`
`), ot = U.selectionStart === B;
    J && ot && U.setSelectionRange(B, B), c && c(k);
  };
  return Y.jsxs(O.Fragment, { children: [Y.jsx("textarea", { value: _, onChange: tt, ref: E, rows: m, style: g, ...b }), Y.jsx("textarea", { "aria-hidden": true, className: s.className, readOnly: true, ref: D, tabIndex: -1, style: { ...NT.shadow, ...g, paddingTop: 0, paddingBottom: 0 } })] });
});
function Ch(a3) {
  return typeof a3 == "string";
}
function ip({ props: a3, states: s, muiFormControl: l }) {
  return s.reduce((c, h) => (c[h] = a3[h], l && typeof a3[h] > "u" && (c[h] = l[h]), c), {});
}
const g_ = O.createContext(void 0);
function ap() {
  return O.useContext(g_);
}
function Fv(a3) {
  return a3 != null && !(Array.isArray(a3) && a3.length === 0);
}
function v_(a3, s = false) {
  return a3 && (Fv(a3.value) && a3.value !== "" || s && Fv(a3.defaultValue) && a3.defaultValue !== "");
}
function UT(a3) {
  return Qe("MuiInputBase", a3);
}
const fs = Be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Wv;
const Gc = (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, l.formControl && s.formControl, l.startAdornment && s.adornedStart, l.endAdornment && s.adornedEnd, l.error && s.error, l.size === "small" && s.sizeSmall, l.multiline && s.multiline, l.color && s[`color${qt(l.color)}`], l.fullWidth && s.fullWidth, l.hiddenLabel && s.hiddenLabel];
}, Vc = (a3, s) => {
  const { ownerState: l } = a3;
  return [s.input, l.size === "small" && s.inputSizeSmall, l.multiline && s.inputMultiline, l.type === "search" && s.inputTypeSearch, l.startAdornment && s.inputAdornedStart, l.endAdornment && s.inputAdornedEnd, l.hiddenLabel && s.inputHiddenLabel];
}, ZT = (a3) => {
  const { classes: s, color: l, disabled: c, error: h, endAdornment: m, focused: g, formControl: _, fullWidth: b, hiddenLabel: S, multiline: w, readOnly: E, size: R, startAdornment: D, type: N } = a3, A = { root: ["root", `color${qt(l)}`, c && "disabled", h && "error", b && "fullWidth", g && "focused", _ && "formControl", R && R !== "medium" && `size${qt(R)}`, w && "multiline", D && "adornedStart", m && "adornedEnd", S && "hiddenLabel", E && "readOnly"], input: ["input", c && "disabled", N === "search" && "inputTypeSearch", w && "inputMultiline", R === "small" && "inputSizeSmall", S && "inputHiddenLabel", D && "inputAdornedStart", m && "inputAdornedEnd", E && "readOnly"] };
  return Fe(A, UT, s);
}, Yc = Bt("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Gc })(tn(({ theme: a3 }) => ({ ...a3.typography.body1, color: (a3.vars || a3).palette.text.primary, lineHeight: "1.4375em", boxSizing: "border-box", position: "relative", cursor: "text", display: "inline-flex", alignItems: "center", [`&.${fs.disabled}`]: { color: (a3.vars || a3).palette.text.disabled, cursor: "default" }, variants: [{ props: ({ ownerState: s }) => s.multiline, style: { padding: "4px 0 5px" } }, { props: ({ ownerState: s, size: l }) => s.multiline && l === "small", style: { paddingTop: 1 } }, { props: ({ ownerState: s }) => s.fullWidth, style: { width: "100%" } }] }))), Xc = Bt("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Vc })(tn(({ theme: a3 }) => {
  const s = a3.palette.mode === "light", l = { color: "currentColor", ...a3.vars ? { opacity: a3.vars.opacity.inputPlaceholder } : { opacity: s ? 0.42 : 0.5 }, transition: a3.transitions.create("opacity", { duration: a3.transitions.duration.shorter }) }, c = { opacity: "0 !important" }, h = a3.vars ? { opacity: a3.vars.opacity.inputPlaceholder } : { opacity: s ? 0.42 : 0.5 };
  return { font: "inherit", letterSpacing: "inherit", color: "currentColor", padding: "4px 0 5px", border: 0, boxSizing: "content-box", background: "none", height: "1.4375em", margin: 0, WebkitTapHighlightColor: "transparent", display: "block", minWidth: 0, width: "100%", "&::-webkit-input-placeholder": l, "&::-moz-placeholder": l, "&::-ms-input-placeholder": l, "&:focus": { outline: 0 }, "&:invalid": { boxShadow: "none" }, "&::-webkit-search-decoration": { WebkitAppearance: "none" }, [`label[data-shrink=false] + .${fs.formControl} &`]: { "&::-webkit-input-placeholder": c, "&::-moz-placeholder": c, "&::-ms-input-placeholder": c, "&:focus::-webkit-input-placeholder": h, "&:focus::-moz-placeholder": h, "&:focus::-ms-input-placeholder": h }, [`&.${fs.disabled}`]: { opacity: 1, WebkitTextFillColor: (a3.vars || a3).palette.text.disabled }, variants: [{ props: ({ ownerState: m }) => !m.disableInjectingGlobalStyles, style: { animationName: "mui-auto-fill-cancel", animationDuration: "10ms", "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" } } }, { props: { size: "small" }, style: { paddingTop: 1 } }, { props: ({ ownerState: m }) => m.multiline, style: { height: "auto", resize: "none", padding: 0, paddingTop: 0 } }, { props: { type: "search" }, style: { MozAppearance: "textfield" } }] };
})), Jv = zx({ "@keyframes mui-auto-fill": { from: { display: "block" } }, "@keyframes mui-auto-fill-cancel": { from: { display: "block" } } }), op = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiInputBase" }), { "aria-describedby": h, autoComplete: m, autoFocus: g, className: _, color: b, components: S = {}, componentsProps: w = {}, defaultValue: E, disabled: R, disableInjectingGlobalStyles: D, endAdornment: N, error: A, fullWidth: $ = false, id: q, inputComponent: tt = "input", inputProps: k = {}, inputRef: U, margin: B, maxRows: J, minRows: ot, multiline: et = false, name: dt, onBlur: C, onChange: Q, onClick: rt, onFocus: bt, onKeyDown: yt, onKeyUp: vt, placeholder: H, readOnly: st, renderSuffix: it, rows: ht, size: M, slotProps: K = {}, slots: ut = {}, startAdornment: ct, type: mt = "text", value: _t, ...gt } = c, Nt = k.value != null ? k.value : _t, { current: Lt } = O.useRef(Nt != null), le = O.useRef(), Dt = O.useCallback((oe) => {
  }, []), Gt = Bn(le, U, k.ref, Dt), [It, Oe] = O.useState(false), Zt = ap(), ue = ip({ props: c, muiFormControl: Zt, states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"] });
  ue.focused = Zt ? Zt.focused : It, O.useEffect(() => {
    !Zt && R && It && (Oe(false), C && C());
  }, [Zt, R, It, C]);
  const nn = Zt && Zt.onFilled, ie = Zt && Zt.onEmpty, _e = O.useCallback((oe) => {
    v_(oe) ? nn && nn() : ie && ie();
  }, [nn, ie]);
  Pa(() => {
    Lt && _e({ value: Nt });
  }, [Nt, _e, Lt]);
  const Me = (oe) => {
    bt && bt(oe), k.onFocus && k.onFocus(oe), Zt && Zt.onFocus ? Zt.onFocus(oe) : Oe(true);
  }, Ae = (oe) => {
    C && C(oe), k.onBlur && k.onBlur(oe), Zt && Zt.onBlur ? Zt.onBlur(oe) : Oe(false);
  }, ce = (oe, ...Ri) => {
    if (!Lt) {
      const Gn = oe.target || le.current;
      if (Gn == null) throw new Error(La(1));
      _e({ value: Gn.value });
    }
    k.onChange && k.onChange(oe, ...Ri), Q && Q(oe, ...Ri);
  };
  O.useEffect(() => {
    _e(le.current);
  }, []);
  const wt = (oe) => {
    le.current && oe.currentTarget === oe.target && le.current.focus(), rt && rt(oe);
  };
  let kn = tt, Ie = k;
  et && kn === "input" && (ht ? Ie = { type: void 0, minRows: ht, maxRows: ht, ...Ie } : Ie = { type: void 0, maxRows: J, minRows: ot, ...Ie }, kn = HT);
  const qn = (oe) => {
    _e(oe.animationName === "mui-auto-fill-cancel" ? le.current : { value: "x" });
  };
  O.useEffect(() => {
    Zt && Zt.setAdornedStart(!!ct);
  }, [Zt, ct]);
  const pe = { ...c, color: ue.color || "primary", disabled: ue.disabled, endAdornment: N, error: ue.error, focused: ue.focused, formControl: Zt, fullWidth: $, hiddenLabel: ue.hiddenLabel, multiline: et, size: ue.size, startAdornment: ct, type: mt }, Ht = ZT(pe), ae = ut.root || S.Root || Yc, te = K.root || w.root || {}, yn = ut.input || S.Input || Xc;
  return Ie = { ...Ie, ...K.input ?? w.input }, Y.jsxs(O.Fragment, { children: [!D && typeof Jv == "function" && (Wv || (Wv = Y.jsx(Jv, {}))), Y.jsxs(ae, { ...te, ref: l, onClick: wt, ...gt, ...!Ch(ae) && { ownerState: { ...pe, ...te.ownerState } }, className: Ft(Ht.root, te.className, _, st && "MuiInputBase-readOnly"), children: [ct, Y.jsx(g_.Provider, { value: null, children: Y.jsx(yn, { "aria-invalid": ue.error, "aria-describedby": h, autoComplete: m, autoFocus: g, defaultValue: E, disabled: ue.disabled, id: q, onAnimationStart: qn, name: dt, placeholder: H, readOnly: st, required: ue.required, rows: ht, value: Nt, onKeyDown: yt, onKeyUp: vt, type: mt, ...Ie, ...!Ch(yn) && { as: kn, ownerState: { ...pe, ...Ie.ownerState } }, ref: Gt, className: Ft(Ht.input, Ie.className, st && "MuiInputBase-readOnly"), onBlur: Ae, onChange: ce, onFocus: Me }) }), N, it ? it({ ...ue, startAdornment: ct }) : null] })] });
});
function jT(a3) {
  return Qe("MuiInput", a3);
}
const _l = { ...fs, ...Be("MuiInput", ["root", "underline", "input"]) };
function IT(a3) {
  return Qe("MuiOutlinedInput", a3);
}
const Gi = { ...fs, ...Be("MuiOutlinedInput", ["root", "notchedOutline", "input"]) };
function $T(a3) {
  return Qe("MuiFilledInput", a3);
}
const or = { ...fs, ...Be("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"]) }, qT = i_(Y.jsx("path", { d: "M7 10l5 5 5-5z" })), GT = { entering: { opacity: 1 }, entered: { opacity: 1 } }, VT = O.forwardRef(function(s, l) {
  const c = hs(), h = { enter: c.transitions.duration.enteringScreen, exit: c.transitions.duration.leavingScreen }, { addEndListener: m, appear: g = true, children: _, easing: b, in: S, onEnter: w, onEntered: E, onEntering: R, onExit: D, onExited: N, onExiting: A, style: $, timeout: q = h, TransitionComponent: tt = Ji, ...k } = s, U = O.useRef(null), B = Bn(U, Zl(_), l), J = (yt) => (vt) => {
    if (yt) {
      const H = U.current;
      vt === void 0 ? yt(H) : yt(H, vt);
    }
  }, ot = J(R), et = J((yt, vt) => {
    u_(yt);
    const H = Ac({ style: $, timeout: q, easing: b }, { mode: "enter" });
    yt.style.webkitTransition = c.transitions.create("opacity", H), yt.style.transition = c.transitions.create("opacity", H), w && w(yt, vt);
  }), dt = J(E), C = J(A), Q = J((yt) => {
    const vt = Ac({ style: $, timeout: q, easing: b }, { mode: "exit" });
    yt.style.webkitTransition = c.transitions.create("opacity", vt), yt.style.transition = c.transitions.create("opacity", vt), D && D(yt);
  }), rt = J(N), bt = (yt) => {
    m && m(U.current, yt);
  };
  return Y.jsx(tt, { appear: g, in: S, nodeRef: U, onEnter: et, onEntered: dt, onEntering: ot, onExit: Q, onExited: rt, onExiting: C, addEndListener: bt, timeout: q, ...k, children: (yt, { ownerState: vt, ...H }) => O.cloneElement(_, { style: { opacity: 0, visibility: yt === "exited" && !S ? "hidden" : void 0, ...GT[yt], ...$, ..._.props.style }, ref: B, ...H }) });
});
function YT(a3) {
  return Qe("MuiBackdrop", a3);
}
Be("MuiBackdrop", ["root", "invisible"]);
const XT = (a3) => {
  const { classes: s, invisible: l } = a3;
  return Fe({ root: ["root", l && "invisible"] }, YT, s);
}, KT = Bt("div", { name: "MuiBackdrop", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, l.invisible && s.invisible];
} })({ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", right: 0, bottom: 0, top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", WebkitTapHighlightColor: "transparent", variants: [{ props: { invisible: true }, style: { backgroundColor: "transparent" } }] }), QT = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiBackdrop" }), { children: h, className: m, component: g = "div", invisible: _ = false, open: b, components: S = {}, componentsProps: w = {}, slotProps: E = {}, slots: R = {}, TransitionComponent: D, transitionDuration: N, ...A } = c, $ = { ...c, component: g, invisible: _ }, q = XT($), tt = { transition: D, root: S.Root, ...R }, k = { ...w, ...E }, U = { slots: tt, slotProps: k }, [B, J] = Wi("root", { elementType: KT, externalForwardedProps: U, className: Ft(q.root, m), ownerState: $ }), [ot, et] = Wi("transition", { elementType: VT, externalForwardedProps: U, ownerState: $ });
  return Y.jsx(ot, { in: b, timeout: N, ...A, ...et, children: Y.jsx(B, { "aria-hidden": true, ...J, classes: q, ref: l, children: h }) });
}), FT = Be("MuiBox", ["root"]), WT = Ic(), Ki = fS({ themeId: Qi, defaultTheme: WT, defaultClassName: FT.root, generateClassName: Zy.generate });
function JT(a3) {
  return Qe("MuiButton", a3);
}
const rr = Be("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), tC = O.createContext({}), eC = O.createContext(void 0), nC = (a3) => {
  const { color: s, disableElevation: l, fullWidth: c, size: h, variant: m, loading: g, loadingPosition: _, classes: b } = a3, S = { root: ["root", g && "loading", m, `${m}${qt(s)}`, `size${qt(h)}`, `${m}Size${qt(h)}`, `color${qt(s)}`, l && "disableElevation", c && "fullWidth", g && `loadingPosition${qt(_)}`], startIcon: ["icon", "startIcon", `iconSize${qt(h)}`], endIcon: ["icon", "endIcon", `iconSize${qt(h)}`], loadingIndicator: ["loadingIndicator"], loadingWrapper: ["loadingWrapper"] }, w = Fe(S, JT, b);
  return { ...b, ...w };
}, y_ = [{ props: { size: "small" }, style: { "& > *:nth-of-type(1)": { fontSize: 18 } } }, { props: { size: "medium" }, style: { "& > *:nth-of-type(1)": { fontSize: 20 } } }, { props: { size: "large" }, style: { "& > *:nth-of-type(1)": { fontSize: 22 } } }], iC = Bt(np, { shouldForwardProp: (a3) => Ai(a3) || a3 === "classes", name: "MuiButton", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, s[l.variant], s[`${l.variant}${qt(l.color)}`], s[`size${qt(l.size)}`], s[`${l.variant}Size${qt(l.size)}`], l.color === "inherit" && s.colorInherit, l.disableElevation && s.disableElevation, l.fullWidth && s.fullWidth, l.loading && s.loading];
} })(tn(({ theme: a3 }) => {
  const s = a3.palette.mode === "light" ? a3.palette.grey[300] : a3.palette.grey[800], l = a3.palette.mode === "light" ? a3.palette.grey.A100 : a3.palette.grey[700];
  return { ...a3.typography.button, minWidth: 64, padding: "6px 16px", border: 0, borderRadius: (a3.vars || a3).shape.borderRadius, transition: a3.transitions.create(["background-color", "box-shadow", "border-color", "color"], { duration: a3.transitions.duration.short }), "&:hover": { textDecoration: "none" }, [`&.${rr.disabled}`]: { color: (a3.vars || a3).palette.action.disabled }, variants: [{ props: { variant: "contained" }, style: { color: "var(--variant-containedColor)", backgroundColor: "var(--variant-containedBg)", boxShadow: (a3.vars || a3).shadows[2], "&:hover": { boxShadow: (a3.vars || a3).shadows[4], "@media (hover: none)": { boxShadow: (a3.vars || a3).shadows[2] } }, "&:active": { boxShadow: (a3.vars || a3).shadows[8] }, [`&.${rr.focusVisible}`]: { boxShadow: (a3.vars || a3).shadows[6] }, [`&.${rr.disabled}`]: { color: (a3.vars || a3).palette.action.disabled, boxShadow: (a3.vars || a3).shadows[0], backgroundColor: (a3.vars || a3).palette.action.disabledBackground } } }, { props: { variant: "outlined" }, style: { padding: "5px 15px", border: "1px solid currentColor", borderColor: "var(--variant-outlinedBorder, currentColor)", backgroundColor: "var(--variant-outlinedBg)", color: "var(--variant-outlinedColor)", [`&.${rr.disabled}`]: { border: `1px solid ${(a3.vars || a3).palette.action.disabledBackground}` } } }, { props: { variant: "text" }, style: { padding: "6px 8px", color: "var(--variant-textColor)", backgroundColor: "var(--variant-textBg)" } }, ...Object.entries(a3.palette).filter(Ro()).map(([c]) => ({ props: { color: c }, style: { "--variant-textColor": (a3.vars || a3).palette[c].main, "--variant-outlinedColor": (a3.vars || a3).palette[c].main, "--variant-outlinedBorder": a3.vars ? `rgba(${a3.vars.palette[c].mainChannel} / 0.5)` : In(a3.palette[c].main, 0.5), "--variant-containedColor": (a3.vars || a3).palette[c].contrastText, "--variant-containedBg": (a3.vars || a3).palette[c].main, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": (a3.vars || a3).palette[c].dark, "--variant-textBg": a3.vars ? `rgba(${a3.vars.palette[c].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : In(a3.palette[c].main, a3.palette.action.hoverOpacity), "--variant-outlinedBorder": (a3.vars || a3).palette[c].main, "--variant-outlinedBg": a3.vars ? `rgba(${a3.vars.palette[c].mainChannel} / ${a3.vars.palette.action.hoverOpacity})` : In(a3.palette[c].main, a3.palette.action.hoverOpacity) } } } })), { props: { color: "inherit" }, style: { color: "inherit", borderColor: "currentColor", "--variant-containedBg": a3.vars ? a3.vars.palette.Button.inheritContainedBg : s, "@media (hover: hover)": { "&:hover": { "--variant-containedBg": a3.vars ? a3.vars.palette.Button.inheritContainedHoverBg : l, "--variant-textBg": a3.vars ? `rgba(${a3.vars.palette.text.primaryChannel} / ${a3.vars.palette.action.hoverOpacity})` : In(a3.palette.text.primary, a3.palette.action.hoverOpacity), "--variant-outlinedBg": a3.vars ? `rgba(${a3.vars.palette.text.primaryChannel} / ${a3.vars.palette.action.hoverOpacity})` : In(a3.palette.text.primary, a3.palette.action.hoverOpacity) } } } }, { props: { size: "small", variant: "text" }, style: { padding: "4px 5px", fontSize: a3.typography.pxToRem(13) } }, { props: { size: "large", variant: "text" }, style: { padding: "8px 11px", fontSize: a3.typography.pxToRem(15) } }, { props: { size: "small", variant: "outlined" }, style: { padding: "3px 9px", fontSize: a3.typography.pxToRem(13) } }, { props: { size: "large", variant: "outlined" }, style: { padding: "7px 21px", fontSize: a3.typography.pxToRem(15) } }, { props: { size: "small", variant: "contained" }, style: { padding: "4px 10px", fontSize: a3.typography.pxToRem(13) } }, { props: { size: "large", variant: "contained" }, style: { padding: "8px 22px", fontSize: a3.typography.pxToRem(15) } }, { props: { disableElevation: true }, style: { boxShadow: "none", "&:hover": { boxShadow: "none" }, [`&.${rr.focusVisible}`]: { boxShadow: "none" }, "&:active": { boxShadow: "none" }, [`&.${rr.disabled}`]: { boxShadow: "none" } } }, { props: { fullWidth: true }, style: { width: "100%" } }, { props: { loadingPosition: "center" }, style: { transition: a3.transitions.create(["background-color", "box-shadow", "border-color"], { duration: a3.transitions.duration.short }), [`&.${rr.loading}`]: { color: "transparent" } } }] };
})), aC = Bt("span", { name: "MuiButton", slot: "StartIcon", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.startIcon, l.loading && s.startIconLoadingStart, s[`iconSize${qt(l.size)}`]];
} })(({ theme: a3 }) => ({ display: "inherit", marginRight: 8, marginLeft: -4, variants: [{ props: { size: "small" }, style: { marginLeft: -2 } }, { props: { loadingPosition: "start", loading: true }, style: { transition: a3.transitions.create(["opacity"], { duration: a3.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "start", loading: true, fullWidth: true }, style: { marginRight: -8 } }, ...y_] })), oC = Bt("span", { name: "MuiButton", slot: "EndIcon", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.endIcon, l.loading && s.endIconLoadingEnd, s[`iconSize${qt(l.size)}`]];
} })(({ theme: a3 }) => ({ display: "inherit", marginRight: -4, marginLeft: 8, variants: [{ props: { size: "small" }, style: { marginRight: -2 } }, { props: { loadingPosition: "end", loading: true }, style: { transition: a3.transitions.create(["opacity"], { duration: a3.transitions.duration.short }), opacity: 0 } }, { props: { loadingPosition: "end", loading: true, fullWidth: true }, style: { marginLeft: -8 } }, ...y_] })), rC = Bt("span", { name: "MuiButton", slot: "LoadingIndicator" })(({ theme: a3 }) => ({ display: "none", position: "absolute", visibility: "visible", variants: [{ props: { loading: true }, style: { display: "flex" } }, { props: { loadingPosition: "start" }, style: { left: 14 } }, { props: { loadingPosition: "start", size: "small" }, style: { left: 10 } }, { props: { variant: "text", loadingPosition: "start" }, style: { left: 6 } }, { props: { loadingPosition: "center" }, style: { left: "50%", transform: "translate(-50%)", color: (a3.vars || a3).palette.action.disabled } }, { props: { loadingPosition: "end" }, style: { right: 14 } }, { props: { loadingPosition: "end", size: "small" }, style: { right: 10 } }, { props: { variant: "text", loadingPosition: "end" }, style: { right: 6 } }, { props: { loadingPosition: "start", fullWidth: true }, style: { position: "relative", left: -10 } }, { props: { loadingPosition: "end", fullWidth: true }, style: { position: "relative", right: -10 } }] })), ty = Bt("span", { name: "MuiButton", slot: "LoadingIconPlaceholder" })({ display: "inline-block", width: "1em", height: "1em" }), sC = O.forwardRef(function(s, l) {
  const c = O.useContext(tC), h = O.useContext(eC), m = Mc(c, s), g = en({ props: m, name: "MuiButton" }), { children: _, color: b = "primary", component: S = "button", className: w, disabled: E = false, disableElevation: R = false, disableFocusRipple: D = false, endIcon: N, focusVisibleClassName: A, fullWidth: $ = false, id: q, loading: tt = null, loadingIndicator: k, loadingPosition: U = "center", size: B = "medium", startIcon: J, type: ot, variant: et = "text", ...dt } = g, C = Wh(q), Q = k ?? Y.jsx(p_, { "aria-labelledby": C, color: "inherit", size: 16 }), rt = { ...g, color: b, component: S, disabled: E, disableElevation: R, disableFocusRipple: D, fullWidth: $, loading: tt, loadingIndicator: Q, loadingPosition: U, size: B, type: ot, variant: et }, bt = nC(rt), yt = (J || tt && U === "start") && Y.jsx(aC, { className: bt.startIcon, ownerState: rt, children: J || Y.jsx(ty, { className: bt.loadingIconPlaceholder, ownerState: rt }) }), vt = (N || tt && U === "end") && Y.jsx(oC, { className: bt.endIcon, ownerState: rt, children: N || Y.jsx(ty, { className: bt.loadingIconPlaceholder, ownerState: rt }) }), H = h || "", st = typeof tt == "boolean" ? Y.jsx("span", { className: bt.loadingWrapper, style: { display: "contents" }, children: tt && Y.jsx(rC, { className: bt.loadingIndicator, ownerState: rt, children: Q }) }) : null;
  return Y.jsxs(iC, { ownerState: rt, className: Ft(c.className, bt.root, w, H), component: S, disabled: E || tt, focusRipple: !D, focusVisibleClassName: Ft(bt.focusVisible, A), ref: l, type: ot, id: tt ? C : q, ...dt, classes: bt, children: [yt, U !== "end" && st, _, U === "end" && st, vt] });
});
function __(a3 = window) {
  const s = a3.document.documentElement.clientWidth;
  return a3.innerWidth - s;
}
function lC(a3) {
  const s = Oi(a3);
  return s.body === a3 ? Ba(a3).innerWidth > s.documentElement.clientWidth : a3.scrollHeight > a3.clientHeight;
}
function Ol(a3, s) {
  s ? a3.setAttribute("aria-hidden", "true") : a3.removeAttribute("aria-hidden");
}
function ey(a3) {
  return parseInt(Ba(a3).getComputedStyle(a3).paddingRight, 10) || 0;
}
function uC(a3) {
  const l = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(a3.tagName), c = a3.tagName === "INPUT" && a3.getAttribute("type") === "hidden";
  return l || c;
}
function ny(a3, s, l, c, h) {
  const m = [s, l, ...c];
  [].forEach.call(a3.children, (g) => {
    const _ = !m.includes(g), b = !uC(g);
    _ && b && Ol(g, h);
  });
}
function oh(a3, s) {
  let l = -1;
  return a3.some((c, h) => s(c) ? (l = h, true) : false), l;
}
function cC(a3, s) {
  const l = [], c = a3.container;
  if (!s.disableScrollLock) {
    if (lC(c)) {
      const g = __(Ba(c));
      l.push({ value: c.style.paddingRight, property: "padding-right", el: c }), c.style.paddingRight = `${ey(c) + g}px`;
      const _ = Oi(c).querySelectorAll(".mui-fixed");
      [].forEach.call(_, (b) => {
        l.push({ value: b.style.paddingRight, property: "padding-right", el: b }), b.style.paddingRight = `${ey(b) + g}px`;
      });
    }
    let m;
    if (c.parentNode instanceof DocumentFragment) m = Oi(c).body;
    else {
      const g = c.parentElement, _ = Ba(c);
      m = (g == null ? void 0 : g.nodeName) === "HTML" && _.getComputedStyle(g).overflowY === "scroll" ? g : c;
    }
    l.push({ value: m.style.overflow, property: "overflow", el: m }, { value: m.style.overflowX, property: "overflow-x", el: m }, { value: m.style.overflowY, property: "overflow-y", el: m }), m.style.overflow = "hidden";
  }
  return () => {
    l.forEach(({ value: m, el: g, property: _ }) => {
      m ? g.style.setProperty(_, m) : g.style.removeProperty(_);
    });
  };
}
function fC(a3) {
  const s = [];
  return [].forEach.call(a3.children, (l) => {
    l.getAttribute("aria-hidden") === "true" && s.push(l);
  }), s;
}
class dC {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(s, l) {
    let c = this.modals.indexOf(s);
    if (c !== -1) return c;
    c = this.modals.length, this.modals.push(s), s.modalRef && Ol(s.modalRef, false);
    const h = fC(l);
    ny(l, s.mount, s.modalRef, h, true);
    const m = oh(this.containers, (g) => g.container === l);
    return m !== -1 ? (this.containers[m].modals.push(s), c) : (this.containers.push({ modals: [s], container: l, restore: null, hiddenSiblings: h }), c);
  }
  mount(s, l) {
    const c = oh(this.containers, (m) => m.modals.includes(s)), h = this.containers[c];
    h.restore || (h.restore = cC(h, l));
  }
  remove(s, l = true) {
    const c = this.modals.indexOf(s);
    if (c === -1) return c;
    const h = oh(this.containers, (g) => g.modals.includes(s)), m = this.containers[h];
    if (m.modals.splice(m.modals.indexOf(s), 1), this.modals.splice(c, 1), m.modals.length === 0) m.restore && m.restore(), s.modalRef && Ol(s.modalRef, l), ny(m.container, s.mount, s.modalRef, m.hiddenSiblings, false), this.containers.splice(h, 1);
    else {
      const g = m.modals[m.modals.length - 1];
      g.modalRef && Ol(g.modalRef, false);
    }
    return c;
  }
  isTopModal(s) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === s;
  }
}
const hC = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function pC(a3) {
  const s = parseInt(a3.getAttribute("tabindex") || "", 10);
  return Number.isNaN(s) ? a3.contentEditable === "true" || (a3.nodeName === "AUDIO" || a3.nodeName === "VIDEO" || a3.nodeName === "DETAILS") && a3.getAttribute("tabindex") === null ? 0 : a3.tabIndex : s;
}
function mC(a3) {
  if (a3.tagName !== "INPUT" || a3.type !== "radio" || !a3.name) return false;
  const s = (c) => a3.ownerDocument.querySelector(`input[type="radio"]${c}`);
  let l = s(`[name="${a3.name}"]:checked`);
  return l || (l = s(`[name="${a3.name}"]`)), l !== a3;
}
function gC(a3) {
  return !(a3.disabled || a3.tagName === "INPUT" && a3.type === "hidden" || mC(a3));
}
function vC(a3) {
  const s = [], l = [];
  return Array.from(a3.querySelectorAll(hC)).forEach((c, h) => {
    const m = pC(c);
    m === -1 || !gC(c) || (m === 0 ? s.push(c) : l.push({ documentOrder: h, tabIndex: m, node: c }));
  }), l.sort((c, h) => c.tabIndex === h.tabIndex ? c.documentOrder - h.documentOrder : c.tabIndex - h.tabIndex).map((c) => c.node).concat(s);
}
function yC() {
  return true;
}
function _C(a3) {
  const { children: s, disableAutoFocus: l = false, disableEnforceFocus: c = false, disableRestoreFocus: h = false, getTabbable: m = vC, isEnabled: g = yC, open: _ } = a3, b = O.useRef(false), S = O.useRef(null), w = O.useRef(null), E = O.useRef(null), R = O.useRef(null), D = O.useRef(false), N = O.useRef(null), A = Bn(Zl(s), N), $ = O.useRef(null);
  O.useEffect(() => {
    !_ || !N.current || (D.current = !l);
  }, [l, _]), O.useEffect(() => {
    if (!_ || !N.current) return;
    const k = Oi(N.current);
    return N.current.contains(k.activeElement) || (N.current.hasAttribute("tabIndex") || N.current.setAttribute("tabIndex", "-1"), D.current && N.current.focus()), () => {
      h || (E.current && E.current.focus && (b.current = true, E.current.focus()), E.current = null);
    };
  }, [_]), O.useEffect(() => {
    if (!_ || !N.current) return;
    const k = Oi(N.current), U = (ot) => {
      $.current = ot, !(c || !g() || ot.key !== "Tab") && k.activeElement === N.current && ot.shiftKey && (b.current = true, w.current && w.current.focus());
    }, B = () => {
      var _a, _b2;
      const ot = N.current;
      if (ot === null) return;
      if (!k.hasFocus() || !g() || b.current) {
        b.current = false;
        return;
      }
      if (ot.contains(k.activeElement) || c && k.activeElement !== S.current && k.activeElement !== w.current) return;
      if (k.activeElement !== R.current) R.current = null;
      else if (R.current !== null) return;
      if (!D.current) return;
      let et = [];
      if ((k.activeElement === S.current || k.activeElement === w.current) && (et = m(N.current)), et.length > 0) {
        const dt = !!(((_a = $.current) == null ? void 0 : _a.shiftKey) && ((_b2 = $.current) == null ? void 0 : _b2.key) === "Tab"), C = et[0], Q = et[et.length - 1];
        typeof C != "string" && typeof Q != "string" && (dt ? Q.focus() : C.focus());
      } else ot.focus();
    };
    k.addEventListener("focusin", B), k.addEventListener("keydown", U, true);
    const J = setInterval(() => {
      k.activeElement && k.activeElement.tagName === "BODY" && B();
    }, 50);
    return () => {
      clearInterval(J), k.removeEventListener("focusin", B), k.removeEventListener("keydown", U, true);
    };
  }, [l, c, h, g, _, m]);
  const q = (k) => {
    E.current === null && (E.current = k.relatedTarget), D.current = true, R.current = k.target;
    const U = s.props.onFocus;
    U && U(k);
  }, tt = (k) => {
    E.current === null && (E.current = k.relatedTarget), D.current = true;
  };
  return Y.jsxs(O.Fragment, { children: [Y.jsx("div", { tabIndex: _ ? 0 : -1, onFocus: tt, ref: S, "data-testid": "sentinelStart" }), O.cloneElement(s, { ref: A, onFocus: q }), Y.jsx("div", { tabIndex: _ ? 0 : -1, onFocus: tt, ref: w, "data-testid": "sentinelEnd" })] });
}
function bC(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
function SC(a3) {
  return a3 ? a3.props.hasOwnProperty("in") : false;
}
const iy = () => {
}, yc = new dC();
function xC(a3) {
  const { container: s, disableEscapeKeyDown: l = false, disableScrollLock: c = false, closeAfterTransition: h = false, onTransitionEnter: m, onTransitionExited: g, children: _, onClose: b, open: S, rootRef: w } = a3, E = O.useRef({}), R = O.useRef(null), D = O.useRef(null), N = Bn(D, w), [A, $] = O.useState(!S), q = SC(_);
  let tt = true;
  (a3["aria-hidden"] === "false" || a3["aria-hidden"] === false) && (tt = false);
  const k = () => Oi(R.current), U = () => (E.current.modalRef = D.current, E.current.mount = R.current, E.current), B = () => {
    yc.mount(U(), { disableScrollLock: c }), D.current && (D.current.scrollTop = 0);
  }, J = cr(() => {
    const vt = bC(s) || k().body;
    yc.add(U(), vt), D.current && B();
  }), ot = () => yc.isTopModal(U()), et = cr((vt) => {
    R.current = vt, vt && (S && ot() ? B() : D.current && Ol(D.current, tt));
  }), dt = O.useCallback(() => {
    yc.remove(U(), tt);
  }, [tt]);
  O.useEffect(() => () => {
    dt();
  }, [dt]), O.useEffect(() => {
    S ? J() : (!q || !h) && dt();
  }, [S, dt, q, h, J]);
  const C = (vt) => (H) => {
    var _a;
    (_a = vt.onKeyDown) == null ? void 0 : _a.call(vt, H), !(H.key !== "Escape" || H.which === 229 || !ot()) && (l || (H.stopPropagation(), b && b(H, "escapeKeyDown")));
  }, Q = (vt) => (H) => {
    var _a;
    (_a = vt.onClick) == null ? void 0 : _a.call(vt, H), H.target === H.currentTarget && b && b(H, "backdropClick");
  };
  return { getRootProps: (vt = {}) => {
    const H = d_(a3);
    delete H.onTransitionEnter, delete H.onTransitionExited;
    const st = { ...H, ...vt };
    return { role: "presentation", ...st, onKeyDown: C(st), ref: N };
  }, getBackdropProps: (vt = {}) => {
    const H = vt;
    return { "aria-hidden": true, ...H, onClick: Q(H), open: S };
  }, getTransitionProps: () => {
    const vt = () => {
      $(false), m && m();
    }, H = () => {
      $(true), g && g(), h && dt();
    };
    return { onEnter: Uv(vt, (_ == null ? void 0 : _.props.onEnter) ?? iy), onExited: Uv(H, (_ == null ? void 0 : _.props.onExited) ?? iy) };
  }, rootRef: N, portalRef: et, isTopModal: ot, exited: A, hasTransition: q };
}
function TC(a3) {
  return Qe("MuiModal", a3);
}
Be("MuiModal", ["root", "hidden", "backdrop"]);
const CC = (a3) => {
  const { open: s, exited: l, classes: c } = a3;
  return Fe({ root: ["root", !s && l && "hidden"], backdrop: ["backdrop"] }, TC, c);
}, wC = Bt("div", { name: "MuiModal", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, !l.open && l.exited && s.hidden];
} })(tn(({ theme: a3 }) => ({ position: "fixed", zIndex: (a3.vars || a3).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{ props: ({ ownerState: s }) => !s.open && s.exited, style: { visibility: "hidden" } }] }))), EC = Bt(QT, { name: "MuiModal", slot: "Backdrop" })({ zIndex: -1 }), MC = O.forwardRef(function(s, l) {
  const c = en({ name: "MuiModal", props: s }), { BackdropComponent: h = EC, BackdropProps: m, classes: g, className: _, closeAfterTransition: b = false, children: S, container: w, component: E, components: R = {}, componentsProps: D = {}, disableAutoFocus: N = false, disableEnforceFocus: A = false, disableEscapeKeyDown: $ = false, disablePortal: q = false, disableRestoreFocus: tt = false, disableScrollLock: k = false, hideBackdrop: U = false, keepMounted: B = false, onClose: J, onTransitionEnter: ot, onTransitionExited: et, open: dt, slotProps: C = {}, slots: Q = {}, theme: rt, ...bt } = c, yt = { ...c, closeAfterTransition: b, disableAutoFocus: N, disableEnforceFocus: A, disableEscapeKeyDown: $, disablePortal: q, disableRestoreFocus: tt, disableScrollLock: k, hideBackdrop: U, keepMounted: B }, { getRootProps: vt, getBackdropProps: H, getTransitionProps: st, portalRef: it, isTopModal: ht, exited: M, hasTransition: K } = xC({ ...yt, rootRef: l }), ut = { ...yt, exited: M }, ct = CC(ut), mt = {};
  if (S.props.tabIndex === void 0 && (mt.tabIndex = "-1"), K) {
    const { onEnter: Dt, onExited: Gt } = st();
    mt.onEnter = Dt, mt.onExited = Gt;
  }
  const _t = { slots: { root: R.Root, backdrop: R.Backdrop, ...Q }, slotProps: { ...D, ...C } }, [gt, Nt] = Wi("root", { ref: l, elementType: wC, externalForwardedProps: { ..._t, ...bt, component: E }, getSlotProps: vt, ownerState: ut, className: Ft(_, ct == null ? void 0 : ct.root, !ut.open && ut.exited && (ct == null ? void 0 : ct.hidden)) }), [Lt, le] = Wi("backdrop", { ref: m == null ? void 0 : m.ref, elementType: h, externalForwardedProps: _t, shouldForwardComponentProp: true, additionalProps: m, getSlotProps: (Dt) => H({ ...Dt, onClick: (Gt) => {
    (Dt == null ? void 0 : Dt.onClick) && Dt.onClick(Gt);
  } }), className: Ft(m == null ? void 0 : m.className, ct == null ? void 0 : ct.backdrop), ownerState: ut });
  return !B && !dt && (!K || M) ? null : Y.jsx(kT, { ref: it, container: w, disablePortal: q, children: Y.jsxs(gt, { ...Nt, children: [!U && h ? Y.jsx(Lt, { ...le }) : null, Y.jsx(_C, { disableEnforceFocus: A, disableAutoFocus: N, disableRestoreFocus: tt, isEnabled: ht, open: dt, children: O.cloneElement(S, mt) })] }) });
}), ay = Be("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), OC = (a3) => {
  const { classes: s, disableUnderline: l, startAdornment: c, endAdornment: h, size: m, hiddenLabel: g, multiline: _ } = a3, b = { root: ["root", !l && "underline", c && "adornedStart", h && "adornedEnd", m === "small" && `size${qt(m)}`, g && "hiddenLabel", _ && "multiline"], input: ["input"] }, S = Fe(b, $T, s);
  return { ...s, ...S };
}, AC = Bt(Yc, { shouldForwardProp: (a3) => Ai(a3) || a3 === "classes", name: "MuiFilledInput", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [...Gc(a3, s), !l.disableUnderline && s.underline];
} })(tn(({ theme: a3 }) => {
  const s = a3.palette.mode === "light", l = s ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", c = s ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", h = s ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", m = s ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return { position: "relative", backgroundColor: a3.vars ? a3.vars.palette.FilledInput.bg : c, borderTopLeftRadius: (a3.vars || a3).shape.borderRadius, borderTopRightRadius: (a3.vars || a3).shape.borderRadius, transition: a3.transitions.create("background-color", { duration: a3.transitions.duration.shorter, easing: a3.transitions.easing.easeOut }), "&:hover": { backgroundColor: a3.vars ? a3.vars.palette.FilledInput.hoverBg : h, "@media (hover: none)": { backgroundColor: a3.vars ? a3.vars.palette.FilledInput.bg : c } }, [`&.${or.focused}`]: { backgroundColor: a3.vars ? a3.vars.palette.FilledInput.bg : c }, [`&.${or.disabled}`]: { backgroundColor: a3.vars ? a3.vars.palette.FilledInput.disabledBg : m }, variants: [{ props: ({ ownerState: g }) => !g.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: a3.transitions.create("transform", { duration: a3.transitions.duration.shorter, easing: a3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${or.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${or.error}`]: { "&::before, &::after": { borderBottomColor: (a3.vars || a3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${a3.vars ? `rgba(${a3.vars.palette.common.onBackgroundChannel} / ${a3.vars.opacity.inputUnderline})` : l}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: a3.transitions.create("border-bottom-color", { duration: a3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${or.disabled}, .${or.error}):before`]: { borderBottom: `1px solid ${(a3.vars || a3).palette.text.primary}` }, [`&.${or.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(a3.palette).filter(Ro()).map(([g]) => {
    var _a;
    return { props: { disableUnderline: false, color: g }, style: { "&::after": { borderBottom: `2px solid ${(_a = (a3.vars || a3).palette[g]) == null ? void 0 : _a.main}` } } };
  }), { props: ({ ownerState: g }) => g.startAdornment, style: { paddingLeft: 12 } }, { props: ({ ownerState: g }) => g.endAdornment, style: { paddingRight: 12 } }, { props: ({ ownerState: g }) => g.multiline, style: { padding: "25px 12px 8px" } }, { props: ({ ownerState: g, size: _ }) => g.multiline && _ === "small", style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: g }) => g.multiline && g.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: g }) => g.multiline && g.hiddenLabel && g.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }] };
})), RC = Bt(Xc, { name: "MuiFilledInput", slot: "Input", overridesResolver: Vc })(tn(({ theme: a3 }) => ({ paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12, ...!a3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: a3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: a3.palette.mode === "light" ? null : "#fff", caretColor: a3.palette.mode === "light" ? null : "#fff", borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" } }, ...a3.vars && { "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }, [a3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { paddingTop: 21, paddingBottom: 4 } }, { props: ({ ownerState: s }) => s.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } }, { props: ({ ownerState: s }) => s.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: s }) => s.endAdornment, style: { paddingRight: 0 } }, { props: ({ ownerState: s }) => s.hiddenLabel && s.size === "small", style: { paddingTop: 8, paddingBottom: 9 } }, { props: ({ ownerState: s }) => s.multiline, style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 } }] }))), b_ = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiFilledInput" }), { disableUnderline: h = false, components: m = {}, componentsProps: g, fullWidth: _ = false, hiddenLabel: b, inputComponent: S = "input", multiline: w = false, slotProps: E, slots: R = {}, type: D = "text", ...N } = c, A = { ...c, disableUnderline: h, fullWidth: _, inputComponent: S, multiline: w, type: D }, $ = OC(c), q = { root: { ownerState: A }, input: { ownerState: A } }, tt = E ?? g ? Mn(q, E ?? g) : q, k = R.root ?? m.Root ?? AC, U = R.input ?? m.Input ?? RC;
  return Y.jsx(op, { slots: { root: k, input: U }, slotProps: tt, fullWidth: _, inputComponent: S, multiline: w, ref: l, type: D, ...N, classes: $ });
});
b_.muiName = "Input";
function wh(a3) {
  return `scale(${a3}, ${a3 ** 2})`;
}
const LC = { entering: { opacity: 1, transform: wh(1) }, entered: { opacity: 1, transform: "none" } }, rh = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Eh = O.forwardRef(function(s, l) {
  const { addEndListener: c, appear: h = true, children: m, easing: g, in: _, onEnter: b, onEntered: S, onEntering: w, onExit: E, onExited: R, onExiting: D, style: N, timeout: A = "auto", TransitionComponent: $ = Ji, ...q } = s, tt = l_(), k = O.useRef(), U = hs(), B = O.useRef(null), J = Bn(B, Zl(m), l), ot = (vt) => (H) => {
    if (vt) {
      const st = B.current;
      H === void 0 ? vt(st) : vt(st, H);
    }
  }, et = ot(w), dt = ot((vt, H) => {
    u_(vt);
    const { duration: st, delay: it, easing: ht } = Ac({ style: N, timeout: A, easing: g }, { mode: "enter" });
    let M;
    A === "auto" ? (M = U.transitions.getAutoHeightDuration(vt.clientHeight), k.current = M) : M = st, vt.style.transition = [U.transitions.create("opacity", { duration: M, delay: it }), U.transitions.create("transform", { duration: rh ? M : M * 0.666, delay: it, easing: ht })].join(","), b && b(vt, H);
  }), C = ot(S), Q = ot(D), rt = ot((vt) => {
    const { duration: H, delay: st, easing: it } = Ac({ style: N, timeout: A, easing: g }, { mode: "exit" });
    let ht;
    A === "auto" ? (ht = U.transitions.getAutoHeightDuration(vt.clientHeight), k.current = ht) : ht = H, vt.style.transition = [U.transitions.create("opacity", { duration: ht, delay: st }), U.transitions.create("transform", { duration: rh ? ht : ht * 0.666, delay: rh ? st : st || ht * 0.333, easing: it })].join(","), vt.style.opacity = 0, vt.style.transform = wh(0.75), E && E(vt);
  }), bt = ot(R), yt = (vt) => {
    A === "auto" && tt.start(k.current || 0, vt), c && c(B.current, vt);
  };
  return Y.jsx($, { appear: h, in: _, nodeRef: B, onEnter: dt, onEntered: C, onEntering: et, onExit: rt, onExited: bt, onExiting: Q, addEndListener: yt, timeout: A === "auto" ? null : A, ...q, children: (vt, { ownerState: H, ...st }) => O.cloneElement(m, { style: { opacity: 0, transform: wh(0.75), visibility: vt === "exited" && !_ ? "hidden" : void 0, ...LC[vt], ...N, ...m.props.style }, ref: J, ...st }) });
});
Eh && (Eh.muiSupportAuto = true);
const zC = (a3) => {
  const { classes: s, disableUnderline: l } = a3, h = Fe({ root: ["root", !l && "underline"], input: ["input"] }, jT, s);
  return { ...s, ...h };
}, PC = Bt(Yc, { shouldForwardProp: (a3) => Ai(a3) || a3 === "classes", name: "MuiInput", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [...Gc(a3, s), !l.disableUnderline && s.underline];
} })(tn(({ theme: a3 }) => {
  let l = a3.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return a3.vars && (l = `rgba(${a3.vars.palette.common.onBackgroundChannel} / ${a3.vars.opacity.inputUnderline})`), { position: "relative", variants: [{ props: ({ ownerState: c }) => c.formControl, style: { "label + &": { marginTop: 16 } } }, { props: ({ ownerState: c }) => !c.disableUnderline, style: { "&::after": { left: 0, bottom: 0, content: '""', position: "absolute", right: 0, transform: "scaleX(0)", transition: a3.transitions.create("transform", { duration: a3.transitions.duration.shorter, easing: a3.transitions.easing.easeOut }), pointerEvents: "none" }, [`&.${_l.focused}:after`]: { transform: "scaleX(1) translateX(0)" }, [`&.${_l.error}`]: { "&::before, &::after": { borderBottomColor: (a3.vars || a3).palette.error.main } }, "&::before": { borderBottom: `1px solid ${l}`, left: 0, bottom: 0, content: '"\\00a0"', position: "absolute", right: 0, transition: a3.transitions.create("border-bottom-color", { duration: a3.transitions.duration.shorter }), pointerEvents: "none" }, [`&:hover:not(.${_l.disabled}, .${_l.error}):before`]: { borderBottom: `2px solid ${(a3.vars || a3).palette.text.primary}`, "@media (hover: none)": { borderBottom: `1px solid ${l}` } }, [`&.${_l.disabled}:before`]: { borderBottomStyle: "dotted" } } }, ...Object.entries(a3.palette).filter(Ro()).map(([c]) => ({ props: { color: c, disableUnderline: false }, style: { "&::after": { borderBottom: `2px solid ${(a3.vars || a3).palette[c].main}` } } }))] };
})), BC = Bt(Xc, { name: "MuiInput", slot: "Input", overridesResolver: Vc })({}), S_ = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiInput" }), { disableUnderline: h = false, components: m = {}, componentsProps: g, fullWidth: _ = false, inputComponent: b = "input", multiline: S = false, slotProps: w, slots: E = {}, type: R = "text", ...D } = c, N = zC(c), $ = { root: { ownerState: { disableUnderline: h } } }, q = w ?? g ? Mn(w ?? g, $) : $, tt = E.root ?? m.Root ?? PC, k = E.input ?? m.Input ?? BC;
  return Y.jsx(op, { slots: { root: tt, input: k }, slotProps: q, fullWidth: _, inputComponent: b, multiline: S, ref: l, type: R, ...D, classes: N });
});
S_.muiName = "Input";
const Mh = O.createContext({});
function kC(a3) {
  return Qe("MuiList", a3);
}
Be("MuiList", ["root", "padding", "dense", "subheader"]);
const NC = (a3) => {
  const { classes: s, disablePadding: l, dense: c, subheader: h } = a3;
  return Fe({ root: ["root", !l && "padding", c && "dense", h && "subheader"] }, kC, s);
}, DC = Bt("ul", { name: "MuiList", slot: "Root", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, !l.disablePadding && s.padding, l.dense && s.dense, l.subheader && s.subheader];
} })({ listStyle: "none", margin: 0, padding: 0, position: "relative", variants: [{ props: ({ ownerState: a3 }) => !a3.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } }, { props: ({ ownerState: a3 }) => a3.subheader, style: { paddingTop: 0 } }] }), HC = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiList" }), { children: h, className: m, component: g = "ul", dense: _ = false, disablePadding: b = false, subheader: S, ...w } = c, E = O.useMemo(() => ({ dense: _ }), [_]), R = { ...c, component: g, dense: _, disablePadding: b }, D = NC(R);
  return Y.jsx(Mh.Provider, { value: E, children: Y.jsxs(DC, { as: g, className: Ft(D.root, m), ref: l, ownerState: R, ...w, children: [S, h] }) });
}), oy = Be("MuiListItemIcon", ["root", "alignItemsFlexStart"]), ry = Be("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function sh(a3, s, l) {
  return a3 === s ? a3.firstChild : s && s.nextElementSibling ? s.nextElementSibling : l ? null : a3.firstChild;
}
function sy(a3, s, l) {
  return a3 === s ? l ? a3.firstChild : a3.lastChild : s && s.previousElementSibling ? s.previousElementSibling : l ? null : a3.lastChild;
}
function x_(a3, s) {
  if (s === void 0) return true;
  let l = a3.innerText;
  return l === void 0 && (l = a3.textContent), l = l.trim().toLowerCase(), l.length === 0 ? false : s.repeating ? l[0] === s.keys[0] : l.startsWith(s.keys.join(""));
}
function bl(a3, s, l, c, h, m) {
  let g = false, _ = h(a3, s, s ? l : false);
  for (; _; ) {
    if (_ === a3.firstChild) {
      if (g) return false;
      g = true;
    }
    const b = c ? false : _.disabled || _.getAttribute("aria-disabled") === "true";
    if (!_.hasAttribute("tabindex") || !x_(_, m) || b) _ = h(a3, _, l);
    else return _.focus(), true;
  }
  return false;
}
const UC = O.forwardRef(function(s, l) {
  const { actions: c, autoFocus: h = false, autoFocusItem: m = false, children: g, className: _, disabledItemsFocusable: b = false, disableListWrap: S = false, onKeyDown: w, variant: E = "selectedMenu", ...R } = s, D = O.useRef(null), N = O.useRef({ keys: [], repeating: true, previousKeyMatched: true, lastTime: null });
  Pa(() => {
    h && D.current.focus();
  }, [h]), O.useImperativeHandle(c, () => ({ adjustStyleForScrollbar: (k, { direction: U }) => {
    const B = !D.current.style.width;
    if (k.clientHeight < D.current.clientHeight && B) {
      const J = `${__(Ba(k))}px`;
      D.current.style[U === "rtl" ? "paddingLeft" : "paddingRight"] = J, D.current.style.width = `calc(100% + ${J})`;
    }
    return D.current;
  } }), []);
  const A = (k) => {
    const U = D.current, B = k.key;
    if (k.ctrlKey || k.metaKey || k.altKey) {
      w && w(k);
      return;
    }
    const ot = Oi(U).activeElement;
    if (B === "ArrowDown") k.preventDefault(), bl(U, ot, S, b, sh);
    else if (B === "ArrowUp") k.preventDefault(), bl(U, ot, S, b, sy);
    else if (B === "Home") k.preventDefault(), bl(U, null, S, b, sh);
    else if (B === "End") k.preventDefault(), bl(U, null, S, b, sy);
    else if (B.length === 1) {
      const et = N.current, dt = B.toLowerCase(), C = performance.now();
      et.keys.length > 0 && (C - et.lastTime > 500 ? (et.keys = [], et.repeating = true, et.previousKeyMatched = true) : et.repeating && dt !== et.keys[0] && (et.repeating = false)), et.lastTime = C, et.keys.push(dt);
      const Q = ot && !et.repeating && x_(ot, et);
      et.previousKeyMatched && (Q || bl(U, ot, false, b, sh, et)) ? k.preventDefault() : et.previousKeyMatched = false;
    }
    w && w(k);
  }, $ = Bn(D, l);
  let q = -1;
  O.Children.forEach(g, (k, U) => {
    if (!O.isValidElement(k)) {
      q === U && (q += 1, q >= g.length && (q = -1));
      return;
    }
    k.props.disabled || (E === "selectedMenu" && k.props.selected || q === -1) && (q = U), q === U && (k.props.disabled || k.props.muiSkipListHighlight || k.type.muiSkipListHighlight) && (q += 1, q >= g.length && (q = -1));
  });
  const tt = O.Children.map(g, (k, U) => {
    if (U === q) {
      const B = {};
      return m && (B.autoFocus = true), k.props.tabIndex === void 0 && E === "selectedMenu" && (B.tabIndex = 0), O.cloneElement(k, B);
    }
    return k;
  });
  return Y.jsx(HC, { role: "menu", ref: $, className: _, onKeyDown: A, tabIndex: h ? 0 : -1, ...R, children: tt });
});
function ZC(a3) {
  return Qe("MuiPopover", a3);
}
Be("MuiPopover", ["root", "paper"]);
function ly(a3, s) {
  let l = 0;
  return typeof s == "number" ? l = s : s === "center" ? l = a3.height / 2 : s === "bottom" && (l = a3.height), l;
}
function uy(a3, s) {
  let l = 0;
  return typeof s == "number" ? l = s : s === "center" ? l = a3.width / 2 : s === "right" && (l = a3.width), l;
}
function cy(a3) {
  return [a3.horizontal, a3.vertical].map((s) => typeof s == "number" ? `${s}px` : s).join(" ");
}
function _c(a3) {
  return typeof a3 == "function" ? a3() : a3;
}
const jC = (a3) => {
  const { classes: s } = a3;
  return Fe({ root: ["root"], paper: ["paper"] }, ZC, s);
}, IC = Bt(MC, { name: "MuiPopover", slot: "Root" })({}), T_ = Bt(Jx, { name: "MuiPopover", slot: "Paper" })({ position: "absolute", overflowY: "auto", overflowX: "hidden", minWidth: 16, minHeight: 16, maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 32px)", outline: 0 }), $C = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiPopover" }), { action: h, anchorEl: m, anchorOrigin: g = { vertical: "top", horizontal: "left" }, anchorPosition: _, anchorReference: b = "anchorEl", children: S, className: w, container: E, elevation: R = 8, marginThreshold: D = 16, open: N, PaperProps: A = {}, slots: $ = {}, slotProps: q = {}, transformOrigin: tt = { vertical: "top", horizontal: "left" }, TransitionComponent: k, transitionDuration: U = "auto", TransitionProps: B = {}, disableScrollLock: J = false, ...ot } = c, et = O.useRef(), dt = { ...c, anchorOrigin: g, anchorReference: b, elevation: R, marginThreshold: D, transformOrigin: tt, TransitionComponent: k, transitionDuration: U, TransitionProps: B }, C = jC(dt), Q = O.useCallback(() => {
    if (b === "anchorPosition") return _;
    const Dt = _c(m), It = (Dt && Dt.nodeType === 1 ? Dt : Oi(et.current).body).getBoundingClientRect();
    return { top: It.top + ly(It, g.vertical), left: It.left + uy(It, g.horizontal) };
  }, [m, g.horizontal, g.vertical, _, b]), rt = O.useCallback((Dt) => ({ vertical: ly(Dt, tt.vertical), horizontal: uy(Dt, tt.horizontal) }), [tt.horizontal, tt.vertical]), bt = O.useCallback((Dt) => {
    const Gt = { width: Dt.offsetWidth, height: Dt.offsetHeight }, It = rt(Gt);
    if (b === "none") return { top: null, left: null, transformOrigin: cy(It) };
    const Oe = Q();
    let Zt = Oe.top - It.vertical, ue = Oe.left - It.horizontal;
    const nn = Zt + Gt.height, ie = ue + Gt.width, _e = Ba(_c(m)), Me = _e.innerHeight - D, Ae = _e.innerWidth - D;
    if (D !== null && Zt < D) {
      const ce = Zt - D;
      Zt -= ce, It.vertical += ce;
    } else if (D !== null && nn > Me) {
      const ce = nn - Me;
      Zt -= ce, It.vertical += ce;
    }
    if (D !== null && ue < D) {
      const ce = ue - D;
      ue -= ce, It.horizontal += ce;
    } else if (ie > Ae) {
      const ce = ie - Ae;
      ue -= ce, It.horizontal += ce;
    }
    return { top: `${Math.round(Zt)}px`, left: `${Math.round(ue)}px`, transformOrigin: cy(It) };
  }, [m, b, Q, rt, D]), [yt, vt] = O.useState(N), H = O.useCallback(() => {
    const Dt = et.current;
    if (!Dt) return;
    const Gt = bt(Dt);
    Gt.top !== null && Dt.style.setProperty("top", Gt.top), Gt.left !== null && (Dt.style.left = Gt.left), Dt.style.transformOrigin = Gt.transformOrigin, vt(true);
  }, [bt]);
  O.useEffect(() => (J && window.addEventListener("scroll", H), () => window.removeEventListener("scroll", H)), [m, J, H]);
  const st = () => {
    H();
  }, it = () => {
    vt(false);
  };
  O.useEffect(() => {
    N && H();
  }), O.useImperativeHandle(h, () => N ? { updatePosition: () => {
    H();
  } } : null, [N, H]), O.useEffect(() => {
    if (!N) return;
    const Dt = a_(() => {
      H();
    }), Gt = Ba(_c(m));
    return Gt.addEventListener("resize", Dt), () => {
      Dt.clear(), Gt.removeEventListener("resize", Dt);
    };
  }, [m, N, H]);
  let ht = U;
  const M = { slots: { transition: k, ...$ }, slotProps: { transition: B, paper: A, ...q } }, [K, ut] = Wi("transition", { elementType: Eh, externalForwardedProps: M, ownerState: dt, getSlotProps: (Dt) => ({ ...Dt, onEntering: (Gt, It) => {
    var _a;
    (_a = Dt.onEntering) == null ? void 0 : _a.call(Dt, Gt, It), st();
  }, onExited: (Gt) => {
    var _a;
    (_a = Dt.onExited) == null ? void 0 : _a.call(Dt, Gt), it();
  } }), additionalProps: { appear: true, in: N } });
  U === "auto" && !K.muiSupportAuto && (ht = void 0);
  const ct = E || (m ? Oi(_c(m)).body : void 0), [mt, { slots: _t, slotProps: gt, ...Nt }] = Wi("root", { ref: l, elementType: IC, externalForwardedProps: { ...M, ...ot }, shouldForwardComponentProp: true, additionalProps: { slots: { backdrop: $.backdrop }, slotProps: { backdrop: Zx(typeof q.backdrop == "function" ? q.backdrop(dt) : q.backdrop, { invisible: true }) }, container: ct, open: N }, ownerState: dt, className: Ft(C.root, w) }), [Lt, le] = Wi("paper", { ref: et, className: C.paper, elementType: T_, externalForwardedProps: M, shouldForwardComponentProp: true, additionalProps: { elevation: R, style: yt ? void 0 : { opacity: 0 } }, ownerState: dt });
  return Y.jsx(mt, { ...Nt, ...!Ch(mt) && { slots: _t, slotProps: gt, disableScrollLock: J }, children: Y.jsx(K, { ...ut, timeout: ht, children: Y.jsx(Lt, { ...le, children: S }) }) });
});
function qC(a3) {
  return Qe("MuiMenu", a3);
}
Be("MuiMenu", ["root", "paper", "list"]);
const GC = { vertical: "top", horizontal: "right" }, VC = { vertical: "top", horizontal: "left" }, YC = (a3) => {
  const { classes: s } = a3;
  return Fe({ root: ["root"], paper: ["paper"], list: ["list"] }, qC, s);
}, XC = Bt($C, { shouldForwardProp: (a3) => Ai(a3) || a3 === "classes", name: "MuiMenu", slot: "Root" })({}), KC = Bt(T_, { name: "MuiMenu", slot: "Paper" })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }), QC = Bt(UC, { name: "MuiMenu", slot: "List" })({ outline: 0 }), FC = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiMenu" }), { autoFocus: h = true, children: m, className: g, disableAutoFocusItem: _ = false, MenuListProps: b = {}, onClose: S, open: w, PaperProps: E = {}, PopoverClasses: R, transitionDuration: D = "auto", TransitionProps: { onEntering: N, ...A } = {}, variant: $ = "selectedMenu", slots: q = {}, slotProps: tt = {}, ...k } = c, U = LS(), B = { ...c, autoFocus: h, disableAutoFocusItem: _, MenuListProps: b, onEntering: N, PaperProps: E, transitionDuration: D, TransitionProps: A, variant: $ }, J = YC(B), ot = h && !_ && w, et = O.useRef(null), dt = (ht, M) => {
    et.current && et.current.adjustStyleForScrollbar(ht, { direction: U ? "rtl" : "ltr" }), N && N(ht, M);
  }, C = (ht) => {
    ht.key === "Tab" && (ht.preventDefault(), S && S(ht, "tabKeyDown"));
  };
  let Q = -1;
  O.Children.map(m, (ht, M) => {
    O.isValidElement(ht) && (ht.props.disabled || ($ === "selectedMenu" && ht.props.selected || Q === -1) && (Q = M));
  });
  const rt = { slots: q, slotProps: { list: b, transition: A, paper: E, ...tt } }, bt = PT({ elementType: q.root, externalSlotProps: tt.root, ownerState: B, className: [J.root, g] }), [yt, vt] = Wi("paper", { className: J.paper, elementType: KC, externalForwardedProps: rt, shouldForwardComponentProp: true, ownerState: B }), [H, st] = Wi("list", { className: Ft(J.list, b.className), elementType: QC, shouldForwardComponentProp: true, externalForwardedProps: rt, getSlotProps: (ht) => ({ ...ht, onKeyDown: (M) => {
    var _a;
    C(M), (_a = ht.onKeyDown) == null ? void 0 : _a.call(ht, M);
  } }), ownerState: B }), it = typeof rt.slotProps.transition == "function" ? rt.slotProps.transition(B) : rt.slotProps.transition;
  return Y.jsx(XC, { onClose: S, anchorOrigin: { vertical: "bottom", horizontal: U ? "right" : "left" }, transformOrigin: U ? GC : VC, slots: { root: q.root, paper: yt, backdrop: q.backdrop, ...q.transition && { transition: q.transition } }, slotProps: { root: bt, paper: vt, backdrop: typeof tt.backdrop == "function" ? tt.backdrop(B) : tt.backdrop, transition: { ...it, onEntering: (...ht) => {
    var _a;
    dt(...ht), (_a = it == null ? void 0 : it.onEntering) == null ? void 0 : _a.call(it, ...ht);
  } } }, open: w, ref: l, transitionDuration: D, ownerState: B, ...k, classes: R, children: Y.jsx(H, { actions: et, autoFocus: h && (Q === -1 || _), autoFocusItem: ot, variant: $, ...st, children: m }) });
});
function WC(a3) {
  return Qe("MuiMenuItem", a3);
}
const Sl = Be("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), JC = (a3, s) => {
  const { ownerState: l } = a3;
  return [s.root, l.dense && s.dense, l.divider && s.divider, !l.disableGutters && s.gutters];
}, tw = (a3) => {
  const { disabled: s, dense: l, divider: c, disableGutters: h, selected: m, classes: g } = a3, b = Fe({ root: ["root", l && "dense", s && "disabled", !h && "gutters", c && "divider", m && "selected"] }, WC, g);
  return { ...g, ...b };
}, ew = Bt(np, { shouldForwardProp: (a3) => Ai(a3) || a3 === "classes", name: "MuiMenuItem", slot: "Root", overridesResolver: JC })(tn(({ theme: a3 }) => ({ ...a3.typography.body1, display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: "border-box", whiteSpace: "nowrap", "&:hover": { textDecoration: "none", backgroundColor: (a3.vars || a3).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${Sl.selected}`]: { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.primary.mainChannel} / ${a3.vars.palette.action.selectedOpacity})` : In(a3.palette.primary.main, a3.palette.action.selectedOpacity), [`&.${Sl.focusVisible}`]: { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.primary.mainChannel} / calc(${a3.vars.palette.action.selectedOpacity} + ${a3.vars.palette.action.focusOpacity}))` : In(a3.palette.primary.main, a3.palette.action.selectedOpacity + a3.palette.action.focusOpacity) } }, [`&.${Sl.selected}:hover`]: { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.primary.mainChannel} / calc(${a3.vars.palette.action.selectedOpacity} + ${a3.vars.palette.action.hoverOpacity}))` : In(a3.palette.primary.main, a3.palette.action.selectedOpacity + a3.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: a3.vars ? `rgba(${a3.vars.palette.primary.mainChannel} / ${a3.vars.palette.action.selectedOpacity})` : In(a3.palette.primary.main, a3.palette.action.selectedOpacity) } }, [`&.${Sl.focusVisible}`]: { backgroundColor: (a3.vars || a3).palette.action.focus }, [`&.${Sl.disabled}`]: { opacity: (a3.vars || a3).palette.action.disabledOpacity }, [`& + .${ay.root}`]: { marginTop: a3.spacing(1), marginBottom: a3.spacing(1) }, [`& + .${ay.inset}`]: { marginLeft: 52 }, [`& .${ry.root}`]: { marginTop: 0, marginBottom: 0 }, [`& .${ry.inset}`]: { paddingLeft: 36 }, [`& .${oy.root}`]: { minWidth: 36 }, variants: [{ props: ({ ownerState: s }) => !s.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: s }) => s.divider, style: { borderBottom: `1px solid ${(a3.vars || a3).palette.divider}`, backgroundClip: "padding-box" } }, { props: ({ ownerState: s }) => !s.dense, style: { [a3.breakpoints.up("sm")]: { minHeight: "auto" } } }, { props: ({ ownerState: s }) => s.dense, style: { minHeight: 32, paddingTop: 4, paddingBottom: 4, ...a3.typography.body2, [`& .${oy.root} svg`]: { fontSize: "1.25rem" } } }] }))), nw = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiMenuItem" }), { autoFocus: h = false, component: m = "li", dense: g = false, divider: _ = false, disableGutters: b = false, focusVisibleClassName: S, role: w = "menuitem", tabIndex: E, className: R, ...D } = c, N = O.useContext(Mh), A = O.useMemo(() => ({ dense: g || N.dense || false, disableGutters: b }), [N.dense, g, b]), $ = O.useRef(null);
  Pa(() => {
    h && $.current && $.current.focus();
  }, [h]);
  const q = { ...c, dense: A.dense, divider: _, disableGutters: b }, tt = tw(c), k = Bn($, l);
  let U;
  return c.disabled || (U = E !== void 0 ? E : -1), Y.jsx(Mh.Provider, { value: A, children: Y.jsx(ew, { ref: k, role: w, tabIndex: U, component: m, focusVisibleClassName: Ft(tt.focusVisible, S), className: Ft(tt.root, R), ...D, ownerState: q, classes: tt }) });
});
function iw(a3) {
  return Qe("MuiNativeSelect", a3);
}
const rp = Be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), aw = (a3) => {
  const { classes: s, variant: l, disabled: c, multiple: h, open: m, error: g } = a3, _ = { select: ["select", l, c && "disabled", h && "multiple", g && "error"], icon: ["icon", `icon${qt(l)}`, m && "iconOpen", c && "disabled"] };
  return Fe(_, iw, s);
}, C_ = Bt("select")(({ theme: a3 }) => ({ MozAppearance: "none", WebkitAppearance: "none", userSelect: "none", borderRadius: 0, cursor: "pointer", "&:focus": { borderRadius: 0 }, [`&.${rp.disabled}`]: { cursor: "default" }, "&[multiple]": { height: "auto" }, "&:not([multiple]) option, &:not([multiple]) optgroup": { backgroundColor: (a3.vars || a3).palette.background.paper }, variants: [{ props: ({ ownerState: s }) => s.variant !== "filled" && s.variant !== "outlined", style: { "&&&": { paddingRight: 24, minWidth: 16 } } }, { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } }, { props: { variant: "outlined" }, style: { borderRadius: (a3.vars || a3).shape.borderRadius, "&:focus": { borderRadius: (a3.vars || a3).shape.borderRadius }, "&&&": { paddingRight: 32 } } }] })), ow = Bt(C_, { name: "MuiNativeSelect", slot: "Select", shouldForwardProp: Ai, overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.select, s[l.variant], l.error && s.error, { [`&.${rp.multiple}`]: s.multiple }];
} })({}), w_ = Bt("svg")(({ theme: a3 }) => ({ position: "absolute", right: 0, top: "calc(50% - .5em)", pointerEvents: "none", color: (a3.vars || a3).palette.action.active, [`&.${rp.disabled}`]: { color: (a3.vars || a3).palette.action.disabled }, variants: [{ props: ({ ownerState: s }) => s.open, style: { transform: "rotate(180deg)" } }, { props: { variant: "filled" }, style: { right: 7 } }, { props: { variant: "outlined" }, style: { right: 7 } }] })), rw = Bt(w_, { name: "MuiNativeSelect", slot: "Icon", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.icon, l.variant && s[`icon${qt(l.variant)}`], l.open && s.iconOpen];
} })({}), sw = O.forwardRef(function(s, l) {
  const { className: c, disabled: h, error: m, IconComponent: g, inputRef: _, variant: b = "standard", ...S } = s, w = { ...s, disabled: h, variant: b, error: m }, E = aw(w);
  return Y.jsxs(O.Fragment, { children: [Y.jsx(ow, { ownerState: w, className: Ft(E.select, c), disabled: h, ref: _ || l, ...S }), s.multiple ? null : Y.jsx(rw, { as: g, ownerState: w, className: E.icon })] });
});
var fy;
const lw = Bt("fieldset", { shouldForwardProp: Ai })({ textAlign: "left", position: "absolute", bottom: 0, right: 0, top: -5, left: 0, margin: 0, padding: "0 8px", pointerEvents: "none", borderRadius: "inherit", borderStyle: "solid", borderWidth: 1, overflow: "hidden", minWidth: "0%" }), uw = Bt("legend", { shouldForwardProp: Ai })(tn(({ theme: a3 }) => ({ float: "unset", width: "auto", overflow: "hidden", variants: [{ props: ({ ownerState: s }) => !s.withLabel, style: { padding: 0, lineHeight: "11px", transition: a3.transitions.create("width", { duration: 150, easing: a3.transitions.easing.easeOut }) } }, { props: ({ ownerState: s }) => s.withLabel, style: { display: "block", padding: 0, height: 11, fontSize: "0.75em", visibility: "hidden", maxWidth: 0.01, transition: a3.transitions.create("max-width", { duration: 50, easing: a3.transitions.easing.easeOut }), whiteSpace: "nowrap", "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" } } }, { props: ({ ownerState: s }) => s.withLabel && s.notched, style: { maxWidth: "100%", transition: a3.transitions.create("max-width", { duration: 100, easing: a3.transitions.easing.easeOut, delay: 50 }) } }] })));
function cw(a3) {
  const { children: s, classes: l, className: c, label: h, notched: m, ...g } = a3, _ = h != null && h !== "", b = { ...a3, notched: m, withLabel: _ };
  return Y.jsx(lw, { "aria-hidden": true, className: c, ownerState: b, ...g, children: Y.jsx(uw, { ownerState: b, children: _ ? Y.jsx("span", { children: h }) : fy || (fy = Y.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) }) });
}
const fw = (a3) => {
  const { classes: s } = a3, c = Fe({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, IT, s);
  return { ...s, ...c };
}, dw = Bt(Yc, { shouldForwardProp: (a3) => Ai(a3) || a3 === "classes", name: "MuiOutlinedInput", slot: "Root", overridesResolver: Gc })(tn(({ theme: a3 }) => {
  const s = a3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { position: "relative", borderRadius: (a3.vars || a3).shape.borderRadius, [`&:hover .${Gi.notchedOutline}`]: { borderColor: (a3.vars || a3).palette.text.primary }, "@media (hover: none)": { [`&:hover .${Gi.notchedOutline}`]: { borderColor: a3.vars ? `rgba(${a3.vars.palette.common.onBackgroundChannel} / 0.23)` : s } }, [`&.${Gi.focused} .${Gi.notchedOutline}`]: { borderWidth: 2 }, variants: [...Object.entries(a3.palette).filter(Ro()).map(([l]) => ({ props: { color: l }, style: { [`&.${Gi.focused} .${Gi.notchedOutline}`]: { borderColor: (a3.vars || a3).palette[l].main } } })), { props: {}, style: { [`&.${Gi.error} .${Gi.notchedOutline}`]: { borderColor: (a3.vars || a3).palette.error.main }, [`&.${Gi.disabled} .${Gi.notchedOutline}`]: { borderColor: (a3.vars || a3).palette.action.disabled } } }, { props: ({ ownerState: l }) => l.startAdornment, style: { paddingLeft: 14 } }, { props: ({ ownerState: l }) => l.endAdornment, style: { paddingRight: 14 } }, { props: ({ ownerState: l }) => l.multiline, style: { padding: "16.5px 14px" } }, { props: ({ ownerState: l, size: c }) => l.multiline && c === "small", style: { padding: "8.5px 14px" } }] };
})), hw = Bt(cw, { name: "MuiOutlinedInput", slot: "NotchedOutline" })(tn(({ theme: a3 }) => {
  const s = a3.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return { borderColor: a3.vars ? `rgba(${a3.vars.palette.common.onBackgroundChannel} / 0.23)` : s };
})), pw = Bt(Xc, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Vc })(tn(({ theme: a3 }) => ({ padding: "16.5px 14px", ...!a3.vars && { "&:-webkit-autofill": { WebkitBoxShadow: a3.palette.mode === "light" ? null : "0 0 0 100px #266798 inset", WebkitTextFillColor: a3.palette.mode === "light" ? null : "#fff", caretColor: a3.palette.mode === "light" ? null : "#fff", borderRadius: "inherit" } }, ...a3.vars && { "&:-webkit-autofill": { borderRadius: "inherit" }, [a3.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #266798 inset", WebkitTextFillColor: "#fff", caretColor: "#fff" } } }, variants: [{ props: { size: "small" }, style: { padding: "8.5px 14px" } }, { props: ({ ownerState: s }) => s.multiline, style: { padding: 0 } }, { props: ({ ownerState: s }) => s.startAdornment, style: { paddingLeft: 0 } }, { props: ({ ownerState: s }) => s.endAdornment, style: { paddingRight: 0 } }] }))), E_ = O.forwardRef(function(s, l) {
  const c = en({ props: s, name: "MuiOutlinedInput" }), { components: h = {}, fullWidth: m = false, inputComponent: g = "input", label: _, multiline: b = false, notched: S, slots: w = {}, slotProps: E = {}, type: R = "text", ...D } = c, N = fw(c), A = ap(), $ = ip({ props: c, muiFormControl: A, states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"] }), q = { ...c, color: $.color || "primary", disabled: $.disabled, error: $.error, focused: $.focused, formControl: A, fullWidth: m, hiddenLabel: $.hiddenLabel, multiline: b, size: $.size, type: R }, tt = w.root ?? h.Root ?? dw, k = w.input ?? h.Input ?? pw, [U, B] = Wi("notchedOutline", { elementType: hw, className: N.notchedOutline, shouldForwardComponentProp: true, ownerState: q, externalForwardedProps: { slots: w, slotProps: E }, additionalProps: { label: _ != null && _ !== "" && $.required ? Y.jsxs(O.Fragment, { children: [_, "\u2009", "*"] }) : _ } });
  return Y.jsx(op, { slots: { root: tt, input: k }, slotProps: E, renderSuffix: (J) => Y.jsx(U, { ...B, notched: typeof S < "u" ? S : !!(J.startAdornment || J.filled || J.focused) }), fullWidth: m, inputComponent: g, multiline: b, ref: l, type: R, ...D, classes: { ...N, notchedOutline: null } });
});
E_.muiName = "Input";
function M_(a3) {
  return Qe("MuiSelect", a3);
}
const xl = Be("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var dy;
const mw = Bt(C_, { name: "MuiSelect", slot: "Select", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [{ [`&.${xl.select}`]: s.select }, { [`&.${xl.select}`]: s[l.variant] }, { [`&.${xl.error}`]: s.error }, { [`&.${xl.multiple}`]: s.multiple }];
} })({ [`&.${xl.select}`]: { height: "auto", minHeight: "1.4375em", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" } }), gw = Bt(w_, { name: "MuiSelect", slot: "Icon", overridesResolver: (a3, s) => {
  const { ownerState: l } = a3;
  return [s.icon, l.variant && s[`icon${qt(l.variant)}`], l.open && s.iconOpen];
} })({}), vw = Bt("input", { shouldForwardProp: (a3) => n_(a3) && a3 !== "classes", name: "MuiSelect", slot: "NativeInput" })({ bottom: 0, left: 0, position: "absolute", opacity: 0, pointerEvents: "none", width: "100%", boxSizing: "border-box" });
function hy(a3, s) {
  return typeof s == "object" && s !== null ? a3 === s : String(a3) === String(s);
}
function yw(a3) {
  return a3 == null || typeof a3 == "string" && !a3.trim();
}
const _w = (a3) => {
  const { classes: s, variant: l, disabled: c, multiple: h, open: m, error: g } = a3, _ = { select: ["select", l, c && "disabled", h && "multiple", g && "error"], icon: ["icon", `icon${qt(l)}`, m && "iconOpen", c && "disabled"], nativeInput: ["nativeInput"] };
  return Fe(_, M_, s);
}, bw = O.forwardRef(function(s, l) {
  var _a;
  const { "aria-describedby": c, "aria-label": h, autoFocus: m, autoWidth: g, children: _, className: b, defaultOpen: S, defaultValue: w, disabled: E, displayEmpty: R, error: D = false, IconComponent: N, inputRef: A, labelId: $, MenuProps: q = {}, multiple: tt, name: k, onBlur: U, onChange: B, onClose: J, onFocus: ot, onOpen: et, open: dt, readOnly: C, renderValue: Q, required: rt, SelectDisplayProps: bt = {}, tabIndex: yt, type: vt, value: H, variant: st = "standard", ...it } = s, [ht, M] = $v({ controlled: H, default: w, name: "Select" }), [K, ut] = $v({ controlled: dt, default: S, name: "Select" }), ct = O.useRef(null), mt = O.useRef(null), [_t, gt] = O.useState(null), { current: Nt } = O.useRef(dt != null), [Lt, le] = O.useState(), Dt = Bn(l, A), Gt = O.useCallback((Mt) => {
    mt.current = Mt, Mt && gt(Mt);
  }, []), It = _t == null ? void 0 : _t.parentNode;
  O.useImperativeHandle(Dt, () => ({ focus: () => {
    mt.current.focus();
  }, node: ct.current, value: ht }), [ht]), O.useEffect(() => {
    S && K && _t && !Nt && (le(g ? null : It.clientWidth), mt.current.focus());
  }, [_t, g]), O.useEffect(() => {
    m && mt.current.focus();
  }, [m]), O.useEffect(() => {
    if (!$) return;
    const Mt = Oi(mt.current).getElementById($);
    if (Mt) {
      const Qt = () => {
        getSelection().isCollapsed && mt.current.focus();
      };
      return Mt.addEventListener("click", Qt), () => {
        Mt.removeEventListener("click", Qt);
      };
    }
  }, [$]);
  const Oe = (Mt, Qt) => {
    Mt ? et && et(Qt) : J && J(Qt), Nt || (le(g ? null : It.clientWidth), ut(Mt));
  }, Zt = (Mt) => {
    Mt.button === 0 && (Mt.preventDefault(), mt.current.focus(), Oe(true, Mt));
  }, ue = (Mt) => {
    Oe(false, Mt);
  }, nn = O.Children.toArray(_), ie = (Mt) => {
    const Qt = nn.find((Re) => Re.props.value === Mt.target.value);
    Qt !== void 0 && (M(Qt.props.value), B && B(Mt, Qt));
  }, _e = (Mt) => (Qt) => {
    let Re;
    if (Qt.currentTarget.hasAttribute("tabindex")) {
      if (tt) {
        Re = Array.isArray(ht) ? ht.slice() : [];
        const an = ht.indexOf(Mt.props.value);
        an === -1 ? Re.push(Mt.props.value) : Re.splice(an, 1);
      } else Re = Mt.props.value;
      if (Mt.props.onClick && Mt.props.onClick(Qt), ht !== Re && (M(Re), B)) {
        const an = Qt.nativeEvent || Qt, dr = new an.constructor(an.type, an);
        Object.defineProperty(dr, "target", { writable: true, value: { value: Re, name: k } }), B(dr, Mt);
      }
      tt || Oe(false, Qt);
    }
  }, Me = (Mt) => {
    C || [" ", "ArrowUp", "ArrowDown", "Enter"].includes(Mt.key) && (Mt.preventDefault(), Oe(true, Mt));
  }, Ae = _t !== null && K, ce = (Mt) => {
    !Ae && U && (Object.defineProperty(Mt, "target", { writable: true, value: { value: ht, name: k } }), U(Mt));
  };
  delete it["aria-invalid"];
  let wt, kn;
  const Ie = [];
  let qn = false;
  (v_({ value: ht }) || R) && (Q ? wt = Q(ht) : qn = true);
  const pe = nn.map((Mt) => {
    if (!O.isValidElement(Mt)) return null;
    let Qt;
    if (tt) {
      if (!Array.isArray(ht)) throw new Error(La(2));
      Qt = ht.some((Re) => hy(Re, Mt.props.value)), Qt && qn && Ie.push(Mt.props.children);
    } else Qt = hy(ht, Mt.props.value), Qt && qn && (kn = Mt.props.children);
    return O.cloneElement(Mt, { "aria-selected": Qt ? "true" : "false", onClick: _e(Mt), onKeyUp: (Re) => {
      Re.key === " " && Re.preventDefault(), Mt.props.onKeyUp && Mt.props.onKeyUp(Re);
    }, role: "option", selected: Qt, value: void 0, "data-value": Mt.props.value });
  });
  qn && (tt ? Ie.length === 0 ? wt = null : wt = Ie.reduce((Mt, Qt, Re) => (Mt.push(Qt), Re < Ie.length - 1 && Mt.push(", "), Mt), []) : wt = kn);
  let Ht = Lt;
  !g && Nt && _t && (Ht = It.clientWidth);
  let ae;
  typeof yt < "u" ? ae = yt : ae = E ? null : 0;
  const te = bt.id || (k ? `mui-component-select-${k}` : void 0), yn = { ...s, variant: st, value: ht, open: Ae, error: D }, oe = _w(yn), Ri = { ...q.PaperProps, ...(_a = q.slotProps) == null ? void 0 : _a.paper }, Gn = Wh();
  return Y.jsxs(O.Fragment, { children: [Y.jsx(mw, { as: "div", ref: Gt, tabIndex: ae, role: "combobox", "aria-controls": Ae ? Gn : void 0, "aria-disabled": E ? "true" : void 0, "aria-expanded": Ae ? "true" : "false", "aria-haspopup": "listbox", "aria-label": h, "aria-labelledby": [$, te].filter(Boolean).join(" ") || void 0, "aria-describedby": c, "aria-required": rt ? "true" : void 0, "aria-invalid": D ? "true" : void 0, onKeyDown: Me, onMouseDown: E || C ? null : Zt, onBlur: ce, onFocus: ot, ...bt, ownerState: yn, className: Ft(bt.className, oe.select, b), id: te, children: yw(wt) ? dy || (dy = Y.jsx("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : wt }), Y.jsx(vw, { "aria-invalid": D, value: Array.isArray(ht) ? ht.join(",") : ht, name: k, ref: ct, "aria-hidden": true, onChange: ie, tabIndex: -1, disabled: E, className: oe.nativeInput, autoFocus: m, required: rt, ...it, ownerState: yn }), Y.jsx(gw, { as: N, className: oe.icon, ownerState: yn }), Y.jsx(FC, { id: `menu-${k || ""}`, anchorEl: It, open: Ae, onClose: ue, anchorOrigin: { vertical: "bottom", horizontal: "center" }, transformOrigin: { vertical: "top", horizontal: "center" }, ...q, slotProps: { ...q.slotProps, list: { "aria-labelledby": $, role: "listbox", "aria-multiselectable": tt ? "true" : void 0, disableListWrap: true, id: Gn, ...q.MenuListProps }, paper: { ...Ri, style: { minWidth: Ht, ...Ri != null ? Ri.style : null } } }, children: pe })] });
}), Sw = (a3) => {
  const { classes: s } = a3, c = Fe({ root: ["root"] }, M_, s);
  return { ...s, ...c };
}, sp = { name: "MuiSelect", slot: "Root", shouldForwardProp: (a3) => Ai(a3) && a3 !== "variant" }, xw = Bt(S_, sp)(""), Tw = Bt(E_, sp)(""), Cw = Bt(b_, sp)(""), O_ = O.forwardRef(function(s, l) {
  const c = en({ name: "MuiSelect", props: s }), { autoWidth: h = false, children: m, classes: g = {}, className: _, defaultOpen: b = false, displayEmpty: S = false, IconComponent: w = qT, id: E, input: R, inputProps: D, label: N, labelId: A, MenuProps: $, multiple: q = false, native: tt = false, onClose: k, onOpen: U, open: B, renderValue: J, SelectDisplayProps: ot, variant: et = "outlined", ...dt } = c, C = tt ? sw : bw, Q = ap(), rt = ip({ props: c, muiFormControl: Q, states: ["variant", "error"] }), bt = rt.variant || et, yt = { ...c, variant: bt, classes: g }, vt = Sw(yt), { root: H, ...st } = vt, it = R || { standard: Y.jsx(xw, { ownerState: yt }), outlined: Y.jsx(Tw, { label: N, ownerState: yt }), filled: Y.jsx(Cw, { ownerState: yt }) }[bt], ht = Bn(l, Zl(it));
  return Y.jsx(O.Fragment, { children: O.cloneElement(it, { inputComponent: C, inputProps: { children: m, error: rt.error, IconComponent: w, variant: bt, type: void 0, multiple: q, ...tt ? { id: E } : { autoWidth: h, defaultOpen: b, displayEmpty: S, labelId: A, MenuProps: $, onClose: k, onOpen: U, open: B, renderValue: J, SelectDisplayProps: { id: E, ...ot } }, ...D, classes: D ? Mn(st, D.classes) : st, ...R ? R.props.inputProps : {} }, ...(q && tt || S) && bt === "outlined" ? { notched: true } : {}, ref: ht, className: Ft(it.props.className, _, vt.root), ...!R && { variant: bt }, ...dt }) });
});
O_.muiName = "Select";
function A_(a3, s) {
  const l = O.useRef(s);
  O.useEffect(function() {
    s !== l.current && a3.attributionControl != null && (l.current != null && a3.attributionControl.removeAttribution(l.current), s != null && a3.attributionControl.addAttribution(s)), l.current = s;
  }, [a3, s]);
}
function ww(a3, s, l) {
  s.center !== l.center && a3.setLatLng(s.center), s.radius != null && s.radius !== l.radius && a3.setRadius(s.radius);
}
const Ew = 1;
function Mw(a3) {
  return Object.freeze({ __version: Ew, map: a3 });
}
function R_(a3, s) {
  return Object.freeze({ ...a3, ...s });
}
const Kc = O.createContext(null);
function jl() {
  const a3 = O.use(Kc);
  if (a3 == null) throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return a3;
}
function L_(a3) {
  function s(l, c) {
    const { instance: h, context: m } = a3(l).current;
    O.useImperativeHandle(c, () => h);
    const { children: g } = l;
    return g == null ? null : En.createElement(Kc, { value: m }, g);
  }
  return O.forwardRef(s);
}
function Ow(a3) {
  function s(l, c) {
    const [h, m] = O.useState(false), { instance: g } = a3(l, m).current;
    O.useImperativeHandle(c, () => g), O.useEffect(function() {
      h && g.update();
    }, [g, h, l.children]);
    const _ = g._contentNode;
    return _ ? qc.createPortal(l.children, _) : null;
  }
  return O.forwardRef(s);
}
function Aw(a3) {
  function s(l, c) {
    const { instance: h } = a3(l).current;
    return O.useImperativeHandle(c, () => h), null;
  }
  return O.forwardRef(s);
}
function lp(a3, s) {
  const l = O.useRef(void 0);
  O.useEffect(function() {
    return s != null && a3.instance.on(s), l.current = s, function() {
      l.current != null && a3.instance.off(l.current), l.current = null;
    };
  }, [a3, s]);
}
function Qc(a3, s) {
  const l = a3.pane ?? s.pane;
  return l ? { ...a3, pane: l } : a3;
}
function Rw(a3, s) {
  return function(c, h) {
    const m = jl(), g = a3(Qc(c, m), m);
    return A_(m.map, c.attribution), lp(g.current, c.eventHandlers), s(g.current, m, c, h), g;
  };
}
var El = { exports: {} };
/* @preserve
* Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
* (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
var Lw = El.exports, py;
function zw() {
  return py || (py = 1, function(a3, s) {
    (function(l, c) {
      c(s);
    })(Lw, function(l) {
      var c = "1.9.4";
      function h(n) {
        var o, u, p, v;
        for (u = 1, p = arguments.length; u < p; u++) {
          v = arguments[u];
          for (o in v) n[o] = v[o];
        }
        return n;
      }
      var m = Object.create || /* @__PURE__ */ function() {
        function n() {
        }
        return function(o) {
          return n.prototype = o, new n();
        };
      }();
      function g(n, o) {
        var u = Array.prototype.slice;
        if (n.bind) return n.bind.apply(n, u.call(arguments, 1));
        var p = u.call(arguments, 2);
        return function() {
          return n.apply(o, p.length ? p.concat(u.call(arguments)) : arguments);
        };
      }
      var _ = 0;
      function b(n) {
        return "_leaflet_id" in n || (n._leaflet_id = ++_), n._leaflet_id;
      }
      function S(n, o, u) {
        var p, v, x, z;
        return z = function() {
          p = false, v && (x.apply(u, v), v = false);
        }, x = function() {
          p ? v = arguments : (n.apply(u, arguments), setTimeout(z, o), p = true);
        }, x;
      }
      function w(n, o, u) {
        var p = o[1], v = o[0], x = p - v;
        return n === p && u ? n : ((n - v) % x + x) % x + v;
      }
      function E() {
        return false;
      }
      function R(n, o) {
        if (o === false) return n;
        var u = Math.pow(10, o === void 0 ? 6 : o);
        return Math.round(n * u) / u;
      }
      function D(n) {
        return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
      }
      function N(n) {
        return D(n).split(/\s+/);
      }
      function A(n, o) {
        Object.prototype.hasOwnProperty.call(n, "options") || (n.options = n.options ? m(n.options) : {});
        for (var u in o) n.options[u] = o[u];
        return n.options;
      }
      function $(n, o, u) {
        var p = [];
        for (var v in n) p.push(encodeURIComponent(u ? v.toUpperCase() : v) + "=" + encodeURIComponent(n[v]));
        return (!o || o.indexOf("?") === -1 ? "?" : "&") + p.join("&");
      }
      var q = /\{ *([\w_ -]+) *\}/g;
      function tt(n, o) {
        return n.replace(q, function(u, p) {
          var v = o[p];
          if (v === void 0) throw new Error("No value provided for variable " + u);
          return typeof v == "function" && (v = v(o)), v;
        });
      }
      var k = Array.isArray || function(n) {
        return Object.prototype.toString.call(n) === "[object Array]";
      };
      function U(n, o) {
        for (var u = 0; u < n.length; u++) if (n[u] === o) return u;
        return -1;
      }
      var B = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function J(n) {
        return window["webkit" + n] || window["moz" + n] || window["ms" + n];
      }
      var ot = 0;
      function et(n) {
        var o = +/* @__PURE__ */ new Date(), u = Math.max(0, 16 - (o - ot));
        return ot = o + u, window.setTimeout(n, u);
      }
      var dt = window.requestAnimationFrame || J("RequestAnimationFrame") || et, C = window.cancelAnimationFrame || J("CancelAnimationFrame") || J("CancelRequestAnimationFrame") || function(n) {
        window.clearTimeout(n);
      };
      function Q(n, o, u) {
        if (u && dt === et) n.call(o);
        else return dt.call(window, g(n, o));
      }
      function rt(n) {
        n && C.call(window, n);
      }
      var bt = { __proto__: null, extend: h, create: m, bind: g, get lastId() {
        return _;
      }, stamp: b, throttle: S, wrapNum: w, falseFn: E, formatNum: R, trim: D, splitWords: N, setOptions: A, getParamString: $, template: tt, isArray: k, indexOf: U, emptyImageUrl: B, requestFn: dt, cancelFn: C, requestAnimFrame: Q, cancelAnimFrame: rt };
      function yt() {
      }
      yt.extend = function(n) {
        var o = function() {
          A(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, u = o.__super__ = this.prototype, p = m(u);
        p.constructor = o, o.prototype = p;
        for (var v in this) Object.prototype.hasOwnProperty.call(this, v) && v !== "prototype" && v !== "__super__" && (o[v] = this[v]);
        return n.statics && h(o, n.statics), n.includes && (vt(n.includes), h.apply(null, [p].concat(n.includes))), h(p, n), delete p.statics, delete p.includes, p.options && (p.options = u.options ? m(u.options) : {}, h(p.options, n.options)), p._initHooks = [], p.callInitHooks = function() {
          if (!this._initHooksCalled) {
            u.callInitHooks && u.callInitHooks.call(this), this._initHooksCalled = true;
            for (var x = 0, z = p._initHooks.length; x < z; x++) p._initHooks[x].call(this);
          }
        }, o;
      }, yt.include = function(n) {
        var o = this.prototype.options;
        return h(this.prototype, n), n.options && (this.prototype.options = o, this.mergeOptions(n.options)), this;
      }, yt.mergeOptions = function(n) {
        return h(this.prototype.options, n), this;
      }, yt.addInitHook = function(n) {
        var o = Array.prototype.slice.call(arguments, 1), u = typeof n == "function" ? n : function() {
          this[n].apply(this, o);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(u), this;
      };
      function vt(n) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          n = k(n) ? n : [n];
          for (var o = 0; o < n.length; o++) n[o] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var H = { on: function(n, o, u) {
        if (typeof n == "object") for (var p in n) this._on(p, n[p], o);
        else {
          n = N(n);
          for (var v = 0, x = n.length; v < x; v++) this._on(n[v], o, u);
        }
        return this;
      }, off: function(n, o, u) {
        if (!arguments.length) delete this._events;
        else if (typeof n == "object") for (var p in n) this._off(p, n[p], o);
        else {
          n = N(n);
          for (var v = arguments.length === 1, x = 0, z = n.length; x < z; x++) v ? this._off(n[x]) : this._off(n[x], o, u);
        }
        return this;
      }, _on: function(n, o, u, p) {
        if (typeof o != "function") {
          console.warn("wrong listener type: " + typeof o);
          return;
        }
        if (this._listens(n, o, u) === false) {
          u === this && (u = void 0);
          var v = { fn: o, ctx: u };
          p && (v.once = true), this._events = this._events || {}, this._events[n] = this._events[n] || [], this._events[n].push(v);
        }
      }, _off: function(n, o, u) {
        var p, v, x;
        if (this._events && (p = this._events[n], !!p)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (v = 0, x = p.length; v < x; v++) p[v].fn = E;
            delete this._events[n];
            return;
          }
          if (typeof o != "function") {
            console.warn("wrong listener type: " + typeof o);
            return;
          }
          var z = this._listens(n, o, u);
          if (z !== false) {
            var I = p[z];
            this._firingCount && (I.fn = E, this._events[n] = p = p.slice()), p.splice(z, 1);
          }
        }
      }, fire: function(n, o, u) {
        if (!this.listens(n, u)) return this;
        var p = h({}, o, { type: n, target: this, sourceTarget: o && o.sourceTarget || this });
        if (this._events) {
          var v = this._events[n];
          if (v) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var x = 0, z = v.length; x < z; x++) {
              var I = v[x], W = I.fn;
              I.once && this.off(n, W, I.ctx), W.call(I.ctx || this, p);
            }
            this._firingCount--;
          }
        }
        return u && this._propagateEvent(p), this;
      }, listens: function(n, o, u, p) {
        typeof n != "string" && console.warn('"string" type argument expected');
        var v = o;
        typeof o != "function" && (p = !!o, v = void 0, u = void 0);
        var x = this._events && this._events[n];
        if (x && x.length && this._listens(n, v, u) !== false) return true;
        if (p) {
          for (var z in this._eventParents) if (this._eventParents[z].listens(n, o, u, p)) return true;
        }
        return false;
      }, _listens: function(n, o, u) {
        if (!this._events) return false;
        var p = this._events[n] || [];
        if (!o) return !!p.length;
        u === this && (u = void 0);
        for (var v = 0, x = p.length; v < x; v++) if (p[v].fn === o && p[v].ctx === u) return v;
        return false;
      }, once: function(n, o, u) {
        if (typeof n == "object") for (var p in n) this._on(p, n[p], o, true);
        else {
          n = N(n);
          for (var v = 0, x = n.length; v < x; v++) this._on(n[v], o, u, true);
        }
        return this;
      }, addEventParent: function(n) {
        return this._eventParents = this._eventParents || {}, this._eventParents[b(n)] = n, this;
      }, removeEventParent: function(n) {
        return this._eventParents && delete this._eventParents[b(n)], this;
      }, _propagateEvent: function(n) {
        for (var o in this._eventParents) this._eventParents[o].fire(n.type, h({ layer: n.target, propagatedFrom: n.target }, n), true);
      } };
      H.addEventListener = H.on, H.removeEventListener = H.clearAllEventListeners = H.off, H.addOneTimeEventListener = H.once, H.fireEvent = H.fire, H.hasEventListeners = H.listens;
      var st = yt.extend(H);
      function it(n, o, u) {
        this.x = u ? Math.round(n) : n, this.y = u ? Math.round(o) : o;
      }
      var ht = Math.trunc || function(n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
      };
      it.prototype = { clone: function() {
        return new it(this.x, this.y);
      }, add: function(n) {
        return this.clone()._add(M(n));
      }, _add: function(n) {
        return this.x += n.x, this.y += n.y, this;
      }, subtract: function(n) {
        return this.clone()._subtract(M(n));
      }, _subtract: function(n) {
        return this.x -= n.x, this.y -= n.y, this;
      }, divideBy: function(n) {
        return this.clone()._divideBy(n);
      }, _divideBy: function(n) {
        return this.x /= n, this.y /= n, this;
      }, multiplyBy: function(n) {
        return this.clone()._multiplyBy(n);
      }, _multiplyBy: function(n) {
        return this.x *= n, this.y *= n, this;
      }, scaleBy: function(n) {
        return new it(this.x * n.x, this.y * n.y);
      }, unscaleBy: function(n) {
        return new it(this.x / n.x, this.y / n.y);
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
        return this.x = ht(this.x), this.y = ht(this.y), this;
      }, distanceTo: function(n) {
        n = M(n);
        var o = n.x - this.x, u = n.y - this.y;
        return Math.sqrt(o * o + u * u);
      }, equals: function(n) {
        return n = M(n), n.x === this.x && n.y === this.y;
      }, contains: function(n) {
        return n = M(n), Math.abs(n.x) <= Math.abs(this.x) && Math.abs(n.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + R(this.x) + ", " + R(this.y) + ")";
      } };
      function M(n, o, u) {
        return n instanceof it ? n : k(n) ? new it(n[0], n[1]) : n == null ? n : typeof n == "object" && "x" in n && "y" in n ? new it(n.x, n.y) : new it(n, o, u);
      }
      function K(n, o) {
        if (n) for (var u = o ? [n, o] : n, p = 0, v = u.length; p < v; p++) this.extend(u[p]);
      }
      K.prototype = { extend: function(n) {
        var o, u;
        if (!n) return this;
        if (n instanceof it || typeof n[0] == "number" || "x" in n) o = u = M(n);
        else if (n = ut(n), o = n.min, u = n.max, !o || !u) return this;
        return !this.min && !this.max ? (this.min = o.clone(), this.max = u.clone()) : (this.min.x = Math.min(o.x, this.min.x), this.max.x = Math.max(u.x, this.max.x), this.min.y = Math.min(o.y, this.min.y), this.max.y = Math.max(u.y, this.max.y)), this;
      }, getCenter: function(n) {
        return M((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, n);
      }, getBottomLeft: function() {
        return M(this.min.x, this.max.y);
      }, getTopRight: function() {
        return M(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(n) {
        var o, u;
        return typeof n[0] == "number" || n instanceof it ? n = M(n) : n = ut(n), n instanceof K ? (o = n.min, u = n.max) : o = u = n, o.x >= this.min.x && u.x <= this.max.x && o.y >= this.min.y && u.y <= this.max.y;
      }, intersects: function(n) {
        n = ut(n);
        var o = this.min, u = this.max, p = n.min, v = n.max, x = v.x >= o.x && p.x <= u.x, z = v.y >= o.y && p.y <= u.y;
        return x && z;
      }, overlaps: function(n) {
        n = ut(n);
        var o = this.min, u = this.max, p = n.min, v = n.max, x = v.x > o.x && p.x < u.x, z = v.y > o.y && p.y < u.y;
        return x && z;
      }, isValid: function() {
        return !!(this.min && this.max);
      }, pad: function(n) {
        var o = this.min, u = this.max, p = Math.abs(o.x - u.x) * n, v = Math.abs(o.y - u.y) * n;
        return ut(M(o.x - p, o.y - v), M(u.x + p, u.y + v));
      }, equals: function(n) {
        return n ? (n = ut(n), this.min.equals(n.getTopLeft()) && this.max.equals(n.getBottomRight())) : false;
      } };
      function ut(n, o) {
        return !n || n instanceof K ? n : new K(n, o);
      }
      function ct(n, o) {
        if (n) for (var u = o ? [n, o] : n, p = 0, v = u.length; p < v; p++) this.extend(u[p]);
      }
      ct.prototype = { extend: function(n) {
        var o = this._southWest, u = this._northEast, p, v;
        if (n instanceof _t) p = n, v = n;
        else if (n instanceof ct) {
          if (p = n._southWest, v = n._northEast, !p || !v) return this;
        } else return n ? this.extend(gt(n) || mt(n)) : this;
        return !o && !u ? (this._southWest = new _t(p.lat, p.lng), this._northEast = new _t(v.lat, v.lng)) : (o.lat = Math.min(p.lat, o.lat), o.lng = Math.min(p.lng, o.lng), u.lat = Math.max(v.lat, u.lat), u.lng = Math.max(v.lng, u.lng)), this;
      }, pad: function(n) {
        var o = this._southWest, u = this._northEast, p = Math.abs(o.lat - u.lat) * n, v = Math.abs(o.lng - u.lng) * n;
        return new ct(new _t(o.lat - p, o.lng - v), new _t(u.lat + p, u.lng + v));
      }, getCenter: function() {
        return new _t((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new _t(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new _t(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(n) {
        typeof n[0] == "number" || n instanceof _t || "lat" in n ? n = gt(n) : n = mt(n);
        var o = this._southWest, u = this._northEast, p, v;
        return n instanceof ct ? (p = n.getSouthWest(), v = n.getNorthEast()) : p = v = n, p.lat >= o.lat && v.lat <= u.lat && p.lng >= o.lng && v.lng <= u.lng;
      }, intersects: function(n) {
        n = mt(n);
        var o = this._southWest, u = this._northEast, p = n.getSouthWest(), v = n.getNorthEast(), x = v.lat >= o.lat && p.lat <= u.lat, z = v.lng >= o.lng && p.lng <= u.lng;
        return x && z;
      }, overlaps: function(n) {
        n = mt(n);
        var o = this._southWest, u = this._northEast, p = n.getSouthWest(), v = n.getNorthEast(), x = v.lat > o.lat && p.lat < u.lat, z = v.lng > o.lng && p.lng < u.lng;
        return x && z;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(n, o) {
        return n ? (n = mt(n), this._southWest.equals(n.getSouthWest(), o) && this._northEast.equals(n.getNorthEast(), o)) : false;
      }, isValid: function() {
        return !!(this._southWest && this._northEast);
      } };
      function mt(n, o) {
        return n instanceof ct ? n : new ct(n, o);
      }
      function _t(n, o, u) {
        if (isNaN(n) || isNaN(o)) throw new Error("Invalid LatLng object: (" + n + ", " + o + ")");
        this.lat = +n, this.lng = +o, u !== void 0 && (this.alt = +u);
      }
      _t.prototype = { equals: function(n, o) {
        if (!n) return false;
        n = gt(n);
        var u = Math.max(Math.abs(this.lat - n.lat), Math.abs(this.lng - n.lng));
        return u <= (o === void 0 ? 1e-9 : o);
      }, toString: function(n) {
        return "LatLng(" + R(this.lat, n) + ", " + R(this.lng, n) + ")";
      }, distanceTo: function(n) {
        return Lt.distance(this, gt(n));
      }, wrap: function() {
        return Lt.wrapLatLng(this);
      }, toBounds: function(n) {
        var o = 180 * n / 40075017, u = o / Math.cos(Math.PI / 180 * this.lat);
        return mt([this.lat - o, this.lng - u], [this.lat + o, this.lng + u]);
      }, clone: function() {
        return new _t(this.lat, this.lng, this.alt);
      } };
      function gt(n, o, u) {
        return n instanceof _t ? n : k(n) && typeof n[0] != "object" ? n.length === 3 ? new _t(n[0], n[1], n[2]) : n.length === 2 ? new _t(n[0], n[1]) : null : n == null ? n : typeof n == "object" && "lat" in n ? new _t(n.lat, "lng" in n ? n.lng : n.lon, n.alt) : o === void 0 ? null : new _t(n, o, u);
      }
      var Nt = { latLngToPoint: function(n, o) {
        var u = this.projection.project(n), p = this.scale(o);
        return this.transformation._transform(u, p);
      }, pointToLatLng: function(n, o) {
        var u = this.scale(o), p = this.transformation.untransform(n, u);
        return this.projection.unproject(p);
      }, project: function(n) {
        return this.projection.project(n);
      }, unproject: function(n) {
        return this.projection.unproject(n);
      }, scale: function(n) {
        return 256 * Math.pow(2, n);
      }, zoom: function(n) {
        return Math.log(n / 256) / Math.LN2;
      }, getProjectedBounds: function(n) {
        if (this.infinite) return null;
        var o = this.projection.bounds, u = this.scale(n), p = this.transformation.transform(o.min, u), v = this.transformation.transform(o.max, u);
        return new K(p, v);
      }, infinite: false, wrapLatLng: function(n) {
        var o = this.wrapLng ? w(n.lng, this.wrapLng, true) : n.lng, u = this.wrapLat ? w(n.lat, this.wrapLat, true) : n.lat, p = n.alt;
        return new _t(u, o, p);
      }, wrapLatLngBounds: function(n) {
        var o = n.getCenter(), u = this.wrapLatLng(o), p = o.lat - u.lat, v = o.lng - u.lng;
        if (p === 0 && v === 0) return n;
        var x = n.getSouthWest(), z = n.getNorthEast(), I = new _t(x.lat - p, x.lng - v), W = new _t(z.lat - p, z.lng - v);
        return new ct(I, W);
      } }, Lt = h({}, Nt, { wrapLng: [-180, 180], R: 6371e3, distance: function(n, o) {
        var u = Math.PI / 180, p = n.lat * u, v = o.lat * u, x = Math.sin((o.lat - n.lat) * u / 2), z = Math.sin((o.lng - n.lng) * u / 2), I = x * x + Math.cos(p) * Math.cos(v) * z * z, W = 2 * Math.atan2(Math.sqrt(I), Math.sqrt(1 - I));
        return this.R * W;
      } }), le = 6378137, Dt = { R: le, MAX_LATITUDE: 85.0511287798, project: function(n) {
        var o = Math.PI / 180, u = this.MAX_LATITUDE, p = Math.max(Math.min(u, n.lat), -u), v = Math.sin(p * o);
        return new it(this.R * n.lng * o, this.R * Math.log((1 + v) / (1 - v)) / 2);
      }, unproject: function(n) {
        var o = 180 / Math.PI;
        return new _t((2 * Math.atan(Math.exp(n.y / this.R)) - Math.PI / 2) * o, n.x * o / this.R);
      }, bounds: function() {
        var n = le * Math.PI;
        return new K([-n, -n], [n, n]);
      }() };
      function Gt(n, o, u, p) {
        if (k(n)) {
          this._a = n[0], this._b = n[1], this._c = n[2], this._d = n[3];
          return;
        }
        this._a = n, this._b = o, this._c = u, this._d = p;
      }
      Gt.prototype = { transform: function(n, o) {
        return this._transform(n.clone(), o);
      }, _transform: function(n, o) {
        return o = o || 1, n.x = o * (this._a * n.x + this._b), n.y = o * (this._c * n.y + this._d), n;
      }, untransform: function(n, o) {
        return o = o || 1, new it((n.x / o - this._b) / this._a, (n.y / o - this._d) / this._c);
      } };
      function It(n, o, u, p) {
        return new Gt(n, o, u, p);
      }
      var Oe = h({}, Lt, { code: "EPSG:3857", projection: Dt, transformation: function() {
        var n = 0.5 / (Math.PI * Dt.R);
        return It(n, 0.5, -n, 0.5);
      }() }), Zt = h({}, Oe, { code: "EPSG:900913" });
      function ue(n) {
        return document.createElementNS("http://www.w3.org/2000/svg", n);
      }
      function nn(n, o) {
        var u = "", p, v, x, z, I, W;
        for (p = 0, x = n.length; p < x; p++) {
          for (I = n[p], v = 0, z = I.length; v < z; v++) W = I[v], u += (v ? "L" : "M") + W.x + " " + W.y;
          u += o ? Et.svg ? "z" : "x" : "";
        }
        return u || "M0 0";
      }
      var ie = document.documentElement.style, _e = "ActiveXObject" in window, Me = _e && !document.addEventListener, Ae = "msLaunchUri" in navigator && !("documentMode" in document), ce = Nn("webkit"), wt = Nn("android"), kn = Nn("android 2") || Nn("android 3"), Ie = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), qn = wt && Nn("Google") && Ie < 537 && !("AudioNode" in window), pe = !!window.opera, Ht = !Ae && Nn("chrome"), ae = Nn("gecko") && !ce && !pe && !_e, te = !Ht && Nn("safari"), yn = Nn("phantom"), oe = "OTransition" in ie, Ri = navigator.platform.indexOf("Win") === 0, Gn = _e && "transition" in ie, Mt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !kn, Qt = "MozPerspective" in ie, Re = !window.L_DISABLE_3D && (Gn || Mt || Qt) && !oe && !yn, an = typeof orientation < "u" || Nn("mobile"), dr = an && ce, Il = an && Mt, ps = !window.PointerEvent && window.MSPointerEvent, hr = !!(window.PointerEvent || ps), ka = "ontouchstart" in window || !!window.TouchEvent, Jc = !window.L_NO_TOUCH && (ka || hr), $l = an && pe, ql = an && ae, ms = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, gs = function() {
        var n = false;
        try {
          var o = Object.defineProperty({}, "passive", { get: function() {
            n = true;
          } });
          window.addEventListener("testPassiveEventSupport", E, o), window.removeEventListener("testPassiveEventSupport", E, o);
        } catch {
        }
        return n;
      }(), Gl = function() {
        return !!document.createElement("canvas").getContext;
      }(), vs = !!(document.createElementNS && ue("svg").createSVGRect), Li = !!vs && function() {
        var n = document.createElement("div");
        return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), on = !vs && function() {
        try {
          var n = document.createElement("div");
          n.innerHTML = '<v:shape adj="1"/>';
          var o = n.firstChild;
          return o.style.behavior = "url(#default#VML)", o && typeof o.adj == "object";
        } catch {
          return false;
        }
      }(), _n = navigator.platform.indexOf("Mac") === 0, Na = navigator.platform.indexOf("Linux") === 0;
      function Nn(n) {
        return navigator.userAgent.toLowerCase().indexOf(n) >= 0;
      }
      var Et = { ie: _e, ielt9: Me, edge: Ae, webkit: ce, android: wt, android23: kn, androidStock: qn, opera: pe, chrome: Ht, gecko: ae, safari: te, phantom: yn, opera12: oe, win: Ri, ie3d: Gn, webkit3d: Mt, gecko3d: Qt, any3d: Re, mobile: an, mobileWebkit: dr, mobileWebkit3d: Il, msPointer: ps, pointer: hr, touch: Jc, touchNative: ka, mobileOpera: $l, mobileGecko: ql, retina: ms, passiveEvents: gs, canvas: Gl, svg: vs, vml: on, inlineSvg: Li, mac: _n, linux: Na }, Vl = Et.msPointer ? "MSPointerDown" : "pointerdown", ys = Et.msPointer ? "MSPointerMove" : "pointermove", Da = Et.msPointer ? "MSPointerUp" : "pointerup", pr = Et.msPointer ? "MSPointerCancel" : "pointercancel", zi = { touchstart: Vl, touchmove: ys, touchend: Da, touchcancel: pr }, ta = { touchstart: Kl, touchmove: Lo, touchend: Lo, touchcancel: Lo }, ri = {}, ea = false;
      function Ve(n, o, u) {
        return o === "touchstart" && tf(), ta[o] ? (u = ta[o].bind(this, u), n.addEventListener(zi[o], u, false), u) : (console.warn("wrong event specified:", o), E);
      }
      function Yl(n, o, u) {
        if (!zi[o]) {
          console.warn("wrong event specified:", o);
          return;
        }
        n.removeEventListener(zi[o], u, false);
      }
      function Xl(n) {
        ri[n.pointerId] = n;
      }
      function na(n) {
        ri[n.pointerId] && (ri[n.pointerId] = n);
      }
      function ia(n) {
        delete ri[n.pointerId];
      }
      function tf() {
        ea || (document.addEventListener(Vl, Xl, true), document.addEventListener(ys, na, true), document.addEventListener(Da, ia, true), document.addEventListener(pr, ia, true), ea = true);
      }
      function Lo(n, o) {
        if (o.pointerType !== (o.MSPOINTER_TYPE_MOUSE || "mouse")) {
          o.touches = [];
          for (var u in ri) o.touches.push(ri[u]);
          o.changedTouches = [o], n(o);
        }
      }
      function Kl(n, o) {
        o.MSPOINTER_TYPE_TOUCH && o.pointerType === o.MSPOINTER_TYPE_TOUCH && He(o), Lo(n, o);
      }
      function ef(n) {
        var o = {}, u, p;
        for (p in n) u = n[p], o[p] = u && u.bind ? u.bind(n) : u;
        return n = o, o.type = "dblclick", o.detail = 2, o.isTrusted = false, o._simulated = true, o;
      }
      var mr = 200;
      function gr(n, o) {
        n.addEventListener("dblclick", o);
        var u = 0, p;
        function v(x) {
          if (x.detail !== 1) {
            p = x.detail;
            return;
          }
          if (!(x.pointerType === "mouse" || x.sourceCapabilities && !x.sourceCapabilities.firesTouchEvents)) {
            var z = Ss(x);
            if (!(z.some(function(W) {
              return W instanceof HTMLLabelElement && W.attributes.for;
            }) && !z.some(function(W) {
              return W instanceof HTMLInputElement || W instanceof HTMLSelectElement;
            }))) {
              var I = Date.now();
              I - u <= mr ? (p++, p === 2 && o(ef(x))) : p = 1, u = I;
            }
          }
        }
        return n.addEventListener("click", v), { dblclick: o, simDblclick: v };
      }
      function bi(n, o) {
        n.removeEventListener("dblclick", o.dblclick), n.removeEventListener("click", o.simDblclick);
      }
      var zo = ja(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), Ha = ja(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), aa = Ha === "webkitTransition" || Ha === "OTransition" ? Ha + "End" : "transitionend";
      function vr(n) {
        return typeof n == "string" ? document.getElementById(n) : n;
      }
      function oa(n, o) {
        var u = n.style[o] || n.currentStyle && n.currentStyle[o];
        if ((!u || u === "auto") && document.defaultView) {
          var p = document.defaultView.getComputedStyle(n, null);
          u = p ? p[o] : null;
        }
        return u === "auto" ? null : u;
      }
      function Wt(n, o, u) {
        var p = document.createElement(n);
        return p.className = o || "", u && u.appendChild(p), p;
      }
      function Te(n) {
        var o = n.parentNode;
        o && o.removeChild(n);
      }
      function fn(n) {
        for (; n.firstChild; ) n.removeChild(n.firstChild);
      }
      function ra(n) {
        var o = n.parentNode;
        o && o.lastChild !== n && o.appendChild(n);
      }
      function Ua(n) {
        var o = n.parentNode;
        o && o.firstChild !== n && o.insertBefore(n, o.firstChild);
      }
      function Za(n, o) {
        if (n.classList !== void 0) return n.classList.contains(o);
        var u = dn(n);
        return u.length > 0 && new RegExp("(^|\\s)" + o + "(\\s|$)").test(u);
      }
      function Ut(n, o) {
        if (n.classList !== void 0) for (var u = N(o), p = 0, v = u.length; p < v; p++) n.classList.add(u[p]);
        else if (!Za(n, o)) {
          var x = dn(n);
          _s(n, (x ? x + " " : "") + o);
        }
      }
      function Ce(n, o) {
        n.classList !== void 0 ? n.classList.remove(o) : _s(n, D((" " + dn(n) + " ").replace(" " + o + " ", " ")));
      }
      function _s(n, o) {
        n.className.baseVal === void 0 ? n.className = o : n.className.baseVal = o;
      }
      function dn(n) {
        return n.correspondingElement && (n = n.correspondingElement), n.className.baseVal === void 0 ? n.className : n.className.baseVal;
      }
      function bn(n, o) {
        "opacity" in n.style ? n.style.opacity = o : "filter" in n.style && Ql(n, o);
      }
      function Ql(n, o) {
        var u = false, p = "DXImageTransform.Microsoft.Alpha";
        try {
          u = n.filters.item(p);
        } catch {
          if (o === 1) return;
        }
        o = Math.round(o * 100), u ? (u.Enabled = o !== 100, u.Opacity = o) : n.style.filter += " progid:" + p + "(opacity=" + o + ")";
      }
      function ja(n) {
        for (var o = document.documentElement.style, u = 0; u < n.length; u++) if (n[u] in o) return n[u];
        return false;
      }
      function Dn(n, o, u) {
        var p = o || new it(0, 0);
        n.style[zo] = (Et.ie3d ? "translate(" + p.x + "px," + p.y + "px)" : "translate3d(" + p.x + "px," + p.y + "px,0)") + (u ? " scale(" + u + ")" : "");
      }
      function ke(n, o) {
        n._leaflet_pos = o, Et.any3d ? Dn(n, o) : (n.style.left = o.x + "px", n.style.top = o.y + "px");
      }
      function Pi(n) {
        return n._leaflet_pos || new it(0, 0);
      }
      var si, Po, yr;
      if ("onselectstart" in document) si = function() {
        kt(window, "selectstart", He);
      }, Po = function() {
        ee(window, "selectstart", He);
      };
      else {
        var Ia = ja(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        si = function() {
          if (Ia) {
            var n = document.documentElement.style;
            yr = n[Ia], n[Ia] = "none";
          }
        }, Po = function() {
          Ia && (document.documentElement.style[Ia] = yr, yr = void 0);
        };
      }
      function Bo() {
        kt(window, "dragstart", He);
      }
      function bs() {
        ee(window, "dragstart", He);
      }
      var _r, $a;
      function ko(n) {
        for (; n.tabIndex === -1; ) n = n.parentNode;
        n.style && (qa(), _r = n, $a = n.style.outlineStyle, n.style.outlineStyle = "none", kt(window, "keydown", qa));
      }
      function qa() {
        _r && (_r.style.outlineStyle = $a, _r = void 0, $a = void 0, ee(window, "keydown", qa));
      }
      function sa(n) {
        do
          n = n.parentNode;
        while ((!n.offsetWidth || !n.offsetHeight) && n !== document.body);
        return n;
      }
      function Bi(n) {
        var o = n.getBoundingClientRect();
        return { x: o.width / n.offsetWidth || 1, y: o.height / n.offsetHeight || 1, boundingClientRect: o };
      }
      var Fl = { __proto__: null, TRANSFORM: zo, TRANSITION: Ha, TRANSITION_END: aa, get: vr, getStyle: oa, create: Wt, remove: Te, empty: fn, toFront: ra, toBack: Ua, hasClass: Za, addClass: Ut, removeClass: Ce, setClass: _s, getClass: dn, setOpacity: bn, testProp: ja, setTransform: Dn, setPosition: ke, getPosition: Pi, get disableTextSelection() {
        return si;
      }, get enableTextSelection() {
        return Po;
      }, disableImageDrag: Bo, enableImageDrag: bs, preventOutline: ko, restoreOutline: qa, getSizedParentNode: sa, getScale: Bi };
      function kt(n, o, u, p) {
        if (o && typeof o == "object") for (var v in o) la(n, v, o[v], u);
        else {
          o = N(o);
          for (var x = 0, z = o.length; x < z; x++) la(n, o[x], u, p);
        }
        return this;
      }
      var Vn = "_leaflet_events";
      function ee(n, o, u, p) {
        if (arguments.length === 1) li(n), delete n[Vn];
        else if (o && typeof o == "object") for (var v in o) ui(n, v, o[v], u);
        else if (o = N(o), arguments.length === 2) li(n, function(I) {
          return U(o, I) !== -1;
        });
        else for (var x = 0, z = o.length; x < z; x++) ui(n, o[x], u, p);
        return this;
      }
      function li(n, o) {
        for (var u in n[Vn]) {
          var p = u.split(/\d/)[0];
          (!o || o(p)) && ui(n, p, null, null, u);
        }
      }
      var No = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
      function la(n, o, u, p) {
        var v = o + b(u) + (p ? "_" + b(p) : "");
        if (n[Vn] && n[Vn][v]) return this;
        var x = function(I) {
          return u.call(p || n, I || window.event);
        }, z = x;
        !Et.touchNative && Et.pointer && o.indexOf("touch") === 0 ? x = Ve(n, o, x) : Et.touch && o === "dblclick" ? x = gr(n, x) : "addEventListener" in n ? o === "touchstart" || o === "touchmove" || o === "wheel" || o === "mousewheel" ? n.addEventListener(No[o] || o, x, Et.passiveEvents ? { passive: false } : false) : o === "mouseenter" || o === "mouseleave" ? (x = function(I) {
          I = I || window.event, ca(n, I) && z(I);
        }, n.addEventListener(No[o], x, false)) : n.addEventListener(o, z, false) : n.attachEvent("on" + o, x), n[Vn] = n[Vn] || {}, n[Vn][v] = x;
      }
      function ui(n, o, u, p, v) {
        v = v || o + b(u) + (p ? "_" + b(p) : "");
        var x = n[Vn] && n[Vn][v];
        if (!x) return this;
        !Et.touchNative && Et.pointer && o.indexOf("touch") === 0 ? Yl(n, o, x) : Et.touch && o === "dblclick" ? bi(n, x) : "removeEventListener" in n ? n.removeEventListener(No[o] || o, x, false) : n.detachEvent("on" + o, x), n[Vn][v] = null;
      }
      function Si(n) {
        return n.stopPropagation ? n.stopPropagation() : n.originalEvent ? n.originalEvent._stopped = true : n.cancelBubble = true, this;
      }
      function Ga(n) {
        return la(n, "wheel", Si), this;
      }
      function Va(n) {
        return kt(n, "mousedown touchstart dblclick contextmenu", Si), n._leaflet_disable_click = true, this;
      }
      function He(n) {
        return n.preventDefault ? n.preventDefault() : n.returnValue = false, this;
      }
      function ci(n) {
        return He(n), Si(n), this;
      }
      function Ss(n) {
        if (n.composedPath) return n.composedPath();
        for (var o = [], u = n.target; u; ) o.push(u), u = u.parentNode;
        return o;
      }
      function hn(n, o) {
        if (!o) return new it(n.clientX, n.clientY);
        var u = Bi(o), p = u.boundingClientRect;
        return new it((n.clientX - p.left) / u.x - o.clientLeft, (n.clientY - p.top) / u.y - o.clientTop);
      }
      var ua = Et.linux && Et.chrome ? window.devicePixelRatio : Et.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Do(n) {
        return Et.edge ? n.wheelDeltaY / 2 : n.deltaY && n.deltaMode === 0 ? -n.deltaY / ua : n.deltaY && n.deltaMode === 1 ? -n.deltaY * 20 : n.deltaY && n.deltaMode === 2 ? -n.deltaY * 60 : n.deltaX || n.deltaZ ? 0 : n.wheelDelta ? (n.wheelDeltaY || n.wheelDelta) / 2 : n.detail && Math.abs(n.detail) < 32765 ? -n.detail * 20 : n.detail ? n.detail / -32765 * 60 : 0;
      }
      function ca(n, o) {
        var u = o.relatedTarget;
        if (!u) return true;
        try {
          for (; u && u !== n; ) u = u.parentNode;
        } catch {
          return false;
        }
        return u !== n;
      }
      var nf = { __proto__: null, on: kt, off: ee, stopPropagation: Si, disableScrollPropagation: Ga, disableClickPropagation: Va, preventDefault: He, stop: ci, getPropagationPath: Ss, getMousePosition: hn, getWheelDelta: Do, isExternalTarget: ca, addListener: kt, removeListener: ee }, br = st.extend({ run: function(n, o, u, p) {
        this.stop(), this._el = n, this._inProgress = true, this._duration = u || 0.25, this._easeOutPower = 1 / Math.max(p || 0.5, 0.2), this._startPos = Pi(n), this._offset = o.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(true), this._complete());
      }, _animate: function() {
        this._animId = Q(this._animate, this), this._step();
      }, _step: function(n) {
        var o = +/* @__PURE__ */ new Date() - this._startTime, u = this._duration * 1e3;
        o < u ? this._runFrame(this._easeOut(o / u), n) : (this._runFrame(1), this._complete());
      }, _runFrame: function(n, o) {
        var u = this._startPos.add(this._offset.multiplyBy(n));
        o && u._round(), ke(this._el, u), this.fire("step");
      }, _complete: function() {
        rt(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(n) {
        return 1 - Math.pow(1 - n, this._easeOutPower);
      } }), Vt = st.extend({ options: { crs: Oe, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true }, initialize: function(n, o) {
        o = A(this, o), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(n), this._initLayout(), this._onResize = g(this._onResize, this), this._initEvents(), o.maxBounds && this.setMaxBounds(o.maxBounds), o.zoom !== void 0 && (this._zoom = this._limitZoom(o.zoom)), o.center && o.zoom !== void 0 && this.setView(gt(o.center), o.zoom, { reset: true }), this.callInitHooks(), this._zoomAnimated = Ha && Et.any3d && !Et.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), kt(this._proxy, aa, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(n, o, u) {
        if (o = o === void 0 ? this._zoom : this._limitZoom(o), n = this._limitCenter(gt(n), o, this.options.maxBounds), u = u || {}, this._stop(), this._loaded && !u.reset && u !== true) {
          u.animate !== void 0 && (u.zoom = h({ animate: u.animate }, u.zoom), u.pan = h({ animate: u.animate, duration: u.duration }, u.pan));
          var p = this._zoom !== o ? this._tryAnimatedZoom && this._tryAnimatedZoom(n, o, u.zoom) : this._tryAnimatedPan(n, u.pan);
          if (p) return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(n, o, u.pan && u.pan.noMoveStart), this;
      }, setZoom: function(n, o) {
        return this._loaded ? this.setView(this.getCenter(), n, { zoom: o }) : (this._zoom = n, this);
      }, zoomIn: function(n, o) {
        return n = n || (Et.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + n, o);
      }, zoomOut: function(n, o) {
        return n = n || (Et.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - n, o);
      }, setZoomAround: function(n, o, u) {
        var p = this.getZoomScale(o), v = this.getSize().divideBy(2), x = n instanceof it ? n : this.latLngToContainerPoint(n), z = x.subtract(v).multiplyBy(1 - 1 / p), I = this.containerPointToLatLng(v.add(z));
        return this.setView(I, o, { zoom: u });
      }, _getBoundsCenterZoom: function(n, o) {
        o = o || {}, n = n.getBounds ? n.getBounds() : mt(n);
        var u = M(o.paddingTopLeft || o.padding || [0, 0]), p = M(o.paddingBottomRight || o.padding || [0, 0]), v = this.getBoundsZoom(n, false, u.add(p));
        if (v = typeof o.maxZoom == "number" ? Math.min(o.maxZoom, v) : v, v === 1 / 0) return { center: n.getCenter(), zoom: v };
        var x = p.subtract(u).divideBy(2), z = this.project(n.getSouthWest(), v), I = this.project(n.getNorthEast(), v), W = this.unproject(z.add(I).divideBy(2).add(x), v);
        return { center: W, zoom: v };
      }, fitBounds: function(n, o) {
        if (n = mt(n), !n.isValid()) throw new Error("Bounds are not valid.");
        var u = this._getBoundsCenterZoom(n, o);
        return this.setView(u.center, u.zoom, o);
      }, fitWorld: function(n) {
        return this.fitBounds([[-90, -180], [90, 180]], n);
      }, panTo: function(n, o) {
        return this.setView(n, this._zoom, { pan: o });
      }, panBy: function(n, o) {
        if (n = M(n).round(), o = o || {}, !n.x && !n.y) return this.fire("moveend");
        if (o.animate !== true && !this.getSize().contains(n)) return this._resetView(this.unproject(this.project(this.getCenter()).add(n)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new br(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), o.noMoveStart || this.fire("movestart"), o.animate !== false) {
          Ut(this._mapPane, "leaflet-pan-anim");
          var u = this._getMapPanePos().subtract(n).round();
          this._panAnim.run(this._mapPane, u, o.duration || 0.25, o.easeLinearity);
        } else this._rawPanBy(n), this.fire("move").fire("moveend");
        return this;
      }, flyTo: function(n, o, u) {
        if (u = u || {}, u.animate === false || !Et.any3d) return this.setView(n, o, u);
        this._stop();
        var p = this.project(this.getCenter()), v = this.project(n), x = this.getSize(), z = this._zoom;
        n = gt(n), o = o === void 0 ? z : o;
        var I = Math.max(x.x, x.y), W = I * this.getZoomScale(z, o), pt = v.distanceTo(p) || 1, St = 1.42, xt = St * St;
        function Ct(Le) {
          var hi = Le ? -1 : 1, Ci = Le ? W : I, Ui = W * W - I * I + hi * xt * xt * pt * pt, wi = 2 * Ci * xt * pt, Qo = Ui / wi, Pr = Math.sqrt(Qo * Qo + 1) - Qo, Fo = Pr < 1e-9 ? -18 : Math.log(Pr);
          return Fo;
        }
        function Pt(Le) {
          return (Math.exp(Le) - Math.exp(-Le)) / 2;
        }
        function we(Le) {
          return (Math.exp(Le) + Math.exp(-Le)) / 2;
        }
        function Ne(Le) {
          return Pt(Le) / we(Le);
        }
        var sn = Ct(0);
        function Hn(Le) {
          return I * (we(sn) / we(sn + St * Le));
        }
        function gu(Le) {
          return I * (we(sn) * Ne(sn + St * Le) - Pt(sn)) / xt;
        }
        function vu(Le) {
          return 1 - Math.pow(1 - Le, 1.5);
        }
        var Ko = Date.now(), ao = (Ct(1) - sn) / St, yu = u.duration ? 1e3 * u.duration : 1e3 * ao * 0.8;
        function oo() {
          var Le = (Date.now() - Ko) / yu, hi = vu(Le) * ao;
          Le <= 1 ? (this._flyToFrame = Q(oo, this), this._move(this.unproject(p.add(v.subtract(p).multiplyBy(gu(hi) / pt)), z), this.getScaleZoom(I / Hn(hi), z), { flyTo: true })) : this._move(n, o)._moveEnd(true);
        }
        return this._moveStart(true, u.noMoveStart), oo.call(this), this;
      }, flyToBounds: function(n, o) {
        var u = this._getBoundsCenterZoom(n, o);
        return this.flyTo(u.center, u.zoom, o);
      }, setMaxBounds: function(n) {
        return n = mt(n), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), n.isValid() ? (this.options.maxBounds = n, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      }, setMinZoom: function(n) {
        var o = this.options.minZoom;
        return this.options.minZoom = n, this._loaded && o !== n && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(n) : this;
      }, setMaxZoom: function(n) {
        var o = this.options.maxZoom;
        return this.options.maxZoom = n, this._loaded && o !== n && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(n) : this;
      }, panInsideBounds: function(n, o) {
        this._enforcingBounds = true;
        var u = this.getCenter(), p = this._limitCenter(u, this._zoom, mt(n));
        return u.equals(p) || this.panTo(p, o), this._enforcingBounds = false, this;
      }, panInside: function(n, o) {
        o = o || {};
        var u = M(o.paddingTopLeft || o.padding || [0, 0]), p = M(o.paddingBottomRight || o.padding || [0, 0]), v = this.project(this.getCenter()), x = this.project(n), z = this.getPixelBounds(), I = ut([z.min.add(u), z.max.subtract(p)]), W = I.getSize();
        if (!I.contains(x)) {
          this._enforcingBounds = true;
          var pt = x.subtract(I.getCenter()), St = I.extend(x).getSize().subtract(W);
          v.x += pt.x < 0 ? -St.x : St.x, v.y += pt.y < 0 ? -St.y : St.y, this.panTo(this.unproject(v), o), this._enforcingBounds = false;
        }
        return this;
      }, invalidateSize: function(n) {
        if (!this._loaded) return this;
        n = h({ animate: false, pan: true }, n === true ? { animate: true } : n);
        var o = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var u = this.getSize(), p = o.divideBy(2).round(), v = u.divideBy(2).round(), x = p.subtract(v);
        return !x.x && !x.y ? this : (n.animate && n.pan ? this.panBy(x) : (n.pan && this._rawPanBy(x), this.fire("move"), n.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(g(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: o, newSize: u }));
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(n) {
        if (n = this._locateOptions = h({ timeout: 1e4, watch: false }, n), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
        var o = g(this._handleGeolocationResponse, this), u = g(this._handleGeolocationError, this);
        return n.watch ? this._locationWatchId = navigator.geolocation.watchPosition(o, u, n) : navigator.geolocation.getCurrentPosition(o, u, n), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
      }, _handleGeolocationError: function(n) {
        if (this._container._leaflet_id) {
          var o = n.code, u = n.message || (o === 1 ? "permission denied" : o === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: o, message: "Geolocation error: " + u + "." });
        }
      }, _handleGeolocationResponse: function(n) {
        if (this._container._leaflet_id) {
          var o = n.coords.latitude, u = n.coords.longitude, p = new _t(o, u), v = p.toBounds(n.coords.accuracy * 2), x = this._locateOptions;
          if (x.setView) {
            var z = this.getBoundsZoom(v);
            this.setView(p, x.maxZoom ? Math.min(z, x.maxZoom) : z);
          }
          var I = { latlng: p, bounds: v, timestamp: n.timestamp };
          for (var W in n.coords) typeof n.coords[W] == "number" && (I[W] = n.coords[W]);
          this.fire("locationfound", I);
        }
      }, addHandler: function(n, o) {
        if (!o) return this;
        var u = this[n] = new o(this);
        return this._handlers.push(u), this.options[n] && u.enable(), this;
      }, remove: function() {
        if (this._initEvents(true), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Te(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (rt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var n;
        for (n in this._layers) this._layers[n].remove();
        for (n in this._panes) Te(this._panes[n]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(n, o) {
        var u = "leaflet-pane" + (n ? " leaflet-" + n.replace("Pane", "") + "-pane" : ""), p = Wt("div", u, o || this._mapPane);
        return n && (this._panes[n] = p), p;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var n = this.getPixelBounds(), o = this.unproject(n.getBottomLeft()), u = this.unproject(n.getTopRight());
        return new ct(o, u);
      }, getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(n, o, u) {
        n = mt(n), u = M(u || [0, 0]);
        var p = this.getZoom() || 0, v = this.getMinZoom(), x = this.getMaxZoom(), z = n.getNorthWest(), I = n.getSouthEast(), W = this.getSize().subtract(u), pt = ut(this.project(I, p), this.project(z, p)).getSize(), St = Et.any3d ? this.options.zoomSnap : 1, xt = W.x / pt.x, Ct = W.y / pt.y, Pt = o ? Math.max(xt, Ct) : Math.min(xt, Ct);
        return p = this.getScaleZoom(Pt, p), St && (p = Math.round(p / (St / 100)) * (St / 100), p = o ? Math.ceil(p / St) * St : Math.floor(p / St) * St), Math.max(v, Math.min(x, p));
      }, getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new it(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(n, o) {
        var u = this._getTopLeftPoint(n, o);
        return new K(u, u.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(n) {
        return this.options.crs.getProjectedBounds(n === void 0 ? this.getZoom() : n);
      }, getPane: function(n) {
        return typeof n == "string" ? this._panes[n] : n;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(n, o) {
        var u = this.options.crs;
        return o = o === void 0 ? this._zoom : o, u.scale(n) / u.scale(o);
      }, getScaleZoom: function(n, o) {
        var u = this.options.crs;
        o = o === void 0 ? this._zoom : o;
        var p = u.zoom(n * u.scale(o));
        return isNaN(p) ? 1 / 0 : p;
      }, project: function(n, o) {
        return o = o === void 0 ? this._zoom : o, this.options.crs.latLngToPoint(gt(n), o);
      }, unproject: function(n, o) {
        return o = o === void 0 ? this._zoom : o, this.options.crs.pointToLatLng(M(n), o);
      }, layerPointToLatLng: function(n) {
        var o = M(n).add(this.getPixelOrigin());
        return this.unproject(o);
      }, latLngToLayerPoint: function(n) {
        var o = this.project(gt(n))._round();
        return o._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(n) {
        return this.options.crs.wrapLatLng(gt(n));
      }, wrapLatLngBounds: function(n) {
        return this.options.crs.wrapLatLngBounds(mt(n));
      }, distance: function(n, o) {
        return this.options.crs.distance(gt(n), gt(o));
      }, containerPointToLayerPoint: function(n) {
        return M(n).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(n) {
        return M(n).add(this._getMapPanePos());
      }, containerPointToLatLng: function(n) {
        var o = this.containerPointToLayerPoint(M(n));
        return this.layerPointToLatLng(o);
      }, latLngToContainerPoint: function(n) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(gt(n)));
      }, mouseEventToContainerPoint: function(n) {
        return hn(n, this._container);
      }, mouseEventToLayerPoint: function(n) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n));
      }, mouseEventToLatLng: function(n) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(n));
      }, _initContainer: function(n) {
        var o = this._container = vr(n);
        if (o) {
          if (o._leaflet_id) throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        kt(o, "scroll", this._onScroll, this), this._containerId = b(o);
      }, _initLayout: function() {
        var n = this._container;
        this._fadeAnimated = this.options.fadeAnimation && Et.any3d, Ut(n, "leaflet-container" + (Et.touch ? " leaflet-touch" : "") + (Et.retina ? " leaflet-retina" : "") + (Et.ielt9 ? " leaflet-oldie" : "") + (Et.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var o = oa(n, "position");
        o !== "absolute" && o !== "relative" && o !== "fixed" && o !== "sticky" && (n.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var n = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ke(this._mapPane, new it(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ut(n.markerPane, "leaflet-zoom-hide"), Ut(n.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(n, o, u) {
        ke(this._mapPane, new it(0, 0));
        var p = !this._loaded;
        this._loaded = true, o = this._limitZoom(o), this.fire("viewprereset");
        var v = this._zoom !== o;
        this._moveStart(v, u)._move(n, o)._moveEnd(v), this.fire("viewreset"), p && this.fire("load");
      }, _moveStart: function(n, o) {
        return n && this.fire("zoomstart"), o || this.fire("movestart"), this;
      }, _move: function(n, o, u, p) {
        o === void 0 && (o = this._zoom);
        var v = this._zoom !== o;
        return this._zoom = o, this._lastCenter = n, this._pixelOrigin = this._getNewPixelOrigin(n), p ? u && u.pinch && this.fire("zoom", u) : ((v || u && u.pinch) && this.fire("zoom", u), this.fire("move", u)), this;
      }, _moveEnd: function(n) {
        return n && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return rt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(n) {
        ke(this._mapPane, this._getMapPanePos().subtract(n));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      }, _initEvents: function(n) {
        this._targets = {}, this._targets[b(this._container)] = this;
        var o = n ? ee : kt;
        o(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && o(window, "resize", this._onResize, this), Et.any3d && this.options.transform3DLimit && (n ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        rt(this._resizeRequest), this._resizeRequest = Q(function() {
          this.invalidateSize({ debounceMoveend: true });
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var n = this._getMapPanePos();
        Math.max(Math.abs(n.x), Math.abs(n.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(n, o) {
        for (var u = [], p, v = o === "mouseout" || o === "mouseover", x = n.target || n.srcElement, z = false; x; ) {
          if (p = this._targets[b(x)], p && (o === "click" || o === "preclick") && this._draggableMoved(p)) {
            z = true;
            break;
          }
          if (p && p.listens(o, true) && (v && !ca(x, n) || (u.push(p), v)) || x === this._container) break;
          x = x.parentNode;
        }
        return !u.length && !z && !v && this.listens(o, true) && (u = [this]), u;
      }, _isClickDisabled: function(n) {
        for (; n && n !== this._container; ) {
          if (n._leaflet_disable_click) return true;
          n = n.parentNode;
        }
      }, _handleDOMEvent: function(n) {
        var o = n.target || n.srcElement;
        if (!(!this._loaded || o._leaflet_disable_events || n.type === "click" && this._isClickDisabled(o))) {
          var u = n.type;
          u === "mousedown" && ko(o), this._fireDOMEvent(n, u);
        }
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(n, o, u) {
        if (n.type === "click") {
          var p = h({}, n);
          p.type = "preclick", this._fireDOMEvent(p, p.type, u);
        }
        var v = this._findEventTargets(n, o);
        if (u) {
          for (var x = [], z = 0; z < u.length; z++) u[z].listens(o, true) && x.push(u[z]);
          v = x.concat(v);
        }
        if (v.length) {
          o === "contextmenu" && He(n);
          var I = v[0], W = { originalEvent: n };
          if (n.type !== "keypress" && n.type !== "keydown" && n.type !== "keyup") {
            var pt = I.getLatLng && (!I._radius || I._radius <= 10);
            W.containerPoint = pt ? this.latLngToContainerPoint(I.getLatLng()) : this.mouseEventToContainerPoint(n), W.layerPoint = this.containerPointToLayerPoint(W.containerPoint), W.latlng = pt ? I.getLatLng() : this.layerPointToLatLng(W.layerPoint);
          }
          for (z = 0; z < v.length; z++) if (v[z].fire(o, W, true), W.originalEvent._stopped || v[z].options.bubblingMouseEvents === false && U(this._mouseEvents, o) !== -1) return;
        }
      }, _draggableMoved: function(n) {
        return n = n.dragging && n.dragging.enabled() ? n : this, n.dragging && n.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var n = 0, o = this._handlers.length; n < o; n++) this._handlers[n].disable();
      }, whenReady: function(n, o) {
        return this._loaded ? n.call(o || this, { target: this }) : this.on("load", n, o), this;
      }, _getMapPanePos: function() {
        return Pi(this._mapPane) || new it(0, 0);
      }, _moved: function() {
        var n = this._getMapPanePos();
        return n && !n.equals([0, 0]);
      }, _getTopLeftPoint: function(n, o) {
        var u = n && o !== void 0 ? this._getNewPixelOrigin(n, o) : this.getPixelOrigin();
        return u.subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(n, o) {
        var u = this.getSize()._divideBy(2);
        return this.project(n, o)._subtract(u)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(n, o, u) {
        var p = this._getNewPixelOrigin(u, o);
        return this.project(n, o)._subtract(p);
      }, _latLngBoundsToNewLayerBounds: function(n, o, u) {
        var p = this._getNewPixelOrigin(u, o);
        return ut([this.project(n.getSouthWest(), o)._subtract(p), this.project(n.getNorthWest(), o)._subtract(p), this.project(n.getSouthEast(), o)._subtract(p), this.project(n.getNorthEast(), o)._subtract(p)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(n) {
        return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(n, o, u) {
        if (!u) return n;
        var p = this.project(n, o), v = this.getSize().divideBy(2), x = new K(p.subtract(v), p.add(v)), z = this._getBoundsOffset(x, u, o);
        return Math.abs(z.x) <= 1 && Math.abs(z.y) <= 1 ? n : this.unproject(p.add(z), o);
      }, _limitOffset: function(n, o) {
        if (!o) return n;
        var u = this.getPixelBounds(), p = new K(u.min.add(n), u.max.add(n));
        return n.add(this._getBoundsOffset(p, o));
      }, _getBoundsOffset: function(n, o, u) {
        var p = ut(this.project(o.getNorthEast(), u), this.project(o.getSouthWest(), u)), v = p.min.subtract(n.min), x = p.max.subtract(n.max), z = this._rebound(v.x, -x.x), I = this._rebound(v.y, -x.y);
        return new it(z, I);
      }, _rebound: function(n, o) {
        return n + o > 0 ? Math.round(n - o) / 2 : Math.max(0, Math.ceil(n)) - Math.max(0, Math.floor(o));
      }, _limitZoom: function(n) {
        var o = this.getMinZoom(), u = this.getMaxZoom(), p = Et.any3d ? this.options.zoomSnap : 1;
        return p && (n = Math.round(n / p) * p), Math.max(o, Math.min(u, n));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        Ce(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(n, o) {
        var u = this._getCenterOffset(n)._trunc();
        return (o && o.animate) !== true && !this.getSize().contains(u) ? false : (this.panBy(u, o), true);
      }, _createAnimProxy: function() {
        var n = this._proxy = Wt("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(n), this.on("zoomanim", function(o) {
          var u = zo, p = this._proxy.style[u];
          Dn(this._proxy, this.project(o.center, o.zoom), this.getZoomScale(o.zoom, 1)), p === this._proxy.style[u] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        Te(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var n = this.getCenter(), o = this.getZoom();
        Dn(this._proxy, this.project(n, o), this.getZoomScale(o, 1));
      }, _catchTransitionEnd: function(n) {
        this._animatingZoom && n.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(n, o, u) {
        if (this._animatingZoom) return true;
        if (u = u || {}, !this._zoomAnimated || u.animate === false || this._nothingToAnimate() || Math.abs(o - this._zoom) > this.options.zoomAnimationThreshold) return false;
        var p = this.getZoomScale(o), v = this._getCenterOffset(n)._divideBy(1 - 1 / p);
        return u.animate !== true && !this.getSize().contains(v) ? false : (Q(function() {
          this._moveStart(true, u.noMoveStart || false)._animateZoom(n, o, true);
        }, this), true);
      }, _animateZoom: function(n, o, u, p) {
        this._mapPane && (u && (this._animatingZoom = true, this._animateToCenter = n, this._animateToZoom = o, Ut(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: n, zoom: o, noUpdate: p }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, true), setTimeout(g(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && Ce(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom, void 0, true), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(true));
      } });
      function Ho(n, o) {
        return new Vt(n, o);
      }
      var Sn = yt.extend({ options: { position: "topright" }, initialize: function(n) {
        A(this, n);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(n) {
        var o = this._map;
        return o && o.removeControl(this), this.options.position = n, o && o.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(n) {
        this.remove(), this._map = n;
        var o = this._container = this.onAdd(n), u = this.getPosition(), p = n._controlCorners[u];
        return Ut(o, "leaflet-control"), u.indexOf("bottom") !== -1 ? p.insertBefore(o, p.firstChild) : p.appendChild(o), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map ? (Te(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      }, _refocusOnMap: function(n) {
        this._map && n && n.screenX > 0 && n.screenY > 0 && this._map.getContainer().focus();
      } }), Ya = function(n) {
        return new Sn(n);
      };
      Vt.include({ addControl: function(n) {
        return n.addTo(this), this;
      }, removeControl: function(n) {
        return n.remove(), this;
      }, _initControlPos: function() {
        var n = this._controlCorners = {}, o = "leaflet-", u = this._controlContainer = Wt("div", o + "control-container", this._container);
        function p(v, x) {
          var z = o + v + " " + o + x;
          n[v + x] = Wt("div", z, u);
        }
        p("top", "left"), p("top", "right"), p("bottom", "left"), p("bottom", "right");
      }, _clearControlPos: function() {
        for (var n in this._controlCorners) Te(this._controlCorners[n]);
        Te(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      } });
      var Wl = Sn.extend({ options: { collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(n, o, u, p) {
        return u < p ? -1 : p < u ? 1 : 0;
      } }, initialize: function(n, o, u) {
        A(this, u), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, this._preventClick = false;
        for (var p in n) this._addLayer(n[p], p);
        for (p in o) this._addLayer(o[p], p, true);
      }, onAdd: function(n) {
        this._initLayout(), this._update(), this._map = n, n.on("zoomend", this._checkDisabledLayers, this);
        for (var o = 0; o < this._layers.length; o++) this._layers[o].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(n) {
        return Sn.prototype.addTo.call(this, n), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var n = 0; n < this._layers.length; n++) this._layers[n].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(n, o) {
        return this._addLayer(n, o), this._map ? this._update() : this;
      }, addOverlay: function(n, o) {
        return this._addLayer(n, o, true), this._map ? this._update() : this;
      }, removeLayer: function(n) {
        n.off("add remove", this._onLayerChange, this);
        var o = this._getLayer(b(n));
        return o && this._layers.splice(this._layers.indexOf(o), 1), this._map ? this._update() : this;
      }, expand: function() {
        Ut(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var n = this._map.getSize().y - (this._container.offsetTop + 50);
        return n < this._section.clientHeight ? (Ut(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = n + "px") : Ce(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return Ce(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var n = "leaflet-control-layers", o = this._container = Wt("div", n), u = this.options.collapsed;
        o.setAttribute("aria-haspopup", true), Va(o), Ga(o);
        var p = this._section = Wt("section", n + "-list");
        u && (this._map.on("click", this.collapse, this), kt(o, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
        var v = this._layersLink = Wt("a", n + "-toggle", o);
        v.href = "#", v.title = "Layers", v.setAttribute("role", "button"), kt(v, { keydown: function(x) {
          x.keyCode === 13 && this._expandSafely();
        }, click: function(x) {
          He(x), this._expandSafely();
        } }, this), u || this.expand(), this._baseLayersList = Wt("div", n + "-base", p), this._separator = Wt("div", n + "-separator", p), this._overlaysList = Wt("div", n + "-overlays", p), o.appendChild(p);
      }, _getLayer: function(n) {
        for (var o = 0; o < this._layers.length; o++) if (this._layers[o] && b(this._layers[o].layer) === n) return this._layers[o];
      }, _addLayer: function(n, o, u) {
        this._map && n.on("add remove", this._onLayerChange, this), this._layers.push({ layer: n, name: o, overlay: u }), this.options.sortLayers && this._layers.sort(g(function(p, v) {
          return this.options.sortFunction(p.layer, v.layer, p.name, v.name);
        }, this)), this.options.autoZIndex && n.setZIndex && (this._lastZIndex++, n.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container) return this;
        fn(this._baseLayersList), fn(this._overlaysList), this._layerControlInputs = [];
        var n, o, u, p, v = 0;
        for (u = 0; u < this._layers.length; u++) p = this._layers[u], this._addItem(p), o = o || p.overlay, n = n || !p.overlay, v += p.overlay ? 0 : 1;
        return this.options.hideSingleBase && (n = n && v > 1, this._baseLayersList.style.display = n ? "" : "none"), this._separator.style.display = o && n ? "" : "none", this;
      }, _onLayerChange: function(n) {
        this._handlingClick || this._update();
        var o = this._getLayer(b(n.target)), u = o.overlay ? n.type === "add" ? "overlayadd" : "overlayremove" : n.type === "add" ? "baselayerchange" : null;
        u && this._map.fire(u, o);
      }, _createRadioElement: function(n, o) {
        var u = '<input type="radio" class="leaflet-control-layers-selector" name="' + n + '"' + (o ? ' checked="checked"' : "") + "/>", p = document.createElement("div");
        return p.innerHTML = u, p.firstChild;
      }, _addItem: function(n) {
        var o = document.createElement("label"), u = this._map.hasLayer(n.layer), p;
        n.overlay ? (p = document.createElement("input"), p.type = "checkbox", p.className = "leaflet-control-layers-selector", p.defaultChecked = u) : p = this._createRadioElement("leaflet-base-layers_" + b(this), u), this._layerControlInputs.push(p), p.layerId = b(n.layer), kt(p, "click", this._onInputClick, this);
        var v = document.createElement("span");
        v.innerHTML = " " + n.name;
        var x = document.createElement("span");
        o.appendChild(x), x.appendChild(p), x.appendChild(v);
        var z = n.overlay ? this._overlaysList : this._baseLayersList;
        return z.appendChild(o), this._checkDisabledLayers(), o;
      }, _onInputClick: function() {
        if (!this._preventClick) {
          var n = this._layerControlInputs, o, u, p = [], v = [];
          this._handlingClick = true;
          for (var x = n.length - 1; x >= 0; x--) o = n[x], u = this._getLayer(o.layerId).layer, o.checked ? p.push(u) : o.checked || v.push(u);
          for (x = 0; x < v.length; x++) this._map.hasLayer(v[x]) && this._map.removeLayer(v[x]);
          for (x = 0; x < p.length; x++) this._map.hasLayer(p[x]) || this._map.addLayer(p[x]);
          this._handlingClick = false, this._refocusOnMap();
        }
      }, _checkDisabledLayers: function() {
        for (var n = this._layerControlInputs, o, u, p = this._map.getZoom(), v = n.length - 1; v >= 0; v--) o = n[v], u = this._getLayer(o.layerId).layer, o.disabled = u.options.minZoom !== void 0 && p < u.options.minZoom || u.options.maxZoom !== void 0 && p > u.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expandSafely: function() {
        var n = this._section;
        this._preventClick = true, kt(n, "click", He), this.expand();
        var o = this;
        setTimeout(function() {
          ee(n, "click", He), o._preventClick = false;
        });
      } }), af = function(n, o, u) {
        return new Wl(n, o, u);
      }, xs = Sn.extend({ options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" }, onAdd: function(n) {
        var o = "leaflet-control-zoom", u = Wt("div", o + " leaflet-bar"), p = this.options;
        return this._zoomInButton = this._createButton(p.zoomInText, p.zoomInTitle, o + "-in", u, this._zoomIn), this._zoomOutButton = this._createButton(p.zoomOutText, p.zoomOutTitle, o + "-out", u, this._zoomOut), this._updateDisabled(), n.on("zoomend zoomlevelschange", this._updateDisabled, this), u;
      }, onRemove: function(n) {
        n.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = true, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = false, this._updateDisabled(), this;
      }, _zoomIn: function(n) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (n.shiftKey ? 3 : 1));
      }, _zoomOut: function(n) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (n.shiftKey ? 3 : 1));
      }, _createButton: function(n, o, u, p, v) {
        var x = Wt("a", u, p);
        return x.innerHTML = n, x.href = "#", x.title = o, x.setAttribute("role", "button"), x.setAttribute("aria-label", o), Va(x), kt(x, "click", ci), kt(x, "click", v, this), kt(x, "click", this._refocusOnMap, this), x;
      }, _updateDisabled: function() {
        var n = this._map, o = "leaflet-disabled";
        Ce(this._zoomInButton, o), Ce(this._zoomOutButton, o), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || n._zoom === n.getMinZoom()) && (Ut(this._zoomOutButton, o), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || n._zoom === n.getMaxZoom()) && (Ut(this._zoomInButton, o), this._zoomInButton.setAttribute("aria-disabled", "true"));
      } });
      Vt.mergeOptions({ zoomControl: true }), Vt.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new xs(), this.addControl(this.zoomControl));
      });
      var Ts = function(n) {
        return new xs(n);
      }, Jl = Sn.extend({ options: { position: "bottomleft", maxWidth: 100, metric: true, imperial: true }, onAdd: function(n) {
        var o = "leaflet-control-scale", u = Wt("div", o), p = this.options;
        return this._addScales(p, o + "-line", u), n.on(p.updateWhenIdle ? "moveend" : "move", this._update, this), n.whenReady(this._update, this), u;
      }, onRemove: function(n) {
        n.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(n, o, u) {
        n.metric && (this._mScale = Wt("div", o, u)), n.imperial && (this._iScale = Wt("div", o, u));
      }, _update: function() {
        var n = this._map, o = n.getSize().y / 2, u = n.distance(n.containerPointToLatLng([0, o]), n.containerPointToLatLng([this.options.maxWidth, o]));
        this._updateScales(u);
      }, _updateScales: function(n) {
        this.options.metric && n && this._updateMetric(n), this.options.imperial && n && this._updateImperial(n);
      }, _updateMetric: function(n) {
        var o = this._getRoundNum(n), u = o < 1e3 ? o + " m" : o / 1e3 + " km";
        this._updateScale(this._mScale, u, o / n);
      }, _updateImperial: function(n) {
        var o = n * 3.2808399, u, p, v;
        o > 5280 ? (u = o / 5280, p = this._getRoundNum(u), this._updateScale(this._iScale, p + " mi", p / u)) : (v = this._getRoundNum(o), this._updateScale(this._iScale, v + " ft", v / o));
      }, _updateScale: function(n, o, u) {
        n.style.width = Math.round(this.options.maxWidth * u) + "px", n.innerHTML = o;
      }, _getRoundNum: function(n) {
        var o = Math.pow(10, (Math.floor(n) + "").length - 1), u = n / o;
        return u = u >= 10 ? 10 : u >= 5 ? 5 : u >= 3 ? 3 : u >= 2 ? 2 : 1, o * u;
      } }), of = function(n) {
        return new Jl(n);
      }, rf = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Cs = Sn.extend({ options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Et.inlineSvg ? rf + " " : "") + "Leaflet</a>" }, initialize: function(n) {
        A(this, n), this._attributions = {};
      }, onAdd: function(n) {
        n.attributionControl = this, this._container = Wt("div", "leaflet-control-attribution"), Va(this._container);
        for (var o in n._layers) n._layers[o].getAttribution && this.addAttribution(n._layers[o].getAttribution());
        return this._update(), n.on("layeradd", this._addAttribution, this), this._container;
      }, onRemove: function(n) {
        n.off("layeradd", this._addAttribution, this);
      }, _addAttribution: function(n) {
        n.layer.getAttribution && (this.addAttribution(n.layer.getAttribution()), n.layer.once("remove", function() {
          this.removeAttribution(n.layer.getAttribution());
        }, this));
      }, setPrefix: function(n) {
        return this.options.prefix = n, this._update(), this;
      }, addAttribution: function(n) {
        return n ? (this._attributions[n] || (this._attributions[n] = 0), this._attributions[n]++, this._update(), this) : this;
      }, removeAttribution: function(n) {
        return n ? (this._attributions[n] && (this._attributions[n]--, this._update()), this) : this;
      }, _update: function() {
        if (this._map) {
          var n = [];
          for (var o in this._attributions) this._attributions[o] && n.push(o);
          var u = [];
          this.options.prefix && u.push(this.options.prefix), n.length && u.push(n.join(", ")), this._container.innerHTML = u.join(' <span aria-hidden="true">|</span> ');
        }
      } });
      Vt.mergeOptions({ attributionControl: true }), Vt.addInitHook(function() {
        this.options.attributionControl && new Cs().addTo(this);
      });
      var sf = function(n) {
        return new Cs(n);
      };
      Sn.Layers = Wl, Sn.Zoom = xs, Sn.Scale = Jl, Sn.Attribution = Cs, Ya.layers = af, Ya.zoom = Ts, Ya.scale = of, Ya.attribution = sf;
      var Yn = yt.extend({ initialize: function(n) {
        this._map = n;
      }, enable: function() {
        return this._enabled ? this : (this._enabled = true, this.addHooks(), this);
      }, disable: function() {
        return this._enabled ? (this._enabled = false, this.removeHooks(), this) : this;
      }, enabled: function() {
        return !!this._enabled;
      } });
      Yn.addTo = function(n, o) {
        return n.addHandler(o, this), this;
      };
      var lf = { Events: H }, tu = Et.touch ? "touchstart mousedown" : "mousedown", ki = st.extend({ options: { clickTolerance: 3 }, initialize: function(n, o, u, p) {
        A(this, p), this._element = n, this._dragStartTarget = o || n, this._preventOutline = u;
      }, enable: function() {
        this._enabled || (kt(this._dragStartTarget, tu, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (ki._dragging === this && this.finishDrag(true), ee(this._dragStartTarget, tu, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(n) {
        if (this._enabled && (this._moved = false, !Za(this._element, "leaflet-zoom-anim"))) {
          if (n.touches && n.touches.length !== 1) {
            ki._dragging === this && this.finishDrag();
            return;
          }
          if (!(ki._dragging || n.shiftKey || n.which !== 1 && n.button !== 1 && !n.touches) && (ki._dragging = this, this._preventOutline && ko(this._element), Bo(), si(), !this._moving)) {
            this.fire("down");
            var o = n.touches ? n.touches[0] : n, u = sa(this._element);
            this._startPoint = new it(o.clientX, o.clientY), this._startPos = Pi(this._element), this._parentScale = Bi(u);
            var p = n.type === "mousedown";
            kt(document, p ? "mousemove" : "touchmove", this._onMove, this), kt(document, p ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      }, _onMove: function(n) {
        if (this._enabled) {
          if (n.touches && n.touches.length > 1) {
            this._moved = true;
            return;
          }
          var o = n.touches && n.touches.length === 1 ? n.touches[0] : n, u = new it(o.clientX, o.clientY)._subtract(this._startPoint);
          !u.x && !u.y || Math.abs(u.x) + Math.abs(u.y) < this.options.clickTolerance || (u.x /= this._parentScale.x, u.y /= this._parentScale.y, He(n), this._moved || (this.fire("dragstart"), this._moved = true, Ut(document.body, "leaflet-dragging"), this._lastTarget = n.target || n.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ut(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(u), this._moving = true, this._lastEvent = n, this._updatePosition());
        }
      }, _updatePosition: function() {
        var n = { originalEvent: this._lastEvent };
        this.fire("predrag", n), ke(this._element, this._newPos), this.fire("drag", n);
      }, _onUp: function() {
        this._enabled && this.finishDrag();
      }, finishDrag: function(n) {
        Ce(document.body, "leaflet-dragging"), this._lastTarget && (Ce(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ee(document, "mousemove touchmove", this._onMove, this), ee(document, "mouseup touchend touchcancel", this._onUp, this), bs(), Po();
        var o = this._moved && this._moving;
        this._moving = false, ki._dragging = false, o && this.fire("dragend", { noInertia: n, distance: this._newPos.distanceTo(this._startPos) });
      } });
      function eu(n, o, u) {
        var p, v = [1, 4, 2, 8], x, z, I, W, pt, St, xt, Ct;
        for (x = 0, St = n.length; x < St; x++) n[x]._code = fa(n[x], o);
        for (I = 0; I < 4; I++) {
          for (xt = v[I], p = [], x = 0, St = n.length, z = St - 1; x < St; z = x++) W = n[x], pt = n[z], W._code & xt ? pt._code & xt || (Ct = xr(pt, W, xt, o, u), Ct._code = fa(Ct, o), p.push(Ct)) : (pt._code & xt && (Ct = xr(pt, W, xt, o, u), Ct._code = fa(Ct, o), p.push(Ct)), p.push(W));
          n = p;
        }
        return n;
      }
      function Sr(n, o) {
        var u, p, v, x, z, I, W, pt, St;
        if (!n || n.length === 0) throw new Error("latlngs not passed");
        rn(n) || (console.warn("latlngs are not flat! Only the first ring will be used"), n = n[0]);
        var xt = gt([0, 0]), Ct = mt(n), Pt = Ct.getNorthWest().distanceTo(Ct.getSouthWest()) * Ct.getNorthEast().distanceTo(Ct.getNorthWest());
        Pt < 1700 && (xt = ws(n));
        var we = n.length, Ne = [];
        for (u = 0; u < we; u++) {
          var sn = gt(n[u]);
          Ne.push(o.project(gt([sn.lat - xt.lat, sn.lng - xt.lng])));
        }
        for (I = W = pt = 0, u = 0, p = we - 1; u < we; p = u++) v = Ne[u], x = Ne[p], z = v.y * x.x - x.y * v.x, W += (v.x + x.x) * z, pt += (v.y + x.y) * z, I += z * 3;
        I === 0 ? St = Ne[0] : St = [W / I, pt / I];
        var Hn = o.unproject(M(St));
        return gt([Hn.lat + xt.lat, Hn.lng + xt.lng]);
      }
      function ws(n) {
        for (var o = 0, u = 0, p = 0, v = 0; v < n.length; v++) {
          var x = gt(n[v]);
          o += x.lat, u += x.lng, p++;
        }
        return gt([o / p, u / p]);
      }
      var uf = { __proto__: null, clipPolygon: eu, polygonCenter: Sr, centroid: ws };
      function nu(n, o) {
        if (!o || !n.length) return n.slice();
        var u = o * o;
        return n = df(n, u), n = ff(n, u), n;
      }
      function Es(n, o, u) {
        return Math.sqrt(da(n, o, u, true));
      }
      function cf(n, o, u) {
        return da(n, o, u);
      }
      function ff(n, o) {
        var u = n.length, p = typeof Uint8Array < "u" ? Uint8Array : Array, v = new p(u);
        v[0] = v[u - 1] = 1, Ms(n, v, o, 0, u - 1);
        var x, z = [];
        for (x = 0; x < u; x++) v[x] && z.push(n[x]);
        return z;
      }
      function Ms(n, o, u, p, v) {
        var x = 0, z, I, W;
        for (I = p + 1; I <= v - 1; I++) W = da(n[I], n[p], n[v], true), W > x && (z = I, x = W);
        x > u && (o[z] = 1, Ms(n, o, u, p, z), Ms(n, o, u, z, v));
      }
      function df(n, o) {
        for (var u = [n[0]], p = 1, v = 0, x = n.length; p < x; p++) hf(n[p], n[v]) > o && (u.push(n[p]), v = p);
        return v < x - 1 && u.push(n[x - 1]), u;
      }
      var iu;
      function au(n, o, u, p, v) {
        var x = p ? iu : fa(n, u), z = fa(o, u), I, W, pt;
        for (iu = z; ; ) {
          if (!(x | z)) return [n, o];
          if (x & z) return false;
          I = x || z, W = xr(n, o, I, u, v), pt = fa(W, u), I === x ? (n = W, x = pt) : (o = W, z = pt);
        }
      }
      function xr(n, o, u, p, v) {
        var x = o.x - n.x, z = o.y - n.y, I = p.min, W = p.max, pt, St;
        return u & 8 ? (pt = n.x + x * (W.y - n.y) / z, St = W.y) : u & 4 ? (pt = n.x + x * (I.y - n.y) / z, St = I.y) : u & 2 ? (pt = W.x, St = n.y + z * (W.x - n.x) / x) : u & 1 && (pt = I.x, St = n.y + z * (I.x - n.x) / x), new it(pt, St, v);
      }
      function fa(n, o) {
        var u = 0;
        return n.x < o.min.x ? u |= 1 : n.x > o.max.x && (u |= 2), n.y < o.min.y ? u |= 4 : n.y > o.max.y && (u |= 8), u;
      }
      function hf(n, o) {
        var u = o.x - n.x, p = o.y - n.y;
        return u * u + p * p;
      }
      function da(n, o, u, p) {
        var v = o.x, x = o.y, z = u.x - v, I = u.y - x, W = z * z + I * I, pt;
        return W > 0 && (pt = ((n.x - v) * z + (n.y - x) * I) / W, pt > 1 ? (v = u.x, x = u.y) : pt > 0 && (v += z * pt, x += I * pt)), z = n.x - v, I = n.y - x, p ? z * z + I * I : new it(v, x);
      }
      function rn(n) {
        return !k(n[0]) || typeof n[0][0] != "object" && typeof n[0][0] < "u";
      }
      function ou(n) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), rn(n);
      }
      function Os(n, o) {
        var u, p, v, x, z, I, W, pt;
        if (!n || n.length === 0) throw new Error("latlngs not passed");
        rn(n) || (console.warn("latlngs are not flat! Only the first ring will be used"), n = n[0]);
        var St = gt([0, 0]), xt = mt(n), Ct = xt.getNorthWest().distanceTo(xt.getSouthWest()) * xt.getNorthEast().distanceTo(xt.getNorthWest());
        Ct < 1700 && (St = ws(n));
        var Pt = n.length, we = [];
        for (u = 0; u < Pt; u++) {
          var Ne = gt(n[u]);
          we.push(o.project(gt([Ne.lat - St.lat, Ne.lng - St.lng])));
        }
        for (u = 0, p = 0; u < Pt - 1; u++) p += we[u].distanceTo(we[u + 1]) / 2;
        if (p === 0) pt = we[0];
        else for (u = 0, x = 0; u < Pt - 1; u++) if (z = we[u], I = we[u + 1], v = z.distanceTo(I), x += v, x > p) {
          W = (x - p) / v, pt = [I.x - W * (I.x - z.x), I.y - W * (I.y - z.y)];
          break;
        }
        var sn = o.unproject(M(pt));
        return gt([sn.lat + St.lat, sn.lng + St.lng]);
      }
      var ru = { __proto__: null, simplify: nu, pointToSegmentDistance: Es, closestPointOnSegment: cf, clipSegment: au, _getEdgeIntersection: xr, _getBitCode: fa, _sqClosestPointOnSegment: da, isFlat: rn, _flat: ou, polylineCenter: Os }, Tr = { project: function(n) {
        return new it(n.lng, n.lat);
      }, unproject: function(n) {
        return new _t(n.y, n.x);
      }, bounds: new K([-180, -90], [180, 90]) }, Cr = { R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new K([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(n) {
        var o = Math.PI / 180, u = this.R, p = n.lat * o, v = this.R_MINOR / u, x = Math.sqrt(1 - v * v), z = x * Math.sin(p), I = Math.tan(Math.PI / 4 - p / 2) / Math.pow((1 - z) / (1 + z), x / 2);
        return p = -u * Math.log(Math.max(I, 1e-10)), new it(n.lng * o * u, p);
      }, unproject: function(n) {
        for (var o = 180 / Math.PI, u = this.R, p = this.R_MINOR / u, v = Math.sqrt(1 - p * p), x = Math.exp(-n.y / u), z = Math.PI / 2 - 2 * Math.atan(x), I = 0, W = 0.1, pt; I < 15 && Math.abs(W) > 1e-7; I++) pt = v * Math.sin(z), pt = Math.pow((1 - pt) / (1 + pt), v / 2), W = Math.PI / 2 - 2 * Math.atan(x * pt) - z, z += W;
        return new _t(z * o, n.x * o / u);
      } }, su = { __proto__: null, LonLat: Tr, Mercator: Cr, SphericalMercator: Dt }, Xa = h({}, Lt, { code: "EPSG:3395", projection: Cr, transformation: function() {
        var n = 0.5 / (Math.PI * Cr.R);
        return It(n, 0.5, -n, 0.5);
      }() }), lu = h({}, Lt, { code: "EPSG:4326", projection: Tr, transformation: It(1 / 180, 1, -1 / 180, 0.5) }), pf = h({}, Nt, { projection: Tr, transformation: It(1, 0, -1, 0), scale: function(n) {
        return Math.pow(2, n);
      }, zoom: function(n) {
        return Math.log(n) / Math.LN2;
      }, distance: function(n, o) {
        var u = o.lng - n.lng, p = o.lat - n.lat;
        return Math.sqrt(u * u + p * p);
      }, infinite: true });
      Nt.Earth = Lt, Nt.EPSG3395 = Xa, Nt.EPSG3857 = Oe, Nt.EPSG900913 = Zt, Nt.EPSG4326 = lu, Nt.Simple = pf;
      var Xn = st.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: true }, addTo: function(n) {
        return n.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(n) {
        return n && n.removeLayer(this), this;
      }, getPane: function(n) {
        return this._map.getPane(n ? this.options[n] || n : this.options.pane);
      }, addInteractiveTarget: function(n) {
        return this._map._targets[b(n)] = this, this;
      }, removeInteractiveTarget: function(n) {
        return delete this._map._targets[b(n)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(n) {
        var o = n.target;
        if (o.hasLayer(this)) {
          if (this._map = o, this._zoomAnimated = o._zoomAnimated, this.getEvents) {
            var u = this.getEvents();
            o.on(u, this), this.once("remove", function() {
              o.off(u, this);
            }, this);
          }
          this.onAdd(o), this.fire("add"), o.fire("layeradd", { layer: this });
        }
      } });
      Vt.include({ addLayer: function(n) {
        if (!n._layerAdd) throw new Error("The provided object is not a Layer.");
        var o = b(n);
        return this._layers[o] ? this : (this._layers[o] = n, n._mapToAdd = this, n.beforeAdd && n.beforeAdd(this), this.whenReady(n._layerAdd, n), this);
      }, removeLayer: function(n) {
        var o = b(n);
        return this._layers[o] ? (this._loaded && n.onRemove(this), delete this._layers[o], this._loaded && (this.fire("layerremove", { layer: n }), n.fire("remove")), n._map = n._mapToAdd = null, this) : this;
      }, hasLayer: function(n) {
        return b(n) in this._layers;
      }, eachLayer: function(n, o) {
        for (var u in this._layers) n.call(o, this._layers[u]);
        return this;
      }, _addLayers: function(n) {
        n = n ? k(n) ? n : [n] : [];
        for (var o = 0, u = n.length; o < u; o++) this.addLayer(n[o]);
      }, _addZoomLimit: function(n) {
        (!isNaN(n.options.maxZoom) || !isNaN(n.options.minZoom)) && (this._zoomBoundLayers[b(n)] = n, this._updateZoomLevels());
      }, _removeZoomLimit: function(n) {
        var o = b(n);
        this._zoomBoundLayers[o] && (delete this._zoomBoundLayers[o], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var n = 1 / 0, o = -1 / 0, u = this._getZoomSpan();
        for (var p in this._zoomBoundLayers) {
          var v = this._zoomBoundLayers[p].options;
          n = v.minZoom === void 0 ? n : Math.min(n, v.minZoom), o = v.maxZoom === void 0 ? o : Math.max(o, v.maxZoom);
        }
        this._layersMaxZoom = o === -1 / 0 ? void 0 : o, this._layersMinZoom = n === 1 / 0 ? void 0 : n, u !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      } });
      var ha = Xn.extend({ initialize: function(n, o) {
        A(this, o), this._layers = {};
        var u, p;
        if (n) for (u = 0, p = n.length; u < p; u++) this.addLayer(n[u]);
      }, addLayer: function(n) {
        var o = this.getLayerId(n);
        return this._layers[o] = n, this._map && this._map.addLayer(n), this;
      }, removeLayer: function(n) {
        var o = n in this._layers ? n : this.getLayerId(n);
        return this._map && this._layers[o] && this._map.removeLayer(this._layers[o]), delete this._layers[o], this;
      }, hasLayer: function(n) {
        var o = typeof n == "number" ? n : this.getLayerId(n);
        return o in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(n) {
        var o = Array.prototype.slice.call(arguments, 1), u, p;
        for (u in this._layers) p = this._layers[u], p[n] && p[n].apply(p, o);
        return this;
      }, onAdd: function(n) {
        this.eachLayer(n.addLayer, n);
      }, onRemove: function(n) {
        this.eachLayer(n.removeLayer, n);
      }, eachLayer: function(n, o) {
        for (var u in this._layers) n.call(o, this._layers[u]);
        return this;
      }, getLayer: function(n) {
        return this._layers[n];
      }, getLayers: function() {
        var n = [];
        return this.eachLayer(n.push, n), n;
      }, setZIndex: function(n) {
        return this.invoke("setZIndex", n);
      }, getLayerId: function(n) {
        return b(n);
      } }), uu = function(n, o) {
        return new ha(n, o);
      }, On = ha.extend({ addLayer: function(n) {
        return this.hasLayer(n) ? this : (n.addEventParent(this), ha.prototype.addLayer.call(this, n), this.fire("layeradd", { layer: n }));
      }, removeLayer: function(n) {
        return this.hasLayer(n) ? (n in this._layers && (n = this._layers[n]), n.removeEventParent(this), ha.prototype.removeLayer.call(this, n), this.fire("layerremove", { layer: n })) : this;
      }, setStyle: function(n) {
        return this.invoke("setStyle", n);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var n = new ct();
        for (var o in this._layers) {
          var u = this._layers[o];
          n.extend(u.getBounds ? u.getBounds() : u.getLatLng());
        }
        return n;
      } }), Uo = function(n, o) {
        return new On(n, o);
      }, Ka = yt.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: false }, initialize: function(n) {
        A(this, n);
      }, createIcon: function(n) {
        return this._createIcon("icon", n);
      }, createShadow: function(n) {
        return this._createIcon("shadow", n);
      }, _createIcon: function(n, o) {
        var u = this._getIconUrl(n);
        if (!u) {
          if (n === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var p = this._createImg(u, o && o.tagName === "IMG" ? o : null);
        return this._setIconStyles(p, n), (this.options.crossOrigin || this.options.crossOrigin === "") && (p.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), p;
      }, _setIconStyles: function(n, o) {
        var u = this.options, p = u[o + "Size"];
        typeof p == "number" && (p = [p, p]);
        var v = M(p), x = M(o === "shadow" && u.shadowAnchor || u.iconAnchor || v && v.divideBy(2, true));
        n.className = "leaflet-marker-" + o + " " + (u.className || ""), x && (n.style.marginLeft = -x.x + "px", n.style.marginTop = -x.y + "px"), v && (n.style.width = v.x + "px", n.style.height = v.y + "px");
      }, _createImg: function(n, o) {
        return o = o || document.createElement("img"), o.src = n, o;
      }, _getIconUrl: function(n) {
        return Et.retina && this.options[n + "RetinaUrl"] || this.options[n + "Url"];
      } });
      function wr(n) {
        return new Ka(n);
      }
      var Qa = Ka.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function(n) {
        return typeof Qa.imagePath != "string" && (Qa.imagePath = this._detectIconPath()), (this.options.imagePath || Qa.imagePath) + Ka.prototype._getIconUrl.call(this, n);
      }, _stripUrl: function(n) {
        var o = function(u, p, v) {
          var x = p.exec(u);
          return x && x[v];
        };
        return n = o(n, /^url\((['"])?(.+)\1\)$/, 2), n && o(n, /^(.*)marker-icon\.png$/, 1);
      }, _detectIconPath: function() {
        var n = Wt("div", "leaflet-default-icon-path", document.body), o = oa(n, "background-image") || oa(n, "backgroundImage");
        if (document.body.removeChild(n), o = this._stripUrl(o), o) return o;
        var u = document.querySelector('link[href$="leaflet.css"]');
        return u ? u.href.substring(0, u.href.length - 11 - 1) : "";
      } }), As = Yn.extend({ initialize: function(n) {
        this._marker = n;
      }, addHooks: function() {
        var n = this._marker._icon;
        this._draggable || (this._draggable = new ki(n, n, true)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), Ut(n, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && Ce(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(n) {
        var o = this._marker, u = o._map, p = this._marker.options.autoPanSpeed, v = this._marker.options.autoPanPadding, x = Pi(o._icon), z = u.getPixelBounds(), I = u.getPixelOrigin(), W = ut(z.min._subtract(I).add(v), z.max._subtract(I).subtract(v));
        if (!W.contains(x)) {
          var pt = M((Math.max(W.max.x, x.x) - W.max.x) / (z.max.x - W.max.x) - (Math.min(W.min.x, x.x) - W.min.x) / (z.min.x - W.min.x), (Math.max(W.max.y, x.y) - W.max.y) / (z.max.y - W.max.y) - (Math.min(W.min.y, x.y) - W.min.y) / (z.min.y - W.min.y)).multiplyBy(p);
          u.panBy(pt, { animate: false }), this._draggable._newPos._add(pt), this._draggable._startPos._add(pt), ke(o._icon, this._draggable._newPos), this._onDrag(n), this._panRequest = Q(this._adjustPan.bind(this, n));
        }
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(n) {
        this._marker.options.autoPan && (rt(this._panRequest), this._panRequest = Q(this._adjustPan.bind(this, n)));
      }, _onDrag: function(n) {
        var o = this._marker, u = o._shadow, p = Pi(o._icon), v = o._map.layerPointToLatLng(p);
        u && ke(u, p), o._latlng = v, n.latlng = v, n.oldLatLng = this._oldLatLng, o.fire("move", n).fire("drag", n);
      }, _onDragEnd: function(n) {
        rt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", n);
      } }), Fa = Xn.extend({ options: { icon: new Qa(), interactive: true, keyboard: true, title: "", alt: "Marker", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, autoPanOnFocus: true, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10 }, initialize: function(n, o) {
        A(this, o), this._latlng = gt(n);
      }, onAdd: function(n) {
        this._zoomAnimated = this._zoomAnimated && n.options.markerZoomAnimation, this._zoomAnimated && n.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(n) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && n.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return { zoom: this.update, viewreset: this.update };
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(n) {
        var o = this._latlng;
        return this._latlng = gt(n), this.update(), this.fire("move", { oldLatLng: o, latlng: this._latlng });
      }, setZIndexOffset: function(n) {
        return this.options.zIndexOffset = n, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(n) {
        return this.options.icon = n, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        if (this._icon && this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(n);
        }
        return this;
      }, _initIcon: function() {
        var n = this.options, o = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), u = n.icon.createIcon(this._icon), p = false;
        u !== this._icon && (this._icon && this._removeIcon(), p = true, n.title && (u.title = n.title), u.tagName === "IMG" && (u.alt = n.alt || "")), Ut(u, o), n.keyboard && (u.tabIndex = "0", u.setAttribute("role", "button")), this._icon = u, n.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && kt(u, "focus", this._panOnFocus, this);
        var v = n.icon.createShadow(this._shadow), x = false;
        v !== this._shadow && (this._removeShadow(), x = true), v && (Ut(v, o), v.alt = ""), this._shadow = v, n.opacity < 1 && this._updateOpacity(), p && this.getPane().appendChild(this._icon), this._initInteraction(), v && x && this.getPane(n.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), this.options.autoPanOnFocus && ee(this._icon, "focus", this._panOnFocus, this), Te(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && Te(this._shadow), this._shadow = null;
      }, _setPos: function(n) {
        this._icon && ke(this._icon, n), this._shadow && ke(this._shadow, n), this._zIndex = n.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(n) {
        this._icon && (this._icon.style.zIndex = this._zIndex + n);
      }, _animateZoom: function(n) {
        var o = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center).round();
        this._setPos(o);
      }, _initInteraction: function() {
        if (this.options.interactive && (Ut(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), As)) {
          var n = this.options.draggable;
          this.dragging && (n = this.dragging.enabled(), this.dragging.disable()), this.dragging = new As(this), n && this.dragging.enable();
        }
      }, setOpacity: function(n) {
        return this.options.opacity = n, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var n = this.options.opacity;
        this._icon && bn(this._icon, n), this._shadow && bn(this._shadow, n);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _panOnFocus: function() {
        var n = this._map;
        if (n) {
          var o = this.options.icon.options, u = o.iconSize ? M(o.iconSize) : M(0, 0), p = o.iconAnchor ? M(o.iconAnchor) : M(0, 0);
          n.panInside(this._latlng, { paddingTopLeft: p, paddingBottomRight: u.subtract(p) });
        }
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      } });
      function Rs(n, o) {
        return new Fa(n, o);
      }
      var xi = Xn.extend({ options: { stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true }, beforeAdd: function(n) {
        this._renderer = n.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(n) {
        return A(this, n), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && n && Object.prototype.hasOwnProperty.call(n, "weight") && this._updateBounds()), this;
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
      } }), Zo = xi.extend({ options: { fill: true, radius: 10 }, initialize: function(n, o) {
        A(this, o), this._latlng = gt(n), this._radius = this.options.radius;
      }, setLatLng: function(n) {
        var o = this._latlng;
        return this._latlng = gt(n), this.redraw(), this.fire("move", { oldLatLng: o, latlng: this._latlng });
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(n) {
        return this.options.radius = this._radius = n, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(n) {
        var o = n && n.radius || this._radius;
        return xi.prototype.setStyle.call(this, n), this.setRadius(o), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var n = this._radius, o = this._radiusY || n, u = this._clickTolerance(), p = [n + u, o + u];
        this._pxBounds = new K(this._point.subtract(p), this._point.add(p));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(n) {
        return n.distanceTo(this._point) <= this._radius + this._clickTolerance();
      } });
      function cu(n, o) {
        return new Zo(n, o);
      }
      var Ls = Zo.extend({ initialize: function(n, o, u) {
        if (typeof o == "number" && (o = h({}, u, { radius: o })), A(this, o), this._latlng = gt(n), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(n) {
        return this._mRadius = n, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var n = [this._radius, this._radiusY || this._radius];
        return new ct(this._map.layerPointToLatLng(this._point.subtract(n)), this._map.layerPointToLatLng(this._point.add(n)));
      }, setStyle: xi.prototype.setStyle, _project: function() {
        var n = this._latlng.lng, o = this._latlng.lat, u = this._map, p = u.options.crs;
        if (p.distance === Lt.distance) {
          var v = Math.PI / 180, x = this._mRadius / Lt.R / v, z = u.project([o + x, n]), I = u.project([o - x, n]), W = z.add(I).divideBy(2), pt = u.unproject(W).lat, St = Math.acos((Math.cos(x * v) - Math.sin(o * v) * Math.sin(pt * v)) / (Math.cos(o * v) * Math.cos(pt * v))) / v;
          (isNaN(St) || St === 0) && (St = x / Math.cos(Math.PI / 180 * o)), this._point = W.subtract(u.getPixelOrigin()), this._radius = isNaN(St) ? 0 : W.x - u.project([pt, n - St]).x, this._radiusY = W.y - z.y;
        } else {
          var xt = p.unproject(p.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = u.latLngToLayerPoint(this._latlng), this._radius = this._point.x - u.latLngToLayerPoint(xt).x;
        }
        this._updateBounds();
      } });
      function mf(n, o, u) {
        return new Ls(n, o, u);
      }
      var Ti = xi.extend({ options: { smoothFactor: 1, noClip: false }, initialize: function(n, o) {
        A(this, o), this._setLatLngs(n);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(n) {
        return this._setLatLngs(n), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(n) {
        for (var o = 1 / 0, u = null, p = da, v, x, z = 0, I = this._parts.length; z < I; z++) for (var W = this._parts[z], pt = 1, St = W.length; pt < St; pt++) {
          v = W[pt - 1], x = W[pt];
          var xt = p(n, v, x, true);
          xt < o && (o = xt, u = p(n, v, x));
        }
        return u && (u.distance = Math.sqrt(o)), u;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return Os(this._defaultShape(), this._map.options.crs);
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(n, o) {
        return o = o || this._defaultShape(), n = gt(n), o.push(n), this._bounds.extend(n), this.redraw();
      }, _setLatLngs: function(n) {
        this._bounds = new ct(), this._latlngs = this._convertLatLngs(n);
      }, _defaultShape: function() {
        return rn(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(n) {
        for (var o = [], u = rn(n), p = 0, v = n.length; p < v; p++) u ? (o[p] = gt(n[p]), this._bounds.extend(o[p])) : o[p] = this._convertLatLngs(n[p]);
        return o;
      }, _project: function() {
        var n = new K();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, n), this._bounds.isValid() && n.isValid() && (this._rawPxBounds = n, this._updateBounds());
      }, _updateBounds: function() {
        var n = this._clickTolerance(), o = new it(n, n);
        this._rawPxBounds && (this._pxBounds = new K([this._rawPxBounds.min.subtract(o), this._rawPxBounds.max.add(o)]));
      }, _projectLatlngs: function(n, o, u) {
        var p = n[0] instanceof _t, v = n.length, x, z;
        if (p) {
          for (z = [], x = 0; x < v; x++) z[x] = this._map.latLngToLayerPoint(n[x]), u.extend(z[x]);
          o.push(z);
        } else for (x = 0; x < v; x++) this._projectLatlngs(n[x], o, u);
      }, _clipPoints: function() {
        var n = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(n))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var o = this._parts, u, p, v, x, z, I, W;
          for (u = 0, v = 0, x = this._rings.length; u < x; u++) for (W = this._rings[u], p = 0, z = W.length; p < z - 1; p++) I = au(W[p], W[p + 1], n, p, true), I && (o[v] = o[v] || [], o[v].push(I[0]), (I[1] !== W[p + 1] || p === z - 2) && (o[v].push(I[1]), v++));
        }
      }, _simplifyPoints: function() {
        for (var n = this._parts, o = this.options.smoothFactor, u = 0, p = n.length; u < p; u++) n[u] = nu(n[u], o);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(n, o) {
        var u, p, v, x, z, I, W = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(n)) return false;
        for (u = 0, x = this._parts.length; u < x; u++) for (I = this._parts[u], p = 0, z = I.length, v = z - 1; p < z; v = p++) if (!(!o && p === 0) && Es(n, I[v], I[p]) <= W) return true;
        return false;
      } });
      function gf(n, o) {
        return new Ti(n, o);
      }
      Ti._flat = ou;
      var Wa = Ti.extend({ options: { fill: true }, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
        return Sr(this._defaultShape(), this._map.options.crs);
      }, _convertLatLngs: function(n) {
        var o = Ti.prototype._convertLatLngs.call(this, n), u = o.length;
        return u >= 2 && o[0] instanceof _t && o[0].equals(o[u - 1]) && o.pop(), o;
      }, _setLatLngs: function(n) {
        Ti.prototype._setLatLngs.call(this, n), rn(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return rn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var n = this._renderer._bounds, o = this.options.weight, u = new it(o, o);
        if (n = new K(n.min.subtract(u), n.max.add(u)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(n))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var p = 0, v = this._rings.length, x; p < v; p++) x = eu(this._rings[p], n, true), x.length && this._parts.push(x);
        }
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(n) {
        var o = false, u, p, v, x, z, I, W, pt;
        if (!this._pxBounds || !this._pxBounds.contains(n)) return false;
        for (x = 0, W = this._parts.length; x < W; x++) for (u = this._parts[x], z = 0, pt = u.length, I = pt - 1; z < pt; I = z++) p = u[z], v = u[I], p.y > n.y != v.y > n.y && n.x < (v.x - p.x) * (n.y - p.y) / (v.y - p.y) + p.x && (o = !o);
        return o || Ti.prototype._containsPoint.call(this, n, true);
      } });
      function An(n, o) {
        return new Wa(n, o);
      }
      var Rn = On.extend({ initialize: function(n, o) {
        A(this, o), this._layers = {}, n && this.addData(n);
      }, addData: function(n) {
        var o = k(n) ? n : n.features, u, p, v;
        if (o) {
          for (u = 0, p = o.length; u < p; u++) v = o[u], (v.geometries || v.geometry || v.features || v.coordinates) && this.addData(v);
          return this;
        }
        var x = this.options;
        if (x.filter && !x.filter(n)) return this;
        var z = jo(n, x);
        return z ? (z.feature = Ja(n), z.defaultOptions = z.options, this.resetStyle(z), x.onEachFeature && x.onEachFeature(n, z), this.addLayer(z)) : this;
      }, resetStyle: function(n) {
        return n === void 0 ? this.eachLayer(this.resetStyle, this) : (n.options = h({}, n.defaultOptions), this._setLayerStyle(n, this.options.style), this);
      }, setStyle: function(n) {
        return this.eachLayer(function(o) {
          this._setLayerStyle(o, n);
        }, this);
      }, _setLayerStyle: function(n, o) {
        n.setStyle && (typeof o == "function" && (o = o(n.feature)), n.setStyle(o));
      } });
      function jo(n, o) {
        var u = n.type === "Feature" ? n.geometry : n, p = u ? u.coordinates : null, v = [], x = o && o.pointToLayer, z = o && o.coordsToLatLng || Er, I, W, pt, St;
        if (!p && !u) return null;
        switch (u.type) {
          case "Point":
            return I = z(p), zs(x, n, I, o);
          case "MultiPoint":
            for (pt = 0, St = p.length; pt < St; pt++) I = z(p[pt]), v.push(zs(x, n, I, o));
            return new On(v);
          case "LineString":
          case "MultiLineString":
            return W = Io(p, u.type === "LineString" ? 0 : 1, z), new Ti(W, o);
          case "Polygon":
          case "MultiPolygon":
            return W = Io(p, u.type === "Polygon" ? 1 : 2, z), new Wa(W, o);
          case "GeometryCollection":
            for (pt = 0, St = u.geometries.length; pt < St; pt++) {
              var xt = jo({ geometry: u.geometries[pt], type: "Feature", properties: n.properties }, o);
              xt && v.push(xt);
            }
            return new On(v);
          case "FeatureCollection":
            for (pt = 0, St = u.features.length; pt < St; pt++) {
              var Ct = jo(u.features[pt], o);
              Ct && v.push(Ct);
            }
            return new On(v);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function zs(n, o, u, p) {
        return n ? n(o, u) : new Fa(u, p && p.markersInheritOptions && p);
      }
      function Er(n) {
        return new _t(n[1], n[0], n[2]);
      }
      function Io(n, o, u) {
        for (var p = [], v = 0, x = n.length, z; v < x; v++) z = o ? Io(n[v], o - 1, u) : (u || Er)(n[v]), p.push(z);
        return p;
      }
      function $o(n, o) {
        return n = gt(n), n.alt !== void 0 ? [R(n.lng, o), R(n.lat, o), R(n.alt, o)] : [R(n.lng, o), R(n.lat, o)];
      }
      function Mr(n, o, u, p) {
        for (var v = [], x = 0, z = n.length; x < z; x++) v.push(o ? Mr(n[x], rn(n[x]) ? 0 : o - 1, u, p) : $o(n[x], p));
        return !o && u && v.length > 0 && v.push(v[0].slice()), v;
      }
      function Kn(n, o) {
        return n.feature ? h({}, n.feature, { geometry: o }) : Ja(o);
      }
      function Ja(n) {
        return n.type === "Feature" || n.type === "FeatureCollection" ? n : { type: "Feature", properties: {}, geometry: n };
      }
      var pa = { toGeoJSON: function(n) {
        return Kn(this, { type: "Point", coordinates: $o(this.getLatLng(), n) });
      } };
      Fa.include(pa), Ls.include(pa), Zo.include(pa), Ti.include({ toGeoJSON: function(n) {
        var o = !rn(this._latlngs), u = Mr(this._latlngs, o ? 1 : 0, false, n);
        return Kn(this, { type: (o ? "Multi" : "") + "LineString", coordinates: u });
      } }), Wa.include({ toGeoJSON: function(n) {
        var o = !rn(this._latlngs), u = o && !rn(this._latlngs[0]), p = Mr(this._latlngs, u ? 2 : o ? 1 : 0, true, n);
        return o || (p = [p]), Kn(this, { type: (u ? "Multi" : "") + "Polygon", coordinates: p });
      } }), ha.include({ toMultiPoint: function(n) {
        var o = [];
        return this.eachLayer(function(u) {
          o.push(u.toGeoJSON(n).geometry.coordinates);
        }), Kn(this, { type: "MultiPoint", coordinates: o });
      }, toGeoJSON: function(n) {
        var o = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (o === "MultiPoint") return this.toMultiPoint(n);
        var u = o === "GeometryCollection", p = [];
        return this.eachLayer(function(v) {
          if (v.toGeoJSON) {
            var x = v.toGeoJSON(n);
            if (u) p.push(x.geometry);
            else {
              var z = Ja(x);
              z.type === "FeatureCollection" ? p.push.apply(p, z.features) : p.push(z);
            }
          }
        }), u ? Kn(this, { geometries: p, type: "GeometryCollection" }) : { type: "FeatureCollection", features: p };
      } });
      function Or(n, o) {
        return new Rn(n, o);
      }
      var fu = Or, fi = Xn.extend({ options: { opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function(n, o, u) {
        this._url = n, this._bounds = mt(o), A(this, u);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ut(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        Te(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(n) {
        return this.options.opacity = n, this._image && this._updateOpacity(), this;
      }, setStyle: function(n) {
        return n.opacity && this.setOpacity(n.opacity), this;
      }, bringToFront: function() {
        return this._map && ra(this._image), this;
      }, bringToBack: function() {
        return this._map && Ua(this._image), this;
      }, setUrl: function(n) {
        return this._url = n, this._image && (this._image.src = n), this;
      }, setBounds: function(n) {
        return this._bounds = mt(n), this._map && this._reset(), this;
      }, getEvents: function() {
        var n = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      }, setZIndex: function(n) {
        return this.options.zIndex = n, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var n = this._url.tagName === "IMG", o = this._image = n ? this._url : Wt("img");
        if (Ut(o, "leaflet-image-layer"), this._zoomAnimated && Ut(o, "leaflet-zoom-animated"), this.options.className && Ut(o, this.options.className), o.onselectstart = E, o.onmousemove = E, o.onload = g(this.fire, this, "load"), o.onerror = g(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), n) {
          this._url = o.src;
          return;
        }
        o.src = this._url, o.alt = this.options.alt;
      }, _animateZoom: function(n) {
        var o = this._map.getZoomScale(n.zoom), u = this._map._latLngBoundsToNewLayerBounds(this._bounds, n.zoom, n.center).min;
        Dn(this._image, u, o);
      }, _reset: function() {
        var n = this._image, o = new K(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), u = o.getSize();
        ke(n, o.min), n.style.width = u.x + "px", n.style.height = u.y + "px";
      }, _updateOpacity: function() {
        bn(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var n = this.options.errorOverlayUrl;
        n && this._url !== n && (this._url = n, this._image.src = n);
      }, getCenter: function() {
        return this._bounds.getCenter();
      } }), to = function(n, o, u) {
        return new fi(n, o, u);
      }, Ar = fi.extend({ options: { autoplay: true, loop: true, keepAspectRatio: true, muted: false, playsInline: true }, _initImage: function() {
        var n = this._url.tagName === "VIDEO", o = this._image = n ? this._url : Wt("video");
        if (Ut(o, "leaflet-image-layer"), this._zoomAnimated && Ut(o, "leaflet-zoom-animated"), this.options.className && Ut(o, this.options.className), o.onselectstart = E, o.onmousemove = E, o.onloadeddata = g(this.fire, this, "load"), n) {
          for (var u = o.getElementsByTagName("source"), p = [], v = 0; v < u.length; v++) p.push(u[v].src);
          this._url = u.length > 0 ? p : [o.src];
          return;
        }
        k(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(o.style, "objectFit") && (o.style.objectFit = "fill"), o.autoplay = !!this.options.autoplay, o.loop = !!this.options.loop, o.muted = !!this.options.muted, o.playsInline = !!this.options.playsInline;
        for (var x = 0; x < this._url.length; x++) {
          var z = Wt("source");
          z.src = this._url[x], o.appendChild(z);
        }
      } });
      function du(n, o, u) {
        return new Ar(n, o, u);
      }
      var Ni = fi.extend({ _initImage: function() {
        var n = this._image = this._url;
        Ut(n, "leaflet-image-layer"), this._zoomAnimated && Ut(n, "leaflet-zoom-animated"), this.options.className && Ut(n, this.options.className), n.onselectstart = E, n.onmousemove = E;
      } });
      function hu(n, o, u) {
        return new Ni(n, o, u);
      }
      var Qn = Xn.extend({ options: { interactive: false, offset: [0, 0], className: "", pane: void 0, content: "" }, initialize: function(n, o) {
        n && (n instanceof _t || k(n)) ? (this._latlng = gt(n), A(this, o)) : (A(this, n), this._source = o), this.options.content && (this._content = this.options.content);
      }, openOn: function(n) {
        return n = arguments.length ? n : this._source._map, n.hasLayer(this) || n.addLayer(this), this;
      }, close: function() {
        return this._map && this._map.removeLayer(this), this;
      }, toggle: function(n) {
        return this._map ? this.close() : (arguments.length ? this._source = n : n = this._source, this._prepareOpen(), this.openOn(n._map)), this;
      }, onAdd: function(n) {
        this._zoomAnimated = n._zoomAnimated, this._container || this._initLayout(), n._fadeAnimated && bn(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), n._fadeAnimated && bn(this._container, 1), this.bringToFront(), this.options.interactive && (Ut(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      }, onRemove: function(n) {
        n._fadeAnimated ? (bn(this._container, 0), this._removeTimeout = setTimeout(g(Te, void 0, this._container), 200)) : Te(this._container), this.options.interactive && (Ce(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(n) {
        return this._latlng = gt(n), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(n) {
        return this._content = n, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var n = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && ra(this._container), this;
      }, bringToBack: function() {
        return this._map && Ua(this._container), this;
      }, _prepareOpen: function(n) {
        var o = this._source;
        if (!o._map) return false;
        if (o instanceof On) {
          o = null;
          var u = this._source._layers;
          for (var p in u) if (u[p]._map) {
            o = u[p];
            break;
          }
          if (!o) return false;
          this._source = o;
        }
        if (!n) if (o.getCenter) n = o.getCenter();
        else if (o.getLatLng) n = o.getLatLng();
        else if (o.getBounds) n = o.getBounds().getCenter();
        else throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(n), this._map && this.update(), true;
      }, _updateContent: function() {
        if (this._content) {
          var n = this._contentNode, o = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof o == "string") n.innerHTML = o;
          else {
            for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
            n.appendChild(o);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        if (this._map) {
          var n = this._map.latLngToLayerPoint(this._latlng), o = M(this.options.offset), u = this._getAnchor();
          this._zoomAnimated ? ke(this._container, n.add(u)) : o = o.add(n).add(u);
          var p = this._containerBottom = -o.y, v = this._containerLeft = -Math.round(this._containerWidth / 2) + o.x;
          this._container.style.bottom = p + "px", this._container.style.left = v + "px";
        }
      }, _getAnchor: function() {
        return [0, 0];
      } });
      Vt.include({ _initOverlay: function(n, o, u, p) {
        var v = o;
        return v instanceof n || (v = new n(p).setContent(o)), u && v.setLatLng(u), v;
      } }), Xn.include({ _initOverlay: function(n, o, u, p) {
        var v = u;
        return v instanceof n ? (A(v, p), v._source = this) : (v = o && !p ? o : new n(p, this), v.setContent(u)), v;
      } });
      var qo = Qn.extend({ options: { pane: "popupPane", offset: [0, 7], maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: "" }, openOn: function(n) {
        return n = arguments.length ? n : this._source._map, !n.hasLayer(this) && n._popup && n._popup.options.autoClose && n.removeLayer(n._popup), n._popup = this, Qn.prototype.openOn.call(this, n);
      }, onAdd: function(n) {
        Qn.prototype.onAdd.call(this, n), n.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, true), this._source instanceof xi || this._source.on("preclick", Si));
      }, onRemove: function(n) {
        Qn.prototype.onRemove.call(this, n), n.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, true), this._source instanceof xi || this._source.off("preclick", Si));
      }, getEvents: function() {
        var n = Qn.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (n.preclick = this.close), this.options.keepInView && (n.moveend = this._adjustPan), n;
      }, _initLayout: function() {
        var n = "leaflet-popup", o = this._container = Wt("div", n + " " + (this.options.className || "") + " leaflet-zoom-animated"), u = this._wrapper = Wt("div", n + "-content-wrapper", o);
        if (this._contentNode = Wt("div", n + "-content", u), Va(o), Ga(this._contentNode), kt(o, "contextmenu", Si), this._tipContainer = Wt("div", n + "-tip-container", o), this._tip = Wt("div", n + "-tip", this._tipContainer), this.options.closeButton) {
          var p = this._closeButton = Wt("a", n + "-close-button", o);
          p.setAttribute("role", "button"), p.setAttribute("aria-label", "Close popup"), p.href = "#close", p.innerHTML = '<span aria-hidden="true">&#215;</span>', kt(p, "click", function(v) {
            He(v), this.close();
          }, this);
        }
      }, _updateLayout: function() {
        var n = this._contentNode, o = n.style;
        o.width = "", o.whiteSpace = "nowrap";
        var u = n.offsetWidth;
        u = Math.min(u, this.options.maxWidth), u = Math.max(u, this.options.minWidth), o.width = u + 1 + "px", o.whiteSpace = "", o.height = "";
        var p = n.offsetHeight, v = this.options.maxHeight, x = "leaflet-popup-scrolled";
        v && p > v ? (o.height = v + "px", Ut(n, x)) : Ce(n, x), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(n) {
        var o = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center), u = this._getAnchor();
        ke(this._container, o.add(u));
      }, _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = false;
            return;
          }
          var n = this._map, o = parseInt(oa(this._container, "marginBottom"), 10) || 0, u = this._container.offsetHeight + o, p = this._containerWidth, v = new it(this._containerLeft, -u - this._containerBottom);
          v._add(Pi(this._container));
          var x = n.layerPointToContainerPoint(v), z = M(this.options.autoPanPadding), I = M(this.options.autoPanPaddingTopLeft || z), W = M(this.options.autoPanPaddingBottomRight || z), pt = n.getSize(), St = 0, xt = 0;
          x.x + p + W.x > pt.x && (St = x.x + p - pt.x + W.x), x.x - St - I.x < 0 && (St = x.x - I.x), x.y + u + W.y > pt.y && (xt = x.y + u - pt.y + W.y), x.y - xt - I.y < 0 && (xt = x.y - I.y), (St || xt) && (this.options.keepInView && (this._autopanning = true), n.fire("autopanstart").panBy([St, xt]));
        }
      }, _getAnchor: function() {
        return M(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      } }), vf = function(n, o) {
        return new qo(n, o);
      };
      Vt.mergeOptions({ closePopupOnClick: true }), Vt.include({ openPopup: function(n, o, u) {
        return this._initOverlay(qo, n, o, u).openOn(this), this;
      }, closePopup: function(n) {
        return n = arguments.length ? n : this._popup, n && n.close(), this;
      } }), Xn.include({ bindPopup: function(n, o) {
        return this._popup = this._initOverlay(qo, this._popup, n, o), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(n) {
        return this._popup && (this instanceof On || (this._popup._source = this), this._popup._prepareOpen(n || this._latlng) && this._popup.openOn(this._map)), this;
      }, closePopup: function() {
        return this._popup && this._popup.close(), this;
      }, togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      }, isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : false;
      }, setPopupContent: function(n) {
        return this._popup && this._popup.setContent(n), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(n) {
        if (!(!this._popup || !this._map)) {
          ci(n);
          var o = n.layer || n.target;
          if (this._popup._source === o && !(o instanceof xi)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(n.latlng);
            return;
          }
          this._popup._source = o, this.openPopup(n.latlng);
        }
      }, _movePopup: function(n) {
        this._popup.setLatLng(n.latlng);
      }, _onKeyPress: function(n) {
        n.originalEvent.keyCode === 13 && this._openPopup(n);
      } });
      var Rr = Qn.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, opacity: 0.9 }, onAdd: function(n) {
        Qn.prototype.onAdd.call(this, n), this.setOpacity(this.options.opacity), n.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, true));
      }, onRemove: function(n) {
        Qn.prototype.onRemove.call(this, n), n.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, true));
      }, getEvents: function() {
        var n = Qn.prototype.getEvents.call(this);
        return this.options.permanent || (n.preclick = this.close), n;
      }, _initLayout: function() {
        var n = "leaflet-tooltip", o = n + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = Wt("div", o), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + b(this));
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(n) {
        var o, u, p = this._map, v = this._container, x = p.latLngToContainerPoint(p.getCenter()), z = p.layerPointToContainerPoint(n), I = this.options.direction, W = v.offsetWidth, pt = v.offsetHeight, St = M(this.options.offset), xt = this._getAnchor();
        I === "top" ? (o = W / 2, u = pt) : I === "bottom" ? (o = W / 2, u = 0) : I === "center" ? (o = W / 2, u = pt / 2) : I === "right" ? (o = 0, u = pt / 2) : I === "left" ? (o = W, u = pt / 2) : z.x < x.x ? (I = "right", o = 0, u = pt / 2) : (I = "left", o = W + (St.x + xt.x) * 2, u = pt / 2), n = n.subtract(M(o, u, true)).add(St).add(xt), Ce(v, "leaflet-tooltip-right"), Ce(v, "leaflet-tooltip-left"), Ce(v, "leaflet-tooltip-top"), Ce(v, "leaflet-tooltip-bottom"), Ut(v, "leaflet-tooltip-" + I), ke(v, n);
      }, _updatePosition: function() {
        var n = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(n);
      }, setOpacity: function(n) {
        this.options.opacity = n, this._container && bn(this._container, n);
      }, _animateZoom: function(n) {
        var o = this._map._latLngToNewLayerPoint(this._latlng, n.zoom, n.center);
        this._setPosition(o);
      }, _getAnchor: function() {
        return M(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      } }), yf = function(n, o) {
        return new Rr(n, o);
      };
      Vt.include({ openTooltip: function(n, o, u) {
        return this._initOverlay(Rr, n, o, u).openOn(this), this;
      }, closeTooltip: function(n) {
        return n.close(), this;
      } }), Xn.include({ bindTooltip: function(n, o) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Rr, this._tooltip, n, o), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(n) {
        if (!(!n && this._tooltipHandlersAdded)) {
          var o = n ? "off" : "on", u = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent ? u.add = this._openTooltip : (u.mouseover = this._openTooltip, u.mouseout = this.closeTooltip, u.click = this._openTooltip, this._map ? this._addFocusListeners() : u.add = this._addFocusListeners), this._tooltip.options.sticky && (u.mousemove = this._moveTooltip), this[o](u), this._tooltipHandlersAdded = !n;
        }
      }, openTooltip: function(n) {
        return this._tooltip && (this instanceof On || (this._tooltip._source = this), this._tooltip._prepareOpen(n) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      }, closeTooltip: function() {
        if (this._tooltip) return this._tooltip.close();
      }, toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(n) {
        return this._tooltip && this._tooltip.setContent(n), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      }, _addFocusListenersOnLayer: function(n) {
        var o = typeof n.getElement == "function" && n.getElement();
        o && (kt(o, "focus", function() {
          this._tooltip._source = n, this.openTooltip();
        }, this), kt(o, "blur", this.closeTooltip, this));
      }, _setAriaDescribedByOnLayer: function(n) {
        var o = typeof n.getElement == "function" && n.getElement();
        o && o.setAttribute("aria-describedby", this._tooltip._container.id);
      }, _openTooltip: function(n) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = true;
            var o = this;
            this._map.once("moveend", function() {
              o._openOnceFlag = false, o._openTooltip(n);
            });
            return;
          }
          this._tooltip._source = n.layer || n.target, this.openTooltip(this._tooltip.options.sticky ? n.latlng : void 0);
        }
      }, _moveTooltip: function(n) {
        var o = n.latlng, u, p;
        this._tooltip.options.sticky && n.originalEvent && (u = this._map.mouseEventToContainerPoint(n.originalEvent), p = this._map.containerPointToLayerPoint(u), o = this._map.layerPointToLatLng(p)), this._tooltip.setLatLng(o);
      } });
      var Ps = Ka.extend({ options: { iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon" }, createIcon: function(n) {
        var o = n && n.tagName === "DIV" ? n : document.createElement("div"), u = this.options;
        if (u.html instanceof Element ? (fn(o), o.appendChild(u.html)) : o.innerHTML = u.html !== false ? u.html : "", u.bgPos) {
          var p = M(u.bgPos);
          o.style.backgroundPosition = -p.x + "px " + -p.y + "px";
        }
        return this._setIconStyles(o, "icon"), o;
      }, createShadow: function() {
        return null;
      } });
      function pu(n) {
        return new Ps(n);
      }
      Ka.Default = Qa;
      var ma = Xn.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: Et.mobile, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function(n) {
        A(this, n);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      }, beforeAdd: function(n) {
        n._addZoomLimit(this);
      }, onRemove: function(n) {
        this._removeAllTiles(), Te(this._container), n._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (ra(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (Ua(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(n) {
        return this.options.opacity = n, this._updateOpacity(), this;
      }, setZIndex: function(n) {
        return this.options.zIndex = n, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var n = this._clampZoom(this._map.getZoom());
          n !== this._tileZoom && (this._tileZoom = n, this._updateLevels()), this._update();
        }
        return this;
      }, getEvents: function() {
        var n = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = S(this._onMoveEnd, this.options.updateInterval, this)), n.move = this._onMove), this._zoomAnimated && (n.zoomanim = this._animateZoom), n;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var n = this.options.tileSize;
        return n instanceof it ? n : new it(n, n);
      }, _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(n) {
        for (var o = this.getPane().children, u = -n(-1 / 0, 1 / 0), p = 0, v = o.length, x; p < v; p++) x = o[p].style.zIndex, o[p] !== this._container && x && (u = n(u, +x));
        isFinite(u) && (this.options.zIndex = u + n(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !Et.ielt9) {
          bn(this._container, this.options.opacity);
          var n = +/* @__PURE__ */ new Date(), o = false, u = false;
          for (var p in this._tiles) {
            var v = this._tiles[p];
            if (!(!v.current || !v.loaded)) {
              var x = Math.min(1, (n - v.loaded) / 200);
              bn(v.el, x), x < 1 ? o = true : (v.active ? u = true : this._onOpaqueTile(v), v.active = true);
            }
          }
          u && !this._noPrune && this._pruneTiles(), o && (rt(this._fadeFrame), this._fadeFrame = Q(this._updateOpacity, this));
        }
      }, _onOpaqueTile: E, _initContainer: function() {
        this._container || (this._container = Wt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var n = this._tileZoom, o = this.options.maxZoom;
        if (n !== void 0) {
          for (var u in this._levels) u = Number(u), this._levels[u].el.children.length || u === n ? (this._levels[u].el.style.zIndex = o - Math.abs(n - u), this._onUpdateLevel(u)) : (Te(this._levels[u].el), this._removeTilesAtZoom(u), this._onRemoveLevel(u), delete this._levels[u]);
          var p = this._levels[n], v = this._map;
          return p || (p = this._levels[n] = {}, p.el = Wt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), p.el.style.zIndex = o, p.origin = v.project(v.unproject(v.getPixelOrigin()), n).round(), p.zoom = n, this._setZoomTransform(p, v.getCenter(), v.getZoom()), E(p.el.offsetWidth), this._onCreateLevel(p)), this._level = p, p;
        }
      }, _onUpdateLevel: E, _onRemoveLevel: E, _onCreateLevel: E, _pruneTiles: function() {
        if (this._map) {
          var n, o, u = this._map.getZoom();
          if (u > this.options.maxZoom || u < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (n in this._tiles) o = this._tiles[n], o.retain = o.current;
          for (n in this._tiles) if (o = this._tiles[n], o.current && !o.active) {
            var p = o.coords;
            this._retainParent(p.x, p.y, p.z, p.z - 5) || this._retainChildren(p.x, p.y, p.z, p.z + 2);
          }
          for (n in this._tiles) this._tiles[n].retain || this._removeTile(n);
        }
      }, _removeTilesAtZoom: function(n) {
        for (var o in this._tiles) this._tiles[o].coords.z === n && this._removeTile(o);
      }, _removeAllTiles: function() {
        for (var n in this._tiles) this._removeTile(n);
      }, _invalidateAll: function() {
        for (var n in this._levels) Te(this._levels[n].el), this._onRemoveLevel(Number(n)), delete this._levels[n];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(n, o, u, p) {
        var v = Math.floor(n / 2), x = Math.floor(o / 2), z = u - 1, I = new it(+v, +x);
        I.z = +z;
        var W = this._tileCoordsToKey(I), pt = this._tiles[W];
        return pt && pt.active ? (pt.retain = true, true) : (pt && pt.loaded && (pt.retain = true), z > p ? this._retainParent(v, x, z, p) : false);
      }, _retainChildren: function(n, o, u, p) {
        for (var v = 2 * n; v < 2 * n + 2; v++) for (var x = 2 * o; x < 2 * o + 2; x++) {
          var z = new it(v, x);
          z.z = u + 1;
          var I = this._tileCoordsToKey(z), W = this._tiles[I];
          if (W && W.active) {
            W.retain = true;
            continue;
          } else W && W.loaded && (W.retain = true);
          u + 1 < p && this._retainChildren(v, x, u + 1, p);
        }
      }, _resetView: function(n) {
        var o = n && (n.pinch || n.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), o, o);
      }, _animateZoom: function(n) {
        this._setView(n.center, n.zoom, true, n.noUpdate);
      }, _clampZoom: function(n) {
        var o = this.options;
        return o.minNativeZoom !== void 0 && n < o.minNativeZoom ? o.minNativeZoom : o.maxNativeZoom !== void 0 && o.maxNativeZoom < n ? o.maxNativeZoom : n;
      }, _setView: function(n, o, u, p) {
        var v = Math.round(o);
        this.options.maxZoom !== void 0 && v > this.options.maxZoom || this.options.minZoom !== void 0 && v < this.options.minZoom ? v = void 0 : v = this._clampZoom(v);
        var x = this.options.updateWhenZooming && v !== this._tileZoom;
        (!p || x) && (this._tileZoom = v, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), v !== void 0 && this._update(n), u || this._pruneTiles(), this._noPrune = !!u), this._setZoomTransforms(n, o);
      }, _setZoomTransforms: function(n, o) {
        for (var u in this._levels) this._setZoomTransform(this._levels[u], n, o);
      }, _setZoomTransform: function(n, o, u) {
        var p = this._map.getZoomScale(u, n.zoom), v = n.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(o, u)).round();
        Et.any3d ? Dn(n.el, v, p) : ke(n.el, v);
      }, _resetGrid: function() {
        var n = this._map, o = n.options.crs, u = this._tileSize = this.getTileSize(), p = this._tileZoom, v = this._map.getPixelWorldBounds(this._tileZoom);
        v && (this._globalTileRange = this._pxBoundsToTileRange(v)), this._wrapX = o.wrapLng && !this.options.noWrap && [Math.floor(n.project([0, o.wrapLng[0]], p).x / u.x), Math.ceil(n.project([0, o.wrapLng[1]], p).x / u.y)], this._wrapY = o.wrapLat && !this.options.noWrap && [Math.floor(n.project([o.wrapLat[0], 0], p).y / u.x), Math.ceil(n.project([o.wrapLat[1], 0], p).y / u.y)];
      }, _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      }, _getTiledPixelBounds: function(n) {
        var o = this._map, u = o._animatingZoom ? Math.max(o._animateToZoom, o.getZoom()) : o.getZoom(), p = o.getZoomScale(u, this._tileZoom), v = o.project(n, this._tileZoom).floor(), x = o.getSize().divideBy(p * 2);
        return new K(v.subtract(x), v.add(x));
      }, _update: function(n) {
        var o = this._map;
        if (o) {
          var u = this._clampZoom(o.getZoom());
          if (n === void 0 && (n = o.getCenter()), this._tileZoom !== void 0) {
            var p = this._getTiledPixelBounds(n), v = this._pxBoundsToTileRange(p), x = v.getCenter(), z = [], I = this.options.keepBuffer, W = new K(v.getBottomLeft().subtract([I, -I]), v.getTopRight().add([I, -I]));
            if (!(isFinite(v.min.x) && isFinite(v.min.y) && isFinite(v.max.x) && isFinite(v.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for (var pt in this._tiles) {
              var St = this._tiles[pt].coords;
              (St.z !== this._tileZoom || !W.contains(new it(St.x, St.y))) && (this._tiles[pt].current = false);
            }
            if (Math.abs(u - this._tileZoom) > 1) {
              this._setView(n, u);
              return;
            }
            for (var xt = v.min.y; xt <= v.max.y; xt++) for (var Ct = v.min.x; Ct <= v.max.x; Ct++) {
              var Pt = new it(Ct, xt);
              if (Pt.z = this._tileZoom, !!this._isValidTile(Pt)) {
                var we = this._tiles[this._tileCoordsToKey(Pt)];
                we ? we.current = true : z.push(Pt);
              }
            }
            if (z.sort(function(sn, Hn) {
              return sn.distanceTo(x) - Hn.distanceTo(x);
            }), z.length !== 0) {
              this._loading || (this._loading = true, this.fire("loading"));
              var Ne = document.createDocumentFragment();
              for (Ct = 0; Ct < z.length; Ct++) this._addTile(z[Ct], Ne);
              this._level.el.appendChild(Ne);
            }
          }
        }
      }, _isValidTile: function(n) {
        var o = this._map.options.crs;
        if (!o.infinite) {
          var u = this._globalTileRange;
          if (!o.wrapLng && (n.x < u.min.x || n.x > u.max.x) || !o.wrapLat && (n.y < u.min.y || n.y > u.max.y)) return false;
        }
        if (!this.options.bounds) return true;
        var p = this._tileCoordsToBounds(n);
        return mt(this.options.bounds).overlaps(p);
      }, _keyToBounds: function(n) {
        return this._tileCoordsToBounds(this._keyToTileCoords(n));
      }, _tileCoordsToNwSe: function(n) {
        var o = this._map, u = this.getTileSize(), p = n.scaleBy(u), v = p.add(u), x = o.unproject(p, n.z), z = o.unproject(v, n.z);
        return [x, z];
      }, _tileCoordsToBounds: function(n) {
        var o = this._tileCoordsToNwSe(n), u = new ct(o[0], o[1]);
        return this.options.noWrap || (u = this._map.wrapLatLngBounds(u)), u;
      }, _tileCoordsToKey: function(n) {
        return n.x + ":" + n.y + ":" + n.z;
      }, _keyToTileCoords: function(n) {
        var o = n.split(":"), u = new it(+o[0], +o[1]);
        return u.z = +o[2], u;
      }, _removeTile: function(n) {
        var o = this._tiles[n];
        o && (Te(o.el), delete this._tiles[n], this.fire("tileunload", { tile: o.el, coords: this._keyToTileCoords(n) }));
      }, _initTile: function(n) {
        Ut(n, "leaflet-tile");
        var o = this.getTileSize();
        n.style.width = o.x + "px", n.style.height = o.y + "px", n.onselectstart = E, n.onmousemove = E, Et.ielt9 && this.options.opacity < 1 && bn(n, this.options.opacity);
      }, _addTile: function(n, o) {
        var u = this._getTilePos(n), p = this._tileCoordsToKey(n), v = this.createTile(this._wrapCoords(n), g(this._tileReady, this, n));
        this._initTile(v), this.createTile.length < 2 && Q(g(this._tileReady, this, n, null, v)), ke(v, u), this._tiles[p] = { el: v, coords: n, current: true }, o.appendChild(v), this.fire("tileloadstart", { tile: v, coords: n });
      }, _tileReady: function(n, o, u) {
        o && this.fire("tileerror", { error: o, tile: u, coords: n });
        var p = this._tileCoordsToKey(n);
        u = this._tiles[p], u && (u.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (bn(u.el, 0), rt(this._fadeFrame), this._fadeFrame = Q(this._updateOpacity, this)) : (u.active = true, this._pruneTiles()), o || (Ut(u.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: u.el, coords: n })), this._noTilesToLoad() && (this._loading = false, this.fire("load"), Et.ielt9 || !this._map._fadeAnimated ? Q(this._pruneTiles, this) : setTimeout(g(this._pruneTiles, this), 250)));
      }, _getTilePos: function(n) {
        return n.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(n) {
        var o = new it(this._wrapX ? w(n.x, this._wrapX) : n.x, this._wrapY ? w(n.y, this._wrapY) : n.y);
        return o.z = n.z, o;
      }, _pxBoundsToTileRange: function(n) {
        var o = this.getTileSize();
        return new K(n.min.unscaleBy(o).floor(), n.max.unscaleBy(o).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var n in this._tiles) if (!this._tiles[n].loaded) return false;
        return true;
      } });
      function Fn(n) {
        return new ma(n);
      }
      var ga = ma.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false, referrerPolicy: false }, initialize: function(n, o) {
        this._url = n, o = A(this, o), o.detectRetina && Et.retina && o.maxZoom > 0 ? (o.tileSize = Math.floor(o.tileSize / 2), o.zoomReverse ? (o.zoomOffset--, o.minZoom = Math.min(o.maxZoom, o.minZoom + 1)) : (o.zoomOffset++, o.maxZoom = Math.max(o.minZoom, o.maxZoom - 1)), o.minZoom = Math.max(0, o.minZoom)) : o.zoomReverse ? o.minZoom = Math.min(o.maxZoom, o.minZoom) : o.maxZoom = Math.max(o.minZoom, o.maxZoom), typeof o.subdomains == "string" && (o.subdomains = o.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      }, setUrl: function(n, o) {
        return this._url === n && o === void 0 && (o = true), this._url = n, o || this.redraw(), this;
      }, createTile: function(n, o) {
        var u = document.createElement("img");
        return kt(u, "load", g(this._tileOnLoad, this, o, u)), kt(u, "error", g(this._tileOnError, this, o, u)), (this.options.crossOrigin || this.options.crossOrigin === "") && (u.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (u.referrerPolicy = this.options.referrerPolicy), u.alt = "", u.src = this.getTileUrl(n), u;
      }, getTileUrl: function(n) {
        var o = { r: Et.retina ? "@2x" : "", s: this._getSubdomain(n), x: n.x, y: n.y, z: this._getZoomForUrl() };
        if (this._map && !this._map.options.crs.infinite) {
          var u = this._globalTileRange.max.y - n.y;
          this.options.tms && (o.y = u), o["-y"] = u;
        }
        return tt(this._url, h(o, this.options));
      }, _tileOnLoad: function(n, o) {
        Et.ielt9 ? setTimeout(g(n, this, null, o), 0) : n(null, o);
      }, _tileOnError: function(n, o, u) {
        var p = this.options.errorTileUrl;
        p && o.getAttribute("src") !== p && (o.src = p), n(u, o);
      }, _onTileRemove: function(n) {
        n.tile.onload = null;
      }, _getZoomForUrl: function() {
        var n = this._tileZoom, o = this.options.maxZoom, u = this.options.zoomReverse, p = this.options.zoomOffset;
        return u && (n = o - n), n + p;
      }, _getSubdomain: function(n) {
        var o = Math.abs(n.x + n.y) % this.options.subdomains.length;
        return this.options.subdomains[o];
      }, _abortLoading: function() {
        var n, o;
        for (n in this._tiles) if (this._tiles[n].coords.z !== this._tileZoom && (o = this._tiles[n].el, o.onload = E, o.onerror = E, !o.complete)) {
          o.src = B;
          var u = this._tiles[n].coords;
          Te(o), delete this._tiles[n], this.fire("tileabort", { tile: o, coords: u });
        }
      }, _removeTile: function(n) {
        var o = this._tiles[n];
        if (o) return o.el.setAttribute("src", B), ma.prototype._removeTile.call(this, n);
      }, _tileReady: function(n, o, u) {
        if (!(!this._map || u && u.getAttribute("src") === B)) return ma.prototype._tileReady.call(this, n, o, u);
      } });
      function Ln(n, o) {
        return new ga(n, o);
      }
      var zn = ga.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1" }, options: { crs: null, uppercase: false }, initialize: function(n, o) {
        this._url = n;
        var u = h({}, this.defaultWmsParams);
        for (var p in o) p in this.options || (u[p] = o[p]);
        o = A(this, o);
        var v = o.detectRetina && Et.retina ? 2 : 1, x = this.getTileSize();
        u.width = x.x * v, u.height = x.y * v, this.wmsParams = u;
      }, onAdd: function(n) {
        this._crs = this.options.crs || n.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var o = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[o] = this._crs.code, ga.prototype.onAdd.call(this, n);
      }, getTileUrl: function(n) {
        var o = this._tileCoordsToNwSe(n), u = this._crs, p = ut(u.project(o[0]), u.project(o[1])), v = p.min, x = p.max, z = (this._wmsVersion >= 1.3 && this._crs === lu ? [v.y, v.x, x.y, x.x] : [v.x, v.y, x.x, x.y]).join(","), I = ga.prototype.getTileUrl.call(this, n);
        return I + $(this.wmsParams, I, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + z;
      }, setParams: function(n, o) {
        return h(this.wmsParams, n), o || this.redraw(), this;
      } });
      function eo(n, o) {
        return new zn(n, o);
      }
      ga.WMS = zn, Ln.wms = eo;
      var Wn = Xn.extend({ options: { padding: 0.1 }, initialize: function(n) {
        A(this, n), b(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), Ut(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var n = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
        return this._zoomAnimated && (n.zoomanim = this._onAnimZoom), n;
      }, _onAnimZoom: function(n) {
        this._updateTransform(n.center, n.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(n, o) {
        var u = this._map.getZoomScale(o, this._zoom), p = this._map.getSize().multiplyBy(0.5 + this.options.padding), v = this._map.project(this._center, o), x = p.multiplyBy(-u).add(v).subtract(this._map._getNewPixelOrigin(n, o));
        Et.any3d ? Dn(this._container, x, u) : ke(this._container, x);
      }, _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var n in this._layers) this._layers[n]._reset();
      }, _onZoomEnd: function() {
        for (var n in this._layers) this._layers[n]._project();
      }, _updatePaths: function() {
        for (var n in this._layers) this._layers[n]._update();
      }, _update: function() {
        var n = this.options.padding, o = this._map.getSize(), u = this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();
        this._bounds = new K(u, u.add(o.multiplyBy(1 + n * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      } }), Go = Wn.extend({ options: { tolerance: 0 }, getEvents: function() {
        var n = Wn.prototype.getEvents.call(this);
        return n.viewprereset = this._onViewPreReset, n;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        Wn.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var n = this._container = document.createElement("canvas");
        kt(n, "mousemove", this._onMouseMove, this), kt(n, "click dblclick mousedown mouseup contextmenu", this._onClick, this), kt(n, "mouseout", this._handleMouseOut, this), n._leaflet_disable_events = true, this._ctx = n.getContext("2d");
      }, _destroyContainer: function() {
        rt(this._redrawRequest), delete this._ctx, Te(this._container), ee(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var n;
          this._redrawBounds = null;
          for (var o in this._layers) n = this._layers[o], n._update();
          this._redraw();
        }
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Wn.prototype._update.call(this);
          var n = this._bounds, o = this._container, u = n.getSize(), p = Et.retina ? 2 : 1;
          ke(o, n.min), o.width = p * u.x, o.height = p * u.y, o.style.width = u.x + "px", o.style.height = u.y + "px", Et.retina && this._ctx.scale(2, 2), this._ctx.translate(-n.min.x, -n.min.y), this.fire("update");
        }
      }, _reset: function() {
        Wn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
      }, _initPath: function(n) {
        this._updateDashArray(n), this._layers[b(n)] = n;
        var o = n._order = { layer: n, prev: this._drawLast, next: null };
        this._drawLast && (this._drawLast.next = o), this._drawLast = o, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(n) {
        this._requestRedraw(n);
      }, _removePath: function(n) {
        var o = n._order, u = o.next, p = o.prev;
        u ? u.prev = p : this._drawLast = p, p ? p.next = u : this._drawFirst = u, delete n._order, delete this._layers[b(n)], this._requestRedraw(n);
      }, _updatePath: function(n) {
        this._extendRedrawBounds(n), n._project(), n._update(), this._requestRedraw(n);
      }, _updateStyle: function(n) {
        this._updateDashArray(n), this._requestRedraw(n);
      }, _updateDashArray: function(n) {
        if (typeof n.options.dashArray == "string") {
          var o = n.options.dashArray.split(/[, ]+/), u = [], p, v;
          for (v = 0; v < o.length; v++) {
            if (p = Number(o[v]), isNaN(p)) return;
            u.push(p);
          }
          n.options._dashArray = u;
        } else n.options._dashArray = n.options.dashArray;
      }, _requestRedraw: function(n) {
        this._map && (this._extendRedrawBounds(n), this._redrawRequest = this._redrawRequest || Q(this._redraw, this));
      }, _extendRedrawBounds: function(n) {
        if (n._pxBounds) {
          var o = (n.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new K(), this._redrawBounds.extend(n._pxBounds.min.subtract([o, o])), this._redrawBounds.extend(n._pxBounds.max.add([o, o]));
        }
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var n = this._redrawBounds;
        if (n) {
          var o = n.getSize();
          this._ctx.clearRect(n.min.x, n.min.y, o.x, o.y);
        } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      }, _draw: function() {
        var n, o = this._redrawBounds;
        if (this._ctx.save(), o) {
          var u = o.getSize();
          this._ctx.beginPath(), this._ctx.rect(o.min.x, o.min.y, u.x, u.y), this._ctx.clip();
        }
        this._drawing = true;
        for (var p = this._drawFirst; p; p = p.next) n = p.layer, (!o || n._pxBounds && n._pxBounds.intersects(o)) && n._updatePath();
        this._drawing = false, this._ctx.restore();
      }, _updatePoly: function(n, o) {
        if (this._drawing) {
          var u, p, v, x, z = n._parts, I = z.length, W = this._ctx;
          if (I) {
            for (W.beginPath(), u = 0; u < I; u++) {
              for (p = 0, v = z[u].length; p < v; p++) x = z[u][p], W[p ? "lineTo" : "moveTo"](x.x, x.y);
              o && W.closePath();
            }
            this._fillStroke(W, n);
          }
        }
      }, _updateCircle: function(n) {
        if (!(!this._drawing || n._empty())) {
          var o = n._point, u = this._ctx, p = Math.max(Math.round(n._radius), 1), v = (Math.max(Math.round(n._radiusY), 1) || p) / p;
          v !== 1 && (u.save(), u.scale(1, v)), u.beginPath(), u.arc(o.x, o.y / v, p, 0, Math.PI * 2, false), v !== 1 && u.restore(), this._fillStroke(u, n);
        }
      }, _fillStroke: function(n, o) {
        var u = o.options;
        u.fill && (n.globalAlpha = u.fillOpacity, n.fillStyle = u.fillColor || u.color, n.fill(u.fillRule || "evenodd")), u.stroke && u.weight !== 0 && (n.setLineDash && n.setLineDash(o.options && o.options._dashArray || []), n.globalAlpha = u.opacity, n.lineWidth = u.weight, n.strokeStyle = u.color, n.lineCap = u.lineCap, n.lineJoin = u.lineJoin, n.stroke());
      }, _onClick: function(n) {
        for (var o = this._map.mouseEventToLayerPoint(n), u, p, v = this._drawFirst; v; v = v.next) u = v.layer, u.options.interactive && u._containsPoint(o) && (!(n.type === "click" || n.type === "preclick") || !this._map._draggableMoved(u)) && (p = u);
        this._fireEvent(p ? [p] : false, n);
      }, _onMouseMove: function(n) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var o = this._map.mouseEventToLayerPoint(n);
          this._handleMouseHover(n, o);
        }
      }, _handleMouseOut: function(n) {
        var o = this._hoveredLayer;
        o && (Ce(this._container, "leaflet-interactive"), this._fireEvent([o], n, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
      }, _handleMouseHover: function(n, o) {
        if (!this._mouseHoverThrottled) {
          for (var u, p, v = this._drawFirst; v; v = v.next) u = v.layer, u.options.interactive && u._containsPoint(o) && (p = u);
          p !== this._hoveredLayer && (this._handleMouseOut(n), p && (Ut(this._container, "leaflet-interactive"), this._fireEvent([p], n, "mouseover"), this._hoveredLayer = p)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : false, n), this._mouseHoverThrottled = true, setTimeout(g(function() {
            this._mouseHoverThrottled = false;
          }, this), 32);
        }
      }, _fireEvent: function(n, o, u) {
        this._map._fireDOMEvent(o, u || o.type, n);
      }, _bringToFront: function(n) {
        var o = n._order;
        if (o) {
          var u = o.next, p = o.prev;
          if (u) u.prev = p;
          else return;
          p ? p.next = u : u && (this._drawFirst = u), o.prev = this._drawLast, this._drawLast.next = o, o.next = null, this._drawLast = o, this._requestRedraw(n);
        }
      }, _bringToBack: function(n) {
        var o = n._order;
        if (o) {
          var u = o.next, p = o.prev;
          if (p) p.next = u;
          else return;
          u ? u.prev = p : p && (this._drawLast = p), o.prev = null, o.next = this._drawFirst, this._drawFirst.prev = o, this._drawFirst = o, this._requestRedraw(n);
        }
      } });
      function Vo(n) {
        return Et.canvas ? new Go(n) : null;
      }
      var va = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(n) {
            return document.createElement("<lvml:" + n + ' class="lvml">');
          };
        } catch {
        }
        return function(n) {
          return document.createElement("<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), no = { _initContainer: function() {
        this._container = Wt("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (Wn.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(n) {
        var o = n._container = va("shape");
        Ut(o, "leaflet-vml-shape " + (this.options.className || "")), o.coordsize = "1 1", n._path = va("path"), o.appendChild(n._path), this._updateStyle(n), this._layers[b(n)] = n;
      }, _addPath: function(n) {
        var o = n._container;
        this._container.appendChild(o), n.options.interactive && n.addInteractiveTarget(o);
      }, _removePath: function(n) {
        var o = n._container;
        Te(o), n.removeInteractiveTarget(o), delete this._layers[b(n)];
      }, _updateStyle: function(n) {
        var o = n._stroke, u = n._fill, p = n.options, v = n._container;
        v.stroked = !!p.stroke, v.filled = !!p.fill, p.stroke ? (o || (o = n._stroke = va("stroke")), v.appendChild(o), o.weight = p.weight + "px", o.color = p.color, o.opacity = p.opacity, p.dashArray ? o.dashStyle = k(p.dashArray) ? p.dashArray.join(" ") : p.dashArray.replace(/( *, *)/g, " ") : o.dashStyle = "", o.endcap = p.lineCap.replace("butt", "flat"), o.joinstyle = p.lineJoin) : o && (v.removeChild(o), n._stroke = null), p.fill ? (u || (u = n._fill = va("fill")), v.appendChild(u), u.color = p.fillColor || p.color, u.opacity = p.fillOpacity) : u && (v.removeChild(u), n._fill = null);
      }, _updateCircle: function(n) {
        var o = n._point.round(), u = Math.round(n._radius), p = Math.round(n._radiusY || u);
        this._setPath(n, n._empty() ? "M0 0" : "AL " + o.x + "," + o.y + " " + u + "," + p + " 0," + 65535 * 360);
      }, _setPath: function(n, o) {
        n._path.v = o;
      }, _bringToFront: function(n) {
        ra(n._container);
      }, _bringToBack: function(n) {
        Ua(n._container);
      } }, Yo = Et.vml ? va : ue, Di = Wn.extend({ _initContainer: function() {
        this._container = Yo("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Yo("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        Te(this._container), ee(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          Wn.prototype._update.call(this);
          var n = this._bounds, o = n.getSize(), u = this._container;
          (!this._svgSize || !this._svgSize.equals(o)) && (this._svgSize = o, u.setAttribute("width", o.x), u.setAttribute("height", o.y)), ke(u, n.min), u.setAttribute("viewBox", [n.min.x, n.min.y, o.x, o.y].join(" ")), this.fire("update");
        }
      }, _initPath: function(n) {
        var o = n._path = Yo("path");
        n.options.className && Ut(o, n.options.className), n.options.interactive && Ut(o, "leaflet-interactive"), this._updateStyle(n), this._layers[b(n)] = n;
      }, _addPath: function(n) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(n._path), n.addInteractiveTarget(n._path);
      }, _removePath: function(n) {
        Te(n._path), n.removeInteractiveTarget(n._path), delete this._layers[b(n)];
      }, _updatePath: function(n) {
        n._project(), n._update();
      }, _updateStyle: function(n) {
        var o = n._path, u = n.options;
        o && (u.stroke ? (o.setAttribute("stroke", u.color), o.setAttribute("stroke-opacity", u.opacity), o.setAttribute("stroke-width", u.weight), o.setAttribute("stroke-linecap", u.lineCap), o.setAttribute("stroke-linejoin", u.lineJoin), u.dashArray ? o.setAttribute("stroke-dasharray", u.dashArray) : o.removeAttribute("stroke-dasharray"), u.dashOffset ? o.setAttribute("stroke-dashoffset", u.dashOffset) : o.removeAttribute("stroke-dashoffset")) : o.setAttribute("stroke", "none"), u.fill ? (o.setAttribute("fill", u.fillColor || u.color), o.setAttribute("fill-opacity", u.fillOpacity), o.setAttribute("fill-rule", u.fillRule || "evenodd")) : o.setAttribute("fill", "none"));
      }, _updatePoly: function(n, o) {
        this._setPath(n, nn(n._parts, o));
      }, _updateCircle: function(n) {
        var o = n._point, u = Math.max(Math.round(n._radius), 1), p = Math.max(Math.round(n._radiusY), 1) || u, v = "a" + u + "," + p + " 0 1,0 ", x = n._empty() ? "M0 0" : "M" + (o.x - u) + "," + o.y + v + u * 2 + ",0 " + v + -u * 2 + ",0 ";
        this._setPath(n, x);
      }, _setPath: function(n, o) {
        n._path.setAttribute("d", o);
      }, _bringToFront: function(n) {
        ra(n._path);
      }, _bringToBack: function(n) {
        Ua(n._path);
      } });
      Et.vml && Di.include(no);
      function ya(n) {
        return Et.svg || Et.vml ? new Di(n) : null;
      }
      Vt.include({ getRenderer: function(n) {
        var o = n.options.renderer || this._getPaneRenderer(n.options.pane) || this.options.renderer || this._renderer;
        return o || (o = this._renderer = this._createRenderer()), this.hasLayer(o) || this.addLayer(o), o;
      }, _getPaneRenderer: function(n) {
        if (n === "overlayPane" || n === void 0) return false;
        var o = this._paneRenderers[n];
        return o === void 0 && (o = this._createRenderer({ pane: n }), this._paneRenderers[n] = o), o;
      }, _createRenderer: function(n) {
        return this.options.preferCanvas && Vo(n) || ya(n);
      } });
      var mu = Wa.extend({ initialize: function(n, o) {
        Wa.prototype.initialize.call(this, this._boundsToLatLngs(n), o);
      }, setBounds: function(n) {
        return this.setLatLngs(this._boundsToLatLngs(n));
      }, _boundsToLatLngs: function(n) {
        return n = mt(n), [n.getSouthWest(), n.getNorthWest(), n.getNorthEast(), n.getSouthEast()];
      } });
      function Pn(n, o) {
        return new mu(n, o);
      }
      Di.create = Yo, Di.pointsToPath = nn, Rn.geometryToLayer = jo, Rn.coordsToLatLng = Er, Rn.coordsToLatLngs = Io, Rn.latLngToCoords = $o, Rn.latLngsToCoords = Mr, Rn.getFeature = Kn, Rn.asFeature = Ja, Vt.mergeOptions({ boxZoom: true });
      var Lr = Yn.extend({ initialize: function(n) {
        this._map = n, this._container = n._container, this._pane = n._panes.overlayPane, this._resetStateTimeout = 0, n.on("unload", this._destroy, this);
      }, addHooks: function() {
        kt(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        ee(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        Te(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(n) {
        if (!n.shiftKey || n.which !== 1 && n.button !== 1) return false;
        this._clearDeferredResetState(), this._resetState(), si(), Bo(), this._startPoint = this._map.mouseEventToContainerPoint(n), kt(document, { contextmenu: ci, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseMove: function(n) {
        this._moved || (this._moved = true, this._box = Wt("div", "leaflet-zoom-box", this._container), Ut(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(n);
        var o = new K(this._point, this._startPoint), u = o.getSize();
        ke(this._box, o.min), this._box.style.width = u.x + "px", this._box.style.height = u.y + "px";
      }, _finish: function() {
        this._moved && (Te(this._box), Ce(this._container, "leaflet-crosshair")), Po(), bs(), ee(document, { contextmenu: ci, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
      }, _onMouseUp: function(n) {
        if (!(n.which !== 1 && n.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(g(this._resetState, this), 0);
          var o = new ct(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
          this._map.fitBounds(o).fire("boxzoomend", { boxZoomBounds: o });
        }
      }, _onKeyDown: function(n) {
        n.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      } });
      Vt.addInitHook("addHandler", "boxZoom", Lr), Vt.mergeOptions({ doubleClickZoom: true });
      var di = Yn.extend({ addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(n) {
        var o = this._map, u = o.getZoom(), p = o.options.zoomDelta, v = n.originalEvent.shiftKey ? u - p : u + p;
        o.options.doubleClickZoom === "center" ? o.setZoom(v) : o.setZoomAround(n.containerPoint, v);
      } });
      Vt.addInitHook("addHandler", "doubleClickZoom", di), Vt.mergeOptions({ dragging: true, inertia: true, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0 });
      var Bs = Yn.extend({ addHooks: function() {
        if (!this._draggable) {
          var n = this._map;
          this._draggable = new ki(n._mapPane, n._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), n.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), n.on("zoomend", this._onZoomEnd, this), n.whenReady(this._onZoomEnd, this));
        }
        Ut(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        Ce(this._map._container, "leaflet-grab"), Ce(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var n = this._map;
        if (n._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var o = mt(this._map.options.maxBounds);
          this._offsetLimit = ut(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else this._offsetLimit = null;
        n.fire("movestart").fire("dragstart"), n.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(n) {
        if (this._map.options.inertia) {
          var o = this._lastTime = +/* @__PURE__ */ new Date(), u = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(u), this._times.push(o), this._prunePositions(o);
        }
        this._map.fire("move", n).fire("drag", n);
      }, _prunePositions: function(n) {
        for (; this._positions.length > 1 && n - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var n = this._map.getSize().divideBy(2), o = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = o.subtract(n).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(n, o) {
        return n - (n - o) * this._viscosity;
      }, _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var n = this._draggable._newPos.subtract(this._draggable._startPos), o = this._offsetLimit;
          n.x < o.min.x && (n.x = this._viscousLimit(n.x, o.min.x)), n.y < o.min.y && (n.y = this._viscousLimit(n.y, o.min.y)), n.x > o.max.x && (n.x = this._viscousLimit(n.x, o.max.x)), n.y > o.max.y && (n.y = this._viscousLimit(n.y, o.max.y)), this._draggable._newPos = this._draggable._startPos.add(n);
        }
      }, _onPreDragWrap: function() {
        var n = this._worldWidth, o = Math.round(n / 2), u = this._initialWorldOffset, p = this._draggable._newPos.x, v = (p - o + u) % n + o - u, x = (p + o + u) % n - o - u, z = Math.abs(v + u) < Math.abs(x + u) ? v : x;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = z;
      }, _onDragEnd: function(n) {
        var o = this._map, u = o.options, p = !u.inertia || n.noInertia || this._times.length < 2;
        if (o.fire("dragend", n), p) o.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var v = this._lastPos.subtract(this._positions[0]), x = (this._lastTime - this._times[0]) / 1e3, z = u.easeLinearity, I = v.multiplyBy(z / x), W = I.distanceTo([0, 0]), pt = Math.min(u.inertiaMaxSpeed, W), St = I.multiplyBy(pt / W), xt = pt / (u.inertiaDeceleration * z), Ct = St.multiplyBy(-xt / 2).round();
          !Ct.x && !Ct.y ? o.fire("moveend") : (Ct = o._limitOffset(Ct, o.options.maxBounds), Q(function() {
            o.panBy(Ct, { duration: xt, easeLinearity: z, noMoveStart: true, animate: true });
          }));
        }
      } });
      Vt.addInitHook("addHandler", "dragging", Bs), Vt.mergeOptions({ keyboard: true, keyboardPanDelta: 80 });
      var Xo = Yn.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function(n) {
        this._map = n, this._setPanDelta(n.options.keyboardPanDelta), this._setZoomDelta(n.options.zoomDelta);
      }, addHooks: function() {
        var n = this._map._container;
        n.tabIndex <= 0 && (n.tabIndex = "0"), kt(n, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, removeHooks: function() {
        this._removeHooks(), ee(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      }, _onMouseDown: function() {
        if (!this._focused) {
          var n = document.body, o = document.documentElement, u = n.scrollTop || o.scrollTop, p = n.scrollLeft || o.scrollLeft;
          this._map._container.focus(), window.scrollTo(p, u);
        }
      }, _onFocus: function() {
        this._focused = true, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = false, this._map.fire("blur");
      }, _setPanDelta: function(n) {
        var o = this._panKeys = {}, u = this.keyCodes, p, v;
        for (p = 0, v = u.left.length; p < v; p++) o[u.left[p]] = [-1 * n, 0];
        for (p = 0, v = u.right.length; p < v; p++) o[u.right[p]] = [n, 0];
        for (p = 0, v = u.down.length; p < v; p++) o[u.down[p]] = [0, n];
        for (p = 0, v = u.up.length; p < v; p++) o[u.up[p]] = [0, -1 * n];
      }, _setZoomDelta: function(n) {
        var o = this._zoomKeys = {}, u = this.keyCodes, p, v;
        for (p = 0, v = u.zoomIn.length; p < v; p++) o[u.zoomIn[p]] = n;
        for (p = 0, v = u.zoomOut.length; p < v; p++) o[u.zoomOut[p]] = -n;
      }, _addHooks: function() {
        kt(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        ee(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(n) {
        if (!(n.altKey || n.ctrlKey || n.metaKey)) {
          var o = n.keyCode, u = this._map, p;
          if (o in this._panKeys) {
            if (!u._panAnim || !u._panAnim._inProgress) if (p = this._panKeys[o], n.shiftKey && (p = M(p).multiplyBy(3)), u.options.maxBounds && (p = u._limitOffset(M(p), u.options.maxBounds)), u.options.worldCopyJump) {
              var v = u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(p)));
              u.panTo(v);
            } else u.panBy(p);
          } else if (o in this._zoomKeys) u.setZoom(u.getZoom() + (n.shiftKey ? 3 : 1) * this._zoomKeys[o]);
          else if (o === 27 && u._popup && u._popup.options.closeOnEscapeKey) u.closePopup();
          else return;
          ci(n);
        }
      } });
      Vt.addInitHook("addHandler", "keyboard", Xo), Vt.mergeOptions({ scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
      var Hi = Yn.extend({ addHooks: function() {
        kt(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        ee(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(n) {
        var o = Do(n), u = this._map.options.wheelDebounceTime;
        this._delta += o, this._lastMousePos = this._map.mouseEventToContainerPoint(n), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var p = Math.max(u - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(g(this._performZoom, this), p), ci(n);
      }, _performZoom: function() {
        var n = this._map, o = n.getZoom(), u = this._map.options.zoomSnap || 0;
        n._stop();
        var p = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), v = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(p)))) / Math.LN2, x = u ? Math.ceil(v / u) * u : v, z = n._limitZoom(o + (this._delta > 0 ? x : -x)) - o;
        this._delta = 0, this._startTime = null, z && (n.options.scrollWheelZoom === "center" ? n.setZoom(o + z) : n.setZoomAround(this._lastMousePos, o + z));
      } });
      Vt.addInitHook("addHandler", "scrollWheelZoom", Hi);
      var ks = 600;
      Vt.mergeOptions({ tapHold: Et.touchNative && Et.safari && Et.mobile, tapTolerance: 15 });
      var zr = Yn.extend({ addHooks: function() {
        kt(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        ee(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(n) {
        if (clearTimeout(this._holdTimeout), n.touches.length === 1) {
          var o = n.touches[0];
          this._startPos = this._newPos = new it(o.clientX, o.clientY), this._holdTimeout = setTimeout(g(function() {
            this._cancel(), this._isTapValid() && (kt(document, "touchend", He), kt(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", o));
          }, this), ks), kt(document, "touchend touchcancel contextmenu", this._cancel, this), kt(document, "touchmove", this._onMove, this);
        }
      }, _cancelClickPrevent: function n() {
        ee(document, "touchend", He), ee(document, "touchend touchcancel", n);
      }, _cancel: function() {
        clearTimeout(this._holdTimeout), ee(document, "touchend touchcancel contextmenu", this._cancel, this), ee(document, "touchmove", this._onMove, this);
      }, _onMove: function(n) {
        var o = n.touches[0];
        this._newPos = new it(o.clientX, o.clientY);
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _simulateEvent: function(n, o) {
        var u = new MouseEvent(n, { bubbles: true, cancelable: true, view: window, screenX: o.screenX, screenY: o.screenY, clientX: o.clientX, clientY: o.clientY });
        u._simulated = true, o.target.dispatchEvent(u);
      } });
      Vt.addInitHook("addHandler", "tapHold", zr), Vt.mergeOptions({ touchZoom: Et.touch, bounceAtZoomLimits: true });
      var _a = Yn.extend({ addHooks: function() {
        Ut(this._map._container, "leaflet-touch-zoom"), kt(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        Ce(this._map._container, "leaflet-touch-zoom"), ee(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(n) {
        var o = this._map;
        if (!(!n.touches || n.touches.length !== 2 || o._animatingZoom || this._zooming)) {
          var u = o.mouseEventToContainerPoint(n.touches[0]), p = o.mouseEventToContainerPoint(n.touches[1]);
          this._centerPoint = o.getSize()._divideBy(2), this._startLatLng = o.containerPointToLatLng(this._centerPoint), o.options.touchZoom !== "center" && (this._pinchStartLatLng = o.containerPointToLatLng(u.add(p)._divideBy(2))), this._startDist = u.distanceTo(p), this._startZoom = o.getZoom(), this._moved = false, this._zooming = true, o._stop(), kt(document, "touchmove", this._onTouchMove, this), kt(document, "touchend touchcancel", this._onTouchEnd, this), He(n);
        }
      }, _onTouchMove: function(n) {
        if (!(!n.touches || n.touches.length !== 2 || !this._zooming)) {
          var o = this._map, u = o.mouseEventToContainerPoint(n.touches[0]), p = o.mouseEventToContainerPoint(n.touches[1]), v = u.distanceTo(p) / this._startDist;
          if (this._zoom = o.getScaleZoom(v, this._startZoom), !o.options.bounceAtZoomLimits && (this._zoom < o.getMinZoom() && v < 1 || this._zoom > o.getMaxZoom() && v > 1) && (this._zoom = o._limitZoom(this._zoom)), o.options.touchZoom === "center") {
            if (this._center = this._startLatLng, v === 1) return;
          } else {
            var x = u._add(p)._divideBy(2)._subtract(this._centerPoint);
            if (v === 1 && x.x === 0 && x.y === 0) return;
            this._center = o.unproject(o.project(this._pinchStartLatLng, this._zoom).subtract(x), this._zoom);
          }
          this._moved || (o._moveStart(true, false), this._moved = true), rt(this._animRequest);
          var z = g(o._move, o, this._center, this._zoom, { pinch: true, round: false }, void 0);
          this._animRequest = Q(z, this, true), He(n);
        }
      }, _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = false;
          return;
        }
        this._zooming = false, rt(this._animRequest), ee(document, "touchmove", this._onTouchMove, this), ee(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      } });
      Vt.addInitHook("addHandler", "touchZoom", _a), Vt.BoxZoom = Lr, Vt.DoubleClickZoom = di, Vt.Drag = Bs, Vt.Keyboard = Xo, Vt.ScrollWheelZoom = Hi, Vt.TapHold = zr, Vt.TouchZoom = _a, l.Bounds = K, l.Browser = Et, l.CRS = Nt, l.Canvas = Go, l.Circle = Ls, l.CircleMarker = Zo, l.Class = yt, l.Control = Sn, l.DivIcon = Ps, l.DivOverlay = Qn, l.DomEvent = nf, l.DomUtil = Fl, l.Draggable = ki, l.Evented = st, l.FeatureGroup = On, l.GeoJSON = Rn, l.GridLayer = ma, l.Handler = Yn, l.Icon = Ka, l.ImageOverlay = fi, l.LatLng = _t, l.LatLngBounds = ct, l.Layer = Xn, l.LayerGroup = ha, l.LineUtil = ru, l.Map = Vt, l.Marker = Fa, l.Mixin = lf, l.Path = xi, l.Point = it, l.PolyUtil = uf, l.Polygon = Wa, l.Polyline = Ti, l.Popup = qo, l.PosAnimation = br, l.Projection = su, l.Rectangle = mu, l.Renderer = Wn, l.SVG = Di, l.SVGOverlay = Ni, l.TileLayer = ga, l.Tooltip = Rr, l.Transformation = Gt, l.Util = bt, l.VideoOverlay = Ar, l.bind = g, l.bounds = ut, l.canvas = Vo, l.circle = mf, l.circleMarker = cu, l.control = Ya, l.divIcon = pu, l.extend = h, l.featureGroup = Uo, l.geoJSON = Or, l.geoJson = fu, l.gridLayer = Fn, l.icon = wr, l.imageOverlay = to, l.latLng = gt, l.latLngBounds = mt, l.layerGroup = uu, l.map = Ho, l.marker = Rs, l.point = M, l.polygon = An, l.polyline = gf, l.popup = vf, l.rectangle = Pn, l.setOptions = A, l.stamp = b, l.svg = ya, l.svgOverlay = hu, l.tileLayer = Ln, l.tooltip = yf, l.transformation = It, l.version = c, l.videoOverlay = du;
      var io = window.L;
      l.noConflict = function() {
        return window.L = io, this;
      }, window.L = l;
    });
  }(El, El.exports)), El.exports;
}
var Ra = zw();
function Pw(a3) {
  return a3.split(" ").filter(Boolean);
}
function Bw(a3, s) {
  for (const l of Pw(s)) Ra.DomUtil.addClass(a3, l);
}
function Fc(a3, s, l) {
  return Object.freeze({ instance: a3, context: s, container: l });
}
function Wc(a3, s) {
  return s == null ? function(c, h) {
    const m = O.useRef(void 0);
    return m.current || (m.current = a3(c, h)), m;
  } : function(c, h) {
    const m = O.useRef(void 0);
    m.current || (m.current = a3(c, h));
    const g = O.useRef(c), { instance: _ } = m.current;
    return O.useEffect(function() {
      g.current !== c && (s(_, c, g.current), g.current = c);
    }, [_, c, s]), m;
  };
}
function z_(a3, s) {
  O.useEffect(function() {
    return (s.layerContainer ?? s.map).addLayer(a3.instance), function() {
      var _a;
      (_a = s.layerContainer) == null ? void 0 : _a.removeLayer(a3.instance), s.map.removeLayer(a3.instance);
    };
  }, [s, a3]);
}
function P_(a3) {
  return function(l) {
    const c = jl(), h = a3(Qc(l, c), c);
    return A_(c.map, l.attribution), lp(h.current, l.eventHandlers), z_(h.current, c), h;
  };
}
function kw(a3, s) {
  const l = O.useRef(void 0);
  O.useEffect(function() {
    if (s.pathOptions !== l.current) {
      const h = s.pathOptions ?? {};
      a3.instance.setStyle(h), l.current = h;
    }
  }, [a3, s]);
}
function Nw(a3) {
  return function(l) {
    const c = jl(), h = a3(Qc(l, c), c);
    return lp(h.current, l.eventHandlers), z_(h.current, c), kw(h.current, l), h;
  };
}
function Dw(a3, s) {
  const l = Wc(a3, s), c = P_(l);
  return L_(c);
}
function Hw(a3, s) {
  const l = Wc(a3), c = Rw(l, s);
  return Ow(c);
}
function Uw(a3, s) {
  const l = Wc(a3, s), c = Nw(l);
  return L_(c);
}
function Zw(a3, s) {
  const l = Wc(a3, s), c = P_(l);
  return Aw(c);
}
function jw(a3, s, l) {
  const { opacity: c, zIndex: h } = s;
  c != null && c !== l.opacity && a3.setOpacity(c), h != null && h !== l.zIndex && a3.setZIndex(h);
}
function Iw(a3, s, l) {
  s.bounds instanceof Ra.LatLngBounds && s.bounds !== l.bounds && a3.setBounds(s.bounds), s.opacity != null && s.opacity !== l.opacity && a3.setOpacity(s.opacity), s.zIndex != null && s.zIndex !== l.zIndex && a3.setZIndex(s.zIndex);
}
function $w() {
  return jl().map;
}
const qw = Uw(function({ center: s, children: l, ...c }, h) {
  const m = new Ra.CircleMarker(s, c);
  return Fc(m, R_(h, { overlayContainer: m }));
}, ww), Gw = Dw(function({ bounds: s, url: l, ...c }, h) {
  const m = new Ra.ImageOverlay(l, s, c);
  return Fc(m, R_(h, { overlayContainer: m }));
}, function(s, l, c) {
  if (Iw(s, l, c), l.bounds !== c.bounds) {
    const h = l.bounds instanceof Ra.LatLngBounds ? l.bounds : new Ra.LatLngBounds(l.bounds);
    s.setBounds(h);
  }
  l.url !== c.url && s.setUrl(l.url);
});
function Vw({ bounds: a3, boundsOptions: s, center: l, children: c, className: h, id: m, placeholder: g, style: _, whenReady: b, zoom: S, ...w }, E) {
  const [R] = O.useState({ className: h, id: m, style: _ }), [D, N] = O.useState(null), A = O.useRef(void 0);
  O.useImperativeHandle(E, () => (D == null ? void 0 : D.map) ?? null, [D]);
  const $ = O.useCallback((tt) => {
    if (tt !== null && !A.current) {
      const k = new Ra.Map(tt, w);
      A.current = k, l != null && S != null ? k.setView(l, S) : a3 != null && k.fitBounds(a3, s), b != null && k.whenReady(b), N(Mw(k));
    }
  }, []);
  O.useEffect(() => () => {
    D == null ? void 0 : D.map.remove();
  }, [D]);
  const q = D ? En.createElement(Kc, { value: D }, c) : g ?? null;
  return En.createElement("div", { ...R, ref: $ }, q);
}
const Yw = O.forwardRef(Vw), Xw = ["mapPane", "markerPane", "overlayPane", "popupPane", "shadowPane", "tilePane", "tooltipPane"];
function my(a3, s) {
  const { [s]: l, ...c } = a3;
  return c;
}
function Kw(a3, s, l) {
  if (Xw.indexOf(a3) !== -1) throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${a3}`);
  if (l.map.getPane(a3) != null) throw new Error(`A pane with this name already exists: ${a3}`);
  const c = s.pane ?? l.pane, h = c ? l.map.getPane(c) : void 0, m = l.map.createPane(a3, h);
  if (s.className != null && Bw(m, s.className), s.style != null) for (const g of Object.keys(s.style)) m.style[g] = s.style[g];
  return m;
}
function Qw(a3, s) {
  const [l] = O.useState(a3.name), [c, h] = O.useState(null);
  O.useImperativeHandle(s, () => c, [c]);
  const m = jl(), g = O.useMemo(() => ({ ...m, pane: l }), [m]);
  return O.useEffect(() => (h(Kw(l, a3, m)), function() {
    var _a, _b2;
    (_b2 = (_a = m.map.getPane(l)) == null ? void 0 : _a.remove) == null ? void 0 : _b2.call(_a), m.map._panes != null && (m.map._panes = my(m.map._panes, l), m.map._paneRenderers = my(m.map._paneRenderers, l));
  }), []), a3.children != null && c != null ? qc.createPortal(En.createElement(Kc, { value: g }, a3.children), c) : null;
}
const gy = O.forwardRef(Qw), Fw = Zw(function({ url: s, ...l }, c) {
  const h = new Ra.TileLayer(s, Qc(l, c));
  return Fc(h, c);
}, function(s, l, c) {
  jw(s, l, c);
  const { url: h } = l;
  h != null && h !== c.url && s.setUrl(h);
}), Ww = Hw(function(s, l) {
  const c = new Ra.Tooltip(s, l.overlayContainer);
  return Fc(c, l);
}, function(s, l, { position: c }, h) {
  O.useEffect(function() {
    const g = l.overlayContainer;
    if (g == null) return;
    const { instance: _ } = s, b = (w) => {
      w.tooltip === _ && (c != null && _.setLatLng(c), _.update(), h(true));
    }, S = (w) => {
      w.tooltip === _ && h(false);
    };
    return g.on({ tooltipopen: b, tooltipclose: S }), g.bindTooltip(_), function() {
      g.off({ tooltipopen: b, tooltipclose: S }), g._map != null && g.unbindTooltip();
    };
  }, [s, l, h, c]);
});
function Jw({ obj: a3 }) {
  const s = wn((S) => S.resetClick), l = wn((S) => S.visibleDots), c = 300, h = 0.25, m = hs(), g = $w(), _ = { width: `${a3.clicked ? c : c * h}px`, height: `${a3.clicked ? c : c * h}px`, opacity: 1, overflow: "hidden", margin: 0, padding: 0, border: "1px solid white" };
  function b() {
    a3.clicked ? (s(), wn.setState({ focus: null })) : (s(a3), a3.found = true, wn.setState({ focus: a3 }), setTimeout(() => {
      const S = g.project([a3.lat, a3.lon], g.getZoom()), E = g.getSize().x / 2, R = E - E / m.mapRatio;
      S.x += R;
      const D = g.unproject(S, g.getZoom());
      g.flyTo([D.lat, D.lng], g.getZoom(), { animate: true, duration: 1.5 });
    }, 10));
  }
  return Y.jsx(Y.Fragment, { children: l && Y.jsx(qw, { center: [a3.lat, a3.lon], radius: 10, pathOptions: { fillOpacity: 1, fillColor: a3.found ? "transparent" : "white", weight: 0 }, eventHandlers: { click: (S) => {
    b();
  } }, className: "square", children: a3.found && Y.jsx(Ww, { direction: "center", permanent: true, style: { backgroundColor: "transparent", border: "none", padding: 0, margin: 0, fontSize: "0px", zIndex: a3.clicked ? 1e4 : "inherit" }, children: Y.jsx("div", { style: { ..._, borderRadius: a3.clicked ? "0%" : "100%" }, children: Y.jsx("img", { src: `images/collection/${a3.filename}`, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }) }) }) }) });
}
function t2() {
  const a3 = wn((m) => m.geodb), s = wn((m) => m.landing), l = wn((m) => m.resetClick), c = O.useRef(), h = [[-4.23, -78.95], [12.53, -66.85]];
  return O.useEffect(() => {
    if (s) {
      const m = c.current;
      m && m.flyToBounds(h, { animate: true, duration: 1 });
    } else {
      const m = c.current;
      if (m && a3.length > 0) {
        const g = a3[Math.floor(Math.random() * a3.length)];
        g && (m.flyTo([g.lat, g.lon], 11, { animate: true, duration: 1.5 }), setTimeout(() => {
          wn.setState({ visibleDots: true });
        }, 1500));
      }
    }
  }, [s]), Y.jsx("div", { style: { height: "100%", width: "100%" }, onClick: (m) => {
    m.target.classList.contains("square") || (l(), wn.setState({ focus: null }));
  }, children: Y.jsxs(Yw, { zoom: 10, bounds: h, zoomControl: false, ref: c, maxBounds: h, style: { width: "100%", height: "100%", zIndex: 0, backgroundColor: "transparent" }, children: [Y.jsx(gy, { name: "tilelayer-pane", style: { zIndex: 11 }, children: Y.jsx(Fw, { url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", attribution: "Tiles \xA9 Esri", opacity: s ? 0 : 1, eventHandlers: { add: (m) => {
    const g = m.target;
    g.getContainer().style.transition = "all 3s ease-in-out";
  } } }) }), Y.jsx(gy, { name: "imagelayer-pane", style: { zIndex: 1 }, children: Y.jsx(Gw, { bounds: h, url: "./sat_clip_final.png", zIndex: 1, opacity: s ? 0.8 : 0 }) }), a3.length > 0 && a3.map((m, g) => Y.jsx(Jw, { obj: m }, g))] }) });
}
function vy(a3, s) {
  return `rgba(${((c) => {
    const h = parseInt(c.slice(1), 16), m = h >> 16 & 255, g = h >> 8 & 255, _ = h & 255;
    return `${m}, ${g}, ${_}`;
  })(a3)}, ${s})`;
}
function e2({ label: a3, color: s, options: l, value: c, onChange: h }) {
  const m = hs();
  return Y.jsx(O_, { value: c, onChange: h, displayEmpty: true, sx: { borderRadius: "50px", px: 2, py: 0, my: 0, color: s, "& .MuiSelect-icon": { color: s }, border: "solid 1px black", backgroundColor: "whitesmoke", opacity: 0.95 }, MenuProps: { PaperProps: { sx: { borderRadius: m.brdRad, pt: 0, mt: 1, backgroundColor: m.palette.white.main, "& .MuiMenuItem-root": { border: "solid 1px transparent", borderRadius: m.brdRad, mx: 1 }, "& .MuiMenuItem-root.Mui-selected": { borderColor: s, backgroundColor: vy(s, 0.1) }, "& .MuiMenuItem-root:hover": { backgroundColor: vy(s, 0.1) } } } }, children: l.map((g) => Y.jsx(nw, { value: g.value, children: g.label }, g.value)) });
}
function n2({ focus: a3 }) {
  const s = ["colonial_diffusion_all", "mambo_diffusion_all", "oro_diffusion_all", "street_art_diffusion_all"], [l, c] = O.useState(s[0]), h = s.map((m) => ({ label: m.replaceAll("_diffusion_all", "").replaceAll("_", " "), value: m }));
  return Y.jsx(Y.Fragment, { children: Y.jsxs(Ki, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative" }, children: [Y.jsx("img", { src: `images/generations/${l}/${a3 == null ? void 0 : a3.caption.replaceAll("'", "_")}.png`, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" } }), Y.jsx(Ki, { sx: { position: "absolute", bottom: 0, backgroundColor: "whitesmoke", border: "1px solid black", px: 4, py: 1, mb: 2, h: "200px", w: "100%", borderRadius: "100px", opacity: 0.95 }, children: Y.jsx(fr, { variant: "h6", children: a3 == null ? void 0 : a3.caption }) }), Y.jsx(Ki, { sx: { position: "absolute", top: 0, right: 0, m: 2 }, children: Y.jsx(e2, { label: "Lora", color: "black", options: h, value: l, onChange: (m) => {
    c(m.target.value);
  } }) })] }) });
}
function i2() {
  const a3 = wn((l) => l.focus);
  return Y.jsxs(Y.Fragment, { children: [" ", a3 && Y.jsxs(Ki, { sx: { position: "absolute", bottom: 0, left: 0, m: 2, p: 2, width: a3 ? "15vw" : "0px", maxWidth: "15vw", height: a3 ? "auto" : "0px", backgroundColor: "whitesmoke", border: a3 ? "1px solid black" : "none", borderRadius: "20px", opacity: 0.95, zIndex: 100, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", transition: `all ${500 * 1e-3}s` }, children: [Y.jsxs(Ki, { sx: { flex: 1 }, children: [Y.jsx(fr, { variant: "h6", children: a3 == null ? void 0 : a3.title }), Y.jsx(fr, { children: a3 == null ? void 0 : a3.author }), Y.jsx(fr, { sx: { pb: 2 }, children: (a3 == null ? void 0 : a3.date) ? a3 == null ? void 0 : a3.date : "-" })] }), Y.jsx(m_, { sx: { overflow: "hidden", p: 0, border: "1px solid black", backgroundColor: "#ffffff", borderRadius: "100%" }, onClick: () => (a3 == null ? void 0 : a3.url) && window.open(a3.url, "_blank"), className: "holomorphic", children: Y.jsx("img", { src: "/mambo_logo.png", alt: "Go to Mambo", style: { width: 40, height: 40, borderRadius: "100%" } }) })] })] });
}
const a2 = i_(Y.jsx("path", { d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15M14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" }));
function o2() {
  const a3 = wn((s) => s.landing);
  return Y.jsx(Ki, { sx: { position: "absolute", top: 0, left: 0, p: a3 ? 2 : 0, m: 2, borderRadius: "20px", backgroundColor: "#000000", border: "1px solid black", color: "#eeeeee", width: a3 ? "20vw" : "auto", zIndex: 1e3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxHeight: "80vh", overflowY: "auto", overflowX: "hidden", transition: "all 0.5s ease-in-out" }, children: a3 ? Y.jsxs(Y.Fragment, { children: [Y.jsx(fr, { sx: { pb: 2, textAlign: "justify" }, children: "Culture as dream, as encounter, as discovery and liberation. Surprise as emancipation. Territory as an endless horizon." }), Y.jsx(fr, { sx: { textAlign: "justify" }, children: "We land in new geographies, we immerse ourselves in vaguely intuited contexts, to cross, gently and wildly, the blurred mists of clich\xE9, of assumptions and commonplaces, and to enter into the unmitigated richness of a palimpsest. How to inhabit this natural, cultural, social and emotional maelstrom? Our digital age, with networked and scaled images, with distributed, automated and supposedly intelligent computational processes, exacerbates the processes of syncretism that characterise every culture. The large artificial intelligence models that increasingly mediate and shape contemporary culture are trained on vast amounts of unfiltered data from the internet, mostly representative of a global north, Anglo-Saxon based culture. What to do with our cultural legacies and heritages that are foreign to this reality? How to preserve and promote them? Do we accept to be swallowed up and processed by the machine to be part of this new automated and merciless syncretism? Or do we say we inhabit the shadows of silence, of invisibility as a strategy for survival?" }), Y.jsx(sC, { sx: { borderRadius: "20px", color: "whitesmoke", border: "1px solid white", m: 0, mt: 4, px: 3 }, onClick: () => {
    wn.setState({ landing: false });
  }, children: "Begin" })] }) : Y.jsx(Y.Fragment, { children: Y.jsx(m_, { sx: { color: "whitesmoke", p: 1, borderRadius: "100%" }, onClick: () => {
    wn.setState({ landing: !a3, focus: null, visibleDots: false });
  }, children: Y.jsx(a2, {}) }) }) });
}
function r2() {
  const a3 = wn((g) => g.focus), s = wn((g) => g.landing), l = O.useRef(null), c = 0.5, h = hs(), m = { m: h.mainM, borderRadius: "20px", transition: "all 0.5s ", border: "1px solid black", overflow: "hidden" };
  return Y.jsx(Y.Fragment, { children: Y.jsx(Ki, { sx: { width: "100vw", height: "100vh", backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 0 }, children: Y.jsxs(Ki, { sx: { width: "100vw", height: h.mainH, backgroundColor: "whitesmoke", display: "flex", p: 0 }, children: [Y.jsxs(Ki, { sx: { flex: 1, backgroundColor: "whitesmoke", ...m, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }, className: "holomorphic", children: [Y.jsx(o2, {}), Y.jsx(i2, {}), Y.jsx(t2, {}), Y.jsx(fr, { variant: "h1", sx: { position: "absolute", fontWeight: "bold", opacity: s ? 1 : 0, pointerEvents: "none", transition: `opacity ${c}s` }, children: "Digital F(r)ictions" })] }), Y.jsx(Ki, { ref: l, sx: { width: a3 ? h.imgW : "0px", backgroundColor: "transparent", ...m, ml: 0, mr: a3 ? m.m : 0, border: a3 ? m.border : "none", visibility: a3 ? "visible" : "hidden" }, children: a3 && Y.jsx(n2, { focus: a3 }) })] }) }) });
}
const s2 = ab.createRoot(document.querySelector("#root"));
l2();
s2.render(Y.jsx(Y.Fragment, { children: Y.jsx(Ox, { theme: Rx, children: Y.jsx(r2, {}) }) }));
async function l2() {
  try {
    const a3 = await fetch("./centroid_data.json");
    if (!a3.ok) throw new Error(`Failed to fetch data: ${a3.statusText}`);
    const s = await a3.json();
    s.map((l) => {
      l.found = false, l.clicked = false;
    }), wn.setState({ geodb: s });
  } catch (a3) {
    console.error("Error loading data:", a3);
  }
}
