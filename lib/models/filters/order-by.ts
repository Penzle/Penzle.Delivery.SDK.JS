import { QueryParameter } from '@penzle/core-sdk';
import { SortOrder } from './sort-order';

export class OrderBy implements QueryParameter {
	constructor(public field: string, public sortOrder: SortOrder) {
		if (!field) {
			throw Error(`Field specified in 'Order' can't be null or empty`);
		}
	}

	getParameter(): string {
		return `filter[order]=${this.getValue()}`;
	}

	private getValue(): string {
		return `${this.field.trim()} ${this.sortOrder}`;
	}
}
