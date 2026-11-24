import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { ITEMS } from './data/menu';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app and initialize default values', () => {
    expect(component).toBeTruthy();
    expect((component as any).items().length).toBe(5);
    expect((component as any).jumlahOrang()).toBe(4);
    expect((component as any).pajakPersen()).toBe(10);
    expect((component as any).subtotal()).toBe(190000);
    expect((component as any).pajak()).toBe(19000);
    expect((component as any).total()).toBe(209000);
    expect((component as any).perOrang()).toBe(52250);
    expect((component as any).kategori()).toBe('Wajar');
  });

  it('should update subtotal when quantity changes', () => {
    (component as any).setQty(1, 3); // Nasi goreng: 3 * 28.000 = 84.000 (+28.000)
    fixture.detectChanges();
    expect((component as any).subtotal()).toBe(218000);
    expect((component as any).pajak()).toBe(21800);
    expect((component as any).total()).toBe(239800);
    expect((component as any).perOrang()).toBe(59950);
  });

  it('should remove an item correctly', () => {
    (component as any).removeItem(1); // Remove Nasi goreng (56.000)
    fixture.detectChanges();
    expect((component as any).items().length).toBe(4);
    expect((component as any).subtotal()).toBe(134000);
  });

  it('should clear all items', () => {
    (component as any).clearItems();
    fixture.detectChanges();
    expect((component as any).items().length).toBe(0);
    expect((component as any).subtotal()).toBe(0);
    expect((component as any).total()).toBe(0);
    expect((component as any).perOrang()).toBe(0);
  });

  it('should add a new item', () => {
    const dummyNameInput = { value: 'Kopi Susu', focus: () => {} } as HTMLInputElement;
    const dummyPriceInput = { value: '15000' } as HTMLInputElement;

    (component as any).addItem(dummyNameInput, dummyPriceInput);
    fixture.detectChanges();

    expect((component as any).items().length).toBe(6);
    const added = (component as any).items()[5];
    expect(added.name).toBe('Kopi Susu');
    expect(added.price).toBe(15000);
    expect(added.qty).toBe(1);
    expect(dummyNameInput.value).toBe('');
    expect(dummyPriceInput.value).toBe('');
  });

  it('should calculate category based on per orang cost', () => {
    // When high cost per person
    (component as any).jumlahOrang.set(1);
    fixture.detectChanges();
    expect((component as any).kategori()).toBe('Mahal');

    // When low cost per person
    (component as any).jumlahOrang.set(10);
    fixture.detectChanges();
    expect((component as any).kategori()).toBe('Murah');
  });
});
