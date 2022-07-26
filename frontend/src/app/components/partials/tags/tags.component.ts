import { Component, OnInit } from '@angular/core';
import {Tag} from "../../../shared/models/Tag";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }

  ngOnInit(): void {
  }

}
