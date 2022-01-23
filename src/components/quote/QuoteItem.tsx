import { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Quote = {
  id: string;
  text: string;
  author: string;
};

const QuoteItem: FC<{ Quote: Quote }> = (props) => {
  return (
    <Stack direction={"column"}>
      <Typography>{props.Quote.author}</Typography>
      <Typography>{props.Quote.text}</Typography>
    </Stack>
  );
};

export default QuoteItem;
