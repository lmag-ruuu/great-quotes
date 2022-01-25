import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "../UI/Link";

type Quote = {
  id: string;
  text: string;
  author: string;
};

const color = [
  "#dee2e6",
  "#ffa8a8",
  "#faa2c1",
  "#e599f7",
  "#b197fc",
  "#91a7ff",
  "#74c0fc",
  "#66d9e8",
  "#63e6be",
  "#8ce99a",
  "#c0eb75",
  "#ffe066",
  "#ffc078",
];

const QuoteItem: FC<{ Quote: Quote; color: number }> = (props) => {
  return (
    <Grid item md={4} sm={6} pl={2} pr={2} pb={2} minWidth={"360px"}>
      <Card sx={{ pb: "6px", minWidth: 275, bgcolor: color[props.color] }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Quote
          </Typography>
          <Typography variant="h5" component="div">
            {props.Quote.author}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Author
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight={"bold"}>
            <i>&quot;{props.Quote.text}&quot;</i>
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            sx={{ ml: "40px", color: "#333", fontWeight: "bold" }}
            href={"/quote-detail"}
          >
            Open
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default QuoteItem;
