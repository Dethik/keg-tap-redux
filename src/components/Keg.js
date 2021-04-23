import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} by {props.brand}</h3>
        <p><bold>${props.price}</bold></p>
        <p> Alcohol Content: {props.alcoholContent}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;

// 124 pints per keg, if 10 or less notify ALMOST EMPTY, if 0 replace buy a pint with RESTOCK button to return to 124 pints.