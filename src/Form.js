import React, { useState } from "react";

function Form({ setName, setImage, setAge, setDescription, setTypes, addPet }) {
  const [isShow, setIsShow] = useState(true)
    function handleClick(e){
        e.preventDefault();
        addPet()
    }

  return (
<div>
  <button className={isShow ? 'not-moved' : 'moved'}  onClick={() => setIsShow(!isShow)} >{isShow ?"⬅️" :"➡️"}</button>
    <div className={isShow ? "form-hide" : "form-show"}>
      <form className="form" onSubmit={handleClick}>
        <h1 className="form-title">Registration Form</h1>
        <input onChange={(e)=> setName(e.target.value)} className= "form-input" placeholder="Name"></input> 
        <input onChange={(e)=> setImage(e.target.value)} className="form-input" placeholder="Image URL"></input>
        <input onChange={(e)=> setAge(e.target.value)}  className="form-input" placeholder="How old are you?"></input> 
        <textarea onChange={(e) => setDescription(e.target.value)}  className="form-input" placeholder="Describe yourself" rows="7" cols="30" /> 
        <select onChange={(e) => setTypes(e.target.value)} className="drop-down">
          <option value="N/A">N/A</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="parrot">Parrot</option>
          <option value="rabbit">Rabbit</option>
        </select> 
        <br/>
      <input className="btnInput" type="submit" />
      </form>  
    </div>
   </div>
  );
}

export default Form;
