import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  phonenumber=""
  email=""
  username=""
  password=""
  confirmpassword=""


  readValues=()=>
  {
    let data: any={"name":this.name,"phonenumber":this.phonenumber,"email":this.email,"username":this.username,
    "password":this.password,"confirmpassword":this.confirmpassword}

    console.log(data)
  }

}
