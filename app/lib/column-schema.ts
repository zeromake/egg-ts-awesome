import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export abstract class BaseColumn {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @CreateDateColumn()
  public readonly created_at: Date;

  @UpdateDateColumn()
  public readonly updated_at: Date;
}
