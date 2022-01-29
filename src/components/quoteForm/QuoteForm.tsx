import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FC, useRef, FormEventHandler } from "react";
import { useRouter } from "next/router";

const Form: FC = () => {
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

      await fetch(`/api/quotes`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quote),
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

export default Form;
