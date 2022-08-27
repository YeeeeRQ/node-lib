# Node lib 通用API

## 项目初始化

### 1 npm初始化

```bash
npm init -y 
```

生成`package.json`文件, 用于记录项目的依赖.

### 2 git初始化

```bash
git init
```

生成.git隐藏文件（本地git仓库）

## 搭建项目

### 1 安装Koa框架

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

### 3 配置nodemon

方便开发, 添加nodemon，修改package.json配置，添加nodemon运行入口。

```bash
npm i nodemon -D
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

### 4 抽离应用的基本配置

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

## 添加路由

路由： 根据不同的URL，调用对应的处理函数

### 1 安装 koa-router

```javascript
npm i koa-router
```

步骤：

1. 导入包
2. 实例化对象
3. 编写路由
4. 注册中间件

### 2 编写路由

创建`src/router`目录，编写`user.route.js`

```javascript
const Router = require("koa-router");

const router = new Router({ prefix: "/users" });

// GET /users/
router.get("/", (ctx, next) => {
  ctx.body = "hello users";
});

module.exports = router;
```

### 3 改写main.js

```javascript
const Koa = require("koa");

const { APP_PORT } = require("./config/config.default");
const userRouter = require("./router/user.route");

const app = new Koa();

app.use(userRouter.routes());

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});

```

## 目录结构优化

### 将http服务和app业务拆分

创建`src/app/index.js`

```javascript
const Koa = require("koa");
const app = new Koa();

const userRouter = require("../router/user.route");

app.use(userRouter.routes());

module.exports = app;
```

改写`main.js`

```javascript
const app = require("./app");

const { APP_PORT } = require("./config/config.default");

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
```
