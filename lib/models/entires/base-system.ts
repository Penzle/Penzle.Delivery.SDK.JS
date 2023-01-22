export interface BaseSystem {
	template: string;

	id: string;

	parentId: string;

	name: string;

	version: string;

	language: string;

	aliasPath: string;

	slug?: string;

	modifiedAt: Date;

	createdAt: Date;
}
