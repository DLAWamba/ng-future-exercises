import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { FormsSolutionComponent } from '../_solution/forms.component'

@Component({
  selector: 'app-hello-world-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/forms/README.md" />
      <app-forms-solution solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, FormsSolutionComponent],
})
export class FormsPage {}
