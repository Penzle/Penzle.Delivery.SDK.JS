// This is a class that creates a query entry builder
import { QueryPaginationBuilder } from './query-pagination-builder';

export class QueryEntryBuilder {
	constructor() {
		this.pagination = QueryPaginationBuilder.Default;
	}

	static instance = new QueryEntryBuilder();

	private ids?: string;

	private pagination: QueryPaginationBuilder;

	private parentId?: string;

	private language?: string;

	private template?: string;

	// Method to set the parent id
	withParentId(parentId: string): QueryEntryBuilder {
		this.parentId = parentId;
		return this;
	}

	// Method to set the ids
	withIds(ids: string): QueryEntryBuilder {
		this.ids = ids;
		return this;
	}

	// Method to set the language
	withLanguage(language: string): QueryEntryBuilder {
		this.language = language;
		return this;
	}

	// Method to set the pagination
	withPagination(pagination: QueryPaginationBuilder | undefined): QueryEntryBuilder {
		this.pagination = pagination || QueryPaginationBuilder.Default;
		return this;
	}

	withTemplate(template: string): QueryEntryBuilder {
		this.template = template;
		return this;
	}

	get getIds(): string | undefined {
		return this.ids;
	}

	get getPagination(): QueryPaginationBuilder {
		return this.pagination;
	}

	get getLanguage(): string | undefined {
		return this.language;
	}

	get getParentId(): string | undefined {
		return this.parentId;
	}

	get getTemplate(): string | undefined {
		return this.template;
	}
}
