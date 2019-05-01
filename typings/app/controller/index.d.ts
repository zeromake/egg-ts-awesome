// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminHome from '../../../app/controller/admin/home';
import ExportApiHome from '../../../app/controller/api/home';
import ExportWwwHome from '../../../app/controller/www/home';

declare module 'egg' {
  interface IController {
    admin: {
      home: ExportAdminHome;
    }
    api: {
      home: ExportApiHome;
    }
    www: {
      home: ExportWwwHome;
    }
  }
}
