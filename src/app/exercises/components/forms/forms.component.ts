import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

// Se pueden añadir prototipos para el formulario
interface HabitModel {
  textBox1: string
}

//type CreateHabitForm

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsComponent {
  message: string = ''
  habits: string[] = []

  habitsForm = new FormGroup({
    textBox1: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  submit() {
    if (this.habitsForm.controls.textBox1.valid) {
      this.message = ''
      this.habits.push(this.habitsForm.value.textBox1 ?? '')
    } else {
      this.message = '' + this.habitsForm.controls.textBox1.errors ?? ''
    }
  }
}
