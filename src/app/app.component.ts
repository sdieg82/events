import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainEventPageComponent } from "./pages/components/main-event-page/main-event-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainEventPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'events';
}
