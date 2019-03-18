import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbserviceService } from '../dbservice.service';
import { Create } from './create';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form
  constructor(private dbservice : DbserviceService) { }
  selectedOption : String = "";

  ngOnInit() {
    this.form  = new FormGroup({
      id : new FormControl("",),
      fname : new FormControl("",),
      lname : new FormControl("",),
      dob : new FormControl("",),
      phone : new FormControl("",),
      email : new FormControl("",),
      password : new FormControl("",)
      
    });
  }

  selectChangeHandler (event: any){
    this.selectedOption = event.target.value;
  }

  getUser(myform){
    let create1 = new Create(myform.id, myform.fname,myform.lname,this.selectedOption,myform.dob,myform.phone,myform.email,myform.password);
    this.dbservice.postUser(create1)
    .subscribe(
    (response : any) => console.log("Put Successfully") 
  )
  }

}
