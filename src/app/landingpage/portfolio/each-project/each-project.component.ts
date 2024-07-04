import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectInfoService } from '../project-info.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-each-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './each-project.component.html',
  styleUrl: './each-project.component.scss'
})
export class EachProjectComponent {
  projectInfo!: ProjectInfoService;
  navigateToUrl(url:string){
    window.open(url, "_blank")?.focus();
  }
}

