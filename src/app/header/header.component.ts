import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { DesktopNavigationComponent } from './desktop-navigation/desktop-navigation.component';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MobileNavigationComponent, DesktopNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private isBrowser = signal(false);
  deviceWidth = signal(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser.set(true);
    }
  }

  ngOnInit() {
    if (this.isBrowser()) {
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
