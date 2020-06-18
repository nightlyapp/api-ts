import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AllowNull,
  BelongsToMany,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Pub } from "./Pub";

@Table
export class Geolocation extends Model<Geolocation> {
  @Column(DataType.TEXT)
  address: string = "";

  @Column(DataType.FLOAT)
  latitude: number = 0;

  @Column(DataType.FLOAT)
  longitude: Date = new Date();

  @ForeignKey(() => Pub)
  @Column
  pubId: number = 0;

  @BelongsTo(() => Pub)
  pub: Pub = new Pub();

  @CreatedAt
  creationDate: Date = new Date();

  @UpdatedAt
  updatedOn: Date = new Date();

  @DeletedAt
  deletionDate: Date = new Date();
}
