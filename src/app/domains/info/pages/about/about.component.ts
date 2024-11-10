import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './../../../shared/components/counter/counter.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeaderComponent],
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