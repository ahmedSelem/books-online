import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookDetailsService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchBookDetails<T>(workId: string): Observable<T> {
    return this.httpClient.get<T>(
      `https://openlibrary.org${workId}/editions.json`,
    );
  }
}
