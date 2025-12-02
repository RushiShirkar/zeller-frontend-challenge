import { render, screen } from '@testing-library/react';
import CustomerCard from '../CustomerCard';
import { ZellerCustomer, UserRole } from '../../../../types';

describe('CustomerCard', () => {
    const mockCustomer: ZellerCustomer = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: UserRole.ADMIN,
    };

    it('renders customer name correctly', () => {
        render(<CustomerCard customer={mockCustomer} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('displays the first letter of customer name as initial', () => {
        render(<CustomerCard customer={mockCustomer} />);
        expect(screen.getByText('J')).toBeInTheDocument();
    });

    it('displays correct role label for ADMIN', () => {
        render(<CustomerCard customer={mockCustomer} />);
        expect(screen.getByText('Admin')).toBeInTheDocument();
    });

    it('displays correct role label for MANAGER', () => {
        const managerCustomer: ZellerCustomer = {
            ...mockCustomer,
            role: UserRole.MANAGER,
        };
        render(<CustomerCard customer={managerCustomer} />);
        expect(screen.getByText('Manager')).toBeInTheDocument();
    });

    it('handles names starting with lowercase letters', () => {
        const lowerCaseCustomer: ZellerCustomer = {
            ...mockCustomer,
            name: 'alice smith',
        };
        render(<CustomerCard customer={lowerCaseCustomer} />);
        expect(screen.getByText('A')).toBeInTheDocument();
    });
});
