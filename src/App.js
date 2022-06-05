import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Category from './Components/Categories';
import Products from './Components/Products';
// import SimpleCart from './Components/SimpleCart/SimpleCart';
import ActiveCat from './Components/Categories/CurrentCat';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <div>
       <ThemeProvider theme={darkTheme}>
       <Header/>
       {/* <SimpleCart/> */}
       <Category/>
       <ActiveCat/>
       <Products/>
      <Footer/>
       </ThemeProvider>
     
    </div>
  )
}

export default App
