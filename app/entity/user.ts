import { Entity, Column } from 'typeorm';
import { BaseColumn } from '../lib/column-schema';
@Entity({
    name: 'user',
})
export default class User extends BaseColumn {
    @Column()
    public username: string;

    @Column()
    public password: string;

    @Column()
    public last_at: Date;

    @Column()
    public ip: string;
}
