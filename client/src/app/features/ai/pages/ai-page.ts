import { Component } from '@angular/core';
import { FeatureShellComponent } from '../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-ai-page',
  standalone: true,
  imports: [FeatureShellComponent],
  template: `
    <app-feature-shell
      title="AI Assistant"
      description="Summaries, action-item extraction, and workspace chat."
    >
      <p>Connect this page to the API AI endpoints for prompt workflows.</p>
    </app-feature-shell>
  `,
})
export class AiPageComponent {}