const Koa = require('koa');
const app = new Koa();

const root = './client';
const opts = {};
app.use( require('koa-static')(root, opts) );

app.listen(3000);
