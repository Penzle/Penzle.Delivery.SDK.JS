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

	describe('getEntryUrl', () => {
		it('should call the get getEntryUrl method with the correct url', async () => {
			const id = 'my-id';

			const url = getJsonDeliveryClient(responseJson).entry.getEntryUrl(id);

			expect(url).toEqual('www.penzle.com/api/project/main/environment/main/entries/my-id');
		});

		it('should call the getEntryUrl method with id and language with the correct url', async () => {
			const id = 'my-id';
			const language = 'en-US';

			const url = getJsonDeliveryClient(responseJson).entry.getEntryUrl(id, language);

			expect(url).toEqual('www.penzle.com/api/project/main/environment/main/entries/my-id?language=en-US');
		});

		it('should call the getEntryUrl method with id, language and include with the correct url', async () => {
			const id = 'my-id';
			const language = 'en-US';
			const include = 3;

			const url = getJsonDeliveryClient(responseJson).entry.getEntryUrl(id, language, include);

			expect(url).toEqual(
				'www.penzle.com/api/project/main/environment/main/entries/my-id?language=en-US&include=3'
			);
		});
	});
});
