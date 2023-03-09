import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Settle,WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const breeds = ["Book"];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          id="location"
          value={location}
          placeholder="Location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {ANIMALS.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={breeds.length === 0}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
