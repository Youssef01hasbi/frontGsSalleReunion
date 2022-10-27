import{NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PersonnesComponent} from "./Personnes/personnes.component";
import {SallesComponent} from "./Salles/salles.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {LoginComponent} from "./login/login.component";
import {DepartmentsComponent} from "./departments/departments.component";
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ProfilComponent} from "./profil/profil.component";
import {EditPComponent} from "./edit-p/edit-p.component";

const routes : Routes =[
  {
    path:"personne",component: PersonnesComponent
  },
  {
    path:"salle",component:SallesComponent
  },
  {
    path:"reservation",component:ReservationComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"departments",component: DepartmentsComponent
  },
  {
    path:"home",component:HomeComponent,
  },{
   path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:"contactUs",component:ContactUsComponent
  },{path:"profil",component:ProfilComponent},
  {path:"editP",component:EditPComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule { }
