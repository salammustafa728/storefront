import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
// import SimpleCart from '../SimpleCart/SimpleCart';
import Grid from '@mui/material/Grid';


export default function Header() {
    return (
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static" style={{backgroundColor: "cadetblue"}} >
          <Toolbar variant="dense">
        <Grid container spacing={2}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Menu open={false} />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
            Store-Front App
            </Typography>
            </Grid>
            <Grid container spacing={2}>
            <Typography variant="h6" color="inherit" component="div">
            {/* <SimpleCart/> */}
            </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
