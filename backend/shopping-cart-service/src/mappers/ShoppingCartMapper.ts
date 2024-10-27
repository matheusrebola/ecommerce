import { ShoppingCartsCreateDTO } from "../dtos/ShoppingCartCreateDTO";
import { ShoppingCartsDTO } from "../dtos/ShoppingCartDTO";
import { ShoppingCarts } from "../entities/ShoppingCarts";

export class ShoppingCartsMapper{
  static dtoDto(shoppingCarts:ShoppingCarts): ShoppingCartsDTO{
    return new ShoppingCartsDTO(
      shoppingCarts.id,
      shoppingCarts.dataCriacaoCarrinho,
      shoppingCarts.dataAdicao);
  }

  static toEntity(dto:ShoppingCarts): ShoppingCartsCreateDTO{
    return new ShoppingCartsCreateDTO(
      dto.dataAdicao,
      dto.dataCriacaoCarrinho);
  }
}