import { QueryParameter } from '@penzle/core-sdk';

export interface Query extends QueryParameter {
	getOrParameter(): string;
}
