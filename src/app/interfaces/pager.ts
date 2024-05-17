export class Pager<T> {
	totalCount: number;
	itemsPerPage: number;
	page: number;
	totalPages: number;
	data: T[];

	constructor(
		totalCount: number = 1,
		itemsPerPage: number = 1,
		page: number = 1,
		totalPages: number = 2,
		data: T[] = []
	) {
		this.totalCount   = totalCount;
		this.itemsPerPage = itemsPerPage;
		this.page         = page;
		this.totalPages   = totalPages;
		this.data         = data;
	}
};