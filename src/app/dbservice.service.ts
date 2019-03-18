import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/rx';
import { Create } from './create/create';
import { Observable } from 'rxjs/rx';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  url : string = "http://localhost:3000/users/"
  constructor(private http : Http) {}

  postUser(create : Create){
    return this.http.post(this.url,create)
    .map((response : any ) => response)
    
  }

  getUser(id) : Observable<any>{
    return this.http.get(this.url+id)
    .map((response : any)=> response)
  }

  private newMethod() {
    return this;
  }
}
