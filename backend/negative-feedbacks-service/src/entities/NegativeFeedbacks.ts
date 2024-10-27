import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import type { EStatusResolucao } from "../enums/EStatusResolucao";

@Entity()
export class NegativeFeedbacks{
  @PrimaryGeneratedColumn()
  id!:string;

  descricaoProblema!:string;

  dataFeedback!:Date;

  statusResolucao!:EStatusResolucao;

  productId!:string;

  orderId!:string;
}