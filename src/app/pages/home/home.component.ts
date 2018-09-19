import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component' ;
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/Product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  products:Product[];

  constructor( private productData : ProductService ) {
    this.products = productData.getProducts();
    console.log( this.products );
   }

  ngOnInit() {
  }

}
