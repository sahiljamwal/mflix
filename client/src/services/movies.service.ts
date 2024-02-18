import axios from "axios";
import { IMoviesResponse } from "../types/services/movies.types";

const { VITE_MFLIX_API_HOST } = import.meta.env;
const client = axios.create({ baseURL: VITE_MFLIX_API_HOST });

export const fetchMoviesPagination = async (
  pageNum: number,
  pageSize: number,
  searchQuery: string = ""
) => {
  const payload = { data: {} };
  if (searchQuery) {
    payload.data = { search: searchQuery };
  }
  try {
    const response = await client.request<IMoviesResponse>({
      url: `/movies?pageNum=${pageNum}&pageSize=${pageSize}`,
      method: "POST",
      data: payload,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
