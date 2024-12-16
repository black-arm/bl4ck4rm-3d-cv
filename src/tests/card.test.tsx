import { render, screen, cleanup } from '@testing-library/react';
import { describe, test, expect, afterEach } from 'vitest';
import Card from '../shared/components/Card';

describe('Card Component', () => {

    afterEach(() => {
        cleanup();
    });

    test('renders the card with children', async () => {
        render(
            <Card>
                <div>Child Element</div>
            </Card>
        );
        const childElement = screen.getByText(/Child Element/i);
        expect(childElement).toBeDefined();
    });

    test('renders the card with custom class', async () => {
        render(
            <Card className="custom-class">
                <div>Child Element</div>
            </Card>
        );
        const card = screen.getByText(/Child Element/i).parentElement;
        expect(card?.classList.contains('custom-class')).toBe(true);
    });

    test('renders the card with link and hover effect', async () => {
        render(
            <Card link="/test-link">
                <div>Child Element</div>
            </Card>
        );
        const card = screen.getByText(/Child Element/i).parentElement;
        expect(card?.classList.contains('hover:bg-gray-500/30')).toBe(true);
        const linkElement = screen.getByRole('link');
        expect(linkElement.getAttribute('href')).toContain('/test-link');
    });

});