import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public password: string;

    @Column()
    public readonly created_at: Date;

    @Column()
    public readonly updated_at: Date;
}
export default User;
