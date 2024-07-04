import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectInfoService } from './project-info.service';
import { EachProjectComponent } from './each-project/each-project.component';
import { EachProjectMirroredComponent } from './each-project-mirrored/each-project-mirrored.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, EachProjectComponent, EachProjectMirroredComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  myProjects;
  constructor(projectInfo: ProjectInfoService){
    this.myProjects = projectInfo.projects;
  }
}
