import express, { json } from "express";
import App from "./src/app";
import { sequelize } from "./src/config/configuration";

// const app = express();
App.use(json());
const PORT = process.env.PORT || 3000;
sequelize.sync();

App.get("/", (request, response) => {
  return response.json({ message: "Hello, TypeScript!" });
});

App.listen(3000, () => {
  console.log("🚀 Server started on http://localhost:3000");
});
