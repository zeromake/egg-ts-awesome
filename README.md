
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

[travis-image]: https://travis-ci.com/zeromake/egg-ts-awesome.svg?branch=master
[travis-url]: https://travis-ci.com/zeromake/egg-ts-awesome
[codecov-image]: https://img.shields.io/codecov/c/github/zeromake/egg-ts-awesome.svg?style=flat-square
[codecov-url]: https://codecov.io/github/zeromake/egg-ts-awesome?branch=master

# egg-ts-awesome

[egg](https://github.com/eggjs/egg) + [typeorm](https://github.com/typeorm/typeorm) + [swagger](https://swagger.io/)

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- Use `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
- typeorm 0.2.x

### Feature

- full use `typescript`.
- fork [@forsigner/egg-typeorm](https://github.com/forsigner/egg-typeorm) to [@zeromake/egg-typeorm](https://github.com/zeromake/egg-typeorm) add more config.
- fork [egg-mock](https://github.com/eggjs/egg-mock) to [@zeromake/egg-mock](https://github.com/zeromake/egg-mock) add supertest agent.
- add [@zeromake/egg-swagger](https://github.com/zeromake/egg-swagger) egg swagger plugin.
