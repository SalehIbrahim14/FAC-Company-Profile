import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
type SlideDirection = 'forward' | 'backward';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    { key: 'SERVICE_1', icon: 'bi-graph-up', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_2', icon: 'bi-code-slash', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_3', icon: 'bi-tools', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_4', icon: 'bi-mortarboard-fill', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_5', icon: 'bi-briefcase-fill', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_6', icon: 'bi-file-text-fill', benefits: ["B1", "B2", "B3", "B4"] },
  ];

  currentServiceIndex = 0;
  private direction: SlideDirection = 'forward';

  constructor(translate: TranslateService) {
    let currentLang = translate.getCurrentLang() || 'ar';
    translate.onLangChange.subscribe((event) => {
      currentLang = event.lang;
      this.currentServiceIndex = currentLang === 'ar' ? 5 : 0;
      console.log('current lang: ', currentLang);
      console.log("current service index: ", this.currentServiceIndex);
    });
  }

  get currentService() {
    return this.services[this.currentServiceIndex];
  }

  get enterClass() {
    return this.direction === 'forward'
      ? 'slide-enter-forward'
      : 'slide-enter-backward';
  }

  nextService() {
    if (this.currentServiceIndex < this.services.length - 1) {
      this.direction = 'forward';
      this.currentServiceIndex++;
    }
  }

  previousService() {
    if (this.currentServiceIndex > 0) {
      this.direction = 'backward';
      this.currentServiceIndex--;
    }
  }

  goToService(index: number) {
    if (index === this.currentServiceIndex) return;

    this.direction = index > this.currentServiceIndex ? 'forward' : 'backward';
    this.currentServiceIndex = index;
  }
}
