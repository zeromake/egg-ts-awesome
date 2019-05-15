import { EggAppConfig, PowerPartial, EggAppInfo } from "egg";

export default (appInfo: EggAppInfo) => {
    const config: PowerPartial<EggAppConfig> = {};
    config.keys = appInfo.name + "_1556673982809_1095";

    config.typeorm = {
        connection: {
            type: "sqlite",
            database: "egg-ts-awesome.db",
            synchronize: true,
            logging: false,
            entities: ["app/entity/**/*.ts"],
            migrations: ["database/migrations/**/*.ts"],

            cli: {
                entitiesDir: "app/entity",
                migrationsDir: "database/migrations",
            },
        },
        watch: false,
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
