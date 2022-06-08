import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { deleteFromCart } from "../../reducer/action";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import "./SimpleCart.scss";
import { connect } from "react-redux";
import * as actions from '../../reducer/action'

function SimpleCart(props) {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.cart);
  // function deleteHandler(productName) {
  //   dispatch(deleteFromCart(productName));
  // }
  const fetchData = (e) => {
    e && e.preventDefault();
    props.getCart();
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="simple-cart">
     
     <h2>Your Cart Content:</h2>
    {/* <p>  CART {props.cartCounter}</p> */}
    {console.log('cart>>>>  '+props.cart)}
      {props.cart.map((product, idx) => (
        <ListItemButton component="a" href="#simple-list" key={idx}>
          
           <br/>
          <p align="right" id="li">
            {" "}
            {product.displayName}
            <Button
              id="Button"
              variant="contained"
              style={{ backgroundColor: "cadetblue", color: "white" }}
              onClick={() => props.deleteFromCart(product)}
            >
              Delete
            </Button>{" "}
          </p>
          {/* <ListItemText primary={product} > <Button  id='Button'  variant="contained" style={{backgroundColor: "cadetblue", color:"white"}} onClick={() => deleteHandler(product)}>Delete</Button></ListItemText> */}
        </ListItemButton>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.cartItemsProducts,
  cartCounter: state.cart.cartCount
})


const mapDispatchToProps = (dispatch, getState) => ({
    getCart: () => dispatch(actions.getCart()),
    deleteFromCart: (product) => dispatch(actions.deleteFromCart(product)),
    addToCart: (product)=>dispatch(actions.addToCart(product))
  })

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);