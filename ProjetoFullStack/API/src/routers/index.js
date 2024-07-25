const profileRouters = require("./profileRouter.js");
const userRouters = require("./userRouter.js");
const exportRouters = require("./exportRouter.js");
const groupRouters = require("./groupRouter.js");
const subGroupRouters = require("./subGroupRouter.js");
const storeRouters = require("./storeRouter.js");
const clientSupplierRouters = require("./clientSupplierRouter.js");
const productRouters = require("./productRouter.js");
const imageRouters = require("./imageRouter.js");

module.exports = function (app, express) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(profileRouters);
  app.use(userRouters);
  app.use(exportRouters);
  app.use(groupRouters);
  app.use(subGroupRouters);
  app.use(storeRouters);
  app.use(clientSupplierRouters);
  app.use(productRouters);
  app.use(imageRouters);
};