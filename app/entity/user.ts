import { Entity, Column } from "typeorm";
import { BaseColumn } from "../lib/column-schema";
@Entity({
    name: "users",
})
export default class User extends BaseColumn {
    /**
     * @description 用户名
     */
    @Column()
    public username: string;

    /**
     * @description 密码
     */
    @Column({
        select: false,
    })
    public password: string;

    /**
     * @description 最后登录ip
     */
    @Column({
        length: 40,
    })
    public last_ip: string;

    /**
     * @description 邮箱
     */
    @Column({
        default: "",
        select: false,
    })
    public email: string;

    /**
     * @description 手机
     */
    @Column({
        default: "",
        select: false,
    })
    public phone: string;
}
