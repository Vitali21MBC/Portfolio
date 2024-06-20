import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AtfSectionComponent } from './atf-section/atf-section.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, AtfSectionComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
