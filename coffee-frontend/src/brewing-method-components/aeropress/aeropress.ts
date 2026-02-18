import {Component, signal} from '@angular/core';
import { BrewingForm } from '../../brewing-form/brewing-form';


@Component({
  selector: 'app-aeropress',
  imports: [BrewingForm],
  templateUrl: './aeropress.html',
  styleUrl: './aeropress.css',
})
export class Aeropress {
  waterVolume = signal(0);
  coldWaterVolume = signal(0);
}
