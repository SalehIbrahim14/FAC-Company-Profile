import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    { key: 'INTEGRITY', icon: 'bi-shield-check' },
    { key: 'EXCELLENCE', icon: 'bi-star' },
    { key: 'INNOVATION', icon: 'bi-lightbulb' },
    { key: 'CUSTOMER_FOCUS', icon: 'bi-people' }
  ];
}
