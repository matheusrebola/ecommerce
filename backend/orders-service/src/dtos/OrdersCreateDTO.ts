import { EStatusPedido } from "../enums/EStatusPedido";

export class OrdersCreateDTO{
  dataPedido:Date;
  statusPedido:EStatusPedido;
  enderecoEntrega:string;
  dataEnvio:Date;
  dataEntrega:Date;
  dataProblema:Date;
  tempoProcessamentoEntrega:Date;

  constructor(dataPedido:Date,
  statusPedido:EStatusPedido,
  enderecoEntrega:string,
  dataEnvio:Date,
  dataEntrega:Date,
  dataProblema:Date,
  tempoProcessamentoEntrega:Date) {
    this.dataPedido = dataPedido;
    this.statusPedido = statusPedido;
    this.enderecoEntrega = enderecoEntrega;
    this.dataEnvio = dataEnvio;
    this.dataEntrega = dataEntrega;
    this.dataProblema = dataProblema;
    this.tempoProcessamentoEntrega = tempoProcessamentoEntrega;
  }
}