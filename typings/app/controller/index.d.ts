// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiHome from '../../../app/controller/api/home';
import ExportApiSession from '../../../app/controller/api/session';
import ExportApiUser from '../../../app/controller/api/user';
import ExportWwwHome from '../../../app/controller/www/home';

declare module 'egg' {
  interface IController {
    api: {
      home: ExportApiHome;
      session: ExportApiSession;
      user: ExportApiUser;
    }
    www: {
      home: ExportWwwHome;
    }
  }
}
