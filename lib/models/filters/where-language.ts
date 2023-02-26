import { QueryParameter } from '@penzle/core-sdk';
import { BaseQuery } from './base-query';

export class WhereLanguage extends BaseQuery implements QueryParameter {
	constructor(public language: string) {
		super(language);
	}

	getParameter(): string {
		return `filter[where][and][system.language]=${this.getParameterValue()}`;
	}
}
