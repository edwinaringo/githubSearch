import { Component, OnInit } from '@angular/core';
import { Search } from "../Search";
import { Repository } from '../repository';
import { RepoRequestService } from '../repo-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos: Repository[] = [];

  constructor(private repoService:RepoRequestService) { }

  myRepoSearch(searchName: string) {
    this.repoService.searchRepoRequest(searchName).then(
      (success)=>{
        this.repos = this.repoService.foundRepo;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
  }

}
