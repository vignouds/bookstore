import { Injectable } from '@angular/core';

export const KEY_USER = 'user';
export const KEY_LOCAL = 'local';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  get(key: string): string {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);
  }

  getObj<T>(key: string): T {
    return JSON.parse(window.localStorage.getItem(key)) as T;
  }

  setObj(key: string, value: Object): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
