import { QueryNameValue } from '../../../../lib';

describe('QueryNameValue', () => {
	it('should throw error if name is not specified', () => {
		expect(() => {
			return new QueryNameValue(null, 'value');
		}).toThrowError(`Name of the parameter is not specified`);
	});

	it('should return the parameter string with name and value', () => {
		const queryNameValue = new QueryNameValue('name', 'value');
		expect(queryNameValue.getParameter()).toBe('name=value');
	});

	it('should return the parameter string with name and value that includes special characters', () => {
		const queryNameValue = new QueryNameValue('name', 'value=test');
		expect(queryNameValue.getParameter()).toBe('name=value=test');
	});
});
