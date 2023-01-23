import { QueryPaginationBuilder } from './query-pagination-builder';

export class QueryAssetBuilder {
	private ids = '';

	private language = '';

	private parentId = '';

	private keyword = '';

	private tag = '';

	private mimeType = '';

	private pagination: QueryPaginationBuilder = QueryPaginationBuilder.Default;

	public static Instance = new QueryAssetBuilder();

	withMimeType(mimeType: string): this {
		this.mimeType = mimeType;
		return this;
	}

	withIds(ids: string): this {
		this.ids = ids;
		return this;
	}

	withTag(tag: string): this {
		this.tag = tag;
		return this;
	}

	withKeyword(keyword: string): this {
		this.keyword = keyword;
		return this;
	}

	withParentId(parentId: string): this {
		this.parentId = parentId;
		return this;
	}

	fromRoot(rootId: string): this {
		this.parentId = rootId;
		return this;
	}

	withLanguage(language: string): this {
		this.language = language;
		return this;
	}

	withPagination(pagination: QueryPaginationBuilder): this {
		this.pagination = pagination || QueryPaginationBuilder.Default;
		return this;
	}

	get getIds(): string {
		return this.ids;
	}

	get getPagination(): QueryPaginationBuilder {
		return this.pagination;
	}

	get getLanguage(): string {
		return this.language;
	}

	get getParentId(): string {
		return this.parentId;
	}

	get getKeyword(): string {
		return this.keyword;
	}

	get getTag(): string {
		return this.tag;
	}

	get getMimeType(): string {
		return this.mimeType;
	}
}
