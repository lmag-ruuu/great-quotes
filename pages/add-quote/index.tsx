import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC, useRef, FormEventHandler } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";

const AddQuote: FC = () => {
  const authorRef = useRef<HTMLFormElement | null>(null);
  const textRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      authorRef.current &&
      textRef.current &&
      authorRef.current.value.trim() !== "" &&
      textRef.current.value.trim() !== ""
    ) {
      const quote = {
        author: authorRef?.current.value,
        text: textRef?.current.value,
        comments: [],
      };

      console.log(quote);

      await fetch("/api/quotes", {
        method: "post",
        body: JSON.stringify(quote),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/");

      textRef.current.value = "";
      authorRef.current.value = "";
    }
  };

  return (
    <Stack spacing={2} direction={"column"} mb={2}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" color="text.primary" fontWeight={"bold"}>
          Add a great quote
        </Typography>
        <TextField
          id="standard-helperText"
          label="Author"
          placeholder="Nasus"
          variant="standard"
          inputRef={authorRef}
        />
        <TextField
          id="standard-textarea"
          label="Text quote"
          placeholder="“The sky was naught but dying stars.”"
          rows={4}
          multiline
          variant="standard"
          inputRef={textRef}
        />
        <Button
          type="submit"
          variant="text"
          sx={{ my: 2, color: "#333", display: "block" }}
        >
          Add Quote
        </Button>
      </Box>
    </Stack>
  );
};

export default AddQuote;
