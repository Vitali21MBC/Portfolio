import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RouterOutlet],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  navigateStart() {
    window.location.href = '#';
  }

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    agree: false,
  }

  mailTest = false;
  showPopup: boolean = false;

  constructor() {}

  post = {
    endPoint: 'https://vitali-rudi-dev.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.displayPopup();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.displayPopup();
      ngForm.resetForm();
    } else {
      // Markiere alle Felder als 'touched', um die Validierungsnachrichten anzuzeigen
      Object.keys(ngForm.controls).forEach(field => {
        const control = ngForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  displayPopup() {
    this.showPopup = true;
    setTimeout(() => {
      this.hidePopup();
    }, 2000);
  }

  hidePopup() {
    this.showPopup = false;
  }
}