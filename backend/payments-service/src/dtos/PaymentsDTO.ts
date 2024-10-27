import { EStatusPagamento } from "../enums/EStatusPagamento";
import { EMetodoPagamento } from "../enums/EMetodoPagamento";

export class PaymentsDTO{
  id:string;
  valorPago:number;
  dataPagamento:Date;
  metodoPagamento:EMetodoPagamento;
  statusPagamento:EStatusPagamento;

  constructor(id:string,
  valorPago:number,
  dataPagamento:Date,
  metodoPagamento:EMetodoPagamento,
  statusPagamento:EStatusPagamento) {
    this.id = id;
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
    this.metodoPagamento = metodoPagamento;
    this.statusPagamento = statusPagamento;
  }
}