import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { FastInfo } from "./FastInfo";
import { Pub } from "./Pub";
// import { TinyIntegerDataType } from "sequelize/types";

@Table
export class FastInfoPub extends Model<FastInfoPub> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id!: number;

  @ForeignKey(() => FastInfo)
  @Column
  fastInfoId!: string;

  @ForeignKey(() => Pub)
  @Column
  pubId!: string;
}
