import React from 'react';
import AppBar from '@mui/material/AppBar';

export default function Footer() {
  return (
    <>
      <ButtonAppBar />
    </>
  );
}

function ButtonAppBar() {

  return (
    <div id='footer'>
      <AppBar style={{backgroundColor: "cadetblue"}} id='nav-bar' position='static'>
          <h4>All Rights reserved &copy; Salam Mustafa 2022</h4>
      </AppBar>
    </div>
  );
}