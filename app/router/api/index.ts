import { Application, Context } from "egg";

export default function(app: Application) {
    const { router: rootRouter, controller } = app;
    const router = rootRouter.namespace("/api", app.passport.authorized("api"));
    /**
     * @swagger
     * components:
     *   securitySchemes:
     *     cookieAuth:
     *       type: apiKey
     *       in: cookie
     *       name: EGG_SESS
     *   schemas:
     *     userlogin:
     *       type: object
     *       properties:
     *         username:
     *           description: 用户名
     *           type: string
     *         password:
     *           description: 密码
     *           type: string
     *       required:
     *         - username
     *         - password
     *     user:
     *       allOf:
     *         - $ref: '#/components/schemas/userlogin'
     *         - type: object
     *           properties:
     *             id:
     *               description: 用户主键
     *               type: integer
     *             last_ip:
     *               description: 最后登录ip
     *               type: string
     * tags:
     *  - name: apiSession
     *    description: api会话
     */

    /**
     * @swagger
     * /sessions:
     *   post:
     *     description: 登录 api 会话
     *     tags:
     *       - apiSession
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/userlogin'
     *     responses:
     *       200:
     *         description: 登录成功
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/user'
     *     headers:
     *       Set-Cookie:
     *         schema:
     *           type: string
     *           example: EGG_SESS=rsfDo9AsjXgZKW4RrgZH; Path=/; HttpOnly
     */
    rootRouter.post(
        "/api/sessions",
        app.passport.authenticate("api", {
            successRedirect: null,
            successReturnToOrRedirect: null,
            failWithError: true,
        }),
        controller.api.session.login,
    );

    /**
     * @swagger
     * /sessions:
     *   delete:
     *     security:
     *       - cookieAuth: []
     *     description: 退出登录会话
     *     tags:
     *       - apiSession
     *     responses:
     *       200:
     *         description: 登出成功
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   description: 提示消息
     */
    rootRouter.delete("/api/sessions", controller.api.session.logout);

    /**
     * @swagger
     * /sessions:
     *   get:
     *     security:
     *       - cookieAuth: []
     *     description: 获取会话
     *     tags:
     *       - apiSession
     *     responses:
     *       200:
     *         description: 成功
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/user'
     */
    router.get("/sessions", controller.api.session.userinfo);

    router.resources("user", "/users", controller.api.user);

    /**
     * @swagger
     * /register:
     *   post:
     *     description: 注册
     *     tags:
     *       - apiSession
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/userlogin'
     *     responses:
     *       200:
     *         description: 注册成功
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/user'
     */
    rootRouter.post("/api/register", controller.api.user.create);

    router.get("/", async (ctx: Context) => {
        ctx.body = router.stack.reduce((routes, layer) => {
            routes[JSON.stringify(layer.methods)] = layer.path;
            return routes;
        }, {});
    });
}
