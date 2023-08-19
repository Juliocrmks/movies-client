import "./App.css";
import Picker from "./pages/picker";
import Bracket from "./pages/Bracket";


import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Paper } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ flexGrow: 1 }}>
        <Paper>
          <Picker />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
