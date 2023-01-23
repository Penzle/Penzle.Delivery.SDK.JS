import { Header, HttpCancellationToken } from '@penzle/core-sdk';

export interface QueryConfig {
	usePreviewMode?: boolean;

	customHeaders?: Header[];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	cancellationToken?: HttpCancellationToken<any>;
}
