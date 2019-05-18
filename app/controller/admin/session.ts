import { Controller, Context } from "egg";

export default class Session extends Controller {
    public async login(ctx: Context) {
        const Manager = ctx.repo.Manager;
        const ctxUser = ctx.user;
        const user = {
            id: ctxUser.id,
            last_ip: this.ctx.ip,
        };
        ctx.body = { ...ctxUser, ...(await Manager.save(user)) };
    }

    public async logout(ctx: Context) {
        ctx.logout("admin");
        ctx.body = {
            message: ctx.gettext("success"),
        };
    }

    public async userinfo(ctx: Context) {
        ctx.body = ctx.user;
    }
}
