import { gql } from 'apollo-angular';
/*
User Mutations
  1. signup
  2. signin
  3. signout

Product
  Queries
    1. getProducts
  Mutatiions
    1. addProduct
    2. award

Bid
  Queries
    1. getBids() - returns all the bids
    2. TODO: getUserBids() returns all a user's bids.
    3. TODO: getProductBids() - retuns the bids on a product.
  Mutations
    1. makeBid - when a user makes a bid
    2. changeBid - when a user changes a bid.
    3. deleteBid - when a user deletes a bid.
    4. TODO: stopBidding - disallow any users from bidding.
*/

/**
 * Sign up Mutation - returns a JWT
 */
export const SIGN_UP = gql`
  mutation signUp($user: User) {
    signup(user: $user)
  }
`;

/**
 * Sign in mutation - returns a jwt
 */
TODO: 'What if the mutation fails?';
export const SIGN_IN = gql`
  mutation SignIn($credentials: Credentials) {
    signin(credentials: $credentials)
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut($username: string) {
    signout(username: $username)
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($product: Product) {
    mutation
    addProduct(product: $product) {
      name
      description
      photo
      owner
    }
  }
`;

export const AWARD = gql``;

export const MAKE_BID = gql``;

export const CHANGE_BID = gql``;

export const DELETE_BID = gql``;

export const STOP_BIDDING = gql``;
