// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  firstname = '';
  lastname = '';
  years=0;
  role='';

  isRegister= false;
  constructor(private authService: AuthService, private router: Router) {}

  setRegister(){
    this.isRegister=true;
  }

  login() {
    this.authService.login(this.username, this.password);
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  register() {
    this.authService.register(this.firstname, this.lastname, this.years, this.role);
    this.isRegister=false;
    this.router.navigate(['/login']);
  }
}
