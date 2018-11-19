import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from './services/auth.service';
import { StoreService, KEY_LOCAL } from './services/store.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookstore';
  param = {value: 'world'};

  constructor(private translate: TranslateService, private authService: AuthService, private storeService: StoreService) {
    const locale = this.storeService.get(KEY_LOCAL) || environment.defaultLocale;
    this.translate.setDefaultLang(locale);
    this.translate.use(locale);
  }

  get currentLang() { return this.translate.currentLang; }

  get connectedUser() {
    return this.authService._connectedUser;
  }

  changeLang(locale: string) {
    this.storeService.set(KEY_LOCAL, locale);
    this.translate.use(locale);
  }

  disconnect() {
    this.authService.disconnect();
  }

  isConnected() {
    return this.authService.isConnected();
  }

  handleBookClicked(book) {
    console.log(book.title);
  }
}
