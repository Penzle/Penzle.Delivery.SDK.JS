import { QueryParameter } from '@penzle/core-sdk';

export class Page implements QueryParameter {
	constructor(public page: number) {}

	getParameter(): string {
		const page = this.page <= 0 || this.page === 1 ? 0 : this.page - 1;
		return `filter[page]=${page}`;
	}
}
