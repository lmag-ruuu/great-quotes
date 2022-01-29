import { FC } from "react";
import { Stack, Container, Divider } from "@mui/material";
import NavBar from "../navigation/NavBar";
import Footer from "../footer/Footer";
import { height } from "@mui/system";

const Layout: FC = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "#e3fafc",
        borderRadius: "8px",
        padding: "28px",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Stack
        mt={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {props.children}
      </Stack>
      <Divider />
      <Footer />
    </Container>
  );
};

export default Layout;
