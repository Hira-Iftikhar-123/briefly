import { Component } from '@angular/core';
import { FeatureShellComponent } from '../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [FeatureShellComponent],
  template: `
    <app-feature-shell
      title="Analytics"
      description="Track team velocity, overdue tasks, and meeting outcomes."
    >
      <p>Chart.js or ApexCharts integration can be initialized in this module.</p>
    </app-feature-shell>
  `,
})
export class AnalyticsPageComponent {}