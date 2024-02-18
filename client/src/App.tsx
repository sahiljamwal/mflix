import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { ICardProps } from "./types/components/cards.type";
import { fetchMoviesPagination } from "./services/movies.service";
import {
  CircularProgress,
  MenuItem,
  Pagination,
  Select,
  Grid,
} from "@mui/material";
import Search from "./components/search/search.component";

function App() {
  const [movies, setMovies] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [records, setRecords] = useState(0);

  const fetchMovies = async (searchQuery: string = "") => {
    try {
      setLoading(true);
      const response = await fetchMoviesPagination(
        currentPage,
        itemsPerPage,
        searchQuery
      );
      if (response.success) {
        setMovies(response.data.data);
        setRecords(response.data.meta.count);
      }
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, newPage: number) =>
    setCurrentPage(newPage);

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(+(event.target.value as string));
    setCurrentPage(1);
  };

  const handleSearchSubmit = async (searchQuery: string) => {
    await fetchMovies(searchQuery);
  };

  useEffect(() => {
    const processInitialRequest = async () => await fetchMovies();

    processInitialRequest();
  }, [currentPage, itemsPerPage]);

  return (
    <div>
      <h1>M-Flix</h1>
      <Search onSearchSubmit={handleSearchSubmit} />
      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <CardList movies={movies} />
            <br />
            <Grid container justifyContent="center">
              <Grid item>
                <Pagination
                  count={Math.ceil(records / itemsPerPage)}
                  page={currentPage}
                  onChange={handleChange}
                  showFirstButton
                  showLastButton
                />
              </Grid>
              <Grid item>
                <Select
                  size="small"
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                >
                  <MenuItem value={10}>10 per page</MenuItem>
                  <MenuItem value={20}>20 per page</MenuItem>
                  <MenuItem value={50}>50 per page</MenuItem>
                  <MenuItem value={100}>100 per page</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
