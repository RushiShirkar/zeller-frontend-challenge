import ErrorState from "../components/ErrorState";
import HomePageShimmer from "../components/Shimmers/HomePageShimmer";
import { usePageTitle } from "../context/PageTitleContext";
import { useEffect, useState } from "react";
import RadioGroup from "../components/RadioGroup";
import CustomerList from "../features/customers/CustomerList";
import { useCustomers } from "../hooks/useCustomers";
import { UserRole } from "../types";

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.ADMIN);
  const { customers, loading, error, refetch } = useCustomers();
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
        onChange={(value) => setSelectedRole(value as UserRole)}
        options={[
          { label: "Admin", value: UserRole.ADMIN },
          { label: "Manager", value: UserRole.MANAGER },
        ]}
      />
      <div className="my-6 h-px w-full bg-gray-200" />
      <CustomerList customers={customers} selectedRole={selectedRole} />
    </>
  );
};

export default HomePage;
