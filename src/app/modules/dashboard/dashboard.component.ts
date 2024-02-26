import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  IconDefinition,
  faDesktop,
  faEnvelopeOpen,
  faHandHoldingHeart,
  faLayerGroup,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/interfaces/employee.interface';
import { UpcomingWorkAnniversary } from 'src/app/utils/employee-constant';
import { CenterMenuItem, FacilitiesMenuItems, FinanceMenuItems, GovernanceMenuItems, HRMenuItems, ITMenuItems, LeftMenuItem, LeftMenuItems, MigrationMenuItems, QualityMenuItems } from 'src/app/utils/menu-iteams';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  envelopeOpen = faEnvelopeOpen;
  userGroup = faUserGroup;
  layerGroup = faLayerGroup;
  handHoldingHeart = faHandHoldingHeart;
  star = faStar;
  desktop = faDesktop;
  centerMenu: CenterMenuItem[] =[];
  leftMenu: LeftMenuItem[] =[];

  constructor(private router: Router,private route: ActivatedRoute) {}

  upcomingWorkAnniversary: Employee[] = UpcomingWorkAnniversary;
  ngOnInit(): void {
    this.upcomingWorkAnniversary = this.upcomingWorkAnniversary.slice(0, 4);
    this.centerMenu=HRMenuItems;
    this.leftMenu=LeftMenuItems;
  }

  handleClickCenter(menuItem: CenterMenuItem) {
    if (menuItem.label === 'Your Journey') {
      this.router.navigateByUrl('/your-journey');
    }
    if (menuItem.label === 'P4P') {
      this.router.navigateByUrl('/hr/p4p');
    }
}
handleClickLeft(menuItem: CenterMenuItem) {
  if(menuItem.label ==='HR'){
    this.centerMenu=HRMenuItems;
  }
  if(menuItem.label ==='QUALITY'){
    this.centerMenu=QualityMenuItems;
  }
  if(menuItem.label ==='Facilities'){
    this.centerMenu=FacilitiesMenuItems;
  }
  if(menuItem.label ==='Finance'){
    this.centerMenu=FinanceMenuItems;
  }
  if(menuItem.label ==='Governance'){
    this.centerMenu=GovernanceMenuItems;
  }
  if(menuItem.label ==='IT'){
    this.centerMenu=ITMenuItems;
  }
  if(menuItem.label ==='Migrations'){
    this.centerMenu=MigrationMenuItems;
  }
}
}