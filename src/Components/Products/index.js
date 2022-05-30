import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { filterProducts } from '../../reducer/action';
import MediaCard from './Card';
import Stack from '@mui/material/Stack';
import './Card.scss';


const Product = (props) => {
useEffect(()=>{
  props.filterProducts(props.category.activeCategory.normalizedName,props.category.products);
   // eslint-disable-next-line react-hooks/exhaustive-deps
},[props.category.activeCategory])
  return (
    <div id='cards-container' className='containerCards'>
      {props.product.filterProducts.map((product,idx) => (
        
        <Stack direction="row" spacing={2} key={idx} >
          <MediaCard key={product.name} product={product} />
          </Stack>
       
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = { filterProducts };
export default connect(mapStateToProps, mapDispatchToProps)(Product);