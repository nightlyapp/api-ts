import express from "express";
import App from "./src/app";
import { sequelize } from "./src/config/configuration";
const path = require("path");

// const app = express();
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: true });

App.use("/", express.static(__dirname + "/website"));

// App.use("*", function (req, res, next) {
//   res.status(404);

//   // respond with html page
//   if (req.accepts("html")) {
//     res.redirect("/");
//     return;
//   }

//   // respond with json
//   if (req.accepts("json")) {
//     res.send({ error: "Not found" });
//     return;
//   }

//   // default to plain-text. send()
//   res.type("txt").send("Not found");
// });

App.listen(PORT, () => {
  console.log(`🚀 Server started on https://nightly.com.br:${PORT}`);
});
