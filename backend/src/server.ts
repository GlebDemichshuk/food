import express from "express";
import cors from "cors";
import {data_foods, data_tags} from "./data";

const app = express();

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

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
