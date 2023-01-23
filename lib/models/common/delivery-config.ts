import { RetryStrategySettings, ApiService, Header } from '@penzle/core-sdk';

export interface DeliveryConfig {
	baseAddress: string;

	accessApiToken: string;

	project?: string;

	environment?: string;

	retryStrategy?: RetryStrategySettings;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	httpService?: ApiService<any>;

	globalHeaders?: Header[];
}
