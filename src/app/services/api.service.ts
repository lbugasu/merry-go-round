import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from './graphql/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}
  /**
   *
   * @param user - a user object
   * @returns an observable
   */
  signUp(user: User) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SignUp($user: UserInput!) {
          signup(user: $user)
        }
      `,
      variables: { user },
    });
  }
}
