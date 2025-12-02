import React from "react";
import { ZellerCustomer } from "../../types";

interface CustomerCardProps {
  customer: ZellerCustomer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  const initial: string = customer?.name.charAt(0).toUpperCase();
  const role: string = customer.role === "ADMIN" ? "Admin" : "Manager";

  return (
    <div className="flex items-center space-x-4">
      {/* Avatar */}
      <div className="h-12 w-12 rounded-md bg-blue-50 flex items-center justify-center">
        <span className="text-blue-600 font-semibold text-lg">{initial}</span>
      </div>

      {/* Name + Role */}
      <div className="flex flex-col">
        <span className="text-gray-900 font-medium">{customer?.name}</span>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </div>
  );
};

export default CustomerCard;
