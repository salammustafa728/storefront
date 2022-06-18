import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { filterProducts } from "../../reducer/action";
import * as actions from "../../reducer/action";
// import MediaCard from "./Card";
import Stack from "@mui/material/Stack";
import "./Card.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Detalis from "../ProductsDetails/Detalis";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { decrementInventory } from "../../reducer/action";
// import * as actions from "../../reducer/action";

const Product = (props) => {
  // const dispatch = useDispatch();
  // function addToCartHandler(productName) {
  // if (!state.cart.cartItemsProducts.includes(productName)) {
  // props.product.inventoryCount--;
  // dispatch(addToCart(productName));
  // }
  // }
  // const state = useSelector((state) => state.categories);
  // console.log({state});
  // const decrementInventory = props;
  const fetchData = (e) => {
    e && e.preventDefault();
    props.get();
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="cards-container" className="containerCards">
      {/* {console.log("categories>>>> "+props.categories)} */}
      {props.products
        // .filter(
        //   (category) =>
        //   // console.log(category.categoryAssociation)
        //    category.categoryAssociation === props.products.category
        // )
        .map((product, idx) => (
          <Stack direction="row" spacing={2} key={idx} className="cardStyle">
            <Card sx={{  width: 400, height: 350 }} className="cardSty">
              <CardMedia
                className="prodimg"
                component="img"
                height="140"
                image={product.image}
                alt="image not found"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                  Price : {product.price}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                  Availability : {product.inventoryCount} pieces
                </Typography>
              </CardContent>
              <CardActions>
                {product.inventoryCount > 0 ? (
                  <Button
                    style={{ backgroundColor: "cadetblue", color: "white" }}
                    id="addButton"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      props.addToCartHandler(product);
                    }}
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <Button variant="outlined" color="error">
                    Sold out
                  </Button>
                )}
                <Link to={`/product/${idx}`}>
                  <Button size="small">More Details</Button>
                </Link>
              </CardActions>
            </Card>
            {/* <MediaCard key={product.name} product={product} idx={idx} /> */}
          </Stack>
        ))}
    </div>
  );
};
const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  getById: () => dispatch(actions.getRemoteDataById()),
  addToCartHandler: (product) => dispatch(actions.addToCart(product)),
});

const mapStateToProps = (state) => ({
  // categories:state.category.categories,
  products: state.category.products,
  activeCategory: state.category.activeCategory,
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
