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

方便开发, 添加nodemon，修改package.json配置，添加nodemon运行入口。

```bash
npm i nodemon
```

```json
"scripts": {
    "dev": "nodemon src/main.js"
},
```

启动服务

```bash
npm run dev
```

4 抽离应用的基本配置

dotenv 会自动读取项目根目录下.env文件，并将配置的变量读取放置到process.env中

```bash
npm i dotenv
```

创建.env文件

```text
APP_PORT=8000
```

创建`src/config/config.default.js`

改写`main.js`

```javascript
const Koa = require("koa");

const { APP_PORT } = require("./config/config.default");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "hello world";
});

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
```
