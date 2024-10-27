import type { EOrigemVisualizacao } from "../enums/EOrigemVisualizacao";

export class UserActitivityLogsDTO{
  id:string;
  dataAcao:Date;
  origemVisualizacao:EOrigemVisualizacao;

  constructor(id:string,
  dataAcao:Date,
  origemVisualizacao:EOrigemVisualizacao) {
    this.id = id;
    this.dataAcao = dataAcao;
    this.origemVisualizacao = origemVisualizacao;
  }
}