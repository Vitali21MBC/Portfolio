import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectInfoService } from '../project-info.service';

@Component({
  selector: 'app-each-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './each-project.component.html',
  styleUrl: './each-project.component.scss'
})
export class EachProjectComponent {
  projectInfo!: ProjectInfoService;
}
