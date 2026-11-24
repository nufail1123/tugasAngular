import { Component, input, output } from '@angular/core';
import { Item } from '../data/menu';
import { Stepper } from './stepper';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-row',
  imports: [Stepper, CurrencyPipe],
  template: `
    @let subtotal = item().price * item().qty;
    <div class="d-flex align-items-center gap-3">
      <div class="flex-grow-1">
        <div class="fw-bold">{{ item().name }}</div>
        <div class="small text-muted">
          {{ item().price | currency: 'IDR' : 'symbol-narrow' : '1.0-0' }} per porsi
        </div>
      </div>
      <app-stepper [value]="item().qty" (valueChange)="qtyChange.emit($event)" [min]="1" />
      <div class="text-end fw-bold" style="width: 7.5rem">
        {{ subtotal | currency: 'IDR' : 'symbol-narrow' : '1.0-0' }}
      </div>
      <button
        type="button"
        class="btn btn-outline-danger btn-sm"
        [attr.aria-label]="'Hapus ' + item().name"
        (click)="remove.emit(item().id)"
      >
        Hapus
      </button>
    </div>
  `,
})
export class ItemRow {
  item = input.required<Item>();
  qtyChange = output<number>();
  remove = output<number>();
}
