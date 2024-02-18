import { Grid } from "@mui/material";
import { ICardListProps } from "../../types/components/cards.type";
import Card from "../cards/cards.component";

const CardList = ({ movies }: ICardListProps) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card {...movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
