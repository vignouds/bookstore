import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { bookRoutes } from './books.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(bookRoutes)
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookStoreComponent
  ],
  exports: [
    BookStoreComponent
  ]
})
export class BooksModule { }
