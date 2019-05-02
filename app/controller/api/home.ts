import { Controller, Context } from 'egg';

export default class HomeController extends Controller {
    public async index(ctx: Context) {
        // const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg api');
    }
}
