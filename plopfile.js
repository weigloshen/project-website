import components from "./config/plop/components/index.js";
export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setHelper("upperCase", function (text) {
    return text.at(0).toUpperCase() + text.slice(1);
  });
  // 创建了basics的动作
  plop.setGenerator("components", components);
}
