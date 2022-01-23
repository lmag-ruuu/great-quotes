import { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const QuoteDetail: NextPage = () => {
  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <Typography>Aqui va detalles del quote</Typography>
    </Stack>
  );
};

export default QuoteDetail;
