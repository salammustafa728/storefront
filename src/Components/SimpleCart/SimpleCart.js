import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../reducer/action";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import "./SimpleCart.scss";
import { connect } from "react-redux";
import * as actions from '../../reducer/action'

function SimpleCart(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  function deleteHandler(productName) {
    dispatch(deleteFromCart(productName));
  }
  const fetchData = (e) => {
    e && e.preventDefault();
    // props.getCart();
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id="simple-cart">
      {/* <h2>Your Cart Content:</h2> */}

    <p>  CART {props.cart.cartCounter}</p>
      {state.cartItemsProducts.map((product, idx) => (
        <ListItemButton component="a" href="#simple-list" key={idx}>
          <p align="right" id="li">
            {" "}
            {product}
            <Button
              id="Button"
              variant="contained"
              style={{ backgroundColor: "cadetblue", color: "white" }}
              onClick={() => deleteHandler(product)}
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
  cart: state.cartItemsProducts,
  cartCounter: state.cartCount
})


const mapDispatchToProps = (dispatch, getState) => ({
    // getCart: () => dispatch(actions.getCartData()),
    // removeFromCart: (id, product) => dispatch(actions.deleteCartItem(id, product))
  })

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);