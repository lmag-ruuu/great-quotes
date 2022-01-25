import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "../UI/Link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC } from "react";

const Form: FC = () => {
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
        <Button variant="text" sx={{ my: 2, color: "#333", display: "block" }}>
          Add Quote
        </Button>
      </Box>
    </Stack>
  );
};

export default Form;
