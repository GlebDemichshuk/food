import {Injectable} from '@angular/core';
import {Food} from "../shared/models/Food";
import {data_foods, data_tags} from 'src/data';
import {Tag} from "../shared/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }

  getAll(): Food[] {
    return data_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return data_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }
}
