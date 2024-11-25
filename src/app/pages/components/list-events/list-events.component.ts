import { Component, Input } from '@angular/core';
import { Event } from '../../interfaces/event.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {


  @Input()
  public listEvent:Event[]=[{
    id:"",
    eventName:"",
    eventDate:"",
    eventAttends:0
  }]

  


}
