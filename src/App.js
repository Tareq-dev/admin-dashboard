import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Sidebar1 from "./scenes/global/SideMenu";
import Dashboard from "./scenes/dashboard/Dashboard";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./scenes/Team/Team";
import Contact from './scenes/global/Contact/Contact';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ProSidebarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar1 />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ProSidebarProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
