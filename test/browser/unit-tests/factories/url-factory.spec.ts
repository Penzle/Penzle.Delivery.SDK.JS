import { QueryParameter } from '@penzle/core-sdk';
import {
	OrderBy,
	Page,
	PageSize,
	QueryValue,
	SelectFields,
	UrlFactory,
	WhereEquals,
	WhereGreaterThan,
	WhereIn,
	WhereLanguage,
	WhereLessThan
} from '../../../../lib';

describe('UrlFactory', () => {
	let urlFactory: UrlFactory;

	beforeEach(() => {
		urlFactory = new UrlFactory('https://base-url.com');
	});

	describe('getHost', () => {
		it('should return the base URL with a trailing slash when the host property does not have a trailing slash', () => {
			expect(urlFactory.getHost).toBe('https://base-url.com/');
		});

		it('should return the base URL when the host property has a trailing slash', () => {
			urlFactory = new UrlFactory('https://base-url.com/');
			expect(urlFactory.getHost).toBe('https://base-url.com/');
		});

		it('should throw an error if the host property is not defined', () => {
			urlFactory = new UrlFactory(undefined);
			expect(() => urlFactory.getHost).toThrowError('Please define baseUrl');
		});
	});

	describe('getBaseUrl', () => {
		it('should return the base URL with the default project and environment', () => {
			expect(urlFactory.getBaseUrl).toBe('https://base-url.com/api/project/main/environment/main/');
		});

		it('should return the base URL with the specified project and environment if base URL contains a trailing slash', () => {
			urlFactory = new UrlFactory('https://base-url.com/', 'my-project', 'my-environment');
			expect(urlFactory.getBaseUrl).toBe(
				'https://base-url.com/api/project/my-project/environment/my-environment/'
			);
		});

		it('should return the base URL with the specified project and environment', () => {
			urlFactory = new UrlFactory('https://base-url.com', 'my-project', 'my-environment');
			expect(urlFactory.getBaseUrl).toBe(
				'https://base-url.com/api/project/my-project/environment/my-environment/'
			);
		});
	});

	describe('addDefaultLanguage', () => {
		it('should add default language when none specified and default language specified globally', () => {
			urlFactory.defaultLanguage = 'en';
			const parameters: QueryParameter[] = [];
			urlFactory.addDefaultLanguage(parameters);
			expect(parameters.length).toEqual(1);
			expect(parameters[0]).toBeInstanceOf(WhereLanguage);
			expect((parameters[0] as WhereLanguage).language).toEqual('en');
		});

		it('should not add default language when one specified', () => {
			urlFactory.defaultLanguage = 'en';
			const parameters = [new WhereLanguage('fr')];
			urlFactory.addDefaultLanguage(parameters);
			expect(parameters.length).toEqual(1);
			expect(parameters[0]).toBeInstanceOf(WhereLanguage);
			expect((parameters[0] as WhereLanguage).language).toEqual('fr');
		});

		it('should not add default language when none specified globally', () => {
			const parameters: QueryParameter[] = [];
			urlFactory.addDefaultLanguage(parameters);
			expect(parameters.length).toEqual(0);
		});
	});

	describe('create', () => {
		it('should add the default language to the parameters if it is defined globally and not in the parameters array', () => {
			urlFactory = new UrlFactory('https://base-url.com', undefined, undefined, 'en');
			const parameters: QueryParameter[] = [];
			const url = urlFactory.create('my-action', parameters);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/my-action?filter[where][and][system.language]=en'
			);
		});

		it('should not add default language if it was specified', () => {
			urlFactory.defaultLanguage = 'en';
			const url = urlFactory.create('posts', [new WhereLanguage('fr')]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][system.language]=fr'
			);
		});

		it('should not add the default language to the parameters if it is not defined globally', () => {
			const parameters: QueryParameter[] = [];
			const url = urlFactory.create('my-action', parameters);
			expect(url).toBe('https://base-url.com/api/project/main/environment/main/my-action');
		});

		it('should return correct URL with WhereLessThan parameter', () => {
			const url = urlFactory.create('posts', [new WhereLessThan('field1', '10')]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][field1][lt]=10'
			);
		});

		it('should return correct URL with multiple WhereLessThan parameters', () => {
			const url = urlFactory.create('posts', [
				new WhereLessThan('field1', '10'),
				new WhereLessThan('field2', '20')
			]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][field1][lt]=10&filter[where][and][field2][lt]=20'
			);
		});

		it('should return correct URL with WhereLanguage parameter', () => {
			const url = urlFactory.create('posts', [new WhereLanguage('en')]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][system.language]=en'
			);
		});

		it('should return correct URL with WhereIn parameter', () => {
			const url = urlFactory.create('posts', [new WhereIn('field1', ['value1', 'value2'])]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][field1][inq]=value1,value2'
			);
		});

		it('should return correct URL with WhereGreaterThan parameter', () => {
			const url = urlFactory.create('posts', [new WhereGreaterThan('field1', '10')]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][field1][gt]=10'
			);
		});

		it('should return correct URL with WhereEquals parameter', () => {
			const url = urlFactory.create('posts', [new WhereEquals('field1', '10')]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][field1]=10'
			);
		});

		it('should return correct URL with SelectFields parameter', () => {
			const url = urlFactory.create('posts', [new SelectFields(['field1', 'field2'])]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[fields][field1]=true&filter[fields][field2]=true'
			);
		});

		it('should return correct URL with Page parameter', () => {
			const url = urlFactory.create('posts', [new Page(3)]);
			expect(url).toBe('https://base-url.com/api/project/main/environment/main/posts?filter[page]=2');
		});

		it('should return correct URL with PageSize parameter', () => {
			const url = urlFactory.create('posts', [new PageSize(5)]);
			expect(url).toBe('https://base-url.com/api/project/main/environment/main/posts?filter[PageSize]=5');
		});

		it('should return correct URL with OrderBy parameter', () => {
			const url = urlFactory.create('posts', [new OrderBy('fieldName', 'asc')]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[order]=fieldName asc'
			);
		});

		it('should return correct URL with multiple parameters', () => {
			const url = urlFactory.create('posts', [
				new WhereLanguage('en'),
				new Page(3),
				new PageSize(5),
				new OrderBy('fieldName', 'desc')
			]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][system.language]=en&filter[page]=2&filter[PageSize]=5&filter[order]=fieldName desc'
			);
		});

		it('should return correct URL with parameters', () => {
			const url = urlFactory.create('posts', [
				new WhereLanguage('en'),
				new QueryValue('filter[order]=published_at%20desc'),
				new SelectFields(['title', 'content']),
				new WhereIn('tags', ['news', 'sports'])
			]);
			expect(url).toBe(
				'https://base-url.com/api/project/main/environment/main/posts?filter[where][and][system.language]=en&filter[order]=published_at%20desc&filter[fields][title]=true&filter[fields][content]=true&filter[where][and][tags][inq]=news,sports'
			);
		});
	});
});
