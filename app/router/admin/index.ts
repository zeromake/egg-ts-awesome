import { Application, Context } from "egg";

export default function(app: Application) {
  const { router: rootRouter, controller } = app;

  const router = rootRouter.namespace(
    "/api/admin",
    app.passport.authorized("admin"),
  );

  rootRouter.post(
    "/api/admin/sessions",
    app.passport.authenticate("admin", {
      successRedirect: null,
      successReturnToOrRedirect: null,
      failWithError: true,
    }),
    controller.admin.session.login,
  );
  rootRouter.delete("/api/admin/sessions", controller.admin.session.logout);

  router.get("/sessions", controller.admin.session.userinfo);

  router.get("/", async (ctx: Context) => {
    ctx.body = {
      message: ctx.gettext("home", ctx.gettext("admin")),
    };
  });
}
