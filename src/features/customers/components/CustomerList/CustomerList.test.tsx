import { render, screen } from '@testing-library/react';
import CustomerList from '../CustomerList';
import { ZellerCustomer, UserRole } from '../../../../types';

describe('CustomerList', () => {
    const mockCustomers: ZellerCustomer[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            role: UserRole.ADMIN,
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: UserRole.MANAGER,
        },
        {
            id: '3',
            name: 'Bob Johnson',
            email: 'bob@example.com',
            role: UserRole.ADMIN,
        },
    ];

    it('filters and displays only ADMIN customers', () => {
        render(<CustomerList customers={mockCustomers} selectedRole={UserRole.ADMIN} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
        expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
        expect(screen.getByText('Admin Customers')).toBeInTheDocument();
    });

    it('filters and displays only MANAGER customers', () => {
        render(<CustomerList customers={mockCustomers} selectedRole={UserRole.MANAGER} />);
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
        expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument();
        expect(screen.getByText('Manager Customers')).toBeInTheDocument();
    });

    it('displays empty state when no customers exist', () => {
        render(<CustomerList customers={[]} selectedRole={UserRole.ADMIN} />);
        expect(screen.getByText('Customer data not found')).toBeInTheDocument();
    });

    it('renders correct number of customer cards', () => {
        const { container } = render(
            <CustomerList customers={mockCustomers} selectedRole={UserRole.ADMIN} />
        );
        const customerCards = container.querySelectorAll('li');
        expect(customerCards).toHaveLength(2); // 2 ADMIN Customers
    });
});
