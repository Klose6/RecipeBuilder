import { Injectable } from "@angular/core";
import { Subject }    from 'rxjs';
import { Recipe } from "./recipe.model";


@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    //recipe observable
    private selectedRecipe = new Subject<Recipe>();
    
    //observale stream
    selectedRecipe$ = this.selectedRecipe.asObservable();

    sendSelectedRecipe(recipe: Recipe) {
        this.selectedRecipe.next(recipe);
    }

    // getSelectedRecipe(): Recipe {

    // }

}