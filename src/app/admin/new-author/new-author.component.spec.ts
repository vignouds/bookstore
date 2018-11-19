import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { NewAuthorComponent } from './new-author.component';
import { AuthorService } from '../../services/author.service';

describe('NewAuthorComponent', () => {
  let component: NewAuthorComponent;
  let fixture: ComponentFixture<NewAuthorComponent>;

  const mockAuthorService = jasmine.createSpyObj('AuthorService', {
    postAuthor: ({})
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuthorComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: AuthorService, useValue: mockAuthorService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
