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
  name = input<string>('Unknown')
  habit = input.required<Habit>()

  getDescription() {
    return this.habit().description
  }

  // Devuelve "un json" con la clases, y un valor true o false si hay que aplicar esa clase o no
  // Como son clases de css, usan notacion kebap (con -), y para referenciarlas desde el ts, usamos comillas simples ''
  getClass() {
    return {
      'style-complete': this.habit().completed,
      'style-pending': !this.habit().completed,
    }
  }

  // Otra forma de hacerlo, devolviendo directamente la clase
  getClass_alt() {
    if (this.habit().completed) {
      return 'style-complete'
    } else {
      return 'style-base'
    }
  }

  isCompleted() {
    return this.habit().completed
  }

  getColorClass() {
    return {
      'style-red': this.name().toLowerCase().startsWith('a'),
      'style-highlight': this.name().length > 2,
    }
  }
}
