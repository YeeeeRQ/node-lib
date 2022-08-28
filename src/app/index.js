const Koa = require("koa");
const userRouter = require("../router/user.route");
const KoaBody = require("koa-body");

const app = new Koa();

app.use(KoaBody()); // 在所有中间件开头注册

app.use(userRouter.routes());

module.exports = app;
