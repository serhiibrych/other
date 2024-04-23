import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Add this line
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchRepositories(query: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/repositories?q=${query}`);
  }
}
