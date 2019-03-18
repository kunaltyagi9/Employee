import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';
import { Create } from '../create/create';
import { Response } from '@angular/http/src/static_response';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  disp1 : boolean = true;
  disp2 : boolean = false;
  disp3 : boolean = false;
  disp4 : boolean = false;
  selectedOption : String = "";
  errorMsg : string = "";

  form
  user : Create = {"id" : "" ,"fname": "" , "lname": "" ,"designation": "", "dob": ""  ,"phone": "","email": "", "password":""};

  constructor(private dbservice : DbserviceService) { }

  selectChangeHandler (event: any){
    this.selectedOption = event.target.value;
  }

  ngOnInit() {
    this.form = new FormGroup({
      id : new FormControl("",),
      fname : new FormControl("",),
      lname : new FormControl("",),
      designation: new FormControl("",),
      dob : new FormControl("",),
      phone : new FormControl("",),
      email : new FormControl("",),
      password : new FormControl("",),

    })
  }

  check(myform){
    this.dbservice.getUser(myform.id)
    .subscribe(
      (response : Response) => {this.user = response.json()
        if(this.selectedOption==="Admin"){
          if(myform.id==this.user.id && myform.password == this.user.password && this.selectedOption === this.user.designation){
            this.disp1 = !this.disp1;
            this.disp2 = !this.disp2;
          }else{
            this.errorMsg = "Incorrect login or password";
            console.log("Incorrect login and password");    
          }
        }else{
          this.errorMsg = "No user found"
        }
        if(this.selectedOption==="manager"){
          if(myform.id==this.user.id && myform.password == this.user.password && this.selectedOption === this.user.designation){
            this.disp1 = !this.disp1;
            this.disp3 = !this.disp3;
          }else{
            this.errorMsg = "Incorrect login or password";
            console.log("Incorrect login and password");    
          }
        }else{
          this.errorMsg = "No user found"
        }
        if(this.selectedOption==="employee"){
          if(myform.id==this.user.id && myform.password == this.user.password && this.selectedOption === this.user.designation){
            this.disp1 = !this.disp1;
            this.disp4 = !this.disp4;
          }else{
            this.errorMsg = "Incorrect login or password";
            console.log("Incorrect login and password");    
          }
        }else{
          this.errorMsg = "No user found"
        }
      }
      ,
      (error) => {
        console.log("Record with "+myform.id+" does not exist");
        this.errorMsg = "Record with "+myform.user.id+" does not exist";
      }
    )
    
  }



}
