import { OrderBy } from '../../../../lib';

describe('OrderBy', () => {
	it('should return correct parameter value', () => {
		const orderBy = new OrderBy('field', 'asc');
		expect(orderBy.getParameter()).toBe('filter[order]=field asc');
	});

	it('should trim field name before returning the parameter value', () => {
		const orderBy = new OrderBy('  field  ', 'asc');
		expect(orderBy.getParameter()).toBe('filter[order]=field asc');
	});

	it('should throw an error if field is null or empty', () => {
		expect(() => new OrderBy('', 'asc')).toThrowError(`Field specified in 'Order' can't be null or empty`);
		expect(() => new OrderBy(null, 'asc')).toThrowError(`Field specified in 'Order' can't be null or empty`);
	});
});
