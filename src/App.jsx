import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import {Box, Stack, ThemeProvider, createTheme} from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import {useState} from "react";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    pallete: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"space-between"}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
