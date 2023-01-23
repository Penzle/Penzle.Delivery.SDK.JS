import { HttpService } from '@penzle/core-sdk';
import { AssetClient, EntryClient } from './services/index';
import { DeliveryConfig } from './models/index';

export class DeliveryPenzleClient {
	public readonly asset: AssetClient;

	public readonly entry: EntryClient;

	constructor(protected config: DeliveryConfig) {
		if (!config) {
			throw Error('Delivery client configuration is not set');
		}

		this.asset = new AssetClient(config, config.httpService ? config.httpService : new HttpService());
		this.entry = new EntryClient(config, config.httpService ? config.httpService : new HttpService());
	}
}
