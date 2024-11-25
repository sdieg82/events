import { Component } from '@angular/core';
import { FormEventsComponent } from "../form-events/form-events.component";
import { ListEventsComponent } from "../list-events/list-events.component";

@Component({
  selector: 'app-main-event-page',
  standalone: true,
  imports: [FormEventsComponent, ListEventsComponent],
  templateUrl: './main-event-page.component.html',
  styleUrl: './main-event-page.component.css'
})
export class MainEventPageComponent {

  addEvent(event:any):void{
    console.log('desde el evento ',event)
  }

}
