import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Credentials, User } from './graphql/types';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  signOut(username: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SignOut($username: string) {
          signout(username: $username)
        }
      `,
      variables: { username },
    });
  }

  signIn(credentials: Credentials) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SignIn($credentials: Credentials) {
          signin(credentials: $credentials)
        }
      `,
      variables: { credentials },
    });
  }
}
