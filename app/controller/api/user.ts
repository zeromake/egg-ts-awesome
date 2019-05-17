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
     * /user:
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
     * /user:
     *   put:
     *     security:
     *        - cookieAuth: []
     *     description: 修改用户密码
     *     tags:
     *       - user
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               confirm_password:
     *                 type: string
     *                 description: 确认密码
     *               password:
     *                 type: string
     *                 description: 新密码
     *             required:
     *               - confirm_password
     *               - password
     *     responses:
     *       200:
     *         description: 修改成功
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/message'
     */
    public async update(ctx: Context) {
        const id = +ctx.user.id;
        const User = ctx.repo.User;
        const body = ctx.request.body;
        body.id = id;
        const confirmPassword = body.confirm_password;
        const user = await User.createQueryBuilder("users")
            .select(["password"])
            .where("id = :id", { id })
            .take(1)
            .getOne();
        if (!user || confirmPassword !== user.password) {
            ctx.status = 403;
            ctx.message = "no permission access";
            return;
        }

        await User.save({
            password: body.password,
        });
        ctx.body = {
            message: "ok",
        };
    }
}
