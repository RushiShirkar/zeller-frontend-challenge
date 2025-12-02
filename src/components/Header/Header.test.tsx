import { render, screen } from '@testing-library/react';
import Header from './index';
import { PageTitleProvider } from '../../context/PageTitleContext';

describe('Header', () => {
    const renderWithContext = (title: string) => {
        return render(
            <PageTitleProvider initialTitle={title}>
                <Header />
            </PageTitleProvider>
        );
    };

    it('displays the correct title from context', () => {
        renderWithContext('HomePage');
        expect(screen.getByText('HomePage')).toBeInTheDocument();
    });
});
