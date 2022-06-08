import React from "react";
import { connect, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import "./Category.scss";
// import { selectCategory } from "../../reducer/action";
import * as actions from "../../reducer/action";

const Category = (props) => {
  const dispatch = useDispatch();
  // function onClickHandler(categoryNmae) {
  //   props.products.map(category=>{
  //     return(
  //       if(category.categoryAssociation)
  //       props.selectCategory(categoryNmae);
  //     )
  //   })
    
  // }
  return (
    <div>
      <h2 id="Category" className="font">
        <b>Select Desired Category:</b>
      </h2>
      <div className="category">
        <>
          <Button
            id="Button1"
            style={{ backgroundColor: "cadetblue", color: "white" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => props.get()}
          >
            ALL
          </Button>
          <Button
            id="Button2"
            style={{ backgroundColor: "cadetblue", color: "white" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => props.food()}
          >
            Food
          </Button>
          <Button
            id="Button3"
            style={{ backgroundColor: "cadetblue", color: "white" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => props.electronics()}
          >
            Electronics
          </Button>
        </>
        {/* {props.products.map((category,idx) => {
      // props.category.activeCategory
        return (
          <span key={idx} className="btnCat" 
          >
            <Button
              id="Button"
              variant="contained"
              className="catOnClick"
              style={{
                backgroundColor:  'salmon',
                color:'white',
              }}
              
              onClick={() => onClickHandler(category.categoryAssociation)}
            >
              {category.categoryAssociation}
            </Button>
           
          </span>
        );
      })} */}
      </div>

      {/* {props.activeCategory.normalizedName && <h2 className="font">Active Category : {props.activeCategory.normalizedName}</h2>}
    
    {props.activeCategory.normalizedName && <h4 id='desc' className="font"> {props.activeCategory.description}</h4>} */}
    </div>
  );
};
const mapStateToProps = (state) =>({
  products: state.category.products,
}) ;

const mapDispatchToProps = (dispatch, getState)=> ({
  get: () => dispatch(actions.getRemoteData()),
  food: () => dispatch(actions.getFood()),
  electronics: () => dispatch(actions.getElectronics()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
