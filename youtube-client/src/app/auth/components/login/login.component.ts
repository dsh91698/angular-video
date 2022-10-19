import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup ;

  public loginFormContent = undefined;


  constructor(public authService: AuthService, 
    // public loginForm: FormGroup,
  ) { 
    this.loginForm = new FormGroup({
      // user_login: new FormControl(''),
      // password: new FormControl(null),
    });
    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(null),
    });
  }
  
  submitForm() {
    console.log('submitForm...', this.loginForm.value);
    // const loginFormData = {...this.loginForm.value}
    // console.log('login...', loginFormData);
    this.authService.login(this.loginForm.value);

  }
}
