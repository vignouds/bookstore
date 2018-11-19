import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { NewBookComponent } from './new-book.component';
import { BooksService } from '../../services/books.service';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  const mockBooksService = jasmine.createSpyObj('BooksService', {
    postBook: ({})
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: BooksService, useValue: mockBooksService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
