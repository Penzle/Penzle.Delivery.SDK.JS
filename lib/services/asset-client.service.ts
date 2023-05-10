/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiService, Response } from '@penzle/core-sdk';
import { Asset, AssetFilter, DeliveryConfig, QueryNameValue, UsePreviewMode } from '../models/index';
import { BaseClient } from './base-client.service';
import { QueryAssetBuilder } from '../models/builders/query-asset-builder';
import { PagedList } from '../models/common/paged-list';

/**
 * AssetClient is a class for interacting with the Penzle Delivery API's asset endpoints.
 * It provides methods for fetching and managing assets.
 */
export class AssetClient extends BaseClient {
	private readonly action = 'assets';

	/**
	 * Creates a new instance of the AssetClient with the provided configuration settings and HTTP service.
	 *
	 * @param config - The configuration settings for the AssetClient.
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
	 * Fetches an asset by its ID and applies optional filter options.
	 *
	 * @param id - The ID of the asset to fetch.
	 * @param options - Optional AssetFilter object for filtering the results.
	 * @returns A Promise that resolves to a Response object containing the fetched asset.
	 */
	async getAsset(id: string, options: AssetFilter = {}): Promise<Response<Asset>> {
		const url = this.getAssetUrlQuery(id, options);
		return this.get<Asset>(url, options.queryConfig);
	}

	/**
	 * Fetches a list of assets based on the provided QueryAssetBuilder instance.
	 *
	 * @param query - An optional QueryAssetBuilder instance for filtering and sorting assets.
	 * @returns A Promise that resolves to a Response object containing a PagedList of assets.
	 */
	async getAssets(query?: QueryAssetBuilder): Promise<Response<PagedList<Asset>>> {
		const url = this.getAssetsUrlQuery(query);
		return this.get<PagedList<Asset>>(url, query?.queryConfig);
	}

	getAssetUrlQuery(id: string, options?: AssetFilter): string {
		const action = `${this.action}/${id}`;
		const query = [];
		if (options?.language) query.push(new QueryNameValue('language', options?.language));
		if (options?.usePreviewMode) query.push(new UsePreviewMode());

		return this.urlFactory().create(action, query);
	}

	getAssetsUrlQuery(query?: QueryAssetBuilder): string {
		return this.urlFactory().create(this.action, query?.parameters ?? []);
	}
}
