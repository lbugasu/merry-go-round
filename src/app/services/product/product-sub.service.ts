import { Injectable } from '@angular/core';
import { gql, Subscription } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProductSubService extends Subscription {
  document = gql`
  subscription: productAdded {
    productAdded{
      name
      description
    }
  }
  `;
}
