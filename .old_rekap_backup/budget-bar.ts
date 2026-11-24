import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-budget-bar',
  imports: [CurrencyPipe],
  template: `
    <div class="d-flex justify-content-between small mb-1">
      <span class="mb-1">
        Terpakai {{ spent() | currency: 'IDR' : 'symbol-narrow' : '1.0-0' }} dari
        {{ budget() | currency: 'IDR' : 'symbol-narrow' : '1.0-0' }}
      </span>
      <span>{{ percent() }}%</span>
    </div>
    <div class="progress" style="height:10px">
      <div class="progress-bar" [class]="barColor()" [style.width.%]="barWidth()"></div>
    </div>

    <p [class]="'small text-muted mt-1 mb-3'">
      Sisa {{ remaining() | currency: 'IDR' : 'symbol-narrow' : '1.0-0' }}
    </p>
    <div class="progress" style="height=10px">
      <div class="progress-bar"></div>
    </div>
  `,
})
export class BudgetBar {
  spent = input(0);
  budget = input(1);

  percent = computed(() => Math.round((this.spent() / this.budget()) * 100));
  remaining = computed(() => this.budget() - this.spent());

  barWidth = computed(() => Math.min(this.percent(), 100));
  barColor = computed(() => {
    if (this.percent() >= 100) return 'bg-danger';
    if (this.percent() >= 75) return 'bg-warning';
    return 'bg-success';
  });
}
