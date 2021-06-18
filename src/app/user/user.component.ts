import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service'
import { Router } from '@angular/router'
var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient, private _userService: UserService, private router: Router) {

  }
  users: any = [];
  public chooseType = true;
  totalRecords: any = "";
  page: any = 1;
  display: boolean = false;

  use: any = "project";



  myUrl: string = '';
  ngOnInit(): void {
    this._userService.setMessage5(this.use);

  }
  onSelect(user: any) {
    //console.log("furuhfur");
    this.router.navigate(['/userdetails', user.login]);
    this._userService.setMessage2(user);

    //console.log(user);
  }

  onSelect2(user: any) {
    this.router.navigate(['/reposdetails', user.owner.login]);
    this._userService.setMessage3(user);
  }

  option: any = "user";
  getOption(event: any) {
    //console.log(event.target.value);
    this.option = event.target.value

  }
  getInput(value: any) {
    this.myUrl = value;
    this._userService.setMessage(this.myUrl);
    console.log(this.option);
    if (this.option === 'user') {
      this.display = true;
      this.chooseType = true;

      this._userService.getUsers1().subscribe(data => {
        //console.log(data);
        
        this.users = data.items
        this.totalRecords = data.items.length;
        console.log(this.totalRecords);
      });
    }
    if (this.option === 'repository') {
      this.chooseType = false;
      this.display = true;

      this._userService.getUsers2().subscribe(data => {
        //console.log(data);
        this.users = data.items;
        //console.log(data.items);
        this.totalRecords = data.items.length;
        //this.totalRecords=30;
        //console.log(this.totalRecords);
      });
    }

    //console.log(this.users);
  }

  // getUsers1(): Observable<any> {
  //   return this.http.get<any>(`https://api.github.com/search/users?q=${this.myUrl}`);
  // }
  // getUsers2(): Observable<any> {
  //   return this.http.get<any>(`https://api.github.com/search/repositories?q=${this.myUrl}`);
  // }

}
