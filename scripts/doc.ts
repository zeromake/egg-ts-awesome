import * as fse from 'fs-extra';

const options = {
    lang: 'zh',
    dir: '/public/docs',
    url: '/public/docs/swagger.json',
};
const template = `
<html lang="${options.lang}">
  <head>
    <meta charset="UTF-8">
    <title>Swagger UI</title>
    <link rel="stylesheet" type="text/css" href="${options.dir}/swagger-ui.css" >
    <link rel="icon" type="image/png" href="${options.dir}/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="${options.dir}/favicon-16x16.png" sizes="16x16" />
    <style>
      html
      {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }

      *,
      *:before,
      *:after
      {
        box-sizing: inherit;
      }

      body
      {
        margin:0;
        background: #fafafa;
      }
    </style>
  </head>

  <body>
    <div id="swagger-ui"></div>

    <script src="${options.dir}/swagger-ui-bundle.js"> </script>
    <script src="${options.dir}/swagger-ui-standalone-preset.js"> </script>
    <script>
    window.onload = function() {
      // Begin Swagger UI call region
      const ui = SwaggerUIBundle({
        url: "${options.url}",
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      })
      // End Swagger UI call region

      window.ui = ui
    }
  </script>
  </body>
</html>
`;

fse.copy("./node_modules/swagger-ui-dist/", "./app/public/docs").then(() => {
    return fse.writeFile("./app/public/docs/index.html", template);
});
