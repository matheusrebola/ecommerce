import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EStatusPedido } from "../enums/EStatusPedido";

@Entity()
export class Orders{
  @PrimaryGeneratedColumn()
  id!:string;

  @Column()
  dataPedido!:Date;

  statusPedido!:EStatusPedido;

  @Column()
  enderecoEntrega!:string;

  @Column()
  dataEnvio!:Date;

  @Column()
  dataEntrega!:Date;

  @Column()
  dataProblema!:Date;

  @Column()
  tempoProcessamentoEntrega!:Date;
}