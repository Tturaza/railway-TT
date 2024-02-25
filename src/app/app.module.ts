import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainListComponent } from './train-list/train-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardInformationComponent } from './card-information/card-information.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FinalTicketComponent } from './final-ticket/final-ticket.component';
import { MyPipePipe } from './my-pipe.pipe';
import {NgxPrintModule} from 'ngx-print'
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { CheckingComponent } from './checking/checking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
   

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainListComponent,
    CardInformationComponent,
    FooterComponent,
    HeaderComponent,
    FinalTicketComponent,
    MyPipePipe,
    BookTicketComponent,
    CheckingComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxPrintModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



