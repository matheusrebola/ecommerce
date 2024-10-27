import type { EOrigemVisualizacao } from "../enums/EOrigemVisualizacao";

export class UserActitivityLogsCreateDTO{
  dataAcao:Date;
  origemVisualizacao:EOrigemVisualizacao;

  constructor(dataAcao:Date,
  origemVisualizacao:EOrigemVisualizacao) {
    this.dataAcao = dataAcao;
    this.origemVisualizacao = origemVisualizacao;
  }
}