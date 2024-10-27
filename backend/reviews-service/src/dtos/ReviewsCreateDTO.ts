import type { ENotas } from "../enums/ENotas";

export class ReviewsCreateDTO{
  nota!:ENotas;
  comentario!:string;
  dataAvaliacao!:Date;

  constructor(nota:ENotas,
  comentario:string,
  dataAvaliacao:Date) {
    this.nota = nota;
    this.comentario = comentario;
    this.dataAvaliacao = dataAvaliacao;
  }
}