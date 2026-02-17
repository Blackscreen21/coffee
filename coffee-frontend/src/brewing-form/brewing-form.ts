import { Component, Input, signal, computed, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-brewing-form',
  templateUrl: './brewing-form.html',
  styleUrls: ['./brewing-form.css'],
  imports: [DecimalPipe],
})
export class BrewingForm {
  @Input() coffeeType: string = 'Coffee';
  @Input() ratio: number = 16.667;

  waterVolume = signal(NaN);
  coffeeGrams = computed(() => {
    const water = this.waterVolume();
    return water > 0 ? water / this.ratio : 0;
  });

  waterVolumeChange = output<number>();

  onInput(value: number) {
    this.waterVolume.set(value);
    this.waterVolumeChange.emit(value);
  }
}
