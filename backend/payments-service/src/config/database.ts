// src/config/database.ts
import { DataSource } from "typeorm";
//import { User } from "../entities/User";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 60040,
  username: "payments-service",
  password: "payments-service",
  database: "payments-service-db",
  synchronize: true,
  //entities: [User],
});