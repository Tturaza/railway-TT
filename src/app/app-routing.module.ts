import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainListComponent } from './train-list/train-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { CardInformationComponent } from './card-information/card-information.component';
import { FinalTicketComponent } from './final-ticket/final-ticket.component';
import { CheckingComponent } from './checking/checking.component';


const routes: Routes = [
  {path : "" , component : HomeComponent },
  {path : "trains", component :  TrainListComponent},
  {path: "bookT/:trainNumber" , component: BookTicketComponent},
  {path: "cardInfo" , component:CardInformationComponent},
  {path: "ticket" , component:FinalTicketComponent},
  {path: "check" , component:CheckingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
