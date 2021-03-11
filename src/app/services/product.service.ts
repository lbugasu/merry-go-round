import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apollo: Apollo) {}

  getProducts() {
    return this.apollo.watchQuery({
      query: gql`
        query GetProducts {
          getProducts {
            _id
            name
            description
            photo
          }
        }
      `,
    });
  }
}
