export interface Pager<T> {
	totalCount: number;
	itemsPerPage: number;
	page: number;
	totalPages: number;
	table: string;
	data: T[];
};