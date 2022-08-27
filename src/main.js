const Koa = require("koa");
const Router = require("koa-router");

const { APP_PORT } = require("./config/config.default");

const app = new Koa();

const indexRouter = new Router();
indexRouter.get("/", (ctx, next) => {
  ctx.body = "hello index";
});

const userRouter = new Router();
userRouter.get("/users", (ctx, next) => {
  ctx.body = "hello user router";
});

app.use(indexRouter.routes());
app.use(userRouter.routes());

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`);
});
