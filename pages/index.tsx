import type { NextPage } from "next";
import { Stack, Typography, Divider } from "@mui/material";
import QuoteList from "../src/components/quote/QuoteList";

export const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Isac El Guapos",
    text: "Estoy hasta la puta madre de vivir en vzla, primera cita",
  },
  {
    id: "q2",
    author: "Yo mismo soy",
    text: "Me cago en Juan Pablo, segunda cita",
  },
  {
    id: "q3",
    author: "Ruben",
    text: "A donde tan peinada, tercera cita",
  },
  {
    id: "q4",
    author: "Ruben",
    text: "Hola sexo, cuarta cita",
  },
];

const Home: NextPage = () => {
  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <Typography>Quote List</Typography>
      <Divider />
      <QuoteList QuoteList={DUMMY_QUOTES} />
    </Stack>
  );
};

export default Home;
