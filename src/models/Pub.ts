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
  HasOne,
  IsUUID,
  PrimaryKey,
  BeforeCreate,
} from "sequelize-typescript";
import { User } from "./User";
import { UserPub } from "./UserPub";
import { Geolocation } from "./Geolocation";
import { uuid } from "uuidv4";
import { FastInfo } from "./FastInfo";
import { FastInfoPub } from "./FastInfoPub";
// import { TinyIntegerDataType } from "sequelize/types";

@Table
export class Pub extends Model<Pub> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id!: string;

  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @Column(DataType.TINYINT)
  isOpen!: Boolean;

  @HasOne(() => Geolocation)
  geolocation!: Geolocation;

  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;

  @DeletedAt
  deletionDate!: Date;

  @BelongsToMany(() => User, () => UserPub)
  users!: User[];

  @BelongsToMany(() => FastInfo, () => FastInfoPub)
  fastInfo!: FastInfo[];

  @BeforeCreate
  static createId(pub: Pub) {
    pub.id = uuid();
  }
}
