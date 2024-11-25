import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  
  public events:Event[]=[
    { 
      id:uuid(),
      eventName:'Convención ',
      eventDate: '2024-11-05',
      eventAttends:5
    },
    { 
      id:uuid(),
      eventName:'Asesoría cliente',
      eventDate: '2024-12-12',
      eventAttends:10
    },
  ]

  addEvent(event:Event):void{
    const newEvent:Event={...event}
    this.events.push(newEvent);
    console.log(this.events)
  }
}
