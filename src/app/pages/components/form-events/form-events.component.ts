import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Event } from '../../interfaces/event.interface';
import Swal from 'sweetalert2'
import { catchError } from 'rxjs';

@Component({
  selector: 'app-form-events',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-events.component.html',
  styleUrl: './form-events.component.css'
})
export class FormEventsComponent {
  private fb=inject(FormBuilder)

  @Output()
  public onNewEvent:EventEmitter<Event>=new EventEmitter() 

  public myForm:FormGroup=this.fb.group({
    eventName:['',[Validators.required, Validators.minLength(4)]],
    eventDate:['',[Validators.required]],
    eventAttends:[0,[Validators.required]],
  })

  saveEvent():void{
    this.onNewEvent.emit(this.myForm.value)
    Swal.fire({
      title: 'Éxito',
      text: 'Evento registrado correctamente',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.myForm.reset({eventName:'',eventDate:'',attendees:''})
  }
}
