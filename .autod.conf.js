'use strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'coverage',
  ],
  dep: [
    'egg',
    'egg-scripts',
    '@zeromake/egg-mock',
    '@zeromake/egg-typeorm',
    'egg-passport',
    'passport-local',
    'egg-redis',
    'egg-router-plus',
    'egg-session-redis',
    'mysql2',
    'typeorm',
  ],
  devdep: [
    'autod',
    'autod-egg',
    'egg-bin',
    'tslib',
    'typescript',
  ],
  keep: [
  ],
  semver: [
  ],
  test: 'scripts',
};
