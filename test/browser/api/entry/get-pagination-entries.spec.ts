import { getJsonDeliveryClient } from '../../configuration/index';
import * as responseJson from './get-entires.spec.json';
import { Entry, PagedList } from '../../../../lib';
import { Article } from '../../models/article';

describe('Get entires with entry wrapper', () => {
	let response: PagedList<Entry<Article>>;
	const template = 'article';

	beforeAll(async () => {
		response = await getJsonDeliveryClient(responseJson).entry.getPaginationEntries<Article>(template);
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
			expect(item.fields.banner).toEqual(responseJson.items[index].fields.banner);
			expect(item.fields.description).toEqual(responseJson.items[index].fields.description);
			expect(item.fields.relatedArticle).toEqual(responseJson.items[index].fields.relatedArticle);
			expect(item.fields.slug).toEqual(responseJson.items[index].fields.slug);
			expect(item.fields.thumbnail).toEqual(responseJson.items[index].fields.thumbnail);
			expect(item.fields.thumbnailLandscape).toEqual(responseJson.items[index].fields.thumbnailLandscape);
			expect(item.fields.title).toEqual(responseJson.items[index].fields.title);
		});
	});

	it(`Response should have system properties assigned`, () => {
		response.items.forEach((item, index: number) => {
			expect(item.system.aliasPath).toEqual(responseJson.items[index].system.aliasPath);
			expect(item.system.createdAt.toString()).toEqual(responseJson.items[index].system.createdAt);
			expect(item.system.id).toEqual(responseJson.items[index].system.id);
			expect(item.system.language).toEqual(responseJson.items[index].system.language);
			expect(item.system.modifiedAt.toString()).toEqual(responseJson.items[index].system.modifiedAt);
			expect(item.system.name).toEqual(responseJson.items[index].system.name);
			expect(item.system.parentId).toEqual(responseJson.items[index].system.parentId);
			expect(item.system.slug).toEqual(responseJson.items[index].system.slug);
			expect(item.system.template).toEqual(responseJson.items[index].system.template);
			expect(item.system.version).toEqual(responseJson.items[index].system.version);
		});
	});
});
