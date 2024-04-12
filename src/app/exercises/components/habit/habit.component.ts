import { Component, input } from '@angular/core'
import { Habit } from './page/habit-exercise.page'

@Component({
  selector: 'app-habit',
  styleUrl: './habit.component.css',
  templateUrl: './habit.component.html',
  standalone: true,
  imports: [],
})
export class HabitComponent {
  habit = input.required<Habit>()
  name = input<string>('Unknown')

  getDescription() {
    return this.habit().description
  }

  getClass() {
    return {
      comp: this.habit().completed,
      nocomp: !this.habit().completed,
    }
  }

  isCompleted() {
    return this.habit().completed
  }
}
