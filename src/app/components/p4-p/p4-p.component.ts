import { Component } from '@angular/core';
import { CenterMenuItem, P4PMenuItems } from 'src/app/utils/menu-iteams';

@Component({
  selector: 'app-p4-p',
  templateUrl: './p4-p.component.html',
  styleUrls: ['../../modules/dashboard/dashboard.component.css']
})
export class P4PComponent {

  centerMenu: CenterMenuItem[] =[];

  ngOnInit(): void {
    this.centerMenu=P4PMenuItems;
  }

  handleClickCenter(menuItem: CenterMenuItem) {
  }
}
