import { QueryParameter } from '@penzle/core-sdk';

export class QueryNameValue implements QueryParameter {
	constructor(public name: string, public value: string) {
		if (!name) {
			throw Error(`Name of the parameter is not specified`);
		}
	}

	getParameter(): string {
		return `${this.name}=${encodeURIComponent(this.value)}`;
	}
}
