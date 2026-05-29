import { Component } from '@angular/core';
import { FeatureShellComponent } from '../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [FeatureShellComponent],
  template: `
    <app-feature-shell
      title="Dashboard"
      description="Overview of meetings, tasks, and productivity signals."
    >
      <p>Cards and charts will be connected to analytics APIs in next steps.</p>
    </app-feature-shell>
  `,
})
export class DashboardPageComponent {}