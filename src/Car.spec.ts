import Car from './Car';

describe('Car', () => {
    it('should throw an error if name is not provided', () => {
        expect(() => new Car('', 'ops', 0)).toThrowError('Name is required');
    });

    it('should throw an error if brand is not provided', () => {
        expect(() => new Car('Gol', '', 0)).toThrowError('Brand is required');
    });

    it('should throw an error if year is not provided', () => {
        expect(() => new Car('Go', 'volkvagen', undefined)).toThrowError('Year is required');
    });

    it ('should not throw an error if all required fields are provided', () => {
        expect(() => new Car(undefined, undefined, undefined)).toThrowError('Car: Name is required, Car: Brand is required, Car: Year is required');
    });
})
