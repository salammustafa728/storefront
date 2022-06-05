import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../../reducer/action";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import "./SimpleCart.scss";

export default function SimpleCart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  function deleteHandler(productName) {
    dispatch(deleteFromCart(productName));
  }
  return (
    <div id="simple-cart">
      <h2>Your Cart Content:</h2>
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
