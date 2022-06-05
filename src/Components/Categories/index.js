import React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import "./Category.scss";
// import { selectCategory } from "../../reducer/action";
import {getRemoteData,getFood,getflowers} from "../../reducer/action";

const Category = (props) => {
  // function onClickHandler(categoryNmae) {
  //   props.selectCategory(categoryNmae);
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
            onClick={() => props.getRemoteData()}
          >
            ALL
          </Button>
          <Button
            id="Button2"
            style={{ backgroundColor: "cadetblue", color: "white" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => props.getFood()}
          >
            Fruits
          </Button>
          <Button
            id="Button3"
            style={{ backgroundColor: "cadetblue", color: "white" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={() => props.getflowers()}
          >
            Flowers
          </Button>
        </>
        {/* {props.categories.map((category,idx) => {
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
              
              onClick={() => onClickHandler(category.normalizedName)}
            >
              {category.normalizedName}
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
const mapStateToProps = (state) => {
  return state;
};
// console.log(action.getRemoteData());
// console.log(action.getFood());
// console.log(action.getflowers());
const mapDispatchToProps = {getRemoteData,getFood,getflowers}
  // get: () => dispatch(action.getRemoteData()),
  // food: () => dispatch(action.getFood()),
  // flowers: () => dispatch(action.getflowers()),
// });
export default connect(mapStateToProps, mapDispatchToProps)(Category);
