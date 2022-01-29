import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { quote } from "../../utils/types";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

interface QuoteDetailProp {
  quote: quote;
  url: string;
}

function QuoteDetail(props: QuoteDetailProp) {
  const [quote, setQuote] = useState<quote>(props.quote);

  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <Typography
        variant="h4"
        component="div"
        width={{ sm: "90vw", md: "80vw" }}
        alignSelf={"center"}
      >
        &quot;{props.quote.text}&quot;
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        component="div"
        alignSelf={"center"}
      >
        {props.quote.author}
      </Typography>
      <Box
        sx={{
          p: 4,
          bgcolor: "background.default",
          gap: 2,
          width: { sm: "90vw", md: "80vw" },
          alignSelf: "center",
        }}
      >
        <Typography variant="body2" component="div" marginBottom={3}>
          Comments:
        </Typography>
        {quote.comments.map((comment, index) => (
          <Typography
            sx={{ borderBottom: "2px solid #ddd", pt: 1, pb: 1 }}
            key={index}
          >
            {comment}
          </Typography>
        ))}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="add comment"
            inputProps={{ "aria-label": "add comment" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
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
