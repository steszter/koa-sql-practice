const Koa = require('koa');
const router = require('routing');
const ResponseTime = require('koa-response-time');
const Morgan = require('koa-morgan');

const app = new Koa();

app.use(ResponseTime());
app.use(Morgan('combined'));
app.use(router.routes());

exports.start = async function () {
  try {
    this.server = await app.listen(2000);
  } catch (error) {
    console.log(error);
  }
};
