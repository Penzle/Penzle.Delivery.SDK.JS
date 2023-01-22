export class QueryPaginationBuilder {
	private page = 0;

	private pageSize = 10;

	static Default = new QueryPaginationBuilder();

	WithPage(page: number) {
		this.page = page <= 0 || page === 1 ? 0 : page - 1;
		return this;
	}

	WithPageSize(pageSize: number) {
		this.pageSize = pageSize;
		return this;
	}

	get getPage(): number {
		return this.page;
	}

	get getPageSize(): number {
		return this.pageSize;
	}
}
