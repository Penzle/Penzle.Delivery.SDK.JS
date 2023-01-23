import { getJsonDeliveryClient } from '../../configuration/index';
import * as responseJson from './get-entry.spec.json';
import { Entry } from '../../../../lib';
import { Article } from '../../models/article';

describe('Get entry', () => {
	let response: Entry<Article>;
	const template = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

	beforeAll(async () => {
		response = await getJsonDeliveryClient(responseJson).entry.getEntry<Article>(template);
	});

	it(`Response should have properties assigned`, () => {
		expect(response.fields.banner).toEqual(responseJson.fields.banner);
		expect(response.fields.description).toEqual(responseJson.fields.description);
		expect(response.fields.relatedArticle).toEqual(responseJson.fields.relatedArticle);
		expect(response.fields.slug).toEqual(responseJson.fields.slug);
		expect(response.fields.thumbnail).toEqual(responseJson.fields.thumbnail);
		expect(response.fields.thumbnailLandscape).toEqual(responseJson.fields.thumbnailLandscape);
		expect(response.fields.title).toEqual(responseJson.fields.title);
	});
});
