import React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import './Category.scss';
import { selectCategory } from "../../reducer/action";

const Category = (props) => {
   
  function onClickHandler(categoryNmae) {
    props.selectCategory(categoryNmae);
  }
  return (
    <div>

      <h2 id="Category" className="font">
        <b>Select Desired Category:</b>
      </h2>
    <div className='category'>
    {props.categories.map((category,idx) => {
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
      })}
    </div>
    
       {props.activeCategory.normalizedName && <h2 className="font">Active Category : {props.activeCategory.normalizedName}</h2>}
    
    {props.activeCategory.normalizedName && <h4 id='desc' className="font"> {props.activeCategory.description}</h4>}
    </div>
  );
};
const mapStateToProps  = state =>{
    return state.category;
}
const mapDispatchToProps = {selectCategory};

export default connect(mapStateToProps,mapDispatchToProps)(Category);


