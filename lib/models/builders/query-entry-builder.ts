import { QueryParameter } from '@penzle/core-sdk';
import { WhereLanguage } from '../filters/where-language';
import { PageSize } from '../filters/page-size';
import {
	Query,
	WhereEquals,
	WhereGreaterThan,
	WhereLessThan,
	WhereIn,
	SelectFields,
	QueryValue,
	SortOrder,
	OrderBy,
	Page
} from '../filters';

export class QueryEntryBuilder {
	parameters: QueryParameter[] = [];

	whereEquals(field: string, value: string): QueryEntryBuilder {
		this.parameters.push(new WhereEquals(field, value));
		return this;
	}

	whereGreaterThan(field: string, value: string): QueryEntryBuilder {
		this.parameters.push(new WhereGreaterThan(field, value));
		return this;
	}

	whereLessThan(field: string, value: string): QueryEntryBuilder {
		this.parameters.push(new WhereLessThan(field, value));
		return this;
	}

	whereIn(field: string, values: string[]): QueryEntryBuilder {
		this.parameters.push(new WhereIn(field, values));
		return this;
	}

	whereLanguage(language: string): QueryEntryBuilder {
		this.parameters.push(new WhereLanguage(language));
		return this;
	}

	selectFields(select: string[]): QueryEntryBuilder {
		this.parameters.push(new SelectFields(select));
		return this;
	}

	orderBy(fieldName: string, sortOrder: SortOrder): this {
		this.parameters.push(new OrderBy(fieldName, sortOrder));
		return this;
	}

	orderByDescending(fieldName: string): this {
		this.parameters.push(new OrderBy(fieldName, 'desc'));
		return this;
	}

	orderByAscending(fieldName: string): this {
		this.parameters.push(new OrderBy(fieldName, 'asc'));
		return this;
	}

	pageSize(size: number): this {
		this.parameters.push(new PageSize(size));
		return this;
	}

	page(page: number): this {
		this.parameters.push(new Page(page));
		return this;
	}

	and(queryParam: Query): QueryEntryBuilder {
		this.parameters.push(new QueryValue(queryParam.getParameter()));
		return this;
	}

	or(queryParam: Query): QueryEntryBuilder {
		this.parameters.push(new QueryValue(queryParam.getOrParameter()));
		return this;
	}
}
