import { EStatusPagamento } from "../enums/EStatusPagamento";
import { EMetodoPagamento } from "../enums/EMetodoPagamento";

export class PaymentsDTO{
  valorPago:number;
  dataPagamento:Date;
  metodoPagamento:EMetodoPagamento;
  statusPagamento:EStatusPagamento;

  constructor(valorPago:number,
  dataPagamento:Date,
  metodoPagamento:EMetodoPagamento,
  statusPagamento:EStatusPagamento) {
    this.valorPago = valorPago;
    this.dataPagamento = dataPagamento;
    this.metodoPagamento = metodoPagamento;
    this.statusPagamento = statusPagamento;
  }
}