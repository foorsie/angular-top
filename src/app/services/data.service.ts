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
        id : 1076,
        ticketID : 1766757,
        vinShort : "H013780",
        vinLongPrefix : "WBA1T51080",
        partnerNumber : "00006",
        outletNumber : "1",
        buNumber : null,
        brand : "BM",
        countryCode : "GB",
        ticketType : "ASC",
        ticketState : "CANCELLED",
        tipStatus : "DONE",
        classification : "TSP",
        ticketPriority : "0",
        contactPriority : null,
        createTimestamp : "2019-05-06T07:41:06.56Z",
        escalationTimestamp : "2020-01-15T07:41:06.765Z",
        guid : null,
        closureDate : "2019-05-28",
        dueDate : null,
        keyInfo : {
          id : 14622,
          ticketID : 1766757,
          mileage : 48217,
          averageDistance : 360,
          coolantTemperature : 68,
          outsideTemperature : 16,
          fuelTankLevel : 31,
          batteryVoltage : 14.54,
          keyReadInDate : "2019-05-28T11:10:19Z",
          model : "X4 xDrive20d XX21",
          colourCode : "0475",
          upholstery : "LUCX",
          firstRegistration : "2016-08-29",
          checkControlMessages : [ ],
          conditionBasedServices : [ ]
        },
        accidentInfo : null,
        driverInfo : null,
        customer : null,
        assignedDealer : {
          id : 14972,
          ticketID : 1766757,
          dealerName : "BMW UK Ltd",
          dealerPartnerNo : "00006",
          dealerSubsidiaryNo : "1",
          street : "Summit ONE",
          zipCode : "GU14 0FB",
          city : "Farnborough",
          state : "Hants",
          countryCodeISO : "GB",
          portfolioCode : "B0,B1,BI,MI",
          portfolioName : "BMW Cars,BMW Motorcycle,BMW i,MINI",
          businessPartnerID : "00009867",
          email : null,
          businessFax : "+44 1252 920001",
          businessPhone : "+44 1252 920000"
        },
        homeDealer : {
          id : 4461,
          ticketID : 1766757,
          dealerName : "BMW (UK) Ltd. ICS - DIRECT SUPPLY",
          dealerPartnerNo : "00006",
          dealerSubsidiaryNo : "6",
          street : "Summit ONE",
          zipCode : "GU14 0FB",
          city : "Farnborough",
          state : "Hampshire",
          countryCodeISO : "GB",
          portfolioCode : "B0,B1,MI",
          portfolioName : "BMW Cars,BMW Motorcycle,MINI",
          businessPartnerID : "00196051",
          email : null,
          businessFax : "+44 1252 920001",
          businessPhone : "+44 1252 920000"
        },
        resolutionReason : {
          id : 7,
          description : "Customer not reached via phone so E-Mail sent",
          ticketState : "CANCELLED",
          cancellationReasonId : 7,
          ticketResolutionId : 2,
          ticketResolutionDescription : "No Appointment Scheduled",
          ticketResolutionKpiCode : "No_Appointment_Scheduled"
        },
        lessor : {
          id : 1,
          name : "Agility"
        },
        retailer : null,
        agentNumber : "qxu6124",
        agentName : "Le_Clue Basson",
        pendingRemarks : null
      },
      {
        id : 1133,
        ticketID : 1766756,
        vinShort : "H013780",
        vinLongPrefix : "WBA1T51080",
        partnerNumber : "00006",
        outletNumber : "1",
        buNumber : null,
        brand : "BM",
        countryCode : "GB",
        ticketType : "ASC",
        ticketState : "ASSIGNED_TO_DEALER",
        tipStatus : "DONE",
        classification : "TSP",
        ticketPriority : "0",
        contactPriority : null,
        createTimestamp : "2019-05-06T07:40:18.682Z",
        escalationTimestamp : "2020-01-15T07:40:18.774Z",
        guid : null,
        closureDate : "2019-05-28",
        dueDate : null,
        keyInfo : {
          id : 5430,
          ticketID : 1766756,
          mileage : 59026,
          averageDistance : 230,
          coolantTemperature : 88,
          outsideTemperature : 9,
          fuelTankLevel : 21,
          batteryVoltage : 14.61,
          keyReadInDate : "2019-05-28T08:23:37Z",
          model : "320D 3D42",
          colourCode : "0B39",
          upholstery : "LCSW",
          firstRegistration : "2013-10-14",
          checkControlMessages : [ ],
          conditionBasedServices : [ ]
        },
        accidentInfo : null,
        driverInfo : null,
        customer : null,
        assignedDealer : {
          id : 7756,
          ticketID : 1766756,
          dealerName : "Chandlers Hailsham",
          dealerPartnerNo : "10056",
          dealerSubsidiaryNo : "1",
          street : null,
          zipCode : null,
          city : null,
          state : null,
          countryCodeISO : null,
          portfolioCode : null,
          portfolioName : null,
          businessPartnerID : null,
          email : null,
          businessFax : null,
          businessPhone : null
        },
        homeDealer : {
          id : 4554,
          ticketID : 1766756,
          dealerName : "BMW (UK) Ltd. ICS - DIRECT SUPPLY",
          dealerPartnerNo : "00006",
          dealerSubsidiaryNo : "6",
          street : "Summit ONE",
          zipCode : "GU14 0FB",
          city : "Farnborough",
          state : "Hampshire",
          countryCodeISO : "GB",
          portfolioCode : "B0,B1,MI",
          portfolioName : "BMW Cars,BMW Motorcycle,MINI",
          businessPartnerID : "00196051",
          email : null,
          businessFax : "+44 1252 920001",
          businessPhone : "+44 1252 920000"
        },
        resolutionReason : {
          id : 3,
          description : "Ticket reassigned to existing dealer",
          ticketState : "ASSIGNED_TO_DEALER",
          cancellationReasonId : null,
          ticketResolutionId : 1,
          ticketResolutionDescription : "Customer Accepts Request",
          ticketResolutionKpiCode : "Customers_Accepts_Request"
        },
        lessor : {
          id : 1,
          name : "Agility"
        },
        retailer : null,
        agentNumber : "qxu6124",
        agentName : "Le_Clue Basson",
        pendingRemarks : null,
      }
    ]
  }

  getTickets(): Ticket[]{
    return this.tickets;
  }
}
