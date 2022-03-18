import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Catalog from "../../feature/catalog/Catalog";
import Header from "./Header";

function App() {
  const [dark, setDark] = useState(false);
  const paletteType = dark ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  const switchTheme = () => {
    setDark(!dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header dark={dark} switchTheme={switchTheme} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
