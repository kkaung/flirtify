import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() placeholder!: string;
  @Input() class!: string;
  @Input() value = null;
  @Input() type!: string;

  constructor() {}
}
