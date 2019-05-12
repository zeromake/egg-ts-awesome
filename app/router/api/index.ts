import { Application, Context } from "egg";

export default function(app: Application) {
    const { router: rootRouter, controller } = app;
    const router = rootRouter.namespace("/api", app.passport.authorized("api"));

    rootRouter.post(
        "/api/sessions",
        app.passport.authenticate("api", {
            successRedirect: null,
            successReturnToOrRedirect: null,
            failWithError: true,
        }),
        controller.api.session.login,
    );
    rootRouter.delete("/api/sessions", controller.api.session.logout);

    router.get("/sessions", controller.api.session.userinfo);

    router.resources("user", "/users", controller.api.user);

    router.get("/", async (ctx: Context) => {
        ctx.body = router.stack.reduce((routes, layer) => {
            routes[JSON.stringify(layer.methods)] = layer.path;
            return routes;
        }, {});
    });
}
