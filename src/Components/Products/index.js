import React from 'react'
import { connect } from 'react-redux';
import { filterProducts } from '../../reducer/action';
import MediaCard from './Card';
import Stack from '@mui/material/Stack';
import './Card.scss';
import { useSelector } from 'react-redux';

const Product = (props) => {
  const products = useSelector(state => state.products.products);

  return (
    <div id='cards-container' className='containerCards'>
      {  products.filter((category)=> category.category===props.category.activeCategory.normalizedName).map((product,idx) => (
        <Stack direction="row" spacing={2} key={idx} >
          <MediaCard key={product.name} product={product} />
          </Stack>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log({state});
  return state;
};
const mapDispatchToProps = { filterProducts };
export default connect(mapStateToProps, mapDispatchToProps)(Product);