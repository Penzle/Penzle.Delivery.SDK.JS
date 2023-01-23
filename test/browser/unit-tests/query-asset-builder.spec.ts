import { QueryAssetBuilder, QueryPaginationBuilder } from '../../../lib';

describe('Query Asset Builder', () => {
	it('should set the mimeType property when withMimeType is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withMimeType('image/jpeg');
		expect(builder.getMimeType).toEqual('image/jpeg');
	});

	it('should set the ids property when withIds is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withIds('1,2,3');
		expect(builder.getIds).toEqual('1,2,3');
	});

	it('should set the tag property when withTag is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withTag('landscape');
		expect(builder.getTag).toEqual('landscape');
	});

	it('should set the keyword property when withKeyword is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withKeyword('ocean');
		expect(builder.getKeyword).toEqual('ocean');
	});

	it('should set the parentId property when withParentId is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withParentId('root');
		expect(builder.getParentId).toEqual('root');
	});

	it('should set the parentId property to the rootId when fromRoot is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.fromRoot('root');
		expect(builder.getParentId).toEqual('root');
	});

	it('should set the language property when withLanguage is called', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withLanguage('en');
		expect(builder.getLanguage).toEqual('en');
	});

	it('should set the pagination property when withPagination is called', () => {
		const builder = QueryAssetBuilder.Instance;
		const pagination = new QueryPaginationBuilder();
		builder.withPagination(pagination);
		expect(builder.getPagination).toEqual(pagination);
	});

	it('should set the pagination property with default pagination when withPagination is called with no argument', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withPagination(QueryPaginationBuilder.Default);
		expect(builder.getPagination).toEqual(QueryPaginationBuilder.Default);
	});

	it('should set the tag property to null when withTag is called with a null value', () => {
		const builder = QueryAssetBuilder.Instance;
		builder.withTag(null);
		expect(builder.getTag).toBeNull();
	});
});
