import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {

  public userName = 'Username';

  constructor(private router: Router) { 
    this.userName = localStorage.getItem('username') || 'Username';
  }


  public login(loginData: { login: string, password: string } ): void {
    console.log('Logged in! auth->', (loginData));
    localStorage.setItem('username', loginData.login);
    this.userName = localStorage.getItem('username') || 'Username';
    this.router.navigateByUrl('/');
  }

  public logout(): void {
    console.log('Logged OUT!');
    localStorage.removeItem('username');
    this.userName = localStorage.getItem('username') || 'Username';
    this.router.navigateByUrl('/login');
  }

  public isLoggenIn(): boolean {
    if (this.userName === 'Username') {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
