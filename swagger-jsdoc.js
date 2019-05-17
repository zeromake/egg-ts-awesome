module.exports = {
    apis: [
        'app/controller/**/*.ts',
        'app/router/**/*.ts',
    ],
    openapi: '3.0.2',
    info: {
        title: 'egg-ts-awesome',
        version: '0.1.0',
        description: 'egg ts awesome',
    },
    servers: [
        {
            url: '/api',
            description: '接口',
        }
    ],
};
