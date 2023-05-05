import { resolve } from "path";
import { cwd } from "process";
export function getPath(name, type) {
  if (type === "tsx") {
    return `src/components/${name}/index.${type}`;
  }
  if (type === "scss") {
    return `src/components/${name}/${name}.${type}`;
  }
}
export function getFilePath(n, t) {
  console.log(resolve(cwd(), `config/plop/${n}/${t}.hbs`));
}
