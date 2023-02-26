import { QueryParameter } from '@penzle/core-sdk';

export class QueryValue implements QueryParameter {
	constructor(public value: string) {
		if (!value) {
			throw Error(`Value of the parameter is not specified`);
		}
	}

	getParameter(): string {
		return this.value;
	}
}
