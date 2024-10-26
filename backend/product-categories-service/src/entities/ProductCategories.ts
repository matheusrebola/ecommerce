import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductCategories{
  @PrimaryGeneratedColumn()
  id!:string;

  nome!:string;

  descricao!:string;
}