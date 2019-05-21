import { Entity, Column } from "typeorm";
import { BaseColumn } from "../lib/column-schema";

@Entity({
  name: "managers",
})
export default class Manager extends BaseColumn {
  @Column()
  public username: string;

  @Column({
    select: false,
  })
  public password: string;

  @Column({
    length: 40,
  })
  public last_ip: string;
}
