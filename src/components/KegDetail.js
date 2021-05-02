import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  return (
    <>
      <Card>
        <h1>Keg Details</h1>
        <Card.Header style={{textAlign: 'center'}}>
          <h3>{keg.name} by {keg.brand}</h3>
        </Card.Header>
        <p><strong>${keg.price}</strong></p>
        <p> Alcohol Content: {keg.alcoholContent}</p>
        { keg.pints > 0 &&
          <p>{keg.pints} Remain in this keg</p>
        }
        { keg.pints > 0 &&
          <button onClick={ ()=> onClickingBuy(keg.id) }>Buy</button>
        }
        { keg.pints === 0 &&
          <h3>Keg is empty!</h3>
        }
        { keg.pints === 0 &&
          <button onClick={ ()=> onClickingRestock(keg.id) }>Restock</button>
        }
        <button onClick={ props.onClickingEdit }>Update the Brew</button>
        <button onClick={ ()=> onClickingDelete(keg.id) }>Remove a Brew</button>
        <hr/>
      </Card>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default KegDetail;