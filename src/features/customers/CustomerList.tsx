import React from "react";
import { ZellerCustomer } from "../../types";
import CustomerCard from "./CustomerCard";

interface CustomerListProps {
  customers: ZellerCustomer[];
  selectedRole: string;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedRole,
}) => {
  if (customers?.length === 0) {
    return <p>Customer data not found</p>;
  }

  const filteredCustomers: ZellerCustomer[] = customers.filter(
    (customer) => customer.role === selectedRole
  );

  return (
    <>
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        {selectedRole === "ADMIN" ? "Admin" : "Manager"} Users
      </h2>
      <ul className="flex flex-col gap-5">
        {filteredCustomers?.map((customer: ZellerCustomer) => (
          <li key={customer.id}>
            <CustomerCard customer={customer} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CustomerList;
