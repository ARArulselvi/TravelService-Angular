import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LohinComponent } from './lohin/lohin.component';
import { SearchComponent } from './search/search.component';
import { ShowToursComponent } from './show-tours/show-tours.component';


const routes: Routes = [
  {path:'',component:LohinComponent, pathMatch: 'full'},
  {path:'search',component:SearchComponent, pathMatch: 'full'},
  {path:'show',component:ShowToursComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
