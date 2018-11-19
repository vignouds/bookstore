import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  postBook(book: Book) {
    return this.http.post<Book>(this.baseUrl, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
