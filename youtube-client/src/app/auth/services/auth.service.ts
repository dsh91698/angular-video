import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public userName = 'Username';

  constructor() { }

  public login(loginForm: SubmitEvent): void {
    console.log('Logged in!', (loginForm));
  }

  public logout(): void {
    console.log('Logged OUT!');
  }

  
}
