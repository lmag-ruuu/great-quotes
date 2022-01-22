import type { NextPage } from "next";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <Stack spacing={2} direction="row" p={12}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
};

export default Home;
