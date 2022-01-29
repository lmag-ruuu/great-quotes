import { FC } from "react";
import QuoteItem from "./QuoteItem";
import Grid from "@mui/material/Grid";
import { quote } from "../../../utils/types";

interface quoteList {
  quotes: Array<quote>;
}

function QuoteList(props: quoteList) {
  return (
    <Grid
      container
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "center",
        lg: "initial",
      }}
    >
      {props.quotes.map((quote) => {
        const selectColor = Math.floor(Math.random() * 13);
        return <QuoteItem quote={quote} key={quote._id} />;
      })}
    </Grid>
  );
}

export default QuoteList;
