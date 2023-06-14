import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'categorie', component: CategorieComponent},
  {path: 'food', component: FoodComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
