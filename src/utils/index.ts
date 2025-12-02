import { UserRole } from "../types";

// Maps UserRole enum to label
export const getRoleLabel = (role: UserRole): string => {
    return role === UserRole.ADMIN ? "Admin" : "Manager";
};
