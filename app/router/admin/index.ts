import { Application } from 'egg';

export default function(app: Application) {
    const { router: rootRouter, controller } = app;
    const router = rootRouter.namespace('/admin');

    router.get('/', controller.admin.home.index);

    router.post('/login', controller.admin.user.login);
}
