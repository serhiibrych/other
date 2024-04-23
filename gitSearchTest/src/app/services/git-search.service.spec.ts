import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GitSearchService } from './git-search.service';

describe('GitSearchService', () => {
  let service: GitSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GitSearchService]
    });
    service = TestBed.inject(GitSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to search repositories', () => {
    const query = 'angular';
    const mockResponse = { items: [{ name: 'repo1' }, { name: 'repo2' }] };

    service.searchRepositories(query).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://api.github.com/search/repositories?q=${query}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
