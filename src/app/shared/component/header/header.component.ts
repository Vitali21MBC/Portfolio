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

  navigateStart() {
    window.location.href='#';
  }
}
