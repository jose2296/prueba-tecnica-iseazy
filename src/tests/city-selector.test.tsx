import CitySelector from '@modules/weather/components/city-selector';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('City selector component', () => {
    it('Expect title of city selector view', () => {
        render(<CitySelector />);

        const countValue = screen.getByRole('heading');
        expect(countValue).toHaveTextContent('Select a city to see its weather:');
    });
    it('Expect city selector element to be in the document', () => {
        render(<CitySelector />);

        const countValue = screen.getByTestId('city-selector');
        expect(countValue).toBeInTheDocument();
    });
    it('Expect 3 city buttons', () => {
        render(<CitySelector />);

        const countValue = screen.getAllByRole('button');
        expect(countValue).toHaveLength(3);
    });
});
