import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private _userService:UserService,private http: HttpClient,private route:ActivatedRoute,private router:Router ){ }

  repos:any;
  uId=this._userService.getMessage2();
  id=this.uId.id;
  login=this.uId.login;
  avatar_url=this.uId.avatar_url;

  laptop=this._userService.getMessage5();
  
  totalRecords:any="";
  page:any=1;
  myUser:any="";
  ngOnInit(): void {
      //this.myUser=this.route.snapshot.paramMap.get('id');

      this.route.paramMap.subscribe((params:any)=>
      {
        let id=params.get('name');
        this.myUser=id;
      })
      
      this.getUsers1().subscribe(data =>{
        this.repos=data;
        this.totalRecords=data.length;
      });
  }


  getUsers1(): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${this.login}/repos`);
  }
  getRepos(user:any)
  {
    this.router.navigate(['/reposdetails',user.owner.login]);
    this._userService.setMessage3(user);
  }
}
// function ParamMap(params: any, ParamMap: any) {
//   throw new Error('Function not implemented.');
// }

