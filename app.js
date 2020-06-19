"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./src/app"));
const configuration_1 = require("./src/config/configuration");
const path = require("path");
// const app = express();
const PORT = process.env.PORT || 3000;
configuration_1.sequelize.sync({ force: true });
app_1.default.use("/", express_1.default.static(__dirname + "/website"));
app_1.default.use("*", function (req, res, next) {
    if (req.secure)
        next();
    else
        res.redirect(`https://${req.hostname}${req.url}`);
    res.status(404);
    // respond with html page
    if (req.accepts("html")) {
        res.redirect(`https://${req.hostname}`);
        return;
    }
    // respond with json
    if (req.accepts("json")) {
        res.send({ error: "Not found" });
        return;
    }
    // default to plain-text. send()
    res.type("txt").send("Not found");
});
app_1.default.listen(PORT, () => {
    console.log(`🚀 Server started on https://nightly.com.br:${PORT}`);
});
