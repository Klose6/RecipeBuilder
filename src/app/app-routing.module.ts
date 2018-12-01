import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AboutComponent } from "./about/about.component";

const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent },
    // { path: recipe/:id',      component: RecipeComponent },
    {
      path: 'shopping-list',
      component: ShoppingListComponent,
      data: {  }
    },
    {
      path: 'about',
      component: AboutComponent
    },
    { path: '',
      redirectTo: '/recipes',
      pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
      RouterModule
    ]
})

export class AppRoutingModule {
}