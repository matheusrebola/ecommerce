import type { ENotas } from "../enums/ENotas";

export class ReviewsDTO{
  id:string;
  nota:ENotas;
  comentario:string;
  dataAvaliacao:Date;

  constructor(id:string,
  nota:ENotas,
  comentario:string,
  dataAvaliacao:Date) {
    this.id = id;
    this.nota = nota;
    this.comentario = comentario;
    this.dataAvaliacao = dataAvaliacao;
  }
}