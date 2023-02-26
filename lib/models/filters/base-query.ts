export abstract class BaseQuery {
	defaultValue = '';

	constructor(public value: string) {}

	getParameterValue(): string {
		if (!this.value) {
			return this.defaultValue;
		}

		return this.value;
	}
}
