import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { LogInterceptor } from './services/log-interceptor.service';
import { appRoutes} from './app.routes';
import { translateOptions } from './app.translate';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BooksModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot(translateOptions),
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
