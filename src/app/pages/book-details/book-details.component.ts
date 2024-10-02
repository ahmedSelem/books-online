import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsService } from './services/book-details.service';
import { BookDetailsRespose, Entries } from './interfaces/book-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  bookId = signal<string>('');
  bookDetails = signal<Entries[]>([]);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookDetailsService: BookDetailsService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const itemId = params.get('id');
      this.bookId.set(itemId || '');
    });
    this.getBookDetails();
  }

  getBookDetails = () => {
    this.bookDetailsService
      .fetchBookDetails<BookDetailsRespose>(this.bookId())
      .subscribe({
        next: (response) => {
          this.bookDetails.set(response.entries);
          debugger;
          console.log(response);
        },
      });
  };
}
