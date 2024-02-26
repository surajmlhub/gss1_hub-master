import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { YourJourneyComponent } from './modules/dashboard/your-journey/your-journey.component';
import { QualityComponent } from './modules/quality/quality.component';
import { LoginComponent } from './components/login/login.component';
import { P4PComponent } from './components/p4-p/p4-p.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dashboard/your-journey',
    component: YourJourneyComponent,
  },
  {
    path: 'quality',
    component: QualityComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hr/p4p',
    component: P4PComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
