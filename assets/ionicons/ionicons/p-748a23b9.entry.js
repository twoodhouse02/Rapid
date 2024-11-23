import { r as o, h as i, H as t, c as n } from "./p-e298ede3.js";
import { i as r, b as s, g as e, c, d as l } from "./p-006dba1a.js";
const BASE_URL = window.location.origin;
const a = (o) => {
    if (1 === o.nodeType) {
      if ("script" === o.nodeName.toLowerCase()) return !1;
      for (let i = 0; i < o.attributes.length; i++) {
        const t = o.attributes[i].name;
        if (r(t) && 0 === t.toLowerCase().indexOf("on")) return !1;
      }
      for (let i = 0; i < o.childNodes.length; i++)
        if (!a(o.childNodes[i])) return !1;
    }
    return !0;
  },
  h = new Map(),
  d = new Map();
let f;
const m = class {
    constructor(i) {
      o(this, i),
        (this.iconName = null),
        (this.inheritedAttributes = {}),
        (this.didLoadIcon = !1),
        (this.svgContent = void 0),
        (this.isVisible = !1),
        (this.mode = p()),
        (this.color = void 0),
        (this.ios = void 0),
        (this.md = void 0),
        (this.flipRtl = void 0),
        (this.name = void 0),
        (this.src = void 0),
        (this.icon = void 0),
        (this.size = void 0),
        (this.lazy = !1),
        (this.sanitize = !0);
    }
    componentWillLoad() {
      this.inheritedAttributes = s(this.el, ["aria-label"]);
    }
    connectedCallback() {
      this.waitUntilVisible(this.el, "50px", () => {
        (this.isVisible = !0), this.loadIcon();
      });
    }
    componentDidLoad() {
      this.didLoadIcon || this.loadIcon();
    }
    disconnectedCallback() {
      this.io && (this.io.disconnect(), (this.io = void 0));
    }
    waitUntilVisible(o, i, t) {
      if (
        this.lazy &&
        "undefined" != typeof window &&
        window.IntersectionObserver
      ) {
        const n = (this.io = new window.IntersectionObserver(
          (o) => {
            o[0].isIntersecting && (n.disconnect(), (this.io = void 0), t());
          },
          { rootMargin: i },
        ));
        n.observe(o);
      } else t();
    }
    loadIcon() {
      if (this.isVisible) {
        const o = e(this);
        o &&
          (h.has(o)
            ? (this.svgContent = h.get(o))
            : ((o, i) => {
                let t = d.get(o);
                if (!t) {
                  if (
                    "undefined" == typeof fetch ||
                    "undefined" == typeof document
                  )
                    return h.set(o, ""), Promise.resolve();
                  if (
                    ((o) => o.startsWith("data:image/svg+xml"))(o) &&
                    ((o) => -1 !== o.indexOf(";utf8,"))(o)
                  ) {
                    f || (f = new DOMParser());
                    const i = f
                      .parseFromString(o, "text/html")
                      .querySelector("svg");
                    return i && h.set(o, i.outerHTML), Promise.resolve();
                  }
                  (t = fetch(BASE_URL + o).then((t) => {
                    if (t.ok)
                      return t.text().then((t) => {
                        t &&
                          !1 !== i &&
                          (t = ((o) => {
                            const i = document.createElement("div");
                            i.innerHTML = o;
                            for (let o = i.childNodes.length - 1; o >= 0; o--)
                              "svg" !==
                                i.childNodes[o].nodeName.toLowerCase() &&
                                i.removeChild(i.childNodes[o]);
                            const t = i.firstElementChild;
                            if (t && "svg" === t.nodeName.toLowerCase()) {
                              const o = t.getAttribute("class") || "";
                              if (
                                (t.setAttribute(
                                  "class",
                                  (o + " s-ion-icon").trim(),
                                ),
                                a(t))
                              )
                                return i.innerHTML;
                            }
                            return "";
                          })(t)),
                          h.set(o, t || "");
                      });
                    h.set(o, "");
                  })),
                    d.set(o, t);
                }
                return t;
              })(o, this.sanitize).then(() => (this.svgContent = h.get(o))),
          (this.didLoadIcon = !0));
      }
      this.iconName = c(this.name, this.icon, this.mode, this.ios, this.md);
    }
    render() {
      const { flipRtl: o, iconName: n, inheritedAttributes: r, el: s } = this,
        e = this.mode || "md",
        c = !!n && (n.includes("arrow") || n.includes("chevron")) && !1 !== o,
        a = o || c;
      return i(
        t,
        Object.assign(
          {
            role: "img",
            class: Object.assign(Object.assign({ [e]: !0 }, u(this.color)), {
              [`icon-${this.size}`]: !!this.size,
              "flip-rtl": a,
              "icon-rtl": a && l(s),
            }),
          },
          r,
        ),
        i(
          "div",
          this.svgContent
            ? { class: "icon-inner", innerHTML: this.svgContent }
            : { class: "icon-inner" },
        ),
      );
    }
    static get assetsDirs() {
      return ["svg"];
    }
    get el() {
      return n(this);
    }
    static get watchers() {
      return {
        name: ["loadIcon"],
        src: ["loadIcon"],
        icon: ["loadIcon"],
        ios: ["loadIcon"],
        md: ["loadIcon"],
      };
    }
  },
  p = () =>
    ("undefined" != typeof document &&
      document.documentElement.getAttribute("mode")) ||
    "md",
  u = (o) => (o ? { "ion-color": !0, [`ion-color-${o}`]: !0 } : null);
m.style =
  ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
export { m as ion_icon };
