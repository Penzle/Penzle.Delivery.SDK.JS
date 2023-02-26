import { WhereLessThan } from '../../../../lib';

describe('WhereLessThan', () => {
	it('should generate correct parameter for where[and][field][lt]=value', () => {
		const field = 'age';
		const value = '18';
		const whereLessThan = new WhereLessThan(field, value);

		expect(whereLessThan.getParameter()).toBe(`filter[where][and][${field}][lt]=${value}`);
	});

	it('should generate correct parameter for where[or][field][lt]=value', () => {
		const field = 'age';
		const value = '18';
		const whereLessThan = new WhereLessThan(field, value);

		expect(whereLessThan.getOrParameter()).toBe(`filter[where][or][${field}][lt]=${value}`);
	});

	it('should return default value if value is not set', () => {
		const field = 'age';
		const whereLessThan = new WhereLessThan(field, '');

		expect(whereLessThan.getParameterValue()).toBe('');
	});

	it('should return value if value is set', () => {
		const field = 'age';
		const value = '18';
		const whereLessThan = new WhereLessThan(field, value);

		expect(whereLessThan.getParameterValue()).toBe(value);
	});
});
