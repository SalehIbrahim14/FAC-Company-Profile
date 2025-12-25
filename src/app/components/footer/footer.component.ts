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
    { name: 'Facebook', icon: 'bi-facebook', url: 'https://www.facebook.com/firstanswerco' },
    { name: 'Twitter', icon: 'bi-twitter-x', url: 'https://x.com/firstanswerco' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/firstanswerco' },
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://www.instagram.com/firstanswerco' }
  ];
}
