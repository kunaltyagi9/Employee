export class Create{
    id : String;
    fname : String;
    lname : String;
    designation : String;
    dob : String;
    phone : String;
    email : String;
    password : String;
  

    constructor(id : String,fname: String , lname: String ,designation : String, dob: String  ,phone: String, email: String, password : String){
        this.id = id;    
        this.fname = fname;
        this.lname = lname;
        this.designation = designation;
        this.dob = dob;
        this.phone = phone;
        this.email = email; 
        this.password = password;
    }
}