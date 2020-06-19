import express, { json } from "express";
import App from "./src/app";
import { sequelize } from "./src/config/configuration";
const path = require("path");

// const app = express();
App.use(json());
const PORT = process.env.PORT || 3000;
// sequelize.sync();

App.use("/", express.static(__dirname + "/website"));

App.use(function(req, res, next){
  res.redirect('/')
});

App.listen(PORT, () => {
  console.log(`🚀 Server started on https://nightly.com.br:${PORT}`);
});
