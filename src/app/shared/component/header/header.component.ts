import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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

  navigateStart() {
    window.location.href = '#';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
