import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, AnimalDropdown] = useDropdown("animals", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div id="search-params" className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="Location">
          Location
          <input
            type="text"
            placeholder="Location"
            id="location"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
