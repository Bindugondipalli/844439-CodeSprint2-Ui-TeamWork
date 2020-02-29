import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlcaeAppointmentComponent } from './plcae-appointment/plcae-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlcaeAppointmentComponent,
    ViewAppointmentComponent,
    ContactUsComponent,
    HeaderComponent,
    SideBarComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
