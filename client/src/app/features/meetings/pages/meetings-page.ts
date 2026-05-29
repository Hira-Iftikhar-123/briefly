import { Component } from '@angular/core';
import { FeatureShellComponent } from '../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-meetings-page',
  standalone: true,
  imports: [FeatureShellComponent],
  template: `
    <app-feature-shell
      title="Meetings"
      description="Create meetings, capture notes, and generate AI summaries."
    >
      <p>Meeting CRUD and collaborative notes editor can be placed here.</p>
    </app-feature-shell>
  `,
})
export class MeetingsPageComponent {}