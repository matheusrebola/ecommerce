export class CustomersCreateDTO{
  nomeCompleto:string;
  email:string;
  dataCadastro:Date;

  constructor(nomeCompleto:string, email:string, dataCadastro:Date){
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.dataCadastro = dataCadastro;
  }
}