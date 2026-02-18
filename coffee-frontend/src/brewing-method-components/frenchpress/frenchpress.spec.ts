import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frenchpress } from './frenchpress';

describe('Frenchpress', () => {
  let component: Frenchpress;
  let fixture: ComponentFixture<Frenchpress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frenchpress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frenchpress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
