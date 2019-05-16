import { Controller, Context } from "egg";

/**
 * @swagger
 * tags:
 *   - name: user
 *     description: 用户
 */

export default class User extends Controller {
    /**
     * @swagger
     * /users:
     *   post:
     *     security:
     *       - cookieAuth: []
     *     description: 创建用户
     *     tags:
     *       - user
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/userlogin'
     *     responses:
     *       200:
     *         description: 创建成功
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/user'
     */
    public async create(ctx: Context) {
        // const ctx = this.ctx;
        const body = ctx.request.body;
        const password = body.password;
        const username = body.username;
        const User = ctx.repo.User;
        let user: any = await User.findOne({
            username,
        });
        if (user) {
            ctx.status = 400;
            ctx.message = `username: ${username} is has`;
            return;
        }
        user = await User.save({
            ...body,
            password,
            last_ip: ctx.ip,
        });
        delete user.password;
        ctx.body = user;
    }

    /**
     * @swagger
     */
    public async update(ctx: Context) {
        const id = +ctx.user.id;
        const User = ctx.repo.User;
        const body = ctx.request.body;
        body.id = id;

        delete body.username;
        ctx.body = await User.save({
            ...body,
            ip: ctx.ip,
            last_at: new Date(),
        });
    }
}
