import { useQuery } from "@apollo/client/react";
import { ListZellerCustomers } from "../../../graphql/queries";
import { ZellerCustomer } from "../../../types";

interface ListZellerCustomersResponse {
    listZellerCustomers: {
        items: ZellerCustomer[];
    };
}

export const useCustomers = () => {
    const { data, loading, error, refetch } =
        useQuery<ListZellerCustomersResponse>(ListZellerCustomers);

    const customers: ZellerCustomer[] = data?.listZellerCustomers?.items ?? [];

    return {
        customers,
        loading,
        error,
        refetch,
    };
};
