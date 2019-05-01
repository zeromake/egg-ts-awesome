import { Application } from 'egg';

export default function(app: Application) {
    const { router, controller } = app;

    router.get('/', controller.www.home.index);
}
