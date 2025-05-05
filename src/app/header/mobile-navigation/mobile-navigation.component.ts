import { Component } from '@angular/core';
import {
  heroXMarkSolid,
  heroBars3BottomLeftSolid,
} from '@ng-icons/heroicons/solid';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-mobile-navigation',
  imports: [NgIcon],
  providers: [provideIcons({ heroXMarkSolid, heroBars3BottomLeftSolid })],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss',
})
export class MobileNavigationComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
