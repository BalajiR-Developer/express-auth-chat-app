import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Chat")
export class Chat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  sender!: string;

  @Column()
  message!: string;

  @Column()
  timestamp!: string;
}
