export interface DeliverySettings {
	/**
	 * ProjectId of your Penzle project
	 */
	projectId: string;

	/**
	 * Base URL of your Penzle API
	 */
	baseAddress: string;

	/**
	 * Base URL of your Penzle API
	 */
	environment: string;

	/**
	 * Preview API key
	 */
	previewApiKey?: string;

	/**
	 * Proxy configuration
	 */
	// proxy?: IDeliveryClientProxyConfig;

	/**
	 * Retry policy configuration
	 */
	// retryStrategy?: IRetryStrategyOptions;

	/**
	 * Can be used to inject custom Http service to perform requests
	 */
	// httpService?: IHttpService<any>;

	/**
	 * Extra headers added to each http request
	 */
	// globalHeaders?: (queryConfig: IQueryConfig) => IHeader[];

	/**
	 * Default query configuration. Can be overriden by individual queries.
	 */
	// defaultQueryConfig?: IQueryConfig;

	/**
	 * Indicates how linked item references are handled (can be used to disable refence mapping when you encounter an issue
	 * with circular refences)
	 */
	// linkedItemsReferenceHandler?: LinkedItemsReferenceHandler;

	/**
	 * Sets custom domain for assets
	 */
	// assetsDomain?: string;

	/**
	 * Codename of rendition preset to be applied by default to the base asset URL path.
	 */
	// defaultRenditionPreset?: string;
}
