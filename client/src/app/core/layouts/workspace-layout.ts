import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workspace-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="workspace-layout">
      <aside class="sidebar">
        <h2>Briefly</h2>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/meetings" routerLinkActive="active">Meetings</a>
          <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
          <a routerLink="/analytics" routerLinkActive="active">Analytics</a>
          <a routerLink="/ai" routerLinkActive="active">AI Assistant</a>
          <a routerLink="/admin" routerLinkActive="active">Admin</a>
        </nav>
      </aside>
      <main class="content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .workspace-layout {
      display: grid;
      grid-template-columns: 240px 1fr;
      min-height: 100dvh;
    }

    .sidebar {
      background: #0f172a;
      color: #e2e8f0;
      padding: 1.25rem 1rem;
      border-right: 1px solid #1e293b;
    }

    .sidebar h2 {
      margin: 0 0 1rem;
      font-size: 1.15rem;
    }

    .sidebar nav {
      display: grid;
      gap: 0.5rem;
    }

    .sidebar a {
      color: #cbd5e1;
      text-decoration: none;
      padding: 0.45rem 0.5rem;
      border-radius: 0.375rem;
    }

    .sidebar a.active,
    .sidebar a:hover {
      background: #1e293b;
      color: #fff;
    }

    .content {
      padding: 1.5rem;
      background: #020617;
      color: #f8fafc;
    }

    @media (max-width: 900px) {
      .workspace-layout {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class WorkspaceLayoutComponent {}
