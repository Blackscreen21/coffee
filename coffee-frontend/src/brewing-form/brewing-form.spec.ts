import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewingForm } from './brewing-form';

describe('BrewingForm', () => {
  let component: BrewingForm;
  let fixture: ComponentFixture<BrewingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrewingForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrewingForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
