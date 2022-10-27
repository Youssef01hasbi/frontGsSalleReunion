import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PersonneService} from "./Personnes/Personne.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SallesComponent } from './Salles/salles.component';
import { PersonnesComponent } from './Personnes/personnes.component';
import {AppRoutingModule} from "./app-routing.module";
import { ReservationComponent } from './reservation/reservation.component';
import { LoginComponent } from './login/login.component';
import { DepartmentsComponent } from './departments/departments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfilComponent } from './profil/profil.component';
import { EditPComponent } from './edit-p/edit-p.component';



@NgModule({
  declarations: [
    AppComponent,
    SallesComponent,
    PersonnesComponent,
    ReservationComponent,
    LoginComponent,
    DepartmentsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ProfilComponent,
    EditPComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
