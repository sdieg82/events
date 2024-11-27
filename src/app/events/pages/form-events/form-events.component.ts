import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Event } from '../../interfaces/event.interface';
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2'
import { catchError } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { AbstractControl, FormControl } from '@angular/forms';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-form-events',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-events.component.html',
  styleUrl: './form-events.component.css'
})
export class FormEventsComponent implements OnChanges {
  private fb=inject(FormBuilder)
  public today: string;

  @Input()
  public editId:string=''

  @Output()
  public onNewEvent:EventEmitter<Event>=new EventEmitter() 
  constructor(
    private eventService:EventService
  ){
    this.today = new Date().toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  } 
  ngOnChanges(changes: SimpleChanges) {
    if (changes['editId'] && this.editId !== null) {
      const elemento = this.eventService.updateEventById(this.editId); // Busca el elemento en el servicio
      if (elemento) {
        this.myForm.reset(elemento); // Llena el formulario con los datos
      }
    }
  }
  public myForm:FormGroup=this.fb.group({
    id:[uuid()],
    eventName:['',[Validators.required, Validators.minLength(4)]],
    eventDate:['',[Validators.required,this.futureDateValidator]],
    eventAttends:[0,[Validators.required,Validators.min(1)]],
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

  futureDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value) {
      return null; // Si no hay valor, no hay error
    }
  
    // Convertir el valor a una fecha
    const selectedDate = new Date(control.value); // `control.value` es un string en formato 'YYYY-MM-DD'
    const today = new Date();
  
    // Establecer las horas de hoy a 00:00:00 para comparar solo la fecha
    today.setHours(0, 0, 0, 0);
  
    // Validar si la fecha seleccionada es anterior a la fecha actual
    if (selectedDate < today) {
      return { invalidDate: true }; // Error: Fecha inválida
    }
    return null; // Fecha válida
  }
}
