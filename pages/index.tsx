import { Stack, Divider } from "@mui/material";
import QuoteList from "../src/components/quote/QuoteList";
import HeaderCustom from "../src/components/UI/Header";
import { quote } from "../utils/types";
import mongoDB, { MongoClient } from "mongodb";

interface HomeProps {
  quotes: Array<quote>;
}

function Home(props: HomeProps) {
  const { quotes } = props;

  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <HeaderCustom>Quote List 📝</HeaderCustom>
      <Divider />
      <QuoteList quotes={quotes} />
    </Stack>
  );
}
export async function getServerSideProps() {
  // get todo data from API
  const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
  const client = new MongoClient(url);
  const quotes: Array<quote> = [];

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

  // return props
  return {
    props: { quotes },
  };
}

export default Home;
