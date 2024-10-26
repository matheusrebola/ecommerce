import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Recomendations{
  @PrimaryGeneratedColumn()
  id!:string;

}