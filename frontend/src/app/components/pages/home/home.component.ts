import { Component, OnInit } from '@angular/core';
import {Food} from "../../../shared/models/Food";
import {FoodService} from "../../../sevices/food.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {
  }

}
