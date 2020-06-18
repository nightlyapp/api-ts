import {
  Table,
  Column,
  Model,
  HasMany,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  AllowNull,
  BelongsToMany,
} from "sequelize-typescript";
import { Pub } from "./Pub";
import { UserPub } from "./UserPub";
import { Geolocation } from "./Geolocation";

@Table
export class User extends Model<User> {
  @AllowNull(false)
  @Column
  name: string = "";

  @Column
  number: number = 0;

  @Column
  birthday: Date = new Date();

  @Column
  gender: string = "";

  @CreatedAt
  creationDate: Date = new Date();

  @UpdatedAt
  updatedOn: Date = new Date();

  @DeletedAt
  deletionDate: Date = new Date();

  @BelongsToMany(() => Pub, () => UserPub)
  pubs: Pub[] = new Array<Pub>();
}
