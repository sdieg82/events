import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../interfaces/event.interface';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

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

  @Output()
  public deleteEvent: EventEmitter<string> = new EventEmitter();
  @Output()
  public editIdEmitter:EventEmitter<string>=new EventEmitter();
  
  
  deleteEventById(id:string):void{
    if(!id) return
    Swal.fire({
      title: 'Advertencia',
      text: '¿Está seguro de cancelar el evento registrado?',
      icon: 'warning',
      showCancelButton: true, // Para agregar un botón de cancelación
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Solo se ejecuta si el usuario presiona OK
        this.deleteEvent.emit(id);
      }
    });
    

    
  }

  updateEventById(id:string):void{
    if(!id)return
    this.editIdEmitter.emit(id)
  }

  

}
