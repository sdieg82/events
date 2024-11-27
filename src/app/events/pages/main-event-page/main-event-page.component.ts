import { Component } from '@angular/core';
import { FormEventsComponent } from "../form-events/form-events.component";
import { ListEventsComponent } from "../list-events/list-events.component";
import { Event } from '../../interfaces/event.interface';
import { EventService } from '../../services/event.service';
import { SearchEventsComponent } from "../../components/search-events/search-events.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";

@Component({
  selector: 'app-main-event-page',
  standalone: true,
  imports: [FormEventsComponent, ListEventsComponent, SearchEventsComponent, TopBarComponent],
  templateUrl: './main-event-page.component.html',
  styleUrl: './main-event-page.component.css'
})
export class MainEventPageComponent {

  public eventId:string=''
  
  constructor (
    private eventService:EventService
  ){}

  get events():Event[]{
    return [...this.eventService.eventsCopy]
  }

  addEvent(event:Event):void{
    this.eventService.addEvent(event)
  }

  deleteEventById(id:string):void{
    this.eventService.deleteById(id)
  }
  updateEventById(id:string):void{
    this.eventId=id
  }

  searchInput(event:string):void{
    this.eventService.searchInput(event)
  }

}
