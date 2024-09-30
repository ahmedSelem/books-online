import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchAllBooks<T>(): Observable<T> {
    return this.httpClient.get<T>(
      'https://openlibrary.org/people/mekBot/books/want-to-read.json',
    );
  }
}
