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
    { key: 'SERVICE_1', icon: 'bi-graph-up', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_2', icon: 'bi-code-slash', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_3', icon: 'bi-tools', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_4', icon: 'bi-mortarboard-fill', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_5', icon: 'bi-briefcase-fill', benefits: ["B1", "B2", "B3", "B4"] },
    { key: 'SERVICE_6', icon: 'bi-file-text-fill', benefits: ["B1", "B2", "B3", "B4"] },
  ];
}
