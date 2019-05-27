import { Injectable } from '@angular/core';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tickets: Ticket[];

  constructor() {

    this.tickets = [
      {
        type: 'Closed',
        number: '66585411',
        retailer: 'BMW Midrand',
        retailerCode: '00212',
        descriptionGeneric: 'Customer accetps request',
        descriptionSpesific: 'Reassigned to new dealer',
        createdDate: '01/02/2018',
        closureDate: '12/02/2018',
        closedBy: 'Pam Beezly',
        vehicleInfo: {
          brand: 'BMW',
          vehicle: '118i MSport 5door StopStart automatic',
          chassisNumber: 'WBA5536DD932',
          serviceType: 'Automatic Service Call',
        }
      },
      {
        type: 'Closed',
        number: '66585412',
        retailer: 'BMW Menlyn Maine',
        retailerCode: '00222',
        descriptionGeneric: 'Customer not reached',
        descriptionSpesific: 'Customer not reached via phone so E-Mail sent',
        createdDate: '01/02/2018',
        closureDate: '11/02/2018',
        closedBy: 'Jim Halpert',
        vehicleInfo: {
          brand: 'MINI',
          vehicle: 'Countryman S 3door sport Package EffiencyDrive Auto',
          chassisNumber: 'WBA3434DR553',
          serviceType: 'Battery Guard',
        }
      }
    ]
  }

  getTickets(): Ticket[]{
    return this.tickets;
  }
}
