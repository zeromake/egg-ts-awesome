// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-static';
import 'egg-view';
import 'egg-router-plus';
import '@zeromake/egg-typeorm';
import 'egg-passport';
import 'egg-redis';
import 'egg-session-redis';
import '@zeromake/egg-swagger';
import 'egg-view-nunjucks';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    routerPlus?: EggPluginItem;
    typeorm?: EggPluginItem;
    passport?: EggPluginItem;
    redis?: EggPluginItem;
    sessionRedis?: EggPluginItem;
    swagger?: EggPluginItem;
    nunjucks?: EggPluginItem;
  }
}