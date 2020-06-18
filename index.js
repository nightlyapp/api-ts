"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_1 = __importDefault(require("./src/app"));
const configuration_1 = require("./src/config/configuration");
// const app = express();
app_1.default.use(express_1.json());
const PORT = process.env.PORT || 3000;
configuration_1.sequelize.sync();
app_1.default.get("/", (request, response) => {
    return response.json({ message: "Hello, TypeScript!" });
});
app_1.default.listen(3000, () => {
    console.log("🚀 Server started on http://localhost:3000");
});
