export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
}

export interface ZellerCustomer {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}
