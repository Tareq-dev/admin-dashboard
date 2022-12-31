import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Sidebar1 from "./scenes/global/SideMenu";
import Dashboard from "./scenes/dashboard/Dashboard";
import { ProSidebarProvider } from "react-pro-sidebar";
import Team from "./scenes/Team/Team";
import Bar from "./scenes/Bar/Bar";
import Pie from "./scenes/Pie/Pie";
import Line from "./scenes/Line/Line";
import Contact from "./scenes/Contact/Contact";
import Geo from "./scenes/Geo/Geo";

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
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/geography" element={<Geo />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ProSidebarProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
