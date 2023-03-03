import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { ContactDetails } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let contact = [
      new ContactDetails(1, "Rohan", "+917848521450", "rohan@gmail.com"),
      new ContactDetails(2, "Atul", "+919999905556", "atul@gmail.com"),
      new ContactDetails(3, "Wadra", "+911234335458", "wadra@gmail.com"),
      new ContactDetails(4, "Adarsh", "+919860385214", "adarsh@gmail.com")
    ];
    return {contact};
  }


  genId(contact: ContactDetails[]): number {
    return contact.length > 0 ? Math.max(...contact.map(hero => hero.id)) + 1 : 4;
  }
}
