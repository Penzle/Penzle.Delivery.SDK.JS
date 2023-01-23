/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeliveryPenzleClient } from '../../../lib';

describe('Delivery Client initialization', () => {
	it('initialization DeliveryClient without config should throw error', () => {
		expect(() => new DeliveryPenzleClient(null as any)).toThrowError();
		expect(() => new DeliveryPenzleClient(undefined as any)).toThrowError();
	});
});
