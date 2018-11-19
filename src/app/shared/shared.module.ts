import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faUser,
  faBookOpen,
  faPortrait,
  faUserLock,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCheck,
  faUser,
  faBookOpen,
  faPortrait,
  faUserLock,
  faTrashAlt
);

import { UppercaseDirective } from './uppercase.directive';
import { FormErrorComponent } from './form-error/form-error.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    UppercaseDirective,
    FormErrorComponent,
    CardComponent
  ],
  exports: [
    UppercaseDirective,
    FormErrorComponent,
    CardComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
