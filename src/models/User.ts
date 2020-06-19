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
  IsUUID,
  PrimaryKey,
} from "sequelize-typescript";
import { Pub } from "./Pub";
import { UserPub } from "./UserPub";
import { Geolocation } from "./Geolocation";

@Table
export class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id!: string;

  @AllowNull(false)
  @Column
  name!: string;

  @Column
  number!: number;

  @Column
  birthday!: Date;

  @Column
  gender!: string;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;

  @DeletedAt
  deletionDate!: Date;

  @BelongsToMany(() => Pub, () => UserPub)
  pubs!: Pub[];
}
