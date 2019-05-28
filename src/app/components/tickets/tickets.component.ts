import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Ticket } from '../../models/Ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];
  ticketStyle: string = 'grid';

  constructor(private dataService: DataService ) { }

  ngOnInit() {

      this.tickets = this.dataService.getTickets();

  }

}
