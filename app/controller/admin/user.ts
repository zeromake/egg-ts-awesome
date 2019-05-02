import { Controller } from 'egg';

/**
 * User Service
 */
export default class User extends Controller {
    public async login() {
        const User = this.ctx.repo.User;
        const body = this.ctx.request.body;
        const name = body.username;
        const password = body.password;
        const user = await User.findOne({
            username: name,
        });
        if (user && user.password === password) {
            user.last_at = new Date();
            await User.save(user);
            this.ctx.body = user;
            return;
        }
        this.ctx.status = 401;
    }
    public async logout() {}
}
