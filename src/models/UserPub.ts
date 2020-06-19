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
  id!: number;

  @ForeignKey(() => Pub)
  @Column
  pubId!: string;

  @ForeignKey(() => User)
  @Column
  userId!: string;
}
