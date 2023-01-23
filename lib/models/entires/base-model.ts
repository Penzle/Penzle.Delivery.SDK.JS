/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseSystem } from './base-system';
import { BaseTemplates } from './base-templates';

export class BaseModel<TBaseSystemModel extends BaseSystem> {
	system!: TBaseSystemModel;

	base: BaseTemplates[] = [];

	get(template: string, key: string): any {
		return this.find(template, key);
	}

	private find(template: string, key: string): any {
		return (
			this.base
				.filter((baseTemplatesModel) => baseTemplatesModel.template.toLowerCase() === template.toLowerCase())
				.map((baseTemplatesModel) => baseTemplatesModel.fields[key])[0] || undefined
		);
	}
}
