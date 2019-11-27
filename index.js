const express = require("express");
const config = require("config");

const app = express();
const logger = require("./startup/logging");
require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  logger.info(`Listening on port ${port}...`)
);

aaa.oi();

module.exports = server;
