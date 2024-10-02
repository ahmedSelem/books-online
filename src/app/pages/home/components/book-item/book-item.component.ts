import { Component, input, OnInit, signal } from '@angular/core';
import { Book, Work } from '../../interfaces/books';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  bookItem = input<Work>();
  coverSrc = signal<string>('');

  constructor(private readonly router: Router) {}

  navigateToDetails(itemId: string) {
    this.router.navigate(['book/details', itemId]);
  }
}
