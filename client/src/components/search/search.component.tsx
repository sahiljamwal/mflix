import { useState } from "react";
import { Grid, Input, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search: React.FC<{
  onSearchSubmit: (searchField: string) => Promise<void>;
}> = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSearchQuery(event.target.value);

  const handleSearchSubmit = async () => {
    await onSearchSubmit(searchQuery);
  };

  return (
    <Grid container justifyContent="center" marginBottom="10px">
      <Grid item>
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearchSubmit();
            }
          }}
        />
      </Grid>
      <Grid item>
        <IconButton onClick={handleSearchSubmit}>
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Search;
