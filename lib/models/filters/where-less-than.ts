import { BaseQuery } from './base-query';
import { Query } from './query';

export class WhereLessThan extends BaseQuery implements Query {
	constructor(public field: string, public value: string) {
		super(value);
	}

	getParameter(): string {
		return `filter[where][and]${this.getValue()}`;
	}

	getOrParameter(): string {
		return `filter[where][or]${this.getValue()}`;
	}

	private getValue(): string {
		return `[${this.field.trim()}][lt]=${this.getParameterValue()}`;
	}
}
