import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  heroXMarkSolid,
  heroBars3BottomLeftSolid,
} from '@ng-icons/heroicons/solid';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-navigation',
  imports: [NgIcon],
  providers: [provideIcons({ heroXMarkSolid, heroBars3BottomLeftSolid })],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();

  onToggleMenu() {
    this.toggle.emit();
    console.log('Menu toggled');
  }
}
