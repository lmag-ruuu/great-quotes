import { FC } from "react";
import QuoteItem from "./QuoteItem";
import Grid from "@mui/material/Grid";

type QuoteList = {
  id: string;
  author: string;
  text: string;
}[];

const QuoteList: FC<{ QuoteList: QuoteList }> = (props) => {
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
      {props.QuoteList.map((quote) => {
        const selectColor = Math.floor(Math.random() * 13);
        return <QuoteItem Quote={quote} key={quote.id} color={selectColor} />;
      })}
    </Grid>
  );
};

export default QuoteList;
