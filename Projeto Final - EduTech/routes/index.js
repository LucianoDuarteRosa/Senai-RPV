const routerPerfil = require("./perfilRouter.js");

module.exports = function (app, express) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routerPerfil);
};
