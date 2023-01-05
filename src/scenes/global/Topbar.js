import React, { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ColorModeContext } from "./../../theme";
import { useProSidebar } from "react-pro-sidebar";
import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationAddOutlined,
  PersonOutline,
  MenuOutlined,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";

function Topbar() {
  const { toggleSidebar } = useProSidebar();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <IconButton sx={{ p: 0 }} onClick={() => toggleSidebar()}>
        <MenuOutlined sx={{fontSize:"35px"}} />
      </IconButton>
      <Box
        className="mobile-search-bar"
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationAddOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
