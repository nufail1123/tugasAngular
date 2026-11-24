import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stepper } from './stepper';

describe('Stepper', () => {
  let component: Stepper;
  let fixture: ComponentFixture<Stepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stepper],
    }).compileComponents();

    fixture = TestBed.createComponent(Stepper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and increment / decrement correctly', () => {
    expect(component.value()).toBe(1);
    component.change(1);
    expect(component.value()).toBe(2);
    component.change(-1);
    expect(component.value()).toBe(1);
  });

  it('should not decrement below min', () => {
    fixture.componentRef.setInput('min', 1);
    component.change(-1);
    expect(component.value()).toBe(1);
  });

  it('should not increment above max', () => {
    fixture.componentRef.setInput('max', 2);
    component.change(1); // 2
    component.change(1); // should stay 2
    expect(component.value()).toBe(2);
  });
});
