import React from 'react';

const SortingOptions = ({ onSortChange }) => {
  return (
    <div>
      <label>Sort By:</label>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
};

export default SortingOptions;
