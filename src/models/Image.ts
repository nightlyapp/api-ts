import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  AllowNull,
  BelongsToMany,
  ForeignKey,
  HasMany,
  HasOne,
} from "sequelize-typescript";
import { User } from "./User";
import { UserPub } from "./UserPub";
import { Geolocation } from "./Geolocation";

@Table
export class Image extends Model<Image> {
  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;

  @DeletedAt
  deletionDate!: Date;
}
