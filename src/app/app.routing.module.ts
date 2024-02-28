import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ProduitComponent } from './produit/produit.component';

export const AppRoutes=[
{path : 'produit',component:ProduitComponent}

]

@NgModule({
imports:[
RouterModule.forRoot(AppRoutes,{enableTracing:true})

],

exports:[AppRoutingModule]
})
export class AppRoutingModule{}