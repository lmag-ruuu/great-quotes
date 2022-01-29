import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "../UI/Link";
import { quote } from "../../../utils/types";

interface Quote {
  quote: quote;
}

function QuoteItem(props: Quote) {
  return (
    <Grid item md={4} sm={6} pl={2} pr={2} pb={2} minWidth={"360px"}>
      <Card sx={{ pb: "6px", minWidth: 275, bgcolor: "background.paper" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Quote
          </Typography>
          <Typography variant="h5" component="div">
            {props.quote.author}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Author
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight={"bold"}>
            <i>&quot;{props.quote.text}&quot;</i>
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            sx={{ ml: "40px", color: "#333", fontWeight: "bold" }}
            href={`/quote/${props.quote._id}`}
          >
            Open
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default QuoteItem;
