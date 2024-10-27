import { EStatusResolucao } from "../enums/EStatusResolucao";

export class NegativeFeedbacksDTO{
  id:string;
  descricaoProblema:string;
  dataFeedback:Date;
  statusResolucao:EStatusResolucao;

  constructor(id:string,
    descricaoProblema:string,
    dataFeedback:Date,
    statusResolucao:EStatusResolucao){
      this.id = id;
      this.descricaoProblema = descricaoProblema;
      this.dataFeedback = dataFeedback;
      this.statusResolucao = statusResolucao;
  }
}