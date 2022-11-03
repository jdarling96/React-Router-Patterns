import React from "react";

const DogList = ({ dogs }) => {
  return (
    <main>
      {dogs.map((dog) => (
        <div key={dog.name}>
          <h1>{dog.name}</h1>
          <h2>{dog.age}</h2>
          <img src={dog.src} alt={dog.name} />
          <ul>
            {dog.facts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default DogList;
