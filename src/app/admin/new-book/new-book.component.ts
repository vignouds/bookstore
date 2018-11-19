import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from '../../models/book.model';
import { Author } from '../../models/author.model';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  book = new Book();
  authors: Observable<Author[]>;

  constructor(private booksService: BooksService, private route: Router, private authorService: AuthorService) { }

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }

  onSubmit(form) {
    if (form.valid) {
      this.booksService.postBook(this.book).subscribe(
        () => {
          this.route.navigate(['']);
        }, err => {
          console.log(err);
        }
      );
    }
  }

}
