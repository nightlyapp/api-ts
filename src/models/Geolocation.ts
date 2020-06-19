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
  address!: string;

  @Column(DataType.FLOAT)
  latitude!: number;

  @Column(DataType.FLOAT)
  longitude!: number;

  @ForeignKey(() => Pub)
  @Column
  pubId!: string;

  @BelongsTo(() => Pub)
  pub!: Pub;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;

  @DeletedAt
  deletionDate!: Date;
}
