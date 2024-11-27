import { Routes } from '@angular/router';
import { MainEventPageComponent } from './events/pages/main-event-page/main-event-page.component';
import { ListEventsComponent } from './events/pages/list-events/list-events.component';

export const routes: Routes = [
    {path:'main', component:MainEventPageComponent},
    {path:'list', component:ListEventsComponent},
    {path:'**', redirectTo:'main'},

];
