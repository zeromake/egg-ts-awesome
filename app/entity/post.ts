import { Column, Entity, OneToOne, JoinColumn } from "typeorm";
import { BaseColumn } from "../lib/column-schema";
import Content from "./content";

@Entity({
    name: "post",
})
export default class Post extends BaseColumn {
    @Column()
    public title: string;

    @Column()
    public type: string;

    @OneToOne(() => Content)
    @JoinColumn()
    public content: Content;
}
