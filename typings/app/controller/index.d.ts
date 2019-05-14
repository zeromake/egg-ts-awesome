// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminSession from '../../../app/controller/admin/session';
import ExportApiSession from '../../../app/controller/api/session';
import ExportApiUser from '../../../app/controller/api/user';
import ExportWwwHome from '../../../app/controller/www/home';

declare module 'egg' {
  interface IController {
    admin: {
      session: ExportAdminSession;
    }
    api: {
      session: ExportApiSession;
      user: ExportApiUser;
    }
    www: {
      home: ExportWwwHome;
    }
  }
}
