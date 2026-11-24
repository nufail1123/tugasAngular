import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-stepper',
  template: `
    <div class="d-inline-flex align-items-center">
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        style="width: 2rem; height: 2rem; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
        [disabled]="value() <= min()"
        (click)="change(-1)"
      >
        -
      </button>
      <span class="px-2 text-center fw-normal" style="min-width: 2rem;">{{ value() }}</span>
      <button
        type="button"
        class="btn btn-outline-secondary btn-sm"
        style="width: 2rem; height: 2rem; display: inline-flex; align-items: center; justify-content: center; padding: 0;"
        [disabled]="value() >= max()"
        (click)="change(1)"
      >
        +
      </button>
    </div>
  `,
})
export class Stepper {
  value = model(1);
  min = input(0);
  max = input(99);
  change(step: number) {
    const next = this.value() + step;
    if (next >= this.min() && next <= this.max()) {
      this.value.set(next);
    }
  }
}
