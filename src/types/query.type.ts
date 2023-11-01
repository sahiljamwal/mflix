import { FilterQuery, ProjectionType, QueryOptions } from "mongoose";

export interface IFindQueryOptions<T> {
  pageNum: number;
  pageSize: number;
  filter: FilterQuery<T>;
  projection?: ProjectionType<T>;
  options?: QueryOptions<T>;
  sort?: { [K in keyof T]?: any };
}
