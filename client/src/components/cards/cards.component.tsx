import { ICardProps } from "../../types/components/cards.type";
import {
  Card as MUICard,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Card = ({ poster, title, imdb }: ICardProps) => {
  const defaultPoster =
    "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png";

  return (
    <MUICard style={{ maxWidth: 345 }}>
      <CardMedia
        component={"img"}
        src={poster ?? defaultPoster}
        alt={title}
        style={{ objectFit: "cover", height: 140, width: "100%" }}
      />

      <CardContent>
        <Typography variant="h6" noWrap title={title}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {" "}
          Rating: {imdb.rating}
        </Typography>
      </CardContent>
    </MUICard>
  );
};

export default Card;
