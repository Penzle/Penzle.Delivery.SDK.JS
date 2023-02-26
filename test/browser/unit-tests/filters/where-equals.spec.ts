import { WhereEquals } from '../../../../lib';

describe('WhereEquals', () => {
	it('should return correct parameter value with getParameter', () => {
		const whereEquals = new WhereEquals('field', 'value');
		expect(whereEquals.getParameter()).toBe('filter[where][and][field]=value');
	});

	it('should return correct parameter value with getOrParameter', () => {
		const whereEquals = new WhereEquals('field', 'value');
		expect(whereEquals.getOrParameter()).toBe('filter[where][or][field]=value');
	});

	it('should trim field name before returning the parameter value', () => {
		const whereEquals = new WhereEquals('  field  ', 'value');
		expect(whereEquals.getParameter()).toBe('filter[where][and][field]=value');
	});

	it('should return the default value if value is undefined', () => {
		const whereEquals = new WhereEquals('field', undefined);
		expect(whereEquals.getParameter()).toBe('filter[where][and][field]=');
	});
});
