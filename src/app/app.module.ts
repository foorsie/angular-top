import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/stats/stats.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketSingleComponent } from './components/tickets/ticket-single/ticket-single.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TicketsFilterComponent } from './components/tickets/tickets-filter/tickets-filter.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatsComponent,
    TicketsComponent,
    TicketSingleComponent,
    HeaderComponent,
    SidenavComponent,
    TicketsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
