import { Page } from '../../../../lib';

describe('Page', () => {
	it('should return correct parameter value for page 1', () => {
		const page = new Page(1);
		expect(page.getParameter()).toBe('filter[page]=0');
	});

	it('should return correct parameter value for page 2', () => {
		const page = new Page(2);
		expect(page.getParameter()).toBe('filter[page]=1');
	});

	it('should return correct parameter value for page 3', () => {
		const page = new Page(3);
		expect(page.getParameter()).toBe('filter[page]=2');
	});

	it('should return correct parameter value for negative page number', () => {
		const page = new Page(-1);
		expect(page.getParameter()).toBe('filter[page]=0');
	});
});
