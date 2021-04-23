import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <>
      <h1>Keg Details</h1>
      <h3>{props.name} by {props.brand}</h3>
      <p><bold>${props.price}</bold></p>
      <p> Alcohol Content: {props.alcoholContent}</p>
      <button onClick={ props.onClickingEdit }>Update the Brew</button>
      <button onClick={ ()=> onClickingDelete(keg.id) }>Remove a Brew</button>
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;