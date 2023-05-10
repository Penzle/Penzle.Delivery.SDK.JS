import { DeliveryPenzleClient } from '../delivery-penzle-client';
import { DeliveryConfig } from '../models/index';

/**
 * Creates a new instance of the DeliveryPenzleClient with the provided configuration settings.
 *
 * @param settings - The configuration settings for the DeliveryPenzleClient.
 * @returns A new instance of the DeliveryPenzleClient.
 */
export function createDeliveryClient(settings: DeliveryConfig): DeliveryPenzleClient {
	return new DeliveryPenzleClient(settings);
}
