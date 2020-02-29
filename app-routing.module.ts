import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlcaeAppointmentComponent } from './plcae-appointment/plcae-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';


const routes: Routes = [
  {path:"hm" ,component:HomeComponent},
  {path:"pc" ,component:PlcaeAppointmentComponent},
  {path:"vc" ,component: ViewAppointmentComponent },
  {path:"cs" ,component:ContactUsComponent},
  {path:'',component:DashBoardComponent},
  {path:'hs',component:HeaderComponent},
  {path:'side',component:SideBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
