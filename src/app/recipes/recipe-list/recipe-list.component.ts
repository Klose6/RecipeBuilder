import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  currentNewRecipes: Recipe[] = [];
  recipeSelected: Recipe = null;

  recipes: Recipe[] = [
    new Recipe('Chili Grilled Beef', 'Grilled beef with chilis', 'assets/images/recipe_chili_grilled_beef.jpg', 
      new Map([["Beef", "500kg"], ["Red Chili", "50kg"], ["Green Chili", "50kg"]])),
    new Recipe('Shrimp Salad', 'Grilled shrimp with salad', 'assets/images/recipe_shrimp_salad.jpg'),
    new Recipe('Chicken Flat', 'Steamed chicken with vegies', 'assets/images/recipe_chicken_flat.jpg')
  ];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addNewRecipe() {
    // this.addNew = true;
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected = recipe;
    console.log(recipe);
    this.recipeService.sendSelectedRecipe(this.recipeSelected);
  }
}
