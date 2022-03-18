import { AppBar, Button, Switch, Toolbar, Typography } from "@mui/material";

type Props = {
  dark: boolean;
  switchTheme: () => void;
};

const Header = ({ dark, switchTheme }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-Store</Typography>
        <Switch onChange={switchTheme} checked={dark}></Switch>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
