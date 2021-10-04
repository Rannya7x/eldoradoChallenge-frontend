import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'devices', component:DevicesComponent},
  { path: 'categories', component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
