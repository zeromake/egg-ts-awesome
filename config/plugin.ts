import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
    routerPlus: {
        enable: true,
        package: 'egg-router-plus',
    },
    jsonp: false,
    // 日志切割 require schedule
    logrotator: false,
    schedule: false,
    i18n: false,
    static: true,
    typeorm: {
        enable: true,
        package: '@forsigner/egg-typeorm',
    },
    security: false,
    session: true,
    passport: {
        enable: true,
        package: 'egg-passport',
    },
    redis: {
        enable: true,
        package: 'egg-redis',
    },
    sessionRedis: {
        enable: true,
        package: 'egg-session-redis',
    },
    // static: true,
    // nunjucks: {
    //   enable: true,
    //   package: 'egg-view-nunjucks',
    // },
};

export default plugin;
