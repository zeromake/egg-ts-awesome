import local from './config/config.local';
import prod from './config/config.prod';
import unittest from './config/config.unittest';

const env = process.env.EGG_SERVER_ENV || 'local';

const configMap = {
    local,
    prod,
    unittest,
};
const config = configMap[env]({});
module.exports = {
    ...config.typeorm.connection,
};
