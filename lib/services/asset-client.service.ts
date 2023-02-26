/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiService, Response } from '@penzle/core-sdk';
import { Asset, DeliveryConfig, QueryNameValue } from '../models/index';
import { BaseClient } from './base-client.service';
import { QueryAssetBuilder } from '../models/builders/query-asset-builder';
import { PagedList } from '../models/common/paged-list';

export class AssetClient extends BaseClient {
	private readonly action = 'assets';

	constructor(config: DeliveryConfig, httpService: ApiService<any>) {
		super(config, httpService);
		if (!config || !httpService) {
			throw Error('Delivery client configuration is not set');
		}
	}

	async getAsset(id: string, language?: string): Promise<Response<Asset>> {
		const url = this.getAssetUrl(id, language);
		return this.get<Asset>(this.getAssetUrl(url, language));
	}

	async getAssets(query?: QueryAssetBuilder): Promise<Response<PagedList<Asset>>> {
		const url = this.getAssetsUrl(query);
		return this.get<PagedList<Asset>>(url);
	}

	getAssetUrl(id: string, language?: string): string {
		const action = `${this.action}/${id}`;
		return this.urlFactory().create(action, language ? [new QueryNameValue('language', language)] : []);
	}

	getAssetsUrl(query?: QueryAssetBuilder): string {
		return this.urlFactory().create(this.action, query?.parameters ?? []);
	}
}
