import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { Search } from '../Search';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';
import { RepoRequestService } from '../repo-request.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  repos: Repository[] = [];
  repo: any;
  searchName = "edwinaringo";
  searchInput = new Search('edwinaringo')

  constructor(private userService:UserRequestService,private repoService:RepoRequestService ) { }
  

  mySearch(searchName: string) {
    this.userService.searchUsersRequest(searchName).then(
      (success)=>{
        this.users = this.userService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.searchRepoByUsernameRequest(searchName).then(
      (success)=>{
        this.repos = this.repoService.foundRepo;
      },
      (error)=>{
        console.log(error)
      }
    );
  }


  ngOnInit(): void {
    this.mySearch('edwinaringo');
  }

}
