import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-shell',
  standalone: true,
  template: `
    <section class="feature-shell">
      <header>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </header>
      <ng-content />
    </section>
  `,
  styles: `
    .feature-shell {
      display: grid;
      gap: 1rem;
      padding: 1rem 1.25rem;
      border: 1px solid #1e293b;
      border-radius: 0.75rem;
      background: rgba(15, 23, 42, 0.6);
    }

    h1 {
      margin: 0;
      font-size: 1.25rem;
    }

    p {
      margin: 0.35rem 0 0;
      color: #94a3b8;
    }
  `,
})
export class FeatureShellComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}