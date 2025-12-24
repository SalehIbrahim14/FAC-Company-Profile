import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // In a real application, this would be your backend API endpoint
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) { }

  /**
   * Send email through contact form
   * Note: This is a placeholder implementation that simulates an API call.
   * In production, you would integrate with a real backend service or email API
   * such as SendGrid, AWS SES, or your custom backend endpoint.
   */
  sendEmail(contactMessage: ContactMessage): Observable<any> {
    // Simulated API call - replace with actual HTTP post in production
    console.log('Email would be sent:', contactMessage);
    
    // In production, uncomment this and configure your backend endpoint:
    // return this.http.post(this.apiUrl, contactMessage);
    
    // Simulated success response for demonstration
    return of({
      success: true,
      message: 'Email sent successfully'
    }).pipe(delay(1000)); // Simulate network delay
  }
}
