import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

 

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'produit',component:ProduitComponent},
  {path:'dashboard',component:DashboardComponent},
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
