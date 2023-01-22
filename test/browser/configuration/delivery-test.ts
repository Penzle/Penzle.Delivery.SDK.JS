/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header, TestHttpService, Response } from '@penzle/core-sdk';
import { createDeliveryClient, DeliveryConfig, DeliveryPenzleClient } from '../../../lib';

function getJsonResponse(json: any, responseHeaders: Header[] = []): Response<any> {
	return {
		data: json,
		headers: responseHeaders,
		rawResponse: json,
		status: 999,
		retryStrategy: {
			retries: 2
		}
	};
}

export function getDeliveryClient(
	json: any,
	config?: DeliveryConfig,
	responseHeaders: Header[] = []
): DeliveryPenzleClient {
	if (!config) {
		return createDeliveryClient({
			baseAddress: 'www.penzle.com',
			accessApiToken: 'token',
			httpService: new TestHttpService({
				response: getJsonResponse(json, responseHeaders),
				error: undefined
			})
		});
	}

	// eslint-disable-next-line no-param-reassign
	config.httpService = new TestHttpService({
		response: getJsonResponse(json, responseHeaders),
		error: undefined
	});

	return createDeliveryClient(config);
}

export function getJsonDeliveryClient(
	json: any,
	config?: DeliveryConfig,
	responseHeaders: Header[] = []
): DeliveryPenzleClient {
	return getDeliveryClient(json, config, responseHeaders);
}
