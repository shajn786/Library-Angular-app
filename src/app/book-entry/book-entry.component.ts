import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  author=""
  image=""
  description=""
  publisher=""
  language=""
  distributor=""
  releasedYear=""
  price=""

  readValues= ()=>
  {
    let data:any ={
      "title":this.title,
      "author":this.author,
      "image":this.image,
      "description":this.description,
      "publisher":this.publisher,
      "language":this.language,
      "distributor":this.distributor,
      "releasedYear":this.releasedYear,
      "price":this.price

    }

    console.log(data)
  }

  
  

}
