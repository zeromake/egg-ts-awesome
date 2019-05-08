import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1556673982809_1092";

    // add your egg config in here
    config.middleware = [];
    config.typeorm = {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test",
        synchronize: false,
        logging: false,
        entities: ["app/entity/**/*.ts"],
        migrations: ["database/migrations/**/*.ts"],
        subscribers: ["database/subscriber/**/*.ts"],
    };

    config.redis = {
        client: {
            host: "127.0.0.1",
            port: 6381,
            password: "",
            db: 0,
        },
    };
    config.sessionRedis = {
        name: undefined,
    };
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${
            appInfo.name
        }`,
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
