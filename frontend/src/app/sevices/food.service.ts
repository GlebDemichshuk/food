import { Injectable } from '@angular/core';
import {Food} from "../shared/models/Food";
import { data_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return data_foods;
  }
}
