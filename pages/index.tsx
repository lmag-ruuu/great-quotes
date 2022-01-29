import type { NextPage } from "next";
import { Stack, Divider } from "@mui/material";
import QuoteList from "../src/components/quote/QuoteList";
import HeaderCustom from "../src/components/UI/Header";

const Home: NextPage = () => {
  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <HeaderCustom>Quote List 📝</HeaderCustom>
      <Divider />
      <QuoteList QuoteList={DUMMY_QUOTES} />
    </Stack>
  );
};

export default Home;
