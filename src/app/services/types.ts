export interface User {
  username: string;
  email: string;
  password: string;
}

export class Credentials {
  constructor(private username: string, private password: string) {}
}

export interface Product {
  name: string;
  description: string;
  photo: string;
  owner: string;
}
export interface Bid {
  productId: string;
  tickets: number;
  user: string;
}
