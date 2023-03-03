import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { useNavigate } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';

export default function MenuAppBar() {
  
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNested, setOpenNested] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null); 
  
  const clickLeftMenu = event => {
    setOpenNested(false);
    setAnchorEl2(event.currentTarget);
  };

  /* routePaths are defined in App.js */
  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickLeftMenu}
          >
            <MenuIcon />
          </IconButton>


          {/* Left hand side */}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {setAnchorEl2(null);setOpenNested(true);}}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={() => redirectRoute("DartsLeague/")}>
                  <ListItemText primary="Standings" />
                </ListItemButton>
                <ListItemButton onClick={() => redirectRoute("DartsLeague/Results")}>
                  <ListItemText primary="Event Results" />
                </ListItemButton>
                <ListItemButton  onClick={() => redirectRoute("DartsLeague/Games")}>
                  <ListItemText primary="Game Results" />
                </ListItemButton>
              </List>
          </Menu>

          <Typography variant="h6" component="div">
            Keller Liga
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}