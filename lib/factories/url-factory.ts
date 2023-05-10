import { QueryParameter, UrlHelper } from '@penzle/core-sdk';
import { WhereLanguage } from '../models/filters/where-language';
import { UsePreviewMode } from '../models/filters';

export class UrlFactory {
	penzleAPIUrl = 'https://api.penzle.com/';

	constructor(
		public host?: string,
		public project?: string,
		public environment?: string,
		public defaultLanguage?: string,
		public usePreviewMode?: boolean
	) {}

	get getHost(): string {
		if (!this.host) {
			this.host = this.penzleAPIUrl;
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

	addPreviewMode(parameters: QueryParameter[]): void {
		if (this.usePreviewMode) {
			const previewParameter = parameters.find((param) => param.getParameter().indexOf('preview=') > -1);
			if (!previewParameter) {
				// Query did not specify a preview parameter, use the preview defined globally
				parameters.push(new UsePreviewMode());
			}
		}
	}

	create(action: string, parameters: QueryParameter[]): string {
		this.addDefaultLanguage(parameters);
		this.addPreviewMode(parameters);
		const relativeUrl = UrlHelper.addParametersToUrl(action, parameters);
		return `${this.getBaseUrl}${relativeUrl}`;
	}
}
