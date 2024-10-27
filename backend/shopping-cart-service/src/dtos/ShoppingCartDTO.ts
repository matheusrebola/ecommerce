export class ShoppingCartsDTO{
  id:string;
  dataCriacaoCarrinho:Date;
  dataAdicao:Date;

  constructor(id:string,
    dataCriacaoCarrinho:Date,
    dataAdicao:Date
  ){
    this.id = id;
    this.dataCriacaoCarrinho = dataCriacaoCarrinho;
    this.dataAdicao = dataAdicao;
  }
}