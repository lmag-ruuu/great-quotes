import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { quote } from "../../utils/types";

interface QuoteDetailProp {
  quote: quote;
  url: string;
}

function QuoteDetail(props: QuoteDetailProp) {
  const [quote, setQuote] = useState<quote>(props.quote);

  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <Typography>
        Aqui va detalles del quote el author seria {quote.author}
      </Typography>
      <Typography>
        Aqui va detalles del quote el texto seria {quote.text}
      </Typography>
      {quote.comments.map((comment, index) => (
        <Typography key={index}>comentario: {comment}</Typography>
      ))}
      <Typography>Y aqui para poner y enviar un comentario xd</Typography>
    </Stack>
  );
}

export async function getServerSideProps(context: any) {
  // fetch the todo, the param was received via context.query.id
  const res = await fetch(process.env.API_URL + "/" + context.query.id);
  const quote = await res.json();

  //return the serverSideProps the todo and the url from out env variables for frontend api calls
  return { props: { quote, url: process.env.API_URL } };
}

export default QuoteDetail;
