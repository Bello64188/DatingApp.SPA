export interface Pagination {
  currentPage:number;
  itemPerPage:number;
  totalPage:number;
  totalItem:number;
}
export class PaginatedResult<T>{
  result:T;
  pagination:Pagination;

}
