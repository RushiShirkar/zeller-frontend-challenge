import { getRoleLabel } from './index';
import { UserRole } from '../types';

describe('getRoleLabel', () => {
    it('returns "Admin" for ADMIN role', () => {
        expect(getRoleLabel(UserRole.ADMIN)).toBe('Admin');
    });

    it('returns "Manager" for MANAGER role', () => {
        expect(getRoleLabel(UserRole.MANAGER)).toBe('Manager');
    });
});
