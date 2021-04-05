import { Component, OnInit } from '@angular/core';
import { Search } from "../Search";
import { Repository } from '../repository';
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: Repository[] = [];

  constructor(private userService:UserRequestService) { }

  myRepoSearch(searchName: string) {
    this.userService.searchUsersRequest(searchName).then(
      (success)=>{
        this.repo = this.userService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
  }

}
