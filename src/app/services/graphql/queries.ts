import { gql } from 'apollo-angular';
/*

Product
  Queries
    1. getProducts
Bid
  Queries
    1. getBids() - returns all the bids
    2. TODO: getUserBids() returns all a user's bids.
    3. TODO: getProductBids() - retuns the bids on a product.

*/

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      _id
      name
      description
      photo
    }
  }
`;
TODO: "This query isn't really meaningful - implement the last two";
export const GET_BIDS = gql`
  query GetBids {
    getBids {
      productId
      tickets
      user
    }
  }
`;

TODO: 'implement';
export const GET_USER_BIDS = gql``;

TODO: 'Implement';
export const GET_PRODUCT_BIDS = gql``;
