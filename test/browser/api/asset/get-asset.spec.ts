import { getJsonDeliveryClient } from '../../configuration/index';
import * as responseJson from './get-asset.spec.json';
import { Asset } from '../../../../lib/models/asset';

describe('Get single asset', () => {
	const assetId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

	let response: Asset;

	beforeAll(async () => {
		response = (await getJsonDeliveryClient(responseJson).asset.getAsset(assetId)).data;
	});

	it(`Response should have all properties assigned`, () => {
		expect(response.id).toEqual(responseJson.id);
		expect(response.name).toEqual(responseJson.name);
		expect(response.description).toEqual(responseJson.description);
		expect(response.createdAt.toString()).toEqual(responseJson.createdAt);
		expect(response.modifiedAt.toString()).toEqual(responseJson.modifiedAt);
		expect(response.type).toEqual(responseJson.type);
		expect(response.size).toEqual(responseJson.size);
		expect(response.url).toEqual(responseJson.url);
		expect(response.workflowId).toEqual(responseJson.workflowId);
		expect(response.language).toEqual(responseJson.language);
		expect(response.assetMimeType).toEqual(responseJson.assetMimeType);
		expect(response.tags).toEqual(responseJson.tags);
		expect(response.assetMimeType).toEqual(responseJson.assetMimeType);
		expect(response.tags).toEqual(responseJson.tags);
	});
});
