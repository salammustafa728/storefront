import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../reducer/action";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
// import { useParams } from "react-router-dom";

const Detalis = (props) => {
    // const { id } = useParams();
  // const [product, setProduct] = useState(null);
  // const fetchData = (e) => {
  //     e && e.preventDefault();
  //     props.get();
  //   }

  useEffect(() => {
    props.get();
  }, [props]);
  // useEffect(() => {
  //   setProduct(props.products.find((product) => product.id === parseInt(id)));
  // }, [props.products,id]);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {
          props.cart.map((item,idx)=>{
            return(
              <Card sx={{ maxWidth: 345 }} className="cardStyle" key={idx}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="image not found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
            <Typography gutterBottom variant="h6" component="h6">
              Price : {item.price}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              Availability : {item.inventoryCount} pieces
            </Typography>
          </CardContent>
          <CardActions>
            
          {item.inventoryCount > 0 ? (
              <Button
                style={{ backgroundColor: "cadetblue", color: "white" }}
                id="addButton"
                variant="contained"
                color="primary"
                onClick={() => {props.addToCartHandler(item)}}
              >
                Add To Cart
              </Button>
            ) : (
              <Button variant="outlined" color="error">
                Sold out
              </Button>
            )}
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
            )
          })
        }
        
        {/* <MediaCard key={product.name} product={product} idx={idx} /> */}
      </Stack>
    </div>
  );
};
const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(actions.getRemoteData()),
  getById: () => dispatch(actions.getRemoteDataById()),
  addToCartHandler: (product) => dispatch(actions.addToCart(product)),
});

const mapStateToProps = (state) => ({
  products: state.category.products,
  cart: state.cart.cartItemsProducts,
});
export default connect(mapStateToProps, mapDispatchToProps)(Detalis);
// export default Detalis
