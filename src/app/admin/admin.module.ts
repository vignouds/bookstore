import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { adminRoutes } from './admin.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SharedModule
  ],
  declarations: [AdminComponent, NewBookComponent, NewAuthorComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
