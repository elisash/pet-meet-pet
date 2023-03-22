import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Card from "./Card";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Header from "./Header";
import MeetPet from "./MeetPet";
import ShopContainer from "./ShopContainer";

function App() {
  const [pets, setPets] = useState([])
  const arr = [];
  const priceArr = [];
  //form states
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [types, setTypes] = useState("");
  const [comments, setComment] = useState([]);
  //form states

  //filter state
  const [filterValue, setFilterValue] = useState('all')
  //filter state
  const url = 'http://localhost:3001/pets'
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setPets(data))
  }, [])

  function addLike(id, newData, currentLike){
    console.log(newData)
    fetch(`${url}/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newData)
    })
    const updatedArray = pets.map(pet => {
      if(pet.id === id) return {...pet, likes:currentLike}
      else return pet;
    }) 
    setPets(updatedArray)
  }

  function addComment(id, newData, comment){
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(newData)
    })
    const updatedArray = pets.map(pet => {
      if(pet.id === id) {
        return {...pet, comments: [...pet.comments, comment]}
      }
      else return pet;
    })
    setPets(updatedArray)
  }

  const newArray = pets.filter(pet => {
    if(filterValue === 'all') return pet
    else return pet.type === filterValue
  })

  const cardList = newArray.map(pet => {
    return <Card 
    key={pet.id} 
    pet={pet}
    addLike={addLike}
    addComment={addComment}
    />
  })

  function addPet(){
    const newData = {
      name: name,
      age: age,
      type: types,
      image: image,
      likes: 0,
      description: description,
      comments: comments
      
    }

    fetch(url, {
      method: "POST",
      headers: {
         "Content-Type" : "application/json"
      },
      body: JSON.stringify(newData)
    })
    .then(r => r.json())
    .then(() => setPets([...pets, newData]))
  }

  return (
    
     <div>
      <Header/>
      <NavBar />
     
       <Switch >
      <Route exact path="/">
      <HomePage 
        setName={setName}
        setImage={setImage}
        setAge={setAge}
        setDescription={setDescription}
        setTypes={setTypes}
        setComment={setComment}
        addPet={addPet}
        cardList={cardList}
        setFilterValue={setFilterValue}
        />
      </Route>
      <Route exact path="/meet pet">
        <MeetPet pets={pets} key={pets.id} />
      </Route>
      <Route path="/shop">
        <ShopContainer arr={arr} priceArr={priceArr} />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
