import { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "../../src/components/UI/Link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddQuote: NextPage = () => {
  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-helperText"
          label="Author"
          placeholder="Nasus"
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="Text quote"
          placeholder="“The sky was naught but dying stars.”"
          rows={4}
          multiline
          variant="standard"
        />
        <Button
          variant="text"
          sx={{ my: 2, color: "#white", display: "block" }}
        >
          <Link sx={{ color: "text.primary" }} href={"#"}>
            Add Quote
          </Link>
        </Button>
      </Box>
    </Stack>
  );
};

export default AddQuote;
