import { Controller } from 'egg';

/**
 * User Service
 */
export default class User extends Controller {
    public async login() {
        const body = this.ctx.request.body;
        const name = body.name;
        const password = body.password;
        const user = await this.ctx.repo.User.findOne({
            name,
        });
        if (user && user.password === password) {
            this.ctx.body = user;
            return;
        }
        this.ctx.status = 401;
    }
}
