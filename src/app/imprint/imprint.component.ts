import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });

    const imprintElement = this.el.nativeElement;
    this.renderer.setStyle(imprintElement, 'display', 'flex');
    this.renderer.setStyle(imprintElement, 'justify-content', 'center');
  }
}
