import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/pages/auth-page').then((m) => m.AuthPageComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/workspace-layout').then(
        (m) => m.WorkspaceLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard-page').then(
            (m) => m.DashboardPageComponent,
          ),
      },
      {
        path: 'meetings',
        loadComponent: () =>
          import('./features/meetings/pages/meetings-page').then(
            (m) => m.MeetingsPageComponent,
          ),
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./features/tasks/pages/tasks-page').then(
            (m) => m.TasksPageComponent,
          ),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./features/analytics/pages/analytics-page').then(
            (m) => m.AnalyticsPageComponent,
          ),
      },
      {
        path: 'ai',
        loadComponent: () =>
          import('./features/ai/pages/ai-page').then((m) => m.AiPageComponent),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./features/admin/pages/admin-page').then(
            (m) => m.AdminPageComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];