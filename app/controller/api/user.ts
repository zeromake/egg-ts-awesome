import { Controller, Context } from 'egg';

export default class User extends Controller {

    public async create(ctx: Context) {
        // const ctx = this.ctx;
        const body = ctx.request.body;
        const password = body.password;
        const username = body.username;
        const User = ctx.repo.User;
        let user: any = await User.findOne({
            username,
        });
        if (user) {
            ctx.status = 400;
            ctx.message = `username: ${username} is has`;
            return;
        }
        user = await User.save({
            ...body,
            password,
            ip: ctx.ip,
            last_at: new Date(),
        });
        delete user.password;
        ctx.body = user;
    }

    public async update(ctx: Context) {
        const id = +ctx.params.id || 0;
        const User = ctx.repo.User;
        const body = ctx.request.body;
        body.id = id;

        delete body.username;
        ctx.body = await User.save({
            ...body,
            ip: ctx.ip,
            last_at: new Date(),
        });
    }

    public async index(ctx: Context) {
        const query = ctx.query;
        const User = ctx.repo.User;
        const qb = User.createQueryBuilder();
        if (query.id) {
            qb.where('id = :id', {
                id: query.id,
            });
        }
        if (query.username) {
            qb.where('username = :username', {
                username: query.username,
            });
        }
        const pageNum = +query.page_num || 1;
        let pageSize = +query.page_size || 20;
        if (pageSize > 200) {
            pageSize = 200;
        }
        qb.limit(pageSize);
        if (pageNum > 1) {
            qb.skip(pageSize * (pageNum - 1));
        }
        if (query.sort) {
            const sort = query.sort;
            const arr = sort.split('-');
            const order = arr[1] || 'ASC';
            qb.orderBy(arr[0], order.toLocaleUpperCase());
        }
        // const count = await qb.getCount();
        const [ users, total ] = await qb.getManyAndCount();
        ctx.set('X-Pagination', JSON.stringify({
            page_num: pageNum,
            page_size: pageSize,
            total,
        }));
        ctx.body = users;
    }
}
