import { QueryParameter, UrlHelper } from '@penzle/core-sdk';
import { WhereLanguage } from '../models/filters/where-language';

export class UrlFactory {
	constructor(
		public host: string,
		public project?: string,
		public environment?: string,
		public defaultLanguage?: string
	) {}

	get getHost(): string {
		if (!this.host) {
			throw new Error('Please define baseUrl');
		}

		if (!this.host.endsWith('/')) {
			return `${this.host}/`;
		}
		return this.host;
	}

	get getBaseUrl(): string {
		const addressTemplate = `${this.getHost}api/project/${this.project ?? 'main'}/environment/${
			this.environment ?? 'main'
		}/`;
		return addressTemplate;
	}

	addDefaultLanguage(parameters: QueryParameter[]): void {
		// If no language is specified, add default language to global settings
		if (this.defaultLanguage) {
			const languageParameter = parameters.find(
				(param) =>
					param
						.getParameter()
						.indexOf('filter[where][and][system.language]=' || 'filter[where][system.language]=') > -1
			);
			if (!languageParameter) {
				// Query did not specify a language parameter, use the language defined globally
				parameters.push(new WhereLanguage(this.defaultLanguage));
			}
		}
	}

	create(action: string, parameters: QueryParameter[]): string {
		this.addDefaultLanguage(parameters);
		const relativeUrl = UrlHelper.addParametersToUrl(action, parameters);
		return `${this.getBaseUrl}${relativeUrl}`;
	}
}
