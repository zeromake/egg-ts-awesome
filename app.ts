import { Application, Context } from 'egg';
import { Strategy } from 'passport-local';

export default function(app: Application) {
    // 挂载 strategy
    app.passport.use('api', new Strategy({
        passReqToCallback: true,
    }, (req, username, password, done) => {
        const user = {
            provider: 'api',
            username,
            password,
        };
        // 这里不处理应用层逻辑，传给 app.passport.verify 统一处理
        app.passport.doVerify(req, user, done);
    }));

    app.passport.use('admin', new Strategy({
        passReqToCallback: true,
    }, (req, username, password, done) => {
        const user = {
            provider: 'admin',
            username,
            password,
        };
        // 这里不处理应用层逻辑，传给 app.passport.verify 统一处理
        app.passport.doVerify(req, user, done);
    }));

    app.passport.verify(async (ctx: Context, user?: any) => {
        const provider = user.provider;
        let userObj: any = null;
        if (provider === 'api') {
            const User = ctx.repo.User;
            userObj = await User.createQueryBuilder('users')
            .where('username = :username', {
                username: user.username,
            })
            .addSelect('users.password')
            .take(1)
            .getOne();
        } else if (provider === 'admin') {
            const Manager = ctx.repo.Manager;
            userObj = await Manager.createQueryBuilder('managers')
            .where('username = :username', {
                username: user.username,
            })
            .addSelect('managers.password')
            .take(1)
            .getOne();
        }
        if (!userObj || userObj.password !== user.password) {
            userObj = null;
        }
        if (userObj) {
            delete userObj.password;
            userObj.provider = provider;
        }
        return userObj;
    });
    app.passport.authorized = function _authorized(provider: string) {
        return async function authorized(ctx: Context, next: () => Promise<void>): Promise<void> {
            if (!ctx.isAuthenticated()) {
                ctx.status = 401;
                ctx.body = {
                    message: ctx.gettext("unAuth"),
                };
                return;
            }
            if (ctx.user.provider !== provider) {
                ctx.status = 403;
                ctx.body = {
                    message: ctx.gettext(
                        "unPermission",
                        ctx.gettext(ctx.user.provider),
                        ctx.gettext(provider),
                    ),
                };
                return;
            }
            return next();
        };
    };
    // app.context.
    // app.passport.serializeUser(async (_, user) => {
    //     console.log('s', user);
    // });
    // app.passport.deserializeUser(async (_, user) => {
    //     console.log('d', user);
    // });
}
