export class CustomersDTO{
  id:string;
  nomeCompleto:string;
  email:string;
  dataCadastro:Date;

  constructor(id:string, nomeCompleto:string, email:string, dataCadastro:Date){
    this.id = id
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.dataCadastro = dataCadastro;
  }
}