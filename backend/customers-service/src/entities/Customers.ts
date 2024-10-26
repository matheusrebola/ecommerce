//src/entities/Customers.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customers{
  @PrimaryGeneratedColumn()
  id!:string;

  @Column()
  nomeCompleto!:string;

  @Column()
  email!:string;

  @Column()
  dataCadastro!:Date;

  @Column()
  dataCriacao!:Date;

  @Column()
  dataUltimaAtividade!:Date;
}