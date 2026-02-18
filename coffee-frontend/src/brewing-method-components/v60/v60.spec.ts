import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V60 } from './v60';

describe('V60', () => {
  let component: V60;
  let fixture: ComponentFixture<V60>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V60]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V60);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
