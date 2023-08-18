import PropTypes from "prop-types";
import React from "react";

const SearchInput = ({ textChange }) => {
  const handleChange = (event) => {
    textChange(event);
  };

  return (
    <div className="component-search-input my-4">
      <input className="form-control" onChange={handleChange} />
    </div>
  );
};

SearchInput.propTypes = {
  textChange: PropTypes.func
};

export default SearchInput;
