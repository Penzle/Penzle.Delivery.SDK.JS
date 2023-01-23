import { QueryEntryBuilder, QueryPaginationBuilder } from '../../../lib';

describe('QueryEntryBuilder', () => {
	let queryEntryBuilder: QueryEntryBuilder;
	let paginationBuilder: QueryPaginationBuilder;

	beforeEach(() => {
		queryEntryBuilder = new QueryEntryBuilder();
		paginationBuilder = new QueryPaginationBuilder();
	});

	it('should have a default pagination object', () => {
		expect(queryEntryBuilder.getPagination).toEqual(QueryPaginationBuilder.Default);
	});

	it('should set the parent id when withParentId is called', () => {
		queryEntryBuilder.withParentId('123');
		expect(queryEntryBuilder.getParentId).toEqual('123');
	});

	it('should set the ids when withIds is called', () => {
		queryEntryBuilder.withIds('abc,def,ghi');
		expect(queryEntryBuilder.getIds).toEqual('abc,def,ghi');
	});

	it('should set the language when withLanguage is called', () => {
		queryEntryBuilder.withLanguage('en');
		expect(queryEntryBuilder.getLanguage).toEqual('en');
	});

	it('should set the pagination when withPagination is called', () => {
		queryEntryBuilder.withPagination(paginationBuilder);
		expect(queryEntryBuilder.getPagination).toEqual(paginationBuilder);
	});
	it('should set the template when withTemplate is called', () => {
		queryEntryBuilder.withTemplate('abc');
		expect(queryEntryBuilder.getTemplate).toEqual('abc');
	});
});
