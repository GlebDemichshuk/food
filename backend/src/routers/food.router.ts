import {Router} from "express";
import {data_foods, data_tags} from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(data_foods);
})

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = data_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  res.send(foods);
})

router.get("/tags", (req, res) => {
  res.send(data_tags);
})

router.get("/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = data_foods.filter(food => food.tags?.includes(tagName));
  res.send(foods);
})

router.get("/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = data_foods.find(food => food.id === foodId);
  res.send(food);
})

export default router;