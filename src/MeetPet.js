import React, { useState, useEffect } from "react";
function MeetPet({ pets }) {
  const url = "http://localhost:3001/pets";
  const [lastPet, setLastPet] = useState({});
  const [randomPet, setRandomPet] = useState({});
  const [isLoader, setIsLoader] = useState(false)
    useEffect(() => {
        fetch(`${url}/${pets.length}`)
        .then((r) => r.json())
        .then((data) => setLastPet(data));
    }, [])
  function generate() {
    setTimeout(() => {
      const firstId = Math.floor(Math.random() * (pets.length - 1)) + 1;
      fetch(`${url}/${firstId}`)
        .then((r) => r.json())
        .then((data) => setRandomPet(data));
    }, 3000)
    setIsLoader(true)
    setTimeout(() => {
      setIsLoader(false)
    }, 3000)
  }
  return (
    <div>
        <div className="card-container">
        <div className="container">
        <img className="meet-image" src={lastPet.image}/>
        <h1 className="meet-name">{lastPet.name}</h1>
        <p className="meet"><strong>Age:</strong> {lastPet.age}</p>
        <p className="meet"><strong>Description:</strong> {lastPet.description}</p>
      </div>
      <div className={isLoader ? "loader-show" : "loader-hide"}></div>
      <p className={isLoader ? "show-loading-text" : "hide-loading-text"}  >Looking for a match...</p>
      <div className="container">
        <img className="meet-image" src={randomPet.image} alt="Image of a cute pet is unavailable ☹️" />
        <h1 className="meet-name">{randomPet.name}</h1>
        <p className="meet"><strong>Age:</strong> {randomPet.age}</p>
        <p className="meet"><strong>Description:</strong> {randomPet.description}</p>
      </div>
        </div>
        <div className="btn-container">
            <button onClick={generate} className="generate-btn">Find Match</button>
        </div>
    </div>
  );
}
export default MeetPet;



























// import React, { useState, useEffect } from "react";

// function MeetPet({ pets }) {
//   const url = "http://localhost:3001/pets";
//   const [lastPet, setLastPet] = useState({});
//   const [randomPet, setRandomPet] = useState({});

//     useEffect(() => {
//         fetch(`${url}/${pets.length}`)
//         .then((r) => r.json())
//         .then((data) => setLastPet(data));
//     }, [])

//   function generate() {
//     const firstId = Math.floor(Math.random() * (pets.length - 1)) + 1;
//     fetch(`${url}/${firstId}`)
//       .then((r) => r.json())
//       .then((data) => setRandomPet(data));
//   }

//   return (
//     <div>
//         <div className="card-container">
//         <div className="container">
//         <img className="meet-image" src={lastPet.image} />
//         <h1 className="meet-name">{lastPet.name}</h1>
//         <p className="meet"><strong>Age:</strong> {lastPet.age}</p>
//         <p className="meet"><strong>Description:</strong> {lastPet.description}</p>
//       </div>

//       <div className="container">
//         <img className="meet-image" src={randomPet.image} />
//         <h1 className="meet-name">{randomPet.name}</h1>
//         <p className="meet"><strong>Age:</strong> {randomPet.age}</p>
//         <p className="meet"><strong>Description:</strong> {randomPet.description}</p>
//       </div>
//         </div>
//         <div className="btn-container">
//             <button onClick={generate} className="generate-btn"  >Click</button>
//         </div>
//     </div>
//   );
// }

// export default MeetPet;
