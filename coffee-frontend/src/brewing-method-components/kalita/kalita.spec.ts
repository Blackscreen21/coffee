import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kalita } from './kalita';

describe('Kalita', () => {
  let component: Kalita;
  let fixture: ComponentFixture<Kalita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kalita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kalita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
