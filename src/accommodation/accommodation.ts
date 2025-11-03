import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.html',
  styleUrl: './accommodation.css',
  imports: [MatButtonModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accommodation {

}
