export interface Ticket {

  type: string,
  number: string,
  retailer?: string,
  retailerCode?: string,
  descriptionGeneric?: string,
  descriptionSpesific?: string,
  createdDate: string,
  closureDate: string,
  closedBy?: string,
  vehicleInfo: {
    brand: string,
    vehicle: string,
    chassisNumber: string,
    serviceType: string,
  }


}
