import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';


describe('Badge component tests', () => {
    it('should render badge with text', () => {
        render(<Badge>primary badge</Badge>);
        const badgetext = screen.getByText(/primary badge/i);
        expect(badgetext).toBeInTheDocument();
    });

    it('should render badge classname as primary-badge', () => {
        render(<Badge className="primary-badge" data-testid="classname-test">badge-classname-test</Badge>);
        const badge = screen.getByTestId('classname-test')
        expect(badge).toHaveClass('primary-badge');
    });

    it('should render badge shape as rounded', () => {
    render(<Badge shape="rounded" data-testid="shape-test">badge-shape-test</Badge>);
    const badge = screen.getByTestId('shape-test')
    expect(badge).toHaveAttribute('shape', 'rounded');
    });

    it('should render badge color as red', () => {
        render(<Badge color="red" data-testid="badge-color-test">badge-color-test</Badge>);
        const badge = screen.getByTestId('badge-color-test');
        expect(badge).toHaveAttribute('color', 'red');
    });

    it('should render badge background color as orange', () => {
        render(<Badge backgroundcolor="orange" data-testid="badge-bg-color-test">badge-bg-color-test</Badge>);
        const badge = screen.getByTestId('badge-bg-color-test');
        expect(badge).toHaveAttribute('backgroundcolor', 'orange');
    });

    it('should render badge padding as 20px', () => {
        render(<Badge padding="20px" data-testid="badge-padding-test">badge-padding-test</Badge>);
        const badge = screen.getByTestId('badge-padding-test');
        expect(badge).toHaveAttribute('padding', '20px');
    });

    it('should render badge size as sm', () => {
        render(<Badge fontSize="sm" data-testid="badge-size-test">badge-size-test</Badge>);
        const badge = screen.getByTestId('badge-size-test');
        expect(badge).toHaveAttribute('font-size', 'sm');
    });

});




