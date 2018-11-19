import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookStoreComponent } from './book-store/book-store.component';

export const bookRoutes: Routes = [
  { path: 'books',
   component: BookStoreComponent,
   children: [
     { path: '', component: BookListComponent },
     { path: ':id', component: BookDetailComponent },
   ]
  },
];
