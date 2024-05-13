import express from "express";
import "./DB/conn.js";
import bodyParser from "body-parser";
import { getUsers } from "./Path/get-users.js";
import { getUser } from "./Path/get-user.js";
import { userRegister } from "./Path/user-register.js";
import { userUpdate } from "./Path/user-update.js";
import { userDelete } from "./Path/user-delete.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("", (req, res) => {
  res.send("server live");
});

app.get("/users", getUsers);

app.get("/user", getUser);

app.post("/user/register", userRegister);

app.put("/user/update", userUpdate);

app.delete("/user/delete", userDelete);

app.listen(port, () => {
  console.log(`server run at http://localhost:${port}`);
});
