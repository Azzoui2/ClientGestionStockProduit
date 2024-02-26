import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitMockService {
  private PRODUITS: Produit[] = [
    new Produit('Livre', 50, 20),
    new Produit('Cahier', 200, 5),
    new Produit('Stylo', 500, 2.1)
    // // OU
    // let p1: Produit = new Produit('Livre', 50, 20);
    // let p2: Produit = new Produit('Cahier', 200, 5);
    // let p3: Produit = new Produit('Stylo', 500, 2.1);

    // this.PRODUITS.push(p1);
    // this.PRODUITS.push(p2);
    // this.PRODUITS.push(p3);
  ];

  constructor() {}

  public getProduits(): Produit[] {
    return this.PRODUITS;
  }
}
