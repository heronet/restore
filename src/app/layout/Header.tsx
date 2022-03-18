import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import "./header.css";
type Props = {
  dark: boolean;
  switchTheme: () => void;
};

const Header = ({ dark, switchTheme }: Props) => {
  return (
    <AppBar position="sticky" sx={{ mb: 4 }} className="header">
      <Toolbar>
        <Typography variant="h6">RE-Store</Typography>
        <Switch onChange={switchTheme} checked={dark}></Switch>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
