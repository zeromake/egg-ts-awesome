import { Controller, Context } from 'egg';

export default class Session extends Controller {

    public async login(ctx: Context) {
        const User = ctx.repo.User;
        const ctxUser = ctx.user;
        const user = {
            id: ctxUser.id,
            ip: this.ctx.ip,
            last_at: new Date(),
        };
        ctx.body = { ...ctxUser, ...await User.save(user) };
    }

    public async logout(ctx: Context) {
        ctx.logout();
        ctx.body = {
            message: 'login ok',
        };
    }
    public async userinfo(ctx: Context) {
        ctx.body = ctx.user;
    }
}
