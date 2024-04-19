import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { HabitSolutionComponent } from '../_solution/habit.component'
import { HabitComponent } from '../habit.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'

// Definimos aqui la interfaz/clase habit, pero lo ideal seria definirlo en un fichero aparte, incluso dentro de una carpeta con todas las interfaces comunes
// Debemos importarla en HabitComponent

// Podemos definirla como clase o como intefaz, en este caso tiene mas sentido como intefaz porque no tiene metodos
export class HabitClass {
  description: string = ''
  completed: boolean = false
}

export interface Habit {
  description: string
  completed: boolean
}

@Component({
  selector: 'app-habit-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/habit/README.md" />
      <app-habit-solution solution habit="Meditar" />
      <!-- ref1 -->
      <app-habit user-solution [habit]="getHabit()" [name]="'Pescar'" />
    </app-solution-component>
  `,
  imports: [SolutionComponent, HabitSolutionComponent, HabitComponent, MdComponent],
})
export class EventExercisePage {
  getHabit(): Habit {
    return { description: 'Ir a pescar al rio', completed: false }
  }
}

/* ref1
Aqui colocamos los componentes usando el template, lo ideal seria usar el templateUrl y ponerlo en un html

<app-habit user-solution [habit]="getHabit()" [name]="'Pescar'" />

Los componentes se referncian por su selector, app-habit en este caso:
<app-habit

despues se pasa un atributo "user-solution". 
Estos atributos seran utiles mas adelante para saber donde colocar el componente
En este caso, significa que que este componente se va a colocar en la zona de user-solution del padre


finalmente se pasan los parametros del componente entre corchetes [parametro]
[habit]="getHabit()" [name]="'Pescar'"
Estos parametros estan definidos como input() en la clase del componente

Podemos pasar los parametros de forma estatica, como en [name] = "'pescar'"
o de forma dinamica, como en [habit] = "getHabit()"

En cualquier caso, lo que hay que entender es que lo que va entre comillas es codigo .ts, no literales,
para poner literales hay que ponerlos entre comillas simples dentro de las comillas dobles.

[parametro] = "codigo typescript"

Este codigo typescript puede usar funciones definidas dentro de la clase del componente




*/
