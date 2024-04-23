import { TestBed } from '@angular/core/testing';
import { SearchResultsStoreService } from './search-results-store.service';
import { Repository } from '../models/repository.model';
import { SearchResult } from '../models/searchResult.model';

describe('SearchResultsStoreService', () => {
  let service: SearchResultsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize results$ as an empty array', () => {
    service.results$.subscribe((results) => {
      expect(results).toEqual([]);
    });
  });

  it('should return the results for a given search string', () => {
    const searchString = 'example';
    const repositories: Repository[] = [
      { name: 'Repo 1', url: 'https://github.com/repo1', description: 'Description 1', updated_at: '2021-01-01T00:00:00Z', html_url: '', language: 'TypeScript', owner: { login: 'test' }, stars: 0 }
    ];

    service.addResults(searchString, repositories);

    let results = service.getResults(searchString) as SearchResult[];
    expect(results[0].searchResults).toEqual(repositories.filter((repo) => repo.name === 'Repo 1'));
  });
});
