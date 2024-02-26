import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Employee } from './interfaces/employee.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gss1-hub';
  faEdit = faEdit;
  showUserDropdown = false;
  loggedUSer: Employee | any;


  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('AppComponent initialized');
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      this.loggedUSer=this.authService.loggedUSer;
    });
  }


  showUserInfoDropdown(value: any) {
    this.showUserDropdown = value;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}
