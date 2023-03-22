import React from "react";
import FilterBtns from "./FilterBtns";
import CardContainer from "./CardContainer";
import Form from "./Form";
import Intro from "./Intro"

function HomePage({ setName, setImage, setAge, setDescription, setTypes, addPet, cardList, setFilterValue }) {
  return (
    <div>
      <Intro/>
      <FilterBtns setFilterValue={setFilterValue} />
      <CardContainer cardList={cardList} />
      <Form
        setName={setName}
        setImage={setImage}
        setAge={setAge}
        setDescription={setDescription}
        setTypes={setTypes}
        addPet={addPet}
      />
    </div>
  );
}

export default HomePage;
