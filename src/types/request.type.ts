import { Request } from "express";

interface IFilterType {
  [key: string]: IRangeFilter | string[];
}

interface IRangeFilter {
  from?: number;
  to?: number;
}

export interface IQueryRequest extends Request {
  query: {
    pageNum: string;
    pageSize: string;
  };
  body: {
    data: {
      search?: string;
      sort?: { [key: string]: 1 | -1 };
      filter?: { [key: string]: IFilterType };
    };
  };
}
