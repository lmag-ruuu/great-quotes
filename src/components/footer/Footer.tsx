import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack, Typography } from "@mui/material";
import Link from "../UI/Link";

const Footer: FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={3}
    >
      <Typography>See on</Typography>
      <Link href={"https://github.com/lmag-ruuu/great-quotes"}>
        <GitHubIcon />
      </Link>
    </Stack>
  );
};

export default Footer;
