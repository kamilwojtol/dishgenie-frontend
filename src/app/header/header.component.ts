import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private isBrowser = signal(false);
  deviceWidth = signal(0);
  isOpen = false;

  toggleMenu() {
    console.log('Toggling menu');
    this.isOpen = !this.isOpen;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (this.isBrowser()) {
      if (isPlatformBrowser(this.platformId)) {
        this.isBrowser.set(true);
      }

      this.deviceWidth.set(window.innerWidth);
      fromEvent(window, 'resize').subscribe(() => {
        this.deviceWidth.set(window.innerWidth);
      });
    }
  }

  get isMobile() {
    return this.deviceWidth() ? this.deviceWidth() < 768 : false;
  }
}
