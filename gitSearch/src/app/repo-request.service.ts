import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  foundRepo!: Repository[];

  constructor(private https: HttpClient) { 
    this.foundRepo;
  }

  searchRepoRequest(searchName: string){
    interface ApiResponse{
      total_count:number;
      incomplete_results:boolean;
      items: Repository[];
    }
    let options = {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.apiKey)
      },
      params: {
        'q': searchName,
      }
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.https.get<ApiResponse>('https://api.github.com/search/repositories', options).toPromise().then(response=>{
        this.foundRepo = response.items
        resolve()
      },
      error=>{
        this.foundRepo = []

        reject(error)
      })
    })
    return promise
  }
  searchRepoByUsernameRequest(searchName: string){
    interface ApiResponse{
      total_count:number;
      incomplete_results:boolean;
      items: Repository[];
    }
    let options = {
      headers: {
        'Authorization': 'Basic ' + btoa(environment.apiKey)
      }
    }
    const url = `https://api.github.com/users/${searchName}/repos`;

    let promise = new Promise<void>((resolve,reject)=>{
      this.https.get<Repository[]>(url, options).toPromise().then(response=>{
        this.foundRepo = response
        resolve()
      },
      error=>{
        this.foundRepo = []

        reject(error)
      })
    })
    return promise
  }
}
