import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  curRecipe: Recipe = null;
  subscription = null;

  constructor(private recipeService: RecipeService) { 
   this.subscription = this.recipeService.selectedRecipe$.subscribe(
      (recipe: Recipe) => {
        this.curRecipe = recipe;
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
