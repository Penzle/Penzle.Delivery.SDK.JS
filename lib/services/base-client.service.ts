/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiService, Header, Response } from '@penzle/core-sdk';
import { UrlFactory } from '../factories/url-factory';
import { DeliveryConfig, QueryConfig, APIError } from '../models/index';

export abstract class BaseClient {
	constructor(public readonly config: DeliveryConfig, public readonly httpService: ApiService<any>) {}

	urlFactory(): UrlFactory {
		return new UrlFactory(
			this.config.baseAddress,
			this.config.project,
			this.config.environment,
			this.config.defaultLanguage
		);
	}

	protected async get<TRawData>(address: string, queryConfig?: QueryConfig): Promise<Response<TRawData>> {
		try {
			return await this.httpService.get<TRawData>(
				{
					url: address
				},
				{
					responseType: 'json',
					headers: this.getHeaders(queryConfig?.customHeaders),
					retryStrategy: this.config.retryStrategy,
					cancellationToken: queryConfig?.cancellationToken
				}
			);
		} catch (error) {
			throw this.handleAPIError(error);
		}
	}

	handleAPIError(error: any): APIError {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			return {
				name: 'Error',
				message: error.response.data.error,
				status: error.response.status
			};
		}
		if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser
			return {
				name: 'Error',
				message: 'No response from the server',
				status: 0
			};
		}
		// Something happened in setting up the request that triggered an Error
		return {
			name: 'Error',
			message: error.message,
			status: -1
		};
	}

	getHeaders(customHeaders?: Header[]): Header[] {
		const headers: Header[] = [];

		if (customHeaders) {
			headers.push(...customHeaders);
		}

		// add headers from global config
		if (this.config.globalHeaders) {
			headers.push(...this.config.globalHeaders);
		}

		headers.push(this.getAuthorizationHeader(this.config.accessApiToken));

		return headers;
	}

	private getAuthorizationHeader(accessApiToken?: string): Header {
		if (!accessApiToken) {
			throw Error('The authorization header cannot be obtained due to an invalid token');
		}

		return {
			header: 'authorization',
			value: `bearer ${accessApiToken}`
		};
	}
}
