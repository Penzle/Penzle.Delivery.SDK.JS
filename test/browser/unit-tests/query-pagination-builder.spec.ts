import { QueryPaginationBuilder } from '../../../lib';

describe('QueryPaginationBuilder', () => {
	let paginationBuilder: QueryPaginationBuilder;

	beforeEach(() => {
		paginationBuilder = new QueryPaginationBuilder();
	});

	it('should have a default page of 0', () => {
		expect(paginationBuilder.getPage).toBe(0);
	});

	it('should have a default page size of 10', () => {
		expect(paginationBuilder.getPageSize).toBe(10);
	});

	it('should set the page to the given value', () => {
		paginationBuilder.WithPage(5);
		expect(paginationBuilder.getPage).toBe(4);
	});

	it('should set the page size to the given value', () => {
		paginationBuilder.WithPageSize(20);
		expect(paginationBuilder.getPageSize).toBe(20);
	});

	it('should set the page to 0 for values less than or equal to 0', () => {
		paginationBuilder.WithPage(0);
		expect(paginationBuilder.getPage).toBe(0);
	});

	it('should set the page to 0 for values equal to 1', () => {
		paginationBuilder.WithPage(1);
		expect(paginationBuilder.getPage).toBe(0);
	});
});
