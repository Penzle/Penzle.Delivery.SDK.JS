import { getJsonDeliveryClient } from '../../configuration/index';
import * as responseJson from './get-entires.spec.json';
import { PagedList } from '../../../../lib';
import { Article } from '../../models/article';

describe('Get entires with pagination', () => {
	let response: PagedList<Article>;
	const template = 'article';

	beforeAll(async () => {
		response = await getJsonDeliveryClient(responseJson).entry.getPaginationList<Article>(template);
	});

	it(`Response should have properties assigned`, () => {
		expect(response.pageIndex).toEqual(responseJson.pageIndex);
		expect(response.pageSize).toEqual(responseJson.pageSize);
		expect(response.totalCount).toEqual(responseJson.totalCount);
		expect(response.totalPages).toEqual(responseJson.totalPages);
		expect(response.hasPreviousPage).toEqual(responseJson.hasPreviousPage);
		expect(response.hasNextPage).toEqual(responseJson.hasNextPage);
		expect(response.items.length).toEqual(responseJson.items.length);
	});

	it(`Response should have field properties assigned`, () => {
		response.items.forEach((item, index: number) => {
			expect(item.banner).toEqual(responseJson.items[index].fields.banner);
			expect(item.description).toEqual(responseJson.items[index].fields.description);
			expect(item.relatedArticle).toEqual(responseJson.items[index].fields.relatedArticle);
			expect(item.slug).toEqual(responseJson.items[index].fields.slug);
			expect(item.thumbnail).toEqual(responseJson.items[index].fields.thumbnail);
			expect(item.thumbnailLandscape).toEqual(responseJson.items[index].fields.thumbnailLandscape);
			expect(item.title).toEqual(responseJson.items[index].fields.title);
		});
	});
});
