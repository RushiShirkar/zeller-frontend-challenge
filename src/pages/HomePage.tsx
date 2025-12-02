import { useQuery } from "@apollo/client/react";
import { ListZellerCustomers } from "../graphql/queries";
import { ListZellerCustomersResponse } from "../types";
import ErrorState from "../components/ErrorState";
import HomePageShimmer from "../components/Shimmers/HomePageShimmer";
import { usePageTitle } from "../context/PageTitleContext";
import { useEffect, useState } from "react";
import RadioGroup from "../components/RadioGroup";
import CustomerList from "../features/customers/CustomerList";

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState<"ADMIN" | "MANAGER">(
    "ADMIN"
  );
  const { data, loading, error, refetch } =
    useQuery<ListZellerCustomersResponse>(ListZellerCustomers);
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle("Customers");
  }, [setTitle]);

  if (loading) return <HomePageShimmer />;

  if (error) {
    return (
      <ErrorState
        title="Error fetching customers"
        message={error.message}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <>
      <RadioGroup
        label="User Types"
        value={selectedRole}
        onChange={setSelectedRole}
        options={[
          { label: "Admin", value: "ADMIN" },
          { label: "Manager", value: "MANAGER" },
        ]}
      />
      <div className="my-6 h-px w-full bg-gray-200" />
      <CustomerList
        customers={data?.listZellerCustomers?.items ?? []}
        selectedRole={selectedRole}
      />
    </>
  );
};

export default HomePage;
