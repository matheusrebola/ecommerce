//src/entities/Customers.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customers{
  @PrimaryGeneratedColumn()
  id!:string;

}