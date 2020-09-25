const createHttpError = require('http-errors');

const { customersRoutes } = require('./customer.routes');

module.exports.initRoutes = (app) => {
  app.use("/customers", customersRoutes);

  // Error handler
  app.use((req, res, next) => {
    return next(createHttpError(404));
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ ...error });
  });
};
