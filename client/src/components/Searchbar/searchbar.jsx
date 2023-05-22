import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../redux/actions";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSearch = () => {
    dispatch(searchPokemon(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Searchbar