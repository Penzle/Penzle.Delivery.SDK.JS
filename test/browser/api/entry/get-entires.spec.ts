import { getJsonDeliveryClient } from '../../configuration/index';
import * as responseJson from './get-entires.spec.json';
import { Entry, QueryEntryBuilder } from '../../../../lib';
import { Article } from '../../models/article';

describe('Get entires with pagination', () => {
	let response: Entry<Article>[];
	const template = 'article';

	beforeAll(async () => {
		response = await getJsonDeliveryClient(responseJson).entry.getEntries<Article>(template);
	});

	it(`Response should have field properties assigned`, () => {
		response.forEach((item, index: number) => {
			expect(item.fields.banner).toEqual(responseJson.items[index].fields.banner);
			expect(item.fields.description).toEqual(responseJson.items[index].fields.description);
			expect(item.fields.relatedArticle).toEqual(responseJson.items[index].fields.relatedArticle);
			expect(item.fields.slug).toEqual(responseJson.items[index].fields.slug);
			expect(item.fields.thumbnail).toEqual(responseJson.items[index].fields.thumbnail);
			expect(item.fields.thumbnailLandscape).toEqual(responseJson.items[index].fields.thumbnailLandscape);
			expect(item.fields.title).toEqual(responseJson.items[index].fields.title);
		});
	});

	describe('getEntriesUrl', () => {
		it('should call the get method with the correct url', async () => {
			const dataTemplate = 'article';
			const query = new QueryEntryBuilder().pageSize(10).page(1);

			const url = getJsonDeliveryClient(responseJson).entry.getEntriesUrlQuery(dataTemplate, query);

			expect(url).toEqual(
				'www.penzle.com/api/project/main/environment/main/entries/article?filter[PageSize]=10&filter[page]=0'
			);
		});
	});
});
