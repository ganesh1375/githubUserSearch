import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  myVar:any;
  myUrl:any="";
  uId:any;
  rId:any;
  constructor(private http:HttpClient) { }

  setMessage(data:any)
  {
    this.myUrl=data;
  }
  getMessage()
  {
    return this.myUrl;
  }
  setMessage2(data1:any)
  {
    this.uId=data1;
  }
  getMessage2()
  {
    return this.uId;
  }
  setMessage3(data2:any)
  {
    this.rId=data2;
  }
  getMessage3()
  {
    return this.rId;
  }

  setMessage5(data5:any)
  {
    this.myVar=data5;
  }
  getMessage5()
  {
    return this.myVar;
  }



  getUsers1(): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/users?q=${this.myUrl}`);
  }
  getUsers2(): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/repositories?q=${this.myUrl}`);
  }
}
