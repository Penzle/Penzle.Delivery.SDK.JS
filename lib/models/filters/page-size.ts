import { QueryParameter } from '@penzle/core-sdk';

export class PageSize implements QueryParameter {
	constructor(public pageSize: number) {
		if (pageSize < 0) {
			throw Error(`'PageSize' must be a positive integer number or zero.`);
		}
	}

	getParameter(): string {
		return `filter[PageSize]=${this.pageSize}`;
	}
}
