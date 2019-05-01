import { Application } from 'egg';

export default function(app: Application) {
    const { router: rootRouter, controller } = app;
    const router = rootRouter.namespace('/api');

    router.get('/', controller.api.home.index);
}
