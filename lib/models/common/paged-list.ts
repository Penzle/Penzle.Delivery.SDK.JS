import { ItemCollection } from './item-collection';

export interface PagedList<TEntity> extends ItemCollection<TEntity> {
	pageIndex: number;
	pageSize: number;
	totalCount: number;
	totalPages: number;
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	items: TEntity[];
}
