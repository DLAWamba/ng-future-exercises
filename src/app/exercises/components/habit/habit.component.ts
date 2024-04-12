import { Component, input } from '@angular/core'
// Importamos las clases, intefaces que necesitamos
import { Habit } from './page/habit-exercise.page'

@Component({
  selector: 'app-habit', // El selector es el nombre html del componente
  styleUrl: './habit.component.css', // La direccion del archivo css
  templateUrl: './habit.component.html', // La direccion del archivo html
  standalone: true,
  imports: [], // Aqui se especifica que componentes necesita,
})
// Aqui se crea el codigo del componente, el nombre de la clase es el nombre del componente, no confundir con el selector, que es el nombre html
export class HabitComponent {
  // Estos son los parametros del constructor de la clase
  // Se difrencian porque llevan input<tipo>(), TS automaticamente los considera como parametros del constructor y deben ser rellenado al usar el componente
  name = input<string>('Unknown')
  habit = input.required<Habit>()

  // Funciones invocables del componente

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
