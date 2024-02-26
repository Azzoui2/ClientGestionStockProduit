import { Component, OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service';
 import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  constructor(private ProduitMockService_var: ProduitMockService) {}
  Produits! : Produit[];
  ngOnInit() {

    this.Produits=this.ProduitMockService_var.getProduits();
  }
}
