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
exports.Geolocation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Pub_1 = require("./Pub");
let Geolocation = class Geolocation extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.address = "";
        this.latitude = 0;
        this.longitude = new Date();
        this.pubId = 0;
        this.pub = new Pub_1.Pub();
        this.creationDate = new Date();
        this.updatedOn = new Date();
        this.deletionDate = new Date();
    }
};
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Geolocation.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], Geolocation.prototype, "latitude", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Date)
], Geolocation.prototype, "longitude", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Pub_1.Pub),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Geolocation.prototype, "pubId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Pub_1.Pub),
    __metadata("design:type", Pub_1.Pub)
], Geolocation.prototype, "pub", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Geolocation.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Geolocation.prototype, "updatedOn", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], Geolocation.prototype, "deletionDate", void 0);
Geolocation = __decorate([
    sequelize_typescript_1.Table
], Geolocation);
exports.Geolocation = Geolocation;