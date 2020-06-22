import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AllowNull,
  BelongsToMany,
  IsUUID,
  PrimaryKey,
  BeforeCreate,
} from "sequelize-typescript";
import { Pub } from "./Pub";
import { UserPub } from "./UserPub";
import { uuid } from "uuidv4";

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

  @BeforeCreate
  static createId(pub: Pub) {
    pub.id = uuid();
  }
}
