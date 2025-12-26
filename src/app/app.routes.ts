import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
