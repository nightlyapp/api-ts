import {
  Table,
  ForeignKey,
  Column,
  Model,
  PrimaryKey,
} from "sequelize-typescript";

import { Pub } from "./Pub";
import { User } from "./User";

@Table
export class UserPub extends Model<UserPub> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number = 0;

  @ForeignKey(() => Pub)
  @Column
  pubId: number = 0;

  @ForeignKey(() => User)
  @Column
  userId: number = 0;
}
