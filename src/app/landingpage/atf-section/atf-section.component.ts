import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-atf-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
