import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isTarget: string = '';
  aboutMe: string = 'aboutMe';
  mySkills: string = 'mySkills';
  portfolio: string = 'portfolio';
  contact: string = 'contact';
  menuOpen: boolean = false;
  animationState: string = '';

  burgerIcon: string = './../../../../assets/img/icons/burgerMenu.svg';
  xIcon: string = './../../../../assets/img/icons/mobileMenuCloseFinal.svg';

  flagClass: string = 'en-flag';

  constructor(private languageService: LanguageService) {}

  navigateStart() {
    window.location.href = '#';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  switchLanguageToggle(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.checked) {
      this.flagClass = 'de-flag';
      this.languageService.switchLanguage('de');
    } else {
      this.flagClass = 'en-flag';
      this.languageService.switchLanguage('en');
    }
  }
}