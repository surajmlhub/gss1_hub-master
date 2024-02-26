import { Component, EventEmitter, Output } from '@angular/core';
import {
  faCar,
  faGlobe,
  faGrip,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  faGrip = faGrip;
  faGlobe = faGlobe;
  faUser = faUser;
  faCar = faCar;
  isVisible = true;
  @Output() toggleSidebar = new EventEmitter();

  toggle() {
    this.isVisible = !this.isVisible;
    this.toggleSidebar.emit(this.isVisible);
  }
}
