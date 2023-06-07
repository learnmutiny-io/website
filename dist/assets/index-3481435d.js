(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Mw(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var wg = { exports: {} },
  na = {},
  xg = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hs = Symbol.for("react.element"),
  Fw = Symbol.for("react.portal"),
  Uw = Symbol.for("react.fragment"),
  bw = Symbol.for("react.strict_mode"),
  Bw = Symbol.for("react.profiler"),
  Vw = Symbol.for("react.provider"),
  zw = Symbol.for("react.context"),
  Hw = Symbol.for("react.forward_ref"),
  qw = Symbol.for("react.suspense"),
  Ww = Symbol.for("react.memo"),
  Kw = Symbol.for("react.lazy"),
  Ad = Symbol.iterator;
function Qw(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Ad && t[Ad]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Eg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sg = Object.assign,
  Cg = {};
function hi(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Cg),
    (this.updater = n || Eg);
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
hi.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Tg() {}
Tg.prototype = hi.prototype;
function _h(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Cg),
    (this.updater = n || Eg);
}
var Ih = (_h.prototype = new Tg());
Ih.constructor = _h;
Sg(Ih, hi.prototype);
Ih.isPureReactComponent = !0;
var Dd = Array.isArray,
  kg = Object.prototype.hasOwnProperty,
  $h = { current: null },
  Ng = { key: !0, ref: !0, __self: !0, __source: !0 };
function _g(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      kg.call(e, r) && !Ng.hasOwnProperty(r) && (i[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Hs,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: $h.current,
  };
}
function Gw(t, e) {
  return {
    $$typeof: Hs,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Ah(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Hs;
}
function Yw(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Rd = /\/+/g;
function tu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Yw("" + t.key)
    : e.toString(36);
}
function qo(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Hs:
          case Fw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + tu(o, 0) : r),
      Dd(i)
        ? ((n = ""),
          t != null && (n = t.replace(Rd, "$&/") + "/"),
          qo(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ah(i) &&
            (i = Gw(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Rd, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Dd(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l];
      var a = r + tu(s, l);
      o += qo(s, e, n, a, i);
    }
  else if (((a = Qw(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(s = t.next()).done; )
      (s = s.value), (a = r + tu(s, l++)), (o += qo(s, e, n, a, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function yo(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    qo(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function Xw(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Je = { current: null },
  Wo = { transition: null },
  Jw = {
    ReactCurrentDispatcher: Je,
    ReactCurrentBatchConfig: Wo,
    ReactCurrentOwner: $h,
  };
q.Children = {
  map: yo,
  forEach: function (t, e, n) {
    yo(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      yo(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      yo(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Ah(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
q.Component = hi;
q.Fragment = Uw;
q.Profiler = Bw;
q.PureComponent = _h;
q.StrictMode = bw;
q.Suspense = qw;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jw;
q.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = Sg({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = $h.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      kg.call(e, a) &&
        !Ng.hasOwnProperty(a) &&
        (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Hs, type: t.type, key: i, ref: s, props: r, _owner: o };
};
q.createContext = function (t) {
  return (
    (t = {
      $$typeof: zw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Vw, _context: t }),
    (t.Consumer = t)
  );
};
q.createElement = _g;
q.createFactory = function (t) {
  var e = _g.bind(null, t);
  return (e.type = t), e;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (t) {
  return { $$typeof: Hw, render: t };
};
q.isValidElement = Ah;
q.lazy = function (t) {
  return { $$typeof: Kw, _payload: { _status: -1, _result: t }, _init: Xw };
};
q.memo = function (t, e) {
  return { $$typeof: Ww, type: t, compare: e === void 0 ? null : e };
};
q.startTransition = function (t) {
  var e = Wo.transition;
  Wo.transition = {};
  try {
    t();
  } finally {
    Wo.transition = e;
  }
};
q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
q.useCallback = function (t, e) {
  return Je.current.useCallback(t, e);
};
q.useContext = function (t) {
  return Je.current.useContext(t);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (t) {
  return Je.current.useDeferredValue(t);
};
q.useEffect = function (t, e) {
  return Je.current.useEffect(t, e);
};
q.useId = function () {
  return Je.current.useId();
};
q.useImperativeHandle = function (t, e, n) {
  return Je.current.useImperativeHandle(t, e, n);
};
q.useInsertionEffect = function (t, e) {
  return Je.current.useInsertionEffect(t, e);
};
q.useLayoutEffect = function (t, e) {
  return Je.current.useLayoutEffect(t, e);
};
q.useMemo = function (t, e) {
  return Je.current.useMemo(t, e);
};
q.useReducer = function (t, e, n) {
  return Je.current.useReducer(t, e, n);
};
q.useRef = function (t) {
  return Je.current.useRef(t);
};
q.useState = function (t) {
  return Je.current.useState(t);
};
q.useSyncExternalStore = function (t, e, n) {
  return Je.current.useSyncExternalStore(t, e, n);
};
q.useTransition = function () {
  return Je.current.useTransition();
};
q.version = "18.2.0";
xg.exports = q;
var $ = xg.exports;
const wn = Mw($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zw = $,
  ex = Symbol.for("react.element"),
  tx = Symbol.for("react.fragment"),
  nx = Object.prototype.hasOwnProperty,
  rx = Zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ix = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ig(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) nx.call(e, r) && !ix.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: ex,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: rx.current,
  };
}
na.Fragment = tx;
na.jsx = Ig;
na.jsxs = Ig;
wg.exports = na;
var p = wg.exports;
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function as() {
  return (
    (as = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    as.apply(this, arguments)
  );
}
var mn;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(mn || (mn = {}));
const Pd = "popstate";
function sx(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return Qu(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : hl(i);
  }
  return lx(e, n, null, t);
}
function xe(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Dh(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function ox() {
  return Math.random().toString(36).substr(2, 8);
}
function Od(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Qu(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    as(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? fi(e) : e,
      { state: n, key: (e && e.key) || r || ox() }
    )
  );
}
function hl(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function fi(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function lx(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = mn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(as({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    l = mn.Pop;
    let T = c(),
      m = T == null ? null : T - u;
    (u = T), a && a({ action: l, location: w.location, delta: m });
  }
  function f(T, m) {
    l = mn.Push;
    let d = Qu(w.location, T, m);
    n && n(d, T), (u = c() + 1);
    let y = Od(d, u),
      S = w.createHref(d);
    try {
      o.pushState(y, "", S);
    } catch {
      i.location.assign(S);
    }
    s && a && a({ action: l, location: w.location, delta: 1 });
  }
  function g(T, m) {
    l = mn.Replace;
    let d = Qu(w.location, T, m);
    n && n(d, T), (u = c());
    let y = Od(d, u),
      S = w.createHref(d);
    o.replaceState(y, "", S),
      s && a && a({ action: l, location: w.location, delta: 0 });
  }
  function v(T) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof T == "string" ? T : hl(T);
    return (
      xe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, m)
    );
  }
  let w = {
    get action() {
      return l;
    },
    get location() {
      return t(i, o);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Pd, h),
        (a = T),
        () => {
          i.removeEventListener(Pd, h), (a = null);
        }
      );
    },
    createHref(T) {
      return e(i, T);
    },
    createURL: v,
    encodeLocation(T) {
      let m = v(T);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: g,
    go(T) {
      return o.go(T);
    },
  };
  return w;
}
var Ld;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(Ld || (Ld = {}));
function ax(t, e, n) {
  n === void 0 && (n = "/");
  let r = typeof e == "string" ? fi(e) : e,
    i = Rh(r.pathname || "/", n);
  if (i == null) return null;
  let s = $g(t);
  ux(s);
  let o = null;
  for (let l = 0; o == null && l < s.length; ++l) o = vx(s[l], Ex(i));
  return o;
}
function $g(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (xe(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = xn([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (xe(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      $g(s.children, e, c, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: gx(u, s.index), routesMeta: c });
  };
  return (
    t.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of Ag(s.path)) i(s, o, a);
    }),
    e
  );
}
function Ag(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Ag(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (t.startsWith("/") && a === "" ? "/" : a))
  );
}
function ux(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : yx(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const cx = /^:\w+$/,
  hx = 3,
  fx = 2,
  dx = 1,
  px = 10,
  mx = -2,
  jd = (t) => t === "*";
function gx(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(jd) && (r += mx),
    e && (r += fx),
    n
      .filter((i) => !jd(i))
      .reduce((i, s) => i + (cx.test(s) ? hx : s === "" ? dx : px), r)
  );
}
function yx(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function vx(t, e) {
  let { routesMeta: n } = t,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let l = n[o],
      a = o === n.length - 1,
      u = i === "/" ? e : e.slice(i.length) || "/",
      c = wx(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = l.route;
    s.push({
      params: r,
      pathname: xn([i, c.pathname]),
      pathnameBase: kx(xn([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = xn([i, c.pathnameBase]));
  }
  return s;
}
function wx(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = xx(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      if (c === "*") {
        let f = l[h] || "";
        o = s.slice(0, s.length - f.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Sx(l[h] || "", c)), u;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function xx(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Dh(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, l) => (r.push(l), "/([^\\/]+)"));
  return (
    t.endsWith("*")
      ? (r.push("*"),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function Ex(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      Dh(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function Sx(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (n) {
    return (
      Dh(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      t
    );
  }
}
function Rh(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function Cx(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? fi(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : Tx(n, e)) : e,
    search: Nx(r),
    hash: _x(i),
  };
}
function Tx(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function nu(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Dg(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Rg(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = fi(t))
    : ((i = as({}, t)),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        nu("?", "pathname", "search", i)
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        nu("#", "pathname", "hash", i)
      ),
      xe(!i.search || !i.search.includes("#"), nu("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (r || o == null) l = n;
  else {
    let h = e.length - 1;
    if (o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (h -= 1);
      i.pathname = f.join("/");
    }
    l = h >= 0 ? e[h] : "/";
  }
  let a = Cx(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const xn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  kx = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Nx = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  _x = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Ix(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Pg = ["post", "put", "patch", "delete"];
new Set(Pg);
const $x = ["get", ...Pg];
new Set($x);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    fl.apply(this, arguments)
  );
}
const Ph = $.createContext(null),
  Ax = $.createContext(null),
  di = $.createContext(null),
  ra = $.createContext(null),
  pr = $.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Og = $.createContext(null);
function Dx(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  qs() || xe(!1);
  let { basename: r, navigator: i } = $.useContext(di),
    { hash: s, pathname: o, search: l } = Mg(t, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : xn([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function qs() {
  return $.useContext(ra) != null;
}
function pi() {
  return qs() || xe(!1), $.useContext(ra).location;
}
function Lg(t) {
  $.useContext(di).static || $.useLayoutEffect(t);
}
function jg() {
  let { isDataRoute: t } = $.useContext(pr);
  return t ? Hx() : Rx();
}
function Rx() {
  qs() || xe(!1);
  let t = $.useContext(Ph),
    { basename: e, navigator: n } = $.useContext(di),
    { matches: r } = $.useContext(pr),
    { pathname: i } = pi(),
    s = JSON.stringify(Dg(r).map((a) => a.pathnameBase)),
    o = $.useRef(!1);
  return (
    Lg(() => {
      o.current = !0;
    }),
    $.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Rg(a, JSON.parse(s), i, u.relative === "path");
        t == null &&
          e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : xn([e, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [e, n, s, i, t]
    )
  );
}
function Mg(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { matches: r } = $.useContext(pr),
    { pathname: i } = pi(),
    s = JSON.stringify(Dg(r).map((o) => o.pathnameBase));
  return $.useMemo(() => Rg(t, JSON.parse(s), i, n === "path"), [t, s, i, n]);
}
function Px(t, e) {
  return Ox(t, e);
}
function Ox(t, e, n) {
  qs() || xe(!1);
  let { navigator: r } = $.useContext(di),
    { matches: i } = $.useContext(pr),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let a = pi(),
    u;
  if (e) {
    var c;
    let w = typeof e == "string" ? fi(e) : e;
    l === "/" || ((c = w.pathname) != null && c.startsWith(l)) || xe(!1),
      (u = w);
  } else u = a;
  let h = u.pathname || "/",
    f = l === "/" ? h : h.slice(l.length) || "/",
    g = ax(t, { pathname: f }),
    v = Ux(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: xn([
              l,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : xn([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return e && v
    ? $.createElement(
        ra.Provider,
        {
          value: {
            location: fl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: mn.Pop,
          },
        },
        v
      )
    : v;
}
function Lx() {
  let t = zx(),
    e = Ix(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    s = null;
  return $.createElement(
    $.Fragment,
    null,
    $.createElement("h2", null, "Unexpected Application Error!"),
    $.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? $.createElement("pre", { style: i }, n) : null,
    s
  );
}
const jx = $.createElement(Lx, null);
class Mx extends $.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error || n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error
      ? $.createElement(
          pr.Provider,
          { value: this.props.routeContext },
          $.createElement(Og.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Fx(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = $.useContext(Ph);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    $.createElement(pr.Provider, { value: e }, r)
  );
}
function Ux(t, e, n) {
  var r;
  if ((e === void 0 && (e = []), n === void 0 && (n = null), t == null)) {
    var i;
    if ((i = n) != null && i.errors) t = n.matches;
    else return null;
  }
  let s = t,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let l = s.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    l >= 0 || xe(!1), (s = s.slice(0, Math.min(s.length, l + 1)));
  }
  return s.reduceRight((l, a, u) => {
    let c = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      h = null;
    n && (h = a.route.errorElement || jx);
    let f = e.concat(s.slice(0, u + 1)),
      g = () => {
        let v;
        return (
          c
            ? (v = h)
            : a.route.Component
            ? (v = $.createElement(a.route.Component, null))
            : a.route.element
            ? (v = a.route.element)
            : (v = l),
          $.createElement(Fx, {
            match: a,
            routeContext: { outlet: l, matches: f, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? $.createElement(Mx, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: c,
          children: g(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Gu;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate");
})(Gu || (Gu = {}));
var us;
(function (t) {
  (t.UseBlocker = "useBlocker"),
    (t.UseLoaderData = "useLoaderData"),
    (t.UseActionData = "useActionData"),
    (t.UseRouteError = "useRouteError"),
    (t.UseNavigation = "useNavigation"),
    (t.UseRouteLoaderData = "useRouteLoaderData"),
    (t.UseMatches = "useMatches"),
    (t.UseRevalidator = "useRevalidator"),
    (t.UseNavigateStable = "useNavigate"),
    (t.UseRouteId = "useRouteId");
})(us || (us = {}));
function bx(t) {
  let e = $.useContext(Ph);
  return e || xe(!1), e;
}
function Bx(t) {
  let e = $.useContext(Ax);
  return e || xe(!1), e;
}
function Vx(t) {
  let e = $.useContext(pr);
  return e || xe(!1), e;
}
function Fg(t) {
  let e = Vx(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || xe(!1), n.route.id;
}
function zx() {
  var t;
  let e = $.useContext(Og),
    n = Bx(us.UseRouteError),
    r = Fg(us.UseRouteError);
  return e || ((t = n.errors) == null ? void 0 : t[r]);
}
function Hx() {
  let { router: t } = bx(Gu.UseNavigateStable),
    e = Fg(us.UseNavigateStable),
    n = $.useRef(!1);
  return (
    Lg(() => {
      n.current = !0;
    }),
    $.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, fl({ fromRouteId: e }, s)));
      },
      [t, e]
    )
  );
}
function Wn(t) {
  xe(!1);
}
function qx(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = mn.Pop,
    navigator: s,
    static: o = !1,
  } = t;
  qs() && xe(!1);
  let l = e.replace(/^\/*/, "/"),
    a = $.useMemo(() => ({ basename: l, navigator: s, static: o }), [l, s, o]);
  typeof r == "string" && (r = fi(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: h = "",
      state: f = null,
      key: g = "default",
    } = r,
    v = $.useMemo(() => {
      let w = Rh(u, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: h, state: f, key: g },
            navigationType: i,
          };
    }, [l, u, c, h, f, g, i]);
  return v == null
    ? null
    : $.createElement(
        di.Provider,
        { value: a },
        $.createElement(ra.Provider, { children: n, value: v })
      );
}
function Wx(t) {
  let { children: e, location: n } = t;
  return Px(Yu(e), n);
}
var Md;
(function (t) {
  (t[(t.pending = 0)] = "pending"),
    (t[(t.success = 1)] = "success"),
    (t[(t.error = 2)] = "error");
})(Md || (Md = {}));
new Promise(() => {});
function Yu(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    $.Children.forEach(t, (r, i) => {
      if (!$.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === $.Fragment) {
        n.push.apply(n, Yu(r.props.children, s));
        return;
      }
      r.type !== Wn && xe(!1), !r.props.index || !r.props.children || xe(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Yu(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xu() {
  return (
    (Xu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Xu.apply(this, arguments)
  );
}
function Kx(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Qx(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Gx(t, e) {
  return t.button === 0 && (!e || e === "_self") && !Qx(t);
}
const Yx = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Xx(t) {
  let { basename: e, children: n, window: r } = t,
    i = $.useRef();
  i.current == null && (i.current = sx({ window: r, v5Compat: !0 }));
  let s = i.current,
    [o, l] = $.useState({ action: s.action, location: s.location });
  return (
    $.useLayoutEffect(() => s.listen(l), [s]),
    $.createElement(qx, {
      basename: e,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: s,
    })
  );
}
const Jx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Zx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ki = $.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
      } = e,
      h = Kx(e, Yx),
      { basename: f } = $.useContext(di),
      g,
      v = !1;
    if (typeof u == "string" && Zx.test(u) && ((g = u), Jx))
      try {
        let d = new URL(window.location.href),
          y = u.startsWith("//") ? new URL(d.protocol + u) : new URL(u),
          S = Rh(y.pathname, f);
        y.origin === d.origin && S != null
          ? (u = S + y.search + y.hash)
          : (v = !0);
      } catch {}
    let w = Dx(u, { relative: i }),
      T = eE(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
      });
    function m(d) {
      r && r(d), d.defaultPrevented || T(d);
    }
    return $.createElement(
      "a",
      Xu({}, h, { href: g || w, onClick: v || s ? r : m, ref: n, target: a })
    );
  });
var Fd;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmitImpl = "useSubmitImpl"),
    (t.UseFetcher = "useFetcher");
})(Fd || (Fd = {}));
var Ud;
(function (t) {
  (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Ud || (Ud = {}));
function eE(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
    } = e === void 0 ? {} : e,
    l = jg(),
    a = pi(),
    u = Mg(t, { relative: o });
  return $.useCallback(
    (c) => {
      if (Gx(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : hl(a) === hl(u);
        l(t, { replace: h, state: i, preventScrollReset: s, relative: o });
      }
    },
    [a, l, u, r, i, n, t, s, o]
  );
}
var Ju = {},
  Ug = { exports: {} },
  ct = {},
  bg = { exports: {} },
  Bg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(D, V) {
    var z = D.length;
    D.push(V);
    e: for (; 0 < z; ) {
      var pe = (z - 1) >>> 1,
        ke = D[pe];
      if (0 < i(ke, V)) (D[pe] = V), (D[z] = ke), (z = pe);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var V = D[0],
      z = D.pop();
    if (z !== V) {
      D[0] = z;
      e: for (var pe = 0, ke = D.length, mo = ke >>> 1; pe < mo; ) {
        var Hn = 2 * (pe + 1) - 1,
          eu = D[Hn],
          qn = Hn + 1,
          go = D[qn];
        if (0 > i(eu, z))
          qn < ke && 0 > i(go, eu)
            ? ((D[pe] = go), (D[qn] = z), (pe = qn))
            : ((D[pe] = eu), (D[Hn] = z), (pe = Hn));
        else if (qn < ke && 0 > i(go, z)) (D[pe] = go), (D[qn] = z), (pe = qn);
        else break e;
      }
    }
    return V;
  }
  function i(D, V) {
    var z = D.sortIndex - V.sortIndex;
    return z !== 0 ? z : D.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    f = 3,
    g = !1,
    v = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(D) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= D)
        r(u), (V.sortIndex = V.expirationTime), e(a, V);
      else break;
      V = n(u);
    }
  }
  function S(D) {
    if (((w = !1), y(D), !v))
      if (n(a) !== null) (v = !0), Ja(I);
      else {
        var V = n(u);
        V !== null && Za(S, V.startTime - D);
      }
  }
  function I(D, V) {
    (v = !1), w && ((w = !1), m(j), (j = -1)), (g = !0);
    var z = f;
    try {
      for (
        y(V), h = n(a);
        h !== null && (!(h.expirationTime > V) || (D && !St()));

      ) {
        var pe = h.callback;
        if (typeof pe == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var ke = pe(h.expirationTime <= V);
          (V = t.unstable_now()),
            typeof ke == "function" ? (h.callback = ke) : h === n(a) && r(a),
            y(V);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var mo = !0;
      else {
        var Hn = n(u);
        Hn !== null && Za(S, Hn.startTime - V), (mo = !1);
      }
      return mo;
    } finally {
      (h = null), (f = z), (g = !1);
    }
  }
  var P = !1,
    O = null,
    j = -1,
    oe = 5,
    W = -1;
  function St() {
    return !(t.unstable_now() - W < oe);
  }
  function Ni() {
    if (O !== null) {
      var D = t.unstable_now();
      W = D;
      var V = !0;
      try {
        V = O(!0, D);
      } finally {
        V ? _i() : ((P = !1), (O = null));
      }
    } else P = !1;
  }
  var _i;
  if (typeof d == "function")
    _i = function () {
      d(Ni);
    };
  else if (typeof MessageChannel < "u") {
    var $d = new MessageChannel(),
      jw = $d.port2;
    ($d.port1.onmessage = Ni),
      (_i = function () {
        jw.postMessage(null);
      });
  } else
    _i = function () {
      T(Ni, 0);
    };
  function Ja(D) {
    (O = D), P || ((P = !0), _i());
  }
  function Za(D, V) {
    j = T(function () {
      D(t.unstable_now());
    }, V);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || g || ((v = !0), Ja(I));
    }),
    (t.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (oe = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (D) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var z = f;
      f = V;
      try {
        return D();
      } finally {
        f = z;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (D, V) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var z = f;
      f = D;
      try {
        return V();
      } finally {
        f = z;
      }
    }),
    (t.unstable_scheduleCallback = function (D, V, z) {
      var pe = t.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? pe + z : pe))
          : (z = pe),
        D)
      ) {
        case 1:
          var ke = -1;
          break;
        case 2:
          ke = 250;
          break;
        case 5:
          ke = 1073741823;
          break;
        case 4:
          ke = 1e4;
          break;
        default:
          ke = 5e3;
      }
      return (
        (ke = z + ke),
        (D = {
          id: c++,
          callback: V,
          priorityLevel: D,
          startTime: z,
          expirationTime: ke,
          sortIndex: -1,
        }),
        z > pe
          ? ((D.sortIndex = z),
            e(u, D),
            n(a) === null &&
              D === n(u) &&
              (w ? (m(j), (j = -1)) : (w = !0), Za(S, z - pe)))
          : ((D.sortIndex = ke), e(a, D), v || g || ((v = !0), Ja(I))),
        D
      );
    }),
    (t.unstable_shouldYield = St),
    (t.unstable_wrapCallback = function (D) {
      var V = f;
      return function () {
        var z = f;
        f = V;
        try {
          return D.apply(this, arguments);
        } finally {
          f = z;
        }
      };
    });
})(Bg);
bg.exports = Bg;
var tE = bg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vg = $,
  at = tE;
function k(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var zg = new Set(),
  cs = {};
function mr(t, e) {
  Qr(t, e), Qr(t + "Capture", e);
}
function Qr(t, e) {
  for (cs[t] = e, t = 0; t < e.length; t++) zg.add(e[t]);
}
var Zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zu = Object.prototype.hasOwnProperty,
  nE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bd = {},
  Bd = {};
function rE(t) {
  return Zu.call(Bd, t)
    ? !0
    : Zu.call(bd, t)
    ? !1
    : nE.test(t)
    ? (Bd[t] = !0)
    : ((bd[t] = !0), !1);
}
function iE(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function sE(t, e, n, r) {
  if (e === null || typeof e > "u" || iE(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ze(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    je[t] = new Ze(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  je[e] = new Ze(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  je[t] = new Ze(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  je[t] = new Ze(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    je[t] = new Ze(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  je[t] = new Ze(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  je[t] = new Ze(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  je[t] = new Ze(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  je[t] = new Ze(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Oh = /[\-:]([a-z])/g;
function Lh(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Oh, Lh);
    je[e] = new Ze(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Oh, Lh);
    je[e] = new Ze(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Oh, Lh);
  je[e] = new Ze(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  je[t] = new Ze(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  je[t] = new Ze(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function jh(t, e, n, r) {
  var i = je.hasOwnProperty(e) ? je[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (sE(e, n, i, r) && (n = null),
    r || i === null
      ? rE(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var an = Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vo = Symbol.for("react.element"),
  Tr = Symbol.for("react.portal"),
  kr = Symbol.for("react.fragment"),
  Mh = Symbol.for("react.strict_mode"),
  ec = Symbol.for("react.profiler"),
  Hg = Symbol.for("react.provider"),
  qg = Symbol.for("react.context"),
  Fh = Symbol.for("react.forward_ref"),
  tc = Symbol.for("react.suspense"),
  nc = Symbol.for("react.suspense_list"),
  Uh = Symbol.for("react.memo"),
  hn = Symbol.for("react.lazy"),
  Wg = Symbol.for("react.offscreen"),
  Vd = Symbol.iterator;
function Ii(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Vd && t[Vd]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ce = Object.assign,
  ru;
function Ui(t) {
  if (ru === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      ru = (e && e[1]) || "";
    }
  return (
    `
` +
    ru +
    t
  );
}
var iu = !1;
function su(t, e) {
  if (!t || iu) return "";
  iu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (iu = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Ui(t) : "";
}
function oE(t) {
  switch (t.tag) {
    case 5:
      return Ui(t.type);
    case 16:
      return Ui("Lazy");
    case 13:
      return Ui("Suspense");
    case 19:
      return Ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = su(t.type, !1)), t;
    case 11:
      return (t = su(t.type.render, !1)), t;
    case 1:
      return (t = su(t.type, !0)), t;
    default:
      return "";
  }
}
function rc(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case kr:
      return "Fragment";
    case Tr:
      return "Portal";
    case ec:
      return "Profiler";
    case Mh:
      return "StrictMode";
    case tc:
      return "Suspense";
    case nc:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case qg:
        return (t.displayName || "Context") + ".Consumer";
      case Hg:
        return (t._context.displayName || "Context") + ".Provider";
      case Fh:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Uh:
        return (
          (e = t.displayName || null), e !== null ? e : rc(t.type) || "Memo"
        );
      case hn:
        (e = t._payload), (t = t._init);
        try {
          return rc(t(e));
        } catch {}
    }
  return null;
}
function lE(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return rc(e);
    case 8:
      return e === Mh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function On(t) {
  switch (typeof t) {
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
function Kg(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function aE(t) {
  var e = Kg(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function wo(t) {
  t._valueTracker || (t._valueTracker = aE(t));
}
function Qg(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Kg(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function dl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function ic(t, e) {
  var n = e.checked;
  return ce({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function zd(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = On(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Gg(t, e) {
  (e = e.checked), e != null && jh(t, "checked", e, !1);
}
function sc(t, e) {
  Gg(t, e);
  var n = On(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? oc(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && oc(t, e.type, On(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Hd(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function oc(t, e, n) {
  (e !== "number" || dl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var bi = Array.isArray;
function Mr(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function lc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ce({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function qd(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(k(92));
      if (bi(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: On(n) };
}
function Yg(t, e) {
  var n = On(e.value),
    r = On(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function Wd(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Xg(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ac(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Xg(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var xo,
  Jg = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        xo = xo || document.createElement("div"),
          xo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = xo.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function hs(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Qi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  uE = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qi).forEach(function (t) {
  uE.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Qi[e] = Qi[t]);
  });
});
function Zg(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Qi.hasOwnProperty(t) && Qi[t])
    ? ("" + e).trim()
    : e + "px";
}
function ey(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Zg(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var cE = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uc(t, e) {
  if (e) {
    if (cE[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(k(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(k(62));
  }
}
function cc(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var hc = null;
function bh(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var fc = null,
  Fr = null,
  Ur = null;
function Kd(t) {
  if ((t = Qs(t))) {
    if (typeof fc != "function") throw Error(k(280));
    var e = t.stateNode;
    e && ((e = aa(e)), fc(t.stateNode, t.type, e));
  }
}
function ty(t) {
  Fr ? (Ur ? Ur.push(t) : (Ur = [t])) : (Fr = t);
}
function ny() {
  if (Fr) {
    var t = Fr,
      e = Ur;
    if (((Ur = Fr = null), Kd(t), e)) for (t = 0; t < e.length; t++) Kd(e[t]);
  }
}
function ry(t, e) {
  return t(e);
}
function iy() {}
var ou = !1;
function sy(t, e, n) {
  if (ou) return t(e, n);
  ou = !0;
  try {
    return ry(t, e, n);
  } finally {
    (ou = !1), (Fr !== null || Ur !== null) && (iy(), ny());
  }
}
function fs(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = aa(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
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
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(k(231, e, typeof n));
  return n;
}
var dc = !1;
if (Zt)
  try {
    var $i = {};
    Object.defineProperty($i, "passive", {
      get: function () {
        dc = !0;
      },
    }),
      window.addEventListener("test", $i, $i),
      window.removeEventListener("test", $i, $i);
  } catch {
    dc = !1;
  }
function hE(t, e, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Gi = !1,
  pl = null,
  ml = !1,
  pc = null,
  fE = {
    onError: function (t) {
      (Gi = !0), (pl = t);
    },
  };
function dE(t, e, n, r, i, s, o, l, a) {
  (Gi = !1), (pl = null), hE.apply(fE, arguments);
}
function pE(t, e, n, r, i, s, o, l, a) {
  if ((dE.apply(this, arguments), Gi)) {
    if (Gi) {
      var u = pl;
      (Gi = !1), (pl = null);
    } else throw Error(k(198));
    ml || ((ml = !0), (pc = u));
  }
}
function gr(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function oy(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Qd(t) {
  if (gr(t) !== t) throw Error(k(188));
}
function mE(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = gr(t)), e === null)) throw Error(k(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Qd(i), t;
        if (s === r) return Qd(i), e;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? t : e;
}
function ly(t) {
  return (t = mE(t)), t !== null ? ay(t) : null;
}
function ay(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = ay(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var uy = at.unstable_scheduleCallback,
  Gd = at.unstable_cancelCallback,
  gE = at.unstable_shouldYield,
  yE = at.unstable_requestPaint,
  me = at.unstable_now,
  vE = at.unstable_getCurrentPriorityLevel,
  Bh = at.unstable_ImmediatePriority,
  cy = at.unstable_UserBlockingPriority,
  gl = at.unstable_NormalPriority,
  wE = at.unstable_LowPriority,
  hy = at.unstable_IdlePriority,
  ia = null,
  bt = null;
function xE(t) {
  if (bt && typeof bt.onCommitFiberRoot == "function")
    try {
      bt.onCommitFiberRoot(ia, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var It = Math.clz32 ? Math.clz32 : CE,
  EE = Math.log,
  SE = Math.LN2;
function CE(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((EE(t) / SE) | 0)) | 0;
}
var Eo = 64,
  So = 4194304;
function Bi(t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function yl(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Bi(l)) : ((s &= o), s !== 0 && (r = Bi(s)));
  } else (o = n & ~i), o !== 0 ? (r = Bi(o)) : s !== 0 && (r = Bi(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - It(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function TE(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kE(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - It(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = TE(l, e))
      : a <= e && (t.expiredLanes |= l),
      (s &= ~l);
  }
}
function mc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function fy() {
  var t = Eo;
  return (Eo <<= 1), !(Eo & 4194240) && (Eo = 64), t;
}
function lu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ws(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - It(e)),
    (t[e] = n);
}
function NE(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - It(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Vh(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - It(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var J = 0;
function dy(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var py,
  zh,
  my,
  gy,
  yy,
  gc = !1,
  Co = [],
  En = null,
  Sn = null,
  Cn = null,
  ds = new Map(),
  ps = new Map(),
  dn = [],
  _E =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yd(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      Cn = null;
      break;
    case "pointerover":
    case "pointerout":
      ds.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ps.delete(e.pointerId);
  }
}
function Ai(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Qs(e)), e !== null && zh(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function IE(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (En = Ai(En, t, e, n, r, i)), !0;
    case "dragenter":
      return (Sn = Ai(Sn, t, e, n, r, i)), !0;
    case "mouseover":
      return (Cn = Ai(Cn, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ds.set(s, Ai(ds.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), ps.set(s, Ai(ps.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function vy(t) {
  var e = Yn(t.target);
  if (e !== null) {
    var n = gr(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = oy(n)), e !== null)) {
          (t.blockedOn = e),
            yy(t.priority, function () {
              my(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Ko(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = yc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (hc = r), n.target.dispatchEvent(r), (hc = null);
    } else return (e = Qs(n)), e !== null && zh(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Xd(t, e, n) {
  Ko(t) && n.delete(e);
}
function $E() {
  (gc = !1),
    En !== null && Ko(En) && (En = null),
    Sn !== null && Ko(Sn) && (Sn = null),
    Cn !== null && Ko(Cn) && (Cn = null),
    ds.forEach(Xd),
    ps.forEach(Xd);
}
function Di(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    gc ||
      ((gc = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, $E)));
}
function ms(t) {
  function e(i) {
    return Di(i, t);
  }
  if (0 < Co.length) {
    Di(Co[0], t);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    En !== null && Di(En, t),
      Sn !== null && Di(Sn, t),
      Cn !== null && Di(Cn, t),
      ds.forEach(e),
      ps.forEach(e),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    vy(n), n.blockedOn === null && dn.shift();
}
var br = an.ReactCurrentBatchConfig,
  vl = !0;
function AE(t, e, n, r) {
  var i = J,
    s = br.transition;
  br.transition = null;
  try {
    (J = 1), Hh(t, e, n, r);
  } finally {
    (J = i), (br.transition = s);
  }
}
function DE(t, e, n, r) {
  var i = J,
    s = br.transition;
  br.transition = null;
  try {
    (J = 4), Hh(t, e, n, r);
  } finally {
    (J = i), (br.transition = s);
  }
}
function Hh(t, e, n, r) {
  if (vl) {
    var i = yc(t, e, n, r);
    if (i === null) yu(t, e, r, wl, n), Yd(t, r);
    else if (IE(i, t, e, n, r)) r.stopPropagation();
    else if ((Yd(t, r), e & 4 && -1 < _E.indexOf(t))) {
      for (; i !== null; ) {
        var s = Qs(i);
        if (
          (s !== null && py(s),
          (s = yc(t, e, n, r)),
          s === null && yu(t, e, r, wl, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else yu(t, e, r, null, n);
  }
}
var wl = null;
function yc(t, e, n, r) {
  if (((wl = null), (t = bh(r)), (t = Yn(t)), t !== null))
    if (((e = gr(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = oy(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (wl = t), null;
}
function wy(t) {
  switch (t) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vE()) {
        case Bh:
          return 1;
        case cy:
          return 4;
        case gl:
        case wE:
          return 16;
        case hy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  qh = null,
  Qo = null;
function xy() {
  if (Qo) return Qo;
  var t,
    e = qh,
    n = e.length,
    r,
    i = "value" in gn ? gn.value : gn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Qo = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Go(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function To() {
  return !0;
}
function Jd() {
  return !1;
}
function ht(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? To
        : Jd),
      (this.isPropagationStopped = Jd),
      this
    );
  }
  return (
    ce(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = To));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = To));
      },
      persist: function () {},
      isPersistent: To,
    }),
    e
  );
}
var mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wh = ht(mi),
  Ks = ce({}, mi, { view: 0, detail: 0 }),
  RE = ht(Ks),
  au,
  uu,
  Ri,
  sa = ce({}, Ks, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Kh,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Ri &&
            (Ri && t.type === "mousemove"
              ? ((au = t.screenX - Ri.screenX), (uu = t.screenY - Ri.screenY))
              : (uu = au = 0),
            (Ri = t)),
          au);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : uu;
    },
  }),
  Zd = ht(sa),
  PE = ce({}, sa, { dataTransfer: 0 }),
  OE = ht(PE),
  LE = ce({}, Ks, { relatedTarget: 0 }),
  cu = ht(LE),
  jE = ce({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ME = ht(jE),
  FE = ce({}, mi, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  UE = ht(FE),
  bE = ce({}, mi, { data: 0 }),
  ep = ht(bE),
  BE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  VE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function HE(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = zE[t]) ? !!e[t] : !1;
}
function Kh() {
  return HE;
}
var qE = ce({}, Ks, {
    key: function (t) {
      if (t.key) {
        var e = BE[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Go(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? VE[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Kh,
    charCode: function (t) {
      return t.type === "keypress" ? Go(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Go(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  WE = ht(qE),
  KE = ce({}, sa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tp = ht(KE),
  QE = ce({}, Ks, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kh,
  }),
  GE = ht(QE),
  YE = ce({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  XE = ht(YE),
  JE = ce({}, sa, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ZE = ht(JE),
  eS = [9, 13, 27, 32],
  Qh = Zt && "CompositionEvent" in window,
  Yi = null;
Zt && "documentMode" in document && (Yi = document.documentMode);
var tS = Zt && "TextEvent" in window && !Yi,
  Ey = Zt && (!Qh || (Yi && 8 < Yi && 11 >= Yi)),
  np = String.fromCharCode(32),
  rp = !1;
function Sy(t, e) {
  switch (t) {
    case "keyup":
      return eS.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Cy(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Nr = !1;
function nS(t, e) {
  switch (t) {
    case "compositionend":
      return Cy(e);
    case "keypress":
      return e.which !== 32 ? null : ((rp = !0), np);
    case "textInput":
      return (t = e.data), t === np && rp ? null : t;
    default:
      return null;
  }
}
function rS(t, e) {
  if (Nr)
    return t === "compositionend" || (!Qh && Sy(t, e))
      ? ((t = xy()), (Qo = qh = gn = null), (Nr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Ey && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var iS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ip(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!iS[t.type] : e === "textarea";
}
function Ty(t, e, n, r) {
  ty(r),
    (e = xl(e, "onChange")),
    0 < e.length &&
      ((n = new Wh("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Xi = null,
  gs = null;
function sS(t) {
  Ly(t, 0);
}
function oa(t) {
  var e = $r(t);
  if (Qg(e)) return t;
}
function oS(t, e) {
  if (t === "change") return e;
}
var ky = !1;
if (Zt) {
  var hu;
  if (Zt) {
    var fu = "oninput" in document;
    if (!fu) {
      var sp = document.createElement("div");
      sp.setAttribute("oninput", "return;"),
        (fu = typeof sp.oninput == "function");
    }
    hu = fu;
  } else hu = !1;
  ky = hu && (!document.documentMode || 9 < document.documentMode);
}
function op() {
  Xi && (Xi.detachEvent("onpropertychange", Ny), (gs = Xi = null));
}
function Ny(t) {
  if (t.propertyName === "value" && oa(gs)) {
    var e = [];
    Ty(e, gs, t, bh(t)), sy(sS, e);
  }
}
function lS(t, e, n) {
  t === "focusin"
    ? (op(), (Xi = e), (gs = n), Xi.attachEvent("onpropertychange", Ny))
    : t === "focusout" && op();
}
function aS(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return oa(gs);
}
function uS(t, e) {
  if (t === "click") return oa(e);
}
function cS(t, e) {
  if (t === "input" || t === "change") return oa(e);
}
function hS(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var At = typeof Object.is == "function" ? Object.is : hS;
function ys(t, e) {
  if (At(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Zu.call(e, i) || !At(t[i], e[i])) return !1;
  }
  return !0;
}
function lp(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function ap(t, e) {
  var n = lp(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lp(n);
  }
}
function _y(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? _y(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Iy() {
  for (var t = window, e = dl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = dl(t.document);
  }
  return e;
}
function Gh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function fS(t) {
  var e = Iy(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    _y(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gh(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = ap(n, s));
        var o = ap(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var dS = Zt && "documentMode" in document && 11 >= document.documentMode,
  _r = null,
  vc = null,
  Ji = null,
  wc = !1;
function up(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wc ||
    _r == null ||
    _r !== dl(r) ||
    ((r = _r),
    "selectionStart" in r && Gh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ji && ys(Ji, r)) ||
      ((Ji = r),
      (r = xl(vc, "onSelect")),
      0 < r.length &&
        ((e = new Wh("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = _r))));
}
function ko(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Ir = {
    animationend: ko("Animation", "AnimationEnd"),
    animationiteration: ko("Animation", "AnimationIteration"),
    animationstart: ko("Animation", "AnimationStart"),
    transitionend: ko("Transition", "TransitionEnd"),
  },
  du = {},
  $y = {};
Zt &&
  (($y = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ir.animationend.animation,
    delete Ir.animationiteration.animation,
    delete Ir.animationstart.animation),
  "TransitionEvent" in window || delete Ir.transitionend.transition);
function la(t) {
  if (du[t]) return du[t];
  if (!Ir[t]) return t;
  var e = Ir[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in $y) return (du[t] = e[n]);
  return t;
}
var Ay = la("animationend"),
  Dy = la("animationiteration"),
  Ry = la("animationstart"),
  Py = la("transitionend"),
  Oy = new Map(),
  cp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Un(t, e) {
  Oy.set(t, e), mr(e, [t]);
}
for (var pu = 0; pu < cp.length; pu++) {
  var mu = cp[pu],
    pS = mu.toLowerCase(),
    mS = mu[0].toUpperCase() + mu.slice(1);
  Un(pS, "on" + mS);
}
Un(Ay, "onAnimationEnd");
Un(Dy, "onAnimationIteration");
Un(Ry, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(Py, "onTransitionEnd");
Qr("onMouseEnter", ["mouseout", "mouseover"]);
Qr("onMouseLeave", ["mouseout", "mouseover"]);
Qr("onPointerEnter", ["pointerout", "pointerover"]);
Qr("onPointerLeave", ["pointerout", "pointerover"]);
mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function hp(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), pE(r, e, void 0, t), (t.currentTarget = null);
}
function Ly(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          hp(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          hp(i, l, u), (s = a);
        }
    }
  }
  if (ml) throw ((t = pc), (ml = !1), (pc = null), t);
}
function te(t, e) {
  var n = e[Tc];
  n === void 0 && (n = e[Tc] = new Set());
  var r = t + "__bubble";
  n.has(r) || (jy(e, t, 2, !1), n.add(r));
}
function gu(t, e, n) {
  var r = 0;
  e && (r |= 4), jy(n, t, r, e);
}
var No = "_reactListening" + Math.random().toString(36).slice(2);
function vs(t) {
  if (!t[No]) {
    (t[No] = !0),
      zg.forEach(function (n) {
        n !== "selectionchange" && (gS.has(n) || gu(n, !1, t), gu(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[No] || ((e[No] = !0), gu("selectionchange", !1, e));
  }
}
function jy(t, e, n, r) {
  switch (wy(e)) {
    case 1:
      var i = AE;
      break;
    case 4:
      i = DE;
      break;
    default:
      i = Hh;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !dc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function yu(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Yn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  sy(function () {
    var u = s,
      c = bh(n),
      h = [];
    e: {
      var f = Oy.get(t);
      if (f !== void 0) {
        var g = Wh,
          v = t;
        switch (t) {
          case "keypress":
            if (Go(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = WE;
            break;
          case "focusin":
            (v = "focus"), (g = cu);
            break;
          case "focusout":
            (v = "blur"), (g = cu);
            break;
          case "beforeblur":
          case "afterblur":
            g = cu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = OE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = GE;
            break;
          case Ay:
          case Dy:
          case Ry:
            g = ME;
            break;
          case Py:
            g = XE;
            break;
          case "scroll":
            g = RE;
            break;
          case "wheel":
            g = ZE;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = UE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = tp;
        }
        var w = (e & 4) !== 0,
          T = !w && t === "scroll",
          m = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var d = u, y; d !== null; ) {
          y = d;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = fs(d, m)), S != null && w.push(ws(d, S, y)))),
            T)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((f = new g(f, v, null, n, c)), h.push({ event: f, listeners: w }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === "mouseover" || t === "pointerover"),
          (g = t === "mouseout" || t === "pointerout"),
          f &&
            n !== hc &&
            (v = n.relatedTarget || n.fromElement) &&
            (Yn(v) || v[en]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = u),
              (v = v ? Yn(v) : null),
              v !== null &&
                ((T = gr(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = u)),
          g !== v)
        ) {
          if (
            ((w = Zd),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((w = tp),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (T = g == null ? f : $r(g)),
            (y = v == null ? f : $r(v)),
            (f = new w(S, d + "leave", g, n, c)),
            (f.target = T),
            (f.relatedTarget = y),
            (S = null),
            Yn(c) === u &&
              ((w = new w(m, d + "enter", v, n, c)),
              (w.target = y),
              (w.relatedTarget = T),
              (S = w)),
            (T = S),
            g && v)
          )
            t: {
              for (w = g, m = v, d = 0, y = w; y; y = xr(y)) d++;
              for (y = 0, S = m; S; S = xr(S)) y++;
              for (; 0 < d - y; ) (w = xr(w)), d--;
              for (; 0 < y - d; ) (m = xr(m)), y--;
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = xr(w)), (m = xr(m));
              }
              w = null;
            }
          else w = null;
          g !== null && fp(h, f, g, w, !1),
            v !== null && T !== null && fp(h, T, v, w, !0);
        }
      }
      e: {
        if (
          ((f = u ? $r(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var I = oS;
        else if (ip(f))
          if (ky) I = cS;
          else {
            I = aS;
            var P = lS;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (I = uS);
        if (I && (I = I(t, u))) {
          Ty(h, I, n, c);
          break e;
        }
        P && P(t, f, u),
          t === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            oc(f, "number", f.value);
      }
      switch (((P = u ? $r(u) : window), t)) {
        case "focusin":
          (ip(P) || P.contentEditable === "true") &&
            ((_r = P), (vc = u), (Ji = null));
          break;
        case "focusout":
          Ji = vc = _r = null;
          break;
        case "mousedown":
          wc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wc = !1), up(h, n, c);
          break;
        case "selectionchange":
          if (dS) break;
        case "keydown":
        case "keyup":
          up(h, n, c);
      }
      var O;
      if (Qh)
        e: {
          switch (t) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Nr
          ? Sy(t, n) && (j = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Ey &&
          n.locale !== "ko" &&
          (Nr || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Nr && (O = xy())
            : ((gn = c),
              (qh = "value" in gn ? gn.value : gn.textContent),
              (Nr = !0))),
        (P = xl(u, j)),
        0 < P.length &&
          ((j = new ep(j, t, null, n, c)),
          h.push({ event: j, listeners: P }),
          O ? (j.data = O) : ((O = Cy(n)), O !== null && (j.data = O)))),
        (O = tS ? nS(t, n) : rS(t, n)) &&
          ((u = xl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ep("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = O)));
    }
    Ly(h, e);
  });
}
function ws(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function xl(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = fs(t, n)),
      s != null && r.unshift(ws(t, s, i)),
      (s = fs(t, e)),
      s != null && r.push(ws(t, s, i))),
      (t = t.return);
  }
  return r;
}
function xr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function fp(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = fs(n, s)), a != null && o.unshift(ws(n, a, l)))
        : i || ((a = fs(n, s)), a != null && o.push(ws(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var yS = /\r\n?/g,
  vS = /\u0000|\uFFFD/g;
function dp(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      yS,
      `
`
    )
    .replace(vS, "");
}
function _o(t, e, n) {
  if (((e = dp(e)), dp(t) !== e && n)) throw Error(k(425));
}
function El() {}
var xc = null,
  Ec = null;
function Sc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Cc = typeof setTimeout == "function" ? setTimeout : void 0,
  wS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pp = typeof Promise == "function" ? Promise : void 0,
  xS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pp < "u"
      ? function (t) {
          return pp.resolve(null).then(t).catch(ES);
        }
      : Cc;
function ES(t) {
  setTimeout(function () {
    throw t;
  });
}
function vu(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), ms(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ms(e);
}
function Tn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function mp(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var gi = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + gi,
  xs = "__reactProps$" + gi,
  en = "__reactContainer$" + gi,
  Tc = "__reactEvents$" + gi,
  SS = "__reactListeners$" + gi,
  CS = "__reactHandles$" + gi;
function Yn(t) {
  var e = t[Lt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[en] || n[Lt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = mp(t); t !== null; ) {
          if ((n = t[Lt])) return n;
          t = mp(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Qs(t) {
  return (
    (t = t[Lt] || t[en]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function $r(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(k(33));
}
function aa(t) {
  return t[xs] || null;
}
var kc = [],
  Ar = -1;
function bn(t) {
  return { current: t };
}
function ie(t) {
  0 > Ar || ((t.current = kc[Ar]), (kc[Ar] = null), Ar--);
}
function ee(t, e) {
  Ar++, (kc[Ar] = t.current), (t.current = e);
}
var Ln = {},
  Ke = bn(Ln),
  nt = bn(!1),
  sr = Ln;
function Gr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Ln;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function rt(t) {
  return (t = t.childContextTypes), t != null;
}
function Sl() {
  ie(nt), ie(Ke);
}
function gp(t, e, n) {
  if (Ke.current !== Ln) throw Error(k(168));
  ee(Ke, e), ee(nt, n);
}
function My(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(k(108, lE(t) || "Unknown", i));
  return ce({}, n, r);
}
function Cl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ln),
    (sr = Ke.current),
    ee(Ke, t),
    ee(nt, nt.current),
    !0
  );
}
function yp(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((t = My(t, e, sr)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      ie(nt),
      ie(Ke),
      ee(Ke, t))
    : ie(nt),
    ee(nt, n);
}
var Wt = null,
  ua = !1,
  wu = !1;
function Fy(t) {
  Wt === null ? (Wt = [t]) : Wt.push(t);
}
function TS(t) {
  (ua = !0), Fy(t);
}
function Bn() {
  if (!wu && Wt !== null) {
    wu = !0;
    var t = 0,
      e = J;
    try {
      var n = Wt;
      for (J = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Wt = null), (ua = !1);
    } catch (i) {
      throw (Wt !== null && (Wt = Wt.slice(t + 1)), uy(Bh, Bn), i);
    } finally {
      (J = e), (wu = !1);
    }
  }
  return null;
}
var Dr = [],
  Rr = 0,
  Tl = null,
  kl = 0,
  ft = [],
  dt = 0,
  or = null,
  Kt = 1,
  Qt = "";
function Kn(t, e) {
  (Dr[Rr++] = kl), (Dr[Rr++] = Tl), (Tl = t), (kl = e);
}
function Uy(t, e, n) {
  (ft[dt++] = Kt), (ft[dt++] = Qt), (ft[dt++] = or), (or = t);
  var r = Kt;
  t = Qt;
  var i = 32 - It(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - It(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Kt = (1 << (32 - It(e) + i)) | (n << i) | r),
      (Qt = s + t);
  } else (Kt = (1 << s) | (n << i) | r), (Qt = t);
}
function Yh(t) {
  t.return !== null && (Kn(t, 1), Uy(t, 1, 0));
}
function Xh(t) {
  for (; t === Tl; )
    (Tl = Dr[--Rr]), (Dr[Rr] = null), (kl = Dr[--Rr]), (Dr[Rr] = null);
  for (; t === or; )
    (or = ft[--dt]),
      (ft[dt] = null),
      (Qt = ft[--dt]),
      (ft[dt] = null),
      (Kt = ft[--dt]),
      (ft[dt] = null);
}
var lt = null,
  ot = null,
  le = !1,
  Nt = null;
function by(t, e) {
  var n = gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function vp(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (lt = t), (ot = Tn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (lt = t), (ot = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = or !== null ? { id: Kt, overflow: Qt } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = gt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (lt = t),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function _c(t) {
  if (le) {
    var e = ot;
    if (e) {
      var n = e;
      if (!vp(t, e)) {
        if (Nc(t)) throw Error(k(418));
        e = Tn(n.nextSibling);
        var r = lt;
        e && vp(t, e)
          ? by(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (le = !1), (lt = t));
      }
    } else {
      if (Nc(t)) throw Error(k(418));
      (t.flags = (t.flags & -4097) | 2), (le = !1), (lt = t);
    }
  }
}
function wp(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  lt = t;
}
function Io(t) {
  if (t !== lt) return !1;
  if (!le) return wp(t), (le = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Sc(t.type, t.memoizedProps))),
    e && (e = ot))
  ) {
    if (Nc(t)) throw (By(), Error(k(418)));
    for (; e; ) by(t, e), (e = Tn(e.nextSibling));
  }
  if ((wp(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(k(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              ot = Tn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      ot = null;
    }
  } else ot = lt ? Tn(t.stateNode.nextSibling) : null;
  return !0;
}
function By() {
  for (var t = ot; t; ) t = Tn(t.nextSibling);
}
function Yr() {
  (ot = lt = null), (le = !1);
}
function Jh(t) {
  Nt === null ? (Nt = [t]) : Nt.push(t);
}
var kS = an.ReactCurrentBatchConfig;
function Tt(t, e) {
  if (t && t.defaultProps) {
    (e = ce({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Nl = bn(null),
  _l = null,
  Pr = null,
  Zh = null;
function ef() {
  Zh = Pr = _l = null;
}
function tf(t) {
  var e = Nl.current;
  ie(Nl), (t._currentValue = e);
}
function Ic(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Br(t, e) {
  (_l = t),
    (Zh = Pr = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (tt = !0), (t.firstContext = null));
}
function xt(t) {
  var e = t._currentValue;
  if (Zh !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Pr === null)) {
      if (_l === null) throw Error(k(308));
      (Pr = t), (_l.dependencies = { lanes: 0, firstContext: t });
    } else Pr = Pr.next = t;
  return e;
}
var Xn = null;
function nf(t) {
  Xn === null ? (Xn = [t]) : Xn.push(t);
}
function Vy(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), nf(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    tn(t, r)
  );
}
function tn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function rf(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zy(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Yt(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      tn(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), nf(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    tn(t, n)
  );
}
function Yo(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Vh(t, n);
  }
}
function xp(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Il(t, e, n, r) {
  var i = t.updateQueue;
  fn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var h = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = t,
            w = l;
          switch (((f = e), (g = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                h = v.call(g, h, f);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (f = typeof v == "function" ? v.call(g, h, f) : v),
                f == null)
              )
                break e;
              h = ce({}, h, f);
              break e;
            case 2:
              fn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = h)) : (c = c.next = g),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (ar |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function Ep(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Hy = new Vg.Component().refs;
function $c(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ce({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var ca = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? gr(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Xe(),
      i = _n(t),
      s = Yt(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = kn(t, s, i)),
      e !== null && ($t(e, t, i, r), Yo(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Xe(),
      i = _n(t),
      s = Yt(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = kn(t, s, i)),
      e !== null && ($t(e, t, i, r), Yo(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Xe(),
      r = _n(t),
      i = Yt(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = kn(t, i, r)),
      e !== null && ($t(e, t, r, n), Yo(e, t, r));
  },
};
function Sp(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !ys(n, r) || !ys(i, s)
      : !0
  );
}
function qy(t, e, n) {
  var r = !1,
    i = Ln,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = xt(s))
      : ((i = rt(e) ? sr : Ke.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? Gr(t, i) : Ln)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = ca),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Cp(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && ca.enqueueReplaceState(e, e.state, null);
}
function Ac(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = Hy), rf(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = xt(s))
    : ((s = rt(e) ? sr : Ke.current), (i.context = Gr(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && ($c(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && ca.enqueueReplaceState(i, i.state, null),
      Il(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Pi(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = i.refs;
            l === Hy && (l = i.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, t));
  }
  return t;
}
function $o(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      k(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function Tp(t) {
  var e = t._init;
  return e(t._payload);
}
function Wy(t) {
  function e(m, d) {
    if (t) {
      var y = m.deletions;
      y === null ? ((m.deletions = [d]), (m.flags |= 16)) : y.push(d);
    }
  }
  function n(m, d) {
    if (!t) return null;
    for (; d !== null; ) e(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function i(m, d) {
    return (m = In(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, d, y) {
    return (
      (m.index = y),
      t
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < d ? ((m.flags |= 2), d) : y)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function o(m) {
    return t && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, d, y, S) {
    return d === null || d.tag !== 6
      ? ((d = Nu(y, m.mode, S)), (d.return = m), d)
      : ((d = i(d, y)), (d.return = m), d);
  }
  function a(m, d, y, S) {
    var I = y.type;
    return I === kr
      ? c(m, d, y.props.children, S, y.key)
      : d !== null &&
        (d.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === hn &&
            Tp(I) === d.type))
      ? ((S = i(d, y.props)), (S.ref = Pi(m, d, y)), (S.return = m), S)
      : ((S = nl(y.type, y.key, y.props, null, m.mode, S)),
        (S.ref = Pi(m, d, y)),
        (S.return = m),
        S);
  }
  function u(m, d, y, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = _u(y, m.mode, S)), (d.return = m), d)
      : ((d = i(d, y.children || [])), (d.return = m), d);
  }
  function c(m, d, y, S, I) {
    return d === null || d.tag !== 7
      ? ((d = rr(y, m.mode, S, I)), (d.return = m), d)
      : ((d = i(d, y)), (d.return = m), d);
  }
  function h(m, d, y) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Nu("" + d, m.mode, y)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vo:
          return (
            (y = nl(d.type, d.key, d.props, null, m.mode, y)),
            (y.ref = Pi(m, null, d)),
            (y.return = m),
            y
          );
        case Tr:
          return (d = _u(d, m.mode, y)), (d.return = m), d;
        case hn:
          var S = d._init;
          return h(m, S(d._payload), y);
      }
      if (bi(d) || Ii(d))
        return (d = rr(d, m.mode, y, null)), (d.return = m), d;
      $o(m, d);
    }
    return null;
  }
  function f(m, d, y, S) {
    var I = d !== null ? d.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return I !== null ? null : l(m, d, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case vo:
          return y.key === I ? a(m, d, y, S) : null;
        case Tr:
          return y.key === I ? u(m, d, y, S) : null;
        case hn:
          return (I = y._init), f(m, d, I(y._payload), S);
      }
      if (bi(y) || Ii(y)) return I !== null ? null : c(m, d, y, S, null);
      $o(m, y);
    }
    return null;
  }
  function g(m, d, y, S, I) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(y) || null), l(d, m, "" + S, I);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vo:
          return (m = m.get(S.key === null ? y : S.key) || null), a(d, m, S, I);
        case Tr:
          return (m = m.get(S.key === null ? y : S.key) || null), u(d, m, S, I);
        case hn:
          var P = S._init;
          return g(m, d, y, P(S._payload), I);
      }
      if (bi(S) || Ii(S)) return (m = m.get(y) || null), c(d, m, S, I, null);
      $o(d, S);
    }
    return null;
  }
  function v(m, d, y, S) {
    for (
      var I = null, P = null, O = d, j = (d = 0), oe = null;
      O !== null && j < y.length;
      j++
    ) {
      O.index > j ? ((oe = O), (O = null)) : (oe = O.sibling);
      var W = f(m, O, y[j], S);
      if (W === null) {
        O === null && (O = oe);
        break;
      }
      t && O && W.alternate === null && e(m, O),
        (d = s(W, d, j)),
        P === null ? (I = W) : (P.sibling = W),
        (P = W),
        (O = oe);
    }
    if (j === y.length) return n(m, O), le && Kn(m, j), I;
    if (O === null) {
      for (; j < y.length; j++)
        (O = h(m, y[j], S)),
          O !== null &&
            ((d = s(O, d, j)), P === null ? (I = O) : (P.sibling = O), (P = O));
      return le && Kn(m, j), I;
    }
    for (O = r(m, O); j < y.length; j++)
      (oe = g(O, m, j, y[j], S)),
        oe !== null &&
          (t && oe.alternate !== null && O.delete(oe.key === null ? j : oe.key),
          (d = s(oe, d, j)),
          P === null ? (I = oe) : (P.sibling = oe),
          (P = oe));
    return (
      t &&
        O.forEach(function (St) {
          return e(m, St);
        }),
      le && Kn(m, j),
      I
    );
  }
  function w(m, d, y, S) {
    var I = Ii(y);
    if (typeof I != "function") throw Error(k(150));
    if (((y = I.call(y)), y == null)) throw Error(k(151));
    for (
      var P = (I = null), O = d, j = (d = 0), oe = null, W = y.next();
      O !== null && !W.done;
      j++, W = y.next()
    ) {
      O.index > j ? ((oe = O), (O = null)) : (oe = O.sibling);
      var St = f(m, O, W.value, S);
      if (St === null) {
        O === null && (O = oe);
        break;
      }
      t && O && St.alternate === null && e(m, O),
        (d = s(St, d, j)),
        P === null ? (I = St) : (P.sibling = St),
        (P = St),
        (O = oe);
    }
    if (W.done) return n(m, O), le && Kn(m, j), I;
    if (O === null) {
      for (; !W.done; j++, W = y.next())
        (W = h(m, W.value, S)),
          W !== null &&
            ((d = s(W, d, j)), P === null ? (I = W) : (P.sibling = W), (P = W));
      return le && Kn(m, j), I;
    }
    for (O = r(m, O); !W.done; j++, W = y.next())
      (W = g(O, m, j, W.value, S)),
        W !== null &&
          (t && W.alternate !== null && O.delete(W.key === null ? j : W.key),
          (d = s(W, d, j)),
          P === null ? (I = W) : (P.sibling = W),
          (P = W));
    return (
      t &&
        O.forEach(function (Ni) {
          return e(m, Ni);
        }),
      le && Kn(m, j),
      I
    );
  }
  function T(m, d, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === kr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case vo:
          e: {
            for (var I = y.key, P = d; P !== null; ) {
              if (P.key === I) {
                if (((I = y.type), I === kr)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (d = i(P, y.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  P.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === hn &&
                    Tp(I) === P.type)
                ) {
                  n(m, P.sibling),
                    (d = i(P, y.props)),
                    (d.ref = Pi(m, P, y)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, P);
                break;
              } else e(m, P);
              P = P.sibling;
            }
            y.type === kr
              ? ((d = rr(y.props.children, m.mode, S, y.key)),
                (d.return = m),
                (m = d))
              : ((S = nl(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = Pi(m, d, y)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case Tr:
          e: {
            for (P = y.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  n(m, d.sibling),
                    (d = i(d, y.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else e(m, d);
              d = d.sibling;
            }
            (d = _u(y, m.mode, S)), (d.return = m), (m = d);
          }
          return o(m);
        case hn:
          return (P = y._init), T(m, d, P(y._payload), S);
      }
      if (bi(y)) return v(m, d, y, S);
      if (Ii(y)) return w(m, d, y, S);
      $o(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, y)), (d.return = m), (m = d))
          : (n(m, d), (d = Nu(y, m.mode, S)), (d.return = m), (m = d)),
        o(m))
      : n(m, d);
  }
  return T;
}
var Xr = Wy(!0),
  Ky = Wy(!1),
  Gs = {},
  Bt = bn(Gs),
  Es = bn(Gs),
  Ss = bn(Gs);
function Jn(t) {
  if (t === Gs) throw Error(k(174));
  return t;
}
function sf(t, e) {
  switch ((ee(Ss, e), ee(Es, t), ee(Bt, Gs), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : ac(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = ac(e, t));
  }
  ie(Bt), ee(Bt, e);
}
function Jr() {
  ie(Bt), ie(Es), ie(Ss);
}
function Qy(t) {
  Jn(Ss.current);
  var e = Jn(Bt.current),
    n = ac(e, t.type);
  e !== n && (ee(Es, t), ee(Bt, n));
}
function of(t) {
  Es.current === t && (ie(Bt), ie(Es));
}
var ae = bn(0);
function $l(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var xu = [];
function lf() {
  for (var t = 0; t < xu.length; t++)
    xu[t]._workInProgressVersionPrimary = null;
  xu.length = 0;
}
var Xo = an.ReactCurrentDispatcher,
  Eu = an.ReactCurrentBatchConfig,
  lr = 0,
  ue = null,
  Ee = null,
  _e = null,
  Al = !1,
  Zi = !1,
  Cs = 0,
  NS = 0;
function Me() {
  throw Error(k(321));
}
function af(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!At(t[n], e[n])) return !1;
  return !0;
}
function uf(t, e, n, r, i, s) {
  if (
    ((lr = s),
    (ue = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Xo.current = t === null || t.memoizedState === null ? AS : DS),
    (t = n(r, i)),
    Zi)
  ) {
    s = 0;
    do {
      if (((Zi = !1), (Cs = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (_e = Ee = null),
        (e.updateQueue = null),
        (Xo.current = RS),
        (t = n(r, i));
    } while (Zi);
  }
  if (
    ((Xo.current = Dl),
    (e = Ee !== null && Ee.next !== null),
    (lr = 0),
    (_e = Ee = ue = null),
    (Al = !1),
    e)
  )
    throw Error(k(300));
  return t;
}
function cf() {
  var t = Cs !== 0;
  return (Cs = 0), t;
}
function Ot() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return _e === null ? (ue.memoizedState = _e = t) : (_e = _e.next = t), _e;
}
function Et() {
  if (Ee === null) {
    var t = ue.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Ee.next;
  var e = _e === null ? ue.memoizedState : _e.next;
  if (e !== null) (_e = e), (Ee = t);
  else {
    if (t === null) throw Error(k(310));
    (Ee = t),
      (t = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      _e === null ? (ue.memoizedState = _e = t) : (_e = _e.next = t);
  }
  return _e;
}
function Ts(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Su(t) {
  var e = Et(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var r = Ee,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((lr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = r)) : (a = a.next = h),
          (ue.lanes |= c),
          (ar |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      At(r, e.memoizedState) || (tt = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (ue.lanes |= s), (ar |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function Cu(t) {
  var e = Et(),
    n = e.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    At(s, e.memoizedState) || (tt = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Gy() {}
function Yy(t, e) {
  var n = ue,
    r = Et(),
    i = e(),
    s = !At(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (tt = !0)),
    (r = r.queue),
    hf(Zy.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ks(9, Jy.bind(null, n, r, i, e), void 0, null),
      Ie === null)
    )
      throw Error(k(349));
    lr & 30 || Xy(n, e, i);
  }
  return i;
}
function Xy(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ue.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ue.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Jy(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), ev(e) && tv(t);
}
function Zy(t, e, n) {
  return n(function () {
    ev(e) && tv(t);
  });
}
function ev(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !At(t, n);
  } catch {
    return !0;
  }
}
function tv(t) {
  var e = tn(t, 1);
  e !== null && $t(e, t, 1, -1);
}
function kp(t) {
  var e = Ot();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ts,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = $S.bind(null, ue, t)),
    [e.memoizedState, t]
  );
}
function ks(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = ue.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ue.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function nv() {
  return Et().memoizedState;
}
function Jo(t, e, n, r) {
  var i = Ot();
  (ue.flags |= t),
    (i.memoizedState = ks(1 | e, n, void 0, r === void 0 ? null : r));
}
function ha(t, e, n, r) {
  var i = Et();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ee !== null) {
    var o = Ee.memoizedState;
    if (((s = o.destroy), r !== null && af(r, o.deps))) {
      i.memoizedState = ks(e, n, s, r);
      return;
    }
  }
  (ue.flags |= t), (i.memoizedState = ks(1 | e, n, s, r));
}
function Np(t, e) {
  return Jo(8390656, 8, t, e);
}
function hf(t, e) {
  return ha(2048, 8, t, e);
}
function rv(t, e) {
  return ha(4, 2, t, e);
}
function iv(t, e) {
  return ha(4, 4, t, e);
}
function sv(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function ov(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), ha(4, 4, sv.bind(null, e, t), n)
  );
}
function ff() {}
function lv(t, e) {
  var n = Et();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && af(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function av(t, e) {
  var n = Et();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && af(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function uv(t, e, n) {
  return lr & 21
    ? (At(n, e) || ((n = fy()), (ue.lanes |= n), (ar |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (tt = !0)), (t.memoizedState = n));
}
function _S(t, e) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Eu.transition;
  Eu.transition = {};
  try {
    t(!1), e();
  } finally {
    (J = n), (Eu.transition = r);
  }
}
function cv() {
  return Et().memoizedState;
}
function IS(t, e, n) {
  var r = _n(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hv(t))
  )
    fv(e, n);
  else if (((n = Vy(t, e, n, r)), n !== null)) {
    var i = Xe();
    $t(n, t, r, i), dv(n, e, r);
  }
}
function $S(t, e, n) {
  var r = _n(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hv(t)) fv(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), At(l, o))) {
          var a = e.interleaved;
          a === null
            ? ((i.next = i), nf(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vy(t, e, i, r)),
      n !== null && ((i = Xe()), $t(n, t, r, i), dv(n, e, r));
  }
}
function hv(t) {
  var e = t.alternate;
  return t === ue || (e !== null && e === ue);
}
function fv(t, e) {
  Zi = Al = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function dv(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Vh(t, n);
  }
}
var Dl = {
    readContext: xt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  AS = {
    readContext: xt,
    useCallback: function (t, e) {
      return (Ot().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: xt,
    useEffect: Np,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Jo(4194308, 4, sv.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Jo(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Jo(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Ot();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = Ot();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = IS.bind(null, ue, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Ot();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: kp,
    useDebugValue: ff,
    useDeferredValue: function (t) {
      return (Ot().memoizedState = t);
    },
    useTransition: function () {
      var t = kp(!1),
        e = t[0];
      return (t = _S.bind(null, t[1])), (Ot().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = ue,
        i = Ot();
      if (le) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = e()), Ie === null)) throw Error(k(349));
        lr & 30 || Xy(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        Np(Zy.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        ks(9, Jy.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Ot(),
        e = Ie.identifierPrefix;
      if (le) {
        var n = Qt,
          r = Kt;
        (n = (r & ~(1 << (32 - It(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Cs++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = NS++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  DS = {
    readContext: xt,
    useCallback: lv,
    useContext: xt,
    useEffect: hf,
    useImperativeHandle: ov,
    useInsertionEffect: rv,
    useLayoutEffect: iv,
    useMemo: av,
    useReducer: Su,
    useRef: nv,
    useState: function () {
      return Su(Ts);
    },
    useDebugValue: ff,
    useDeferredValue: function (t) {
      var e = Et();
      return uv(e, Ee.memoizedState, t);
    },
    useTransition: function () {
      var t = Su(Ts)[0],
        e = Et().memoizedState;
      return [t, e];
    },
    useMutableSource: Gy,
    useSyncExternalStore: Yy,
    useId: cv,
    unstable_isNewReconciler: !1,
  },
  RS = {
    readContext: xt,
    useCallback: lv,
    useContext: xt,
    useEffect: hf,
    useImperativeHandle: ov,
    useInsertionEffect: rv,
    useLayoutEffect: iv,
    useMemo: av,
    useReducer: Cu,
    useRef: nv,
    useState: function () {
      return Cu(Ts);
    },
    useDebugValue: ff,
    useDeferredValue: function (t) {
      var e = Et();
      return Ee === null ? (e.memoizedState = t) : uv(e, Ee.memoizedState, t);
    },
    useTransition: function () {
      var t = Cu(Ts)[0],
        e = Et().memoizedState;
      return [t, e];
    },
    useMutableSource: Gy,
    useSyncExternalStore: Yy,
    useId: cv,
    unstable_isNewReconciler: !1,
  };
function Zr(t, e) {
  try {
    var n = "",
      r = e;
    do (n += oE(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Tu(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Dc(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var PS = typeof WeakMap == "function" ? WeakMap : Map;
function pv(t, e, n) {
  (n = Yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Pl || ((Pl = !0), (Bc = r)), Dc(t, e);
    }),
    n
  );
}
function mv(t, e, n) {
  (n = Yt(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Dc(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Dc(t, e),
          typeof r != "function" &&
            (Nn === null ? (Nn = new Set([this])) : Nn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function _p(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new PS();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = KS.bind(null, t, e, n)), e.then(t, t));
}
function Ip(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function $p(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Yt(-1, 1)), (e.tag = 2), kn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var OS = an.ReactCurrentOwner,
  tt = !1;
function Ge(t, e, n, r) {
  e.child = t === null ? Ky(e, null, n, r) : Xr(e, t.child, n, r);
}
function Ap(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Br(e, i),
    (r = uf(t, e, n, r, s, i)),
    (n = cf()),
    t !== null && !tt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        nn(t, e, i))
      : (le && n && Yh(e), (e.flags |= 1), Ge(t, e, r, i), e.child)
  );
}
function Dp(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !xf(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), gv(t, e, s, r, i))
      : ((t = nl(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ys), n(o, r) && t.ref === e.ref)
    )
      return nn(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = In(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function gv(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (ys(s, r) && t.ref === e.ref)
      if (((tt = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (tt = !0);
      else return (e.lanes = t.lanes), nn(t, e, i);
  }
  return Rc(t, e, n, r, i);
}
function yv(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Lr, st),
        (st |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ee(Lr, st),
          (st |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ee(Lr, st),
        (st |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      ee(Lr, st),
      (st |= r);
  return Ge(t, e, i, n), e.child;
}
function vv(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Rc(t, e, n, r, i) {
  var s = rt(n) ? sr : Ke.current;
  return (
    (s = Gr(e, s)),
    Br(e, i),
    (n = uf(t, e, n, r, s, i)),
    (r = cf()),
    t !== null && !tt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        nn(t, e, i))
      : (le && r && Yh(e), (e.flags |= 1), Ge(t, e, n, i), e.child)
  );
}
function Rp(t, e, n, r, i) {
  if (rt(n)) {
    var s = !0;
    Cl(e);
  } else s = !1;
  if ((Br(e, i), e.stateNode === null))
    Zo(t, e), qy(e, n, r), Ac(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = rt(n) ? sr : Ke.current), (u = Gr(e, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Cp(e, o, r, u)),
      (fn = !1);
    var f = e.memoizedState;
    (o.state = f),
      Il(e, r, o, i),
      (a = e.memoizedState),
      l !== r || f !== a || nt.current || fn
        ? (typeof c == "function" && ($c(e, n, c, r), (a = e.memoizedState)),
          (l = fn || Sp(e, n, l, r, f, a, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      zy(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : Tt(e.type, l)),
      (o.props = u),
      (h = e.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = xt(a))
        : ((a = rt(n) ? sr : Ke.current), (a = Gr(e, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || f !== a) && Cp(e, o, r, a)),
      (fn = !1),
      (f = e.memoizedState),
      (o.state = f),
      Il(e, r, o, i);
    var v = e.memoizedState;
    l !== h || f !== v || nt.current || fn
      ? (typeof g == "function" && ($c(e, n, g, r), (v = e.memoizedState)),
        (u = fn || Sp(e, n, u, r, f, v, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, a)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return Pc(t, e, n, r, s, i);
}
function Pc(t, e, n, r, i, s) {
  vv(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && yp(e, n, !1), nn(t, e, s);
  (r = e.stateNode), (OS.current = e);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Xr(e, t.child, null, s)), (e.child = Xr(e, null, l, s)))
      : Ge(t, e, l, s),
    (e.memoizedState = r.state),
    i && yp(e, n, !0),
    e.child
  );
}
function wv(t) {
  var e = t.stateNode;
  e.pendingContext
    ? gp(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && gp(t, e.context, !1),
    sf(t, e.containerInfo);
}
function Pp(t, e, n, r, i) {
  return Yr(), Jh(i), (e.flags |= 256), Ge(t, e, n, r), e.child;
}
var Oc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lc(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function xv(t, e, n) {
  var r = e.pendingProps,
    i = ae.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    ee(ae, i & 1),
    t === null)
  )
    return (
      _c(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = pa(o, r, 0, null)),
              (t = rr(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Lc(n)),
              (e.memoizedState = Oc),
              t)
            : df(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return LS(t, e, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (e.deletions = null))
        : ((r = In(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = In(l, s)) : ((s = rr(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Lc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Oc),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = In(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function df(t, e) {
  return (
    (e = pa({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Ao(t, e, n, r) {
  return (
    r !== null && Jh(r),
    Xr(e, t.child, null, n),
    (t = df(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function LS(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Tu(Error(k(422)))), Ao(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = pa({ mode: "visible", children: r.children }, i, 0, null)),
        (s = rr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && Xr(e, t.child, null, o),
        (e.child.memoizedState = Lc(o)),
        (e.memoizedState = Oc),
        s);
  if (!(e.mode & 1)) return Ao(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(k(419))), (r = Tu(s, r, void 0)), Ao(t, e, o, r);
  }
  if (((l = (o & t.childLanes) !== 0), tt || l)) {
    if (((r = Ie), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), tn(t, i), $t(r, t, i, -1));
    }
    return wf(), (r = Tu(Error(k(421)))), Ao(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = QS.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (ot = Tn(i.nextSibling)),
      (lt = e),
      (le = !0),
      (Nt = null),
      t !== null &&
        ((ft[dt++] = Kt),
        (ft[dt++] = Qt),
        (ft[dt++] = or),
        (Kt = t.id),
        (Qt = t.overflow),
        (or = e)),
      (e = df(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Op(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Ic(t.return, e, n);
}
function ku(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Ev(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ge(t, e, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Op(t, n, e);
        else if (t.tag === 19) Op(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((ee(ae, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && $l(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ku(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && $l(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        ku(e, !0, n, null, s);
        break;
      case "together":
        ku(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Zo(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function nn(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (ar |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(k(153));
  if (e.child !== null) {
    for (
      t = e.child, n = In(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = In(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function jS(t, e, n) {
  switch (e.tag) {
    case 3:
      wv(e), Yr();
      break;
    case 5:
      Qy(e);
      break;
    case 1:
      rt(e.type) && Cl(e);
      break;
    case 4:
      sf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      ee(Nl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ae, ae.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? xv(t, e, n)
          : (ee(ae, ae.current & 1),
            (t = nn(t, e, n)),
            t !== null ? t.sibling : null);
      ee(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Ev(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), yv(t, e, n);
  }
  return nn(t, e, n);
}
var Sv, jc, Cv, Tv;
Sv = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jc = function () {};
Cv = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Jn(Bt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ic(t, i)), (r = ic(t, r)), (s = []);
        break;
      case "select":
        (i = ce({}, i, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = lc(t, i)), (r = lc(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = El);
    }
    uc(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (cs.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (cs.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && te("scroll", t),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Tv = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Oi(t, e) {
  if (!le)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function MS(t, e, n) {
  var r = e.pendingProps;
  switch ((Xh(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Fe(e), null;
    case 1:
      return rt(e.type) && Sl(), Fe(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Jr(),
        ie(nt),
        ie(Ke),
        lf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Io(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Nt !== null && (Hc(Nt), (Nt = null)))),
        jc(t, e),
        Fe(e),
        null
      );
    case 5:
      of(e);
      var i = Jn(Ss.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Cv(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(k(166));
          return Fe(e), null;
        }
        if (((t = Jn(Bt.current)), Io(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[Lt] = e), (r[xs] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vi.length; i++) te(Vi[i], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              zd(r, s), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              qd(r, s), te("invalid", r);
          }
          uc(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      _o(r.textContent, l, t),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      _o(r.textContent, l, t),
                    (i = ["children", "" + l]))
                : cs.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              wo(r), Hd(r, s, !0);
              break;
            case "textarea":
              wo(r), Wd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = El);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Xg(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[Lt] = e),
            (t[xs] = r),
            Sv(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = cc(n, r)), n)) {
              case "dialog":
                te("cancel", t), te("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vi.length; i++) te(Vi[i], t);
                i = r;
                break;
              case "source":
                te("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", t), te("load", t), (i = r);
                break;
              case "details":
                te("toggle", t), (i = r);
                break;
              case "input":
                zd(t, r), (i = ic(t, r)), te("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ce({}, r, { value: void 0 })),
                  te("invalid", t);
                break;
              case "textarea":
                qd(t, r), (i = lc(t, r)), te("invalid", t);
                break;
              default:
                i = r;
            }
            uc(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? ey(t, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Jg(t, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && hs(t, a)
                    : typeof a == "number" && hs(t, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (cs.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && te("scroll", t)
                      : a != null && jh(t, s, a, o));
              }
            switch (n) {
              case "input":
                wo(t), Hd(t, r, !1);
                break;
              case "textarea":
                wo(t), Wd(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Mr(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Mr(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = El);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Fe(e), null;
    case 6:
      if (t && e.stateNode != null) Tv(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(k(166));
        if (((n = Jn(Ss.current)), Jn(Bt.current), Io(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Lt] = e),
            (s = r.nodeValue !== n) && ((t = lt), t !== null))
          )
            switch (t.tag) {
              case 3:
                _o(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  _o(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = e),
            (e.stateNode = r);
      }
      return Fe(e), null;
    case 13:
      if (
        (ie(ae),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (le && ot !== null && e.mode & 1 && !(e.flags & 128))
          By(), Yr(), (e.flags |= 98560), (s = !1);
        else if (((s = Io(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[Lt] = e;
          } else
            Yr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Fe(e), (s = !1);
        } else Nt !== null && (Hc(Nt), (Nt = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || ae.current & 1 ? Se === 0 && (Se = 3) : wf())),
          e.updateQueue !== null && (e.flags |= 4),
          Fe(e),
          null);
    case 4:
      return (
        Jr(), jc(t, e), t === null && vs(e.stateNode.containerInfo), Fe(e), null
      );
    case 10:
      return tf(e.type._context), Fe(e), null;
    case 17:
      return rt(e.type) && Sl(), Fe(e), null;
    case 19:
      if ((ie(ae), (s = e.memoizedState), s === null)) return Fe(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Oi(s, !1);
        else {
          if (Se !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = $l(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Oi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ae, (ae.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            me() > ei &&
            ((e.flags |= 128), (r = !0), Oi(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = $l(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Oi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !le)
            )
              return Fe(e), null;
          } else
            2 * me() - s.renderingStartTime > ei &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Oi(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = me()),
          (e.sibling = null),
          (n = ae.current),
          ee(ae, r ? (n & 1) | 2 : n & 1),
          e)
        : (Fe(e), null);
    case 22:
    case 23:
      return (
        vf(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? st & 1073741824 && (Fe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Fe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function FS(t, e) {
  switch ((Xh(e), e.tag)) {
    case 1:
      return (
        rt(e.type) && Sl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Jr(),
        ie(nt),
        ie(Ke),
        lf(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return of(e), null;
    case 13:
      if (
        (ie(ae), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(k(340));
        Yr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ie(ae), null;
    case 4:
      return Jr(), null;
    case 10:
      return tf(e.type._context), null;
    case 22:
    case 23:
      return vf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Do = !1,
  Be = !1,
  US = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Or(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(t, e, r);
      }
    else n.current = null;
}
function Mc(t, e, n) {
  try {
    n();
  } catch (r) {
    fe(t, e, r);
  }
}
var Lp = !1;
function bS(t, e) {
  if (((xc = vl), (t = Iy()), Gh(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            h = t,
            f = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = o + i),
                h !== s || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (f = h), (h = g);
            for (;;) {
              if (h === t) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++c === r && (a = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ec = { focusedElem: t, selectionRange: n }, vl = !1, A = e; A !== null; )
    if (((e = A), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (A = t);
    else
      for (; A !== null; ) {
        e = A;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    T = v.memoizedState,
                    m = e.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? w : Tt(e.type, w),
                      T
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (S) {
          fe(e, e.return, S);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (A = t);
          break;
        }
        A = e.return;
      }
  return (v = Lp), (Lp = !1), v;
}
function es(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Mc(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function fa(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Fc(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function kv(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), kv(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Lt], delete e[xs], delete e[Tc], delete e[SS], delete e[CS])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Nv(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function jp(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Nv(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Uc(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = El));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Uc(t, e, n), t = t.sibling; t !== null; ) Uc(t, e, n), (t = t.sibling);
}
function bc(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (bc(t, e, n), t = t.sibling; t !== null; ) bc(t, e, n), (t = t.sibling);
}
var De = null,
  kt = !1;
function un(t, e, n) {
  for (n = n.child; n !== null; ) _v(t, e, n), (n = n.sibling);
}
function _v(t, e, n) {
  if (bt && typeof bt.onCommitFiberUnmount == "function")
    try {
      bt.onCommitFiberUnmount(ia, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || Or(n, e);
    case 6:
      var r = De,
        i = kt;
      (De = null),
        un(t, e, n),
        (De = r),
        (kt = i),
        De !== null &&
          (kt
            ? ((t = De),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null &&
        (kt
          ? ((t = De),
            (n = n.stateNode),
            t.nodeType === 8
              ? vu(t.parentNode, n)
              : t.nodeType === 1 && vu(t, n),
            ms(t))
          : vu(De, n.stateNode));
      break;
    case 4:
      (r = De),
        (i = kt),
        (De = n.stateNode.containerInfo),
        (kt = !0),
        un(t, e, n),
        (De = r),
        (kt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Mc(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      un(t, e, n);
      break;
    case 1:
      if (
        !Be &&
        (Or(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, e, l);
        }
      un(t, e, n);
      break;
    case 21:
      un(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), un(t, e, n), (Be = r))
        : un(t, e, n);
      break;
    default:
      un(t, e, n);
  }
}
function Mp(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new US()),
      e.forEach(function (r) {
        var i = GS.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ct(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (De = l.stateNode), (kt = !1);
              break e;
            case 3:
              (De = l.stateNode.containerInfo), (kt = !0);
              break e;
            case 4:
              (De = l.stateNode.containerInfo), (kt = !0);
              break e;
          }
          l = l.return;
        }
        if (De === null) throw Error(k(160));
        _v(s, o, i), (De = null), (kt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        fe(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Iv(e, t), (e = e.sibling);
}
function Iv(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(e, t), Pt(t), r & 4)) {
        try {
          es(3, t, t.return), fa(3, t);
        } catch (w) {
          fe(t, t.return, w);
        }
        try {
          es(5, t, t.return);
        } catch (w) {
          fe(t, t.return, w);
        }
      }
      break;
    case 1:
      Ct(e, t), Pt(t), r & 512 && n !== null && Or(n, n.return);
      break;
    case 5:
      if (
        (Ct(e, t),
        Pt(t),
        r & 512 && n !== null && Or(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          hs(i, "");
        } catch (w) {
          fe(t, t.return, w);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Gg(i, s),
              cc(l, o);
            var u = cc(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? ey(i, h)
                : c === "dangerouslySetInnerHTML"
                ? Jg(i, h)
                : c === "children"
                ? hs(i, h)
                : jh(i, c, h, u);
            }
            switch (l) {
              case "input":
                sc(i, s);
                break;
              case "textarea":
                Yg(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Mr(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Mr(i, !!s.multiple, s.defaultValue, !0)
                      : Mr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[xs] = s;
          } catch (w) {
            fe(t, t.return, w);
          }
      }
      break;
    case 6:
      if ((Ct(e, t), Pt(t), r & 4)) {
        if (t.stateNode === null) throw Error(k(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          fe(t, t.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ct(e, t), Pt(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ms(e.containerInfo);
        } catch (w) {
          fe(t, t.return, w);
        }
      break;
    case 4:
      Ct(e, t), Pt(t);
      break;
    case 13:
      Ct(e, t),
        Pt(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (gf = me())),
        r & 4 && Mp(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Be = (u = Be) || c), Ct(e, t), (Be = u)) : Ct(e, t),
        Pt(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (A = t, c = t.child; c !== null; ) {
            for (h = A = c; A !== null; ) {
              switch (((f = A), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  es(4, f, f.return);
                  break;
                case 1:
                  Or(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (e = r),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      fe(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Or(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Up(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (A = g)) : Up(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Zg("display", o)));
              } catch (w) {
                fe(t, t.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (w) {
                fe(t, t.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ct(e, t), Pt(t), r & 4 && Mp(t);
      break;
    case 21:
      break;
    default:
      Ct(e, t), Pt(t);
  }
}
function Pt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Nv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (hs(i, ""), (r.flags &= -33));
          var s = jp(t);
          bc(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = jp(t);
          Uc(t, l, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function BS(t, e, n) {
  (A = t), $v(t);
}
function $v(t, e, n) {
  for (var r = (t.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Do;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Be;
        l = Do;
        var u = Be;
        if (((Do = o), (Be = a) && !u))
          for (A = i; A !== null; )
            (o = A),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? bp(i)
                : a !== null
                ? ((a.return = o), (A = a))
                : bp(i);
        for (; s !== null; ) (A = s), $v(s), (s = s.sibling);
        (A = i), (Do = l), (Be = u);
      }
      Fp(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : Fp(t);
  }
}
function Fp(t) {
  for (; A !== null; ) {
    var e = A;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Be || fa(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Tt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && Ep(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Ep(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && ms(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Be || (e.flags & 512 && Fc(e));
      } catch (f) {
        fe(e, e.return, f);
      }
    }
    if (e === t) {
      A = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (A = n);
      break;
    }
    A = e.return;
  }
}
function Up(t) {
  for (; A !== null; ) {
    var e = A;
    if (e === t) {
      A = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (A = n);
      break;
    }
    A = e.return;
  }
}
function bp(t) {
  for (; A !== null; ) {
    var e = A;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            fa(4, e);
          } catch (a) {
            fe(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(e, i, a);
            }
          }
          var s = e.return;
          try {
            Fc(e);
          } catch (a) {
            fe(e, s, a);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Fc(e);
          } catch (a) {
            fe(e, o, a);
          }
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    if (e === t) {
      A = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (A = l);
      break;
    }
    A = e.return;
  }
}
var VS = Math.ceil,
  Rl = an.ReactCurrentDispatcher,
  pf = an.ReactCurrentOwner,
  yt = an.ReactCurrentBatchConfig,
  G = 0,
  Ie = null,
  ve = null,
  Oe = 0,
  st = 0,
  Lr = bn(0),
  Se = 0,
  Ns = null,
  ar = 0,
  da = 0,
  mf = 0,
  ts = null,
  et = null,
  gf = 0,
  ei = 1 / 0,
  qt = null,
  Pl = !1,
  Bc = null,
  Nn = null,
  Ro = !1,
  yn = null,
  Ol = 0,
  ns = 0,
  Vc = null,
  el = -1,
  tl = 0;
function Xe() {
  return G & 6 ? me() : el !== -1 ? el : (el = me());
}
function _n(t) {
  return t.mode & 1
    ? G & 2 && Oe !== 0
      ? Oe & -Oe
      : kS.transition !== null
      ? (tl === 0 && (tl = fy()), tl)
      : ((t = J),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : wy(t.type))),
        t)
    : 1;
}
function $t(t, e, n, r) {
  if (50 < ns) throw ((ns = 0), (Vc = null), Error(k(185)));
  Ws(t, n, r),
    (!(G & 2) || t !== Ie) &&
      (t === Ie && (!(G & 2) && (da |= n), Se === 4 && pn(t, Oe)),
      it(t, r),
      n === 1 && G === 0 && !(e.mode & 1) && ((ei = me() + 500), ua && Bn()));
}
function it(t, e) {
  var n = t.callbackNode;
  kE(t, e);
  var r = yl(t, t === Ie ? Oe : 0);
  if (r === 0)
    n !== null && Gd(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Gd(n), e === 1))
      t.tag === 0 ? TS(Bp.bind(null, t)) : Fy(Bp.bind(null, t)),
        xS(function () {
          !(G & 6) && Bn();
        }),
        (n = null);
    else {
      switch (dy(r)) {
        case 1:
          n = Bh;
          break;
        case 4:
          n = cy;
          break;
        case 16:
          n = gl;
          break;
        case 536870912:
          n = hy;
          break;
        default:
          n = gl;
      }
      n = Mv(n, Av.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Av(t, e) {
  if (((el = -1), (tl = 0), G & 6)) throw Error(k(327));
  var n = t.callbackNode;
  if (Vr() && t.callbackNode !== n) return null;
  var r = yl(t, t === Ie ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ll(t, r);
  else {
    e = r;
    var i = G;
    G |= 2;
    var s = Rv();
    (Ie !== t || Oe !== e) && ((qt = null), (ei = me() + 500), nr(t, e));
    do
      try {
        qS();
        break;
      } catch (l) {
        Dv(t, l);
      }
    while (1);
    ef(),
      (Rl.current = s),
      (G = i),
      ve !== null ? (e = 0) : ((Ie = null), (Oe = 0), (e = Se));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = mc(t)), i !== 0 && ((r = i), (e = zc(t, i)))), e === 1)
    )
      throw ((n = Ns), nr(t, 0), pn(t, r), it(t, me()), n);
    if (e === 6) pn(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !zS(i) &&
          ((e = Ll(t, r)),
          e === 2 && ((s = mc(t)), s !== 0 && ((r = s), (e = zc(t, s)))),
          e === 1))
      )
        throw ((n = Ns), nr(t, 0), pn(t, r), it(t, me()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Qn(t, et, qt);
          break;
        case 3:
          if (
            (pn(t, r), (r & 130023424) === r && ((e = gf + 500 - me()), 10 < e))
          ) {
            if (yl(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Xe(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = Cc(Qn.bind(null, t, et, qt), e);
            break;
          }
          Qn(t, et, qt);
          break;
        case 4:
          if ((pn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - It(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * VS(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Cc(Qn.bind(null, t, et, qt), r);
            break;
          }
          Qn(t, et, qt);
          break;
        case 5:
          Qn(t, et, qt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return it(t, me()), t.callbackNode === n ? Av.bind(null, t) : null;
}
function zc(t, e) {
  var n = ts;
  return (
    t.current.memoizedState.isDehydrated && (nr(t, e).flags |= 256),
    (t = Ll(t, e)),
    t !== 2 && ((e = et), (et = n), e !== null && Hc(e)),
    t
  );
}
function Hc(t) {
  et === null ? (et = t) : et.push.apply(et, t);
}
function zS(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!At(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function pn(t, e) {
  for (
    e &= ~mf,
      e &= ~da,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - It(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Bp(t) {
  if (G & 6) throw Error(k(327));
  Vr();
  var e = yl(t, 0);
  if (!(e & 1)) return it(t, me()), null;
  var n = Ll(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = mc(t);
    r !== 0 && ((e = r), (n = zc(t, r)));
  }
  if (n === 1) throw ((n = Ns), nr(t, 0), pn(t, e), it(t, me()), n);
  if (n === 6) throw Error(k(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Qn(t, et, qt),
    it(t, me()),
    null
  );
}
function yf(t, e) {
  var n = G;
  G |= 1;
  try {
    return t(e);
  } finally {
    (G = n), G === 0 && ((ei = me() + 500), ua && Bn());
  }
}
function ur(t) {
  yn !== null && yn.tag === 0 && !(G & 6) && Vr();
  var e = G;
  G |= 1;
  var n = yt.transition,
    r = J;
  try {
    if (((yt.transition = null), (J = 1), t)) return t();
  } finally {
    (J = r), (yt.transition = n), (G = e), !(G & 6) && Bn();
  }
}
function vf() {
  (st = Lr.current), ie(Lr);
}
function nr(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), wS(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Xh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Sl();
          break;
        case 3:
          Jr(), ie(nt), ie(Ke), lf();
          break;
        case 5:
          of(r);
          break;
        case 4:
          Jr();
          break;
        case 13:
          ie(ae);
          break;
        case 19:
          ie(ae);
          break;
        case 10:
          tf(r.type._context);
          break;
        case 22:
        case 23:
          vf();
      }
      n = n.return;
    }
  if (
    ((Ie = t),
    (ve = t = In(t.current, null)),
    (Oe = st = e),
    (Se = 0),
    (Ns = null),
    (mf = da = ar = 0),
    (et = ts = null),
    Xn !== null)
  ) {
    for (e = 0; e < Xn.length; e++)
      if (((n = Xn[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Xn = null;
  }
  return t;
}
function Dv(t, e) {
  do {
    var n = ve;
    try {
      if ((ef(), (Xo.current = Dl), Al)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Al = !1;
      }
      if (
        ((lr = 0),
        (_e = Ee = ue = null),
        (Zi = !1),
        (Cs = 0),
        (pf.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (Ns = e), (ve = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          a = e;
        if (
          ((e = Oe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Ip(o);
          if (g !== null) {
            (g.flags &= -257),
              $p(g, o, l, s, e),
              g.mode & 1 && _p(s, u, e),
              (e = g),
              (a = u);
            var v = e.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (e.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              _p(s, u, e), wf();
              break e;
            }
            a = Error(k(426));
          }
        } else if (le && l.mode & 1) {
          var T = Ip(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              $p(T, o, l, s, e),
              Jh(Zr(a, l));
            break e;
          }
        }
        (s = a = Zr(a, l)),
          Se !== 4 && (Se = 2),
          ts === null ? (ts = [s]) : ts.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var m = pv(s, a, e);
              xp(s, m);
              break e;
            case 1:
              l = a;
              var d = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Nn === null || !Nn.has(y))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var S = mv(s, l, e);
                xp(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ov(n);
    } catch (I) {
      (e = I), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Rv() {
  var t = Rl.current;
  return (Rl.current = Dl), t === null ? Dl : t;
}
function wf() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ie === null || (!(ar & 268435455) && !(da & 268435455)) || pn(Ie, Oe);
}
function Ll(t, e) {
  var n = G;
  G |= 2;
  var r = Rv();
  (Ie !== t || Oe !== e) && ((qt = null), nr(t, e));
  do
    try {
      HS();
      break;
    } catch (i) {
      Dv(t, i);
    }
  while (1);
  if ((ef(), (G = n), (Rl.current = r), ve !== null)) throw Error(k(261));
  return (Ie = null), (Oe = 0), Se;
}
function HS() {
  for (; ve !== null; ) Pv(ve);
}
function qS() {
  for (; ve !== null && !gE(); ) Pv(ve);
}
function Pv(t) {
  var e = jv(t.alternate, t, st);
  (t.memoizedProps = t.pendingProps),
    e === null ? Ov(t) : (ve = e),
    (pf.current = null);
}
function Ov(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = FS(n, e)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Se = 6), (ve = null);
        return;
      }
    } else if (((n = MS(n, e, st)), n !== null)) {
      ve = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ve = e;
      return;
    }
    ve = e = t;
  } while (e !== null);
  Se === 0 && (Se = 5);
}
function Qn(t, e, n) {
  var r = J,
    i = yt.transition;
  try {
    (yt.transition = null), (J = 1), WS(t, e, n, r);
  } finally {
    (yt.transition = i), (J = r);
  }
  return null;
}
function WS(t, e, n, r) {
  do Vr();
  while (yn !== null);
  if (G & 6) throw Error(k(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(k(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (NE(t, s),
    t === Ie && ((ve = Ie = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ro ||
      ((Ro = !0),
      Mv(gl, function () {
        return Vr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = yt.transition), (yt.transition = null);
    var o = J;
    J = 1;
    var l = G;
    (G |= 4),
      (pf.current = null),
      bS(t, n),
      Iv(n, t),
      fS(Ec),
      (vl = !!xc),
      (Ec = xc = null),
      (t.current = n),
      BS(n),
      yE(),
      (G = l),
      (J = o),
      (yt.transition = s);
  } else t.current = n;
  if (
    (Ro && ((Ro = !1), (yn = t), (Ol = i)),
    (s = t.pendingLanes),
    s === 0 && (Nn = null),
    xE(n.stateNode),
    it(t, me()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Pl) throw ((Pl = !1), (t = Bc), (Bc = null), t);
  return (
    Ol & 1 && t.tag !== 0 && Vr(),
    (s = t.pendingLanes),
    s & 1 ? (t === Vc ? ns++ : ((ns = 0), (Vc = t))) : (ns = 0),
    Bn(),
    null
  );
}
function Vr() {
  if (yn !== null) {
    var t = dy(Ol),
      e = yt.transition,
      n = J;
    try {
      if (((yt.transition = null), (J = 16 > t ? 16 : t), yn === null))
        var r = !1;
      else {
        if (((t = yn), (yn = null), (Ol = 0), G & 6)) throw Error(k(331));
        var i = G;
        for (G |= 4, A = t.current; A !== null; ) {
          var s = A,
            o = s.child;
          if (A.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      es(8, c, s);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (A = h);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var f = c.sibling,
                        g = c.return;
                      if ((kv(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (A = f);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o);
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    es(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (A = m);
                break e;
              }
              A = s.return;
            }
        }
        var d = t.current;
        for (A = d; A !== null; ) {
          o = A;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (A = y);
          else
            e: for (o = d; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fa(9, l);
                  }
                } catch (I) {
                  fe(l, l.return, I);
                }
              if (l === o) {
                A = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (A = S);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((G = i), Bn(), bt && typeof bt.onPostCommitFiberRoot == "function")
        )
          try {
            bt.onPostCommitFiberRoot(ia, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (yt.transition = e);
    }
  }
  return !1;
}
function Vp(t, e, n) {
  (e = Zr(n, e)),
    (e = pv(t, e, 1)),
    (t = kn(t, e, 1)),
    (e = Xe()),
    t !== null && (Ws(t, 1, e), it(t, e));
}
function fe(t, e, n) {
  if (t.tag === 3) Vp(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Vp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nn === null || !Nn.has(r)))
        ) {
          (t = Zr(n, t)),
            (t = mv(e, t, 1)),
            (e = kn(e, t, 1)),
            (t = Xe()),
            e !== null && (Ws(e, 1, t), it(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function KS(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Xe()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ie === t &&
      (Oe & n) === n &&
      (Se === 4 || (Se === 3 && (Oe & 130023424) === Oe && 500 > me() - gf)
        ? nr(t, 0)
        : (mf |= n)),
    it(t, e);
}
function Lv(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = So), (So <<= 1), !(So & 130023424) && (So = 4194304))
      : (e = 1));
  var n = Xe();
  (t = tn(t, e)), t !== null && (Ws(t, e, n), it(t, n));
}
function QS(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Lv(t, n);
}
function GS(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(e), Lv(t, n);
}
var jv;
jv = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || nt.current) tt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (tt = !1), jS(t, e, n);
      tt = !!(t.flags & 131072);
    }
  else (tt = !1), le && e.flags & 1048576 && Uy(e, kl, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Zo(t, e), (t = e.pendingProps);
      var i = Gr(e, Ke.current);
      Br(e, n), (i = uf(null, e, r, t, i, n));
      var s = cf();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            rt(r) ? ((s = !0), Cl(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            rf(e),
            (i.updater = ca),
            (e.stateNode = i),
            (i._reactInternals = e),
            Ac(e, r, t, n),
            (e = Pc(null, e, r, !0, s, n)))
          : ((e.tag = 0), le && s && Yh(e), Ge(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Zo(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = XS(r)),
          (t = Tt(r, t)),
          i)
        ) {
          case 0:
            e = Rc(null, e, r, t, n);
            break e;
          case 1:
            e = Rp(null, e, r, t, n);
            break e;
          case 11:
            e = Ap(null, e, r, t, n);
            break e;
          case 14:
            e = Dp(null, e, r, Tt(r.type, t), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Tt(r, i)),
        Rc(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Tt(r, i)),
        Rp(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((wv(e), t === null)) throw Error(k(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          zy(t, e),
          Il(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = Zr(Error(k(423)), e)), (e = Pp(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zr(Error(k(424)), e)), (e = Pp(t, e, r, n, i));
            break e;
          } else
            for (
              ot = Tn(e.stateNode.containerInfo.firstChild),
                lt = e,
                le = !0,
                Nt = null,
                n = Ky(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yr(), r === i)) {
            e = nn(t, e, n);
            break e;
          }
          Ge(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Qy(e),
        t === null && _c(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        Sc(r, i) ? (o = null) : s !== null && Sc(r, s) && (e.flags |= 32),
        vv(t, e),
        Ge(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && _c(e), null;
    case 13:
      return xv(t, e, n);
    case 4:
      return (
        sf(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Xr(e, null, r, n)) : Ge(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Tt(r, i)),
        Ap(t, e, r, i, n)
      );
    case 7:
      return Ge(t, e, e.pendingProps, n), e.child;
    case 8:
      return Ge(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Ge(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          ee(Nl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (At(s.value, o)) {
            if (s.children === i.children && !nt.current) {
              e = nn(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Yt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Ic(s.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Ic(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ge(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Br(e, n),
        (i = xt(i)),
        (r = r(i)),
        (e.flags |= 1),
        Ge(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Tt(r, e.pendingProps)),
        (i = Tt(r.type, i)),
        Dp(t, e, r, i, n)
      );
    case 15:
      return gv(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Tt(r, i)),
        Zo(t, e),
        (e.tag = 1),
        rt(r) ? ((t = !0), Cl(e)) : (t = !1),
        Br(e, n),
        qy(e, r, i),
        Ac(e, r, i, n),
        Pc(null, e, r, !0, t, n)
      );
    case 19:
      return Ev(t, e, n);
    case 22:
      return yv(t, e, n);
  }
  throw Error(k(156, e.tag));
};
function Mv(t, e) {
  return uy(t, e);
}
function YS(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function gt(t, e, n, r) {
  return new YS(t, e, n, r);
}
function xf(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function XS(t) {
  if (typeof t == "function") return xf(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Fh)) return 11;
    if (t === Uh) return 14;
  }
  return 2;
}
function In(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = gt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function nl(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) xf(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case kr:
        return rr(n.children, i, s, e);
      case Mh:
        (o = 8), (i |= 8);
        break;
      case ec:
        return (
          (t = gt(12, n, e, i | 2)), (t.elementType = ec), (t.lanes = s), t
        );
      case tc:
        return (t = gt(13, n, e, i)), (t.elementType = tc), (t.lanes = s), t;
      case nc:
        return (t = gt(19, n, e, i)), (t.elementType = nc), (t.lanes = s), t;
      case Wg:
        return pa(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Hg:
              o = 10;
              break e;
            case qg:
              o = 9;
              break e;
            case Fh:
              o = 11;
              break e;
            case Uh:
              o = 14;
              break e;
            case hn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = gt(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function rr(t, e, n, r) {
  return (t = gt(7, t, r, e)), (t.lanes = n), t;
}
function pa(t, e, n, r) {
  return (
    (t = gt(22, t, r, e)),
    (t.elementType = Wg),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function Nu(t, e, n) {
  return (t = gt(6, t, null, e)), (t.lanes = n), t;
}
function _u(t, e, n) {
  return (
    (e = gt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function JS(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = lu(0)),
    (this.expirationTimes = lu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ef(t, e, n, r, i, s, o, l, a) {
  return (
    (t = new JS(t, e, n, l, a)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = gt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    rf(s),
    t
  );
}
function ZS(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tr,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Fv(t) {
  if (!t) return Ln;
  t = t._reactInternals;
  e: {
    if (gr(t) !== t || t.tag !== 1) throw Error(k(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (rt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(k(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (rt(n)) return My(t, n, e);
  }
  return e;
}
function Uv(t, e, n, r, i, s, o, l, a) {
  return (
    (t = Ef(n, r, !0, t, i, s, o, l, a)),
    (t.context = Fv(null)),
    (n = t.current),
    (r = Xe()),
    (i = _n(n)),
    (s = Yt(r, i)),
    (s.callback = e ?? null),
    kn(n, s, i),
    (t.current.lanes = i),
    Ws(t, i, r),
    it(t, r),
    t
  );
}
function ma(t, e, n, r) {
  var i = e.current,
    s = Xe(),
    o = _n(i);
  return (
    (n = Fv(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Yt(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = kn(i, e, o)),
    t !== null && ($t(t, i, o, s), Yo(t, i, o)),
    o
  );
}
function jl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function zp(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Sf(t, e) {
  zp(t, e), (t = t.alternate) && zp(t, e);
}
function e2() {
  return null;
}
var bv =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Cf(t) {
  this._internalRoot = t;
}
ga.prototype.render = Cf.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  ma(t, e, null, null);
};
ga.prototype.unmount = Cf.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    ur(function () {
      ma(null, t, null, null);
    }),
      (e[en] = null);
  }
};
function ga(t) {
  this._internalRoot = t;
}
ga.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = gy();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < dn.length && e !== 0 && e < dn[n].priority; n++);
    dn.splice(n, 0, t), n === 0 && vy(t);
  }
};
function Tf(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ya(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hp() {}
function t2(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = jl(o);
        s.call(u);
      };
    }
    var o = Uv(e, r, t, 0, null, !1, !1, "", Hp);
    return (
      (t._reactRootContainer = o),
      (t[en] = o.current),
      vs(t.nodeType === 8 ? t.parentNode : t),
      ur(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = jl(a);
      l.call(u);
    };
  }
  var a = Ef(t, 0, !1, null, null, !1, !1, "", Hp);
  return (
    (t._reactRootContainer = a),
    (t[en] = a.current),
    vs(t.nodeType === 8 ? t.parentNode : t),
    ur(function () {
      ma(e, a, n, r);
    }),
    a
  );
}
function va(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = jl(o);
        l.call(a);
      };
    }
    ma(e, o, t, i);
  } else o = t2(n, e, t, i, r);
  return jl(o);
}
py = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Bi(e.pendingLanes);
        n !== 0 &&
          (Vh(e, n | 1), it(e, me()), !(G & 6) && ((ei = me() + 500), Bn()));
      }
      break;
    case 13:
      ur(function () {
        var r = tn(t, 1);
        if (r !== null) {
          var i = Xe();
          $t(r, t, 1, i);
        }
      }),
        Sf(t, 1);
  }
};
zh = function (t) {
  if (t.tag === 13) {
    var e = tn(t, 134217728);
    if (e !== null) {
      var n = Xe();
      $t(e, t, 134217728, n);
    }
    Sf(t, 134217728);
  }
};
my = function (t) {
  if (t.tag === 13) {
    var e = _n(t),
      n = tn(t, e);
    if (n !== null) {
      var r = Xe();
      $t(n, t, e, r);
    }
    Sf(t, e);
  }
};
gy = function () {
  return J;
};
yy = function (t, e) {
  var n = J;
  try {
    return (J = t), e();
  } finally {
    J = n;
  }
};
fc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((sc(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = aa(r);
            if (!i) throw Error(k(90));
            Qg(r), sc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Yg(t, n);
      break;
    case "select":
      (e = n.value), e != null && Mr(t, !!n.multiple, e, !1);
  }
};
ry = yf;
iy = ur;
var n2 = { usingClientEntryPoint: !1, Events: [Qs, $r, aa, ty, ny, yf] },
  Li = {
    findFiberByHostInstance: Yn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  r2 = {
    bundleType: Li.bundleType,
    version: Li.version,
    rendererPackageName: Li.rendererPackageName,
    rendererConfig: Li.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: an.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = ly(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Li.findFiberByHostInstance || e2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Po.isDisabled && Po.supportsFiber)
    try {
      (ia = Po.inject(r2)), (bt = Po);
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n2;
ct.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tf(e)) throw Error(k(200));
  return ZS(t, e, null, n);
};
ct.createRoot = function (t, e) {
  if (!Tf(t)) throw Error(k(299));
  var n = !1,
    r = "",
    i = bv;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Ef(t, 1, !1, null, null, n, !1, r, i)),
    (t[en] = e.current),
    vs(t.nodeType === 8 ? t.parentNode : t),
    new Cf(e)
  );
};
ct.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(k(188))
      : ((t = Object.keys(t).join(",")), Error(k(268, t)));
  return (t = ly(e)), (t = t === null ? null : t.stateNode), t;
};
ct.flushSync = function (t) {
  return ur(t);
};
ct.hydrate = function (t, e, n) {
  if (!ya(e)) throw Error(k(200));
  return va(null, t, e, !0, n);
};
ct.hydrateRoot = function (t, e, n) {
  if (!Tf(t)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = bv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = Uv(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[en] = e.current),
    vs(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new ga(e);
};
ct.render = function (t, e, n) {
  if (!ya(e)) throw Error(k(200));
  return va(null, t, e, !1, n);
};
ct.unmountComponentAtNode = function (t) {
  if (!ya(t)) throw Error(k(40));
  return t._reactRootContainer
    ? (ur(function () {
        va(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[en] = null);
        });
      }),
      !0)
    : !1;
};
ct.unstable_batchedUpdates = yf;
ct.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!ya(n)) throw Error(k(200));
  if (t == null || t._reactInternals === void 0) throw Error(k(38));
  return va(t, e, n, !1, r);
};
ct.version = "18.2.0-next-9e3b772b8-20220608";
function Bv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bv);
    } catch (t) {
      console.error(t);
    }
}
Bv(), (Ug.exports = ct);
var i2 = Ug.exports,
  qp = i2;
(Ju.createRoot = qp.createRoot), (Ju.hydrateRoot = qp.hydrateRoot);
const E = {
  boxWidth: "xl:max-w-[1280px] w-full",
  heading2:
    "font-sans font-bold xs:text-[90px] text-[45px] text-white xs:leading-[86.8px] leading-[48.8px] w-full",
  heading3:
    "font-sans font-bold xs:text-[50px] text-[42px] text-white xs:leading-[76.8px] leading-[53.8px] w-full",
  heading4:
    "font-sans font-bold xs:text-[40px] text-[36px] text-white xs:leading-[76.8px] leading-[53.8px] w-full",
  paragraph:
    "font-sans font-semibold text-white xs:text-[32px] text-[28px] xs:leading-[40.8px] leading-[30.8px]",
  paragraph2:
    "font-sans font-semibold text-white xs:text-[24px] text-[16px] leading-[30.8px]",
  paragraph3:
    "font-sans font-semibold text-white xs:text-[24px] text-[14px] leading-[30.8px]",
  paragraph4:
    "font-sans font-semibold text-white xs:text-[24px] text-[10px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end items-center",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  zoomImage: {
    transition: "transform 0.3s ease",
    transformOrigin: "top center",
  },
  iconContainer: { borderRadius: "50%", width: "100px", height: "100px" },
  buttonContainer: {
    borderRadius: "50px 50px 50px 50px",
    width: "150px",
    padding: "10px 20px",
  },
  blogContainerLarge: { borderRadius: "30px 30px 30px 30px", width: "100%" },
  blogContainerSmall: {
    borderRadius: "10px 10px 10px 10px",
    width: "100%",
    height: "70px",
  },
  signUpContainer: {
    borderRadius: "50px 50px 50px 50px",
    width: "100px",
    padding: "10px 20px",
  },
};
var Vv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Wp = wn.createContext && wn.createContext(Vv),
  $n =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        ($n =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) {
              e = arguments[n];
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        $n.apply(this, arguments)
      );
    },
  s2 =
    (globalThis && globalThis.__rest) ||
    function (t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]]);
      return n;
    };
function zv(t) {
  return (
    t &&
    t.map(function (e, n) {
      return wn.createElement(e.tag, $n({ key: n }, e.attr), zv(e.child));
    })
  );
}
function o2(t) {
  return function (e) {
    return wn.createElement(l2, $n({ attr: $n({}, t.attr) }, e), zv(t.child));
  };
}
function l2(t) {
  var e = function (n) {
    var r = t.attr,
      i = t.size,
      s = t.title,
      o = s2(t, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      t.className && (a = (a ? a + " " : "") + t.className),
      wn.createElement(
        "svg",
        $n(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: $n($n({ color: t.color || n.color }, n.style), t.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && wn.createElement("title", null, s),
        t.children
      )
    );
  };
  return Wp !== void 0
    ? wn.createElement(Wp.Consumer, null, function (n) {
        return e(n);
      })
    : e(Vv);
}
function a2(t) {
  return o2({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  })(t);
}
const qc = "./assets/footerlogo-9ab17944.png",
  u2 = "./assets/close-945782e8.svg",
  Oo = [
    { id: "mu", title: "mu" },
    { id: "recruiter", title: "recruiter" },
    { id: "blog", title: "blog" },
    { id: "signup", title: "signup" },
  ],
  c2 = () => {
    const [t, e] = $.useState("Home"),
      [n, r] = $.useState(!1);
    return p.jsxs("nav", {
      className:
        "w-full flex py-6 justify-between items-center navbar fixed top-0 z-50 bg-primary sm:pr-[140px] pr-[35px]",
      children: [
        p.jsx(Ki, {
          to: "/",
          className: "flex items-center",
          onClick: () => e("Home"),
          children: p.jsx("img", {
            src: qc,
            alt: "logo",
            className: "w-[80px] h-[80px] bg-primary",
          }),
        }),
        p.jsx("ul", {
          className: "list-none sm:flex hidden justify-end items-center flex-1",
          children: Oo.map((i, s) =>
            p.jsx(
              "li",
              {
                className: `font-poppins font-semibold cursor-pointer text-[16px] ${
                  t === i.title ? "text-lightPink" : "text-white"
                } ${
                  t === "signup" && i.title === "signup"
                    ? "border border-white"
                    : ""
                } ${s === Oo.length - 1 ? "mr-0" : "mr-10"} ${
                  i.title === "signup" ? "bg-dimPrimary" : ""
                } `,
                style: i.title === "signup" ? E.signUpContainer : {},
                onClick: () => e(i.title),
                children: p.jsx(Ki, {
                  to: `/${i.id}`,
                  className: "hover:text-lightPink",
                  children: i.title,
                }),
              },
              i.id
            )
          ),
        }),
        p.jsxs("div", {
          className: "sm:hidden flex flex-1 justify-end items-center",
          children: [
            n
              ? p.jsx("img", {
                  src: u2,
                  alt: "close",
                  className: "w-[28px] h-[28px] object-contain",
                  onClick: () => r(!1),
                })
              : p.jsx(a2, {
                  onClick: () => r(!0),
                  className:
                    "w-[28px] h-[28px] object-contain cursor-pointer text-secondary",
                }),
            p.jsx("div", {
              className: `${
                n ? "flex" : "hidden"
              } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar mt-0`,
              children: p.jsx("ul", {
                className:
                  "list-none flex justify-end items-start flex-1 flex-col",
                children: Oo.map((i, s) =>
                  p.jsx(
                    "li",
                    {
                      className: `font-poppins font-medium cursor-pointer text-[16px] ${
                        t === i.title ? "text-white" : "text-dimWhite"
                      } ${s === Oo.length - 1 ? "mb-0" : "mb-4"}`,
                      onClick: () => {
                        e(i.title), r(!1);
                      },
                      children: p.jsx(Ki, {
                        to: `/${i.id}`,
                        className: "hover:text-white",
                        children: i.title,
                      }),
                    },
                    i.id
                  )
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  h2 = "./assets/main_with_letters-c9af3dfe.png",
  f2 = "./assets/letters-e7d7a7fa.png",
  d2 = "./assets/main-46469e62.png",
  p2 = () =>
    p.jsxs("div", {
      className: "w-[1000px]",
      children: [
        p.jsx("img", { src: h2, className: "hidden sm:flex" }),
        p.jsxs("div", {
          className:
            "w-full sm:hidden flex flex-col items-center justify-center",
          children: [
            p.jsx("img", {
              src: d2,
              alt: "main",
              className: "w-[250px] pb-10",
            }),
            p.jsx("img", { src: f2, alt: "letters", className: "w-[300px]" }),
          ],
        }),
      ],
    }),
  Kp = "./assets/mu_new-142f2552.png",
  m2 = "./assets/scores-3ae1d274.png",
  Qp = "./assets/accounts-585c0db6.svg",
  Gp = "./assets/mu_recruiter-c476f7b7.png",
  Yp = "./assets/extension-df8cfd59.png",
  Xp = "./assets/main_score-50a73998.png",
  Jp = "./assets/concepts_new-a23a130c.png",
  g2 = "./assets/scores_vertical-5f42e1f5.png",
  y2 = () => (
    $.useEffect(() => {
      window.scrollTo(0, 0);
      const t = document.querySelectorAll(".scroll-container"),
        e = () => {
          t.forEach((n) => {
            const r = n.querySelector(".content-container"),
              i = n.querySelector(".image-container"),
              s = window.pageYOffset || document.documentElement.scrollTop,
              o = r.offsetTop + r.offsetHeight;
            if (s > r.offsetTop && s < o) {
              const l = (s - r.offsetTop) / 2;
              i.style.transform = `translateY(${l}px)`;
            } else i.style.transform = "none";
          });
        };
      return (
        window.addEventListener("scroll", e),
        () => {
          window.removeEventListener("scroll", e);
        }
      );
    }, []),
    p.jsxs("div", {
      className: `w-full flex-col pt-[180px] ${E.paddingX}`,
      children: [
        p.jsxs("div", {
          className: `hidden w-full${E.flexCenter} ${E.boxWidth} sm:flex flex-row scroll-container `,
          children: [
            p.jsxs("div", {
              className: `flex-1 w-full sm:w-auto flex flex-col ${E.flexStart} mb-[280px] content-container image-container`,
              children: [
                p.jsxs("h1", {
                  className: `${E.heading2}`,
                  children: ["meet the ", p.jsx("br", {}), " new mu"],
                }),
                p.jsxs("p", {
                  className: `${E.paragraph} mt-10`,
                  children: [
                    "we have created the world's ",
                    p.jsx("br", {}),
                    " first dynamic resume.",
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              className: "flex-1 w-full sm:w-auto flex flex-col ",
              children: p.jsx("img", {
                src: Kp,
                alt: "mu_iphone",
                className: "sm:w-[400px] w-[250px] self-center",
              }),
            }),
          ],
        }),
        p.jsxs("div", {
          className: `flex w-full${E.flexCenter} ${E.boxWidth} sm:hidden flex-col  `,
          children: [
            p.jsxs("h1", {
              className: `${E.heading2} text-center`,
              children: ["meet the ", p.jsx("br", {}), " new mu"],
            }),
            p.jsxs("p", {
              className: `${E.paragraph} mt-10 text-center`,
              children: [
                "we have created ",
                p.jsx("br", {}),
                " the world's first ",
                p.jsx("br", {}),
                " dynamic resume.",
              ],
            }),
            p.jsx("img", {
              src: Kp,
              alt: "mu_iphone",
              className: "sm:w-[400px] w-[250px] self-center mt-10 ",
            }),
          ],
        }),
        p.jsxs("div", {
          className: `w-full flex-col ${E.flexCenter} ${E.boxWidth} sm:flex-row`,
          children: [
            p.jsx("div", {
              className: "hidden flex-1 w-full sm:w-auto sm:flex flex-col ",
              children: p.jsx("img", {
                src: Gp,
                alt: "mu_iphone_recruit ",
                className: "w-[400px]",
              }),
            }),
            p.jsxs("div", {
              className: `hidden flex-1 w-full sm:w-auto sm:flex flex-col ${E.flexStart} pt-[80px]`,
              children: [
                p.jsxs("p", {
                  className: `${E.paragraph} font-extrabold mt-5 text-center self-center`,
                  children: [
                    "as you learn we capture your ",
                    p.jsx("br", {}),
                    " intelligence and display it to",
                    " ",
                    p.jsx("br", {}),
                    " industry leading recruiters.",
                  ],
                }),
                p.jsxs("p", {
                  className: `${E.paragraph} font-extrabold mt-20 text-center self-center`,
                  children: [
                    "stand out from other ",
                    p.jsx("br", {}),
                    " applicants by connecting ",
                    p.jsx("br", {}),
                    " your mu with other apps.",
                  ],
                }),
                p.jsx("div", {
                  className: `w-full flex-col ${E.flexEnd} ${E.boxWidth} sm:flex-row `,
                  children: p.jsx("img", { src: Qp }),
                }),
              ],
            }),
            p.jsx("div", {
              className: "sm:hidden flex",
              children: p.jsx("p", {
                className: `${E.paragraph} font-extrabold mt-10 mb-10 text-center`,
                children:
                  "we capture your intelligence and display it to industry leading recruiters.",
              }),
            }),
            p.jsxs("div", {
              className:
                "w-[800px] max-w-full h-auto sm:hidden flex flex-col justify-center items-center",
              children: [
                p.jsx("img", {
                  src: Gp,
                  alt: "mu_iphone_recruit ",
                  className: "w-[250px]",
                }),
                p.jsxs("p", {
                  className: `${E.paragraph} font-extrabold mt-10 text-center`,
                  children: [
                    "stand out from ",
                    p.jsx("br", {}),
                    " other candidates by showing your real skills to recruiters.",
                  ],
                }),
                p.jsx("div", {
                  className: `w-full  ${E.flexCenter} ${E.boxWidth} flex-row `,
                  children: p.jsx("img", { src: Qp }),
                }),
              ],
            }),
          ],
        }),
        p.jsxs("div", {
          className: `hidden w-full ${E.flexCenter} ${E.boxWidth} sm:flex flex-row scroll-container `,
          children: [
            p.jsxs("div", {
              className: "flex-1 sm:mr-[150px] ",
              children: [
                p.jsxs("h1", {
                  className: `${E.heading2}`,
                  children: ["build up your ", p.jsx("br", {}), " mu score"],
                }),
                p.jsxs("p", {
                  className: `${E.paragraph} font-extrabold mt-20`,
                  children: [
                    "using artificial intelligence ",
                    p.jsx("br", {}),
                    " we can capture what you ",
                    p.jsx("br", {}),
                    " ",
                    "really know.",
                  ],
                }),
                p.jsxs("p", {
                  className: `${E.paragraph} font-extrabold mt-20 mb-10`,
                  children: [
                    "when you learn we can gauge ",
                    p.jsx("br", {}),
                    " your skill expertise in your",
                    " ",
                    p.jsx("br", {}),
                    " current career interest through ",
                    p.jsx("br", {}),
                    " our browser extension.",
                  ],
                }),
                p.jsx("img", { src: Yp, className: " w-[450px]" }),
              ],
            }),
            p.jsxs("div", {
              className:
                "flex-1 w-[800px] max-w-full h-auto ${styles.flexCenter} content-container image-container mb-[300px]",
              children: [
                p.jsx("img", {
                  src: Xp,
                  alt: "mu_iphone",
                  className: "w-[450px] mb-[30px]",
                }),
                p.jsx("img", { src: Jp, className: "self-center w-[450px]" }),
              ],
            }),
          ],
        }),
        p.jsx("div", {
          className: `sm:hidden w-full flex-col ${E.flexCenter} ${E.boxWidth} flex flex-row`,
          children: p.jsxs("div", {
            className: "flex-1 sm:mr-[150px] ",
            children: [
              p.jsxs("h1", {
                className: `${E.heading2} text-center`,
                children: ["build up your ", p.jsx("br", {}), " mu score"],
              }),
              p.jsx("p", {
                className: `${E.paragraph} font-extrabold mt-10 mb-10 text-center`,
                children:
                  "using artificial intelligence we can capture what you really know",
              }),
              p.jsxs("div", {
                className:
                  "max-w-full h-auto flex flex-col items-center justify-center ",
                children: [
                  p.jsx("img", {
                    src: Xp,
                    alt: "mu_iphone",
                    className: "w-[300px] self-center mb-[30px]",
                  }),
                  p.jsx("img", { src: Jp, className: "self-cenetr w-[450px]" }),
                ],
              }),
              p.jsx("p", {
                className: `${E.paragraph} mt-10 mb-10 text-center`,
                children:
                  "as you learn we can guage your skill expertise in your current career interest.",
              }),
              p.jsx("img", { src: Yp, className: " w-[450px]" }),
            ],
          }),
        }),
        p.jsx("div", {
          className: `hidden sm:flex w-full flex-col ${E.flexCenter} ${E.boxWidth}  mt-10`,
          children: p.jsxs("div", {
            className: "text-center",
            children: [
              p.jsxs("p", {
                className: `${E.paragraph} font-extrabold mt-10 `,
                children: [
                  "your score is dynamic and reflects ",
                  p.jsx("br", {}),
                  " your engagement. the more you ",
                  p.jsx("br", {}),
                  " research the higher your score.",
                ],
              }),
              p.jsx("div", {
                className: `w-full flex-col ${E.flexCenter} ${E.boxWidth}  mt-10`,
                children: p.jsx("img", {
                  src: m2,
                  alt: "mu_iphone",
                  className: "w-[700px]",
                }),
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className: `sm:hidden flex w-full flex-col ${E.flexCenter} ${E.boxWidth}  mt-10`,
          children: p.jsxs("div", {
            className: "text-center",
            children: [
              p.jsx("p", {
                className: `${E.paragraph} font-extrabold mt-10 `,
                children:
                  "your score is dynamic and reflects your engagement. the more you research the higher your score.",
              }),
              p.jsx("div", {
                className: `w-full flex-col ${E.flexCenter} ${E.boxWidth}  mt-10`,
                children: p.jsx("img", {
                  src: g2,
                  alt: "mu_iphone",
                  className: "w-[200px] mt-10",
                }),
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className: `sm:w-1/2 w-full ${E.flexCenter} ${E.boxWidth}  mt-10 text-center sm:text-left`,
          children: p.jsxs("h1", {
            className: `${E.heading3} mt-10`,
            children: ["sign up now for ", p.jsx("br", {}), " early access"],
          }),
        }),
        p.jsx("div", {
          className: "w-full mt-5 text-center sm:text-left",
          children: p.jsx(Ki, {
            to: "/signup",
            children: p.jsx("button", {
              style: E.buttonContainer,
              className: "bg-dimPrimary font-extrabold",
              children: p.jsx("p", {
                className: `${E.paragraph2} font-bold`,
                children: "sign up",
              }),
            }),
          }),
        }),
      ],
    })
  ),
  v2 = "./assets/instagram_icon-0de8091b.png",
  w2 = "./assets/linkedin_icon-09168aea.png",
  x2 = () =>
    p.jsx("div", {
      className: "w-full flex py-6 justify-between items-center sm:mt-0 mt-20",
      children: p.jsxs("div", {
        className:
          " flex-col justify-end sm:items-end items-center flex-1 flex",
        children: [
          p.jsxs("div", {
            className: "justify-end items-center flex-1 flex",
            children: [
              p.jsx("a", {
                href: "https://www.linkedin.com/company/learnmutiny/",
                target: "_blank",
                children: p.jsx("div", {
                  className:
                    "bg-dimPrimary w-12 h-12 flex items-center justify-center rounded-full mr-3",
                  children: p.jsx("img", { src: w2 }),
                }),
              }),
              p.jsx("a", {
                href: "https://www.instagram.com/learnmutiny/",
                target: "_blank",
                children: p.jsx("div", {
                  className:
                    "bg-dimPrimary w-12 h-12 flex items-center justify-center rounded-full",
                  children: p.jsx("img", { src: v2 }),
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            className: "justify-end items-center flex-1 flex",
            children: [
              p.jsx("p", {
                className: `${E.paragraph2} mr-2 mt-8`,
                children: "learnmutiny corporation",
              }),
              p.jsx("p", {
                className: `${E.paragraph3} mt-8`,
                children: "2023",
              }),
            ],
          }),
        ],
      }),
    });
function Hv(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: E2 } = Object.prototype,
  { getPrototypeOf: kf } = Object,
  wa = ((t) => (e) => {
    const n = E2.call(e);
    return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ht = (t) => ((t = t.toLowerCase()), (e) => wa(e) === t),
  xa = (t) => (e) => typeof e === t,
  { isArray: yi } = Array,
  _s = xa("undefined");
function S2(t) {
  return (
    t !== null &&
    !_s(t) &&
    t.constructor !== null &&
    !_s(t.constructor) &&
    vt(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const qv = Ht("ArrayBuffer");
function C2(t) {
  let e;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (e = ArrayBuffer.isView(t))
      : (e = t && t.buffer && qv(t.buffer)),
    e
  );
}
const T2 = xa("string"),
  vt = xa("function"),
  Wv = xa("number"),
  Ea = (t) => t !== null && typeof t == "object",
  k2 = (t) => t === !0 || t === !1,
  rl = (t) => {
    if (wa(t) !== "object") return !1;
    const e = kf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  N2 = Ht("Date"),
  _2 = Ht("File"),
  I2 = Ht("Blob"),
  $2 = Ht("FileList"),
  A2 = (t) => Ea(t) && vt(t.pipe),
  D2 = (t) => {
    let e;
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        (vt(t.append) &&
          ((e = wa(t)) === "formdata" ||
            (e === "object" &&
              vt(t.toString) &&
              t.toString() === "[object FormData]"))))
    );
  },
  R2 = Ht("URLSearchParams"),
  P2 = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ys(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u") return;
  let r, i;
  if ((typeof t != "object" && (t = [t]), yi(t)))
    for (r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
      o = s.length;
    let l;
    for (r = 0; r < o; r++) (l = s[r]), e.call(null, t[l], l, t);
  }
}
function Kv(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), e === i.toLowerCase())) return i;
  return null;
}
const Qv = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Gv = (t) => !_s(t) && t !== Qv;
function Wc() {
  const { caseless: t } = (Gv(this) && this) || {},
    e = {},
    n = (r, i) => {
      const s = (t && Kv(e, i)) || i;
      rl(e[s]) && rl(r)
        ? (e[s] = Wc(e[s], r))
        : rl(r)
        ? (e[s] = Wc({}, r))
        : yi(r)
        ? (e[s] = r.slice())
        : (e[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ys(arguments[r], n);
  return e;
}
const O2 = (t, e, n, { allOwnKeys: r } = {}) => (
    Ys(
      e,
      (i, s) => {
        n && vt(i) ? (t[s] = Hv(i, n)) : (t[s] = i);
      },
      { allOwnKeys: r }
    ),
    t
  ),
  L2 = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  j2 = (t, e, n, r) => {
    (t.prototype = Object.create(e.prototype, r)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      n && Object.assign(t.prototype, n);
  },
  M2 = (t, e, n, r) => {
    let i, s, o;
    const l = {};
    if (((e = e || {}), t == null)) return e;
    do {
      for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, t, e)) && !l[o] && ((e[o] = t[o]), (l[o] = !0));
      t = n !== !1 && kf(t);
    } while (t && (!n || n(t, e)) && t !== Object.prototype);
    return e;
  },
  F2 = (t, e, n) => {
    (t = String(t)),
      (n === void 0 || n > t.length) && (n = t.length),
      (n -= e.length);
    const r = t.indexOf(e, n);
    return r !== -1 && r === n;
  },
  U2 = (t) => {
    if (!t) return null;
    if (yi(t)) return t;
    let e = t.length;
    if (!Wv(e)) return null;
    const n = new Array(e);
    for (; e-- > 0; ) n[e] = t[e];
    return n;
  },
  b2 = (
    (t) => (e) =>
      t && e instanceof t
  )(typeof Uint8Array < "u" && kf(Uint8Array)),
  B2 = (t, e) => {
    const r = (t && t[Symbol.iterator]).call(t);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      e.call(t, s[0], s[1]);
    }
  },
  V2 = (t, e) => {
    let n;
    const r = [];
    for (; (n = t.exec(e)) !== null; ) r.push(n);
    return r;
  },
  z2 = Ht("HTMLFormElement"),
  H2 = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Zp = (
    ({ hasOwnProperty: t }) =>
    (e, n) =>
      t.call(e, n)
  )(Object.prototype),
  q2 = Ht("RegExp"),
  Yv = (t, e) => {
    const n = Object.getOwnPropertyDescriptors(t),
      r = {};
    Ys(n, (i, s) => {
      e(i, s, t) !== !1 && (r[s] = i);
    }),
      Object.defineProperties(t, r);
  },
  W2 = (t) => {
    Yv(t, (e, n) => {
      if (vt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = t[n];
      if (vt(r)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  K2 = (t, e) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return yi(t) ? r(t) : r(String(t).split(e)), n;
  },
  Q2 = () => {},
  G2 = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  Iu = "abcdefghijklmnopqrstuvwxyz",
  em = "0123456789",
  Xv = { DIGIT: em, ALPHA: Iu, ALPHA_DIGIT: Iu + Iu.toUpperCase() + em },
  Y2 = (t = 16, e = Xv.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = e;
    for (; t--; ) n += e[(Math.random() * r) | 0];
    return n;
  };
function X2(t) {
  return !!(
    t &&
    vt(t.append) &&
    t[Symbol.toStringTag] === "FormData" &&
    t[Symbol.iterator]
  );
}
const J2 = (t) => {
    const e = new Array(10),
      n = (r, i) => {
        if (Ea(r)) {
          if (e.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            e[i] = r;
            const s = yi(r) ? [] : {};
            return (
              Ys(r, (o, l) => {
                const a = n(o, i + 1);
                !_s(a) && (s[l] = a);
              }),
              (e[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(t, 0);
  },
  Z2 = Ht("AsyncFunction"),
  eC = (t) => t && (Ea(t) || vt(t)) && vt(t.then) && vt(t.catch),
  x = {
    isArray: yi,
    isArrayBuffer: qv,
    isBuffer: S2,
    isFormData: D2,
    isArrayBufferView: C2,
    isString: T2,
    isNumber: Wv,
    isBoolean: k2,
    isObject: Ea,
    isPlainObject: rl,
    isUndefined: _s,
    isDate: N2,
    isFile: _2,
    isBlob: I2,
    isRegExp: q2,
    isFunction: vt,
    isStream: A2,
    isURLSearchParams: R2,
    isTypedArray: b2,
    isFileList: $2,
    forEach: Ys,
    merge: Wc,
    extend: O2,
    trim: P2,
    stripBOM: L2,
    inherits: j2,
    toFlatObject: M2,
    kindOf: wa,
    kindOfTest: Ht,
    endsWith: F2,
    toArray: U2,
    forEachEntry: B2,
    matchAll: V2,
    isHTMLForm: z2,
    hasOwnProperty: Zp,
    hasOwnProp: Zp,
    reduceDescriptors: Yv,
    freezeMethods: W2,
    toObjectSet: K2,
    toCamelCase: H2,
    noop: Q2,
    toFiniteNumber: G2,
    findKey: Kv,
    global: Qv,
    isContextDefined: Gv,
    ALPHABET: Xv,
    generateString: Y2,
    isSpecCompliantForm: X2,
    toJSONObject: J2,
    isAsyncFn: Z2,
    isThenable: eC,
  };
function Q(t, e, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
x.inherits(Q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Jv = Q.prototype,
  Zv = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  Zv[t] = { value: t };
});
Object.defineProperties(Q, Zv);
Object.defineProperty(Jv, "isAxiosError", { value: !0 });
Q.from = (t, e, n, r, i, s) => {
  const o = Object.create(Jv);
  return (
    x.toFlatObject(
      t,
      o,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    Q.call(o, t.message, e, n, r, i),
    (o.cause = t),
    (o.name = t.name),
    s && Object.assign(o, s),
    o
  );
};
const tC = null;
function Kc(t) {
  return x.isPlainObject(t) || x.isArray(t);
}
function e0(t) {
  return x.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function tm(t, e, n) {
  return t
    ? t
        .concat(e)
        .map(function (i, s) {
          return (i = e0(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : e;
}
function nC(t) {
  return x.isArray(t) && !t.some(Kc);
}
const rC = x.toFlatObject(x, {}, null, function (e) {
  return /^is[A-Z]/.test(e);
});
function Sa(t, e, n) {
  if (!x.isObject(t)) throw new TypeError("target must be an object");
  (e = e || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, T) {
        return !x.isUndefined(T[w]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    s = n.dots,
    o = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(e);
  if (!x.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (x.isDate(v)) return v.toISOString();
    if (!a && x.isBlob(v))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(v) || x.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, w, T) {
    let m = v;
    if (v && !T && typeof v == "object") {
      if (x.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (x.isArray(v) && nC(v)) ||
        ((x.isFileList(v) || x.endsWith(w, "[]")) && (m = x.toArray(v)))
      )
        return (
          (w = e0(w)),
          m.forEach(function (y, S) {
            !(x.isUndefined(y) || y === null) &&
              e.append(
                o === !0 ? tm([w], S, s) : o === null ? w : w + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return Kc(v) ? !0 : (e.append(tm(T, w, s), u(v)), !1);
  }
  const h = [],
    f = Object.assign(rC, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Kc,
    });
  function g(v, w) {
    if (!x.isUndefined(v)) {
      if (h.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      h.push(v),
        x.forEach(v, function (m, d) {
          (!(x.isUndefined(m) || m === null) &&
            i.call(e, m, x.isString(d) ? d.trim() : d, w, f)) === !0 &&
            g(m, w ? w.concat(d) : [d]);
        }),
        h.pop();
    }
  }
  if (!x.isObject(t)) throw new TypeError("data must be an object");
  return g(t), e;
}
function nm(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (r) {
    return e[r];
  });
}
function Nf(t, e) {
  (this._pairs = []), t && Sa(t, this, e);
}
const t0 = Nf.prototype;
t0.append = function (e, n) {
  this._pairs.push([e, n]);
};
t0.toString = function (e) {
  const n = e
    ? function (r) {
        return e.call(this, r, nm);
      }
    : nm;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function iC(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function n0(t, e, n) {
  if (!e) return t;
  const r = (n && n.encode) || iC,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(e, n))
      : (s = x.isURLSearchParams(e) ? e.toString() : new Nf(e, n).toString(r)),
    s)
  ) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)),
      (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return t;
}
class sC {
  constructor() {
    this.handlers = [];
  }
  use(e, n, r) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e) {
    x.forEach(this.handlers, function (r) {
      r !== null && e(r);
    });
  }
}
const rm = sC,
  r0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  oC = typeof URLSearchParams < "u" ? URLSearchParams : Nf,
  lC = typeof FormData < "u" ? FormData : null,
  aC = typeof Blob < "u" ? Blob : null,
  uC = (() => {
    let t;
    return typeof navigator < "u" &&
      ((t = navigator.product) === "ReactNative" ||
        t === "NativeScript" ||
        t === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  cC = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Mt = {
    isBrowser: !0,
    classes: { URLSearchParams: oC, FormData: lC, Blob: aC },
    isStandardBrowserEnv: uC,
    isStandardBrowserWebWorkerEnv: cC,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function hC(t, e) {
  return Sa(
    t,
    new Mt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return Mt.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      e
    )
  );
}
function fC(t) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, t)
    .map((e) => (e[0] === "[]" ? "" : e[1] || e[0]));
}
function dC(t) {
  const e = {},
    n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (e[s] = t[s]);
  return e;
}
function i0(t) {
  function e(n, r, i, s) {
    let o = n[s++];
    const l = Number.isFinite(+o),
      a = s >= n.length;
    return (
      (o = !o && x.isArray(i) ? i.length : o),
      a
        ? (x.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !l)
        : ((!i[o] || !x.isObject(i[o])) && (i[o] = []),
          e(n, r, i[o], s) && x.isArray(i[o]) && (i[o] = dC(i[o])),
          !l)
    );
  }
  if (x.isFormData(t) && x.isFunction(t.entries)) {
    const n = {};
    return (
      x.forEachEntry(t, (r, i) => {
        e(fC(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const pC = { "Content-Type": void 0 };
function mC(t, e, n) {
  if (x.isString(t))
    try {
      return (e || JSON.parse)(t), x.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(t);
}
const Ca = {
  transitional: r0,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (e, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = x.isObject(e);
      if ((s && x.isHTMLForm(e) && (e = new FormData(e)), x.isFormData(e)))
        return i && i ? JSON.stringify(i0(e)) : e;
      if (
        x.isArrayBuffer(e) ||
        x.isBuffer(e) ||
        x.isStream(e) ||
        x.isFile(e) ||
        x.isBlob(e)
      )
        return e;
      if (x.isArrayBufferView(e)) return e.buffer;
      if (x.isURLSearchParams(e))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          e.toString()
        );
      let l;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return hC(e, this.formSerializer).toString();
        if ((l = x.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Sa(
            l ? { "files[]": e } : e,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), mC(e)) : e;
    },
  ],
  transformResponse: [
    function (e) {
      const n = this.transitional || Ca.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (e && x.isString(e) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(e);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? Q.from(l, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return e;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Mt.classes.FormData, Blob: Mt.classes.Blob },
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
x.forEach(["delete", "get", "head"], function (e) {
  Ca.headers[e] = {};
});
x.forEach(["post", "put", "patch"], function (e) {
  Ca.headers[e] = x.merge(pC);
});
const _f = Ca,
  gC = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  yC = (t) => {
    const e = {};
    let n, r, i;
    return (
      t &&
        t
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (e[n] && gC[n])) &&
                (n === "set-cookie"
                  ? e[n]
                    ? e[n].push(r)
                    : (e[n] = [r])
                  : (e[n] = e[n] ? e[n] + ", " + r : r));
          }),
      e
    );
  },
  im = Symbol("internals");
function ji(t) {
  return t && String(t).trim().toLowerCase();
}
function il(t) {
  return t === !1 || t == null ? t : x.isArray(t) ? t.map(il) : String(t);
}
function vC(t) {
  const e = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(t)); ) e[r[1]] = r[2];
  return e;
}
const wC = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function $u(t, e, n, r, i) {
  if (x.isFunction(r)) return r.call(this, e, n);
  if ((i && (e = n), !!x.isString(e))) {
    if (x.isString(r)) return e.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(e);
  }
}
function xC(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function EC(t, e) {
  const n = x.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Ta {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(l, a, u) {
      const c = ji(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const h = x.findKey(i, c);
      (!h || i[h] === void 0 || u === !0 || (u === void 0 && i[h] !== !1)) &&
        (i[h || a] = il(l));
    }
    const o = (l, a) => x.forEach(l, (u, c) => s(u, c, a));
    return (
      x.isPlainObject(e) || e instanceof this.constructor
        ? o(e, n)
        : x.isString(e) && (e = e.trim()) && !wC(e)
        ? o(yC(e), n)
        : e != null && s(n, e, r),
      this
    );
  }
  get(e, n) {
    if (((e = ji(e)), e)) {
      const r = x.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return vC(i);
        if (x.isFunction(n)) return n.call(this, i, r);
        if (x.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (((e = ji(e)), e)) {
      const r = x.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || $u(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = ji(o)), o)) {
        const l = x.findKey(r, o);
        l && (!n || $u(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return x.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || $u(this, this[s], s, e, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(e) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (i, s) => {
        const o = x.findKey(r, s);
        if (o) {
          (n[o] = il(i)), delete n[s];
          return;
        }
        const l = e ? xC(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = il(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = e && x.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[im] = this[im] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const l = ji(o);
      r[l] || (EC(i, o), (r[l] = !0));
    }
    return x.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Ta.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.freezeMethods(Ta.prototype);
x.freezeMethods(Ta);
const Xt = Ta;
function Au(t, e) {
  const n = this || _f,
    r = e || n,
    i = Xt.from(r.headers);
  let s = r.data;
  return (
    x.forEach(t, function (l) {
      s = l.call(n, s, i.normalize(), e ? e.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function s0(t) {
  return !!(t && t.__CANCEL__);
}
function Xs(t, e, n) {
  Q.call(this, t ?? "canceled", Q.ERR_CANCELED, e, n),
    (this.name = "CanceledError");
}
x.inherits(Xs, Q, { __CANCEL__: !0 });
function SC(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? t(n)
    : e(
        new Q(
          "Request failed with status code " + n.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const CC = Mt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, s, o, l) {
          const a = [];
          a.push(n + "=" + encodeURIComponent(r)),
            x.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
            x.isString(s) && a.push("path=" + s),
            x.isString(o) && a.push("domain=" + o),
            l === !0 && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function TC(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function kC(t, e) {
  return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function o0(t, e) {
  return t && !TC(e) ? kC(t, e) : e;
}
const NC = Mt.isStandardBrowserEnv
  ? (function () {
      const e = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(s) {
        let o = s;
        return (
          e && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const l = x.isString(o) ? i(o) : o;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function _C(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (e && e[1]) || "";
}
function IC(t, e) {
  t = t || 10;
  const n = new Array(t),
    r = new Array(t);
  let i = 0,
    s = 0,
    o;
  return (
    (e = e !== void 0 ? e : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[s];
      o || (o = u), (n[i] = a), (r[i] = u);
      let h = s,
        f = 0;
      for (; h !== i; ) (f += n[h++]), (h = h % t);
      if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), u - o < e)) return;
      const g = c && u - c;
      return g ? Math.round((f * 1e3) / g) : void 0;
    }
  );
}
function sm(t, e) {
  let n = 0;
  const r = IC(50, 250);
  return (i) => {
    const s = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      l = s - n,
      a = r(l),
      u = s <= o;
    n = s;
    const c = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && o && u ? (o - s) / a : void 0,
      event: i,
    };
    (c[e ? "download" : "upload"] = !0), t(c);
  };
}
const $C = typeof XMLHttpRequest < "u",
  AC =
    $C &&
    function (t) {
      return new Promise(function (n, r) {
        let i = t.data;
        const s = Xt.from(t.headers).normalize(),
          o = t.responseType;
        let l;
        function a() {
          t.cancelToken && t.cancelToken.unsubscribe(l),
            t.signal && t.signal.removeEventListener("abort", l);
        }
        x.isFormData(i) &&
          (Mt.isStandardBrowserEnv || Mt.isStandardBrowserWebWorkerEnv
            ? s.setContentType(!1)
            : s.setContentType("multipart/form-data;", !1));
        let u = new XMLHttpRequest();
        if (t.auth) {
          const g = t.auth.username || "",
            v = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(g + ":" + v));
        }
        const c = o0(t.baseURL, t.url);
        u.open(t.method.toUpperCase(), n0(c, t.params, t.paramsSerializer), !0),
          (u.timeout = t.timeout);
        function h() {
          if (!u) return;
          const g = Xt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            w = {
              data:
                !o || o === "text" || o === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: g,
              config: t,
              request: u,
            };
          SC(
            function (m) {
              n(m), a();
            },
            function (m) {
              r(m), a();
            },
            w
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = h)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (u.onabort = function () {
            u &&
              (r(new Q("Request aborted", Q.ECONNABORTED, t, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new Q("Network Error", Q.ERR_NETWORK, t, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let v = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = t.transitional || r0;
            t.timeoutErrorMessage && (v = t.timeoutErrorMessage),
              r(
                new Q(
                  v,
                  w.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                  t,
                  u
                )
              ),
              (u = null);
          }),
          Mt.isStandardBrowserEnv)
        ) {
          const g =
            (t.withCredentials || NC(c)) &&
            t.xsrfCookieName &&
            CC.read(t.xsrfCookieName);
          g && s.set(t.xsrfHeaderName, g);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in u &&
            x.forEach(s.toJSON(), function (v, w) {
              u.setRequestHeader(w, v);
            }),
          x.isUndefined(t.withCredentials) ||
            (u.withCredentials = !!t.withCredentials),
          o && o !== "json" && (u.responseType = t.responseType),
          typeof t.onDownloadProgress == "function" &&
            u.addEventListener("progress", sm(t.onDownloadProgress, !0)),
          typeof t.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", sm(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((l = (g) => {
              u &&
                (r(!g || g.type ? new Xs(null, t, u) : g),
                u.abort(),
                (u = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(l),
            t.signal &&
              (t.signal.aborted ? l() : t.signal.addEventListener("abort", l)));
        const f = _C(c);
        if (f && Mt.protocols.indexOf(f) === -1) {
          r(new Q("Unsupported protocol " + f + ":", Q.ERR_BAD_REQUEST, t));
          return;
        }
        u.send(i || null);
      });
    },
  sl = { http: tC, xhr: AC };
x.forEach(sl, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const DC = {
  getAdapter: (t) => {
    t = x.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    for (
      let i = 0;
      i < e && ((n = t[i]), !(r = x.isString(n) ? sl[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new Q(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            x.hasOwnProp(sl, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!x.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: sl,
};
function Du(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new Xs(null, t);
}
function om(t) {
  return (
    Du(t),
    (t.headers = Xt.from(t.headers)),
    (t.data = Au.call(t, t.transformRequest)),
    ["post", "put", "patch"].indexOf(t.method) !== -1 &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1),
    DC.getAdapter(t.adapter || _f.adapter)(t).then(
      function (r) {
        return (
          Du(t),
          (r.data = Au.call(t, t.transformResponse, r)),
          (r.headers = Xt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          s0(r) ||
            (Du(t),
            r &&
              r.response &&
              ((r.response.data = Au.call(t, t.transformResponse, r.response)),
              (r.response.headers = Xt.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const lm = (t) => (t instanceof Xt ? t.toJSON() : t);
function ti(t, e) {
  e = e || {};
  const n = {};
  function r(u, c, h) {
    return x.isPlainObject(u) && x.isPlainObject(c)
      ? x.merge.call({ caseless: h }, u, c)
      : x.isPlainObject(c)
      ? x.merge({}, c)
      : x.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, h) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u)) return r(void 0, u, h);
    } else return r(u, c, h);
  }
  function s(u, c) {
    if (!x.isUndefined(c)) return r(void 0, c);
  }
  function o(u, c) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, h) {
    if (h in e) return r(u, c);
    if (h in t) return r(void 0, u);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, c) => i(lm(u), lm(c), !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, t, e)), function (c) {
      const h = a[c] || i,
        f = h(t[c], e[c], c);
      (x.isUndefined(f) && h !== l) || (n[c] = f);
    }),
    n
  );
}
const l0 = "1.4.0",
  If = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    If[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const am = {};
If.transitional = function (e, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      l0 +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, l) => {
    if (e === !1)
      throw new Q(
        i(o, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return (
      n &&
        !am[o] &&
        ((am[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      e ? e(s, o, l) : !0
    );
  };
};
function RC(t, e, n) {
  if (typeof t != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = e[s];
    if (o) {
      const l = t[s],
        a = l === void 0 || o(l, s, t);
      if (a !== !0)
        throw new Q("option " + s + " must be " + a, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Q("Unknown option " + s, Q.ERR_BAD_OPTION);
  }
}
const Qc = { assertOptions: RC, validators: If },
  cn = Qc.validators;
class Ml {
  constructor(e) {
    (this.defaults = e),
      (this.interceptors = { request: new rm(), response: new rm() });
  }
  request(e, n) {
    typeof e == "string" ? ((n = n || {}), (n.url = e)) : (n = e || {}),
      (n = ti(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      Qc.assertOptions(
        r,
        {
          silentJSONParsing: cn.transitional(cn.boolean),
          forcedJSONParsing: cn.transitional(cn.boolean),
          clarifyTimeoutError: cn.transitional(cn.boolean),
        },
        !1
      ),
      i != null &&
        (x.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Qc.assertOptions(
              i,
              { encode: cn.function, serialize: cn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = s && x.merge(s.common, s[n.method])),
      o &&
        x.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (v) => {
            delete s[v];
          }
        ),
      (n.headers = Xt.concat(o, s));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((a = a && w.synchronous), l.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (w) {
      u.push(w.fulfilled, w.rejected);
    });
    let c,
      h = 0,
      f;
    if (!a) {
      const v = [om.bind(this), void 0];
      for (
        v.unshift.apply(v, l),
          v.push.apply(v, u),
          f = v.length,
          c = Promise.resolve(n);
        h < f;

      )
        c = c.then(v[h++], v[h++]);
      return c;
    }
    f = l.length;
    let g = n;
    for (h = 0; h < f; ) {
      const v = l[h++],
        w = l[h++];
      try {
        g = v(g);
      } catch (T) {
        w.call(this, T);
        break;
      }
    }
    try {
      c = om.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (h = 0, f = u.length; h < f; ) c = c.then(u[h++], u[h++]);
    return c;
  }
  getUri(e) {
    e = ti(this.defaults, e);
    const n = o0(e.baseURL, e.url);
    return n0(n, e.params, e.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function (e) {
  Ml.prototype[e] = function (n, r) {
    return this.request(
      ti(r || {}, { method: e, url: n, data: (r || {}).data })
    );
  };
});
x.forEach(["post", "put", "patch"], function (e) {
  function n(r) {
    return function (s, o, l) {
      return this.request(
        ti(l || {}, {
          method: e,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (Ml.prototype[e] = n()), (Ml.prototype[e + "Form"] = n(!0));
});
const ol = Ml;
class $f {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((l) => {
          r.subscribe(l), (s = l);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      e(function (s, o, l) {
        r.reason || ((r.reason = new Xs(s, o, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let e;
    return {
      token: new $f(function (i) {
        e = i;
      }),
      cancel: e,
    };
  }
}
const PC = $f;
function OC(t) {
  return function (n) {
    return t.apply(null, n);
  };
}
function LC(t) {
  return x.isObject(t) && t.isAxiosError === !0;
}
const Gc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Gc).forEach(([t, e]) => {
  Gc[e] = t;
});
const jC = Gc;
function a0(t) {
  const e = new ol(t),
    n = Hv(ol.prototype.request, e);
  return (
    x.extend(n, ol.prototype, e, { allOwnKeys: !0 }),
    x.extend(n, e, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return a0(ti(t, i));
    }),
    n
  );
}
const Te = a0(_f);
Te.Axios = ol;
Te.CanceledError = Xs;
Te.CancelToken = PC;
Te.isCancel = s0;
Te.VERSION = l0;
Te.toFormData = Sa;
Te.AxiosError = Q;
Te.Cancel = Te.CanceledError;
Te.all = function (e) {
  return Promise.all(e);
};
Te.spread = OC;
Te.isAxiosError = LC;
Te.mergeConfig = ti;
Te.AxiosHeaders = Xt;
Te.formToJSON = (t) => i0(x.isHTMLForm(t) ? new FormData(t) : t);
Te.HttpStatusCode = jC;
Te.default = Te;
const MC = Te;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const u0 = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  FC = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          l = t[n++],
          a =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (a >> 10))),
          (e[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  c0 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          l = o ? t[i + 1] : 0,
          a = i + 2 < t.length,
          u = a ? t[i + 2] : 0,
          c = s >> 2,
          h = ((s & 3) << 4) | (l >> 4);
        let f = ((l & 15) << 2) | (u >> 6),
          g = u & 63;
        a || ((g = 64), o || (f = 64)), r.push(n[c], n[h], n[f], n[g]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(u0(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : FC(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          l = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const h = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || h == null))
          throw new UC();
        const f = (s << 2) | (l >> 4);
        if ((r.push(f), u !== 64)) {
          const g = ((l << 4) & 240) | (u >> 2);
          if ((r.push(g), h !== 64)) {
            const v = ((u << 6) & 192) | h;
            r.push(v);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class UC extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const bC = function (t) {
    const e = u0(t);
    return c0.encodeByteArray(e, !0);
  },
  Fl = function (t) {
    return bC(t).replace(/\./g, "");
  },
  BC = function (t) {
    try {
      return c0.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function VC() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zC = () => VC().__FIREBASE_DEFAULTS__,
  HC = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  qC = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && BC(t[1]);
    return e && JSON.parse(e);
  },
  h0 = () => {
    try {
      return zC() || HC() || qC();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  WC = (t) => {
    var e, n;
    return (n =
      (e = h0()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  KC = (t) => {
    const e = WC(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  f0 = () => {
    var t;
    return (t = h0()) === null || t === void 0 ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QC {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function GC(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: s,
        user_id: s,
        firebase: { sign_in_provider: "custom", identities: {} },
      },
      t
    ),
    l = "";
  return [Fl(JSON.stringify(n)), Fl(JSON.stringify(o)), l].join(".");
}
function YC() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function XC() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JC = "FirebaseError";
class vi extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = JC),
      Object.setPrototypeOf(this, vi.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, d0.prototype.create);
  }
}
class d0 {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? ZC(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new vi(i, l, r);
  }
}
function ZC(t, e) {
  return t.replace(eT, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const eT = /\{\$([^}]+)}/g;
function Yc(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (um(s) && um(o)) {
      if (!Yc(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function um(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ni(t) {
  return t && t._delegate ? t._delegate : t;
}
class Is {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tT {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new QC();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (rT(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Gn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = Gn) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Gn) {
    return this.instances.has(e);
  }
  getOptions(e = Gn) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: nT(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Gn) {
    return this.component ? (this.component.multipleInstances ? e : Gn) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nT(t) {
  return t === Gn ? void 0 : t;
}
function rT(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iT {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new tT(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var X;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(X || (X = {}));
const sT = {
    debug: X.DEBUG,
    verbose: X.VERBOSE,
    info: X.INFO,
    warn: X.WARN,
    error: X.ERROR,
    silent: X.SILENT,
  },
  oT = X.INFO,
  lT = {
    [X.DEBUG]: "log",
    [X.VERBOSE]: "log",
    [X.INFO]: "info",
    [X.WARN]: "warn",
    [X.ERROR]: "error",
  },
  aT = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = lT[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class p0 {
  constructor(e) {
    (this.name = e),
      (this._logLevel = oT),
      (this._logHandler = aT),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in X))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? sT[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, X.DEBUG, ...e),
      this._logHandler(this, X.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, X.VERBOSE, ...e),
      this._logHandler(this, X.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, X.INFO, ...e),
      this._logHandler(this, X.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, X.WARN, ...e),
      this._logHandler(this, X.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, X.ERROR, ...e),
      this._logHandler(this, X.ERROR, ...e);
  }
}
const uT = (t, e) => e.some((n) => t instanceof n);
let cm, hm;
function cT() {
  return (
    cm ||
    (cm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function hT() {
  return (
    hm ||
    (hm = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const m0 = new WeakMap(),
  Xc = new WeakMap(),
  g0 = new WeakMap(),
  Ru = new WeakMap(),
  Af = new WeakMap();
function fT(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(An(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && m0.set(n, t);
      })
      .catch(() => {}),
    Af.set(e, t),
    e
  );
}
function dT(t) {
  if (Xc.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  Xc.set(t, e);
}
let Jc = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Xc.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || g0.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return An(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function pT(t) {
  Jc = t(Jc);
}
function mT(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Pu(this), e, ...n);
        return g0.set(r, e.sort ? e.sort() : [e]), An(r);
      }
    : hT().includes(t)
    ? function (...e) {
        return t.apply(Pu(this), e), An(m0.get(this));
      }
    : function (...e) {
        return An(t.apply(Pu(this), e));
      };
}
function gT(t) {
  return typeof t == "function"
    ? mT(t)
    : (t instanceof IDBTransaction && dT(t),
      uT(t, cT()) ? new Proxy(t, Jc) : t);
}
function An(t) {
  if (t instanceof IDBRequest) return fT(t);
  if (Ru.has(t)) return Ru.get(t);
  const e = gT(t);
  return e !== t && (Ru.set(t, e), Af.set(e, t)), e;
}
const Pu = (t) => Af.get(t);
function yT(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    l = An(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (a) => {
        r(An(o.result), a.oldVersion, a.newVersion, An(o.transaction), a);
      }),
    n && o.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener("close", () => s()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    l
  );
}
const vT = ["get", "getKey", "getAll", "getAllKeys", "count"],
  wT = ["put", "add", "delete", "clear"],
  Ou = new Map();
function fm(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Ou.get(e)) return Ou.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = wT.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || vT.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return Ou.set(e, s), s;
}
pT((t) => ({
  ...t,
  get: (e, n, r) => fm(e, n) || t.get(e, n, r),
  has: (e, n) => !!fm(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xT {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (ET(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function ET(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Zc = "@firebase/app",
  dm = "0.9.11";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cr = new p0("@firebase/app"),
  ST = "@firebase/app-compat",
  CT = "@firebase/analytics-compat",
  TT = "@firebase/analytics",
  kT = "@firebase/app-check-compat",
  NT = "@firebase/app-check",
  _T = "@firebase/auth",
  IT = "@firebase/auth-compat",
  $T = "@firebase/database",
  AT = "@firebase/database-compat",
  DT = "@firebase/functions",
  RT = "@firebase/functions-compat",
  PT = "@firebase/installations",
  OT = "@firebase/installations-compat",
  LT = "@firebase/messaging",
  jT = "@firebase/messaging-compat",
  MT = "@firebase/performance",
  FT = "@firebase/performance-compat",
  UT = "@firebase/remote-config",
  bT = "@firebase/remote-config-compat",
  BT = "@firebase/storage",
  VT = "@firebase/storage-compat",
  zT = "@firebase/firestore",
  HT = "@firebase/firestore-compat",
  qT = "firebase",
  WT = "9.22.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eh = "[DEFAULT]",
  KT = {
    [Zc]: "fire-core",
    [ST]: "fire-core-compat",
    [TT]: "fire-analytics",
    [CT]: "fire-analytics-compat",
    [NT]: "fire-app-check",
    [kT]: "fire-app-check-compat",
    [_T]: "fire-auth",
    [IT]: "fire-auth-compat",
    [$T]: "fire-rtdb",
    [AT]: "fire-rtdb-compat",
    [DT]: "fire-fn",
    [RT]: "fire-fn-compat",
    [PT]: "fire-iid",
    [OT]: "fire-iid-compat",
    [LT]: "fire-fcm",
    [jT]: "fire-fcm-compat",
    [MT]: "fire-perf",
    [FT]: "fire-perf-compat",
    [UT]: "fire-rc",
    [bT]: "fire-rc-compat",
    [BT]: "fire-gcs",
    [VT]: "fire-gcs-compat",
    [zT]: "fire-fst",
    [HT]: "fire-fst-compat",
    "fire-js": "fire-js",
    [qT]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ul = new Map(),
  th = new Map();
function QT(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    cr.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function bl(t) {
  const e = t.name;
  if (th.has(e))
    return (
      cr.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  th.set(e, t);
  for (const n of Ul.values()) QT(n, t);
  return !0;
}
function GT(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const YT = {
    ["no-app"]:
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]:
      "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["no-options"]:
      "Need to provide options, when not being deployed to hosting via source.",
    ["invalid-app-argument"]:
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]:
      "First argument to `onLog` must be null or a function.",
    ["idb-open"]:
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-get"]:
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-set"]:
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-delete"]:
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  Dn = new d0("app", "Firebase", YT);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XT {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Is("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Dn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JT = WT;
function y0(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: eh, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Dn.create("bad-app-name", { appName: String(i) });
  if ((n || (n = f0()), !n)) throw Dn.create("no-options");
  const s = Ul.get(i);
  if (s) {
    if (Yc(n, s.options) && Yc(r, s.config)) return s;
    throw Dn.create("duplicate-app", { appName: i });
  }
  const o = new iT(i);
  for (const a of th.values()) o.addComponent(a);
  const l = new XT(n, r, o);
  return Ul.set(i, l), l;
}
function ZT(t = eh) {
  const e = Ul.get(t);
  if (!e && t === eh && f0()) return y0();
  if (!e) throw Dn.create("no-app", { appName: t });
  return e;
}
function zr(t, e, n) {
  var r;
  let i = (r = KT[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && l.push("and"),
      o &&
        l.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      cr.warn(l.join(" "));
    return;
  }
  bl(new Is(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ek = "firebase-heartbeat-database",
  tk = 1,
  $s = "firebase-heartbeat-store";
let Lu = null;
function v0() {
  return (
    Lu ||
      (Lu = yT(ek, tk, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore($s);
          }
        },
      }).catch((t) => {
        throw Dn.create("idb-open", { originalErrorMessage: t.message });
      })),
    Lu
  );
}
async function nk(t) {
  try {
    return await (await v0()).transaction($s).objectStore($s).get(w0(t));
  } catch (e) {
    if (e instanceof vi) cr.warn(e.message);
    else {
      const n = Dn.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      cr.warn(n.message);
    }
  }
}
async function pm(t, e) {
  try {
    const r = (await v0()).transaction($s, "readwrite");
    await r.objectStore($s).put(e, w0(t)), await r.done;
  } catch (n) {
    if (n instanceof vi) cr.warn(n.message);
    else {
      const r = Dn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      cr.warn(r.message);
    }
  }
}
function w0(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rk = 1024,
  ik = 30 * 24 * 60 * 60 * 1e3;
class sk {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new lk(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = mm();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf();
            return Date.now() - s <= ik;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = mm(),
      { heartbeatsToSend: n, unsentEntries: r } = ok(
        this._heartbeatsCache.heartbeats
      ),
      i = Fl(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function mm() {
  return new Date().toISOString().substring(0, 10);
}
function ok(t, e = rk) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), gm(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), gm(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class lk {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return YC()
      ? XC()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await nk(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return pm(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return pm(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function gm(t) {
  return Fl(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ak(t) {
  bl(new Is("platform-logger", (e) => new xT(e), "PRIVATE")),
    bl(new Is("heartbeat", (e) => new sk(e), "PRIVATE")),
    zr(Zc, dm, t),
    zr(Zc, dm, "esm2017"),
    zr("fire-js", "");
}
ak("");
var uk = "firebase",
  ck = "9.22.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ zr(uk, ck, "app");
const hk = {
    apiKey: "AIzaSyC5A2GeyIgaWaapl0adfp77wph7q3w6ds0",
    authDomain: "learnmutiny-60952.firebaseapp.com",
    databaseURL: "https://learnmutiny-60952-default-rtdb.firebaseio.com/",
    projectId: "learnmutiny-60952",
    storageBucket: "learnmutiny-60952.appspot.com",
    messagingSenderId: "554213932048",
    appId: "1:554213932048:web:17ad647356f22fe261de95",
  },
  fk = y0(hk);
var dk =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  _,
  Df = Df || {},
  U = dk || self;
function ka(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function Js(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function pk(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, ju) && t[ju]) || (t[ju] = ++mk)
  );
}
var ju = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  mk = 0;
function gk(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function yk(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), t.apply(e, i);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function He(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (He = gk)
      : (He = yk),
    He.apply(null, arguments)
  );
}
function Lo(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), t.apply(this, r);
  };
}
function Ae(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.$ = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.ac = function (r, i, s) {
      for (
        var o = Array(arguments.length - 2), l = 2;
        l < arguments.length;
        l++
      )
        o[l - 2] = arguments[l];
      return e.prototype[i].apply(r, o);
    });
}
function Vn() {
  (this.s = this.s), (this.o = this.o);
}
var vk = 0;
Vn.prototype.s = !1;
Vn.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), vk != 0) && pk(this);
};
Vn.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const x0 = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function Rf(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let r = 0; r < e; r++) n[r] = t[r];
    return n;
  }
  return [];
}
function ym(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (ka(r)) {
      const i = t.length || 0,
        s = r.length || 0;
      t.length = i + s;
      for (let o = 0; o < s; o++) t[i + o] = r[o];
    } else t.push(r);
  }
}
function qe(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
qe.prototype.h = function () {
  this.defaultPrevented = !0;
};
var wk = (function () {
  if (!U.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    U.addEventListener("test", () => {}, e),
      U.removeEventListener("test", () => {}, e);
  } catch {}
  return t;
})();
function As(t) {
  return /^[\s\xa0]*$/.test(t);
}
function Na() {
  var t = U.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function jt(t) {
  return Na().indexOf(t) != -1;
}
function Pf(t) {
  return Pf[" "](t), t;
}
Pf[" "] = function () {};
function xk(t, e) {
  var n = fN;
  return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t));
}
var Ek = jt("Opera"),
  ri = jt("Trident") || jt("MSIE"),
  E0 = jt("Edge"),
  nh = E0 || ri,
  S0 =
    jt("Gecko") &&
    !(Na().toLowerCase().indexOf("webkit") != -1 && !jt("Edge")) &&
    !(jt("Trident") || jt("MSIE")) &&
    !jt("Edge"),
  Sk = Na().toLowerCase().indexOf("webkit") != -1 && !jt("Edge");
function C0() {
  var t = U.document;
  return t ? t.documentMode : void 0;
}
var rh;
e: {
  var Mu = "",
    Fu = (function () {
      var t = Na();
      if (S0) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (E0) return /Edge\/([\d\.]+)/.exec(t);
      if (ri) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (Sk) return /WebKit\/(\S+)/.exec(t);
      if (Ek) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((Fu && (Mu = Fu ? Fu[1] : ""), ri)) {
    var Uu = C0();
    if (Uu != null && Uu > parseFloat(Mu)) {
      rh = String(Uu);
      break e;
    }
  }
  rh = Mu;
}
var ih;
if (U.document && ri) {
  var vm = C0();
  ih = vm || parseInt(rh, 10) || void 0;
} else ih = void 0;
var Ck = ih;
function Ds(t, e) {
  if (
    (qe.call(this, t ? t.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      r =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.g = e),
      (e = t.relatedTarget))
    ) {
      if (S0) {
        e: {
          try {
            Pf(e.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (e = null);
      }
    } else
      n == "mouseover"
        ? (e = t.fromElement)
        : n == "mouseout" && (e = t.toElement);
    (this.relatedTarget = e),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == "string"
          ? t.pointerType
          : Tk[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && Ds.$.h.call(this);
  }
}
Ae(Ds, qe);
var Tk = { 2: "touch", 3: "pen", 4: "mouse" };
Ds.prototype.h = function () {
  Ds.$.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var Zs = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  kk = 0;
function Nk(t, e, n, r, i) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!r),
    (this.la = i),
    (this.key = ++kk),
    (this.fa = this.ia = !1);
}
function _a(t) {
  (t.fa = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.la = null);
}
function Of(t, e, n) {
  for (const r in t) e.call(n, t[r], r, t);
}
function _k(t, e) {
  for (const n in t) e.call(void 0, t[n], n, t);
}
function T0(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const wm =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function k0(t, e) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) t[n] = r[n];
    for (let s = 0; s < wm.length; s++)
      (n = wm[s]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
}
function Ia(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
Ia.prototype.add = function (t, e, n, r, i) {
  var s = t.toString();
  (t = this.g[s]), t || ((t = this.g[s] = []), this.h++);
  var o = oh(t, e, r, i);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ia = !1))
      : ((e = new Nk(e, this.src, s, !!r, i)), (e.ia = n), t.push(e)),
    e
  );
};
function sh(t, e) {
  var n = e.type;
  if (n in t.g) {
    var r = t.g[n],
      i = x0(r, e),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
      s && (_a(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function oh(t, e, n, r) {
  for (var i = 0; i < t.length; ++i) {
    var s = t[i];
    if (!s.fa && s.listener == e && s.capture == !!n && s.la == r) return i;
  }
  return -1;
}
var Lf = "closure_lm_" + ((1e6 * Math.random()) | 0),
  bu = {};
function N0(t, e, n, r, i) {
  if (r && r.once) return I0(t, e, n, r, i);
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) N0(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Ff(n)),
    t && t[Zs] ? t.O(e, n, Js(r) ? !!r.capture : !!r, i) : _0(t, e, n, !1, r, i)
  );
}
function _0(t, e, n, r, i, s) {
  if (!e) throw Error("Invalid event type");
  var o = Js(i) ? !!i.capture : !!i,
    l = Mf(t);
  if ((l || (t[Lf] = l = new Ia(t)), (n = l.add(e, n, r, o, s)), n.proxy))
    return n;
  if (
    ((r = Ik()),
    (n.proxy = r),
    (r.src = t),
    (r.listener = n),
    t.addEventListener)
  )
    wk || (i = o),
      i === void 0 && (i = !1),
      t.addEventListener(e.toString(), r, i);
  else if (t.attachEvent) t.attachEvent(A0(e.toString()), r);
  else if (t.addListener && t.removeListener) t.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function Ik() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = $k;
  return t;
}
function I0(t, e, n, r, i) {
  if (Array.isArray(e)) {
    for (var s = 0; s < e.length; s++) I0(t, e[s], n, r, i);
    return null;
  }
  return (
    (n = Ff(n)),
    t && t[Zs] ? t.P(e, n, Js(r) ? !!r.capture : !!r, i) : _0(t, e, n, !0, r, i)
  );
}
function $0(t, e, n, r, i) {
  if (Array.isArray(e)) for (var s = 0; s < e.length; s++) $0(t, e[s], n, r, i);
  else
    (r = Js(r) ? !!r.capture : !!r),
      (n = Ff(n)),
      t && t[Zs]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((s = t.g[e]),
            (n = oh(s, n, r, i)),
            -1 < n &&
              (_a(s[n]),
              Array.prototype.splice.call(s, n, 1),
              s.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Mf(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = oh(e, n, r, i)),
          (n = -1 < t ? e[t] : null) && jf(n));
}
function jf(t) {
  if (typeof t != "number" && t && !t.fa) {
    var e = t.src;
    if (e && e[Zs]) sh(e.i, t);
    else {
      var n = t.type,
        r = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, r, t.capture)
        : e.detachEvent
        ? e.detachEvent(A0(n), r)
        : e.addListener && e.removeListener && e.removeListener(r),
        (n = Mf(e))
          ? (sh(n, t), n.h == 0 && ((n.src = null), (e[Lf] = null)))
          : _a(t);
    }
  }
}
function A0(t) {
  return t in bu ? bu[t] : (bu[t] = "on" + t);
}
function $k(t, e) {
  if (t.fa) t = !0;
  else {
    e = new Ds(e, this);
    var n = t.listener,
      r = t.la || t.src;
    t.ia && jf(t), (t = n.call(r, e));
  }
  return t;
}
function Mf(t) {
  return (t = t[Lf]), t instanceof Ia ? t : null;
}
var Bu = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Ff(t) {
  return typeof t == "function"
    ? t
    : (t[Bu] ||
        (t[Bu] = function (e) {
          return t.handleEvent(e);
        }),
      t[Bu]);
}
function $e() {
  Vn.call(this), (this.i = new Ia(this)), (this.S = this), (this.J = null);
}
Ae($e, Vn);
$e.prototype[Zs] = !0;
$e.prototype.removeEventListener = function (t, e, n, r) {
  $0(this, t, e, n, r);
};
function Le(t, e) {
  var n,
    r = t.J;
  if (r) for (n = []; r; r = r.J) n.push(r);
  if (((t = t.S), (r = e.type || e), typeof e == "string")) e = new qe(e, t);
  else if (e instanceof qe) e.target = e.target || t;
  else {
    var i = e;
    (e = new qe(r, t)), k0(e, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (e.g = n[s]);
      i = jo(o, r, !0, e) && i;
    }
  if (
    ((o = e.g = t), (i = jo(o, r, !0, e) && i), (i = jo(o, r, !1, e) && i), n)
  )
    for (s = 0; s < n.length; s++) (o = e.g = n[s]), (i = jo(o, r, !1, e) && i);
}
$e.prototype.N = function () {
  if (($e.$.N.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], r = 0; r < n.length; r++) _a(n[r]);
      delete t.g[e], t.h--;
    }
  }
  this.J = null;
};
$e.prototype.O = function (t, e, n, r) {
  return this.i.add(String(t), e, !1, n, r);
};
$e.prototype.P = function (t, e, n, r) {
  return this.i.add(String(t), e, !0, n, r);
};
function jo(t, e, n, r) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var i = !0, s = 0; s < e.length; ++s) {
    var o = e[s];
    if (o && !o.fa && o.capture == n) {
      var l = o.listener,
        a = o.la || o.src;
      o.ia && sh(t.i, o), (i = l.call(a, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var Uf = U.JSON.stringify;
class Ak {
  constructor(e, n) {
    (this.i = e), (this.j = n), (this.h = 0), (this.g = null);
  }
  get() {
    let e;
    return (
      0 < this.h
        ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
        : (e = this.i()),
      e
    );
  }
}
function Dk() {
  var t = bf;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class Rk {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const r = D0.get();
    r.set(e, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var D0 = new Ak(
  () => new Pk(),
  (t) => t.reset()
);
class Pk {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(e, n) {
    (this.h = e), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function Ok(t) {
  var e = 1;
  t = t.split(":");
  const n = [];
  for (; 0 < e && t.length; ) n.push(t.shift()), e--;
  return t.length && n.push(t.join(":")), n;
}
function Lk(t) {
  U.setTimeout(() => {
    throw t;
  }, 0);
}
let Rs,
  Ps = !1,
  bf = new Rk(),
  R0 = () => {
    const t = U.Promise.resolve(void 0);
    Rs = () => {
      t.then(jk);
    };
  };
var jk = () => {
  for (var t; (t = Dk()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      Lk(n);
    }
    var e = D0;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Ps = !1;
};
function $a(t, e) {
  $e.call(this),
    (this.h = t || 1),
    (this.g = e || U),
    (this.j = He(this.qb, this)),
    (this.l = Date.now());
}
Ae($a, $e);
_ = $a.prototype;
_.ga = !1;
_.T = null;
_.qb = function () {
  if (this.ga) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - t))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        Le(this, "tick"),
        this.ga && (Bf(this), this.start()));
  }
};
_.start = function () {
  (this.ga = !0),
    this.T ||
      ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Bf(t) {
  (t.ga = !1), t.T && (t.g.clearTimeout(t.T), (t.T = null));
}
_.N = function () {
  $a.$.N.call(this), Bf(this), delete this.g;
};
function Vf(t, e, n) {
  if (typeof t == "function") n && (t = He(t, n));
  else if (t && typeof t.handleEvent == "function") t = He(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : U.setTimeout(t, e || 0);
}
function P0(t) {
  t.g = Vf(() => {
    (t.g = null), t.i && ((t.i = !1), P0(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class Mk extends Vn {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : P0(this);
  }
  N() {
    super.N(),
      this.g &&
        (U.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function Os(t) {
  Vn.call(this), (this.h = t), (this.g = {});
}
Ae(Os, Vn);
var xm = [];
function O0(t, e, n, r) {
  Array.isArray(n) || (n && (xm[0] = n.toString()), (n = xm));
  for (var i = 0; i < n.length; i++) {
    var s = N0(e, n[i], r || t.handleEvent, !1, t.h || t);
    if (!s) break;
    t.g[s.key] = s;
  }
}
function L0(t) {
  Of(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && jf(e);
    },
    t
  ),
    (t.g = {});
}
Os.prototype.N = function () {
  Os.$.N.call(this), L0(this);
};
Os.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Aa() {
  this.g = !0;
}
Aa.prototype.Ea = function () {
  this.g = !1;
};
function Fk(t, e, n, r, i, s) {
  t.info(function () {
    if (t.g)
      if (s)
        for (var o = "", l = s.split("&"), a = 0; a < l.length; a++) {
          var u = l[a].split("=");
          if (1 < u.length) {
            var c = u[0];
            u = u[1];
            var h = c.split("_");
            o =
              2 <= h.length && h[1] == "type"
                ? o + (c + "=" + u + "&")
                : o + (c + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function Uk(t, e, n, r, i, s, o) {
  t.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function jr(t, e, n, r) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + Bk(t, n) + (r ? " " + r : "");
  });
}
function bk(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
Aa.prototype.info = function () {};
function Bk(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
    var n = JSON.parse(e);
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var r = n[t];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close")
                for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return Uf(n);
  } catch {
    return e;
  }
}
var yr = {},
  Em = null;
function Da() {
  return (Em = Em || new $e());
}
yr.Ta = "serverreachability";
function j0(t) {
  qe.call(this, yr.Ta, t);
}
Ae(j0, qe);
function Ls(t) {
  const e = Da();
  Le(e, new j0(e));
}
yr.STAT_EVENT = "statevent";
function M0(t, e) {
  qe.call(this, yr.STAT_EVENT, t), (this.stat = e);
}
Ae(M0, qe);
function Ye(t) {
  const e = Da();
  Le(e, new M0(e, t));
}
yr.Ua = "timingevent";
function F0(t, e) {
  qe.call(this, yr.Ua, t), (this.size = e);
}
Ae(F0, qe);
function eo(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return U.setTimeout(function () {
    t();
  }, e);
}
var Ra = {
    NO_ERROR: 0,
    rb: 1,
    Eb: 2,
    Db: 3,
    yb: 4,
    Cb: 5,
    Fb: 6,
    Qa: 7,
    TIMEOUT: 8,
    Ib: 9,
  },
  U0 = {
    wb: "complete",
    Sb: "success",
    Ra: "error",
    Qa: "abort",
    Kb: "ready",
    Lb: "readystatechange",
    TIMEOUT: "timeout",
    Gb: "incrementaldata",
    Jb: "progress",
    zb: "downloadprogress",
    $b: "uploadprogress",
  };
function zf() {}
zf.prototype.h = null;
function Sm(t) {
  return t.h || (t.h = t.i());
}
function b0() {}
var to = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
function Hf() {
  qe.call(this, "d");
}
Ae(Hf, qe);
function qf() {
  qe.call(this, "c");
}
Ae(qf, qe);
var lh;
function Pa() {}
Ae(Pa, zf);
Pa.prototype.g = function () {
  return new XMLHttpRequest();
};
Pa.prototype.i = function () {
  return {};
};
lh = new Pa();
function no(t, e, n, r) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.W = r || 1),
    (this.U = new Os(this)),
    (this.P = Vk),
    (t = nh ? 125 : void 0),
    (this.V = new $a(t)),
    (this.I = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.L = this.G = this.Y = this.B = null),
    (this.F = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new B0());
}
function B0() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var Vk = 45e3,
  ah = {},
  Bl = {};
_ = no.prototype;
_.setTimeout = function (t) {
  this.P = t;
};
function uh(t, e, n) {
  (t.L = 1), (t.v = La(rn(e))), (t.s = n), (t.S = !0), V0(t, null);
}
function V0(t, e) {
  (t.G = Date.now()), ro(t), (t.A = rn(t.v));
  var n = t.A,
    r = t.W;
  Array.isArray(r) || (r = [String(r)]),
    Y0(n.i, "t", r),
    (t.C = 0),
    (n = t.l.J),
    (t.h = new B0()),
    (t.g = y1(t.l, n ? e : null, !t.s)),
    0 < t.O && (t.M = new Mk(He(t.Pa, t, t.g), t.O)),
    O0(t.U, t.g, "readystatechange", t.nb),
    (e = t.I ? T0(t.I) : {}),
    t.s
      ? (t.u || (t.u = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.ha(t.A, t.u, t.s, e))
      : ((t.u = "GET"), t.g.ha(t.A, t.u, null, e)),
    Ls(),
    Fk(t.j, t.u, t.A, t.m, t.W, t.s);
}
_.nb = function (t) {
  t = t.target;
  const e = this.M;
  e && Ft(t) == 3 ? e.l() : this.Pa(t);
};
_.Pa = function (t) {
  try {
    if (t == this.g)
      e: {
        const c = Ft(this.g);
        var e = this.g.Ia();
        const h = this.g.da();
        if (
          !(3 > c) &&
          (c != 3 || nh || (this.g && (this.h.h || this.g.ja() || Nm(this.g))))
        ) {
          this.J || c != 4 || e == 7 || (e == 8 || 0 >= h ? Ls(3) : Ls(2)),
            Oa(this);
          var n = this.g.da();
          this.ca = n;
          t: if (z0(this)) {
            var r = Nm(this.g);
            t = "";
            var i = r.length,
              s = Ft(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Zn(this), rs(this);
                var o = "";
                break t;
              }
              this.h.i = new U.TextDecoder();
            }
            for (e = 0; e < i; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
            r.splice(0, i), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.ja();
          if (
            ((this.i = n == 200),
            Uk(this.j, this.u, this.A, this.m, this.W, c, n),
            this.i)
          ) {
            if (this.aa && !this.K) {
              t: {
                if (this.g) {
                  var l,
                    a = this.g;
                  if (
                    (l = a.g
                      ? a.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !As(l)
                  ) {
                    var u = l;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                jr(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.K = !0),
                  ch(this, n);
              else {
                (this.i = !1), (this.o = 3), Ye(12), Zn(this), rs(this);
                break e;
              }
            }
            this.S
              ? (H0(this, c, o),
                nh &&
                  this.i &&
                  c == 3 &&
                  (O0(this.U, this.V, "tick", this.mb), this.V.start()))
              : (jr(this.j, this.m, o, null), ch(this, o)),
              c == 4 && Zn(this),
              this.i &&
                !this.J &&
                (c == 4 ? d1(this.l, this) : ((this.i = !1), ro(this)));
          } else
            uN(this.g),
              n == 400 && 0 < o.indexOf("Unknown SID")
                ? ((this.o = 3), Ye(12))
                : ((this.o = 0), Ye(13)),
              Zn(this),
              rs(this);
        }
      }
  } catch {
  } finally {
  }
};
function z0(t) {
  return t.g ? t.u == "GET" && t.L != 2 && t.l.Ha : !1;
}
function H0(t, e, n) {
  let r = !0,
    i;
  for (; !t.J && t.C < n.length; )
    if (((i = zk(t, n)), i == Bl)) {
      e == 4 && ((t.o = 4), Ye(14), (r = !1)),
        jr(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (i == ah) {
      (t.o = 4), Ye(15), jr(t.j, t.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else jr(t.j, t.m, i, null), ch(t, i);
  z0(t) && i != Bl && i != ah && ((t.h.g = ""), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), Ye(16), (r = !1)),
    (t.i = t.i && r),
    r
      ? 0 < n.length &&
        !t.ba &&
        ((t.ba = !0),
        (e = t.l),
        e.g == t &&
          e.ca &&
          !e.M &&
          (e.l.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          Xf(e),
          (e.M = !0),
          Ye(11)))
      : (jr(t.j, t.m, n, "[Invalid Chunked Response]"), Zn(t), rs(t));
}
_.mb = function () {
  if (this.g) {
    var t = Ft(this.g),
      e = this.g.ja();
    this.C < e.length &&
      (Oa(this), H0(this, t, e), this.i && t != 4 && ro(this));
  }
};
function zk(t, e) {
  var n = t.C,
    r = e.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Bl
    : ((n = Number(e.substring(n, r))),
      isNaN(n)
        ? ah
        : ((r += 1),
          r + n > e.length ? Bl : ((e = e.slice(r, r + n)), (t.C = r + n), e)));
}
_.cancel = function () {
  (this.J = !0), Zn(this);
};
function ro(t) {
  (t.Y = Date.now() + t.P), q0(t, t.P);
}
function q0(t, e) {
  if (t.B != null) throw Error("WatchDog timer not null");
  t.B = eo(He(t.lb, t), e);
}
function Oa(t) {
  t.B && (U.clearTimeout(t.B), (t.B = null));
}
_.lb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.Y
    ? (bk(this.j, this.A),
      this.L != 2 && (Ls(), Ye(17)),
      Zn(this),
      (this.o = 2),
      rs(this))
    : q0(this, this.Y - t);
};
function rs(t) {
  t.l.H == 0 || t.J || d1(t.l, t);
}
function Zn(t) {
  Oa(t);
  var e = t.M;
  e && typeof e.sa == "function" && e.sa(),
    (t.M = null),
    Bf(t.V),
    L0(t.U),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.sa());
}
function ch(t, e) {
  try {
    var n = t.l;
    if (n.H != 0 && (n.g == t || hh(n.i, t))) {
      if (!t.K && hh(n.i, t) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(e);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.G + 3e3 < t.G) Hl(n), Fa(n);
                else break e;
              Yf(n), Ye(18);
            }
          } else
            (n.Fa = i[1]),
              0 < n.Fa - n.V &&
                37500 > i[2] &&
                n.G &&
                n.A == 0 &&
                !n.v &&
                (n.v = eo(He(n.ib, n), 6e3));
          if (1 >= Z0(n.i) && n.oa) {
            try {
              n.oa();
            } catch {}
            n.oa = void 0;
          }
        } else er(n, 11);
      } else if (((t.K || n.g == t) && Hl(n), !As(e)))
        for (i = n.Ja.g.parse(e), e = 0; e < i.length; e++) {
          let u = i[e];
          if (((n.V = u[0]), (u = u[1]), n.H == 2))
            if (u[0] == "c") {
              (n.K = u[1]), (n.pa = u[2]);
              const c = u[3];
              c != null && ((n.ra = c), n.l.info("VER=" + n.ra));
              const h = u[4];
              h != null && ((n.Ga = h), n.l.info("SVER=" + n.Ga));
              const f = u[5];
              f != null &&
                typeof f == "number" &&
                0 < f &&
                ((r = 1.5 * f),
                (n.L = r),
                n.l.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              const g = t.g;
              if (g) {
                const v = g.g
                  ? g.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (v) {
                  var s = r.i;
                  s.g ||
                    (v.indexOf("spdy") == -1 &&
                      v.indexOf("quic") == -1 &&
                      v.indexOf("h2") == -1) ||
                    ((s.j = s.l),
                    (s.g = new Set()),
                    s.h && (Wf(s, s.h), (s.h = null)));
                }
                if (r.F) {
                  const w = g.g
                    ? g.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  w && ((r.Da = w), ne(r.I, r.F, w));
                }
              }
              (n.H = 3),
                n.h && n.h.Ba(),
                n.ca &&
                  ((n.S = Date.now() - t.G),
                  n.l.info("Handshake RTT: " + n.S + "ms")),
                (r = n);
              var o = t;
              if (((r.wa = g1(r, r.J ? r.pa : null, r.Y)), o.K)) {
                e1(r.i, o);
                var l = o,
                  a = r.L;
                a && l.setTimeout(a), l.B && (Oa(l), ro(l)), (r.g = o);
              } else h1(r);
              0 < n.j.length && Ua(n);
            } else (u[0] != "stop" && u[0] != "close") || er(n, 7);
          else
            n.H == 3 &&
              (u[0] == "stop" || u[0] == "close"
                ? u[0] == "stop"
                  ? er(n, 7)
                  : Gf(n)
                : u[0] != "noop" && n.h && n.h.Aa(u),
              (n.A = 0));
        }
    }
    Ls(4);
  } catch {}
}
function Hk(t) {
  if (t.Z && typeof t.Z == "function") return t.Z();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (ka(t)) {
    for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
    return e;
  }
  (e = []), (n = 0);
  for (r in t) e[n++] = t[r];
  return e;
}
function qk(t) {
  if (t.ta && typeof t.ta == "function") return t.ta();
  if (!t.Z || typeof t.Z != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (ka(t) || typeof t == "string") {
        var e = [];
        t = t.length;
        for (var n = 0; n < t; n++) e.push(n);
        return e;
      }
      (e = []), (n = 0);
      for (const r in t) e[n++] = r;
      return e;
    }
  }
}
function W0(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (ka(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = qk(t), r = Hk(t), i = r.length, s = 0; s < i; s++)
      e.call(void 0, r[s], n && n[s], t);
}
var K0 = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Wk(t, e) {
  if (t) {
    t = t.split("&");
    for (var n = 0; n < t.length; n++) {
      var r = t[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = t[n].substring(0, r);
        i = t[n].substring(r + 1);
      } else s = t[n];
      e(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function ir(t) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof ir)
  ) {
    (this.h = t.h),
      Vl(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      zl(this, t.m),
      (this.l = t.l);
    var e = t.i,
      n = new js();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      Cm(this, n),
      (this.o = t.o);
  } else
    t && (e = String(t).match(K0))
      ? ((this.h = !1),
        Vl(this, e[1] || "", !0),
        (this.s = zi(e[2] || "")),
        (this.g = zi(e[3] || "", !0)),
        zl(this, e[4]),
        (this.l = zi(e[5] || "", !0)),
        Cm(this, e[6] || "", !0),
        (this.o = zi(e[7] || "")))
      : ((this.h = !1), (this.i = new js(null, this.h)));
}
ir.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(Hi(e, Tm, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(Hi(e, Tm, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(Hi(n, n.charAt(0) == "/" ? Gk : Qk, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", Hi(n, Xk)),
    t.join("")
  );
};
function rn(t) {
  return new ir(t);
}
function Vl(t, e, n) {
  (t.j = n ? zi(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function zl(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function Cm(t, e, n) {
  e instanceof js
    ? ((t.i = e), Jk(t.i, t.h))
    : (n || (e = Hi(e, Yk)), (t.i = new js(e, t.h)));
}
function ne(t, e, n) {
  t.i.set(e, n);
}
function La(t) {
  return (
    ne(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    t
  );
}
function zi(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function Hi(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, Kk)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function Kk(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var Tm = /[#\/\?@]/g,
  Qk = /[#\?:]/g,
  Gk = /[#\?]/g,
  Yk = /[#\?@]/g,
  Xk = /#/g;
function js(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function zn(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      Wk(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
_ = js.prototype;
_.add = function (t, e) {
  zn(this), (this.i = null), (t = wi(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Q0(t, e) {
  zn(t),
    (e = wi(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function G0(t, e) {
  return zn(t), (e = wi(t, e)), t.g.has(e);
}
_.forEach = function (t, e) {
  zn(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        t.call(e, i, r, this);
      }, this);
    }, this);
};
_.ta = function () {
  zn(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t[r];
    for (let s = 0; s < i.length; s++) n.push(e[r]);
  }
  return n;
};
_.Z = function (t) {
  zn(this);
  let e = [];
  if (typeof t == "string")
    G0(this, t) && (e = e.concat(this.g.get(wi(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
_.set = function (t, e) {
  return (
    zn(this),
    (this.i = null),
    (t = wi(this, t)),
    G0(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
_.get = function (t, e) {
  return t ? ((t = this.Z(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function Y0(t, e, n) {
  Q0(t, e),
    0 < n.length && ((t.i = null), t.g.set(wi(t, e), Rf(n)), (t.h += n.length));
}
_.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const t = [],
    e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    const s = encodeURIComponent(String(r)),
      o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), t.push(i);
    }
  }
  return (this.i = t.join("&"));
};
function wi(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function Jk(t, e) {
  e &&
    !t.j &&
    (zn(t),
    (t.i = null),
    t.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Q0(this, r), Y0(this, i, n));
    }, t)),
    (t.j = e);
}
var Zk = class {
  constructor(t, e) {
    (this.g = t), (this.map = e);
  }
};
function X0(t) {
  (this.l = t || eN),
    U.PerformanceNavigationTiming
      ? ((t = U.performance.getEntriesByType("navigation")),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")))
      : (t = !!(U.g && U.g.Ka && U.g.Ka() && U.g.Ka().ec)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var eN = 10;
function J0(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function Z0(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function hh(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Wf(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function e1(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
X0.prototype.cancel = function () {
  if (((this.i = t1(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function t1(t) {
  if (t.h != null) return t.i.concat(t.h.F);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.F);
    return e;
  }
  return Rf(t.i);
}
var tN = class {
  stringify(t) {
    return U.JSON.stringify(t, void 0);
  }
  parse(t) {
    return U.JSON.parse(t, void 0);
  }
};
function nN() {
  this.g = new tN();
}
function rN(t, e, n) {
  const r = n || "";
  try {
    W0(t, function (i, s) {
      let o = i;
      Js(i) && (o = Uf(i)), e.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (e.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function iN(t, e) {
  const n = new Aa();
  if (U.Image) {
    const r = new Image();
    (r.onload = Lo(Mo, n, r, "TestLoadImage: loaded", !0, e)),
      (r.onerror = Lo(Mo, n, r, "TestLoadImage: error", !1, e)),
      (r.onabort = Lo(Mo, n, r, "TestLoadImage: abort", !1, e)),
      (r.ontimeout = Lo(Mo, n, r, "TestLoadImage: timeout", !1, e)),
      U.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = t);
  } else e(!1);
}
function Mo(t, e, n, r, i) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      i(r);
  } catch {}
}
function io(t) {
  (this.l = t.fc || null), (this.j = t.ob || !1);
}
Ae(io, zf);
io.prototype.g = function () {
  return new ja(this.l, this.j);
};
io.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function ja(t, e) {
  $e.call(this),
    (this.F = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Kf),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
Ae(ja, $e);
var Kf = 0;
_ = ja.prototype;
_.open = function (t, e) {
  if (this.readyState != Kf)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), Ms(this);
};
_.send = function (t) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const e = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  t && (e.body = t),
    (this.F || U)
      .fetch(new Request(this.B, e))
      .then(this.$a.bind(this), this.ka.bind(this));
};
_.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), so(this)),
    (this.readyState = Kf);
};
_.$a = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      Ms(this)),
    this.g && ((this.readyState = 3), Ms(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      t.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof U.ReadableStream < "u" && "body" in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      n1(this);
    } else t.text().then(this.Za.bind(this), this.ka.bind(this));
};
function n1(t) {
  t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t));
}
_.Xa = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? so(this) : Ms(this), this.readyState == 3 && n1(this);
  }
};
_.Za = function (t) {
  this.g && ((this.response = this.responseText = t), so(this));
};
_.Ya = function (t) {
  this.g && ((this.response = t), so(this));
};
_.ka = function () {
  this.g && so(this);
};
function so(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Ms(t);
}
_.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
_.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
_.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function Ms(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(ja.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var sN = U.JSON.parse;
function de(t) {
  $e.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = r1),
    (this.L = this.M = !1);
}
Ae(de, $e);
var r1 = "",
  oN = /^https?$/i,
  lN = ["POST", "PUT"];
_ = de.prototype;
_.Oa = function (t) {
  this.M = t;
};
_.ha = function (t, e, n, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.I +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.I = t),
    (this.j = ""),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : lh.g()),
    (this.C = this.u ? Sm(this.u) : Sm(lh)),
    (this.g.onreadystatechange = He(this.La, this));
  try {
    (this.G = !0), this.g.open(e, String(t), !0), (this.G = !1);
  } catch (s) {
    km(this, s);
    return;
  }
  if (((t = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = U.FormData && t instanceof U.FormData),
    !(0 <= x0(lN, e)) ||
      r ||
      i ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.M &&
      (this.g.withCredentials = this.M);
  try {
    o1(this),
      0 < this.B &&
        ((this.L = aN(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = He(this.ua, this)))
          : (this.A = Vf(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (s) {
    km(this, s);
  }
};
function aN(t) {
  return ri && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
_.ua = function () {
  typeof Df < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    Le(this, "timeout"),
    this.abort(8));
};
function km(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    i1(t),
    Ma(t);
}
function i1(t) {
  t.F || ((t.F = !0), Le(t, "complete"), Le(t, "error"));
}
_.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    Le(this, "complete"),
    Le(this, "abort"),
    Ma(this));
};
_.N = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Ma(this, !0)),
    de.$.N.call(this);
};
_.La = function () {
  this.s || (this.G || this.v || this.l ? s1(this) : this.kb());
};
_.kb = function () {
  s1(this);
};
function s1(t) {
  if (t.h && typeof Df < "u" && (!t.C[1] || Ft(t) != 4 || t.da() != 2)) {
    if (t.v && Ft(t) == 4) Vf(t.La, 0, t);
    else if ((Le(t, "readystatechange"), Ft(t) == 4)) {
      t.h = !1;
      try {
        const o = t.da();
        e: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0;
            break e;
          default:
            e = !1;
        }
        var n;
        if (!(n = e)) {
          var r;
          if ((r = o === 0)) {
            var i = String(t.I).match(K0)[1] || null;
            !i &&
              U.self &&
              U.self.location &&
              (i = U.self.location.protocol.slice(0, -1)),
              (r = !oN.test(i ? i.toLowerCase() : ""));
          }
          n = r;
        }
        if (n) Le(t, "complete"), Le(t, "success");
        else {
          t.m = 6;
          try {
            var s = 2 < Ft(t) ? t.g.statusText : "";
          } catch {
            s = "";
          }
          (t.j = s + " [" + t.da() + "]"), i1(t);
        }
      } finally {
        Ma(t);
      }
    }
  }
}
function Ma(t, e) {
  if (t.g) {
    o1(t);
    const n = t.g,
      r = t.C[0] ? () => {} : null;
    (t.g = null), (t.C = null), e || Le(t, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function o1(t) {
  t.g && t.L && (t.g.ontimeout = null),
    t.A && (U.clearTimeout(t.A), (t.A = null));
}
_.isActive = function () {
  return !!this.g;
};
function Ft(t) {
  return t.g ? t.g.readyState : 0;
}
_.da = function () {
  try {
    return 2 < Ft(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
_.ja = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
_.Wa = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), sN(e);
  }
};
function Nm(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.K) {
      case r1:
      case "text":
        return t.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function uN(t) {
  const e = {};
  t = ((t.g && 2 <= Ft(t) && t.g.getAllResponseHeaders()) || "").split(`\r
`);
  for (let r = 0; r < t.length; r++) {
    if (As(t[r])) continue;
    var n = Ok(t[r]);
    const i = n[0];
    if (((n = n[1]), typeof n != "string")) continue;
    n = n.trim();
    const s = e[i] || [];
    (e[i] = s), s.push(n);
  }
  _k(e, function (r) {
    return r.join(", ");
  });
}
_.Ia = function () {
  return this.m;
};
_.Sa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function l1(t) {
  let e = "";
  return (
    Of(t, function (n, r) {
      (e += r),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function Qf(t, e, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r ||
    ((n = l1(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : ne(t, e, n));
}
function Mi(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function a1(t) {
  (this.Ga = 0),
    (this.j = []),
    (this.l = new Aa()),
    (this.pa =
      this.wa =
      this.I =
      this.Y =
      this.g =
      this.Da =
      this.F =
      this.na =
      this.o =
      this.U =
      this.s =
        null),
    (this.fb = this.W = 0),
    (this.cb = Mi("failFast", !1, t)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = Mi("baseRetryDelayMs", 5e3, t)),
    (this.hb = Mi("retryDelaySeedMs", 1e4, t)),
    (this.eb = Mi("forwardChannelMaxRetries", 2, t)),
    (this.xa = Mi("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.va = (t && t.xmlHttpFactory) || void 0),
    (this.Ha = (t && t.dc) || !1),
    (this.L = void 0),
    (this.J = (t && t.supportsCrossDomainXhr) || !1),
    (this.K = ""),
    (this.i = new X0(t && t.concurrentRequestLimit)),
    (this.Ja = new nN()),
    (this.P = (t && t.fastHandshake) || !1),
    (this.O = (t && t.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (t && t.bc) || !1),
    t && t.Ea && this.l.Ea(),
    t && t.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && t && t.detectBufferingProxy) || !1),
    (this.qa = void 0),
    t &&
      t.longPollingTimeout &&
      0 < t.longPollingTimeout &&
      (this.qa = t.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null);
}
_ = a1.prototype;
_.ra = 8;
_.H = 1;
function Gf(t) {
  if ((u1(t), t.H == 3)) {
    var e = t.W++,
      n = rn(t.I);
    if (
      (ne(n, "SID", t.K),
      ne(n, "RID", e),
      ne(n, "TYPE", "terminate"),
      oo(t, n),
      (e = new no(t, t.l, e)),
      (e.L = 2),
      (e.v = La(rn(n))),
      (n = !1),
      U.navigator && U.navigator.sendBeacon)
    )
      try {
        n = U.navigator.sendBeacon(e.v.toString(), "");
      } catch {}
    !n && U.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = y1(e.l, null)), e.g.ha(e.v)),
      (e.G = Date.now()),
      ro(e);
  }
  m1(t);
}
function Fa(t) {
  t.g && (Xf(t), t.g.cancel(), (t.g = null));
}
function u1(t) {
  Fa(t),
    t.u && (U.clearTimeout(t.u), (t.u = null)),
    Hl(t),
    t.i.cancel(),
    t.m && (typeof t.m == "number" && U.clearTimeout(t.m), (t.m = null));
}
function Ua(t) {
  if (!J0(t.i) && !t.m) {
    t.m = !0;
    var e = t.Na;
    Rs || R0(), Ps || (Rs(), (Ps = !0)), bf.add(e, t), (t.C = 0);
  }
}
function cN(t, e) {
  return Z0(t.i) >= t.i.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.j = e.F.concat(t.j)), !0)
    : t.H == 1 || t.H == 2 || t.C >= (t.cb ? 0 : t.eb)
    ? !1
    : ((t.m = eo(He(t.Na, t, e), p1(t, t.C))), t.C++, !0);
}
_.Na = function (t) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!t) {
        (this.W = Math.floor(1e5 * Math.random())), (t = this.W++);
        const i = new no(this, this.l, t);
        let s = this.s;
        if (
          (this.U && (s ? ((s = T0(s)), k0(s, this.U)) : (s = this.U)),
          this.o !== null || this.O || ((i.I = s), (s = null)),
          this.P)
        )
          e: {
            for (var e = 0, n = 0; n < this.j.length; n++) {
              t: {
                var r = this.j[n];
                if (
                  "__data__" in r.map &&
                  ((r = r.map.__data__), typeof r == "string")
                ) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((e += r), 4096 < e)) {
                e = n;
                break e;
              }
              if (e === 4096 || n === this.j.length - 1) {
                e = n + 1;
                break e;
              }
            }
            e = 1e3;
          }
        else e = 1e3;
        (e = c1(this, i, e)),
          (n = rn(this.I)),
          ne(n, "RID", t),
          ne(n, "CVER", 22),
          this.F && ne(n, "X-HTTP-Session-Id", this.F),
          oo(this, n),
          s &&
            (this.O
              ? (e = "headers=" + encodeURIComponent(String(l1(s))) + "&" + e)
              : this.o && Qf(n, this.o, s)),
          Wf(this.i, i),
          this.bb && ne(n, "TYPE", "init"),
          this.P
            ? (ne(n, "$req", e),
              ne(n, "SID", "null"),
              (i.aa = !0),
              uh(i, n, null))
            : uh(i, n, e),
          (this.H = 2);
      }
    } else
      this.H == 3 &&
        (t ? _m(this, t) : this.j.length == 0 || J0(this.i) || _m(this));
};
function _m(t, e) {
  var n;
  e ? (n = e.m) : (n = t.W++);
  const r = rn(t.I);
  ne(r, "SID", t.K),
    ne(r, "RID", n),
    ne(r, "AID", t.V),
    oo(t, r),
    t.o && t.s && Qf(r, t.o, t.s),
    (n = new no(t, t.l, n, t.C + 1)),
    t.o === null && (n.I = t.s),
    e && (t.j = e.F.concat(t.j)),
    (e = c1(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.xa) + Math.round(0.5 * t.xa * Math.random())
    ),
    Wf(t.i, n),
    uh(n, r, e);
}
function oo(t, e) {
  t.na &&
    Of(t.na, function (n, r) {
      ne(e, r, n);
    }),
    t.h &&
      W0({}, function (n, r) {
        ne(e, r, n);
      });
}
function c1(t, e, n) {
  n = Math.min(t.j.length, n);
  var r = t.h ? He(t.h.Va, t.h, t) : null;
  e: {
    var i = t.j;
    let s = -1;
    for (;;) {
      const o = ["count=" + n];
      s == -1
        ? 0 < n
          ? ((s = i[0].g), o.push("ofs=" + s))
          : (s = 0)
        : o.push("ofs=" + s);
      let l = !0;
      for (let a = 0; a < n; a++) {
        let u = i[a].g;
        const c = i[a].map;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[a].g - 100)), (l = !1);
        else
          try {
            rN(c, o, "req" + u + "_");
          } catch {
            r && r(c);
          }
      }
      if (l) {
        r = o.join("&");
        break e;
      }
    }
  }
  return (t = t.j.splice(0, n)), (e.F = t), r;
}
function h1(t) {
  if (!t.g && !t.u) {
    t.ba = 1;
    var e = t.Ma;
    Rs || R0(), Ps || (Rs(), (Ps = !0)), bf.add(e, t), (t.A = 0);
  }
}
function Yf(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.ba++, (t.u = eo(He(t.Ma, t), p1(t, t.A))), t.A++, !0);
}
_.Ma = function () {
  if (
    ((this.u = null),
    f1(this),
    this.ca && !(this.M || this.g == null || 0 >= this.S))
  ) {
    var t = 2 * this.S;
    this.l.info("BP detection timer enabled: " + t),
      (this.B = eo(He(this.jb, this), t));
  }
};
_.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info("BP detection timeout reached."),
    this.l.info("Buffering proxy detected and switch to long-polling!"),
    (this.G = !1),
    (this.M = !0),
    Ye(10),
    Fa(this),
    f1(this));
};
function Xf(t) {
  t.B != null && (U.clearTimeout(t.B), (t.B = null));
}
function f1(t) {
  (t.g = new no(t, t.l, "rpc", t.ba)),
    t.o === null && (t.g.I = t.s),
    (t.g.O = 0);
  var e = rn(t.wa);
  ne(e, "RID", "rpc"),
    ne(e, "SID", t.K),
    ne(e, "AID", t.V),
    ne(e, "CI", t.G ? "0" : "1"),
    !t.G && t.qa && ne(e, "TO", t.qa),
    ne(e, "TYPE", "xmlhttp"),
    oo(t, e),
    t.o && t.s && Qf(e, t.o, t.s),
    t.L && t.g.setTimeout(t.L);
  var n = t.g;
  (t = t.pa), (n.L = 1), (n.v = La(rn(e))), (n.s = null), (n.S = !0), V0(n, t);
}
_.ib = function () {
  this.v != null && ((this.v = null), Fa(this), Yf(this), Ye(19));
};
function Hl(t) {
  t.v != null && (U.clearTimeout(t.v), (t.v = null));
}
function d1(t, e) {
  var n = null;
  if (t.g == e) {
    Hl(t), Xf(t), (t.g = null);
    var r = 2;
  } else if (hh(t.i, e)) (n = e.F), e1(t.i, e), (r = 1);
  else return;
  if (t.H != 0) {
    if (e.i)
      if (r == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.G);
        var i = t.C;
        (r = Da()), Le(r, new F0(r, n)), Ua(t);
      } else h1(t);
    else if (
      ((i = e.o),
      i == 3 ||
        (i == 0 && 0 < e.ca) ||
        !((r == 1 && cN(t, e)) || (r == 2 && Yf(t))))
    )
      switch ((n && 0 < n.length && ((e = t.i), (e.i = e.i.concat(n))), i)) {
        case 1:
          er(t, 5);
          break;
        case 4:
          er(t, 10);
          break;
        case 3:
          er(t, 6);
          break;
        default:
          er(t, 2);
      }
  }
}
function p1(t, e) {
  let n = t.ab + Math.floor(Math.random() * t.hb);
  return t.isActive() || (n *= 2), n * e;
}
function er(t, e) {
  if ((t.l.info("Error code " + e), e == 2)) {
    var n = null;
    t.h && (n = null);
    var r = He(t.pb, t);
    n ||
      ((n = new ir("//www.google.com/images/cleardot.gif")),
      (U.location && U.location.protocol == "http") || Vl(n, "https"),
      La(n)),
      iN(n.toString(), r);
  } else Ye(2);
  (t.H = 0), t.h && t.h.za(e), m1(t), u1(t);
}
_.pb = function (t) {
  t
    ? (this.l.info("Successfully pinged google.com"), Ye(2))
    : (this.l.info("Failed to ping google.com"), Ye(1));
};
function m1(t) {
  if (((t.H = 0), (t.ma = []), t.h)) {
    const e = t1(t.i);
    (e.length != 0 || t.j.length != 0) &&
      (ym(t.ma, e),
      ym(t.ma, t.j),
      (t.i.i.length = 0),
      Rf(t.j),
      (t.j.length = 0)),
      t.h.ya();
  }
}
function g1(t, e, n) {
  var r = n instanceof ir ? rn(n) : new ir(n);
  if (r.g != "") e && (r.g = e + "." + r.g), zl(r, r.m);
  else {
    var i = U.location;
    (r = i.protocol),
      (e = e ? e + "." + i.hostname : i.hostname),
      (i = +i.port);
    var s = new ir(null);
    r && Vl(s, r), e && (s.g = e), i && zl(s, i), n && (s.l = n), (r = s);
  }
  return (
    (n = t.F),
    (e = t.Da),
    n && e && ne(r, n, e),
    ne(r, "VER", t.ra),
    oo(t, r),
    r
  );
}
function y1(t, e, n) {
  if (e && !t.J)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = n && t.Ha && !t.va ? new de(new io({ ob: !0 })) : new de(t.va)),
    e.Oa(t.J),
    e
  );
}
_.isActive = function () {
  return !!this.h && this.h.isActive(this);
};
function v1() {}
_ = v1.prototype;
_.Ba = function () {};
_.Aa = function () {};
_.za = function () {};
_.ya = function () {};
_.isActive = function () {
  return !0;
};
_.Va = function () {};
function ql() {
  if (ri && !(10 <= Number(Ck)))
    throw Error("Environmental error: no available transport.");
}
ql.prototype.g = function (t, e) {
  return new ut(t, e);
};
function ut(t, e) {
  $e.call(this),
    (this.g = new a1(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.Ca &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.Ca)
        : (t = { "X-WebChannel-Client-Profile": e.Ca })),
    (this.g.U = t),
    (t = e && e.cc) && !As(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !As(e) &&
      ((this.g.F = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new xi(this));
}
Ae(ut, $e);
ut.prototype.m = function () {
  (this.g.h = this.j), this.A && (this.g.J = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  Ye(0),
    (t.Y = e),
    (t.na = n || {}),
    (t.G = t.aa),
    (t.I = g1(t, null, t.Y)),
    Ua(t);
};
ut.prototype.close = function () {
  Gf(this.g);
};
ut.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Uf(t)), (t = n));
  e.j.push(new Zk(e.fb++, t)), e.H == 3 && Ua(e);
};
ut.prototype.N = function () {
  (this.g.h = null),
    delete this.j,
    Gf(this.g),
    delete this.g,
    ut.$.N.call(this);
};
function w1(t) {
  Hf.call(this),
    t.__headers__ &&
      ((this.headers = t.__headers__),
      (this.statusCode = t.__status__),
      delete t.__headers__,
      delete t.__status__);
  var e = t.__sm__;
  if (e) {
    e: {
      for (const n in e) {
        t = n;
        break e;
      }
      t = void 0;
    }
    (this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)),
      (this.data = e);
  } else this.data = t;
}
Ae(w1, Hf);
function x1() {
  qf.call(this), (this.status = 1);
}
Ae(x1, qf);
function xi(t) {
  this.g = t;
}
Ae(xi, v1);
xi.prototype.Ba = function () {
  Le(this.g, "a");
};
xi.prototype.Aa = function (t) {
  Le(this.g, new w1(t));
};
xi.prototype.za = function (t) {
  Le(this.g, new x1());
};
xi.prototype.ya = function () {
  Le(this.g, "b");
};
function hN() {
  this.blockSize = -1;
}
function Dt() {
  (this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset();
}
Ae(Dt, hN);
Dt.prototype.reset = function () {
  (this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0);
};
function Vu(t, e, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof e == "string")
    for (var i = 0; 16 > i; ++i)
      r[i] =
        e.charCodeAt(n++) |
        (e.charCodeAt(n++) << 8) |
        (e.charCodeAt(n++) << 16) |
        (e.charCodeAt(n++) << 24);
  else
    for (i = 0; 16 > i; ++i)
      r[i] = e[n++] | (e[n++] << 8) | (e[n++] << 16) | (e[n++] << 24);
  (e = t.g[0]), (n = t.g[1]), (i = t.g[2]);
  var s = t.g[3],
    o = (e + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295;
  (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[1] + 3905402710) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[2] + 606105819) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[3] + 3250441966) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[4] + 4118548399) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[5] + 1200080426) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[6] + 2821735955) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[7] + 4249261313) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[8] + 1770035416) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[9] + 2336552879) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[10] + 4294925233) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[11] + 2304563134) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (s ^ (n & (i ^ s))) + r[12] + 1804603682) & 4294967295),
    (e = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (e & (n ^ i))) + r[13] + 4254626195) & 4294967295),
    (s = e + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (e ^ n))) + r[14] + 2792965006) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (e ^ (i & (s ^ e))) + r[15] + 1236535329) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (e + (i ^ (s & (n ^ i))) + r[1] + 4129170786) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[6] + 3225465664) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[11] + 643717713) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[0] + 3921069994) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[5] + 3593408605) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[10] + 38016083) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[15] + 3634488961) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[4] + 3889429448) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[9] + 568446438) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[14] + 3275163606) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[3] + 4107603335) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[8] + 1163531501) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (i ^ (s & (n ^ i))) + r[13] + 2850285829) & 4294967295),
    (e = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (e ^ n))) + r[2] + 4243563512) & 4294967295),
    (s = e + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (e ^ (n & (s ^ e))) + r[7] + 1735328473) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (e & (i ^ s))) + r[12] + 2368359562) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (e + (n ^ i ^ s) + r[5] + 4294588738) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[8] + 2272392833) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[11] + 1839030562) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[14] + 4259657740) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[1] + 2763975236) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[4] + 1272893353) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[7] + 4139469664) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[10] + 3200236656) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[13] + 681279174) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[0] + 3936430074) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[3] + 3572445317) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[6] + 76029189) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (n ^ i ^ s) + r[9] + 3654602809) & 4294967295),
    (e = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (e ^ n ^ i) + r[12] + 3873151461) & 4294967295),
    (s = e + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ e ^ n) + r[15] + 530742520) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ e) + r[2] + 3299628645) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (e + (i ^ (n | ~s)) + r[0] + 4096336452) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[7] + 1126891415) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[14] + 2878612391) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[5] + 4237533241) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[12] + 1700485571) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[3] + 2399980690) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[10] + 4293915773) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[1] + 2240044497) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[8] + 1873313359) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[15] + 4264355552) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[6] + 2734768916) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[13] + 1309151649) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (e + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295),
    (e = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (e | ~i)) + r[11] + 3174756917) & 4294967295),
    (s = e + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (e ^ (s | ~n)) + r[2] + 718787259) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~e)) + r[9] + 3951481745) & 4294967295),
    (t.g[0] = (t.g[0] + e) & 4294967295),
    (t.g[1] =
      (t.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (t.g[2] = (t.g[2] + i) & 4294967295),
    (t.g[3] = (t.g[3] + s) & 4294967295);
}
Dt.prototype.j = function (t, e) {
  e === void 0 && (e = t.length);
  for (var n = e - this.blockSize, r = this.m, i = this.h, s = 0; s < e; ) {
    if (i == 0) for (; s <= n; ) Vu(this, t, s), (s += this.blockSize);
    if (typeof t == "string") {
      for (; s < e; )
        if (((r[i++] = t.charCodeAt(s++)), i == this.blockSize)) {
          Vu(this, r), (i = 0);
          break;
        }
    } else
      for (; s < e; )
        if (((r[i++] = t[s++]), i == this.blockSize)) {
          Vu(this, r), (i = 0);
          break;
        }
  }
  (this.h = i), (this.i += e);
};
Dt.prototype.l = function () {
  var t = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  t[0] = 128;
  for (var e = 1; e < t.length - 8; ++e) t[e] = 0;
  var n = 8 * this.i;
  for (e = t.length - 8; e < t.length; ++e) (t[e] = n & 255), (n /= 256);
  for (this.j(t), t = Array(16), e = n = 0; 4 > e; ++e)
    for (var r = 0; 32 > r; r += 8) t[n++] = (this.g[e] >>> r) & 255;
  return t;
};
function Z(t, e) {
  this.h = e;
  for (var n = [], r = !0, i = t.length - 1; 0 <= i; i--) {
    var s = t[i] | 0;
    (r && s == e) || ((n[i] = s), (r = !1));
  }
  this.g = n;
}
var fN = {};
function Jf(t) {
  return -128 <= t && 128 > t
    ? xk(t, function (e) {
        return new Z([e | 0], 0 > e ? -1 : 0);
      })
    : new Z([t | 0], 0 > t ? -1 : 0);
}
function Ut(t) {
  if (isNaN(t) || !isFinite(t)) return Hr;
  if (0 > t) return Pe(Ut(-t));
  for (var e = [], n = 1, r = 0; t >= n; r++) (e[r] = (t / n) | 0), (n *= fh);
  return new Z(e, 0);
}
function E1(t, e) {
  if (t.length == 0) throw Error("number format error: empty string");
  if (((e = e || 10), 2 > e || 36 < e)) throw Error("radix out of range: " + e);
  if (t.charAt(0) == "-") return Pe(E1(t.substring(1), e));
  if (0 <= t.indexOf("-"))
    throw Error('number format error: interior "-" character');
  for (var n = Ut(Math.pow(e, 8)), r = Hr, i = 0; i < t.length; i += 8) {
    var s = Math.min(8, t.length - i),
      o = parseInt(t.substring(i, i + s), e);
    8 > s
      ? ((s = Ut(Math.pow(e, s))), (r = r.R(s).add(Ut(o))))
      : ((r = r.R(n)), (r = r.add(Ut(o))));
  }
  return r;
}
var fh = 4294967296,
  Hr = Jf(0),
  dh = Jf(1),
  Im = Jf(16777216);
_ = Z.prototype;
_.ea = function () {
  if (pt(this)) return -Pe(this).ea();
  for (var t = 0, e = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n);
    (t += (0 <= r ? r : fh + r) * e), (e *= fh);
  }
  return t;
};
_.toString = function (t) {
  if (((t = t || 10), 2 > t || 36 < t)) throw Error("radix out of range: " + t);
  if (Gt(this)) return "0";
  if (pt(this)) return "-" + Pe(this).toString(t);
  for (var e = Ut(Math.pow(t, 6)), n = this, r = ""; ; ) {
    var i = Kl(n, e).g;
    n = Wl(n, i.R(e));
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(t);
    if (((n = i), Gt(n))) return s + r;
    for (; 6 > s.length; ) s = "0" + s;
    r = s + r;
  }
};
_.D = function (t) {
  return 0 > t ? 0 : t < this.g.length ? this.g[t] : this.h;
};
function Gt(t) {
  if (t.h != 0) return !1;
  for (var e = 0; e < t.g.length; e++) if (t.g[e] != 0) return !1;
  return !0;
}
function pt(t) {
  return t.h == -1;
}
_.X = function (t) {
  return (t = Wl(this, t)), pt(t) ? -1 : Gt(t) ? 0 : 1;
};
function Pe(t) {
  for (var e = t.g.length, n = [], r = 0; r < e; r++) n[r] = ~t.g[r];
  return new Z(n, ~t.h).add(dh);
}
_.abs = function () {
  return pt(this) ? Pe(this) : this;
};
_.add = function (t) {
  for (
    var e = Math.max(this.g.length, t.g.length), n = [], r = 0, i = 0;
    i <= e;
    i++
  ) {
    var s = r + (this.D(i) & 65535) + (t.D(i) & 65535),
      o = (s >>> 16) + (this.D(i) >>> 16) + (t.D(i) >>> 16);
    (r = o >>> 16), (s &= 65535), (o &= 65535), (n[i] = (o << 16) | s);
  }
  return new Z(n, n[n.length - 1] & -2147483648 ? -1 : 0);
};
function Wl(t, e) {
  return t.add(Pe(e));
}
_.R = function (t) {
  if (Gt(this) || Gt(t)) return Hr;
  if (pt(this)) return pt(t) ? Pe(this).R(Pe(t)) : Pe(Pe(this).R(t));
  if (pt(t)) return Pe(this.R(Pe(t)));
  if (0 > this.X(Im) && 0 > t.X(Im)) return Ut(this.ea() * t.ea());
  for (var e = this.g.length + t.g.length, n = [], r = 0; r < 2 * e; r++)
    n[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < t.g.length; i++) {
      var s = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        l = t.D(i) >>> 16,
        a = t.D(i) & 65535;
      (n[2 * r + 2 * i] += o * a),
        Fo(n, 2 * r + 2 * i),
        (n[2 * r + 2 * i + 1] += s * a),
        Fo(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 1] += o * l),
        Fo(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 2] += s * l),
        Fo(n, 2 * r + 2 * i + 2);
    }
  for (r = 0; r < e; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r];
  for (r = e; r < 2 * e; r++) n[r] = 0;
  return new Z(n, 0);
};
function Fo(t, e) {
  for (; (t[e] & 65535) != t[e]; )
    (t[e + 1] += t[e] >>> 16), (t[e] &= 65535), e++;
}
function Fi(t, e) {
  (this.g = t), (this.h = e);
}
function Kl(t, e) {
  if (Gt(e)) throw Error("division by zero");
  if (Gt(t)) return new Fi(Hr, Hr);
  if (pt(t)) return (e = Kl(Pe(t), e)), new Fi(Pe(e.g), Pe(e.h));
  if (pt(e)) return (e = Kl(t, Pe(e))), new Fi(Pe(e.g), e.h);
  if (30 < t.g.length) {
    if (pt(t) || pt(e))
      throw Error("slowDivide_ only works with positive integers.");
    for (var n = dh, r = e; 0 >= r.X(t); ) (n = $m(n)), (r = $m(r));
    var i = Er(n, 1),
      s = Er(r, 1);
    for (r = Er(r, 2), n = Er(n, 2); !Gt(r); ) {
      var o = s.add(r);
      0 >= o.X(t) && ((i = i.add(n)), (s = o)), (r = Er(r, 1)), (n = Er(n, 1));
    }
    return (e = Wl(t, i.R(e))), new Fi(i, e);
  }
  for (i = Hr; 0 <= t.X(e); ) {
    for (
      n = Math.max(1, Math.floor(t.ea() / e.ea())),
        r = Math.ceil(Math.log(n) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        s = Ut(n),
        o = s.R(e);
      pt(o) || 0 < o.X(t);

    )
      (n -= r), (s = Ut(n)), (o = s.R(e));
    Gt(s) && (s = dh), (i = i.add(s)), (t = Wl(t, o));
  }
  return new Fi(i, t);
}
_.gb = function (t) {
  return Kl(this, t).h;
};
_.and = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) & t.D(r);
  return new Z(n, this.h & t.h);
};
_.or = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) | t.D(r);
  return new Z(n, this.h | t.h);
};
_.xor = function (t) {
  for (var e = Math.max(this.g.length, t.g.length), n = [], r = 0; r < e; r++)
    n[r] = this.D(r) ^ t.D(r);
  return new Z(n, this.h ^ t.h);
};
function $m(t) {
  for (var e = t.g.length + 1, n = [], r = 0; r < e; r++)
    n[r] = (t.D(r) << 1) | (t.D(r - 1) >>> 31);
  return new Z(n, t.h);
}
function Er(t, e) {
  var n = e >> 5;
  e %= 32;
  for (var r = t.g.length - n, i = [], s = 0; s < r; s++)
    i[s] =
      0 < e ? (t.D(s + n) >>> e) | (t.D(s + n + 1) << (32 - e)) : t.D(s + n);
  return new Z(i, t.h);
}
ql.prototype.createWebChannel = ql.prototype.g;
ut.prototype.send = ut.prototype.u;
ut.prototype.open = ut.prototype.m;
ut.prototype.close = ut.prototype.close;
Ra.NO_ERROR = 0;
Ra.TIMEOUT = 8;
Ra.HTTP_ERROR = 6;
U0.COMPLETE = "complete";
b0.EventType = to;
to.OPEN = "a";
to.CLOSE = "b";
to.ERROR = "c";
to.MESSAGE = "d";
$e.prototype.listen = $e.prototype.O;
de.prototype.listenOnce = de.prototype.P;
de.prototype.getLastError = de.prototype.Sa;
de.prototype.getLastErrorCode = de.prototype.Ia;
de.prototype.getStatus = de.prototype.da;
de.prototype.getResponseJson = de.prototype.Wa;
de.prototype.getResponseText = de.prototype.ja;
de.prototype.send = de.prototype.ha;
de.prototype.setWithCredentials = de.prototype.Oa;
Dt.prototype.digest = Dt.prototype.l;
Dt.prototype.reset = Dt.prototype.reset;
Dt.prototype.update = Dt.prototype.j;
Z.prototype.add = Z.prototype.add;
Z.prototype.multiply = Z.prototype.R;
Z.prototype.modulo = Z.prototype.gb;
Z.prototype.compare = Z.prototype.X;
Z.prototype.toNumber = Z.prototype.ea;
Z.prototype.toString = Z.prototype.toString;
Z.prototype.getBits = Z.prototype.D;
Z.fromNumber = Ut;
Z.fromString = E1;
var dN = function () {
    return new ql();
  },
  pN = function () {
    return Da();
  },
  zu = Ra,
  mN = U0,
  gN = yr,
  Am = {
    xb: 0,
    Ab: 1,
    Bb: 2,
    Ub: 3,
    Zb: 4,
    Wb: 5,
    Xb: 6,
    Vb: 7,
    Tb: 8,
    Yb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Rb: 12,
    Nb: 13,
    Ob: 14,
    Mb: 15,
    Pb: 16,
    Qb: 17,
    tb: 18,
    sb: 19,
    ub: 20,
  },
  yN = io,
  Uo = b0,
  vN = de,
  wN = Dt,
  qr = Z;
const Dm = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class be {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(be.UNAUTHENTICATED = new be(null)),
  (be.GOOGLE_CREDENTIALS = new be("google-credentials-uid")),
  (be.FIRST_PARTY = new be("first-party-uid")),
  (be.MOCK_USER = new be("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ei = "9.22.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hr = new p0("@firebase/firestore");
function Rm() {
  return hr.logLevel;
}
function L(t, ...e) {
  if (hr.logLevel <= X.DEBUG) {
    const n = e.map(Zf);
    hr.debug(`Firestore (${Ei}): ${t}`, ...n);
  }
}
function sn(t, ...e) {
  if (hr.logLevel <= X.ERROR) {
    const n = e.map(Zf);
    hr.error(`Firestore (${Ei}): ${t}`, ...n);
  }
}
function ii(t, ...e) {
  if (hr.logLevel <= X.WARN) {
    const n = e.map(Zf);
    hr.warn(`Firestore (${Ei}): ${t}`, ...n);
  }
}
function Zf(t) {
  if (typeof t == "string") return t;
  try {
    return (e = t), JSON.stringify(e);
  } catch {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F(t = "Unexpected state") {
  const e = `FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: ` + t;
  throw (sn(e), new Error(e));
}
function se(t, e) {
  t || F();
}
function B(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const C = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class R extends vi {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rn {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class S1 {
  constructor(e, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class xN {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(be.UNAUTHENTICATED));
  }
  shutdown() {}
}
class EN {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class SN {
  constructor(e) {
    (this.t = e),
      (this.currentUser = be.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const i = (a) => (this.i !== r ? ((r = this.i), n(a)) : Promise.resolve());
    let s = new Rn();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new Rn()),
        e.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const a = s;
        e.enqueueRetryable(async () => {
          await a.promise, await i(this.currentUser);
        });
      },
      l = (a) => {
        L("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = a),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((a) => l(a)),
      setTimeout(() => {
        if (!this.auth) {
          const a = this.t.getImmediate({ optional: !0 });
          a
            ? l(a)
            : (L("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new Rn()));
        }
      }, 0),
      o();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (L(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : r
                ? (se(typeof r.accessToken == "string"),
                  new S1(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return se(e === null || typeof e == "string"), new be(e);
  }
}
class CN {
  constructor(e, n, r) {
    (this.h = e),
      (this.l = n),
      (this.m = r),
      (this.type = "FirstParty"),
      (this.user = be.FIRST_PARTY),
      (this.g = new Map());
  }
  p() {
    return this.m ? this.m() : null;
  }
  get headers() {
    this.g.set("X-Goog-AuthUser", this.h);
    const e = this.p();
    return (
      e && this.g.set("Authorization", e),
      this.l && this.g.set("X-Goog-Iam-Authorization-Token", this.l),
      this.g
    );
  }
}
class TN {
  constructor(e, n, r) {
    (this.h = e), (this.l = n), (this.m = r);
  }
  getToken() {
    return Promise.resolve(new CN(this.h, this.l, this.m));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(be.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class kN {
  constructor(e) {
    (this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class NN {
  constructor(e) {
    (this.I = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.T = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        L(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.T;
      return (
        (this.T = s.token),
        L(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      L("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.I.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.I.getImmediate({ optional: !0 });
          s
            ? i(s)
            : L("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (se(typeof n.token == "string"),
                  (this.T = n.token),
                  new kN(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _N(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C1 {
  static A() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = _N(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function Y(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function si(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ce {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new R(
        C.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new R(
        C.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new R(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new R(C.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return Ce.fromMillis(Date.now());
  }
  static fromDate(e) {
    return Ce.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new Ce(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? Y(this.nanoseconds, e.nanoseconds)
      : Y(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new b(e);
  }
  static min() {
    return new b(new Ce(0, 0));
  }
  static max() {
    return new b(new Ce(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fs {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && F(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && F(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Fs.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Fs
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class re extends Fs {
  construct(e, n, r) {
    return new re(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new R(
          C.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new re(n);
  }
  static emptyPath() {
    return new re([]);
  }
}
const IN = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class ze extends Fs {
  construct(e, n, r) {
    return new ze(e, n, r);
  }
  static isValidIdentifier(e) {
    return IN.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          ze.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new ze(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new R(
          C.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < e.length; ) {
      const l = e[i];
      if (l === "\\") {
        if (i + 1 === e.length)
          throw new R(
            C.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const a = e[i + 1];
        if (a !== "\\" && a !== "." && a !== "`")
          throw new R(
            C.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e
          );
        (r += a), (i += 2);
      } else
        l === "`"
          ? ((o = !o), i++)
          : l !== "." || o
          ? ((r += l), i++)
          : (s(), i++);
    }
    if ((s(), o))
      throw new R(C.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new ze(n);
  }
  static emptyPath() {
    return new ze([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new M(re.fromString(e));
  }
  static fromName(e) {
    return new M(re.fromString(e).popFirst(5));
  }
  static empty() {
    return new M(re.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && re.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return re.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new M(new re(e.slice()));
  }
}
function $N(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = b.fromTimestamp(r === 1e9 ? new Ce(n + 1, 0) : new Ce(n, r));
  return new jn(i, M.empty(), e);
}
function AN(t) {
  return new jn(t.readTime, t.key, -1);
}
class jn {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new jn(b.min(), M.empty(), -1);
  }
  static max() {
    return new jn(b.max(), M.empty(), -1);
  }
}
function DN(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = M.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : Y(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RN =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class PN {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function lo(t) {
  if (t.code !== C.FAILED_PRECONDITION || t.message !== RN) throw t;
  L("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && F(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new N((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof N ? n : N.resolve(n);
    } catch (n) {
      return N.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : N.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : N.reject(n);
  }
  static resolve(e) {
    return new N((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new N((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new N((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      e.forEach((l) => {
        ++i,
          l.next(
            () => {
              ++s, o && s === i && n();
            },
            (a) => r(a)
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(e) {
    let n = N.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? N.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new N((r, i) => {
      const s = e.length,
        o = new Array(s);
      let l = 0;
      for (let a = 0; a < s; a++) {
        const u = a;
        n(e[u]).next(
          (c) => {
            (o[u] = c), ++l, l === s && r(o);
          },
          (c) => i(c)
        );
      }
    });
  }
  static doWhile(e, n) {
    return new N((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
function ao(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ed {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ot(r)),
        (this.ut = (r) => n.writeSequenceNumber(r)));
  }
  ot(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return this.ut && this.ut(e), e;
  }
}
ed.ct = -1;
function ba(t) {
  return t == null;
}
function Ql(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function ON(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Ql(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pm(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Si(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function T1(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class he {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || Re.EMPTY);
  }
  insert(e, n) {
    return new he(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, Re.BLACK, null, null)
    );
  }
  remove(e) {
    return new he(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, Re.BLACK, null, null)
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new bo(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new bo(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new bo(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new bo(this.root, e, this.comparator, !0);
  }
}
class bo {
  constructor(e, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class Re {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? Re.RED),
      (this.left = i ?? Re.EMPTY),
      (this.right = s ?? Re.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new Re(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
          ? i.copy(null, n, null, null, null)
          : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return Re.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return Re.EMPTY;
        (r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, Re.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, Re.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw F();
    const e = this.left.check();
    if (e !== this.right.check()) throw F();
    return e + (this.isRed() ? 0 : 1);
  }
}
(Re.EMPTY = null), (Re.RED = !0), (Re.BLACK = !1);
Re.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw F();
  }
  get value() {
    throw F();
  }
  get color() {
    throw F();
  }
  get left() {
    throw F();
  }
  get right() {
    throw F();
  }
  copy(t, e, n, r, i) {
    return this;
  }
  insert(t, e, n) {
    return new Re(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class We {
  constructor(e) {
    (this.comparator = e), (this.data = new he(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new Om(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Om(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof We) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new We(this.comparator);
    return (n.data = e), n;
  }
}
class Om {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _t {
  constructor(e) {
    (this.fields = e), e.sort(ze.comparator);
  }
  static empty() {
    return new _t([]);
  }
  unionWith(e) {
    let n = new We(ze.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new _t(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return si(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k1 extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qe {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (r) {
      try {
        return atob(r);
      } catch (i) {
        throw typeof DOMException < "u" && i instanceof DOMException
          ? new k1("Invalid base64 string: " + i)
          : i;
      }
    })(e);
    return new Qe(n);
  }
  static fromUint8Array(e) {
    const n = (function (r) {
      let i = "";
      for (let s = 0; s < r.length; ++s) i += String.fromCharCode(r[s]);
      return i;
    })(e);
    return new Qe(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (e = this.binaryString), btoa(e);
    var e;
  }
  toUint8Array() {
    return (function (e) {
      const n = new Uint8Array(e.length);
      for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
      return n;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return Y(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
Qe.EMPTY_BYTE_STRING = new Qe("");
const LN = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Mn(t) {
  if ((se(!!t), typeof t == "string")) {
    let e = 0;
    const n = LN.exec(t);
    if ((se(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: ye(t.seconds), nanos: ye(t.nanos) };
}
function ye(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function fr(t) {
  return typeof t == "string" ? Qe.fromBase64String(t) : Qe.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function td(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function nd(t) {
  const e = t.mapValue.fields.__previous_value__;
  return td(e) ? nd(e) : e;
}
function Us(t) {
  const e = Mn(t.mapValue.fields.__local_write_time__.timestampValue);
  return new Ce(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jN {
  constructor(e, n, r, i, s, o, l, a, u) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = a),
      (this.useFetchStreams = u);
  }
}
class bs {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || "(default)");
  }
  static empty() {
    return new bs("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return (
      e instanceof bs &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bo = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function dr(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
    ? 1
    : "integerValue" in t || "doubleValue" in t
    ? 2
    : "timestampValue" in t
    ? 3
    : "stringValue" in t
    ? 5
    : "bytesValue" in t
    ? 6
    : "referenceValue" in t
    ? 7
    : "geoPointValue" in t
    ? 8
    : "arrayValue" in t
    ? 9
    : "mapValue" in t
    ? td(t)
      ? 4
      : MN(t)
      ? 9007199254740991
      : 10
    : F();
}
function zt(t, e) {
  if (t === e) return !0;
  const n = dr(t);
  if (n !== dr(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Us(t).isEqual(Us(e));
    case 3:
      return (function (r, i) {
        if (
          typeof r.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          r.timestampValue.length === i.timestampValue.length
        )
          return r.timestampValue === i.timestampValue;
        const s = Mn(r.timestampValue),
          o = Mn(i.timestampValue);
        return s.seconds === o.seconds && s.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (r, i) {
        return fr(r.bytesValue).isEqual(fr(i.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (r, i) {
        return (
          ye(r.geoPointValue.latitude) === ye(i.geoPointValue.latitude) &&
          ye(r.geoPointValue.longitude) === ye(i.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (r, i) {
        if ("integerValue" in r && "integerValue" in i)
          return ye(r.integerValue) === ye(i.integerValue);
        if ("doubleValue" in r && "doubleValue" in i) {
          const s = ye(r.doubleValue),
            o = ye(i.doubleValue);
          return s === o ? Ql(s) === Ql(o) : isNaN(s) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return si(t.arrayValue.values || [], e.arrayValue.values || [], zt);
    case 10:
      return (function (r, i) {
        const s = r.mapValue.fields || {},
          o = i.mapValue.fields || {};
        if (Pm(s) !== Pm(o)) return !1;
        for (const l in s)
          if (s.hasOwnProperty(l) && (o[l] === void 0 || !zt(s[l], o[l])))
            return !1;
        return !0;
      })(t, e);
    default:
      return F();
  }
}
function Bs(t, e) {
  return (t.values || []).find((n) => zt(n, e)) !== void 0;
}
function oi(t, e) {
  if (t === e) return 0;
  const n = dr(t),
    r = dr(e);
  if (n !== r) return Y(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return Y(t.booleanValue, e.booleanValue);
    case 2:
      return (function (i, s) {
        const o = ye(i.integerValue || i.doubleValue),
          l = ye(s.integerValue || s.doubleValue);
        return o < l
          ? -1
          : o > l
          ? 1
          : o === l
          ? 0
          : isNaN(o)
          ? isNaN(l)
            ? 0
            : -1
          : 1;
      })(t, e);
    case 3:
      return Lm(t.timestampValue, e.timestampValue);
    case 4:
      return Lm(Us(t), Us(e));
    case 5:
      return Y(t.stringValue, e.stringValue);
    case 6:
      return (function (i, s) {
        const o = fr(i),
          l = fr(s);
        return o.compareTo(l);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (i, s) {
        const o = i.split("/"),
          l = s.split("/");
        for (let a = 0; a < o.length && a < l.length; a++) {
          const u = Y(o[a], l[a]);
          if (u !== 0) return u;
        }
        return Y(o.length, l.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (i, s) {
        const o = Y(ye(i.latitude), ye(s.latitude));
        return o !== 0 ? o : Y(ye(i.longitude), ye(s.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (i, s) {
        const o = i.values || [],
          l = s.values || [];
        for (let a = 0; a < o.length && a < l.length; ++a) {
          const u = oi(o[a], l[a]);
          if (u) return u;
        }
        return Y(o.length, l.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (i, s) {
        if (i === Bo.mapValue && s === Bo.mapValue) return 0;
        if (i === Bo.mapValue) return 1;
        if (s === Bo.mapValue) return -1;
        const o = i.fields || {},
          l = Object.keys(o),
          a = s.fields || {},
          u = Object.keys(a);
        l.sort(), u.sort();
        for (let c = 0; c < l.length && c < u.length; ++c) {
          const h = Y(l[c], u[c]);
          if (h !== 0) return h;
          const f = oi(o[l[c]], a[u[c]]);
          if (f !== 0) return f;
        }
        return Y(l.length, u.length);
      })(t.mapValue, e.mapValue);
    default:
      throw F();
  }
}
function Lm(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return Y(t, e);
  const n = Mn(t),
    r = Mn(e),
    i = Y(n.seconds, r.seconds);
  return i !== 0 ? i : Y(n.nanos, r.nanos);
}
function li(t) {
  return ph(t);
}
function ph(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
    ? "" + t.booleanValue
    : "integerValue" in t
    ? "" + t.integerValue
    : "doubleValue" in t
    ? "" + t.doubleValue
    : "timestampValue" in t
    ? (function (r) {
        const i = Mn(r);
        return `time(${i.seconds},${i.nanos})`;
      })(t.timestampValue)
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? fr(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((n = t.referenceValue), M.fromName(n).toString())
    : "geoPointValue" in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : "arrayValue" in t
    ? (function (r) {
        let i = "[",
          s = !0;
        for (const o of r.values || []) s ? (s = !1) : (i += ","), (i += ph(o));
        return i + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (r) {
        const i = Object.keys(r.fields || {}).sort();
        let s = "{",
          o = !0;
        for (const l of i)
          o ? (o = !1) : (s += ","), (s += `${l}:${ph(r.fields[l])}`);
        return s + "}";
      })(t.mapValue)
    : F();
  var e, n;
}
function jm(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${
      t.database
    }/documents/${e.path.canonicalString()}`,
  };
}
function mh(t) {
  return !!t && "integerValue" in t;
}
function rd(t) {
  return !!t && "arrayValue" in t;
}
function Mm(t) {
  return !!t && "nullValue" in t;
}
function Fm(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function ll(t) {
  return !!t && "mapValue" in t;
}
function is(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return Si(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = is(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = is(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function MN(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new mt({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !ll(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = is(n);
  }
  setAll(e) {
    let n = ze.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, l) => {
      if (!n.isImmediateParentOf(l)) {
        const a = this.getFieldsMap(n);
        this.applyChanges(a, r, i), (r = {}), (i = []), (n = l.popLast());
      }
      o ? (r[l.lastSegment()] = is(o)) : i.push(l.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    ll(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return zt(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (ll(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    Si(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new mt(is(this.value));
  }
}
function N1(t) {
  const e = [];
  return (
    Si(t.fields, (n, r) => {
      const i = new ze([n]);
      if (ll(r)) {
        const s = N1(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new _t(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ve {
  constructor(e, n, r, i, s, o, l) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = l);
  }
  static newInvalidDocument(e) {
    return new Ve(e, 0, b.min(), b.min(), b.min(), mt.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new Ve(e, 1, n, b.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new Ve(e, 2, n, b.min(), b.min(), mt.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new Ve(e, 3, n, b.min(), b.min(), mt.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(b.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = mt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = mt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = b.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof Ve &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new Ve(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gl {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function Um(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = M.comparator(M.fromName(o.referenceValue), n.key))
        : (r = oi(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function bm(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!zt(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ss {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
}
function FN(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _1 {}
class we extends _1 {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(e, n, r)
        : new bN(e, n, r)
      : n === "array-contains"
      ? new zN(e, r)
      : n === "in"
      ? new HN(e, r)
      : n === "not-in"
      ? new qN(e, r)
      : n === "array-contains-any"
      ? new WN(e, r)
      : new we(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === "in" ? new BN(e, r) : new VN(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.matchesComparison(oi(n, this.value))
      : n !== null &&
          dr(this.value) === dr(n) &&
          this.matchesComparison(oi(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return F();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
  getFirstInequalityField() {
    return this.isInequality() ? this.field : null;
  }
}
class Rt extends _1 {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.lt = null);
  }
  static create(e, n) {
    return new Rt(e, n);
  }
  matches(e) {
    return I1(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.lt !== null ||
        (this.lt = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          []
        )),
      this.lt
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
  getFirstInequalityField() {
    const e = this.ft((n) => n.isInequality());
    return e !== null ? e.field : null;
  }
  ft(e) {
    for (const n of this.getFlattenedFilters()) if (e(n)) return n;
    return null;
  }
}
function I1(t) {
  return t.op === "and";
}
function $1(t) {
  return UN(t) && I1(t);
}
function UN(t) {
  for (const e of t.filters) if (e instanceof Rt) return !1;
  return !0;
}
function gh(t) {
  if (t instanceof we)
    return t.field.canonicalString() + t.op.toString() + li(t.value);
  if ($1(t)) return t.filters.map((e) => gh(e)).join(",");
  {
    const e = t.filters.map((n) => gh(n)).join(",");
    return `${t.op}(${e})`;
  }
}
function A1(t, e) {
  return t instanceof we
    ? (function (n, r) {
        return (
          r instanceof we &&
          n.op === r.op &&
          n.field.isEqual(r.field) &&
          zt(n.value, r.value)
        );
      })(t, e)
    : t instanceof Rt
    ? (function (n, r) {
        return r instanceof Rt &&
          n.op === r.op &&
          n.filters.length === r.filters.length
          ? n.filters.reduce((i, s, o) => i && A1(s, r.filters[o]), !0)
          : !1;
      })(t, e)
    : void F();
}
function D1(t) {
  return t instanceof we
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${li(e.value)}`;
      })(t)
    : t instanceof Rt
    ? (function (e) {
        return e.op.toString() + " {" + e.getFilters().map(D1).join(" ,") + "}";
      })(t)
    : "Filter";
}
class bN extends we {
  constructor(e, n, r) {
    super(e, n, r), (this.key = M.fromName(r.referenceValue));
  }
  matches(e) {
    const n = M.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class BN extends we {
  constructor(e, n) {
    super(e, "in", n), (this.keys = R1("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class VN extends we {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = R1("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function R1(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => M.fromName(r.referenceValue));
}
class zN extends we {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return rd(n) && Bs(n.arrayValue, this.value);
  }
}
class HN extends we {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Bs(this.value.arrayValue, n);
  }
}
class qN extends we {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (Bs(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Bs(this.value.arrayValue, n);
  }
}
class WN extends we {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!rd(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Bs(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KN {
  constructor(e, n = null, r = [], i = [], s = null, o = null, l = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = l),
      (this.dt = null);
  }
}
function Bm(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new KN(t, e, n, r, i, s, o);
}
function id(t) {
  const e = B(t);
  if (e.dt === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters.map((r) => gh(r)).join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r)
        )
        .join(",")),
      ba(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => li(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => li(r)).join(","))),
      (e.dt = n);
  }
  return e.dt;
}
function sd(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!FN(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!A1(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!bm(t.startAt, e.startAt) &&
    bm(t.endAt, e.endAt)
  );
}
function yh(t) {
  return (
    M.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uo {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    l = null,
    a = null
  ) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = l),
      (this.endAt = a),
      (this.wt = null),
      (this._t = null),
      this.startAt,
      this.endAt;
  }
}
function QN(t, e, n, r, i, s, o, l) {
  return new uo(t, e, n, r, i, s, o, l);
}
function P1(t) {
  return new uo(t);
}
function Vm(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function O1(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function od(t) {
  for (const e of t.filters) {
    const n = e.getFirstInequalityField();
    if (n !== null) return n;
  }
  return null;
}
function L1(t) {
  return t.collectionGroup !== null;
}
function Wr(t) {
  const e = B(t);
  if (e.wt === null) {
    e.wt = [];
    const n = od(e),
      r = O1(e);
    if (n !== null && r === null)
      n.isKeyField() || e.wt.push(new ss(n)),
        e.wt.push(new ss(ze.keyField(), "asc"));
    else {
      let i = !1;
      for (const s of e.explicitOrderBy)
        e.wt.push(s), s.field.isKeyField() && (i = !0);
      if (!i) {
        const s =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : "asc";
        e.wt.push(new ss(ze.keyField(), s));
      }
    }
  }
  return e.wt;
}
function on(t) {
  const e = B(t);
  if (!e._t)
    if (e.limitType === "F")
      e._t = Bm(
        e.path,
        e.collectionGroup,
        Wr(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      const n = [];
      for (const s of Wr(e)) {
        const o = s.dir === "desc" ? "asc" : "desc";
        n.push(new ss(s.field, o));
      }
      const r = e.endAt ? new Gl(e.endAt.position, e.endAt.inclusive) : null,
        i = e.startAt ? new Gl(e.startAt.position, e.startAt.inclusive) : null;
      e._t = Bm(e.path, e.collectionGroup, n, e.filters, e.limit, r, i);
    }
  return e._t;
}
function vh(t, e) {
  e.getFirstInequalityField(), od(t);
  const n = t.filters.concat([e]);
  return new uo(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    n,
    t.limit,
    t.limitType,
    t.startAt,
    t.endAt
  );
}
function wh(t, e, n) {
  return new uo(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function Ba(t, e) {
  return sd(on(t), on(e)) && t.limitType === e.limitType;
}
function j1(t) {
  return `${id(on(t))}|lt:${t.limitType}`;
}
function xh(t) {
  return `Query(target=${(function (e) {
    let n = e.path.canonicalString();
    return (
      e.collectionGroup !== null &&
        (n += " collectionGroup=" + e.collectionGroup),
      e.filters.length > 0 &&
        (n += `, filters: [${e.filters.map((r) => D1(r)).join(", ")}]`),
      ba(e.limit) || (n += ", limit: " + e.limit),
      e.orderBy.length > 0 &&
        (n += `, orderBy: [${e.orderBy
          .map((r) =>
            (function (i) {
              return `${i.field.canonicalString()} (${i.dir})`;
            })(r)
          )
          .join(", ")}]`),
      e.startAt &&
        ((n += ", startAt: "),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => li(r)).join(","))),
      e.endAt &&
        ((n += ", endAt: "),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => li(r)).join(","))),
      `Target(${n})`
    );
  })(on(t))}; limitType=${t.limitType})`;
}
function Va(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, r) {
      const i = r.key.path;
      return n.collectionGroup !== null
        ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(i)
        : M.isDocumentKey(n.path)
        ? n.path.isEqual(i)
        : n.path.isImmediateParentOf(i);
    })(t, e) &&
    (function (n, r) {
      for (const i of Wr(n))
        if (!i.field.isKeyField() && r.data.field(i.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      for (const i of n.filters) if (!i.matches(r)) return !1;
      return !0;
    })(t, e) &&
    (function (n, r) {
      return !(
        (n.startAt &&
          !(function (i, s, o) {
            const l = Um(i, s, o);
            return i.inclusive ? l <= 0 : l < 0;
          })(n.startAt, Wr(n), r)) ||
        (n.endAt &&
          !(function (i, s, o) {
            const l = Um(i, s, o);
            return i.inclusive ? l >= 0 : l > 0;
          })(n.endAt, Wr(n), r))
      );
    })(t, e)
  );
}
function GN(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function M1(t) {
  return (e, n) => {
    let r = !1;
    for (const i of Wr(t)) {
      const s = YN(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function YN(t, e, n) {
  const r = t.field.isKeyField()
    ? M.comparator(e.key, n.key)
    : (function (i, s, o) {
        const l = s.data.field(i),
          a = o.data.field(i);
        return l !== null && a !== null ? oi(l, a) : F();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return F();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ci {
  constructor(e, n) {
    (this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    i.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    Si(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return T1(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XN = new he(M.comparator);
function ln() {
  return XN;
}
const F1 = new he(M.comparator);
function qi(...t) {
  let e = F1;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function U1(t) {
  let e = F1;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function tr() {
  return os();
}
function b1() {
  return os();
}
function os() {
  return new Ci(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const JN = new he(M.comparator),
  ZN = new We(M.comparator);
function H(...t) {
  let e = ZN;
  for (const n of t) e = e.add(n);
  return e;
}
const e_ = new We(Y);
function t_() {
  return e_;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function B1(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Ql(e) ? "-0" : e };
}
function V1(t) {
  return { integerValue: "" + t };
}
function n_(t, e) {
  return ON(e) ? V1(e) : B1(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class za {
  constructor() {
    this._ = void 0;
  }
}
function r_(t, e, n) {
  return t instanceof Yl
    ? (function (r, i) {
        const s = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: r.seconds, nanos: r.nanoseconds },
            },
          },
        };
        return (
          i && td(i) && (i = nd(i)),
          i && (s.fields.__previous_value__ = i),
          { mapValue: s }
        );
      })(n, e)
    : t instanceof Vs
    ? H1(t, e)
    : t instanceof zs
    ? q1(t, e)
    : (function (r, i) {
        const s = z1(r, i),
          o = zm(s) + zm(r.gt);
        return mh(s) && mh(r.gt) ? V1(o) : B1(r.serializer, o);
      })(t, e);
}
function i_(t, e, n) {
  return t instanceof Vs ? H1(t, e) : t instanceof zs ? q1(t, e) : n;
}
function z1(t, e) {
  return t instanceof Xl
    ? mh((n = e)) ||
      (function (r) {
        return !!r && "doubleValue" in r;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class Yl extends za {}
class Vs extends za {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function H1(t, e) {
  const n = W1(e);
  for (const r of t.elements) n.some((i) => zt(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class zs extends za {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function q1(t, e) {
  let n = W1(e);
  for (const r of t.elements) n = n.filter((i) => !zt(i, r));
  return { arrayValue: { values: n } };
}
class Xl extends za {
  constructor(e, n) {
    super(), (this.serializer = e), (this.gt = n);
  }
}
function zm(t) {
  return ye(t.integerValue || t.doubleValue);
}
function W1(t) {
  return rd(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function s_(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, r) {
      return (n instanceof Vs && r instanceof Vs) ||
        (n instanceof zs && r instanceof zs)
        ? si(n.elements, r.elements, zt)
        : n instanceof Xl && r instanceof Xl
        ? zt(n.gt, r.gt)
        : n instanceof Yl && r instanceof Yl;
    })(t.transform, e.transform)
  );
}
class o_ {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class Jt {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Jt();
  }
  static exists(e) {
    return new Jt(void 0, e);
  }
  static updateTime(e) {
    return new Jt(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function al(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Ha {}
function K1(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new G1(t.key, Jt.none())
      : new co(t.key, t.data, Jt.none());
  {
    const n = t.data,
      r = mt.empty();
    let i = new We(ze.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new vr(t.key, r, new _t(i.toArray()), Jt.none());
  }
}
function l_(t, e, n) {
  t instanceof co
    ? (function (r, i, s) {
        const o = r.value.clone(),
          l = qm(r.fieldTransforms, i, s.transformResults);
        o.setAll(l),
          i.convertToFoundDocument(s.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof vr
    ? (function (r, i, s) {
        if (!al(r.precondition, i))
          return void i.convertToUnknownDocument(s.version);
        const o = qm(r.fieldTransforms, i, s.transformResults),
          l = i.data;
        l.setAll(Q1(r)),
          l.setAll(o),
          i.convertToFoundDocument(s.version, l).setHasCommittedMutations();
      })(t, e, n)
    : (function (r, i, s) {
        i.convertToNoDocument(s.version).setHasCommittedMutations();
      })(0, e, n);
}
function ls(t, e, n, r) {
  return t instanceof co
    ? (function (i, s, o, l) {
        if (!al(i.precondition, s)) return o;
        const a = i.value.clone(),
          u = Wm(i.fieldTransforms, l, s);
        return (
          a.setAll(u),
          s.convertToFoundDocument(s.version, a).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof vr
    ? (function (i, s, o, l) {
        if (!al(i.precondition, s)) return o;
        const a = Wm(i.fieldTransforms, l, s),
          u = s.data;
        return (
          u.setAll(Q1(i)),
          u.setAll(a),
          s.convertToFoundDocument(s.version, u).setHasLocalMutations(),
          o === null
            ? null
            : o
                .unionWith(i.fieldMask.fields)
                .unionWith(i.fieldTransforms.map((c) => c.field))
        );
      })(t, e, n, r)
    : (function (i, s, o) {
        return al(i.precondition, s)
          ? (s.convertToNoDocument(s.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function a_(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = z1(r.transform, i || null);
    s != null && (n === null && (n = mt.empty()), n.set(r.field, s));
  }
  return n || null;
}
function Hm(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, r) {
      return (
        (n === void 0 && r === void 0) ||
        (!(!n || !r) && si(n, r, (i, s) => s_(i, s)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class co extends Ha {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class vr extends Ha {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Q1(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function qm(t, e, n) {
  const r = new Map();
  se(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      l = e.data.field(s.field);
    r.set(s.field, i_(o, l, n[i]));
  }
  return r;
}
function Wm(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, r_(s, o, e));
  }
  return r;
}
class G1 extends Ha {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class u_ extends Ha {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c_ {
  constructor(e, n, r, i) {
    (this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && l_(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = ls(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = ls(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = b1();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let l = this.applyToLocalView(o, s.mutatedFields);
        l = n.has(i.key) ? null : l;
        const a = K1(o, l);
        a !== null && r.set(i.key, a),
          o.isValidDocument() || o.convertToNoDocument(b.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), H());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      si(this.mutations, e.mutations, (n, r) => Hm(n, r)) &&
      si(this.baseMutations, e.baseMutations, (n, r) => Hm(n, r))
    );
  }
}
class ld {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    se(e.mutations.length === r.length);
    let i = JN;
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new ld(e, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class h_ {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f_ {
  constructor(e, n) {
    (this.count = e), (this.unchangedNames = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ge, K;
function d_(t) {
  switch (t) {
    default:
      return F();
    case C.CANCELLED:
    case C.UNKNOWN:
    case C.DEADLINE_EXCEEDED:
    case C.RESOURCE_EXHAUSTED:
    case C.INTERNAL:
    case C.UNAVAILABLE:
    case C.UNAUTHENTICATED:
      return !1;
    case C.INVALID_ARGUMENT:
    case C.NOT_FOUND:
    case C.ALREADY_EXISTS:
    case C.PERMISSION_DENIED:
    case C.FAILED_PRECONDITION:
    case C.ABORTED:
    case C.OUT_OF_RANGE:
    case C.UNIMPLEMENTED:
    case C.DATA_LOSS:
      return !0;
  }
}
function Y1(t) {
  if (t === void 0) return sn("GRPC error has no .code"), C.UNKNOWN;
  switch (t) {
    case ge.OK:
      return C.OK;
    case ge.CANCELLED:
      return C.CANCELLED;
    case ge.UNKNOWN:
      return C.UNKNOWN;
    case ge.DEADLINE_EXCEEDED:
      return C.DEADLINE_EXCEEDED;
    case ge.RESOURCE_EXHAUSTED:
      return C.RESOURCE_EXHAUSTED;
    case ge.INTERNAL:
      return C.INTERNAL;
    case ge.UNAVAILABLE:
      return C.UNAVAILABLE;
    case ge.UNAUTHENTICATED:
      return C.UNAUTHENTICATED;
    case ge.INVALID_ARGUMENT:
      return C.INVALID_ARGUMENT;
    case ge.NOT_FOUND:
      return C.NOT_FOUND;
    case ge.ALREADY_EXISTS:
      return C.ALREADY_EXISTS;
    case ge.PERMISSION_DENIED:
      return C.PERMISSION_DENIED;
    case ge.FAILED_PRECONDITION:
      return C.FAILED_PRECONDITION;
    case ge.ABORTED:
      return C.ABORTED;
    case ge.OUT_OF_RANGE:
      return C.OUT_OF_RANGE;
    case ge.UNIMPLEMENTED:
      return C.UNIMPLEMENTED;
    case ge.DATA_LOSS:
      return C.DATA_LOSS;
    default:
      return F();
  }
}
((K = ge || (ge = {}))[(K.OK = 0)] = "OK"),
  (K[(K.CANCELLED = 1)] = "CANCELLED"),
  (K[(K.UNKNOWN = 2)] = "UNKNOWN"),
  (K[(K.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (K[(K.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (K[(K.NOT_FOUND = 5)] = "NOT_FOUND"),
  (K[(K.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (K[(K.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (K[(K.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (K[(K.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (K[(K.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (K[(K.ABORTED = 10)] = "ABORTED"),
  (K[(K.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (K[(K.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (K[(K.INTERNAL = 13)] = "INTERNAL"),
  (K[(K.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (K[(K.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ad {
  constructor() {
    this.onExistenceFilterMismatchCallbacks = new Map();
  }
  static get instance() {
    return Vo;
  }
  static getOrCreateInstance() {
    return Vo === null && (Vo = new ad()), Vo;
  }
  onExistenceFilterMismatch(e) {
    const n = Symbol();
    return (
      this.onExistenceFilterMismatchCallbacks.set(n, e),
      () => this.onExistenceFilterMismatchCallbacks.delete(n)
    );
  }
  notifyOnExistenceFilterMismatch(e) {
    this.onExistenceFilterMismatchCallbacks.forEach((n) => n(e));
  }
}
let Vo = null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function p_() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const m_ = new qr([4294967295, 4294967295], 0);
function Km(t) {
  const e = p_().encode(t),
    n = new wN();
  return n.update(e), new Uint8Array(n.digest());
}
function Qm(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    s = e.getUint32(12, !0);
  return [new qr([n, r], 0), new qr([i, s], 0)];
}
class ud {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new Wi(`Invalid padding: ${n}`);
    if (r < 0) throw new Wi(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new Wi(`Invalid hash count: ${r}`);
    if (e.length === 0 && n !== 0)
      throw new Wi(`Invalid padding when bitmap length is 0: ${n}`);
    (this.It = 8 * e.length - n), (this.Tt = qr.fromNumber(this.It));
  }
  Et(e, n, r) {
    let i = e.add(n.multiply(qr.fromNumber(r)));
    return (
      i.compare(m_) === 1 && (i = new qr([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.Tt).toNumber()
    );
  }
  At(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0;
  }
  vt(e) {
    if (this.It === 0) return !1;
    const n = Km(e),
      [r, i] = Qm(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.Et(r, i, s);
      if (!this.At(o)) return !1;
    }
    return !0;
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      s = new Uint8Array(Math.ceil(e / 8)),
      o = new ud(s, i, n);
    return r.forEach((l) => o.insert(l)), o;
  }
  insert(e) {
    if (this.It === 0) return;
    const n = Km(e),
      [r, i] = Qm(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.Et(r, i, s);
      this.Rt(o);
    }
  }
  Rt(e) {
    const n = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class Wi extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qa {
  constructor(e, n, r, i, s) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map();
    return (
      i.set(e, ho.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new qa(b.min(), i, new he(Y), ln(), H())
    );
  }
}
class ho {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new ho(r, n, H(), H(), H());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ul {
  constructor(e, n, r, i) {
    (this.Pt = e), (this.removedTargetIds = n), (this.key = r), (this.bt = i);
  }
}
class X1 {
  constructor(e, n) {
    (this.targetId = e), (this.Vt = n);
  }
}
class J1 {
  constructor(e, n, r = Qe.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class Gm {
  constructor() {
    (this.St = 0),
      (this.Dt = Xm()),
      (this.Ct = Qe.EMPTY_BYTE_STRING),
      (this.xt = !1),
      (this.Nt = !0);
  }
  get current() {
    return this.xt;
  }
  get resumeToken() {
    return this.Ct;
  }
  get kt() {
    return this.St !== 0;
  }
  get Mt() {
    return this.Nt;
  }
  $t(e) {
    e.approximateByteSize() > 0 && ((this.Nt = !0), (this.Ct = e));
  }
  Ot() {
    let e = H(),
      n = H(),
      r = H();
    return (
      this.Dt.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            F();
        }
      }),
      new ho(this.Ct, this.xt, e, n, r)
    );
  }
  Ft() {
    (this.Nt = !1), (this.Dt = Xm());
  }
  Bt(e, n) {
    (this.Nt = !0), (this.Dt = this.Dt.insert(e, n));
  }
  Lt(e) {
    (this.Nt = !0), (this.Dt = this.Dt.remove(e));
  }
  qt() {
    this.St += 1;
  }
  Ut() {
    this.St -= 1;
  }
  Kt() {
    (this.Nt = !0), (this.xt = !0);
  }
}
class g_ {
  constructor(e) {
    (this.Gt = e),
      (this.Qt = new Map()),
      (this.jt = ln()),
      (this.zt = Ym()),
      (this.Wt = new he(Y));
  }
  Ht(e) {
    for (const n of e.Pt)
      e.bt && e.bt.isFoundDocument()
        ? this.Jt(n, e.bt)
        : this.Yt(n, e.key, e.bt);
    for (const n of e.removedTargetIds) this.Yt(n, e.key, e.bt);
  }
  Xt(e) {
    this.forEachTarget(e, (n) => {
      const r = this.Zt(n);
      switch (e.state) {
        case 0:
          this.te(n) && r.$t(e.resumeToken);
          break;
        case 1:
          r.Ut(), r.kt || r.Ft(), r.$t(e.resumeToken);
          break;
        case 2:
          r.Ut(), r.kt || this.removeTarget(n);
          break;
        case 3:
          this.te(n) && (r.Kt(), r.$t(e.resumeToken));
          break;
        case 4:
          this.te(n) && (this.ee(n), r.$t(e.resumeToken));
          break;
        default:
          F();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Qt.forEach((r, i) => {
          this.te(i) && n(i);
        });
  }
  ne(e) {
    var n;
    const r = e.targetId,
      i = e.Vt.count,
      s = this.se(r);
    if (s) {
      const o = s.target;
      if (yh(o))
        if (i === 0) {
          const l = new M(o.path);
          this.Yt(r, l, Ve.newNoDocument(l, b.min()));
        } else se(i === 1);
      else {
        const l = this.ie(r);
        if (l !== i) {
          const a = this.re(e, l);
          if (a !== 0) {
            this.ee(r);
            const u =
              a === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Wt = this.Wt.insert(r, u);
          }
          (n = ad.instance) === null ||
            n === void 0 ||
            n.notifyOnExistenceFilterMismatch(
              (function (u, c, h) {
                var f, g, v, w, T, m;
                const d = { localCacheCount: c, existenceFilterCount: h.count },
                  y = h.unchangedNames;
                return (
                  y &&
                    (d.bloomFilter = {
                      applied: u === 0,
                      hashCount:
                        (f = y == null ? void 0 : y.hashCount) !== null &&
                        f !== void 0
                          ? f
                          : 0,
                      bitmapLength:
                        (w =
                          (v =
                            (g = y == null ? void 0 : y.bits) === null ||
                            g === void 0
                              ? void 0
                              : g.bitmap) === null || v === void 0
                            ? void 0
                            : v.length) !== null && w !== void 0
                          ? w
                          : 0,
                      padding:
                        (m =
                          (T = y == null ? void 0 : y.bits) === null ||
                          T === void 0
                            ? void 0
                            : T.padding) !== null && m !== void 0
                          ? m
                          : 0,
                    }),
                  d
                );
              })(a, l, e.Vt)
            );
        }
      }
    }
  }
  re(e, n) {
    const { unchangedNames: r, count: i } = e.Vt;
    if (!r || !r.bits) return 1;
    const {
      bits: { bitmap: s = "", padding: o = 0 },
      hashCount: l = 0,
    } = r;
    let a, u;
    try {
      a = fr(s).toUint8Array();
    } catch (c) {
      if (c instanceof k1)
        return (
          ii(
            "Decoding the base64 bloom filter in existence filter failed (" +
              c.message +
              "); ignoring the bloom filter and falling back to full re-query."
          ),
          1
        );
      throw c;
    }
    try {
      u = new ud(a, o, l);
    } catch (c) {
      return (
        ii(
          c instanceof Wi
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          c
        ),
        1
      );
    }
    return u.It === 0 ? 1 : i !== n - this.oe(e.targetId, u) ? 2 : 0;
  }
  oe(e, n) {
    const r = this.Gt.getRemoteKeysForTarget(e);
    let i = 0;
    return (
      r.forEach((s) => {
        const o = this.Gt.ue(),
          l = `projects/${o.projectId}/databases/${
            o.database
          }/documents/${s.path.canonicalString()}`;
        n.vt(l) || (this.Yt(e, s, null), i++);
      }),
      i
    );
  }
  ce(e) {
    const n = new Map();
    this.Qt.forEach((s, o) => {
      const l = this.se(o);
      if (l) {
        if (s.current && yh(l.target)) {
          const a = new M(l.target.path);
          this.jt.get(a) !== null ||
            this.ae(o, a) ||
            this.Yt(o, a, Ve.newNoDocument(a, e));
        }
        s.Mt && (n.set(o, s.Ot()), s.Ft());
      }
    });
    let r = H();
    this.zt.forEach((s, o) => {
      let l = !0;
      o.forEachWhile((a) => {
        const u = this.se(a);
        return (
          !u || u.purpose === "TargetPurposeLimboResolution" || ((l = !1), !1)
        );
      }),
        l && (r = r.add(s));
    }),
      this.jt.forEach((s, o) => o.setReadTime(e));
    const i = new qa(e, n, this.Wt, this.jt, r);
    return (this.jt = ln()), (this.zt = Ym()), (this.Wt = new he(Y)), i;
  }
  Jt(e, n) {
    if (!this.te(e)) return;
    const r = this.ae(e, n.key) ? 2 : 0;
    this.Zt(e).Bt(n.key, r),
      (this.jt = this.jt.insert(n.key, n)),
      (this.zt = this.zt.insert(n.key, this.he(n.key).add(e)));
  }
  Yt(e, n, r) {
    if (!this.te(e)) return;
    const i = this.Zt(e);
    this.ae(e, n) ? i.Bt(n, 1) : i.Lt(n),
      (this.zt = this.zt.insert(n, this.he(n).delete(e))),
      r && (this.jt = this.jt.insert(n, r));
  }
  removeTarget(e) {
    this.Qt.delete(e);
  }
  ie(e) {
    const n = this.Zt(e).Ot();
    return (
      this.Gt.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  qt(e) {
    this.Zt(e).qt();
  }
  Zt(e) {
    let n = this.Qt.get(e);
    return n || ((n = new Gm()), this.Qt.set(e, n)), n;
  }
  he(e) {
    let n = this.zt.get(e);
    return n || ((n = new We(Y)), (this.zt = this.zt.insert(e, n))), n;
  }
  te(e) {
    const n = this.se(e) !== null;
    return n || L("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  se(e) {
    const n = this.Qt.get(e);
    return n && n.kt ? null : this.Gt.le(e);
  }
  ee(e) {
    this.Qt.set(e, new Gm()),
      this.Gt.getRemoteKeysForTarget(e).forEach((n) => {
        this.Yt(e, n, null);
      });
  }
  ae(e, n) {
    return this.Gt.getRemoteKeysForTarget(e).has(n);
  }
}
function Ym() {
  return new he(M.comparator);
}
function Xm() {
  return new he(M.comparator);
}
const y_ = (() => ({ asc: "ASCENDING", desc: "DESCENDING" }))(),
  v_ = (() => ({
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  }))(),
  w_ = (() => ({ and: "AND", or: "OR" }))();
class x_ {
  constructor(e, n) {
    (this.databaseId = e), (this.useProto3Json = n);
  }
}
function Eh(t, e) {
  return t.useProto3Json || ba(e) ? e : { value: e };
}
function Jl(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function Z1(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function E_(t, e) {
  return Jl(t, e.toTimestamp());
}
function Vt(t) {
  return (
    se(!!t),
    b.fromTimestamp(
      (function (e) {
        const n = Mn(e);
        return new Ce(n.seconds, n.nanos);
      })(t)
    )
  );
}
function cd(t, e) {
  return (function (n) {
    return new re(["projects", n.projectId, "databases", n.database]);
  })(t)
    .child("documents")
    .child(e)
    .canonicalString();
}
function ew(t) {
  const e = re.fromString(t);
  return se(iw(e)), e;
}
function Sh(t, e) {
  return cd(t.databaseId, e.path);
}
function Hu(t, e) {
  const n = ew(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new R(
      C.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new R(
      C.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new M(tw(n));
}
function Ch(t, e) {
  return cd(t.databaseId, e);
}
function S_(t) {
  const e = ew(t);
  return e.length === 4 ? re.emptyPath() : tw(e);
}
function Th(t) {
  return new re([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function tw(t) {
  return se(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function Jm(t, e, n) {
  return { name: Sh(t, e), fields: n.value.mapValue.fields };
}
function C_(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (a) {
        return a === "NO_CHANGE"
          ? 0
          : a === "ADD"
          ? 1
          : a === "REMOVE"
          ? 2
          : a === "CURRENT"
          ? 3
          : a === "RESET"
          ? 4
          : F();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (a, u) {
        return a.useProto3Json
          ? (se(u === void 0 || typeof u == "string"),
            Qe.fromBase64String(u || ""))
          : (se(u === void 0 || u instanceof Uint8Array),
            Qe.fromUint8Array(u || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      l =
        o &&
        (function (a) {
          const u = a.code === void 0 ? C.UNKNOWN : Y1(a.code);
          return new R(u, a.message || "");
        })(o);
    n = new J1(r, i, s, l || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = Hu(t, r.document.name),
      s = Vt(r.document.updateTime),
      o = r.document.createTime ? Vt(r.document.createTime) : b.min(),
      l = new mt({ mapValue: { fields: r.document.fields } }),
      a = Ve.newFoundDocument(i, s, o, l),
      u = r.targetIds || [],
      c = r.removedTargetIds || [];
    n = new ul(u, c, a.key, a);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Hu(t, r.document),
      s = r.readTime ? Vt(r.readTime) : b.min(),
      o = Ve.newNoDocument(i, s),
      l = r.removedTargetIds || [];
    n = new ul([], l, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Hu(t, r.document),
      s = r.removedTargetIds || [];
    n = new ul([], s, i, null);
  } else {
    if (!("filter" in e)) return F();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r,
        o = new f_(i, s),
        l = r.targetId;
      n = new X1(l, o);
    }
  }
  return n;
}
function T_(t, e) {
  let n;
  if (e instanceof co) n = { update: Jm(t, e.key, e.value) };
  else if (e instanceof G1) n = { delete: Sh(t, e.key) };
  else if (e instanceof vr)
    n = { update: Jm(t, e.key, e.data), updateMask: P_(e.fieldMask) };
  else {
    if (!(e instanceof u_)) return F();
    n = { verify: Sh(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (i, s) {
          const o = s.transform;
          if (o instanceof Yl)
            return {
              fieldPath: s.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (o instanceof Vs)
            return {
              fieldPath: s.field.canonicalString(),
              appendMissingElements: { values: o.elements },
            };
          if (o instanceof zs)
            return {
              fieldPath: s.field.canonicalString(),
              removeAllFromArray: { values: o.elements },
            };
          if (o instanceof Xl)
            return { fieldPath: s.field.canonicalString(), increment: o.gt };
          throw F();
        })(0, r)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (r, i) {
        return i.updateTime !== void 0
          ? { updateTime: E_(r, i.updateTime) }
          : i.exists !== void 0
          ? { exists: i.exists }
          : F();
      })(t, e.precondition)),
    n
  );
}
function k_(t, e) {
  return t && t.length > 0
    ? (se(e !== void 0),
      t.map((n) =>
        (function (r, i) {
          let s = r.updateTime ? Vt(r.updateTime) : Vt(i);
          return (
            s.isEqual(b.min()) && (s = Vt(i)),
            new o_(s, r.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function N_(t, e) {
  return { documents: [Ch(t, e.path)] };
}
function __(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  e.collectionGroup !== null
    ? ((n.parent = Ch(t, r)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = Ch(t, r.popLast())),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
  const i = (function (a) {
    if (a.length !== 0) return rw(Rt.create(a, "and"));
  })(e.filters);
  i && (n.structuredQuery.where = i);
  const s = (function (a) {
    if (a.length !== 0)
      return a.map((u) =>
        (function (c) {
          return { field: Sr(c.field), direction: A_(c.dir) };
        })(u)
      );
  })(e.orderBy);
  s && (n.structuredQuery.orderBy = s);
  const o = Eh(t, e.limit);
  var l;
  return (
    o !== null && (n.structuredQuery.limit = o),
    e.startAt &&
      (n.structuredQuery.startAt = {
        before: (l = e.startAt).inclusive,
        values: l.position,
      }),
    e.endAt &&
      (n.structuredQuery.endAt = (function (a) {
        return { before: !a.inclusive, values: a.position };
      })(e.endAt)),
    n
  );
}
function I_(t) {
  let e = S_(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    se(r === 1);
    const c = n.from[0];
    c.allDescendants ? (i = c.collectionId) : (e = e.child(c.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (c) {
      const h = nw(c);
      return h instanceof Rt && $1(h) ? h.getFilters() : [h];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((c) =>
      (function (h) {
        return new ss(
          Cr(h.field),
          (function (f) {
            switch (f) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(h.direction)
        );
      })(c)
    ));
  let l = null;
  n.limit &&
    (l = (function (c) {
      let h;
      return (h = typeof c == "object" ? c.value : c), ba(h) ? null : h;
    })(n.limit));
  let a = null;
  n.startAt &&
    (a = (function (c) {
      const h = !!c.before,
        f = c.values || [];
      return new Gl(f, h);
    })(n.startAt));
  let u = null;
  return (
    n.endAt &&
      (u = (function (c) {
        const h = !c.before,
          f = c.values || [];
        return new Gl(f, h);
      })(n.endAt)),
    QN(e, i, o, s, l, "F", a, u)
  );
}
function $_(t, e) {
  const n = (function (r) {
    switch (r) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return F();
    }
  })(e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function nw(t) {
  return t.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case "IS_NAN":
            const n = Cr(e.unaryFilter.field);
            return we.create(n, "==", { doubleValue: NaN });
          case "IS_NULL":
            const r = Cr(e.unaryFilter.field);
            return we.create(r, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const i = Cr(e.unaryFilter.field);
            return we.create(i, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const s = Cr(e.unaryFilter.field);
            return we.create(s, "!=", { nullValue: "NULL_VALUE" });
          default:
            return F();
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (e) {
        return we.create(
          Cr(e.fieldFilter.field),
          (function (n) {
            switch (n) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              default:
                return F();
            }
          })(e.fieldFilter.op),
          e.fieldFilter.value
        );
      })(t)
    : t.compositeFilter !== void 0
    ? (function (e) {
        return Rt.create(
          e.compositeFilter.filters.map((n) => nw(n)),
          (function (n) {
            switch (n) {
              case "AND":
                return "and";
              case "OR":
                return "or";
              default:
                return F();
            }
          })(e.compositeFilter.op)
        );
      })(t)
    : F();
}
function A_(t) {
  return y_[t];
}
function D_(t) {
  return v_[t];
}
function R_(t) {
  return w_[t];
}
function Sr(t) {
  return { fieldPath: t.canonicalString() };
}
function Cr(t) {
  return ze.fromServerFormat(t.fieldPath);
}
function rw(t) {
  return t instanceof we
    ? (function (e) {
        if (e.op === "==") {
          if (Fm(e.value))
            return { unaryFilter: { field: Sr(e.field), op: "IS_NAN" } };
          if (Mm(e.value))
            return { unaryFilter: { field: Sr(e.field), op: "IS_NULL" } };
        } else if (e.op === "!=") {
          if (Fm(e.value))
            return { unaryFilter: { field: Sr(e.field), op: "IS_NOT_NAN" } };
          if (Mm(e.value))
            return { unaryFilter: { field: Sr(e.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: Sr(e.field), op: D_(e.op), value: e.value },
        };
      })(t)
    : t instanceof Rt
    ? (function (e) {
        const n = e.getFilters().map((r) => rw(r));
        return n.length === 1
          ? n[0]
          : { compositeFilter: { op: R_(e.op), filters: n } };
      })(t)
    : F();
}
function P_(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function iw(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vn {
  constructor(
    e,
    n,
    r,
    i,
    s = b.min(),
    o = b.min(),
    l = Qe.EMPTY_BYTE_STRING,
    a = null
  ) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = l),
      (this.expectedCount = a);
  }
  withSequenceNumber(e) {
    return new vn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(e, n) {
    return new vn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    );
  }
  withExpectedCount(e) {
    return new vn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new vn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O_ {
  constructor(e) {
    this.fe = e;
  }
}
function L_(t) {
  const e = I_({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? wh(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j_ {
  constructor() {
    this.rn = new M_();
  }
  addToCollectionParentIndex(e, n) {
    return this.rn.add(n), N.resolve();
  }
  getCollectionParents(e, n) {
    return N.resolve(this.rn.getEntries(n));
  }
  addFieldIndex(e, n) {
    return N.resolve();
  }
  deleteFieldIndex(e, n) {
    return N.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return N.resolve(null);
  }
  getIndexType(e, n) {
    return N.resolve(0);
  }
  getFieldIndexes(e, n) {
    return N.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return N.resolve(null);
  }
  getMinOffset(e, n) {
    return N.resolve(jn.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return N.resolve(jn.min());
  }
  updateCollectionGroup(e, n, r) {
    return N.resolve();
  }
  updateIndexEntries(e, n) {
    return N.resolve();
  }
}
class M_ {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new We(re.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new We(re.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ai {
  constructor(e) {
    this.Nn = e;
  }
  next() {
    return (this.Nn += 2), this.Nn;
  }
  static kn() {
    return new ai(0);
  }
  static Mn() {
    return new ai(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F_ {
  constructor() {
    (this.changes = new Ci(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, Ve.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? N.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U_ {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b_ {
  constructor(e, n, r, i) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && ls(r.mutation, i, _t.empty(), Ce.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, H()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = H()) {
    const i = tr();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = qi();
        return (
          s.forEach((l, a) => {
            o = o.insert(l, a.overlayedDocument);
          }),
          o
        );
      })
    );
  }
  getOverlayedDocuments(e, n) {
    const r = tr();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, H())
    );
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, l) => {
          n.set(o, l);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = ln();
    const o = os(),
      l = os();
    return (
      n.forEach((a, u) => {
        const c = r.get(u.key);
        i.has(u.key) && (c === void 0 || c.mutation instanceof vr)
          ? (s = s.insert(u.key, u))
          : c !== void 0
          ? (o.set(u.key, c.mutation.getFieldMask()),
            ls(c.mutation, u, c.mutation.getFieldMask(), Ce.now()))
          : o.set(u.key, _t.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (a) => (
          a.forEach((u, c) => o.set(u, c)),
          n.forEach((u, c) => {
            var h;
            return l.set(
              u,
              new U_(c, (h = o.get(u)) !== null && h !== void 0 ? h : null)
            );
          }),
          l
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = os();
    let i = new he((o, l) => o - l),
      s = H();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const l of o)
          l.keys().forEach((a) => {
            const u = n.get(a);
            if (u === null) return;
            let c = r.get(a) || _t.empty();
            (c = l.applyToLocalView(u, c)), r.set(a, c);
            const h = (i.get(l.batchId) || H()).add(a);
            i = i.insert(l.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          l = i.getReverseIterator();
        for (; l.hasNext(); ) {
          const a = l.getNext(),
            u = a.key,
            c = a.value,
            h = b1();
          c.forEach((f) => {
            if (!s.has(f)) {
              const g = K1(n.get(f), r.get(f));
              g !== null && h.set(f, g), (s = s.add(f));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, u, h));
        }
        return N.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r) {
    return (function (i) {
      return (
        M.isDocumentKey(i.path) &&
        i.collectionGroup === null &&
        i.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : L1(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r)
      : this.getDocumentsMatchingCollectionQuery(e, n, r);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size
              )
            : N.resolve(tr());
        let l = -1,
          a = s;
        return o.next((u) =>
          N.forEach(
            u,
            (c, h) => (
              l < h.largestBatchId && (l = h.largestBatchId),
              s.get(c)
                ? N.resolve()
                : this.remoteDocumentCache.getEntry(e, c).next((f) => {
                    a = a.insert(c, f);
                  })
            )
          )
            .next(() => this.populateOverlays(e, u, s))
            .next(() => this.computeViews(e, a, u, H()))
            .next((c) => ({ batchId: l, changes: U1(c) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new M(n)).next((r) => {
      let i = qi();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r) {
    const i = n.collectionGroup;
    let s = qi();
    return this.indexManager.getCollectionParents(e, i).next((o) =>
      N.forEach(o, (l) => {
        const a = (function (u, c) {
          return new uo(
            c,
            null,
            u.explicitOrderBy.slice(),
            u.filters.slice(),
            u.limit,
            u.limitType,
            u.startAt,
            u.endAt
          );
        })(n, l.child(i));
        return this.getDocumentsMatchingCollectionQuery(e, a, r).next((u) => {
          u.forEach((c, h) => {
            s = s.insert(c, h);
          });
        });
      }).next(() => s)
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r) {
    let i;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (s) => (
          (i = s),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, i)
        )
      )
      .next((s) => {
        i.forEach((l, a) => {
          const u = a.getKey();
          s.get(u) === null && (s = s.insert(u, Ve.newInvalidDocument(u)));
        });
        let o = qi();
        return (
          s.forEach((l, a) => {
            const u = i.get(l);
            u !== void 0 && ls(u.mutation, a, _t.empty(), Ce.now()),
              Va(n, a) && (o = o.insert(l, a));
          }),
          o
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B_ {
  constructor(e) {
    (this.serializer = e), (this.cs = new Map()), (this.hs = new Map());
  }
  getBundleMetadata(e, n) {
    return N.resolve(this.cs.get(n));
  }
  saveBundleMetadata(e, n) {
    var r;
    return (
      this.cs.set(n.id, {
        id: (r = n).id,
        version: r.version,
        createTime: Vt(r.createTime),
      }),
      N.resolve()
    );
  }
  getNamedQuery(e, n) {
    return N.resolve(this.hs.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.hs.set(
        n.name,
        (function (r) {
          return {
            name: r.name,
            query: L_(r.bundledQuery),
            readTime: Vt(r.readTime),
          };
        })(n)
      ),
      N.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class V_ {
  constructor() {
    (this.overlays = new he(M.comparator)), (this.ls = new Map());
  }
  getOverlay(e, n) {
    return N.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = tr();
    return N.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s);
      })
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.we(e, n, s);
      }),
      N.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.ls.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.ls.delete(r)),
      N.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = tr(),
      s = n.length + 1,
      o = new M(n.child("")),
      l = this.overlays.getIteratorFrom(o);
    for (; l.hasNext(); ) {
      const a = l.getNext().value,
        u = a.getKey();
      if (!n.isPrefixOf(u.path)) break;
      u.path.length === s && a.largestBatchId > r && i.set(a.getKey(), a);
    }
    return N.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new he((u, c) => u - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const u = o.getNext().value;
      if (u.getKey().getCollectionGroup() === n && u.largestBatchId > r) {
        let c = s.get(u.largestBatchId);
        c === null && ((c = tr()), (s = s.insert(u.largestBatchId, c))),
          c.set(u.getKey(), u);
      }
    }
    const l = tr(),
      a = s.getIterator();
    for (
      ;
      a.hasNext() &&
      (a.getNext().value.forEach((u, c) => l.set(u, c)), !(l.size() >= i));

    );
    return N.resolve(l);
  }
  we(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.ls.get(i.largestBatchId).delete(r.key);
      this.ls.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new h_(n, r));
    let s = this.ls.get(n);
    s === void 0 && ((s = H()), this.ls.set(n, s)),
      this.ls.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hd {
  constructor() {
    (this.fs = new We(Ne.ds)), (this.ws = new We(Ne._s));
  }
  isEmpty() {
    return this.fs.isEmpty();
  }
  addReference(e, n) {
    const r = new Ne(e, n);
    (this.fs = this.fs.add(r)), (this.ws = this.ws.add(r));
  }
  gs(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.ys(new Ne(e, n));
  }
  ps(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  Is(e) {
    const n = new M(new re([])),
      r = new Ne(n, e),
      i = new Ne(n, e + 1),
      s = [];
    return (
      this.ws.forEachInRange([r, i], (o) => {
        this.ys(o), s.push(o.key);
      }),
      s
    );
  }
  Ts() {
    this.fs.forEach((e) => this.ys(e));
  }
  ys(e) {
    (this.fs = this.fs.delete(e)), (this.ws = this.ws.delete(e));
  }
  Es(e) {
    const n = new M(new re([])),
      r = new Ne(n, e),
      i = new Ne(n, e + 1);
    let s = H();
    return (
      this.ws.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new Ne(e, 0),
      r = this.fs.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class Ne {
  constructor(e, n) {
    (this.key = e), (this.As = n);
  }
  static ds(e, n) {
    return M.comparator(e.key, n.key) || Y(e.As, n.As);
  }
  static _s(e, n) {
    return Y(e.As, n.As) || M.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z_ {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.vs = 1),
      (this.Rs = new We(Ne.ds));
  }
  checkEmpty(e) {
    return N.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.vs;
    this.vs++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new c_(s, n, r, i);
    this.mutationQueue.push(o);
    for (const l of i)
      (this.Rs = this.Rs.add(new Ne(l.key, s))),
        this.indexManager.addToCollectionParentIndex(e, l.key.path.popLast());
    return N.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return N.resolve(this.Ps(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.bs(r),
      s = i < 0 ? 0 : i;
    return N.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return N.resolve(this.mutationQueue.length === 0 ? -1 : this.vs - 1);
  }
  getAllMutationBatches(e) {
    return N.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new Ne(n, 0),
      i = new Ne(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.Rs.forEachInRange([r, i], (o) => {
        const l = this.Ps(o.As);
        s.push(l);
      }),
      N.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new We(Y);
    return (
      n.forEach((i) => {
        const s = new Ne(i, 0),
          o = new Ne(i, Number.POSITIVE_INFINITY);
        this.Rs.forEachInRange([s, o], (l) => {
          r = r.add(l.As);
        });
      }),
      N.resolve(this.Vs(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    M.isDocumentKey(s) || (s = s.child(""));
    const o = new Ne(new M(s), 0);
    let l = new We(Y);
    return (
      this.Rs.forEachWhile((a) => {
        const u = a.key.path;
        return !!r.isPrefixOf(u) && (u.length === i && (l = l.add(a.As)), !0);
      }, o),
      N.resolve(this.Vs(l))
    );
  }
  Vs(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.Ps(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    se(this.Ss(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.Rs;
    return N.forEach(n.mutations, (i) => {
      const s = new Ne(i.key, n.batchId);
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      );
    }).next(() => {
      this.Rs = r;
    });
  }
  Cn(e) {}
  containsKey(e, n) {
    const r = new Ne(n, 0),
      i = this.Rs.firstAfterOrEqual(r);
    return N.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, N.resolve();
  }
  Ss(e, n) {
    return this.bs(e);
  }
  bs(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  Ps(e) {
    const n = this.bs(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H_ {
  constructor(e) {
    (this.Ds = e), (this.docs = new he(M.comparator)), (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.Ds(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return N.resolve(r ? r.document.mutableCopy() : Ve.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = ln();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : Ve.newInvalidDocument(i)
        );
      }),
      N.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = ln();
    const o = n.path,
      l = new M(o.child("")),
      a = this.docs.getIteratorFrom(l);
    for (; a.hasNext(); ) {
      const {
        key: u,
        value: { document: c },
      } = a.getNext();
      if (!o.isPrefixOf(u.path)) break;
      u.path.length > o.length + 1 ||
        DN(AN(c), r) <= 0 ||
        ((i.has(c.key) || Va(n, c)) && (s = s.insert(c.key, c.mutableCopy())));
    }
    return N.resolve(s);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    F();
  }
  Cs(e, n) {
    return N.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new q_(this);
  }
  getSize(e) {
    return N.resolve(this.size);
  }
}
class q_ extends F_ {
  constructor(e) {
    super(), (this.os = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.os.addEntry(e, i))
          : this.os.removeEntry(r);
      }),
      N.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.os.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.os.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W_ {
  constructor(e) {
    (this.persistence = e),
      (this.xs = new Ci((n) => id(n), sd)),
      (this.lastRemoteSnapshotVersion = b.min()),
      (this.highestTargetId = 0),
      (this.Ns = 0),
      (this.ks = new hd()),
      (this.targetCount = 0),
      (this.Ms = ai.kn());
  }
  forEachTarget(e, n) {
    return this.xs.forEach((r, i) => n(i)), N.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return N.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return N.resolve(this.Ns);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.Ms.next()), N.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Ns && (this.Ns = n),
      N.resolve()
    );
  }
  Fn(e) {
    this.xs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.Ms = new ai(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Ns && (this.Ns = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.Fn(n), (this.targetCount += 1), N.resolve();
  }
  updateTargetData(e, n) {
    return this.Fn(n), N.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.xs.delete(n.target),
      this.ks.Is(n.targetId),
      (this.targetCount -= 1),
      N.resolve()
    );
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.xs.forEach((o, l) => {
        l.sequenceNumber <= n &&
          r.get(l.targetId) === null &&
          (this.xs.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, l.targetId)),
          i++);
      }),
      N.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return N.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.xs.get(n) || null;
    return N.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.ks.gs(n, r), N.resolve();
  }
  removeMatchingKeys(e, n, r) {
    this.ks.ps(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      N.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.ks.Is(n), N.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.ks.Es(n);
    return N.resolve(r);
  }
  containsKey(e, n) {
    return N.resolve(this.ks.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K_ {
  constructor(e, n) {
    (this.$s = {}),
      (this.overlays = {}),
      (this.Os = new ed(0)),
      (this.Fs = !1),
      (this.Fs = !0),
      (this.referenceDelegate = e(this)),
      (this.Bs = new W_(this)),
      (this.indexManager = new j_()),
      (this.remoteDocumentCache = (function (r) {
        return new H_(r);
      })((r) => this.referenceDelegate.Ls(r))),
      (this.serializer = new O_(n)),
      (this.qs = new B_(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Fs = !1), Promise.resolve();
  }
  get started() {
    return this.Fs;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new V_()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.$s[e.toKey()];
    return (
      r || ((r = new z_(n, this.referenceDelegate)), (this.$s[e.toKey()] = r)),
      r
    );
  }
  getTargetCache() {
    return this.Bs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.qs;
  }
  runTransaction(e, n, r) {
    L("MemoryPersistence", "Starting transaction:", e);
    const i = new Q_(this.Os.next());
    return (
      this.referenceDelegate.Us(),
      r(i)
        .next((s) => this.referenceDelegate.Ks(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Gs(e, n) {
    return N.or(Object.values(this.$s).map((r) => () => r.containsKey(e, n)));
  }
}
class Q_ extends PN {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class fd {
  constructor(e) {
    (this.persistence = e), (this.Qs = new hd()), (this.js = null);
  }
  static zs(e) {
    return new fd(e);
  }
  get Ws() {
    if (this.js) return this.js;
    throw F();
  }
  addReference(e, n, r) {
    return (
      this.Qs.addReference(r, n), this.Ws.delete(r.toString()), N.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Qs.removeReference(r, n), this.Ws.add(r.toString()), N.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Ws.add(n.toString()), N.resolve();
  }
  removeTarget(e, n) {
    this.Qs.Is(n.targetId).forEach((i) => this.Ws.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Ws.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  Us() {
    this.js = new Set();
  }
  Ks(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return N.forEach(this.Ws, (r) => {
      const i = M.fromPath(r);
      return this.Hs(e, i).next((s) => {
        s || n.removeEntry(i, b.min());
      });
    }).next(() => ((this.js = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.Hs(e, n).next((r) => {
      r ? this.Ws.delete(n.toString()) : this.Ws.add(n.toString());
    });
  }
  Ls(e) {
    return 0;
  }
  Hs(e, n) {
    return N.or([
      () => N.resolve(this.Qs.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Gs(e, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dd {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Fi = r), (this.Bi = i);
  }
  static Li(e, n) {
    let r = H(),
      i = H();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new dd(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G_ {
  constructor() {
    this.qi = !1;
  }
  initialize(e, n) {
    (this.Ui = e), (this.indexManager = n), (this.qi = !0);
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return this.Ki(e, n)
      .next((s) => s || this.Gi(e, n, i, r))
      .next((s) => s || this.Qi(e, n));
  }
  Ki(e, n) {
    if (Vm(n)) return N.resolve(null);
    let r = on(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = wh(n, null, "F")), (r = on(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = H(...s);
            return this.Ui.getDocuments(e, o).next((l) =>
              this.indexManager.getMinOffset(e, r).next((a) => {
                const u = this.ji(n, l);
                return this.zi(n, u, o, a.readTime)
                  ? this.Ki(e, wh(n, null, "F"))
                  : this.Wi(e, u, n, a);
              })
            );
          }))
    );
  }
  Gi(e, n, r, i) {
    return Vm(n) || i.isEqual(b.min())
      ? this.Qi(e, n)
      : this.Ui.getDocuments(e, r).next((s) => {
          const o = this.ji(n, s);
          return this.zi(n, o, r, i)
            ? this.Qi(e, n)
            : (Rm() <= X.DEBUG &&
                L(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  xh(n)
                ),
              this.Wi(e, o, n, $N(i, -1)));
        });
  }
  ji(e, n) {
    let r = new We(M1(e));
    return (
      n.forEach((i, s) => {
        Va(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  zi(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Qi(e, n) {
    return (
      Rm() <= X.DEBUG &&
        L("QueryEngine", "Using full collection scan to execute query:", xh(n)),
      this.Ui.getDocumentsMatchingQuery(e, n, jn.min())
    );
  }
  Wi(e, n, r, i) {
    return this.Ui.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y_ {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.Hi = n),
      (this.serializer = i),
      (this.Ji = new he(Y)),
      (this.Yi = new Ci((s) => id(s), sd)),
      (this.Xi = new Map()),
      (this.Zi = e.getRemoteDocumentCache()),
      (this.Bs = e.getTargetCache()),
      (this.qs = e.getBundleCache()),
      this.tr(r);
  }
  tr(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new b_(
        this.Zi,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.Zi.setIndexManager(this.indexManager),
      this.Hi.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.Ji)
    );
  }
}
function X_(t, e, n, r) {
  return new Y_(t, e, n, r);
}
async function sw(t, e) {
  const n = B(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n.tr(e), n.mutationQueue.getAllMutationBatches(r))
        )
        .next((s) => {
          const o = [],
            l = [];
          let a = H();
          for (const u of i) {
            o.push(u.batchId);
            for (const c of u.mutations) a = a.add(c.key);
          }
          for (const u of s) {
            l.push(u.batchId);
            for (const c of u.mutations) a = a.add(c.key);
          }
          return n.localDocuments
            .getDocuments(r, a)
            .next((u) => ({ er: u, removedBatchIds: o, addedBatchIds: l }));
        });
    }
  );
}
function J_(t, e) {
  const n = B(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.Zi.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, l, a, u) {
        const c = a.batch,
          h = c.keys();
        let f = N.resolve();
        return (
          h.forEach((g) => {
            f = f
              .next(() => u.getEntry(l, g))
              .next((v) => {
                const w = a.docVersions.get(g);
                se(w !== null),
                  v.version.compareTo(w) < 0 &&
                    (c.applyToRemoteDocument(v, a),
                    v.isValidDocument() &&
                      (v.setReadTime(a.commitVersion), u.addEntry(v)));
              });
          }),
          f.next(() => o.mutationQueue.removeMutationBatch(l, c))
        );
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId)
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (o) {
              let l = H();
              for (let a = 0; a < o.mutationResults.length; ++a)
                o.mutationResults[a].transformResults.length > 0 &&
                  (l = l.add(o.batch.mutations[a].key));
              return l;
            })(e)
          )
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    }
  );
}
function ow(t) {
  const e = B(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Bs.getLastRemoteSnapshotVersion(n)
  );
}
function Z_(t, e) {
  const n = B(t),
    r = e.snapshotVersion;
  let i = n.Ji;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.Zi.newChangeBuffer({ trackRemovals: !0 });
      i = n.Ji;
      const l = [];
      e.targetChanges.forEach((c, h) => {
        const f = i.get(h);
        if (!f) return;
        l.push(
          n.Bs.removeMatchingKeys(s, c.removedDocuments, h).next(() =>
            n.Bs.addMatchingKeys(s, c.addedDocuments, h)
          )
        );
        let g = f.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.get(h) !== null
          ? (g = g
              .withResumeToken(Qe.EMPTY_BYTE_STRING, b.min())
              .withLastLimboFreeSnapshotVersion(b.min()))
          : c.resumeToken.approximateByteSize() > 0 &&
            (g = g.withResumeToken(c.resumeToken, r)),
          (i = i.insert(h, g)),
          (function (v, w, T) {
            return v.resumeToken.approximateByteSize() === 0 ||
              w.snapshotVersion.toMicroseconds() -
                v.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : T.addedDocuments.size +
                  T.modifiedDocuments.size +
                  T.removedDocuments.size >
                  0;
          })(f, g, c) && l.push(n.Bs.updateTargetData(s, g));
      });
      let a = ln(),
        u = H();
      if (
        (e.documentUpdates.forEach((c) => {
          e.resolvedLimboDocuments.has(c) &&
            l.push(n.persistence.referenceDelegate.updateLimboDocument(s, c));
        }),
        l.push(
          eI(s, o, e.documentUpdates).next((c) => {
            (a = c.nr), (u = c.sr);
          })
        ),
        !r.isEqual(b.min()))
      ) {
        const c = n.Bs.getLastRemoteSnapshotVersion(s).next((h) =>
          n.Bs.setTargetsMetadata(s, s.currentSequenceNumber, r)
        );
        l.push(c);
      }
      return N.waitFor(l)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, a, u))
        .next(() => a);
    })
    .then((s) => ((n.Ji = i), s));
}
function eI(t, e, n) {
  let r = H(),
    i = H();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = ln();
      return (
        n.forEach((l, a) => {
          const u = s.get(l);
          a.isFoundDocument() !== u.isFoundDocument() && (i = i.add(l)),
            a.isNoDocument() && a.version.isEqual(b.min())
              ? (e.removeEntry(l, a.readTime), (o = o.insert(l, a)))
              : !u.isValidDocument() ||
                a.version.compareTo(u.version) > 0 ||
                (a.version.compareTo(u.version) === 0 && u.hasPendingWrites)
              ? (e.addEntry(a), (o = o.insert(l, a)))
              : L(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  l,
                  ". Current version:",
                  u.version,
                  " Watch version:",
                  a.version
                );
        }),
        { nr: o, sr: i }
      );
    })
  );
}
function tI(t, e) {
  const n = B(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    )
  );
}
function nI(t, e) {
  const n = B(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.Bs.getTargetData(r, e).next((s) =>
        s
          ? ((i = s), N.resolve(i))
          : n.Bs.allocateTargetId(r).next(
              (o) => (
                (i = new vn(
                  e,
                  o,
                  "TargetPurposeListen",
                  r.currentSequenceNumber
                )),
                n.Bs.addTargetData(r, i).next(() => i)
              )
            )
      );
    })
    .then((r) => {
      const i = n.Ji.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.Ji = n.Ji.insert(r.targetId, r)), n.Yi.set(e, r.targetId)),
        r
      );
    });
}
async function kh(t, e, n) {
  const r = B(t),
    i = r.Ji.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i)
      ));
  } catch (o) {
    if (!ao(o)) throw o;
    L("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.Ji = r.Ji.remove(e)), r.Yi.delete(i.target);
}
function Zm(t, e, n) {
  const r = B(t);
  let i = b.min(),
    s = H();
  return r.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (l, a, u) {
      const c = B(l),
        h = c.Yi.get(u);
      return h !== void 0 ? N.resolve(c.Ji.get(h)) : c.Bs.getTargetData(a, u);
    })(r, o, on(e))
      .next((l) => {
        if (l)
          return (
            (i = l.lastLimboFreeSnapshotVersion),
            r.Bs.getMatchingKeysForTargetId(o, l.targetId).next((a) => {
              s = a;
            })
          );
      })
      .next(() =>
        r.Hi.getDocumentsMatchingQuery(o, e, n ? i : b.min(), n ? s : H())
      )
      .next((l) => (rI(r, GN(e), l), { documents: l, ir: s }))
  );
}
function rI(t, e, n) {
  let r = t.Xi.get(e) || b.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Xi.set(e, r);
}
class eg {
  constructor() {
    this.activeTargetIds = t_();
  }
  lr(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  dr(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  hr() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class iI {
  constructor() {
    (this.Hr = new eg()),
      (this.Jr = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.Hr.lr(e), this.Jr[e] || "not-current";
  }
  updateQueryState(e, n, r) {
    this.Jr[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.Hr.dr(e);
  }
  isLocalQueryTarget(e) {
    return this.Hr.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Jr[e];
  }
  getAllActiveQueryTargets() {
    return this.Hr.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.Hr.activeTargetIds.has(e);
  }
  start() {
    return (this.Hr = new eg()), Promise.resolve();
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sI {
  Yr(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tg {
  constructor() {
    (this.Xr = () => this.Zr()),
      (this.eo = () => this.no()),
      (this.so = []),
      this.io();
  }
  Yr(e) {
    this.so.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.Xr),
      window.removeEventListener("offline", this.eo);
  }
  io() {
    window.addEventListener("online", this.Xr),
      window.addEventListener("offline", this.eo);
  }
  Zr() {
    L("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.so) e(0);
  }
  no() {
    L("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.so) e(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let zo = null;
function qu() {
  return (
    zo === null
      ? (zo = 268435456 + Math.round(2147483648 * Math.random()))
      : zo++,
    "0x" + zo.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oI = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lI {
  constructor(e) {
    (this.ro = e.ro), (this.oo = e.oo);
  }
  uo(e) {
    this.co = e;
  }
  ao(e) {
    this.ho = e;
  }
  onMessage(e) {
    this.lo = e;
  }
  close() {
    this.oo();
  }
  send(e) {
    this.ro(e);
  }
  fo() {
    this.co();
  }
  wo(e) {
    this.ho(e);
  }
  _o(e) {
    this.lo(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ue = "WebChannelConnection";
class aI extends class {
  constructor(e) {
    (this.databaseInfo = e), (this.databaseId = e.databaseId);
    const n = e.ssl ? "https" : "http";
    (this.mo = n + "://" + e.host),
      (this.yo =
        "projects/" +
        this.databaseId.projectId +
        "/databases/" +
        this.databaseId.database +
        "/documents");
  }
  get po() {
    return !1;
  }
  Io(e, n, r, i, s) {
    const o = qu(),
      l = this.To(e, n);
    L("RestConnection", `Sending RPC '${e}' ${o}:`, l, r);
    const a = {};
    return (
      this.Eo(a, i, s),
      this.Ao(e, l, a, r).then(
        (u) => (L("RestConnection", `Received RPC '${e}' ${o}: `, u), u),
        (u) => {
          throw (
            (ii(
              "RestConnection",
              `RPC '${e}' ${o} failed with error: `,
              u,
              "url: ",
              l,
              "request:",
              r
            ),
            u)
          );
        }
      )
    );
  }
  vo(e, n, r, i, s, o) {
    return this.Io(e, n, r, i, s);
  }
  Eo(e, n, r) {
    (e["X-Goog-Api-Client"] = "gl-js/ fire/" + Ei),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i));
  }
  To(e, n) {
    const r = oI[e];
    return `${this.mo}/v1/${n}:${r}`;
  }
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions);
  }
  Ao(e, n, r, i) {
    const s = qu();
    return new Promise((o, l) => {
      const a = new vN();
      a.setWithCredentials(!0),
        a.listenOnce(mN.COMPLETE, () => {
          try {
            switch (a.getLastErrorCode()) {
              case zu.NO_ERROR:
                const c = a.getResponseJson();
                L(Ue, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(c)),
                  o(c);
                break;
              case zu.TIMEOUT:
                L(Ue, `RPC '${e}' ${s} timed out`),
                  l(new R(C.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case zu.HTTP_ERROR:
                const h = a.getStatus();
                if (
                  (L(
                    Ue,
                    `RPC '${e}' ${s} failed with status:`,
                    h,
                    "response text:",
                    a.getResponseText()
                  ),
                  h > 0)
                ) {
                  let f = a.getResponseJson();
                  Array.isArray(f) && (f = f[0]);
                  const g = f == null ? void 0 : f.error;
                  if (g && g.status && g.message) {
                    const v = (function (w) {
                      const T = w.toLowerCase().replace(/_/g, "-");
                      return Object.values(C).indexOf(T) >= 0 ? T : C.UNKNOWN;
                    })(g.status);
                    l(new R(v, g.message));
                  } else
                    l(
                      new R(
                        C.UNKNOWN,
                        "Server responded with status " + a.getStatus()
                      )
                    );
                } else l(new R(C.UNAVAILABLE, "Connection failed."));
                break;
              default:
                F();
            }
          } finally {
            L(Ue, `RPC '${e}' ${s} completed.`);
          }
        });
      const u = JSON.stringify(i);
      L(Ue, `RPC '${e}' ${s} sending request:`, i), a.send(n, "POST", u, r, 15);
    });
  }
  Ro(e, n, r) {
    const i = qu(),
      s = [this.mo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
      o = dN(),
      l = pN(),
      a = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      u = this.longPollingOptions.timeoutSeconds;
    u !== void 0 && (a.longPollingTimeout = Math.round(1e3 * u)),
      this.useFetchStreams && (a.xmlHttpFactory = new yN({})),
      this.Eo(a.initMessageHeaders, n, r),
      (a.encodeInitMessageHeaders = !0);
    const c = s.join("");
    L(Ue, `Creating RPC '${e}' stream ${i}: ${c}`, a);
    const h = o.createWebChannel(c, a);
    let f = !1,
      g = !1;
    const v = new lI({
        ro: (T) => {
          g
            ? L(Ue, `Not sending because RPC '${e}' stream ${i} is closed:`, T)
            : (f ||
                (L(Ue, `Opening RPC '${e}' stream ${i} transport.`),
                h.open(),
                (f = !0)),
              L(Ue, `RPC '${e}' stream ${i} sending:`, T),
              h.send(T));
        },
        oo: () => h.close(),
      }),
      w = (T, m, d) => {
        T.listen(m, (y) => {
          try {
            d(y);
          } catch (S) {
            setTimeout(() => {
              throw S;
            }, 0);
          }
        });
      };
    return (
      w(h, Uo.EventType.OPEN, () => {
        g || L(Ue, `RPC '${e}' stream ${i} transport opened.`);
      }),
      w(h, Uo.EventType.CLOSE, () => {
        g ||
          ((g = !0), L(Ue, `RPC '${e}' stream ${i} transport closed`), v.wo());
      }),
      w(h, Uo.EventType.ERROR, (T) => {
        g ||
          ((g = !0),
          ii(Ue, `RPC '${e}' stream ${i} transport errored:`, T),
          v.wo(new R(C.UNAVAILABLE, "The operation could not be completed")));
      }),
      w(h, Uo.EventType.MESSAGE, (T) => {
        var m;
        if (!g) {
          const d = T.data[0];
          se(!!d);
          const y = d,
            S =
              y.error ||
              ((m = y[0]) === null || m === void 0 ? void 0 : m.error);
          if (S) {
            L(Ue, `RPC '${e}' stream ${i} received error:`, S);
            const I = S.status;
            let P = (function (j) {
                const oe = ge[j];
                if (oe !== void 0) return Y1(oe);
              })(I),
              O = S.message;
            P === void 0 &&
              ((P = C.INTERNAL),
              (O =
                "Unknown error status: " + I + " with message " + S.message)),
              (g = !0),
              v.wo(new R(P, O)),
              h.close();
          } else L(Ue, `RPC '${e}' stream ${i} received:`, d), v._o(d);
        }
      }),
      w(l, gN.STAT_EVENT, (T) => {
        T.stat === Am.PROXY
          ? L(Ue, `RPC '${e}' stream ${i} detected buffering proxy`)
          : T.stat === Am.NOPROXY &&
            L(Ue, `RPC '${e}' stream ${i} detected no buffering proxy`);
      }),
      setTimeout(() => {
        v.fo();
      }, 0),
      v
    );
  }
}
function Wu() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wa(t) {
  return new x_(t, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lw {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.ii = e),
      (this.timerId = n),
      (this.Po = r),
      (this.bo = i),
      (this.Vo = s),
      (this.So = 0),
      (this.Do = null),
      (this.Co = Date.now()),
      this.reset();
  }
  reset() {
    this.So = 0;
  }
  xo() {
    this.So = this.Vo;
  }
  No(e) {
    this.cancel();
    const n = Math.floor(this.So + this.ko()),
      r = Math.max(0, Date.now() - this.Co),
      i = Math.max(0, n - r);
    i > 0 &&
      L(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.Do = this.ii.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Co = Date.now()), e())
      )),
      (this.So *= this.bo),
      this.So < this.Po && (this.So = this.Po),
      this.So > this.Vo && (this.So = this.Vo);
  }
  Mo() {
    this.Do !== null && (this.Do.skipDelay(), (this.Do = null));
  }
  cancel() {
    this.Do !== null && (this.Do.cancel(), (this.Do = null));
  }
  ko() {
    return (Math.random() - 0.5) * this.So;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aw {
  constructor(e, n, r, i, s, o, l, a) {
    (this.ii = e),
      (this.$o = r),
      (this.Oo = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = l),
      (this.listener = a),
      (this.state = 0),
      (this.Fo = 0),
      (this.Bo = null),
      (this.Lo = null),
      (this.stream = null),
      (this.qo = new lw(e, n));
  }
  Uo() {
    return this.state === 1 || this.state === 5 || this.Ko();
  }
  Ko() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Go();
  }
  async stop() {
    this.Uo() && (await this.close(0));
  }
  Qo() {
    (this.state = 0), this.qo.reset();
  }
  jo() {
    this.Ko() &&
      this.Bo === null &&
      (this.Bo = this.ii.enqueueAfterDelay(this.$o, 6e4, () => this.zo()));
  }
  Wo(e) {
    this.Ho(), this.stream.send(e);
  }
  async zo() {
    if (this.Ko()) return this.close(0);
  }
  Ho() {
    this.Bo && (this.Bo.cancel(), (this.Bo = null));
  }
  Jo() {
    this.Lo && (this.Lo.cancel(), (this.Lo = null));
  }
  async close(e, n) {
    this.Ho(),
      this.Jo(),
      this.qo.cancel(),
      this.Fo++,
      e !== 4
        ? this.qo.reset()
        : n && n.code === C.RESOURCE_EXHAUSTED
        ? (sn(n.toString()),
          sn("Using maximum backoff delay to prevent overloading the backend."),
          this.qo.xo())
        : n &&
          n.code === C.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.Yo(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.ao(n);
  }
  Yo() {}
  auth() {
    this.state = 1;
    const e = this.Xo(this.Fo),
      n = this.Fo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Fo === n && this.Zo(r, i);
      },
      (r) => {
        e(() => {
          const i = new R(
            C.UNKNOWN,
            "Fetching auth token failed: " + r.message
          );
          return this.tu(i);
        });
      }
    );
  }
  Zo(e, n) {
    const r = this.Xo(this.Fo);
    (this.stream = this.eu(e, n)),
      this.stream.uo(() => {
        r(
          () => (
            (this.state = 2),
            (this.Lo = this.ii.enqueueAfterDelay(
              this.Oo,
              1e4,
              () => (this.Ko() && (this.state = 3), Promise.resolve())
            )),
            this.listener.uo()
          )
        );
      }),
      this.stream.ao((i) => {
        r(() => this.tu(i));
      }),
      this.stream.onMessage((i) => {
        r(() => this.onMessage(i));
      });
  }
  Go() {
    (this.state = 5),
      this.qo.No(async () => {
        (this.state = 0), this.start();
      });
  }
  tu(e) {
    return (
      L("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Xo(e) {
    return (n) => {
      this.ii.enqueueAndForget(() =>
        this.Fo === e
          ? n()
          : (L(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class uI extends aw {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.serializer = s);
  }
  eu(e, n) {
    return this.connection.Ro("Listen", e, n);
  }
  onMessage(e) {
    this.qo.reset();
    const n = C_(this.serializer, e),
      r = (function (i) {
        if (!("targetChange" in i)) return b.min();
        const s = i.targetChange;
        return s.targetIds && s.targetIds.length
          ? b.min()
          : s.readTime
          ? Vt(s.readTime)
          : b.min();
      })(e);
    return this.listener.nu(n, r);
  }
  su(e) {
    const n = {};
    (n.database = Th(this.serializer)),
      (n.addTarget = (function (i, s) {
        let o;
        const l = s.target;
        if (
          ((o = yh(l) ? { documents: N_(i, l) } : { query: __(i, l) }),
          (o.targetId = s.targetId),
          s.resumeToken.approximateByteSize() > 0)
        ) {
          o.resumeToken = Z1(i, s.resumeToken);
          const a = Eh(i, s.expectedCount);
          a !== null && (o.expectedCount = a);
        } else if (s.snapshotVersion.compareTo(b.min()) > 0) {
          o.readTime = Jl(i, s.snapshotVersion.toTimestamp());
          const a = Eh(i, s.expectedCount);
          a !== null && (o.expectedCount = a);
        }
        return o;
      })(this.serializer, e));
    const r = $_(this.serializer, e);
    r && (n.labels = r), this.Wo(n);
  }
  iu(e) {
    const n = {};
    (n.database = Th(this.serializer)), (n.removeTarget = e), this.Wo(n);
  }
}
class cI extends aw {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o
    ),
      (this.serializer = s),
      (this.ru = !1);
  }
  get ou() {
    return this.ru;
  }
  start() {
    (this.ru = !1), (this.lastStreamToken = void 0), super.start();
  }
  Yo() {
    this.ru && this.uu([]);
  }
  eu(e, n) {
    return this.connection.Ro("Write", e, n);
  }
  onMessage(e) {
    if (
      (se(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.ru)
    ) {
      this.qo.reset();
      const n = k_(e.writeResults, e.commitTime),
        r = Vt(e.commitTime);
      return this.listener.cu(r, n);
    }
    return (
      se(!e.writeResults || e.writeResults.length === 0),
      (this.ru = !0),
      this.listener.au()
    );
  }
  hu() {
    const e = {};
    (e.database = Th(this.serializer)), this.Wo(e);
  }
  uu(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => T_(this.serializer, r)),
    };
    this.Wo(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hI extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.lu = !1);
  }
  fu() {
    if (this.lu)
      throw new R(
        C.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  Io(e, n, r) {
    return (
      this.fu(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, s]) => this.connection.Io(e, n, r, i, s))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === C.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new R(C.UNKNOWN, i.toString());
        })
    );
  }
  vo(e, n, r, i) {
    return (
      this.fu(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.vo(e, n, r, s, o, i))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === C.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new R(C.UNKNOWN, s.toString());
        })
    );
  }
  terminate() {
    this.lu = !0;
  }
}
class fI {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.wu = 0),
      (this._u = null),
      (this.mu = !0);
  }
  gu() {
    this.wu === 0 &&
      (this.yu("Unknown"),
      (this._u = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this._u = null),
          this.pu("Backend didn't respond within 10 seconds."),
          this.yu("Offline"),
          Promise.resolve()
        )
      )));
  }
  Iu(e) {
    this.state === "Online"
      ? this.yu("Unknown")
      : (this.wu++,
        this.wu >= 1 &&
          (this.Tu(),
          this.pu(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.yu("Offline")));
  }
  set(e) {
    this.Tu(), (this.wu = 0), e === "Online" && (this.mu = !1), this.yu(e);
  }
  yu(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  pu(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.mu ? (sn(n), (this.mu = !1)) : L("OnlineStateTracker", n);
  }
  Tu() {
    this._u !== null && (this._u.cancel(), (this._u = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dI {
  constructor(e, n, r, i, s) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.Eu = []),
      (this.Au = new Map()),
      (this.vu = new Set()),
      (this.Ru = []),
      (this.Pu = s),
      this.Pu.Yr((o) => {
        r.enqueueAndForget(async () => {
          wr(this) &&
            (L(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (l) {
              const a = B(l);
              a.vu.add(4),
                await fo(a),
                a.bu.set("Unknown"),
                a.vu.delete(4),
                await Ka(a);
            })(this));
        });
      }),
      (this.bu = new fI(r, i));
  }
}
async function Ka(t) {
  if (wr(t)) for (const e of t.Ru) await e(!0);
}
async function fo(t) {
  for (const e of t.Ru) await e(!1);
}
function uw(t, e) {
  const n = B(t);
  n.Au.has(e.targetId) ||
    (n.Au.set(e.targetId, e), gd(n) ? md(n) : Ti(n).Ko() && pd(n, e));
}
function cw(t, e) {
  const n = B(t),
    r = Ti(n);
  n.Au.delete(e),
    r.Ko() && hw(n, e),
    n.Au.size === 0 && (r.Ko() ? r.jo() : wr(n) && n.bu.set("Unknown"));
}
function pd(t, e) {
  if (
    (t.Vu.qt(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(b.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n);
  }
  Ti(t).su(e);
}
function hw(t, e) {
  t.Vu.qt(e), Ti(t).iu(e);
}
function md(t) {
  (t.Vu = new g_({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    le: (e) => t.Au.get(e) || null,
    ue: () => t.datastore.serializer.databaseId,
  })),
    Ti(t).start(),
    t.bu.gu();
}
function gd(t) {
  return wr(t) && !Ti(t).Uo() && t.Au.size > 0;
}
function wr(t) {
  return B(t).vu.size === 0;
}
function fw(t) {
  t.Vu = void 0;
}
async function pI(t) {
  t.Au.forEach((e, n) => {
    pd(t, e);
  });
}
async function mI(t, e) {
  fw(t), gd(t) ? (t.bu.Iu(e), md(t)) : t.bu.set("Unknown");
}
async function gI(t, e, n) {
  if ((t.bu.set("Online"), e instanceof J1 && e.state === 2 && e.cause))
    try {
      await (async function (r, i) {
        const s = i.cause;
        for (const o of i.targetIds)
          r.Au.has(o) &&
            (await r.remoteSyncer.rejectListen(o, s),
            r.Au.delete(o),
            r.Vu.removeTarget(o));
      })(t, e);
    } catch (r) {
      L(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r
      ),
        await Zl(t, r);
    }
  else if (
    (e instanceof ul ? t.Vu.Ht(e) : e instanceof X1 ? t.Vu.ne(e) : t.Vu.Xt(e),
    !n.isEqual(b.min()))
  )
    try {
      const r = await ow(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (i, s) {
          const o = i.Vu.ce(s);
          return (
            o.targetChanges.forEach((l, a) => {
              if (l.resumeToken.approximateByteSize() > 0) {
                const u = i.Au.get(a);
                u && i.Au.set(a, u.withResumeToken(l.resumeToken, s));
              }
            }),
            o.targetMismatches.forEach((l, a) => {
              const u = i.Au.get(l);
              if (!u) return;
              i.Au.set(
                l,
                u.withResumeToken(Qe.EMPTY_BYTE_STRING, u.snapshotVersion)
              ),
                hw(i, l);
              const c = new vn(u.target, l, a, u.sequenceNumber);
              pd(i, c);
            }),
            i.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (r) {
      L("RemoteStore", "Failed to raise snapshot:", r), await Zl(t, r);
    }
}
async function Zl(t, e, n) {
  if (!ao(e)) throw e;
  t.vu.add(1),
    await fo(t),
    t.bu.set("Offline"),
    n || (n = () => ow(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      L("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t.vu.delete(1),
        await Ka(t);
    });
}
function dw(t, e) {
  return e().catch((n) => Zl(t, n, e));
}
async function Qa(t) {
  const e = B(t),
    n = Fn(e);
  let r = e.Eu.length > 0 ? e.Eu[e.Eu.length - 1].batchId : -1;
  for (; yI(e); )
    try {
      const i = await tI(e.localStore, r);
      if (i === null) {
        e.Eu.length === 0 && n.jo();
        break;
      }
      (r = i.batchId), vI(e, i);
    } catch (i) {
      await Zl(e, i);
    }
  pw(e) && mw(e);
}
function yI(t) {
  return wr(t) && t.Eu.length < 10;
}
function vI(t, e) {
  t.Eu.push(e);
  const n = Fn(t);
  n.Ko() && n.ou && n.uu(e.mutations);
}
function pw(t) {
  return wr(t) && !Fn(t).Uo() && t.Eu.length > 0;
}
function mw(t) {
  Fn(t).start();
}
async function wI(t) {
  Fn(t).hu();
}
async function xI(t) {
  const e = Fn(t);
  for (const n of t.Eu) e.uu(n.mutations);
}
async function EI(t, e, n) {
  const r = t.Eu.shift(),
    i = ld.from(r, e, n);
  await dw(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Qa(t);
}
async function SI(t, e) {
  e &&
    Fn(t).ou &&
    (await (async function (n, r) {
      if (((i = r.code), d_(i) && i !== C.ABORTED)) {
        const s = n.Eu.shift();
        Fn(n).Qo(),
          await dw(n, () => n.remoteSyncer.rejectFailedWrite(s.batchId, r)),
          await Qa(n);
      }
      var i;
    })(t, e)),
    pw(t) && mw(t);
}
async function ng(t, e) {
  const n = B(t);
  n.asyncQueue.verifyOperationInProgress(),
    L("RemoteStore", "RemoteStore received new credentials");
  const r = wr(n);
  n.vu.add(3),
    await fo(n),
    r && n.bu.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n.vu.delete(3),
    await Ka(n);
}
async function CI(t, e) {
  const n = B(t);
  e
    ? (n.vu.delete(2), await Ka(n))
    : e || (n.vu.add(2), await fo(n), n.bu.set("Unknown"));
}
function Ti(t) {
  return (
    t.Su ||
      ((t.Su = (function (e, n, r) {
        const i = B(e);
        return (
          i.fu(),
          new uI(
            n,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.serializer,
            r
          )
        );
      })(t.datastore, t.asyncQueue, {
        uo: pI.bind(null, t),
        ao: mI.bind(null, t),
        nu: gI.bind(null, t),
      })),
      t.Ru.push(async (e) => {
        e
          ? (t.Su.Qo(), gd(t) ? md(t) : t.bu.set("Unknown"))
          : (await t.Su.stop(), fw(t));
      })),
    t.Su
  );
}
function Fn(t) {
  return (
    t.Du ||
      ((t.Du = (function (e, n, r) {
        const i = B(e);
        return (
          i.fu(),
          new cI(
            n,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.serializer,
            r
          )
        );
      })(t.datastore, t.asyncQueue, {
        uo: wI.bind(null, t),
        ao: SI.bind(null, t),
        au: xI.bind(null, t),
        cu: EI.bind(null, t),
      })),
      t.Ru.push(async (e) => {
        e
          ? (t.Du.Qo(), await Qa(t))
          : (await t.Du.stop(),
            t.Eu.length > 0 &&
              (L(
                "RemoteStore",
                `Stopping write stream with ${t.Eu.length} pending writes`
              ),
              (t.Eu = [])));
      })),
    t.Du
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yd {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Rn()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      l = new yd(e, n, o, i, s);
    return l.start(r), l;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new R(C.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function vd(t, e) {
  if ((sn("AsyncQueue", `${e}: ${t}`), ao(t)))
    return new R(C.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || M.comparator(n.key, r.key)
      : (n, r) => M.comparator(n.key, r.key)),
      (this.keyedMap = qi()),
      (this.sortedSet = new he(this.comparator));
  }
  static emptySet(e) {
    return new Kr(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof Kr) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new Kr();
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg {
  constructor() {
    this.Cu = new he(M.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.Cu.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.Cu = this.Cu.insert(n, e))
        : e.type === 3 && r.type !== 1
        ? (this.Cu = this.Cu.insert(n, { type: r.type, doc: e.doc }))
        : e.type === 2 && r.type === 2
        ? (this.Cu = this.Cu.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && r.type === 0
        ? (this.Cu = this.Cu.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && r.type === 0
        ? (this.Cu = this.Cu.remove(n))
        : e.type === 1 && r.type === 2
        ? (this.Cu = this.Cu.insert(n, { type: 1, doc: r.doc }))
        : e.type === 0 && r.type === 1
        ? (this.Cu = this.Cu.insert(n, { type: 2, doc: e.doc }))
        : F()
      : (this.Cu = this.Cu.insert(n, e));
  }
  xu() {
    const e = [];
    return (
      this.Cu.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class ui {
  constructor(e, n, r, i, s, o, l, a, u) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = l),
      (this.excludesMetadataChanges = a),
      (this.hasCachedResults = u);
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = [];
    return (
      n.forEach((l) => {
        o.push({ type: 0, doc: l });
      }),
      new ui(e, n, Kr.emptySet(n), o, r, i, !0, !1, s)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Ba(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TI {
  constructor() {
    (this.Nu = void 0), (this.listeners = []);
  }
}
class kI {
  constructor() {
    (this.queries = new Ci((e) => j1(e), Ba)),
      (this.onlineState = "Unknown"),
      (this.ku = new Set());
  }
}
async function NI(t, e) {
  const n = B(t),
    r = e.query;
  let i = !1,
    s = n.queries.get(r);
  if ((s || ((i = !0), (s = new TI())), i))
    try {
      s.Nu = await n.onListen(r);
    } catch (o) {
      const l = vd(o, `Initialization of query '${xh(e.query)}' failed`);
      return void e.onError(l);
    }
  n.queries.set(r, s),
    s.listeners.push(e),
    e.Mu(n.onlineState),
    s.Nu && e.$u(s.Nu) && wd(n);
}
async function _I(t, e) {
  const n = B(t),
    r = e.query;
  let i = !1;
  const s = n.queries.get(r);
  if (s) {
    const o = s.listeners.indexOf(e);
    o >= 0 && (s.listeners.splice(o, 1), (i = s.listeners.length === 0));
  }
  if (i) return n.queries.delete(r), n.onUnlisten(r);
}
function II(t, e) {
  const n = B(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const l of o.listeners) l.$u(i) && (r = !0);
      o.Nu = i;
    }
  }
  r && wd(n);
}
function $I(t, e, n) {
  const r = B(t),
    i = r.queries.get(e);
  if (i) for (const s of i.listeners) s.onError(n);
  r.queries.delete(e);
}
function wd(t) {
  t.ku.forEach((e) => {
    e.next();
  });
}
class AI {
  constructor(e, n, r) {
    (this.query = e),
      (this.Ou = n),
      (this.Fu = !1),
      (this.Bu = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  $u(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new ui(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let n = !1;
    return (
      this.Fu
        ? this.Lu(e) && (this.Ou.next(e), (n = !0))
        : this.qu(e, this.onlineState) && (this.Uu(e), (n = !0)),
      (this.Bu = e),
      n
    );
  }
  onError(e) {
    this.Ou.error(e);
  }
  Mu(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.Bu &&
        !this.Fu &&
        this.qu(this.Bu, e) &&
        (this.Uu(this.Bu), (n = !0)),
      n
    );
  }
  qu(e, n) {
    if (!e.fromCache) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.Ku || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  Lu(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Bu && this.Bu.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  Uu(e) {
    (e = ui.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.Fu = !0),
      this.Ou.next(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gw {
  constructor(e) {
    this.key = e;
  }
}
class yw {
  constructor(e) {
    this.key = e;
  }
}
class DI {
  constructor(e, n) {
    (this.query = e),
      (this.Yu = n),
      (this.Xu = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Zu = H()),
      (this.mutatedKeys = H()),
      (this.tc = M1(e)),
      (this.ec = new Kr(this.tc));
  }
  get nc() {
    return this.Yu;
  }
  sc(e, n) {
    const r = n ? n.ic : new rg(),
      i = n ? n.ec : this.ec;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      l = !1;
    const a =
        this.query.limitType === "F" && i.size === this.query.limit
          ? i.last()
          : null,
      u =
        this.query.limitType === "L" && i.size === this.query.limit
          ? i.first()
          : null;
    if (
      (e.inorderTraversal((c, h) => {
        const f = i.get(c),
          g = Va(this.query, h) ? h : null,
          v = !!f && this.mutatedKeys.has(f.key),
          w =
            !!g &&
            (g.hasLocalMutations ||
              (this.mutatedKeys.has(g.key) && g.hasCommittedMutations));
        let T = !1;
        f && g
          ? f.data.isEqual(g.data)
            ? v !== w && (r.track({ type: 3, doc: g }), (T = !0))
            : this.rc(f, g) ||
              (r.track({ type: 2, doc: g }),
              (T = !0),
              ((a && this.tc(g, a) > 0) || (u && this.tc(g, u) < 0)) &&
                (l = !0))
          : !f && g
          ? (r.track({ type: 0, doc: g }), (T = !0))
          : f &&
            !g &&
            (r.track({ type: 1, doc: f }), (T = !0), (a || u) && (l = !0)),
          T &&
            (g
              ? ((o = o.add(g)), (s = w ? s.add(c) : s.delete(c)))
              : ((o = o.delete(c)), (s = s.delete(c))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const c = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(c.key)),
          (s = s.delete(c.key)),
          r.track({ type: 1, doc: c });
      }
    return { ec: o, ic: r, zi: l, mutatedKeys: s };
  }
  rc(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r) {
    const i = this.ec;
    (this.ec = e.ec), (this.mutatedKeys = e.mutatedKeys);
    const s = e.ic.xu();
    s.sort(
      (u, c) =>
        (function (h, f) {
          const g = (v) => {
            switch (v) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return F();
            }
          };
          return g(h) - g(f);
        })(u.type, c.type) || this.tc(u.doc, c.doc)
    ),
      this.oc(r);
    const o = n ? this.uc() : [],
      l = this.Zu.size === 0 && this.current ? 1 : 0,
      a = l !== this.Xu;
    return (
      (this.Xu = l),
      s.length !== 0 || a
        ? {
            snapshot: new ui(
              this.query,
              e.ec,
              i,
              s,
              e.mutatedKeys,
              l === 0,
              a,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0
            ),
            cc: o,
          }
        : { cc: o }
    );
  }
  Mu(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { ec: this.ec, ic: new rg(), mutatedKeys: this.mutatedKeys, zi: !1 },
          !1
        ))
      : { cc: [] };
  }
  ac(e) {
    return (
      !this.Yu.has(e) && !!this.ec.has(e) && !this.ec.get(e).hasLocalMutations
    );
  }
  oc(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Yu = this.Yu.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Yu = this.Yu.delete(n))),
      (this.current = e.current));
  }
  uc() {
    if (!this.current) return [];
    const e = this.Zu;
    (this.Zu = H()),
      this.ec.forEach((r) => {
        this.ac(r.key) && (this.Zu = this.Zu.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.Zu.has(r) || n.push(new yw(r));
      }),
      this.Zu.forEach((r) => {
        e.has(r) || n.push(new gw(r));
      }),
      n
    );
  }
  hc(e) {
    (this.Yu = e.ir), (this.Zu = H());
    const n = this.sc(e.documents);
    return this.applyChanges(n, !0);
  }
  lc() {
    return ui.fromInitialDocuments(
      this.query,
      this.ec,
      this.mutatedKeys,
      this.Xu === 0,
      this.hasCachedResults
    );
  }
}
class RI {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class PI {
  constructor(e) {
    (this.key = e), (this.fc = !1);
  }
}
class OI {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.dc = {}),
      (this.wc = new Ci((l) => j1(l), Ba)),
      (this._c = new Map()),
      (this.mc = new Set()),
      (this.gc = new he(M.comparator)),
      (this.yc = new Map()),
      (this.Ic = new hd()),
      (this.Tc = {}),
      (this.Ec = new Map()),
      (this.Ac = ai.Mn()),
      (this.onlineState = "Unknown"),
      (this.vc = void 0);
  }
  get isPrimaryClient() {
    return this.vc === !0;
  }
}
async function LI(t, e) {
  const n = qI(t);
  let r, i;
  const s = n.wc.get(e);
  if (s)
    (r = s.targetId),
      n.sharedClientState.addLocalQueryTarget(r),
      (i = s.view.lc());
  else {
    const o = await nI(n.localStore, on(e)),
      l = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId),
      (i = await jI(n, e, r, l === "current", o.resumeToken)),
      n.isPrimaryClient && uw(n.remoteStore, o);
  }
  return i;
}
async function jI(t, e, n, r, i) {
  t.Rc = (h, f, g) =>
    (async function (v, w, T, m) {
      let d = w.view.sc(T);
      d.zi &&
        (d = await Zm(v.localStore, w.query, !1).then(({ documents: I }) =>
          w.view.sc(I, d)
        ));
      const y = m && m.targetChanges.get(w.targetId),
        S = w.view.applyChanges(d, v.isPrimaryClient, y);
      return sg(v, w.targetId, S.cc), S.snapshot;
    })(t, h, f, g);
  const s = await Zm(t.localStore, e, !0),
    o = new DI(e, s.ir),
    l = o.sc(s.documents),
    a = ho.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline",
      i
    ),
    u = o.applyChanges(l, t.isPrimaryClient, a);
  sg(t, n, u.cc);
  const c = new RI(e, n, o);
  return (
    t.wc.set(e, c),
    t._c.has(n) ? t._c.get(n).push(e) : t._c.set(n, [e]),
    u.snapshot
  );
}
async function MI(t, e) {
  const n = B(t),
    r = n.wc.get(e),
    i = n._c.get(r.targetId);
  if (i.length > 1)
    return (
      n._c.set(
        r.targetId,
        i.filter((s) => !Ba(s, e))
      ),
      void n.wc.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
      n.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await kh(n.localStore, r.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(r.targetId),
              cw(n.remoteStore, r.targetId),
              Nh(n, r.targetId);
          })
          .catch(lo)))
    : (Nh(n, r.targetId), await kh(n.localStore, r.targetId, !0));
}
async function FI(t, e, n) {
  const r = WI(t);
  try {
    const i = await (function (s, o) {
      const l = B(s),
        a = Ce.now(),
        u = o.reduce((f, g) => f.add(g.key), H());
      let c, h;
      return l.persistence
        .runTransaction("Locally write mutations", "readwrite", (f) => {
          let g = ln(),
            v = H();
          return l.Zi.getEntries(f, u)
            .next((w) => {
              (g = w),
                g.forEach((T, m) => {
                  m.isValidDocument() || (v = v.add(T));
                });
            })
            .next(() => l.localDocuments.getOverlayedDocuments(f, g))
            .next((w) => {
              c = w;
              const T = [];
              for (const m of o) {
                const d = a_(m, c.get(m.key).overlayedDocument);
                d != null &&
                  T.push(new vr(m.key, d, N1(d.value.mapValue), Jt.exists(!0)));
              }
              return l.mutationQueue.addMutationBatch(f, a, T, o);
            })
            .next((w) => {
              h = w;
              const T = w.applyToLocalDocumentSet(c, v);
              return l.documentOverlayCache.saveOverlays(f, w.batchId, T);
            });
        })
        .then(() => ({ batchId: h.batchId, changes: U1(c) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (s, o, l) {
        let a = s.Tc[s.currentUser.toKey()];
        a || (a = new he(Y)),
          (a = a.insert(o, l)),
          (s.Tc[s.currentUser.toKey()] = a);
      })(r, i.batchId, n),
      await po(r, i.changes),
      await Qa(r.remoteStore);
  } catch (i) {
    const s = vd(i, "Failed to persist write");
    n.reject(s);
  }
}
async function vw(t, e) {
  const n = B(t);
  try {
    const r = await Z_(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.yc.get(s);
      o &&
        (se(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1
        ),
        i.addedDocuments.size > 0
          ? (o.fc = !0)
          : i.modifiedDocuments.size > 0
          ? se(o.fc)
          : i.removedDocuments.size > 0 && (se(o.fc), (o.fc = !1)));
    }),
      await po(n, r, e);
  } catch (r) {
    await lo(r);
  }
}
function ig(t, e, n) {
  const r = B(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.wc.forEach((s, o) => {
      const l = o.view.Mu(e);
      l.snapshot && i.push(l.snapshot);
    }),
      (function (s, o) {
        const l = B(s);
        l.onlineState = o;
        let a = !1;
        l.queries.forEach((u, c) => {
          for (const h of c.listeners) h.Mu(o) && (a = !0);
        }),
          a && wd(l);
      })(r.eventManager, e),
      i.length && r.dc.nu(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function UI(t, e, n) {
  const r = B(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.yc.get(e),
    s = i && i.key;
  if (s) {
    let o = new he(M.comparator);
    o = o.insert(s, Ve.newNoDocument(s, b.min()));
    const l = H().add(s),
      a = new qa(b.min(), new Map(), new he(Y), o, l);
    await vw(r, a), (r.gc = r.gc.remove(s)), r.yc.delete(e), xd(r);
  } else
    await kh(r.localStore, e, !1)
      .then(() => Nh(r, e, n))
      .catch(lo);
}
async function bI(t, e) {
  const n = B(t),
    r = e.batch.batchId;
  try {
    const i = await J_(n.localStore, e);
    xw(n, r, null),
      ww(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await po(n, i);
  } catch (i) {
    await lo(i);
  }
}
async function BI(t, e, n) {
  const r = B(t);
  try {
    const i = await (function (s, o) {
      const l = B(s);
      return l.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (a) => {
          let u;
          return l.mutationQueue
            .lookupMutationBatch(a, o)
            .next(
              (c) => (
                se(c !== null),
                (u = c.keys()),
                l.mutationQueue.removeMutationBatch(a, c)
              )
            )
            .next(() => l.mutationQueue.performConsistencyCheck(a))
            .next(() =>
              l.documentOverlayCache.removeOverlaysForBatchId(a, u, o)
            )
            .next(() =>
              l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a, u)
            )
            .next(() => l.localDocuments.getDocuments(a, u));
        }
      );
    })(r.localStore, e);
    xw(r, e, n),
      ww(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await po(r, i);
  } catch (i) {
    await lo(i);
  }
}
function ww(t, e) {
  (t.Ec.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.Ec.delete(e);
}
function xw(t, e, n) {
  const r = B(t);
  let i = r.Tc[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.Tc[r.currentUser.toKey()] = i);
  }
}
function Nh(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t._c.get(e)) t.wc.delete(r), n && t.dc.Pc(r, n);
  t._c.delete(e),
    t.isPrimaryClient &&
      t.Ic.Is(e).forEach((r) => {
        t.Ic.containsKey(r) || Ew(t, r);
      });
}
function Ew(t, e) {
  t.mc.delete(e.path.canonicalString());
  const n = t.gc.get(e);
  n !== null &&
    (cw(t.remoteStore, n), (t.gc = t.gc.remove(e)), t.yc.delete(n), xd(t));
}
function sg(t, e, n) {
  for (const r of n)
    r instanceof gw
      ? (t.Ic.addReference(r.key, e), VI(t, r))
      : r instanceof yw
      ? (L("SyncEngine", "Document no longer in limbo: " + r.key),
        t.Ic.removeReference(r.key, e),
        t.Ic.containsKey(r.key) || Ew(t, r.key))
      : F();
}
function VI(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.gc.get(n) ||
    t.mc.has(r) ||
    (L("SyncEngine", "New document in limbo: " + n), t.mc.add(r), xd(t));
}
function xd(t) {
  for (; t.mc.size > 0 && t.gc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.mc.values().next().value;
    t.mc.delete(e);
    const n = new M(re.fromString(e)),
      r = t.Ac.next();
    t.yc.set(r, new PI(n)),
      (t.gc = t.gc.insert(n, r)),
      uw(
        t.remoteStore,
        new vn(on(P1(n.path)), r, "TargetPurposeLimboResolution", ed.ct)
      );
  }
}
async function po(t, e, n) {
  const r = B(t),
    i = [],
    s = [],
    o = [];
  r.wc.isEmpty() ||
    (r.wc.forEach((l, a) => {
      o.push(
        r.Rc(a, e, n).then((u) => {
          if (
            ((u || n) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                a.targetId,
                u != null && u.fromCache ? "not-current" : "current"
              ),
            u)
          ) {
            i.push(u);
            const c = dd.Li(a.targetId, u);
            s.push(c);
          }
        })
      );
    }),
    await Promise.all(o),
    r.dc.nu(i),
    await (async function (l, a) {
      const u = B(l);
      try {
        await u.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (c) =>
            N.forEach(a, (h) =>
              N.forEach(h.Fi, (f) =>
                u.persistence.referenceDelegate.addReference(c, h.targetId, f)
              ).next(() =>
                N.forEach(h.Bi, (f) =>
                  u.persistence.referenceDelegate.removeReference(
                    c,
                    h.targetId,
                    f
                  )
                )
              )
            )
        );
      } catch (c) {
        if (!ao(c)) throw c;
        L("LocalStore", "Failed to update sequence numbers: " + c);
      }
      for (const c of a) {
        const h = c.targetId;
        if (!c.fromCache) {
          const f = u.Ji.get(h),
            g = f.snapshotVersion,
            v = f.withLastLimboFreeSnapshotVersion(g);
          u.Ji = u.Ji.insert(h, v);
        }
      }
    })(r.localStore, s));
}
async function zI(t, e) {
  const n = B(t);
  if (!n.currentUser.isEqual(e)) {
    L("SyncEngine", "User change. New user:", e.toKey());
    const r = await sw(n.localStore, e);
    (n.currentUser = e),
      (function (i, s) {
        i.Ec.forEach((o) => {
          o.forEach((l) => {
            l.reject(new R(C.CANCELLED, s));
          });
        }),
          i.Ec.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds
      ),
      await po(n, r.er);
  }
}
function HI(t, e) {
  const n = B(t),
    r = n.yc.get(e);
  if (r && r.fc) return H().add(r.key);
  {
    let i = H();
    const s = n._c.get(e);
    if (!s) return i;
    for (const o of s) {
      const l = n.wc.get(o);
      i = i.unionWith(l.view.nc);
    }
    return i;
  }
}
function qI(t) {
  const e = B(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = vw.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = HI.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = UI.bind(null, e)),
    (e.dc.nu = II.bind(null, e.eventManager)),
    (e.dc.Pc = $I.bind(null, e.eventManager)),
    e
  );
}
function WI(t) {
  const e = B(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = bI.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = BI.bind(null, e)),
    e
  );
}
class og {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.serializer = Wa(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(e)),
      (this.persistence = this.createPersistence(e)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(e)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        e,
        this.localStore
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        e,
        this.localStore
      ));
  }
  createGarbageCollectionScheduler(e, n) {
    return null;
  }
  createIndexBackfillerScheduler(e, n) {
    return null;
  }
  createLocalStore(e) {
    return X_(this.persistence, new G_(), e.initialUser, this.serializer);
  }
  createPersistence(e) {
    return new K_(fd.zs, this.serializer);
  }
  createSharedClientState(e) {
    return new iI();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class KI {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        ig(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = zI.bind(
        null,
        this.syncEngine
      )),
      await CI(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new kI();
  }
  createDatastore(e) {
    const n = Wa(e.databaseInfo.databaseId),
      r = ((i = e.databaseInfo), new aI(i));
    var i;
    return (function (s, o, l, a) {
      return new hI(s, o, l, a);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (r = this.datastore),
      (i = e.asyncQueue),
      (s = (l) => ig(this.syncEngine, l, 0)),
      (o = tg.D() ? new tg() : new sI()),
      new dI(n, r, i, s, o)
    );
    var n, r, i, s, o;
  }
  createSyncEngine(e, n) {
    return (function (r, i, s, o, l, a, u) {
      const c = new OI(r, i, s, o, l, a);
      return u && (c.vc = !0), c;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    );
  }
  terminate() {
    return (async function (e) {
      const n = B(e);
      L("RemoteStore", "RemoteStore shutting down."),
        n.vu.add(5),
        await fo(n),
        n.Pu.shutdown(),
        n.bu.set("Unknown");
    })(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QI {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Sc(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Sc(this.observer.error, e)
      : sn("Uncaught Error in snapshot listener:", e.toString());
  }
  Dc() {
    this.muted = !0;
  }
  Sc(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GI {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = be.UNAUTHENTICATED),
      (this.clientId = C1.A()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        L("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          L("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new R(
        C.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Rn();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = vd(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function Ku(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    L("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t.getConfiguration();
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await sw(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e);
}
async function lg(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await XI(t);
  L("FirestoreClient", "Initializing OnlineComponentProvider");
  const r = await t.getConfiguration();
  await e.initialize(n, r),
    t.setCredentialChangeListener((i) => ng(e.remoteStore, i)),
    t.setAppCheckTokenChangeListener((i, s) => ng(e.remoteStore, s)),
    (t._onlineComponents = e);
}
function YI(t) {
  return t.name === "FirebaseError"
    ? t.code === C.FAILED_PRECONDITION || t.code === C.UNIMPLEMENTED
    : !(typeof DOMException < "u" && t instanceof DOMException) ||
        t.code === 22 ||
        t.code === 20 ||
        t.code === 11;
}
async function XI(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      L("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await Ku(t, t._uninitializedComponentsProvider._offline);
      } catch (e) {
        const n = e;
        if (!YI(n)) throw n;
        ii(
          "Error using user provided cache. Falling back to memory cache: " + n
        ),
          await Ku(t, new og());
      }
    } else
      L("FirestoreClient", "Using default OfflineComponentProvider"),
        await Ku(t, new og());
  return t._offlineComponents;
}
async function Sw(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? (L("FirestoreClient", "Using user provided OnlineComponentProvider"),
          await lg(t, t._uninitializedComponentsProvider._online))
        : (L("FirestoreClient", "Using default OnlineComponentProvider"),
          await lg(t, new KI()))),
    t._onlineComponents
  );
}
function JI(t) {
  return Sw(t).then((e) => e.syncEngine);
}
async function ZI(t) {
  const e = await Sw(t),
    n = e.eventManager;
  return (
    (n.onListen = LI.bind(null, e.syncEngine)),
    (n.onUnlisten = MI.bind(null, e.syncEngine)),
    n
  );
}
function e$(t, e, n = {}) {
  const r = new Rn();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (i, s, o, l, a) {
        const u = new QI({
            next: (h) => {
              s.enqueueAndForget(() => _I(i, c)),
                h.fromCache && l.source === "server"
                  ? a.reject(
                      new R(
                        C.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : a.resolve(h);
            },
            error: (h) => a.reject(h),
          }),
          c = new AI(o, u, { includeMetadataChanges: !0, Ku: !0 });
        return NI(i, c);
      })(await ZI(t), t.asyncQueue, e, n, r)
    ),
    r.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cw(t) {
  const e = {};
  return (
    t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ag = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tw(t, e, n) {
  if (!n)
    throw new R(
      C.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function t$(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new R(C.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function ug(t) {
  if (!M.isDocumentKey(t))
    throw new R(
      C.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function cg(t) {
  if (M.isDocumentKey(t))
    throw new R(
      C.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function Ga(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (n) {
        return n.constructor ? n.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : F();
}
function ea(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new R(
        C.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = Ga(t);
      throw new R(
        C.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hg {
  constructor(e) {
    var n, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new R(
          C.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.cache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new R(
          C.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    t$(
      "experimentalForceLongPolling",
      e.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = Cw(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (i) {
        if (i.timeoutSeconds !== void 0) {
          if (isNaN(i.timeoutSeconds))
            throw new R(
              C.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`
            );
          if (i.timeoutSeconds < 5)
            throw new R(
              C.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (i.timeoutSeconds > 30)
            throw new R(
              C.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams);
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      ((n = this.experimentalLongPollingOptions),
      (r = e.experimentalLongPollingOptions),
      n.timeoutSeconds === r.timeoutSeconds) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
    var n, r;
  }
}
class Ya {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new hg({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new R(
        C.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new R(
        C.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new hg(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new xN();
          switch (n.type) {
            case "firstParty":
              return new TN(
                n.sessionIndex || "0",
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case "provider":
              return n.client;
            default:
              throw new R(
                C.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (e) {
        const n = ag.get(e);
        n &&
          (L("ComponentProvider", "Removing Datastore"),
          ag.delete(e),
          n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function n$(t, e, n, r = {}) {
  var i;
  const s = (t = ea(t, Ya))._getSettings();
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== e &&
      ii(
        "Host has been set in both settings() and useEmulator(), emulator host will be used"
      ),
    t._setSettings(
      Object.assign(Object.assign({}, s), { host: `${e}:${n}`, ssl: !1 })
    ),
    r.mockUserToken)
  ) {
    let o, l;
    if (typeof r.mockUserToken == "string")
      (o = r.mockUserToken), (l = be.MOCK_USER);
    else {
      o = GC(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId
      );
      const a = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!a)
        throw new R(
          C.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      l = new be(a);
    }
    t._authCredentials = new EN(new S1(o, l));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wt {
  constructor(e, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Pn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new wt(this.firestore, e, this._key);
  }
}
class ki {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new ki(this.firestore, e, this._query);
  }
}
class Pn extends ki {
  constructor(e, n, r) {
    super(e, n, P1(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new wt(this.firestore, null, new M(e));
  }
  withConverter(e) {
    return new Pn(this.firestore, e, this._path);
  }
}
function fg(t, e, ...n) {
  if (((t = ni(t)), Tw("collection", "path", e), t instanceof Ya)) {
    const r = re.fromString(e, ...n);
    return cg(r), new Pn(t, null, r);
  }
  {
    if (!(t instanceof wt || t instanceof Pn))
      throw new R(
        C.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(re.fromString(e, ...n));
    return cg(r), new Pn(t.firestore, null, r);
  }
}
function r$(t, e, ...n) {
  if (
    ((t = ni(t)),
    arguments.length === 1 && (e = C1.A()),
    Tw("doc", "path", e),
    t instanceof Ya)
  ) {
    const r = re.fromString(e, ...n);
    return ug(r), new wt(t, null, new M(r));
  }
  {
    if (!(t instanceof wt || t instanceof Pn))
      throw new R(
        C.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const r = t._path.child(re.fromString(e, ...n));
    return (
      ug(r), new wt(t.firestore, t instanceof Pn ? t.converter : null, new M(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class i$ {
  constructor() {
    (this.Gc = Promise.resolve()),
      (this.Qc = []),
      (this.jc = !1),
      (this.zc = []),
      (this.Wc = null),
      (this.Hc = !1),
      (this.Jc = !1),
      (this.Yc = []),
      (this.qo = new lw(this, "async_queue_retry")),
      (this.Xc = () => {
        const n = Wu();
        n &&
          L("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.qo.Mo();
      });
    const e = Wu();
    e &&
      typeof e.addEventListener == "function" &&
      e.addEventListener("visibilitychange", this.Xc);
  }
  get isShuttingDown() {
    return this.jc;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Zc(), this.ta(e);
  }
  enterRestrictedMode(e) {
    if (!this.jc) {
      (this.jc = !0), (this.Jc = e || !1);
      const n = Wu();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.Xc);
    }
  }
  enqueue(e) {
    if ((this.Zc(), this.jc)) return new Promise(() => {});
    const n = new Rn();
    return this.ta(() =>
      this.jc && this.Jc
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Qc.push(e), this.ea()));
  }
  async ea() {
    if (this.Qc.length !== 0) {
      try {
        await this.Qc[0](), this.Qc.shift(), this.qo.reset();
      } catch (e) {
        if (!ao(e)) throw e;
        L("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.Qc.length > 0 && this.qo.No(() => this.ea());
    }
  }
  ta(e) {
    const n = this.Gc.then(
      () => (
        (this.Hc = !0),
        e()
          .catch((r) => {
            (this.Wc = r), (this.Hc = !1);
            const i = (function (s) {
              let o = s.message || "";
              return (
                s.stack &&
                  (o = s.stack.includes(s.message)
                    ? s.stack
                    : s.message +
                      `
` +
                      s.stack),
                o
              );
            })(r);
            throw (sn("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.Hc = !1), r))
      )
    );
    return (this.Gc = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.Zc(), this.Yc.indexOf(e) > -1 && (n = 0);
    const i = yd.createAndSchedule(this, e, n, r, (s) => this.na(s));
    return this.zc.push(i), i;
  }
  Zc() {
    this.Wc && F();
  }
  verifyOperationInProgress() {}
  async sa() {
    let e;
    do (e = this.Gc), await e;
    while (e !== this.Gc);
  }
  ia(e) {
    for (const n of this.zc) if (n.timerId === e) return !0;
    return !1;
  }
  ra(e) {
    return this.sa().then(() => {
      this.zc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.zc)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.sa();
    });
  }
  oa(e) {
    this.Yc.push(e);
  }
  na(e) {
    const n = this.zc.indexOf(e);
    this.zc.splice(n, 1);
  }
}
class Ed extends Ya {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = new i$()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || Nw(this), this._firestoreClient.terminate();
  }
}
function s$(t, e) {
  const n = typeof t == "object" ? t : ZT(),
    r = typeof t == "string" ? t : e || "(default)",
    i = GT(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = KC("firestore");
    s && n$(i, ...s);
  }
  return i;
}
function kw(t) {
  return (
    t._firestoreClient || Nw(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function Nw(t) {
  var e, n, r;
  const i = t._freezeSettings(),
    s = (function (o, l, a, u) {
      return new jN(
        o,
        l,
        a,
        u.host,
        u.ssl,
        u.experimentalForceLongPolling,
        u.experimentalAutoDetectLongPolling,
        Cw(u.experimentalLongPollingOptions),
        u.useFetchStreams
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "",
      t._persistenceKey,
      i
    );
  (t._firestoreClient = new GI(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    s
  )),
    !((n = i.cache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.cache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (t._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.cache.kind,
        _offline: i.cache._offlineComponentProvider,
        _online: i.cache._onlineComponentProvider,
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ci {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new ci(Qe.fromBase64String(e));
    } catch (n) {
      throw new R(
        C.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new ci(Qe.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sd {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new R(
          C.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new ze(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _w {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cd {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new R(
        C.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new R(
        C.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return Y(this._lat, e._lat) || Y(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const o$ = /^__.*__$/;
class l$ {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new vr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new co(e, this.data, n, this.fieldTransforms);
  }
}
function Iw(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw F();
  }
}
class Td {
  constructor(e, n, r, i, s, o) {
    (this.settings = e),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.ua(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get ca() {
    return this.settings.ca;
  }
  aa(e) {
    return new Td(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  ha(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.aa({ path: r, la: !1 });
    return i.fa(e), i;
  }
  da(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.aa({ path: r, la: !1 });
    return i.ua(), i;
  }
  wa(e) {
    return this.aa({ path: void 0, la: !0 });
  }
  _a(e) {
    return ta(
      e,
      this.settings.methodName,
      this.settings.ma || !1,
      this.path,
      this.settings.ga
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  ua() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.fa(this.path.get(e));
  }
  fa(e) {
    if (e.length === 0) throw this._a("Document fields must not be empty");
    if (Iw(this.ca) && o$.test(e))
      throw this._a('Document fields cannot begin and end with "__"');
  }
}
class a$ {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || Wa(e));
  }
  ya(e, n, r, i = !1) {
    return new Td(
      { ca: e, methodName: n, ga: r, path: ze.emptyPath(), la: !1, ma: i },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function $w(t) {
  const e = t._freezeSettings(),
    n = Wa(t._databaseId);
  return new a$(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function u$(t, e, n, r, i, s = {}) {
  const o = t.ya(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  Rw("Data must be an object, but it was:", o, r);
  const l = Aw(r, o);
  let a, u;
  if (s.merge) (a = new _t(o.fieldMask)), (u = o.fieldTransforms);
  else if (s.mergeFields) {
    const c = [];
    for (const h of s.mergeFields) {
      const f = h$(e, h, n);
      if (!o.contains(f))
        throw new R(
          C.INVALID_ARGUMENT,
          `Field '${f}' is specified in your field mask but missing from your input data.`
        );
      d$(c, f) || c.push(f);
    }
    (a = new _t(c)), (u = o.fieldTransforms.filter((h) => a.covers(h.field)));
  } else (a = null), (u = o.fieldTransforms);
  return new l$(new mt(l), a, u);
}
function c$(t, e, n, r = !1) {
  return kd(n, t.ya(r ? 4 : 3, e));
}
function kd(t, e) {
  if (Dw((t = ni(t)))) return Rw("Unsupported field value:", e, t), Aw(t, e);
  if (t instanceof _w)
    return (
      (function (n, r) {
        if (!Iw(r.ca))
          throw r._a(
            `${n._methodName}() can only be used with update() and set()`
          );
        if (!r.path)
          throw r._a(
            `${n._methodName}() is not currently supported inside arrays`
          );
        const i = n._toFieldTransform(r);
        i && r.fieldTransforms.push(i);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.la && e.ca !== 4)
      throw e._a("Nested arrays are not supported");
    return (function (n, r) {
      const i = [];
      let s = 0;
      for (const o of n) {
        let l = kd(o, r.wa(s));
        l == null && (l = { nullValue: "NULL_VALUE" }), i.push(l), s++;
      }
      return { arrayValue: { values: i } };
    })(t, e);
  }
  return (function (n, r) {
    if ((n = ni(n)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof n == "number") return n_(r.serializer, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      const i = Ce.fromDate(n);
      return { timestampValue: Jl(r.serializer, i) };
    }
    if (n instanceof Ce) {
      const i = new Ce(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: Jl(r.serializer, i) };
    }
    if (n instanceof Cd)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof ci) return { bytesValue: Z1(r.serializer, n._byteString) };
    if (n instanceof wt) {
      const i = r.databaseId,
        s = n.firestore._databaseId;
      if (!s.isEqual(i))
        throw r._a(
          `Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`
        );
      return {
        referenceValue: cd(
          n.firestore._databaseId || r.databaseId,
          n._key.path
        ),
      };
    }
    throw r._a(`Unsupported field value: ${Ga(n)}`);
  })(t, e);
}
function Aw(t, e) {
  const n = {};
  return (
    T1(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Si(t, (r, i) => {
          const s = kd(i, e.ha(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function Dw(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof Ce ||
    t instanceof Cd ||
    t instanceof ci ||
    t instanceof wt ||
    t instanceof _w
  );
}
function Rw(t, e, n) {
  if (
    !Dw(n) ||
    !(function (r) {
      return (
        typeof r == "object" &&
        r !== null &&
        (Object.getPrototypeOf(r) === Object.prototype ||
          Object.getPrototypeOf(r) === null)
      );
    })(n)
  ) {
    const r = Ga(n);
    throw r === "an object" ? e._a(t + " a custom object") : e._a(t + " " + r);
  }
}
function h$(t, e, n) {
  if ((e = ni(e)) instanceof Sd) return e._internalPath;
  if (typeof e == "string") return Pw(t, e);
  throw ta("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const f$ = new RegExp("[~\\*/\\[\\]]");
function Pw(t, e, n) {
  if (e.search(f$) >= 0)
    throw ta(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new Sd(...e.split("."))._internalPath;
  } catch {
    throw ta(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function ta(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let l = `Function ${e}() called with invalid data`;
  n && (l += " (via `toFirestore()`)"), (l += ". ");
  let a = "";
  return (
    (s || o) &&
      ((a += " (found"),
      s && (a += ` in field ${r}`),
      o && (a += ` in document ${i}`),
      (a += ")")),
    new R(C.INVALID_ARGUMENT, l + t + a)
  );
}
function d$(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ow {
  constructor(e, n, r, i, s) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new wt(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new p$(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(Nd("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class p$ extends Ow {
  data() {
    return super.data();
  }
}
function Nd(t, e) {
  return typeof e == "string"
    ? Pw(t, e)
    : e instanceof Sd
    ? e._internalPath
    : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function m$(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new R(
      C.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class _d {}
class g$ extends _d {}
function y$(t, e, ...n) {
  let r = [];
  e instanceof _d && r.push(e),
    (r = r.concat(n)),
    (function (i) {
      const s = i.filter((l) => l instanceof Id).length,
        o = i.filter((l) => l instanceof Xa).length;
      if (s > 1 || (s > 0 && o > 0))
        throw new R(
          C.INVALID_ARGUMENT,
          "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`."
        );
    })(r);
  for (const i of r) t = i._apply(t);
  return t;
}
class Xa extends g$ {
  constructor(e, n, r) {
    super(),
      (this._field = e),
      (this._op = n),
      (this._value = r),
      (this.type = "where");
  }
  static _create(e, n, r) {
    return new Xa(e, n, r);
  }
  _apply(e) {
    const n = this._parse(e);
    return Lw(e._query, n), new ki(e.firestore, e.converter, vh(e._query, n));
  }
  _parse(e) {
    const n = $w(e.firestore);
    return (function (i, s, o, l, a, u, c) {
      let h;
      if (a.isKeyField()) {
        if (u === "array-contains" || u === "array-contains-any")
          throw new R(
            C.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${u}' queries on documentId().`
          );
        if (u === "in" || u === "not-in") {
          pg(c, u);
          const f = [];
          for (const g of c) f.push(dg(l, i, g));
          h = { arrayValue: { values: f } };
        } else h = dg(l, i, c);
      } else
        (u !== "in" && u !== "not-in" && u !== "array-contains-any") ||
          pg(c, u),
          (h = c$(o, s, c, u === "in" || u === "not-in"));
      return we.create(a, u, h);
    })(
      e._query,
      "where",
      n,
      e.firestore._databaseId,
      this._field,
      this._op,
      this._value
    );
  }
}
function v$(t, e, n) {
  const r = e,
    i = Nd("where", t);
  return Xa._create(i, r, n);
}
class Id extends _d {
  constructor(e, n) {
    super(), (this.type = e), (this._queryConstraints = n);
  }
  static _create(e, n) {
    return new Id(e, n);
  }
  _parse(e) {
    const n = this._queryConstraints
      .map((r) => r._parse(e))
      .filter((r) => r.getFilters().length > 0);
    return n.length === 1 ? n[0] : Rt.create(n, this._getOperator());
  }
  _apply(e) {
    const n = this._parse(e);
    return n.getFilters().length === 0
      ? e
      : ((function (r, i) {
          let s = r;
          const o = i.getFlattenedFilters();
          for (const l of o) Lw(s, l), (s = vh(s, l));
        })(e._query, n),
        new ki(e.firestore, e.converter, vh(e._query, n)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
function dg(t, e, n) {
  if (typeof (n = ni(n)) == "string") {
    if (n === "")
      throw new R(
        C.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!L1(e) && n.indexOf("/") !== -1)
      throw new R(
        C.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
      );
    const r = e.path.child(re.fromString(n));
    if (!M.isDocumentKey(r))
      throw new R(
        C.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
      );
    return jm(t, new M(r));
  }
  if (n instanceof wt) return jm(t, n._key);
  throw new R(
    C.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(
      n
    )}.`
  );
}
function pg(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new R(
      C.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
}
function Lw(t, e) {
  if (e.isInequality()) {
    const r = od(t),
      i = e.field;
    if (r !== null && !r.isEqual(i))
      throw new R(
        C.INVALID_ARGUMENT,
        `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`
      );
    const s = O1(t);
    s !== null && w$(t, i, s);
  }
  const n = (function (r, i) {
    for (const s of r)
      for (const o of s.getFlattenedFilters())
        if (i.indexOf(o.op) >= 0) return o.op;
    return null;
  })(
    t.filters,
    (function (r) {
      switch (r) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains-any":
        case "in":
          return ["not-in"];
        case "not-in":
          return ["array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    })(e.op)
  );
  if (n !== null)
    throw n === e.op
      ? new R(
          C.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`
        )
      : new R(
          C.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`
        );
}
function w$(t, e, n) {
  if (!n.isEqual(e))
    throw new R(
      C.INVALID_ARGUMENT,
      `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
    );
}
class x$ {
  convertValue(e, n = "none") {
    switch (dr(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ye(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(fr(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw F();
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n);
  }
  convertObjectMap(e, n = "none") {
    const r = {};
    return (
      Si(e, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new Cd(ye(e.latitude), ye(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = nd(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Us(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = Mn(e);
    return new Ce(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = re.fromString(e);
    se(iw(r));
    const i = new bs(r.get(1), r.get(3)),
      s = new M(r.popFirst(5));
    return (
      i.isEqual(n) ||
        sn(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E$(t, e, n) {
  let r;
  return (
    (r = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    r
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ho {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class S$ extends Ow {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new cl(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(Nd("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class cl extends S$ {
  data(e = {}) {
    return super.data(e);
  }
}
class C$ {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new Ho(i.hasPendingWrites, i.fromCache)),
      (this.query = r);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new cl(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new Ho(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new R(
        C.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (r, i) {
          if (r._snapshot.oldDocs.isEmpty()) {
            let s = 0;
            return r._snapshot.docChanges.map((o) => {
              const l = new cl(
                r._firestore,
                r._userDataWriter,
                o.doc.key,
                o.doc,
                new Ho(
                  r._snapshot.mutatedKeys.has(o.doc.key),
                  r._snapshot.fromCache
                ),
                r.query.converter
              );
              return (
                o.doc, { type: "added", doc: l, oldIndex: -1, newIndex: s++ }
              );
            });
          }
          {
            let s = r._snapshot.oldDocs;
            return r._snapshot.docChanges
              .filter((o) => i || o.type !== 3)
              .map((o) => {
                const l = new cl(
                  r._firestore,
                  r._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new Ho(
                    r._snapshot.mutatedKeys.has(o.doc.key),
                    r._snapshot.fromCache
                  ),
                  r.query.converter
                );
                let a = -1,
                  u = -1;
                return (
                  o.type !== 0 &&
                    ((a = s.indexOf(o.doc.key)), (s = s.delete(o.doc.key))),
                  o.type !== 1 &&
                    ((s = s.add(o.doc)), (u = s.indexOf(o.doc.key))),
                  { type: T$(o.type), doc: l, oldIndex: a, newIndex: u }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function T$(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return F();
  }
}
class k$ extends x$ {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new ci(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new wt(this.firestore, null, n);
  }
}
function N$(t) {
  t = ea(t, ki);
  const e = ea(t.firestore, Ed),
    n = kw(e),
    r = new k$(e);
  return m$(t._query), e$(n, t._query).then((i) => new C$(e, r, t, i));
}
function _$(t, e) {
  const n = ea(t.firestore, Ed),
    r = r$(t),
    i = E$(t.converter, e);
  return I$(n, [
    u$(
      $w(t.firestore),
      "addDoc",
      r._key,
      i,
      t.converter !== null,
      {}
    ).toMutation(r._key, Jt.exists(!1)),
  ]).then(() => r);
}
function I$(t, e) {
  return (function (n, r) {
    const i = new Rn();
    return (
      n.asyncQueue.enqueueAndForget(async () => FI(await JI(n), r, i)),
      i.promise
    );
  })(kw(t), e);
}
(function (t, e = !0) {
  (function (n) {
    Ei = n;
  })(JT),
    bl(
      new Is(
        "firestore",
        (n, { instanceIdentifier: r, options: i }) => {
          const s = n.getProvider("app").getImmediate(),
            o = new Ed(
              new SN(n.getProvider("auth-internal")),
              new NN(n.getProvider("app-check-internal")),
              (function (l, a) {
                if (
                  !Object.prototype.hasOwnProperty.apply(l.options, [
                    "projectId",
                  ])
                )
                  throw new R(
                    C.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new bs(l.options.projectId, a);
              })(s, r),
              s
            );
          return (
            (i = Object.assign({ useFetchStreams: e }, i)), o._setSettings(i), o
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    zr(Dm, "3.12.1", t),
    zr(Dm, "3.12.1", "esm2017");
})();
const $$ = "./assets/logo-f9ba0fb3.png",
  A$ = () => {
    $.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const t = jg(),
      [e, n] = $.useState(""),
      [r, i] = $.useState(""),
      [s, o] = $.useState(!0),
      l = s$(fk),
      a = (h) => {
        n(h);
      },
      u = async () => {
        const h = y$(fg(l, "formDetails"), v$("email", "==", r));
        return !(await N$(h)).empty;
      },
      c = async (h) => {
        if ((h.preventDefault(), !r || !e)) {
          o(!1);
          return;
        }
        const f = await u();
        if (f) {
          console.log("emailExists", f),
            console.log("Email already exists:", r),
            t("/confirmed", { state: { emailExists: f } });
          return;
        }
        _$(fg(l, "formDetails"), { email: r, selectedUserType: e })
          .then(() => {
            console.log("Form submitted:", r, e),
              t("/confirmed", { state: { emailExists: f } });
          })
          .catch((g) => {
            console.error("Error submitting form:", g);
          }),
          MC.post("http://localhost:80/signup", {
            email: r,
            selectedUserType: e,
          })
            .then((g) => {
              console.log("Confirmation email sent");
            })
            .catch((g) => {
              console.error("Error sending confirmation email:", g);
            });
      };
    return p.jsx("div", {
      className: `w-full flex-row ${E.paddingX} h-screen pt-[180px] sm:mb-0 mb-[150px]`,
      children: p.jsxs("div", {
        className: `w-full flex-col ${E.flexStart} ${E.boxWidth} sm:flex-row`,
        children: [
          p.jsxs("div", {
            className: "flex-1 self-end",
            children: [
              p.jsx("h1", {
                className: `${E.heading2} sm:text-left text-center`,
                children: "sign up",
              }),
              p.jsxs("p", {
                className: `${E.paragraph} hidden sm:flex font-extrabold mt-10`,
                children: [
                  "for early beta access to ",
                  p.jsx("br", {}),
                  " learnmutiny",
                ],
              }),
              p.jsx("p", {
                className: `${E.paragraph} sm:hidden font-extrabold mt-10 sm:text-left text-center`,
                children: "for early beta access to learnmutiny",
              }),
            ],
          }),
          p.jsx("div", {
            className: "max-w-full h-auto flex-1 mt-10 sm:mt-0 flex-1",
            children: p.jsxs("form", {
              className:
                "flex flex-col p-4 bg-dimPrimary rounded-[35px] p-10 px-10 py-10 w-full",
              onSubmit: c,
              children: [
                p.jsxs("div", {
                  className: "mb-4",
                  children: [
                    p.jsx("label", {
                      className: `${E.paragraph2} block mb-2 font-[850]`,
                      htmlFor: "signup",
                      children: "sign up",
                    }),
                    p.jsx("input", {
                      className: `w-full px-4 py-[6px] mt-2 h-[42px] text-white bg-primary rounded-[50px] font-[650] placeholder-primary ${
                        s ? "border-formBorder-300" : "border border-red-500"
                      }`,
                      type: "email",
                      id: "signup",
                      name: "signup",
                      placeholder: "enter email",
                      value: r,
                      onChange: (h) => i(h.target.value),
                    }),
                  ],
                }),
                p.jsxs("div", {
                  className: "mb-4",
                  children: [
                    p.jsx("label", {
                      className: `${E.paragraph2} block mb-2 font-[850]`,
                      htmlFor: "signup",
                      children: "select",
                    }),
                    p.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        p.jsx("button", {
                          className: `w-full px-4 py-[6px] mt-2 h-[42px] text-darkPrimary bg-primary rounded-[50px] font-[650] mb-5 text-left ${
                            e === "MU" ? "border-white border-2" : ""
                          } ${s ? "" : "border border-red-500"}`,
                          type: "button",
                          onClick: () => a("MU"),
                          children: "mu",
                        }),
                        p.jsx("button", {
                          className: `w-full px-4 py-[6px] text-darkPrimary mt-2 h-[42px] bg-primary rounded-[50px] font-[650] text-left ${
                            e === "Recruiter" ? "border-white border-2" : ""
                          }`,
                          type: "button",
                          onClick: () => a("Recruiter"),
                          children: "recruiter",
                        }),
                      ],
                    }),
                    p.jsx("input", {
                      type: "hidden",
                      id: "user-type",
                      name: "userType",
                      value: e,
                    }),
                  ],
                }),
                p.jsx("button", {
                  className:
                    "px-4 py-2 text-white bg-primary rounded-[50px] mt-2 h-[42px] w-[150px] font-[650] hover:bg-gray-600",
                  type: "submit",
                  children: "sign up",
                }),
                p.jsx("img", {
                  src: $$,
                  className:
                    "sm:w-[180px] w-[110px] sm:ml-0 ml-[550px] self-end mt-3 sm:mt-0",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  mg = "./assets/filter_student-7556c2f8.png",
  gg = "./assets/recruiters_mu_header-b883f4b1.svg",
  yg = "./assets/mu_status-f309b66a.png",
  vg = "./assets/recruiter_mu_body-73e1fad5.png",
  D$ = () => (
    $.useEffect(() => {
      window.scrollTo(0, 0);
      const t = document.querySelectorAll(".scroll-container"),
        e = () => {
          t.forEach((n) => {
            const r = n.querySelector(".content-container"),
              i = n.querySelector(".image-container"),
              s = window.pageYOffset || document.documentElement.scrollTop,
              o = r.offsetTop + r.offsetHeight;
            if (s > r.offsetTop && s < o) {
              const l = (s - r.offsetTop) / 2;
              i.style.transform = `translateY(${l}px)`;
            } else i.style.transform = "none";
          });
        };
      return (
        window.addEventListener("scroll", e),
        () => {
          window.removeEventListener("scroll", e);
        }
      );
    }, []),
    p.jsxs("div", {
      className: `w-full flex-col ${E.paddingX} sm:mt-20  pt-[180px] `,
      children: [
        p.jsxs("div", {
          className: `hidden w-full${E.flexCenter} ${E.boxWidth} sm:flex flex-row`,
          children: [
            p.jsxs("div", {
              className: `flex-1 w-full sm:w-auto flex flex-col ${E.flexStart} `,
              children: [
                p.jsx("h1", {
                  className: `${E.heading2}`,
                  children: "recruit with learnmutiny",
                }),
                p.jsxs("p", {
                  className: `${E.paragraph} mt-10`,
                  children: [
                    "hire talent with the exact ",
                    p.jsx("br", {}),
                    " skills you need.",
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              className:
                "flex-1 w-full sm:w-auto flex flex-col scroll-container",
              children: p.jsx("img", {
                src: gg,
                alt: "mu_iphone",
                className:
                  "sm:w-[500px] w-[250px] self-center content-container image-container",
              }),
            }),
          ],
        }),
        p.jsxs("div", {
          className: `flex w-full${E.flexCenter} ${E.boxWidth} sm:hidden flex-col  `,
          children: [
            p.jsx("h1", {
              className: `${E.heading2} text-center`,
              children: "recruit with learnmutiny",
            }),
            p.jsx("p", {
              className: `${E.paragraph} mt-10 text-center`,
              children: "hire talent with the exact skills you need.",
            }),
            p.jsx("img", {
              src: gg,
              alt: "mu_iphone",
              className: "w-[350px] self-center mt-10 ",
            }),
          ],
        }),
        p.jsxs("div", {
          className: `w-full flex-col ${E.flexCenter} ${E.boxWidth} sm:flex-row`,
          children: [
            p.jsx("div", {
              className: "hidden flex-1 w-full sm:w-auto sm:flex flex-col ",
              children: p.jsx("img", {
                src: vg,
                alt: "mu_iphone_recruit ",
                className: "w-[500px]",
              }),
            }),
            p.jsx("div", {
              className: `hidden flex-1 w-full sm:w-auto sm:flex flex-col ${E.flexStart} pt-[80px]`,
              children: p.jsxs("p", {
                className: `${E.paragraph} font-extrabold mt-5 text-right self-center`,
                children: [
                  "gain enhanced insights ",
                  p.jsx("br", {}),
                  " on the exact skills and ",
                  p.jsx("br", {}),
                  " ",
                  "qualifications of ",
                  p.jsx("br", {}),
                  " job applicants.",
                ],
              }),
            }),
            p.jsx("div", {
              className: "sm:hidden flex",
              children: p.jsx("p", {
                className: `${E.paragraph} font-extrabold mt-10 mb-10 text-center`,
                children:
                  "gain enhanced insights on the exact skills and qualifications of job applicants.",
              }),
            }),
            p.jsx("div", {
              className: "flex flex-1 w-full sm:w-auto sm:hidden flex-col ",
              children: p.jsx("img", {
                src: vg,
                alt: "mu_iphone_recruit ",
                className: "w-[500px]",
              }),
            }),
          ],
        }),
        p.jsxs("div", {
          className: `hidden w-full ${E.flexCenter} ${E.boxWidth} sm:flex flex-row`,
          children: [
            p.jsxs("div", {
              className: `flex-1 w-full sm:w-auto flex flex-col ${E.flexStart} justify-between`,
              children: [
                p.jsxs("p", {
                  className: `${E.paragraph} mt-10 mb-20 ml-6`,
                  children: [
                    "filter applicants by job ",
                    p.jsx("br", {}),
                    " and sort them by score.",
                  ],
                }),
                p.jsx("img", {
                  src: mg,
                  alt: "mu_iphone",
                  className: "w-[600px]",
                }),
              ],
            }),
            p.jsx("div", {
              className: "flex-1 w-full sm:w-auto flex flex-col",
              children: p.jsx("img", {
                src: yg,
                alt: "mu_iphone",
                className: "sm:w-[500px] w-[250px] self-center",
              }),
            }),
          ],
        }),
        p.jsxs("div", {
          className: `sm:hidden w-full ${E.flexCenter} ${E.boxWidth} flex flex-col`,
          children: [
            p.jsxs("div", {
              className: `flex-1 w-full sm:w-auto flex flex-col ${E.flexStart} justify-between`,
              children: [
                p.jsxs("p", {
                  className: `${E.paragraph} mt-10 mb-20 ml-6 text-center`,
                  children: [
                    "filter applicants by job and sort them ",
                    p.jsx("br", {}),
                    " by score",
                  ],
                }),
                p.jsx("img", {
                  src: mg,
                  alt: "mu_iphone",
                  className: "w-[600px]",
                }),
              ],
            }),
            p.jsx("div", {
              className: "flex-1 w-full sm:w-auto flex flex-col mt-10",
              children: p.jsx("img", {
                src: yg,
                alt: "mu_iphone",
                className: "sm:w-[500px] w-[600px] self-center",
              }),
            }),
          ],
        }),
        p.jsx("div", {
          className: `sm:w-1/2 w-full ${E.flexCenter} ${E.boxWidth}  mt-10 text-center sm:text-left`,
          children: p.jsxs("h1", {
            className: `${E.heading3} mt-10`,
            children: ["sign up now for ", p.jsx("br", {}), " early access"],
          }),
        }),
        p.jsx("div", {
          className: "w-full mt-5 text-center sm:text-left",
          children: p.jsx(Ki, {
            to: "/signup",
            children: p.jsx("button", {
              style: E.buttonContainer,
              className: "bg-dimPrimary font-extrabold",
              children: p.jsx("p", {
                className: `${E.paragraph2} font-bold`,
                children: "sign up",
              }),
            }),
          }),
        }),
      ],
    })
  ),
  R$ = () => (
    $.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    p.jsxs("div", {
      className: `w-full flex-col ${E.paddingX} sm:mt-20 mb-20 pt-[180px] h-screen`,
      children: [
        p.jsx("h1", {
          className: `${E.heading2} sm:text-left text-center`,
          children: "our research",
        }),
        p.jsxs("div", {
          className: `hidden w-full ${E.flexCenter} ${E.boxWidth} sm:flex flex-row bg-dimPrimary mt-10 justify-between p-3`,
          style: E.blogContainerLarge,
          children: [
            p.jsxs("div", {
              className: "flex flex-row justify-start items-center",
              children: [
                p.jsx("img", { src: qc, alt: "logo", className: "w-[150px]" }),
                p.jsx("p", {
                  className: `${E.paragraph}`,
                  children: "coming soon.",
                }),
              ],
            }),
            p.jsx("p", {
              className: `${E.paragraph2} self-end`,
              children: "june 2nd 2023",
            }),
          ],
        }),
        p.jsxs("div", {
          className: `sm:hidden w-full ${E.boxWidth} flex flex-row bg-dimPrimary mt-10 justify-between px-2 py-2`,
          style: E.blogContainerSmall,
          children: [
            p.jsx("img", {
              src: qc,
              alt: "logo",
              className: "w-[60px] self-end ",
            }),
            p.jsx("p", {
              className: `${E.paragraph2} self-start text-center flex-1`,
              children: "coming soon.",
            }),
            p.jsx("p", {
              className: `${E.paragraph4} self-end `,
              children: "june 2nd 2023",
            }),
          ],
        }),
      ],
    })
  ),
  P$ = "./assets/half_bear-d9320313.png",
  O$ = () => {
    var n;
    $.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const t = pi(),
      e = (n = t == null ? void 0 : t.state) == null ? void 0 : n.emailExists;
    return p.jsx("div", {
      className: `w-full flex-row ${E.paddingX} h-screen pt-[180px]  sm:mb-0 mb-[180px]`,
      children: p.jsxs("div", {
        className: `w-full flex-col ${E.flexStart} ${E.boxWidth} sm:flex-row`,
        children: [
          p.jsxs("div", {
            className: "flex-1 self-end",
            children: [
              p.jsx("h1", {
                className: `${E.heading2} sm:text-left text-center`,
                children: "sign up",
              }),
              p.jsxs("p", {
                className: `${E.paragraph} hidden sm:flex font-extrabold mt-10`,
                children: [
                  "for early beta access to ",
                  p.jsx("br", {}),
                  " learnmutiny",
                ],
              }),
              p.jsx("p", {
                className: `${E.paragraph} sm:hidden flex font-extrabold mt-10 text-center`,
                children: "for early beta access to learnmutiny",
              }),
            ],
          }),
          p.jsx("div", {
            className: "max-w-full h-auto flex-1 mt-10 sm:mt-0",
            children: p.jsxs("div", {
              className: " flex flex-col bg-dimPrimary rounded-[35px]  w-full",
              children: [
                e
                  ? p.jsxs(p.Fragment, {
                      children: [
                        p.jsxs("p", {
                          className: `${E.paragraph} hidden sm:flex px-10 mt-8`,
                          children: [
                            "seems like you are ",
                            p.jsx("br", {}),
                            " already signed up for ",
                            p.jsx("br", {}),
                            " the beta.",
                          ],
                        }),
                        p.jsx("p", {
                          className: `${E.paragraph} sm:hidden flex px-10 mt-8`,
                          children:
                            "seems like you are already signed up for the beta.",
                        }),
                        p.jsx("p", {
                          className: `${E.paragraph4} mt-0 px-10`,
                          children: "be sure to check your email.",
                        }),
                      ],
                    })
                  : p.jsxs(p.Fragment, {
                      children: [
                        p.jsxs("p", {
                          className: `${E.paragraph} hidden sm:flex px-10 mt-8`,
                          children: [
                            "great you are signed ",
                            p.jsx("br", {}),
                            " up for the beta.",
                          ],
                        }),
                        p.jsx("p", {
                          className: `${E.paragraph} sm:hidden flex px-10 mt-8`,
                          children: "great you are signed up for the beta.",
                        }),
                        p.jsx("p", {
                          className: `${E.paragraph} mt-0 px-10`,
                          children: "be sure to check your email.",
                        }),
                      ],
                    }),
                p.jsx("img", { src: P$, className: "w-[280px] self-end" }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  L$ = () => {
    const t = () => (pi().pathname === "/" ? "h-screen" : ""),
      e = t() === "";
    return p.jsxs("div", {
      className: `bg-primary w-full overflow-hidden flex flex-col ${t()}`,
      children: [
        p.jsx("div", {
          className: ` ${E.paddingX} ${E.flexCenter}`,
          children: p.jsx("div", {
            className: `${E.boxWidth} `,
            children: p.jsx(c2, {}),
          }),
        }),
        p.jsx("div", {
          className: "flex-1 flex flex-col justify-center items-center",
          children: p.jsx("div", {
            className: `${E.flexCenter} ${E.boxWidth}`,
            children: p.jsxs(Wx, {
              children: [
                p.jsx(Wn, { path: "/", element: p.jsx(p2, {}) }),
                p.jsx(Wn, { path: "/mu", element: p.jsx(y2, {}) }),
                p.jsx(Wn, { path: "/recruiter", element: p.jsx(D$, {}) }),
                p.jsx(Wn, { path: "/blog", element: p.jsx(R$, {}) }),
                p.jsx(Wn, { path: "/signup", element: p.jsx(A$, {}) }),
                p.jsx(Wn, { path: "/confirmed", element: p.jsx(O$, {}) }),
              ],
            }),
          }),
        }),
        e &&
          p.jsx("div", {
            className: `${E.paddingX} ${E.flexCenter}`,
            children: p.jsx("div", {
              className: `${E.boxWidth}`,
              children: p.jsx(x2, {}),
            }),
          }),
      ],
    });
  };
Ju.createRoot(document.getElementById("root")).render(
  p.jsx(wn.StrictMode, { children: p.jsx(Xx, { children: p.jsx(L$, {}) }) })
);
