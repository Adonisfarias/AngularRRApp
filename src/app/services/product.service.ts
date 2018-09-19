import { Injectable } from '@angular/core';
import { Calification } from '../classes/Calification';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      productId:1,
      productImagePath: 'assets/book-covers/fire-and-blood.jpg',
      productTitle: 'Fire & Blood: 300 Years Before A Game of Thrones (A Targaryen History) (A Song of Ice and Fire)',
      productDescription: 'The thrilling history of the Targaryens comes to life in this masterly work by the author of A Song of Ice and Fire, the inspiration for HBO’s Game of Thrones. With all the fire and fury fans have come to expect from internationally bestselling author George R. R. Martin, this is the first volume of the definitive two-part history of the Targaryens in Westeros.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'fire-and-blood'
    },
    {
      productId:2,
      productImagePath: 'assets/book-covers/a-knight-of-the-seven-kingdoms.jpg',
      productTitle: 'A Knight of the Seven Kingdoms (A Song of Ice and Fire)',
      productDescription: 'NEW YORK TIMES BESTSELLER • NAMED ONE OF THE BEST BOOKS OF THE YEAR BY LOS ANGELES TIMES AND BUZZFEED • Taking place nearly a century before the events of A Game of Thrones, A Knight of the Seven Kingdoms compiles the first three official prequel novellas to George R. R. Martin’s ongoing masterwork, A Song of Ice and Fire. These never-before-collected adventures recount an age when the Targaryen line still holds the Iron Throne, and the memory of the last dragon has not yet passed from living consciousness.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'a-knight-of-the-seven-kingdoms'
    },
    {
      productId:3,
      productImagePath: 'assets/book-covers/the-world-of-ice-and-fire.jpg',
      productTitle: 'The World of Ice & Fire: The Untold History of Westeros and the Game of Thrones',
      productDescription: 'NEW YORK TIMES BESTSELLER • Perfect for fans of A Song of Ice and Fire and HBO’s Game of Thrones—an epic history of Westeros and the lands beyond, featuring hundreds of pages of all-new material from George R. R. Martin!.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'the-world-of-ice-and-fire'
    },
    {
      productId:4,
      productImagePath: 'assets/book-covers/a-dance-with-dragons.jpg',
      productTitle: 'A Dance with Dragons (A Song of Ice and Fire)',
      productDescription: '#1 NEW YORK TIMES BESTSELLER • THE BOOK BEHIND THE FIFTH SEASON OF THE ACCLAIMED HBO SERIES GAME OF THRONES Don’t miss the thrilling sneak peek of George R. R. Martin’s A Song of Ice and Fire: Book Six, The Winds of Winter',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'a-dance-with-dragons'
    },
    {
      productId:5,
      productImagePath: 'assets/book-covers/fevre-dream.jpg',
      productTitle: 'Fevre Dream: A Novel',
      productDescription: 'A THRILLING REINVENTION OF THE VAMPIRE NOVEL BY THE MASTER OF MODERN FANTASY, GEORGE R. R. MARTIN.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'fevre-dream'
    },
    {
      productId:6,
      productImagePath: 'assets/book-covers/dying-of-the-light.jpg',
      productTitle: 'Dying of the Light: A Novel',
      productDescription: 'In this unforgettable space opera, #1 New York Times bestselling author George R. R. Martin presents a chilling vision of eternal night—a volatile world where cultures clash, codes of honor do not exist, and the hunter and the hunted are often interchangeable.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'dying-of-the-light'
    },
    {
      productId:7,
      productImagePath: 'assets/book-covers/fire-and-blood.jpg',
      productTitle: 'Nightflyers & Other Stories',
      productDescription: 'The thrilling history of the Targaryens comes to life in this masterly work by the author of A Song of Ice and Fire, the inspiration for HBO’s Game of Thrones. With all the fire and fury fans have come to expect from internationally bestselling author George R. R. Martin, this is the first volume of the definitive two-part history of the Targaryens in Westeros.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'fire-and-blood'
    },
    {
      productId:8,
      productImagePath: 'assets/book-covers/tuf-voyaging.jpg',
      productTitle: 'Tuf Voyaging: A Novel',
      productDescription: 'Long before A Game of Thrones became an international phenomenon, #1 New York Times bestselling author George R. R. Martin had taken his loyal readers across the cosmos. Now back in print after almost ten years, Tuf Voyaging is the story of quirky and endearing Haviland Tuf, an unlikely hero just trying to do right by the galaxy, one planet at a time.',
      productAuthor: 'George R.R Martin',
      productFriendlyEndpoint: 'tuf-voyaging'
    }
  ];
  califications:Calification[] =[
    {
      calificationId:  1,
      productId: 1,
      calificationAuthor: 'string',
      calificationDate: 'date',
      calificationReview: 'review',
      calificationRate: 5
    },
    {
      calificationId:  2,
      productId: 1,
      calificationAuthor: 'string',
      calificationDate: 'date',
      calificationReview: 'review',
      calificationRate: 5
    },
    {
      calificationId:  3,
      productId: 3,
      calificationAuthor: 'string',
      calificationDate: 'date',
      calificationReview: 'review',
      calificationRate: 5
    }
    
  ]
  constructor() {
    console.log('Product sevice is working!s');
    let califications = JSON.parse( localStorage.getItem('califications') );
    console.log('Product sevice is working!s');
    console.log(califications);
    if( califications != null ){
      console.log('sd');
      this.califications = califications;
      console.log(this.califications);
    }

  }
  

  getProducts(){
    return this.products;
  }

  getProductByName( name ){
    return this.products.find(o => o.productFriendlyEndpoint === name);
  }
  getCalificationsByIdProduct( idProduct ){
    return this.califications.filter( o => o.productId === idProduct );
  }
  insertCalification(prodId, author, review, rate){
    let newcal:Calification = {
      calificationId : this.califications.length + 1,
      productId: prodId,
      calificationAuthor: author,
      calificationDate: new Date().toLocaleDateString('es-ES'),
      calificationReview: review,
      calificationRate: rate
    }
    this.califications.push(newcal);
    localStorage.setItem('califications', JSON.stringify(this.califications));
    return this.califications.filter(o => o.productId === prodId);
  }
  removeCalification(calId){
    var calRow = this.califications.find(o => o.calificationId === calId);

    var removeIndex = this.califications.map(o => { return o.calificationId; })
                       .indexOf(calId);
    ~removeIndex && this.califications.splice(removeIndex, 1);
    localStorage.setItem('califications', JSON.stringify(this.califications));
    return this.califications.filter(o => o.productId === calRow.productId);
  }
  calculateAverage(prodId){
    let cals = this.getCalificationsByIdProduct( prodId );
    let average = 0;
    if (cals.length != 0){
      cals.forEach(e => {
        average +=e.calificationRate;
      });
    }    
    return average / cals.length;
  }
}
