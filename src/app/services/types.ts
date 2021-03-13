export interface User {
  username: string;
  email: string;
  password: string;
}

export interface Credentials {
  username: string;
  password: string;
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
