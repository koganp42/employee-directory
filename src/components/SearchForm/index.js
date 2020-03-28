import React, { useRef } from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => {
  const ageInput = useRef();

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          name="age"
          type="text"
          className="form-control"
          placeholder="Type in an age to filter by"
          id="age"
          onChange={props.handleAgeChange}
          ref={ageInput}
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
