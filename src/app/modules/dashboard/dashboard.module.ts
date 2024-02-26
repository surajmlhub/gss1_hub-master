import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YourJourneyComponent } from './your-journey/your-journey.component';
import { ProfileCardComponent } from 'src/app/components/profile-card/profile-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    YourJourneyComponent,
    ProfileCardComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, RouterModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
