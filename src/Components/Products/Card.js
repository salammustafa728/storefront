import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.scss";
import { addToCart } from "../../reducer/action";
// import { decrementInventory } from "../../reducer/action";
import { useDispatch } from "react-redux";
//,useSelector
export default function MediaCard(props) {
  // const decrementInventory = props;
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function addToCartHandler(productName) {
    // if (!state.cart.cartItemsProducts.includes(productName)) {
      props.product.inventoryCount--;
      dispatch(addToCart(productName));
    // }
  }

  return (
  
    <Card sx={{ maxWidth: 345 }} className="cardStyle">
      <CardMedia
        component="img"
        height="140"
        image={props.product.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          Price : {props.product.price}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          Availability : {props.product.inventoryCount} pieces
        </Typography>
      </CardContent>
      <CardActions>
        {props.product.inventoryCount>0?
        <Button
        style={{ backgroundColor: "cadetblue", color: "white" }}
        id="addButton"
        variant="contained"
        color="primary"
        onClick={() => 
          {
              addToCartHandler(props.product.name)
              // decrementInventory(props.idx)
          }  
        }
      >
        Add To Cart
      </Button> : <Button variant="outlined" color="error">Sold out</Button>
      } 
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    
  );
}
