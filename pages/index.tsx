import type { NextPage } from "next";
import { Stack, Divider } from "@mui/material";
import QuoteList from "../src/components/quote/QuoteList";
import HeaderCustom from "../src/components/UI/Header";
import { quote } from "../utils/types";

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
  const res = await fetch(process.env.API_URL as string);
  const quotes = await res.json();

  // return props
  return {
    props: { quotes },
  };
}

export default Home;
