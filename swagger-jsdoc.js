module.exports = {
    apis: [
        "app/controller/**/*.ts",
        "app/router/**/*.ts"
    ],
    info: {
        title: "awesome",
        version: "0.1.0",
    },
    openapi: "3.0.2",
    servers: [
        {
            url: '/api'
        }
    ]
};
