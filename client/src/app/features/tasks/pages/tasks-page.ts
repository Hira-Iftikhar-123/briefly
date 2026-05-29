import { Component } from '@angular/core';
import { FeatureShellComponent } from '../../../shared/components/feature-shell/feature-shell';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [FeatureShellComponent],
  template: `
    <app-feature-shell
      title="Tasks"
      description="Kanban-ready task board with priorities and due dates."
    >
      <p>Drag-and-drop board and task assignment flows will sit in this module.</p>
    </app-feature-shell>
  `,
})
export class TasksPageComponent {}