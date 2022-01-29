import Form from "../../src/components/quoteForm/QuoteForm";
import { NextPage } from "next";

const AddQuote: NextPage = () => {
  console.log(process.env.MONGODB_URI);
  return <Form />;
};
export default AddQuote;
