import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { Clients } from './components/clients/clients';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    Clients,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
    
    // Try to use browser language, fallback to English
    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang?.match(/en|ar/) ? browserLang : 'en';
    this.translate.use(langToUse);
    
    // Set document direction based on language
    document.documentElement.dir = langToUse === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langToUse;
  }

  ngOnInit(): void {
    // Any initialization logic
  }
}
