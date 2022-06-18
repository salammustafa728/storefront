import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Category from './Components/Categories';
import Products from './Components/Products';
import SimpleCart from './Components/SimpleCart/SimpleCart';
import ActiveCat from './Components/Categories/CurrentCat';
import { Routes, Route } from 'react-router-dom';
import Detalis from './Components/ProductsDetails/Detalis';
import Checkout from './Components/SimpleCart/Checkout';

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
       <Routes>
        <Route path='/' element={
        <div>
           <SimpleCart/>
       <Category/>
       <ActiveCat/>
       <Products/>
        </div>
        } />
        <Route path='/product/:id' element={<Detalis />} />
        <Route path='/cart' element={<Checkout />} />
      </Routes>
      
      <Footer/>
       </ThemeProvider>
     
    </div>
  )
}

export default App
