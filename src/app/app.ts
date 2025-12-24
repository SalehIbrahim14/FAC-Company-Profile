import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
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
