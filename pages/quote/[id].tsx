import { useState, FormEventHandler, useRef } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { quote } from "../../utils/types";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import mongoDB, { MongoClient, ObjectId } from "mongodb";

interface QuoteDetailProp {
  quote: quote;
  findedQuote: quote;
}

function QuoteDetail(props: QuoteDetailProp) {
  const [quote, setQuote] = useState<quote>(props.quote);
  const commentRef = useRef<HTMLInputElement>(null);

  //function for add comment
  const addComment: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    //create new comment
    if (commentRef.current) {
      let newQuote: quote = {
        ...quote,
        comments: quote.comments.concat(commentRef.current.value),
      };

      await fetch(`/api/${quote._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        // send copy of todo with property
        body: JSON.stringify(newQuote),
      });

      setQuote(newQuote);

      commentRef.current.value = "";
    }
  };

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
          onSubmit={addComment}
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
            inputRef={commentRef}
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
  const quoteId = context.query.id;
  // get todo data from API
  const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
  const client = new MongoClient(url);
  const quotes: Array<quote> = [];
  let finded: quote;

  try {
    await client.connect();
    const db: mongoDB.Db = client.db("quotesDB");
    const quotesCollection: mongoDB.Collection = db.collection("quotes");
    const results = await quotesCollection.find().toArray();

    results.forEach((result) =>
      quotes.push({
        author: result.author,
        text: result.text,
        _id: result._id.toString(),
        comments: result.comments,
      })
    );
  } finally {
    await client.close();
  }

  const quote = quotes.find((quote) => quote._id === quoteId.toString());

  // return props
  return {
    props: { quote },
  };
}

export default QuoteDetail;
