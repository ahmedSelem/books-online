import { Component, OnInit, signal } from '@angular/core';
import { Book, BooksResponse } from './interfaces/books';
import { HomeService } from './services/home.service';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  AllBooks = signal<Book[]>([]);

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.fetchAllBooks<BooksResponse>().subscribe((response) => {
      console.log(response.reading_log_entries);
      this.AllBooks.set(response.reading_log_entries.slice(0, 9));
    });
  }
}
