import { Include } from '../../../../lib';

describe('Include', () => {
	it('should create an instance of Include', () => {
		const include = new Include(5);
		expect(include).toBeInstanceOf(Include);
	});

	it('should throw an error if include is less than 0', () => {
		expect(() => new Include(-1)).toThrowError(`'Include' must be a between 0 and 10.`);
	});

	it('should throw an error if include is greater than 10', () => {
		expect(() => new Include(11)).toThrowError(`'Include' must be a between 0 and 10.`);
	});

	it('should return the correct query parameter', () => {
		const include = new Include(8);
		expect(include.getParameter()).toBe('include=8');
	});
});
