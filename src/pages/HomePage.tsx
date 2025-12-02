import ErrorState from "../components/ErrorState";
import HomePageShimmer from "../components/Shimmers/HomePageShimmer";
import { usePageTitle } from "../context/PageTitleContext";
import { useCallback, useEffect, useState } from "react";
import RadioGroup from "../components/RadioGroup";
import CustomerList from "../features/customers/components/CustomerList";
import { useCustomers } from "../features/customers/hooks/useCustomers";
import { UserRole } from "../types";
import { RADIO_OPTIONS } from "../constants";

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.ADMIN);
  const { customers, loading, error, refetch } = useCustomers();
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle("HomePage");
  }, [setTitle]);

  // Memoize onChange handler to prevent unnecessary re-renders
  const handleRoleChange = useCallback((value: UserRole) => {
    setSelectedRole(value);
  }, []);

  // Memoize retry handler
  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  if (loading) return <HomePageShimmer />;

  if (error) {
    return (
      <ErrorState
        title="Error fetching customers"
        message={error.message}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <>
      <RadioGroup
        label="User Types"
        value={selectedRole}
        onChange={handleRoleChange}
        options={RADIO_OPTIONS}
      />
      <div className="my-6 h-px w-full bg-gray-200" />
      <CustomerList customers={customers} selectedRole={selectedRole} />
    </>
  );
};

export default HomePage;
