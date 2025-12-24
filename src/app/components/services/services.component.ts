import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { key: 'SERVICE_1', icon: 'bi-graph-up' },
    { key: 'SERVICE_2', icon: 'bi-code-slash' },
    { key: 'SERVICE_3', icon: 'bi-tools' },
    { key: 'SERVICE_4', icon: 'bi-mortarboard-fill' }
  ];
}
