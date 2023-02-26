import { PageSize } from '../../../../lib';

describe('PageSize', () => {
	it('should return correct parameter value', () => {
		const pageSize = new PageSize(10);
		expect(pageSize.getParameter()).toBe('filter[PageSize]=10');
	});

	it('should throw an error if pageSize is negative', () => {
		expect(() => new PageSize(-1)).toThrowError(`'PageSize' must be a positive integer number or zero.`);
	});
});
