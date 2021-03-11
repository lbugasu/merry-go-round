import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Bid } from './graphql/types';

@Injectable({
  providedIn: 'root',
})
export class BidService {
  constructor(private apollo: Apollo) {}

  makeBid(bid: Bid) {
    return this.apollo.mutate({
      mutation: gql`
        mutation MakeBid($bid: Bid) {
          mutation
          makeBid(bid: $bid) {
            productId
            tickets
            user
          }
        }
      `,
      variables: { bid },
    });
  }

  changeBid(bid: Bid) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ChangeBid($bid: Bid) {
          mutation
          changeBid(bid: $bid) {
            productId
            tickets
            user
          }
        }
      `,
      variables: { bid },
    });
  }

  deleteBid(bid: Bid) {
    return this.apollo.mutate({
      mutation: gql`
        mutation deleteBid($bid: Bid) {
          mutation
          deleteBid(bid: $bid) {
            productId
            tickets
            user
          }
        }
      `,
      variables: { bid },
    });
  }

  stopBidding() {}

  getUserBids() {}

  getProductBids() {}
}
