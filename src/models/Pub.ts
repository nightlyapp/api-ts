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
// import { TinyIntegerDataType } from "sequelize/types";

@Table
export class Pub extends Model<Pub> {
  @AllowNull(false)
  @Column
  name: string = "";

  @AllowNull(false)
  @Column(DataType.TEXT)
  description: string = "";

  @Column(DataType.TINYINT)
  isOpen: Boolean = true;

  @HasOne(() => Geolocation)
  geolocation: Geolocation = new Geolocation();

  @CreatedAt
  creationDate: Date = new Date();

  @UpdatedAt
  updatedOn: Date = new Date();

  @DeletedAt
  deletionDate: Date = new Date();

  @BelongsToMany(() => User, () => UserPub)
  users: User[] = new Array<User>();
}
