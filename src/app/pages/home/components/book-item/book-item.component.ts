import { Component, input, OnInit, signal } from '@angular/core';
import { Book, Work } from '../../interfaces/books';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  bookItem = input<Work>();
  coverSrc = signal<string>('');

  constructor(private readonly homeService: HomeService) {}
}
