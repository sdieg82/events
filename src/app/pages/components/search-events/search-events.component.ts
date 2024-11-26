import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-events',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-events.component.html',
  styleUrl: './search-events.component.css'
})
export class SearchEventsComponent {
  
  @ViewChild('txtEventInput')
  public txtInput!:ElementRef<HTMLInputElement>

  @Output()
  public emitSearch:EventEmitter<string>=new EventEmitter()


  inputEvent():void{
    const newInput=this.txtInput.nativeElement.value
    this.emitSearch.emit(newInput)
  }

 
}
