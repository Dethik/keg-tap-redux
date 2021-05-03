import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component {


  handleClick = () => {
    if (this.props.selectedKeg.name !== undefined) {
      const { dispatch } = this.props;
      const action = a.unselectKeg()
      dispatch(action)
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, pints, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const keg = this.props.masterKegList[id];
    const { dispatch } = this.props;
    const action = a.selectedKeg(keg);
    dispatch(action);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id)
    dispatch(action);
    const action2 = a.unselectKeg()
    dispatch(action2);
  }

  handleRestockingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.restockKeg(id);
    dispatch(action);
  }

  handleBuyingPint = (id) => {
    const { dispatch } = this.props;
    const action = a.buyPint(id);
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.selectedKeg.name !== undefined) {
      const displayedKeg = this.props.selectedKeg.id
      currentlyVisibleState = <KegDetail keg={this.props.masterKegList[displayedKeg]}
        onClickingDelete={this.handleDeletingKeg}
        onClickingBuy={this.handleBuyingPint}
        onClickingRestock={this.handleRestockingKeg} />
        buttonText = "Return to Keg List"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>;
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList
      kegList={this.props.masterKegList}
      onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg"
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    formVisibleOnPage: state.formVisibleOnPage,
  }
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;