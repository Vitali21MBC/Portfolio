import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AtfSectionComponent } from './atf-section/atf-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, AtfSectionComponent, AboutMeSectionComponent, MySkillsComponent, PortfolioComponent, ContactFormComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
