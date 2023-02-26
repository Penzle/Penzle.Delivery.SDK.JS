import { BaseQuery } from './base-query';
import { Query } from './query';

export class WhereIn extends BaseQuery implements Query {
	constructor(public field: string, public values: string[]) {
		super('');
	}

	getParameter(): string {
		return `filter[where][and]${this.getValue()}`;
	}

	getOrParameter(): string {
		return `filter[where][or]${this.getValue()}`;
	}

	private getValue(): string {
		return `[${this.field.trim()}][inq]=${this.getStringFromArray()}`;
	}

	getStringFromArray(): string | undefined {
		if (!this.values || !Array.isArray(this.values)) {
			return this.defaultValue;
		}

		return this.values.map((value) => value.trim()).join(',');
	}
}
