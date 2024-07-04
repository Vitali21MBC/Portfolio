import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-each-project-mirrored',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './each-project-mirrored.component.html',
  styleUrl: './each-project-mirrored.component.scss'
})
export class EachProjectMirroredComponent {
  navigateToUrl(url:string){
    window.open(url, "_blank")?.focus();
  }
}
