import './index.css'
import { jsx as a } from "./index2.js";
import p from "classnames";
import l from "./index3.js";
import { Button as r } from "antd";
const n = (s, u) => {
  const { className: t, type: c, ...e } = s;
  let o = p({
    [l.pinkBtn]: !0,
    "color-pink-400": !0
  });
  const m = t ? `${o} ${t}` : o;
  return /* @__PURE__ */ a(r, { placeholder: "请输入", className: m, ...e });
};
n.Group = r.Group;
export {
  n as default
};
//# sourceMappingURL=index.js.map

                        