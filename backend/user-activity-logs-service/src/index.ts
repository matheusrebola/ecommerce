import express from "express";
import { AppDataSource } from "./config/database";
import { getAllUsers, createUser } from "./controllers/UserController";

const app = express();
const port = 50100;
app.use(express.json());

app.get("/users", getAllUsers);
app.post("/users", createUser);

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log("Server running on port: "+port);
    });
  })
  .catch((error) => console.log(error));