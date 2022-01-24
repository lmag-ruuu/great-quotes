import { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";

type Props = {
  children: ReactNode;
};

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const HeaderCustom: FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default HeaderCustom;
