import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BookListComponent } from './book-list.component';
import { Book } from '../../models/book.model';
import { BooksService } from '../../services/books.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const mockBooksService = jasmine.createSpyObj('mockBooksService', {
    getBook: new Book(),
    getBooks: of([{
      id: 1 ,
      title: 'Title',
      author: 'author'
    }])
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: BooksService, useValue: mockBooksService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
