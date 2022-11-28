import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {

  booktitle=""

  readValues=()=>
  {
    let data:any={"booktitle":this.booktitle}

    console.log(data)
  }

}
