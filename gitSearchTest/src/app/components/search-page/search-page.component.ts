import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Repository } from 'src/app/models/repository.model';
import { SearchResult } from 'src/app/models/searchResult.model';
import { GitSearchService } from 'src/app/services/git-search.service';
import { SearchResultsStoreService } from 'src/app/services/search-results-store.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  public searchResults: Observable<Repository[]> | undefined;
  constructor(
    private searchService: GitSearchService,
    private searchResultsStoreService: SearchResultsStoreService
  ) {
  }

  ngOnInit(): void {
  }

  onSearchChange(query: string) {
    const resultsInStore = this.searchResultsStoreService.getResults(query) as SearchResult[];
    if (resultsInStore[0] && resultsInStore[0].name) {
      this.searchResults = of(resultsInStore[0].searchResults);
    } else {
      this.searchResults = this.searchService.searchRepositories(query).pipe(map((response: any) => {
        this.searchResultsStoreService.addResults(query, response.items);
        return response.items
      }));
    }
  }

}
