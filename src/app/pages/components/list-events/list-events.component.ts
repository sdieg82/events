import { Component, Input } from '@angular/core';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-list-events',
  standalone: true,
  imports: [],
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {


  @Input()
  public listEvent:Event[]=[]

  


}
