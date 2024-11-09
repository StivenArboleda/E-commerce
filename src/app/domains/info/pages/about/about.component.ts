import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterComponent } from './../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    //this.duration.set(input.valueAsNumber) 
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    //this.message.set(input.value) 
  }
}