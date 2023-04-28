import { QueryParameter } from '@penzle/core-sdk';

export class Include implements QueryParameter {
	constructor(public include: number) {
		if (include < 0 || include > 10) {
			throw Error(`'Include' must be a between 0 and 10.`);
		}
	}

	getParameter(): string {
		return `include=${this.include}`;
	}
}
