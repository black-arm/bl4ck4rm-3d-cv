import Chip from "../app/page/about-me/components/Chip";
import { cleanup, screen, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

describe('chip component', () => {
    
    afterEach(() => {
        cleanup();
    });

    test('renders the chip with children', async () => {
        
        render(
            <Chip label="Hello World"></Chip>
        );

        const childElement = screen.getByText(/Hello World/i);
        expect(childElement).toBeDefined();
    });

    test('renders the chip with icon', async () => {
        
        render(
            <Chip label="Hello World" icon="/icon.png"></Chip>
        );

        const iconElement = screen.getByAltText(/icon/i);
        expect(iconElement).toBeDefined();
    });

    test('renders the chip with color', async () => {
        
        render(
            <Chip label="Hello World" color="red"></Chip>
        );

        const chip = screen.getByText(/Hello World/i).parentElement;
        expect(chip?.style.backgroundColor).toBe('red');
    });
});