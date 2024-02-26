import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  @Input() employee!: Employee;
  baseImgUrl = './../../../assets/';
}
