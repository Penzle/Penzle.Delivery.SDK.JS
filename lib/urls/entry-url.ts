export class EntryApiUrls {
	static getEntries(
		template: string,
		page: number,
		pageSize: number,
		parentId?: string,
		language?: string,
		ids?: string
	): string {
		return `entries/${template}?parentId=${parentId}&language=${language}&page=${page}&pageSize=${pageSize}&ids=${ids}`;
	}

	static getEntry(entryId: string, language?: string): string {
		return !language ? `entries/${entryId}` : `entries/${entryId}?language=${language}`;
	}

	// static getEntryByAliasUrl(uri: string, language?: string): string {
	// 	return !language ? `entries?aliasUrl=${uri}` : `entries/url?language=${language}&aliasUrl=${uri}`;
	// }
}
