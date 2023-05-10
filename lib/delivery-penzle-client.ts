import { HttpService } from '@penzle/core-sdk';
import { AssetClient, EntryClient } from './services/index';
import { DeliveryConfig } from './models/index';

/**
 * DeliveryPenzleClient is the main class for interacting with the Penzle Delivery API.
 * It provides access to asset and entry clients for managing assets and entries.
 */
export class DeliveryPenzleClient {
	/**
	 * The AssetClient instance for fetching and managing assets.
	 */
	readonly asset: AssetClient;

	/**
	 * The EntryClient instance for fetching and managing content entries.
	 */
	readonly entry: EntryClient;

	/**
	 * Creates a new instance of the DeliveryPenzleClient with the provided configuration settings.
	 *
	 * @param config - The configuration settings for the DeliveryPenzleClient.
	 * @throws {Error} Will throw an error if the configuration settings are not provided.
	 */
	constructor(protected config: DeliveryConfig) {
		if (!config) {
			throw Error('Delivery client configuration is not set');
		}

		this.asset = new AssetClient(config, config.httpService ? config.httpService : new HttpService());
		this.entry = new EntryClient(config, config.httpService ? config.httpService : new HttpService());
	}
}
