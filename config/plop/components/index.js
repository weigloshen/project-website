import { getPath, getFilePath } from "../uilt.js";

export default {
  // 描述
  description: "this is a skeleton plopfile", // 接受用户的输入，input是输入，list是选择，这里的type的类型是基于inquirer.js的prompts
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入文件名",
    },
  ], // add 是添加一个文件，name是上面输入的name名字
  actions: ({ name }) => {
    return [
      {
        type: "add",
        path: getPath(name, "tsx"),
        templateFile: 'config/plop/components/template.hbs',
        data: {
          name,
        },
      },
      {
        type: "add",
        path: getPath(name, "scss"),
      },
    ];
  },
};
