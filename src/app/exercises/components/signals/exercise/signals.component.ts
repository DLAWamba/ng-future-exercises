import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComponent {
  valor = signal(0)

  set(val: number) {
    this.valor.set(val)
  }

  increase() {
    this.valor.update(valor => valor + 1)
  }

  decrease() {
    this.valor.update(valor => valor - 1)
  }
}
