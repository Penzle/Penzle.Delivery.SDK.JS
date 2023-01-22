import { DeliveryPenzleClient } from '../delivery-penzle-client';
import { DeliveryConfig } from '../models/index';

export function createDeliveryClient(settings: DeliveryConfig): DeliveryPenzleClient {
	return new DeliveryPenzleClient(settings);
}
