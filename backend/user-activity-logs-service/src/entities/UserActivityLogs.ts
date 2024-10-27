import { Entity, PrimaryGeneratedColumn } from "typeorm";
import type { EOrigemVisualizacao } from "../enums/EOrigemVisualizacao";

@Entity()
export class UserActivityLogs{
  @PrimaryGeneratedColumn()
  id!:string

  dataAcao!:Date;

  origemVisualizacao!:EOrigemVisualizacao;

  customerId!:string;
}