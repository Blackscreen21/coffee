import {Component, signal} from '@angular/core';
import { BrewingForm } from '../../brewing-form/brewing-form';
import {DecimalPipe} from '@angular/common';


@Component({
  selector: 'app-frenchpress',
  imports: [BrewingForm, DecimalPipe],
  templateUrl: './frenchpress.html',
  styleUrl: './frenchpress.css',
})
export class Frenchpress {
  waterVolume = signal(NaN);

}
