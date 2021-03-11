export class User {
  constructor(
    private username: string,
    private email: string,
    private password: string
  ) {}
}

export class Credentials {
  constructor(private username: string, private password: string) {}
}

export class Product {
  constructor(
    private name: string,
    private description: string,
    private photo: string,
    private owner: string
  ) {}
}
