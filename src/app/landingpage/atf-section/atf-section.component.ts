import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atf-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atf-section.component.html',
  styleUrls: ['./atf-section.component.scss', './atf-section.component.mediaQuery.scss']
})
export class AtfSectionComponent {
  isTarget: string = '';
  contact: string = 'contact';

  navigateToContact(){
    window.location.href="#contact"
  }

  navigateToAboutMe(){
    window.location.href="#aboutMe"
  }

  navigateToUrl(url:string){
    window.open(url, "_blank")?.focus();
  }
}
