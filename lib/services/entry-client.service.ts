/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiService } from '@penzle/core-sdk';
import { DeliveryConfig, PagedList, QueryNameValue } from '../models';
import { BaseClient } from './base-client.service';
import { Entry } from '../models/entires/entry';
import { QueryEntryBuilder } from '../models/builders/query-entry-builder';

export class EntryClient extends BaseClient {
	private readonly action = 'entries/';

	constructor(config: DeliveryConfig, httpService: ApiService<any>) {
		super(config, httpService);
		if (!config || !httpService) {
			throw Error('Delivery client configuration is not set');
		}
	}

	/**
	 * Retrieves all the entries of a template, optionally filtered by a querystring. Utilizing the class is more
	 * efficient than manually constructing a query. See QueryEntryBuilder.
	 * @template TEntry The class into which to serialize the response.
	 * @param {string} template The template code representing the object's shape from which has been created.
	 * @param {QueryEntryBuilder} [query] The optional querystring to add additional filtering to the query.
	 * @returns {Promise<PagedList<TEntry>>} A TEntry of items.
	 */
	async getPaginationEntryList<TEntry>(
		template: string,
		query?: QueryEntryBuilder
	): Promise<PagedList<Entry<TEntry>>> {
		const url = this.getEntriesUrl(template, query);

		const response = await this.get<PagedList<Entry<TEntry>>>(url);

		return response.data;
	}

	async getPaginationList<TEntry>(template: string, query?: QueryEntryBuilder): Promise<PagedList<TEntry>> {
		const url = this.getEntriesUrl(template, query);

		const response = await this.get<PagedList<Entry<TEntry>>>(url);

		return {
			items: response.data.items.map((entry): TEntry => entry.fields),
			pageIndex: response.data.pageIndex,
			pageSize: response.data.pageSize,
			totalCount: response.data.totalCount,
			totalPages: response.data.totalPages,
			hasNextPage: response.data.hasNextPage,
			hasPreviousPage: response.data.hasPreviousPage
		};
	}

	/**
	 * Retrieves all the entries of a template, optionally filtered by a querystring. Utilizing the class is more
	 * efficient than manually constructing a query. See {@link QueryEntryBuilder}.
	 *
	 * @template TEntry The class into which to serialize the response.
	 * @param {string} template The template code representing the object's shape from which has been created.
	 * @param {QueryEntryBuilder} [query] The optional querystring to add additional filtering to the query.
	 * @param {number} [fetch=50] The maximum items which will be returned in collection.
	 * @returns {Promise<ReadonlyArray<TEntry>>} A read only collection of {@link TEntry} of items.
	 */
	async getEntries<TEntry>(template: string, query?: QueryEntryBuilder): Promise<TEntry[]> {
		const url = this.getEntriesUrl(template, query);

		const response = await this.get<PagedList<Entry<TEntry>>>(url);

		return response.data.items.map((entry): TEntry => entry.fields);
	}

	async getEntryList<TEntry>(template: string, query?: QueryEntryBuilder): Promise<Entry<TEntry>[]> {
		const url = this.getEntriesUrl(template, query);

		const response = await this.get<PagedList<Entry<TEntry>>>(url);

		return response.data.items;
	}

	async getEntry<TEntry>(id: string, language?: string): Promise<Entry<TEntry>> {
		const url = this.getEntryUrl(id, language);

		const response = await this.get<Entry<TEntry>>(url);

		return response.data;
	}

	getEntryUrl(id: string, language?: string, include?: number): string {
		const action = `${this.action}${id}`;
		const query = [];
		if (language) query.push(new QueryNameValue('language', language));
		if (include) query.push(new QueryNameValue('include', include.toFixed()));

		return this.urlFactory().create(action, query);
	}

	getEntriesUrl(template: string, query?: QueryEntryBuilder): string {
		const action = `${this.action}${template}`;
		return this.urlFactory().create(action, query?.parameters ?? []);
	}
}
