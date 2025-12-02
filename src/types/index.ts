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

export interface ListZellerCustomersResponse {
  listZellerCustomers: {
    items: ZellerCustomer[];
  };
}

export interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export interface PageTitleContextProps {
  title: string;
  setTitle: (title: string) => void;
}
