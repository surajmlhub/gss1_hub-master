import { Component, EventEmitter, Output } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';
import { Employee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faBell = faBell;
  showInfo = false;
  @Output() showUserInfo = new EventEmitter();
  loggedUSer: Employee | any;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.loggedUSer=this.authService.loggedUSer;
  }

  handleUserClick() {
    this.showInfo = !this.showInfo;
    this.showUserInfo.emit(this.showInfo);
  }
}
