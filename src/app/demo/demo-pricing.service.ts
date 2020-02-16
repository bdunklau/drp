import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection/*, CollectionReference*/ } from '@angular/fire/firestore';
import { DemoPricingModel } from './demo-pricing/demo-pricing.model';


@Injectable({
  providedIn: 'root'
})
export class DemoPricingService {


  pricing: {location: string, price: number}[] = [
    {location:'loc 1', price: 1},
    {location:'loc 2', price: 2},
    {location:'loc 3', price: 9}
  ];

  cityPricing: DemoPricingModel;


  constructor(private afs: AngularFirestore,) {
    console.log('DemoPricingService: constructor')
  }

  getPricing(time: {hour: number, minute: number}) {
    return this.pricing;
  }


  async getPricingForCity(city: string) {
    var cityDoc = await this.afs.collection('cities').doc(city).ref.get();
    // const team = new Team();
    // team.id = teamDoc.data().id;
    // team.name = teamDoc.data().name;
    // team.created = teamDoc.data().created;
    // team.creatorId = teamDoc.data().creatorId;
    // team.creatorName = teamDoc.data().creatorName;
    // team.creatorPhone = teamDoc.data().creatorPhone;
    // team.leaderCount = teamDoc.data().leaderCount; // e2e testing caught this omission :)
    // team.memberCount = teamDoc.data().memberCount; // e2e testing caught this omission :)
    console.log('cityDoc.data() = ', cityDoc.data());
    let cityPricing = new DemoPricingModel(cityDoc.data())
    console.log('cityPricing = ', cityPricing);
    return cityPricing;
  }
}
