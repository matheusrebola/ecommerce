import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products{
  @PrimaryGeneratedColumn()
  id!:string;

  
}