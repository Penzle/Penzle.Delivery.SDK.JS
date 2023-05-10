import { QueryParameter } from '@penzle/core-sdk';

export class UsePreviewMode implements QueryParameter {
	static queryValue = 'preview=true';

	getParameter(): string {
		return UsePreviewMode.queryValue;
	}
}
