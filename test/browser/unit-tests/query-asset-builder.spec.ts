import { Page, PageSize, QueryAssetBuilder, QueryNameValue, QueryValue } from '../../../lib';

describe('QueryAssetBuilder', () => {
	let queryAssetBuilder: QueryAssetBuilder;

	beforeEach(() => {
		queryAssetBuilder = new QueryAssetBuilder();
	});

	describe('withMimeType', () => {
		it('should add mimeType parameter to the parameters array', () => {
			queryAssetBuilder.withMimeType('image/jpeg');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('mimeType', 'image/jpeg')]);
		});
	});

	describe('withIds', () => {
		it('should add ids parameter to the parameters array', () => {
			queryAssetBuilder.withIds('123,456');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('ids', '123,456')]);
		});
	});

	describe('withTag', () => {
		it('should add tag parameter to the parameters array', () => {
			queryAssetBuilder.withTag('news');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('tag', 'news')]);
		});
	});

	describe('withKeyword', () => {
		it('should add keyword parameter to the parameters array', () => {
			queryAssetBuilder.withKeyword('sports');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('keyword', 'sports')]);
		});
	});

	describe('withParentId', () => {
		it('should add parentId parameter to the parameters array', () => {
			queryAssetBuilder.withParentId('789');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('parentId', '789')]);
		});
	});

	describe('fromRoot', () => {
		it('should add parentId parameter to the parameters array', () => {
			queryAssetBuilder.fromRoot('123');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('parentId', '123')]);
		});
	});

	describe('withLanguage', () => {
		it('should add language parameter to the parameters array', () => {
			queryAssetBuilder.withLanguage('en');
			expect(queryAssetBuilder.parameters).toEqual([new QueryNameValue('language', 'en')]);
		});
	});

	describe('orderByDescending', () => {
		it('should add orderBy parameter to the parameters array with direction=desc', () => {
			queryAssetBuilder.orderByDescending('created');
			expect(queryAssetBuilder.parameters).toEqual([new QueryValue('orderBy=created&direction=desc')]);
		});
	});

	describe('orderByAscending', () => {
		it('should add orderBy parameter to the parameters array with direction=asc', () => {
			queryAssetBuilder.orderByAscending('updated');
			expect(queryAssetBuilder.parameters).toEqual([new QueryValue('orderBy=updated&direction=asc')]);
		});
	});

	describe('pageSize', () => {
		it('should add pageSize parameter to the parameters array', () => {
			queryAssetBuilder.pageSize(10);
			expect(queryAssetBuilder.parameters).toEqual([new PageSize(10)]);
		});
	});

	describe('page', () => {
		it('should add page parameter to the parameters array', () => {
			queryAssetBuilder.page(2);
			expect(queryAssetBuilder.parameters).toEqual([new Page(2)]);
		});
	});
});
