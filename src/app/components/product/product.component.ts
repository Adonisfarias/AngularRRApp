import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../classes/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Calification } from '../../classes/Calification';
import {ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, Product {

  @ViewChild('calification') nameInputRef: ElementRef;

  @Input() product:Product = null;
  productId;
  productImagePath;
  productTitle;
  productDescription;
  productAuthor;
  productFriendlyEndpoint = null;
  calificationHover = 0;
  calificationSelected = 0;
  califications: Calification[] = [];
  calificationAverage = 0;
  


  constructor( private _Activatedroute:ActivatedRoute, private _productService:ProductService ) {
    this.productFriendlyEndpoint=this._Activatedroute.snapshot.params['name'];
    if ( this.productFriendlyEndpoint != undefined ){
      let product = this._productService.getProductByName(this.productFriendlyEndpoint);
      this.productId = product.productId;
      this.productTitle = product.productTitle;
      this.productDescription = product.productDescription;
      this.productAuthor = product.productAuthor;
      this.productImagePath = product.productImagePath;   
      this.califications = _productService.getCalificationsByIdProduct(this.productId);
      this.calificationAverage = _productService.calculateAverage(this.productId);
      console.log(this.calificationAverage);
      
    }

  }
  starsEnter(calificationstar){
    this.calificationHover = calificationstar;
  }
  starsLeave(){
    this.calificationHover = this.calificationSelected;
  }
  starsSelect(calificationstar){
    this.calificationSelected = calificationstar;
  }
  insertCalification(prodId, calAuthor, calReview){
    let newCalification = this._productService.insertCalification(parseInt(prodId.value), calAuthor.value, calReview.value, this.calificationSelected);
    this.califications = newCalification;
    this.calificationAverage = this._productService.calculateAverage(parseInt(prodId.value));
    return false;
  }
  removeCalification(calificationId){
    let newCalificationList = this._productService.removeCalification(calificationId);
    this.califications = newCalificationList;
    if( this.califications.length != 0 ){
      this.calificationAverage = this._productService.calculateAverage(this.califications[0].productId);
    }else{
      this.calificationAverage = 0;
    }
    
  }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit() {
  }

}
