import { RetryStrategySettings, ApiService, Header } from '@penzle/core-sdk';

/**
 * DeliveryConfig is an interface representing the configuration settings
 * required for interacting with the Penzle Delivery API.
 */
export interface DeliveryConfig {
	/**
	 * The API access token required to authenticate requests.
	 */
	accessApiToken: string;

	/**
	 * The base address for the Penzle Delivery API (optional).
	 * If not provided, the default address 'https://api.penzle.com' will be used.
	 */
	baseAddress?: string;

	/**
	 * The identifier for a specific project within the Penzle platform (optional).
	 * If not provided, the default project 'main' will be used.
	 */
	project?: string;

	/**
	 * The identifier for a specific environment within the project (optional).
	 * If not provided, the default environment 'main' will be used.
	 */
	environment?: string;

	/**
	 * Configuration for the retry strategy to handle request failures (optional).
	 */
	retryStrategy?: RetryStrategySettings;

	/**
	 * An instance of the ApiService to be used for making HTTP requests (optional).
	 * This allows for customizing the underlying HTTP service implementation.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	httpService?: ApiService<any>;

	/**
	 * The default language for content entries, used when a specific language is not provided (optional).
	 */
	defaultLanguage?: string;

	/**
	 * A boolean flag indicating if the preview mode should be enabled, which allows fetching draft content (optional).
	 */
	usePreviewMode?: boolean;

	/**
	 * A collection of global headers to be included in every request to the Penzle Delivery API (optional).
	 */
	globalHeaders?: Header[];
}
