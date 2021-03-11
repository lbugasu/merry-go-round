import { gql } from 'apollo-angular';
/*
User Mutations
  1. signup
  2. signin
  3. signout

Product
  Mutatiions
    1. addProduct
    2. award

Bid
  Mutations
    1. makeBid - when a user makes a bid
    2. changeBid - when a user changes a bid.
    3. deleteBid - when a user deletes a bid.
    4. TODO: stopBidding - disallow any users from bidding.
*/

/**
 * Sign up Mutation - returns a JWT
 */
export const SIGN_UP = `
  mutation SignUp($user: UserInput!) {
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

export const MAKE_BID = gql`
  mutation MakeBid($bid: Bid) {
    mutation
    makeBid(bid: $bid) {
      productId
      tickets
      user
    }
  }
`;

export const CHANGE_BID = gql`
  mutation ChangeBid($bid: Bid) {
    mutation
    changeBid(bid: $bid) {
      productId
      tickets
      user
    }
  }
`;

TODO: 'There are other references that need to be deleted';
export const DELETE_BID = gql`
  mutation deleteBid($bid: Bid) {
    mutation
    deleteBid(bid: $bid) {
      productId
      tickets
      user
    }
  }
`;

TODO: 'Implement this';
export const STOP_BIDDING = gql``;
