import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { User } from '../models/user.model';
import { StoreService, KEY_USER } from '../services/store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  baseUrl = 'http://localhost:3000/users';
  _connectedUser: User;

  get connectedUser(): User {
    return this._connectedUser;
  }

  set connectedUser(user: User) {
    if (user) {
      delete(user.password);
      this.storeService.setObj(KEY_USER, user);
    } else {
      this.storeService.remove(KEY_USER);
    }
    this._connectedUser = user;
  }

  isConnected(): boolean {
    return this._connectedUser ? true : false;
  }

  constructor(private http: HttpClient, private router: Router, private storeService: StoreService) {
    this._connectedUser = this.storeService.getObj<User>(KEY_USER);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.isConnected()) {
      this.router.navigate(['login'], {
        queryParams : {
        redirect: state.url
      }
    });
      return false;
    } else {
      return true;
    }
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  connect(name: string, password: string): Observable<boolean> {
    this.disconnect();

    return this.getUsers().pipe(
      switchMap((users: User[]) => {
        const found = users.filter(u => u.name === name && u.password === password);
        if (found.length === 1) {
            this.connectedUser = found[0];
            return of(true);
        }
        return of(false);
      })
    );
  }

  disconnect(): void {
    this.connectedUser = null;
    this.router.navigate(['']);
  }
}
