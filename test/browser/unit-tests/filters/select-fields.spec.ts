import { SelectFields } from '../../../../lib';

describe('SelectFields', () => {
	describe('getParameter', () => {
		it('should return filter[fields][field]=true', () => {
			const selectFields = new SelectFields(['field']);
			expect(selectFields.getParameter()).toBe('filter[fields][field]=true');
		});

		it('should return multiple filter[fields][field]=true parameters', () => {
			const selectFields = new SelectFields(['field1', 'field2']);
			expect(selectFields.getParameter()).toBe('filter[fields][field1]=true&filter[fields][field2]=true');
		});

		it('should trim field names', () => {
			const selectFields = new SelectFields([' field ']);
			expect(selectFields.getParameter()).toBe('filter[fields][field]=true');
		});

		it('should return an empty string if no fields specified', () => {
			const selectFields = new SelectFields([]);
			expect(selectFields.getParameter()).toBe('');
		});
	});
});
