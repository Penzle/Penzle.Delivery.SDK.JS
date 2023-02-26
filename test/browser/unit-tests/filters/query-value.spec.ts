import { QueryValue } from '../../../../lib';

describe('QueryValue', () => {
	it('should throw an error if the value is not specified', () => {
		expect(() => {
			return new QueryValue(undefined);
		}).toThrowError(`Value of the parameter is not specified`);
	});

	it('should return the value as a string', () => {
		const queryValue = new QueryValue('test');
		expect(queryValue.getParameter()).toBe('test');
	});
});
