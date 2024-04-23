import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repository } from '../models/repository.model';
import { SearchResult } from '../models/searchResult.model';



@Injectable({
  providedIn: 'root'
})

export class SearchResultsStoreService {
  private results = new BehaviorSubject<SearchResult[]>([]);
  readonly results$ = this.results.asObservable();

  constructor() { }

  getResults(searchString: string): SearchResult[] {
    return this.results.getValue().filter(result => result.name == searchString);
  }

  addResults(searchString: string, val: Repository[]) {
    const newResult: SearchResult = { name: searchString, searchResults: val };
    const currentResults = this.results.getValue();
    this.results.next([...currentResults, newResult]);
  }

}
