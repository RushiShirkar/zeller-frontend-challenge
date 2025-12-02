export interface ZellerCustomer {
  id: string;
  email: string;
  name: string;
  role: string;
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
