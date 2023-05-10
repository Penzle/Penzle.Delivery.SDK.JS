import { QueryParameter } from '@penzle/core-sdk';
import { Page, QueryValue, UsePreviewMode } from '../filters';
import { PageSize } from '../filters/page-size';
import { QueryNameValue } from '../filters/query-name-value';
import { QueryConfig } from '../common/query-config';

export class QueryAssetBuilder {
	parameters: QueryParameter[] = [];

	queryConfig: QueryConfig | undefined;

	withMimeType(mimeType: string): this {
		this.parameters.push(new QueryNameValue('mimeType', mimeType));
		return this;
	}

	withIds(ids: string): this {
		this.parameters.push(new QueryNameValue('ids', ids));
		return this;
	}

	withTag(tag: string): this {
		this.parameters.push(new QueryNameValue('tag', tag));
		return this;
	}

	withKeyword(keyword: string): this {
		this.parameters.push(new QueryNameValue('keyword', keyword));
		return this;
	}

	withParentId(parentId: string): this {
		this.parameters.push(new QueryNameValue('parentId', parentId));
		return this;
	}

	fromRoot(parentId: string): this {
		this.parameters.push(new QueryNameValue('parentId', parentId));
		return this;
	}

	withLanguage(language: string): this {
		this.parameters.push(new QueryNameValue('language', language));
		return this;
	}

	usePreviewMode(): this {
		this.parameters.push(new UsePreviewMode());
		return this;
	}

	orderByDescending(fieldName: string): this {
		this.parameters.push(new QueryValue(`orderBy=${fieldName}&direction=desc`));
		return this;
	}

	orderByAscending(fieldName: string): this {
		this.parameters.push(new QueryValue(`orderBy=${fieldName}&direction=asc`));
		return this;
	}

	pageSize(size: number): this {
		this.parameters.push(new PageSize(size));
		return this;
	}

	withQueryConfig(queryConfig: QueryConfig): this {
		this.queryConfig = queryConfig;
		return this;
	}

	page(page: number): this {
		this.parameters.push(new Page(page));
		return this;
	}
}
