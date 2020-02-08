import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoPricingService {


  pricing: {location: string, price: number}[] = [
    {location:'loc 1', price: 1},
    {location:'loc 2', price: 2},
    {location:'loc 3', price: 9}
  ];


  constructor() { }

  getPricing() {
    return this.pricing;
  }
}
