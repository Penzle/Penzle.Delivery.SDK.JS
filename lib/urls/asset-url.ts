export class ApiUrls {
	static getAssets(
		parentId: string,
		language: string,
		keyword: string,
		tag: string,
		mimeType: string,
		ids: string,
		page: number,
		pageSize: number,
		orderBy: string,
		direction: string
	): string {
		return `assets?parentId=${parentId}&language=${language}&keyword=${keyword}&tag=${tag}&mimeType=${mimeType}&page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&direction=${direction}&ids=${ids}`;
	}

	static getAsset(id: string, language: string): string {
		return `assets/${id}?language=${language}`;
	}
}
