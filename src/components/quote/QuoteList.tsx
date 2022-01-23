import { FC } from "react";
import QuoteItem from "./QuoteItem";

type QuoteList = {
  id: string;
  author: string;
  text: string;
}[];

const QuoteList: FC<{ QuoteList: QuoteList }> = (props) => {
  return (
    <>
      {props.QuoteList.map((quote) => {
        return <QuoteItem Quote={quote} key={quote.id} />;
      })}
    </>
  );
};

export default QuoteList;
