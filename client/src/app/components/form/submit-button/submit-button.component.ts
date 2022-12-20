import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
})
export class SubmitButtonComponent {
  @Input() title!: string;
  @Input() class!: string;
  @Input() type!: string;

  constructor() {}
}
