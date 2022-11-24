switch (process.env.npm_lifecycle_event) {
  case "build":
    module.exports = require("./config/webpack.config.prod.cjs");
    break;
  case "start":
  case "build:dev":
    module.exports = require("./config/webpack.config.dev.cjs");
    break;
}
