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
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    // static: true,
    // nunjucks: {
    //   enable: true,
    //   package: 'egg-view-nunjucks',
    // },
};

export default plugin;
