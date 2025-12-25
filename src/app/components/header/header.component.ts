import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  DEFAULT_LANGUAGE = 'ar'; // Default language is Arabic

  currentTranslations = {};
  currentLang = this.DEFAULT_LANGUAGE;
  rtlStylesheet: any;


  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem("preferredLanguage") || this.DEFAULT_LANGUAGE;
    this.currentLang = savedLang;
    this.translate.use(this.currentLang);
    this.updateRtlStylesheet(this.currentLang);
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
    localStorage.setItem("preferredLanguage", this.currentLang);
    this.updateRtlStylesheet(this.currentLang);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  updateRtlStylesheet(lang: string) {
    // Head element for dynamically adding/removing CSS
    const headElement = document.querySelector("head");

    // Handle direction (RTL or LTR) and applied styles
    if (lang === "ar") {
      document.body.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("dir", "rtl");

      // Add rtl-style.css dynamically if it exists
      if (!this.rtlStylesheet) {
        this.rtlStylesheet = document.createElement("link");
        this.rtlStylesheet.setAttribute("rel", "stylesheet");
        this.rtlStylesheet.setAttribute("href", "assets/css/rtl-style.css");
        headElement?.appendChild(this.rtlStylesheet);
      }
    } else {
      document.body.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("dir", "ltr");

      // Remove rtl-style.css dynamically
      if (this.rtlStylesheet) {
        this.rtlStylesheet.remove();
        this.rtlStylesheet = null;
      }
    }
  }
}
