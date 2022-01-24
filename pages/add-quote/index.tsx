import { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const AddQuote: NextPage = () => {
  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <TextField
        id="standard-textarea"
        label="Text quote"
        placeholder="Placeholder"
        rows={4}
        multiline
        variant="standard"
      />
    </Stack>
  );
};

export default AddQuote;
