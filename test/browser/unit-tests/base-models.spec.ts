import { BaseModel, BaseSystem, BaseTemplates } from '../../../lib';

describe('Entry entities base models', () => {
	describe('BaseModel', () => {
		let baseModel: BaseModel<BaseSystem>;
		const system: BaseSystem = {
			template: 'TestTemplate',
			id: '123',
			parentId: '456',
			name: 'TestName',
			version: '1.0',
			language: 'en',
			aliasPath: '/test',
			slug: 'test-slug',
			modifiedAt: new Date(),
			createdAt: new Date()
		};
		const baseTemplates: BaseTemplates[] = [
			{ template: 'TestTemplate', fields: { key1: 'value1', key2: 'value2' } },
			{ template: 'OtherTemplate', fields: { key3: 'value3', key4: 'value4' } }
		];

		beforeEach(() => {
			baseModel = new BaseModel<BaseSystem>();
			baseModel.system = system;
			baseModel.base = baseTemplates;
		});

		it('should return the value of the specified key for the specified template', () => {
			expect(baseModel.get('testtemplate', 'key1')).toEqual('value1');
			expect(baseModel.get('othertemplate', 'key3')).toEqual('value3');
		});

		it('should return undefined for non-existent template or key', () => {
			expect(baseModel.get('nonexistenttemplate', 'key1')).toBeUndefined();
			expect(baseModel.get('testtemplate', 'nonexistentkey')).toBeUndefined();
		});

		it('should return the correct system', () => {
			expect(baseModel.system).toEqual(system);
		});

		it('should return the correct base templates', () => {
			expect(baseModel.base).toEqual(baseTemplates);
		});
	});

	describe('BaseSystem', () => {
		let baseSystem: BaseSystem;
		beforeEach(() => {
			baseSystem = {
				template: 'TestTemplate',
				id: '123',
				parentId: '456',
				name: 'TestName',
				version: '1.0',
				language: 'en',
				aliasPath: '/test',
				slug: 'test-slug',
				modifiedAt: new Date(),
				createdAt: new Date()
			};
		});
		it('should have the correct template', () => {
			expect(baseSystem.template).toEqual('TestTemplate');
		});

		it('should have the correct id', () => {
			expect(baseSystem.id).toEqual('123');
		});

		it('should have the correct parentId', () => {
			expect(baseSystem.parentId).toEqual('456');
		});

		it('should have the correct name', () => {
			expect(baseSystem.name).toEqual('TestName');
		});

		it('should have the correct version', () => {
			expect(baseSystem.version).toEqual('1.0');
		});

		it('should have the correct language', () => {
			expect(baseSystem.language).toEqual('en');
		});

		it('should have the correct aliasPath', () => {
			expect(baseSystem.aliasPath).toEqual('/test');
		});

		it('should have the correct slug', () => {
			expect(baseSystem.slug).toEqual('test-slug');
		});

		it('should have the correct modifiedAt', () => {
			expect(baseSystem.modifiedAt).toEqual(baseSystem.modifiedAt);
		});

		it('should have the correct createdAt', () => {
			expect(baseSystem.createdAt).toEqual(baseSystem.createdAt);
		});

		it('should update the template correctly', () => {
			baseSystem.template = 'UpdatedTemplate';
			expect(baseSystem.template).toEqual('UpdatedTemplate');
		});

		it('should update the id correctly', () => {
			baseSystem.id = '789';
			expect(baseSystem.id).toEqual('789');
		});

		it('should update the parentId correctly', () => {
			baseSystem.parentId = '012';
			expect(baseSystem.parentId).toEqual('012');
		});

		it('should update the name correctly', () => {
			baseSystem.name = 'UpdatedName';
			expect(baseSystem.name).toEqual('UpdatedName');
		});

		it('should update the version correctly', () => {
			baseSystem.version = '2.0';
			expect(baseSystem.version).toEqual('2.0');
		});

		it('should update the language correctly', () => {
			baseSystem.language = 'fr';
			expect(baseSystem.language).toEqual('fr');
		});

		it('should update the aliasPath correctly', () => {
			baseSystem.aliasPath = '/updated';
			expect(baseSystem.aliasPath).toEqual('/updated');
		});

		it('should update the slug correctly', () => {
			baseSystem.slug = 'updated-slug';
			expect(baseSystem.slug).toEqual('updated-slug');
		});

		it('should update the modifiedAt correctly', () => {
			const newDate = new Date();
			baseSystem.modifiedAt = newDate;
			expect(baseSystem.modifiedAt).toEqual(newDate);
		});

		it('should update the createdAt correctly', () => {
			const newDate = new Date();
			baseSystem.createdAt = newDate;
			expect(baseSystem.createdAt).toEqual(newDate);
		});
	});

	describe('BaseTemplates', () => {
		let baseTemplates: BaseTemplates;

		beforeEach(() => {
			baseTemplates = {
				template: 'TestTemplate',
				fields: { key1: 'value1', key2: 'value2' }
			};
		});

		it('should have properties template, fields', () => {
			expect(baseTemplates.template).toBeDefined();
			expect(baseTemplates.fields).toBeDefined();
		});

		it('should have the correct template', () => {
			expect(baseTemplates.template).toEqual('TestTemplate');
		});

		it('should have the correct fields', () => {
			expect(baseTemplates.fields).toEqual({ key1: 'value1', key2: 'value2' });
		});

		it('should add fields correctly', () => {
			baseTemplates.fields.key3 = 'value3';
			expect(baseTemplates.fields).toEqual({ key1: 'value1', key2: 'value2', key3: 'value3' });
		});

		it('should update fields correctly', () => {
			baseTemplates.fields.key1 = 'newValue1';
			expect(baseTemplates.fields).toEqual({ key1: 'newValue1', key2: 'value2' });
		});
	});
});
