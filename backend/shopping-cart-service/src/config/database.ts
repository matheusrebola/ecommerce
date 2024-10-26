// src/config/database.ts
import { DataSource } from "typeorm";
import { ShoppingCarts } from "../entities/ShoppingCarts";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60090,
  username: "shopping-cart-service",
  password: "shopping-cart-service",
  database: "shopping-cart-service-db",
  synchronize: true,
  entities: [ShoppingCarts],
});