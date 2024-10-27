import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EEstoqueDisponivel } from "../enums/EEstoqueDisponivel";
import { ECategoria } from "../enums/ECategoria";
import { ESubCategoria } from "../enums/ESubCategoria";

@Entity()
export class Products{
  @PrimaryGeneratedColumn()
  id!:string;
  nomeProduto!:string;
  descricao!:string;
  preco!:number;
  estoqueDisponivel!:EEstoqueDisponivel;
  categoria!:ECategoria;
  subCategoria!:ESubCategoria;
  marca!:string;
  dataInclusao!:Date;
  tagsProduto!:string;
  shoppingCartId!:string;
}