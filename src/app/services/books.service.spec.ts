import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BooksService } from './books.service';
import { Book } from '../models/book.model';

describe('BooksService', () => {

  const mockHttpClient = jasmine.createSpyObj('HttpClient', {
    get: of([{
      id: 1 ,
      title: 'Title',
      author: 'author'
    }])
  });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: HttpClient, useValue: mockHttpClient}
    ]
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });

  it('should return a valid books array', () => {
    const service: BooksService = TestBed.get(BooksService);
    service.getBooks().subscribe((books: Book[]) => {
      expect(books.length).toBe(1);
    });
  });
});
