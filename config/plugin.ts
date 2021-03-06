import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  routerPlus: {
    enable: true,
    package: "egg-router-plus",
  },
  jsonp: false,
  // 日志切割 require schedule
  logrotator: false,
  schedule: false,
  i18n: true,
  static: true,
  typeorm: {
    enable: true,
    package: "@zeromake/egg-typeorm",
  },
  security: true,
  session: true,
  passport: {
    enable: true,
    package: "egg-passport",
  },
  redis: {
    enable: true,
    package: "egg-redis",
  },
  sessionRedis: {
    enable: true,
    package: "egg-session-redis",
  },
  swagger: {
    enable: true,
    package: "@zeromake/egg-swagger",
  },
  // static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};

export default plugin;
