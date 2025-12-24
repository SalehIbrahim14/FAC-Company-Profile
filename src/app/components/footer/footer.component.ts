import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'Facebook', icon: 'bi-facebook', url: '#' },
    { name: 'Twitter', icon: 'bi-twitter-x', url: '#' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: '#' },
    { name: 'Instagram', icon: 'bi-instagram', url: '#' }
  ];
}
