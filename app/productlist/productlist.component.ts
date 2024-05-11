import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  ProductArray !: Product[] 

  constructor() { }

  ngOnInit(): void {
    this.ProductArray = []
    this.ProductArray.push(new Product(1, 'Cubes', 'Some description about Cubes', 10, 'UTBM', '1.jpg'))
    this.ProductArray.push(new Product(2, 'Toyes', 'Some description about Toyes', 20, 'Toys Inc', '2.jpg'))
    this.ProductArray.push(new Product(3, 'Phone', 'Some description about Phones', 500, 'Apple', '3.jpg'))
    this.ProductArray.push(new Product(4, 'Cars', 'Some description about Cars', 10000, 'BENZ', '4.jpg'))
  }

}
