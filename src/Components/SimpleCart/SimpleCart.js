import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { deleteFromCart } from "../../reducer/action";
import Button from "@mui/material/Button";
// import ListItemButton from "@mui/material/ListItemButton";
import "./SimpleCart.scss";
import { connect } from "react-redux";
import * as actions from "../../reducer/action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function SimpleCart(props) {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.cart);
  // function deleteHandler(productName) {
  //   dispatch(deleteFromCart(productName));
  // }
  const fetchData = (e) => {
    e && e.preventDefault();
    props.getCart();
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="simple-cart">
      <h2 className="font">Your Cart Content:</h2>
      {/* <p>  CART {props.cartCounter}</p> */}
      <div className="conta">
        {props.cart.map((product, idx) => (
          <TableContainer component={Paper} key={idx}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="font2" align="left">
                    Product Name: {product.displayName}
                  </TableCell>
                  <TableCell className="font2" align="left">
                    <Button
                      id="Button"
                      variant="contained"
                      style={{ backgroundColor: "cadetblue", color: "white" }}
                      onClick={() => props.deleteFromCart(product)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell className="font2" align="right">
                    Total: {props.total}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.cartItemsProducts,
  cartCounter: state.cart.cartCount,
  total: state.cart.total,
});

const mapDispatchToProps = (dispatch, getState) => ({
  getCart: () => dispatch(actions.getCart()),
  deleteFromCart: (product) => dispatch(actions.deleteFromCart(product)),
  addToCart: (product) => dispatch(actions.addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
