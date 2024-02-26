import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { Employee } from 'src/app/interfaces/employee.interface';
import { UpcomingWorkAnniversary } from 'src/app/utils/employee-constant';

@Component({
  selector: 'app-your-journey',
  templateUrl: './your-journey.component.html',
  styleUrls: ['./your-journey.component.css'],
})
export class YourJourneyComponent implements OnInit {
  upcomingWorkAnniversary: Employee[] = UpcomingWorkAnniversary;
  filteredUpcomingWorkAnniversary: Employee[] = UpcomingWorkAnniversary;
  searchText = new FormControl('');

  ngOnInit(): void {
    this.searchText.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      console.log(value);
      this.filteredUpcomingWorkAnniversary =
        this.upcomingWorkAnniversary.filter(
          (employee) =>
            employee.firstName.includes(value!) ||
            employee.lastName.includes(value!) ||
            employee.firstName.toLowerCase().includes(value!) ||
            employee.lastName.toLowerCase().includes(value!)
        );
    });
  }
}
