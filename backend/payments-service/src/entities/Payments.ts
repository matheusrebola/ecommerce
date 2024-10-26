import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type { EMetodoPagamento } from "../enums/EMetodoPagamento";
import type { EStatusPagamento } from "../enums/EStatusPagamento";

@Entity()
export class Payments{
  @PrimaryGeneratedColumn()
  id!:string;

  valorPago!:number;

  dataPagamento!:Date;

  metodoPagamento!:EMetodoPagamento;

  statusPagamento!:EStatusPagamento;
}