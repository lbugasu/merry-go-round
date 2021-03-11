import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SIGN_UP } from './graphql/mutations';
import { User } from './graphql/types';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  // Sign Up Mutation
  signUp(user: User) {
    this.apollo.mutate({
      mutation: SIGN_UP,
      variables: user,
    });
  }
}
