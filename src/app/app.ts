import { Component, signal, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemRow } from './components/item-row';
import { Stepper } from './components/stepper';
import { ITEMS, JUMLAH_ORANG, PAJAK_PERSEN, Item } from './data/menu';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ItemRow, Stepper, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './app.html',
})
export class App {
  protected readonly tanggal = new Date(2026, 10, 20);
  protected readonly items = signal<Item[]>(ITEMS);
  protected readonly jumlahOrang = signal<number>(JUMLAH_ORANG);
  protected readonly pajakPersen = signal<number>(PAJAK_PERSEN);

  protected readonly subtotal = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.qty, 0)
  );
  protected readonly pajak = computed(() =>
    Math.round((this.subtotal() * (this.pajakPersen() || 0)) / 100)
  );
  protected readonly total = computed(() => this.subtotal() + this.pajak());
  protected readonly perOrang = computed(() =>
    this.jumlahOrang() > 0 ? Math.round(this.total() / this.jumlahOrang()) : 0
  );
  protected readonly kategori = computed(() => {
    const amount = this.perOrang();
    if (amount <= 30000) return 'Murah';
    if (amount <= 100000) return 'Wajar';
    return 'Mahal';
  });

  protected setQty(id: number, qty: number) {
    this.items.update((list) => list.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  protected removeItem(id: number) {
    this.items.update((list) => list.filter((i) => i.id !== id));
  }

  protected clearItems() {
    this.items.set([]);
  }

  protected addItem(nameInput: HTMLInputElement, priceInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    if (!name || isNaN(price) || price <= 0) return;
    const newItem: Item = {
      id: Date.now(),
      name,
      price,
      qty: 1,
    };
    this.items.update((list) => [...list, newItem]);
    nameInput.value = '';
    priceInput.value = '';
    nameInput.focus();
  }
}
