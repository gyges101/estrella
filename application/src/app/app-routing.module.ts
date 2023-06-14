import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'menu', component: MenuComponent},
  {path: 'food', component: FoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
