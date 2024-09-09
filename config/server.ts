const strapi = require("@strapi/strapi");
const app = strapi({ distDir: "./dist" });
app.start();

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    url: "/dashboard",
    serveAdminPanel: true,
  },
});
