import { Application, Context } from "egg";

export default function(app: Application) {
  const { router: rootRouter } = app;
  const router = rootRouter.namespace("/api/www");
  router.get("/", async (ctx: Context) => {
    ctx.body = {
      message: ctx.gettext("home", ctx.gettext("www")),
    };
  });

  rootRouter.get(['/', '/*'], async (ctx: Context) => {
    await ctx.render('www.njk');
  });
}
