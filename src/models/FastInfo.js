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
exports.FastInfo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const FastInfoPub_1 = require("./FastInfoPub");
const Pub_1 = require("./Pub");
// import { TinyIntegerDataType } from "sequelize/types";
let FastInfo = class FastInfo extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FastInfo.prototype, "attribute", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], FastInfo.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], FastInfo.prototype, "updatedOn", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    __metadata("design:type", Date)
], FastInfo.prototype, "deletionDate", void 0);
__decorate([
    sequelize_typescript_1.BelongsToMany(() => Pub_1.Pub, () => FastInfoPub_1.FastInfoPub),
    __metadata("design:type", Array)
], FastInfo.prototype, "pub", void 0);
FastInfo = __decorate([
    sequelize_typescript_1.Table
], FastInfo);
exports.FastInfo = FastInfo;
