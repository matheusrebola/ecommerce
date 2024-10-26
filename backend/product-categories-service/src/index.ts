import express from "express";
import { AppDataSource } from "./config/database";
import { getAllUsers, createUser } from "./controllers/UserController";

const app = express();
app.use(express.json());

app.get("/users", getAllUsers);
app.post("/users", createUser);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => console.log(error));