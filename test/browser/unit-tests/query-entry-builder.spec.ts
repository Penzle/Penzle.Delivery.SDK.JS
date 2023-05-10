import {
	QueryEntryBuilder,
	WhereEquals,
	WhereGreaterThan,
	WhereLessThan,
	WhereIn,
	WhereLanguage,
	SelectFields,
	OrderBy,
	PageSize,
	Page,
	Include
} from '../../../lib';

describe('QueryEntryBuilder', () => {
	let queryEntryBuilder: QueryEntryBuilder;

	beforeEach(() => {
		queryEntryBuilder = new QueryEntryBuilder();
	});

	describe('whereEquals', () => {
		it('should add a WhereEquals parameter to the parameters array', () => {
			queryEntryBuilder.equals('fieldName', 'value');
			expect(queryEntryBuilder.parameters).toEqual([new WhereEquals('fieldName', 'value')]);
		});
	});

	describe('whereGreaterThan', () => {
		it('should add a WhereGreaterThan parameter to the parameters array', () => {
			queryEntryBuilder.greaterThan('fieldName', 'value');
			expect(queryEntryBuilder.parameters).toEqual([new WhereGreaterThan('fieldName', 'value')]);
		});
	});

	describe('whereLessThan', () => {
		it('should add a WhereLessThan parameter to the parameters array', () => {
			queryEntryBuilder.lessThan('fieldName', 'value');
			expect(queryEntryBuilder.parameters).toEqual([new WhereLessThan('fieldName', 'value')]);
		});
	});

	describe('whereIn', () => {
		it('should add a WhereIn parameter to the parameters array', () => {
			queryEntryBuilder.in('fieldName', ['value1', 'value2']);
			expect(queryEntryBuilder.parameters).toEqual([new WhereIn('fieldName', ['value1', 'value2'])]);
		});
	});

	describe('whereLanguage', () => {
		it('should add a WhereLanguage parameter to the parameters array', () => {
			queryEntryBuilder.withLanguage('language');
			expect(queryEntryBuilder.parameters).toEqual([new WhereLanguage('language')]);
		});
	});

	describe('selectFields', () => {
		it('should add a SelectFields parameter to the parameters array', () => {
			queryEntryBuilder.selectFields(['field1', 'field2']);
			expect(queryEntryBuilder.parameters).toEqual([new SelectFields(['field1', 'field2'])]);
		});
	});

	describe('orderBy', () => {
		it('should add OrderBy parameter with ascending order', () => {
			queryEntryBuilder.orderBy('fieldName', 'asc');
			expect(queryEntryBuilder.parameters).toEqual([new OrderBy('fieldName', 'asc')]);
		});

		it('should add OrderBy parameter with descending order', () => {
			queryEntryBuilder.orderBy('fieldName', 'desc');
			expect(queryEntryBuilder.parameters).toEqual([new OrderBy('fieldName', 'desc')]);
		});

		it('should throw an error if field is null or empty', () => {
			expect(() => queryEntryBuilder.orderBy('', 'asc')).toThrowError(
				`Field specified in 'Order' can't be null or empty`
			);
		});
	});

	describe('PageSize', () => {
		it('should add a PageSize parameter to the parameters array', () => {
			queryEntryBuilder.pageSize(10);
			expect(queryEntryBuilder.parameters).toEqual([new PageSize(10)]);
		});

		it('should throw an error if page size is less than 0', () => {
			expect(() => queryEntryBuilder.pageSize(-1)).toThrowError(
				`'PageSize' must be a positive integer number or zero.`
			);
		});
	});

	describe('page', () => {
		it('should add a Page parameter to the parameters array', () => {
			queryEntryBuilder.page(2);
			expect(queryEntryBuilder.parameters).toEqual([new Page(2)]);
		});
	});

	describe('include', () => {
		it('should add a Include parameter to the parameters array', () => {
			queryEntryBuilder.include(2);
			expect(queryEntryBuilder.parameters).toEqual([new Include(2)]);
		});
	});
});
