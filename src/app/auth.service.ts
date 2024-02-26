// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './interfaces/employee.interface';
import { UpcomingWorkAnniversary } from './utils/employee-constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedUSer: Employee | undefined;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string) {
    const employee: Employee | undefined = UpcomingWorkAnniversary.find(
      (emp) => emp.firstName === username && emp.lastName === password
    );

    if (employee) {
      this.loggedUSer=employee;
      this.loggedIn.next(true);
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  register(firstname: string, lastname: string, years: number, role: string) {
    const newEmployee: Employee = {
      firstName: firstname,
      lastName: lastname,
      profileImg: './../../../assets/avatar.png',
      years: years,
      role:role
    };
    UpcomingWorkAnniversary.push(newEmployee);

    
  }

  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
  }
}
