import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public userName = 'Username';

  constructor() { }

  public login(loginData: { login: string, password: string }): void {
    console.log('Logged in! auth->', (loginData));
    localStorage.setItem('username', loginData.login);
    this.userName = localStorage.getItem('username') || 'Username';
  }

  public logout(): void {
    console.log('Logged OUT!');
    localStorage.removeItem('username');
    this.userName = localStorage.getItem('username') || 'Username';
  }

  public isLoggenIn(): boolean {
    if (this.userName === 'Username') {
      return false;
    } else {
      return true;
    }
  }

  
}
