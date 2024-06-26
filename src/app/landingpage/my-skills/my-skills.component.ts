import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  navigateToContact(){
    window.location.href="#contact"
  }


    skills = [
    {
      url: '/assets/img/icons/angular.svg',
      urlMobile: '/assets/img/icons/angularMobile.svg',
      title: 'Angular'
    },
    {
      url: '/assets/img/icons/typescript.svg',
      urlMobile: '/assets/img/icons/typescriptMobile.svg',
      title: 'TypeScript'
    },
    {
      url: '/assets/img/icons/javascript.svg',
      urlMobile: '/assets/img/icons/javascriptMobile.svg',
      title: 'JavaScript'
    },
    {
      url: '/assets/img/icons/html.svg',
      urlMobile: '/assets/img/icons/htmlMobile.svg',
      title: 'HTML'
    },
    {
      url: '/assets/img/icons/firebase.svg',
      urlMobile: '/assets/img/icons/firebaseMobile.svg',
      title: 'Firebase'
    },
    {
      url: '/assets/img/icons/git.svg',
      urlMobile: '/assets/img/icons/gitMobile.svg',
      title: 'GIT'
    },
    {
      url: '/assets/img/icons/css.svg',
      urlMobile: '/assets/img/icons/cssMobile.svg',
      title: 'CSS'
    },
    {
      url: '/assets/img/icons/api.svg',
      urlMobile: '/assets/img/icons/apiMobile.svg',
      title: 'Rest-Api'
    },
    {
      url: '/assets/img/icons/scrum.svg',
      urlMobile: '/assets/img/icons/scrumMobile.svg',
      title: 'Scrum'
    },
    {
      url: '/assets/img/icons/materialDesign.svg',
      urlMobile: '/assets/img/icons/materialDesignMobile.svg',
      title: 'Material Design'
    }
  ];

}
