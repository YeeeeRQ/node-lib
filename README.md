## 项目初始化

1 npm初始化

```bash
npm init -y 
```

生成`package.json`文件, 用于记录项目的依赖.

2 git初始化

```bash
git init
```

生成.git隐藏文件（本地git仓库）

## 搭建项目

1 安装Koa框架

```bash
npm install koa
```

2 编写最基本的app
创建src/main.js

```javascript
const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "hello world";
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
```

3 配置nodemon

方便开发, 添加nodemon，编写package.json配置，添加nodemon运行入口。

```json
"scripts": {
    "dev": "nodemon src/main.js"
},
```
