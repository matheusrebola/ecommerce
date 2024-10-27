import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingCarts{
  @PrimaryGeneratedColumn()
  id!:string;

  dataCriacaoCarrinho!:Date;

  dataAdicao!:Date;

  customerId!:string;
}