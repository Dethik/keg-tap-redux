import React from "react";
import PropTypes from "prop-types";
import { Card } from 'react-bootstrap';

function Keg(props){
  return (
    <>
      <Card style={{ width: '18rem', margin: '20px' }}>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <Card.Header style={{color: 'purple', backgroundColor: 'cyan', textAlign: 'center'}}>
          <h3>{props.name} by {props.brand}</h3>
        </Card.Header>
        <Card.Body style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          <p><strong>${props.price}</strong> per Pint</p><br/>
          <p> Alcohol Content: {props.alcoholContent}</p><br/>
          <hr/>
        </Card.Body>
      </div>
      </Card>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;

// 124 pints per keg, if 10 or less notify ALMOST EMPTY, if 0 replace buy a pint with RESTOCK button to return to 124 pints.
// Add cards to hold each magnificent brew
// Add styling to page to resemble Karak Kadrin or Karaz-a-Karak