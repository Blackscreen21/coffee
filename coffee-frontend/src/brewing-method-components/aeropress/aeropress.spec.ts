import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aeropress } from './aeropress';

describe('Aeropress', () => {
  let component: Aeropress;
  let fixture: ComponentFixture<Aeropress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aeropress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aeropress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
