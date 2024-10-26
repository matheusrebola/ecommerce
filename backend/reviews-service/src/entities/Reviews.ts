//src/entities/Customers.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ENotas } from "../enums/ENotas";

@Entity()
export class Reviews{
  @PrimaryGeneratedColumn()
  id!:string;

  nota!:ENotas;

  comentario!:string;

  dataAvaliacao!:Date;

}