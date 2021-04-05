import { Component, OnInit } from '@angular/core';
import { Search } from '../Search';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  searchName = "edwinaringo";
  searchInput = new Search('edwinaringo')

  constructor(private userService:UserRequestService) { }
  mySearch(searchName: string) {
    this.userService.searchUsersRequest(searchName).then(
      (success)=>{
        this.users = this.userService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );

  }


  ngOnInit(): void {
  }

}
