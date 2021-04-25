import React from "react";
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: event.target.pints = keg.pints, id: keg.id})
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update the Brew" />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;