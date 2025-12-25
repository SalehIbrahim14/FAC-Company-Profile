import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  serviceOptions = [
    { value: 'talent-acquisition', label: 'CONTACT.FORM.SERVICE_TALENT' },
    { value: 'performance-management', label: 'CONTACT.FORM.SERVICE_PERFORMANCE' },
    { value: 'compensation-benefits', label: 'CONTACT.FORM.SERVICE_COMPENSATION' },
    { value: 'organizational-development', label: 'CONTACT.FORM.SERVICE_ORGANIZATIONAL' },
    { value: 'training-development', label: 'CONTACT.FORM.SERVICE_TRAINING' },
    { value: 'compliance-policy', label: 'CONTACT.FORM.SERVICE_COMPLIANCE' },
    { value: 'other', label: 'CONTACT.FORM.SERVICE_OTHER' }
  ];

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private translate: TranslateService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.minLength(10)]],
      companyName: [''],
      service: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get phone() {
    return this.contactForm.get('phone');
  }
  get companyName() {
    return this.contactForm.get('companyName');
  }

  get service() {
    return this.contactForm.get('service');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;

      // Get form values and add current language
      const formData = {
        ...this.contactForm.value,
        lang: this.translate.currentLang || 'ar'
      };

      this.emailService.sendEmail(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.submitSuccess = false;
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
          console.error('Error sending email:', error);

          // Hide error message after 5 seconds
          setTimeout(() => {
            this.submitError = false;
          }, 5000);
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
