import { EStatusPedido } from "../enums/EStatusPedido";

export class OrdersDTO{
  id:string;
  dataPedido:Date;
  statusPedido:EStatusPedido;
  enderecoEntrega:string;
  dataEnvio:Date;
  dataEntrega:Date;
  dataProblema:Date;
  tempoProcessamentoEntrega:Date;

  constructor(id:string,
  dataPedido:Date,
  statusPedido:EStatusPedido,
  enderecoEntrega:string,
  dataEnvio:Date,
  dataEntrega:Date,
  dataProblema:Date,
  tempoProcessamentoEntrega:Date) {
    this.id = id;
    this.dataPedido = dataPedido;
    this.statusPedido = statusPedido;
    this.enderecoEntrega = enderecoEntrega;
    this.dataEnvio = dataEnvio;
    this.dataEntrega = dataEntrega;
    this.dataProblema = dataProblema;
    this.tempoProcessamentoEntrega = tempoProcessamentoEntrega;
  }
}