import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AllowNull,
  BelongsToMany,
  PrimaryKey,
} from "sequelize-typescript";
import { FastInfoPub } from "./FastInfoPub";
import { Pub } from "./Pub";
// import { TinyIntegerDataType } from "sequelize/types";

@Table
export class FastInfo extends Model<FastInfo> {
  @AllowNull(false)
  @Column
  attribute!: string;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;

  @DeletedAt
  deletionDate!: Date;

  @BelongsToMany(() => Pub, () => FastInfoPub)
  pub!: Pub[];
}
