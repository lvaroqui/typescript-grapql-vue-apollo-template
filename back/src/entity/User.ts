import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 40,
    nullable: false,
    unique: true,
  })
  email!: string;

  @Column({
    length: 30,
    nullable: false,
    unique: true,
  })
  username!: string;

  @Column({
    length: 60,
    nullable: false,
  })
  passwordHash!: string;
}
