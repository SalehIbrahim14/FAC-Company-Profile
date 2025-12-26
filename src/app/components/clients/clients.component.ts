import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, TranslateModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class Clients {
  CONFIG = {
    FORM_SUBMIT_DELAY: 1500, // Milliseconds to simulate form submission
    TOOLTIP_INIT_DELAY: 1000, // Delay before initializing tooltips
    OBSERVER_DELAYS: [1000, 2000] // Delays for re-observing elements
  };
  constructor() {
    this.initCounterAnimations();
  }
  initCounterAnimations() {
    
    this.observeCounters();

    this.CONFIG.OBSERVER_DELAYS.forEach(delay => {
      setTimeout(() => this.observeCounters(), delay);
    });
  }
  observeCounters() {    
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          this.animateCounter(entry.target);
          entry.target.classList.add('counted');
        }
      });
    }, observerOptions);
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(counter => observer.observe(counter));
  }

  // Animate counter
  animateCounter(element: Element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 16);
  }
}
