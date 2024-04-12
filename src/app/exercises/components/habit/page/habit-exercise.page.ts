import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { HabitSolutionComponent } from '../_solution/habit.component'
import { HabitComponent } from '../habit.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'

export class Habit {
  description: string = 'habit1'
  completed: boolean = true
}

@Component({
  selector: 'app-habit-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/habit/README.md" />
      <app-habit-solution solution habit="Meditar" />
      <app-habit habit-component [habit]="getHabit()" />
    </app-solution-component>
  `,
  imports: [SolutionComponent, HabitSolutionComponent, HabitComponent, MdComponent],
})
export class EventExercisePage {
  getHabit(): Habit {
    return { description: 'habito1', completed: false }
  }
}
