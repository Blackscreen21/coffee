import {Component, signal} from '@angular/core';
import { BrewingForm } from '../../brewing-form/brewing-form';


@Component({
  selector: 'app-frenchpress',
  imports: [BrewingForm],
  templateUrl: './frenchpress.html',
  styleUrl: './frenchpress.css',
})
export class Frenchpress {
  waterVolume = signal(NaN);

}
