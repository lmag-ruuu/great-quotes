import { FC } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack, Typography } from "@mui/material";
import Link from "../UI/Link";

const Footer: FC = () => {
  return (
    <Stack spacing={2} direction={"row"} alignSelf={"center"} mt={4}>
      <Typography>See on</Typography>
      <Link href={"https://github.com/lmag-ruuu"}>
        <GitHubIcon />
      </Link>
    </Stack>
  );
};

export default Footer;
