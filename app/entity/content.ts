import { Column, Entity } from "typeorm";
import { BaseColumn } from "../lib/column-schema";

@Entity()
export default class Content extends BaseColumn {
    @Column()
    public type: string;

    @Column("text")
    public content: string;

    @Column("int")
    public resource_id: number;
}
