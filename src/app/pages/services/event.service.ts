import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { 
    this.readLocalStorage()
  }

  
  public events:Event[]=[
    { 
      id:uuid(),
      eventName:'Convención',
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

  private saveToLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this.events))
  }
  private readLocalStorage(): void {
    const savedEvents = localStorage.getItem('history');
    if (savedEvents) {
      this.events = JSON.parse(savedEvents);
      this.eventsCopy = [...this.events]; // Sincronizar lista filtrada
    }
  }

  addEvent(event:Event):void{
    const newEvent:Event={...event}
    this.events.push(newEvent);
    this.eventsCopy=this.events
    this.saveToLocalStorage()
  }

  public eventsCopy:Event[]=this.events

  deleteById(id:string):void{
    if(!id)  return 
    const deleteEvent=this.events.filter((event)=>event.id!==id)
    this.events=deleteEvent
    this.eventsCopy=this.events
    this.saveToLocalStorage()
  }

  updateEventById(id:string):void{
    if(!id)  return
  }

  searchInput(searchTag:string):Event[] | undefined{
    
    if(searchTag==='') return this.eventsCopy=this.events
    this.eventsCopy=this.events.filter((tag)=>tag.eventName===searchTag)
    console.log('Retorna el firltrado',this.eventsCopy)
    return (this.eventsCopy)
    
  }
}
