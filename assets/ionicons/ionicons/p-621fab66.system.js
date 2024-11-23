System.register(["./p-e7ae1e74.system.js"], function (n) {
  "use strict";
  var e;
  return {
    setters: [
      function (n) {
        e = n.g;
      },
    ],
    execute: function () {
      var t;
      var r = function () {
        if (typeof window === "undefined") {
          return new Map();
        } else {
          if (!t) {
            var n = window;
            n.Ionicons = n.Ionicons || {};
            t = n.Ionicons.map = n.Ionicons.map || new Map();
          }
          return t;
        }
      };
      var i = n("a", function (n) {
        Object.keys(n).forEach(function (e) {
          o(e, n[e]);
          var t = e
            .replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2")
            .toLowerCase();
          if (e !== t) {
            o(t, n[e]);
          }
        });
      });
      var o = function (n, e) {
        var t = r();
        var i = t.get(n);
        if (i === undefined) {
          t.set(n, e);
        } else if (i !== e) {
          console.warn(
            '[Ionicons Warning]: Multiple icons were mapped to name "'.concat(
              n,
              '". Ensure that multiple icons are not mapped to the same icon name.',
            ),
          );
        }
      };
      var a = n("g", function (n) {
        var e = s(n.src);
        if (e) {
          return e;
        }
        e = c(n.name, n.icon, n.mode, n.ios, n.md);
        if (e) {
          return u(e, n);
        }
        if (n.icon) {
          e = s(n.icon);
          if (e) {
            return e;
          }
          e = s(n.icon[n.mode]);
          if (e) {
            return e;
          }
        }
        return null;
      });
      var u = function (n, t) {
        var i = r().get(n);
        if (i) {
          return i;
        }
        try {
          return e("svg/".concat(n, ".svg"));
        } catch (e) {
          console.warn(
            '[Ionicons Warning]: Could not load icon with name "'.concat(
              n,
              '". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.',
            ),
            t,
          );
        }
      };
      var c = n("c", function (n, e, t, r, i) {
        t = (t && l(t)) === "ios" ? "ios" : "md";
        if (r && t === "ios") {
          n = l(r);
        } else if (i && t === "md") {
          n = l(i);
        } else {
          if (!n && e && !f(e)) {
            n = e;
          }
          if (d(n)) {
            n = l(n);
          }
        }
        if (!d(n) || n.trim() === "") {
          return null;
        }
        var o = n.replace(/[a-z]|-|\d/gi, "");
        if (o !== "") {
          return null;
        }
        return n;
      });
      var s = function (n) {
        if (d(n)) {
          n = n.trim();
          if (f(n)) {
            return n;
          }
        }
        return null;
      };
      var f = function (n) {
        return n.length > 0 && /(\/|\.)/.test(n);
      };
      var d = n("i", function (n) {
        return typeof n === "string";
      });
      var l = function (n) {
        return n.toLowerCase();
      };
      var v = n("b", function (n, e) {
        if (e === void 0) {
          e = [];
        }
        var t = {};
        e.forEach(function (e) {
          if (n.hasAttribute(e)) {
            var r = n.getAttribute(e);
            if (r !== null) {
              t[e] = n.getAttribute(e);
            }
            n.removeAttribute(e);
          }
        });
        return t;
      });
      var m = n("d", function (n) {
        if (n) {
          if (n.dir !== "") {
            return n.dir.toLowerCase() === "rtl";
          }
        }
        return (
          (document === null || document === void 0
            ? void 0
            : document.dir.toLowerCase()) === "rtl"
        );
      });
    },
  };
});