import { Application, Context } from "egg";

export default function(app: Application) {
    const { router: rootRouter } = app;
    const router = rootRouter.namespace('/api/www');
    router.get("/", async (ctx: Context) => {
        ctx.body = router.stack.reduce((routes, layer) => {
            routes[JSON.stringify(layer.methods)] = layer.path;
            return routes;
        }, {});
    });
}
