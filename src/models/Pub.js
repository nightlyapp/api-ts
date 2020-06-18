"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pub = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("./User");
const UserPub_1 = require("./UserPub");
const Geolocation_1 = require("./Geolocation");
// import { TinyIntegerDataType } from "sequelize/types";
let Pub = class Pub extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.name = "";
        this.description = "";
        this.isOpen = true;
        this.geolocation = new Geolocation_1.Geolocation();
        this.creationDate = new Date();
        this.updatedOn = new Date();
        this.deletionDate = new Date();
        this.users = new Array();
    }
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pub.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Pub.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TINYINT),
    __metadata("design:type", Boolean)
], Pub.prototype, "isOpen", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => Geolocation_1.Geolocation),
    __metadata("design:type", Geolocation_1.Geolocation)
], Pub.prototype, "geolocation", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Pub.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Pub.prototype, "updatedOn", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Pub.prototype, "deletionDate", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => User_1.User, () => UserPub_1.UserPub),
    __metadata("design:type", Array)
], Pub.prototype, "users", void 0);
Pub = __decorate([
    sequelize_typescript_1.Table
], Pub);
exports.Pub = Pub;
