import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup ;

  public loginFormContent = undefined;


  constructor(public authService: AuthService, 
  ) { 
    this.loginForm = new FormGroup({
    });
    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required, 
        Validators.email,
      ]),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        PasswordValidators.isPasswordStrong,
        // Validators.maxLength(30),
      ]),
    });
  }
  
  submitForm() {
    console.log('submitForm...', this.loginForm.value);
    this.authService.login(this.loginForm.value);

  }

  get password() { return this.loginForm.get('password'); }

}
