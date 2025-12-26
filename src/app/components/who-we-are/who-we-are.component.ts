import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent {
  values = [
    { key: 'INTEGRITY', icon: 'bi-shield-check' },
    { key: 'EXCELLENCE', icon: 'bi-star' },
    { key: 'INNOVATION', icon: 'bi-lightbulb' },
    { key: 'CUSTOMER_FOCUS', icon: 'bi-people' }
  ];
}
