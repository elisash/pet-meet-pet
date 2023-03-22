import React, { useState } from "react";


function FilterBtns({ setFilterValue }) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="filter-buttons">
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='all' >All</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value="dog">Dogs</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='cat'>Cats</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='parrot'>Parrots</button>
      <button className="filter-btn"  onClick={(e) => setFilterValue(e.target.value)} value='rabbit'>Rabbits</button>
    </div>
  );
}

export default FilterBtns;
