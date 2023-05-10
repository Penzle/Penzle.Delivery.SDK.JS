/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiService } from '@penzle/core-sdk';
import { DeliveryConfig, EntryFilter, PagedList, QueryNameValue, UsePreviewMode } from '../models';
import { BaseClient } from './base-client.service';
import { Entry } from '../models/entires/entry';
import { QueryEntryBuilder } from '../models/builders/query-entry-builder';

/**
 * EntryClient is a class for interacting with the Penzle Delivery API's entry endpoints.
 * It provides methods for fetching and managing content entries.
 */
export class EntryClient extends BaseClient {
	private readonly action = 'entries/';

	/**
	 * Creates a new instance of the EntryClient with the provided configuration settings and HTTP service.
	 *
	 * @param config - The configuration settings for the EntryClient.
	 * @param httpService - The HTTP service to be used for making requests.
	 * @throws {Error} Will throw an error if the configuration settings or HTTP service are not provided.
	 */
	constructor(config: DeliveryConfig, httpService: ApiService<any>) {
		super(config, httpService);
		if (!config || !httpService) {
			throw Error('Delivery client configuration is not set');
		}
	}

	/**
	 * Fetches a paginated list of entries based on the provided template and query.
	 *
	 * @template TEntry - The type of entry object.
	 * @param template - The template for filtering entries.
	 * @param query - An optional QueryEntryBuilder instance for filtering and sorting entries.
	 * @returns A Promise that resolves to a PagedList of entries.
	 */
	async getPaginationEntries<TEntry>(template: string, query?: QueryEntryBuilder): Promise<PagedList<Entry<TEntry>>> {
		const url = this.getEntriesUrlQuery(template, query);

		const response = await this.get<PagedList<Entry<TEntry>>>(url, query?.queryConfig);

		return response.data;
	}

	/**
	 * Fetches an array of entries based on the provided template and query.
	 *
	 * @template TEntry - The type of entry object.
	 * @param template - The template for filtering entries.
	 * @param query - An optional QueryEntryBuilder instance for filtering and sorting entries.
	 * @returns A Promise that resolves to an array of entries.
	 */
	async getEntries<TEntry>(template: string, query?: QueryEntryBuilder): Promise<Entry<TEntry>[]> {
		const url = this.getEntriesUrlQuery(template, query);

		const response = await this.get<PagedList<Entry<TEntry>>>(url, query?.queryConfig);

		return response.data.items;
	}

	/**
	 * Fetches an entry by its ID and applies optional filter options.
	 *
	 * @template TEntry - The type of entry object.
	 * @param id - The ID of the entry to fetch.
	 * @param options - Optional EntryFilter object for filtering the results.
	 * @returns A Promise that resolves to the fetched entry.
	 */
	async getEntry<TEntry>(id: string, options: EntryFilter = {}): Promise<Entry<TEntry>> {
		const action = `${this.action}${id}`;

		const url = this.getEntryUrlQuery(action, options);

		const response = await this.get<Entry<TEntry>>(url, options.queryConfig);

		return response.data;
	}

	/**
	 * Fetches an entry by its slug and applies optional filter options.
	 *
	 * @template TEntry - The type of entry object.
	 * @param slug - The slug of the entry to fetch.
	 * @param options - Optional EntryFilter object for filtering the results.
	 * @returns A Promise that resolves to the fetched entry.
	 */
	async getEntryBySlug<TEntry>(slug: string, options: EntryFilter = {}): Promise<Entry<TEntry>> {
		const url = this.getEntryUrlQuery(this.action, options, slug);

		const response = await this.get<Entry<TEntry>>(url, options.queryConfig);

		return response.data;
	}

	getEntryUrlQuery(action: string, options: EntryFilter, slug?: string): string {
		const query = [];

		if (slug) query.push(new QueryNameValue('slug', slug));
		if (options.language) query.push(new QueryNameValue('language', options.language));
		if (options.include) query.push(new QueryNameValue('include', options.include.toFixed()));
		if (options.usePreviewMode) query.push(new UsePreviewMode());
		return this.urlFactory().create(action, query);
	}

	getEntriesUrlQuery(template: string, query?: QueryEntryBuilder): string {
		const action = `${this.action}${template}`;
		return this.urlFactory().create(action, query?.parameters ?? []);
	}
}
