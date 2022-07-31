import express from "express";
import cors from "cors";
<<<<<<< HEAD
import {data_foods, data_tags, data_users} from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
=======
import {data_foods, data_tags} from "./data";

const app = express();
>>>>>>> origin/main

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}))

app.get("/api/foods", (req, res) => {
  res.send(data_foods);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = data_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  res.send(foods);
})

app.get("/api/foods/tags", (req, res) => {
  res.send(data_tags);
})

app.get("/api/foods/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = data_foods.filter(food => food.tags?.includes(tagName));
  res.send(foods);
})

app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = data_foods.find(food => food.id === foodId);
  res.send(food);
})

<<<<<<< HEAD
app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body;
  const user = data_users.find(user => user.email === email
    && user.password === password);

  if(user){
    res.send(generateTokenResponse(user));
  }else{
    res.status(400).send("User name or password is not valid!")
  }
})

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email, isAdmin: user.isAdmin
  }, "SecretText", {
    expiresIn:"1d"
  });

  user.token = token;
  return user;
}

=======
>>>>>>> origin/main
const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
