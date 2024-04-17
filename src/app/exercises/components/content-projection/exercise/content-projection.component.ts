import { Component } from '@angular/core'
import { ComponentWithNgContentComponent } from './component-with-ng-content/component-with-ng-content.component'

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css',
  standalone: true,
  imports: [ComponentWithNgContentComponent],
})
export class ContentProjectionComponent {}
