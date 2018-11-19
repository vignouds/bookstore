import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() bookClicked = new EventEmitter<Book>();
  @Output() titleChange = new EventEmitter();
  @Input() title: string;

  books: Observable<Book[]>;

  constructor(private booksService: BooksService, private authService: AuthService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

  isConnected() {
    return this.authService.isConnected();
  }

  deleteBook(book: Book) {
    const confirm = window.confirm('Are you sure you want to delete this book ?');
    if (confirm) {
      this.booksService.deleteBook(book.id).subscribe(
        () => {
          this.books = this.booksService.getBooks();
        }, err => {
          console.log(err);
        }
      );
    }
  }

  // onBookClicked(book: Book) {
  //   this.bookClicked.emit(book);
  //   this.title = 'My Bookstore';
  //   this.titleChange.emit(this.title);
  // }

}
