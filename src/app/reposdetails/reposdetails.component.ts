import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-reposdetails',
  templateUrl: './reposdetails.component.html',
  styleUrls: ['./reposdetails.component.css']
})
export class ReposdetailsComponent implements OnInit {

  constructor(private _userService:UserService,private http: HttpClient,private route:ActivatedRoute) { }

    
  repos:any;
  uId=this._userService.getMessage3();
  name=this.uId.name;
  id=this.uId.id;
  login=this.uId.owner.login;
  avatar_url=this.uId.owner.avatar_url;
  repoName=this.uId.owner.login;
  totalRecords:any="";
  page:any=1;
  ngOnInit(): void {

    this.route.paramMap.subscribe((params:any)=>
      {
        let id=params.get('name');
        //this.repoName=id;
      })
      
      this.getRepos().subscribe(data =>{
        this.repos=data;
        this.totalRecords=data.length;
        console.log(data);
      });
  }
  getRepos(): Observable<any> {
    return this.http.get<any>(`https://api.github.com/repos/${this.repoName}/${this.name}`);
  }
}
