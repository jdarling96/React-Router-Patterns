import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const found = dogs.find((dog) => dog.name === name);

  return (
    <div>
      <h1>{found.name}</h1>
      <h2>{found.age}</h2>
      <img src={found.src} alt={found.name} />
      <ul>
        {found.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;
