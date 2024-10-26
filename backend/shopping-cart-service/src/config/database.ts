// src/config/database.ts
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "testdb",
  synchronize: true,
  entities: [User],
});