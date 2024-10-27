import { CustomersCreateDTO } from "../dtos/CustomersCreateDTO";
import { CustomersDTO } from "../dtos/CustomersDTO";
import { Customers } from "../entities/Customers";

export class CustomersMapper{

  static toDTO(customers:Customers): CustomersDTO{
    return new CustomersDTO(customers.id, 
      customers.nomeCompleto, 
      customers.email, 
      customers.dataCadastro);
  }

  static toEntity(customers:Customers): CustomersCreateDTO{
    return new CustomersCreateDTO(customers.nomeCompleto,
      customers.email,
      customers.dataCadastro);
  }
}