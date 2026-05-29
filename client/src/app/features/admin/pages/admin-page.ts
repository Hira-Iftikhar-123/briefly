import { Component } from '@angular/core';
import { FeatureShellComponent } from '../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [FeatureShellComponent],
  template: `
    <app-feature-shell
      title="Admin Panel"
      description="Manage users, teams, and workspace-level settings."
    >
      <p>Role-specific admin controls can be added as dedicated sub-sections.</p>
    </app-feature-shell>
  `,
})
export class AdminPageComponent {}