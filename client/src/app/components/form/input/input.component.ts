import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() type!: string;
  @Input() class!: string;
  @Input() placeholder!: string;
  @Input() value!: string;

  constructor() {}
}
