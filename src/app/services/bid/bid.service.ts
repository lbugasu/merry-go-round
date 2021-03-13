import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Bid } from '../types';

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
            _id
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
            _id
            productId
            tickets
            user
          }
        }
      `,
      variables: { bid },
    });
  }

  getUserBids(username: string) {
    return this.apollo.watchQuery({
      query: gql`
        query GetUserBids($username: String) {
          getUserBid(username: $username) {
            _id
            productId
            tickets
            user
          }
        }
      `,
      variables: { username: username },
    });
  }

  getProductBids(productId: string) {
    return this.apollo.watchQuery({
      query: gql`
        query GetProductBids($productId: String) {
          getProductBid(productId: $productId) {
            _id
            productId
            tickets
            user
          }
        }
      `,
      variables: { productId: productId },
    });
  }

  stopBidding() {}
}
