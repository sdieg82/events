import { Component } from '@angular/core';
import { FormEventsComponent } from "../form-events/form-events.component";
import { ListEventsComponent } from "../list-events/list-events.component";
import { Event } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';
import { SearchEventsComponent } from "../search-events/search-events.component";

@Component({
  selector: 'app-main-event-page',
  standalone: true,
  imports: [FormEventsComponent, ListEventsComponent, SearchEventsComponent],
  templateUrl: './main-event-page.component.html',
  styleUrl: './main-event-page.component.css'
})
export class MainEventPageComponent {

  constructor (
    private eventService:EventService
  ){}

  get events():Event[]{
    return [...this.eventService.events]
  }

  addEvent(event:Event):void{
    this.eventService.addEvent(event)
  }

  deleteEventById(id:string):void{
    this.eventService.deleteById(id)
  }
  updateEventById(id:string):void{
    this.eventService.updateEventById(id)
  }

  searchInput(event:string):void{
    this.eventService.searchInput(event)
  }

}
