import { EEstoqueDisponivel } from "../enums/EEstoqueDisponivel";
import { ECategoria } from "../enums/ECategoria";
import { ESubCategoria } from "../enums/ESubCategoria";

export class ProductsDTO{
  id:string;
  nomeProduto:string;
  descricao:string;
  preco:number;
  estoqueDisponivel:EEstoqueDisponivel;
  categoria:ECategoria;
  subCategoria:ESubCategoria;
  marca:string;
  dataInclusao:Date;
  tagsProduto:string;

  constructor(id:string,
  nomeProduto:string,
  descricao:string,
  preco:number,
  estoqueDisponivel:EEstoqueDisponivel,
  categoria:ECategoria,
  subCategoria:ESubCategoria,
  marca:string,
  dataInclusao:Date,
  tagsProduto:string){
    this.id = id;
    this.nomeProduto = nomeProduto;
    this.descricao = descricao;
    this.preco = preco;
    this.estoqueDisponivel = estoqueDisponivel;
    this.categoria = categoria;
    this.subCategoria = subCategoria;
    this.marca = marca;
    this.dataInclusao = dataInclusao;
    this.tagsProduto = tagsProduto;
  }
}