import { Application, Context } from 'egg';
import { Strategy } from 'passport-local';

export default function(app: Application) {
    // const UserModel = getRepository(User);
    // 挂载 strategy
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
        if (user.provider === 'admin') {
            const User = ctx.repo.User;
            const userObj = await User.findOne({
                username: user.username,
            });
            if (userObj && userObj.password === user.password) {
                delete userObj.password;
                return userObj;
            }
        }
        return null;
    });
    app.passport.authorized = function authorized(_?: string) {
        return async function authorized(ctx: Context, next) {
            // console.log(arguments);
            // const ctx: Context = this.ctx;
            if (!ctx.isAuthenticated()) {
                ctx.status = 401;
                ctx.message = 'User not authenticated';
                return;
            }
            // const user = ctx.user;
            // console.log(user);
            // if (!(user && user.provider === name)) {
            //     ctx.status = 401;
            //     ctx.message = 'User is not provider';
            //     return;
            // }
            return next();
        };
    };
    // app.passport.serializeUser(async (_, user) => {
    //     console.log('s', user);
    // });
    // app.passport.deserializeUser(async (_, user) => {
    //     console.log('d', user);
    // });
}
