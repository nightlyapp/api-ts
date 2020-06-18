import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import { Geolocation } from "../models/Geolocation";
import { Pub } from "../models/Pub";
import { UserPub } from "../models/UserPub";

export const sequelize = new Sequelize({
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

sequelize.addModels([User, Geolocation, Pub, UserPub]);

sequelize.authenticate().then(() => {
    console.log('conectado com sucesso!')
}).catch((err) => {
    console.log(`Falha ao se conectar: ${err}`)
});
