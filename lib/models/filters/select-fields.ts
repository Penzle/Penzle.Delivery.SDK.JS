import { QueryParameter } from '@penzle/core-sdk';
import { BaseQuery } from './base-query';

export class SelectFields extends BaseQuery implements QueryParameter {
	constructor(public fields: string[]) {
		super('');
	}

	getParameter(): string {
		return this.fields.map((field) => `filter[fields][${field.trim()}]=true`).join('&');
	}
}
