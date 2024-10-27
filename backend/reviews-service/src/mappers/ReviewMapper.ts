import { ReviewsCreateDTO } from "../dtos/ReviewsCreateDTO";
import { ReviewsDTO } from "../dtos/ReviewsDTO";
import type { Reviews } from "../entities/Reviews";

export class ReviewsMapper{

  static toDTO(reviews:Reviews): ReviewsDTO{
    return new ReviewsDTO(
      reviews.id,
      reviews.nota,
      reviews.comentario,
      reviews.dataAvaliacao);
  }

  static toEntity(reviews:Reviews): ReviewsCreateDTO{
    return new ReviewsCreateDTO(
      reviews.nota,
      reviews.comentario,
      reviews.dataAvaliacao
    )
  }
}