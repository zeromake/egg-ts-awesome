import { EggAppConfig, PowerPartial, EggAppInfo } from "egg";

export default (appInfo: EggAppInfo) => {
    const config: PowerPartial<EggAppConfig> = {};
    config.keys = appInfo.name + "_1556673982809_1095";

    config.typeorm = {
        type: "mysql",
        host: "localhost",
        port: 3309,
        username: "batch-sms",
        password: "batch-sms",
        database: "batch-sms",
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
        agent: true,
    };
    config.sessionRedis = {
        name: undefined,
    };
    return config;
};
