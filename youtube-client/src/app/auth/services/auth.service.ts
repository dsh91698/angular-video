import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public userName = 'Username';

  constructor(private router: Router) { 
    this.userName = localStorage.getItem('username') || 'Username';
  }


  public login(loginData: { login: string, password: string } ): void {
    localStorage.setItem('username', loginData.login);
    this.userName = localStorage.getItem('username') || 'Username';
    this.router.navigateByUrl('/');
  }

  public logout(): void {
    localStorage.removeItem('username');
    this.userName = 'Username';
    this.router.navigateByUrl('/login');
  }

  public isLoggenIn(): boolean {
    if (this.userName === 'Username') {
      return false;
    } else {
      return true;
    }
  }

}
