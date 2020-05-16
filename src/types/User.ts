import { Address } from "./Address";

export interface User {
  name: string;
  username: string;
  email: string;
  address: Address | null;
}
