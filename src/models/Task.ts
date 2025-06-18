import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Task")
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  status!: string; //completed, pending
}
