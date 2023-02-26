import { WhereIn } from '../../../../lib';

describe('WhereIn', () => {
	it('should create an instance of WhereIn with field and values', () => {
		const field = 'fieldName';
		const values = ['value1', 'value2'];
		const whereIn = new WhereIn(field, values);

		expect(whereIn).toBeInstanceOf(WhereIn);
		expect(whereIn.field).toBe(field);
		expect(whereIn.values).toBe(values);
	});

	it('should create an instance of WhereIn with field and empty values array', () => {
		const field = 'fieldName';
		const values: string[] = [];
		const whereIn = new WhereIn(field, values);

		expect(whereIn).toBeInstanceOf(WhereIn);
		expect(whereIn.field).toBe(field);
		expect(whereIn.values).toBe(values);
	});

	it('should return the correct parameter string', () => {
		const field = 'fieldName';
		const values = ['value1', 'value2'];
		const whereIn = new WhereIn(field, values);
		const expected = `filter[where][and][${field.trim()}][inq]=value1,value2`;

		expect(whereIn.getParameter()).toBe(expected);
	});

	it('should return the correct OR parameter string', () => {
		const field = 'fieldName';
		const values = ['value1', 'value2'];
		const whereIn = new WhereIn(field, values);
		const expected = `filter[where][or][${field.trim()}][inq]=value1,value2`;

		expect(whereIn.getOrParameter()).toBe(expected);
	});

	it('should return default value if values is not an array', () => {
		const field = 'fieldName';
		const values = 'notAnArray';
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const whereIn = new WhereIn(field, values as any);
		const expected = '';

		expect(whereIn.getStringFromArray()).toBe(expected);
	});
});
