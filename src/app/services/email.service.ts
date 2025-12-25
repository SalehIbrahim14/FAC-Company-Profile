import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App_Config } from '../../assets/environments';

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  service?: string;
  message: string;
  lang?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Backend API endpoint
  private apiUrl = App_Config.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Send email through contact form
   * Connects to Node.js backend service
   */
  sendEmail(contactMessage: ContactMessage): Observable<any> {
    console.log('Sending email:', contactMessage);
    return this.http.post(this.apiUrl, contactMessage);
  }
}
