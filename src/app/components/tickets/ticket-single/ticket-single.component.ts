import { Component, OnInit, Input } from '@angular/core';
import { Ticket} from '../../../models/Ticket';


@Component({
  selector: 'app-ticket-single',
  templateUrl: './ticket-single.component.html',
  styleUrls: ['./ticket-single.component.scss']
})
export class TicketSingleComponent implements OnInit {

  @Input() ticket: Ticket;
  @Input() ticketStyle: string;




  constructor() { }

  ngOnInit() {
    console.log(this.ticketStyle);
  }

}
