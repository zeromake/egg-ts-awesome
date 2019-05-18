import * as fs from 'fs';
import unittest from './config/config.unittest';

const env = process.env.EGG_SERVER_ENV || 'local';

const configMap = {
    unittest,
};
[
    "local",
    "prod",
].forEach(env => {
    const path = `./config/config.${env}.ts`;
    if (fs.existsSync(path)) {
        let cfg = require(path);
        cfg = cfg.default || cfg;
        configMap[env] = cfg;
    }
});

const config = configMap[env]({});
module.exports = {
    ...config.typeorm.connection,
};
