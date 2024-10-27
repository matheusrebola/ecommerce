export class ShoppingCartsCreateDTO{
  dataCriacaoCarrinho:Date;
  dataAdicao:Date;

  constructor(dataCriacaoCarrinho:Date,
    dataAdicao:Date
  ){
    this.dataCriacaoCarrinho = dataCriacaoCarrinho;
    this.dataAdicao = dataAdicao;
  }
}