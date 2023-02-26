import { WhereGreaterThan } from '../../../../lib';

describe('WhereGreaterThan', () => {
	it('should return correct parameter value for and condition', () => {
		const whereGreaterThan = new WhereGreaterThan('field1', 'value1');
		expect(whereGreaterThan.getParameter()).toBe(`filter[where][and][field1][gt]=value1`);
	});

	it('should return correct parameter value for or condition', () => {
		const whereGreaterThan = new WhereGreaterThan('field1', 'value1');
		expect(whereGreaterThan.getOrParameter()).toBe(`filter[where][or][field1][gt]=value1`);
	});

	it('should return correct parameter value when value is not specified', () => {
		const whereGreaterThan = new WhereGreaterThan('field1', '');
		expect(whereGreaterThan.getParameter()).toBe(`filter[where][and][field1][gt]=`);
	});
});
