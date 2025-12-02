import React, { memo, useMemo } from "react";
import { UserRole, ZellerCustomer } from "../../../types";
import CustomerCard from "./CustomerCard";
import { getRoleLabel } from "../../../utils";

interface CustomerListProps {
  customers: ZellerCustomer[];
  selectedRole: UserRole;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedRole,
}) => {
  const filteredCustomers = useMemo(() => {
    return customers?.filter((customer) => customer.role === selectedRole) ?? [];
  }, [customers, selectedRole]);

  if (customers?.length === 0) {
    return <p>Customer data not found</p>;
  }

  return (
    <section aria-labelledby="user-role-heading">
      <h2 id="user-role-heading" className="text-lg font-semibold text-gray-900 mb-5">
        {getRoleLabel(selectedRole)} Users
      </h2>
      <ul className="flex flex-col gap-5">
        {filteredCustomers.map((customer: ZellerCustomer) => (
          <li key={customer.id}>
            <CustomerCard customer={customer} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(CustomerList);
