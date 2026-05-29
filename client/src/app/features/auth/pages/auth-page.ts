import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="auth-card">
      <h1>Welcome to Briefly</h1>
      <p>AI-powered meeting intelligence and task collaboration workspace.</p>
      <div class="actions">
        <button type="button" routerLink="/dashboard">Enter Workspace</button>
      </div>
      <small>
        Scaffolded auth area: login/register/forgot-password views can be added
        here next.
      </small>
    </section>
  `,
  styles: `
    :host {
      min-height: 100dvh;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at top, #1e293b, #020617 65%);
      color: #e2e8f0;
      padding: 1rem;
    }

    .auth-card {
      width: min(560px, 100%);
      border: 1px solid #334155;
      border-radius: 0.9rem;
      background: rgba(15, 23, 42, 0.8);
      padding: 1.5rem;
    }

    h1 {
      margin-top: 0;
    }

    button {
      cursor: pointer;
      background: #2563eb;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      padding: 0.65rem 1rem;
    }
  `,
})
export class AuthPageComponent {}