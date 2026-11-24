import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemRow } from './item-row';
import { Item } from '../data/menu';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';

registerLocaleData(localeId);

describe('ItemRow', () => {
  let component: ItemRow;
  let fixture: ComponentFixture<ItemRow>;

  const testItem: Item = {
    id: 1,
    name: 'Nasi goreng spesial',
    price: 28000,
    qty: 2,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemRow],
      providers: [{ provide: LOCALE_ID, useValue: 'id' }],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemRow);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('item', testItem);
    fixture.detectChanges();
  });

  it('should render item name and subtotal', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Nasi goreng spesial');
    expect(el.textContent).toContain('Rp28.000 per porsi');
    expect(el.textContent).toContain('Rp56.000');
  });

  it('should emit remove event', () => {
    let removedId: number | undefined;
    component.remove.subscribe((id) => (removedId = id));

    const deleteBtn = fixture.nativeElement.querySelector('button.btn-outline-danger');
    deleteBtn.click();

    expect(removedId).toBe(1);
  });
});
