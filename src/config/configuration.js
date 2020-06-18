"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
const Geolocation_1 = require("../models/Geolocation");
const Pub_1 = require("../models/Pub");
const UserPub_1 = require("../models/UserPub");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    dialect: 'mysql',
    storage: ':memory:',
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
});
exports.sequelize.addModels([User_1.User, Geolocation_1.Geolocation, Pub_1.Pub, UserPub_1.UserPub]);
exports.sequelize.authenticate().then(() => {
    console.log('conectado com sucesso!');
}).catch((err) => {
    console.log(`Falha ao se conectar: ${err}`);
});
