import {Component, signal} from '@angular/core';
import {BrewingForm} from '../brewing-form/brewing-form';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-kalita',
  imports: [
    BrewingForm,
    DecimalPipe
  ],
  templateUrl: './kalita.html',
  styleUrl: './kalita.css',
})
export class Kalita {
  waterVolume = signal(0);

}
