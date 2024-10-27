import { EStatusResolucao } from "../enums/EStatusResolucao";

export class NegativeFeedbacksCreateDTO{
  descricaoProblema:string;
  dataFeedback:Date;
  statusResolucao:EStatusResolucao;

  constructor(descricaoProblema:string,
    dataFeedback:Date,
    statusResolucao:EStatusResolucao){
      this.descricaoProblema = descricaoProblema;
      this.dataFeedback = dataFeedback;
      this.statusResolucao = statusResolucao;
  }
}