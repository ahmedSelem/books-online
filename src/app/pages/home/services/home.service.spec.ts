import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing'; // Import for HttpClient

import { HomeService } from './home.service';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all books', (done) => {
    const mockBooks = [{ title: 'Book 1' }, { title: 'Book 2' }];

    service.fetchAllBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
      done();
    });

    const req = httpMock.expectOne('your-api-url');
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
