import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly tokenKey = 'briefly_access_token';
  readonly token = signal<string | null>(localStorage.getItem(this.tokenKey));

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token.set(token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
    this.token.set(null);
  }
}
