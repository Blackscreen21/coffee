import { Component, signal } from '@angular/core';
import { BrewingForm } from '../../brewing-form/brewing-form';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-v60',
  imports: [BrewingForm, DecimalPipe],
  templateUrl: './v60.html',
  styleUrl: './v60.css',
})
export class V60 {
  waterVolume = signal(0);
}
