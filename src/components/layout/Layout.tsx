import { FC } from "react";
import { Stack, Container, Divider } from "@mui/material";
import NavBar from "../navigation/NavBar";
import Footer from "../footer/Footer";

const Layout: FC = (props) => {
  return (
    <Stack>
      <NavBar />
      <Container maxWidth="sm">{props.children}</Container>
      <Divider />
      <Footer />
    </Stack>
  );
};

export default Layout;
