import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Pair Names' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price 00.00' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='alcoholContent' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string
};

export default ReusableForm;