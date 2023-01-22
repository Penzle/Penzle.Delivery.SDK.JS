/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiService, Response } from '@penzle/core-sdk';
import { ApiUrls } from '../urls/index';
import { Asset, DeliveryConfig } from '../models/index';
import { BaseClient } from './base-client.service';
import { QueryAssetBuilder } from '../models/builders/query-asset-builder';
import { PagedList } from '../models/common/paged-list';

export class AssetClient extends BaseClient {
	constructor(config: DeliveryConfig, httpService: ApiService<any>) {
		super(config, httpService);
		if (!config || !httpService) {
			throw Error('Delivery client configuration is not set');
		}
	}

	async getAsset(id: string, language?: string): Promise<Response<Asset>> {
		return this.get<Asset>(ApiUrls.getAsset(id, language ?? ''));
	}

	async getAssets(query?: QueryAssetBuilder): Promise<Response<PagedList<Asset>>> {
		const assetQuery = query ?? QueryAssetBuilder.Instance;
		return this.get<PagedList<Asset>>(
			ApiUrls.getAssets(
				assetQuery.getParentId,
				assetQuery.getLanguage,
				assetQuery.getKeyword,
				assetQuery.getTag,
				assetQuery.getMimeType,
				assetQuery.getIds,
				assetQuery.getPagination.getPage,
				assetQuery.getPagination.getPageSize,
				'',
				''
			)
		);
	}
}
