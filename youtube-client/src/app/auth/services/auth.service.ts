import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public userName = 'Username';

  constructor() { }

  public login(loginData: { login: string, password: string }): void {
    console.log('Logged in! auth->', (loginData));
  }

  public logout(): void {
    console.log('Logged OUT!');
  }

  
}
