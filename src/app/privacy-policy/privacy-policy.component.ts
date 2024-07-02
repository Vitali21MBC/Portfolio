import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0 });

    const privacyPolicyElement = this.el.nativeElement;
    this.renderer.setStyle(privacyPolicyElement, 'display', 'flex');
    this.renderer.setStyle(privacyPolicyElement, 'justify-content', 'center');
  }
}
