import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as actions from "../../reducer/action";
import { connect } from "react-redux";

const Checkout = (props) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.displayName}
                </TableCell>
                <TableCell align="right">{item.createdAt}</TableCell>
                <TableCell align="right">{item.updatedAt}</TableCell>
                <TableCell align="right">
                  {item.price * item.inventoryCount}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      actions.deleteFromCart(item);
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h4" gutterBottom>
        Total: $ {props.total}
      </Typography>
    </div>
  );
};
const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  getById: () => dispatch(actions.getRemoteDataById()),
  deleteFromCart: (product) => dispatch(actions.deleteFromCart(product)),
});

const mapStateToProps = (state) => ({
  cart: state.cart.cartItemsProducts,
  cartCounter: state.cart.cartCount,
  total:state.cart.totall
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
